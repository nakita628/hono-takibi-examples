import { createRoute, z } from '@hono/zod-openapi'

const AssociateDomainResponseSchema = z.object({}).openapi('AssociateDomainResponse')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const IdSchema = z.string().min(1).max(256).openapi('Id')

const AssociateWebsiteAuthorizationProviderResponseSchema = z
  .object({
    AuthorizationProviderId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the authorization provider.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateWebsiteAuthorizationProviderResponse')

const AssociateWebsiteCertificateAuthorityResponseSchema = z
  .object({
    WebsiteCaId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the CA.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateWebsiteCertificateAuthorityResponse')

const FleetArnSchema = z.string().min(20).max(2048).openapi('FleetArn')

const CreateFleetResponseSchema = z
  .object({
    FleetArn: FleetArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFleetResponse')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const DeleteFleetResponseSchema = z.object({}).openapi('DeleteFleetResponse')

const AuditStreamArnSchema = z
  .string()
  .regex(/^arn:aws:kinesis:.+:[0-9]{12}:stream\/AmazonWorkLink-.*$/)
  .openapi('AuditStreamArn')

const DescribeAuditStreamConfigurationResponseSchema = z
  .object({
    AuditStreamArn: AuditStreamArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon Kinesis data stream that will receive the audit events.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAuditStreamConfigurationResponse')

const VpcIdSchema = z
  .string()
  .regex(/^vpc-([0-9a-f]{8}|[0-9a-f]{17})$/)
  .openapi('VpcId')

const SubnetIdSchema = z
  .string()
  .regex(/^subnet-([0-9a-f]{8}|[0-9a-f]{17})$/)
  .openapi('SubnetId')

const SubnetIdsSchema = z.array(SubnetIdSchema).openapi('SubnetIds')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^sg-([0-9a-f]{8}|[0-9a-f]{17})$/)
  .openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z.array(SecurityGroupIdSchema).max(5).openapi('SecurityGroupIds')

const DescribeCompanyNetworkConfigurationResponseSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The VPC with connectivity to associated websites.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subnets used for X-ENI connections from Amazon WorkLink rendering containers.',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'The security groups associated with access to the provided subnets.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCompanyNetworkConfigurationResponse')

const DeviceStatusSchema = z.enum(['ACTIVE', 'SIGNED_OUT']).openapi('DeviceStatus')

const DeviceModelSchema = z.string().min(1).max(256).openapi('DeviceModel')

const DeviceManufacturerSchema = z.string().min(1).max(256).openapi('DeviceManufacturer')

const DeviceOperatingSystemNameSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi('DeviceOperatingSystemName')

const DeviceOperatingSystemVersionSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi('DeviceOperatingSystemVersion')

const DevicePatchLevelSchema = z.string().min(1).max(256).openapi('DevicePatchLevel')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const UsernameSchema = z.string().min(1).max(256).openapi('Username')

const DescribeDeviceResponseSchema = z
  .object({
    Status: DeviceStatusSchema.and(
      z.any().openapi({ description: 'The current state of the device.' }),
    ).exactOptional(),
    Model: DeviceModelSchema.and(
      z.any().openapi({ description: 'The model of the device.' }),
    ).exactOptional(),
    Manufacturer: DeviceManufacturerSchema.and(
      z.any().openapi({ description: 'The manufacturer of the device.' }),
    ).exactOptional(),
    OperatingSystem: DeviceOperatingSystemNameSchema.and(
      z.any().openapi({ description: 'The operating system of the device.' }),
    ).exactOptional(),
    OperatingSystemVersion: DeviceOperatingSystemVersionSchema.and(
      z.any().openapi({ description: 'The operating system version of the device.' }),
    ).exactOptional(),
    PatchLevel: DevicePatchLevelSchema.and(
      z.any().openapi({ description: 'The operating system patch level of the device.' }),
    ).exactOptional(),
    FirstAccessedTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date that the device first signed in to Amazon WorkLink.' }),
    ).exactOptional(),
    LastAccessedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date that the device last accessed Amazon WorkLink.' }),
    ).exactOptional(),
    Username: UsernameSchema.and(
      z.any().openapi({ description: 'The user name associated with the device.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDeviceResponse')

const CertificateSchema = z
  .string()
  .regex(
    /-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?/,
  )
  .min(1)
  .max(8192)
  .openapi('Certificate')

const DescribeDevicePolicyConfigurationResponseSchema = z
  .object({
    DeviceCaCertificate: CertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDevicePolicyConfigurationResponse')

const DomainNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
  .min(1)
  .max(253)
  .openapi('DomainName')

const DisplayNameSchema = z.string().max(100).openapi('DisplayName')

const DomainStatusSchema = z
  .enum([
    'PENDING_VALIDATION',
    'ASSOCIATING',
    'ACTIVE',
    'INACTIVE',
    'DISASSOCIATING',
    'DISASSOCIATED',
    'FAILED_TO_ASSOCIATE',
    'FAILED_TO_DISASSOCIATE',
  ])
  .openapi('DomainStatus')

const AcmCertificateArnSchema = z
  .string()
  .regex(/arn:[\w+=\/,.@-]+:[\w+=\/,.@-]+:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=\/,.@-]+)*/)
  .openapi('AcmCertificateArn')

const DescribeDomainResponseSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name to display.' }),
    ).exactOptional(),
    CreatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the domain was added.' }),
    ).exactOptional(),
    DomainStatus: DomainStatusSchema.and(
      z.any().openapi({ description: 'The current state for the domain.' }),
    ).exactOptional(),
    AcmCertificateArn: AcmCertificateArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an issued ACM certificate that is valid for the domain being associated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDomainResponse')

const FleetNameSchema = z
  .string()
  .regex(/^[a-z0-9](?:[a-z0-9\-]{0,46}[a-z0-9])?$/)
  .min(1)
  .max(48)
  .openapi('FleetName')

const BooleanSchema = z.boolean().openapi('Boolean')

const CompanyCodeSchema = z.string().min(1).max(32).openapi('CompanyCode')

const FleetStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'DELETED', 'FAILED_TO_CREATE', 'FAILED_TO_DELETE'])
  .openapi('FleetStatus')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const DescribeFleetMetadataResponseSchema = z
  .object({
    CreatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the fleet was created.' }),
    ).exactOptional(),
    LastUpdatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the fleet was last updated.' }),
    ).exactOptional(),
    FleetName: FleetNameSchema.and(
      z.any().openapi({ description: 'The name of the fleet.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name to display.' }),
    ).exactOptional(),
    OptimizeForEndUserLocation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.',
        }),
    ).exactOptional(),
    CompanyCode: CompanyCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier used by users to sign in to the Amazon WorkLink app.',
        }),
    ).exactOptional(),
    FleetStatus: FleetStatusSchema.and(
      z.any().openapi({ description: 'The current state of the fleet.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'The tags attached to the resource. A tag is a key-value pair.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetMetadataResponse')

const IdentityProviderTypeSchema = z.literal('SAML').openapi('IdentityProviderType')

const SamlMetadataSchema = z.string().min(1).max(204800).openapi('SamlMetadata')

const DescribeIdentityProviderConfigurationResponseSchema = z
  .object({
    IdentityProviderType: IdentityProviderTypeSchema.and(
      z.any().openapi({ description: 'The type of identity provider.' }),
    ).exactOptional(),
    ServiceProviderSamlMetadata: SamlMetadataSchema.and(
      z
        .any()
        .openapi({
          description: 'The SAML metadata document uploaded to the user’s identity provider.',
        }),
    ).exactOptional(),
    IdentityProviderSamlMetadata: SamlMetadataSchema.and(
      z
        .any()
        .openapi({
          description: 'The SAML metadata document provided by the user’s identity provider.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeIdentityProviderConfigurationResponse')

const DescribeWebsiteCertificateAuthorityResponseSchema = z
  .object({
    Certificate: CertificateSchema.and(
      z.any().openapi({ description: 'The root certificate of the certificate authority.' }),
    ).exactOptional(),
    CreatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the certificate authority was added.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The certificate name to display.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWebsiteCertificateAuthorityResponse')

const DisassociateDomainResponseSchema = z.object({}).openapi('DisassociateDomainResponse')

const DisassociateWebsiteAuthorizationProviderResponseSchema = z
  .object({})
  .openapi('DisassociateWebsiteAuthorizationProviderResponse')

const DisassociateWebsiteCertificateAuthorityResponseSchema = z
  .object({})
  .openapi('DisassociateWebsiteCertificateAuthorityResponse')

const DeviceSummarySchema = z
  .object({
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the device.' }),
    ).exactOptional(),
    DeviceStatus: DeviceStatusSchema.and(
      z.any().openapi({ description: 'The status of the device.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of devices.', required: [] })
  .openapi('DeviceSummary')

const DeviceSummaryListSchema = z.array(DeviceSummarySchema).openapi('DeviceSummaryList')

const NextTokenSchema = z
  .string()
  .regex(/[\w\-]+/)
  .min(1)
  .max(4096)
  .openapi('NextToken')

const ListDevicesResponseSchema = z
  .object({
    Devices: DeviceSummaryListSchema.and(
      z.any().openapi({ description: 'Information about the devices.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDevicesResponse')

const DomainSummarySchema = z
  .object({
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'The name of the domain.' })),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name to display.' }),
    ).exactOptional(),
    CreatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the domain was created.' }),
    ),
    DomainStatus: DomainStatusSchema.and(
      z.any().openapi({ description: 'The status of the domain.' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'CreatedTime', 'DomainStatus'],
    description: 'The summary of the domain.',
  })
  .openapi('DomainSummary')

const DomainSummaryListSchema = z.array(DomainSummarySchema).openapi('DomainSummaryList')

const ListDomainsResponseSchema = z
  .object({
    Domains: DomainSummaryListSchema.and(
      z.any().openapi({ description: 'Information about the domains.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDomainsResponse')

const FleetSummarySchema = z
  .object({
    FleetArn: FleetArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
    ).exactOptional(),
    CreatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time when the fleet was created.' }),
    ).exactOptional(),
    LastUpdatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time when the fleet was last updated.' }),
    ).exactOptional(),
    FleetName: FleetNameSchema.and(
      z.any().openapi({ description: 'The name of the fleet.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name of the fleet to display.' }),
    ).exactOptional(),
    CompanyCode: CompanyCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier used by users to sign into the Amazon WorkLink app.',
        }),
    ).exactOptional(),
    FleetStatus: FleetStatusSchema.and(
      z.any().openapi({ description: 'The status of the fleet.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'The tags attached to the resource. A tag is a key-value pair.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of the fleet.', required: [] })
  .openapi('FleetSummary')

const FleetSummaryListSchema = z.array(FleetSummarySchema).openapi('FleetSummaryList')

const ListFleetsResponseSchema = z
  .object({
    FleetSummaryList: FleetSummaryListSchema.and(
      z.any().openapi({ description: 'The summary list of the fleets.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFleetsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'The tags attached to the resource. A tag is a key-value pair.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AuthorizationProviderTypeSchema = z.literal('SAML').openapi('AuthorizationProviderType')

const WebsiteAuthorizationProviderSummarySchema = z
  .object({
    AuthorizationProviderId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the authorization provider.' }),
    ).exactOptional(),
    AuthorizationProviderType: AuthorizationProviderTypeSchema.and(
      z.any().openapi({ description: 'The authorization provider type.' }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name of the authorization provider. This applies only to SAML-based authorization providers.',
        }),
    ).exactOptional(),
    CreatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time of creation.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AuthorizationProviderType'],
    description: 'The summary of the website authorization provider.',
  })
  .openapi('WebsiteAuthorizationProviderSummary')

const WebsiteAuthorizationProvidersSummaryListSchema = z
  .array(WebsiteAuthorizationProviderSummarySchema)
  .openapi('WebsiteAuthorizationProvidersSummaryList')

const ListWebsiteAuthorizationProvidersResponseSchema = z
  .object({
    WebsiteAuthorizationProviders: WebsiteAuthorizationProvidersSummaryListSchema.and(
      z.any().openapi({ description: 'The website authorization providers.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWebsiteAuthorizationProvidersResponse')

const WebsiteCaSummarySchema = z
  .object({
    WebsiteCaId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the CA.' }),
    ).exactOptional(),
    CreatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time when the CA was added.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name to display.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of the certificate authority (CA).', required: [] })
  .openapi('WebsiteCaSummary')

const WebsiteCaSummaryListSchema = z.array(WebsiteCaSummarySchema).openapi('WebsiteCaSummaryList')

const ListWebsiteCertificateAuthoritiesResponseSchema = z
  .object({
    WebsiteCertificateAuthorities: WebsiteCaSummaryListSchema.and(
      z.any().openapi({ description: 'Information about the certificates.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWebsiteCertificateAuthoritiesResponse')

const RestoreDomainAccessResponseSchema = z.object({}).openapi('RestoreDomainAccessResponse')

const RevokeDomainAccessResponseSchema = z.object({}).openapi('RevokeDomainAccessResponse')

const SignOutUserResponseSchema = z.object({}).openapi('SignOutUserResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateAuditStreamConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateAuditStreamConfigurationResponse')

const UpdateCompanyNetworkConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateCompanyNetworkConfigurationResponse')

const UpdateDevicePolicyConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateDevicePolicyConfigurationResponse')

const UpdateDomainMetadataResponseSchema = z.object({}).openapi('UpdateDomainMetadataResponse')

const UpdateFleetMetadataResponseSchema = z.object({}).openapi('UpdateFleetMetadataResponse')

const UpdateIdentityProviderConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateIdentityProviderConfigurationResponse')

const AssociateDomainRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
    ),
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The fully qualified domain name (FQDN).' }),
    ),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name to display.' }),
    ).exactOptional(),
    AcmCertificateArn: AcmCertificateArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an issued ACM certificate that is valid for the domain being associated.',
        }),
    ),
  })
  .openapi({
    required: ['FleetArn', 'DomainName', 'AcmCertificateArn'],
    title: 'AssociateDomainRequest',
  })
  .openapi('AssociateDomainRequest')

const AssociateWebsiteAuthorizationProviderRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    AuthorizationProviderType: AuthorizationProviderTypeSchema.and(
      z.any().openapi({ description: 'The authorization provider type.' }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name of the authorization provider. This applies only to SAML-based authorization providers.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FleetArn', 'AuthorizationProviderType'],
    title: 'AssociateWebsiteAuthorizationProviderRequest',
  })
  .openapi('AssociateWebsiteAuthorizationProviderRequest')

const AssociateWebsiteCertificateAuthorityRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    Certificate: CertificateSchema.and(
      z.any().openapi({ description: 'The root certificate of the CA.' }),
    ),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The certificate name to display.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FleetArn', 'Certificate'],
    title: 'AssociateWebsiteCertificateAuthorityRequest',
  })
  .openapi('AssociateWebsiteCertificateAuthorityRequest')

const CertificateChainSchema = z
  .string()
  .regex(
    /(-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}\u000D?\u000A)*-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?/,
  )
  .min(1)
  .max(32768)
  .openapi('CertificateChain')

const CreateFleetRequestSchema = z
  .object({
    FleetName: FleetNameSchema.and(
      z.any().openapi({ description: 'A unique name for the fleet.' }),
    ),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The fleet name to display.' }),
    ).exactOptional(),
    OptimizeForEndUserLocation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: ' The tags to add to the resource. A tag is a key-value pair.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetName'], title: 'CreateFleetRequest' })
  .openapi('CreateFleetRequest')

const DeleteFleetRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
  })
  .openapi({ required: ['FleetArn'], title: 'DeleteFleetRequest' })
  .openapi('DeleteFleetRequest')

const DescribeAuditStreamConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
  })
  .openapi({ required: ['FleetArn'], title: 'DescribeAuditStreamConfigurationRequest' })
  .openapi('DescribeAuditStreamConfigurationRequest')

const DescribeCompanyNetworkConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
  })
  .openapi({ required: ['FleetArn'], title: 'DescribeCompanyNetworkConfigurationRequest' })
  .openapi('DescribeCompanyNetworkConfigurationRequest')

const DescribeDevicePolicyConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
  })
  .openapi({ required: ['FleetArn'], title: 'DescribeDevicePolicyConfigurationRequest' })
  .openapi('DescribeDevicePolicyConfigurationRequest')

const DescribeDeviceRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DeviceId: IdSchema.and(
      z.any().openapi({ description: "A unique identifier for a registered user's device." }),
    ),
  })
  .openapi({ required: ['FleetArn', 'DeviceId'], title: 'DescribeDeviceRequest' })
  .openapi('DescribeDeviceRequest')

const DescribeDomainRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'The name of the domain.' })),
  })
  .openapi({ required: ['FleetArn', 'DomainName'], title: 'DescribeDomainRequest' })
  .openapi('DescribeDomainRequest')

const DescribeFleetMetadataRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
    ),
  })
  .openapi({ required: ['FleetArn'], title: 'DescribeFleetMetadataRequest' })
  .openapi('DescribeFleetMetadataRequest')

const DescribeIdentityProviderConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
  })
  .openapi({ required: ['FleetArn'], title: 'DescribeIdentityProviderConfigurationRequest' })
  .openapi('DescribeIdentityProviderConfigurationRequest')

const DescribeWebsiteCertificateAuthorityRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    WebsiteCaId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the certificate authority.' }),
    ),
  })
  .openapi({
    required: ['FleetArn', 'WebsiteCaId'],
    title: 'DescribeWebsiteCertificateAuthorityRequest',
  })
  .openapi('DescribeWebsiteCertificateAuthorityRequest')

const DisassociateDomainRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'The name of the domain.' })),
  })
  .openapi({ required: ['FleetArn', 'DomainName'], title: 'DisassociateDomainRequest' })
  .openapi('DisassociateDomainRequest')

const DisassociateWebsiteAuthorizationProviderRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    AuthorizationProviderId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the authorization provider.' }),
    ),
  })
  .openapi({
    required: ['FleetArn', 'AuthorizationProviderId'],
    title: 'DisassociateWebsiteAuthorizationProviderRequest',
  })
  .openapi('DisassociateWebsiteAuthorizationProviderRequest')

const DisassociateWebsiteCertificateAuthorityRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    WebsiteCaId: IdSchema.and(z.any().openapi({ description: 'A unique identifier for the CA.' })),
  })
  .openapi({
    required: ['FleetArn', 'WebsiteCaId'],
    title: 'DisassociateWebsiteCertificateAuthorityRequest',
  })
  .openapi('DisassociateWebsiteCertificateAuthorityRequest')

const MaxResultsSchema = z.int().min(1).openapi('MaxResults')

const ListDevicesRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to be included in the next page.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn'], title: 'ListDevicesRequest' })
  .openapi('ListDevicesRequest')

const ListDomainsRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to be included in the next page.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn'], title: 'ListDomainsRequest' })
  .openapi('ListDomainsRequest')

const ListFleetsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to be included in the next page.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFleetsRequest', required: [] })
  .openapi('ListFleetsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListWebsiteAuthorizationProvidersRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to be included in the next page.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn'], title: 'ListWebsiteAuthorizationProvidersRequest' })
  .openapi('ListWebsiteAuthorizationProvidersRequest')

const ListWebsiteCertificateAuthoritiesRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to be included in the next page.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn'], title: 'ListWebsiteCertificateAuthoritiesRequest' })
  .openapi('ListWebsiteCertificateAuthoritiesRequest')

const RestoreDomainAccessRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'The name of the domain.' })),
  })
  .openapi({ required: ['FleetArn', 'DomainName'], title: 'RestoreDomainAccessRequest' })
  .openapi('RestoreDomainAccessRequest')

const RevokeDomainAccessRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'The name of the domain.' })),
  })
  .openapi({ required: ['FleetArn', 'DomainName'], title: 'RevokeDomainAccessRequest' })
  .openapi('RevokeDomainAccessRequest')

const SignOutUserRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    Username: UsernameSchema.and(z.any().openapi({ description: 'The name of the user.' })),
  })
  .openapi({ required: ['FleetArn', 'Username'], title: 'SignOutUserRequest' })
  .openapi('SignOutUserRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'The tags to add to the resource. A tag is a key-value pair.' }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAuditStreamConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    AuditStreamArn: AuditStreamArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the Amazon Kinesis data stream that receives the audit events.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn'], title: 'UpdateAuditStreamConfigurationRequest' })
  .openapi('UpdateAuditStreamConfigurationRequest')

const UpdateCompanyNetworkConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The VPC with connectivity to associated websites.' }),
    ),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subnets used for X-ENI connections from Amazon WorkLink rendering containers.',
        }),
    ),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'The security groups associated with access to the provided subnets.',
        }),
    ),
  })
  .openapi({
    required: ['FleetArn', 'VpcId', 'SubnetIds', 'SecurityGroupIds'],
    title: 'UpdateCompanyNetworkConfigurationRequest',
  })
  .openapi('UpdateCompanyNetworkConfigurationRequest')

const UpdateDevicePolicyConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DeviceCaCertificate: CertificateChainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn'], title: 'UpdateDevicePolicyConfigurationRequest' })
  .openapi('UpdateDevicePolicyConfigurationRequest')

const UpdateDomainMetadataRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'The name of the domain.' })),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name to display.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn', 'DomainName'], title: 'UpdateDomainMetadataRequest' })
  .openapi('UpdateDomainMetadataRequest')

const UpdateFleetMetadataRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    DisplayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet name to display. The existing DisplayName is unset if null is passed.',
        }),
    ).exactOptional(),
    OptimizeForEndUserLocation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetArn'], title: 'UpdateFleetMetadataRequest' })
  .openapi('UpdateFleetMetadataRequest')

const UpdateIdentityProviderConfigurationRequestSchema = z
  .object({
    FleetArn: FleetArnSchema.and(z.any().openapi({ description: 'The ARN of the fleet.' })),
    IdentityProviderType: IdentityProviderTypeSchema.and(
      z.any().openapi({ description: 'The type of identity provider.' }),
    ),
    IdentityProviderSamlMetadata: SamlMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FleetArn', 'IdentityProviderType'],
    title: 'UpdateIdentityProviderConfigurationRequest',
  })
  .openapi('UpdateIdentityProviderConfigurationRequest')

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

