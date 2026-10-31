import { createRoute, z } from '@hono/zod-openapi'

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

const StringSchema = z.string().openapi('String')

const AcceptGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.and(z.any().openapi({ description: 'Grant ARN.' })).exactOptional(),
    Status: GrantStatusSchema.and(
      z.any().openapi({ description: 'Grant status.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'Grant version.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AcceptGrantResponse')

const AcceptGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    ),
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

const CheckInLicenseResponseSchema = z.object({}).openapi('CheckInLicenseResponse')

const CheckInLicenseRequestSchema = z
  .object({
    LicenseConsumptionToken: StringSchema.and(
      z.any().openapi({ description: 'License consumption token.' }),
    ),
    Beneficiary: StringSchema.and(
      z.any().openapi({ description: 'License beneficiary.' }),
    ).exactOptional(),
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
    Name: StringSchema.and(z.any().openapi({ description: 'Entitlement data name.' })),
    Value: StringSchema.and(
      z.any().openapi({ description: 'Entitlement data value.' }),
    ).exactOptional(),
    Unit: EntitlementDataUnitSchema.and(z.any().openapi({ description: 'Entitlement data unit.' })),
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
    Name: StringSchema.and(z.any().openapi({ description: 'The key name.' })).exactOptional(),
    Value: StringSchema.and(z.any().openapi({ description: 'The value.' })).exactOptional(),
  })
  .openapi({ description: 'Describes key/value pairs.', required: [] })
  .openapi('Metadata')

const MetadataListSchema = z.array(MetadataSchema).openapi('MetadataList')

const CheckoutBorrowLicenseResponseSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ).exactOptional(),
    LicenseConsumptionToken: StringSchema.and(
      z.any().openapi({ description: 'License consumption token.' }),
    ).exactOptional(),
    EntitlementsAllowed: EntitlementDataListSchema.and(
      z.any().openapi({ description: 'Allowed license entitlements.' }),
    ).exactOptional(),
    NodeId: StringSchema.and(z.any().openapi({ description: 'Node ID.' })).exactOptional(),
    SignedToken: SignedTokenSchema.and(
      z.any().openapi({ description: 'Signed token.' }),
    ).exactOptional(),
    IssuedAt: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time at which the license checkout is issued.' }),
    ).exactOptional(),
    Expiration: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time at which the license checkout expires.' }),
    ).exactOptional(),
    CheckoutMetadata: MetadataListSchema.and(
      z.any().openapi({ description: 'Information about constraints.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CheckoutBorrowLicenseResponse')

const DigitalSignatureMethodSchema = z.literal('JWT_PS384').openapi('DigitalSignatureMethod')

const ClientTokenSchema = z.string().regex(/\S+/).max(2048).openapi('ClientToken')

const CheckoutBorrowLicenseRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the license. The license must use the borrow consumption configuration.',
        }),
    ),
    Entitlements: EntitlementDataListSchema.and(
      z
        .any()
        .openapi({ description: 'License entitlements. Partial checkouts are not supported.' }),
    ),
    DigitalSignatureMethod: DigitalSignatureMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Digital signature method. The possible value is JSON Web Signature (JWS) algorithm PS384. For more information, see <a href="https://tools.ietf.org/html/rfc7518#section-3.5">RFC 7518 Digital Signature with RSASSA-PSS</a>.',
        }),
    ),
    NodeId: StringSchema.and(z.any().openapi({ description: 'Node ID.' })).exactOptional(),
    CheckoutMetadata: MetadataListSchema.and(
      z.any().openapi({ description: 'Information about constraints.' }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
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
    CheckoutType: CheckoutTypeSchema.and(
      z.any().openapi({ description: 'Checkout type.' }),
    ).exactOptional(),
    LicenseConsumptionToken: StringSchema.and(
      z.any().openapi({ description: 'License consumption token.' }),
    ).exactOptional(),
    EntitlementsAllowed: EntitlementDataListSchema.and(
      z.any().openapi({ description: 'Allowed license entitlements.' }),
    ).exactOptional(),
    SignedToken: SignedTokenSchema.and(
      z.any().openapi({ description: 'Signed token.' }),
    ).exactOptional(),
    NodeId: StringSchema.and(z.any().openapi({ description: 'Node ID.' })).exactOptional(),
    IssuedAt: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time at which the license checkout is issued.' }),
    ).exactOptional(),
    Expiration: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time at which the license checkout expires.' }),
    ).exactOptional(),
    LicenseArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the checkout license.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CheckoutLicenseResponse')

const CheckoutLicenseRequestSchema = z
  .object({
    ProductSKU: StringSchema.and(z.any().openapi({ description: 'Product SKU.' })),
    CheckoutType: CheckoutTypeSchema.and(z.any().openapi({ description: 'Checkout type.' })),
    KeyFingerprint: StringSchema.and(
      z.any().openapi({ description: 'Key fingerprint identifying the license.' }),
    ),
    Entitlements: EntitlementDataListSchema.and(
      z.any().openapi({ description: 'License entitlements.' }),
    ),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    Beneficiary: StringSchema.and(
      z.any().openapi({ description: 'License beneficiary.' }),
    ).exactOptional(),
    NodeId: StringSchema.and(z.any().openapi({ description: 'Node ID.' })).exactOptional(),
  })
  .openapi({
    required: ['ProductSKU', 'CheckoutType', 'KeyFingerprint', 'Entitlements', 'ClientToken'],
    title: 'CheckoutLicenseRequest',
  })
  .openapi('CheckoutLicenseRequest')

const CreateGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.and(z.any().openapi({ description: 'Grant ARN.' })).exactOptional(),
    Status: GrantStatusSchema.and(
      z.any().openapi({ description: 'Grant status.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'Grant version.' })).exactOptional(),
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
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    GrantName: StringSchema.and(z.any().openapi({ description: 'Grant name.' })),
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ),
    Principals: PrincipalArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The grant principals. You can specify one of the following as an Amazon Resource Name (ARN):</p> <ul> <li> <p>An Amazon Web Services account, which includes only the account specified.</p> </li> </ul> <ul> <li> <p>An organizational unit (OU), which includes all accounts in the OU.</p> </li> </ul> <ul> <li> <p>An organization, which will include all accounts across your organization.</p> </li> </ul>',
        }),
    ),
    HomeRegion: StringSchema.and(z.any().openapi({ description: 'Home Region of the grant.' })),
    AllowedOperations: AllowedOperationListSchema.and(
      z.any().openapi({ description: 'Allowed operations for the grant.' }),
    ),
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
    GrantArn: ArnSchema.and(z.any().openapi({ description: 'Grant ARN.' })).exactOptional(),
    Status: GrantStatusSchema.and(
      z.any().openapi({ description: 'Grant status.' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z.any().openapi({ description: 'New version of the grant.' }),
    ).exactOptional(),
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
    ActivationOverrideBehavior: ActivationOverrideBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An activation option for your grant that determines the behavior of activating a grant. Activation options can only be used with granted licenses sourced from the Amazon Web Services Marketplace. Additionally, the operation must specify the value of <code>ACTIVE</code> for the <code>Status</code> parameter.</p> <ul> <li> <p>As a license administrator, you can optionally specify an <code>ActivationOverrideBehavior</code> when activating a grant.</p> </li> <li> <p>As a grantor, you can optionally specify an <code>ActivationOverrideBehavior</code> when you activate a grant for a grantee account in your organization.</p> </li> <li> <p>As a grantee, if the grantor creating the distributed grant doesn’t specify an <code>ActivationOverrideBehavior</code>, you can optionally specify one when you are activating the grant.</p> </li> </ul> <dl> <dt>DISTRIBUTED_GRANTS_ONLY</dt> <dd> <p>Use this value to activate a grant without replacing any member account’s active grants for the same product.</p> </dd> <dt>ALL_GRANTS_PERMITTED_BY_ISSUER</dt> <dd> <p>Use this value to activate a grant and disable other active grants in any member accounts for the same product. This action will also replace their previously activated grants with this activated grant.</p> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The options you can specify when you create a new version of a grant, such as activation override behavior. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.',
    required: [],
  })
  .openapi('Options')

