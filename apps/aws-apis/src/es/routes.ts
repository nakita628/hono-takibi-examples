import { createRoute, z } from '@hono/zod-openapi'

const AutoTuneDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Specifies timestamp for the Auto-Tune action scheduled for the domain. ',
  })
  .openapi('AutoTuneDate')

const ScheduledAutoTuneActionTypeSchema = z
  .enum(['JVM_HEAP_SIZE_TUNING', 'JVM_YOUNG_GEN_TUNING'])
  .openapi({
    description:
      'Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING. ',
  })
  .openapi('ScheduledAutoTuneActionType')

const ScheduledAutoTuneDescriptionSchema = z
  .string()
  .openapi({ description: 'Specifies Auto-Tune action description. ' })
  .openapi('ScheduledAutoTuneDescription')

const ScheduledAutoTuneSeverityTypeSchema = z
  .enum(['LOW', 'MEDIUM', 'HIGH'])
  .openapi({
    description: 'Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH. ',
  })
  .openapi('ScheduledAutoTuneSeverityType')

const ScheduledAutoTuneDetailsSchema = z
  .object({
    Date: AutoTuneDateSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies timestamp for the Auto-Tune action scheduled for the domain. ',
        }),
    ).exactOptional(),
    ActionType: ScheduledAutoTuneActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING. ',
        }),
    ).exactOptional(),
    Action: ScheduledAutoTuneDescriptionSchema.and(
      z.any().openapi({ description: 'Specifies Auto-Tune action description. ' }),
    ).exactOptional(),
    Severity: ScheduledAutoTuneSeverityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. ',
    required: [],
  })
  .openapi('ScheduledAutoTuneDetails')

type AutoTuneDetailsType = {
  ScheduledAutoTuneDetails?: z.infer<typeof ScheduledAutoTuneDetailsSchema>
}

const StorageTypeNameSchema = z
  .string()
  .openapi({
    description:
      ' Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> ',
  })
  .openapi('StorageTypeName')

const StorageSubTypeNameSchema = z
  .string()
  .openapi({
    description:
      ' SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>gp3</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. ',
  })
  .openapi('StorageSubTypeName')

const LimitNameSchema = z.string().openapi('LimitName')

const LimitValueSchema = z.string().openapi('LimitValue')

const LimitValueListSchema = z.array(LimitValueSchema).openapi('LimitValueList')

const StorageTypeLimitSchema = z
  .object({
    LimitName: LimitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Name of storage limits that are applicable for given storage type. If <code> <a>StorageType</a> </code> is ebs, following storage options are applicable <ol> <li>MinimumVolumeSize</li> Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. <li>MaximumVolumeSize</li> Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. <li>MaximumIops</li> Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable. <li>MinimumIops</li> Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable. <li>MaximumThroughput</li> Maximum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable. <li>MinimumThroughput</li> Minimum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable. </ol> ',
        }),
    ).exactOptional(),
    LimitValues: LimitValueListSchema.and(
      z
        .any()
        .openapi({
          description: ' Values for the <code> <a>StorageTypeLimit$LimitName</a> </code> . ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Limits that are applicable for given storage type. ', required: [] })
  .openapi('StorageTypeLimit')

const StorageTypeLimitListSchema = z.array(StorageTypeLimitSchema).openapi('StorageTypeLimitList')

const StorageTypeSchema = z
  .object({
    StorageTypeName: StorageTypeNameSchema.exactOptional(),
    StorageSubTypeName: StorageSubTypeNameSchema.exactOptional(),
    StorageTypeLimits: StorageTypeLimitListSchema.and(
      z
        .any()
        .openapi({ description: 'List of limits that are applicable for given storage type. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType. ',
    required: [],
  })
  .openapi('StorageType')

const StorageTypeListSchema = z.array(StorageTypeSchema).openapi('StorageTypeList')

const MinimumInstanceCountSchema = z
  .int()
  .openapi({
    description: ' Minimum number of Instances that can be instantiated for given InstanceType. ',
  })
  .openapi('MinimumInstanceCount')

const MaximumInstanceCountSchema = z
  .int()
  .openapi({
    description: ' Maximum number of Instances that can be instantiated for given InstanceType. ',
  })
  .openapi('MaximumInstanceCount')

const InstanceCountLimitsSchema = z
  .object({
    MinimumInstanceCount: MinimumInstanceCountSchema.exactOptional(),
    MaximumInstanceCount: MaximumInstanceCountSchema.exactOptional(),
  })
  .openapi({
    description:
      ' InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. ',
    required: [],
  })
  .openapi('InstanceCountLimits')

const InstanceLimitsSchema = z
  .object({ InstanceCountLimits: InstanceCountLimitsSchema.exactOptional() })
  .openapi({
    description:
      'InstanceLimits represents the list of instance related attributes that are available for given InstanceType. ',
    required: [],
  })
  .openapi('InstanceLimits')

const AdditionalLimitSchema = z
  .object({
    LimitName: LimitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            " Name of Additional Limit is specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> etc. <br/> Attributes and their details: <br/> <ul> <li>MaximumNumberOfDataNodesSupported</li> This attribute will be present in Master node only to specify how much data nodes upto which given <code> <a>ESPartitionInstanceType</a> </code> can support as master node. <li>MaximumNumberOfDataNodesWithoutMasterNode</li> This attribute will be present in Data node only to specify how much data nodes of given <code> <a>ESPartitionInstanceType</a> </code> upto which you don't need any master nodes to govern them. </ul> ",
        }),
    ).exactOptional(),
    LimitValues: LimitValueListSchema.and(
      z
        .any()
        .openapi({
          description: ' Value for given <code> <a>AdditionalLimit$LimitName</a> </code> . ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . ",
    required: [],
  })
  .openapi('AdditionalLimit')

const AdditionalLimitListSchema = z.array(AdditionalLimitSchema).openapi('AdditionalLimitList')

type LimitsType = {
  StorageTypes?: z.infer<typeof StorageTypeListSchema> & { [key: string]: unknown }
  InstanceLimits?: z.infer<typeof InstanceLimitsSchema>
  AdditionalLimits?: z.infer<typeof AdditionalLimitListSchema> & { [key: string]: unknown }
}

const OwnerIdSchema = z.string().length(12).openapi('OwnerId')

const DomainNameSchema = z
  .string()
  .regex(/[a-z][a-z0-9\-]+/)
  .min(3)
  .max(28)
  .openapi({
    description:
      'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
  })
  .openapi('DomainName')

const RegionSchema = z.string().openapi('Region')

const DomainInformationSchema = z
  .object({
    OwnerId: OwnerIdSchema.exactOptional(),
    DomainName: DomainNameSchema,
    Region: RegionSchema.exactOptional(),
  })
  .openapi({ required: ['DomainName'] })
  .openapi('DomainInformation')

const CrossClusterSearchConnectionIdSchema = z.string().openapi('CrossClusterSearchConnectionId')

const InboundCrossClusterSearchConnectionStatusCodeSchema = z
  .enum(['PENDING_ACCEPTANCE', 'APPROVED', 'REJECTING', 'REJECTED', 'DELETING', 'DELETED'])
  .openapi('InboundCrossClusterSearchConnectionStatusCode')

const CrossClusterSearchConnectionStatusMessageSchema = z
  .string()
  .openapi('CrossClusterSearchConnectionStatusMessage')

const InboundCrossClusterSearchConnectionStatusSchema = z
  .object({
    StatusCode: InboundCrossClusterSearchConnectionStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state code for inbound connection. This can be one of the following:</p> <ul> <li>PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.</li> <li>APPROVED: Inbound connection is pending acceptance by destination domain owner.</li> <li>REJECTING: Inbound connection rejection is in process.</li> <li>REJECTED: Inbound connection is rejected.</li> <li>DELETING: Inbound connection deletion is in progress.</li> <li>DELETED: Inbound connection is deleted and cannot be used further.</li> </ul>',
        }),
    ).exactOptional(),
    Message: CrossClusterSearchConnectionStatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies verbose information for the inbound connection status.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the coonection status of an inbound cross-cluster search connection.',
    required: [],
  })
  .openapi('InboundCrossClusterSearchConnectionStatus')

const InboundCrossClusterSearchConnectionSchema = z
  .object({
    SourceDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.',
        }),
    ).exactOptional(),
    DestinationDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.',
        }),
    ).exactOptional(),
    CrossClusterSearchConnectionId: CrossClusterSearchConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the connection id for the inbound cross-cluster search connection.',
        }),
    ).exactOptional(),
    ConnectionStatus: InboundCrossClusterSearchConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>InboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies details of an inbound connection.', required: [] })
  .openapi('InboundCrossClusterSearchConnection')

const AcceptInboundCrossClusterSearchConnectionResponseSchema = z
  .object({
    CrossClusterSearchConnection: InboundCrossClusterSearchConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of accepted inbound connection. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection.',
    required: [],
  })
  .openapi('AcceptInboundCrossClusterSearchConnectionResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DisabledOperationExceptionSchema = z.any().openapi('DisabledOperationException')

const TagKeySchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    description:
      'A string of length from 1 to 128 characters that specifies the key for a Tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.',
  })
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .min(0)
  .max(256)
  .openapi({
    description:
      'A string of length from 0 to 256 characters that specifies the value for a Tag. Tag values can be null and do not have to be unique in a tag set.',
  })
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>TagKey</code>, the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code>',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'Specifies a key value pair for a resource tag.',
  })
  .openapi('Tag')

const BaseExceptionSchema = z.any().openapi('BaseException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalExceptionSchema = z.any().openapi('InternalException')

const PackageIDSchema = z.string().openapi('PackageID')

const PackageNameSchema = z
  .string()
  .regex(/[a-z][a-z0-9\-]+/)
  .min(3)
  .max(28)
  .openapi('PackageName')

const PackageTypeSchema = z.literal('TXT-DICTIONARY').openapi('PackageType')

const LastUpdatedSchema = z.iso.datetime({ offset: true }).openapi('LastUpdated')

const DomainPackageStatusSchema = z
  .enum(['ASSOCIATING', 'ASSOCIATION_FAILED', 'ACTIVE', 'DISSOCIATING', 'DISSOCIATION_FAILED'])
  .openapi('DomainPackageStatus')

const PackageVersionSchema = z.string().openapi('PackageVersion')

const ReferencePathSchema = z.string().openapi('ReferencePath')

const ErrorTypeSchema = z.string().openapi('ErrorType')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const ErrorDetailsSchema = z
  .object({
    ErrorType: ErrorTypeSchema.exactOptional(),
    ErrorMessage: ErrorMessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorDetails')

const DomainPackageDetailsSchema = z
  .object({
    PackageID: PackageIDSchema.and(
      z.any().openapi({ description: 'Internal ID of the package.' }),
    ).exactOptional(),
    PackageName: PackageNameSchema.and(
      z.any().openapi({ description: 'User specified name of the package.' }),
    ).exactOptional(),
    PackageType: PackageTypeSchema.and(
      z.any().openapi({ description: 'Currently supports only TXT-DICTIONARY.' }),
    ).exactOptional(),
    LastUpdated: LastUpdatedSchema.and(
      z
        .any()
        .openapi({ description: 'Timestamp of the most-recent update to the association status.' }),
    ).exactOptional(),
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: "Name of the domain you've associated a package with." }),
    ).exactOptional(),
    DomainPackageStatus: DomainPackageStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.',
        }),
    ).exactOptional(),
    PackageVersion: PackageVersionSchema.exactOptional(),
    ReferencePath: ReferencePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.',
        }),
    ).exactOptional(),
    ErrorDetails: ErrorDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information if the package is in an error state. Null otherwise.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information on a package that is associated with a domain.',
    required: [],
  })
  .openapi('DomainPackageDetails')

const AssociatePackageResponseSchema = z
  .object({
    DomainPackageDetails: DomainPackageDetailsSchema.and(
      z.any().openapi({ description: '<code>DomainPackageDetails</code>' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>AssociatePackage</a> </code> operation. ',
    required: [],
  })
  .openapi('AssociatePackageResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const PrincipalTypeSchema = z
  .enum(['AWS_ACCOUNT', 'AWS_SERVICE'])
  .openapi({
    description:
      'Specifies the type of AWS account permitted to manage VPC endpoints.: <ul> <li>AWS_ACCOUNT: Indicates that the account is owned by an AWS user.</li> <li>AWS_SERVICE: Indicates the the account is owned by an AWS service.</li> </ul> ',
  })
  .openapi('PrincipalType')

const StringSchema = z.string().openapi('String')

const AuthorizedPrincipalSchema = z
  .object({
    PrincipalType: PrincipalTypeSchema.and(
      z.any().openapi({ description: 'The type of principal.' }),
    ).exactOptional(),
    Principal: StringSchema.and(
      z.any().openapi({ description: 'The IAM principal that is allowed access to the domain.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.',
    required: [],
  })
  .openapi('AuthorizedPrincipal')

const AuthorizeVpcEndpointAccessResponseSchema = z
  .object({
    AuthorizedPrincipal: AuthorizedPrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the account or service that was provided access to the domain.',
        }),
    ),
  })
  .openapi({
    required: ['AuthorizedPrincipal'],
    description:
      'Container for response parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Contains the account ID and the type of the account being authorized to access the VPC endpoint.',
  })
  .openapi('AuthorizeVpcEndpointAccessResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const DeploymentStatusSchema = z
  .enum(['PENDING_UPDATE', 'IN_PROGRESS', 'COMPLETED', 'NOT_ELIGIBLE', 'ELIGIBLE'])
  .openapi('DeploymentStatus')

const DeploymentCloseDateTimeStampSchema = z.iso
  .datetime({ offset: true })
  .openapi('DeploymentCloseDateTimeStamp')

const ServiceSoftwareOptionsSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The current service software version that is present on the domain.',
        }),
    ).exactOptional(),
    NewVersion: StringSchema.and(
      z.any().openapi({ description: 'The new service software version if one is available.' }),
    ).exactOptional(),
    UpdateAvailable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<code>True</code> if you are able to update you service software version. <code>False</code> if you are not able to update your service software version. ',
        }),
    ).exactOptional(),
    Cancellable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<code>True</code> if you are able to cancel your service software version update. <code>False</code> if you are not able to cancel your service software version. ',
        }),
    ).exactOptional(),
    UpdateStatus: DeploymentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of your service software update. This field can take the following values: <code>ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>NOT_ELIGIBLE</code>.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the <code>UpdateStatus</code>.' }),
    ).exactOptional(),
    AutomatedUpdateDate: DeploymentCloseDateTimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.',
        }),
    ).exactOptional(),
    OptionalDeployment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<code>True</code> if a service software is never automatically updated. <code>False</code> if a service software is automatically updated after <code>AutomatedUpdateDate</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The current options of an Elasticsearch domain service software options.',
    required: [],
  })
  .openapi('ServiceSoftwareOptions')

const CancelElasticsearchServiceSoftwareUpdateResponseSchema = z
  .object({
    ServiceSoftwareOptions: ServiceSoftwareOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of the Elasticsearch service software update.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.',
    required: [],
  })
  .openapi('CancelElasticsearchServiceSoftwareUpdateResponse')

const DomainIdSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({ description: 'Unique identifier for an Elasticsearch domain.' })
  .openapi('DomainId')

const ARNSchema = z
  .string()
  .openapi({
    description:
      'The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.',
  })
  .openapi('ARN')

const ServiceUrlSchema = z
  .string()
  .openapi({
    description:
      'The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>.',
  })
  .openapi('ServiceUrl')

const EndpointsMapSchema = z.record(z.string(), ServiceUrlSchema).openapi('EndpointsMap')

const ElasticsearchVersionStringSchema = z
  .string()
  .regex(/^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$/)
  .openapi('ElasticsearchVersionString')

const ESPartitionInstanceTypeSchema = z
  .enum([
    'm3.medium.elasticsearch',
    'm3.large.elasticsearch',
    'm3.xlarge.elasticsearch',
    'm3.2xlarge.elasticsearch',
    'm4.large.elasticsearch',
    'm4.xlarge.elasticsearch',
    'm4.2xlarge.elasticsearch',
    'm4.4xlarge.elasticsearch',
    'm4.10xlarge.elasticsearch',
    'm5.large.elasticsearch',
    'm5.xlarge.elasticsearch',
    'm5.2xlarge.elasticsearch',
    'm5.4xlarge.elasticsearch',
    'm5.12xlarge.elasticsearch',
    'r5.large.elasticsearch',
    'r5.xlarge.elasticsearch',
    'r5.2xlarge.elasticsearch',
    'r5.4xlarge.elasticsearch',
    'r5.12xlarge.elasticsearch',
    'c5.large.elasticsearch',
    'c5.xlarge.elasticsearch',
    'c5.2xlarge.elasticsearch',
    'c5.4xlarge.elasticsearch',
    'c5.9xlarge.elasticsearch',
    'c5.18xlarge.elasticsearch',
    'ultrawarm1.medium.elasticsearch',
    'ultrawarm1.large.elasticsearch',
    't2.micro.elasticsearch',
    't2.small.elasticsearch',
    't2.medium.elasticsearch',
    'r3.large.elasticsearch',
    'r3.xlarge.elasticsearch',
    'r3.2xlarge.elasticsearch',
    'r3.4xlarge.elasticsearch',
    'r3.8xlarge.elasticsearch',
    'i2.xlarge.elasticsearch',
    'i2.2xlarge.elasticsearch',
    'd2.xlarge.elasticsearch',
    'd2.2xlarge.elasticsearch',
    'd2.4xlarge.elasticsearch',
    'd2.8xlarge.elasticsearch',
    'c4.large.elasticsearch',
    'c4.xlarge.elasticsearch',
    'c4.2xlarge.elasticsearch',
    'c4.4xlarge.elasticsearch',
    'c4.8xlarge.elasticsearch',
    'r4.large.elasticsearch',
    'r4.xlarge.elasticsearch',
    'r4.2xlarge.elasticsearch',
    'r4.4xlarge.elasticsearch',
    'r4.8xlarge.elasticsearch',
    'r4.16xlarge.elasticsearch',
    'i3.large.elasticsearch',
    'i3.xlarge.elasticsearch',
    'i3.2xlarge.elasticsearch',
    'i3.4xlarge.elasticsearch',
    'i3.8xlarge.elasticsearch',
    'i3.16xlarge.elasticsearch',
  ])
  .openapi('ESPartitionInstanceType')

const IntegerClassSchema = z.int().openapi('IntegerClass')

const ZoneAwarenessConfigSchema = z
  .object({
    AvailabilityZoneCount: IntegerClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.',
    required: [],
  })
  .openapi('ZoneAwarenessConfig')

const ESWarmPartitionInstanceTypeSchema = z
  .enum(['ultrawarm1.medium.elasticsearch', 'ultrawarm1.large.elasticsearch'])
  .openapi('ESWarmPartitionInstanceType')

const ColdStorageOptionsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Enable cold storage option. Accepted values true or false' }),
    ),
  })
  .openapi({
    required: ['Enabled'],
    description: 'Specifies the configuration for cold storage options such as enabled',
  })
  .openapi('ColdStorageOptions')

const ElasticsearchClusterConfigSchema = z
  .object({
    InstanceType: ESPartitionInstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.',
        }),
    ).exactOptional(),
    InstanceCount: IntegerClassSchema.and(
      z.any().openapi({ description: 'The number of instances in the specified domain cluster.' }),
    ).exactOptional(),
    DedicatedMasterEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value to indicate whether a dedicated master node is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.',
        }),
    ).exactOptional(),
    ZoneAwarenessEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value to indicate whether zone awareness is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.',
        }),
    ).exactOptional(),
    ZoneAwarenessConfig: ZoneAwarenessConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the zone awareness configuration for a domain when zone awareness is enabled.',
        }),
    ).exactOptional(),
    DedicatedMasterType: ESPartitionInstanceTypeSchema.and(
      z.any().openapi({ description: 'The instance type for a dedicated master node.' }),
    ).exactOptional(),
    DedicatedMasterCount: IntegerClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total number of dedicated master nodes, active and on standby, for the cluster.',
        }),
    ).exactOptional(),
    WarmEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'True to enable warm storage.' }),
    ).exactOptional(),
    WarmType: ESWarmPartitionInstanceTypeSchema.and(
      z
        .any()
        .openapi({ description: "The instance type for the Elasticsearch cluster's warm nodes." }),
    ).exactOptional(),
    WarmCount: IntegerClassSchema.and(
      z.any().openapi({ description: 'The number of warm nodes in the cluster.' }),
    ).exactOptional(),
    ColdStorageOptions: ColdStorageOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>ColdStorageOptions</code> config for Elasticsearch Domain',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the configuration for the domain cluster, such as the type and number of instances.',
    required: [],
  })
  .openapi('ElasticsearchClusterConfig')

const VolumeTypeSchema = z
  .enum(['standard', 'gp2', 'io1', 'gp3'])
  .openapi({
    description:
      ' The type of EBS volume, standard, gp2, gp3 or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information.',
  })
  .openapi('VolumeType')

const EBSOptionsSchema = z
  .object({
    EBSEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether EBS-based storage is enabled.' }),
    ).exactOptional(),
    VolumeType: VolumeTypeSchema.and(
      z.any().openapi({ description: ' Specifies the volume type for EBS-based storage.' }),
    ).exactOptional(),
    VolumeSize: IntegerClassSchema.and(
      z.any().openapi({ description: ' Integer to specify the size of an EBS volume.' }),
    ).exactOptional(),
    Iops: IntegerClassSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the IOPS for Provisioned IOPS And GP3 EBS volume (SSD).',
        }),
    ).exactOptional(),
    Throughput: IntegerClassSchema.and(
      z.any().openapi({ description: 'Specifies the Throughput for GP3 EBS volume (SSD).' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.',
    required: [],
  })
  .openapi('EBSOptions')

const PolicyDocumentSchema = z
  .string()
  .openapi({
    description:
      'Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.',
  })
  .openapi('PolicyDocument')

const SnapshotOptionsSchema = z
  .object({
    AutomatedSnapshotStartHour: IntegerClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.',
    required: [],
  })
  .openapi('SnapshotOptions')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const VPCDerivedInfoSchema = z
  .object({
    VPCId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.',
        }),
    ).exactOptional(),
    SubnetIds: StringListSchema.and(
      z.any().openapi({ description: 'Specifies the subnets for VPC endpoint.' }),
    ).exactOptional(),
    AvailabilityZones: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.',
        }),
    ).exactOptional(),
    SecurityGroupIds: StringListSchema.and(
      z.any().openapi({ description: 'Specifies the security groups for VPC endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
    required: [],
  })
  .openapi('VPCDerivedInfo')

const UserPoolIdSchema = z
  .string()
  .regex(/[\w-]+_[0-9a-zA-Z]+/)
  .min(1)
  .max(55)
  .openapi('UserPoolId')

const IdentityPoolIdSchema = z
  .string()
  .regex(/[\w-]+:[0-9a-f-]+/)
  .min(1)
  .max(55)
  .openapi('IdentityPoolId')

const RoleArnSchema = z.string().min(20).max(2048).openapi('RoleArn')

const CognitoOptionsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the option to enable Cognito for Kibana authentication.',
        }),
    ).exactOptional(),
    UserPoolId: UserPoolIdSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the Cognito user pool ID for Kibana authentication.' }),
    ).exactOptional(),
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the Cognito identity pool ID for Kibana authentication.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.',
    required: [],
  })
  .openapi('CognitoOptions')

const KmsKeyIdSchema = z.string().min(1).max(500).openapi('KmsKeyId')

const EncryptionAtRestOptionsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies the option to enable Encryption At Rest.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z.any().openapi({ description: ' Specifies the KMS Key ID for Encryption At Rest options.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the Encryption At Rest Options.', required: [] })
  .openapi('EncryptionAtRestOptions')

const NodeToNodeEncryptionOptionsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Specify true to enable node-to-node encryption.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the node-to-node encryption options.', required: [] })
  .openapi('NodeToNodeEncryptionOptions')

const AdvancedOptionsSchema = z
  .record(z.string(), StringSchema)
  .openapi({
    description:
      '<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>',
  })
  .openapi('AdvancedOptions')

const CloudWatchLogsLogGroupArnSchema = z
  .string()
  .openapi({ description: 'ARN of the Cloudwatch log group to which log needs to be published.' })
  .openapi('CloudWatchLogsLogGroupArn')

const LogPublishingOptionSchema = z
  .object({
    CloudWatchLogsLogGroupArn: CloudWatchLogsLogGroupArnSchema.exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies whether given log publishing option is enabled or not.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> ',
    required: [],
  })
  .openapi('LogPublishingOption')

const LogPublishingOptionsSchema = z
  .record(z.string(), LogPublishingOptionSchema)
  .openapi('LogPublishingOptions')

const TLSSecurityPolicySchema = z
  .enum(['Policy-Min-TLS-1-0-2019-07', 'Policy-Min-TLS-1-2-2019-07'])
  .openapi('TLSSecurityPolicy')

const DomainNameFqdnSchema = z
  .string()
  .regex(/^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$/)
  .min(1)
  .max(255)
  .openapi('DomainNameFqdn')

const DomainEndpointOptionsSchema = z
  .object({
    EnforceHTTPS: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    TLSSecurityPolicy: TLSSecurityPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. <br/> It can be one of the following values: <ul> <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy which supports TLSv1.0 and higher.</li> <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy which supports only TLSv1.2</li> </ul> ',
        }),
    ).exactOptional(),
    CustomEndpointEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specify if custom endpoint should be enabled for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    CustomEndpoint: DomainNameFqdnSchema.and(
      z
        .any()
        .openapi({ description: 'Specify the fully qualified domain for your custom endpoint.' }),
    ).exactOptional(),
    CustomEndpointCertificateArn: ARNSchema.and(
      z.any().openapi({ description: 'Specify ACM certificate ARN for your custom endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Options to configure endpoint for the Elasticsearch domain.',
    required: [],
  })
  .openapi('DomainEndpointOptions')

const SAMLMetadataSchema = z.string().min(1).max(1048576).openapi('SAMLMetadata')

const SAMLEntityIdSchema = z.string().min(8).max(512).openapi('SAMLEntityId')

const SAMLIdpSchema = z
  .object({
    MetadataContent: SAMLMetadataSchema.and(
      z.any().openapi({ description: 'The Metadata of the SAML application in xml format.' }),
    ),
    EntityId: SAMLEntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique Entity ID of the application in SAML Identity Provider.',
        }),
    ),
  })
  .openapi({
    required: ['MetadataContent', 'EntityId'],
    description: "Specifies the SAML Identity Provider's information.",
  })
  .openapi('SAMLIdp')

const SAMLOptionsOutputSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'True if SAML is enabled.' }),
    ).exactOptional(),
    Idp: SAMLIdpSchema.and(
      z.any().openapi({ description: "Describes the SAML Identity Provider's information." }),
    ).exactOptional(),
    SubjectKey: StringSchema.and(
      z.any().openapi({ description: 'The key used for matching the SAML Subject attribute.' }),
    ).exactOptional(),
    RolesKey: StringSchema.and(
      z.any().openapi({ description: 'The key used for matching the SAML Roles attribute.' }),
    ).exactOptional(),
    SessionTimeoutMinutes: IntegerClassSchema.and(
      z
        .any()
        .openapi({
          description: 'The duration, in minutes, after which a user session becomes inactive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the SAML application configured for the domain.',
    required: [],
  })
  .openapi('SAMLOptionsOutput')

const DisableTimestampSchema = z.iso.datetime({ offset: true }).openapi('DisableTimestamp')

const AdvancedSecurityOptionsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'True if advanced security is enabled.' }),
    ).exactOptional(),
    InternalUserDatabaseEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'True if the internal user database is enabled.' }),
    ).exactOptional(),
    SAMLOptions: SAMLOptionsOutputSchema.and(
      z.any().openapi({ description: 'Describes the SAML application configured for a domain.' }),
    ).exactOptional(),
    AnonymousAuthDisableDate: DisableTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the Anonymous Auth Disable Date when Anonymous Auth is enabled.',
        }),
    ).exactOptional(),
    AnonymousAuthEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.',
    required: [],
  })
  .openapi('AdvancedSecurityOptions')

const AutoTuneStateSchema = z
  .enum([
    'ENABLED',
    'DISABLED',
    'ENABLE_IN_PROGRESS',
    'DISABLE_IN_PROGRESS',
    'DISABLED_AND_ROLLBACK_SCHEDULED',
    'DISABLED_AND_ROLLBACK_IN_PROGRESS',
    'DISABLED_AND_ROLLBACK_COMPLETE',
    'DISABLED_AND_ROLLBACK_ERROR',
    'ERROR',
  ])
  .openapi({
    description:
      'Specifies the Auto-Tune state for the Elasticsearch domain. For valid states see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a>.',
  })
  .openapi('AutoTuneState')

const AutoTuneOptionsOutputSchema = z
  .object({
    State: AutoTuneStateSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the error message while enabling or disabling the Auto-Tune.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.',
    required: [],
  })
  .openapi('AutoTuneOptionsOutput')

const GUIDSchema = z
  .string()
  .openapi({
    pattern: '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
  })
  .openapi('GUID')

const MessageSchema = z.string().min(0).max(1024).openapi('Message')

const ChangeProgressDetailsSchema = z
  .object({
    ChangeId: GUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique change identifier associated with a specific domain configuration change.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains an optional message associated with the domain configuration change.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies change details of the domain configuration change.',
    required: [],
  })
  .openapi('ChangeProgressDetails')

const ElasticsearchDomainStatusSchema = z
  .object({
    DomainId: DomainIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the specified Elasticsearch domain.' }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    ),
    ARN: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) of an Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.',
        }),
    ),
    Created: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.',
        }),
    ).exactOptional(),
    Deleted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.',
        }),
    ).exactOptional(),
    Endpoint: ServiceUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elasticsearch domain endpoint that you use to submit index and search requests.',
        }),
    ).exactOptional(),
    Endpoints: EndpointsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.",
        }),
    ).exactOptional(),
    Processing: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.',
        }),
    ).exactOptional(),
    UpgradeProcessing: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.',
        }),
    ).exactOptional(),
    ElasticsearchVersion: ElasticsearchVersionStringSchema.exactOptional(),
    ElasticsearchClusterConfig: ElasticsearchClusterConfigSchema.and(
      z.any().openapi({ description: 'The type and number of instances in the domain cluster.' }),
    ),
    EBSOptions: EBSOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>EBSOptions</code> for the specified domain. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.',
        }),
    ).exactOptional(),
    AccessPolicies: PolicyDocumentSchema.and(
      z.any().openapi({ description: ' IAM access policy as a JSON-formatted string.' }),
    ).exactOptional(),
    SnapshotOptions: SnapshotOptionsSchema.and(
      z.any().openapi({ description: 'Specifies the status of the <code>SnapshotOptions</code>' }),
    ).exactOptional(),
    VPCOptions: VPCDerivedInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
        }),
    ).exactOptional(),
    CognitoOptions: CognitoOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.',
        }),
    ).exactOptional(),
    EncryptionAtRestOptions: EncryptionAtRestOptionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the status of the <code>EncryptionAtRestOptions</code>.',
        }),
    ).exactOptional(),
    NodeToNodeEncryptionOptions: NodeToNodeEncryptionOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.',
        }),
    ).exactOptional(),
    AdvancedOptions: AdvancedOptionsSchema.and(
      z.any().openapi({ description: 'Specifies the status of the <code>AdvancedOptions</code>' }),
    ).exactOptional(),
    LogPublishingOptions: LogPublishingOptionsSchema.and(
      z.any().openapi({ description: 'Log publishing options for the given domain.' }),
    ).exactOptional(),
    ServiceSoftwareOptions: ServiceSoftwareOptionsSchema.and(
      z
        .any()
        .openapi({
          description: "The current status of the Elasticsearch domain's service software.",
        }),
    ).exactOptional(),
    DomainEndpointOptions: DomainEndpointOptionsSchema.and(
      z
        .any()
        .openapi({
          description: "The current status of the Elasticsearch domain's endpoint options.",
        }),
    ).exactOptional(),
    AdvancedSecurityOptions: AdvancedSecurityOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of the Elasticsearch domain's advanced security options.",
        }),
    ).exactOptional(),
    AutoTuneOptions: AutoTuneOptionsOutputSchema.and(
      z
        .any()
        .openapi({
          description: "The current status of the Elasticsearch domain's Auto-Tune options.",
        }),
    ).exactOptional(),
    ChangeProgressDetails: ChangeProgressDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies change details of the domain configuration change.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainId', 'DomainName', 'ARN', 'ElasticsearchClusterConfig'],
    description: 'The current status of an Elasticsearch domain.',
  })
  .openapi('ElasticsearchDomainStatus')

const CreateElasticsearchDomainResponseSchema = z
  .object({
    DomainStatus: ElasticsearchDomainStatusSchema.and(
      z.any().openapi({ description: 'The status of the newly created Elasticsearch domain. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.',
    required: [],
  })
  .openapi('CreateElasticsearchDomainResponse')

const UsernameSchema = z.string().min(1).openapi('Username')

const PasswordSchema = z.string().min(8).openapi('Password')

const MasterUserOptionsSchema = z
  .object({
    MasterUserARN: ARNSchema.and(
      z.any().openapi({ description: 'ARN for the master user (if IAM is enabled).' }),
    ).exactOptional(),
    MasterUserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.",
        }),
    ).exactOptional(),
    MasterUserPassword: PasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            "The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Credentials for the master user: username and password, ARN, or both.',
    required: [],
  })
  .openapi('MasterUserOptions')

const BackendRoleSchema = z.string().min(1).max(256).openapi('BackendRole')

const SAMLOptionsInputSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'True if SAML is enabled.' }),
    ).exactOptional(),
    Idp: SAMLIdpSchema.and(
      z.any().openapi({ description: "Specifies the SAML Identity Provider's information." }),
    ).exactOptional(),
    MasterUserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.",
        }),
    ).exactOptional(),
    MasterBackendRole: BackendRoleSchema.and(
      z
        .any()
        .openapi({ description: 'The backend role to which the SAML master user is mapped to.' }),
    ).exactOptional(),
    SubjectKey: StringSchema.and(
      z.any().openapi({ description: 'The key to use for matching the SAML Subject attribute.' }),
    ).exactOptional(),
    RolesKey: StringSchema.and(
      z.any().openapi({ description: 'The key to use for matching the SAML Roles attribute.' }),
    ).exactOptional(),
    SessionTimeoutMinutes: IntegerClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440, and the default value is 60.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the SAML application configuration for the domain.',
    required: [],
  })
  .openapi('SAMLOptionsInput')

const AutoTuneDesiredStateSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description: 'Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED.',
  })
  .openapi('AutoTuneDesiredState')

const StartAtSchema = z.iso.datetime({ offset: true }).openapi('StartAt')

const DurationValueSchema = z
  .int()
  .min(1)
  .max(24)
  .openapi({
    description:
      ' Integer to specify the value of a maintenance schedule duration. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
  })
  .openapi('DurationValue')

const TimeUnitSchema = z
  .literal('HOURS')
  .openapi({
    description:
      'Specifies the unit of a maintenance schedule duration. Valid value is HOUR. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
  })
  .openapi('TimeUnit')

const DurationSchema = z
  .object({
    Value: DurationValueSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Integer to specify the value of a maintenance schedule duration. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
        }),
    ).exactOptional(),
    Unit: TimeUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the unit of a maintenance schedule duration. Valid value is HOURS. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
    required: [],
  })
  .openapi('Duration')

const AutoTuneMaintenanceScheduleSchema = z
  .object({
    StartAt: StartAtSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies timestamp at which Auto-Tune maintenance schedule start. ',
        }),
    ).exactOptional(),
    Duration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
        }),
    ).exactOptional(),
    CronExpressionForRecurrence: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies cron expression for a recurring maintenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
    required: [],
  })
  .openapi('AutoTuneMaintenanceSchedule')

const AutoTuneMaintenanceScheduleListSchema = z
  .array(AutoTuneMaintenanceScheduleSchema)
  .max(100)
  .openapi('AutoTuneMaintenanceScheduleList')

const InvalidTypeExceptionSchema = z.any().openapi('InvalidTypeException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const ConnectionAliasSchema = z.string().max(20).openapi('ConnectionAlias')

const OutboundCrossClusterSearchConnectionStatusCodeSchema = z
  .enum([
    'PENDING_ACCEPTANCE',
    'VALIDATING',
    'VALIDATION_FAILED',
    'PROVISIONING',
    'ACTIVE',
    'REJECTED',
    'DELETING',
    'DELETED',
  ])
  .openapi('OutboundCrossClusterSearchConnectionStatusCode')

const OutboundCrossClusterSearchConnectionStatusSchema = z
  .object({
    StatusCode: OutboundCrossClusterSearchConnectionStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state code for outbound connection. This can be one of the following:</p> <ul> <li>VALIDATING: The outbound connection request is being validated.</li> <li>VALIDATION_FAILED: Validation failed for the connection request.</li> <li>PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.</li> <li>PROVISIONING: Outbound connection request is in process.</li> <li>ACTIVE: Outbound connection is active and ready to use.</li> <li>REJECTED: Outbound connection request is rejected by destination domain owner.</li> <li>DELETING: Outbound connection deletion is in progress.</li> <li>DELETED: Outbound connection is deleted and cannot be used further.</li> </ul>',
        }),
    ).exactOptional(),
    Message: CrossClusterSearchConnectionStatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies verbose information for the outbound connection status.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the connection status of an outbound cross-cluster search connection.',
    required: [],
  })
  .openapi('OutboundCrossClusterSearchConnectionStatus')

