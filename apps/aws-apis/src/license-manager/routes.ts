import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const LicenseCountingTypeSchema = z
  .enum(['vCPU', 'Instance', 'Core', 'Socket'])
  .openapi('LicenseCountingType')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const BoxLongSchema = z.int().openapi('BoxLong')

const BoxBooleanSchema = z.boolean().openapi('BoxBoolean')

const ResourceTypeSchema = z
  .enum(['EC2_INSTANCE', 'EC2_HOST', 'EC2_AMI', 'RDS', 'SYSTEMS_MANAGER_MANAGED_INSTANCE'])
  .openapi('ResourceType')

const ConsumedLicenseSummarySchema = z
  .object({
    ResourceType: ResourceTypeSchema.exactOptional().openapi({
      description: 'Resource type of the resource consuming a license.',
    }),
    ConsumedLicenses: BoxLongSchema.exactOptional().openapi({
      description: 'Number of licenses consumed by the resource.',
    }),
  })
  .openapi({ description: 'Details about license consumption.', required: [] })
  .openapi('ConsumedLicenseSummary')

const ConsumedLicenseSummaryListSchema = z
  .array(ConsumedLicenseSummarySchema)
  .openapi('ConsumedLicenseSummaryList')

const ManagedResourceSummarySchema = z
  .object({
    ResourceType: ResourceTypeSchema.exactOptional().openapi({
      description: 'Type of resource associated with a license.',
    }),
    AssociationCount: BoxLongSchema.exactOptional().openapi({
      description: 'Number of resources associated with licenses.',
    }),
  })
  .openapi({ description: 'Summary information about a managed resource.', required: [] })
  .openapi('ManagedResourceSummary')

const ManagedResourceSummaryListSchema = z
  .array(ManagedResourceSummarySchema)
  .openapi('ManagedResourceSummaryList')

const ProductInformationFilterSchema = z
  .object({
    ProductInformationFilterName: StringSchema.openapi({ description: 'Filter name.' }),
    ProductInformationFilterValue: StringListSchema.exactOptional().openapi({
      description: 'Filter value.',
    }),
    ProductInformationFilterComparator: StringSchema.openapi({ description: 'Logical operator.' }),
  })
  .openapi({
    required: ['ProductInformationFilterName', 'ProductInformationFilterComparator'],
    description: 'Describes product information filters.',
  })
  .openapi('ProductInformationFilter')

const ProductInformationFilterListSchema = z
  .array(ProductInformationFilterSchema)
  .openapi('ProductInformationFilterList')

const ProductInformationSchema = z
  .object({
    ResourceType: StringSchema.openapi({
      description:
        'Resource type. The possible values are <code>SSM_MANAGED</code> | <code>RDS</code>.',
    }),
    ProductInformationFilterList: ProductInformationFilterListSchema.openapi({
      description:
        '<p>A Product information filter consists of a <code>ProductInformationFilterComparator</code> which is a logical operator, a <code>ProductInformationFilterName</code> which specifies the type of filter being declared, and a <code>ProductInformationFilterValue</code> that specifies the value to filter on. </p> <p>Accepted values for <code>ProductInformationFilterName</code> are listed here along with descriptions and valid options for <code>ProductInformationFilterComparator</code>. </p> <p>The following filters and are supported when the resource type is <code>SSM_MANAGED</code>:</p> <ul> <li> <p> <code>Application Name</code> - The name of the application. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Application Publisher</code> - The publisher of the application. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Application Version</code> - The version of the application. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Platform Name</code> - The name of the platform. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Platform Type</code> - The platform type. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Tag:key</code> - The key of a tag attached to an Amazon Web Services resource you wish to exclude from automated discovery. Logical operator is <code>NOT_EQUALS</code>. The key for your tag must be appended to <code>Tag:</code> following the example: <code>Tag:name-of-your-key</code>. <code>ProductInformationFilterValue</code> is optional if you are not using values for the key. </p> </li> <li> <p> <code>AccountId</code> - The 12-digit ID of an Amazon Web Services account you wish to exclude from automated discovery. Logical operator is <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>License Included</code> - The type of license included. Logical operators are <code>EQUALS</code> and <code>NOT_EQUALS</code>. Possible values are: <code>sql-server-enterprise</code> | <code>sql-server-standard</code> | <code>sql-server-web</code> | <code>windows-server-datacenter</code>.</p> </li> </ul> <p>The following filters and logical operators are supported when the resource type is <code>RDS</code>:</p> <ul> <li> <p> <code>Engine Edition</code> - The edition of the database engine. Logical operator is <code>EQUALS</code>. Possible values are: <code>oracle-ee</code> | <code>oracle-se</code> | <code>oracle-se1</code> | <code>oracle-se2</code>.</p> </li> <li> <p> <code>License Pack</code> - The license pack. Logical operator is <code>EQUALS</code>. Possible values are: <code>data guard</code> | <code>diagnostic pack sqlt</code> | <code>tuning pack sqlt</code> | <code>ols</code> | <code>olap</code>.</p> </li> </ul>',
    }),
  })
  .openapi({
    required: ['ResourceType', 'ProductInformationFilterList'],
    description: 'Describes product information for a license configuration.',
  })
  .openapi('ProductInformation')

const ProductInformationListSchema = z
  .array(ProductInformationSchema)
  .openapi('ProductInformationList')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const AutomatedDiscoveryInformationSchema = z
  .object({
    LastRunTime: DateTimeSchema.exactOptional().openapi({
      description: 'Time that automated discovery last ran.',
    }),
  })
  .openapi({ description: 'Describes automated discovery.', required: [] })
  .openapi('AutomatedDiscoveryInformation')

const LicenseConfigurationSchema = z
  .object({
    LicenseConfigurationId: StringSchema.exactOptional().openapi({
      description: 'Unique ID of the license configuration.',
    }),
    LicenseConfigurationArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'Name of the license configuration.',
    }),
    Description: StringSchema.exactOptional().openapi({
      description: 'Description of the license configuration.',
    }),
    LicenseCountingType: LicenseCountingTypeSchema.exactOptional().openapi({
      description: 'Dimension to use to track the license inventory.',
    }),
    LicenseRules: StringListSchema.exactOptional().openapi({ description: 'License rules.' }),
    LicenseCount: BoxLongSchema.exactOptional().openapi({
      description: 'Number of licenses managed by the license configuration.',
    }),
    LicenseCountHardLimit: BoxBooleanSchema.exactOptional().openapi({
      description: 'Number of available licenses as a hard limit.',
    }),
    DisassociateWhenNotFound: BoxBooleanSchema.exactOptional().openapi({
      description: 'When true, disassociates a resource when software is uninstalled.',
    }),
    ConsumedLicenses: BoxLongSchema.exactOptional().openapi({
      description: 'Number of licenses consumed. ',
    }),
    Status: StringSchema.exactOptional().openapi({
      description: 'Status of the license configuration.',
    }),
    OwnerAccountId: StringSchema.exactOptional().openapi({
      description: "Account ID of the license configuration's owner.",
    }),
    ConsumedLicenseSummaryList: ConsumedLicenseSummaryListSchema.exactOptional().openapi({
      description: 'Summaries for licenses consumed by various resources.',
    }),
    ManagedResourceSummaryList: ManagedResourceSummaryListSchema.exactOptional().openapi({
      description: 'Summaries for managed resources.',
    }),
    ProductInformationList: ProductInformationListSchema.exactOptional().openapi({
      description: 'Product information.',
    }),
    AutomatedDiscoveryInformation: AutomatedDiscoveryInformationSchema.exactOptional().openapi({
      description: 'Automated discovery information.',
    }),
  })
  .openapi({
    description:
      'A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.',
    required: [],
  })
  .openapi('LicenseConfiguration')

const LicenseConfigurationsSchema = z
  .array(LicenseConfigurationSchema)
  .openapi('LicenseConfigurations')

type ListLicenseConfigurationsResponseType = {
  LicenseConfigurations?: z.infer<typeof LicenseConfigurationsSchema>
  NextToken?: z.infer<typeof StringSchema>
}

const ArnSchema = z
  .string()
  .regex(
    /^arn:aws(-(cn|us-gov|iso-b|iso-c|iso-d))?:[A-Za-z0-9][A-Za-z0-9_\/.-]{0,62}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,1023}$/,
  )
  .max(2048)
  .openapi('Arn')

const GrantStatusSchema = z
  .enum([
    'PENDING_WORKFLOW',
    'PENDING_ACCEPT',
    'REJECTED',
    'ACTIVE',
    'FAILED_WORKFLOW',
    'DELETED',
    'PENDING_DELETE',
    'DISABLED',
    'WORKFLOW_COMPLETED',
  ])
  .openapi('GrantStatus')

const AcceptGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.exactOptional().openapi({ description: 'Grant ARN.' }),
    Status: GrantStatusSchema.exactOptional().openapi({ description: 'Grant status.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'Grant version.' }),
  })
  .openapi({ required: [] })
  .openapi('AcceptGrantResponse')

const AcceptGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
  })
  .openapi({ required: ['GrantArn'], title: 'AcceptGrantRequest' })
  .openapi('AcceptGrantRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const AuthorizationExceptionSchema = z.any().openapi('AuthorizationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const RateLimitExceededExceptionSchema = z.any().openapi('RateLimitExceededException')

const ResourceLimitExceededExceptionSchema = z.any().openapi('ResourceLimitExceededException')

const ServerInternalExceptionSchema = z.any().openapi('ServerInternalException')

const CheckInLicenseResponseSchema = z.looseObject({}).openapi('CheckInLicenseResponse')

const CheckInLicenseRequestSchema = z
  .object({
    LicenseConsumptionToken: StringSchema.openapi({ description: 'License consumption token.' }),
    Beneficiary: StringSchema.exactOptional().openapi({ description: 'License beneficiary.' }),
  })
  .openapi({ required: ['LicenseConsumptionToken'], title: 'CheckInLicenseRequest' })
  .openapi('CheckInLicenseRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const EntitlementDataUnitSchema = z
  .enum([
    'Count',
    'None',
    'Seconds',
    'Microseconds',
    'Milliseconds',
    'Bytes',
    'Kilobytes',
    'Megabytes',
    'Gigabytes',
    'Terabytes',
    'Bits',
    'Kilobits',
    'Megabits',
    'Gigabits',
    'Terabits',
    'Percent',
    'Bytes/Second',
    'Kilobytes/Second',
    'Megabytes/Second',
    'Gigabytes/Second',
    'Terabytes/Second',
    'Bits/Second',
    'Kilobits/Second',
    'Megabits/Second',
    'Gigabits/Second',
    'Terabits/Second',
    'Count/Second',
  ])
  .openapi('EntitlementDataUnit')

const EntitlementDataSchema = z
  .object({
    Name: StringSchema.openapi({ description: 'Entitlement data name.' }),
    Value: StringSchema.exactOptional().openapi({ description: 'Entitlement data value.' }),
    Unit: EntitlementDataUnitSchema.openapi({ description: 'Entitlement data unit.' }),
  })
  .openapi({
    required: ['Name', 'Unit'],
    description: 'Data associated with an entitlement resource.',
  })
  .openapi('EntitlementData')

const EntitlementDataListSchema = z.array(EntitlementDataSchema).openapi('EntitlementDataList')

const SignedTokenSchema = z.string().min(4096).openapi('SignedToken')

const ISO8601DateTimeSchema = z
  .string()
  .regex(
    /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[ 0-3]|[0-1][0-9]):[0-5][0-9])+$/,
  )
  .max(50)
  .openapi('ISO8601DateTime')

const MetadataSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The key name.' }),
    Value: StringSchema.exactOptional().openapi({ description: 'The value.' }),
  })
  .openapi({ description: 'Describes key/value pairs.', required: [] })
  .openapi('Metadata')

const MetadataListSchema = z.array(MetadataSchema).openapi('MetadataList')