const CreateGrantVersionRequestSchema = z
  .object({
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    GrantArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    ),
    GrantName: StringSchema.and(z.any().openapi({ description: 'Grant name.' })).exactOptional(),
    AllowedOperations: AllowedOperationListSchema.and(
      z.any().openapi({ description: 'Allowed operations for the grant.' }),
    ).exactOptional(),
    Status: GrantStatusSchema.and(
      z.any().openapi({ description: 'Grant status.' }),
    ).exactOptional(),
    StatusReason: StatusReasonMessageSchema.and(
      z.any().openapi({ description: 'Grant status reason.' }),
    ).exactOptional(),
    SourceVersion: StringSchema.and(
      z.any().openapi({ description: 'Current version of the grant.' }),
    ).exactOptional(),
    Options: OptionsSchema.and(
      z.any().openapi({ description: 'The options specified for the grant.' }),
    ).exactOptional(),
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
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ).exactOptional(),
    Status: LicenseStatusSchema.and(
      z.any().openapi({ description: 'License status.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'License version.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseResponse')

const IssuerSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Issuer name.' })),
    SignKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Details about the issuer of a license.' })
  .openapi('Issuer')

const DatetimeRangeSchema = z
  .object({
    Begin: ISO8601DateTimeSchema.and(z.any().openapi({ description: 'Start of the time range.' })),
    End: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'End of the time range.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Begin'], description: 'Describes a time range, in ISO8601-UTC format.' })
  .openapi('DatetimeRange')

const LongSchema = z.int().openapi('Long')

const BoxBooleanSchema = z.boolean().openapi('BoxBoolean')

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
    Name: StringSchema.and(z.any().openapi({ description: 'Entitlement name.' })),
    Value: StringSchema.and(
      z.any().openapi({ description: 'Entitlement resource. Use only if the unit is None.' }),
    ).exactOptional(),
    MaxCount: LongSchema.and(
      z.any().openapi({ description: 'Maximum entitlement count. Use if the unit is not None.' }),
    ).exactOptional(),
    Overage: BoxBooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether overages are allowed.' }),
    ).exactOptional(),
    Unit: EntitlementUnitSchema.and(z.any().openapi({ description: 'Entitlement unit.' })),
    AllowCheckIn: BoxBooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether check-ins are allowed.' }),
    ).exactOptional(),
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
    MaxTimeToLiveInMinutes: BoxIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Maximum time for the provisional configuration, in minutes.' }),
    ),
  })
  .openapi({
    required: ['MaxTimeToLiveInMinutes'],
    description: 'Details about a provisional configuration.',
  })
  .openapi('ProvisionalConfiguration')

const BorrowConfigurationSchema = z
  .object({
    AllowEarlyCheckIn: BoxBooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether early check-ins are allowed.' }),
    ),
    MaxTimeToLiveInMinutes: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum time for the borrow configuration, in minutes.' }),
    ),
  })
  .openapi({
    required: ['AllowEarlyCheckIn', 'MaxTimeToLiveInMinutes'],
    description: 'Details about a borrow configuration.',
  })
  .openapi('BorrowConfiguration')

const ConsumptionConfigurationSchema = z
  .object({
    RenewType: RenewTypeSchema.and(
      z.any().openapi({ description: 'Renewal frequency.' }),
    ).exactOptional(),
    ProvisionalConfiguration: ProvisionalConfigurationSchema.and(
      z.any().openapi({ description: 'Details about a provisional configuration.' }),
    ).exactOptional(),
    BorrowConfiguration: BorrowConfigurationSchema.and(
      z.any().openapi({ description: 'Details about a borrow configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a consumption configuration.', required: [] })
  .openapi('ConsumptionConfiguration')

const CreateLicenseRequestSchema = z
  .object({
    LicenseName: StringSchema.and(z.any().openapi({ description: 'License name.' })),
    ProductName: StringSchema.and(z.any().openapi({ description: 'Product name.' })),
    ProductSKU: StringSchema.and(z.any().openapi({ description: 'Product SKU.' })),
    Issuer: IssuerSchema.and(z.any().openapi({ description: 'License issuer.' })),
    HomeRegion: StringSchema.and(z.any().openapi({ description: 'Home Region for the license.' })),
    Validity: DatetimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date and time range during which the license is valid, in ISO8601-UTC format.',
        }),
    ),
    Entitlements: EntitlementListSchema.and(
      z.any().openapi({ description: 'License entitlements.' }),
    ),
    Beneficiary: StringSchema.and(z.any().openapi({ description: 'License beneficiary.' })),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.',
        }),
    ),
    LicenseMetadata: MetadataListSchema.and(
      z.any().openapi({ description: 'Information about the license.' }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
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
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseConfigurationResponse')

const LicenseCountingTypeSchema = z
  .enum(['vCPU', 'Instance', 'Core', 'Socket'])
  .openapi('LicenseCountingType')

const BoxLongSchema = z.int().openapi('BoxLong')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const TagSchema = z
  .object({
    Key: StringSchema.and(z.any().openapi({ description: 'Tag key.' })).exactOptional(),
    Value: StringSchema.and(z.any().openapi({ description: 'Tag value.' })).exactOptional(),
  })
  .openapi({ description: 'Details about a tag for a license configuration.', required: [] })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ProductInformationFilterSchema = z
  .object({
    ProductInformationFilterName: StringSchema.and(
      z.any().openapi({ description: 'Filter name.' }),
    ),
    ProductInformationFilterValue: StringListSchema.and(
      z.any().openapi({ description: 'Filter value.' }),
    ).exactOptional(),
    ProductInformationFilterComparator: StringSchema.and(
      z.any().openapi({ description: 'Logical operator.' }),
    ),
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
    ResourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Resource type. The possible values are <code>SSM_MANAGED</code> | <code>RDS</code>.',
        }),
    ),
    ProductInformationFilterList: ProductInformationFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Product information filter consists of a <code>ProductInformationFilterComparator</code> which is a logical operator, a <code>ProductInformationFilterName</code> which specifies the type of filter being declared, and a <code>ProductInformationFilterValue</code> that specifies the value to filter on. </p> <p>Accepted values for <code>ProductInformationFilterName</code> are listed here along with descriptions and valid options for <code>ProductInformationFilterComparator</code>. </p> <p>The following filters and are supported when the resource type is <code>SSM_MANAGED</code>:</p> <ul> <li> <p> <code>Application Name</code> - The name of the application. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Application Publisher</code> - The publisher of the application. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Application Version</code> - The version of the application. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Platform Name</code> - The name of the platform. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Platform Type</code> - The platform type. Logical operator is <code>EQUALS</code>.</p> </li> <li> <p> <code>Tag:key</code> - The key of a tag attached to an Amazon Web Services resource you wish to exclude from automated discovery. Logical operator is <code>NOT_EQUALS</code>. The key for your tag must be appended to <code>Tag:</code> following the example: <code>Tag:name-of-your-key</code>. <code>ProductInformationFilterValue</code> is optional if you are not using values for the key. </p> </li> <li> <p> <code>AccountId</code> - The 12-digit ID of an Amazon Web Services account you wish to exclude from automated discovery. Logical operator is <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>License Included</code> - The type of license included. Logical operators are <code>EQUALS</code> and <code>NOT_EQUALS</code>. Possible values are: <code>sql-server-enterprise</code> | <code>sql-server-standard</code> | <code>sql-server-web</code> | <code>windows-server-datacenter</code>.</p> </li> </ul> <p>The following filters and logical operators are supported when the resource type is <code>RDS</code>:</p> <ul> <li> <p> <code>Engine Edition</code> - The edition of the database engine. Logical operator is <code>EQUALS</code>. Possible values are: <code>oracle-ee</code> | <code>oracle-se</code> | <code>oracle-se1</code> | <code>oracle-se2</code>.</p> </li> <li> <p> <code>License Pack</code> - The license pack. Logical operator is <code>EQUALS</code>. Possible values are: <code>data guard</code> | <code>diagnostic pack sqlt</code> | <code>tuning pack sqlt</code> | <code>ols</code> | <code>olap</code>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['ResourceType', 'ProductInformationFilterList'],
    description: 'Describes product information for a license configuration.',
  })
  .openapi('ProductInformation')

const ProductInformationListSchema = z
  .array(ProductInformationSchema)
  .openapi('ProductInformationList')

const CreateLicenseConfigurationRequestSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Name of the license configuration.' })),
    Description: StringSchema.and(
      z.any().openapi({ description: 'Description of the license configuration.' }),
    ).exactOptional(),
    LicenseCountingType: LicenseCountingTypeSchema.and(
      z.any().openapi({ description: 'Dimension used to track the license inventory.' }),
    ),
    LicenseCount: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of licenses managed by the license configuration.' }),
    ).exactOptional(),
    LicenseCountHardLimit: BoxBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.',
        }),
    ).exactOptional(),
    LicenseRules: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules vary by dimension, as follows.</p> <ul> <li> <p> <code>Cores</code> dimension: <code>allowedTenancy</code> | <code>licenseAffinityToHost</code> | <code>maximumCores</code> | <code>minimumCores</code> </p> </li> <li> <p> <code>Instances</code> dimension: <code>allowedTenancy</code> | <code>maximumCores</code> | <code>minimumCores</code> | <code>maximumSockets</code> | <code>minimumSockets</code> | <code>maximumVcpus</code> | <code>minimumVcpus</code> </p> </li> <li> <p> <code>Sockets</code> dimension: <code>allowedTenancy</code> | <code>licenseAffinityToHost</code> | <code>maximumSockets</code> | <code>minimumSockets</code> </p> </li> <li> <p> <code>vCPUs</code> dimension: <code>allowedTenancy</code> | <code>honorVcpuOptimization</code> | <code>maximumVcpus</code> | <code>minimumVcpus</code> </p> </li> </ul> <p>The unit for <code>licenseAffinityToHost</code> is days and the range is 1 to 180. The possible values for <code>allowedTenancy</code> are <code>EC2-Default</code>, <code>EC2-DedicatedHost</code>, and <code>EC2-DedicatedInstance</code>. The possible values for <code>honorVcpuOptimization</code> are <code>True</code> and <code>False</code>.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags to add to the license configuration.' }),
    ).exactOptional(),
    DisassociateWhenNotFound: BoxBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When true, disassociates a resource when software is uninstalled.',
        }),
    ).exactOptional(),
    ProductInformationList: ProductInformationListSchema.and(
      z.any().openapi({ description: 'Product information.' }),
    ).exactOptional(),
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
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the created license type conversion task.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseConversionTaskForResourceResponse')

const UsageOperationSchema = z.string().max(50).openapi('UsageOperation')

const LicenseConversionContextSchema = z
  .object({
    UsageOperation: UsageOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Usage operation value that corresponds to the license type you are converting your resource from. For more information about which platforms correspond to which usage operation values see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html#billing-info">Sample data: usage operation by platform </a> ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a license type conversion task.', required: [] })
  .openapi('LicenseConversionContext')

const CreateLicenseConversionTaskForResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the resource you are converting the license type for.',
        }),
    ),
    SourceLicenseContext: LicenseConversionContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information that identifies the license type you are converting from. For the structure of the source license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the CLI </a> in the <i>License Manager User Guide</i>.',
        }),
    ),
    DestinationLicenseContext: LicenseConversionContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information that identifies the license type you are converting to. For the structure of the destination license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the CLI </a> in the <i>License Manager User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'SourceLicenseContext', 'DestinationLicenseContext'],
    title: 'CreateLicenseConversionTaskForResourceRequest',
  })
  .openapi('CreateLicenseConversionTaskForResourceRequest')

const CreateLicenseManagerReportGeneratorResponseSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the new report generator.' }),
    ).exactOptional(),
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
    licenseConfigurationArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the license configuration that this generator reports on.',
        }),
    ),
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
    value: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of times within the frequency period that a report is generated. The only supported value is <code>1</code>.',
        }),
    ).exactOptional(),
    period: ReportFrequencyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time period between each report. The period can be daily, weekly, or monthly.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about how frequently reports are generated.', required: [] })
  .openapi('ReportFrequency')

const ClientRequestTokenSchema = z.string().min(1).max(36).openapi('ClientRequestToken')

const CreateLicenseManagerReportGeneratorRequestSchema = z
  .object({
    ReportGeneratorName: ReportGeneratorNameSchema.and(
      z.any().openapi({ description: 'Name of the report generator.' }),
    ),
    Type: ReportTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Type of reports to generate. The following report types an be generated:</p> <ul> <li> <p>License configuration report - Reports the number and details of consumed licenses for a license configuration.</p> </li> <li> <p>Resource report - Reports the tracked licenses and resource consumption for a license configuration.</p> </li> </ul>',
        }),
    ),
    ReportContext: ReportContextSchema.and(
      z
        .any()
        .openapi({
          description: 'Defines the type of license configuration the report generator tracks.',
        }),
    ),
    ReportFrequency: ReportFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Frequency by which reports are generated. Reports can be generated daily, monthly, or weekly.',
        }),
    ),
    ClientToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'Description of the report generator.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags to add to the report generator.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReportGeneratorName', 'Type', 'ReportContext', 'ReportFrequency', 'ClientToken'],
    title: 'CreateLicenseManagerReportGeneratorRequest',
  })
  .openapi('CreateLicenseManagerReportGeneratorRequest')

const CreateLicenseVersionResponseSchema = z
  .object({
    LicenseArn: ArnSchema.and(z.any().openapi({ description: 'License ARN.' })).exactOptional(),
    Version: StringSchema.and(
      z.any().openapi({ description: 'New version of the license.' }),
    ).exactOptional(),
    Status: LicenseStatusSchema.and(
      z.any().openapi({ description: 'License status.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLicenseVersionResponse')

const CreateLicenseVersionRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ),
    LicenseName: StringSchema.and(z.any().openapi({ description: 'License name.' })),
    ProductName: StringSchema.and(z.any().openapi({ description: 'Product name.' })),
    Issuer: IssuerSchema.and(z.any().openapi({ description: 'License issuer.' })),
    HomeRegion: StringSchema.and(z.any().openapi({ description: 'Home Region of the license.' })),
    Validity: DatetimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date and time range during which the license is valid, in ISO8601-UTC format.',
        }),
    ),
    LicenseMetadata: MetadataListSchema.and(
      z.any().openapi({ description: 'Information about the license.' }),
    ).exactOptional(),
    Entitlements: EntitlementListSchema.and(
      z.any().openapi({ description: 'License entitlements.' }),
    ),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.',
        }),
    ),
    Status: LicenseStatusSchema.and(z.any().openapi({ description: 'License status.' })),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    SourceVersion: StringSchema.and(
      z.any().openapi({ description: 'Current version of the license.' }),
    ).exactOptional(),
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
    TokenId: StringSchema.and(z.any().openapi({ description: 'Token ID.' })).exactOptional(),
    TokenType: TokenTypeSchema.and(z.any().openapi({ description: 'Token type.' })).exactOptional(),
    Token: TokenStringSchema.and(
      z.any().openapi({ description: 'Refresh token, encoded as a JWT token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTokenResponse')

const MaxSize3StringListSchema = z.array(StringSchema).max(3).openapi('MaxSize3StringList')

const CreateTokenRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the license. The ARN is mapped to the aud claim of the JWT token.',
        }),
    ),
    RoleArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the IAM roles to embed in the token. License Manager does not check whether the roles are in use.',
        }),
    ).exactOptional(),
    ExpirationInDays: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token expiration, in days, counted from token creation. The default is 365 days.',
        }),
    ).exactOptional(),
    TokenProperties: MaxSize3StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Data specified by the caller to be included in the JWT token. The data is mapped to the amr claim of the JWT token.',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'Idempotency token, valid for 10 minutes.' }),
    ),
  })
  .openapi({ required: ['LicenseArn', 'ClientToken'], title: 'CreateTokenRequest' })
  .openapi('CreateTokenRequest')

const DeleteGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.and(z.any().openapi({ description: 'Grant ARN.' })).exactOptional(),
    Status: GrantStatusSchema.and(
      z.any().openapi({ description: 'Grant status.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'Grant version.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteGrantResponse')

const DeleteGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    ),
    StatusReason: StatusReasonMessageSchema.and(
      z.any().openapi({ description: 'The Status reason for the delete request.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'Current version of the grant.' })),
  })
  .openapi({ required: ['GrantArn', 'Version'], title: 'DeleteGrantRequest' })
  .openapi('DeleteGrantRequest')

const LicenseDeletionStatusSchema = z
  .enum(['PENDING_DELETE', 'DELETED'])
  .openapi('LicenseDeletionStatus')

const DeleteLicenseResponseSchema = z
  .object({
    Status: LicenseDeletionStatusSchema.and(
      z.any().openapi({ description: 'License status.' }),
    ).exactOptional(),
    DeletionDate: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Date when the license is deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteLicenseResponse')

const DeleteLicenseRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ),
    SourceVersion: StringSchema.and(
      z.any().openapi({ description: 'Current version of the license.' }),
    ),
  })
  .openapi({ required: ['LicenseArn', 'SourceVersion'], title: 'DeleteLicenseRequest' })
  .openapi('DeleteLicenseRequest')

const DeleteLicenseConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteLicenseConfigurationResponse')

const DeleteLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'ID of the license configuration.' }),
    ),
  })
  .openapi({ required: ['LicenseConfigurationArn'], title: 'DeleteLicenseConfigurationRequest' })
  .openapi('DeleteLicenseConfigurationRequest')

