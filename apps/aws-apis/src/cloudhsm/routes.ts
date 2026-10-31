import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z
  .string()
  .regex(/[\w :+=.\/\\-]*/)
  .openapi('String')

const AddTagsToResourceResponseSchema = z
  .object({
    Status: StringSchema.and(z.any().openapi({ description: 'The status of the operation.' })),
  })
  .openapi({ required: ['Status'] })
  .openapi('AddTagsToResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The value of the tag.' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const AddTagsToResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.',
        }),
    ),
    TagList: TagListSchema.and(z.any().openapi({ description: 'One or more tags.' })),
  })
  .openapi({ required: ['ResourceArn', 'TagList'], title: 'AddTagsToResourceRequest' })
  .openapi('AddTagsToResourceRequest')

const CloudHsmServiceExceptionSchema = z.any().openapi('CloudHsmServiceException')

const CloudHsmInternalExceptionSchema = z.any().openapi('CloudHsmInternalException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const HapgArnSchema = z
  .string()
  .regex(/arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hapg-[0-9a-f]{8}/)
  .openapi('HapgArn')

const CreateHapgResponseSchema = z
  .object({
    HapgArn: HapgArnSchema.and(
      z.any().openapi({ description: 'The ARN of the high-availability partition group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the output of the <a>CreateHAPartitionGroup</a> action.',
    required: [],
  })
  .openapi('CreateHapgResponse')

const LabelSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]{1,64}/)
  .openapi('Label')

const CreateHapgRequestSchema = z
  .object({
    Label: LabelSchema.and(
      z.any().openapi({ description: 'The label of the new high-availability partition group.' }),
    ),
  })
  .openapi({
    required: ['Label'],
    title: 'CreateHapgRequest',
    description: 'Contains the inputs for the <a>CreateHapgRequest</a> action.',
  })
  .openapi('CreateHapgRequest')

const HsmArnSchema = z
  .string()
  .regex(/arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}/)
  .openapi({ description: 'An ARN that identifies an HSM.' })
  .openapi('HsmArn')

const CreateHsmResponseSchema = z
  .object({
    HsmArn: HsmArnSchema.and(
      z.any().openapi({ description: 'The ARN of the HSM.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the output of the <code>CreateHsm</code> operation.',
    required: [],
  })
  .openapi('CreateHsmResponse')

const SubnetIdSchema = z
  .string()
  .regex(/subnet-[0-9a-f]{8}/)
  .openapi('SubnetId')

const SshKeySchema = z
  .string()
  .regex(/[a-zA-Z0-9+\/= ._:\\@-]*/)
  .openapi('SshKey')

const IpAddressSchema = z
  .string()
  .regex(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
  .openapi('IpAddress')

const IamRoleArnSchema = z
  .string()
  .regex(/arn:aws(-iso)?:iam::[0-9]{12}:role\/[a-zA-Z0-9_\+=,\.\-@]{1,64}/)
  .openapi('IamRoleArn')

const ExternalIdSchema = z
  .string()
  .regex(/[\w :+=.\/-]*/)
  .openapi('ExternalId')

const SubscriptionTypeSchema = z
  .literal('PRODUCTION')
  .openapi({
    description:
      '<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>',
  })
  .openapi('SubscriptionType')

const ClientTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9]{1,64}/)
  .openapi('ClientToken')

const CreateHsmRequestSchema = z
  .object({
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the subnet in your VPC in which to place the HSM.',
        }),
    ),
    SshKey: SshKeySchema.and(
      z.any().openapi({ description: 'The SSH public key to install on the HSM.' }),
    ),
    EniIp: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The IP address to assign to the HSM's ENI.</p> <p>If an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the subnet.</p>",
        }),
    ).exactOptional(),
    IamRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your behalf.',
        }),
    ),
    ExternalId: ExternalIdSchema.and(
      z.any().openapi({ description: 'The external ID from <code>IamRoleArn</code>, if present.' }),
    ).exactOptional(),
    SubscriptionType: SubscriptionTypeSchema,
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-defined token to ensure idempotence. Subsequent calls to this operation with the same token will be ignored.',
        }),
    ).exactOptional(),
    SyslogIp: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubnetId', 'SshKey', 'IamRoleArn', 'SubscriptionType'],
    title: 'CreateHsmRequest',
    description: 'Contains the inputs for the <code>CreateHsm</code> operation.',
  })
  .openapi('CreateHsmRequest')