const CreateOutboundCrossClusterSearchConnectionResponseSchema = z
  .object({
    SourceDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.',
        }),
    ).exactOptional(),
    DestinationDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.',
        }),
    ).exactOptional(),
    ConnectionAlias: ConnectionAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the connection alias provided during the create connection request.',
        }),
    ).exactOptional(),
    ConnectionStatus: OutboundCrossClusterSearchConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the newly created connection.',
        }),
    ).exactOptional(),
    CrossClusterSearchConnectionId: CrossClusterSearchConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique id for the created outbound connection, which is used for subsequent operations on connection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection.',
    required: [],
  })
  .openapi('CreateOutboundCrossClusterSearchConnectionResponse')

const PackageDescriptionSchema = z.string().max(1024).openapi('PackageDescription')

const PackageStatusSchema = z
  .enum([
    'COPYING',
    'COPY_FAILED',
    'VALIDATING',
    'VALIDATION_FAILED',
    'AVAILABLE',
    'DELETING',
    'DELETED',
    'DELETE_FAILED',
  ])
  .openapi('PackageStatus')

const CreatedAtSchema = z.iso.datetime({ offset: true }).openapi('CreatedAt')

const PackageDetailsSchema = z
  .object({
    PackageID: PackageIDSchema.and(
      z.any().openapi({ description: 'Internal ID of the package.' }),
    ).exactOptional(),
    PackageName: PackageNameSchema.and(
      z.any().openapi({ description: 'User specified name of the package.' }),
    ).exactOptional(),
    PackageType: PackageTypeSchema.and(
      z.any().openapi({ description: 'Currently supports only TXT-DICTIONARY.' }),
    ).exactOptional(),
    PackageDescription: PackageDescriptionSchema.and(
      z.any().openapi({ description: 'User-specified description of the package.' }),
    ).exactOptional(),
    PackageStatus: PackageStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED',
        }),
    ).exactOptional(),
    CreatedAt: CreatedAtSchema.and(
      z.any().openapi({ description: 'Timestamp which tells creation date of the package.' }),
    ).exactOptional(),
    LastUpdatedAt: LastUpdatedSchema.exactOptional(),
    AvailablePackageVersion: PackageVersionSchema.exactOptional(),
    ErrorDetails: ErrorDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information if the package is in an error state. Null otherwise.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Basic information about a package.', required: [] })
  .openapi('PackageDetails')

const CreatePackageResponseSchema = z
  .object({
    PackageDetails: PackageDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the package <code>PackageDetails</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>CreatePackage</a> </code> operation. ',
    required: [],
  })
  .openapi('CreatePackageResponse')

const S3BucketNameSchema = z.string().min(3).max(63).openapi('S3BucketName')

const S3KeySchema = z.string().openapi('S3Key')

const VpcEndpointIdSchema = z
  .string()
  .regex(/^aos-[a-zA-Z0-9]*$/)
  .min(5)
  .max(256)
  .openapi('VpcEndpointId')

const AWSAccountSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .openapi('AWSAccount')

const DomainArnSchema = z
  .string()
  .regex(/arn:aws[a-z\-]*:[a-z]+:[a-z0-9\-]+:[0-9]+:domain\/[a-z0-9\-]+/)
  .min(1)
  .max(512)
  .openapi('DomainArn')

const VpcEndpointStatusSchema = z
  .enum([
    'CREATING',
    'CREATE_FAILED',
    'ACTIVE',
    'UPDATING',
    'UPDATE_FAILED',
    'DELETING',
    'DELETE_FAILED',
  ])
  .openapi({
    description:
      'Specifies the current status of the VPC endpoint: <ul> <li>CREATING: Indicates that the VPC endpoint is currently being created.</li> <li>CREATE_FAILED: Indicates that the VPC endpoint creation failed.</li> <li>ACTIVE: Indicates that the VPC endpoint is currently active.</li> <li>UPDATING: Indicates that the VPC endpoint is currently being updated.</li> <li>UPDATE_FAILED: Indicates that the VPC endpoint update failed.</li> <li>DELETING: Indicates that the VPC endpoint is currently being deleted.</li> <li>DELETE_FAILED: Indicates that the VPC endpoint deletion failed.</li> </ul> ',
  })
  .openapi('VpcEndpointStatus')

const EndpointSchema = z
  .string()
  .regex(/^[A-Za-z0-9\-\.]+$/)
  .openapi('Endpoint')

const VpcEndpointSchema = z
  .object({
    VpcEndpointId: VpcEndpointIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the endpoint.' }),
    ).exactOptional(),
    VpcEndpointOwner: AWSAccountSchema.and(
      z.any().openapi({ description: 'The creator of the endpoint.' }),
    ).exactOptional(),
    DomainArn: DomainArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the domain associated with the endpoint.',
        }),
    ).exactOptional(),
    VpcOptions: VPCDerivedInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint.',
        }),
    ).exactOptional(),
    Status: VpcEndpointStatusSchema.and(
      z.any().openapi({ description: 'The current status of the endpoint.' }),
    ).exactOptional(),
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'The connection endpoint ID for connecting to the domain.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The connection endpoint for connecting to an Amazon OpenSearch Service domain through a proxy.',
    required: [],
  })
  .openapi('VpcEndpoint')

const CreateVpcEndpointResponseSchema = z
  .object({
    VpcEndpoint: VpcEndpointSchema.and(
      z.any().openapi({ description: 'Information about the newly created VPC endpoint.' }),
    ),
  })
  .openapi({
    required: ['VpcEndpoint'],
    description:
      'Container for response parameters to the <code><a>CreateVpcEndpoint</a></code> operation. Contains the configuration and status of the VPC Endpoint being created.',
  })
  .openapi('CreateVpcEndpointResponse')

const DeleteElasticsearchDomainResponseSchema = z
  .object({
    DomainStatus: ElasticsearchDomainStatusSchema.and(
      z.any().openapi({ description: 'The status of the Elasticsearch domain being deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.',
    required: [],
  })
  .openapi('DeleteElasticsearchDomainResponse')

const DeleteInboundCrossClusterSearchConnectionResponseSchema = z
  .object({
    CrossClusterSearchConnection: InboundCrossClusterSearchConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of deleted inbound connection. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection.',
    required: [],
  })
  .openapi('DeleteInboundCrossClusterSearchConnectionResponse')

const OutboundCrossClusterSearchConnectionSchema = z
  .object({
    SourceDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.',
        }),
    ).exactOptional(),
    DestinationDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.',
        }),
    ).exactOptional(),
    CrossClusterSearchConnectionId: CrossClusterSearchConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the connection id for the outbound cross-cluster search connection.',
        }),
    ).exactOptional(),
    ConnectionAlias: ConnectionAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the connection alias for the outbound cross-cluster search connection.',
        }),
    ).exactOptional(),
    ConnectionStatus: OutboundCrossClusterSearchConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies details of an outbound connection.', required: [] })
  .openapi('OutboundCrossClusterSearchConnection')

const DeleteOutboundCrossClusterSearchConnectionResponseSchema = z
  .object({
    CrossClusterSearchConnection: OutboundCrossClusterSearchConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>OutboundCrossClusterSearchConnection</a></code> of deleted outbound connection. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection.',
    required: [],
  })
  .openapi('DeleteOutboundCrossClusterSearchConnectionResponse')

const DeletePackageResponseSchema = z
  .object({
    PackageDetails: PackageDetailsSchema.and(
      z.any().openapi({ description: '<code>PackageDetails</code>' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response parameters to <code> <a>DeletePackage</a> </code> operation. ',
    required: [],
  })
  .openapi('DeletePackageResponse')

const VpcEndpointSummarySchema = z
  .object({
    VpcEndpointId: VpcEndpointIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the endpoint.' }),
    ).exactOptional(),
    VpcEndpointOwner: StringSchema.and(
      z.any().openapi({ description: 'The creator of the endpoint.' }),
    ).exactOptional(),
    DomainArn: DomainArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the domain associated with the endpoint.',
        }),
    ).exactOptional(),
    Status: VpcEndpointStatusSchema.and(
      z.any().openapi({ description: 'The current status of the endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary information for an Amazon OpenSearch Service-managed VPC endpoint.',
    required: [],
  })
  .openapi('VpcEndpointSummary')

const DeleteVpcEndpointResponseSchema = z
  .object({
    VpcEndpointSummary: VpcEndpointSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the deleted endpoint, including its current status (<code>DELETING</code> or <code>DELETE_FAILED</code>).',
        }),
    ),
  })
  .openapi({
    required: ['VpcEndpointSummary'],
    description:
      'Container for response parameters to the <code><a>DeleteVpcEndpoint</a></code> operation. Contains the summarized detail of the VPC Endpoint being deleted.',
  })
  .openapi('DeleteVpcEndpointResponse')

const AutoTuneTypeSchema = z
  .literal('SCHEDULED_ACTION')
  .openapi({ description: 'Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION. ' })
  .openapi('AutoTuneType')

const AutoTuneDetailsSchema: z.ZodType<AutoTuneDetailsType> = z
  .lazy(() =>
    z
      .object({ ScheduledAutoTuneDetails: ScheduledAutoTuneDetailsSchema.exactOptional() })
      .openapi({
        description:
          'Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. ',
        required: [],
      }),
  )
  .openapi('AutoTuneDetails')

const AutoTuneSchema = z
  .object({
    AutoTuneType: AutoTuneTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION. ' }),
    ).exactOptional(),
    AutoTuneDetails: AutoTuneDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies Auto-Tune type and Auto-Tune action details. ', required: [] })
  .openapi('AutoTune')

const AutoTuneListSchema = z.array(AutoTuneSchema).openapi('AutoTuneList')

const NextTokenSchema = z
  .string()
  .openapi({
    description:
      ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
  })
  .openapi('NextToken')

const DescribeDomainAutoTunesResponseSchema = z
  .object({
    AutoTunes: AutoTuneListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the list of setting adjustments that Auto-Tune has made to the domain. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. ',
    required: [],
  })
  .openapi('DescribeDomainAutoTunesResponse')

const UpdateTimestampSchema = z.iso.datetime({ offset: true }).openapi('UpdateTimestamp')

const OverallChangeStatusSchema = z
  .enum(['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED'])
  .openapi({ description: 'The overall status value of the domain configuration change.' })
  .openapi('OverallChangeStatus')

const TotalNumberOfStagesSchema = z.int().openapi('TotalNumberOfStages')

const ChangeProgressStageNameSchema = z.string().min(1).max(64).openapi('ChangeProgressStageName')

const ChangeProgressStageStatusSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi('ChangeProgressStageStatus')

const DescriptionSchema = z.string().openapi('Description')

const ChangeProgressStageSchema = z
  .object({
    Name: ChangeProgressStageNameSchema.and(
      z.any().openapi({ description: 'The name of the specific progress stage.' }),
    ).exactOptional(),
    Status: ChangeProgressStageStatusSchema.and(
      z.any().openapi({ description: 'The overall status of a specific progress stage.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the progress stage.' }),
    ).exactOptional(),
    LastUpdated: LastUpdatedSchema.and(
      z.any().openapi({ description: 'The last updated timestamp of the progress stage.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A progress stage details of a specific domain configuration change.',
    required: [],
  })
  .openapi('ChangeProgressStage')

const ChangeProgressStageListSchema = z
  .array(ChangeProgressStageSchema)
  .openapi({
    description: 'The list of progress stages of a specific domain configuration change.',
  })
  .openapi('ChangeProgressStageList')

const ChangeProgressStatusDetailsSchema = z
  .object({
    ChangeId: GUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique change identifier associated with a specific domain configuration change.',
        }),
    ).exactOptional(),
    StartTime: UpdateTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the configuration change is made on the domain.',
        }),
    ).exactOptional(),
    Status: OverallChangeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The overall status of the domain configuration change. This field can take the following values: <code>PENDING</code>, <code>PROCESSING</code>, <code>COMPLETED</code> and <code>FAILED</code>',
        }),
    ).exactOptional(),
    PendingProperties: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of properties involved in the domain configuration change that are still in pending.',
        }),
    ).exactOptional(),
    CompletedProperties: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of properties involved in the domain configuration change that are completed.',
        }),
    ).exactOptional(),
    TotalNumberOfStages: TotalNumberOfStagesSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of stages required for the configuration change.',
        }),
    ).exactOptional(),
    ChangeProgressStages: ChangeProgressStageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific stages that the domain is going through to perform the configuration change.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The progress details of a specific domain configuration change.',
    required: [],
  })
  .openapi('ChangeProgressStatusDetails')

const DescribeDomainChangeProgressResponseSchema = z
  .object({
    ChangeProgressStatus: ChangeProgressStatusDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Progress information for the configuration change that is requested in the <code>DescribeDomainChangeProgress</code> request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>DescribeDomainChangeProgress</code> request. Contains the progress information of the requested domain change. ',
    required: [],
  })
  .openapi('DescribeDomainChangeProgressResponse')

const DescribeElasticsearchDomainResponseSchema = z
  .object({
    DomainStatus: ElasticsearchDomainStatusSchema.and(
      z.any().openapi({ description: 'The current status of the Elasticsearch domain.' }),
    ),
  })
  .openapi({
    required: ['DomainStatus'],
    description:
      'The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.',
  })
  .openapi('DescribeElasticsearchDomainResponse')

const UIntValueSchema = z.int().min(0).openapi('UIntValue')

const OptionStateSchema = z
  .enum(['RequiresIndexDocuments', 'Processing', 'Active'])
  .openapi({
    description:
      '<p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>',
  })
  .openapi('OptionState')

const OptionStatusSchema = z
  .object({
    CreationDate: UpdateTimestampSchema.and(
      z.any().openapi({ description: 'Timestamp which tells the creation date for the entity.' }),
    ),
    UpdateDate: UpdateTimestampSchema.and(
      z
        .any()
        .openapi({ description: 'Timestamp which tells the last updated time for the entity.' }),
    ),
    UpdateVersion: UIntValueSchema.and(
      z.any().openapi({ description: 'Specifies the latest version for the entity.' }),
    ).exactOptional(),
    State: OptionStateSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the <code>OptionState</code> for the Elasticsearch domain.',
        }),
    ),
    PendingDeletion: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the Elasticsearch domain is being deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CreationDate', 'UpdateDate', 'State'],
    description: 'Provides the current status of the entity.',
  })
  .openapi('OptionStatus')

const ElasticsearchVersionStatusSchema = z
  .object({
    Options: ElasticsearchVersionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Elasticsearch version for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description:
      ' Status of the Elasticsearch version options for the specified Elasticsearch domain.',
  })
  .openapi('ElasticsearchVersionStatus')

const ElasticsearchClusterConfigStatusSchema = z
  .object({
    Options: ElasticsearchClusterConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the cluster configuration for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the status of the configuration for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description: ' Specifies the configuration status for the specified Elasticsearch domain.',
  })
  .openapi('ElasticsearchClusterConfigStatus')

const EBSOptionsStatusSchema = z
  .object({
    Options: EBSOptionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the EBS options for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the status of the EBS options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description: ' Status of the EBS options for the specified Elasticsearch domain.',
  })
  .openapi('EBSOptionsStatus')

const AccessPoliciesStatusSchema = z
  .object({
    Options: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access policy configured for the Elasticsearch domain. Access policies may be resource-based, IP-based, or IAM-based. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank"> Configuring Access Policies</a>for more information.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the access policy for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. ",
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description:
      "The configured access rules for the domain's document and search endpoints, and the current status of those rules.",
  })
  .openapi('AccessPoliciesStatus')

const SnapshotOptionsStatusSchema = z
  .object({
    Options: SnapshotOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the daily snapshot options specified for the Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z.any().openapi({ description: 'Specifies the status of a daily automated snapshot.' }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description: 'Status of a daily automated snapshot.',
  })
  .openapi('SnapshotOptionsStatus')

const VPCDerivedInfoStatusSchema = z
  .object({
    Options: VPCDerivedInfoSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the VPC options for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the status of the VPC options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description: ' Status of the VPC options for the specified Elasticsearch domain.',
  })
  .openapi('VPCDerivedInfoStatus')

const CognitoOptionsStatusSchema = z
  .object({
    Options: CognitoOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the Cognito options for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the status of the Cognito options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description: 'Status of the Cognito options for the specified Elasticsearch domain.',
  })
  .openapi('CognitoOptionsStatus')

const EncryptionAtRestOptionsStatusSchema = z
  .object({
    Options: EncryptionAtRestOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Encryption At Rest options for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description:
      ' Status of the Encryption At Rest options for the specified Elasticsearch domain.',
  })
  .openapi('EncryptionAtRestOptionsStatus')

const NodeToNodeEncryptionOptionsStatusSchema = z
  .object({
    Options: NodeToNodeEncryptionOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the node-to-node encryption options for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description:
      'Status of the node-to-node encryption options for the specified Elasticsearch domain.',
  })
  .openapi('NodeToNodeEncryptionOptionsStatus')

const AdvancedOptionsStatusSchema = z
  .object({
    Options: AdvancedOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the status of advanced options for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description:
      '<p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>',
  })
  .openapi('AdvancedOptionsStatus')

const LogPublishingOptionsStatusSchema = z
  .object({
    Options: LogPublishingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The log publishing options configured for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configured log publishing options for the domain and their current status.',
    required: [],
  })
  .openapi('LogPublishingOptionsStatus')

const DomainEndpointOptionsStatusSchema = z
  .object({
    Options: DomainEndpointOptionsSchema.and(
      z
        .any()
        .openapi({ description: 'Options to configure endpoint for the Elasticsearch domain.' }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the endpoint options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. ",
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description: 'The configured endpoint options for the domain and their current status.',
  })
  .openapi('DomainEndpointOptionsStatus')

const AdvancedSecurityOptionsStatusSchema = z
  .object({
    Options: AdvancedSecurityOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies advanced security options for the specified Elasticsearch domain.',
        }),
    ),
    Status: OptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Status of the advanced security options for the specified Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description:
      ' Specifies the status of advanced security options for the specified Elasticsearch domain.',
  })
  .openapi('AdvancedSecurityOptionsStatus')

const RollbackOnDisableSchema = z
  .enum(['NO_ROLLBACK', 'DEFAULT_ROLLBACK'])
  .openapi({
    description:
      'Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK.',
  })
  .openapi('RollbackOnDisable')

const AutoTuneOptionsSchema = z
  .object({
    DesiredState: AutoTuneDesiredStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. ',
        }),
    ).exactOptional(),
    RollbackOnDisable: RollbackOnDisableSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. ',
        }),
    ).exactOptional(),
    MaintenanceSchedules: AutoTuneMaintenanceScheduleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.',
    required: [],
  })
  .openapi('AutoTuneOptions')