const CheckoutBorrowLicenseResponseSchema = z
  .object({
    LicenseArn: ArnSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license.',
    }),
    LicenseConsumptionToken: StringSchema.exactOptional().openapi({
      description: 'License consumption token.',
    }),
    EntitlementsAllowed: EntitlementDataListSchema.exactOptional().openapi({
      description: 'Allowed license entitlements.',
    }),
    NodeId: StringSchema.exactOptional().openapi({ description: 'Node ID.' }),
    SignedToken: SignedTokenSchema.exactOptional().openapi({ description: 'Signed token.' }),
    IssuedAt: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Date and time at which the license checkout is issued.',
    }),
    Expiration: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Date and time at which the license checkout expires.',
    }),
    CheckoutMetadata: MetadataListSchema.exactOptional().openapi({
      description: 'Information about constraints.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CheckoutBorrowLicenseResponse')

const DigitalSignatureMethodSchema = z.literal('JWT_PS384').openapi('DigitalSignatureMethod')

const ClientTokenSchema = z.string().regex(/\S+/).max(2048).openapi('ClientToken')

const CheckoutBorrowLicenseRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({
      description:
        'Amazon Resource Name (ARN) of the license. The license must use the borrow consumption configuration.',
    }),
    Entitlements: EntitlementDataListSchema.openapi({
      description: 'License entitlements. Partial checkouts are not supported.',
    }),
    DigitalSignatureMethod: DigitalSignatureMethodSchema.openapi({
      description:
        'Digital signature method. The possible value is JSON Web Signature (JWS) algorithm PS384. For more information, see <a href="https://tools.ietf.org/html/rfc7518#section-3.5">RFC 7518 Digital Signature with RSASSA-PSS</a>.',
    }),
    NodeId: StringSchema.exactOptional().openapi({ description: 'Node ID.' }),
    CheckoutMetadata: MetadataListSchema.exactOptional().openapi({
      description: 'Information about constraints.',
    }),
    ClientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
  })
  .openapi({
    required: ['LicenseArn', 'Entitlements', 'DigitalSignatureMethod', 'ClientToken'],
    title: 'CheckoutBorrowLicenseRequest',
  })
  .openapi('CheckoutBorrowLicenseRequest')

const NoEntitlementsAllowedExceptionSchema = z.any().openapi('NoEntitlementsAllowedException')

const EntitlementNotAllowedExceptionSchema = z.any().openapi('EntitlementNotAllowedException')

const UnsupportedDigitalSignatureMethodExceptionSchema = z
  .any()
  .openapi('UnsupportedDigitalSignatureMethodException')

const RedirectExceptionSchema = z.any().openapi('RedirectException')

const CheckoutTypeSchema = z.enum(['PROVISIONAL', 'PERPETUAL']).openapi('CheckoutType')

const CheckoutLicenseResponseSchema = z
  .object({
    CheckoutType: CheckoutTypeSchema.exactOptional().openapi({ description: 'Checkout type.' }),
    LicenseConsumptionToken: StringSchema.exactOptional().openapi({
      description: 'License consumption token.',
    }),
    EntitlementsAllowed: EntitlementDataListSchema.exactOptional().openapi({
      description: 'Allowed license entitlements.',
    }),
    SignedToken: SignedTokenSchema.exactOptional().openapi({ description: 'Signed token.' }),
    NodeId: StringSchema.exactOptional().openapi({ description: 'Node ID.' }),
    IssuedAt: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Date and time at which the license checkout is issued.',
    }),
    Expiration: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Date and time at which the license checkout expires.',
    }),
    LicenseArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the checkout license.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CheckoutLicenseResponse')

const CheckoutLicenseRequestSchema = z
  .object({
    ProductSKU: StringSchema.openapi({ description: 'Product SKU.' }),
    CheckoutType: CheckoutTypeSchema.openapi({ description: 'Checkout type.' }),
    KeyFingerprint: StringSchema.openapi({
      description: 'Key fingerprint identifying the license.',
    }),
    Entitlements: EntitlementDataListSchema.openapi({ description: 'License entitlements.' }),
    ClientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    Beneficiary: StringSchema.exactOptional().openapi({ description: 'License beneficiary.' }),
    NodeId: StringSchema.exactOptional().openapi({ description: 'Node ID.' }),
  })
  .openapi({
    required: ['ProductSKU', 'CheckoutType', 'KeyFingerprint', 'Entitlements', 'ClientToken'],
    title: 'CheckoutLicenseRequest',
  })
  .openapi('CheckoutLicenseRequest')

const CreateGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.exactOptional().openapi({ description: 'Grant ARN.' }),
    Status: GrantStatusSchema.exactOptional().openapi({ description: 'Grant status.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'Grant version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateGrantResponse')

const PrincipalArnListSchema = z.array(ArnSchema).length(1).openapi('PrincipalArnList')

const AllowedOperationSchema = z
  .enum([
    'CreateGrant',
    'CheckoutLicense',
    'CheckoutBorrowLicense',
    'CheckInLicense',
    'ExtendConsumptionLicense',
    'ListPurchasedLicenses',
    'CreateToken',
  ])
  .openapi('AllowedOperation')

const AllowedOperationListSchema = z
  .array(AllowedOperationSchema)
  .min(1)
  .max(7)
  .openapi('AllowedOperationList')

const CreateGrantRequestSchema = z
  .object({
    ClientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    GrantName: StringSchema.openapi({ description: 'Grant name.' }),
    LicenseArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    Principals: PrincipalArnListSchema.openapi({
      description:
        '<p>The grant principals. You can specify one of the following as an Amazon Resource Name (ARN):</p> <ul> <li> <p>An Amazon Web Services account, which includes only the account specified.</p> </li> </ul> <ul> <li> <p>An organizational unit (OU), which includes all accounts in the OU.</p> </li> </ul> <ul> <li> <p>An organization, which will include all accounts across your organization.</p> </li> </ul>',
    }),
    HomeRegion: StringSchema.openapi({ description: 'Home Region of the grant.' }),
    AllowedOperations: AllowedOperationListSchema.openapi({
      description: 'Allowed operations for the grant.',
    }),
  })
  .openapi({
    required: [
      'ClientToken',
      'GrantName',
      'LicenseArn',
      'Principals',
      'HomeRegion',
      'AllowedOperations',
    ],
    title: 'CreateGrantRequest',
  })
  .openapi('CreateGrantRequest')

const CreateGrantVersionResponseSchema = z
  .object({
    GrantArn: ArnSchema.exactOptional().openapi({ description: 'Grant ARN.' }),
    Status: GrantStatusSchema.exactOptional().openapi({ description: 'Grant status.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'New version of the grant.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateGrantVersionResponse')

const StatusReasonMessageSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(400)
  .openapi('StatusReasonMessage')

const ActivationOverrideBehaviorSchema = z
  .enum(['DISTRIBUTED_GRANTS_ONLY', 'ALL_GRANTS_PERMITTED_BY_ISSUER'])
  .openapi('ActivationOverrideBehavior')

const OptionsSchema = z
  .object({
    ActivationOverrideBehavior: ActivationOverrideBehaviorSchema.exactOptional().openapi({
      description:
        '<p>An activation option for your grant that determines the behavior of activating a grant. Activation options can only be used with granted licenses sourced from the Amazon Web Services Marketplace. Additionally, the operation must specify the value of <code>ACTIVE</code> for the <code>Status</code> parameter.</p> <ul> <li> <p>As a license administrator, you can optionally specify an <code>ActivationOverrideBehavior</code> when activating a grant.</p> </li> <li> <p>As a grantor, you can optionally specify an <code>ActivationOverrideBehavior</code> when you activate a grant for a grantee account in your organization.</p> </li> <li> <p>As a grantee, if the grantor creating the distributed grant doesn’t specify an <code>ActivationOverrideBehavior</code>, you can optionally specify one when you are activating the grant.</p> </li> </ul> <dl> <dt>DISTRIBUTED_GRANTS_ONLY</dt> <dd> <p>Use this value to activate a grant without replacing any member account’s active grants for the same product.</p> </dd> <dt>ALL_GRANTS_PERMITTED_BY_ISSUER</dt> <dd> <p>Use this value to activate a grant and disable other active grants in any member accounts for the same product. This action will also replace their previously activated grants with this activated grant.</p> </dd> </dl>',
    }),
  })
  .openapi({
    description:
      'The options you can specify when you create a new version of a grant, such as activation override behavior. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.',
    required: [],
  })
  .openapi('Options')

const CreateGrantVersionRequestSchema = z
  .object({
    ClientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    GrantArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    GrantName: StringSchema.exactOptional().openapi({ description: 'Grant name.' }),
    AllowedOperations: AllowedOperationListSchema.exactOptional().openapi({
      description: 'Allowed operations for the grant.',
    }),
    Status: GrantStatusSchema.exactOptional().openapi({ description: 'Grant status.' }),
    StatusReason: StatusReasonMessageSchema.exactOptional().openapi({
      description: 'Grant status reason.',
    }),
    SourceVersion: StringSchema.exactOptional().openapi({
      description: 'Current version of the grant.',
    }),
    Options: OptionsSchema.exactOptional().openapi({
      description: 'The options specified for the grant.',
    }),
  })
  .openapi({ required: ['ClientToken', 'GrantArn'], title: 'CreateGrantVersionRequest' })
  .openapi('CreateGrantVersionRequest')

const LicenseStatusSchema = z
  .enum([
    'AVAILABLE',
    'PENDING_AVAILABLE',
    'DEACTIVATED',
    'SUSPENDED',
    'EXPIRED',
    'PENDING_DELETE',
    'DELETED',
  ])
  .openapi('LicenseStatus')

const CreateLicenseResponseSchema = z
  .object({
    LicenseArn: ArnSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license.',
    }),
    Status: LicenseStatusSchema.exactOptional().openapi({ description: 'License status.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'License version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseResponse')

const IssuerSchema = z
  .object({
    Name: StringSchema.openapi({ description: 'Issuer name.' }),
    SignKey: StringSchema.exactOptional().openapi({
      description:
        'Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.',
    }),
  })
  .openapi({ required: ['Name'], description: 'Details about the issuer of a license.' })
  .openapi('Issuer')

const DatetimeRangeSchema = z
  .object({
    Begin: ISO8601DateTimeSchema.openapi({ description: 'Start of the time range.' }),
    End: ISO8601DateTimeSchema.exactOptional().openapi({ description: 'End of the time range.' }),
  })
  .openapi({ required: ['Begin'], description: 'Describes a time range, in ISO8601-UTC format.' })
  .openapi('DatetimeRange')

const LongSchema = z.int().openapi('Long')

const EntitlementUnitSchema = z
  .enum([
    'Count',
    'None',
    'Seconds',
    'Microseconds',
    'Milliseconds',
    'Bytes',
    'Kilobytes',
    'Megabytes',
    'Gigabytes',
    'Terabytes',
    'Bits',
    'Kilobits',
    'Megabits',
    'Gigabits',
    'Terabits',
    'Percent',
    'Bytes/Second',
    'Kilobytes/Second',
    'Megabytes/Second',
    'Gigabytes/Second',
    'Terabytes/Second',
    'Bits/Second',
    'Kilobits/Second',
    'Megabits/Second',
    'Gigabits/Second',
    'Terabits/Second',
    'Count/Second',
  ])
  .openapi('EntitlementUnit')

const EntitlementSchema = z
  .object({
    Name: StringSchema.openapi({ description: 'Entitlement name.' }),
    Value: StringSchema.exactOptional().openapi({
      description: 'Entitlement resource. Use only if the unit is None.',
    }),
    MaxCount: LongSchema.exactOptional().openapi({
      description: 'Maximum entitlement count. Use if the unit is not None.',
    }),
    Overage: BoxBooleanSchema.exactOptional().openapi({
      description: 'Indicates whether overages are allowed.',
    }),
    Unit: EntitlementUnitSchema.openapi({ description: 'Entitlement unit.' }),
    AllowCheckIn: BoxBooleanSchema.exactOptional().openapi({
      description: 'Indicates whether check-ins are allowed.',
    }),
  })
  .openapi({
    required: ['Name', 'Unit'],
    description: 'Describes a resource entitled for use with a license.',
  })
  .openapi('Entitlement')

const EntitlementListSchema = z.array(EntitlementSchema).openapi('EntitlementList')

const RenewTypeSchema = z.enum(['None', 'Weekly', 'Monthly']).openapi('RenewType')

const BoxIntegerSchema = z.int().openapi('BoxInteger')

const ProvisionalConfigurationSchema = z
  .object({
    MaxTimeToLiveInMinutes: BoxIntegerSchema.openapi({
      description: 'Maximum time for the provisional configuration, in minutes.',
    }),
  })
  .openapi({
    required: ['MaxTimeToLiveInMinutes'],
    description: 'Details about a provisional configuration.',
  })
  .openapi('ProvisionalConfiguration')

const BorrowConfigurationSchema = z
  .object({
    AllowEarlyCheckIn: BoxBooleanSchema.openapi({
      description: 'Indicates whether early check-ins are allowed.',
    }),
    MaxTimeToLiveInMinutes: BoxIntegerSchema.openapi({
      description: 'Maximum time for the borrow configuration, in minutes.',
    }),
  })
  .openapi({
    required: ['AllowEarlyCheckIn', 'MaxTimeToLiveInMinutes'],
    description: 'Details about a borrow configuration.',
  })
  .openapi('BorrowConfiguration')

const ConsumptionConfigurationSchema = z
  .object({
    RenewType: RenewTypeSchema.exactOptional().openapi({ description: 'Renewal frequency.' }),
    ProvisionalConfiguration: ProvisionalConfigurationSchema.exactOptional().openapi({
      description: 'Details about a provisional configuration.',
    }),
    BorrowConfiguration: BorrowConfigurationSchema.exactOptional().openapi({
      description: 'Details about a borrow configuration.',
    }),
  })
  .openapi({ description: 'Details about a consumption configuration.', required: [] })
  .openapi('ConsumptionConfiguration')

const CreateLicenseRequestSchema = z
  .object({
    LicenseName: StringSchema.openapi({ description: 'License name.' }),
    ProductName: StringSchema.openapi({ description: 'Product name.' }),
    ProductSKU: StringSchema.openapi({ description: 'Product SKU.' }),
    Issuer: IssuerSchema.openapi({ description: 'License issuer.' }),
    HomeRegion: StringSchema.openapi({ description: 'Home Region for the license.' }),
    Validity: DatetimeRangeSchema.openapi({
      description: 'Date and time range during which the license is valid, in ISO8601-UTC format.',
    }),
    Entitlements: EntitlementListSchema.openapi({ description: 'License entitlements.' }),
    Beneficiary: StringSchema.openapi({ description: 'License beneficiary.' }),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.openapi({
      description:
        'Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.',
    }),
    LicenseMetadata: MetadataListSchema.exactOptional().openapi({
      description: 'Information about the license.',
    }),
    ClientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
  })
  .openapi({
    required: [
      'LicenseName',
      'ProductName',
      'ProductSKU',
      'Issuer',
      'HomeRegion',
      'Validity',
      'Entitlements',
      'Beneficiary',
      'ConsumptionConfiguration',
      'ClientToken',
    ],
    title: 'CreateLicenseRequest',
  })
  .openapi('CreateLicenseRequest')

const CreateLicenseConfigurationResponseSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseConfigurationResponse')

const TagSchema = z
  .object({
    Key: StringSchema.exactOptional().openapi({ description: 'Tag key.' }),
    Value: StringSchema.exactOptional().openapi({ description: 'Tag value.' }),
  })
  .openapi({ description: 'Details about a tag for a license configuration.', required: [] })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateLicenseConfigurationRequestSchema = z
  .object({
    Name: StringSchema.openapi({ description: 'Name of the license configuration.' }),
    Description: StringSchema.exactOptional().openapi({
      description: 'Description of the license configuration.',
    }),
    LicenseCountingType: LicenseCountingTypeSchema.openapi({
      description: 'Dimension used to track the license inventory.',
    }),
    LicenseCount: BoxLongSchema.exactOptional().openapi({
      description: 'Number of licenses managed by the license configuration.',
    }),
    LicenseCountHardLimit: BoxBooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.',
    }),
    LicenseRules: StringListSchema.exactOptional().openapi({
      description:
        '<p>License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules vary by dimension, as follows.</p> <ul> <li> <p> <code>Cores</code> dimension: <code>allowedTenancy</code> | <code>licenseAffinityToHost</code> | <code>maximumCores</code> | <code>minimumCores</code> </p> </li> <li> <p> <code>Instances</code> dimension: <code>allowedTenancy</code> | <code>maximumCores</code> | <code>minimumCores</code> | <code>maximumSockets</code> | <code>minimumSockets</code> | <code>maximumVcpus</code> | <code>minimumVcpus</code> </p> </li> <li> <p> <code>Sockets</code> dimension: <code>allowedTenancy</code> | <code>licenseAffinityToHost</code> | <code>maximumSockets</code> | <code>minimumSockets</code> </p> </li> <li> <p> <code>vCPUs</code> dimension: <code>allowedTenancy</code> | <code>honorVcpuOptimization</code> | <code>maximumVcpus</code> | <code>minimumVcpus</code> </p> </li> </ul> <p>The unit for <code>licenseAffinityToHost</code> is days and the range is 1 to 180. The possible values for <code>allowedTenancy</code> are <code>EC2-Default</code>, <code>EC2-DedicatedHost</code>, and <code>EC2-DedicatedInstance</code>. The possible values for <code>honorVcpuOptimization</code> are <code>True</code> and <code>False</code>.</p>',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'Tags to add to the license configuration.',
    }),
    DisassociateWhenNotFound: BoxBooleanSchema.exactOptional().openapi({
      description: 'When true, disassociates a resource when software is uninstalled.',
    }),
    ProductInformationList: ProductInformationListSchema.exactOptional().openapi({
      description: 'Product information.',
    }),
  })
  .openapi({
    required: ['Name', 'LicenseCountingType'],
    title: 'CreateLicenseConfigurationRequest',
  })
  .openapi('CreateLicenseConfigurationRequest')

const LicenseConversionTaskIdSchema = z
  .string()
  .regex(/^lct-[a-zA-Z0-9]*/)
  .max(50)
  .openapi('LicenseConversionTaskId')

const CreateLicenseConversionTaskForResourceResponseSchema = z
  .object({
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.exactOptional().openapi({
      description: 'The ID of the created license type conversion task.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseConversionTaskForResourceResponse')

const UsageOperationSchema = z.string().max(50).openapi('UsageOperation')

const LicenseConversionContextSchema = z
  .object({
    UsageOperation: UsageOperationSchema.exactOptional().openapi({
      description:
        'The Usage operation value that corresponds to the license type you are converting your resource from. For more information about which platforms correspond to which usage operation values see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html#billing-info">Sample data: usage operation by platform </a> ',
    }),
  })
  .openapi({ description: 'Information about a license type conversion task.', required: [] })
  .openapi('LicenseConversionContext')

const CreateLicenseConversionTaskForResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.openapi({
      description:
        'Amazon Resource Name (ARN) of the resource you are converting the license type for.',
    }),
    SourceLicenseContext: LicenseConversionContextSchema.openapi({
      description:
        'Information that identifies the license type you are converting from. For the structure of the source license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the CLI </a> in the <i>License Manager User Guide</i>.',
    }),
    DestinationLicenseContext: LicenseConversionContextSchema.openapi({
      description:
        'Information that identifies the license type you are converting to. For the structure of the destination license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the CLI </a> in the <i>License Manager User Guide</i>.',
    }),
  })
  .openapi({
    required: ['ResourceArn', 'SourceLicenseContext', 'DestinationLicenseContext'],
    title: 'CreateLicenseConversionTaskForResourceRequest',
  })
  .openapi('CreateLicenseConversionTaskForResourceRequest')

const CreateLicenseManagerReportGeneratorResponseSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the new report generator.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseManagerReportGeneratorResponse')

const ReportGeneratorNameSchema = z.string().min(1).max(100).openapi('ReportGeneratorName')

const ReportTypeSchema = z
  .enum(['LicenseConfigurationSummaryReport', 'LicenseConfigurationUsageReport'])
  .openapi('ReportType')

const ReportTypeListSchema = z.array(ReportTypeSchema).openapi('ReportTypeList')

const ArnListSchema = z.array(ArnSchema).openapi('ArnList')

const ReportContextSchema = z
  .object({
    licenseConfigurationArns: ArnListSchema.openapi({
      description:
        'Amazon Resource Name (ARN) of the license configuration that this generator reports on.',
    }),
  })
  .openapi({
    required: ['licenseConfigurationArns'],
    description: 'Details of the license configuration that this generator reports on.',
  })
  .openapi('ReportContext')

const IntegerSchema = z.int().openapi('Integer')

const ReportFrequencyTypeSchema = z.enum(['DAY', 'WEEK', 'MONTH']).openapi('ReportFrequencyType')

const ReportFrequencySchema = z
  .object({
    value: IntegerSchema.exactOptional().openapi({
      description:
        'Number of times within the frequency period that a report is generated. The only supported value is <code>1</code>.',
    }),
    period: ReportFrequencyTypeSchema.exactOptional().openapi({
      description: 'Time period between each report. The period can be daily, weekly, or monthly.',
    }),
  })
  .openapi({ description: 'Details about how frequently reports are generated.', required: [] })
  .openapi('ReportFrequency')

const ClientRequestTokenSchema = z.string().min(1).max(36).openapi('ClientRequestToken')

const CreateLicenseManagerReportGeneratorRequestSchema = z
  .object({
    ReportGeneratorName: ReportGeneratorNameSchema.openapi({
      description: 'Name of the report generator.',
    }),
    Type: ReportTypeListSchema.openapi({
      description:
        '<p>Type of reports to generate. The following report types an be generated:</p> <ul> <li> <p>License configuration report - Reports the number and details of consumed licenses for a license configuration.</p> </li> <li> <p>Resource report - Reports the tracked licenses and resource consumption for a license configuration.</p> </li> </ul>',
    }),
    ReportContext: ReportContextSchema.openapi({
      description: 'Defines the type of license configuration the report generator tracks.',
    }),
    ReportFrequency: ReportFrequencySchema.openapi({
      description:
        'Frequency by which reports are generated. Reports can be generated daily, monthly, or weekly.',
    }),
    ClientToken: ClientRequestTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    Description: StringSchema.exactOptional().openapi({
      description: 'Description of the report generator.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'Tags to add to the report generator.',
    }),
  })
  .openapi({
    required: ['ReportGeneratorName', 'Type', 'ReportContext', 'ReportFrequency', 'ClientToken'],
    title: 'CreateLicenseManagerReportGeneratorRequest',
  })
  .openapi('CreateLicenseManagerReportGeneratorRequest')

const CreateLicenseVersionResponseSchema = z
  .object({
    LicenseArn: ArnSchema.exactOptional().openapi({ description: 'License ARN.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'New version of the license.' }),
    Status: LicenseStatusSchema.exactOptional().openapi({ description: 'License status.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseVersionResponse')

const CreateLicenseVersionRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    LicenseName: StringSchema.openapi({ description: 'License name.' }),
    ProductName: StringSchema.openapi({ description: 'Product name.' }),
    Issuer: IssuerSchema.openapi({ description: 'License issuer.' }),
    HomeRegion: StringSchema.openapi({ description: 'Home Region of the license.' }),
    Validity: DatetimeRangeSchema.openapi({
      description: 'Date and time range during which the license is valid, in ISO8601-UTC format.',
    }),
    LicenseMetadata: MetadataListSchema.exactOptional().openapi({
      description: 'Information about the license.',
    }),
    Entitlements: EntitlementListSchema.openapi({ description: 'License entitlements.' }),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.openapi({
      description:
        'Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.',
    }),
    Status: LicenseStatusSchema.openapi({ description: 'License status.' }),
    ClientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    SourceVersion: StringSchema.exactOptional().openapi({
      description: 'Current version of the license.',
    }),
  })
  .openapi({
    required: [
      'LicenseArn',
      'LicenseName',
      'ProductName',
      'Issuer',
      'HomeRegion',
      'Validity',
      'Entitlements',
      'ConsumptionConfiguration',
      'Status',
      'ClientToken',
    ],
    title: 'CreateLicenseVersionRequest',
  })
  .openapi('CreateLicenseVersionRequest')

const TokenTypeSchema = z.literal('REFRESH_TOKEN').openapi('TokenType')

const TokenStringSchema = z.string().regex(/\S+/).max(4096).openapi('TokenString')

const CreateTokenResponseSchema = z
  .object({
    TokenId: StringSchema.exactOptional().openapi({ description: 'Token ID.' }),
    TokenType: TokenTypeSchema.exactOptional().openapi({ description: 'Token type.' }),
    Token: TokenStringSchema.exactOptional().openapi({
      description: 'Refresh token, encoded as a JWT token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateTokenResponse')

const MaxSize3StringListSchema = z.array(StringSchema).max(3).openapi('MaxSize3StringList')

const CreateTokenRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({
      description:
        'Amazon Resource Name (ARN) of the license. The ARN is mapped to the aud claim of the JWT token.',
    }),
    RoleArns: ArnListSchema.exactOptional().openapi({
      description:
        'Amazon Resource Name (ARN) of the IAM roles to embed in the token. License Manager does not check whether the roles are in use.',
    }),
    ExpirationInDays: IntegerSchema.exactOptional().openapi({
      description:
        'Token expiration, in days, counted from token creation. The default is 365 days.',
    }),
    TokenProperties: MaxSize3StringListSchema.exactOptional().openapi({
      description:
        'Data specified by the caller to be included in the JWT token. The data is mapped to the amr claim of the JWT token.',
    }),
    ClientToken: ClientTokenSchema.openapi({
      description: 'Idempotency token, valid for 10 minutes.',
    }),
  })
  .openapi({ required: ['LicenseArn', 'ClientToken'], title: 'CreateTokenRequest' })
  .openapi('CreateTokenRequest')

const DeleteGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.exactOptional().openapi({ description: 'Grant ARN.' }),
    Status: GrantStatusSchema.exactOptional().openapi({ description: 'Grant status.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'Grant version.' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteGrantResponse')

const DeleteGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    StatusReason: StatusReasonMessageSchema.exactOptional().openapi({
      description: 'The Status reason for the delete request.',
    }),
    Version: StringSchema.openapi({ description: 'Current version of the grant.' }),
  })
  .openapi({ required: ['GrantArn', 'Version'], title: 'DeleteGrantRequest' })
  .openapi('DeleteGrantRequest')

const LicenseDeletionStatusSchema = z
  .enum(['PENDING_DELETE', 'DELETED'])
  .openapi('LicenseDeletionStatus')

const DeleteLicenseResponseSchema = z
  .object({
    Status: LicenseDeletionStatusSchema.exactOptional().openapi({ description: 'License status.' }),
    DeletionDate: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Date when the license is deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteLicenseResponse')

const DeleteLicenseRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    SourceVersion: StringSchema.openapi({ description: 'Current version of the license.' }),
  })
  .openapi({ required: ['LicenseArn', 'SourceVersion'], title: 'DeleteLicenseRequest' })
  .openapi('DeleteLicenseRequest')

const DeleteLicenseConfigurationResponseSchema = z
  .looseObject({})
  .openapi('DeleteLicenseConfigurationResponse')

const DeleteLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.openapi({
      description: 'ID of the license configuration.',
    }),
  })
  .openapi({ required: ['LicenseConfigurationArn'], title: 'DeleteLicenseConfigurationRequest' })
  .openapi('DeleteLicenseConfigurationRequest')

const DeleteLicenseManagerReportGeneratorResponseSchema = z
  .looseObject({})
  .openapi('DeleteLicenseManagerReportGeneratorResponse')

const DeleteLicenseManagerReportGeneratorRequestSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the report generator to be deleted.',
    }),
  })
  .openapi({
    required: ['LicenseManagerReportGeneratorArn'],
    title: 'DeleteLicenseManagerReportGeneratorRequest',
  })
  .openapi('DeleteLicenseManagerReportGeneratorRequest')

const DeleteTokenResponseSchema = z.looseObject({}).openapi('DeleteTokenResponse')

const DeleteTokenRequestSchema = z
  .object({ TokenId: StringSchema.openapi({ description: 'Token ID.' }) })
  .openapi({ required: ['TokenId'], title: 'DeleteTokenRequest' })
  .openapi('DeleteTokenRequest')

const ExtendLicenseConsumptionResponseSchema = z
  .object({
    LicenseConsumptionToken: StringSchema.exactOptional().openapi({
      description: 'License consumption token.',
    }),
    Expiration: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Date and time at which the license consumption expires.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ExtendLicenseConsumptionResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const ExtendLicenseConsumptionRequestSchema = z
  .object({
    LicenseConsumptionToken: StringSchema.openapi({ description: 'License consumption token.' }),
    DryRun: BooleanSchema.exactOptional().openapi({
      description:
        'Checks whether you have the required permissions for the action, without actually making the request. Provides an error response if you do not have the required permissions.',
    }),
  })
  .openapi({ required: ['LicenseConsumptionToken'], title: 'ExtendLicenseConsumptionRequest' })
  .openapi('ExtendLicenseConsumptionRequest')

const GetAccessTokenResponseSchema = z
  .object({
    AccessToken: TokenStringSchema.exactOptional().openapi({
      description: 'Temporary access token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAccessTokenResponse')

const GetAccessTokenRequestSchema = z
  .object({
    Token: TokenStringSchema.openapi({ description: 'Refresh token, encoded as a JWT token.' }),
    TokenProperties: MaxSize3StringListSchema.exactOptional().openapi({
      description: 'Token properties to validate against those present in the JWT token.',
    }),
  })
  .openapi({ required: ['Token'], title: 'GetAccessTokenRequest' })
  .openapi('GetAccessTokenRequest')

const GrantSchema = z
  .object({
    GrantArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    GrantName: StringSchema.openapi({ description: 'Grant name.' }),
    ParentArn: ArnSchema.openapi({ description: 'Parent ARN.' }),
    LicenseArn: ArnSchema.openapi({ description: 'License ARN.' }),
    GranteePrincipalArn: ArnSchema.openapi({ description: 'The grantee principal ARN.' }),
    HomeRegion: StringSchema.openapi({ description: 'Home Region of the grant.' }),
    GrantStatus: GrantStatusSchema.openapi({ description: 'Grant status.' }),
    StatusReason: StatusReasonMessageSchema.exactOptional().openapi({
      description: 'Grant status reason.',
    }),
    Version: StringSchema.openapi({ description: 'Grant version.' }),
    GrantedOperations: AllowedOperationListSchema.openapi({ description: 'Granted operations.' }),
    Options: OptionsSchema.exactOptional().openapi({
      description: 'The options specified for the grant.',
    }),
  })
  .openapi({
    required: [
      'GrantArn',
      'GrantName',
      'ParentArn',
      'LicenseArn',
      'GranteePrincipalArn',
      'HomeRegion',
      'GrantStatus',
      'Version',
      'GrantedOperations',
    ],
    description: 'Describes a grant.',
  })
  .openapi('Grant')

const GetGrantResponseSchema = z
  .object({ Grant: GrantSchema.exactOptional().openapi({ description: 'Grant details.' }) })
  .openapi({ required: [] })
  .openapi('GetGrantResponse')

const GetGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'Grant version.' }),
  })
  .openapi({ required: ['GrantArn'], title: 'GetGrantRequest' })
  .openapi('GetGrantRequest')

const IssuerDetailsSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'Issuer name.' }),
    SignKey: StringSchema.exactOptional().openapi({
      description:
        'Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.',
    }),
    KeyFingerprint: StringSchema.exactOptional().openapi({
      description: 'Issuer key fingerprint.',
    }),
  })
  .openapi({ description: 'Details associated with the issuer of a license.', required: [] })
  .openapi('IssuerDetails')

const LicenseSchema = z
  .object({
    LicenseArn: ArnSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license.',
    }),
    LicenseName: StringSchema.exactOptional().openapi({ description: 'License name.' }),
    ProductName: StringSchema.exactOptional().openapi({ description: 'Product name.' }),
    ProductSKU: StringSchema.exactOptional().openapi({ description: 'Product SKU.' }),
    Issuer: IssuerDetailsSchema.exactOptional().openapi({ description: 'License issuer.' }),
    HomeRegion: StringSchema.exactOptional().openapi({
      description: 'Home Region of the license.',
    }),
    Status: LicenseStatusSchema.exactOptional().openapi({ description: 'License status.' }),
    Validity: DatetimeRangeSchema.exactOptional().openapi({
      description: 'Date and time range during which the license is valid, in ISO8601-UTC format.',
    }),
    Beneficiary: StringSchema.exactOptional().openapi({ description: 'License beneficiary.' }),
    Entitlements: EntitlementListSchema.exactOptional().openapi({
      description: 'License entitlements.',
    }),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.exactOptional().openapi({
      description: 'Configuration for consumption of the license.',
    }),
    LicenseMetadata: MetadataListSchema.exactOptional().openapi({
      description: 'License metadata.',
    }),
    CreateTime: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'License creation time.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'License version.' }),
  })
  .openapi({ description: 'Software license that is managed in License Manager.', required: [] })
  .openapi('License')