const DeleteLicenseManagerReportGeneratorResponseSchema = z
  .object({})
  .openapi('DeleteLicenseManagerReportGeneratorResponse')

const DeleteLicenseManagerReportGeneratorRequestSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon Resource Name (ARN) of the report generator to be deleted.',
        }),
    ),
  })
  .openapi({
    required: ['LicenseManagerReportGeneratorArn'],
    title: 'DeleteLicenseManagerReportGeneratorRequest',
  })
  .openapi('DeleteLicenseManagerReportGeneratorRequest')

const DeleteTokenResponseSchema = z.object({}).openapi('DeleteTokenResponse')

const DeleteTokenRequestSchema = z
  .object({ TokenId: StringSchema.and(z.any().openapi({ description: 'Token ID.' })) })
  .openapi({ required: ['TokenId'], title: 'DeleteTokenRequest' })
  .openapi('DeleteTokenRequest')

const ExtendLicenseConsumptionResponseSchema = z
  .object({
    LicenseConsumptionToken: StringSchema.and(
      z.any().openapi({ description: 'License consumption token.' }),
    ).exactOptional(),
    Expiration: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time at which the license consumption expires.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtendLicenseConsumptionResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const ExtendLicenseConsumptionRequestSchema = z
  .object({
    LicenseConsumptionToken: StringSchema.and(
      z.any().openapi({ description: 'License consumption token.' }),
    ),
    DryRun: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Checks whether you have the required permissions for the action, without actually making the request. Provides an error response if you do not have the required permissions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LicenseConsumptionToken'], title: 'ExtendLicenseConsumptionRequest' })
  .openapi('ExtendLicenseConsumptionRequest')

const GetAccessTokenResponseSchema = z
  .object({
    AccessToken: TokenStringSchema.and(
      z.any().openapi({ description: 'Temporary access token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessTokenResponse')

const GetAccessTokenRequestSchema = z
  .object({
    Token: TokenStringSchema.and(
      z.any().openapi({ description: 'Refresh token, encoded as a JWT token.' }),
    ),
    TokenProperties: MaxSize3StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'Token properties to validate against those present in the JWT token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Token'], title: 'GetAccessTokenRequest' })
  .openapi('GetAccessTokenRequest')

const GrantSchema = z
  .object({
    GrantArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    ),
    GrantName: StringSchema.and(z.any().openapi({ description: 'Grant name.' })),
    ParentArn: ArnSchema.and(z.any().openapi({ description: 'Parent ARN.' })),
    LicenseArn: ArnSchema.and(z.any().openapi({ description: 'License ARN.' })),
    GranteePrincipalArn: ArnSchema.and(
      z.any().openapi({ description: 'The grantee principal ARN.' }),
    ),
    HomeRegion: StringSchema.and(z.any().openapi({ description: 'Home Region of the grant.' })),
    GrantStatus: GrantStatusSchema.and(z.any().openapi({ description: 'Grant status.' })),
    StatusReason: StatusReasonMessageSchema.and(
      z.any().openapi({ description: 'Grant status reason.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'Grant version.' })),
    GrantedOperations: AllowedOperationListSchema.and(
      z.any().openapi({ description: 'Granted operations.' }),
    ),
    Options: OptionsSchema.and(
      z.any().openapi({ description: 'The options specified for the grant.' }),
    ).exactOptional(),
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
  .object({
    Grant: GrantSchema.and(z.any().openapi({ description: 'Grant details.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGrantResponse')

const GetGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    ),
    Version: StringSchema.and(z.any().openapi({ description: 'Grant version.' })).exactOptional(),
  })
  .openapi({ required: ['GrantArn'], title: 'GetGrantRequest' })
  .openapi('GetGrantRequest')

const IssuerDetailsSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Issuer name.' })).exactOptional(),
    SignKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.',
        }),
    ).exactOptional(),
    KeyFingerprint: StringSchema.and(
      z.any().openapi({ description: 'Issuer key fingerprint.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details associated with the issuer of a license.', required: [] })
  .openapi('IssuerDetails')

const LicenseSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ).exactOptional(),
    LicenseName: StringSchema.and(
      z.any().openapi({ description: 'License name.' }),
    ).exactOptional(),
    ProductName: StringSchema.and(
      z.any().openapi({ description: 'Product name.' }),
    ).exactOptional(),
    ProductSKU: StringSchema.and(z.any().openapi({ description: 'Product SKU.' })).exactOptional(),
    Issuer: IssuerDetailsSchema.and(
      z.any().openapi({ description: 'License issuer.' }),
    ).exactOptional(),
    HomeRegion: StringSchema.and(
      z.any().openapi({ description: 'Home Region of the license.' }),
    ).exactOptional(),
    Status: LicenseStatusSchema.and(
      z.any().openapi({ description: 'License status.' }),
    ).exactOptional(),
    Validity: DatetimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date and time range during which the license is valid, in ISO8601-UTC format.',
        }),
    ).exactOptional(),
    Beneficiary: StringSchema.and(
      z.any().openapi({ description: 'License beneficiary.' }),
    ).exactOptional(),
    Entitlements: EntitlementListSchema.and(
      z.any().openapi({ description: 'License entitlements.' }),
    ).exactOptional(),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration for consumption of the license.' }),
    ).exactOptional(),
    LicenseMetadata: MetadataListSchema.and(
      z.any().openapi({ description: 'License metadata.' }),
    ).exactOptional(),
    CreateTime: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'License creation time.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'License version.' })).exactOptional(),
  })
  .openapi({ description: 'Software license that is managed in License Manager.', required: [] })
  .openapi('License')

const GetLicenseResponseSchema = z
  .object({
    License: LicenseSchema.and(
      z.any().openapi({ description: 'License details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseResponse')

const GetLicenseRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ),
    Version: StringSchema.and(z.any().openapi({ description: 'License version.' })).exactOptional(),
  })
  .openapi({ required: ['LicenseArn'], title: 'GetLicenseRequest' })
  .openapi('GetLicenseRequest')

const ResourceTypeSchema = z
  .enum(['EC2_INSTANCE', 'EC2_HOST', 'EC2_AMI', 'RDS', 'SYSTEMS_MANAGER_MANAGED_INSTANCE'])
  .openapi('ResourceType')

const ConsumedLicenseSummarySchema = z
  .object({
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'Resource type of the resource consuming a license.' }),
    ).exactOptional(),
    ConsumedLicenses: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of licenses consumed by the resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about license consumption.', required: [] })
  .openapi('ConsumedLicenseSummary')

const ConsumedLicenseSummaryListSchema = z
  .array(ConsumedLicenseSummarySchema)
  .openapi('ConsumedLicenseSummaryList')

const ManagedResourceSummarySchema = z
  .object({
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'Type of resource associated with a license.' }),
    ).exactOptional(),
    AssociationCount: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of resources associated with licenses.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a managed resource.', required: [] })
  .openapi('ManagedResourceSummary')

const ManagedResourceSummaryListSchema = z
  .array(ManagedResourceSummarySchema)
  .openapi('ManagedResourceSummaryList')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const AutomatedDiscoveryInformationSchema = z
  .object({
    LastRunTime: DateTimeSchema.and(
      z.any().openapi({ description: 'Time that automated discovery last ran.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes automated discovery.', required: [] })
  .openapi('AutomatedDiscoveryInformation')

const GetLicenseConfigurationResponseSchema = z
  .object({
    LicenseConfigurationId: StringSchema.and(
      z.any().openapi({ description: 'Unique ID for the license configuration.' }),
    ).exactOptional(),
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'Name of the license configuration.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'Description of the license configuration.' }),
    ).exactOptional(),
    LicenseCountingType: LicenseCountingTypeSchema.and(
      z.any().openapi({ description: 'Dimension for which the licenses are counted.' }),
    ).exactOptional(),
    LicenseRules: StringListSchema.and(
      z.any().openapi({ description: 'License rules.' }),
    ).exactOptional(),
    LicenseCount: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of available licenses.' }),
    ).exactOptional(),
    LicenseCountHardLimit: BoxBooleanSchema.and(
      z.any().openapi({ description: 'Sets the number of available licenses as a hard limit.' }),
    ).exactOptional(),
    ConsumedLicenses: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of licenses assigned to resources.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'License configuration status.' }),
    ).exactOptional(),
    OwnerAccountId: StringSchema.and(
      z.any().openapi({ description: 'Account ID of the owner of the license configuration.' }),
    ).exactOptional(),
    ConsumedLicenseSummaryList: ConsumedLicenseSummaryListSchema.and(
      z.any().openapi({ description: 'Summaries of the licenses consumed by resources.' }),
    ).exactOptional(),
    ManagedResourceSummaryList: ManagedResourceSummaryListSchema.and(
      z.any().openapi({ description: 'Summaries of the managed resources.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags for the license configuration.' }),
    ).exactOptional(),
    ProductInformationList: ProductInformationListSchema.and(
      z.any().openapi({ description: 'Product information.' }),
    ).exactOptional(),
    AutomatedDiscoveryInformation: AutomatedDiscoveryInformationSchema.and(
      z.any().openapi({ description: 'Automated discovery information.' }),
    ).exactOptional(),
    DisassociateWhenNotFound: BoxBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When true, disassociates a resource when software is uninstalled.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseConfigurationResponse')

const GetLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ),
  })
  .openapi({ required: ['LicenseConfigurationArn'], title: 'GetLicenseConfigurationRequest' })
  .openapi('GetLicenseConfigurationRequest')

const LicenseConversionTaskStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('LicenseConversionTaskStatus')

const GetLicenseConversionTaskResponseSchema = z
  .object({
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.and(
      z.any().openapi({ description: 'ID of the license type conversion task.' }),
    ).exactOptional(),
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Names (ARN) of the resources the license conversion task is associated with.',
        }),
    ).exactOptional(),
    SourceLicenseContext: LicenseConversionContextSchema.and(
      z.any().openapi({ description: 'Information about the license type converted from.' }),
    ).exactOptional(),
    DestinationLicenseContext: LicenseConversionContextSchema.and(
      z.any().openapi({ description: 'Information about the license type converted to.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for the conversion task.' }),
    ).exactOptional(),
    Status: LicenseConversionTaskStatusSchema.and(
      z.any().openapi({ description: 'Status of the license type conversion task.' }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'Time at which the license type conversion task was started .' }),
    ).exactOptional(),
    LicenseConversionTime: DateTimeSchema.and(
      z.any().openapi({ description: 'Amount of time to complete the license type conversion.' }),
    ).exactOptional(),
    EndTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'Time at which the license type conversion task was completed.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseConversionTaskResponse')

const GetLicenseConversionTaskRequestSchema = z
  .object({
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.and(
      z
        .any()
        .openapi({
          description: 'ID of the license type conversion task to retrieve information on.',
        }),
    ),
  })
  .openapi({ required: ['LicenseConversionTaskId'], title: 'GetLicenseConversionTaskRequest' })
  .openapi('GetLicenseConversionTaskRequest')

const S3LocationSchema = z
  .object({
    bucket: StringSchema.and(
      z.any().openapi({ description: 'Name of the S3 bucket reports are published to.' }),
    ).exactOptional(),
    keyPrefix: StringSchema.and(
      z.any().openapi({ description: 'Prefix of the S3 bucket reports are published to.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details of the S3 bucket that report generator reports are published to.',
    required: [],
  })
  .openapi('S3Location')

const ReportGeneratorSchema = z
  .object({
    ReportGeneratorName: StringSchema.and(
      z.any().openapi({ description: 'Name of the report generator.' }),
    ).exactOptional(),
    ReportType: ReportTypeListSchema.and(
      z.any().openapi({ description: 'Type of reports that are generated.' }),
    ).exactOptional(),
    ReportContext: ReportContextSchema.and(
      z.any().openapi({ description: 'License configuration type for this generator.' }),
    ).exactOptional(),
    ReportFrequency: ReportFrequencySchema.and(
      z.any().openapi({ description: 'Details about how frequently reports are generated.' }),
    ).exactOptional(),
    LicenseManagerReportGeneratorArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the report generator.' }),
    ).exactOptional(),
    LastRunStatus: StringSchema.and(
      z.any().openapi({ description: 'Status of the last report generation attempt.' }),
    ).exactOptional(),
    LastRunFailureReason: StringSchema.and(
      z.any().openapi({ description: 'Failure message for the last report generation attempt.' }),
    ).exactOptional(),
    LastReportGenerationTime: StringSchema.and(
      z.any().openapi({ description: 'Time the last report was generated at.' }),
    ).exactOptional(),
    ReportCreatorAccount: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account ID used to create the report generator.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'Description of the report generator.' }),
    ).exactOptional(),
    S3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Details of the S3 bucket that report generator reports are published to.',
        }),
    ).exactOptional(),
    CreateTime: StringSchema.and(
      z.any().openapi({ description: 'Time the report was created.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags associated with the report generator.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describe the details of a report generator.', required: [] })
  .openapi('ReportGenerator')

const GetLicenseManagerReportGeneratorResponseSchema = z
  .object({
    ReportGenerator: ReportGeneratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A report generator that creates periodic reports about your license configurations.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseManagerReportGeneratorResponse')

const GetLicenseManagerReportGeneratorRequestSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the report generator.' }),
    ),
  })
  .openapi({
    required: ['LicenseManagerReportGeneratorArn'],
    title: 'GetLicenseManagerReportGeneratorRequest',
  })
  .openapi('GetLicenseManagerReportGeneratorRequest')

const EntitlementUsageSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Entitlement usage name.' })),
    ConsumedValue: StringSchema.and(z.any().openapi({ description: 'Resource usage consumed.' })),
    MaxCount: StringSchema.and(
      z.any().openapi({ description: 'Maximum entitlement usage count.' }),
    ).exactOptional(),
    Unit: EntitlementDataUnitSchema.and(
      z.any().openapi({ description: 'Entitlement usage unit.' }),
    ),
  })
  .openapi({
    required: ['Name', 'ConsumedValue', 'Unit'],
    description: 'Usage associated with an entitlement resource.',
  })
  .openapi('EntitlementUsage')

const EntitlementUsageListSchema = z.array(EntitlementUsageSchema).openapi('EntitlementUsageList')

const LicenseUsageSchema = z
  .object({
    EntitlementUsages: EntitlementUsageListSchema.and(
      z.any().openapi({ description: 'License entitlement usages.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the entitlement usage associated with a license.',
    required: [],
  })
  .openapi('LicenseUsage')

const GetLicenseUsageResponseSchema = z
  .object({
    LicenseUsage: LicenseUsageSchema.and(
      z.any().openapi({ description: 'License usage details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseUsageResponse')

const GetLicenseUsageRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ),
  })
  .openapi({ required: ['LicenseArn'], title: 'GetLicenseUsageRequest' })
  .openapi('GetLicenseUsageRequest')

const OrganizationConfigurationSchema = z
  .object({
    EnableIntegration: BooleanSchema.and(
      z.any().openapi({ description: 'Enables Organizations integration.' }),
    ),
  })
  .openapi({
    required: ['EnableIntegration'],
    description: 'Configuration information for Organizations.',
  })
  .openapi('OrganizationConfiguration')

const GetServiceSettingsResponseSchema = z
  .object({
    S3BucketArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Regional S3 bucket path for storing reports, license trail event data, discovery data, and so on.',
        }),
    ).exactOptional(),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'SNS topic configured to receive notifications from License Manager.',
        }),
    ).exactOptional(),
    OrganizationConfiguration: OrganizationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether Organizations is integrated with License Manager for cross-account discovery.',
        }),
    ).exactOptional(),
    EnableCrossAccountsDiscovery: BoxBooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether cross-account discovery is enabled.' }),
    ).exactOptional(),
    LicenseManagerResourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the resource share. The License Manager management account provides member accounts with access to this share.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceSettingsResponse')

const GetServiceSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetServiceSettingsRequest' })
  .openapi('GetServiceSettingsRequest')

const LicenseConfigurationAssociationSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'Type of server resource.' }),
    ).exactOptional(),
    ResourceOwnerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ID of the Amazon Web Services account that owns the resource consuming licenses.',
        }),
    ).exactOptional(),
    AssociationTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'Time when the license configuration was associated with the resource.',
        }),
    ).exactOptional(),
    AmiAssociationScope: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Scope of AMI associations. The possible value is <code>cross-account</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an association with a license configuration.', required: [] })
  .openapi('LicenseConfigurationAssociation')

const LicenseConfigurationAssociationsSchema = z
  .array(LicenseConfigurationAssociationSchema)
  .openapi('LicenseConfigurationAssociations')

const ListAssociationsForLicenseConfigurationResponseSchema = z
  .object({
    LicenseConfigurationAssociations: LicenseConfigurationAssociationsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the associations for the license configuration.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssociationsForLicenseConfigurationResponse')

const ListAssociationsForLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of a license configuration.' }),
    ),
    MaxResults: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
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
    Grants: GrantListSchema.and(
      z.any().openapi({ description: 'Distributed grant details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDistributedGrantsResponse')

const FilterNameSchema = z.string().openapi('FilterName')

const FilterValueSchema = z.string().openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).openapi('FilterValues')

const FilterSchema = z
  .object({
    Name: FilterNameSchema.and(
      z.any().openapi({ description: 'Name of the filter. Filter names are case-sensitive.' }),
    ).exactOptional(),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the filter, which is case-sensitive. You can only specify one value for the filter.',
        }),
    ).exactOptional(),
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
    GrantArns: ArnListSchema.and(
      z.any().openapi({ description: 'Amazon Resource Names (ARNs) of the grants.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>LicenseArn</code> </p> </li> <li> <p> <code>GrantStatus</code> </p> </li> <li> <p> <code>GranteePrincipalARN</code> </p> </li> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>LicenseIssuerName</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDistributedGrantsRequest', required: [] })
  .openapi('ListDistributedGrantsRequest')

const LicenseOperationFailureSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'Resource type.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'Error message.' }),
    ).exactOptional(),
    FailureTime: DateTimeSchema.and(
      z.any().openapi({ description: 'Failure time.' }),
    ).exactOptional(),
    OperationName: StringSchema.and(
      z.any().openapi({ description: 'Name of the operation.' }),
    ).exactOptional(),
    ResourceOwnerId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'ID of the Amazon Web Services account that owns the resource.' }),
    ).exactOptional(),
    OperationRequestedBy: StringSchema.and(
      z.any().openapi({ description: 'The requester is "License Manager Automated Discovery".' }),
    ).exactOptional(),
    MetadataList: MetadataListSchema.and(
      z.any().openapi({ description: 'Reserved.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the failure of a license operation.', required: [] })
  .openapi('LicenseOperationFailure')

const LicenseOperationFailureListSchema = z
  .array(LicenseOperationFailureSchema)
  .openapi('LicenseOperationFailureList')

const ListFailuresForLicenseConfigurationOperationsResponseSchema = z
  .object({
    LicenseOperationFailureList: LicenseOperationFailureListSchema.and(
      z.any().openapi({ description: 'License configuration operations that failed.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFailuresForLicenseConfigurationOperationsResponse')

const ListFailuresForLicenseConfigurationOperationsRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name of the license configuration.' }),
    ),
    MaxResults: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LicenseConfigurationArn'],
    title: 'ListFailuresForLicenseConfigurationOperationsRequest',
  })
  .openapi('ListFailuresForLicenseConfigurationOperationsRequest')

const LicenseConfigurationSchema = z
  .object({
    LicenseConfigurationId: StringSchema.and(
      z.any().openapi({ description: 'Unique ID of the license configuration.' }),
    ).exactOptional(),
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'Name of the license configuration.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'Description of the license configuration.' }),
    ).exactOptional(),
    LicenseCountingType: LicenseCountingTypeSchema.and(
      z.any().openapi({ description: 'Dimension to use to track the license inventory.' }),
    ).exactOptional(),
    LicenseRules: StringListSchema.and(
      z.any().openapi({ description: 'License rules.' }),
    ).exactOptional(),
    LicenseCount: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of licenses managed by the license configuration.' }),
    ).exactOptional(),
    LicenseCountHardLimit: BoxBooleanSchema.and(
      z.any().openapi({ description: 'Number of available licenses as a hard limit.' }),
    ).exactOptional(),
    DisassociateWhenNotFound: BoxBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When true, disassociates a resource when software is uninstalled.',
        }),
    ).exactOptional(),
    ConsumedLicenses: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of licenses consumed. ' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Status of the license configuration.' }),
    ).exactOptional(),
    OwnerAccountId: StringSchema.and(
      z.any().openapi({ description: "Account ID of the license configuration's owner." }),
    ).exactOptional(),
    ConsumedLicenseSummaryList: ConsumedLicenseSummaryListSchema.and(
      z.any().openapi({ description: 'Summaries for licenses consumed by various resources.' }),
    ).exactOptional(),
    ManagedResourceSummaryList: ManagedResourceSummaryListSchema.and(
      z.any().openapi({ description: 'Summaries for managed resources.' }),
    ).exactOptional(),
    ProductInformationList: ProductInformationListSchema.and(
      z.any().openapi({ description: 'Product information.' }),
    ).exactOptional(),
    AutomatedDiscoveryInformation: AutomatedDiscoveryInformationSchema.and(
      z.any().openapi({ description: 'Automated discovery information.' }),
    ).exactOptional(),
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

const ListLicenseConfigurationsResponseSchema = z
  .object({
    LicenseConfigurations: LicenseConfigurationsSchema.and(
      z.any().openapi({ description: 'Information about the license configurations.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseConfigurationsResponse')

const FiltersSchema = z.array(FilterSchema).openapi('Filters')

const ListLicenseConfigurationsRequestSchema = z
  .object({
    LicenseConfigurationArns: StringListSchema.and(
      z
        .any()
        .openapi({ description: 'Amazon Resource Names (ARN) of the license configurations.' }),
    ).exactOptional(),
    MaxResults: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters and logical operators are supported:</p> <ul> <li> <p> <code>licenseCountingType</code> - The dimension for which licenses are counted. Possible values are <code>vCPU</code> | <code>Instance</code> | <code>Core</code> | <code>Socket</code>. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>enforceLicenseCount</code> - A Boolean value that indicates whether hard license enforcement is used. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>usagelimitExceeded</code> - A Boolean value that indicates whether the available licenses have been exceeded. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLicenseConfigurationsRequest', required: [] })
  .openapi('ListLicenseConfigurationsRequest')

const LicenseConversionTaskSchema = z
  .object({
    LicenseConversionTaskId: LicenseConversionTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the license type conversion task.' }),
    ).exactOptional(),
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource associated with the license type conversion task.',
        }),
    ).exactOptional(),
    SourceLicenseContext: LicenseConversionContextSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the license type this conversion task converted from.',
        }),
    ).exactOptional(),
    DestinationLicenseContext: LicenseConversionContextSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the license type this conversion task converted to.',
        }),
    ).exactOptional(),
    Status: LicenseConversionTaskStatusSchema.and(
      z.any().openapi({ description: 'The status of the conversion task.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for the conversion task.' }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time the conversion task was started at.' }),
    ).exactOptional(),
    LicenseConversionTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the usage operation value of the resource was changed.',
        }),
    ).exactOptional(),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time the conversion task was completed.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a license type conversion task.', required: [] })
  .openapi('LicenseConversionTask')

const LicenseConversionTasksSchema = z
  .array(LicenseConversionTaskSchema)
  .openapi('LicenseConversionTasks')

const ListLicenseConversionTasksResponseSchema = z
  .object({
    LicenseConversionTasks: LicenseConversionTasksSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the license configuration tasks for your account.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseConversionTasksResponse')

const ListLicenseConversionTasksRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Filters to scope the results. Valid filters are <code>ResourceArns</code> and <code>Status</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLicenseConversionTasksRequest', required: [] })
  .openapi('ListLicenseConversionTasksRequest')

const ReportGeneratorListSchema = z.array(ReportGeneratorSchema).openapi('ReportGeneratorList')

const ListLicenseManagerReportGeneratorsResponseSchema = z
  .object({
    ReportGenerators: ReportGeneratorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A report generator that creates periodic reports about your license configurations.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseManagerReportGeneratorsResponse')

const ListLicenseManagerReportGeneratorsRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters are supported: </p> <ul> <li> <p> <code>LicenseConfigurationArn</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLicenseManagerReportGeneratorsRequest', required: [] })
  .openapi('ListLicenseManagerReportGeneratorsRequest')

const LicenseSpecificationSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ),
    AmiAssociationScope: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Scope of AMI associations. The possible value is <code>cross-account</code>.',
        }),
    ).exactOptional(),
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
    LicenseSpecifications: LicenseSpecificationsSchema.and(
      z.any().openapi({ description: 'License configurations associated with a resource.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseSpecificationsForResourceResponse')

const ListLicenseSpecificationsForResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of a resource that has an associated license configuration.',
        }),
    ),
    MaxResults: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListLicenseSpecificationsForResourceRequest' })
  .openapi('ListLicenseSpecificationsForResourceRequest')