const AutoTuneStatusSchema = z
  .object({
    CreationDate: UpdateTimestampSchema.and(
      z.any().openapi({ description: 'Timestamp which tells Auto-Tune options creation date .' }),
    ),
    UpdateDate: UpdateTimestampSchema.and(
      z
        .any()
        .openapi({ description: 'Timestamp which tells Auto-Tune options last updated time.' }),
    ),
    UpdateVersion: UIntValueSchema.and(
      z.any().openapi({ description: 'Specifies the Auto-Tune options latest version.' }),
    ).exactOptional(),
    State: AutoTuneStateSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.',
        }),
    ),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the error message while enabling or disabling the Auto-Tune options.',
        }),
    ).exactOptional(),
    PendingDeletion: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the Elasticsearch domain is being deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CreationDate', 'UpdateDate', 'State'],
    description: 'Provides the current status of the Auto-Tune options. ',
  })
  .openapi('AutoTuneStatus')

const AutoTuneOptionsStatusSchema = z
  .object({
    Options: AutoTuneOptionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies Auto-Tune options for the specified Elasticsearch domain.',
        }),
    ).exactOptional(),
    Status: AutoTuneStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies Status of the Auto-Tune options for the specified Elasticsearch domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Specifies the status of Auto-Tune options for the specified Elasticsearch domain.',
    required: [],
  })
  .openapi('AutoTuneOptionsStatus')

const ElasticsearchDomainConfigSchema = z
  .object({
    ElasticsearchVersion: ElasticsearchVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'String of format X.Y to specify version for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    ElasticsearchClusterConfig: ElasticsearchClusterConfigStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    EBSOptions: EBSOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the <code>EBSOptions</code> for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    AccessPolicies: AccessPoliciesStatusSchema.and(
      z.any().openapi({ description: 'IAM access policy as a JSON-formatted string.' }),
    ).exactOptional(),
    SnapshotOptions: SnapshotOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    VPCOptions: VPCDerivedInfoStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
        }),
    ).exactOptional(),
    CognitoOptions: CognitoOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.',
        }),
    ).exactOptional(),
    EncryptionAtRestOptions: EncryptionAtRestOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    NodeToNodeEncryptionOptions: NodeToNodeEncryptionOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    AdvancedOptions: AdvancedOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>AdvancedOptions</code> for the domain. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.',
        }),
    ).exactOptional(),
    LogPublishingOptions: LogPublishingOptionsStatusSchema.and(
      z.any().openapi({ description: 'Log publishing options for the given domain.' }),
    ).exactOptional(),
    DomainEndpointOptions: DomainEndpointOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>DomainEndpointOptions</code> for the Elasticsearch domain.',
        }),
    ).exactOptional(),
    AdvancedSecurityOptions: AdvancedSecurityOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies <code>AdvancedSecurityOptions</code> for the domain. ',
        }),
    ).exactOptional(),
    AutoTuneOptions: AutoTuneOptionsStatusSchema.and(
      z.any().openapi({ description: 'Specifies <code>AutoTuneOptions</code> for the domain. ' }),
    ).exactOptional(),
    ChangeProgressDetails: ChangeProgressDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies change details of the domain configuration change.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration of an Elasticsearch domain.', required: [] })
  .openapi('ElasticsearchDomainConfig')

const DescribeElasticsearchDomainConfigResponseSchema = z
  .object({
    DomainConfig: ElasticsearchDomainConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.',
        }),
    ),
  })
  .openapi({
    required: ['DomainConfig'],
    description:
      'The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.',
  })
  .openapi('DescribeElasticsearchDomainConfigResponse')

const ElasticsearchDomainStatusListSchema = z
  .array(ElasticsearchDomainStatusSchema)
  .openapi({
    description: 'A list that contains the status of each requested Elasticsearch domain.',
  })
  .openapi('ElasticsearchDomainStatusList')

const DescribeElasticsearchDomainsResponseSchema = z
  .object({
    DomainStatusList: ElasticsearchDomainStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.',
        }),
    ),
  })
  .openapi({
    required: ['DomainStatusList'],
    description:
      'The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.',
  })
  .openapi('DescribeElasticsearchDomainsResponse')

const LimitsSchema: z.ZodType<LimitsType> = z
  .lazy(() =>
    z
      .object({
        StorageTypes: StorageTypeListSchema.and(
          z
            .any()
            .openapi({
              description:
                'StorageType represents the list of storage related types and attributes that are available for given InstanceType. ',
            }),
        ).exactOptional(),
        InstanceLimits: InstanceLimitsSchema.exactOptional(),
        AdditionalLimits: AdditionalLimitListSchema.and(
          z
            .any()
            .openapi({
              description:
                " List of additional limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . ",
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          " Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code> ",
        required: [],
      }),
  )
  .openapi('Limits')

const LimitsByRoleSchema = z
  .record(z.string(), LimitsSchema)
  .openapi({
    description:
      ' Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul> ',
  })
  .openapi('LimitsByRole')

const DescribeElasticsearchInstanceTypeLimitsResponseSchema = z
  .object({ LimitsByRole: LimitsByRoleSchema.exactOptional() })
  .openapi({
    description:
      ' Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. ',
    required: [],
  })
  .openapi('DescribeElasticsearchInstanceTypeLimitsResponse')

const InboundCrossClusterSearchConnectionsSchema = z
  .array(InboundCrossClusterSearchConnectionSchema)
  .openapi('InboundCrossClusterSearchConnections')

const DescribeInboundCrossClusterSearchConnectionsResponseSchema = z
  .object({
    CrossClusterSearchConnections: InboundCrossClusterSearchConnectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Consists of list of <code><a>InboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.',
    required: [],
  })
  .openapi('DescribeInboundCrossClusterSearchConnectionsResponse')

const NonEmptyStringSchema = z.string().min(1).openapi('NonEmptyString')

const ValueStringListSchema = z.array(NonEmptyStringSchema).min(1).openapi('ValueStringList')

const FilterSchema = z
  .object({
    Name: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' Specifies the name of the filter. ' }),
    ).exactOptional(),
    Values: ValueStringListSchema.and(
      z.any().openapi({ description: ' Contains one or more values for the filter. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation. ',
    required: [],
  })
  .openapi('Filter')

const InvalidPaginationTokenExceptionSchema = z.any().openapi('InvalidPaginationTokenException')

const OutboundCrossClusterSearchConnectionsSchema = z
  .array(OutboundCrossClusterSearchConnectionSchema)
  .openapi('OutboundCrossClusterSearchConnections')

const DescribeOutboundCrossClusterSearchConnectionsResponseSchema = z
  .object({
    CrossClusterSearchConnections: OutboundCrossClusterSearchConnectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Consists of list of <code><a>OutboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.',
    required: [],
  })
  .openapi('DescribeOutboundCrossClusterSearchConnectionsResponse')

const PackageDetailsListSchema = z.array(PackageDetailsSchema).openapi('PackageDetailsList')

const DescribePackagesResponseSchema = z
  .object({
    PackageDetailsList: PackageDetailsListSchema.and(
      z.any().openapi({ description: 'List of <code>PackageDetails</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>DescribePackages</a> </code> operation. ',
    required: [],
  })
  .openapi('DescribePackagesResponse')

const DescribePackagesFilterNameSchema = z
  .enum(['PackageID', 'PackageName', 'PackageStatus'])
  .openapi('DescribePackagesFilterName')

const DescribePackagesFilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\*\.\\\/\?-]*$/)
  .openapi('DescribePackagesFilterValue')

const DescribePackagesFilterValuesSchema = z
  .array(DescribePackagesFilterValueSchema)
  .openapi('DescribePackagesFilterValues')

const DescribePackagesFilterSchema = z
  .object({
    Name: DescribePackagesFilterNameSchema.and(
      z.any().openapi({ description: 'Any field from <code>PackageDetails</code>.' }),
    ).exactOptional(),
    Value: DescribePackagesFilterValuesSchema.and(
      z.any().openapi({ description: 'A list of values for the specified field.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filter to apply in <code>DescribePackage</code> response.',
    required: [],
  })
  .openapi('DescribePackagesFilter')

const IntegerSchema = z.int().openapi('Integer')

const DoubleSchema = z.float64().openapi('Double')

const ReservedElasticsearchInstancePaymentOptionSchema = z
  .enum(['ALL_UPFRONT', 'PARTIAL_UPFRONT', 'NO_UPFRONT'])
  .openapi('ReservedElasticsearchInstancePaymentOption')

const RecurringChargeSchema = z
  .object({
    RecurringChargeAmount: DoubleSchema.and(
      z.any().openapi({ description: 'The monetary amount of the recurring charge.' }),
    ).exactOptional(),
    RecurringChargeFrequency: StringSchema.and(
      z.any().openapi({ description: 'The frequency of the recurring charge.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.',
    required: [],
  })
  .openapi('RecurringCharge')

const RecurringChargeListSchema = z.array(RecurringChargeSchema).openapi('RecurringChargeList')

const ReservedElasticsearchInstanceOfferingSchema = z
  .object({
    ReservedElasticsearchInstanceOfferingId: GUIDSchema.and(
      z.any().openapi({ description: 'The Elasticsearch reserved instance offering identifier.' }),
    ).exactOptional(),
    ElasticsearchInstanceType: ESPartitionInstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Elasticsearch instance type offered by the reserved instance offering.',
        }),
    ).exactOptional(),
    Duration: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration, in seconds, for which the offering will reserve the Elasticsearch instance.',
        }),
    ).exactOptional(),
    FixedPrice: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. ',
        }),
    ).exactOptional(),
    UsagePrice: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The rate you are charged for each hour the domain that is using the offering is running.',
        }),
    ).exactOptional(),
    CurrencyCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The currency code for the reserved Elasticsearch instance offering.',
        }),
    ).exactOptional(),
    PaymentOption: ReservedElasticsearchInstancePaymentOptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Payment option for the reserved Elasticsearch instance offering',
        }),
    ).exactOptional(),
    RecurringCharges: RecurringChargeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The charge to your account regardless of whether you are creating any domains using the instance offering.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of a reserved Elasticsearch instance offering.', required: [] })
  .openapi('ReservedElasticsearchInstanceOffering')

const ReservedElasticsearchInstanceOfferingListSchema = z
  .array(ReservedElasticsearchInstanceOfferingSchema)
  .openapi('ReservedElasticsearchInstanceOfferingList')

const DescribeReservedElasticsearchInstanceOfferingsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    ReservedElasticsearchInstanceOfferings: ReservedElasticsearchInstanceOfferingListSchema.and(
      z.any().openapi({ description: 'List of reserved Elasticsearch instance offerings' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code>',
    required: [],
  })
  .openapi('DescribeReservedElasticsearchInstanceOfferingsResponse')

const ReservationTokenSchema = z.string().min(5).max(64).openapi('ReservationToken')

const ReservedElasticsearchInstanceSchema = z
  .object({
    ReservationName: ReservationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The customer-specified identifier to track this reservation.' }),
    ).exactOptional(),
    ReservedElasticsearchInstanceId: GUIDSchema.and(
      z.any().openapi({ description: 'The unique identifier for the reservation.' }),
    ).exactOptional(),
    ReservedElasticsearchInstanceOfferingId: StringSchema.and(
      z.any().openapi({ description: 'The offering identifier.' }),
    ).exactOptional(),
    ElasticsearchInstanceType: ESPartitionInstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Elasticsearch instance type offered by the reserved instance offering.',
        }),
    ).exactOptional(),
    StartTime: UpdateTimestampSchema.and(
      z.any().openapi({ description: 'The time the reservation started.' }),
    ).exactOptional(),
    Duration: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration, in seconds, for which the Elasticsearch instance is reserved.',
        }),
    ).exactOptional(),
    FixedPrice: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering. ',
        }),
    ).exactOptional(),
    UsagePrice: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The rate you are charged for each hour for the domain that is using this reserved instance.',
        }),
    ).exactOptional(),
    CurrencyCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The currency code for the reserved Elasticsearch instance offering.',
        }),
    ).exactOptional(),
    ElasticsearchInstanceCount: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of Elasticsearch instances that have been reserved.' }),
    ).exactOptional(),
    State: StringSchema.and(
      z.any().openapi({ description: 'The state of the reserved Elasticsearch instance.' }),
    ).exactOptional(),
    PaymentOption: ReservedElasticsearchInstancePaymentOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The payment option as defined in the reserved Elasticsearch instance offering.',
        }),
    ).exactOptional(),
    RecurringCharges: RecurringChargeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The charge to your account regardless of whether you are creating any domains using the instance offering.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of a reserved Elasticsearch instance.', required: [] })
  .openapi('ReservedElasticsearchInstance')

const ReservedElasticsearchInstanceListSchema = z
  .array(ReservedElasticsearchInstanceSchema)
  .openapi('ReservedElasticsearchInstanceList')

const DescribeReservedElasticsearchInstancesResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    ReservedElasticsearchInstances: ReservedElasticsearchInstanceListSchema.and(
      z.any().openapi({ description: 'List of reserved Elasticsearch instances.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Container for results from <code>DescribeReservedElasticsearchInstances</code>',
    required: [],
  })
  .openapi('DescribeReservedElasticsearchInstancesResponse')

const VpcEndpointsSchema = z.array(VpcEndpointSchema).openapi('VpcEndpoints')

const VpcEndpointErrorCodeSchema = z
  .enum(['ENDPOINT_NOT_FOUND', 'SERVER_ERROR'])
  .openapi({
    description:
      'Specifies the error code of the failure encountered while describing the VPC endpoint: <ul> <li>ENDPOINT_NOT_FOUND: Indicates that the requested VPC endpoint does not exist.</li> <li>SERVER_ERROR: Indicates the describe endpoint operation failed due to an internal server error.</li> </ul> ',
  })
  .openapi('VpcEndpointErrorCode')

const VpcEndpointErrorSchema = z
  .object({
    VpcEndpointId: VpcEndpointIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the endpoint. ' }),
    ).exactOptional(),
    ErrorCode: VpcEndpointErrorCodeSchema.and(
      z.any().openapi({ description: 'The code associated with the error.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'A message describing the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Error information when attempting to describe an Amazon OpenSearch Service-managed VPC endpoint.',
    required: [],
  })
  .openapi('VpcEndpointError')

const VpcEndpointErrorListSchema = z.array(VpcEndpointErrorSchema).openapi('VpcEndpointErrorList')

const DescribeVpcEndpointsResponseSchema = z
  .object({
    VpcEndpoints: VpcEndpointsSchema.and(
      z.any().openapi({ description: 'Information about each requested VPC endpoint.' }),
    ),
    VpcEndpointErrors: VpcEndpointErrorListSchema.and(
      z.any().openapi({ description: 'Any errors associated with the request.' }),
    ),
  })
  .openapi({
    required: ['VpcEndpoints', 'VpcEndpointErrors'],
    description:
      'Container for response parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Returns a list containing configuration details and status of the VPC Endpoints as well as a list containing error responses of the endpoints that could not be described',
  })
  .openapi('DescribeVpcEndpointsResponse')

const DissociatePackageResponseSchema = z
  .object({
    DomainPackageDetails: DomainPackageDetailsSchema.and(
      z.any().openapi({ description: '<code>DomainPackageDetails</code>' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>DissociatePackage</a> </code> operation. ',
    required: [],
  })
  .openapi('DissociatePackageResponse')

const ElasticsearchVersionListSchema = z
  .array(ElasticsearchVersionStringSchema)
  .openapi({ description: 'List of supported elastic search versions. ' })
  .openapi('ElasticsearchVersionList')

const CompatibleVersionsMapSchema = z
  .object({
    SourceVersion: ElasticsearchVersionStringSchema.and(
      z
        .any()
        .openapi({ description: 'The current version of Elasticsearch on which a domain is.' }),
    ).exactOptional(),
    TargetVersions: ElasticsearchVersionListSchema.exactOptional(),
  })
  .openapi({
    description:
      ' A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded. ',
    required: [],
  })
  .openapi('CompatibleVersionsMap')

const CompatibleElasticsearchVersionsListSchema = z
  .array(CompatibleVersionsMapSchema)
  .openapi('CompatibleElasticsearchVersionsList')

const GetCompatibleElasticsearchVersionsResponseSchema = z
  .object({
    CompatibleElasticsearchVersions: CompatibleElasticsearchVersionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map of compatible Elasticsearch versions returned as part of the <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. ',
    required: [],
  })
  .openapi('GetCompatibleElasticsearchVersionsResponse')

const CommitMessageSchema = z.string().max(160).openapi('CommitMessage')

const PackageVersionHistorySchema = z
  .object({
    PackageVersion: PackageVersionSchema.and(
      z.any().openapi({ description: 'Version of the package.' }),
    ).exactOptional(),
    CommitMessage: CommitMessageSchema.and(
      z.any().openapi({ description: 'A message associated with the version.' }),
    ).exactOptional(),
    CreatedAt: CreatedAtSchema.and(
      z
        .any()
        .openapi({ description: 'Timestamp which tells creation time of the package version.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of a package version.', required: [] })
  .openapi('PackageVersionHistory')

const PackageVersionHistoryListSchema = z
  .array(PackageVersionHistorySchema)
  .openapi('PackageVersionHistoryList')

const GetPackageVersionHistoryResponseSchema = z
  .object({
    PackageID: PackageIDSchema.exactOptional(),
    PackageVersionHistoryList: PackageVersionHistoryListSchema.and(
      z.any().openapi({ description: 'List of <code>PackageVersionHistory</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>GetPackageVersionHistory</a> </code> operation. ',
    required: [],
  })
  .openapi('GetPackageVersionHistoryResponse')

const UpgradeNameSchema = z.string().openapi('UpgradeName')

const StartTimestampSchema = z.iso.datetime({ offset: true }).openapi('StartTimestamp')

const UpgradeStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'SUCCEEDED_WITH_ISSUES', 'FAILED'])
  .openapi('UpgradeStatus')

const UpgradeStepSchema = z
  .enum(['PRE_UPGRADE_CHECK', 'SNAPSHOT', 'UPGRADE'])
  .openapi('UpgradeStep')

const IssueSchema = z.string().openapi('Issue')

const IssuesSchema = z.array(IssueSchema).openapi('Issues')

const UpgradeStepItemSchema = z
  .object({
    UpgradeStep: UpgradeStepSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through: <ul> <li>PreUpgradeCheck</li> <li>Snapshot</li> <li>Upgrade</li> </ul> ',
        }),
    ).exactOptional(),
    UpgradeStepStatus: UpgradeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of a particular step during an upgrade. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> ',
        }),
    ).exactOptional(),
    Issues: IssuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of strings containing detailed information about the errors encountered in a particular step.',
        }),
    ).exactOptional(),
    ProgressPercent: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Floating point value representing progress percentage of a particular step.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.',
    required: [],
  })
  .openapi('UpgradeStepItem')

const UpgradeStepsListSchema = z.array(UpgradeStepItemSchema).openapi('UpgradeStepsList')

const UpgradeHistorySchema = z
  .object({
    UpgradeName: UpgradeNameSchema.and(
      z.any().openapi({ description: 'A string that describes the update briefly' }),
    ).exactOptional(),
    StartTimestamp: StartTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.',
        }),
    ).exactOptional(),
    UpgradeStatus: UpgradeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The overall status of the update. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> ',
        }),
    ).exactOptional(),
    StepsList: UpgradeStepsListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of <code> <a>UpgradeStepItem</a> </code> s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'History of the last 10 Upgrades and Upgrade Eligibility Checks.',
    required: [],
  })
  .openapi('UpgradeHistory')