const ClientArnSchema = z
  .string()
  .regex(/arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:client-[0-9a-f]{8}/)
  .openapi('ClientArn')

const CreateLunaClientResponseSchema = z
  .object({
    ClientArn: ClientArnSchema.and(
      z.any().openapi({ description: 'The ARN of the client.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the output of the <a>CreateLunaClient</a> action.',
    required: [],
  })
  .openapi('CreateLunaClientResponse')

const ClientLabelSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]{2,64}/)
  .openapi('ClientLabel')

const CertificateSchema = z
  .string()
  .regex(/[\w :+=.\/\n-]*/)
  .min(600)
  .max(2400)
  .openapi('Certificate')

const CreateLunaClientRequestSchema = z
  .object({
    Label: ClientLabelSchema.and(
      z.any().openapi({ description: 'The label for the client.' }),
    ).exactOptional(),
    Certificate: CertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used by this client.',
        }),
    ),
  })
  .openapi({
    required: ['Certificate'],
    title: 'CreateLunaClientRequest',
    description: 'Contains the inputs for the <a>CreateLunaClient</a> action.',
  })
  .openapi('CreateLunaClientRequest')

const DeleteHapgResponseSchema = z
  .object({
    Status: StringSchema.and(z.any().openapi({ description: 'The status of the action.' })),
  })
  .openapi({
    required: ['Status'],
    description: 'Contains the output of the <a>DeleteHapg</a> action.',
  })
  .openapi('DeleteHapgResponse')

const DeleteHapgRequestSchema = z
  .object({
    HapgArn: HapgArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the high-availability partition group to delete.' }),
    ),
  })
  .openapi({
    required: ['HapgArn'],
    title: 'DeleteHapgRequest',
    description: 'Contains the inputs for the <a>DeleteHapg</a> action.',
  })
  .openapi('DeleteHapgRequest')

const DeleteHsmResponseSchema = z
  .object({
    Status: StringSchema.and(z.any().openapi({ description: 'The status of the operation.' })),
  })
  .openapi({
    required: ['Status'],
    description: 'Contains the output of the <a>DeleteHsm</a> operation.',
  })
  .openapi('DeleteHsmResponse')

const DeleteHsmRequestSchema = z
  .object({
    HsmArn: HsmArnSchema.and(z.any().openapi({ description: 'The ARN of the HSM to delete.' })),
  })
  .openapi({
    required: ['HsmArn'],
    title: 'DeleteHsmRequest',
    description: 'Contains the inputs for the <a>DeleteHsm</a> operation.',
  })
  .openapi('DeleteHsmRequest')

const DeleteLunaClientResponseSchema = z
  .object({
    Status: StringSchema.and(z.any().openapi({ description: 'The status of the action.' })),
  })
  .openapi({ required: ['Status'] })
  .openapi('DeleteLunaClientResponse')

const DeleteLunaClientRequestSchema = z
  .object({
    ClientArn: ClientArnSchema.and(
      z.any().openapi({ description: 'The ARN of the client to delete.' }),
    ),
  })
  .openapi({ required: ['ClientArn'], title: 'DeleteLunaClientRequest' })
  .openapi('DeleteLunaClientRequest')

const HsmListSchema = z
  .array(HsmArnSchema)
  .openapi({ description: 'Contains a list of ARNs that identify the HSMs.' })
  .openapi('HsmList')

const TimestampSchema = z.string().regex(/\d*/).openapi('Timestamp')

const PartitionSerialSchema = z
  .string()
  .regex(/\d{6,12}/)
  .openapi('PartitionSerial')

const PartitionSerialListSchema = z.array(PartitionSerialSchema).openapi('PartitionSerialList')

const CloudHsmObjectStateSchema = z
  .enum(['READY', 'UPDATING', 'DEGRADED'])
  .openapi('CloudHsmObjectState')