const GetLicenseResponseSchema = z
  .object({ License: LicenseSchema.exactOptional().openapi({ description: 'License details.' }) })
  .openapi({ required: [] })
  .openapi('GetLicenseResponse')

const GetLicenseRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'License version.' }),
  })
  .openapi({ required: ['LicenseArn'], title: 'GetLicenseRequest' })
  .openapi('GetLicenseRequest')

const GetLicenseConfigurationResponseSchema = z
  .object({
    LicenseConfigurationId: StringSchema.exactOptional().openapi({
      description: 'Unique ID for the license configuration.',
    }),
    LicenseConfigurationArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'Name of the license configuration.',
    }),
    Description: StringSchema.exactOptional().openapi({
      description: 'Description of the license configuration.',
    }),
    LicenseCountingType: LicenseCountingTypeSchema.exactOptional().openapi({
      description: 'Dimension for which the licenses are counted.',
    }),
    LicenseRules: StringListSchema.exactOptional().openapi({ description: 'License rules.' }),
    LicenseCount: BoxLongSchema.exactOptional().openapi({
      description: 'Number of available licenses.',
    }),
    LicenseCountHardLimit: BoxBooleanSchema.exactOptional().openapi({
      description: 'Sets the number of available licenses as a hard limit.',
    }),
    ConsumedLicenses: BoxLongSchema.exactOptional().openapi({
      description: 'Number of licenses assigned to resources.',
    }),
    Status: StringSchema.exactOptional().openapi({ description: 'License configuration status.' }),
    OwnerAccountId: StringSchema.exactOptional().openapi({
      description: 'Account ID of the owner of the license configuration.',
    }),
    ConsumedLicenseSummaryList: ConsumedLicenseSummaryListSchema.exactOptional().openapi({
      description: 'Summaries of the licenses consumed by resources.',
    }),
    ManagedResourceSummaryList: ManagedResourceSummaryListSchema.exactOptional().openapi({
      description: 'Summaries of the managed resources.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'Tags for the license configuration.',
    }),
    ProductInformationList: ProductInformationListSchema.exactOptional().openapi({
      description: 'Product information.',
    }),
    AutomatedDiscoveryInformation: AutomatedDiscoveryInformationSchema.exactOptional().openapi({
      description: 'Automated discovery information.',
    }),
    DisassociateWhenNotFound: BoxBooleanSchema.exactOptional().openapi({
      description: 'When true, disassociates a resource when software is uninstalled.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseConfigurationResponse')

const GetLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
  })
  .openapi({ required: ['LicenseConfigurationArn'], title: 'GetLicenseConfigurationRequest' })
  .openapi('GetLicenseConfigurationRequest')

const LicenseConversionTaskStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('LicenseConversionTaskStatus')