const LicenseListSchema = z.array(LicenseSchema).openapi('LicenseList')

const ListLicenseVersionsResponseSchema = z
  .object({
    Licenses: LicenseListSchema.and(
      z.any().openapi({ description: 'License details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLicenseVersionsResponse')

const ListLicenseVersionsRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['LicenseArn'], title: 'ListLicenseVersionsRequest' })
  .openapi('ListLicenseVersionsRequest')

const ListLicensesResponseSchema = z
  .object({
    Licenses: LicenseListSchema.and(
      z.any().openapi({ description: 'License details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLicensesResponse')

const ListLicensesRequestSchema = z
  .object({
    LicenseArns: ArnListSchema.and(
      z.any().openapi({ description: 'Amazon Resource Names (ARNs) of the licenses.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>Beneficiary</code> </p> </li> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>Fingerprint</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLicensesRequest', required: [] })
  .openapi('ListLicensesRequest')

const ListReceivedGrantsResponseSchema = z
  .object({
    Grants: GrantListSchema.and(
      z.any().openapi({ description: 'Received grant details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedGrantsResponse')

const ListReceivedGrantsRequestSchema = z
  .object({
    GrantArns: ArnListSchema.and(
      z.any().openapi({ description: 'Amazon Resource Names (ARNs) of the grants.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>LicenseIssuerName</code> </p> </li> <li> <p> <code>LicenseArn</code> </p> </li> <li> <p> <code>GrantStatus</code> </p> </li> <li> <p> <code>GranterAccountId</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReceivedGrantsRequest', required: [] })
  .openapi('ListReceivedGrantsRequest')

const ListReceivedGrantsForOrganizationResponseSchema = z
  .object({
    Grants: GrantListSchema.and(
      z.any().openapi({ description: 'Lists the grants the organization has received.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedGrantsForOrganizationResponse')

const ListReceivedGrantsForOrganizationRequestSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the received license.' }),
    ),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>ParentArn</code> </p> </li> <li> <p> <code>GranteePrincipalArn</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
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
    ReceivedStatus: ReceivedStatusSchema.and(
      z.any().openapi({ description: 'Received status.' }),
    ).exactOptional(),
    ReceivedStatusReason: StatusReasonMessageSchema.and(
      z.any().openapi({ description: 'Received status reason.' }),
    ).exactOptional(),
    AllowedOperations: AllowedOperationListSchema.and(
      z.any().openapi({ description: 'Allowed operations.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Metadata associated with received licenses and grants.', required: [] })
  .openapi('ReceivedMetadata')

const GrantedLicenseSchema = z
  .object({
    LicenseArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ).exactOptional(),
    LicenseName: StringSchema.and(
      z.any().openapi({ description: 'License name.' }),
    ).exactOptional(),
    ProductName: StringSchema.and(
      z.any().openapi({ description: 'Product name.' }),
    ).exactOptional(),
    ProductSKU: StringSchema.and(z.any().openapi({ description: 'Product SKU.' })).exactOptional(),
    Issuer: IssuerDetailsSchema.and(
      z.any().openapi({ description: 'Granted license issuer.' }),
    ).exactOptional(),
    HomeRegion: StringSchema.and(
      z.any().openapi({ description: 'Home Region of the granted license.' }),
    ).exactOptional(),
    Status: LicenseStatusSchema.and(
      z.any().openapi({ description: 'Granted license status.' }),
    ).exactOptional(),
    Validity: DatetimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date and time range during which the granted license is valid, in ISO8601-UTC format.',
        }),
    ).exactOptional(),
    Beneficiary: StringSchema.and(
      z.any().openapi({ description: 'Granted license beneficiary.' }),
    ).exactOptional(),
    Entitlements: EntitlementListSchema.and(
      z.any().openapi({ description: 'License entitlements.' }),
    ).exactOptional(),
    ConsumptionConfiguration: ConsumptionConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration for consumption of the license.' }),
    ).exactOptional(),
    LicenseMetadata: MetadataListSchema.and(
      z.any().openapi({ description: 'Granted license metadata.' }),
    ).exactOptional(),
    CreateTime: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Creation time of the granted license.' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z.any().openapi({ description: 'Version of the granted license.' }),
    ).exactOptional(),
    ReceivedMetadata: ReceivedMetadataSchema.and(
      z.any().openapi({ description: 'Granted license received metadata.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a license that is granted to a grantee.', required: [] })
  .openapi('GrantedLicense')

const GrantedLicenseListSchema = z.array(GrantedLicenseSchema).openapi('GrantedLicenseList')

const ListReceivedLicensesResponseSchema = z
  .object({
    Licenses: GrantedLicenseListSchema.and(
      z.any().openapi({ description: 'Received license details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedLicensesResponse')

const ListReceivedLicensesRequestSchema = z
  .object({
    LicenseArns: ArnListSchema.and(
      z.any().openapi({ description: 'Amazon Resource Names (ARNs) of the licenses.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>ProductSKU</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Fingerprint</code> </p> </li> <li> <p> <code>IssuerName</code> </p> </li> <li> <p> <code>Beneficiary</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReceivedLicensesRequest', required: [] })
  .openapi('ListReceivedLicensesRequest')

const ListReceivedLicensesForOrganizationResponseSchema = z
  .object({
    Licenses: GrantedLicenseListSchema.and(
      z.any().openapi({ description: 'Lists the licenses the organization has received.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedLicensesForOrganizationResponse')

const ListReceivedLicensesForOrganizationRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters are supported:</p> <ul> <li> <p> <code>Beneficiary</code> </p> </li> <li> <p> <code>ProductSKU</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReceivedLicensesForOrganizationRequest', required: [] })
  .openapi('ListReceivedLicensesForOrganizationRequest')

const ResourceInventorySchema = z
  .object({
    ResourceId: StringSchema.and(
      z.any().openapi({ description: 'ID of the resource.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'Type of resource.' }),
    ).exactOptional(),
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z.any().openapi({ description: 'Platform of the resource.' }),
    ).exactOptional(),
    PlatformVersion: StringSchema.and(
      z.any().openapi({ description: 'Platform version of the resource in the inventory.' }),
    ).exactOptional(),
    ResourceOwningAccountId: StringSchema.and(
      z.any().openapi({ description: 'ID of the account that owns the resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a resource.', required: [] })
  .openapi('ResourceInventory')

const ResourceInventoryListSchema = z
  .array(ResourceInventorySchema)
  .openapi('ResourceInventoryList')

const ListResourceInventoryResponseSchema = z
  .object({
    ResourceInventoryList: ResourceInventoryListSchema.and(
      z.any().openapi({ description: 'Information about the resources.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceInventoryResponse')

const InventoryFilterConditionSchema = z
  .enum(['EQUALS', 'NOT_EQUALS', 'BEGINS_WITH', 'CONTAINS'])
  .openapi('InventoryFilterCondition')

const InventoryFilterSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Name of the filter.' })),
    Condition: InventoryFilterConditionSchema.and(
      z.any().openapi({ description: 'Condition of the filter.' }),
    ),
    Value: StringSchema.and(
      z.any().openapi({ description: 'Value of the filter.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Condition'], description: 'An inventory filter.' })
  .openapi('InventoryFilter')

const InventoryFilterListSchema = z.array(InventoryFilterSchema).openapi('InventoryFilterList')

const ListResourceInventoryRequestSchema = z
  .object({
    MaxResults: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    Filters: InventoryFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters and logical operators are supported:</p> <ul> <li> <p> <code>account_id</code> - The ID of the Amazon Web Services account that owns the resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>application_name</code> - The name of the application. Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p> </li> <li> <p> <code>license_included</code> - The type of license included. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>. Possible values are <code>sql-server-enterprise</code> | <code>sql-server-standard</code> | <code>sql-server-web</code> | <code>windows-server-datacenter</code>.</p> </li> <li> <p> <code>platform</code> - The platform of the resource. Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p> </li> <li> <p> <code>resource_id</code> - The ID of the resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>tag:&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Logical operators are <code>EQUALS</code> (single account) or <code>EQUALS</code> | <code>NOT_EQUALS</code> (cross account).</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResourceInventoryRequest', required: [] })
  .openapi('ListResourceInventoryRequest')

const FailedDependencyExceptionSchema = z.any().openapi('FailedDependencyException')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TokenDataSchema = z
  .object({
    TokenId: StringSchema.and(z.any().openapi({ description: 'Token ID.' })).exactOptional(),
    TokenType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Type of token generated. The supported value is <code>REFRESH_TOKEN</code>.',
        }),
    ).exactOptional(),
    LicenseArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license.' }),
    ).exactOptional(),
    ExpirationTime: ISO8601DateTimeSchema.and(
      z.any().openapi({ description: 'Token expiration time, in ISO8601-UTC format.' }),
    ).exactOptional(),
    TokenProperties: MaxSize3StringListSchema.and(
      z.any().openapi({ description: 'Data specified by the caller.' }),
    ).exactOptional(),
    RoleArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon Resource Names (ARN) of the roles included in the token.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token status. The possible values are <code>AVAILABLE</code> and <code>DELETED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a token.', required: [] })
  .openapi('TokenData')

const TokenListSchema = z.array(TokenDataSchema).openapi('TokenList')

const ListTokensResponseSchema = z
  .object({
    Tokens: TokenListSchema.and(
      z.any().openapi({ description: 'Received token details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTokensResponse')

const ListTokensRequestSchema = z
  .object({
    TokenIds: StringListSchema.and(z.any().openapi({ description: 'Token IDs.' })).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filter is supported:</p> <ul> <li> <p> <code>LicenseArns</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTokensRequest', required: [] })
  .openapi('ListTokensRequest')

const LicenseConfigurationUsageSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'Type of resource.' }),
    ).exactOptional(),
    ResourceStatus: StringSchema.and(
      z.any().openapi({ description: 'Status of the resource.' }),
    ).exactOptional(),
    ResourceOwnerId: StringSchema.and(
      z.any().openapi({ description: 'ID of the account that owns the resource.' }),
    ).exactOptional(),
    AssociationTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time when the license configuration was initially associated with the resource.',
        }),
    ).exactOptional(),
    ConsumedLicenses: BoxLongSchema.and(
      z.any().openapi({ description: 'Number of licenses consumed by the resource.' }),
    ).exactOptional(),
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
    LicenseConfigurationUsageList: LicenseConfigurationUsageListSchema.and(
      z.any().openapi({ description: 'Information about the license configurations.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUsageForLicenseConfigurationResponse')

const ListUsageForLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ),
    MaxResults: BoxIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Token for the next set of results.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters to scope the results. The following filters and logical operators are supported:</p> <ul> <li> <p> <code>resourceArn</code> - The ARN of the license configuration resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>resourceType</code> - The resource type (<code>EC2_INSTANCE</code> | <code>EC2_HOST</code> | <code>EC2_AMI</code> | <code>SYSTEMS_MANAGER_MANAGED_INSTANCE</code>). Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> <li> <p> <code>resourceAccount</code> - The ID of the account that owns the resource. Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LicenseConfigurationArn'],
    title: 'ListUsageForLicenseConfigurationRequest',
  })
  .openapi('ListUsageForLicenseConfigurationRequest')

const RejectGrantResponseSchema = z
  .object({
    GrantArn: ArnSchema.and(z.any().openapi({ description: 'Grant ARN.' })).exactOptional(),
    Status: GrantStatusSchema.and(
      z.any().openapi({ description: 'Grant status.' }),
    ).exactOptional(),
    Version: StringSchema.and(z.any().openapi({ description: 'Grant version.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RejectGrantResponse')

const RejectGrantRequestSchema = z
  .object({
    GrantArn: ArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the grant.' }),
    ),
  })
  .openapi({ required: ['GrantArn'], title: 'RejectGrantRequest' })
  .openapi('RejectGrantRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: 'One or more tags.' })),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(StringSchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'Keys identifying the tags to remove.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateLicenseConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateLicenseConfigurationResponse')

const LicenseConfigurationStatusSchema = z
  .enum(['AVAILABLE', 'DISABLED'])
  .openapi('LicenseConfigurationStatus')

const UpdateLicenseConfigurationRequestSchema = z
  .object({
    LicenseConfigurationArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the license configuration.' }),
    ),
    LicenseConfigurationStatus: LicenseConfigurationStatusSchema.and(
      z.any().openapi({ description: 'New status of the license configuration.' }),
    ).exactOptional(),
    LicenseRules: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'New license rule. The only rule that you can add after you create a license configuration is licenseAffinityToHost.',
        }),
    ).exactOptional(),
    LicenseCount: BoxLongSchema.and(
      z
        .any()
        .openapi({ description: 'New number of licenses managed by the license configuration.' }),
    ).exactOptional(),
    LicenseCountHardLimit: BoxBooleanSchema.and(
      z.any().openapi({ description: 'New hard limit of the number of available licenses.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'New name of the license configuration.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'New description of the license configuration.' }),
    ).exactOptional(),
    ProductInformationList: ProductInformationListSchema.and(
      z.any().openapi({ description: 'New product information.' }),
    ).exactOptional(),
    DisassociateWhenNotFound: BoxBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When true, disassociates a resource when software is uninstalled.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LicenseConfigurationArn'], title: 'UpdateLicenseConfigurationRequest' })
  .openapi('UpdateLicenseConfigurationRequest')

const UpdateLicenseManagerReportGeneratorResponseSchema = z
  .object({})
  .openapi('UpdateLicenseManagerReportGeneratorResponse')

const UpdateLicenseManagerReportGeneratorRequestSchema = z
  .object({
    LicenseManagerReportGeneratorArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Amazon Resource Name (ARN) of the report generator to update.' }),
    ),
    ReportGeneratorName: ReportGeneratorNameSchema.and(
      z.any().openapi({ description: 'Name of the report generator.' }),
    ),
    Type: ReportTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Type of reports to generate. The following report types are supported:</p> <ul> <li> <p>License configuration report - Reports the number and details of consumed licenses for a license configuration.</p> </li> <li> <p>Resource report - Reports the tracked licenses and resource consumption for a license configuration.</p> </li> </ul>',
        }),
    ),
    ReportContext: ReportContextSchema.and(z.any().openapi({ description: 'The report context.' })),
    ReportFrequency: ReportFrequencySchema.and(
      z.any().openapi({ description: 'Frequency by which reports are generated.' }),
    ),
    ClientToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'Description of the report generator.' }),
    ).exactOptional(),
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
  .object({})
  .openapi('UpdateLicenseSpecificationsForResourceResponse')

const UpdateLicenseSpecificationsForResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon Resource Name (ARN) of the Amazon Web Services resource.',
        }),
    ),
    AddLicenseSpecifications: LicenseSpecificationsSchema.and(
      z.any().openapi({ description: 'ARNs of the license configurations to add.' }),
    ).exactOptional(),
    RemoveLicenseSpecifications: LicenseSpecificationsSchema.and(
      z.any().openapi({ description: 'ARNs of the license configurations to remove.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'UpdateLicenseSpecificationsForResourceRequest' })
  .openapi('UpdateLicenseSpecificationsForResourceRequest')

const InvalidResourceStateExceptionSchema = z.any().openapi('InvalidResourceStateException')

const LicenseUsageExceptionSchema = z.any().openapi('LicenseUsageException')

const UpdateServiceSettingsResponseSchema = z.object({}).openapi('UpdateServiceSettingsResponse')

const UpdateServiceSettingsRequestSchema = z
  .object({
    S3BucketArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.',
        }),
    ).exactOptional(),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.',
        }),
    ).exactOptional(),
    OrganizationConfiguration: OrganizationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Enables integration with Organizations for cross-account discovery.',
        }),
    ).exactOptional(),
    EnableCrossAccountsDiscovery: BoxBooleanSchema.and(
      z.any().openapi({ description: 'Activates cross-account discovery.' }),
    ).exactOptional(),
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