const DescribeHapgResponseSchema = z
  .object({
    HapgArn: HapgArnSchema.and(
      z.any().openapi({ description: 'The ARN of the high-availability partition group.' }),
    ).exactOptional(),
    HapgSerial: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The serial number of the high-availability partition group.' }),
    ).exactOptional(),
    HsmsLastActionFailed: HsmListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    HsmsPendingDeletion: HsmListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    HsmsPendingRegistration: HsmListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    Label: LabelSchema.and(
      z.any().openapi({ description: 'The label for the high-availability partition group.' }),
    ).exactOptional(),
    LastModifiedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the high-availability partition group was last modified.',
        }),
    ).exactOptional(),
    PartitionSerialList: PartitionSerialListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of partition serial numbers that belong to the high-availability partition group.',
        }),
    ).exactOptional(),
    State: CloudHsmObjectStateSchema.and(
      z.any().openapi({ description: 'The state of the high-availability partition group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the output of the <a>DescribeHapg</a> action.', required: [] })
  .openapi('DescribeHapgResponse')

const DescribeHapgRequestSchema = z
  .object({
    HapgArn: HapgArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the high-availability partition group to describe.' }),
    ),
  })
  .openapi({
    required: ['HapgArn'],
    title: 'DescribeHapgRequest',
    description: 'Contains the inputs for the <a>DescribeHapg</a> action.',
  })
  .openapi('DescribeHapgRequest')

const HsmStatusSchema = z
  .enum(['PENDING', 'RUNNING', 'UPDATING', 'SUSPENDED', 'TERMINATING', 'TERMINATED', 'DEGRADED'])
  .openapi('HsmStatus')

const AZSchema = z
  .string()
  .regex(/[a-zA-Z0-9\-]*/)
  .openapi('AZ')

const EniIdSchema = z
  .string()
  .regex(/eni-[0-9a-f]{8}/)
  .openapi('EniId')

const VpcIdSchema = z
  .string()
  .regex(/vpc-[0-9a-f]{8}/)
  .openapi('VpcId')

const HsmSerialNumberSchema = z
  .string()
  .regex(/\d{1,16}/)
  .openapi('HsmSerialNumber')

const PartitionArnSchema = z
  .string()
  .regex(/arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}\/partition-[0-9]{6,12}/)
  .openapi('PartitionArn')

const PartitionListSchema = z.array(PartitionArnSchema).openapi('PartitionList')

const DescribeHsmResponseSchema = z
  .object({
    HsmArn: HsmArnSchema.and(
      z.any().openapi({ description: 'The ARN of the HSM.' }),
    ).exactOptional(),
    Status: HsmStatusSchema.and(
      z.any().openapi({ description: 'The status of the HSM.' }),
    ).exactOptional(),
    StatusDetails: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Contains additional information about the status of the HSM.' }),
    ).exactOptional(),
    AvailabilityZone: AZSchema.and(
      z.any().openapi({ description: 'The Availability Zone that the HSM is in.' }),
    ).exactOptional(),
    EniId: EniIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the elastic network interface (ENI) attached to the HSM.',
        }),
    ).exactOptional(),
    EniIp: IpAddressSchema.and(
      z.any().openapi({ description: "The IP address assigned to the HSM's ENI." }),
    ).exactOptional(),
    SubscriptionType: SubscriptionTypeSchema.exactOptional(),
    SubscriptionStartDate: TimestampSchema.and(
      z.any().openapi({ description: 'The subscription start date.' }),
    ).exactOptional(),
    SubscriptionEndDate: TimestampSchema.and(
      z.any().openapi({ description: 'The subscription end date.' }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The identifier of the VPC that the HSM is in.' }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z.any().openapi({ description: 'The identifier of the subnet that the HSM is in.' }),
    ).exactOptional(),
    IamRoleArn: IamRoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM role assigned to the HSM.' }),
    ).exactOptional(),
    SerialNumber: HsmSerialNumberSchema.and(
      z.any().openapi({ description: 'The serial number of the HSM.' }),
    ).exactOptional(),
    VendorName: StringSchema.and(
      z.any().openapi({ description: 'The name of the HSM vendor.' }),
    ).exactOptional(),
    HsmType: StringSchema.and(
      z.any().openapi({ description: 'The HSM model type.' }),
    ).exactOptional(),
    SoftwareVersion: StringSchema.and(
      z.any().openapi({ description: 'The HSM software version.' }),
    ).exactOptional(),
    SshPublicKey: SshKeySchema.and(
      z.any().openapi({ description: 'The public SSH key.' }),
    ).exactOptional(),
    SshKeyLastUpdated: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the SSH key was last updated.' }),
    ).exactOptional(),
    ServerCertUri: StringSchema.and(
      z.any().openapi({ description: 'The URI of the certificate server.' }),
    ).exactOptional(),
    ServerCertLastUpdated: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the server certificate was last updated.',
        }),
    ).exactOptional(),
    Partitions: PartitionListSchema.and(
      z.any().openapi({ description: 'The list of partitions on the HSM.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the output of the <a>DescribeHsm</a> operation.',
    required: [],
  })
  .openapi('DescribeHsmResponse')

const DescribeHsmRequestSchema = z
  .object({
    HsmArn: HsmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the HSM. Either the <code>HsmArn</code> or the <code>SerialNumber</code> parameter must be specified.',
        }),
    ).exactOptional(),
    HsmSerialNumber: HsmSerialNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The serial number of the HSM. Either the <code>HsmArn</code> or the <code>HsmSerialNumber</code> parameter must be specified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeHsmRequest',
    description: 'Contains the inputs for the <a>DescribeHsm</a> operation.',
    required: [],
  })
  .openapi('DescribeHsmRequest')