const GetLicenseConversionTaskResponseSchema = z
  .object({
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.exactOptional().openapi({
      description: 'ID of the license type conversion task.',
    }),
    ResourceArn: StringSchema.exactOptional().openapi({
      description:
        'Amazon Resource Names (ARN) of the resources the license conversion task is associated with.',
    }),
    SourceLicenseContext: LicenseConversionContextSchema.exactOptional().openapi({
      description: 'Information about the license type converted from.',
    }),
    DestinationLicenseContext: LicenseConversionContextSchema.exactOptional().openapi({
      description: 'Information about the license type converted to.',
    }),
    StatusMessage: StringSchema.exactOptional().openapi({
      description: 'The status message for the conversion task.',
    }),
    Status: LicenseConversionTaskStatusSchema.exactOptional().openapi({
      description: 'Status of the license type conversion task.',
    }),
    StartTime: DateTimeSchema.exactOptional().openapi({
      description: 'Time at which the license type conversion task was started .',
    }),
    LicenseConversionTime: DateTimeSchema.exactOptional().openapi({
      description: 'Amount of time to complete the license type conversion.',
    }),
    EndTime: DateTimeSchema.exactOptional().openapi({
      description: 'Time at which the license type conversion task was completed.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseConversionTaskResponse')

const GetLicenseConversionTaskRequestSchema = z
  .object({
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.openapi({
      description: 'ID of the license type conversion task to retrieve information on.',
    }),
  })
  .openapi({ required: ['LicenseConversionTaskId'], title: 'GetLicenseConversionTaskRequest' })
  .openapi('GetLicenseConversionTaskRequest')

const S3LocationSchema = z
  .object({
    bucket: StringSchema.exactOptional().openapi({
      description: 'Name of the S3 bucket reports are published to.',
    }),
    keyPrefix: StringSchema.exactOptional().openapi({
      description: 'Prefix of the S3 bucket reports are published to.',
    }),
  })
  .openapi({
    description: 'Details of the S3 bucket that report generator reports are published to.',
    required: [],
  })
  .openapi('S3Location')

const ReportGeneratorSchema = z
  .object({
    ReportGeneratorName: StringSchema.exactOptional().openapi({
      description: 'Name of the report generator.',
    }),
    ReportType: ReportTypeListSchema.exactOptional().openapi({
      description: 'Type of reports that are generated.',
    }),
    ReportContext: ReportContextSchema.exactOptional().openapi({
      description: 'License configuration type for this generator.',
    }),
    ReportFrequency: ReportFrequencySchema.exactOptional().openapi({
      description: 'Details about how frequently reports are generated.',
    }),
    LicenseManagerReportGeneratorArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the report generator.',
    }),
    LastRunStatus: StringSchema.exactOptional().openapi({
      description: 'Status of the last report generation attempt.',
    }),
    LastRunFailureReason: StringSchema.exactOptional().openapi({
      description: 'Failure message for the last report generation attempt.',
    }),
    LastReportGenerationTime: StringSchema.exactOptional().openapi({
      description: 'Time the last report was generated at.',
    }),
    ReportCreatorAccount: StringSchema.exactOptional().openapi({
      description: 'The Amazon Web Services account ID used to create the report generator.',
    }),
    Description: StringSchema.exactOptional().openapi({
      description: 'Description of the report generator.',
    }),
    S3Location: S3LocationSchema.exactOptional().openapi({
      description: 'Details of the S3 bucket that report generator reports are published to.',
    }),
    CreateTime: StringSchema.exactOptional().openapi({
      description: 'Time the report was created.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'Tags associated with the report generator.',
    }),
  })
  .openapi({ description: 'Describe the details of a report generator.', required: [] })
  .openapi('ReportGenerator')

const GetLicenseManagerReportGeneratorResponseSchema = z
  .object({
    ReportGenerator: ReportGeneratorSchema.exactOptional().openapi({
      description:
        'A report generator that creates periodic reports about your license configurations.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseManagerReportGeneratorResponse')

const GetLicenseManagerReportGeneratorRequestSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the report generator.',
    }),
  })
  .openapi({
    required: ['LicenseManagerReportGeneratorArn'],
    title: 'GetLicenseManagerReportGeneratorRequest',
  })
  .openapi('GetLicenseManagerReportGeneratorRequest')

const EntitlementUsageSchema = z
  .object({
    Name: StringSchema.openapi({ description: 'Entitlement usage name.' }),
    ConsumedValue: StringSchema.openapi({ description: 'Resource usage consumed.' }),
    MaxCount: StringSchema.exactOptional().openapi({
      description: 'Maximum entitlement usage count.',
    }),
    Unit: EntitlementDataUnitSchema.openapi({ description: 'Entitlement usage unit.' }),
  })
  .openapi({
    required: ['Name', 'ConsumedValue', 'Unit'],
    description: 'Usage associated with an entitlement resource.',
  })
  .openapi('EntitlementUsage')

const EntitlementUsageListSchema = z.array(EntitlementUsageSchema).openapi('EntitlementUsageList')

const LicenseUsageSchema = z
  .object({
    EntitlementUsages: EntitlementUsageListSchema.exactOptional().openapi({
      description: 'License entitlement usages.',
    }),
  })
  .openapi({
    description: 'Describes the entitlement usage associated with a license.',
    required: [],
  })
  .openapi('LicenseUsage')