const UpgradeHistoryListSchema = z.array(UpgradeHistorySchema).openapi('UpgradeHistoryList')

const GetUpgradeHistoryResponseSchema = z
  .object({
    UpgradeHistories: UpgradeHistoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of <code> <a>UpgradeHistory</a> </code> objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of <code> <a>GetUpgradeHistoryResponse</a> </code> object. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token that needs to be supplied to the next call to get the next page of results',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation. ',
    required: [],
  })
  .openapi('GetUpgradeHistoryResponse')

const GetUpgradeStatusResponseSchema = z
  .object({
    UpgradeStep: UpgradeStepSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through: <ul> <li>PreUpgradeCheck</li> <li>Snapshot</li> <li>Upgrade</li> </ul> ',
        }),
    ).exactOptional(),
    StepStatus: UpgradeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' One of 4 statuses that a step can go through returned as part of the <code> <a>GetUpgradeStatusResponse</a> </code> object. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> ',
        }),
    ).exactOptional(),
    UpgradeName: UpgradeNameSchema.and(
      z.any().openapi({ description: 'A string that describes the update briefly' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation. ',
    required: [],
  })
  .openapi('GetUpgradeStatusResponse')

const EngineTypeSchema = z.enum(['OpenSearch', 'Elasticsearch']).openapi('EngineType')

const DomainInfoSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: ' Specifies the <code>DomainName</code>.' }),
    ).exactOptional(),
    EngineType: EngineTypeSchema.and(
      z.any().openapi({ description: ' Specifies the <code>EngineType</code> of the domain.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DomainInfo')

const DomainInfoListSchema = z
  .array(DomainInfoSchema)
  .openapi({ description: ' Contains the list of Elasticsearch domain information.' })
  .openapi('DomainInfoList')

const ListDomainNamesResponseSchema = z
  .object({
    DomainNames: DomainInfoListSchema.and(
      z.any().openapi({ description: 'List of domain names and respective engine types.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types.',
    required: [],
  })
  .openapi('ListDomainNamesResponse')

const DomainPackageDetailsListSchema = z
  .array(DomainPackageDetailsSchema)
  .openapi('DomainPackageDetailsList')

const ListDomainsForPackageResponseSchema = z
  .object({
    DomainPackageDetailsList: DomainPackageDetailsListSchema.and(
      z.any().openapi({ description: 'List of <code>DomainPackageDetails</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Container for response parameters to <code> <a>ListDomainsForPackage</a> </code> operation. ',
    required: [],
  })
  .openapi('ListDomainsForPackageResponse')

const ElasticsearchInstanceTypeListSchema = z
  .array(ESPartitionInstanceTypeSchema)
  .openapi({ description: ' List of instance types supported by Amazon Elasticsearch service. ' })
  .openapi('ElasticsearchInstanceTypeList')

const ListElasticsearchInstanceTypesResponseSchema = z
  .object({
    ElasticsearchInstanceTypes: ElasticsearchInstanceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' List of instance types supported by Amazon Elasticsearch service for given <code> <a>ElasticsearchVersion</a> </code> ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'In case if there are more results available NextToken would be present, make further request to the same API with received NextToken to paginate remaining results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. ',
    required: [],
  })
  .openapi('ListElasticsearchInstanceTypesResponse')

const ListElasticsearchVersionsResponseSchema = z
  .object({
    ElasticsearchVersions: ElasticsearchVersionListSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation. ',
    required: [],
  })
  .openapi('ListElasticsearchVersionsResponse')

const ListPackagesForDomainResponseSchema = z
  .object({
    DomainPackageDetailsList: DomainPackageDetailsListSchema.and(
      z.any().openapi({ description: 'List of <code>DomainPackageDetails</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token that needs to be supplied to the next call to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response parameters to <code> <a>ListPackagesForDomain</a> </code> operation. ',
    required: [],
  })
  .openapi('ListPackagesForDomainResponse')

const TagListSchema = z
  .array(TagSchema)
  .openapi({ description: 'A list of <code>Tag</code> ' })
  .openapi('TagList')

const ListTagsResponseSchema = z
  .object({
    TagList: TagListSchema.and(
      z
        .any()
        .openapi({
          description: ' List of <code>Tag</code> for the requested Elasticsearch domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.',
    required: [],
  })
  .openapi('ListTagsResponse')

const AuthorizedPrincipalListSchema = z
  .array(AuthorizedPrincipalSchema)
  .openapi('AuthorizedPrincipalList')

const ListVpcEndpointAccessResponseSchema = z
  .object({
    AuthorizedPrincipalList: AuthorizedPrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of <code>AuthorizedPrincipal</code> describing the details of the permissions to manage VPC endpoints against the specified domain.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ),
  })
  .openapi({
    required: ['AuthorizedPrincipalList', 'NextToken'],
    description:
      'Container for response parameters to the <code><a>ListVpcEndpointAccess</a></code> operation. Returns a list of accounts id and account type authorized to manage VPC endpoints.',
  })
  .openapi('ListVpcEndpointAccessResponse')

const VpcEndpointSummaryListSchema = z
  .array(VpcEndpointSummarySchema)
  .openapi('VpcEndpointSummaryList')

const ListVpcEndpointsResponseSchema = z
  .object({
    VpcEndpointSummaryList: VpcEndpointSummaryListSchema.and(
      z.any().openapi({ description: 'Information about each endpoint.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ),
  })
  .openapi({
    required: ['VpcEndpointSummaryList', 'NextToken'],
    description:
      'Container for response parameters to the <code><a>ListVpcEndpoints</a></code> operation. Returns a list containing summarized details of the VPC endpoints.',
  })
  .openapi('ListVpcEndpointsResponse')

const ListVpcEndpointsForDomainResponseSchema = z
  .object({
    VpcEndpointSummaryList: VpcEndpointSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides list of <code>VpcEndpointSummary</code> summarizing details of the VPC endpoints.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'Information about each endpoint associated with the domain.' }),
    ),
  })
  .openapi({
    required: ['VpcEndpointSummaryList', 'NextToken'],
    description:
      'Container for response parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Returns a list containing summarized details of the VPC endpoints.',
  })
  .openapi('ListVpcEndpointsForDomainResponse')

const PurchaseReservedElasticsearchInstanceOfferingResponseSchema = z
  .object({
    ReservedElasticsearchInstanceId: GUIDSchema.and(
      z
        .any()
        .openapi({
          description: 'Details of the reserved Elasticsearch instance which was purchased.',
        }),
    ).exactOptional(),
    ReservationName: ReservationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The customer-specified identifier used to track this reservation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.',
    required: [],
  })
  .openapi('PurchaseReservedElasticsearchInstanceOfferingResponse')

const RejectInboundCrossClusterSearchConnectionResponseSchema = z
  .object({
    CrossClusterSearchConnection: InboundCrossClusterSearchConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of rejected inbound connection. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection.',
    required: [],
  })
  .openapi('RejectInboundCrossClusterSearchConnectionResponse')

const RevokeVpcEndpointAccessResponseSchema = z
  .object({})
  .openapi({
    description:
      'Container for response parameters to the <code><a>RevokeVpcEndpointAccess</a></code> operation. The response body for this operation is empty.',
  })
  .openapi('RevokeVpcEndpointAccessResponse')

const StartElasticsearchServiceSoftwareUpdateResponseSchema = z
  .object({
    ServiceSoftwareOptions: ServiceSoftwareOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of the Elasticsearch service software update.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.',
    required: [],
  })
  .openapi('StartElasticsearchServiceSoftwareUpdateResponse')

const DeploymentTypeSchema = z.string().min(2).max(128).openapi('DeploymentType')

const DryRunResultsSchema = z
  .object({
    DeploymentType: DeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the deployment mechanism through which the update shall be applied on the domain. Possible responses are <code>Blue/Green</code> (The update will require a blue/green deployment.) <code>DynamicUpdate</code> (The update can be applied in-place without a Blue/Green deployment required.) <code>Undetermined</code> (The domain is undergoing an update which needs to complete before the deployment type can be predicted.) <code>None</code> (The configuration change matches the current configuration and will not result in any update.) ',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains an optional message associated with the DryRunResults.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DryRunResults')

const UpdateElasticsearchDomainConfigResponseSchema = z
  .object({
    DomainConfig: ElasticsearchDomainConfigSchema.and(
      z.any().openapi({ description: 'The status of the updated Elasticsearch domain. ' }),
    ),
    DryRunResults: DryRunResultsSchema.and(
      z.any().openapi({ description: 'Contains result of DryRun. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainConfig'],
    description:
      'The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.',
  })
  .openapi('UpdateElasticsearchDomainConfigResponse')

const UpdatePackageResponseSchema = z
  .object({
    PackageDetails: PackageDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the package <code>PackageDetails</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>UpdatePackage</a> </code> operation. ',
    required: [],
  })
  .openapi('UpdatePackageResponse')

const UpdateVpcEndpointResponseSchema = z
  .object({
    VpcEndpoint: VpcEndpointSchema.and(
      z.any().openapi({ description: 'The endpoint to be updated.' }),
    ),
  })
  .openapi({
    required: ['VpcEndpoint'],
    description: 'Contains the configuration and status of the VPC endpoint being updated.',
  })
  .openapi('UpdateVpcEndpointResponse')

const UpgradeElasticsearchDomainResponseSchema = z
  .object({
    DomainName: DomainNameSchema.exactOptional(),
    TargetVersion: ElasticsearchVersionStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of Elasticsearch that you intend to upgrade the domain to.',
        }),
    ).exactOptional(),
    PerformCheckOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. ',
        }),
    ).exactOptional(),
    ChangeProgressDetails: ChangeProgressDetailsSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation. ',
    required: [],
  })
  .openapi('UpgradeElasticsearchDomainResponse')

const AcceptInboundCrossClusterSearchConnectionRequestSchema = z
  .object({})
  .openapi({
    title: 'AcceptInboundCrossClusterSearchConnectionRequest',
    description:
      'Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation.',
  })
  .openapi('AcceptInboundCrossClusterSearchConnectionRequest')

const AddTagsRequestSchema = z
  .object({
    ARN: ARNSchema.and(
      z
        .any()
        .openapi({
          description: ' Specify the <code>ARN</code> for which you want to add the tags.',
        }),
    ),
    TagList: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' List of <code>Tag</code> that need to be added for the Elasticsearch domain. ',
        }),
    ),
  })
  .openapi({
    required: ['ARN', 'TagList'],
    title: 'AddTagsRequest',
    description:
      'Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.',
  })
  .openapi('AddTagsRequest')

const AdvancedSecurityOptionsInputSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'True if advanced security is enabled.' }),
    ).exactOptional(),
    InternalUserDatabaseEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'True if the internal user database is enabled.' }),
    ).exactOptional(),
    MasterUserOptions: MasterUserOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Credentials for the master user: username and password, ARN, or both.',
        }),
    ).exactOptional(),
    SAMLOptions: SAMLOptionsInputSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the SAML application configuration for the domain.' }),
    ).exactOptional(),
    AnonymousAuthEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).',
    required: [],
  })
  .openapi('AdvancedSecurityOptionsInput')

const AssociatePackageRequestSchema = z
  .object({})
  .openapi({
    title: 'AssociatePackageRequest',
    description:
      ' Container for request parameters to <code> <a>AssociatePackage</a> </code> operation. ',
  })
  .openapi('AssociatePackageRequest')

const AuthorizeVpcEndpointAccessRequestSchema = z
  .object({
    Account: AWSAccountSchema.and(
      z.any().openapi({ description: 'The account ID to grant access to.' }),
    ),
  })
  .openapi({
    required: ['Account'],
    title: 'AuthorizeVpcEndpointAccessRequest',
    description:
      'Container for request parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Specifies the account to be permitted to manage VPC endpoints against the domain.',
  })
  .openapi('AuthorizeVpcEndpointAccessRequest')

const AutoTuneOptionsInputSchema = z
  .object({
    DesiredState: AutoTuneDesiredStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. ',
        }),
    ).exactOptional(),
    MaintenanceSchedules: AutoTuneMaintenanceScheduleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.',
    required: [],
  })
  .openapi('AutoTuneOptionsInput')

const CancelElasticsearchServiceSoftwareUpdateRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain that you want to stop the latest service software update on.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'CancelElasticsearchServiceSoftwareUpdateRequest',
    description:
      'Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.',
  })
  .openapi('CancelElasticsearchServiceSoftwareUpdateRequest')

const ClientTokenSchema = z.string().min(1).max(64).openapi('ClientToken')

const VPCOptionsSchema = z
  .object({
    SubnetIds: StringListSchema.and(
      z.any().openapi({ description: 'Specifies the subnets for VPC endpoint.' }),
    ).exactOptional(),
    SecurityGroupIds: StringListSchema.and(
      z.any().openapi({ description: 'Specifies the security groups for VPC endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
    required: [],
  })
  .openapi('VPCOptions')

const CreateElasticsearchDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    ),
    ElasticsearchVersion: ElasticsearchVersionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.',
        }),
    ).exactOptional(),
    ElasticsearchClusterConfig: ElasticsearchClusterConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. ',
        }),
    ).exactOptional(),
    EBSOptions: EBSOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to enable, disable and specify the type and size of EBS storage volumes. ',
        }),
    ).exactOptional(),
    AccessPolicies: PolicyDocumentSchema.and(
      z.any().openapi({ description: ' IAM access policy as a JSON-formatted string.' }),
    ).exactOptional(),
    SnapshotOptions: SnapshotOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. ',
        }),
    ).exactOptional(),
    VPCOptions: VPCOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>',
        }),
    ).exactOptional(),
    CognitoOptions: CognitoOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.',
        }),
    ).exactOptional(),
    EncryptionAtRestOptions: EncryptionAtRestOptionsSchema.and(
      z.any().openapi({ description: 'Specifies the Encryption At Rest Options.' }),
    ).exactOptional(),
    NodeToNodeEncryptionOptions: NodeToNodeEncryptionOptionsSchema.and(
      z.any().openapi({ description: 'Specifies the NodeToNodeEncryptionOptions.' }),
    ).exactOptional(),
    AdvancedOptions: AdvancedOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.',
        }),
    ).exactOptional(),
    LogPublishingOptions: LogPublishingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.',
        }),
    ).exactOptional(),
    DomainEndpointOptions: DomainEndpointOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to specify configuration that will be applied to the domain endpoint.',
        }),
    ).exactOptional(),
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputSchema.and(
      z.any().openapi({ description: 'Specifies advanced security options.' }),
    ).exactOptional(),
    AutoTuneOptions: AutoTuneOptionsInputSchema.and(
      z.any().openapi({ description: 'Specifies Auto-Tune options.' }),
    ).exactOptional(),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'A list of <code>Tag</code> added during domain creation.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName'], title: 'CreateElasticsearchDomainRequest' })
  .openapi('CreateElasticsearchDomainRequest')

const CreateOutboundCrossClusterSearchConnectionRequestSchema = z
  .object({
    SourceDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.',
        }),
    ),
    DestinationDomainInfo: DomainInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.',
        }),
    ),
    ConnectionAlias: ConnectionAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the connection alias that will be used by the customer for this connection.',
        }),
    ),
  })
  .openapi({
    required: ['SourceDomainInfo', 'DestinationDomainInfo', 'ConnectionAlias'],
    title: 'CreateOutboundCrossClusterSearchConnectionRequest',
    description:
      'Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation.',
  })
  .openapi('CreateOutboundCrossClusterSearchConnectionRequest')

const PackageSourceSchema = z
  .object({
    S3BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'Name of the bucket containing the package.' }),
    ).exactOptional(),
    S3Key: S3KeySchema.and(
      z.any().openapi({ description: 'Key (file name) of the package.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>',
    required: [],
  })
  .openapi('PackageSource')

const CreatePackageRequestSchema = z
  .object({
    PackageName: PackageNameSchema.and(
      z.any().openapi({ description: 'Unique identifier for the package.' }),
    ),
    PackageType: PackageTypeSchema.and(
      z.any().openapi({ description: 'Type of package. Currently supports only TXT-DICTIONARY.' }),
    ),
    PackageDescription: PackageDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the package.' }),
    ).exactOptional(),
    PackageSource: PackageSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer S3 location <code>PackageSource</code> for importing the package.',
        }),
    ),
  })
  .openapi({
    required: ['PackageName', 'PackageType', 'PackageSource'],
    title: 'CreatePackageRequest',
    description:
      ' Container for request parameters to <code> <a>CreatePackage</a> </code> operation. ',
  })
  .openapi('CreatePackageRequest')

const CreateVpcEndpointRequestSchema = z
  .object({
    DomainArn: DomainArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the domain to grant access to.',
        }),
    ),
    VpcOptions: VPCOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Options to specify the subnets and security groups for the endpoint.',
        }),
    ),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Unique, case-sensitive identifier to ensure idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainArn', 'VpcOptions'],
    title: 'CreateVpcEndpointRequest',
    description:
      'Container for the parameters to the <code><a>CreateVpcEndpointRequest</a></code> operation.',
  })
  .openapi('CreateVpcEndpointRequest')

const DeleteElasticsearchDomainRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteElasticsearchDomainRequest',
    description:
      'Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.',
  })
  .openapi('DeleteElasticsearchDomainRequest')

const DeleteInboundCrossClusterSearchConnectionRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteInboundCrossClusterSearchConnectionRequest',
    description:
      'Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation.',
  })
  .openapi('DeleteInboundCrossClusterSearchConnectionRequest')

const DeleteOutboundCrossClusterSearchConnectionRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteOutboundCrossClusterSearchConnectionRequest',
    description:
      'Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation.',
  })
  .openapi('DeleteOutboundCrossClusterSearchConnectionRequest')

const DeletePackageRequestSchema = z
  .object({})
  .openapi({
    title: 'DeletePackageRequest',
    description:
      ' Container for request parameters to <code> <a>DeletePackage</a> </code> operation. ',
  })
  .openapi('DeletePackageRequest')

const DeleteVpcEndpointRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteVpcEndpointRequest',
    description: 'Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.',
  })
  .openapi('DeleteVpcEndpointRequest')