const CertificateFingerprintSchema = z
  .string()
  .regex(/([0-9a-fA-F][0-9a-fA-F]:){15}[0-9a-fA-F][0-9a-fA-F]/)
  .openapi('CertificateFingerprint')

const DescribeLunaClientResponseSchema = z
  .object({
    ClientArn: ClientArnSchema.and(
      z.any().openapi({ description: 'The ARN of the client.' }),
    ).exactOptional(),
    Certificate: CertificateSchema.and(
      z
        .any()
        .openapi({ description: 'The certificate installed on the HSMs used by this client.' }),
    ).exactOptional(),
    CertificateFingerprint: CertificateFingerprintSchema.and(
      z.any().openapi({ description: 'The certificate fingerprint.' }),
    ).exactOptional(),
    LastModifiedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the client was last modified.' }),
    ).exactOptional(),
    Label: LabelSchema.and(
      z.any().openapi({ description: 'The label of the client.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLunaClientResponse')

const DescribeLunaClientRequestSchema = z
  .object({
    ClientArn: ClientArnSchema.and(
      z.any().openapi({ description: 'The ARN of the client.' }),
    ).exactOptional(),
    CertificateFingerprint: CertificateFingerprintSchema.and(
      z.any().openapi({ description: 'The certificate fingerprint.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeLunaClientRequest', required: [] })
  .openapi('DescribeLunaClientRequest')

const GetConfigResponseSchema = z
  .object({
    ConfigType: StringSchema.and(
      z.any().openapi({ description: 'The type of credentials.' }),
    ).exactOptional(),
    ConfigFile: StringSchema.and(
      z.any().openapi({ description: 'The chrystoki.conf configuration file.' }),
    ).exactOptional(),
    ConfigCred: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The certificate file containing the server.pem files of the HSMs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConfigResponse')

const ClientVersionSchema = z.enum(['5.1', '5.3']).openapi('ClientVersion')

const HapgListSchema = z.array(HapgArnSchema).openapi('HapgList')

const GetConfigRequestSchema = z
  .object({
    ClientArn: ClientArnSchema.and(z.any().openapi({ description: 'The ARN of the client.' })),
    ClientVersion: ClientVersionSchema.and(z.any().openapi({ description: 'The client version.' })),
    HapgList: HapgListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of ARNs that identify the high-availability partition groups that are associated with the client.',
        }),
    ),
  })
  .openapi({ required: ['ClientArn', 'ClientVersion', 'HapgList'], title: 'GetConfigRequest' })
  .openapi('GetConfigRequest')

const AZListSchema = z.array(AZSchema).openapi('AZList')

const ListAvailableZonesResponseSchema = z
  .object({
    AZList: AZListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of Availability Zones that have available AWS CloudHSM capacity.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAvailableZonesResponse')

const ListAvailableZonesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListAvailableZonesRequest',
    description: 'Contains the inputs for the <a>ListAvailableZones</a> action.',
  })
  .openapi('ListAvailableZonesRequest')

const PaginationTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9+\/]*/)
  .openapi('PaginationToken')

const ListHapgsResponseSchema = z
  .object({
    HapgList: HapgListSchema.and(
      z.any().openapi({ description: 'The list of high-availability partition groups.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value to <code>ListHapgs</code> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HapgList'] })
  .openapi('ListHapgsResponse')

const ListHapgsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value from a previous call to <code>ListHapgs</code>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListHapgsRequest', required: [] })
  .openapi('ListHapgsRequest')

const ListHsmsResponseSchema = z
  .object({
    HsmList: HsmListSchema.and(
      z.any().openapi({ description: 'The list of ARNs that identify the HSMs.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value to <code>ListHsms</code> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the output of the <code>ListHsms</code> operation.',
    required: [],
  })
  .openapi('ListHsmsResponse')

const ListHsmsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value from a previous call to <code>ListHsms</code>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListHsmsRequest', required: [] })
  .openapi('ListHsmsRequest')

const ClientListSchema = z.array(ClientArnSchema).openapi('ClientList')

const ListLunaClientsResponseSchema = z
  .object({
    ClientList: ClientListSchema.and(z.any().openapi({ description: 'The list of clients.' })),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this to <code>ListLunaClients</code> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClientList'] })
  .openapi('ListLunaClientsResponse')

const ListLunaClientsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value from a previous call to <code>ListLunaClients</code>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLunaClientsRequest', required: [] })
  .openapi('ListLunaClientsRequest')

const ListTagsForResourceResponseSchema = z
  .object({ TagList: TagListSchema.and(z.any().openapi({ description: 'One or more tags.' })) })
  .openapi({ required: ['TagList'] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the AWS CloudHSM resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ModifyHapgResponseSchema = z
  .object({
    HapgArn: HapgArnSchema.and(
      z.any().openapi({ description: 'The ARN of the high-availability partition group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModifyHapgResponse')

const ModifyHapgRequestSchema = z
  .object({
    HapgArn: HapgArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the high-availability partition group to modify.' }),
    ),
    Label: LabelSchema.and(
      z.any().openapi({ description: 'The new label for the high-availability partition group.' }),
    ).exactOptional(),
    PartitionSerialList: PartitionSerialListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of partition serial numbers to make members of the high-availability partition group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HapgArn'], title: 'ModifyHapgRequest' })
  .openapi('ModifyHapgRequest')

const ModifyHsmResponseSchema = z
  .object({
    HsmArn: HsmArnSchema.and(
      z.any().openapi({ description: 'The ARN of the HSM.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the output of the <a>ModifyHsm</a> operation.', required: [] })
  .openapi('ModifyHsmResponse')

const ModifyHsmRequestSchema = z
  .object({
    HsmArn: HsmArnSchema.and(z.any().openapi({ description: 'The ARN of the HSM to modify.' })),
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new identifier of the subnet that the HSM is in. The new subnet must be in the same Availability Zone as the current subnet.',
        }),
    ).exactOptional(),
    EniIp: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new IP address for the elastic network interface (ENI) attached to the HSM.</p> <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the new subnet.</p>',
        }),
    ).exactOptional(),
    IamRoleArn: IamRoleArnSchema.and(
      z.any().openapi({ description: 'The new IAM role ARN.' }),
    ).exactOptional(),
    ExternalId: ExternalIdSchema.and(
      z.any().openapi({ description: 'The new external ID.' }),
    ).exactOptional(),
    SyslogIp: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HsmArn'],
    title: 'ModifyHsmRequest',
    description: 'Contains the inputs for the <a>ModifyHsm</a> operation.',
  })
  .openapi('ModifyHsmRequest')

const ModifyLunaClientResponseSchema = z
  .object({
    ClientArn: ClientArnSchema.and(
      z.any().openapi({ description: 'The ARN of the client.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModifyLunaClientResponse')

const ModifyLunaClientRequestSchema = z
  .object({
    ClientArn: ClientArnSchema.and(z.any().openapi({ description: 'The ARN of the client.' })),
    Certificate: CertificateSchema.and(
      z.any().openapi({ description: 'The new certificate for the client.' }),
    ),
  })
  .openapi({ required: ['ClientArn', 'Certificate'], title: 'ModifyLunaClientRequest' })
  .openapi('ModifyLunaClientRequest')

const RemoveTagsFromResourceResponseSchema = z
  .object({
    Status: StringSchema.and(z.any().openapi({ description: 'The status of the operation.' })),
  })
  .openapi({ required: ['Status'] })
  .openapi('RemoveTagsFromResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const RemoveTagsFromResourceRequestSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the AWS CloudHSM resource.' }),
    ),
    TagKeyList: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tag key or keys to remove.</p> <p>Specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeyList'], title: 'RemoveTagsFromResourceRequest' })
  .openapi('RemoveTagsFromResourceRequest')

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

export const postXAmzTargetCloudHsmFrontendServiceAddTagsToResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>',
  operationId: 'AddTagsToResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.AddTagsToResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.AddTagsToResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTagsToResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddTagsToResourceResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceCreateHapgRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.CreateHapg',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>',
  operationId: 'CreateHapg',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.CreateHapg')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.CreateHapg'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateHapgRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHapgResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceCreateHsmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.CreateHsm',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>',
  operationId: 'CreateHsm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.CreateHsm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.CreateHsm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateHsmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHsmResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceCreateLunaClientRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>',
  operationId: 'CreateLunaClient',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.CreateLunaClient')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.CreateLunaClient'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLunaClientRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLunaClientResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceDeleteHapgRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>',
  operationId: 'DeleteHapg',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.DeleteHapg')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.DeleteHapg'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteHapgRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteHapgResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceDeleteHsmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>',
  operationId: 'DeleteHsm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.DeleteHsm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.DeleteHsm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteHsmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteHsmResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceDeleteLunaClientRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>',
  operationId: 'DeleteLunaClient',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.DeleteLunaClient')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.DeleteLunaClient'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLunaClientRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLunaClientResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceDescribeHapgRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>',
  operationId: 'DescribeHapg',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.DescribeHapg')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.DescribeHapg'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeHapgRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeHapgResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceDescribeHsmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>',
  operationId: 'DescribeHsm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.DescribeHsm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.DescribeHsm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeHsmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeHsmResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceDescribeLunaClientRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>',
  operationId: 'DescribeLunaClient',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.DescribeLunaClient')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.DescribeLunaClient'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLunaClientRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLunaClientResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceGetConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.GetConfig',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>',
  operationId: 'GetConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.GetConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.GetConfig'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetConfigRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConfigResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceListAvailableZonesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>',
  operationId: 'ListAvailableZones',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.ListAvailableZones')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ListAvailableZones'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAvailableZonesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAvailableZonesResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceListHapgsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ListHapgs',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>',
  operationId: 'ListHapgs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.ListHapgs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ListHapgs'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListHapgsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListHapgsResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceListHsmsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ListHsms',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>',
  operationId: 'ListHsms',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.ListHsms')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ListHsms'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListHsmsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListHsmsResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceListLunaClientsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>',
  operationId: 'ListLunaClients',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.ListLunaClients')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ListLunaClients'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLunaClientsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLunaClientsResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>',
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
        .literal('CloudHsmFrontendService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ListTagsForResource'] },
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
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceModifyHapgRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>',
  operationId: 'ModifyHapg',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.ModifyHapg')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ModifyHapg'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyHapgRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyHapgResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceModifyHsmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>',
  operationId: 'ModifyHsm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.ModifyHsm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ModifyHsm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyHsmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyHsmResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceModifyLunaClientRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client\'s HSMs.</p>',
  operationId: 'ModifyLunaClient',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.ModifyLunaClient')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.ModifyLunaClient'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyLunaClientRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyLunaClientResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource',
  description:
    '<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>',
  operationId: 'RemoveTagsFromResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CloudHsmFrontendService.RemoveTagsFromResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CloudHsmFrontendService.RemoveTagsFromResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTagsFromResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTagsFromResourceResponseSchema } },
    },
    480: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalException',
      content: { 'application/json': { schema: CloudHsmInternalExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})