const GetLicenseUsageResponseSchema = z
  .object({
    LicenseUsage: LicenseUsageSchema.exactOptional().openapi({
      description: 'License usage details.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseUsageResponse')

const GetLicenseUsageRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
  })
  .openapi({ required: ['LicenseArn'], title: 'GetLicenseUsageRequest' })
  .openapi('GetLicenseUsageRequest')

const OrganizationConfigurationSchema = z
  .object({
    EnableIntegration: BooleanSchema.openapi({ description: 'Enables Organizations integration.' }),
  })
  .openapi({
    required: ['EnableIntegration'],
    description: 'Configuration information for Organizations.',
  })
  .openapi('OrganizationConfiguration')

const GetServiceSettingsResponseSchema = z
  .object({
    S3BucketArn: StringSchema.exactOptional().openapi({
      description:
        'Regional S3 bucket path for storing reports, license trail event data, discovery data, and so on.',
    }),
    SnsTopicArn: StringSchema.exactOptional().openapi({
      description: 'SNS topic configured to receive notifications from License Manager.',
    }),
    OrganizationConfiguration: OrganizationConfigurationSchema.exactOptional().openapi({
      description:
        'Indicates whether Organizations is integrated with License Manager for cross-account discovery.',
    }),
    EnableCrossAccountsDiscovery: BoxBooleanSchema.exactOptional().openapi({
      description: 'Indicates whether cross-account discovery is enabled.',
    }),
    LicenseManagerResourceShareArn: StringSchema.exactOptional().openapi({
      description:
        'Amazon Resource Name (ARN) of the resource share. The License Manager management account provides member accounts with access to this share.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetServiceSettingsResponse')

const GetServiceSettingsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetServiceSettingsRequest' })
  .openapi('GetServiceSettingsRequest')

const LicenseConfigurationAssociationSchema = z
  .object({
    ResourceArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the resource.',
    }),
    ResourceType: ResourceTypeSchema.exactOptional().openapi({
      description: 'Type of server resource.',
    }),
    ResourceOwnerId: StringSchema.exactOptional().openapi({
      description:
        'ID of the Amazon Web Services account that owns the resource consuming licenses.',
    }),
    AssociationTime: DateTimeSchema.exactOptional().openapi({
      description: 'Time when the license configuration was associated with the resource.',
    }),
    AmiAssociationScope: StringSchema.exactOptional().openapi({
      description: 'Scope of AMI associations. The possible value is <code>cross-account</code>.',
    }),
  })
  .openapi({ description: 'Describes an association with a license configuration.', required: [] })
  .openapi('LicenseConfigurationAssociation')

const LicenseConfigurationAssociationsSchema = z
  .array(LicenseConfigurationAssociationSchema)
  .openapi('LicenseConfigurationAssociations')

const ListAssociationsForLicenseConfigurationResponseSchema = z
  .object({
    LicenseConfigurationAssociations:
      LicenseConfigurationAssociationsSchema.exactOptional().openapi({
        description: 'Information about the associations for the license configuration.',
      }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAssociationsForLicenseConfigurationResponse')

const ListAssociationsForLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of a license configuration.',
    }),
    MaxResults: BoxIntegerSchema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({
    required: ['LicenseConfigurationArn'],
    title: 'ListAssociationsForLicenseConfigurationRequest',
  })
  .openapi('ListAssociationsForLicenseConfigurationRequest')

const FilterLimitExceededExceptionSchema = z.any().openapi('FilterLimitExceededException')

const GrantListSchema = z.array(GrantSchema).openapi('GrantList')

const ListDistributedGrantsResponseSchema = z
  .object({
    Grants: GrantListSchema.exactOptional().openapi({ description: 'Distributed grant details.' }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDistributedGrantsResponse')

const FilterNameSchema = z.string().openapi('FilterName')

const FilterValueSchema = z.string().openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).openapi('FilterValues')

const FilterSchema = z
  .object({
    Name: FilterNameSchema.exactOptional().openapi({
      description: 'Name of the filter. Filter names are case-sensitive.',
    }),
    Values: FilterValuesSchema.exactOptional().openapi({
      description:
        'The value of the filter, which is case-sensitive. You can only specify one value for the filter.',
    }),
  })
  .openapi({
    description:
      'A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.',
    required: [],
  })
  .openapi('Filter')

const FilterListSchema = z.array(FilterSchema).openapi('FilterList')

const MaxSize100Schema = z.int().min(1).max(100).openapi('MaxSize100')

const ListDistributedGrantsRequestSchema = z
  .object({
    GrantArns: ArnListSchema.exactOptional().openapi({
      description: 'Amazon Resource Names (ARNs) of the grants.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>LicenseArn</code> </p> </li> <li> <p> <code>GrantStatus</code> </p> </li> <li> <p> <code>GranteePrincipalARN</code> </p> </li> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>LicenseIssuerName</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ title: 'ListDistributedGrantsRequest', required: [] })
  .openapi('ListDistributedGrantsRequest')

const LicenseOperationFailureSchema = z
  .object({
    ResourceArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the resource.',
    }),
    ResourceType: ResourceTypeSchema.exactOptional().openapi({ description: 'Resource type.' }),
    ErrorMessage: StringSchema.exactOptional().openapi({ description: 'Error message.' }),
    FailureTime: DateTimeSchema.exactOptional().openapi({ description: 'Failure time.' }),
    OperationName: StringSchema.exactOptional().openapi({ description: 'Name of the operation.' }),
    ResourceOwnerId: StringSchema.exactOptional().openapi({
      description: 'ID of the Amazon Web Services account that owns the resource.',
    }),
    OperationRequestedBy: StringSchema.exactOptional().openapi({
      description: 'The requester is "License Manager Automated Discovery".',
    }),
    MetadataList: MetadataListSchema.exactOptional().openapi({ description: 'Reserved.' }),
  })
  .openapi({ description: 'Describes the failure of a license operation.', required: [] })
  .openapi('LicenseOperationFailure')

const LicenseOperationFailureListSchema = z
  .array(LicenseOperationFailureSchema)
  .openapi('LicenseOperationFailureList')

const ListFailuresForLicenseConfigurationOperationsResponseSchema = z
  .object({
    LicenseOperationFailureList: LicenseOperationFailureListSchema.exactOptional().openapi({
      description: 'License configuration operations that failed.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFailuresForLicenseConfigurationOperationsResponse')

const ListFailuresForLicenseConfigurationOperationsRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.openapi({
      description: 'Amazon Resource Name of the license configuration.',
    }),
    MaxResults: BoxIntegerSchema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({
    required: ['LicenseConfigurationArn'],
    title: 'ListFailuresForLicenseConfigurationOperationsRequest',
  })
  .openapi('ListFailuresForLicenseConfigurationOperationsRequest')

const ListLicenseConfigurationsResponseSchema: z.ZodType<ListLicenseConfigurationsResponseType> = z
  .object({
    LicenseConfigurations: LicenseConfigurationsSchema.exactOptional().openapi({
      description: 'Information about the license configurations.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseConfigurationsResponse')

const FiltersSchema = z.array(FilterSchema).openapi('Filters')

const ListLicenseConfigurationsRequestSchema = z
  .object({
    LicenseConfigurationArns: StringListSchema.exactOptional().openapi({
      description: 'Amazon Resource Names (ARN) of the license configurations.',
    }),
    MaxResults: BoxIntegerSchema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    Filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters and logical operators are supported:</p> <ul> <li> <p> <code>licenseCountingType</code> - The dimension for which licenses are counted. Possible values are <code>vCPU</code> | <code>Instance</code> | <code>Core</code> | <code>Socket</code>. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>enforceLicenseCount</code> - A Boolean value that indicates whether hard license enforcement is used. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>usagelimitExceeded</code> - A Boolean value that indicates whether the available licenses have been exceeded. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> </ul>',
    }),
  })
  .openapi({ title: 'ListLicenseConfigurationsRequest', required: [] })
  .openapi('ListLicenseConfigurationsRequest')

const LicenseConversionTaskSchema = z
  .object({
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.exactOptional().openapi({
      description: 'The ID of the license type conversion task.',
    }),
    ResourceArn: StringSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the resource associated with the license type conversion task.',
    }),
    SourceLicenseContext: LicenseConversionContextSchema.exactOptional().openapi({
      description: 'Information about the license type this conversion task converted from.',
    }),
    DestinationLicenseContext: LicenseConversionContextSchema.exactOptional().openapi({
      description: 'Information about the license type this conversion task converted to.',
    }),
    Status: LicenseConversionTaskStatusSchema.exactOptional().openapi({
      description: 'The status of the conversion task.',
    }),
    StatusMessage: StringSchema.exactOptional().openapi({
      description: 'The status message for the conversion task.',
    }),
    StartTime: DateTimeSchema.exactOptional().openapi({
      description: 'The time the conversion task was started at.',
    }),
    LicenseConversionTime: DateTimeSchema.exactOptional().openapi({
      description: 'The time the usage operation value of the resource was changed.',
    }),
    EndTime: DateTimeSchema.exactOptional().openapi({
      description: 'The time the conversion task was completed.',
    }),
  })
  .openapi({ description: 'Information about a license type conversion task.', required: [] })
  .openapi('LicenseConversionTask')

const LicenseConversionTasksSchema = z
  .array(LicenseConversionTaskSchema)
  .openapi('LicenseConversionTasks')

const ListLicenseConversionTasksResponseSchema = z
  .object({
    LicenseConversionTasks: LicenseConversionTasksSchema.exactOptional().openapi({
      description: 'Information about the license configuration tasks for your account.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseConversionTasksResponse')

const ListLicenseConversionTasksRequestSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: BoxIntegerSchema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
    Filters: FiltersSchema.exactOptional().openapi({
      description:
        ' Filters to scope the results. Valid filters are <code>ResourceArns</code> and <code>Status</code>. ',
    }),
  })
  .openapi({ title: 'ListLicenseConversionTasksRequest', required: [] })
  .openapi('ListLicenseConversionTasksRequest')

const ReportGeneratorListSchema = z.array(ReportGeneratorSchema).openapi('ReportGeneratorList')

const ListLicenseManagerReportGeneratorsResponseSchema = z
  .object({
    ReportGenerators: ReportGeneratorListSchema.exactOptional().openapi({
      description:
        'A report generator that creates periodic reports about your license configurations.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseManagerReportGeneratorsResponse')

const ListLicenseManagerReportGeneratorsRequestSchema = z
  .object({
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters are supported: </p> <ul> <li> <p> <code>LicenseConfigurationArn</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ title: 'ListLicenseManagerReportGeneratorsRequest', required: [] })
  .openapi('ListLicenseManagerReportGeneratorsRequest')

const LicenseSpecificationSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
    AmiAssociationScope: StringSchema.exactOptional().openapi({
      description: 'Scope of AMI associations. The possible value is <code>cross-account</code>.',
    }),
  })
  .openapi({
    required: ['LicenseConfigurationArn'],
    description: 'Details for associating a license configuration with a resource.',
  })
  .openapi('LicenseSpecification')

const LicenseSpecificationsSchema = z
  .array(LicenseSpecificationSchema)
  .openapi('LicenseSpecifications')

const ListLicenseSpecificationsForResourceResponseSchema = z
  .object({
    LicenseSpecifications: LicenseSpecificationsSchema.exactOptional().openapi({
      description: 'License configurations associated with a resource.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseSpecificationsForResourceResponse')

const ListLicenseSpecificationsForResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.openapi({
      description:
        'Amazon Resource Name (ARN) of a resource that has an associated license configuration.',
    }),
    MaxResults: BoxIntegerSchema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListLicenseSpecificationsForResourceRequest' })
  .openapi('ListLicenseSpecificationsForResourceRequest')

const LicenseListSchema = z.array(LicenseSchema).openapi('LicenseList')

const ListLicenseVersionsResponseSchema = z
  .object({
    Licenses: LicenseListSchema.exactOptional().openapi({ description: 'License details.' }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseVersionsResponse')

const ListLicenseVersionsRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ required: ['LicenseArn'], title: 'ListLicenseVersionsRequest' })
  .openapi('ListLicenseVersionsRequest')

const ListLicensesResponseSchema = z
  .object({
    Licenses: LicenseListSchema.exactOptional().openapi({ description: 'License details.' }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLicensesResponse')

const ListLicensesRequestSchema = z
  .object({
    LicenseArns: ArnListSchema.exactOptional().openapi({
      description: 'Amazon Resource Names (ARNs) of the licenses.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>Beneficiary</code> </p> </li> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>Fingerprint</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ title: 'ListLicensesRequest', required: [] })
  .openapi('ListLicensesRequest')

const ListReceivedGrantsResponseSchema = z
  .object({
    Grants: GrantListSchema.exactOptional().openapi({ description: 'Received grant details.' }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedGrantsResponse')

const ListReceivedGrantsRequestSchema = z
  .object({
    GrantArns: ArnListSchema.exactOptional().openapi({
      description: 'Amazon Resource Names (ARNs) of the grants.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>LicenseIssuerName</code> </p> </li> <li> <p> <code>LicenseArn</code> </p> </li> <li> <p> <code>GrantStatus</code> </p> </li> <li> <p> <code>GranterAccountId</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ title: 'ListReceivedGrantsRequest', required: [] })
  .openapi('ListReceivedGrantsRequest')

const ListReceivedGrantsForOrganizationResponseSchema = z
  .object({
    Grants: GrantListSchema.exactOptional().openapi({
      description: 'Lists the grants the organization has received.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedGrantsForOrganizationResponse')

const ListReceivedGrantsForOrganizationRequestSchema = z
  .object({
    LicenseArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the received license.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>ParentArn</code> </p> </li> <li> <p> <code>GranteePrincipalArn</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ required: ['LicenseArn'], title: 'ListReceivedGrantsForOrganizationRequest' })
  .openapi('ListReceivedGrantsForOrganizationRequest')

const ReceivedStatusSchema = z
  .enum([
    'PENDING_WORKFLOW',
    'PENDING_ACCEPT',
    'REJECTED',
    'ACTIVE',
    'FAILED_WORKFLOW',
    'DELETED',
    'DISABLED',
    'WORKFLOW_COMPLETED',
  ])
  .openapi('ReceivedStatus')

const ReceivedMetadataSchema = z
  .object({
    ReceivedStatus: ReceivedStatusSchema.exactOptional().openapi({
      description: 'Received status.',
    }),
    ReceivedStatusReason: StatusReasonMessageSchema.exactOptional().openapi({
      description: 'Received status reason.',
    }),
    AllowedOperations: AllowedOperationListSchema.exactOptional().openapi({
      description: 'Allowed operations.',
    }),
  })
  .openapi({ description: 'Metadata associated with received licenses and grants.', required: [] })
  .openapi('ReceivedMetadata')

const GrantedLicenseSchema = z
  .object({
    LicenseArn: ArnSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license.',
    }),
    LicenseName: StringSchema.exactOptional().openapi({ description: 'License name.' }),
    ProductName: StringSchema.exactOptional().openapi({ description: 'Product name.' }),
    ProductSKU: StringSchema.exactOptional().openapi({ description: 'Product SKU.' }),
    Issuer: IssuerDetailsSchema.exactOptional().openapi({ description: 'Granted license issuer.' }),
    HomeRegion: StringSchema.exactOptional().openapi({
      description: 'Home Region of the granted license.',
    }),
    Status: LicenseStatusSchema.exactOptional().openapi({ description: 'Granted license status.' }),
    Validity: DatetimeRangeSchema.exactOptional().openapi({
      description:
        'Date and time range during which the granted license is valid, in ISO8601-UTC format.',
    }),
    Beneficiary: StringSchema.exactOptional().openapi({
      description: 'Granted license beneficiary.',
    }),
    Entitlements: EntitlementListSchema.exactOptional().openapi({
      description: 'License entitlements.',
    }),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.exactOptional().openapi({
      description: 'Configuration for consumption of the license.',
    }),
    LicenseMetadata: MetadataListSchema.exactOptional().openapi({
      description: 'Granted license metadata.',
    }),
    CreateTime: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Creation time of the granted license.',
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'Version of the granted license.',
    }),
    ReceivedMetadata: ReceivedMetadataSchema.exactOptional().openapi({
      description: 'Granted license received metadata.',
    }),
  })
  .openapi({ description: 'Describes a license that is granted to a grantee.', required: [] })
  .openapi('GrantedLicense')

const GrantedLicenseListSchema = z.array(GrantedLicenseSchema).openapi('GrantedLicenseList')

const ListReceivedLicensesResponseSchema = z
  .object({
    Licenses: GrantedLicenseListSchema.exactOptional().openapi({
      description: 'Received license details.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedLicensesResponse')

const ListReceivedLicensesRequestSchema = z
  .object({
    LicenseArns: ArnListSchema.exactOptional().openapi({
      description: 'Amazon Resource Names (ARNs) of the licenses.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Fingerprint</code> </p> </li> <li> <p> <code>IssuerName</code> </p> </li> <li> <p> <code>Beneficiary</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ title: 'ListReceivedLicensesRequest', required: [] })
  .openapi('ListReceivedLicensesRequest')

const ListReceivedLicensesForOrganizationResponseSchema = z
  .object({
    Licenses: GrantedLicenseListSchema.exactOptional().openapi({
      description: 'Lists the licenses the organization has received.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedLicensesForOrganizationResponse')

const ListReceivedLicensesForOrganizationRequestSchema = z
  .object({
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>Beneficiary</code> </p> </li> <li> <p> <code>ProductSKU</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ title: 'ListReceivedLicensesForOrganizationRequest', required: [] })
  .openapi('ListReceivedLicensesForOrganizationRequest')

const ResourceInventorySchema = z
  .object({
    ResourceId: StringSchema.exactOptional().openapi({ description: 'ID of the resource.' }),
    ResourceType: ResourceTypeSchema.exactOptional().openapi({ description: 'Type of resource.' }),
    ResourceArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the resource.',
    }),
    Platform: StringSchema.exactOptional().openapi({ description: 'Platform of the resource.' }),
    PlatformVersion: StringSchema.exactOptional().openapi({
      description: 'Platform version of the resource in the inventory.',
    }),
    ResourceOwningAccountId: StringSchema.exactOptional().openapi({
      description: 'ID of the account that owns the resource.',
    }),
  })
  .openapi({ description: 'Details about a resource.', required: [] })
  .openapi('ResourceInventory')

const ResourceInventoryListSchema = z
  .array(ResourceInventorySchema)
  .openapi('ResourceInventoryList')

const ListResourceInventoryResponseSchema = z
  .object({
    ResourceInventoryList: ResourceInventoryListSchema.exactOptional().openapi({
      description: 'Information about the resources.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListResourceInventoryResponse')

const InventoryFilterConditionSchema = z
  .enum(['EQUALS', 'NOT_EQUALS', 'BEGINS_WITH', 'CONTAINS'])
  .openapi('InventoryFilterCondition')

const InventoryFilterSchema = z
  .object({
    Name: StringSchema.openapi({ description: 'Name of the filter.' }),
    Condition: InventoryFilterConditionSchema.openapi({ description: 'Condition of the filter.' }),
    Value: StringSchema.exactOptional().openapi({ description: 'Value of the filter.' }),
  })
  .openapi({ required: ['Name', 'Condition'], description: 'An inventory filter.' })
  .openapi('InventoryFilter')

const InventoryFilterListSchema = z.array(InventoryFilterSchema).openapi('InventoryFilterList')

const ListResourceInventoryRequestSchema = z
  .object({
    MaxResults: BoxIntegerSchema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    Filters: InventoryFilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters and logical operators are supported:</p> <ul> <li> <p> <code>account_id</code> - The ID of the Amazon Web Services account that owns the resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>application_name</code> - The name of the application. Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p> </li> <li> <p> <code>license_included</code> - The type of license included. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>. Possible values are <code>sql-server-enterprise</code> | <code>sql-server-standard</code> | <code>sql-server-web</code> | <code>windows-server-datacenter</code>.</p> </li> <li> <p> <code>platform</code> - The platform of the resource. Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p> </li> <li> <p> <code>resource_id</code> - The ID of the resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>tag:&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Logical operators are <code>EQUALS</code> (single account) or <code>EQUALS</code> | <code>NOT_EQUALS</code> (cross account).</p> </li> </ul>',
    }),
  })
  .openapi({ title: 'ListResourceInventoryRequest', required: [] })
  .openapi('ListResourceInventoryRequest')

const FailedDependencyExceptionSchema = z.any().openapi('FailedDependencyException')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.exactOptional().openapi({ description: 'Information about the tags.' }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TokenDataSchema = z
  .object({
    TokenId: StringSchema.exactOptional().openapi({ description: 'Token ID.' }),
    TokenType: StringSchema.exactOptional().openapi({
      description: 'Type of token generated. The supported value is <code>REFRESH_TOKEN</code>.',
    }),
    LicenseArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the license.',
    }),
    ExpirationTime: ISO8601DateTimeSchema.exactOptional().openapi({
      description: 'Token expiration time, in ISO8601-UTC format.',
    }),
    TokenProperties: MaxSize3StringListSchema.exactOptional().openapi({
      description: 'Data specified by the caller.',
    }),
    RoleArns: ArnListSchema.exactOptional().openapi({
      description: 'Amazon Resource Names (ARN) of the roles included in the token.',
    }),
    Status: StringSchema.exactOptional().openapi({
      description:
        'Token status. The possible values are <code>AVAILABLE</code> and <code>DELETED</code>.',
    }),
  })
  .openapi({ description: 'Describes a token.', required: [] })
  .openapi('TokenData')

const TokenListSchema = z.array(TokenDataSchema).openapi('TokenList')

const ListTokensResponseSchema = z
  .object({
    Tokens: TokenListSchema.exactOptional().openapi({ description: 'Received token details.' }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTokensResponse')

const ListTokensRequestSchema = z
  .object({
    TokenIds: StringListSchema.exactOptional().openapi({ description: 'Token IDs.' }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filter is supported:</p> <ul> <li> <p> <code>LicenseArns</code> </p> </li> </ul>',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    MaxResults: MaxSize100Schema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
  })
  .openapi({ title: 'ListTokensRequest', required: [] })
  .openapi('ListTokensRequest')

const LicenseConfigurationUsageSchema = z
  .object({
    ResourceArn: StringSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the resource.',
    }),
    ResourceType: ResourceTypeSchema.exactOptional().openapi({ description: 'Type of resource.' }),
    ResourceStatus: StringSchema.exactOptional().openapi({
      description: 'Status of the resource.',
    }),
    ResourceOwnerId: StringSchema.exactOptional().openapi({
      description: 'ID of the account that owns the resource.',
    }),
    AssociationTime: DateTimeSchema.exactOptional().openapi({
      description:
        'Time when the license configuration was initially associated with the resource.',
    }),
    ConsumedLicenses: BoxLongSchema.exactOptional().openapi({
      description: 'Number of licenses consumed by the resource.',
    }),
  })
  .openapi({
    description: 'Details about the usage of a resource associated with a license configuration.',
    required: [],
  })
  .openapi('LicenseConfigurationUsage')

const LicenseConfigurationUsageListSchema = z
  .array(LicenseConfigurationUsageSchema)
  .openapi('LicenseConfigurationUsageList')

const ListUsageForLicenseConfigurationResponseSchema = z
  .object({
    LicenseConfigurationUsageList: LicenseConfigurationUsageListSchema.exactOptional().openapi({
      description: 'Information about the license configurations.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListUsageForLicenseConfigurationResponse')

const ListUsageForLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
    MaxResults: BoxIntegerSchema.exactOptional().openapi({
      description: 'Maximum number of results to return in a single call.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description: 'Token for the next set of results.',
    }),
    Filters: FiltersSchema.exactOptional().openapi({
      description:
        '<p>Filters to scope the results. The following filters and logical operators are supported:</p> <ul> <li> <p> <code>resourceArn</code> - The ARN of the license configuration resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>resourceType</code> - The resource type (<code>EC2_INSTANCE</code> | <code>EC2_HOST</code> | <code>EC2_AMI</code> | <code>SYSTEMS_MANAGER_MANAGED_INSTANCE</code>). Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>resourceAccount</code> - The ID of the account that owns the resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> </ul>',
    }),
  })
  .openapi({
    required: ['LicenseConfigurationArn'],
    title: 'ListUsageForLicenseConfigurationRequest',
  })
  .openapi('ListUsageForLicenseConfigurationRequest')

const RejectGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.exactOptional().openapi({ description: 'Grant ARN.' }),
    Status: GrantStatusSchema.exactOptional().openapi({ description: 'Grant status.' }),
    Version: StringSchema.exactOptional().openapi({ description: 'Grant version.' }),
  })
  .openapi({ required: [] })
  .openapi('RejectGrantResponse')

const RejectGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
  })
  .openapi({ required: ['GrantArn'], title: 'RejectGrantRequest' })
  .openapi('RejectGrantRequest')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
    Tags: TagListSchema.openapi({ description: 'One or more tags.' }),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(StringSchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
    TagKeys: TagKeyListSchema.openapi({ description: 'Keys identifying the tags to remove.' }),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateLicenseConfigurationResponseSchema = z
  .looseObject({})
  .openapi('UpdateLicenseConfigurationResponse')

const LicenseConfigurationStatusSchema = z
  .enum(['AVAILABLE', 'DISABLED'])
  .openapi('LicenseConfigurationStatus')

const UpdateLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the license configuration.',
    }),
    LicenseConfigurationStatus: LicenseConfigurationStatusSchema.exactOptional().openapi({
      description: 'New status of the license configuration.',
    }),
    LicenseRules: StringListSchema.exactOptional().openapi({
      description:
        'New license rule. The only rule that you can add after you create a license configuration is licenseAffinityToHost.',
    }),
    LicenseCount: BoxLongSchema.exactOptional().openapi({
      description: 'New number of licenses managed by the license configuration.',
    }),
    LicenseCountHardLimit: BoxBooleanSchema.exactOptional().openapi({
      description: 'New hard limit of the number of available licenses.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'New name of the license configuration.',
    }),
    Description: StringSchema.exactOptional().openapi({
      description: 'New description of the license configuration.',
    }),
    ProductInformationList: ProductInformationListSchema.exactOptional().openapi({
      description: 'New product information.',
    }),
    DisassociateWhenNotFound: BoxBooleanSchema.exactOptional().openapi({
      description: 'When true, disassociates a resource when software is uninstalled.',
    }),
  })
  .openapi({ required: ['LicenseConfigurationArn'], title: 'UpdateLicenseConfigurationRequest' })
  .openapi('UpdateLicenseConfigurationRequest')

const UpdateLicenseManagerReportGeneratorResponseSchema = z
  .looseObject({})
  .openapi('UpdateLicenseManagerReportGeneratorResponse')

const UpdateLicenseManagerReportGeneratorRequestSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the report generator to update.',
    }),
    ReportGeneratorName: ReportGeneratorNameSchema.openapi({
      description: 'Name of the report generator.',
    }),
    Type: ReportTypeListSchema.openapi({
      description:
        '<p>Type of reports to generate. The following report types are supported:</p> <ul> <li> <p>License configuration report - Reports the number and details of consumed licenses for a license configuration.</p> </li> <li> <p>Resource report - Reports the tracked licenses and resource consumption for a license configuration.</p> </li> </ul>',
    }),
    ReportContext: ReportContextSchema.openapi({ description: 'The report context.' }),
    ReportFrequency: ReportFrequencySchema.openapi({
      description: 'Frequency by which reports are generated.',
    }),
    ClientToken: ClientRequestTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
    }),
    Description: StringSchema.exactOptional().openapi({
      description: 'Description of the report generator.',
    }),
  })
  .openapi({
    required: [
      'LicenseManagerReportGeneratorArn',
      'ReportGeneratorName',
      'Type',
      'ReportContext',
      'ReportFrequency',
      'ClientToken',
    ],
    title: 'UpdateLicenseManagerReportGeneratorRequest',
  })
  .openapi('UpdateLicenseManagerReportGeneratorRequest')

const UpdateLicenseSpecificationsForResourceResponseSchema = z
  .looseObject({})
  .openapi('UpdateLicenseSpecificationsForResourceResponse')

const UpdateLicenseSpecificationsForResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.openapi({
      description: 'Amazon Resource Name (ARN) of the Amazon Web Services resource.',
    }),
    AddLicenseSpecifications: LicenseSpecificationsSchema.exactOptional().openapi({
      description: 'ARNs of the license configurations to add.',
    }),
    RemoveLicenseSpecifications: LicenseSpecificationsSchema.exactOptional().openapi({
      description: 'ARNs of the license configurations to remove.',
    }),
  })
  .openapi({ required: ['ResourceArn'], title: 'UpdateLicenseSpecificationsForResourceRequest' })
  .openapi('UpdateLicenseSpecificationsForResourceRequest')

const InvalidResourceStateExceptionSchema = z.any().openapi('InvalidResourceStateException')

const LicenseUsageExceptionSchema = z.any().openapi('LicenseUsageException')

const UpdateServiceSettingsResponseSchema = z
  .looseObject({})
  .openapi('UpdateServiceSettingsResponse')

const UpdateServiceSettingsRequestSchema = z
  .object({
    S3BucketArn: StringSchema.exactOptional().openapi({
      description:
        'Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.',
    }),
    SnsTopicArn: StringSchema.exactOptional().openapi({
      description:
        'Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.',
    }),
    OrganizationConfiguration: OrganizationConfigurationSchema.exactOptional().openapi({
      description: 'Enables integration with Organizations for cross-account discovery.',
    }),
    EnableCrossAccountsDiscovery: BoxBooleanSchema.exactOptional().openapi({
      description: 'Activates cross-account discovery.',
    }),
  })
  .openapi({ title: 'UpdateServiceSettingsRequest', required: [] })
  .openapi('UpdateServiceSettingsRequest')

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

export const postXAmzTargetAWSLicenseManagerAcceptGrantRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.AcceptGrant',
  description: 'Accepts the specified grant.',
  operationId: 'AcceptGrant',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.AcceptGrant')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.AcceptGrant'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptGrantRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptGrantResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCheckInLicenseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CheckInLicense',
  description: 'Checks in the specified license. Check in a license when it is no longer in use.',
  operationId: 'CheckInLicense',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CheckInLicense')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CheckInLicense'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CheckInLicenseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CheckInLicenseResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense',
  description: 'Checks out the specified license for offline use.',
  operationId: 'CheckoutBorrowLicense',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CheckoutBorrowLicense')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CheckoutBorrowLicense'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CheckoutBorrowLicenseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CheckoutBorrowLicenseResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'NoEntitlementsAllowedException',
      content: { 'application/json': { schema: NoEntitlementsAllowedExceptionSchema } },
    },
    484: {
      description: 'EntitlementNotAllowedException',
      content: { 'application/json': { schema: EntitlementNotAllowedExceptionSchema } },
    },
    485: {
      description: 'UnsupportedDigitalSignatureMethodException',
      content: { 'application/json': { schema: UnsupportedDigitalSignatureMethodExceptionSchema } },
    },
    486: {
      description: 'RedirectException',
      content: { 'application/json': { schema: RedirectExceptionSchema } },
    },
    487: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    488: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    489: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    490: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCheckoutLicenseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CheckoutLicense',
  description:
    '<p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>',
  operationId: 'CheckoutLicense',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CheckoutLicense')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CheckoutLicense'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CheckoutLicenseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CheckoutLicenseResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'NoEntitlementsAllowedException',
      content: { 'application/json': { schema: NoEntitlementsAllowedExceptionSchema } },
    },
    484: {
      description: 'UnsupportedDigitalSignatureMethodException',
      content: { 'application/json': { schema: UnsupportedDigitalSignatureMethodExceptionSchema } },
    },
    485: {
      description: 'RedirectException',
      content: { 'application/json': { schema: RedirectExceptionSchema } },
    },
    486: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    488: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    489: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCreateGrantRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CreateGrant',
  description:
    'Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.',
  operationId: 'CreateGrant',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CreateGrant')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CreateGrant'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateGrantRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGrantResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCreateGrantVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CreateGrantVersion',
  description:
    'Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.',
  operationId: 'CreateGrantVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CreateGrantVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CreateGrantVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGrantVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGrantVersionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCreateLicenseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CreateLicense',
  description: 'Creates a license.',
  operationId: 'CreateLicense',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CreateLicense')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CreateLicense'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLicenseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLicenseResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'RedirectException',
      content: { 'application/json': { schema: RedirectExceptionSchema } },
    },
    483: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCreateLicenseConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration',
  description:
    '<p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>',
  operationId: 'CreateLicenseConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CreateLicenseConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CreateLicenseConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLicenseConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLicenseConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource',
    description: 'Creates a new license conversion task.',
    operationId: 'CreateLicenseConversionTaskForResource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSLicenseManager.CreateLicenseConversionTaskForResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLicenseManager.CreateLicenseConversionTaskForResource'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: CreateLicenseConversionTaskForResourceRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: CreateLicenseConversionTaskForResourceResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      482: {
        description: 'ServerInternalException',
        content: { 'application/json': { schema: ServerInternalExceptionSchema } },
      },
      483: {
        description: 'AuthorizationException',
        content: { 'application/json': { schema: AuthorizationExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'RateLimitExceededException',
        content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator',
  description: 'Creates a report generator.',
  operationId: 'CreateLicenseManagerReportGenerator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CreateLicenseManagerReportGenerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.CreateLicenseManagerReportGenerator'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLicenseManagerReportGeneratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateLicenseManagerReportGeneratorResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCreateLicenseVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion',
  description: 'Creates a new version of the specified license.',
  operationId: 'CreateLicenseVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CreateLicenseVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CreateLicenseVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLicenseVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLicenseVersionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'RedirectException',
      content: { 'application/json': { schema: RedirectExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    486: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    487: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerCreateTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.CreateToken',
  description:
    '<p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>',
  operationId: 'CreateToken',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.CreateToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.CreateToken'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTokenRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTokenResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'RedirectException',
      content: { 'application/json': { schema: RedirectExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerDeleteGrantRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.DeleteGrant',
  description: 'Deletes the specified grant.',
  operationId: 'DeleteGrant',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.DeleteGrant')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.DeleteGrant'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteGrantRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGrantResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerDeleteLicenseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.DeleteLicense',
  description: 'Deletes the specified license.',
  operationId: 'DeleteLicense',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.DeleteLicense')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.DeleteLicense'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLicenseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLicenseResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'RedirectException',
      content: { 'application/json': { schema: RedirectExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration',
  description:
    '<p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>',
  operationId: 'DeleteLicenseConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.DeleteLicenseConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.DeleteLicenseConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLicenseConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLicenseConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator',
  description:
    '<p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>',
  operationId: 'DeleteLicenseManagerReportGenerator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.DeleteLicenseManagerReportGenerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.DeleteLicenseManagerReportGenerator'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLicenseManagerReportGeneratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DeleteLicenseManagerReportGeneratorResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerDeleteTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.DeleteToken',
  description: 'Deletes the specified token. Must be called in the license home Region.',
  operationId: 'DeleteToken',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.DeleteToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.DeleteToken'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTokenRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTokenResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'RedirectException',
      content: { 'application/json': { schema: RedirectExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerExtendLicenseConsumptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption',
  description: 'Extends the expiration date for license consumption.',
  operationId: 'ExtendLicenseConsumption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ExtendLicenseConsumption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ExtendLicenseConsumption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExtendLicenseConsumptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExtendLicenseConsumptionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetAccessTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetAccessToken',
  description:
    'Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.',
  operationId: 'GetAccessToken',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetAccessToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.GetAccessToken'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAccessTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccessTokenResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetGrantRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetGrant',
  description: 'Gets detailed information about the specified grant.',
  operationId: 'GetGrant',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetGrant')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.GetGrant'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetGrantRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGrantResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetLicenseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetLicense',
  description: 'Gets detailed information about the specified license.',
  operationId: 'GetLicense',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetLicense')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.GetLicense'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetLicenseRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLicenseResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetLicenseConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration',
  description: 'Gets detailed information about the specified license configuration.',
  operationId: 'GetLicenseConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetLicenseConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.GetLicenseConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLicenseConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLicenseConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetLicenseConversionTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask',
  description: 'Gets information about the specified license type conversion task.',
  operationId: 'GetLicenseConversionTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetLicenseConversionTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.GetLicenseConversionTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLicenseConversionTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLicenseConversionTaskResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator',
  description: 'Gets information about the specified report generator.',
  operationId: 'GetLicenseManagerReportGenerator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetLicenseManagerReportGenerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.GetLicenseManagerReportGenerator'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLicenseManagerReportGeneratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLicenseManagerReportGeneratorResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetLicenseUsageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetLicenseUsage',
  description: 'Gets detailed information about the usage of the specified license.',
  operationId: 'GetLicenseUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetLicenseUsage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.GetLicenseUsage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLicenseUsageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLicenseUsageResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerGetServiceSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.GetServiceSettings',
  description: 'Gets the License Manager settings for the current Region.',
  operationId: 'GetServiceSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.GetServiceSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.GetServiceSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceSettingsResponseSchema } },
    },
    480: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    481: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration',
    description:
      '<p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>',
    operationId: 'ListAssociationsForLicenseConfiguration',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSLicenseManager.ListAssociationsForLicenseConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLicenseManager.ListAssociationsForLicenseConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListAssociationsForLicenseConfigurationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListAssociationsForLicenseConfigurationResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'FilterLimitExceededException',
        content: { 'application/json': { schema: FilterLimitExceededExceptionSchema } },
      },
      482: {
        description: 'ServerInternalException',
        content: { 'application/json': { schema: ServerInternalExceptionSchema } },
      },
      483: {
        description: 'AuthorizationException',
        content: { 'application/json': { schema: AuthorizationExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'RateLimitExceededException',
        content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLicenseManagerListDistributedGrantsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListDistributedGrants',
  description: 'Lists the grants distributed for the specified license.',
  operationId: 'ListDistributedGrants',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListDistributedGrants')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListDistributedGrants'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDistributedGrantsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDistributedGrantsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations',
    description: 'Lists the license configuration operations that failed.',
    operationId: 'ListFailuresForLicenseConfigurationOperations',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSLicenseManager.ListFailuresForLicenseConfigurationOperations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLicenseManager.ListFailuresForLicenseConfigurationOperations'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: ListFailuresForLicenseConfigurationOperationsRequestSchema,
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
            schema: ListFailuresForLicenseConfigurationOperationsResponseSchema,
          },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'ServerInternalException',
        content: { 'application/json': { schema: ServerInternalExceptionSchema } },
      },
      482: {
        description: 'AuthorizationException',
        content: { 'application/json': { schema: AuthorizationExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'RateLimitExceededException',
        content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLicenseManagerListLicenseConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations',
  description: 'Lists the license configurations for your account.',
  operationId: 'ListLicenseConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListLicenseConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListLicenseConfigurations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLicenseConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLicenseConfigurationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'FilterLimitExceededException',
      content: { 'application/json': { schema: FilterLimitExceededExceptionSchema } },
    },
    483: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListLicenseConversionTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks',
  description: 'Lists the license type conversion tasks for your account.',
  operationId: 'ListLicenseConversionTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListLicenseConversionTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListLicenseConversionTasks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLicenseConversionTasksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLicenseConversionTasksResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators',
  description: 'Lists the report generators for your account.',
  operationId: 'ListLicenseManagerReportGenerators',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListLicenseManagerReportGenerators')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.ListLicenseManagerReportGenerators'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLicenseManagerReportGeneratorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLicenseManagerReportGeneratorsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource',
    description: 'Describes the license configurations for the specified resource.',
    operationId: 'ListLicenseSpecificationsForResource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSLicenseManager.ListLicenseSpecificationsForResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLicenseManager.ListLicenseSpecificationsForResource'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListLicenseSpecificationsForResourceRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListLicenseSpecificationsForResourceResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'ServerInternalException',
        content: { 'application/json': { schema: ServerInternalExceptionSchema } },
      },
      482: {
        description: 'AuthorizationException',
        content: { 'application/json': { schema: AuthorizationExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'RateLimitExceededException',
        content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSLicenseManagerListLicenseVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListLicenseVersions',
  description: 'Lists all versions of the specified license.',
  operationId: 'ListLicenseVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListLicenseVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListLicenseVersions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLicenseVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLicenseVersionsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListLicensesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListLicenses',
  description: 'Lists the licenses for your account.',
  operationId: 'ListLicenses',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListLicenses')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListLicenses'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLicensesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLicensesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListReceivedGrantsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrants',
  description:
    'Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.',
  operationId: 'ListReceivedGrants',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListReceivedGrants')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListReceivedGrants'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListReceivedGrantsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReceivedGrantsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization',
  description: 'Lists the grants received for all accounts in the organization.',
  operationId: 'ListReceivedGrantsForOrganization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListReceivedGrantsForOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.ListReceivedGrantsForOrganization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListReceivedGrantsForOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReceivedGrantsForOrganizationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListReceivedLicensesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses',
  description: 'Lists received licenses.',
  operationId: 'ListReceivedLicenses',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListReceivedLicenses')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListReceivedLicenses'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListReceivedLicensesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReceivedLicensesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization',
  description: 'Lists the licenses received for all accounts in the organization.',
  operationId: 'ListReceivedLicensesForOrganization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListReceivedLicensesForOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.ListReceivedLicensesForOrganization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListReceivedLicensesForOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListReceivedLicensesForOrganizationResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListResourceInventoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListResourceInventory',
  description: 'Lists resources managed using Systems Manager inventory.',
  operationId: 'ListResourceInventory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListResourceInventory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListResourceInventory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourceInventoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceInventoryResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'FilterLimitExceededException',
      content: { 'application/json': { schema: FilterLimitExceededExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListTagsForResource',
  description: 'Lists the tags for the specified license configuration.',
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
        .literal('AWSLicenseManager.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListTagsForResource'] },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListTokensRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListTokens',
  description: 'Lists your tokens.',
  operationId: 'ListTokens',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListTokens')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.ListTokens'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTokensRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTokensResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration',
  description:
    'Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.',
  operationId: 'ListUsageForLicenseConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.ListUsageForLicenseConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.ListUsageForLicenseConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListUsageForLicenseConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsageForLicenseConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'FilterLimitExceededException',
      content: { 'application/json': { schema: FilterLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    483: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerRejectGrantRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.RejectGrant',
  description: 'Rejects the specified grant.',
  operationId: 'RejectGrant',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.RejectGrant')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.RejectGrant'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RejectGrantRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectGrantResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.TagResource',
  description: 'Adds the specified tags to the specified license configuration.',
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
        .literal('AWSLicenseManager.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.TagResource'] },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.UntagResource',
  description: 'Removes the specified tags from the specified license configuration.',
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
        .literal('AWSLicenseManager.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.UntagResource'] },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration',
  description: 'Modifies the attributes of an existing license configuration.',
  operationId: 'UpdateLicenseConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.UpdateLicenseConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.UpdateLicenseConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLicenseConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLicenseConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator',
  description:
    '<p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>',
  operationId: 'UpdateLicenseManagerReportGenerator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.UpdateLicenseManagerReportGenerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLicenseManager.UpdateLicenseManagerReportGenerator'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLicenseManagerReportGeneratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateLicenseManagerReportGeneratorResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource',
    description:
      '<p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>',
    operationId: 'UpdateLicenseSpecificationsForResource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSLicenseManager.UpdateLicenseSpecificationsForResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLicenseManager.UpdateLicenseSpecificationsForResource'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateLicenseSpecificationsForResourceRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateLicenseSpecificationsForResourceResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'InvalidResourceStateException',
        content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
      },
      482: {
        description: 'LicenseUsageException',
        content: { 'application/json': { schema: LicenseUsageExceptionSchema } },
      },
      483: {
        description: 'ServerInternalException',
        content: { 'application/json': { schema: ServerInternalExceptionSchema } },
      },
      484: {
        description: 'AuthorizationException',
        content: { 'application/json': { schema: AuthorizationExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'RateLimitExceededException',
        content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLicenseManagerUpdateServiceSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings',
  description: 'Updates License Manager settings for the current Region.',
  operationId: 'UpdateServiceSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSLicenseManager.UpdateServiceSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLicenseManager.UpdateServiceSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceSettingsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'AuthorizationException',
      content: { 'application/json': { schema: AuthorizationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'RateLimitExceededException',
      content: { 'application/json': { schema: RateLimitExceededExceptionSchema } },
    },
  },
})