const MaxResultsSchema = z
  .int()
  .max(100)
  .openapi({ description: ' Set this value to limit the number of results returned. ' })
  .openapi('MaxResults')

const DescribeDomainAutoTunesRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this value to limit the number of results returned. If not specified, defaults to 100.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDomainAutoTunesRequest',
    description:
      'Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.',
    required: [],
  })
  .openapi('DescribeDomainAutoTunesRequest')

const DescribeDomainChangeProgressRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeDomainChangeProgressRequest',
    description:
      'Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. Specifies the domain name and optional change specific identity for which you want progress information. ',
  })
  .openapi('DescribeDomainChangeProgressRequest')

const DescribeElasticsearchDomainConfigRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeElasticsearchDomainConfigRequest',
    description:
      ' Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.',
  })
  .openapi('DescribeElasticsearchDomainConfigRequest')

const DescribeElasticsearchDomainRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeElasticsearchDomainRequest',
    description:
      'Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.',
  })
  .openapi('DescribeElasticsearchDomainRequest')

const DomainNameListSchema = z
  .array(DomainNameSchema)
  .openapi({ description: 'A list of Elasticsearch domain names.' })
  .openapi('DomainNameList')

const DescribeElasticsearchDomainsRequestSchema = z
  .object({
    DomainNames: DomainNameListSchema.and(
      z.any().openapi({ description: 'The Elasticsearch domains for which you want information.' }),
    ),
  })
  .openapi({
    required: ['DomainNames'],
    title: 'DescribeElasticsearchDomainsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.',
  })
  .openapi('DescribeElasticsearchDomainsRequest')

const DescribeElasticsearchInstanceTypeLimitsRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeElasticsearchInstanceTypeLimitsRequest',
    description:
      ' Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. ',
  })
  .openapi('DescribeElasticsearchInstanceTypeLimitsRequest')

const FilterListSchema = z.array(FilterSchema).openapi('FilterList')

const DescribeInboundCrossClusterSearchConnectionsRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of filters used to match properties for inbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>source-domain-info.domain-name</li> <li>source-domain-info.owner-id</li> <li>source-domain-info.region</li> <li>destination-domain-info.domain-name</li> </ul> ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this value to limit the number of results returned. If not specified, defaults to 100.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeInboundCrossClusterSearchConnectionsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation.',
    required: [],
  })
  .openapi('DescribeInboundCrossClusterSearchConnectionsRequest')

const DescribeOutboundCrossClusterSearchConnectionsRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of filters used to match properties for outbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>destination-domain-info.domain-name</li> <li>destination-domain-info.owner-id</li> <li>destination-domain-info.region</li> <li>source-domain-info.domain-name</li> </ul> ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this value to limit the number of results returned. If not specified, defaults to 100.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeOutboundCrossClusterSearchConnectionsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation.',
    required: [],
  })
  .openapi('DescribeOutboundCrossClusterSearchConnectionsRequest')

const DescribePackagesFilterListSchema = z
  .array(DescribePackagesFilterSchema)
  .openapi({
    description:
      'A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response.',
  })
  .openapi('DescribePackagesFilterList')

const DescribePackagesRequestSchema = z
  .object({
    Filters: DescribePackagesFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Only returns packages that match the <code>DescribePackagesFilterList</code> values.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Limits results to a maximum number of packages.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribePackagesRequest',
    description:
      ' Container for request parameters to <code> <a>DescribePackage</a> </code> operation. ',
    required: [],
  })
  .openapi('DescribePackagesRequest')

const DescribeReservedElasticsearchInstanceOfferingsRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeReservedElasticsearchInstanceOfferingsRequest',
    description:
      'Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code>',
  })
  .openapi('DescribeReservedElasticsearchInstanceOfferingsRequest')

const DescribeReservedElasticsearchInstancesRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeReservedElasticsearchInstancesRequest',
    description: 'Container for parameters to <code>DescribeReservedElasticsearchInstances</code>',
  })
  .openapi('DescribeReservedElasticsearchInstancesRequest')

const VpcEndpointIdListSchema = z.array(VpcEndpointIdSchema).openapi('VpcEndpointIdList')

const DescribeVpcEndpointsRequestSchema = z
  .object({
    VpcEndpointIds: VpcEndpointIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifiers of the endpoints to get information about.',
        }),
    ),
  })
  .openapi({
    required: ['VpcEndpointIds'],
    title: 'DescribeVpcEndpointsRequest',
    description:
      'Container for request parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Specifies the list of VPC endpoints to be described.',
  })
  .openapi('DescribeVpcEndpointsRequest')

const DissociatePackageRequestSchema = z
  .object({})
  .openapi({
    title: 'DissociatePackageRequest',
    description:
      ' Container for request parameters to <code> <a>DissociatePackage</a> </code> operation. ',
  })
  .openapi('DissociatePackageRequest')

const DryRunSchema = z.boolean().openapi('DryRun')

const GetCompatibleElasticsearchVersionsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetCompatibleElasticsearchVersionsRequest',
    description:
      ' Container for request parameters to <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. ',
  })
  .openapi('GetCompatibleElasticsearchVersionsRequest')

const GetPackageVersionHistoryRequestSchema = z
  .object({})
  .openapi({
    title: 'GetPackageVersionHistoryRequest',
    description:
      ' Container for request parameters to <code> <a>GetPackageVersionHistory</a> </code> operation. ',
  })
  .openapi('GetPackageVersionHistoryRequest')

const GetUpgradeHistoryRequestSchema = z
  .object({})
  .openapi({
    title: 'GetUpgradeHistoryRequest',
    description:
      ' Container for request parameters to <code> <a>GetUpgradeHistory</a> </code> operation. ',
  })
  .openapi('GetUpgradeHistoryRequest')

const GetUpgradeStatusRequestSchema = z
  .object({})
  .openapi({
    title: 'GetUpgradeStatusRequest',
    description:
      ' Container for request parameters to <code> <a>GetUpgradeStatus</a> </code> operation. ',
  })
  .openapi('GetUpgradeStatusRequest')

const InstanceCountSchema = z
  .int()
  .min(1)
  .openapi({ description: 'Specifies the number of EC2 instances in the Elasticsearch domain.' })
  .openapi('InstanceCount')

const InstanceRoleSchema = z.string().openapi('InstanceRole')

const ListDomainNamesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDomainNamesRequest',
    description:
      ' Container for the parameters to the <code><a>ListDomainNames</a></code> operation.',
  })
  .openapi('ListDomainNamesRequest')

const ListDomainsForPackageRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDomainsForPackageRequest',
    description:
      ' Container for request parameters to <code> <a>ListDomainsForPackage</a> </code> operation. ',
  })
  .openapi('ListDomainsForPackageRequest')

const ListElasticsearchInstanceTypesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListElasticsearchInstanceTypesRequest',
    description:
      ' Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. ',
  })
  .openapi('ListElasticsearchInstanceTypesRequest')

const ListElasticsearchVersionsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListElasticsearchVersionsRequest',
    description:
      '<p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p>',
  })
  .openapi('ListElasticsearchVersionsRequest')

const ListPackagesForDomainRequestSchema = z
  .object({})
  .openapi({
    title: 'ListPackagesForDomainRequest',
    description:
      ' Container for request parameters to <code> <a>ListPackagesForDomain</a> </code> operation. ',
  })
  .openapi('ListPackagesForDomainRequest')

const ListTagsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTagsRequest',
    description:
      'Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.',
  })
  .openapi('ListTagsRequest')

const ListVpcEndpointAccessRequestSchema = z
  .object({})
  .openapi({
    title: 'ListVpcEndpointAccessRequest',
    description:
      'Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint',
  })
  .openapi('ListVpcEndpointAccessRequest')

const ListVpcEndpointsForDomainRequestSchema = z
  .object({})
  .openapi({
    title: 'ListVpcEndpointsForDomainRequest',
    description:
      'Container for request parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Specifies the domain whose VPC endpoints will be listed.',
  })
  .openapi('ListVpcEndpointsForDomainRequest')

const ListVpcEndpointsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListVpcEndpointsRequest',
    description:
      'Container for request parameters to the <code><a>ListVpcEndpoints</a></code> operation.',
  })
  .openapi('ListVpcEndpointsRequest')

const LogTypeSchema = z
  .enum(['INDEX_SLOW_LOGS', 'SEARCH_SLOW_LOGS', 'ES_APPLICATION_LOGS', 'AUDIT_LOGS'])
  .openapi({
    description:
      'Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> <li>AUDIT_LOGS: Audit logs contain records of user requests for access from the domain.</li> </ul> ',
  })
  .openapi('LogType')

const PurchaseReservedElasticsearchInstanceOfferingRequestSchema = z
  .object({
    ReservedElasticsearchInstanceOfferingId: GUIDSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the reserved Elasticsearch instance offering to purchase.',
        }),
    ),
    ReservationName: ReservationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'A customer-specified identifier to track this reservation.' }),
    ),
    InstanceCount: InstanceCountSchema.and(
      z.any().openapi({ description: 'The number of Elasticsearch instances to reserve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReservedElasticsearchInstanceOfferingId', 'ReservationName'],
    title: 'PurchaseReservedElasticsearchInstanceOfferingRequest',
    description:
      'Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code>',
  })
  .openapi('PurchaseReservedElasticsearchInstanceOfferingRequest')

const RejectInboundCrossClusterSearchConnectionRequestSchema = z
  .object({})
  .openapi({
    title: 'RejectInboundCrossClusterSearchConnectionRequest',
    description:
      'Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation.',
  })
  .openapi('RejectInboundCrossClusterSearchConnectionRequest')

const RemoveTagsRequestSchema = z
  .object({
    ARN: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>ARN</code> for the Elasticsearch domain from which you want to delete the specified tags.',
        }),
    ),
    TagKeys: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.',
        }),
    ),
  })
  .openapi({
    required: ['ARN', 'TagKeys'],
    title: 'RemoveTagsRequest',
    description:
      'Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.',
  })
  .openapi('RemoveTagsRequest')

const RevokeVpcEndpointAccessRequestSchema = z
  .object({
    Account: AWSAccountSchema.and(
      z.any().openapi({ description: 'The account ID to revoke access from.' }),
    ),
  })
  .openapi({
    required: ['Account'],
    title: 'RevokeVpcEndpointAccessRequest',
    description:
      'Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.',
  })
  .openapi('RevokeVpcEndpointAccessRequest')

const StartElasticsearchServiceSoftwareUpdateRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain that you want to update to the latest service software.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'StartElasticsearchServiceSoftwareUpdateRequest',
    description:
      'Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.',
  })
  .openapi('StartElasticsearchServiceSoftwareUpdateRequest')

const UpdateElasticsearchDomainConfigRequestSchema = z
  .object({
    ElasticsearchClusterConfig: ElasticsearchClusterConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The type and number of instances to instantiate for the domain cluster.',
        }),
    ).exactOptional(),
    EBSOptions: EBSOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specify the type and size of the EBS volume that you want to use. ',
        }),
    ).exactOptional(),
    SnapshotOptions: SnapshotOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. ',
        }),
    ).exactOptional(),
    VPCOptions: VPCOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>',
        }),
    ).exactOptional(),
    CognitoOptions: CognitoOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.',
        }),
    ).exactOptional(),
    AdvancedOptions: AdvancedOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Modifies the advanced option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.',
        }),
    ).exactOptional(),
    AccessPolicies: PolicyDocumentSchema.and(
      z.any().openapi({ description: 'IAM access policy as a JSON-formatted string.' }),
    ).exactOptional(),
    LogPublishingOptions: LogPublishingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.',
        }),
    ).exactOptional(),
    DomainEndpointOptions: DomainEndpointOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Options to specify configuration that will be applied to the domain endpoint.',
        }),
    ).exactOptional(),
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputSchema.and(
      z.any().openapi({ description: 'Specifies advanced security options.' }),
    ).exactOptional(),
    NodeToNodeEncryptionOptions: NodeToNodeEncryptionOptionsSchema.and(
      z.any().openapi({ description: 'Specifies the NodeToNodeEncryptionOptions.' }),
    ).exactOptional(),
    EncryptionAtRestOptions: EncryptionAtRestOptionsSchema.and(
      z.any().openapi({ description: 'Specifies the Encryption At Rest Options.' }),
    ).exactOptional(),
    AutoTuneOptions: AutoTuneOptionsSchema.and(
      z.any().openapi({ description: 'Specifies Auto-Tune options.' }),
    ).exactOptional(),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This flag, when set to True, specifies whether the <code>UpdateElasticsearchDomain</code> request should return the results of validation checks without actually applying the change. This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain. This will not actually perform the Update. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateElasticsearchDomainConfigRequest',
    description:
      'Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.',
    required: [],
  })
  .openapi('UpdateElasticsearchDomainConfigRequest')

const UpdatePackageRequestSchema = z
  .object({
    PackageID: PackageIDSchema.and(
      z.any().openapi({ description: 'Unique identifier for the package.' }),
    ),
    PackageSource: PackageSourceSchema,
    PackageDescription: PackageDescriptionSchema.and(
      z.any().openapi({ description: 'New description of the package.' }),
    ).exactOptional(),
    CommitMessage: CommitMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PackageID', 'PackageSource'],
    title: 'UpdatePackageRequest',
    description:
      ' Container for request parameters to <code> <a>UpdatePackage</a> </code> operation. ',
  })
  .openapi('UpdatePackageRequest')

const UpdateVpcEndpointRequestSchema = z
  .object({
    VpcEndpointId: VpcEndpointIdSchema.and(
      z.any().openapi({ description: 'Unique identifier of the VPC endpoint to be updated.' }),
    ),
    VpcOptions: VPCOptionsSchema.and(
      z
        .any()
        .openapi({ description: 'The security groups and/or subnets to add, remove, or modify.' }),
    ),
  })
  .openapi({
    required: ['VpcEndpointId', 'VpcOptions'],
    title: 'UpdateVpcEndpointRequest',
    description: 'Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.',
  })
  .openapi('UpdateVpcEndpointRequest')

const UpgradeElasticsearchDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    TargetVersion: ElasticsearchVersionStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of Elasticsearch that you intend to upgrade the domain to.',
        }),
    ),
    PerformCheckOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName', 'TargetVersion'],
    title: 'UpgradeElasticsearchDomainRequest',
    description:
      ' Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation. ',
  })
  .openapi('UpgradeElasticsearchDomainRequest')

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