export const postAssociateDomainRoute = createRoute({
  method: 'post',
  path: '/associateDomain',
  description: 'Specifies a domain to be associated to Amazon WorkLink.',
  operationId: 'AssociateDomain',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
              DomainName: z
                .string()
                .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
                .min(1)
                .max(253)
                .openapi({ description: 'The fully qualified domain name (FQDN).' }),
              DisplayName: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'The name to display.' }),
              AcmCertificateArn: z
                .string()
                .regex(
                  /arn:[\w+=\/,.@-]+:[\w+=\/,.@-]+:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=\/,.@-]+)*/,
                )
                .openapi({
                  description:
                    'The ARN of an issued ACM certificate that is valid for the domain being associated.',
                }),
            })
            .openapi({ required: ['FleetArn', 'DomainName', 'AcmCertificateArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateDomainResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postAssociateWebsiteAuthorizationProviderRoute = createRoute({
  method: 'post',
  path: '/associateWebsiteAuthorizationProvider',
  description:
    'Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.',
  operationId: 'AssociateWebsiteAuthorizationProvider',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              AuthorizationProviderType: z
                .literal('SAML')
                .openapi({ description: 'The authorization provider type.' }),
              DomainName: z
                .string()
                .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
                .min(1)
                .max(253)
                .exactOptional()
                .openapi({
                  description:
                    'The domain name of the authorization provider. This applies only to SAML-based authorization providers.',
                }),
            })
            .openapi({ required: ['FleetArn', 'AuthorizationProviderType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateWebsiteAuthorizationProviderResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postAssociateWebsiteCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/associateWebsiteCertificateAuthority',
  description:
    'Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.',
  operationId: 'AssociateWebsiteCertificateAuthority',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              Certificate: z
                .string()
                .regex(
                  /-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?/,
                )
                .min(1)
                .max(8192)
                .openapi({ description: 'The root certificate of the CA.' }),
              DisplayName: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'The certificate name to display.' }),
            })
            .openapi({ required: ['FleetArn', 'Certificate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateWebsiteCertificateAuthorityResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postCreateFleetRoute = createRoute({
  method: 'post',
  path: '/createFleet',
  description:
    'Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FleetName: z
                .string()
                .regex(/^[a-z0-9](?:[a-z0-9\-]{0,46}[a-z0-9])?$/)
                .min(1)
                .max(48)
                .openapi({ description: 'A unique name for the fleet.' }),
              DisplayName: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'The fleet name to display.' }),
              OptimizeForEndUserLocation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description: ' The tags to add to the resource. A tag is a key-value pair.',
                }),
            })
            .openapi({ required: ['FleetName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFleetResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDeleteFleetRoute = createRoute({
  method: 'post',
  path: '/deleteFleet',
  description: 'Deletes a fleet. Prevents users from accessing previously associated websites. ',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFleetResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeAuditStreamConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeAuditStreamConfiguration',
  description: 'Describes the configuration for delivering audit streams to the customer account.',
  operationId: 'DescribeAuditStreamConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAuditStreamConfigurationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeCompanyNetworkConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeCompanyNetworkConfiguration',
  description:
    'Describes the networking configuration to access the internal websites associated with the specified fleet.',
  operationId: 'DescribeCompanyNetworkConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeCompanyNetworkConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeDeviceRoute = createRoute({
  method: 'post',
  path: '/describeDevice',
  description: "Provides information about a user's device.",
  operationId: 'DescribeDevice',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DeviceId: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: "A unique identifier for a registered user's device." }),
            })
            .openapi({ required: ['FleetArn', 'DeviceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDeviceResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeDevicePolicyConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeDevicePolicyConfiguration',
  description: 'Describes the device policy configuration for the specified fleet.',
  operationId: 'DescribeDevicePolicyConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDevicePolicyConfigurationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeDomainRoute = createRoute({
  method: 'post',
  path: '/describeDomain',
  description: 'Provides information about the domain.',
  operationId: 'DescribeDomain',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DomainName: z
                .string()
                .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
                .min(1)
                .max(253)
                .openapi({ description: 'The name of the domain.' }),
            })
            .openapi({ required: ['FleetArn', 'DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDomainResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeFleetMetadataRoute = createRoute({
  method: 'post',
  path: '/describeFleetMetadata',
  description:
    'Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.',
  operationId: 'DescribeFleetMetadata',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the fleet.' }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetMetadataResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeIdentityProviderConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeIdentityProviderConfiguration',
  description: 'Describes the identity provider configuration of the specified fleet.',
  operationId: 'DescribeIdentityProviderConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeIdentityProviderConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDescribeWebsiteCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/describeWebsiteCertificateAuthority',
  description: 'Provides information about the certificate authority.',
  operationId: 'DescribeWebsiteCertificateAuthority',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              WebsiteCaId: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'A unique identifier for the certificate authority.' }),
            })
            .openapi({ required: ['FleetArn', 'WebsiteCaId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeWebsiteCertificateAuthorityResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDisassociateDomainRoute = createRoute({
  method: 'post',
  path: '/disassociateDomain',
  description:
    'Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. ',
  operationId: 'DisassociateDomain',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DomainName: z
                .string()
                .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
                .min(1)
                .max(253)
                .openapi({ description: 'The name of the domain.' }),
            })
            .openapi({ required: ['FleetArn', 'DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateDomainResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDisassociateWebsiteAuthorizationProviderRoute = createRoute({
  method: 'post',
  path: '/disassociateWebsiteAuthorizationProvider',
  description:
    "Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.",
  operationId: 'DisassociateWebsiteAuthorizationProvider',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              AuthorizationProviderId: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'A unique identifier for the authorization provider.' }),
            })
            .openapi({ required: ['FleetArn', 'AuthorizationProviderId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateWebsiteAuthorizationProviderResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDisassociateWebsiteCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/disassociateWebsiteCertificateAuthority',
  description: 'Removes a certificate authority (CA).',
  operationId: 'DisassociateWebsiteCertificateAuthority',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              WebsiteCaId: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'A unique identifier for the CA.' }),
            })
            .openapi({ required: ['FleetArn', 'WebsiteCaId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateWebsiteCertificateAuthorityResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListDevicesRoute = createRoute({
  method: 'post',
  path: '/listDevices',
  description: 'Retrieves a list of devices registered with the specified fleet.',
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
          schema: z
            .object({
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              NextToken: z
                .string()
                .regex(/[\w\-]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to be included in the next page.',
                }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDevicesResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListDomainsRoute = createRoute({
  method: 'post',
  path: '/listDomains',
  description: 'Retrieves a list of domains associated to a specified fleet.',
  operationId: 'ListDomains',
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
          schema: z
            .object({
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              NextToken: z
                .string()
                .regex(/[\w\-]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to be included in the next page.',
                }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDomainsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListFleetsRoute = createRoute({
  method: 'post',
  path: '/listFleets',
  description: 'Retrieves a list of fleets for the current account and Region.',
  operationId: 'ListFleets',
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
          schema: z
            .object({
              NextToken: z
                .string()
                .regex(/[\w\-]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to be included in the next page.',
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
      content: { 'application/json': { schema: ListFleetsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description: 'Retrieves a list of tags for the specified resource.',
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
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the fleet.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description:
    'Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.',
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
    params: z.object({
      ResourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the fleet.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description: 'The tags to add to the resource. A tag is a key-value pair.',
                }),
            })
            .openapi({ required: ['Tags'] }),
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListWebsiteAuthorizationProvidersRoute = createRoute({
  method: 'post',
  path: '/listWebsiteAuthorizationProviders',
  description:
    'Retrieves a list of website authorization providers associated with a specified fleet.',
  operationId: 'ListWebsiteAuthorizationProviders',
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
          schema: z
            .object({
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              NextToken: z
                .string()
                .regex(/[\w\-]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to be included in the next page.',
                }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWebsiteAuthorizationProvidersResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postListWebsiteCertificateAuthoritiesRoute = createRoute({
  method: 'post',
  path: '/listWebsiteCertificateAuthorities',
  description:
    'Retrieves a list of certificate authorities added for the current account and Region.',
  operationId: 'ListWebsiteCertificateAuthorities',
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
          schema: z
            .object({
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to be included in the next page.',
                }),
              NextToken: z
                .string()
                .regex(/[\w\-]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWebsiteCertificateAuthoritiesResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postRestoreDomainAccessRoute = createRoute({
  method: 'post',
  path: '/restoreDomainAccess',
  description: 'Moves a domain to ACTIVE status if it was in the INACTIVE status.',
  operationId: 'RestoreDomainAccess',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DomainName: z
                .string()
                .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
                .min(1)
                .max(253)
                .openapi({ description: 'The name of the domain.' }),
            })
            .openapi({ required: ['FleetArn', 'DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreDomainAccessResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postRevokeDomainAccessRoute = createRoute({
  method: 'post',
  path: '/revokeDomainAccess',
  description: 'Moves a domain to INACTIVE status if it was in the ACTIVE status.',
  operationId: 'RevokeDomainAccess',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DomainName: z
                .string()
                .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
                .min(1)
                .max(253)
                .openapi({ description: 'The name of the domain.' }),
            })
            .openapi({ required: ['FleetArn', 'DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RevokeDomainAccessResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postSignOutUserRoute = createRoute({
  method: 'post',
  path: '/signOutUser',
  description:
    'Signs the user out from all of their devices. The user can sign in again if they have valid credentials.',
  operationId: 'SignOutUser',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              Username: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the user.' }),
            })
            .openapi({ required: ['FleetArn', 'Username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SignOutUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'Removes one or more tags from the specified resource.',
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
    params: z.object({
      ResourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the fleet.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The list of tag keys to remove from the resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postUpdateAuditStreamConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateAuditStreamConfiguration',
  description: 'Updates the audit stream configuration for the fleet.',
  operationId: 'UpdateAuditStreamConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              AuditStreamArn: z
                .string()
                .regex(/^arn:aws:kinesis:.+:[0-9]{12}:stream\/AmazonWorkLink-.*$/)
                .exactOptional()
                .openapi({
                  description:
                    'The ARN of the Amazon Kinesis data stream that receives the audit events.',
                }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAuditStreamConfigurationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postUpdateCompanyNetworkConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateCompanyNetworkConfiguration',
  description: 'Updates the company network configuration for the fleet.',
  operationId: 'UpdateCompanyNetworkConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              VpcId: z
                .string()
                .regex(/^vpc-([0-9a-f]{8}|[0-9a-f]{17})$/)
                .openapi({ description: 'The VPC with connectivity to associated websites.' }),
              SubnetIds: z
                .array(SubnetIdSchema)
                .openapi({
                  description:
                    'The subnets used for X-ENI connections from Amazon WorkLink rendering containers.',
                }),
              SecurityGroupIds: z
                .array(SecurityGroupIdSchema)
                .max(5)
                .openapi({
                  description:
                    'The security groups associated with access to the provided subnets.',
                }),
            })
            .openapi({ required: ['FleetArn', 'VpcId', 'SubnetIds', 'SecurityGroupIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCompanyNetworkConfigurationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postUpdateDevicePolicyConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateDevicePolicyConfiguration',
  description: 'Updates the device policy configuration for the fleet.',
  operationId: 'UpdateDevicePolicyConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DeviceCaCertificate: z
                .string()
                .regex(
                  /(-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}\u000D?\u000A)*-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?/,
                )
                .min(1)
                .max(32768)
                .exactOptional()
                .openapi({
                  description:
                    'The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.',
                }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDevicePolicyConfigurationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postUpdateDomainMetadataRoute = createRoute({
  method: 'post',
  path: '/updateDomainMetadata',
  description: 'Updates domain metadata, such as DisplayName.',
  operationId: 'UpdateDomainMetadata',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DomainName: z
                .string()
                .regex(/^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$/)
                .min(1)
                .max(253)
                .openapi({ description: 'The name of the domain.' }),
              DisplayName: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'The name to display.' }),
            })
            .openapi({ required: ['FleetArn', 'DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDomainMetadataResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postUpdateFleetMetadataRoute = createRoute({
  method: 'post',
  path: '/UpdateFleetMetadata',
  description: 'Updates fleet metadata, such as DisplayName.',
  operationId: 'UpdateFleetMetadata',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              DisplayName: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The fleet name to display. The existing DisplayName is unset if null is passed.',
                }),
              OptimizeForEndUserLocation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.',
                }),
            })
            .openapi({ required: ['FleetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFleetMetadataResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postUpdateIdentityProviderConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateIdentityProviderConfiguration',
  description: 'Updates the identity provider configuration for the fleet.',
  operationId: 'UpdateIdentityProviderConfiguration',
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
              FleetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({ description: 'The ARN of the fleet.' }),
              IdentityProviderType: z
                .literal('SAML')
                .openapi({ description: 'The type of identity provider.' }),
              IdentityProviderSamlMetadata: z
                .string()
                .min(1)
                .max(204800)
                .exactOptional()
                .openapi({
                  description:
                    'The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.',
                }),
            })
            .openapi({ required: ['FleetArn', 'IdentityProviderType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateIdentityProviderConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
  deprecated: true,
})