export const put20150101EsCcsInboundConnectionConnectionIdAcceptRoute = createRoute({
  method: 'put',
  path: '/2015-01-01/es/ccs/inboundConnection/{ConnectionId}/accept',
  description:
    'Allows the destination domain owner to accept an inbound cross-cluster search connection request.',
  operationId: 'AcceptInboundCrossClusterSearchConnection',
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
      ConnectionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectionId',
            in: 'path',
            required: true,
            description: 'The id of the inbound connection that you want to accept.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AcceptInboundCrossClusterSearchConnectionResponseSchema },
      },
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
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const post20150101TagsRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/tags',
  description:
    'Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.</a>',
  operationId: 'AddTags',
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
              ARN: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.',
                }),
              TagList: z.array(TagSchema).openapi({ description: 'A list of <code>Tag</code> ' }),
            })
            .openapi({ required: ['ARN', 'TagList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const post20150101PackagesAssociatePackageIDDomainNameRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/packages/associate/{PackageID}/{DomainName}',
  description: 'Associates a package with an Amazon ES domain.',
  operationId: 'AssociatePackage',
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
      PackageID: z
        .string()
        .openapi({
          param: {
            name: 'PackageID',
            in: 'path',
            required: true,
            description:
              'Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.',
            schema: { type: 'string' },
          },
        }),
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'Name of the domain that you want to associate the package with.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociatePackageResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const post20150101EsDomainDomainNameAuthorizeVpcEndpointAccessRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess',
  description:
    'Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.',
  operationId: 'AuthorizeVpcEndpointAccess',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The name of the OpenSearch Service domain to provide access to.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Account: z
                .string()
                .regex(/^[0-9]+$/)
                .openapi({ description: 'The account ID to grant access to.' }),
            })
            .openapi({ required: ['Account'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AuthorizeVpcEndpointAccessResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    485: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const post20150101EsServiceSoftwareUpdateCancelRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/serviceSoftwareUpdate/cancel',
  description:
    'Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.',
  operationId: 'CancelElasticsearchServiceSoftwareUpdate',
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
              DomainName: z
                .string()
                .regex(/[a-z][a-z0-9\-]+/)
                .min(3)
                .max(28)
                .openapi({
                  description:
                    'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                }),
            })
            .openapi({ required: ['DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CancelElasticsearchServiceSoftwareUpdateResponseSchema },
      },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const post20150101EsDomainRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/domain',
  description:
    'Creates a new Elasticsearch domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.',
  operationId: 'CreateElasticsearchDomain',
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
              DomainName: z
                .string()
                .regex(/[a-z][a-z0-9\-]+/)
                .min(3)
                .max(28)
                .openapi({
                  description:
                    'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                }),
              ElasticsearchVersion: z
                .string()
                .regex(/^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.',
                }),
              ElasticsearchClusterConfig: z
                .object({
                  InstanceType: ESPartitionInstanceTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.',
                      }),
                  ).exactOptional(),
                  InstanceCount: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The number of instances in the specified domain cluster.',
                      }),
                  ).exactOptional(),
                  DedicatedMasterEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A boolean value to indicate whether a dedicated master node is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.',
                      }),
                  ).exactOptional(),
                  ZoneAwarenessEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A boolean value to indicate whether zone awareness is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.',
                      }),
                  ).exactOptional(),
                  ZoneAwarenessConfig: ZoneAwarenessConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the zone awareness configuration for a domain when zone awareness is enabled.',
                      }),
                  ).exactOptional(),
                  DedicatedMasterType: ESPartitionInstanceTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The instance type for a dedicated master node.' }),
                  ).exactOptional(),
                  DedicatedMasterCount: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Total number of dedicated master nodes, active and on standby, for the cluster.',
                      }),
                  ).exactOptional(),
                  WarmEnabled: BooleanSchema.and(
                    z.any().openapi({ description: 'True to enable warm storage.' }),
                  ).exactOptional(),
                  WarmType: ESWarmPartitionInstanceTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The instance type for the Elasticsearch cluster's warm nodes.",
                      }),
                  ).exactOptional(),
                  WarmCount: IntegerClassSchema.and(
                    z.any().openapi({ description: 'The number of warm nodes in the cluster.' }),
                  ).exactOptional(),
                  ColdStorageOptions: ColdStorageOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the <code>ColdStorageOptions</code> config for Elasticsearch Domain',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the configuration for the domain cluster, such as the type and number of instances.',
                  required: [],
                }),
              EBSOptions: z
                .object({
                  EBSEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specifies whether EBS-based storage is enabled.' }),
                  ).exactOptional(),
                  VolumeType: VolumeTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Specifies the volume type for EBS-based storage.',
                      }),
                  ).exactOptional(),
                  VolumeSize: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({ description: ' Integer to specify the size of an EBS volume.' }),
                  ).exactOptional(),
                  Iops: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the IOPS for Provisioned IOPS And GP3 EBS volume (SSD).',
                      }),
                  ).exactOptional(),
                  Throughput: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies the Throughput for GP3 EBS volume (SSD).',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.',
                  required: [],
                }),
              AccessPolicies: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.',
                }),
              SnapshotOptions: z
                .object({
                  AutomatedSnapshotStartHour: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.',
                  required: [],
                }),
              VPCOptions: z
                .object({
                  SubnetIds: StringListSchema.and(
                    z.any().openapi({ description: 'Specifies the subnets for VPC endpoint.' }),
                  ).exactOptional(),
                  SecurityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specifies the security groups for VPC endpoint.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
                  required: [],
                }),
              CognitoOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the option to enable Cognito for Kibana authentication.',
                      }),
                  ).exactOptional(),
                  UserPoolId: UserPoolIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the Cognito user pool ID for Kibana authentication.',
                      }),
                  ).exactOptional(),
                  IdentityPoolId: IdentityPoolIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the Cognito identity pool ID for Kibana authentication.',
                      }),
                  ).exactOptional(),
                  RoleArn: RoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.',
                  required: [],
                }),
              EncryptionAtRestOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies the option to enable Encryption At Rest.',
                      }),
                  ).exactOptional(),
                  KmsKeyId: KmsKeyIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Specifies the KMS Key ID for Encryption At Rest options.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies the Encryption At Rest Options.',
                  required: [],
                }),
              NodeToNodeEncryptionOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specify true to enable node-to-node encryption.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies the node-to-node encryption options.',
                  required: [],
                }),
              AdvancedOptions: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>',
                }),
              LogPublishingOptions: z
                .record(z.string(), LogPublishingOptionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.',
                }),
              DomainEndpointOptions: z
                .object({
                  EnforceHTTPS: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.',
                      }),
                  ).exactOptional(),
                  TLSSecurityPolicy: TLSSecurityPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. <br/> It can be one of the following values: <ul> <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy which supports TLSv1.0 and higher.</li> <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy which supports only TLSv1.2</li> </ul> ',
                      }),
                  ).exactOptional(),
                  CustomEndpointEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if custom endpoint should be enabled for the Elasticsearch domain.',
                      }),
                  ).exactOptional(),
                  CustomEndpoint: DomainNameFqdnSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specify the fully qualified domain for your custom endpoint.',
                      }),
                  ).exactOptional(),
                  CustomEndpointCertificateArn: ARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specify ACM certificate ARN for your custom endpoint.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Options to configure endpoint for the Elasticsearch domain.',
                  required: [],
                }),
              AdvancedSecurityOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z.any().openapi({ description: 'True if advanced security is enabled.' }),
                  ).exactOptional(),
                  InternalUserDatabaseEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({ description: 'True if the internal user database is enabled.' }),
                  ).exactOptional(),
                  MasterUserOptions: MasterUserOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Credentials for the master user: username and password, ARN, or both.',
                      }),
                  ).exactOptional(),
                  SAMLOptions: SAMLOptionsInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies the SAML application configuration for the domain.',
                      }),
                  ).exactOptional(),
                  AnonymousAuthEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).',
                  required: [],
                }),
              AutoTuneOptions: z
                .object({
                  DesiredState: AutoTuneDesiredStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. ',
                      }),
                  ).exactOptional(),
                  MaintenanceSchedules: AutoTuneMaintenanceScheduleListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.',
                  required: [],
                }),
              TagList: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'A list of <code>Tag</code> ' }),
            })
            .openapi({ required: ['DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateElasticsearchDomainResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'application/json': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const post20150101EsCcsOutboundConnectionRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/ccs/outboundConnection',
  description:
    'Creates a new cross-cluster search connection from a source domain to a destination domain.',
  operationId: 'CreateOutboundCrossClusterSearchConnection',
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
              SourceDomainInfo: z
                .object({
                  OwnerId: OwnerIdSchema.exactOptional(),
                  DomainName: DomainNameSchema.exactOptional(),
                  Region: RegionSchema.exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.',
                  required: [],
                }),
              DestinationDomainInfo: z
                .object({
                  OwnerId: OwnerIdSchema.exactOptional(),
                  DomainName: DomainNameSchema.exactOptional(),
                  Region: RegionSchema.exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.',
                  required: [],
                }),
              ConnectionAlias: z
                .string()
                .max(20)
                .openapi({
                  description:
                    'Specifies the connection alias that will be used by the customer for this connection.',
                }),
            })
            .openapi({
              required: ['SourceDomainInfo', 'DestinationDomainInfo', 'ConnectionAlias'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateOutboundCrossClusterSearchConnectionResponseSchema },
      },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const post20150101PackagesRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/packages',
  description: 'Create a package for use with Amazon ES domains.',
  operationId: 'CreatePackage',
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
              PackageName: z
                .string()
                .regex(/[a-z][a-z0-9\-]+/)
                .min(3)
                .max(28)
                .openapi({ description: 'Unique identifier for the package.' }),
              PackageType: z
                .literal('TXT-DICTIONARY')
                .openapi({
                  description: 'Type of package. Currently supports only TXT-DICTIONARY.',
                }),
              PackageDescription: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'Description of the package.' }),
              PackageSource: z
                .object({
                  S3BucketName: S3BucketNameSchema.and(
                    z.any().openapi({ description: 'Name of the bucket containing the package.' }),
                  ).exactOptional(),
                  S3Key: S3KeySchema.and(
                    z.any().openapi({ description: 'Key (file name) of the package.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>',
                  required: [],
                }),
            })
            .openapi({ required: ['PackageName', 'PackageType', 'PackageSource'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePackageResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'application/json': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsVpcEndpointsRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/vpcEndpoints',
  description:
    'Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.',
  operationId: 'ListVpcEndpoints',
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
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'Identifier to allow retrieval of paginated results.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVpcEndpointsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    482: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const post20150101EsVpcEndpointsRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/vpcEndpoints',
  description: 'Creates an Amazon OpenSearch Service-managed VPC endpoint.',
  operationId: 'CreateVpcEndpoint',
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
              DomainArn: z
                .string()
                .regex(/arn:aws[a-z\-]*:[a-z]+:[a-z0-9\-]+:[0-9]+:domain\/[a-z0-9\-]+/)
                .min(1)
                .max(512)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the domain to grant access to.',
                }),
              VpcOptions: z
                .object({
                  SubnetIds: StringListSchema.and(
                    z.any().openapi({ description: 'Specifies the subnets for VPC endpoint.' }),
                  ).exactOptional(),
                  SecurityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specifies the security groups for VPC endpoint.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
                  required: [],
                }),
              ClientToken: z
                .string()
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier to ensure idempotency of the request.',
                }),
            })
            .openapi({ required: ['DomainArn', 'VpcOptions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcEndpointResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    484: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    485: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const get20150101EsDomainDomainNameRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/domain/{DomainName}',
  description:
    'Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.',
  operationId: 'DescribeElasticsearchDomain',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The name of the Elasticsearch domain for which you want information.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeElasticsearchDomainResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const delete20150101EsDomainDomainNameRoute = createRoute({
  method: 'delete',
  path: '/2015-01-01/es/domain/{DomainName}',
  description:
    'Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.',
  operationId: 'DeleteElasticsearchDomain',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description:
              'The name of the Elasticsearch domain that you want to permanently delete.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteElasticsearchDomainResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const delete20150101EsRoleRoute = createRoute({
  method: 'delete',
  path: '/2015-01-01/es/role',
  description:
    'Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.',
  operationId: 'DeleteElasticsearchServiceRole',
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
    200: { description: 'Success' },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const delete20150101EsCcsInboundConnectionConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/2015-01-01/es/ccs/inboundConnection/{ConnectionId}',
  description:
    'Allows the destination domain owner to delete an existing inbound cross-cluster search connection.',
  operationId: 'DeleteInboundCrossClusterSearchConnection',
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
      ConnectionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectionId',
            in: 'path',
            required: true,
            description: 'The id of the inbound connection that you want to permanently delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DeleteInboundCrossClusterSearchConnectionResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const delete20150101EsCcsOutboundConnectionConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/2015-01-01/es/ccs/outboundConnection/{ConnectionId}',
  description:
    'Allows the source domain owner to delete an existing outbound cross-cluster search connection.',
  operationId: 'DeleteOutboundCrossClusterSearchConnection',
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
      ConnectionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectionId',
            in: 'path',
            required: true,
            description: 'The id of the outbound connection that you want to permanently delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DeleteOutboundCrossClusterSearchConnectionResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const delete20150101PackagesPackageIDRoute = createRoute({
  method: 'delete',
  path: '/2015-01-01/packages/{PackageID}',
  description: 'Delete the package.',
  operationId: 'DeletePackage',
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
      PackageID: z
        .string()
        .openapi({
          param: {
            name: 'PackageID',
            in: 'path',
            required: true,
            description:
              'Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePackageResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const delete20150101EsVpcEndpointsVpcEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/2015-01-01/es/vpcEndpoints/{VpcEndpointId}',
  description: 'Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.',
  operationId: 'DeleteVpcEndpoint',
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
      VpcEndpointId: z
        .string()
        .regex(/^aos-[a-zA-Z0-9]*$/)
        .min(5)
        .max(256)
        .openapi({
          param: {
            name: 'VpcEndpointId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the endpoint to be deleted.',
            schema: { type: 'string', pattern: '^aos-[a-zA-Z0-9]*$', minLength: 5, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVpcEndpointResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const get20150101EsDomainDomainNameAutoTunesRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/domain/{DomainName}/autoTunes',
  description:
    'Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.',
  operationId: 'DescribeDomainAutoTunes',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'Specifies the domain name for which you want Auto-Tune action details.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
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
          schema: z
            .object({
              MaxResults: z
                .int()
                .max(100)
                .exactOptional()
                .openapi({
                  description: ' Set this value to limit the number of results returned. ',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
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
      content: { 'application/json': { schema: DescribeDomainAutoTunesResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsDomainDomainNameProgressRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/domain/{DomainName}/progress',
  description:
    'Returns information about the current blue/green deployment happening on a domain, including a change ID, status, and progress stages.',
  operationId: 'DescribeDomainChangeProgress',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The domain you want to get the progress information about.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    query: z.object({
      changeid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'changeid',
            in: 'query',
            required: false,
            description:
              'The specific change ID for which you want to get progress information. This is an optional parameter. If omitted, the service returns information about the most recent configuration change. ',
            schema: {
              type: 'string',
              pattern:
                '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
            },
          },
          pattern: '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDomainChangeProgressResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsDomainDomainNameConfigRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/domain/{DomainName}/config',
  description:
    'Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.',
  operationId: 'DescribeElasticsearchDomainConfig',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The Elasticsearch domain that you want to get information about.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeElasticsearchDomainConfigResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const post20150101EsDomainDomainNameConfigRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/domain/{DomainName}/config',
  description:
    'Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. ',
  operationId: 'UpdateElasticsearchDomainConfig',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The name of the Elasticsearch domain that you are updating. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ElasticsearchClusterConfig: z
                .object({
                  InstanceType: ESPartitionInstanceTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.',
                      }),
                  ).exactOptional(),
                  InstanceCount: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The number of instances in the specified domain cluster.',
                      }),
                  ).exactOptional(),
                  DedicatedMasterEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A boolean value to indicate whether a dedicated master node is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.',
                      }),
                  ).exactOptional(),
                  ZoneAwarenessEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A boolean value to indicate whether zone awareness is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.',
                      }),
                  ).exactOptional(),
                  ZoneAwarenessConfig: ZoneAwarenessConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the zone awareness configuration for a domain when zone awareness is enabled.',
                      }),
                  ).exactOptional(),
                  DedicatedMasterType: ESPartitionInstanceTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The instance type for a dedicated master node.' }),
                  ).exactOptional(),
                  DedicatedMasterCount: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Total number of dedicated master nodes, active and on standby, for the cluster.',
                      }),
                  ).exactOptional(),
                  WarmEnabled: BooleanSchema.and(
                    z.any().openapi({ description: 'True to enable warm storage.' }),
                  ).exactOptional(),
                  WarmType: ESWarmPartitionInstanceTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The instance type for the Elasticsearch cluster's warm nodes.",
                      }),
                  ).exactOptional(),
                  WarmCount: IntegerClassSchema.and(
                    z.any().openapi({ description: 'The number of warm nodes in the cluster.' }),
                  ).exactOptional(),
                  ColdStorageOptions: ColdStorageOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the <code>ColdStorageOptions</code> config for Elasticsearch Domain',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the configuration for the domain cluster, such as the type and number of instances.',
                  required: [],
                }),
              EBSOptions: z
                .object({
                  EBSEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specifies whether EBS-based storage is enabled.' }),
                  ).exactOptional(),
                  VolumeType: VolumeTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Specifies the volume type for EBS-based storage.',
                      }),
                  ).exactOptional(),
                  VolumeSize: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({ description: ' Integer to specify the size of an EBS volume.' }),
                  ).exactOptional(),
                  Iops: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the IOPS for Provisioned IOPS And GP3 EBS volume (SSD).',
                      }),
                  ).exactOptional(),
                  Throughput: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies the Throughput for GP3 EBS volume (SSD).',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.',
                  required: [],
                }),
              SnapshotOptions: z
                .object({
                  AutomatedSnapshotStartHour: IntegerClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.',
                  required: [],
                }),
              VPCOptions: z
                .object({
                  SubnetIds: StringListSchema.and(
                    z.any().openapi({ description: 'Specifies the subnets for VPC endpoint.' }),
                  ).exactOptional(),
                  SecurityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specifies the security groups for VPC endpoint.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
                  required: [],
                }),
              CognitoOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the option to enable Cognito for Kibana authentication.',
                      }),
                  ).exactOptional(),
                  UserPoolId: UserPoolIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the Cognito user pool ID for Kibana authentication.',
                      }),
                  ).exactOptional(),
                  IdentityPoolId: IdentityPoolIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the Cognito identity pool ID for Kibana authentication.',
                      }),
                  ).exactOptional(),
                  RoleArn: RoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.',
                  required: [],
                }),
              AdvancedOptions: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>',
                }),
              AccessPolicies: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.',
                }),
              LogPublishingOptions: z
                .record(z.string(), LogPublishingOptionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.',
                }),
              DomainEndpointOptions: z
                .object({
                  EnforceHTTPS: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.',
                      }),
                  ).exactOptional(),
                  TLSSecurityPolicy: TLSSecurityPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. <br/> It can be one of the following values: <ul> <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy which supports TLSv1.0 and higher.</li> <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy which supports only TLSv1.2</li> </ul> ',
                      }),
                  ).exactOptional(),
                  CustomEndpointEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if custom endpoint should be enabled for the Elasticsearch domain.',
                      }),
                  ).exactOptional(),
                  CustomEndpoint: DomainNameFqdnSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specify the fully qualified domain for your custom endpoint.',
                      }),
                  ).exactOptional(),
                  CustomEndpointCertificateArn: ARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specify ACM certificate ARN for your custom endpoint.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Options to configure endpoint for the Elasticsearch domain.',
                  required: [],
                }),
              AdvancedSecurityOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z.any().openapi({ description: 'True if advanced security is enabled.' }),
                  ).exactOptional(),
                  InternalUserDatabaseEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({ description: 'True if the internal user database is enabled.' }),
                  ).exactOptional(),
                  MasterUserOptions: MasterUserOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Credentials for the master user: username and password, ARN, or both.',
                      }),
                  ).exactOptional(),
                  SAMLOptions: SAMLOptionsInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies the SAML application configuration for the domain.',
                      }),
                  ).exactOptional(),
                  AnonymousAuthEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).',
                  required: [],
                }),
              NodeToNodeEncryptionOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specify true to enable node-to-node encryption.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies the node-to-node encryption options.',
                  required: [],
                }),
              EncryptionAtRestOptions: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies the option to enable Encryption At Rest.',
                      }),
                  ).exactOptional(),
                  KmsKeyId: KmsKeyIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Specifies the KMS Key ID for Encryption At Rest options.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies the Encryption At Rest Options.',
                  required: [],
                }),
              AutoTuneOptions: z
                .object({
                  DesiredState: AutoTuneDesiredStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. ',
                      }),
                  ).exactOptional(),
                  RollbackOnDisable: RollbackOnDisableSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. ',
                      }),
                  ).exactOptional(),
                  MaintenanceSchedules: AutoTuneMaintenanceScheduleListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.',
                  required: [],
                }),
              DryRun: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    ' This flag, when set to True, specifies whether the <code>UpdateElasticsearchDomain</code> request should return the results of validation checks without actually applying the change. This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain. This will not actually perform the Update. ',
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
      content: { 'application/json': { schema: UpdateElasticsearchDomainConfigResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'application/json': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const post20150101EsDomainInfoRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/domain-info',
  description:
    'Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.',
  operationId: 'DescribeElasticsearchDomains',
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
              DomainNames: z
                .array(DomainNameSchema)
                .openapi({ description: 'A list of Elasticsearch domain names.' }),
            })
            .openapi({ required: ['DomainNames'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeElasticsearchDomainsResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}',
  description:
    ' Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying. ',
  operationId: 'DescribeElasticsearchInstanceTypeLimits',
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
      domainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .exactOptional()
        .openapi({
          param: {
            name: 'domainName',
            in: 'query',
            required: false,
            description:
              ' DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch <code> <a>Limits</a> </code> for existing domain. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    params: z.object({
      InstanceType: z
        .enum([
          'm3.medium.elasticsearch',
          'm3.large.elasticsearch',
          'm3.xlarge.elasticsearch',
          'm3.2xlarge.elasticsearch',
          'm4.large.elasticsearch',
          'm4.xlarge.elasticsearch',
          'm4.2xlarge.elasticsearch',
          'm4.4xlarge.elasticsearch',
          'm4.10xlarge.elasticsearch',
          'm5.large.elasticsearch',
          'm5.xlarge.elasticsearch',
          'm5.2xlarge.elasticsearch',
          'm5.4xlarge.elasticsearch',
          'm5.12xlarge.elasticsearch',
          'r5.large.elasticsearch',
          'r5.xlarge.elasticsearch',
          'r5.2xlarge.elasticsearch',
          'r5.4xlarge.elasticsearch',
          'r5.12xlarge.elasticsearch',
          'c5.large.elasticsearch',
          'c5.xlarge.elasticsearch',
          'c5.2xlarge.elasticsearch',
          'c5.4xlarge.elasticsearch',
          'c5.9xlarge.elasticsearch',
          'c5.18xlarge.elasticsearch',
          'ultrawarm1.medium.elasticsearch',
          'ultrawarm1.large.elasticsearch',
          't2.micro.elasticsearch',
          't2.small.elasticsearch',
          't2.medium.elasticsearch',
          'r3.large.elasticsearch',
          'r3.xlarge.elasticsearch',
          'r3.2xlarge.elasticsearch',
          'r3.4xlarge.elasticsearch',
          'r3.8xlarge.elasticsearch',
          'i2.xlarge.elasticsearch',
          'i2.2xlarge.elasticsearch',
          'd2.xlarge.elasticsearch',
          'd2.2xlarge.elasticsearch',
          'd2.4xlarge.elasticsearch',
          'd2.8xlarge.elasticsearch',
          'c4.large.elasticsearch',
          'c4.xlarge.elasticsearch',
          'c4.2xlarge.elasticsearch',
          'c4.4xlarge.elasticsearch',
          'c4.8xlarge.elasticsearch',
          'r4.large.elasticsearch',
          'r4.xlarge.elasticsearch',
          'r4.2xlarge.elasticsearch',
          'r4.4xlarge.elasticsearch',
          'r4.8xlarge.elasticsearch',
          'r4.16xlarge.elasticsearch',
          'i3.large.elasticsearch',
          'i3.xlarge.elasticsearch',
          'i3.2xlarge.elasticsearch',
          'i3.4xlarge.elasticsearch',
          'i3.8xlarge.elasticsearch',
          'i3.16xlarge.elasticsearch',
        ])
        .openapi({
          param: {
            name: 'InstanceType',
            in: 'path',
            required: true,
            description:
              ' The instance type for an Elasticsearch cluster for which Elasticsearch <code> <a>Limits</a> </code> are needed. ',
            schema: {
              type: 'string',
              enum: [
                'm3.medium.elasticsearch',
                'm3.large.elasticsearch',
                'm3.xlarge.elasticsearch',
                'm3.2xlarge.elasticsearch',
                'm4.large.elasticsearch',
                'm4.xlarge.elasticsearch',
                'm4.2xlarge.elasticsearch',
                'm4.4xlarge.elasticsearch',
                'm4.10xlarge.elasticsearch',
                'm5.large.elasticsearch',
                'm5.xlarge.elasticsearch',
                'm5.2xlarge.elasticsearch',
                'm5.4xlarge.elasticsearch',
                'm5.12xlarge.elasticsearch',
                'r5.large.elasticsearch',
                'r5.xlarge.elasticsearch',
                'r5.2xlarge.elasticsearch',
                'r5.4xlarge.elasticsearch',
                'r5.12xlarge.elasticsearch',
                'c5.large.elasticsearch',
                'c5.xlarge.elasticsearch',
                'c5.2xlarge.elasticsearch',
                'c5.4xlarge.elasticsearch',
                'c5.9xlarge.elasticsearch',
                'c5.18xlarge.elasticsearch',
                'ultrawarm1.medium.elasticsearch',
                'ultrawarm1.large.elasticsearch',
                't2.micro.elasticsearch',
                't2.small.elasticsearch',
                't2.medium.elasticsearch',
                'r3.large.elasticsearch',
                'r3.xlarge.elasticsearch',
                'r3.2xlarge.elasticsearch',
                'r3.4xlarge.elasticsearch',
                'r3.8xlarge.elasticsearch',
                'i2.xlarge.elasticsearch',
                'i2.2xlarge.elasticsearch',
                'd2.xlarge.elasticsearch',
                'd2.2xlarge.elasticsearch',
                'd2.4xlarge.elasticsearch',
                'd2.8xlarge.elasticsearch',
                'c4.large.elasticsearch',
                'c4.xlarge.elasticsearch',
                'c4.2xlarge.elasticsearch',
                'c4.4xlarge.elasticsearch',
                'c4.8xlarge.elasticsearch',
                'r4.large.elasticsearch',
                'r4.xlarge.elasticsearch',
                'r4.2xlarge.elasticsearch',
                'r4.4xlarge.elasticsearch',
                'r4.8xlarge.elasticsearch',
                'r4.16xlarge.elasticsearch',
                'i3.large.elasticsearch',
                'i3.xlarge.elasticsearch',
                'i3.2xlarge.elasticsearch',
                'i3.4xlarge.elasticsearch',
                'i3.8xlarge.elasticsearch',
                'i3.16xlarge.elasticsearch',
              ],
            },
          },
        }),
      ElasticsearchVersion: z
        .string()
        .regex(/^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$/)
        .openapi({
          param: {
            name: 'ElasticsearchVersion',
            in: 'path',
            required: true,
            description:
              ' Version of Elasticsearch for which <code> <a>Limits</a> </code> are needed. ',
            schema: {
              type: 'string',
              pattern: '^[0-9]{1}\\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\\.[0-9]{1,2}$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeElasticsearchInstanceTypeLimitsResponseSchema },
      },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'application/json': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const post20150101EsCcsInboundConnectionSearchRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/ccs/inboundConnection/search',
  description: 'Lists all the inbound cross-cluster search connections for a destination domain.',
  operationId: 'DescribeInboundCrossClusterSearchConnections',
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
              Filters: z
                .array(FilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' A list of filters used to match properties for inbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>source-domain-info.domain-name</li> <li>source-domain-info.owner-id</li> <li>source-domain-info.region</li> <li>destination-domain-info.domain-name</li> </ul> ',
                }),
              MaxResults: z
                .int()
                .max(100)
                .exactOptional()
                .openapi({
                  description: ' Set this value to limit the number of results returned. ',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
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
        'application/json': { schema: DescribeInboundCrossClusterSearchConnectionsResponseSchema },
      },
    },
    480: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const post20150101EsCcsOutboundConnectionSearchRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/ccs/outboundConnection/search',
  description: 'Lists all the outbound cross-cluster search connections for a source domain.',
  operationId: 'DescribeOutboundCrossClusterSearchConnections',
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
              Filters: z
                .array(FilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' A list of filters used to match properties for outbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>destination-domain-info.domain-name</li> <li>destination-domain-info.owner-id</li> <li>destination-domain-info.region</li> <li>source-domain-info.domain-name</li> </ul> ',
                }),
              MaxResults: z
                .int()
                .max(100)
                .exactOptional()
                .openapi({
                  description: ' Set this value to limit the number of results returned. ',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
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
        'application/json': { schema: DescribeOutboundCrossClusterSearchConnectionsResponseSchema },
      },
    },
    480: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const post20150101PackagesDescribeRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/packages/describe',
  description:
    'Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.',
  operationId: 'DescribePackages',
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
              Filters: z
                .array(DescribePackagesFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response.',
                }),
              MaxResults: z
                .int()
                .max(100)
                .exactOptional()
                .openapi({
                  description: ' Set this value to limit the number of results returned. ',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
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
      content: { 'application/json': { schema: DescribePackagesResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsReservedInstanceOfferingsRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/reservedInstanceOfferings',
  description: 'Lists available reserved Elasticsearch instance offerings.',
  operationId: 'DescribeReservedElasticsearchInstanceOfferings',
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
      offeringId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'offeringId',
            in: 'query',
            required: false,
            description:
              'The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.',
            schema: {
              type: 'string',
              pattern:
                '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
            },
          },
          pattern: '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Set this value to limit the number of results returned. If not specified, defaults to 100.',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: DescribeReservedElasticsearchInstanceOfferingsResponseSchema,
        },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const get20150101EsReservedInstancesRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/reservedInstances',
  description: 'Returns information about reserved Elasticsearch instances for this account.',
  operationId: 'DescribeReservedElasticsearchInstances',
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
      reservationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reservationId',
            in: 'query',
            required: false,
            description:
              'The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.',
            schema: {
              type: 'string',
              pattern:
                '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
            },
          },
          pattern: '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Set this value to limit the number of results returned. If not specified, defaults to 100.',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeReservedElasticsearchInstancesResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const post20150101EsVpcEndpointsDescribeRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/vpcEndpoints/describe',
  description: 'Describes one or more Amazon OpenSearch Service-managed VPC endpoints.',
  operationId: 'DescribeVpcEndpoints',
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
              VpcEndpointIds: z
                .array(VpcEndpointIdSchema)
                .openapi({
                  description: 'The unique identifiers of the endpoints to get information about.',
                }),
            })
            .openapi({ required: ['VpcEndpointIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVpcEndpointsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    483: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const post20150101PackagesDissociatePackageIDDomainNameRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/packages/dissociate/{PackageID}/{DomainName}',
  description: 'Dissociates a package from the Amazon ES domain.',
  operationId: 'DissociatePackage',
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
      PackageID: z
        .string()
        .openapi({
          param: {
            name: 'PackageID',
            in: 'path',
            required: true,
            description:
              'Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.',
            schema: { type: 'string' },
          },
        }),
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'Name of the domain that you want to associate the package with.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DissociatePackageResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20150101EsCompatibleVersionsRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/compatibleVersions',
  description:
    ' Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain. ',
  operationId: 'GetCompatibleElasticsearchVersions',
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
      domainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .exactOptional()
        .openapi({
          param: {
            name: 'domainName',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCompatibleElasticsearchVersionsResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const get20150101PackagesPackageIDHistoryRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/packages/{PackageID}/history',
  description:
    'Returns a list of versions of the package, along with their creation time and commit message.',
  operationId: 'GetPackageVersionHistory',
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
      PackageID: z
        .string()
        .openapi({
          param: {
            name: 'PackageID',
            in: 'path',
            required: true,
            description: 'Returns an audit history of versions of the package.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Limits results to a maximum number of versions.',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPackageVersionHistoryResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsUpgradeDomainDomainNameHistoryRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/upgradeDomain/{DomainName}/history',
  description:
    'Retrieves the complete history of the last 10 upgrades that were performed on the domain.',
  operationId: 'GetUpgradeHistory',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUpgradeHistoryResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const get20150101EsUpgradeDomainDomainNameStatusRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/upgradeDomain/{DomainName}/status',
  description:
    'Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.',
  operationId: 'GetUpgradeStatus',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUpgradeStatusResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const get20150101DomainRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/domain',
  description:
    "Returns the name of all Elasticsearch domains owned by the current user's account. ",
  operationId: 'ListDomainNames',
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
      engineType: z
        .enum(['OpenSearch', 'Elasticsearch'])
        .exactOptional()
        .openapi({
          param: {
            name: 'engineType',
            in: 'query',
            required: false,
            description:
              " Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'. ",
            schema: { type: 'string', enum: ['OpenSearch', 'Elasticsearch'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDomainNamesResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101PackagesPackageIDDomainsRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/packages/{PackageID}/domains',
  description: 'Lists all Amazon ES domains associated with the package.',
  operationId: 'ListDomainsForPackage',
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
      PackageID: z
        .string()
        .openapi({
          param: {
            name: 'PackageID',
            in: 'path',
            required: true,
            description: 'The package for which to list domains.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Limits results to a maximum number of domains.',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDomainsForPackageResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsInstanceTypesElasticsearchVersionRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/instanceTypes/{ElasticsearchVersion}',
  description:
    'List all Elasticsearch instance types that are supported for given ElasticsearchVersion',
  operationId: 'ListElasticsearchInstanceTypes',
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
      ElasticsearchVersion: z
        .string()
        .regex(/^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$/)
        .openapi({
          param: {
            name: 'ElasticsearchVersion',
            in: 'path',
            required: true,
            description:
              'Version of Elasticsearch for which list of supported elasticsearch instance types are needed. ',
            schema: {
              type: 'string',
              pattern: '^[0-9]{1}\\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\\.[0-9]{1,2}$',
            },
          },
        }),
    }),
    query: z.object({
      domainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .exactOptional()
        .openapi({
          param: {
            name: 'domainName',
            in: 'query',
            required: false,
            description:
              'DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored. ',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination. ',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListElasticsearchInstanceTypesResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101EsVersionsRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/versions',
  description: 'List all supported Elasticsearch versions',
  operationId: 'ListElasticsearchVersions',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored. ',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListElasticsearchVersionsResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101DomainDomainNamePackagesRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/domain/{DomainName}/packages',
  description: 'Lists all packages associated with the Amazon ES domain.',
  operationId: 'ListPackagesForDomain',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The name of the domain for which you want to list associated packages.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Limits results to a maximum number of packages.',
            schema: {
              type: 'integer',
              description: ' Set this value to limit the number of results returned. ',
              maximum: 100,
            },
          },
          description: ' Set this value to limit the number of results returned. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPackagesForDomainResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150101TagsArnRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/tags/#arn',
  description: 'Returns all tags for the given Elasticsearch domain.',
  operationId: 'ListTags',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'query',
            required: true,
            description:
              ' Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.',
            schema: {
              type: 'string',
              description:
                'The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.',
            },
          },
          description:
            'The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const get20150101EsDomainDomainNameListVpcEndpointAccessRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess',
  description:
    'Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.',
  operationId: 'ListVpcEndpointAccess',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description:
              'The name of the OpenSearch Service domain to retrieve access information for.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'Provides an identifier to allow retrieval of paginated results.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVpcEndpointAccessResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const get20150101EsDomainDomainNameVpcEndpointsRoute = createRoute({
  method: 'get',
  path: '/2015-01-01/es/domain/{DomainName}/vpcEndpoints',
  description:
    'Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain.',
  operationId: 'ListVpcEndpointsForDomain',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'Name of the ElasticSearch domain whose VPC endpoints are to be listed.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'Provides an identifier to allow retrieval of paginated results.',
            schema: {
              type: 'string',
              description:
                ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
            },
          },
          description:
            ' Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVpcEndpointsForDomainResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const post20150101EsPurchaseReservedInstanceOfferingRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/purchaseReservedInstanceOffering',
  description: 'Allows you to purchase reserved Elasticsearch instances.',
  operationId: 'PurchaseReservedElasticsearchInstanceOffering',
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
              ReservedElasticsearchInstanceOfferingId: z
                .string()
                .openapi({
                  description:
                    'The ID of the reserved Elasticsearch instance offering to purchase.',
                  pattern:
                    '\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}',
                }),
              ReservationName: z
                .string()
                .min(5)
                .max(64)
                .openapi({
                  description: 'A customer-specified identifier to track this reservation.',
                }),
              InstanceCount: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'Specifies the number of EC2 instances in the Elasticsearch domain.',
                }),
            })
            .openapi({ required: ['ReservedElasticsearchInstanceOfferingId', 'ReservationName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PurchaseReservedElasticsearchInstanceOfferingResponseSchema },
      },
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
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const put20150101EsCcsInboundConnectionConnectionIdRejectRoute = createRoute({
  method: 'put',
  path: '/2015-01-01/es/ccs/inboundConnection/{ConnectionId}/reject',
  description:
    'Allows the destination domain owner to reject an inbound cross-cluster search connection request.',
  operationId: 'RejectInboundCrossClusterSearchConnection',
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
      ConnectionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectionId',
            in: 'path',
            required: true,
            description: 'The id of the inbound connection that you want to reject.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: RejectInboundCrossClusterSearchConnectionResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const post20150101TagsRemovalRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/tags-removal',
  description: 'Removes the specified set of tags from the specified Elasticsearch domain.',
  operationId: 'RemoveTags',
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
              ARN: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.',
                }),
              TagKeys: z
                .array(StringSchema)
                .openapi({
                  description:
                    'Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.',
                }),
            })
            .openapi({ required: ['ARN', 'TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const post20150101EsDomainDomainNameRevokeVpcEndpointAccessRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess',
  description:
    'Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.',
  operationId: 'RevokeVpcEndpointAccess',
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
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The name of the OpenSearch Service domain.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Account: z
                .string()
                .regex(/^[0-9]+$/)
                .openapi({ description: 'The account ID to revoke access from.' }),
            })
            .openapi({ required: ['Account'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RevokeVpcEndpointAccessResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    483: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    484: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const post20150101EsServiceSoftwareUpdateStartRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/serviceSoftwareUpdate/start',
  description: 'Schedules a service software update for an Amazon ES domain.',
  operationId: 'StartElasticsearchServiceSoftwareUpdate',
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
              DomainName: z
                .string()
                .regex(/[a-z][a-z0-9\-]+/)
                .min(3)
                .max(28)
                .openapi({
                  description:
                    'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                }),
            })
            .openapi({ required: ['DomainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StartElasticsearchServiceSoftwareUpdateResponseSchema },
      },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const post20150101PackagesUpdateRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/packages/update',
  description: 'Updates a package for use with Amazon ES domains.',
  operationId: 'UpdatePackage',
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
              PackageID: z.string().openapi({ description: 'Unique identifier for the package.' }),
              PackageSource: z
                .object({
                  S3BucketName: S3BucketNameSchema.and(
                    z.any().openapi({ description: 'Name of the bucket containing the package.' }),
                  ).exactOptional(),
                  S3Key: S3KeySchema.and(
                    z.any().openapi({ description: 'Key (file name) of the package.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>',
                  required: [],
                }),
              PackageDescription: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'New description of the package.' }),
              CommitMessage: z
                .string()
                .max(160)
                .exactOptional()
                .openapi({
                  description:
                    'An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.',
                }),
            })
            .openapi({ required: ['PackageID', 'PackageSource'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePackageResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const post20150101EsVpcEndpointsUpdateRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/vpcEndpoints/update',
  description: 'Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.',
  operationId: 'UpdateVpcEndpoint',
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
              VpcEndpointId: z
                .string()
                .regex(/^aos-[a-zA-Z0-9]*$/)
                .min(5)
                .max(256)
                .openapi({ description: 'Unique identifier of the VPC endpoint to be updated.' }),
              VpcOptions: z
                .object({
                  SubnetIds: StringListSchema.and(
                    z.any().openapi({ description: 'Specifies the subnets for VPC endpoint.' }),
                  ).exactOptional(),
                  SecurityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Specifies the security groups for VPC endpoint.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.',
                  required: [],
                }),
            })
            .openapi({ required: ['VpcEndpointId', 'VpcOptions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVpcEndpointResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
  },
})

export const post20150101EsUpgradeDomainRoute = createRoute({
  method: 'post',
  path: '/2015-01-01/es/upgradeDomain',
  description:
    'Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.',
  operationId: 'UpgradeElasticsearchDomain',
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
              DomainName: z
                .string()
                .regex(/[a-z][a-z0-9\-]+/)
                .min(3)
                .max(28)
                .openapi({
                  description:
                    'The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                }),
              TargetVersion: z
                .string()
                .regex(/^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$/)
                .openapi({
                  description:
                    'The version of Elasticsearch that you intend to upgrade the domain to.',
                }),
              PerformCheckOnly: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    ' This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. ',
                }),
            })
            .openapi({ required: ['DomainName', 'TargetVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpgradeElasticsearchDomainResponseSchema } },
    },
    480: {
      description: 'BaseException',
      content: { 'application/json': { schema: BaseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'DisabledOperationException',
      content: { 'application/json': { schema: DisabledOperationExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})
