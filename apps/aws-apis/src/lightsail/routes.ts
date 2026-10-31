import { createRoute, z } from '@hono/zod-openapi'

const AddOnTypeSchema = z.enum(['AutoSnapshot', 'StopInstanceOnIdle']).openapi('AddOnType')

const TimeOfDaySchema = z
  .string()
  .regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  .openapi('TimeOfDay')

const AutoSnapshotAddOnRequestSchema = z
  .object({
    snapshotTimeOfDay: TimeOfDaySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time when an automatic snapshot will be created.</p> <p>Constraints:</p> <ul> <li> <p>Must be in <code>HH:00</code> format, and in an hourly increment.</p> </li> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>The snapshot will be automatically created between the time specified and up to 45 minutes after.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul>',
    required: [],
  })
  .openapi('AutoSnapshotAddOnRequest')

const StringSchema = z.string().openapi('String')

const StopInstanceOnIdleRequestSchema = z
  .object({
    threshold: StringSchema.and(
      z.any().openapi({ description: 'The value to compare with the duration.' }),
    ).exactOptional(),
    duration: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of idle time in minutes after which your virtual computer will automatically stop.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a request to create or edit the <code>StopInstanceOnIdle</code> add-on.</p> <important> <p>This add-on only applies to Lightsail for Research resources.</p> </important>',
    required: [],
  })
  .openapi('StopInstanceOnIdleRequest')

type AddOnRequestType = {
  addOnType: z.infer<typeof AddOnTypeSchema> & { [key: string]: unknown }
  autoSnapshotAddOnRequest?: z.infer<typeof AutoSnapshotAddOnRequestSchema> & {
    [key: string]: unknown
  }
  stopInstanceOnIdleRequest?: z.infer<typeof StopInstanceOnIdleRequestSchema> & {
    [key: string]: unknown
  }
}

const NonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('NonEmptyString')

const ResourceNameSchema = z
  .string()
  .regex(/\w[\w\-]*\w/)
  .openapi('ResourceName')

const ResourceTypeSchema = z
  .enum([
    'ContainerService',
    'Instance',
    'StaticIp',
    'KeyPair',
    'InstanceSnapshot',
    'Domain',
    'PeeredVpc',
    'LoadBalancer',
    'LoadBalancerTlsCertificate',
    'Disk',
    'DiskSnapshot',
    'RelationalDatabase',
    'RelationalDatabaseSnapshot',
    'ExportSnapshotRecord',
    'CloudFormationStackRecord',
    'Alarm',
    'ContactMethod',
    'Distribution',
    'Certificate',
    'Bucket',
  ])
  .openapi('ResourceType')

const IsoDateSchema = z.iso.datetime({ offset: true }).openapi('IsoDate')

const RegionNameSchema = z
  .enum([
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'eu-central-1',
    'ca-central-1',
    'ap-south-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-northeast-1',
    'ap-northeast-2',
    'eu-north-1',
  ])
  .openapi('RegionName')

const ResourceLocationSchema = z
  .object({
    availabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone. Follows the format <code>us-east-2a</code> (case-sensitive).',
        }),
    ).exactOptional(),
    regionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region name.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the resource location.', required: [] })
  .openapi('ResourceLocation')

const BooleanSchema = z.boolean().openapi('Boolean')

const OperationTypeSchema = z
  .enum([
    'DeleteKnownHostKeys',
    'DeleteInstance',
    'CreateInstance',
    'StopInstance',
    'StartInstance',
    'RebootInstance',
    'OpenInstancePublicPorts',
    'PutInstancePublicPorts',
    'CloseInstancePublicPorts',
    'AllocateStaticIp',
    'ReleaseStaticIp',
    'AttachStaticIp',
    'DetachStaticIp',
    'UpdateDomainEntry',
    'DeleteDomainEntry',
    'CreateDomain',
    'DeleteDomain',
    'CreateInstanceSnapshot',
    'DeleteInstanceSnapshot',
    'CreateInstancesFromSnapshot',
    'CreateLoadBalancer',
    'DeleteLoadBalancer',
    'AttachInstancesToLoadBalancer',
    'DetachInstancesFromLoadBalancer',
    'UpdateLoadBalancerAttribute',
    'CreateLoadBalancerTlsCertificate',
    'DeleteLoadBalancerTlsCertificate',
    'AttachLoadBalancerTlsCertificate',
    'CreateDisk',
    'DeleteDisk',
    'AttachDisk',
    'DetachDisk',
    'CreateDiskSnapshot',
    'DeleteDiskSnapshot',
    'CreateDiskFromSnapshot',
    'CreateRelationalDatabase',
    'UpdateRelationalDatabase',
    'DeleteRelationalDatabase',
    'CreateRelationalDatabaseFromSnapshot',
    'CreateRelationalDatabaseSnapshot',
    'DeleteRelationalDatabaseSnapshot',
    'UpdateRelationalDatabaseParameters',
    'StartRelationalDatabase',
    'RebootRelationalDatabase',
    'StopRelationalDatabase',
    'EnableAddOn',
    'DisableAddOn',
    'PutAlarm',
    'GetAlarms',
    'DeleteAlarm',
    'TestAlarm',
    'CreateContactMethod',
    'GetContactMethods',
    'SendContactMethodVerification',
    'DeleteContactMethod',
    'CreateDistribution',
    'UpdateDistribution',
    'DeleteDistribution',
    'ResetDistributionCache',
    'AttachCertificateToDistribution',
    'DetachCertificateFromDistribution',
    'UpdateDistributionBundle',
    'SetIpAddressType',
    'CreateCertificate',
    'DeleteCertificate',
    'CreateContainerService',
    'UpdateContainerService',
    'DeleteContainerService',
    'CreateContainerServiceDeployment',
    'CreateContainerServiceRegistryLogin',
    'RegisterContainerImage',
    'DeleteContainerImage',
    'CreateBucket',
    'DeleteBucket',
    'CreateBucketAccessKey',
    'DeleteBucketAccessKey',
    'UpdateBucketBundle',
    'UpdateBucket',
    'SetResourceAccessForBucket',
    'UpdateInstanceMetadataOptions',
    'StartGUISession',
    'StopGUISession',
  ])
  .openapi('OperationType')

const OperationStatusSchema = z
  .enum(['NotStarted', 'Started', 'Failed', 'Completed', 'Succeeded'])
  .openapi('OperationStatus')

const OperationSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the operation.' }),
    ).exactOptional(),
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The resource name.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type. ' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the operation was initialized (e.g., <code>1479816991.349</code>).',
        }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region and Availability Zone.' }),
    ).exactOptional(),
    isTerminal: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value indicating whether the operation is terminal.' }),
    ).exactOptional(),
    operationDetails: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about the operation (e.g., <code>Debian-1GB-Ohio-1</code>).',
        }),
    ).exactOptional(),
    operationType: OperationTypeSchema.and(
      z.any().openapi({ description: 'The type of operation. ' }),
    ).exactOptional(),
    status: OperationStatusSchema.and(
      z.any().openapi({ description: 'The status of the operation. ' }),
    ).exactOptional(),
    statusChangedAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the status was changed (e.g., <code>1479816991.349</code>).',
        }),
    ).exactOptional(),
    errorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    errorDetails: StringSchema.and(
      z.any().openapi({ description: 'The error details.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the API operation.', required: [] })
  .openapi('Operation')

const OperationListSchema = z.array(OperationSchema).openapi('OperationList')

const AllocateStaticIpResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocateStaticIpResult')

const AllocateStaticIpRequestSchema = z
  .object({
    staticIpName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the static IP address.' }),
    ),
  })
  .openapi({ required: ['staticIpName'], title: 'AllocateStaticIpRequest' })
  .openapi('AllocateStaticIpRequest')

const ServiceExceptionSchema = z.any().openapi('ServiceException')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const OperationFailureExceptionSchema = z.any().openapi('OperationFailureException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const AccountSetupInProgressExceptionSchema = z.any().openapi('AccountSetupInProgressException')

const UnauthenticatedExceptionSchema = z.any().openapi('UnauthenticatedException')

const AttachCertificateToDistributionResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachCertificateToDistributionResult')

const AttachCertificateToDistributionRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution that the certificate will be attached to.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p>',
        }),
    ),
    certificateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the certificate to attach to a distribution.</p> <p>Only certificates with a status of <code>ISSUED</code> can be attached to a distribution.</p> <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you can specify.</p> <note> <p>This is the name of the certificate resource type and is used only to reference the certificate in other API actions. It can be different than the domain name of the certificate. For example, your certificate name might be <code>WordPress-Blog-Certificate</code> and the domain name of the certificate might be <code>example.com</code>.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['distributionName', 'certificateName'],
    title: 'AttachCertificateToDistributionRequest',
  })
  .openapi('AttachCertificateToDistributionRequest')

const AttachDiskResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachDiskResult')

const AttachDiskRequestSchema = z
  .object({
    diskName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The unique Lightsail disk name (e.g., <code>my-disk</code>).' }),
    ),
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Lightsail instance where you want to utilize the storage disk.',
        }),
    ),
    diskPath: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The disk path to expose to the instance (e.g., <code>/dev/xvdf</code>).',
        }),
    ),
    autoMounting: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value used to determine the automatic mounting of a storage volume to a virtual computer. The default value is <code>False</code>.</p> <important> <p>This value only applies to Lightsail for Research resources.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['diskName', 'instanceName', 'diskPath'], title: 'AttachDiskRequest' })
  .openapi('AttachDiskRequest')

const AttachInstancesToLoadBalancerResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachInstancesToLoadBalancerResult')

const ResourceNameListSchema = z.array(ResourceNameSchema).openapi('ResourceNameList')

const AttachInstancesToLoadBalancerRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    instanceNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings representing the instance name(s) you want to attach to your load balancer.</p> <p>An instance must be <code>running</code> before you can attach it to your load balancer.</p> <p>There are no additional limits on the number of instances you can attach to your load balancer, aside from the limit of Lightsail instances you can create in your account (20).</p>',
        }),
    ),
  })
  .openapi({
    required: ['loadBalancerName', 'instanceNames'],
    title: 'AttachInstancesToLoadBalancerRequest',
  })
  .openapi('AttachInstancesToLoadBalancerRequest')

const AttachLoadBalancerTlsCertificateResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.</p> <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get the certificate and use it for another purpose.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachLoadBalancerTlsCertificateResult')

const AttachLoadBalancerTlsCertificateRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the load balancer to which you want to associate the SSL/TLS certificate.',
        }),
    ),
    certificateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your SSL/TLS certificate.' }),
    ),
  })
  .openapi({
    required: ['loadBalancerName', 'certificateName'],
    title: 'AttachLoadBalancerTlsCertificateRequest',
  })
  .openapi('AttachLoadBalancerTlsCertificateRequest')

const AttachStaticIpResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachStaticIpResult')

const AttachStaticIpRequestSchema = z
  .object({
    staticIpName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the static IP.' }),
    ),
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The instance name to which you want to attach the static IP address.',
        }),
    ),
  })
  .openapi({ required: ['staticIpName', 'instanceName'], title: 'AttachStaticIpRequest' })
  .openapi('AttachStaticIpRequest')

const CloseInstancePublicPortsResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CloseInstancePublicPortsResult')

const PortSchema = z.int().min(-1).max(65535).openapi('Port')

const NetworkProtocolSchema = z.enum(['tcp', 'all', 'udp', 'icmp']).openapi('NetworkProtocol')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const PortInfoSchema = z
  .object({
    fromPort: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The first port in a range of open ports on an instance.</p> <p>Allowed ports:</p> <ul> <li> <p>TCP and UDP - <code>0</code> to <code>65535</code> </p> </li> <li> <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p> </li> <li> <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6 code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet Control Message Protocol for IPv6</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    toPort: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last port in a range of open ports on an instance.</p> <p>Allowed ports:</p> <ul> <li> <p>TCP and UDP - <code>0</code> to <code>65535</code> </p> </li> <li> <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p> </li> <li> <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6 code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet Control Message Protocol for IPv6</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    protocol: NetworkProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP protocol name.</p> <p>The name can be one of the following:</p> <ul> <li> <p> <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn\'t require reliable data stream service, use UDP instead.</p> </li> <li> <p> <code>all</code> - All transport layer protocol types. For more general information, see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on <i>Wikipedia</i>.</p> </li> <li> <p> <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don\'t require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.</p> </li> <li> <p> <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error messages and operational information indicating success or failure when communicating with an instance. For example, an error is indicated when an instance could not be reached. When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP type using the <code>fromPort</code> parameter, and ICMP code using the <code>toPort</code> parameter.</p> </li> </ul>',
        }),
    ).exactOptional(),
    cidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.</p> <note> <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to connect to an instance.</p> </note> <p>Examples:</p> <ul> <li> <p>To allow the IP address <code>192.0.2.44</code>, specify <code>192.0.2.44</code> or <code>192.0.2.44/32</code>. </p> </li> <li> <p>To allow the IP addresses <code>192.0.2.0</code> to <code>192.0.2.255</code>, specify <code>192.0.2.0/24</code>.</p> </li> </ul> <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>',
        }),
    ).exactOptional(),
    ipv6Cidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.</p> <note> <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to an instance.</p> </note> <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>',
        }),
    ).exactOptional(),
    cidrListAliases: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An alias that defines access for a preconfigured range of IP addresses.</p> <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.',
    required: [],
  })
  .openapi('PortInfo')

const CloseInstancePublicPortsRequestSchema = z
  .object({
    portInfo: PortInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'An object to describe the ports to close for the specified instance.',
        }),
    ),
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance for which to close ports.' }),
    ),
  })
  .openapi({ required: ['portInfo', 'instanceName'], title: 'CloseInstancePublicPortsRequest' })
  .openapi('CloseInstancePublicPortsRequest')

const CopySnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CopySnapshotResult')

const CopySnapshotRequestSchema = z
  .object({
    sourceSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the source manual snapshot to copy.</p> <p>Constraint:</p> <ul> <li> <p>Define this parameter only when copying a manual snapshot as another manual snapshot.</p> </li> </ul>',
        }),
    ).exactOptional(),
    sourceResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the source instance or disk from which the source automatic snapshot was created.</p> <p>Constraint:</p> <ul> <li> <p>Define this parameter only when copying an automatic snapshot as a manual snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    restoreDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date of the source automatic snapshot to copy. Use the <code>get auto snapshots</code> operation to identify the dates of the available automatic snapshots.</p> <p>Constraints:</p> <ul> <li> <p>Must be specified in <code>YYYY-MM-DD</code> format.</p> </li> <li> <p>This parameter cannot be defined together with the <code>use latest restorable auto snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable auto snapshot</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when copying an automatic snapshot as a manual snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    useLatestRestorableAutoSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value to indicate whether to use the latest available automatic snapshot of the specified source instance or disk.</p> <p>Constraints:</p> <ul> <li> <p>This parameter cannot be defined together with the <code>restore date</code> parameter. The <code>use latest restorable auto snapshot</code> and <code>restore date</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when copying an automatic snapshot as a manual snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    targetSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the new manual snapshot to be created as a copy.' }),
    ),
    sourceRegion: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region where the source manual or automatic snapshot is located.',
        }),
    ),
  })
  .openapi({ required: ['targetSnapshotName', 'sourceRegion'], title: 'CopySnapshotRequest' })
  .openapi('CopySnapshotRequest')

const AccessTypeSchema = z.enum(['public', 'private']).openapi('AccessType')

const AccessRulesSchema = z
  .object({
    getObject: AccessTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the anonymous access to all objects in a bucket.</p> <p>The following options can be specified:</p> <ul> <li> <p> <code>public</code> - Sets all objects in the bucket to public (read-only), making them readable by anyone in the world.</p> <p>If the <code>getObject</code> value is set to <code>public</code>, then all objects in the bucket default to public regardless of the <code>allowPublicOverrides</code> value.</p> </li> <li> <p> <code>private</code> - Sets all objects in the bucket to private, making them readable only by you or anyone you give access to.</p> <p>If the <code>getObject</code> value is set to <code>private</code>, and the <code>allowPublicOverrides</code> value is set to <code>true</code>, then all objects in the bucket default to private unless they are configured with a <code>public-read</code> ACL. Individual objects with a <code>public-read</code> ACL are readable by anyone in the world.</p> </li> </ul>',
        }),
    ).exactOptional(),
    allowPublicOverrides: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the <code>getObject</code> option that is currently specified.</p> <p>When this is true, you can use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html">PutObjectAcl</a> Amazon S3 API action to set individual objects to public (read-only) using the <code>public-read</code> ACL, or to private using the <code>private</code> ACL.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('AccessRules')

const BucketNameSchema = z
  .string()
  .regex(/^[a-z0-9][a-z0-9-]{1,52}[a-z0-9]$/)
  .min(3)
  .max(54)
  .openapi('BucketName')

const TagKeySchema = z.string().openapi('TagKey')

const TagValueSchema = z.string().openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The key of the tag.</p> <p>Constraints: Tag keys accept a maximum of 128 letters, numbers, spaces in UTF-8, or the following characters: + - = . _ : / @</p>',
        }),
    ).exactOptional(),
    value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the tag.</p> <p>Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the following characters: + - = . _ : / @</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const PartnerIdListSchema = z.array(NonEmptyStringSchema).max(10).openapi('PartnerIdList')

const ResourceReceivingAccessSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the Lightsail instance.' }),
    ).exactOptional(),
    resourceType: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Lightsail resource type (for example, <code>Instance</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an Amazon Lightsail instance that has access to a Lightsail bucket.',
    required: [],
  })
  .openapi('ResourceReceivingAccess')

const AccessReceiverListSchema = z
  .array(ResourceReceivingAccessSchema)
  .openapi('AccessReceiverList')

const BucketStateSchema = z
  .object({
    code: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state code of the bucket.</p> <p>The following codes are possible:</p> <ul> <li> <p> <code>OK</code> - The bucket is in a running state.</p> </li> <li> <p> <code>Unknown</code> - Creation of the bucket might have timed-out. You might want to delete the bucket and create a new one.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'A message that describes the state of the bucket.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the state of an Amazon Lightsail bucket.', required: [] })
  .openapi('BucketState')

const BucketAccessLogPrefixSchema = z
  .string()
  .regex(/^[\w\/!.*')(-]+$/)
  .min(1)
  .max(100)
  .openapi('BucketAccessLogPrefix')

const BucketAccessLogConfigSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether bucket access logging is enabled for the bucket.',
        }),
    ),
    destination: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the bucket where the access logs are saved. The destination can be a Lightsail bucket in the same account, and in the same Amazon Web Services Region as the source bucket.</p> <note> <p>This parameter is required when enabling the access log for a bucket, and should be omitted when disabling the access log.</p> </note>',
        }),
    ).exactOptional(),
    prefix: BucketAccessLogPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional object prefix for the bucket access log.</p> <p>The prefix is an optional addition to the object key that organizes your access log files in the destination bucket. For example, if you specify a <code>logs/</code> prefix, then each log object will begin with the <code>logs/</code> prefix in its key (for example, <code>logs/2021-11-01-21-32-16-E568B2907131C0C0</code>).</p> <note> <p>This parameter can be optionally specified when enabling the access log for a bucket, and should be omitted when disabling the access log.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['enabled'],
    description:
      '<p>Describes the access log configuration for a bucket in the Amazon Lightsail object storage service.</p> <p>For more information about bucket access logs, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-bucket-access-logs">Logging bucket requests using access logging in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
  })
  .openapi('BucketAccessLogConfig')

const BucketSchema = z
  .object({
    resourceType: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lightsail resource type of the bucket (for example, <code>Bucket</code>).',
        }),
    ).exactOptional(),
    accessRules: AccessRulesSchema.and(
      z.any().openapi({ description: 'An object that describes the access rules of the bucket.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the bucket.' }),
    ).exactOptional(),
    bundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the bundle currently applied to the bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change the bundle of a bucket.</p>',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the distribution was created.' }),
    ).exactOptional(),
    url: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The URL of the bucket.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the location of the bucket, such as the Amazon Web Services Region and Availability Zone.',
        }),
    ).exactOptional(),
    name: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket.' }),
    ).exactOptional(),
    supportCode: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code for a bucket. Include this code in your email to support when you have questions about a Lightsail bucket. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the bucket. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Tags in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.',
        }),
    ).exactOptional(),
    objectVersioning: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether object versioning is enabled for the bucket.</p> <p>The following options can be configured:</p> <ul> <li> <p> <code>Enabled</code> - Object versioning is enabled.</p> </li> <li> <p> <code>Suspended</code> - Object versioning was previously enabled but is currently suspended. Existing object versions are retained.</p> </li> <li> <p> <code>NeverEnabled</code> - Object versioning has never been enabled.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ableToUpdateBundle: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle.</p> <p>You can update a bucket\'s bundle only one time within a monthly Amazon Web Services billing cycle.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change a bucket\'s bundle.</p>',
        }),
    ).exactOptional(),
    readonlyAccessAccounts: PartnerIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that specify the Amazon Web Services account IDs that have read-only access to the bucket.',
        }),
    ).exactOptional(),
    resourcesReceivingAccess: AccessReceiverListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects that describe Lightsail instances that have access to the bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a> action to update the instances that have access to a bucket.</p>',
        }),
    ).exactOptional(),
    state: BucketStateSchema.and(
      z.any().openapi({ description: 'An object that describes the state of the bucket.' }),
    ).exactOptional(),
    accessLogConfig: BucketAccessLogConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the access log configuration for the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon Lightsail bucket.', required: [] })
  .openapi('Bucket')

const CreateBucketResultSchema = z
  .object({
    bucket: BucketSchema.and(
      z.any().openapi({ description: 'An object that describes the bucket that is created.' }),
    ).exactOptional(),
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBucketResult')

const CreateBucketRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the bucket.</p> <p>For more information about bucket names, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/bucket-naming-rules-in-amazon-lightsail">Bucket naming rules in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
        }),
    ),
    bundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the bundle to use for the bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html">GetBucketBundles</a> action to get a list of bundle IDs that you can specify.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change the bundle after the bucket is created.</p>',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tag keys and optional values to add to the bucket during creation.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html">TagResource</a> action to tag the bucket after it\'s created.</p>',
        }),
    ).exactOptional(),
    enableObjectVersioning: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value that indicates whether to enable versioning of objects in the bucket.</p> <p>For more information about versioning, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-managing-bucket-object-versioning">Enabling and suspending object versioning in a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['bucketName', 'bundleId'], title: 'CreateBucketRequest' })
  .openapi('CreateBucketRequest')

const IAMAccessKeyIdSchema = z
  .string()
  .regex(/^[A-Z0-9]{20}$/)
  .length(20)
  .openapi('IAMAccessKeyId')

const StatusTypeSchema = z.enum(['Active', 'Inactive']).openapi('StatusType')

const AccessKeyLastUsedSchema = z
  .object({
    lastUsedDate: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time when the access key was most recently used.</p> <p>This value is null if the access key has not been used.</p>',
        }),
    ).exactOptional(),
    region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services Region where this access key was most recently used.</p> <p>This value is <code>N/A</code> if the access key has not been used.</p>',
        }),
    ).exactOptional(),
    serviceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon Web Services service with which this access key was most recently used.</p> <p>This value is <code>N/A</code> if the access key has not been used.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action.</p> </note>',
    required: [],
  })
  .openapi('AccessKeyLastUsed')

const AccessKeySchema = z
  .object({
    accessKeyId: IAMAccessKeyIdSchema.and(
      z.any().openapi({ description: 'The ID of the access key.' }),
    ).exactOptional(),
    secretAccessKey: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The secret access key used to sign requests.</p> <p>You should store the secret access key in a safe location. We recommend that you delete the access key if the secret access key is compromised.</p>',
        }),
    ).exactOptional(),
    status: StatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the access key.</p> <p>A status of <code>Active</code> means that the key is valid, while <code>Inactive</code> means it is not.</p>',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the access key was created.' }),
    ).exactOptional(),
    lastUsed: AccessKeyLastUsedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the last time the access key was used.</p> <note> <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If the access key has not been used, the <code>region</code> and <code>serviceName</code> values are <code>N/A</code>, and the <code>lastUsedDate</code> value is null.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes an access key for an Amazon Lightsail bucket.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action to create an access key for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>',
    required: [],
  })
  .openapi('AccessKey')

const CreateBucketAccessKeyResultSchema = z
  .object({
    accessKey: AccessKeySchema.and(
      z.any().openapi({ description: 'An object that describes the access key that is created.' }),
    ).exactOptional(),
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBucketAccessKeyResult')

const CreateBucketAccessKeyRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the bucket that the new access key will belong to, and grant access to.',
        }),
    ),
  })
  .openapi({ required: ['bucketName'], title: 'CreateBucketAccessKeyRequest' })
  .openapi('CreateBucketAccessKeyRequest')

const CertificateNameSchema = z.string().openapi('CertificateName')

const DomainNameSchema = z.string().openapi('DomainName')

const CertificateStatusSchema = z
  .enum([
    'PENDING_VALIDATION',
    'ISSUED',
    'INACTIVE',
    'EXPIRED',
    'VALIDATION_TIMED_OUT',
    'REVOKED',
    'FAILED',
  ])
  .openapi('CertificateStatus')

const SerialNumberSchema = z.string().openapi('SerialNumber')

const SubjectAlternativeNameListSchema = z
  .array(DomainNameSchema)
  .openapi('SubjectAlternativeNameList')

const ResourceRecordSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the record.' }),
    ).exactOptional(),
    type: StringSchema.and(
      z.any().openapi({ description: 'The DNS record type.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z.any().openapi({ description: 'The value for the DNS record.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.",
    required: [],
  })
  .openapi('ResourceRecord')

const DnsRecordCreationStateCodeSchema = z
  .enum(['SUCCEEDED', 'STARTED', 'FAILED'])
  .openapi('DnsRecordCreationStateCode')

const DnsRecordCreationStateSchema = z
  .object({
    code: DnsRecordCreationStateCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status code for the automated DNS record creation.</p> <p>Following are the possible values:</p> <ul> <li> <p> <code>SUCCEEDED</code> - The validation records were successfully added to the domain.</p> </li> <li> <p> <code>STARTED</code> - The automatic DNS record creation has started.</p> </li> <li> <p> <code>FAILED</code> - The validation records failed to be added to the domain.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The message that describes the reason for the status code.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the creation state of the canonical name (CNAME) records that are automatically added by Amazon Lightsail to the DNS of a domain to validate domain ownership for an SSL/TLS certificate.</p> <p>When you create an SSL/TLS certificate for a Lightsail resource, you must add a set of CNAME records to the DNS of the domains for the certificate to validate that you own the domains. Lightsail can automatically add the CNAME records to the DNS of the domain if the DNS zone for the domain exists within your Lightsail account. If automatic record addition fails, or if you manage the DNS of your domain using a third-party service, then you must manually add the CNAME records to the DNS of your domain. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/verify-tls-ssl-certificate-using-dns-cname-https">Verify an SSL/TLS certificate in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('DnsRecordCreationState')

const CertificateDomainValidationStatusSchema = z
  .enum(['PENDING_VALIDATION', 'FAILED', 'SUCCESS'])
  .openapi('CertificateDomainValidationStatus')

const DomainValidationRecordSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name of the certificate validation record. For example, <code>example.com</code> or <code>www.example.com</code>.',
        }),
    ).exactOptional(),
    resourceRecord: ResourceRecordSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that describes the DNS records to add to your domain's DNS to validate it for the certificate.",
        }),
    ).exactOptional(),
    dnsRecordCreationState: DnsRecordCreationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership.',
        }),
    ).exactOptional(),
    validationStatus: CertificateDomainValidationStatusSchema.and(
      z.any().openapi({ description: 'The validation status of the record.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the domain name system (DNS) records that you must add to the DNS of your registered domain to validate ownership for an Amazon Lightsail SSL/TLS certificate.',
    required: [],
  })
  .openapi('DomainValidationRecord')

const DomainValidationRecordListSchema = z
  .array(DomainValidationRecordSchema)
  .openapi('DomainValidationRecordList')

const RequestFailureReasonSchema = z.string().openapi('RequestFailureReason')

const InUseResourceCountSchema = z.int().openapi('InUseResourceCount')

const KeyAlgorithmSchema = z.string().openapi('KeyAlgorithm')

const IssuerCASchema = z.string().openapi('IssuerCA')

const EligibleToRenewSchema = z.string().openapi('EligibleToRenew')

const RenewalStatusSchema = z
  .enum(['PendingAutoRenewal', 'PendingValidation', 'Success', 'Failed'])
  .openapi('RenewalStatus')

const RenewalStatusReasonSchema = z.string().openapi('RenewalStatusReason')

const RenewalSummarySchema = z
  .object({
    domainValidationRecords: DomainValidationRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the domain validation records of the certificate.',
        }),
    ).exactOptional(),
    renewalStatus: RenewalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names of the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names of the certificate. You must take action to validate these domain names or the certificate won't be renewed. Check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>",
        }),
    ).exactOptional(),
    renewalStatusReason: RenewalStatusReasonSchema.and(
      z.any().openapi({ description: 'The reason for the renewal status of the certificate.' }),
    ).exactOptional(),
    updatedAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the certificate was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.',
    required: [],
  })
  .openapi('RenewalSummary')

const RevocationReasonSchema = z.string().openapi('RevocationReason')

const CertificateSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
    ).exactOptional(),
    name: CertificateNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the certificate (e.g., <code>my-certificate</code>).',
        }),
    ).exactOptional(),
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain name of the certificate.' }),
    ).exactOptional(),
    status: CertificateStatusSchema.and(
      z.any().openapi({ description: 'The validation status of the certificate.' }),
    ).exactOptional(),
    serialNumber: SerialNumberSchema.and(
      z.any().openapi({ description: 'The serial number of the certificate.' }),
    ).exactOptional(),
    subjectAlternativeNames: SubjectAlternativeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that specify the alternate domains (e.g., <code>example2.com</code>) and subdomains (e.g., <code>blog.example.com</code>) of the certificate.',
        }),
    ).exactOptional(),
    domainValidationRecords: DomainValidationRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the domain validation records of the certificate.',
        }),
    ).exactOptional(),
    requestFailureReason: RequestFailureReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The validation failure reason, if any, of the certificate.</p> <p>The following failure reasons are possible:</p> <ul> <li> <p> <b> <code>NO_AVAILABLE_CONTACTS</code> </b> - This failure applies to email validation, which is not available for Lightsail certificates.</p> </li> <li> <p> <b> <code>ADDITIONAL_VERIFICATION_REQUIRED</code> </b> - Lightsail requires additional information to process this certificate request. This can happen as a fraud-protection measure, such as when the domain ranks within the Alexa top 1000 websites. To provide the required information, use the <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Support Center</a> to contact Amazon Web Services Support.</p> <note> <p>You cannot request a certificate for Amazon-owned domain names such as those ending in amazonaws.com, cloudfront.net, or elasticbeanstalk.com.</p> </note> </li> <li> <p> <b> <code>DOMAIN_NOT_ALLOWED</code> </b> - One or more of the domain names in the certificate request was reported as an unsafe domain by <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a>. To correct the problem, search for your domain name on the <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a> website. If your domain is reported as suspicious, see <a href="https://developers.google.com/web/fundamentals/security/hacked">Google Help for Hacked Websites</a> to learn what you can do.</p> <p>If you believe that the result is a false positive, notify the organization that is reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and cannot remove your domain from a block list itself. After you correct the problem and the VirusTotal registry has been updated, request a new certificate.</p> <p>If you see this error and your domain is not included in the VirusTotal list, visit the <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Support Center</a> and create a case.</p> </li> <li> <p> <b> <code>INVALID_PUBLIC_DOMAIN</code> </b> - One or more of the domain names in the certificate request is not valid. Typically, this is because a domain name in the request is not a valid top-level domain. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request, and ensure that all domain names in the request are for valid top-level domains. For example, you cannot request a certificate for <code>example.invalidpublicdomain</code> because <code>invalidpublicdomain</code> is not a valid top-level domain.</p> </li> <li> <p> <b> <code>OTHER</code> </b> - Typically, this failure occurs when there is a typographical error in one or more of the domain names in the certificate request. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request. </p> </li> </ul>',
        }),
    ).exactOptional(),
    inUseResourceCount: InUseResourceCountSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of Lightsail resources that the certificate is attached to.',
        }),
    ).exactOptional(),
    keyAlgorithm: KeyAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            'The algorithm used to generate the key pair (the public and private key) of the certificate.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the certificate was created.' }),
    ).exactOptional(),
    issuedAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the certificate was issued.' }),
    ).exactOptional(),
    issuerCA: IssuerCASchema.and(
      z.any().openapi({ description: 'The certificate authority that issued the certificate.' }),
    ).exactOptional(),
    notBefore: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the certificate is first valid.' }),
    ).exactOptional(),
    notAfter: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the certificate expires.' }),
    ).exactOptional(),
    eligibleToRenew: EligibleToRenewSchema.and(
      z.any().openapi({ description: 'The renewal eligibility of the certificate.' }),
    ).exactOptional(),
    renewalSummary: RenewalSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the status of the certificate renewal managed by Lightsail.',
        }),
    ).exactOptional(),
    revokedAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the certificate was revoked. This value is present only when the certificate status is <code>REVOKED</code>.',
        }),
    ).exactOptional(),
    revocationReason: RevocationReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason the certificate was revoked. This value is present only when the certificate status is <code>REVOKED</code>.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about your Lightsail certificate. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>',
    required: [],
  })
  .openapi('Certificate')

const CertificateSummarySchema = z
  .object({
    certificateArn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
    ).exactOptional(),
    certificateName: CertificateNameSchema.and(
      z.any().openapi({ description: 'The name of the certificate.' }),
    ).exactOptional(),
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain name of the certificate.' }),
    ).exactOptional(),
    certificateDetail: CertificateSchema.and(
      z.any().openapi({ description: 'An object that describes a certificate in detail.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon Lightsail SSL/TLS certificate.', required: [] })
  .openapi('CertificateSummary')

const CreateCertificateResultSchema = z
  .object({
    certificate: CertificateSummarySchema.and(
      z.any().openapi({ description: 'An object that describes the certificate created.' }),
    ).exactOptional(),
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCertificateResult')

const CreateCertificateRequestSchema = z
  .object({
    certificateName: CertificateNameSchema.and(
      z.any().openapi({ description: 'The name for the certificate.' }),
    ),
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name (e.g., <code>example.com</code>) for the certificate.',
        }),
    ),
    subjectAlternativeNames: SubjectAlternativeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>) and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p> <p>You can specify a maximum of nine alternate domains (in addition to the primary domain name).</p> <p>Wildcard domain entries (e.g., <code>*.example.com</code>) are not supported.</p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the certificate during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['certificateName', 'domainName'], title: 'CreateCertificateRequest' })
  .openapi('CreateCertificateRequest')

const CreateCloudFormationStackResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCloudFormationStackResult')

const PortInfoSourceTypeSchema = z
  .enum(['DEFAULT', 'INSTANCE', 'NONE', 'CLOSED'])
  .openapi('PortInfoSourceType')

const InstanceEntrySchema = z
  .object({
    sourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the export snapshot record, which contains the exported Lightsail instance snapshot that will be used as the source of the new Amazon EC2 instance.</p> <p>Use the <code>get export snapshot records</code> operation to get a list of export snapshot records that you can use to create a CloudFormation stack.</p>',
        }),
    ),
    instanceType: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance type (e.g., <code>t2.micro</code>) to use for the new Amazon EC2 instance.',
        }),
    ),
    portInfoSource: PortInfoSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port configuration to use for the new Amazon EC2 instance.</p> <p>The following configuration options are available:</p> <ul> <li> <p> <code>DEFAULT</code> - Use the default firewall settings from the Lightsail instance blueprint. If this is specified, then IPv4 and IPv6 will be configured for the new instance that is created in Amazon EC2.</p> </li> <li> <p> <code>INSTANCE</code> - Use the configured firewall settings from the source Lightsail instance. If this is specified, the new instance that is created in Amazon EC2 will be configured to match the configuration of the source Lightsail instance. For example, if the source instance is configured for dual-stack (IPv4 and IPv6), then IPv4 and IPv6 will be configured for the new instance that is created in Amazon EC2. If the source instance is configured for IPv4 only, then only IPv4 will be configured for the new instance that is created in Amazon EC2.</p> </li> <li> <p> <code>NONE</code> - Use the default Amazon EC2 security group. If this is specified, then only IPv4 will be configured for the new instance that is created in Amazon EC2.</p> </li> <li> <p> <code>CLOSED</code> - All ports closed. If this is specified, then only IPv4 will be configured for the new instance that is created in Amazon EC2.</p> </li> </ul> <note> <p>If you configured <code>lightsail-connect</code> as a <code>cidrListAliases</code> on your instance, or if you chose to allow the Lightsail browser-based SSH or RDP clients to connect to your instance, that configuration is not carried over to your new Amazon EC2 instance.</p> </note>',
        }),
    ),
    userData: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A launch script you can create that configures a server with additional user data. For example, you might want to run <code>apt-get -y update</code>.</p> <note> <p>Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use <code>apt-get</code>, and FreeBSD uses <code>pkg</code>.</p> </note>',
        }),
    ).exactOptional(),
    availabilityZone: StringSchema.and(
      z.any().openapi({ description: 'The Availability Zone for the new Amazon EC2 instance.' }),
    ),
  })
  .openapi({
    required: ['sourceName', 'instanceType', 'portInfoSource', 'availabilityZone'],
    description:
      'Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.',
  })
  .openapi('InstanceEntry')

const InstanceEntryListSchema = z.array(InstanceEntrySchema).openapi('InstanceEntryList')

const CreateCloudFormationStackRequestSchema = z
  .object({
    instances: InstanceEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of parameters that will be used to create the new Amazon EC2 instance. You can only pass one instance entry at a time in this array. You will get an invalid parameter error if you pass more than one instance entry in this array.',
        }),
    ),
  })
  .openapi({ required: ['instances'], title: 'CreateCloudFormationStackRequest' })
  .openapi('CreateCloudFormationStackRequest')

const CreateContactMethodResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContactMethodResult')

const ContactProtocolSchema = z.enum(['Email', 'SMS']).openapi('ContactProtocol')

const StringMax256Schema = z.string().min(1).max(256).openapi('StringMax256')

const CreateContactMethodRequestSchema = z
  .object({
    protocol: ContactProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol of the contact method, such as <code>Email</code> or <code>SMS</code> (text messaging).</p> <p>The <code>SMS</code> protocol is supported only in the following Amazon Web Services Regions.</p> <ul> <li> <p>US East (N. Virginia) (<code>us-east-1</code>)</p> </li> <li> <p>US West (Oregon) (<code>us-west-2</code>)</p> </li> <li> <p>Europe (Ireland) (<code>eu-west-1</code>)</p> </li> <li> <p>Asia Pacific (Tokyo) (<code>ap-northeast-1</code>)</p> </li> <li> <p>Asia Pacific (Singapore) (<code>ap-southeast-1</code>)</p> </li> <li> <p>Asia Pacific (Sydney) (<code>ap-southeast-2</code>)</p> </li> </ul> <p>For a list of countries/regions where SMS text messages can be sent, and the latest Amazon Web Services Regions where SMS text messaging is supported, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html">Supported Regions and Countries</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>For more information about notifications in Amazon Lightsail, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>',
        }),
    ),
    contactEndpoint: StringMax256Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The destination of the contact method, such as an email address or a mobile phone number.</p> <p>Use the E.164 format when specifying a mobile phone number. E.164 is a standard for the phone number structure used for international telecommunication. Phone numbers that follow this format can have a maximum of 15 digits, and they are prefixed with the plus character (+) and the country code. For example, a U.S. phone number in E.164 format would be specified as +1XXX5550100. For more information, see <a href="https://en.wikipedia.org/wiki/E.164">E.164</a> on <i>Wikipedia</i>.</p>',
        }),
    ),
  })
  .openapi({ required: ['protocol', 'contactEndpoint'], title: 'CreateContactMethodRequest' })
  .openapi('CreateContactMethodRequest')

const ContainerServiceNameSchema = z
  .string()
  .regex(/^[a-z0-9]{1,2}|[a-z0-9][a-z0-9-]+[a-z0-9]$/)
  .min(1)
  .max(63)
  .openapi('ContainerServiceName')

const ContainerServicePowerNameSchema = z
  .enum(['nano', 'micro', 'small', 'medium', 'large', 'xlarge'])
  .openapi('ContainerServicePowerName')

const ContainerServiceStateSchema = z
  .enum(['PENDING', 'READY', 'RUNNING', 'UPDATING', 'DELETING', 'DISABLED', 'DEPLOYING'])
  .openapi('ContainerServiceState')

const ContainerServiceStateDetailCodeSchema = z
  .enum([
    'CREATING_SYSTEM_RESOURCES',
    'CREATING_NETWORK_INFRASTRUCTURE',
    'PROVISIONING_CERTIFICATE',
    'PROVISIONING_SERVICE',
    'CREATING_DEPLOYMENT',
    'EVALUATING_HEALTH_CHECK',
    'ACTIVATING_DEPLOYMENT',
    'CERTIFICATE_LIMIT_EXCEEDED',
    'UNKNOWN_ERROR',
  ])
  .openapi('ContainerServiceStateDetailCode')

const ContainerServiceStateDetailSchema = z
  .object({
    code: ContainerServiceStateDetailCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state code of the container service.</p> <p>The following state codes are possible:</p> <ul> <li> <p>The following state codes are possible if your container service is in a <code>DEPLOYING</code> or <code>UPDATING</code> state:</p> <ul> <li> <p> <code>CREATING_SYSTEM_RESOURCES</code> - The system resources for your container service are being created.</p> </li> <li> <p> <code>CREATING_NETWORK_INFRASTRUCTURE</code> - The network infrastructure for your container service are being created.</p> </li> <li> <p> <code>PROVISIONING_CERTIFICATE</code> - The SSL/TLS certificate for your container service is being created.</p> </li> <li> <p> <code>PROVISIONING_SERVICE</code> - Your container service is being provisioned.</p> </li> <li> <p> <code>CREATING_DEPLOYMENT</code> - Your deployment is being created on your container service.</p> </li> <li> <p> <code>EVALUATING_HEALTH_CHECK</code> - The health of your deployment is being evaluated.</p> </li> <li> <p> <code>ACTIVATING_DEPLOYMENT</code> - Your deployment is being activated.</p> </li> </ul> </li> <li> <p>The following state codes are possible if your container service is in a <code>PENDING</code> state:</p> <ul> <li> <p> <code>CERTIFICATE_LIMIT_EXCEEDED</code> - The SSL/TLS certificate required for your container service exceeds the maximum number of certificates allowed for your account.</p> </li> <li> <p> <code>UNKNOWN_ERROR</code> - An error was experienced when your container service was being created.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A message that provides more information for the state code.</p> <note> <p>The state detail is populated only when a container service is in a <code>PENDING</code>, <code>DEPLOYING</code>, or <code>UPDATING</code> state.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the current state of a container service.', required: [] })
  .openapi('ContainerServiceStateDetail')

const ContainerServiceScaleSchema = z.int().min(1).max(20).openapi('ContainerServiceScale')

const IntegerSchema = z.int().openapi('Integer')

const ContainerServiceDeploymentStateSchema = z
  .enum(['ACTIVATING', 'ACTIVE', 'INACTIVE', 'FAILED'])
  .openapi('ContainerServiceDeploymentState')

const EnvironmentSchema = z.record(z.string(), StringSchema).openapi('Environment')

const ContainerServiceProtocolSchema = z
  .enum(['HTTP', 'HTTPS', 'TCP', 'UDP'])
  .openapi('ContainerServiceProtocol')

const PortMapSchema = z.record(z.string(), ContainerServiceProtocolSchema).openapi('PortMap')

const ContainerSchema = z
  .object({
    image: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the image used for the container.</p> <p>Container images sourced from your Lightsail container service, that are registered and stored on your service, start with a colon (<code>:</code>). For example, if your container service name is <code>container-service-1</code>, the container image label is <code>mystaticsite</code>, and you want to use the third (<code>3</code>) version of the registered container image, then you should specify <code>:container-service-1.mystaticsite.3</code>. To use the latest version of a container image, specify <code>latest</code> instead of a version number (for example, <code>:container-service-1.mystaticsite.latest</code>). Lightsail will automatically use the highest numbered version of the registered container image.</p> <p>Container images sourced from a public registry like Docker Hub don't start with a colon. For example, <code>nginx:latest</code> or <code>nginx</code>.</p>",
        }),
    ).exactOptional(),
    command: StringListSchema.and(
      z.any().openapi({ description: 'The launch command for the container.' }),
    ).exactOptional(),
    environment: EnvironmentSchema.and(
      z.any().openapi({ description: 'The environment variables of the container.' }),
    ).exactOptional(),
    ports: PortMapSchema.and(
      z.any().openapi({ description: 'The open firewall ports of the container.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.',
    required: [],
  })
  .openapi('Container')

const ContainerMapSchema = z.record(z.string(), ContainerSchema).openapi('ContainerMap')

const ContainerServiceHealthCheckConfigSchema = z
  .object({
    healthyThreshold: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks successes required before moving the container to the <code>Healthy</code> state. The default value is <code>2</code>.',
        }),
    ).exactOptional(),
    unhealthyThreshold: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health check failures required before moving the container to the <code>Unhealthy</code> state. The default value is <code>2</code>.',
        }),
    ).exactOptional(),
    timeoutSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. The default value is <code>2</code>.',
        }),
    ).exactOptional(),
    intervalSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. The default value is <code>5</code>.',
        }),
    ).exactOptional(),
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path on the container on which to perform the health check. The default value is <code>/</code>.',
        }),
    ).exactOptional(),
    successCodes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP codes to use when checking for a successful response from a container. You can specify values between <code>200</code> and <code>499</code>. You can specify multiple values (for example, <code>200,202</code>) or a range of values (for example, <code>200-299</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the health check configuration of an Amazon Lightsail container service.',
    required: [],
  })
  .openapi('ContainerServiceHealthCheckConfig')

const ContainerServiceEndpointSchema = z
  .object({
    containerName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container entry of the deployment that the endpoint configuration applies to.',
        }),
    ).exactOptional(),
    containerPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The port of the specified container to which traffic is forwarded to.',
        }),
    ).exactOptional(),
    healthCheck: ContainerServiceHealthCheckConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the health check configuration of the container.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.',
    required: [],
  })
  .openapi('ContainerServiceEndpoint')

const ContainerServiceDeploymentSchema = z
  .object({
    version: IntegerSchema.and(
      z.any().openapi({ description: 'The version number of the deployment.' }),
    ).exactOptional(),
    state: ContainerServiceDeploymentStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the deployment.</p> <p>A deployment can be in one of the following states:</p> <ul> <li> <p> <code>Activating</code> - The deployment is being created.</p> </li> <li> <p> <code>Active</code> - The deployment was successfully created, and it's currently running on the container service. The container service can have only one deployment in an active state at a time.</p> </li> <li> <p> <code>Inactive</code> - The deployment was previously successfully created, but it is not currently running on the container service.</p> </li> <li> <p> <code>Failed</code> - The deployment failed. Use the <code>GetContainerLog</code> action to view the log events for the containers in the deployment to try to determine the reason for the failure.</p> </li> </ul>",
        }),
    ).exactOptional(),
    containers: ContainerMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the configuration for the containers of the deployment.',
        }),
    ).exactOptional(),
    publicEndpoint: ContainerServiceEndpointSchema.and(
      z.any().openapi({ description: 'An object that describes the endpoint of the deployment.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the deployment was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>',
    required: [],
  })
  .openapi('ContainerServiceDeployment')

const ContainerServicePublicDomainsListSchema = z
  .array(StringSchema)
  .openapi('ContainerServicePublicDomainsList')

const ContainerServicePublicDomainsSchema = z
  .record(z.string(), ContainerServicePublicDomainsListSchema)
  .openapi('ContainerServicePublicDomains')

const ContainerServiceECRImagePullerRoleSchema = z
  .object({
    isActive: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value that indicates whether the role is activated.' }),
    ).exactOptional(),
    principalArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the role, if it is activated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the activation status of the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('ContainerServiceECRImagePullerRole')

const PrivateRegistryAccessSchema = z
  .object({
    ecrImagePullerRole: ContainerServiceECRImagePullerRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the activation status of the role that you can use to grant a Lightsail container service access to Amazon ECR private repositories. If the role is activated, the Amazon Resource Name (ARN) of the role is also listed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the configuration for an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('PrivateRegistryAccess')

const ContainerServiceSchema = z
  .object({
    containerServiceName: ContainerServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the container service.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the container service.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the container service was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the location of the container service, such as the Amazon Web Services Region and Availability Zone.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lightsail resource type of the container service (i.e., <code>ContainerService</code>).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    power: ContainerServicePowerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The power specification of the container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>',
        }),
    ).exactOptional(),
    powerId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the power of the container service.' }),
    ).exactOptional(),
    state: ContainerServiceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the container service.</p> <p>The following container service states are possible:</p> <ul> <li> <p> <code>PENDING</code> - The container service is being created.</p> </li> <li> <p> <code>READY</code> - The container service is running but it does not have an active container deployment.</p> </li> <li> <p> <code>DEPLOYING</code> - The container service is launching a container deployment.</p> </li> <li> <p> <code>RUNNING</code> - The container service is running and it has an active container deployment.</p> </li> <li> <p> <code>UPDATING</code> - The container service capacity or its custom domains are being updated.</p> </li> <li> <p> <code>DELETING</code> - The container service is being deleted.</p> </li> <li> <p> <code>DISABLED</code> - The container service is disabled, and its active deployment and containers, if any, are shut down.</p> </li> </ul>',
        }),
    ).exactOptional(),
    stateDetail: ContainerServiceStateDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the current state of the container service.</p> <note> <p>The state detail is populated only when a container service is in a <code>PENDING</code>, <code>DEPLOYING</code>, or <code>UPDATING</code> state.</p> </note>',
        }),
    ).exactOptional(),
    scale: ContainerServiceScaleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scale specification of the container service.</p> <p>The scale specifies the allocated compute nodes of the container service.</p>',
        }),
    ).exactOptional(),
    currentDeployment: ContainerServiceDeploymentSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the current container deployment of the container service.',
        }),
    ).exactOptional(),
    nextDeployment: ContainerServiceDeploymentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the next deployment of the container service.</p> <p>This value is <code>null</code> when there is no deployment in a <code>pending</code> state.</p>',
        }),
    ).exactOptional(),
    isDisabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating whether the container service is disabled.',
        }),
    ).exactOptional(),
    principalArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The principal ARN of the container service.</p> <p>The principal ARN can be used to create a trust relationship between your standard Amazon Web Services account and your Lightsail container service. This allows you to give your service permission to access resources in your standard Amazon Web Services account.</p>',
        }),
    ).exactOptional(),
    privateDomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The private domain name of the container service.</p> <p>The private domain name is accessible only by other resources within the default virtual private cloud (VPC) of your Lightsail account.</p>',
        }),
    ).exactOptional(),
    publicDomainNames: ContainerServicePublicDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The public domain name of the container service, such as <code>example.com</code> and <code>www.example.com</code>.</p> <p>You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container configured as the public endpoint of your container service.</p> <p>If you don't specify public domain names, then you can use the default domain of the container service.</p> <important> <p>You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the <code>CreateCertificate</code> action to create a certificate for the public domain names you want to use with your container service.</p> </important> <p>See <code>CreateContainerService</code> or <code>UpdateContainerService</code> for information about how to specify public domain names for your Lightsail container service.</p>",
        }),
    ).exactOptional(),
    url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The publicly accessible URL of the container service.</p> <p>If no public endpoint is specified in the <code>currentDeployment</code>, this URL returns a 404 response.</p>',
        }),
    ).exactOptional(),
    privateRegistryAccess: PrivateRegistryAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon Lightsail container service.', required: [] })
  .openapi('ContainerService')

const CreateContainerServiceResultSchema = z
  .object({
    containerService: ContainerServiceSchema.and(
      z.any().openapi({ description: 'An object that describes a container service.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContainerServiceResult')

const EndpointRequestSchema = z
  .object({
    containerName: StringSchema.and(
      z.any().openapi({ description: 'The name of the container for the endpoint.' }),
    ),
    containerPort: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The port of the container to which traffic is forwarded to.' }),
    ),
    healthCheck: ContainerServiceHealthCheckConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the health check configuration of the container.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['containerName', 'containerPort'],
    description:
      'Describes the settings of a public endpoint for an Amazon Lightsail container service.',
  })
  .openapi('EndpointRequest')

const ContainerServiceDeploymentRequestSchema = z
  .object({
    containers: ContainerMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the configuration for the containers of the deployment.',
        }),
    ).exactOptional(),
    publicEndpoint: EndpointRequestSchema.and(
      z.any().openapi({ description: 'An object that describes the endpoint of the deployment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>',
    required: [],
  })
  .openapi('ContainerServiceDeploymentRequest')

const ContainerServiceECRImagePullerRoleRequestSchema = z
  .object({
    isActive: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value that indicates whether to activate the role.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('ContainerServiceECRImagePullerRoleRequest')

const PrivateRegistryAccessRequestSchema = z
  .object({
    ecrImagePullerRole: ContainerServiceECRImagePullerRoleRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('PrivateRegistryAccessRequest')

const CreateContainerServiceRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name for the container service.</p> <p>The name that you specify for your container service will make up part of its default domain. The default domain of a container service is typically <code>https://&lt;ServiceName&gt;.&lt;RandomGUID&gt;.&lt;AWSRegion&gt;.cs.amazonlightsail.com</code>. If the name of your container service is <code>container-service-1</code>, and it's located in the US East (Ohio) Amazon Web Services Region (<code>us-east-2</code>), then the domain for your container service will be like the following example: <code>https://container-service-1.ur4EXAMPLE2uq.us-east-2.cs.amazonlightsail.com</code> </p> <p>The following are the requirements for container service names:</p> <ul> <li> <p>Must be unique within each Amazon Web Services Region in your Lightsail account.</p> </li> <li> <p>Must contain 1 to 63 characters.</p> </li> <li> <p>Must contain only alphanumeric characters and hyphens.</p> </li> <li> <p>A hyphen (-) can separate words but cannot be at the start or end of the name.</p> </li> </ul>",
        }),
    ),
    power: ContainerServicePowerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The power specification for the container service.</p> <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the container service. The <code>power</code> and <code>scale</code> of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of the service.</p> <p>Use the <code>GetContainerServicePowers</code> action to get a list of power options that you can specify using this parameter, and their base monthly cost.</p>',
        }),
    ),
    scale: ContainerServiceScaleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scale specification for the container service.</p> <p>The scale specifies the allocated compute nodes of the container service. The <code>power</code> and <code>scale</code> of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of the service.</p>',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tag keys and optional values to add to the container service during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it\'s created.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    publicDomainNames: ContainerServicePublicDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The public domain names to use with the container service, such as <code>example.com</code> and <code>www.example.com</code>.</p> <p>You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container configured as the public endpoint of your container service.</p> <p>If you don't specify public domain names, then you can use the default domain of the container service.</p> <important> <p>You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the <code>CreateCertificate</code> action to create a certificate for the public domain names you want to use with your container service.</p> </important> <p>You can specify public domain names using a string to array map as shown in the example later on this page.</p>",
        }),
    ).exactOptional(),
    deployment: ContainerServiceDeploymentRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes a deployment for the container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p>',
        }),
    ).exactOptional(),
    privateRegistryAccess: PrivateRegistryAccessRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['serviceName', 'power', 'scale'], title: 'CreateContainerServiceRequest' })
  .openapi('CreateContainerServiceRequest')

const CreateContainerServiceDeploymentResultSchema = z
  .object({
    containerService: ContainerServiceSchema.and(
      z.any().openapi({ description: 'An object that describes a container service.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContainerServiceDeploymentResult')

const CreateContainerServiceDeploymentRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container service for which to create the deployment.',
        }),
    ),
    containers: ContainerMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the settings of the containers that will be launched on the container service.',
        }),
    ).exactOptional(),
    publicEndpoint: EndpointRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the settings of the public endpoint for the container service.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['serviceName'], title: 'CreateContainerServiceDeploymentRequest' })
  .openapi('CreateContainerServiceDeploymentRequest')

const ContainerServiceRegistryLoginSchema = z
  .object({
    username: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The container service registry username to use to push container images to the container image registry of a Lightsail account.',
        }),
    ).exactOptional(),
    password: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The container service registry password to use to push container images to the container image registry of a Lightsail account',
        }),
    ).exactOptional(),
    expiresAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The timestamp of when the container image registry sign-in credentials expire.</p> <p>The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials using the <code>CreateContainerServiceRegistryLogin</code> action.</p>',
        }),
    ).exactOptional(),
    registry: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address to use to push container images to the container image registry of a Lightsail account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the sign-in credentials for the container image registry of an Amazon Lightsail account.',
    required: [],
  })
  .openapi('ContainerServiceRegistryLogin')

const CreateContainerServiceRegistryLoginResultSchema = z
  .object({
    registryLogin: ContainerServiceRegistryLoginSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the log in information for the container service registry of your Lightsail account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContainerServiceRegistryLoginResult')

const CreateContainerServiceRegistryLoginRequestSchema = z
  .object({})
  .openapi({ title: 'CreateContainerServiceRegistryLoginRequest' })
  .openapi('CreateContainerServiceRegistryLoginRequest')

const CreateDiskResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDiskResult')

const AddOnRequestSchema: z.ZodType<AddOnRequestType> = z
  .lazy(() =>
    z
      .object({
        addOnType: AddOnTypeSchema.and(z.any().openapi({ description: 'The add-on type.' })),
        autoSnapshotAddOnRequest: AutoSnapshotAddOnRequestSchema.and(
          z
            .any()
            .openapi({
              description:
                'An object that represents additional parameters when enabling or modifying the automatic snapshot add-on.',
            }),
        ).exactOptional(),
        stopInstanceOnIdleRequest: StopInstanceOnIdleRequestSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An object that represents additional parameters when enabling or modifying the <code>StopInstanceOnIdle</code> add-on.</p> <important> <p>This object only applies to Lightsail for Research resources.</p> </important>',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['addOnType'],
        description:
          '<p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>',
      }),
  )
  .openapi('AddOnRequest')

const AddOnRequestListSchema = z.array(AddOnRequestSchema).openapi('AddOnRequestList')

const CreateDiskRequestSchema = z
  .object({
    diskName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The unique Lightsail disk name (e.g., <code>my-disk</code>).' }),
    ),
    availabilityZone: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>). Use the same Availability Zone as the Lightsail instance to which you want to attach the disk.</p> <p>Use the <code>get regions</code> operation to list the Availability Zones where Lightsail is currently available.</p>',
        }),
    ),
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk in GB (e.g., <code>32</code>).' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
    addOns: AddOnRequestListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that represent the add-ons to enable for the new disk.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['diskName', 'availabilityZone', 'sizeInGb'], title: 'CreateDiskRequest' })
  .openapi('CreateDiskRequest')

const CreateDiskFromSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDiskFromSnapshotResult')

const CreateDiskFromSnapshotRequestSchema = z
  .object({
    diskName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The unique Lightsail disk name (e.g., <code>my-disk</code>).' }),
    ),
    diskSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the disk snapshot (e.g., <code>my-snapshot</code>) from which to create the new storage disk.</p> <p>Constraint:</p> <ul> <li> <p>This parameter cannot be defined together with the <code>source disk name</code> parameter. The <code>disk snapshot name</code> and <code>source disk name</code> parameters are mutually exclusive.</p> </li> </ul>',
        }),
    ).exactOptional(),
    availabilityZone: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>). Choose the same Availability Zone as the Lightsail instance where you want to create the disk.</p> <p>Use the GetRegions operation to list the Availability Zones where Lightsail is currently available.</p>',
        }),
    ),
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk in GB (e.g., <code>32</code>).' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
    addOns: AddOnRequestListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that represent the add-ons to enable for the new disk.',
        }),
    ).exactOptional(),
    sourceDiskName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the source disk from which the source automatic snapshot was created.</p> <p>Constraints:</p> <ul> <li> <p>This parameter cannot be defined together with the <code>disk snapshot name</code> parameter. The <code>source disk name</code> and <code>disk snapshot name</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when creating a new disk from an automatic snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    restoreDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date of the automatic snapshot to use for the new disk. Use the <code>get auto snapshots</code> operation to identify the dates of the available automatic snapshots.</p> <p>Constraints:</p> <ul> <li> <p>Must be specified in <code>YYYY-MM-DD</code> format.</p> </li> <li> <p>This parameter cannot be defined together with the <code>use latest restorable auto snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable auto snapshot</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when creating a new disk from an automatic snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    useLatestRestorableAutoSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p> <p>Constraints:</p> <ul> <li> <p>This parameter cannot be defined together with the <code>restore date</code> parameter. The <code>use latest restorable auto snapshot</code> and <code>restore date</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when creating a new disk from an automatic snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['diskName', 'availabilityZone', 'sizeInGb'],
    title: 'CreateDiskFromSnapshotRequest',
  })
  .openapi('CreateDiskFromSnapshotRequest')

const CreateDiskSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDiskSnapshotResult')

const CreateDiskSnapshotRequestSchema = z
  .object({
    diskName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique name of the source disk (e.g., <code>Disk-Virginia-1</code>).</p> <note> <p>This parameter cannot be defined together with the <code>instance name</code> parameter. The <code>disk name</code> and <code>instance name</code> parameters are mutually exclusive.</p> </note>',
        }),
    ).exactOptional(),
    diskSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the destination disk snapshot (e.g., <code>my-disk-snapshot</code>) based on the source disk.',
        }),
    ),
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The unique name of the source instance (e.g., <code>Amazon_Linux-512MB-Virginia-1</code>). When this is defined, a snapshot of the instance's system volume is created.</p> <note> <p>This parameter cannot be defined together with the <code>disk name</code> parameter. The <code>instance name</code> and <code>disk name</code> parameters are mutually exclusive.</p> </note>",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['diskSnapshotName'], title: 'CreateDiskSnapshotRequest' })
  .openapi('CreateDiskSnapshotRequest')

const OriginProtocolPolicyEnumSchema = z
  .enum(['http-only', 'https-only'])
  .openapi('OriginProtocolPolicyEnum')

const OriginSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the origin resource.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource type of the origin resource (e.g., <i>Instance</i>).',
        }),
    ).exactOptional(),
    regionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The AWS Region name of the origin resource.' }),
    ).exactOptional(),
    protocolPolicy: OriginProtocolPolicyEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>',
    required: [],
  })
  .openapi('Origin')

const BehaviorEnumSchema = z.enum(['dont-cache', 'cache']).openapi('BehaviorEnum')

const CacheBehaviorSchema = z
  .object({
    behavior: BehaviorEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The cache behavior of the distribution.</p> <p>The following cache behaviors can be specified:</p> <ul> <li> <p> <b> <code>cache</code> </b> - This option is best for static sites. When specified, your distribution caches and serves your entire website as static content. This behavior is ideal for websites with static content that doesn't change depending on who views it, or for websites that don't use cookies, headers, or query strings to personalize content.</p> </li> <li> <p> <b> <code>dont-cache</code> </b> - This option is best for sites that serve a mix of static and dynamic content. When specified, your distribution caches and serve only the content that is specified in the distribution's <code>CacheBehaviorPerPath</code> parameter. This behavior is ideal for websites or web applications that use cookies, headers, and query strings to personalize content for individual users.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.',
    required: [],
  })
  .openapi('CacheBehavior')

const LongSchema = z.int().openapi('Long')

const ForwardValuesSchema = z.enum(['none', 'allow-list', 'all']).openapi('ForwardValues')

const CookieObjectSchema = z
  .object({
    option: ForwardValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies which cookies to forward to the distribution's origin for a cache behavior: <code>all</code>, <code>none</code>, or <code>allow-list</code> to forward only the cookies specified in the <code>cookiesAllowList</code> parameter.",
        }),
    ).exactOptional(),
    cookiesAllowList: StringListSchema.and(
      z
        .any()
        .openapi({ description: "The specific cookies to forward to your distribution's origin." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p>',
    required: [],
  })
  .openapi('CookieObject')

const HeaderEnumSchema = z
  .enum([
    'Accept',
    'Accept-Charset',
    'Accept-Datetime',
    'Accept-Encoding',
    'Accept-Language',
    'Authorization',
    'CloudFront-Forwarded-Proto',
    'CloudFront-Is-Desktop-Viewer',
    'CloudFront-Is-Mobile-Viewer',
    'CloudFront-Is-SmartTV-Viewer',
    'CloudFront-Is-Tablet-Viewer',
    'CloudFront-Viewer-Country',
    'Host',
    'Origin',
    'Referer',
  ])
  .openapi('HeaderEnum')

const HeaderForwardListSchema = z.array(HeaderEnumSchema).openapi('HeaderForwardList')

const HeaderObjectSchema = z
  .object({
    option: ForwardValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The headers that you want your distribution to forward to your origin and base caching on.</p> <p>You can configure your distribution to do one of the following:</p> <ul> <li> <p> <b> <code>all</code> </b> - Forward all headers to your origin.</p> </li> <li> <p> <b> <code>none</code> </b> - Forward only the default headers.</p> </li> <li> <p> <b> <code>allow-list</code> </b> - Forward only the headers you specify using the <code>headersAllowList</code> parameter.</p> </li> </ul>',
        }),
    ).exactOptional(),
    headersAllowList: HeaderForwardListSchema.and(
      z
        .any()
        .openapi({ description: "The specific headers to forward to your distribution's origin." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p>',
    required: [],
  })
  .openapi('HeaderObject')

const QueryStringObjectSchema = z
  .object({
    option: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the distribution forwards and caches based on query strings.',
        }),
    ).exactOptional(),
    queryStringsAllowList: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The specific query strings that the distribution forwards to the origin.</p> <p>Your distribution will cache content based on the specified query strings.</p> <p>If the <code>option</code> parameter is true, then your distribution forwards all query strings, regardless of what you specify using the <code>queryStringsAllowList</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p>',
    required: [],
  })
  .openapi('QueryStringObject')

const CacheSettingsSchema = z
  .object({
    defaultTTL: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.</p> <note> <p>The value specified applies only when the origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects.</p> </note>",
        }),
    ).exactOptional(),
    minimumTTL: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.</p> <p>A value of <code>0</code> must be specified for <code>minimumTTL</code> if the distribution is configured to forward all headers to the origin.</p>",
        }),
    ).exactOptional(),
    maximumTTL: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.</p> <p>The value specified applies only when the origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects.</p>",
        }),
    ).exactOptional(),
    allowedHTTPMethods: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The HTTP methods that are processed and forwarded to the distribution's origin.</p> <p>You can specify the following options:</p> <ul> <li> <p> <code>GET,HEAD</code> - The distribution forwards the <code>GET</code> and <code>HEAD</code> methods.</p> </li> <li> <p> <code>GET,HEAD,OPTIONS</code> - The distribution forwards the <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> methods.</p> </li> <li> <p> <code>GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE</code> - The distribution forwards the <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PUT</code>, <code>PATCH</code>, <code>POST</code>, and <code>DELETE</code> methods.</p> </li> </ul> <p>If you specify the third option, you might need to restrict access to your distribution's origin so users can't perform operations that you don't want them to. For example, you might not want users to have permission to delete objects from your origin.</p>",
        }),
    ).exactOptional(),
    cachedHTTPMethods: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The HTTP method responses that are cached by your distribution.</p> <p>You can specify the following options:</p> <ul> <li> <p> <code>GET,HEAD</code> - The distribution caches responses to the <code>GET</code> and <code>HEAD</code> methods.</p> </li> <li> <p> <code>GET,HEAD,OPTIONS</code> - The distribution caches responses to the <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> methods.</p> </li> </ul>',
        }),
    ).exactOptional(),
    forwardedCookies: CookieObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded.',
        }),
    ).exactOptional(),
    forwardedHeaders: HeaderObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded.',
        }),
    ).exactOptional(),
    forwardedQueryStrings: QueryStringObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>",
    required: [],
  })
  .openapi('CacheSettings')

const CacheBehaviorPerPathSchema = z
  .object({
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (<code>path/to/assets/*</code>), and file types (<code>*.html, *jpg, *js</code>). Directories and file paths are case-sensitive.</p> <p>Examples:</p> <ul> <li> <p>Specify the following to cache all files in the document root of an Apache web server running on a Lightsail instance.</p> <p> <code>var/www/html/</code> </p> </li> <li> <p>Specify the following file to cache only the index page in the document root of an Apache web server.</p> <p> <code>var/www/html/index.html</code> </p> </li> <li> <p>Specify the following to cache only the .html files in the document root of an Apache web server.</p> <p> <code>var/www/html/*.html</code> </p> </li> <li> <p>Specify the following to cache only the .jpg, .png, and .gif files in the images sub-directory of the document root of an Apache web server.</p> <p> <code>var/www/html/images/*.jpg</code> </p> <p> <code>var/www/html/images/*.png</code> </p> <p> <code>var/www/html/images/*.gif</code> </p> <p>Specify the following to cache all files in the images sub-directory of the document root of an Apache web server.</p> <p> <code>var/www/html/images/</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    behavior: BehaviorEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The cache behavior for the specified path.</p> <p>You can specify one of the following per-path cache behaviors:</p> <ul> <li> <p> <b> <code>cache</code> </b> - This behavior caches the specified path. </p> </li> <li> <p> <b> <code>dont-cache</code> </b> - This behavior doesn't cache the specified path. </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A per-path cache behavior is used to override, or add an exception to, the default cache behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will cache. Alternately, if the distribution's <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will not cache.</p>",
    required: [],
  })
  .openapi('CacheBehaviorPerPath')

const CacheBehaviorListSchema = z.array(CacheBehaviorPerPathSchema).openapi('CacheBehaviorList')

const IpAddressTypeSchema = z.enum(['dualstack', 'ipv4']).openapi('IpAddressType')

const LightsailDistributionSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the distribution.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the distribution.' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about your Lightsail distribution. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the distribution was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the location of the distribution, such as the Amazon Web Services Region and Availability Zone.</p> <note> <p>Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </note>',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The Lightsail resource type (e.g., <code>Distribution</code>).' }),
    ).exactOptional(),
    alternativeDomainNames: StringListSchema.and(
      z.any().openapi({ description: 'The alternate domain names of the distribution.' }),
    ).exactOptional(),
    status: StringSchema.and(
      z.any().openapi({ description: 'The status of the distribution.' }),
    ).exactOptional(),
    isEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the distribution is enabled.' }),
    ).exactOptional(),
    domainName: StringSchema.and(
      z.any().openapi({ description: 'The domain name of the distribution.' }),
    ).exactOptional(),
    bundleId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the bundle currently applied to the distribution.' }),
    ).exactOptional(),
    certificateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the SSL/TLS certificate attached to the distribution, if any.',
        }),
    ).exactOptional(),
    origin: OriginSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer.</p> <p>The distribution pulls, caches, and serves content from the origin.</p>',
        }),
    ).exactOptional(),
    originPublicDNS: StringSchema.and(
      z.any().openapi({ description: 'The public DNS of the origin.' }),
    ).exactOptional(),
    defaultCacheBehavior: CacheBehaviorSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the default cache behavior of the distribution.',
        }),
    ).exactOptional(),
    cacheBehaviorSettings: CacheSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the cache behavior settings of the distribution.',
        }),
    ).exactOptional(),
    cacheBehaviors: CacheBehaviorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the per-path cache behavior of the distribution.',
        }),
    ).exactOptional(),
    ableToUpdateBundle: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the bundle that is currently applied to your distribution, specified using the <code>distributionName</code> parameter, can be changed to another bundle.</p> <p>Use the <code>UpdateDistributionBundle</code> action to change your distribution's bundle.</p>",
        }),
    ).exactOptional(),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type of the distribution.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an Amazon Lightsail content delivery network (CDN) distribution.',
    required: [],
  })
  .openapi('LightsailDistribution')

const CreateDistributionResultSchema = z
  .object({
    distribution: LightsailDistributionSchema.and(
      z.any().openapi({ description: 'An object that describes the distribution created.' }),
    ).exactOptional(),
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDistributionResult')

const InputOriginSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the origin resource.' }),
    ).exactOptional(),
    regionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The AWS Region name of the origin resource.' }),
    ).exactOptional(),
    protocolPolicy: OriginProtocolPolicyEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>',
    required: [],
  })
  .openapi('InputOrigin')

const CreateDistributionRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name for the distribution.' }),
    ),
    origin: InputOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the origin resource for the distribution, such as a Lightsail instance, bucket, or load balancer.</p> <p>The distribution pulls, caches, and serves content from the origin.</p>',
        }),
    ),
    defaultCacheBehavior: CacheBehaviorSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the default cache behavior for the distribution.',
        }),
    ),
    cacheBehaviorSettings: CacheSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the cache behavior settings for the distribution.',
        }),
    ).exactOptional(),
    cacheBehaviors: CacheBehaviorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the per-path cache behavior for the distribution.',
        }),
    ).exactOptional(),
    bundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The bundle ID to use for the distribution.</p> <p>A distribution bundle describes the specifications of your distribution, such as the monthly cost and monthly network transfer quota.</p> <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle IDs that you can specify.</p>',
        }),
    ),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type for the distribution.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p> <p>The default value is <code>dualstack</code>.</p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the distribution during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['distributionName', 'origin', 'defaultCacheBehavior', 'bundleId'],
    title: 'CreateDistributionRequest',
  })
  .openapi('CreateDistributionRequest')

const CreateDomainResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDomainResult')

const CreateDomainRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({ description: 'The domain name to manage (e.g., <code>example.com</code>).' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['domainName'], title: 'CreateDomainRequest' })
  .openapi('CreateDomainRequest')

const CreateDomainEntryResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDomainEntryResult')

const DomainEntryTypeSchema = z.string().openapi('DomainEntryType')

const DomainEntryOptionsSchema = z.record(z.string(), StringSchema).openapi('DomainEntryOptions')

const DomainEntrySchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the domain recordset entry.' }),
    ).exactOptional(),
    name: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain.' }),
    ).exactOptional(),
    target: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target IP address (e.g., <code>192.0.2.0</code>), or AWS name server (e.g., <code>ns-111.awsdns-22.com.</code>).</p> <p>For Lightsail load balancers, the value looks like <code>ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com</code>. For Lightsail distributions, the value looks like <code>exampled1182ne.cloudfront.net</code>. For Lightsail container services, the value looks like <code>container-service-1.example23scljs.us-west-2.cs.amazonlightsail.com</code>. Be sure to also set <code>isAlias</code> to <code>true</code> when setting up an A record for a Lightsail load balancer, distribution, or container service.</p>',
        }),
    ).exactOptional(),
    isAlias: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>true</code>, specifies whether the domain entry is an alias used by the Lightsail load balancer, Lightsail container service, Lightsail content delivery network (CDN) distribution, or another Amazon Web Services resource. You can include an alias (A type) record in your request, which points to the DNS name of a load balancer, container service, CDN distribution, or other Amazon Web Services resource and routes traffic to that resource.',
        }),
    ).exactOptional(),
    type: DomainEntryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of domain entry, such as address for IPv4 (A), address for IPv6 (AAAA), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The following domain entry types can be used:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> <li> <p> <code>MX</code> </p> </li> <li> <p> <code>NS</code> </p> </li> <li> <p> <code>SOA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>TXT</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    options: DomainEntryOptionsSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>(Deprecated) The options for the domain entry.</p> <note> <p>In releases prior to November 29, 2017, this parameter was not included in the API response. It is now deprecated.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a domain recordset entry.', required: [] })
  .openapi('DomainEntry')

const CreateDomainEntryRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name (e.g., <code>example.com</code>) for which you want to create the domain entry.',
        }),
    ),
    domainEntry: DomainEntrySchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the domain entry request.',
        }),
    ),
  })
  .openapi({ required: ['domainName', 'domainEntry'], title: 'CreateDomainEntryRequest' })
  .openapi('CreateDomainEntryRequest')

const StatusSchema = z
  .enum([
    'startExpired',
    'notStarted',
    'started',
    'starting',
    'stopped',
    'stopping',
    'settingUpInstance',
    'failedInstanceCreation',
    'failedStartingGUISession',
    'failedStoppingGUISession',
  ])
  .openapi('Status')

const SensitiveNonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('SensitiveNonEmptyString')

const SessionSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The session name.' }),
    ).exactOptional(),
    url: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The session URL.' }),
    ).exactOptional(),
    isPrimary: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When true, this Boolean value indicates the primary session for the specified resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a web-based, remote graphical user interface (GUI), NICE DCV session. The session is used to access a virtual computer’s operating system or application.',
    required: [],
  })
  .openapi('Session')

const SessionsSchema = z.array(SessionSchema).openapi('Sessions')

const CreateGUISessionAccessDetailsResultSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The resource name.' }),
    ).exactOptional(),
    status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the operation.' }),
    ).exactOptional(),
    percentageComplete: IntegerSchema.and(
      z.any().openapi({ description: 'The percentage of completion for the operation.' }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z.any().openapi({ description: 'The reason the operation failed.' }),
    ).exactOptional(),
    sessions: SessionsSchema.and(
      z
        .any()
        .openapi({ description: 'Returns information about the specified NICE DCV GUI session.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGUISessionAccessDetailsResult')

const CreateGUISessionAccessDetailsRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(z.any().openapi({ description: 'The resource name.' })),
  })
  .openapi({ required: ['resourceName'], title: 'CreateGUISessionAccessDetailsRequest' })
  .openapi('CreateGUISessionAccessDetailsRequest')

const CreateInstanceSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateInstanceSnapshotResult')

const CreateInstanceSnapshotRequestSchema = z
  .object({
    instanceSnapshotName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name for your new snapshot.' }),
    ),
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The Lightsail instance on which to base your snapshot.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['instanceSnapshotName', 'instanceName'],
    title: 'CreateInstanceSnapshotRequest',
  })
  .openapi('CreateInstanceSnapshotRequest')

const CreateInstancesResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateInstancesResult')

const CreateInstancesRequestSchema = z
  .object({
    instanceNames: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names to use for your new Lightsail instances. Separate multiple values using quotation marks and commas, for example: <code>["MyFirstInstance","MySecondInstance"]</code> ',
        }),
    ),
    availabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone in which to create your instance. Use the following format: <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones by using the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get regions</a> operation. Be sure to add the <code>include Availability Zones</code> parameter to your request.',
        }),
    ),
    customImageName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>(Deprecated) The name for your custom image.</p> <note> <p>In releases prior to June 12, 2017, this parameter was ignored by the API. It is now deprecated.</p> </note>',
        }),
    ).exactOptional(),
    blueprintId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID for a virtual private server image (e.g., <code>app_wordpress_4_4</code> or <code>app_lamp_7_0</code>). Use the <code>get blueprints</code> operation to return a list of available images (or <i>blueprints</i>).</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>',
        }),
    ),
    bundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bundle of specification information for your virtual private server (or <i>instance</i>), including the pricing plan (e.g., <code>micro_1_0</code>).',
        }),
    ),
    userData: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A launch script you can create that configures a server with additional user data. For example, you might want to run <code>apt-get -y update</code>.</p> <note> <p>Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/compare-options-choose-lightsail-instance-image">Amazon Lightsail Developer Guide</a>.</p> </note>',
        }),
    ).exactOptional(),
    keyPairName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your key pair.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
    addOns: AddOnRequestListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects representing the add-ons to enable for the new instance.',
        }),
    ).exactOptional(),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type for the instance.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p> <p>The default value is <code>dualstack</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['instanceNames', 'availabilityZone', 'blueprintId', 'bundleId'],
    title: 'CreateInstancesRequest',
  })
  .openapi('CreateInstancesRequest')

const CreateInstancesFromSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateInstancesFromSnapshotResult')

const DiskMapSchema = z
  .object({
    originalDiskPath: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The original disk path exposed to the instance (for example, <code>/dev/sdh</code>).',
        }),
    ).exactOptional(),
    newDiskName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The new disk name (e.g., <code>my-new-disk</code>).' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a block storage disk mapping.', required: [] })
  .openapi('DiskMap')

const DiskMapListSchema = z.array(DiskMapSchema).openapi('DiskMapList')

const AttachedDiskMapSchema = z.record(z.string(), DiskMapListSchema).openapi('AttachedDiskMap')

const CreateInstancesFromSnapshotRequestSchema = z
  .object({
    instanceNames: StringListSchema.and(
      z.any().openapi({ description: 'The names for your new instances.' }),
    ),
    attachedDiskMapping: AttachedDiskMapSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing information about one or more disk mappings.',
        }),
    ).exactOptional(),
    availabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone where you want to create your instances. Use the following formatting: <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones by using the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get regions</a> operation. Be sure to add the <code>include Availability Zones</code> parameter to your request.',
        }),
    ),
    instanceSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the instance snapshot on which you are basing your new instances. Use the get instance snapshots operation to return information about your existing snapshots.</p> <p>Constraint:</p> <ul> <li> <p>This parameter cannot be defined together with the <code>source instance name</code> parameter. The <code>instance snapshot name</code> and <code>source instance name</code> parameters are mutually exclusive.</p> </li> </ul>',
        }),
    ).exactOptional(),
    bundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bundle of specification information for your virtual private server (or <i>instance</i>), including the pricing plan (e.g., <code>micro_1_0</code>).',
        }),
    ),
    userData: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can create a launch script that configures a server with additional user data. For example, <code>apt-get -y update</code>.</p> <note> <p>Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/compare-options-choose-lightsail-instance-image">Amazon Lightsail Developer Guide</a>.</p> </note>',
        }),
    ).exactOptional(),
    keyPairName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name for your key pair.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
    addOns: AddOnRequestListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects representing the add-ons to enable for the new instance.',
        }),
    ).exactOptional(),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type for the instance.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p> <p>The default value is <code>dualstack</code>.</p>',
        }),
    ).exactOptional(),
    sourceInstanceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the source instance from which the source automatic snapshot was created.</p> <p>Constraints:</p> <ul> <li> <p>This parameter cannot be defined together with the <code>instance snapshot name</code> parameter. The <code>source instance name</code> and <code>instance snapshot name</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    restoreDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date of the automatic snapshot to use for the new instance. Use the <code>get auto snapshots</code> operation to identify the dates of the available automatic snapshots.</p> <p>Constraints:</p> <ul> <li> <p>Must be specified in <code>YYYY-MM-DD</code> format.</p> </li> <li> <p>This parameter cannot be defined together with the <code>use latest restorable auto snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable auto snapshot</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    useLatestRestorableAutoSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p> <p>Constraints:</p> <ul> <li> <p>This parameter cannot be defined together with the <code>restore date</code> parameter. The <code>use latest restorable auto snapshot</code> and <code>restore date</code> parameters are mutually exclusive.</p> </li> <li> <p>Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['instanceNames', 'availabilityZone', 'bundleId'],
    title: 'CreateInstancesFromSnapshotRequest',
  })
  .openapi('CreateInstancesFromSnapshotRequest')

const Base64Schema = z.string().openapi('Base64')

const KeyPairSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The friendly name of the SSH key pair.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the key pair (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE</code>).',
        }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the key pair was created (e.g., <code>1479816991.349</code>).',
        }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The region name and Availability Zone where the key pair was created.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type (usually <code>KeyPair</code>).' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    fingerprint: Base64Schema.and(
      z.any().openapi({ description: 'The RSA fingerprint of the key pair.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an SSH key pair.', required: [] })
  .openapi('KeyPair')

const CreateKeyPairResultSchema = z
  .object({
    keyPair: KeyPairSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the new key pair you just created.',
        }),
    ).exactOptional(),
    publicKeyBase64: Base64Schema.and(
      z
        .any()
        .openapi({ description: 'A base64-encoded public key of the <code>ssh-rsa</code> type.' }),
    ).exactOptional(),
    privateKeyBase64: Base64Schema.and(
      z.any().openapi({ description: 'A base64-encoded RSA private key.' }),
    ).exactOptional(),
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateKeyPairResult')

const CreateKeyPairRequestSchema = z
  .object({
    keyPairName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name for your new key pair.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['keyPairName'], title: 'CreateKeyPairRequest' })
  .openapi('CreateKeyPairRequest')

const CreateLoadBalancerResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLoadBalancerResult')

const DomainNameListSchema = z.array(DomainNameSchema).openapi('DomainNameList')

const CreateLoadBalancerRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your load balancer.' }),
    ),
    instancePort: PortSchema.and(
      z
        .any()
        .openapi({ description: "The instance port where you're creating your load balancer." }),
    ),
    healthCheckPath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path you provided to perform the load balancer health check. If you didn\'t specify a health check path, Lightsail uses the root path of your website (e.g., <code>"/"</code>).</p> <p>You may want to specify a custom health check path other than the root of your application if your home page loads slowly or has a lot of media or scripting on it.</p>',
        }),
    ).exactOptional(),
    certificateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the SSL/TLS certificate.</p> <p>If you specify <code>certificateName</code>, then <code>certificateDomainName</code> is required (and vice-versa).</p>',
        }),
    ).exactOptional(),
    certificateDomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The domain name with which your certificate is associated (e.g., <code>example.com</code>).</p> <p>If you specify <code>certificateDomainName</code>, then <code>certificateName</code> is required (and vice-versa).</p>',
        }),
    ).exactOptional(),
    certificateAlternativeNames: DomainNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional alternative domains and subdomains to use with your SSL/TLS certificate (e.g., <code>www.example.com</code>, <code>example.com</code>, <code>m.example.com</code>, <code>blog.example.com</code>).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type for the load balancer.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p> <p>The default value is <code>dualstack</code>.</p>',
        }),
    ).exactOptional(),
    tlsPolicyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the TLS policy to apply to the load balancer.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html">GetLoadBalancerTlsPolicies</a> action to get a list of TLS policy names that you can specify.</p> <p>For more information about load balancer TLS policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['loadBalancerName', 'instancePort'], title: 'CreateLoadBalancerRequest' })
  .openapi('CreateLoadBalancerRequest')

const CreateLoadBalancerTlsCertificateResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLoadBalancerTlsCertificateResult')

const CreateLoadBalancerTlsCertificateRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The load balancer name where you want to create the SSL/TLS certificate.',
        }),
    ),
    certificateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The SSL/TLS certificate name.</p> <p>You can have up to 10 certificates in your account at one time. Each Lightsail load balancer can have up to 2 certificates associated with it at one time. There is also an overall limit to the number of certificates that can be issue in a 365-day period. For more information, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Limits</a>.</p>',
        }),
    ),
    certificateDomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name (e.g., <code>example.com</code>) for your SSL/TLS certificate.',
        }),
    ),
    certificateAlternativeNames: DomainNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9 alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g., <code>*.example.com</code>).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['loadBalancerName', 'certificateName', 'certificateDomainName'],
    title: 'CreateLoadBalancerTlsCertificateRequest',
  })
  .openapi('CreateLoadBalancerTlsCertificateRequest')

const CreateRelationalDatabaseResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRelationalDatabaseResult')

const SensitiveStringSchema = z.string().openapi('SensitiveString')

const CreateRelationalDatabaseRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name to use for your new Lightsail database resource.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p> </li> <li> <p>The first and last character must be a letter or number.</p> </li> </ul>',
        }),
    ),
    availabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Availability Zone in which to create your new database. Use the <code>us-east-2a</code> case-sensitive format.</p> <p>You can get a list of Availability Zones by using the <code>get regions</code> operation. Be sure to add the <code>include relational database Availability Zones</code> parameter to your request.</p>',
        }),
    ).exactOptional(),
    relationalDatabaseBlueprintId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The blueprint ID for your new database. A blueprint describes the major engine version of a database.</p> <p>You can get a list of database blueprints IDs by using the <code>get relational database blueprints</code> operation.</p>',
        }),
    ),
    relationalDatabaseBundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The bundle ID for your new database. A bundle describes the performance specifications for your database.</p> <p>You can get a list of database bundle IDs by using the <code>get relational database bundles</code> operation.</p>',
        }),
    ),
    masterDatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The meaning of this parameter differs according to the database engine you use.</p> <p> <b>MySQL</b> </p> <p>The name of the database to create when the Lightsail database resource is created. If this parameter isn\'t specified, no database is created in the database resource.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0- 9).</p> </li> <li> <p>Can\'t be a word reserved by the specified database engine.</p> <p>For more information about reserved words in MySQL, see the Keywords and Reserved Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a>, <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>, and <a href="https://dev.mysql.com/doc/refman/8.0/en/keywords.html">MySQL 8.0</a>.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>The name of the database to create when the Lightsail database resource is created. If this parameter isn\'t specified, a database named <code>postgres</code> is created in the database resource.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 63 letters or numbers.</p> </li> <li> <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0- 9).</p> </li> <li> <p>Can\'t be a word reserved by the specified database engine.</p> <p>For more information about reserved words in PostgreSQL, see the SQL Key Words articles for <a href="https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html">PostgreSQL 9.6</a>, <a href="https://www.postgresql.org/docs/10/sql-keywords-appendix.html">PostgreSQL 10</a>, <a href="https://www.postgresql.org/docs/11/sql-keywords-appendix.html">PostgreSQL 11</a>, and <a href="https://www.postgresql.org/docs/12/sql-keywords-appendix.html">PostgreSQL 12</a>.</p> </li> </ul>',
        }),
    ),
    masterUsername: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the master user.</p> <p> <b>MySQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for MySQL.</p> </li> <li> <p>Must be 1 to 16 letters or numbers. Can contain underscores.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can\'t be a reserved word for the chosen database engine.</p> <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a>, <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>, or <a href="https://dev.mysql.com/doc/refman/8.0/en/keywords.html">MySQL 8.0</a>.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for PostgreSQL.</p> </li> <li> <p>Must be 1 to 63 letters or numbers. Can contain underscores.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can\'t be a reserved word for the chosen database engine.</p> <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for <a href="https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html">PostgreSQL 9.6</a>, <a href="https://www.postgresql.org/docs/10/sql-keywords-appendix.html">PostgreSQL 10</a>, <a href="https://www.postgresql.org/docs/11/sql-keywords-appendix.html">PostgreSQL 11</a>, and <a href="https://www.postgresql.org/docs/12/sql-keywords-appendix.html">PostgreSQL 12</a>.</p> </li> </ul>',
        }),
    ),
    masterUserPassword: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.</p> <p> <b>MySQL</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>PostgreSQL</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p>',
        }),
    ).exactOptional(),
    preferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range during which automated backups are created for your new database if automated backups are enabled.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. For more information about the preferred backup window time blocks for each region, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Working With Backups</a> guide in the Amazon Relational Database Service documentation.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p> <p>Example: <code>16:00-16:30</code> </p> </li> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
        }),
    ).exactOptional(),
    preferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur on your new database.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p> </li> <li> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Example: <code>Tue:17:00-Tue:17:30</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    publiclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the accessibility options for your new database. A value of <code>true</code> specifies a database that is available to resources outside of your Lightsail account. A value of <code>false</code> specifies a database that is available only to your Lightsail resources in the same region as your database.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'relationalDatabaseName',
      'relationalDatabaseBlueprintId',
      'relationalDatabaseBundleId',
      'masterDatabaseName',
      'masterUsername',
    ],
    title: 'CreateRelationalDatabaseRequest',
  })
  .openapi('CreateRelationalDatabaseRequest')

const CreateRelationalDatabaseFromSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRelationalDatabaseFromSnapshotResult')

const CreateRelationalDatabaseFromSnapshotRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name to use for your new Lightsail database resource.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p> </li> <li> <p>The first and last character must be a letter or number.</p> </li> </ul>',
        }),
    ),
    availabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Availability Zone in which to create your new database. Use the <code>us-east-2a</code> case-sensitive format.</p> <p>You can get a list of Availability Zones by using the <code>get regions</code> operation. Be sure to add the <code>include relational database Availability Zones</code> parameter to your request.</p>',
        }),
    ).exactOptional(),
    publiclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the accessibility options for your new database. A value of <code>true</code> specifies a database that is available to resources outside of your Lightsail account. A value of <code>false</code> specifies a database that is available only to your Lightsail resources in the same region as your database.',
        }),
    ).exactOptional(),
    relationalDatabaseSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the database snapshot from which to create your new database.',
        }),
    ).exactOptional(),
    relationalDatabaseBundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The bundle ID for your new database. A bundle describes the performance specifications for your database.</p> <p>You can get a list of database bundle IDs by using the <code>get relational database bundles</code> operation.</p> <p>When creating a new database from a snapshot, you cannot choose a bundle that is smaller than the bundle of the source database.</p>',
        }),
    ).exactOptional(),
    sourceRelationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the source database.' }),
    ).exactOptional(),
    restoreTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time to restore your database from.</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the database.</p> </li> <li> <p>Cannot be specified if the <code>use latest restorable time</code> parameter is <code>true</code>.</p> </li> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a restore time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the restore time.</p> </li> </ul>',
        }),
    ).exactOptional(),
    useLatestRestorableTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether your database is restored from the latest backup time. A value of <code>true</code> restores from the latest backup time. </p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if the <code>restore time</code> parameter is provided.</p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['relationalDatabaseName'],
    title: 'CreateRelationalDatabaseFromSnapshotRequest',
  })
  .openapi('CreateRelationalDatabaseFromSnapshotRequest')

const CreateRelationalDatabaseSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRelationalDatabaseSnapshotResult')

const CreateRelationalDatabaseSnapshotRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the database on which to base your new snapshot.' }),
    ),
    relationalDatabaseSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for your new database snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p> </li> <li> <p>The first and last character must be a letter or number.</p> </li> </ul>',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tag keys and optional values to add to the resource during create.</p> <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['relationalDatabaseName', 'relationalDatabaseSnapshotName'],
    title: 'CreateRelationalDatabaseSnapshotRequest',
  })
  .openapi('CreateRelationalDatabaseSnapshotRequest')

const DeleteAlarmResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteAlarmResult')

const DeleteAlarmRequestSchema = z
  .object({
    alarmName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm to delete.' }),
    ),
  })
  .openapi({ required: ['alarmName'], title: 'DeleteAlarmRequest' })
  .openapi('DeleteAlarmRequest')

const DeleteAutoSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteAutoSnapshotResult')

const AutoSnapshotDateSchema = z
  .string()
  .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
  .openapi('AutoSnapshotDate')

const DeleteAutoSnapshotRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the source instance or disk from which to delete the automatic snapshot.',
        }),
    ),
    date: AutoSnapshotDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date of the automatic snapshot to delete in <code>YYYY-MM-DD</code> format. Use the <code>get auto snapshots</code> operation to get the available automatic snapshots for a resource.',
        }),
    ),
  })
  .openapi({ required: ['resourceName', 'date'], title: 'DeleteAutoSnapshotRequest' })
  .openapi('DeleteAutoSnapshotRequest')

const DeleteBucketResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBucketResult')

const DeleteBucketRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the bucket to delete.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action to get a list of bucket names that you can specify.</p>',
        }),
    ),
    forceDelete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value that indicates whether to force delete the bucket.</p> <p>You must force delete the bucket if it has one of the following conditions:</p> <ul> <li> <p>The bucket is the origin of a distribution.</p> </li> <li> <p>The bucket has instances that were granted access to it using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a> action.</p> </li> <li> <p>The bucket has objects.</p> </li> <li> <p>The bucket has access keys.</p> </li> </ul> <important> <p>Force deleting a bucket might impact other resources that rely on the bucket, such as instances, distributions, or software that use the issued access keys.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['bucketName'], title: 'DeleteBucketRequest' })
  .openapi('DeleteBucketRequest')

const DeleteBucketAccessKeyResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBucketAccessKeyResult')

const DeleteBucketAccessKeyRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket that the access key belongs to.' }),
    ),
    accessKeyId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the access key to delete.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of access key IDs that you can specify.</p>',
        }),
    ),
  })
  .openapi({ required: ['bucketName', 'accessKeyId'], title: 'DeleteBucketAccessKeyRequest' })
  .openapi('DeleteBucketAccessKeyRequest')

const DeleteCertificateResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteCertificateResult')

const DeleteCertificateRequestSchema = z
  .object({
    certificateName: CertificateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the certificate to delete.</p> <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you can specify.</p>',
        }),
    ),
  })
  .openapi({ required: ['certificateName'], title: 'DeleteCertificateRequest' })
  .openapi('DeleteCertificateRequest')

const DeleteContactMethodResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteContactMethodResult')

const DeleteContactMethodRequestSchema = z
  .object({
    protocol: ContactProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol that will be deleted, such as <code>Email</code> or <code>SMS</code> (text messaging).</p> <note> <p>To delete an <code>Email</code> and an <code>SMS</code> contact method if you added both, you must run separate <code>DeleteContactMethod</code> actions to delete each protocol.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['protocol'], title: 'DeleteContactMethodRequest' })
  .openapi('DeleteContactMethodRequest')

const DeleteContainerImageResultSchema = z.object({}).openapi('DeleteContainerImageResult')

const DeleteContainerImageRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container service for which to delete a registered container image.',
        }),
    ),
    image: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the container image to delete from the container service.</p> <p>Use the <code>GetContainerImages</code> action to get the name of the container images that are registered to a container service.</p> <note> <p>Container images sourced from your Lightsail container service, that are registered and stored on your service, start with a colon (<code>:</code>). For example, <code>:container-service-1.mystaticwebsite.1</code>. Container images sourced from a public registry like Docker Hub don't start with a colon. For example, <code>nginx:latest</code> or <code>nginx</code>.</p> </note>",
        }),
    ),
  })
  .openapi({ required: ['serviceName', 'image'], title: 'DeleteContainerImageRequest' })
  .openapi('DeleteContainerImageRequest')

const DeleteContainerServiceResultSchema = z.object({}).openapi('DeleteContainerServiceResult')

const DeleteContainerServiceRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the container service to delete.' }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'DeleteContainerServiceRequest' })
  .openapi('DeleteContainerServiceRequest')

const DeleteDiskResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDiskResult')

const DeleteDiskRequestSchema = z
  .object({
    diskName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the disk you want to delete (e.g., <code>my-disk</code>).',
        }),
    ),
    forceDeleteAddOns: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value to indicate whether to delete all add-ons for the disk.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['diskName'], title: 'DeleteDiskRequest' })
  .openapi('DeleteDiskRequest')

const DeleteDiskSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDiskSnapshotResult')

const DeleteDiskSnapshotRequestSchema = z
  .object({
    diskSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the disk snapshot you want to delete (e.g., <code>my-disk-snapshot</code>).',
        }),
    ),
  })
  .openapi({ required: ['diskSnapshotName'], title: 'DeleteDiskSnapshotRequest' })
  .openapi('DeleteDiskSnapshotRequest')

const DeleteDistributionResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDistributionResult')

const DeleteDistributionRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution to delete.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteDistributionRequest', required: [] })
  .openapi('DeleteDistributionRequest')

const DeleteDomainResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDomainResult')

const DeleteDomainRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The specific domain name to delete.' }),
    ),
  })
  .openapi({ required: ['domainName'], title: 'DeleteDomainRequest' })
  .openapi('DeleteDomainRequest')

const DeleteDomainEntryResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDomainEntryResult')

const DeleteDomainEntryRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain entry to delete.' }),
    ),
    domainEntry: DomainEntrySchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about your domain entries.',
        }),
    ),
  })
  .openapi({ required: ['domainName', 'domainEntry'], title: 'DeleteDomainEntryRequest' })
  .openapi('DeleteDomainEntryRequest')

const DeleteInstanceResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteInstanceResult')

const DeleteInstanceRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance to delete.' }),
    ),
    forceDeleteAddOns: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value to indicate whether to delete all add-ons for the instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['instanceName'], title: 'DeleteInstanceRequest' })
  .openapi('DeleteInstanceRequest')

const DeleteInstanceSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteInstanceSnapshotResult')

const DeleteInstanceSnapshotRequestSchema = z
  .object({
    instanceSnapshotName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the snapshot to delete.' }),
    ),
  })
  .openapi({ required: ['instanceSnapshotName'], title: 'DeleteInstanceSnapshotRequest' })
  .openapi('DeleteInstanceSnapshotRequest')

const DeleteKeyPairResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteKeyPairResult')

const DeleteKeyPairRequestSchema = z
  .object({
    keyPairName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the key pair to delete.' }),
    ),
    expectedFingerprint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The RSA fingerprint of the Lightsail default key pair to delete.</p> <note> <p>The <code>expectedFingerprint</code> parameter is required only when specifying to delete a Lightsail default key pair.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['keyPairName'], title: 'DeleteKeyPairRequest' })
  .openapi('DeleteKeyPairRequest')

const DeleteKnownHostKeysResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteKnownHostKeysResult')

const DeleteKnownHostKeysRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the instance for which you want to reset the host key or certificate.',
        }),
    ),
  })
  .openapi({ required: ['instanceName'], title: 'DeleteKnownHostKeysRequest' })
  .openapi('DeleteKnownHostKeysRequest')

const DeleteLoadBalancerResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteLoadBalancerResult')

const DeleteLoadBalancerRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer you want to delete.' }),
    ),
  })
  .openapi({ required: ['loadBalancerName'], title: 'DeleteLoadBalancerRequest' })
  .openapi('DeleteLoadBalancerRequest')

const DeleteLoadBalancerTlsCertificateResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteLoadBalancerTlsCertificateResult')

const DeleteLoadBalancerTlsCertificateRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The load balancer name.' }),
    ),
    certificateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The SSL/TLS certificate name.' }),
    ),
    force: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p> <p>There can be two certificates associated with a Lightsail load balancer: the primary and the backup. The <code>force</code> parameter is required when the primary SSL/TLS certificate is in use by an instance attached to the load balancer.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['loadBalancerName', 'certificateName'],
    title: 'DeleteLoadBalancerTlsCertificateRequest',
  })
  .openapi('DeleteLoadBalancerTlsCertificateRequest')

const DeleteRelationalDatabaseResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRelationalDatabaseResult')

const DeleteRelationalDatabaseRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the database that you are deleting.' }),
    ),
    skipFinalSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether a final database snapshot is created before your database is deleted. If <code>true</code> is specified, no database snapshot is created. If <code>false</code> is specified, a database snapshot is created before your database is deleted.</p> <p>You must specify the <code>final relational database snapshot name</code> parameter if the <code>skip final snapshot</code> parameter is <code>false</code>.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    finalRelationalDatabaseSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the database snapshot created if <code>skip final snapshot</code> is <code>false</code>, which is the default value for that parameter.</p> <note> <p>Specifying this parameter and also specifying the <code>skip final snapshot</code> parameter to <code>true</code> results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p> </li> <li> <p>The first and last character must be a letter or number.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['relationalDatabaseName'], title: 'DeleteRelationalDatabaseRequest' })
  .openapi('DeleteRelationalDatabaseRequest')

const DeleteRelationalDatabaseSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRelationalDatabaseSnapshotResult')

const DeleteRelationalDatabaseSnapshotRequestSchema = z
  .object({
    relationalDatabaseSnapshotName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the database snapshot that you are deleting.' }),
    ),
  })
  .openapi({
    required: ['relationalDatabaseSnapshotName'],
    title: 'DeleteRelationalDatabaseSnapshotRequest',
  })
  .openapi('DeleteRelationalDatabaseSnapshotRequest')

const DetachCertificateFromDistributionResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetachCertificateFromDistributionResult')

const DetachCertificateFromDistributionRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution from which to detach the certificate.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p>',
        }),
    ),
  })
  .openapi({ required: ['distributionName'], title: 'DetachCertificateFromDistributionRequest' })
  .openapi('DetachCertificateFromDistributionRequest')

const DetachDiskResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetachDiskResult')

const DetachDiskRequestSchema = z
  .object({
    diskName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the disk you want to detach from your instance (e.g., <code>my-disk</code>).',
        }),
    ),
  })
  .openapi({ required: ['diskName'], title: 'DetachDiskRequest' })
  .openapi('DetachDiskRequest')

const DetachInstancesFromLoadBalancerResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetachInstancesFromLoadBalancerResult')

const DetachInstancesFromLoadBalancerRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Lightsail load balancer.' }),
    ),
    instanceNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings containing the names of the instances you want to detach from the load balancer.',
        }),
    ),
  })
  .openapi({
    required: ['loadBalancerName', 'instanceNames'],
    title: 'DetachInstancesFromLoadBalancerRequest',
  })
  .openapi('DetachInstancesFromLoadBalancerRequest')

const DetachStaticIpResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetachStaticIpResult')

const DetachStaticIpRequestSchema = z
  .object({
    staticIpName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the static IP to detach from the instance.' }),
    ),
  })
  .openapi({ required: ['staticIpName'], title: 'DetachStaticIpRequest' })
  .openapi('DetachStaticIpRequest')

const DisableAddOnResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisableAddOnResult')

const DisableAddOnRequestSchema = z
  .object({
    addOnType: AddOnTypeSchema.and(z.any().openapi({ description: 'The add-on type to disable.' })),
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source resource for which to disable the add-on.',
        }),
    ),
  })
  .openapi({ required: ['addOnType', 'resourceName'], title: 'DisableAddOnRequest' })
  .openapi('DisableAddOnRequest')

const DownloadDefaultKeyPairResultSchema = z
  .object({
    publicKeyBase64: Base64Schema.and(
      z
        .any()
        .openapi({ description: 'A base64-encoded public key of the <code>ssh-rsa</code> type.' }),
    ).exactOptional(),
    privateKeyBase64: Base64Schema.and(
      z.any().openapi({ description: 'A base64-encoded RSA private key.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the default key pair was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadDefaultKeyPairResult')

const DownloadDefaultKeyPairRequestSchema = z
  .object({})
  .openapi({ title: 'DownloadDefaultKeyPairRequest' })
  .openapi('DownloadDefaultKeyPairRequest')

const EnableAddOnResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnableAddOnResult')

const EnableAddOnRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source resource for which to enable or modify the add-on.',
        }),
    ),
    addOnRequest: AddOnRequestSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of strings representing the add-on to enable or modify.',
        }),
    ),
  })
  .openapi({ required: ['resourceName', 'addOnRequest'], title: 'EnableAddOnRequest' })
  .openapi('EnableAddOnRequest')

const ExportSnapshotResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportSnapshotResult')

const ExportSnapshotRequestSchema = z
  .object({
    sourceSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the instance or disk snapshot to be exported to Amazon EC2.',
        }),
    ),
  })
  .openapi({ required: ['sourceSnapshotName'], title: 'ExportSnapshotRequest' })
  .openapi('ExportSnapshotRequest')

const GetActiveNamesResultSchema = z
  .object({
    activeNames: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of active names returned by the get active names request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetActiveNames</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetActiveNamesResult')

const GetActiveNamesRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetActiveNames</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetActiveNamesRequest', required: [] })
  .openapi('GetActiveNamesRequest')

const ResourceArnSchema = z
  .string()
  .regex(/^arn:(aws[^:]*):([a-zA-Z0-9-]+):([a-z0-9-]+):([0-9]+):([a-zA-Z]+)\/([a-zA-Z0-9-]+)$/)
  .openapi('ResourceArn')

const MonitoredResourceInfoSchema = z
  .object({
    arn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource being monitored.',
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Lightsail resource being monitored.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Lightsail resource type of the resource being monitored.</p> <p>Instances, load balancers, and relational databases are the only Lightsail resources that can currently be monitored by alarms.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>',
    required: [],
  })
  .openapi('MonitoredResourceInfo')

const ComparisonOperatorSchema = z
  .enum([
    'GreaterThanOrEqualToThreshold',
    'GreaterThanThreshold',
    'LessThanThreshold',
    'LessThanOrEqualToThreshold',
  ])
  .openapi('ComparisonOperator')

const MetricPeriodSchema = z.int().min(60).max(86400).openapi('MetricPeriod')

const DoubleSchema = z.float64().openapi('Double')

const TreatMissingDataSchema = z
  .enum(['breaching', 'notBreaching', 'ignore', 'missing'])
  .openapi('TreatMissingData')

const MetricStatisticSchema = z
  .enum(['Minimum', 'Maximum', 'Sum', 'Average', 'SampleCount'])
  .openapi('MetricStatistic')

const MetricNameSchema = z
  .enum([
    'CPUUtilization',
    'NetworkIn',
    'NetworkOut',
    'StatusCheckFailed',
    'StatusCheckFailed_Instance',
    'StatusCheckFailed_System',
    'ClientTLSNegotiationErrorCount',
    'HealthyHostCount',
    'UnhealthyHostCount',
    'HTTPCode_LB_4XX_Count',
    'HTTPCode_LB_5XX_Count',
    'HTTPCode_Instance_2XX_Count',
    'HTTPCode_Instance_3XX_Count',
    'HTTPCode_Instance_4XX_Count',
    'HTTPCode_Instance_5XX_Count',
    'InstanceResponseTime',
    'RejectedConnectionCount',
    'RequestCount',
    'DatabaseConnections',
    'DiskQueueDepth',
    'FreeStorageSpace',
    'NetworkReceiveThroughput',
    'NetworkTransmitThroughput',
    'BurstCapacityTime',
    'BurstCapacityPercentage',
  ])
  .openapi('MetricName')

const AlarmStateSchema = z.enum(['OK', 'ALARM', 'INSUFFICIENT_DATA']).openapi('AlarmState')

const MetricUnitSchema = z
  .enum([
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
    'Count',
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
    'None',
  ])
  .openapi('MetricUnit')

const ContactProtocolsListSchema = z.array(ContactProtocolSchema).openapi('ContactProtocolsList')

const NotificationTriggerListSchema = z.array(AlarmStateSchema).openapi('NotificationTriggerList')

const AlarmSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the alarm.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the alarm was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that lists information about the location of the alarm.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The Lightsail resource type (e.g., <code>Alarm</code>).' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about your Lightsail alarm. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    monitoredResourceInfo: MonitoredResourceInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that lists information about the resource monitored by the alarm.',
        }),
    ).exactOptional(),
    comparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The arithmetic operation used when comparing the specified statistic and threshold.',
        }),
    ).exactOptional(),
    evaluationPeriods: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of periods over which data is compared to the specified threshold.',
        }),
    ).exactOptional(),
    period: MetricPeriodSchema.and(
      z
        .any()
        .openapi({ description: 'The period, in seconds, over which the statistic is applied.' }),
    ).exactOptional(),
    threshold: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'The value against which the specified statistic is compared.' }),
    ).exactOptional(),
    datapointsToAlarm: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of data points that must not within the specified threshold to trigger the alarm.',
        }),
    ).exactOptional(),
    treatMissingData: TreatMissingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how the alarm handles missing data points.</p> <p>An alarm can treat missing data in the following ways:</p> <ul> <li> <p> <code>breaching</code> - Assume the missing data is not within the threshold. Missing data counts towards the number of times the metric is not within the threshold.</p> </li> <li> <p> <code>notBreaching</code> - Assume the missing data is within the threshold. Missing data does not count towards the number of times the metric is not within the threshold.</p> </li> <li> <p> <code>ignore</code> - Ignore the missing data. Maintains the current alarm state.</p> </li> <li> <p> <code>missing</code> - Missing data is treated as missing.</p> </li> </ul>',
        }),
    ).exactOptional(),
    statistic: MetricStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic for the metric associated with the alarm.</p> <p>The following statistics are available:</p> <ul> <li> <p> <code>Minimum</code> - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <code>Maximum</code> - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.</p> </li> <li> <p> <code>Sum</code> - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.</p> </li> <li> <p> <code>Average</code> - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.</p> </li> <li> <p> <code>SampleCount</code> - The count, or number, of data points used for the statistical calculation.</p> </li> </ul>',
        }),
    ).exactOptional(),
    metricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric associated with the alarm.' }),
    ).exactOptional(),
    state: AlarmStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the alarm.</p> <p>An alarm has the following possible states:</p> <ul> <li> <p> <code>ALARM</code> - The metric is outside of the defined threshold.</p> </li> <li> <p> <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not available, or not enough data is available for the metric to determine the alarm state.</p> </li> <li> <p> <code>OK</code> - The metric is within the defined threshold.</p> </li> </ul>',
        }),
    ).exactOptional(),
    unit: MetricUnitSchema.and(
      z.any().openapi({ description: 'The unit of the metric associated with the alarm.' }),
    ).exactOptional(),
    contactProtocols: ContactProtocolsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contact protocols for the alarm, such as <code>Email</code>, <code>SMS</code> (text messaging), or both.',
        }),
    ).exactOptional(),
    notificationTriggers: NotificationTriggerListSchema.and(
      z.any().openapi({ description: 'The alarm states that trigger a notification.' }),
    ).exactOptional(),
    notificationEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the alarm is enabled.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>',
    required: [],
  })
  .openapi('Alarm')

const AlarmsListSchema = z.array(AlarmSchema).openapi('AlarmsList')

const GetAlarmsResultSchema = z
  .object({
    alarms: AlarmsListSchema.and(
      z.any().openapi({ description: 'An array of objects that describe the alarms.' }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetAlarms</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAlarmsResult')

const GetAlarmsRequestSchema = z
  .object({
    alarmName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the alarm.</p> <p>Specify an alarm name to return information about a specific alarm.</p>',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetAlarms</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
    monitoredResourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Lightsail resource being monitored by the alarm.</p> <p>Specify a monitored resource name to return information about all alarms for a specific resource.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetAlarmsRequest', required: [] })
  .openapi('GetAlarmsRequest')

const AutoSnapshotStatusSchema = z
  .enum(['Success', 'Failed', 'InProgress', 'NotFound'])
  .openapi('AutoSnapshotStatus')

const AttachedDiskSchema = z
  .object({
    path: StringSchema.and(
      z.any().openapi({ description: 'The path of the disk (e.g., <code>/dev/xvdf</code>).' }),
    ).exactOptional(),
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk in GB.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.',
    required: [],
  })
  .openapi('AttachedDisk')

const AttachedDiskListSchema = z.array(AttachedDiskSchema).openapi('AttachedDiskList')

const AutoSnapshotDetailsSchema = z
  .object({
    date: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date of the automatic snapshot in <code>YYYY-MM-DD</code> format.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the automatic snapshot was created.' }),
    ).exactOptional(),
    status: AutoSnapshotStatusSchema.and(
      z.any().openapi({ description: 'The status of the automatic snapshot.' }),
    ).exactOptional(),
    fromAttachedDisks: AttachedDiskListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the block storage disks attached to the instance when the automatic snapshot was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an automatic snapshot.', required: [] })
  .openapi('AutoSnapshotDetails')

const AutoSnapshotDetailsListSchema = z
  .array(AutoSnapshotDetailsSchema)
  .openapi('AutoSnapshotDetailsList')

const GetAutoSnapshotsResultSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source instance or disk for the automatic snapshots.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource type (e.g., <code>Instance</code> or <code>Disk</code>).',
        }),
    ).exactOptional(),
    autoSnapshots: AutoSnapshotDetailsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the automatic snapshots that are available for the specified source instance or disk.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAutoSnapshotsResult')

const GetAutoSnapshotsRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the source instance or disk from which to get automatic snapshot information.',
        }),
    ),
  })
  .openapi({ required: ['resourceName'], title: 'GetAutoSnapshotsRequest' })
  .openapi('GetAutoSnapshotsRequest')

const BlueprintTypeSchema = z.enum(['os', 'app']).openapi('BlueprintType')

const InstancePlatformSchema = z.enum(['LINUX_UNIX', 'WINDOWS']).openapi('InstancePlatform')

const AppCategorySchema = z.literal('LfR').openapi('AppCategory')

const BlueprintSchema = z
  .object({
    blueprintId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for the virtual private server image (e.g., <code>app_wordpress_4_4</code> or <code>app_lamp_7_0</code>).',
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).',
        }),
    ).exactOptional(),
    group: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The group name of the blueprint (e.g., <code>amazon-linux</code>).',
        }),
    ).exactOptional(),
    type: BlueprintTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the blueprint (e.g., <code>os</code> or <code>app</code>).',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the blueprint.' }),
    ).exactOptional(),
    isActive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.',
        }),
    ).exactOptional(),
    minPower: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum bundle power required to run this blueprint. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500. <code>0</code> indicates that the blueprint runs on all instance sizes. ',
        }),
    ).exactOptional(),
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the operating system, application, or stack (e.g., <code>2016.03.0</code>).',
        }),
    ).exactOptional(),
    versionCode: StringSchema.and(
      z.any().openapi({ description: 'The version code.' }),
    ).exactOptional(),
    productUrl: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The product URL to learn more about the image or blueprint.' }),
    ).exactOptional(),
    licenseUrl: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The end-user license agreement URL for the image or blueprint.' }),
    ).exactOptional(),
    platform: InstancePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operating system platform (either Linux/Unix-based or Windows Server-based) of the blueprint.',
        }),
    ).exactOptional(),
    appCategory: AppCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Virtual computer blueprints that are supported by Lightsail for Research.</p> <important> <p>This parameter only applies to Lightsail for Research resources.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a blueprint (a virtual private server image).', required: [] })
  .openapi('Blueprint')

const BlueprintListSchema = z.array(BlueprintSchema).openapi('BlueprintList')

const GetBlueprintsResultSchema = z
  .object({
    blueprints: BlueprintListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs that contains information about the available blueprints.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetBlueprints</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBlueprintsResult')

const GetBlueprintsRequestSchema = z
  .object({
    includeInactive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether to include inactive (unavailable) blueprints in the response of your request.',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetBlueprints</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
    appCategory: AppCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Returns a list of blueprints that are specific to Lightsail for Research.</p> <important> <p>You must use this parameter to view Lightsail for Research blueprints.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetBlueprintsRequest', required: [] })
  .openapi('GetBlueprintsRequest')

const AccessKeyListSchema = z.array(AccessKeySchema).openapi('AccessKeyList')

const GetBucketAccessKeysResultSchema = z
  .object({
    accessKeys: AccessKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the access keys for the specified bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketAccessKeysResult')

const GetBucketAccessKeysRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket for which to return access keys.' }),
    ),
  })
  .openapi({ required: ['bucketName'], title: 'GetBucketAccessKeysRequest' })
  .openapi('GetBucketAccessKeysRequest')

const FloatSchema = z.float32().openapi('Float')

const BucketBundleSchema = z
  .object({
    bundleId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the bundle.' }),
    ).exactOptional(),
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the bundle.' }),
    ).exactOptional(),
    price: FloatSchema.and(
      z.any().openapi({ description: 'The monthly price of the bundle, in US dollars.' }),
    ).exactOptional(),
    storagePerMonthInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The storage size of the bundle, in GB.' }),
    ).exactOptional(),
    transferPerMonthInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The monthly network transfer quota of the bundle.' }),
    ).exactOptional(),
    isActive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the bundle is active. Use for a new or existing bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>',
    required: [],
  })
  .openapi('BucketBundle')

const BucketBundleListSchema = z.array(BucketBundleSchema).openapi('BucketBundleList')

const GetBucketBundlesResultSchema = z
  .object({
    bundles: BucketBundleListSchema.and(
      z.any().openapi({ description: 'An object that describes bucket bundles.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketBundlesResult')

const GetBucketBundlesRequestSchema = z
  .object({
    includeInactive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether to include inactive (unavailable) bundles in the response of your request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetBucketBundlesRequest', required: [] })
  .openapi('GetBucketBundlesRequest')

const BucketMetricNameSchema = z
  .enum(['BucketSizeBytes', 'NumberOfObjects'])
  .openapi('BucketMetricName')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const MetricDatapointSchema = z
  .object({
    average: DoubleSchema.and(z.any().openapi({ description: 'The average.' })).exactOptional(),
    maximum: DoubleSchema.and(z.any().openapi({ description: 'The maximum.' })).exactOptional(),
    minimum: DoubleSchema.and(z.any().openapi({ description: 'The minimum.' })).exactOptional(),
    sampleCount: DoubleSchema.and(
      z.any().openapi({ description: 'The sample count.' }),
    ).exactOptional(),
    sum: DoubleSchema.and(z.any().openapi({ description: 'The sum.' })).exactOptional(),
    timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp (e.g., <code>1479816991.349</code>).' }),
    ).exactOptional(),
    unit: MetricUnitSchema.and(z.any().openapi({ description: 'The unit. ' })).exactOptional(),
  })
  .openapi({ description: 'Describes the metric data point.', required: [] })
  .openapi('MetricDatapoint')

const MetricDatapointListSchema = z.array(MetricDatapointSchema).openapi('MetricDatapointList')

const GetBucketMetricDataResultSchema = z
  .object({
    metricName: BucketMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric returned.' }),
    ).exactOptional(),
    metricData: MetricDatapointListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe the metric data returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketMetricDataResult')

const MetricStatisticListSchema = z.array(MetricStatisticSchema).openapi('MetricStatisticList')

const GetBucketMetricDataRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket for which to get metric data.' }),
    ),
    metricName: BucketMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric for which you want to return information.</p> <p>Valid bucket metric names are listed below, along with the most useful statistics to include in your request, and the published unit value.</p> <note> <p>These bucket metrics are reported once per day.</p> </note> <ul> <li> <p> <b> <code>BucketSizeBytes</code> </b> - The amount of data in bytes stored in a bucket. This value is calculated by summing the size of all objects in the bucket (including object versions), including the size of all parts for all incomplete multipart uploads to the bucket.</p> <p>Statistics: The most useful statistic is <code>Maximum</code>.</p> <p>Unit: The published unit is <code>Bytes</code>.</p> </li> <li> <p> <b> <code>NumberOfObjects</code> </b> - The total number of objects stored in a bucket. This value is calculated by counting all objects in the bucket (including object versions) and the total number of parts for all incomplete multipart uploads to the bucket.</p> <p>Statistics: The most useful statistic is <code>Average</code>.</p> <p>Unit: The published unit is <code>Count</code>.</p> </li> </ul>',
        }),
    ),
    startTime: IsoDateSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp indicating the earliest data to be returned.' }),
    ),
    endTime: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp indicating the latest data to be returned.' }),
    ),
    period: MetricPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The granularity, in seconds, of the returned data points.</p> <note> <p>Bucket storage metrics are reported once per day. Therefore, you should specify a period of 86400 seconds, which is the number of seconds in a day.</p> </note>',
        }),
    ),
    statistics: MetricStatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic for the metric.</p> <p>The following statistics are available:</p> <ul> <li> <p> <code>Minimum</code> - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <code>Maximum</code> - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.</p> </li> <li> <p> <code>Sum</code> - The sum of all values submitted for the matching metric. You can use this statistic to determine the total volume of a metric.</p> </li> <li> <p> <code>Average</code> - The value of <code>Sum</code> / <code>SampleCount</code> during the specified period. By comparing this statistic with the <code>Minimum</code> and <code>Maximum</code> values, you can determine the full scope of a metric and how close the average use is to the <code>Minimum</code> and <code>Maximum</code> values. This comparison helps you to know when to increase or decrease your resources.</p> </li> <li> <p> <code>SampleCount</code> - The count, or number, of data points used for the statistical calculation.</p> </li> </ul>',
        }),
    ),
    unit: MetricUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unit for the metric data request.</p> <p>Valid units depend on the metric data being requested. For the valid units with each available metric, see the <code>metricName</code> parameter.</p>',
        }),
    ),
  })
  .openapi({
    required: ['bucketName', 'metricName', 'startTime', 'endTime', 'period', 'statistics', 'unit'],
    title: 'GetBucketMetricDataRequest',
  })
  .openapi('GetBucketMetricDataRequest')

const BucketListSchema = z.array(BucketSchema).openapi('BucketList')

const AccountLevelBpaSyncStatusSchema = z
  .enum(['InSync', 'Failed', 'NeverSynced', 'Defaulted'])
  .openapi('AccountLevelBpaSyncStatus')

const BPAStatusMessageSchema = z
  .enum([
    'DEFAULTED_FOR_SLR_MISSING',
    'SYNC_ON_HOLD',
    'DEFAULTED_FOR_SLR_MISSING_ON_HOLD',
    'Unknown',
  ])
  .openapi('BPAStatusMessage')

const AccountLevelBpaSyncSchema = z
  .object({
    status: AccountLevelBpaSyncStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the account-level BPA synchronization.</p> <p>The following statuses are possible:</p> <ul> <li> <p> <code>InSync</code> - Account-level BPA is synchronized. The Amazon S3 account-level BPA configuration applies to your Lightsail buckets.</p> </li> <li> <p> <code>NeverSynced</code> - Synchronization has not yet happened. The Amazon S3 account-level BPA configuration does not apply to your Lightsail buckets.</p> </li> <li> <p> <code>Failed</code> - Synchronization failed. The Amazon S3 account-level BPA configuration does not apply to your Lightsail buckets.</p> </li> <li> <p> <code>Defaulted</code> - Synchronization failed and account-level BPA for your Lightsail buckets is defaulted to <i>active</i>.</p> </li> </ul> <note> <p>You might need to complete further actions if the status is <code>Failed</code> or <code>Defaulted</code>. The <code>message</code> parameter provides more information for those statuses.</p> </note>',
        }),
    ).exactOptional(),
    lastSyncedAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of when the account-level BPA configuration was last synchronized. This value is null when the account-level BPA configuration has not been synchronized.',
        }),
    ).exactOptional(),
    message: BPAStatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A message that provides a reason for a <code>Failed</code> or <code>Defaulted</code> synchronization status.</p> <p>The following messages are possible:</p> <ul> <li> <p> <code>SYNC_ON_HOLD</code> - The synchronization has not yet happened. This status message occurs immediately after you create your first Lightsail bucket. This status message should change after the first synchronization happens, approximately 1 hour after the first bucket is created.</p> </li> <li> <p> <code>DEFAULTED_FOR_SLR_MISSING</code> - The synchronization failed because the required service-linked role is missing from your Amazon Web Services account. The account-level BPA configuration for your Lightsail buckets is defaulted to <i>active</i> until the synchronization can occur. This means that all your buckets are private and not publicly accessible. For more information about how to create the required service-linked role to allow synchronization, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-using-service-linked-roles">Using Service-Linked Roles for Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </li> <li> <p> <code>DEFAULTED_FOR_SLR_MISSING_ON_HOLD</code> - The synchronization failed because the required service-linked role is missing from your Amazon Web Services account. Account-level BPA is not yet configured for your Lightsail buckets. Therefore, only the bucket access permissions and individual object access permissions apply to your Lightsail buckets. For more information about how to create the required service-linked role to allow synchronization, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-using-service-linked-roles">Using Service-Linked Roles for Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </li> <li> <p> <code>Unknown</code> - The reason that synchronization failed is unknown. Contact Amazon Web Services Support for more information.</p> </li> </ul>',
        }),
    ).exactOptional(),
    bpaImpactsLightsail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether account-level block public access is affecting your Lightsail buckets.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access (BPA) feature for your Lightsail buckets.</p> <p>The account-level BPA feature of Amazon S3 provides centralized controls to limit public access to all Amazon S3 buckets in an account. BPA can make all Amazon S3 buckets in an Amazon Web Services account private regardless of the individual bucket and object permissions that are configured. Lightsail buckets take into account the Amazon S3 account-level BPA configuration when allowing or denying public access. To do this, Lightsail periodically fetches the account-level BPA configuration from Amazon S3. When the account-level BPA status is <code>InSync</code>, the Amazon S3 account-level BPA configuration is synchronized and it applies to your Lightsail buckets. For more information about Amazon Simple Storage Service account-level BPA and how it affects Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('AccountLevelBpaSync')

const GetBucketsResultSchema = z
  .object({
    buckets: BucketListSchema.and(
      z.any().openapi({ description: 'An array of objects that describe buckets.' }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetBuckets</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
    accountLevelBpaSync: AccountLevelBpaSyncSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the synchronization status of the Amazon S3 account-level block public access feature for your Lightsail buckets.</p> <p>For more information about this feature and how it affects Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketsResult')

const GetBucketsRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the bucket for which to return information.</p> <p>When omitted, the response includes all of your buckets in the Amazon Web Services Region where the request is made.</p>',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetBuckets</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
    includeConnectedResources: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether to include Lightsail instances that were given access to the bucket using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a> action.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetBucketsRequest', required: [] })
  .openapi('GetBucketsRequest')

const InstancePlatformListSchema = z.array(InstancePlatformSchema).openapi('InstancePlatformList')

const AppCategoryListSchema = z.array(AppCategorySchema).openapi('AppCategoryList')

const BundleSchema = z
  .object({
    price: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'The price in US dollars (e.g., <code>5.0</code>) of the bundle.',
        }),
    ).exactOptional(),
    cpuCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of vCPUs included in the bundle (e.g., <code>2</code>).',
        }),
    ).exactOptional(),
    diskSizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the SSD (e.g., <code>30</code>).' }),
    ).exactOptional(),
    bundleId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The bundle ID (e.g., <code>micro_1_0</code>).' }),
    ).exactOptional(),
    instanceType: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon EC2 instance type (e.g., <code>t2.micro</code>).' }),
    ).exactOptional(),
    isActive: BooleanSchema.and(
      z.any().openapi({ description: 'A Boolean value indicating whether the bundle is active.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A friendly name for the bundle (e.g., <code>Micro</code>).' }),
    ).exactOptional(),
    power: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "A numeric value that represents the power of the bundle (e.g., <code>500</code>). You can use the bundle's power value in conjunction with a blueprint's minimum power value to determine whether the blueprint will run on the bundle. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500.",
        }),
    ).exactOptional(),
    ramSizeInGb: FloatSchema.and(
      z.any().openapi({ description: 'The amount of RAM in GB (e.g., <code>2.0</code>).' }),
    ).exactOptional(),
    transferPerMonthInGb: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The data transfer rate per month in GB (e.g., <code>2000</code>).',
        }),
    ).exactOptional(),
    supportedPlatforms: InstancePlatformListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle supports. You can only launch a <code>WINDOWS</code> bundle on a blueprint that supports the <code>WINDOWS</code> platform. <code>LINUX_UNIX</code> blueprints require a <code>LINUX_UNIX</code> bundle.',
        }),
    ).exactOptional(),
    supportedAppCategories: AppCategoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Virtual computer blueprints that are supported by a Lightsail for Research bundle.</p> <important> <p>This parameter only applies to Lightsail for Research resources.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).',
    required: [],
  })
  .openapi('Bundle')

const BundleListSchema = z.array(BundleSchema).openapi('BundleList')

const GetBundlesResultSchema = z
  .object({
    bundles: BundleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs that contains information about the available bundles.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetBundles</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBundlesResult')

const GetBundlesRequestSchema = z
  .object({
    includeInactive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether to include inactive (unavailable) bundles in the response of your request.',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetBundles</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
    appCategory: AppCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Returns a list of bundles that are specific to Lightsail for Research.</p> <important> <p>You must use this parameter to view Lightsail for Research bundles.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetBundlesRequest', required: [] })
  .openapi('GetBundlesRequest')

const CertificateSummaryListSchema = z
  .array(CertificateSummarySchema)
  .openapi('CertificateSummaryList')

const GetCertificatesResultSchema = z
  .object({
    certificates: CertificateSummaryListSchema.and(
      z.any().openapi({ description: 'An object that describes certificates.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCertificatesResult')

const CertificateStatusListSchema = z
  .array(CertificateStatusSchema)
  .openapi('CertificateStatusList')

const IncludeCertificateDetailsSchema = z.boolean().openapi('IncludeCertificateDetails')

const GetCertificatesRequestSchema = z
  .object({
    certificateStatuses: CertificateStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the certificates for which to return information.</p> <p>For example, specify <code>ISSUED</code> to return only certificates with an <code>ISSUED</code> status.</p> <p>When omitted, the response includes all of your certificates in the Amazon Web Services Region where the request is made, regardless of their current status.</p>',
        }),
    ).exactOptional(),
    includeCertificateDetails: IncludeCertificateDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to include detailed information about the certificates in the response.</p> <p>When omitted, the response includes only the certificate names, Amazon Resource Names (ARNs), domain names, and tags.</p>',
        }),
    ).exactOptional(),
    certificateName: CertificateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the certificate for which to return information.</p> <p>When omitted, the response includes all of your certificates in the Amazon Web Services Region where the request is made.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetCertificatesRequest', required: [] })
  .openapi('GetCertificatesRequest')

const RecordStateSchema = z.enum(['Started', 'Succeeded', 'Failed']).openapi('RecordState')

const CloudFormationStackRecordSourceTypeSchema = z
  .literal('ExportSnapshotRecord')
  .openapi('CloudFormationStackRecordSourceType')

const CloudFormationStackRecordSourceInfoSchema = z
  .object({
    resourceType: CloudFormationStackRecordSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).',
        }),
    ).exactOptional(),
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the record.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the export snapshot record.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the source of a CloudFormation stack record (i.e., the export snapshot record).',
    required: [],
  })
  .openapi('CloudFormationStackRecordSourceInfo')

const CloudFormationStackRecordSourceInfoListSchema = z
  .array(CloudFormationStackRecordSourceInfoSchema)
  .openapi('CloudFormationStackRecordSourceInfoList')

const DestinationInfoSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the resource created at the destination.' }),
    ).exactOptional(),
    service: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The destination service of the record.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the destination of a record.', required: [] })
  .openapi('DestinationInfo')

const CloudFormationStackRecordSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the CloudFormation stack record. It starts with <code>CloudFormationStackRecord</code> followed by a GUID.',
        }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the CloudFormation stack record.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({ description: 'The date when the CloudFormation stack record was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects describing the Availability Zone and Amazon Web Services Region of the CloudFormation stack record.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lightsail resource type (e.g., <code>CloudFormationStackRecord</code>).',
        }),
    ).exactOptional(),
    state: RecordStateSchema.and(
      z.any().openapi({ description: 'The current state of the CloudFormation stack record.' }),
    ).exactOptional(),
    sourceInfo: CloudFormationStackRecordSourceInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects describing the source of the CloudFormation stack record.',
        }),
    ).exactOptional(),
    destinationInfo: DestinationInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon Resource Name (ARN) of the AWS CloudFormation stack.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>',
    required: [],
  })
  .openapi('CloudFormationStackRecord')

const CloudFormationStackRecordListSchema = z
  .array(CloudFormationStackRecordSchema)
  .openapi('CloudFormationStackRecordList')

const GetCloudFormationStackRecordsResultSchema = z
  .object({
    cloudFormationStackRecords: CloudFormationStackRecordListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of objects describing the CloudFormation stack records.' }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetCloudFormationStackRecords</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCloudFormationStackRecordsResult')

const GetCloudFormationStackRecordsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetClouFormationStackRecords</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetCloudFormationStackRecordsRequest', required: [] })
  .openapi('GetCloudFormationStackRecordsRequest')

const ContactMethodStatusSchema = z
  .enum(['PendingVerification', 'Valid', 'Invalid'])
  .openapi('ContactMethodStatus')

const ContactMethodSchema = z
  .object({
    contactEndpoint: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination of the contact method, such as an email address or a mobile phone number.',
        }),
    ).exactOptional(),
    status: ContactMethodStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the contact method.</p> <p>A contact method has the following possible status:</p> <ul> <li> <p> <code>PendingVerification</code> - The contact method has not yet been verified, and the verification has not yet expired.</p> </li> <li> <p> <code>Valid</code> - The contact method has been verified.</p> </li> <li> <p> <code>InValid</code> - An attempt was made to verify the contact method, but the verification has expired.</p> </li> </ul>',
        }),
    ).exactOptional(),
    protocol: ContactProtocolSchema.and(
      z
        .any()
        .openapi({
          description: 'The protocol of the contact method, such as email or SMS (text messaging).',
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the contact method.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact method.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the contact method was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the location of the contact method, such as the Amazon Web Services Region and Availability Zone.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Lightsail resource type (e.g., <code>ContactMethod</code>).',
        }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about your Lightsail contact method. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>',
    required: [],
  })
  .openapi('ContactMethod')

const ContactMethodsListSchema = z.array(ContactMethodSchema).openapi('ContactMethodsList')

const GetContactMethodsResultSchema = z
  .object({
    contactMethods: ContactMethodsListSchema.and(
      z.any().openapi({ description: 'An array of objects that describe the contact methods.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContactMethodsResult')

const GetContactMethodsRequestSchema = z
  .object({
    protocols: ContactProtocolsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocols used to send notifications, such as <code>Email</code>, or <code>SMS</code> (text messaging).</p> <p>Specify a protocol in your request to return information about a specific contact method protocol.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetContactMethodsRequest', required: [] })
  .openapi('GetContactMethodsRequest')

const ContainerServiceMetadataEntrySchema = z
  .record(z.string(), StringSchema)
  .openapi('ContainerServiceMetadataEntry')

const ContainerServiceMetadataEntryListSchema = z
  .array(ContainerServiceMetadataEntrySchema)
  .openapi('ContainerServiceMetadataEntryList')

const GetContainerAPIMetadataResultSchema = z
  .object({
    metadata: ContainerServiceMetadataEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata about Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContainerAPIMetadataResult')

const GetContainerAPIMetadataRequestSchema = z
  .object({})
  .openapi({ title: 'GetContainerAPIMetadataRequest' })
  .openapi('GetContainerAPIMetadataRequest')

const ContainerImageSchema = z
  .object({
    image: StringSchema.and(
      z.any().openapi({ description: 'The name of the container image.' }),
    ).exactOptional(),
    digest: StringSchema.and(
      z.any().openapi({ description: 'The digest of the container image.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the container image was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a container image that is registered to an Amazon Lightsail container service.',
    required: [],
  })
  .openapi('ContainerImage')

const ContainerImageListSchema = z.array(ContainerImageSchema).openapi('ContainerImageList')

const GetContainerImagesResultSchema = z
  .object({
    containerImages: ContainerImageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe container images that are registered to the container service.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContainerImagesResult')

const GetContainerImagesRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container service for which to return registered container images.',
        }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'GetContainerImagesRequest' })
  .openapi('GetContainerImagesRequest')

const ContainerServiceLogEventSchema = z
  .object({
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp when the container service log event was created.',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'The message of the container service log event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the log events of a container of an Amazon Lightsail container service.',
    required: [],
  })
  .openapi('ContainerServiceLogEvent')

const ContainerServiceLogEventListSchema = z
  .array(ContainerServiceLogEventSchema)
  .openapi('ContainerServiceLogEventList')

const GetContainerLogResultSchema = z
  .object({
    logEvents: ContainerServiceLogEventListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe the log events of a container.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetContainerLog</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContainerLogResult')

const GetContainerLogRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container service for which to get a container log.',
        }),
    ),
    containerName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container that is either running or previously ran on the container service for which to return a log.',
        }),
    ),
    startTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start of the time interval for which to get log data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify <code>1538424000</code> as the start time.</p> </li> </ul> <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>',
        }),
    ).exactOptional(),
    endTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the time interval for which to get log data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify <code>1538427600</code> as the end time.</p> </li> </ul> <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>',
        }),
    ).exactOptional(),
    filterPattern: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pattern to use to filter the returned log events to a specific term.</p> <p>The following are a few examples of filter patterns that you can specify:</p> <ul> <li> <p>To return all log events, specify a filter pattern of <code>""</code>.</p> </li> <li> <p>To exclude log events that contain the <code>ERROR</code> term, and return all other log events, specify a filter pattern of <code>"-ERROR"</code>.</p> </li> <li> <p>To return log events that contain the <code>ERROR</code> term, specify a filter pattern of <code>"ERROR"</code>.</p> </li> <li> <p>To return log events that contain both the <code>ERROR</code> and <code>Exception</code> terms, specify a filter pattern of <code>"ERROR Exception"</code>.</p> </li> <li> <p>To return log events that contain the <code>ERROR</code> <i>or</i> the <code>Exception</code> term, specify a filter pattern of <code>"?ERROR ?Exception"</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetContainerLog</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['serviceName', 'containerName'], title: 'GetContainerLogRequest' })
  .openapi('GetContainerLogRequest')

const ContainerServiceDeploymentListSchema = z
  .array(ContainerServiceDeploymentSchema)
  .openapi('ContainerServiceDeploymentList')

const GetContainerServiceDeploymentsResultSchema = z
  .object({
    deployments: ContainerServiceDeploymentListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe deployments for a container service.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContainerServiceDeploymentsResult')

const GetContainerServiceDeploymentsRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container service for which to return deployments.',
        }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'GetContainerServiceDeploymentsRequest' })
  .openapi('GetContainerServiceDeploymentsRequest')

const ContainerServiceMetricNameSchema = z
  .enum(['CPUUtilization', 'MemoryUtilization'])
  .openapi('ContainerServiceMetricName')

const GetContainerServiceMetricDataResultSchema = z
  .object({
    metricName: ContainerServiceMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric returned. ' }),
    ).exactOptional(),
    metricData: MetricDatapointListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe the metric data returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContainerServiceMetricDataResult')

const GetContainerServiceMetricDataRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container service for which to get metric data.',
        }),
    ),
    metricName: ContainerServiceMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric for which you want to return information.</p> <p>Valid container service metric names are listed below, along with the most useful statistics to include in your request, and the published unit value.</p> <ul> <li> <p> <code>CPUUtilization</code> - The average percentage of compute units that are currently in use across all nodes of the container service. This metric identifies the processing power required to run containers on each node of the container service.</p> <p>Statistics: The most useful statistics are <code>Maximum</code> and <code>Average</code>.</p> <p>Unit: The published unit is <code>Percent</code>.</p> </li> <li> <p> <code>MemoryUtilization</code> - The average percentage of available memory that is currently in use across all nodes of the container service. This metric identifies the memory required to run containers on each node of the container service.</p> <p>Statistics: The most useful statistics are <code>Maximum</code> and <code>Average</code>.</p> <p>Unit: The published unit is <code>Percent</code>.</p> </li> </ul>',
        }),
    ),
    startTime: IsoDateSchema.and(
      z.any().openapi({ description: 'The start time of the time period.' }),
    ),
    endTime: IsoDateSchema.and(
      z.any().openapi({ description: 'The end time of the time period.' }),
    ),
    period: MetricPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The granularity, in seconds, of the returned data points.</p> <p>All container service metric data is available in 5-minute (300 seconds) granularity.</p>',
        }),
    ),
    statistics: MetricStatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic for the metric.</p> <p>The following statistics are available:</p> <ul> <li> <p> <code>Minimum</code> - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <code>Maximum</code> - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.</p> </li> <li> <p> <code>Sum</code> - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.</p> </li> <li> <p> <code>Average</code> - The value of <code>Sum</code> / <code>SampleCount</code> during the specified period. By comparing this statistic with the <code>Minimum</code> and <code>Maximum</code> values, you can determine the full scope of a metric and how close the average use is to the <code>Minimum</code> and <code>Maximum</code> values. This comparison helps you to know when to increase or decrease your resources.</p> </li> <li> <p> <code>SampleCount</code> - The count, or number, of data points used for the statistical calculation.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['serviceName', 'metricName', 'startTime', 'endTime', 'period', 'statistics'],
    title: 'GetContainerServiceMetricDataRequest',
  })
  .openapi('GetContainerServiceMetricDataRequest')

const ContainerServicePowerSchema = z
  .object({
    powerId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the power (e.g., <code>nano-1</code>).' }),
    ).exactOptional(),
    price: FloatSchema.and(
      z.any().openapi({ description: 'The monthly price of the power in USD.' }),
    ).exactOptional(),
    cpuCount: FloatSchema.and(
      z.any().openapi({ description: 'The number of vCPUs included in the power.' }),
    ).exactOptional(),
    ramSizeInGb: FloatSchema.and(
      z.any().openapi({ description: 'The amount of RAM (in GB) of the power.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The friendly name of the power (e.g., <code>nano</code>).' }),
    ).exactOptional(),
    isActive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether the power is active and can be specified for container services.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>',
    required: [],
  })
  .openapi('ContainerServicePower')

const ContainerServicePowerListSchema = z
  .array(ContainerServicePowerSchema)
  .openapi('ContainerServicePowerList')

const GetContainerServicePowersResultSchema = z
  .object({
    powers: ContainerServicePowerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the powers that can be specified for a container service.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContainerServicePowersResult')

const GetContainerServicePowersRequestSchema = z
  .object({})
  .openapi({ title: 'GetContainerServicePowersRequest' })
  .openapi('GetContainerServicePowersRequest')

const ContainerServiceListSchema = z.array(ContainerServiceSchema).openapi('ContainerServiceList')

const ContainerServicesListResultSchema = z
  .object({
    containerServices: ContainerServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe one or more container services.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContainerServicesListResult')

const GetContainerServicesRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the container service for which to return information.</p> <p>When omitted, the response includes all of your container services in the Amazon Web Services Region where the request is made.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetContainerServicesRequest', required: [] })
  .openapi('GetContainerServicesRequest')

const PricingUnitSchema = z
  .enum(['GB', 'Hrs', 'GB-Mo', 'Bundles', 'Queries'])
  .openapi('PricingUnit')

const CurrencySchema = z.literal('USD').openapi('Currency')

const TimePeriodSchema = z
  .object({
    start: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning of the time period. The start date is inclusive. For example, if <code>start</code> is <code>2017-01-01</code>, Lightsail for Research retrieves cost and usage data starting at <code>2017-01-01</code> up to the end date. The start date must be equal to or no later than the current date to avoid a validation error.',
        }),
    ).exactOptional(),
    end: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time period. The end date is exclusive. For example, if <code>end</code> is <code>2017-05-01</code>, Lightsail for Research retrieves cost and usage data from the start date up to, but not including, <code>2017-05-01</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Sets the start date and end date for retrieving a cost estimate. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.',
    required: [],
  })
  .openapi('TimePeriod')

const EstimateByTimeSchema = z
  .object({
    usageCost: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: "The amount of cost or usage that's measured for the cost estimate.",
        }),
    ).exactOptional(),
    pricingUnit: PricingUnitSchema.and(
      z
        .any()
        .openapi({ description: "The unit of measurement that's used for the cost estimate." }),
    ).exactOptional(),
    unit: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of pricing units used to calculate the total number of hours. For example, 1 unit equals 1 hour.',
        }),
    ).exactOptional(),
    currency: CurrencySchema.and(
      z.any().openapi({ description: 'The currency of the estimate in USD.' }),
    ).exactOptional(),
    timePeriod: TimePeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period of time, in days, that an estimate covers. The period has a start date and an end date. The start date must come before the end date.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "An estimate that's associated with a time period. ", required: [] })
  .openapi('EstimateByTime')

const EstimatesByTimeSchema = z.array(EstimateByTimeSchema).openapi('EstimatesByTime')

const CostEstimateSchema = z
  .object({
    usageType: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of usage that are included in the estimate, such as costs, usage, or data transfer.',
        }),
    ).exactOptional(),
    resultsByTime: EstimatesByTimeSchema.and(
      z
        .any()
        .openapi({ description: "The cost estimate result that's associated with a time period." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the estimated cost for resources in your Lightsail for Research account.',
    required: [],
  })
  .openapi('CostEstimate')

const CostEstimatesSchema = z.array(CostEstimateSchema).openapi('CostEstimates')

const ResourceBudgetEstimateSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The resource name.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource the budget will track.' }),
    ).exactOptional(),
    costEstimates: CostEstimatesSchema.and(
      z.any().openapi({ description: 'The cost estimate for the specified budget.' }),
    ).exactOptional(),
    startTime: IsoDateSchema.and(
      z.any().openapi({ description: 'The estimate start time.' }),
    ).exactOptional(),
    endTime: IsoDateSchema.and(
      z.any().openapi({ description: 'The estimate end time.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the estimated cost or usage that a budget tracks.',
    required: [],
  })
  .openapi('ResourceBudgetEstimate')

const ResourcesBudgetEstimateSchema = z
  .array(ResourceBudgetEstimateSchema)
  .openapi('ResourcesBudgetEstimate')

const GetCostEstimateResultSchema = z
  .object({
    resourcesBudgetEstimate: ResourcesBudgetEstimateSchema.and(
      z.any().openapi({ description: "Returns the estimate's forecasted cost or usage." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCostEstimateResult')

const GetCostEstimateRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(z.any().openapi({ description: 'The resource name.' })),
    startTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cost estimate start time.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify <code>1538424000</code> as the start time.</p> </li> </ul> <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>',
        }),
    ),
    endTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cost estimate end time.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify <code>1538427600</code> as the end time.</p> </li> </ul> <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['resourceName', 'startTime', 'endTime'], title: 'GetCostEstimateRequest' })
  .openapi('GetCostEstimateRequest')

const AddOnSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the add-on.' }),
    ).exactOptional(),
    status: StringSchema.and(
      z.any().openapi({ description: 'The status of the add-on.' }),
    ).exactOptional(),
    snapshotTimeOfDay: TimeOfDaySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time when an automatic snapshot is created.</p> <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time (UTC).</p> <p>The snapshot is automatically created between the time shown and up to 45 minutes after.</p>',
        }),
    ).exactOptional(),
    nextSnapshotTimeOfDay: TimeOfDaySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The next daily time an automatic snapshot will be created.</p> <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time (UTC).</p> <p>The snapshot is automatically created between the time shown and up to 45 minutes after.</p>',
        }),
    ).exactOptional(),
    threshold: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The trigger threshold of the action.</p> <important> <p>This add-on only applies to Lightsail for Research resources.</p> </important>',
        }),
    ).exactOptional(),
    duration: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of idle time in minutes after which your virtual computer will automatically stop.</p> <important> <p>This add-on only applies to Lightsail for Research resources.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an add-on that is enabled for an Amazon Lightsail resource.',
    required: [],
  })
  .openapi('AddOn')

const AddOnListSchema = z.array(AddOnSchema).openapi('AddOnList')

const DiskStateSchema = z
  .enum(['pending', 'error', 'available', 'in-use', 'unknown'])
  .openapi('DiskState')

const AutoMountStatusSchema = z
  .enum(['Failed', 'Pending', 'Mounted', 'NotMounted'])
  .openapi('AutoMountStatus')

const DiskSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The unique name of the disk.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the disk.' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The date when the disk was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS Region and Availability Zone where the disk is located.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The Lightsail resource type (e.g., <code>Disk</code>).' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    addOns: AddOnListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects representing the add-ons enabled on the disk.',
        }),
    ).exactOptional(),
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk in GB.' }),
    ).exactOptional(),
    isSystemDisk: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).',
        }),
    ).exactOptional(),
    iops: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The input/output operations per second (IOPS) of the disk.' }),
    ).exactOptional(),
    path: StringSchema.and(z.any().openapi({ description: 'The disk path.' })).exactOptional(),
    state: DiskStateSchema.and(
      z.any().openapi({ description: 'Describes the status of the disk.' }),
    ).exactOptional(),
    attachedTo: ResourceNameSchema.and(
      z.any().openapi({ description: 'The resources to which the disk is attached.' }),
    ).exactOptional(),
    isAttached: BooleanSchema.and(
      z.any().openapi({ description: 'A Boolean value indicating whether the disk is attached.' }),
    ).exactOptional(),
    attachmentState: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>(Deprecated) The attachment state of the disk.</p> <note> <p>In releases prior to November 14, 2017, this parameter returned <code>attached</code> for system disks in the API response. It is now deprecated, but still included in the response. Use <code>isAttached</code> instead.</p> </note>',
        }),
    ).exactOptional(),
    gbInUse: IntegerSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>(Deprecated) The number of GB in use by the disk.</p> <note> <p>In releases prior to November 14, 2017, this parameter was not included in the API response. It is now deprecated.</p> </note>',
        }),
    ).exactOptional(),
    autoMountStatus: AutoMountStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of automatically mounting a storage disk to a virtual computer.</p> <important> <p>This parameter only applies to Lightsail for Research resources.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a block storage disk.', required: [] })
  .openapi('Disk')

const GetDiskResultSchema = z
  .object({
    disk: DiskSchema.and(
      z.any().openapi({ description: 'An object containing information about the disk.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDiskResult')

const GetDiskRequestSchema = z
  .object({
    diskName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the disk (e.g., <code>my-disk</code>).' }),
    ),
  })
  .openapi({ required: ['diskName'], title: 'GetDiskRequest' })
  .openapi('GetDiskRequest')

const DiskSnapshotStateSchema = z
  .enum(['pending', 'completed', 'error', 'unknown'])
  .openapi('DiskSnapshotState')

const DiskSnapshotSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).',
        }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the disk snapshot.' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The date when the disk snapshot was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS Region and Availability Zone where the disk snapshot was created.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The Lightsail resource type (e.g., <code>DiskSnapshot</code>).' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk in GB.' }),
    ).exactOptional(),
    state: DiskSnapshotStateSchema.and(
      z.any().openapi({ description: 'The status of the disk snapshot operation.' }),
    ).exactOptional(),
    progress: StringSchema.and(
      z.any().openapi({ description: 'The progress of the snapshot.' }),
    ).exactOptional(),
    fromDiskName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the source disk from which the disk snapshot was created.',
        }),
    ).exactOptional(),
    fromDiskArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was created.',
        }),
    ).exactOptional(),
    fromInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the source instance from which the disk (system volume) snapshot was created.',
        }),
    ).exactOptional(),
    fromInstanceArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source instance from which the disk (system volume) snapshot was created.',
        }),
    ).exactOptional(),
    isFromAutoSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether the snapshot was created from an automatic snapshot.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a block storage disk snapshot.', required: [] })
  .openapi('DiskSnapshot')

const GetDiskSnapshotResultSchema = z
  .object({
    diskSnapshot: DiskSnapshotSchema.and(
      z.any().openapi({ description: 'An object containing information about the disk snapshot.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDiskSnapshotResult')

const GetDiskSnapshotRequestSchema = z
  .object({
    diskSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).',
        }),
    ),
  })
  .openapi({ required: ['diskSnapshotName'], title: 'GetDiskSnapshotRequest' })
  .openapi('GetDiskSnapshotRequest')

const DiskSnapshotListSchema = z.array(DiskSnapshotSchema).openapi('DiskSnapshotList')

const GetDiskSnapshotsResultSchema = z
  .object({
    diskSnapshots: DiskSnapshotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects containing information about all block storage disk snapshots.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetDiskSnapshots</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDiskSnapshotsResult')

const GetDiskSnapshotsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetDiskSnapshots</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDiskSnapshotsRequest', required: [] })
  .openapi('GetDiskSnapshotsRequest')

const DiskListSchema = z.array(DiskSchema).openapi('DiskList')

const GetDisksResultSchema = z
  .object({
    disks: DiskListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects containing information about all block storage disks.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetDisks</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDisksResult')

const GetDisksRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetDisks</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDisksRequest', required: [] })
  .openapi('GetDisksRequest')

const DistributionBundleSchema = z
  .object({
    bundleId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the bundle.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the distribution bundle.' }),
    ).exactOptional(),
    price: FloatSchema.and(
      z.any().openapi({ description: 'The monthly price, in US dollars, of the bundle.' }),
    ).exactOptional(),
    transferPerMonthInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The monthly network transfer quota of the bundle.' }),
    ).exactOptional(),
    isActive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the bundle is active, and can be specified for a new or existing distribution.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the specifications of a distribution bundle.', required: [] })
  .openapi('DistributionBundle')

const DistributionBundleListSchema = z
  .array(DistributionBundleSchema)
  .openapi('DistributionBundleList')

const GetDistributionBundlesResultSchema = z
  .object({
    bundles: DistributionBundleListSchema.and(
      z.any().openapi({ description: 'An object that describes a distribution bundle.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDistributionBundlesResult')

const GetDistributionBundlesRequestSchema = z
  .object({})
  .openapi({ title: 'GetDistributionBundlesRequest' })
  .openapi('GetDistributionBundlesRequest')

const GetDistributionLatestCacheResetResultSchema = z
  .object({
    status: StringSchema.and(
      z.any().openapi({ description: 'The status of the last cache reset.' }),
    ).exactOptional(),
    createTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of the last cache reset (e.g., <code>1479734909.17</code>) in Unix time format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDistributionLatestCacheResetResult')

const GetDistributionLatestCacheResetRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution for which to return the timestamp of the last cache reset.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p> <p>When omitted, the response includes the latest cache reset timestamp of all your distributions.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDistributionLatestCacheResetRequest', required: [] })
  .openapi('GetDistributionLatestCacheResetRequest')

const DistributionMetricNameSchema = z
  .enum([
    'Requests',
    'BytesDownloaded',
    'BytesUploaded',
    'TotalErrorRate',
    'Http4xxErrorRate',
    'Http5xxErrorRate',
  ])
  .openapi('DistributionMetricName')

const GetDistributionMetricDataResultSchema = z
  .object({
    metricName: DistributionMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric returned.' }),
    ).exactOptional(),
    metricData: MetricDatapointListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe the metric data returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDistributionMetricDataResult')

const GetDistributionMetricDataRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution for which to get metric data.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p>',
        }),
    ),
    metricName: DistributionMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The metric for which you want to return information.</p> <p>Valid distribution metric names are listed below, along with the most useful <code>statistics</code> to include in your request, and the published <code>unit</code> value.</p> <ul> <li> <p> <b> <code>Requests</code> </b> - The total number of viewer requests received by your Lightsail distribution, for all HTTP methods, and for both HTTP and HTTPS requests.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>None</code>.</p> </li> <li> <p> <b> <code>BytesDownloaded</code> </b> - The number of bytes downloaded by viewers for GET, HEAD, and OPTIONS requests.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>None</code>.</p> </li> <li> <p> <b> <code>BytesUploaded </code> </b> - The number of bytes uploaded to your origin by your Lightsail distribution, using POST and PUT requests.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>None</code>.</p> </li> <li> <p> <b> <code>TotalErrorRate</code> </b> - The percentage of all viewer requests for which the response's HTTP status code was 4xx or 5xx.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Percent</code>.</p> </li> <li> <p> <b> <code>4xxErrorRate</code> </b> - The percentage of all viewer requests for which the response's HTTP status cod was 4xx. In these cases, the client or client viewer may have made an error. For example, a status code of 404 (Not Found) means that the client requested an object that could not be found.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Percent</code>.</p> </li> <li> <p> <b> <code>5xxErrorRate</code> </b> - The percentage of all viewer requests for which the response's HTTP status code was 5xx. In these cases, the origin server did not satisfy the requests. For example, a status code of 503 (Service Unavailable) means that the origin server is currently unavailable.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Percent</code>.</p> </li> </ul>",
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start of the time interval for which to get metric data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify <code>1538424000</code> as the start time.</p> </li> </ul> <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>',
        }),
    ),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the time interval for which to get metric data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify <code>1538427600</code> as the end time.</p> </li> </ul> <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>',
        }),
    ),
    period: MetricPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The granularity, in seconds, for the metric data points that will be returned.',
        }),
    ),
    unit: MetricUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unit for the metric data request.</p> <p>Valid units depend on the metric data being requested. For the valid units with each available metric, see the <code>metricName</code> parameter.</p>',
        }),
    ),
    statistics: MetricStatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic for the metric.</p> <p>The following statistics are available:</p> <ul> <li> <p> <code>Minimum</code> - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <code>Maximum</code> - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.</p> </li> <li> <p> <code>Sum</code> - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.</p> </li> <li> <p> <code>Average</code> - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.</p> </li> <li> <p> <code>SampleCount</code> - The count, or number, of data points used for the statistical calculation.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: [
      'distributionName',
      'metricName',
      'startTime',
      'endTime',
      'period',
      'unit',
      'statistics',
    ],
    title: 'GetDistributionMetricDataRequest',
  })
  .openapi('GetDistributionMetricDataRequest')

const DistributionListSchema = z.array(LightsailDistributionSchema).openapi('DistributionList')

const GetDistributionsResultSchema = z
  .object({
    distributions: DistributionListSchema.and(
      z.any().openapi({ description: 'An array of objects that describe your distributions.' }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetDistributions</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDistributionsResult')

const GetDistributionsRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution for which to return information.</p> <p>When omitted, the response includes all of your distributions in the Amazon Web Services Region where the request is made.</p>',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetDistributions</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDistributionsRequest', required: [] })
  .openapi('GetDistributionsRequest')

const DomainEntryListSchema = z.array(DomainEntrySchema).openapi('DomainEntryList')

const NameServersUpdateStateCodeSchema = z
  .enum(['SUCCEEDED', 'PENDING', 'FAILED', 'STARTED'])
  .openapi('NameServersUpdateStateCode')

const NameServersUpdateStateSchema = z
  .object({
    code: NameServersUpdateStateCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status code for the name servers update.</p> <p>Following are the possible values:</p> <ul> <li> <p> <code>SUCCEEDED</code> - The name server records were successfully updated.</p> </li> <li> <p> <code>PENDING</code> - The name server record update is in progress.</p> </li> <li> <p> <code>FAILED</code> - The name server record update failed.</p> </li> <li> <p> <code>STARTED</code> - The automatic name server record update started.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The message that describes the reason for the status code.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the state of the name server records update made by Amazon Lightsail to an Amazon Route 53 registered domain.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-dns-in-amazon-lightsail">DNS in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('NameServersUpdateState')

const R53HostedZoneDeletionStateCodeSchema = z
  .enum(['SUCCEEDED', 'PENDING', 'FAILED', 'STARTED'])
  .openapi('R53HostedZoneDeletionStateCode')

const R53HostedZoneDeletionStateSchema = z
  .object({
    code: R53HostedZoneDeletionStateCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status code for the deletion state.</p> <p>Following are the possible values:</p> <ul> <li> <p> <code>SUCCEEDED</code> - The hosted zone was successfully deleted.</p> </li> <li> <p> <code>PENDING</code> - The hosted zone deletion is in progress.</p> </li> <li> <p> <code>FAILED</code> - The hosted zone deletion failed.</p> </li> <li> <p> <code>STARTED</code> - The hosted zone deletion started.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The message that describes the reason for the status code.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone.',
    required: [],
  })
  .openapi('R53HostedZoneDeletionState')

const RegisteredDomainDelegationInfoSchema = z
  .object({
    nameServersUpdateState: NameServersUpdateStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the state of the name server records that are automatically added to the Route 53 domain by Lightsail.',
        }),
    ).exactOptional(),
    r53HostedZoneDeletionState: R53HostedZoneDeletionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the delegation state of an Amazon Route 53 registered domain to Amazon Lightsail.</p> <p>When you delegate an Amazon Route 53 registered domain to Lightsail, you can manage the DNS of the domain using a Lightsail DNS zone. You no longer use the Route 53 hosted zone to manage the DNS of the domain. To delegate the domain, Lightsail automatically updates the domain\'s name servers in Route 53 to the name servers of the Lightsail DNS zone. Then, Lightsail automatically deletes the Route 53 hosted zone for the domain.</p> <p>All of the following conditions must be true for automatic domain delegation to be successful:</p> <ul> <li> <p>The registered domain must be in the same Amazon Web Services account as the Lightsail account making the request.</p> </li> <li> <p>The user or entity making the request must have permission to manage domains in Route 53.</p> </li> <li> <p>The Route 53 hosted zone for the domain must be empty. It cannot contain DNS records other than start of authority (SOA) and name server records.</p> </li> </ul> <p>If automatic domain delegation fails, or if you manage the DNS of your domain using a service other than Route 53, then you must manually add the Lightsail DNS zone name servers to your domain in order to delegate management of its DNS to Lightsail. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry">Creating a DNS zone to manage your domain’s records in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('RegisteredDomainDelegationInfo')

const DomainSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the domain.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the domain recordset (e.g., <code>arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE</code>).',
        }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The date when the domain recordset was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Region and Availability Zones where the domain recordset was created.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type. ' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    domainEntries: DomainEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the domain entries.',
        }),
    ).exactOptional(),
    registeredDomainDelegationInfo: RegisteredDomainDelegationInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the state of the Route 53 domain delegation to a Lightsail DNS zone.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a domain where you are storing recordsets.', required: [] })
  .openapi('Domain')

const GetDomainResultSchema = z
  .object({
    domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about your get domain request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDomainResult')

const GetDomainRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name for which your want to return information about.',
        }),
    ),
  })
  .openapi({ required: ['domainName'], title: 'GetDomainRequest' })
  .openapi('GetDomainRequest')

const DomainListSchema = z.array(DomainSchema).openapi('DomainList')

const GetDomainsResultSchema = z
  .object({
    domains: DomainListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of key-value pairs containing information about each of the domain entries in the user's account.",
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetDomains</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDomainsResult')

const GetDomainsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetDomains</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDomainsRequest', required: [] })
  .openapi('GetDomainsRequest')

const ExportSnapshotRecordSourceTypeSchema = z
  .enum(['InstanceSnapshot', 'DiskSnapshot'])
  .openapi('ExportSnapshotRecordSourceType')

const DiskInfoSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The disk name.' })).exactOptional(),
    path: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The disk path.' }),
    ).exactOptional(),
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk in GB (e.g., <code>32</code>).' }),
    ).exactOptional(),
    isSystemDisk: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a disk.', required: [] })
  .openapi('DiskInfo')

const DiskInfoListSchema = z.array(DiskInfoSchema).openapi('DiskInfoList')

const InstanceSnapshotInfoSchema = z
  .object({
    fromBundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bundle ID from which the source instance was created (e.g., <code>micro_1_0</code>).',
        }),
    ).exactOptional(),
    fromBlueprintId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The blueprint ID from which the source instance (e.g., <code>os_debian_8_3</code>).',
        }),
    ).exactOptional(),
    fromDiskInfo: DiskInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects describing the disks that were attached to the source instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an instance snapshot.', required: [] })
  .openapi('InstanceSnapshotInfo')

const DiskSnapshotInfoSchema = z
  .object({
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk in GB (e.g., <code>32</code>).' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a disk snapshot.', required: [] })
  .openapi('DiskSnapshotInfo')

const ExportSnapshotRecordSourceInfoSchema = z
  .object({
    resourceType: ExportSnapshotRecordSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lightsail resource type (e.g., <code>InstanceSnapshot</code> or <code>DiskSnapshot</code>).',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date when the source instance or disk snapshot was created.',
        }),
    ).exactOptional(),
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the source instance or disk snapshot.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the source instance or disk snapshot.',
        }),
    ).exactOptional(),
    fromResourceName: NonEmptyStringSchema.and(
      z.any().openapi({ description: "The name of the snapshot's source instance or disk." }),
    ).exactOptional(),
    fromResourceArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the snapshot's source instance or disk.",
        }),
    ).exactOptional(),
    instanceSnapshotInfo: InstanceSnapshotInfoSchema.and(
      z.any().openapi({ description: 'A list of objects describing an instance snapshot.' }),
    ).exactOptional(),
    diskSnapshotInfo: DiskSnapshotInfoSchema.and(
      z.any().openapi({ description: 'A list of objects describing a disk snapshot.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the source of an export snapshot record.', required: [] })
  .openapi('ExportSnapshotRecordSourceInfo')

const ExportSnapshotRecordSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The export snapshot record name.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the export snapshot record.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The date when the export snapshot record was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Region and Availability Zone where the export snapshot record is located.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).',
        }),
    ).exactOptional(),
    state: RecordStateSchema.and(
      z.any().openapi({ description: 'The state of the export snapshot record.' }),
    ).exactOptional(),
    sourceInfo: ExportSnapshotRecordSourceInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of objects describing the source of the export snapshot record.',
        }),
    ).exactOptional(),
    destinationInfo: DestinationInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects describing the destination of the export snapshot record.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an export snapshot record.', required: [] })
  .openapi('ExportSnapshotRecord')

const ExportSnapshotRecordListSchema = z
  .array(ExportSnapshotRecordSchema)
  .openapi('ExportSnapshotRecordList')

const GetExportSnapshotRecordsResultSchema = z
  .object({
    exportSnapshotRecords: ExportSnapshotRecordListSchema.and(
      z.any().openapi({ description: 'A list of objects describing the export snapshot records.' }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetExportSnapshotRecords</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetExportSnapshotRecordsResult')

const GetExportSnapshotRecordsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetExportSnapshotRecords</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetExportSnapshotRecordsRequest', required: [] })
  .openapi('GetExportSnapshotRecordsRequest')

const IpAddressSchema = z
  .string()
  .regex(/([0-9]{1,3}\.){3}[0-9]{1,3}/)
  .openapi('IpAddress')

const Ipv6AddressSchema = z
  .string()
  .regex(/([A-F0-9]{1,4}:){7}[A-F0-9]{1,4}/)
  .openapi('Ipv6Address')

const Ipv6AddressListSchema = z.array(Ipv6AddressSchema).openapi('Ipv6AddressList')

const InstanceHardwareSchema = z
  .object({
    cpuCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of vCPUs the instance has.' }),
    ).exactOptional(),
    disks: DiskListSchema.and(
      z.any().openapi({ description: 'The disks attached to the instance.' }),
    ).exactOptional(),
    ramSizeInGb: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of RAM in GB on the instance (e.g., <code>1.0</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the hardware for the instance.', required: [] })
  .openapi('InstanceHardware')

const MonthlyTransferSchema = z
  .object({
    gbPerMonthAllocated: IntegerSchema.and(
      z.any().openapi({ description: 'The amount allocated per month (in GB).' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).',
    required: [],
  })
  .openapi('MonthlyTransfer')

const PortAccessTypeSchema = z.enum(['Public', 'Private']).openapi('PortAccessType')

const AccessDirectionSchema = z.enum(['inbound', 'outbound']).openapi('AccessDirection')

const InstancePortInfoSchema = z
  .object({
    fromPort: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The first port in a range of open ports on an instance.</p> <p>Allowed ports:</p> <ul> <li> <p>TCP and UDP - <code>0</code> to <code>65535</code> </p> </li> <li> <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p> </li> <li> <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6 code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet Control Message Protocol for IPv6</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    toPort: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last port in a range of open ports on an instance.</p> <p>Allowed ports:</p> <ul> <li> <p>TCP and UDP - <code>0</code> to <code>65535</code> </p> </li> <li> <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p> </li> <li> <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6 code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet Control Message Protocol for IPv6</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    protocol: NetworkProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP protocol name.</p> <p>The name can be one of the following:</p> <ul> <li> <p> <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn\'t require reliable data stream service, use UDP instead.</p> </li> <li> <p> <code>all</code> - All transport layer protocol types. For more general information, see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on <i>Wikipedia</i>.</p> </li> <li> <p> <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don\'t require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.</p> </li> <li> <p> <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error messages and operational information indicating success or failure when communicating with an instance. For example, an error is indicated when an instance could not be reached. When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP type using the <code>fromPort</code> parameter, and ICMP code using the <code>toPort</code> parameter.</p> </li> </ul>',
        }),
    ).exactOptional(),
    accessFrom: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location from which access is allowed. For example, <code>Anywhere (0.0.0.0/0)</code>, or <code>Custom</code> if a specific IP address or range of IP addresses is allowed.',
        }),
    ).exactOptional(),
    accessType: PortAccessTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of access (<code>Public</code> or <code>Private</code>).',
        }),
    ).exactOptional(),
    commonName: StringSchema.and(
      z.any().openapi({ description: 'The common name of the port information.' }),
    ).exactOptional(),
    accessDirection: AccessDirectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The access direction (<code>inbound</code> or <code>outbound</code>).</p> <note> <p>Lightsail currently supports only <code>inbound</code> access direction.</p> </note>',
        }),
    ).exactOptional(),
    cidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.</p> <note> <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to connect to an instance.</p> </note> <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>',
        }),
    ).exactOptional(),
    ipv6Cidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.</p> <note> <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to an instance.</p> </note> <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>',
        }),
    ).exactOptional(),
    cidrListAliases: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An alias that defines access for a preconfigured range of IP addresses.</p> <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes information about ports for an Amazon Lightsail instance.',
    required: [],
  })
  .openapi('InstancePortInfo')

const InstancePortInfoListSchema = z.array(InstancePortInfoSchema).openapi('InstancePortInfoList')

const InstanceNetworkingSchema = z
  .object({
    monthlyTransfer: MonthlyTransferSchema.and(
      z
        .any()
        .openapi({ description: 'The amount of data in GB allocated for monthly data transfers.' }),
    ).exactOptional(),
    ports: InstancePortInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the ports on the instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes monthly data transfer rates and port information for an instance.',
    required: [],
  })
  .openapi('InstanceNetworking')

const InstanceStateSchema = z
  .object({
    code: IntegerSchema.and(
      z.any().openapi({ description: 'The status code for the instance.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the instance (e.g., <code>running</code> or <code>pending</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the virtual private server (or <i>instance</i>) status.',
    required: [],
  })
  .openapi('InstanceState')

const InstanceMetadataStateSchema = z.enum(['pending', 'applied']).openapi('InstanceMetadataState')

const HttpTokensSchema = z.enum(['optional', 'required']).openapi('HttpTokens')

const HttpEndpointSchema = z.enum(['disabled', 'enabled']).openapi('HttpEndpoint')

const HttpProtocolIpv6Schema = z.enum(['disabled', 'enabled']).openapi('HttpProtocolIpv6')

const InstanceMetadataOptionsSchema = z
  .object({
    state: InstanceMetadataStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the metadata option changes.</p> <p>The following states are possible:</p> <ul> <li> <p> <code>pending</code> - The metadata options are being updated. The instance is not yet ready to process metadata traffic with the new selection.</p> </li> <li> <p> <code>applied</code> - The metadata options have been successfully applied to the instance.</p> </li> </ul>',
        }),
    ).exactOptional(),
    httpTokens: HttpTokensSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of token usage for your instance metadata requests.</p> <p>If the state is <code>optional</code>, you can choose whether to retrieve instance metadata with a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials by using a valid signed token, the version 2.0 role credentials are returned.</p> <p>If the state is <code>required</code>, you must send a signed token header with all instance metadata retrieval requests. In this state, retrieving the IAM role credential always returns the version 2.0 credentials. The version 1.0 credentials are not available.</p> <important> <p>Not all instance blueprints in Lightsail support version 2.0 credentials. Use the <code>MetadataNoToken</code> instance metric to track the number of calls to the instance metadata service that are using version 1.0 credentials. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-viewing-instance-health-metrics">Viewing instance metrics in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </important>',
        }),
    ).exactOptional(),
    httpEndpoint: HttpEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the HTTP metadata endpoint on your instances is enabled or disabled.</p> <p>If the value is <code>disabled</code>, you cannot access your instance metadata.</p>',
        }),
    ).exactOptional(),
    httpPutResponseHopLimit: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired HTTP PUT response hop limit for instance metadata requests. A larger number means that the instance metadata requests can travel farther.',
        }),
    ).exactOptional(),
    httpProtocolIpv6: HttpProtocolIpv6Schema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the IPv6 endpoint for the instance metadata service is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The metadata options for the instance.', required: [] })
  .openapi('InstanceMetadataOptions')

const InstanceSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name the user gave the instance (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).',
        }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the instance (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE</code>).',
        }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the instance was created (e.g., <code>1479734909.17</code>) in Unix time format.',
        }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The region name and Availability Zone where the instance is located.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource (usually <code>Instance</code>).' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    blueprintId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The blueprint ID (e.g., <code>os_amlinux_2016_03</code>).' }),
    ).exactOptional(),
    blueprintName: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).',
        }),
    ).exactOptional(),
    bundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The bundle for the instance (e.g., <code>micro_1_0</code>).' }),
    ).exactOptional(),
    addOns: AddOnListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects representing the add-ons enabled on the instance.',
        }),
    ).exactOptional(),
    isStaticIp: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether this instance has a static IP assigned to it.',
        }),
    ).exactOptional(),
    privateIpAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'The private IP address of the instance.' }),
    ).exactOptional(),
    publicIpAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'The public IP address of the instance.' }),
    ).exactOptional(),
    ipv6Addresses: Ipv6AddressListSchema.and(
      z.any().openapi({ description: 'The IPv6 addresses of the instance.' }),
    ).exactOptional(),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type of the instance.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p>',
        }),
    ).exactOptional(),
    hardware: InstanceHardwareSchema.and(
      z
        .any()
        .openapi({ description: 'The size of the vCPU and the amount of RAM for the instance.' }),
    ).exactOptional(),
    networking: InstanceNetworkingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the public ports and monthly data transfer rates for the instance.',
        }),
    ).exactOptional(),
    state: InstanceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status code and the state (e.g., <code>running</code>) for the instance.',
        }),
    ).exactOptional(),
    username: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name for connecting to the instance (e.g., <code>ec2-user</code>).',
        }),
    ).exactOptional(),
    sshKeyName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the SSH key being used to connect to the instance (e.g., <code>LightsailDefaultKeyPair</code>).',
        }),
    ).exactOptional(),
    metadataOptions: InstanceMetadataOptionsSchema.and(
      z.any().openapi({ description: 'The metadata options for the Amazon Lightsail instance.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an instance (a virtual private server).', required: [] })
  .openapi('Instance')

const GetInstanceResultSchema = z
  .object({
    instance: InstanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the specified instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceResult')

const GetInstanceRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance.' }),
    ),
  })
  .openapi({ required: ['instanceName'], title: 'GetInstanceRequest' })
  .openapi('GetInstanceRequest')

const PasswordDataSchema = z
  .object({
    ciphertext: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encrypted password. Ciphertext will be an empty string if access to your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.</p> <note> <p>If you use the default key pair (<code>LightsailDefaultKeyPair</code>), the decrypted password will be available in the password field.</p> <p>If you are using a custom key pair, you need to use your own means of decryption.</p> <p>If you change the Administrator password on the instance, Lightsail will continue to return the original ciphertext value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.</p> </note>',
        }),
    ).exactOptional(),
    keyPairName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the key pair that you used when creating your instance. If no key pair name was specified when creating the instance, Lightsail uses the default key pair (<code>LightsailDefaultKeyPair</code>).</p> <p>If you are using a custom key pair, you need to use your own means of decrypting your password using the <code>ciphertext</code>. Lightsail creates the ciphertext by encrypting your password with the public key part of this key pair.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The password data for the Windows Server-based instance, including the ciphertext and the key pair name.',
    required: [],
  })
  .openapi('PasswordData')

const InstanceAccessProtocolSchema = z.enum(['ssh', 'rdp']).openapi('InstanceAccessProtocol')

const HostKeyAttributesSchema = z
  .object({
    algorithm: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The SSH host key algorithm or the RDP certificate format.</p> <p>For SSH host keys, the algorithm may be <code>ssh-rsa</code>, <code>ecdsa-sha2-nistp256</code>, <code>ssh-ed25519</code>, etc. For RDP certificates, the algorithm is always <code>x509-cert</code>.</p>',
        }),
    ).exactOptional(),
    publicKey: StringSchema.and(
      z.any().openapi({ description: 'The public SSH host key or the RDP certificate.' }),
    ).exactOptional(),
    witnessedAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the SSH host key or RDP certificate was recorded by Lightsail.',
        }),
    ).exactOptional(),
    fingerprintSHA1: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The SHA-1 fingerprint of the returned SSH host key or RDP certificate.</p> <ul> <li> <p>Example of an SHA-1 SSH fingerprint:</p> <p> <code>SHA1:1CHH6FaAaXjtFOsR/t83vf91SR0</code> </p> </li> <li> <p>Example of an SHA-1 RDP fingerprint:</p> <p> <code>af:34:51:fe:09:f0:e0:da:b8:4e:56:ca:60:c2:10:ff:38:06:db:45</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    fingerprintSHA256: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The SHA-256 fingerprint of the returned SSH host key or RDP certificate.</p> <ul> <li> <p>Example of an SHA-256 SSH fingerprint:</p> <p> <code>SHA256:KTsMnRBh1IhD17HpdfsbzeGA4jOijm5tyXsMjKVbB8o</code> </p> </li> <li> <p>Example of an SHA-256 RDP fingerprint:</p> <p> <code>03:9b:36:9f:4b:de:4e:61:70:fc:7c:c9:78:e7:d2:1a:1c:25:a8:0c:91:f6:7c:e4:d6:a0:85:c8:b4:53:99:68</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    notValidBefore: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The returned RDP certificate is valid after this point in time.</p> <p>This value is listed only for RDP certificates.</p>',
        }),
    ).exactOptional(),
    notValidAfter: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The returned RDP certificate is not valid after this point in time.</p> <p>This value is listed only for RDP certificates.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the public SSH host keys or the RDP certificate.',
    required: [],
  })
  .openapi('HostKeyAttributes')

const HostKeysListSchema = z.array(HostKeyAttributesSchema).openapi('HostKeysList')

const InstanceAccessDetailsSchema = z
  .object({
    certKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For SSH access, the public key to use when accessing your instance For OpenSSH clients (e.g., command line SSH), you should save this value to <code>tempkey-cert.pub</code>.',
        }),
    ).exactOptional(),
    expiresAt: IsoDateSchema.and(
      z
        .any()
        .openapi({ description: 'For SSH access, the date on which the temporary keys expire.' }),
    ).exactOptional(),
    ipAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'The public IP address of the Amazon Lightsail instance.' }),
    ).exactOptional(),
    password: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For RDP access, the password for your Amazon Lightsail instance. Password will be an empty string if the password for your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.</p> <note> <p>If you create an instance using any key pair other than the default (<code>LightsailDefaultKeyPair</code>), <code>password</code> will always be an empty string.</p> <p>If you change the Administrator password on the instance, Lightsail will continue to return the original password value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.</p> </note>',
        }),
    ).exactOptional(),
    passwordData: PasswordDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if <code>password</code> is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.',
        }),
    ).exactOptional(),
    privateKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For SSH access, the temporary private key. For OpenSSH clients (e.g., command line SSH), you should save this value to <code>tempkey</code>).',
        }),
    ).exactOptional(),
    protocol: InstanceAccessProtocolSchema.and(
      z
        .any()
        .openapi({
          description: 'The protocol for these Amazon Lightsail instance access details.',
        }),
    ).exactOptional(),
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of this Amazon Lightsail instance.' }),
    ).exactOptional(),
    username: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name to use when logging in to the Amazon Lightsail instance.',
        }),
    ).exactOptional(),
    hostKeys: HostKeysListSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the public SSH host keys or the RDP certificate.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The parameters for gaining temporary access to one of your Amazon Lightsail instances.',
    required: [],
  })
  .openapi('InstanceAccessDetails')

const GetInstanceAccessDetailsResultSchema = z
  .object({
    accessDetails: InstanceAccessDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about a get instance access request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceAccessDetailsResult')

const GetInstanceAccessDetailsRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance to access.' }),
    ),
    protocol: InstanceAccessProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol to use to connect to your instance. Defaults to <code>ssh</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['instanceName'], title: 'GetInstanceAccessDetailsRequest' })
  .openapi('GetInstanceAccessDetailsRequest')

const InstanceMetricNameSchema = z
  .enum([
    'CPUUtilization',
    'NetworkIn',
    'NetworkOut',
    'StatusCheckFailed',
    'StatusCheckFailed_Instance',
    'StatusCheckFailed_System',
    'BurstCapacityTime',
    'BurstCapacityPercentage',
    'MetadataNoToken',
  ])
  .openapi('InstanceMetricName')

const GetInstanceMetricDataResultSchema = z
  .object({
    metricName: InstanceMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric returned.' }),
    ).exactOptional(),
    metricData: MetricDatapointListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe the metric data returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceMetricDataResult')

const GetInstanceMetricDataRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the instance for which you want to get metrics data.',
        }),
    ),
    metricName: InstanceMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric for which you want to return information.</p> <p>Valid instance metric names are listed below, along with the most useful <code>statistics</code> to include in your request, and the published <code>unit</code> value.</p> <ul> <li> <p> <b> <code>BurstCapacityPercentage</code> </b> - The percentage of CPU performance available for your instance to burst above its baseline. Your instance continuously accrues and consumes burst capacity. Burst capacity stops accruing when your instance\'s <code>BurstCapacityPercentage</code> reaches 100%. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p> <p> <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Percent</code>.</p> </li> <li> <p> <b> <code>BurstCapacityTime</code> </b> - The available amount of time for your instance to burst at 100% CPU utilization. Your instance continuously accrues and consumes burst capacity. Burst capacity time stops accruing when your instance\'s <code>BurstCapacityPercentage</code> metric reaches 100%.</p> <p>Burst capacity time is consumed at the full rate only when your instance operates at 100% CPU utilization. For example, if your instance operates at 50% CPU utilization in the burstable zone for a 5-minute period, then it consumes CPU burst capacity minutes at a 50% rate in that period. Your instance consumed 2 minutes and 30 seconds of CPU burst capacity minutes in the 5-minute period. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p> <p> <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Seconds</code>.</p> </li> <li> <p> <b> <code>CPUUtilization</code> </b> - The percentage of allocated compute units that are currently in use on the instance. This metric identifies the processing power to run the applications on the instance. Tools in your operating system can show a lower percentage than Lightsail when the instance is not allocated a full processor core.</p> <p> <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Percent</code>.</p> </li> <li> <p> <b> <code>NetworkIn</code> </b> - The number of bytes received on all network interfaces by the instance. This metric identifies the volume of incoming network traffic to the instance. The number reported is the number of bytes received during the period. Because this metric is reported in 5-minute intervals, divide the reported number by 300 to find Bytes/second.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Bytes</code>.</p> </li> <li> <p> <b> <code>NetworkOut</code> </b> - The number of bytes sent out on all network interfaces by the instance. This metric identifies the volume of outgoing network traffic from the instance. The number reported is the number of bytes sent during the period. Because this metric is reported in 5-minute intervals, divide the reported number by 300 to find Bytes/second.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Bytes</code>.</p> </li> <li> <p> <b> <code>StatusCheckFailed</code> </b> - Reports whether the instance passed or failed both the instance status check and the system status check. This metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds) granularity.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>StatusCheckFailed_Instance</code> </b> - Reports whether the instance passed or failed the instance status check. This metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds) granularity.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>StatusCheckFailed_System</code> </b> - Reports whether the instance passed or failed the system status check. This metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds) granularity.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>MetadataNoToken</code> </b> - Reports the number of times that the instance metadata service was successfully accessed without a token. This metric determines if there are any processes accessing instance metadata by using Instance Metadata Service Version 1, which doesn\'t use a token. If all requests use token-backed sessions, such as Instance Metadata Service Version 2, then the value is 0.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> </ul>',
        }),
    ),
    period: MetricPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The granularity, in seconds, of the returned data points.</p> <p>The <code>StatusCheckFailed</code>, <code>StatusCheckFailed_Instance</code>, and <code>StatusCheckFailed_System</code> instance metric data is available in 1-minute (60 seconds) granularity. All other instance metric data is available in 5-minute (300 seconds) granularity.</p>',
        }),
    ),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of the time period.' }),
    ),
    endTime: TimestampSchema.and(
      z.any().openapi({ description: 'The end time of the time period.' }),
    ),
    unit: MetricUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit for the metric data request. Valid units depend on the metric data being requested. For the valid units to specify with each available metric, see the <code>metricName</code> parameter.',
        }),
    ),
    statistics: MetricStatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic for the metric.</p> <p>The following statistics are available:</p> <ul> <li> <p> <code>Minimum</code> - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <code>Maximum</code> - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.</p> </li> <li> <p> <code>Sum</code> - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.</p> </li> <li> <p> <code>Average</code> - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.</p> </li> <li> <p> <code>SampleCount</code> - The count, or number, of data points used for the statistical calculation.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: [
      'instanceName',
      'metricName',
      'period',
      'startTime',
      'endTime',
      'unit',
      'statistics',
    ],
    title: 'GetInstanceMetricDataRequest',
  })
  .openapi('GetInstanceMetricDataRequest')

const PortStateSchema = z.enum(['open', 'closed']).openapi('PortState')

const InstancePortStateSchema = z
  .object({
    fromPort: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The first port in a range of open ports on an instance.</p> <p>Allowed ports:</p> <ul> <li> <p>TCP and UDP - <code>0</code> to <code>65535</code> </p> </li> <li> <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p> </li> <li> <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6 code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet Control Message Protocol for IPv6</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    toPort: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last port in a range of open ports on an instance.</p> <p>Allowed ports:</p> <ul> <li> <p>TCP and UDP - <code>0</code> to <code>65535</code> </p> </li> <li> <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p> </li> <li> <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6 code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet Control Message Protocol for IPv6</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    protocol: NetworkProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP protocol name.</p> <p>The name can be one of the following:</p> <ul> <li> <p> <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn\'t require reliable data stream service, use UDP instead.</p> </li> <li> <p> <code>all</code> - All transport layer protocol types. For more general information, see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on <i>Wikipedia</i>.</p> </li> <li> <p> <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don\'t require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.</p> </li> <li> <p> <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error messages and operational information indicating success or failure when communicating with an instance. For example, an error is indicated when an instance could not be reached. When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP type using the <code>fromPort</code> parameter, and ICMP code using the <code>toPort</code> parameter.</p> </li> </ul>',
        }),
    ).exactOptional(),
    state: PortStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the instance port is <code>open</code> or <code>closed</code>.</p> <note> <p>The port state for Lightsail instances is always <code>open</code>.</p> </note>',
        }),
    ).exactOptional(),
    cidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.</p> <note> <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to connect to an instance.</p> </note> <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>',
        }),
    ).exactOptional(),
    ipv6Cidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.</p> <note> <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to an instance.</p> </note> <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>',
        }),
    ).exactOptional(),
    cidrListAliases: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An alias that defines access for a preconfigured range of IP addresses.</p> <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.',
    required: [],
  })
  .openapi('InstancePortState')

const InstancePortStateListSchema = z
  .array(InstancePortStateSchema)
  .openapi('InstancePortStateList')

const GetInstancePortStatesResultSchema = z
  .object({
    portStates: InstancePortStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the firewall port states for the specified instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstancePortStatesResult')

const GetInstancePortStatesRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the instance for which to return firewall port states.',
        }),
    ),
  })
  .openapi({ required: ['instanceName'], title: 'GetInstancePortStatesRequest' })
  .openapi('GetInstancePortStatesRequest')

const InstanceSnapshotStateSchema = z
  .enum(['pending', 'error', 'available'])
  .openapi('InstanceSnapshotState')

const InstanceSnapshotSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the snapshot.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the snapshot (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE</code>).',
        }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the snapshot was created (e.g., <code>1479907467.024</code>).',
        }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The region name and Availability Zone where you created the snapshot.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of resource (usually <code>InstanceSnapshot</code>).' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    state: InstanceSnapshotStateSchema.and(
      z.any().openapi({ description: 'The state the snapshot is in.' }),
    ).exactOptional(),
    progress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The progress of the snapshot.</p> <note> <p>This is populated only for disk snapshots, and is <code>null</code> for instance snapshots.</p> </note>',
        }),
    ).exactOptional(),
    fromAttachedDisks: DiskListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of disk objects containing information about all block storage disks.',
        }),
    ).exactOptional(),
    fromInstanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The instance from which the snapshot was created.' }),
    ).exactOptional(),
    fromInstanceArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the instance from which the snapshot was created (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE</code>).',
        }),
    ).exactOptional(),
    fromBlueprintId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The blueprint ID from which you created the snapshot (e.g., <code>os_debian_8_3</code>). A blueprint is a virtual private server (or <i>instance</i>) image used to create instances quickly.',
        }),
    ).exactOptional(),
    fromBundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bundle ID from which you created the snapshot (e.g., <code>micro_1_0</code>).',
        }),
    ).exactOptional(),
    isFromAutoSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether the snapshot was created from an automatic snapshot.',
        }),
    ).exactOptional(),
    sizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size in GB of the SSD.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an instance snapshot.', required: [] })
  .openapi('InstanceSnapshot')

const GetInstanceSnapshotResultSchema = z
  .object({
    instanceSnapshot: InstanceSnapshotSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the results of your get instance snapshot request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceSnapshotResult')

const GetInstanceSnapshotRequestSchema = z
  .object({
    instanceSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the snapshot for which you are requesting information.',
        }),
    ),
  })
  .openapi({ required: ['instanceSnapshotName'], title: 'GetInstanceSnapshotRequest' })
  .openapi('GetInstanceSnapshotRequest')

const InstanceSnapshotListSchema = z.array(InstanceSnapshotSchema).openapi('InstanceSnapshotList')

const GetInstanceSnapshotsResultSchema = z
  .object({
    instanceSnapshots: InstanceSnapshotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the results of your get instance snapshots request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetInstanceSnapshots</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceSnapshotsResult')

const GetInstanceSnapshotsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetInstanceSnapshots</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetInstanceSnapshotsRequest', required: [] })
  .openapi('GetInstanceSnapshotsRequest')

const GetInstanceStateResultSchema = z
  .object({
    state: InstanceStateSchema.and(
      z.any().openapi({ description: 'The state of the instance.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceStateResult')

const GetInstanceStateRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance to get state information about.' }),
    ),
  })
  .openapi({ required: ['instanceName'], title: 'GetInstanceStateRequest' })
  .openapi('GetInstanceStateRequest')

const InstanceListSchema = z.array(InstanceSchema).openapi('InstanceList')

const GetInstancesResultSchema = z
  .object({
    instances: InstanceListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of key-value pairs containing information about your instances.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetInstances</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstancesResult')

const GetInstancesRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetInstances</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetInstancesRequest', required: [] })
  .openapi('GetInstancesRequest')

const GetKeyPairResultSchema = z
  .object({
    keyPair: KeyPairSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of key-value pairs containing information about the key pair.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetKeyPairResult')

const GetKeyPairRequestSchema = z
  .object({
    keyPairName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the key pair for which you are requesting information.',
        }),
    ),
  })
  .openapi({ required: ['keyPairName'], title: 'GetKeyPairRequest' })
  .openapi('GetKeyPairRequest')

const KeyPairListSchema = z.array(KeyPairSchema).openapi('KeyPairList')

const GetKeyPairsResultSchema = z
  .object({
    keyPairs: KeyPairListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of key-value pairs containing information about the key pairs.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetKeyPairs</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetKeyPairsResult')

const GetKeyPairsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetKeyPairs</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
    includeDefaultKeyPair: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether to include the default key pair in the response of your request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetKeyPairsRequest', required: [] })
  .openapi('GetKeyPairsRequest')

const LoadBalancerStateSchema = z
  .enum(['active', 'provisioning', 'active_impaired', 'failed', 'unknown'])
  .openapi('LoadBalancerState')

const LoadBalancerProtocolSchema = z.enum(['HTTP_HTTPS', 'HTTP']).openapi('LoadBalancerProtocol')

const PortListSchema = z.array(PortSchema).openapi('PortList')

const InstanceHealthStateSchema = z
  .enum(['initial', 'healthy', 'unhealthy', 'unused', 'draining', 'unavailable'])
  .openapi('InstanceHealthState')

const InstanceHealthReasonSchema = z
  .enum([
    'Lb.RegistrationInProgress',
    'Lb.InitialHealthChecking',
    'Lb.InternalError',
    'Instance.ResponseCodeMismatch',
    'Instance.Timeout',
    'Instance.FailedHealthChecks',
    'Instance.NotRegistered',
    'Instance.NotInUse',
    'Instance.DeregistrationInProgress',
    'Instance.InvalidState',
    'Instance.IpUnusable',
  ])
  .openapi('InstanceHealthReason')

const InstanceHealthSummarySchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Lightsail instance for which you are requesting health check data.',
        }),
    ).exactOptional(),
    instanceHealth: InstanceHealthStateSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the overall instance health. Valid values are below.' }),
    ).exactOptional(),
    instanceHealthReason: InstanceHealthReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>More information about the instance health. If the <code>instanceHealth</code> is <code>healthy</code>, then an <code>instanceHealthReason</code> value is not provided.</p> <p>If <b> <code>instanceHealth</code> </b> is <code>initial</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Lb.RegistrationInProgress</code> </b> - The target instance is in the process of being registered with the load balancer.</p> </li> <li> <p> <b> <code>Lb.InitialHealthChecking</code> </b> - The Lightsail load balancer is still sending the target instance the minimum number of health checks required to determine its health status.</p> </li> </ul> <p>If <b> <code>instanceHealth</code> </b> is <code>unhealthy</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Instance.ResponseCodeMismatch</code> </b> - The health checks did not return an expected HTTP code.</p> </li> <li> <p> <b> <code>Instance.Timeout</code> </b> - The health check requests timed out.</p> </li> <li> <p> <b> <code>Instance.FailedHealthChecks</code> </b> - The health checks failed because the connection to the target instance timed out, the target instance response was malformed, or the target instance failed the health check for an unknown reason.</p> </li> <li> <p> <b> <code>Lb.InternalError</code> </b> - The health checks failed due to an internal error.</p> </li> </ul> <p>If <b> <code>instanceHealth</code> </b> is <code>unused</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Instance.NotRegistered</code> </b> - The target instance is not registered with the target group.</p> </li> <li> <p> <b> <code>Instance.NotInUse</code> </b> - The target group is not used by any load balancer, or the target instance is in an Availability Zone that is not enabled for its load balancer.</p> </li> <li> <p> <b> <code>Instance.IpUnusable</code> </b> - The target IP address is reserved for use by a Lightsail load balancer.</p> </li> <li> <p> <b> <code>Instance.InvalidState</code> </b> - The target is in the stopped or terminated state.</p> </li> </ul> <p>If <b> <code>instanceHealth</code> </b> is <code>draining</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Instance.DeregistrationInProgress</code> </b> - The target instance is in the process of being deregistered and the deregistration delay period has not expired.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes information about the health of the instance.', required: [] })
  .openapi('InstanceHealthSummary')

const InstanceHealthSummaryListSchema = z
  .array(InstanceHealthSummarySchema)
  .openapi('InstanceHealthSummaryList')

const LoadBalancerTlsCertificateSummarySchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the SSL/TLS certificate.' }),
    ).exactOptional(),
    isAttached: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load balancer.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides a summary of SSL/TLS certificate metadata.', required: [] })
  .openapi('LoadBalancerTlsCertificateSummary')

const LoadBalancerTlsCertificateSummaryListSchema = z
  .array(LoadBalancerTlsCertificateSummarySchema)
  .openapi('LoadBalancerTlsCertificateSummaryList')

const LoadBalancerConfigurationOptionsSchema = z
  .record(z.string(), StringSchema)
  .openapi('LoadBalancerConfigurationOptions')

const LoadBalancerSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the load balancer (e.g., <code>my-load-balancer</code>).',
        }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about your Lightsail load balancer. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The date when your load balancer was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>). Lightsail automatically creates your load balancer across Availability Zones.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type (e.g., <code>LoadBalancer</code>.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    dnsName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The DNS name of your Lightsail load balancer.' }),
    ).exactOptional(),
    state: LoadBalancerStateSchema.and(
      z.any().openapi({ description: 'The status of your load balancer. Valid values are below.' }),
    ).exactOptional(),
    protocol: LoadBalancerProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The protocol you have enabled for your load balancer. Valid values are below.</p> <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just <code>HTTP</code>.</p>",
        }),
    ).exactOptional(),
    publicPorts: PortListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.',
        }),
    ).exactOptional(),
    healthCheckPath: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path you specified to perform your health checks. If no path is specified, the load balancer tries to make a request to the default (root) page.',
        }),
    ).exactOptional(),
    instancePort: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The port where the load balancer will direct traffic to your Lightsail instances. For HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.",
        }),
    ).exactOptional(),
    instanceHealthSummary: InstanceHealthSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of InstanceHealthSummary objects describing the health of the load balancer.',
        }),
    ).exactOptional(),
    tlsCertificateSummaries: LoadBalancerTlsCertificateSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached to the load balancer.',
        }),
    ).exactOptional(),
    configurationOptions: LoadBalancerConfigurationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string to string map of the configuration options for your load balancer. Valid values are listed below.',
        }),
    ).exactOptional(),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type of the load balancer.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p>',
        }),
    ).exactOptional(),
    httpsRedirectionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.',
        }),
    ).exactOptional(),
    tlsPolicyName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the TLS security policy for the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a load balancer.', required: [] })
  .openapi('LoadBalancer')

const GetLoadBalancerResultSchema = z
  .object({
    loadBalancer: LoadBalancerSchema.and(
      z
        .any()
        .openapi({ description: 'An object containing information about your load balancer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLoadBalancerResult')

const GetLoadBalancerRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
  })
  .openapi({ required: ['loadBalancerName'], title: 'GetLoadBalancerRequest' })
  .openapi('GetLoadBalancerRequest')

const LoadBalancerMetricNameSchema = z
  .enum([
    'ClientTLSNegotiationErrorCount',
    'HealthyHostCount',
    'UnhealthyHostCount',
    'HTTPCode_LB_4XX_Count',
    'HTTPCode_LB_5XX_Count',
    'HTTPCode_Instance_2XX_Count',
    'HTTPCode_Instance_3XX_Count',
    'HTTPCode_Instance_4XX_Count',
    'HTTPCode_Instance_5XX_Count',
    'InstanceResponseTime',
    'RejectedConnectionCount',
    'RequestCount',
  ])
  .openapi('LoadBalancerMetricName')

const GetLoadBalancerMetricDataResultSchema = z
  .object({
    metricName: LoadBalancerMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric returned.' }),
    ).exactOptional(),
    metricData: MetricDatapointListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe the metric data returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLoadBalancerMetricDataResult')

const GetLoadBalancerMetricDataRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    metricName: LoadBalancerMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric for which you want to return information.</p> <p>Valid load balancer metric names are listed below, along with the most useful <code>statistics</code> to include in your request, and the published <code>unit</code> value.</p> <ul> <li> <p> <b> <code>ClientTLSNegotiationErrorCount</code> </b> - The number of TLS connections initiated by the client that did not establish a session with the load balancer due to a TLS error generated by the load balancer. Possible causes include a mismatch of ciphers or protocols.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>HealthyHostCount</code> </b> - The number of target instances that are considered healthy.</p> <p> <code>Statistics</code>: The most useful statistic are <code>Average</code>, <code>Minimum</code>, and <code>Maximum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_2XX_Count</code> </b> - The number of HTTP 2XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_3XX_Count</code> </b> - The number of HTTP 3XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_4XX_Count</code> </b> - The number of HTTP 4XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_5XX_Count</code> </b> - The number of HTTP 5XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>HTTPCode_LB_4XX_Count</code> </b> - The number of HTTP 4XX client error codes that originated from the load balancer. Client errors are generated when requests are malformed or incomplete. These requests were not received by the target instance. This count does not include response codes generated by the target instances.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>HTTPCode_LB_5XX_Count</code> </b> - The number of HTTP 5XX server error codes that originated from the load balancer. This does not include any response codes generated by the target instance. This metric is reported if there are no healthy instances attached to the load balancer, or if the request rate exceeds the capacity of the instances (spillover) or the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>InstanceResponseTime</code> </b> - The time elapsed, in seconds, after the request leaves the load balancer until a response from the target instance is received.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Seconds</code>.</p> </li> <li> <p> <b> <code>RejectedConnectionCount</code> </b> - The number of connections that were rejected because the load balancer had reached its maximum number of connections.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>RequestCount</code> </b> - The number of requests processed over IPv4. This count includes only the requests with a response generated by a target instance of the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>UnhealthyHostCount</code> </b> - The number of target instances that are considered unhealthy.</p> <p> <code>Statistics</code>: The most useful statistic are <code>Average</code>, <code>Minimum</code>, and <code>Maximum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> </ul>',
        }),
    ),
    period: MetricPeriodSchema.and(
      z.any().openapi({ description: 'The granularity, in seconds, of the returned data points.' }),
    ),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of the period.' }),
    ),
    endTime: TimestampSchema.and(z.any().openapi({ description: 'The end time of the period.' })),
    unit: MetricUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit for the metric data request. Valid units depend on the metric data being requested. For the valid units with each available metric, see the <code>metricName</code> parameter.',
        }),
    ),
    statistics: MetricStatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic for the metric.</p> <p>The following statistics are available:</p> <ul> <li> <p> <code>Minimum</code> - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <code>Maximum</code> - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.</p> </li> <li> <p> <code>Sum</code> - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.</p> </li> <li> <p> <code>Average</code> - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.</p> </li> <li> <p> <code>SampleCount</code> - The count, or number, of data points used for the statistical calculation.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: [
      'loadBalancerName',
      'metricName',
      'period',
      'startTime',
      'endTime',
      'unit',
      'statistics',
    ],
    title: 'GetLoadBalancerMetricDataRequest',
  })
  .openapi('GetLoadBalancerMetricDataRequest')

const LoadBalancerTlsCertificateStatusSchema = z
  .enum([
    'PENDING_VALIDATION',
    'ISSUED',
    'INACTIVE',
    'EXPIRED',
    'VALIDATION_TIMED_OUT',
    'REVOKED',
    'FAILED',
    'UNKNOWN',
  ])
  .openapi('LoadBalancerTlsCertificateStatus')

const LoadBalancerTlsCertificateDomainStatusSchema = z
  .enum(['PENDING_VALIDATION', 'FAILED', 'SUCCESS'])
  .openapi('LoadBalancerTlsCertificateDomainStatus')

const LoadBalancerTlsCertificateDnsRecordCreationStateCodeSchema = z
  .enum(['SUCCEEDED', 'STARTED', 'FAILED'])
  .openapi('LoadBalancerTlsCertificateDnsRecordCreationStateCode')

const LoadBalancerTlsCertificateDnsRecordCreationStateSchema = z
  .object({
    code: LoadBalancerTlsCertificateDnsRecordCreationStateCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status code for the automated DNS record creation.</p> <p>Following are the possible values:</p> <ul> <li> <p> <code>SUCCEEDED</code> - The validation records were successfully added.</p> </li> <li> <p> <code>STARTED</code> - The automatic DNS record creation has started.</p> </li> <li> <p> <code>FAILED</code> - The validation record addition failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The message that describes the reason for the status code.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership.',
    required: [],
  })
  .openapi('LoadBalancerTlsCertificateDnsRecordCreationState')

const LoadBalancerTlsCertificateDomainValidationRecordSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A fully qualified domain name in the certificate. For example, <code>example.com</code>.',
        }),
    ).exactOptional(),
    type: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of validation record. For example, <code>CNAME</code> for domain validation.',
        }),
    ).exactOptional(),
    value: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The value for that type.' }),
    ).exactOptional(),
    validationStatus: LoadBalancerTlsCertificateDomainStatusSchema.and(
      z.any().openapi({ description: 'The validation status. Valid values are listed below.' }),
    ).exactOptional(),
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name against which your SSL/TLS certificate was validated.',
        }),
    ).exactOptional(),
    dnsRecordCreationState: LoadBalancerTlsCertificateDnsRecordCreationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of a domain to validate domain ownership.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the validation record of each domain name in the SSL/TLS certificate.',
    required: [],
  })
  .openapi('LoadBalancerTlsCertificateDomainValidationRecord')

const LoadBalancerTlsCertificateDomainValidationRecordListSchema = z
  .array(LoadBalancerTlsCertificateDomainValidationRecordSchema)
  .openapi('LoadBalancerTlsCertificateDomainValidationRecordList')

const LoadBalancerTlsCertificateFailureReasonSchema = z
  .enum([
    'NO_AVAILABLE_CONTACTS',
    'ADDITIONAL_VERIFICATION_REQUIRED',
    'DOMAIN_NOT_ALLOWED',
    'INVALID_PUBLIC_DOMAIN',
    'OTHER',
  ])
  .openapi('LoadBalancerTlsCertificateFailureReason')

const LoadBalancerTlsCertificateRenewalStatusSchema = z
  .enum(['PENDING_AUTO_RENEWAL', 'PENDING_VALIDATION', 'SUCCESS', 'FAILED'])
  .openapi('LoadBalancerTlsCertificateRenewalStatus')

const LoadBalancerTlsCertificateDomainValidationOptionSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({ description: 'The fully qualified domain name in the certificate request.' }),
    ).exactOptional(),
    validationStatus: LoadBalancerTlsCertificateDomainStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the domain validation. Valid values are listed below.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.',
    required: [],
  })
  .openapi('LoadBalancerTlsCertificateDomainValidationOption')

const LoadBalancerTlsCertificateDomainValidationOptionListSchema = z
  .array(LoadBalancerTlsCertificateDomainValidationOptionSchema)
  .openapi('LoadBalancerTlsCertificateDomainValidationOptionList')

const LoadBalancerTlsCertificateRenewalSummarySchema = z
  .object({
    renewalStatus: LoadBalancerTlsCertificateRenewalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names of the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names of the certificate. You must take action to validate these domain names or the certificate won't be renewed. Check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>",
        }),
    ).exactOptional(),
    domainValidationOptions: LoadBalancerTlsCertificateDomainValidationOptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Contains information about the validation of each domain name in the certificate, as it pertains to Lightsail's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>",
    required: [],
  })
  .openapi('LoadBalancerTlsCertificateRenewalSummary')

const LoadBalancerTlsCertificateRevocationReasonSchema = z
  .enum([
    'UNSPECIFIED',
    'KEY_COMPROMISE',
    'CA_COMPROMISE',
    'AFFILIATION_CHANGED',
    'SUPERCEDED',
    'CESSATION_OF_OPERATION',
    'CERTIFICATE_HOLD',
    'REMOVE_FROM_CRL',
    'PRIVILEGE_WITHDRAWN',
    'A_A_COMPROMISE',
  ])
  .openapi('LoadBalancerTlsCertificateRevocationReason')

const LoadBalancerTlsCertificateSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the SSL/TLS certificate (e.g., <code>my-certificate</code>).',
        }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the SSL/TLS certificate.' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The time when you created your SSL/TLS certificate.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region and Availability Zone where you created your certificate.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource type (e.g., <code>LoadBalancerTlsCertificate</code>).</p> <ul> <li> <p> <b> <code>Instance</code> </b> - A Lightsail instance (a virtual private server)</p> </li> <li> <p> <b> <code>StaticIp</code> </b> - A static IP address</p> </li> <li> <p> <b> <code>KeyPair</code> </b> - The key pair used to connect to a Lightsail instance</p> </li> <li> <p> <b> <code>InstanceSnapshot</code> </b> - A Lightsail instance snapshot</p> </li> <li> <p> <b> <code>Domain</code> </b> - A DNS zone</p> </li> <li> <p> <b> <code>PeeredVpc</code> </b> - A peered VPC</p> </li> <li> <p> <b> <code>LoadBalancer</code> </b> - A Lightsail load balancer</p> </li> <li> <p> <b> <code>LoadBalancerTlsCertificate</code> </b> - An SSL/TLS certificate associated with a Lightsail load balancer</p> </li> <li> <p> <b> <code>Disk</code> </b> - A Lightsail block storage disk</p> </li> <li> <p> <b> <code>DiskSnapshot</code> </b> - A block storage disk snapshot</p> </li> </ul>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    loadBalancerName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The load balancer name where your SSL/TLS certificate is attached.',
        }),
    ).exactOptional(),
    isAttached: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load balancer.',
        }),
    ).exactOptional(),
    status: LoadBalancerTlsCertificateStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The validation status of the SSL/TLS certificate. Valid values are below.',
        }),
    ).exactOptional(),
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain name for your SSL/TLS certificate.' }),
    ).exactOptional(),
    domainValidationRecords: LoadBalancerTlsCertificateDomainValidationRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the records.',
        }),
    ).exactOptional(),
    failureReason: LoadBalancerTlsCertificateFailureReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The validation failure reason, if any, of the certificate.</p> <p>The following failure reasons are possible:</p> <ul> <li> <p> <b> <code>NO_AVAILABLE_CONTACTS</code> </b> - This failure applies to email validation, which is not available for Lightsail certificates.</p> </li> <li> <p> <b> <code>ADDITIONAL_VERIFICATION_REQUIRED</code> </b> - Lightsail requires additional information to process this certificate request. This can happen as a fraud-protection measure, such as when the domain ranks within the Alexa top 1000 websites. To provide the required information, use the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a> to contact AWS Support.</p> <note> <p>You cannot request a certificate for Amazon-owned domain names such as those ending in amazonaws.com, cloudfront.net, or elasticbeanstalk.com.</p> </note> </li> <li> <p> <b> <code>DOMAIN_NOT_ALLOWED</code> </b> - One or more of the domain names in the certificate request was reported as an unsafe domain by <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a>. To correct the problem, search for your domain name on the <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a> website. If your domain is reported as suspicious, see <a href="https://developers.google.com/web/fundamentals/security/hacked">Google Help for Hacked Websites</a> to learn what you can do.</p> <p>If you believe that the result is a false positive, notify the organization that is reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and cannot remove your domain from a block list itself. After you correct the problem and the VirusTotal registry has been updated, request a new certificate.</p> <p>If you see this error and your domain is not included in the VirusTotal list, visit the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a> and create a case.</p> </li> <li> <p> <b> <code>INVALID_PUBLIC_DOMAIN</code> </b> - One or more of the domain names in the certificate request is not valid. Typically, this is because a domain name in the request is not a valid top-level domain. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request, and ensure that all domain names in the request are for valid top-level domains. For example, you cannot request a certificate for <code>example.invalidpublicdomain</code> because <code>invalidpublicdomain</code> is not a valid top-level domain.</p> </li> <li> <p> <b> <code>OTHER</code> </b> - Typically, this failure occurs when there is a typographical error in one or more of the domain names in the certificate request. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request. </p> </li> </ul>',
        }),
    ).exactOptional(),
    issuedAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The time when the SSL/TLS certificate was issued.' }),
    ).exactOptional(),
    issuer: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The issuer of the certificate.' }),
    ).exactOptional(),
    keyAlgorithm: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The algorithm used to generate the key pair (the public and private key).',
        }),
    ).exactOptional(),
    notAfter: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the SSL/TLS certificate expires.' }),
    ).exactOptional(),
    notBefore: IsoDateSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp when the SSL/TLS certificate is first valid.' }),
    ).exactOptional(),
    renewalSummary: LoadBalancerTlsCertificateRenewalSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the status of the certificate renewal managed by Lightsail.',
        }),
    ).exactOptional(),
    revocationReason: LoadBalancerTlsCertificateRevocationReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason the certificate was revoked. This value is present only when the certificate status is <code>REVOKED</code>.',
        }),
    ).exactOptional(),
    revokedAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the certificate was revoked. This value is present only when the certificate status is <code>REVOKED</code>.',
        }),
    ).exactOptional(),
    serial: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The serial number of the certificate.' }),
    ).exactOptional(),
    signatureAlgorithm: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The algorithm that was used to sign the certificate.' }),
    ).exactOptional(),
    subject: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the entity that is associated with the public key contained in the certificate.',
        }),
    ).exactOptional(),
    subjectAlternativeNames: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that specify the alternate domains (e.g., <code>example2.com</code>) and subdomains (e.g., <code>blog.example.com</code>) for the certificate.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>',
    required: [],
  })
  .openapi('LoadBalancerTlsCertificate')

const LoadBalancerTlsCertificateListSchema = z
  .array(LoadBalancerTlsCertificateSchema)
  .openapi('LoadBalancerTlsCertificateList')

const GetLoadBalancerTlsCertificatesResultSchema = z
  .object({
    tlsCertificates: LoadBalancerTlsCertificateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of LoadBalancerTlsCertificate objects describing your SSL/TLS certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLoadBalancerTlsCertificatesResult')

const GetLoadBalancerTlsCertificatesRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the load balancer you associated with your SSL/TLS certificate.',
        }),
    ),
  })
  .openapi({ required: ['loadBalancerName'], title: 'GetLoadBalancerTlsCertificatesRequest' })
  .openapi('GetLoadBalancerTlsCertificatesRequest')

const LoadBalancerTlsPolicySchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the TLS security policy.' }),
    ).exactOptional(),
    isDefault: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether the TLS security policy is the default.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the TLS security policy.' }),
    ).exactOptional(),
    protocols: StringListSchema.and(
      z.any().openapi({ description: 'The protocols used in a given TLS security policy.' }),
    ).exactOptional(),
    ciphers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ciphers used by the TLS security policy.</p> <p>The ciphers are listed in order of preference.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the TLS security policies that are available for Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('LoadBalancerTlsPolicy')

const LoadBalancerTlsPolicyListSchema = z
  .array(LoadBalancerTlsPolicySchema)
  .openapi('LoadBalancerTlsPolicyList')

const GetLoadBalancerTlsPoliciesResultSchema = z
  .object({
    tlsPolicies: LoadBalancerTlsPolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the TLS security policies that are available.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetLoadBalancerTlsPolicies</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLoadBalancerTlsPoliciesResult')

const GetLoadBalancerTlsPoliciesRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetLoadBalancerTlsPolicies</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetLoadBalancerTlsPoliciesRequest', required: [] })
  .openapi('GetLoadBalancerTlsPoliciesRequest')

const LoadBalancerListSchema = z.array(LoadBalancerSchema).openapi('LoadBalancerList')

const GetLoadBalancersResultSchema = z
  .object({
    loadBalancers: LoadBalancerListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of LoadBalancer objects describing your load balancers.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetLoadBalancers</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLoadBalancersResult')

const GetLoadBalancersRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetLoadBalancers</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetLoadBalancersRequest', required: [] })
  .openapi('GetLoadBalancersRequest')

const GetOperationResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOperationResult')

const GetOperationRequestSchema = z
  .object({
    operationId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'A GUID used to identify the operation.' }),
    ),
  })
  .openapi({ required: ['operationId'], title: 'GetOperationRequest' })
  .openapi('GetOperationRequest')

const GetOperationsResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetOperations</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOperationsResult')

const GetOperationsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetOperations</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetOperationsRequest', required: [] })
  .openapi('GetOperationsRequest')

const GetOperationsForResourceResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
    nextPageCount: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>(Deprecated) Returns the number of pages of results that remain.</p> <note> <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the API. It is now deprecated, and the API returns the <code>next page token</code> parameter instead.</p> </note>',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetOperationsForResource</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOperationsForResourceResult')

const GetOperationsForResourceRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the resource for which you are requesting information.',
        }),
    ),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetOperationsForResource</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceName'], title: 'GetOperationsForResourceRequest' })
  .openapi('GetOperationsForResourceRequest')

const AvailabilityZoneSchema = z
  .object({
    zoneName: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Availability Zone. The format is <code>us-east-2a</code> (case-sensitive).',
        }),
    ).exactOptional(),
    state: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The state of the Availability Zone.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an Availability Zone. This is returned only as part of a <code>GetRegions</code> request.',
    required: [],
  })
  .openapi('AvailabilityZone')

const AvailabilityZoneListSchema = z.array(AvailabilityZoneSchema).openapi('AvailabilityZoneList')

const RegionSchema = z
  .object({
    continentCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The continent code (e.g., <code>NA</code>, meaning North America).',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the Amazon Web Services Region (e.g., <code>This region is recommended to serve users in the eastern United States and eastern Canada</code>).',
        }),
    ).exactOptional(),
    displayName: StringSchema.and(
      z.any().openapi({ description: 'The display name (e.g., <code>Ohio</code>).' }),
    ).exactOptional(),
    name: RegionNameSchema.and(
      z.any().openapi({ description: 'The region name (e.g., <code>us-east-2</code>).' }),
    ).exactOptional(),
    availabilityZones: AvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zones. Follows the format <code>us-east-2a</code> (case-sensitive).',
        }),
    ).exactOptional(),
    relationalDatabaseAvailabilityZones: AvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zones for databases. Follows the format <code>us-east-2a</code> (case-sensitive).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the Amazon Web Services Region.', required: [] })
  .openapi('Region')

const RegionListSchema = z.array(RegionSchema).openapi('RegionList')

const GetRegionsResultSchema = z
  .object({
    regions: RegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about your get regions request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRegionsResult')

const GetRegionsRequestSchema = z
  .object({
    includeAvailabilityZones: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether to also include Availability Zones in your get regions request. Availability Zones are indicated with a letter: e.g., <code>us-east-2a</code>.',
        }),
    ).exactOptional(),
    includeRelationalDatabaseAvailabilityZones: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether to also include Availability Zones for databases in your get regions request. Availability Zones are indicated with a letter (e.g., <code>us-east-2a</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRegionsRequest', required: [] })
  .openapi('GetRegionsRequest')

const RelationalDatabaseHardwareSchema = z
  .object({
    cpuCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of vCPUs for the database.' }),
    ).exactOptional(),
    diskSizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk for the database.' }),
    ).exactOptional(),
    ramSizeInGb: FloatSchema.and(
      z.any().openapi({ description: 'The amount of RAM in GB for the database.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the hardware of a database.', required: [] })
  .openapi('RelationalDatabaseHardware')

const PendingModifiedRelationalDatabaseValuesSchema = z
  .object({
    masterUserPassword: StringSchema.and(
      z.any().openapi({ description: 'The password for the master user of the database.' }),
    ).exactOptional(),
    engineVersion: StringSchema.and(
      z.any().openapi({ description: 'The database engine version.' }),
    ).exactOptional(),
    backupRetentionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating whether automated backup retention is enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a pending database value modification.', required: [] })
  .openapi('PendingModifiedRelationalDatabaseValues')

const RelationalDatabaseEndpointSchema = z
  .object({
    port: IntegerSchema.and(
      z.any().openapi({ description: 'Specifies the port that the database is listening on.' }),
    ).exactOptional(),
    address: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'Specifies the DNS address of the database.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an endpoint for a database.', required: [] })
  .openapi('RelationalDatabaseEndpoint')

const PendingMaintenanceActionSchema = z
  .object({
    action: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The type of pending database maintenance action.' }),
    ).exactOptional(),
    description: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional detail about the pending database maintenance action.',
        }),
    ).exactOptional(),
    currentApplyDate: IsoDateSchema.and(
      z
        .any()
        .openapi({ description: 'The effective date of the pending database maintenance action.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a pending database maintenance action.', required: [] })
  .openapi('PendingMaintenanceAction')

const PendingMaintenanceActionListSchema = z
  .array(PendingMaintenanceActionSchema)
  .openapi('PendingMaintenanceActionList')

const RelationalDatabaseSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The unique name of the database resource in Lightsail.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the database.' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp when the database was created. Formatted in Unix time.',
        }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The Region name and Availability Zone where the database is located.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lightsail resource type for the database (for example, <code>RelationalDatabase</code>).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    relationalDatabaseBlueprintId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The blueprint ID for the database. A blueprint describes the major engine version of a database.',
        }),
    ).exactOptional(),
    relationalDatabaseBundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bundle ID for the database. A bundle describes the performance specifications for your database.',
        }),
    ).exactOptional(),
    masterDatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the master database created when the Lightsail database resource is created.',
        }),
    ).exactOptional(),
    hardware: RelationalDatabaseHardwareSchema.and(
      z.any().openapi({ description: 'Describes the hardware of the database.' }),
    ).exactOptional(),
    state: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'Describes the current state of the database.' }),
    ).exactOptional(),
    secondaryAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the secondary Availability Zone of a high availability database.</p> <p>The secondary database is used for failover support of a high availability database.</p>',
        }),
    ).exactOptional(),
    backupRetentionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether automated backup retention is enabled for the database.',
        }),
    ).exactOptional(),
    pendingModifiedValues: PendingModifiedRelationalDatabaseValuesSchema.and(
      z.any().openapi({ description: 'Describes pending database value modifications.' }),
    ).exactOptional(),
    engine: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The database software (for example, <code>MySQL</code>).' }),
    ).exactOptional(),
    engineVersion: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The database engine version (for example, <code>5.7.23</code>).',
        }),
    ).exactOptional(),
    latestRestorableTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The latest point in time to which the database can be restored. Formatted in Unix time.',
        }),
    ).exactOptional(),
    masterUsername: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The master user name of the database.' }),
    ).exactOptional(),
    parameterApplyStatus: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The status of parameter updates for the database.' }),
    ).exactOptional(),
    preferredBackupWindow: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The daily time range during which automated backups are created for the database (for example, <code>16:00-16:30</code>).',
        }),
    ).exactOptional(),
    preferredMaintenanceWindow: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur on the database.</p> <p>In the format <code>ddd:hh24:mi-ddd:hh24:mi</code>. For example, <code>Tue:17:00-Tue:17:30</code>.</p>',
        }),
    ).exactOptional(),
    publiclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating whether the database is publicly accessible.',
        }),
    ).exactOptional(),
    masterEndpoint: RelationalDatabaseEndpointSchema.and(
      z.any().openapi({ description: 'The master endpoint for the database.' }),
    ).exactOptional(),
    pendingMaintenanceActions: PendingMaintenanceActionListSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the pending maintenance actions for the database.' }),
    ).exactOptional(),
    caCertificateIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The certificate associated with the database.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a database.', required: [] })
  .openapi('RelationalDatabase')

const GetRelationalDatabaseResultSchema = z
  .object({
    relationalDatabase: RelationalDatabaseSchema.and(
      z.any().openapi({ description: 'An object describing the specified database.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseResult')

const GetRelationalDatabaseRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the database that you are looking up.' }),
    ),
  })
  .openapi({ required: ['relationalDatabaseName'], title: 'GetRelationalDatabaseRequest' })
  .openapi('GetRelationalDatabaseRequest')

const RelationalDatabaseEngineSchema = z.literal('mysql').openapi('RelationalDatabaseEngine')

const RelationalDatabaseBlueprintSchema = z
  .object({
    blueprintId: StringSchema.and(
      z.any().openapi({ description: 'The ID for the database blueprint.' }),
    ).exactOptional(),
    engine: RelationalDatabaseEngineSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database software of the database blueprint (for example, <code>MySQL</code>).',
        }),
    ).exactOptional(),
    engineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine version for the database blueprint (for example, <code>5.7.23</code>).',
        }),
    ).exactOptional(),
    engineDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The description of the database engine for the database blueprint.',
        }),
    ).exactOptional(),
    engineVersionDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The description of the database engine version for the database blueprint.',
        }),
    ).exactOptional(),
    isEngineDefault: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether the engine version is the default for the database blueprint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a database image, or blueprint. A blueprint describes the major engine version of a database.',
    required: [],
  })
  .openapi('RelationalDatabaseBlueprint')

const RelationalDatabaseBlueprintListSchema = z
  .array(RelationalDatabaseBlueprintSchema)
  .openapi('RelationalDatabaseBlueprintList')

const GetRelationalDatabaseBlueprintsResultSchema = z
  .object({
    blueprints: RelationalDatabaseBlueprintListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing the result of your get relational database blueprints request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetRelationalDatabaseBlueprints</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseBlueprintsResult')

const GetRelationalDatabaseBlueprintsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetRelationalDatabaseBlueprints</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRelationalDatabaseBlueprintsRequest', required: [] })
  .openapi('GetRelationalDatabaseBlueprintsRequest')

const RelationalDatabaseBundleSchema = z
  .object({
    bundleId: StringSchema.and(
      z.any().openapi({ description: 'The ID for the database bundle.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name for the database bundle.' }),
    ).exactOptional(),
    price: FloatSchema.and(
      z.any().openapi({ description: 'The cost of the database bundle in US currency.' }),
    ).exactOptional(),
    ramSizeInGb: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of RAM in GB (for example, <code>2.0</code>) for the database bundle.',
        }),
    ).exactOptional(),
    diskSizeInGb: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the disk for the database bundle.' }),
    ).exactOptional(),
    transferPerMonthInGb: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The data transfer rate per month in GB for the database bundle.',
        }),
    ).exactOptional(),
    cpuCount: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of virtual CPUs (vCPUs) for the database bundle.' }),
    ).exactOptional(),
    isEncrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating whether the database bundle is encrypted.',
        }),
    ).exactOptional(),
    isActive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating whether the database bundle is active.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a database bundle. A bundle describes the performance specifications of the database.',
    required: [],
  })
  .openapi('RelationalDatabaseBundle')

const RelationalDatabaseBundleListSchema = z
  .array(RelationalDatabaseBundleSchema)
  .openapi('RelationalDatabaseBundleList')

const GetRelationalDatabaseBundlesResultSchema = z
  .object({
    bundles: RelationalDatabaseBundleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing the result of your get relational database bundles request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetRelationalDatabaseBundles</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseBundlesResult')

const GetRelationalDatabaseBundlesRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetRelationalDatabaseBundles</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
    includeInactive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether to include inactive (unavailable) bundles in the response of your request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRelationalDatabaseBundlesRequest', required: [] })
  .openapi('GetRelationalDatabaseBundlesRequest')

const RelationalDatabaseEventSchema = z
  .object({
    resource: ResourceNameSchema.and(
      z.any().openapi({ description: 'The database that the database event relates to.' }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the database event was created.' }),
    ).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'The message of the database event.' }),
    ).exactOptional(),
    eventCategories: StringListSchema.and(
      z.any().openapi({ description: 'The category that the database event belongs to.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an event for a database.', required: [] })
  .openapi('RelationalDatabaseEvent')

const RelationalDatabaseEventListSchema = z
  .array(RelationalDatabaseEventSchema)
  .openapi('RelationalDatabaseEventList')

const GetRelationalDatabaseEventsResultSchema = z
  .object({
    relationalDatabaseEvents: RelationalDatabaseEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing the result of your get relational database events request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetRelationalDatabaseEvents</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseEventsResult')

const GetRelationalDatabaseEventsRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the database from which to get events.' }),
    ),
    durationInMinutes: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of minutes in the past from which to retrieve events. For example, to get all events from the past 2 hours, enter 120.</p> <p>Default: <code>60</code> </p> <p>The minimum is 1 and the maximum is 14 days (20160 minutes).</p>',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetRelationalDatabaseEvents</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['relationalDatabaseName'], title: 'GetRelationalDatabaseEventsRequest' })
  .openapi('GetRelationalDatabaseEventsRequest')

const LogEventSchema = z
  .object({
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the database log event was created.' }),
    ).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'The message of the database log event.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a database log event.', required: [] })
  .openapi('LogEvent')

const LogEventListSchema = z.array(LogEventSchema).openapi('LogEventList')

const GetRelationalDatabaseLogEventsResultSchema = z
  .object({
    resourceLogEvents: LogEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing the result of your get relational database log events request.',
        }),
    ).exactOptional(),
    nextBackwardToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for advancing to the previous page of results from your get relational database log events request.',
        }),
    ).exactOptional(),
    nextForwardToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for advancing to the next page of results from your get relational database log events request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseLogEventsResult')

const GetRelationalDatabaseLogEventsRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database for which to get log events.' }),
    ),
    logStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the log stream.</p> <p>Use the <code>get relational database log streams</code> operation to get a list of available log streams.</p>',
        }),
    ),
    startTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start of the time interval from which to get log events.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the start time.</p> </li> </ul>',
        }),
    ).exactOptional(),
    endTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the time interval from which to get log events.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the end time.</p> </li> </ul>',
        }),
    ).exactOptional(),
    startFromHead: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Parameter to specify if the log should start from head or tail. If <code>true</code> is specified, the log event starts from the head of the log. If <code>false</code> is specified, the log event starts from the tail of the log.</p> <note> <p>For PostgreSQL, the default value of <code>false</code> is the only option available.</p> </note>',
        }),
    ).exactOptional(),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next or previous page of results from your request.</p> <p>To get a page token, perform an initial <code>GetRelationalDatabaseLogEvents</code> request. If your results are paginated, the response will return a next forward token and/or next backward token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['relationalDatabaseName', 'logStreamName'],
    title: 'GetRelationalDatabaseLogEventsRequest',
  })
  .openapi('GetRelationalDatabaseLogEventsRequest')

const GetRelationalDatabaseLogStreamsResultSchema = z
  .object({
    logStreams: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing the result of your get relational database log streams request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseLogStreamsResult')

const GetRelationalDatabaseLogStreamsRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database for which to get log streams.' }),
    ),
  })
  .openapi({
    required: ['relationalDatabaseName'],
    title: 'GetRelationalDatabaseLogStreamsRequest',
  })
  .openapi('GetRelationalDatabaseLogStreamsRequest')

const GetRelationalDatabaseMasterUserPasswordResultSchema = z
  .object({
    masterUserPassword: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The master user password for the <code>password version</code> specified.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the specified version of the master user password was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseMasterUserPasswordResult')

const RelationalDatabasePasswordVersionSchema = z
  .enum(['CURRENT', 'PREVIOUS', 'PENDING'])
  .openapi('RelationalDatabasePasswordVersion')

const GetRelationalDatabaseMasterUserPasswordRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of your database for which to get the master user password.',
        }),
    ),
    passwordVersion: RelationalDatabasePasswordVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The password version to return.</p> <p>Specifying <code>CURRENT</code> or <code>PREVIOUS</code> returns the current or previous passwords respectively. Specifying <code>PENDING</code> returns the newest version of the password that will rotate to <code>CURRENT</code>. After the <code>PENDING</code> password rotates to <code>CURRENT</code>, the <code>PENDING</code> password is no longer available.</p> <p>Default: <code>CURRENT</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['relationalDatabaseName'],
    title: 'GetRelationalDatabaseMasterUserPasswordRequest',
  })
  .openapi('GetRelationalDatabaseMasterUserPasswordRequest')

const RelationalDatabaseMetricNameSchema = z
  .enum([
    'CPUUtilization',
    'DatabaseConnections',
    'DiskQueueDepth',
    'FreeStorageSpace',
    'NetworkReceiveThroughput',
    'NetworkTransmitThroughput',
  ])
  .openapi('RelationalDatabaseMetricName')

const GetRelationalDatabaseMetricDataResultSchema = z
  .object({
    metricName: RelationalDatabaseMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric returned.' }),
    ).exactOptional(),
    metricData: MetricDatapointListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe the metric data returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseMetricDataResult')

const GetRelationalDatabaseMetricDataRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database from which to get metric data.' }),
    ),
    metricName: RelationalDatabaseMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric for which you want to return information.</p> <p>Valid relational database metric names are listed below, along with the most useful <code>statistics</code> to include in your request, and the published <code>unit</code> value. All relational database metric data is available in 1-minute (60 seconds) granularity.</p> <ul> <li> <p> <b> <code>CPUUtilization</code> </b> - The percentage of CPU utilization currently in use on the database.</p> <p> <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Percent</code>.</p> </li> <li> <p> <b> <code>DatabaseConnections</code> </b> - The number of database connections in use.</p> <p> <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>DiskQueueDepth</code> </b> - The number of outstanding IOs (read/write requests) that are waiting to access the disk.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Count</code>.</p> </li> <li> <p> <b> <code>FreeStorageSpace</code> </b> - The amount of available storage space.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> <p> <code>Unit</code>: The published unit is <code>Bytes</code>.</p> </li> <li> <p> <b> <code>NetworkReceiveThroughput</code> </b> - The incoming (Receive) network traffic on the database, including both customer database traffic and AWS traffic used for monitoring and replication.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p> </li> <li> <p> <b> <code>NetworkTransmitThroughput</code> </b> - The outgoing (Transmit) network traffic on the database, including both customer database traffic and AWS traffic used for monitoring and replication.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> <p> <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p> </li> </ul>',
        }),
    ),
    period: MetricPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The granularity, in seconds, of the returned data points.</p> <p>All relational database metric data is available in 1-minute (60 seconds) granularity.</p>',
        }),
    ),
    startTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start of the time interval from which to get metric data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the start time.</p> </li> </ul>',
        }),
    ),
    endTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the time interval from which to get metric data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the end time.</p> </li> </ul>',
        }),
    ),
    unit: MetricUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit for the metric data request. Valid units depend on the metric data being requested. For the valid units with each available metric, see the <code>metricName</code> parameter.',
        }),
    ),
    statistics: MetricStatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic for the metric.</p> <p>The following statistics are available:</p> <ul> <li> <p> <code>Minimum</code> - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <code>Maximum</code> - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.</p> </li> <li> <p> <code>Sum</code> - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.</p> </li> <li> <p> <code>Average</code> - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.</p> </li> <li> <p> <code>SampleCount</code> - The count, or number, of data points used for the statistical calculation.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: [
      'relationalDatabaseName',
      'metricName',
      'period',
      'startTime',
      'endTime',
      'unit',
      'statistics',
    ],
    title: 'GetRelationalDatabaseMetricDataRequest',
  })
  .openapi('GetRelationalDatabaseMetricDataRequest')

const RelationalDatabaseParameterSchema = z
  .object({
    allowedValues: StringSchema.and(
      z.any().openapi({ description: 'Specifies the valid range of values for the parameter.' }),
    ).exactOptional(),
    applyMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when parameter updates are applied.</p> <p>Can be <code>immediate</code> or <code>pending-reboot</code>.</p>',
        }),
    ).exactOptional(),
    applyType: StringSchema.and(
      z.any().openapi({ description: 'Specifies the engine-specific parameter type.' }),
    ).exactOptional(),
    dataType: StringSchema.and(
      z.any().openapi({ description: 'Specifies the valid data type for the parameter.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'Provides a description of the parameter.' }),
    ).exactOptional(),
    isModifiable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating whether the parameter can be modified.',
        }),
    ).exactOptional(),
    parameterName: StringSchema.and(
      z.any().openapi({ description: 'Specifies the name of the parameter.' }),
    ).exactOptional(),
    parameterValue: StringSchema.and(
      z.any().openapi({ description: 'Specifies the value of the parameter.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the parameters of a database.', required: [] })
  .openapi('RelationalDatabaseParameter')

const RelationalDatabaseParameterListSchema = z
  .array(RelationalDatabaseParameterSchema)
  .openapi('RelationalDatabaseParameterList')

const GetRelationalDatabaseParametersResultSchema = z
  .object({
    parameters: RelationalDatabaseParameterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing the result of your get relational database parameters request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetRelationalDatabaseParameters</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseParametersResult')

const GetRelationalDatabaseParametersRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database for which to get parameters.' }),
    ),
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetRelationalDatabaseParameters</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['relationalDatabaseName'],
    title: 'GetRelationalDatabaseParametersRequest',
  })
  .openapi('GetRelationalDatabaseParametersRequest')

const RelationalDatabaseSnapshotSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the database snapshot.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the database snapshot.' }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code for the database snapshot. Include this code in your email to support when you have questions about a database snapshot in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z.any().openapi({ description: 'The timestamp when the database snapshot was created.' }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Region name and Availability Zone where the database snapshot is located.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The Lightsail resource type.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.',
        }),
    ).exactOptional(),
    engine: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The software of the database snapshot (for example, <code>MySQL</code>)',
        }),
    ).exactOptional(),
    engineVersion: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine version for the database snapshot (for example, <code>5.7.23</code>).',
        }),
    ).exactOptional(),
    sizeInGb: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the disk in GB (for example, <code>32</code>) for the database snapshot.',
        }),
    ).exactOptional(),
    state: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The state of the database snapshot.' }),
    ).exactOptional(),
    fromRelationalDatabaseName: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the source database from which the database snapshot was created.',
        }),
    ).exactOptional(),
    fromRelationalDatabaseArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the database from which the database snapshot was created.',
        }),
    ).exactOptional(),
    fromRelationalDatabaseBundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bundle ID of the database from which the database snapshot was created.',
        }),
    ).exactOptional(),
    fromRelationalDatabaseBlueprintId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The blueprint ID of the database from which the database snapshot was created. A blueprint describes the major engine version of a database.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a database snapshot.', required: [] })
  .openapi('RelationalDatabaseSnapshot')

const GetRelationalDatabaseSnapshotResultSchema = z
  .object({
    relationalDatabaseSnapshot: RelationalDatabaseSnapshotSchema.and(
      z.any().openapi({ description: 'An object describing the specified database snapshot.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseSnapshotResult')

const GetRelationalDatabaseSnapshotRequestSchema = z
  .object({
    relationalDatabaseSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the database snapshot for which to get information.',
        }),
    ),
  })
  .openapi({
    required: ['relationalDatabaseSnapshotName'],
    title: 'GetRelationalDatabaseSnapshotRequest',
  })
  .openapi('GetRelationalDatabaseSnapshotRequest')

const RelationalDatabaseSnapshotListSchema = z
  .array(RelationalDatabaseSnapshotSchema)
  .openapi('RelationalDatabaseSnapshotList')

const GetRelationalDatabaseSnapshotsResultSchema = z
  .object({
    relationalDatabaseSnapshots: RelationalDatabaseSnapshotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing the result of your get relational database snapshots request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetRelationalDatabaseSnapshots</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabaseSnapshotsResult')

const GetRelationalDatabaseSnapshotsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetRelationalDatabaseSnapshots</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRelationalDatabaseSnapshotsRequest', required: [] })
  .openapi('GetRelationalDatabaseSnapshotsRequest')

const RelationalDatabaseListSchema = z
  .array(RelationalDatabaseSchema)
  .openapi('RelationalDatabaseList')

const GetRelationalDatabasesResultSchema = z
  .object({
    relationalDatabases: RelationalDatabaseListSchema.and(
      z
        .any()
        .openapi({
          description: 'An object describing the result of your get relational databases request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetRelationalDatabases</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelationalDatabasesResult')

const GetRelationalDatabasesRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetRelationalDatabases</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRelationalDatabasesRequest', required: [] })
  .openapi('GetRelationalDatabasesRequest')

const StaticIpSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the static IP (e.g., <code>StaticIP-Ohio-EXAMPLE</code>).',
        }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the static IP (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE</code>).',
        }),
    ).exactOptional(),
    supportCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.',
        }),
    ).exactOptional(),
    createdAt: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the static IP was created (e.g., <code>1479735304.222</code>).',
        }),
    ).exactOptional(),
    location: ResourceLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The region and Availability Zone where the static IP was created.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type (usually <code>StaticIp</code>).' }),
    ).exactOptional(),
    ipAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'The static IP address.' }),
    ).exactOptional(),
    attachedTo: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance where the static IP is attached (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).',
        }),
    ).exactOptional(),
    isAttached: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value indicating whether the static IP is attached.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a static IP.', required: [] })
  .openapi('StaticIp')

const GetStaticIpResultSchema = z
  .object({
    staticIp: StaticIpSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about the requested static IP.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStaticIpResult')

const GetStaticIpRequestSchema = z
  .object({
    staticIpName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the static IP in Lightsail.' }),
    ),
  })
  .openapi({ required: ['staticIpName'], title: 'GetStaticIpRequest' })
  .openapi('GetStaticIpRequest')

const StaticIpListSchema = z.array(StaticIpSchema).openapi('StaticIpList')

const GetStaticIpsResultSchema = z
  .object({
    staticIps: StaticIpListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pairs containing information about your get static IPs request.',
        }),
    ).exactOptional(),
    nextPageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>A next page token is not returned if there are no more results to display.</p> <p>To get the next page of results, perform another <code>GetStaticIps</code> request and specify the next page token using the <code>pageToken</code> parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStaticIpsResult')

const GetStaticIpsRequestSchema = z
  .object({
    pageToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to advance to the next page of results from your request.</p> <p>To get a page token, perform an initial <code>GetStaticIps</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetStaticIpsRequest', required: [] })
  .openapi('GetStaticIpsRequest')

const ImportKeyPairResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportKeyPairResult')

const ImportKeyPairRequestSchema = z
  .object({
    keyPairName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the key pair for which you want to import the public key.',
        }),
    ),
    publicKeyBase64: Base64Schema.and(
      z
        .any()
        .openapi({ description: 'A base64-encoded public key of the <code>ssh-rsa</code> type.' }),
    ),
  })
  .openapi({ required: ['keyPairName', 'publicKeyBase64'], title: 'ImportKeyPairRequest' })
  .openapi('ImportKeyPairRequest')

const IsVpcPeeredResultSchema = z
  .object({
    isPeered: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns <code>true</code> if the Lightsail VPC is peered; otherwise, <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IsVpcPeeredResult')

const IsVpcPeeredRequestSchema = z
  .object({})
  .openapi({ title: 'IsVpcPeeredRequest' })
  .openapi('IsVpcPeeredRequest')

const OpenInstancePublicPortsResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpenInstancePublicPortsResult')

const OpenInstancePublicPortsRequestSchema = z
  .object({
    portInfo: PortInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'An object to describe the ports to open for the specified instance.',
        }),
    ),
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance for which to open ports.' }),
    ),
  })
  .openapi({ required: ['portInfo', 'instanceName'], title: 'OpenInstancePublicPortsRequest' })
  .openapi('OpenInstancePublicPortsRequest')

const PeerVpcResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PeerVpcResult')

const PeerVpcRequestSchema = z
  .object({})
  .openapi({ title: 'PeerVpcRequest' })
  .openapi('PeerVpcRequest')

const PutAlarmResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutAlarmResult')

const PutAlarmRequestSchema = z
  .object({
    alarmName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the alarm. Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.',
        }),
    ),
    metricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the metric to associate with the alarm.</p> <p>You can configure up to two alarms per metric.</p> <p>The following metrics are available for each resource type:</p> <ul> <li> <p> <b>Instances</b>: <code>BurstCapacityPercentage</code>, <code>BurstCapacityTime</code>, <code>CPUUtilization</code>, <code>NetworkIn</code>, <code>NetworkOut</code>, <code>StatusCheckFailed</code>, <code>StatusCheckFailed_Instance</code>, and <code>StatusCheckFailed_System</code>.</p> </li> <li> <p> <b>Load balancers</b>: <code>ClientTLSNegotiationErrorCount</code>, <code>HealthyHostCount</code>, <code>UnhealthyHostCount</code>, <code>HTTPCode_LB_4XX_Count</code>, <code>HTTPCode_LB_5XX_Count</code>, <code>HTTPCode_Instance_2XX_Count</code>, <code>HTTPCode_Instance_3XX_Count</code>, <code>HTTPCode_Instance_4XX_Count</code>, <code>HTTPCode_Instance_5XX_Count</code>, <code>InstanceResponseTime</code>, <code>RejectedConnectionCount</code>, and <code>RequestCount</code>.</p> </li> <li> <p> <b>Relational databases</b>: <code>CPUUtilization</code>, <code>DatabaseConnections</code>, <code>DiskQueueDepth</code>, <code>FreeStorageSpace</code>, <code>NetworkReceiveThroughput</code>, and <code>NetworkTransmitThroughput</code>.</p> </li> </ul> <p>For more information about these metrics, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-resource-health-metrics#available-metrics">Metrics available in Lightsail</a>.</p>',
        }),
    ),
    monitoredResourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Lightsail resource that will be monitored.</p> <p>Instances, load balancers, and relational databases are the only Lightsail resources that can currently be monitored by alarms.</p>',
        }),
    ),
    comparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The arithmetic operation to use when comparing the specified statistic to the threshold. The specified statistic value is used as the first operand.',
        }),
    ),
    threshold: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'The value against which the specified statistic is compared.' }),
    ),
    evaluationPeriods: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of most recent periods over which data is compared to the specified threshold. If you are setting an "M out of N" alarm, this value (<code>evaluationPeriods</code>) is the N.</p> <p>If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies the rolling period of time in which data points are evaluated.</p> <p>Each evaluation period is five minutes long. For example, specify an evaluation period of 24 to evaluate a metric over a rolling period of two hours.</p> <p>You can specify a minimum valuation period of 1 (5 minutes), and a maximum evaluation period of 288 (24 hours).</p>',
        }),
    ),
    datapointsToAlarm: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of data points that must be not within the specified threshold to trigger the alarm. If you are setting an "M out of N" alarm, this value (<code>datapointsToAlarm</code>) is the M.',
        }),
    ).exactOptional(),
    treatMissingData: TreatMissingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets how this alarm will handle missing data points.</p> <p>An alarm can treat missing data in the following ways:</p> <ul> <li> <p> <code>breaching</code> - Assume the missing data is not within the threshold. Missing data counts towards the number of times the metric is not within the threshold.</p> </li> <li> <p> <code>notBreaching</code> - Assume the missing data is within the threshold. Missing data does not count towards the number of times the metric is not within the threshold.</p> </li> <li> <p> <code>ignore</code> - Ignore the missing data. Maintains the current alarm state.</p> </li> <li> <p> <code>missing</code> - Missing data is treated as missing.</p> </li> </ul> <p>If <code>treatMissingData</code> is not specified, the default behavior of <code>missing</code> is used.</p>',
        }),
    ).exactOptional(),
    contactProtocols: ContactProtocolsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The contact protocols to use for the alarm, such as <code>Email</code>, <code>SMS</code> (text messaging), or both.</p> <p>A notification is sent via the specified contact protocol if notifications are enabled for the alarm, and when the alarm is triggered.</p> <p>A notification is not sent if a contact protocol is not specified, if the specified contact protocol is not configured in the Amazon Web Services Region, or if notifications are not enabled for the alarm using the <code>notificationEnabled</code> paramater.</p> <p>Use the <code>CreateContactMethod</code> action to configure a contact protocol in an Amazon Web Services Region.</p>',
        }),
    ).exactOptional(),
    notificationTriggers: NotificationTriggerListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The alarm states that trigger a notification.</p> <p>An alarm has the following possible states:</p> <ul> <li> <p> <code>ALARM</code> - The metric is outside of the defined threshold.</p> </li> <li> <p> <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not available, or not enough data is available for the metric to determine the alarm state.</p> </li> <li> <p> <code>OK</code> - The metric is within the defined threshold.</p> </li> </ul> <p>When you specify a notification trigger, the <code>ALARM</code> state must be specified. The <code>INSUFFICIENT_DATA</code> and <code>OK</code> states can be specified in addition to the <code>ALARM</code> state.</p> <ul> <li> <p>If you specify <code>OK</code> as an alarm trigger, a notification is sent when the alarm switches from an <code>ALARM</code> or <code>INSUFFICIENT_DATA</code> alarm state to an <code>OK</code> state. This can be thought of as an <i>all clear</i> alarm notification.</p> </li> <li> <p>If you specify <code>INSUFFICIENT_DATA</code> as the alarm trigger, a notification is sent when the alarm switches from an <code>OK</code> or <code>ALARM</code> alarm state to an <code>INSUFFICIENT_DATA</code> state.</p> </li> </ul> <p>The notification trigger defaults to <code>ALARM</code> if you don't specify this parameter.</p>",
        }),
    ).exactOptional(),
    notificationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the alarm is enabled.</p> <p>Notifications are enabled by default if you don't specify this parameter.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'alarmName',
      'metricName',
      'monitoredResourceName',
      'comparisonOperator',
      'threshold',
      'evaluationPeriods',
    ],
    title: 'PutAlarmRequest',
  })
  .openapi('PutAlarmRequest')

const PutInstancePublicPortsResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutInstancePublicPortsResult')

const PortInfoListSchema = z.array(PortInfoSchema).openapi('PortInfoList')

const PutInstancePublicPortsRequestSchema = z
  .object({
    portInfos: PortInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to describe the ports to open for the specified instance.',
        }),
    ),
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance for which to open ports.' }),
    ),
  })
  .openapi({ required: ['portInfos', 'instanceName'], title: 'PutInstancePublicPortsRequest' })
  .openapi('PutInstancePublicPortsRequest')

const RebootInstanceResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RebootInstanceResult')

const RebootInstanceRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the instance to reboot.' }),
    ),
  })
  .openapi({ required: ['instanceName'], title: 'RebootInstanceRequest' })
  .openapi('RebootInstanceRequest')

const RebootRelationalDatabaseResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RebootRelationalDatabaseResult')

const RebootRelationalDatabaseRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database to reboot.' }),
    ),
  })
  .openapi({ required: ['relationalDatabaseName'], title: 'RebootRelationalDatabaseRequest' })
  .openapi('RebootRelationalDatabaseRequest')

const RegisterContainerImageResultSchema = z
  .object({
    containerImage: ContainerImageSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes a container image that is registered to a Lightsail container service',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterContainerImageResult')

const ContainerLabelSchema = z
  .string()
  .regex(/^[a-z0-9]{1,2}|[a-z0-9][a-z0-9-]+[a-z0-9]$/)
  .min(1)
  .max(53)
  .openapi('ContainerLabel')

const RegisterContainerImageRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container service for which to register a container image.',
        }),
    ),
    label: ContainerLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The label for the container image when it's registered to the container service.</p> <p>Use a descriptive label that you can use to track the different versions of your registered container images.</p> <p>Use the <code>GetContainerImages</code> action to return the container images registered to a Lightsail container service. The label is the <code>&lt;imagelabel&gt;</code> portion of the following image name example:</p> <ul> <li> <p> <code>:container-service-1.&lt;imagelabel&gt;.1</code> </p> </li> </ul> <p>If the name of your container service is <code>mycontainerservice</code>, and the label that you specify is <code>mystaticwebsite</code>, then the name of the registered container image will be <code>:mycontainerservice.mystaticwebsite.1</code>.</p> <p>The number at the end of these image name examples represents the version of the registered container image. If you push and register another container image to the same Lightsail container service, with the same label, then the version number for the new registered container image will be <code>2</code>. If you push and register another container image, the version number will be <code>3</code>, and so on.</p>",
        }),
    ),
    digest: StringSchema.and(
      z.any().openapi({ description: 'The digest of the container image to be registered.' }),
    ),
  })
  .openapi({ required: ['serviceName', 'label', 'digest'], title: 'RegisterContainerImageRequest' })
  .openapi('RegisterContainerImageRequest')

const ReleaseStaticIpResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseStaticIpResult')

const ReleaseStaticIpRequestSchema = z
  .object({
    staticIpName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the static IP to delete.' }),
    ),
  })
  .openapi({ required: ['staticIpName'], title: 'ReleaseStaticIpRequest' })
  .openapi('ReleaseStaticIpRequest')

const ResetDistributionCacheResultSchema = z
  .object({
    status: StringSchema.and(
      z.any().openapi({ description: 'The status of the reset cache request.' }),
    ).exactOptional(),
    createTime: IsoDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of the reset cache request (e.g., <code>1479734909.17</code>) in Unix time format.',
        }),
    ).exactOptional(),
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResetDistributionCacheResult')

const ResetDistributionCacheRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution for which to reset cache.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ResetDistributionCacheRequest', required: [] })
  .openapi('ResetDistributionCacheRequest')

const SendContactMethodVerificationResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendContactMethodVerificationResult')

const ContactMethodVerificationProtocolSchema = z
  .literal('Email')
  .openapi('ContactMethodVerificationProtocol')

const SendContactMethodVerificationRequestSchema = z
  .object({
    protocol: ContactMethodVerificationProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol to verify, such as <code>Email</code> or <code>SMS</code> (text messaging).',
        }),
    ),
  })
  .openapi({ required: ['protocol'], title: 'SendContactMethodVerificationRequest' })
  .openapi('SendContactMethodVerificationRequest')

const SetIpAddressTypeResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetIpAddressTypeResult')

const SetIpAddressTypeRequestSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource type.</p> <p>The possible values are <code>Distribution</code>, <code>Instance</code>, and <code>LoadBalancer</code>.</p> <note> <p>Distribution-related APIs are available only in the N. Virginia (<code>us-east-1</code>) Amazon Web Services Region. Set your Amazon Web Services Region configuration to <code>us-east-1</code> to create, view, or edit distributions.</p> </note>',
        }),
    ),
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the resource for which to set the IP address type.' }),
    ),
    ipAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address type to set for the specified resource.</p> <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for IPv4 and IPv6.</p>',
        }),
    ),
  })
  .openapi({
    required: ['resourceType', 'resourceName', 'ipAddressType'],
    title: 'SetIpAddressTypeRequest',
  })
  .openapi('SetIpAddressTypeRequest')

const SetResourceAccessForBucketResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetResourceAccessForBucketResult')

const ResourceBucketAccessSchema = z.enum(['allow', 'deny']).openapi('ResourceBucketAccess')

const SetResourceAccessForBucketRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Lightsail instance for which to set bucket access. The instance must be in a running or stopped state.',
        }),
    ),
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the bucket for which to set access to another Lightsail resource.',
        }),
    ),
    access: ResourceBucketAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The access setting.</p> <p>The following access settings are available:</p> <ul> <li> <p> <code>allow</code> - Allows access to the bucket and its objects.</p> </li> <li> <p> <code>deny</code> - Denies access to the bucket and its objects. Use this setting to remove access for a resource previously set to <code>allow</code>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['resourceName', 'bucketName', 'access'],
    title: 'SetResourceAccessForBucketRequest',
  })
  .openapi('SetResourceAccessForBucketRequest')

const StartGUISessionResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z.any().openapi({ description: 'The available API operations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartGUISessionResult')

const StartGUISessionRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(z.any().openapi({ description: 'The resource name.' })),
  })
  .openapi({ required: ['resourceName'], title: 'StartGUISessionRequest' })
  .openapi('StartGUISessionRequest')

const StartInstanceResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartInstanceResult')

const StartInstanceRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the instance (a virtual private server) to start.' }),
    ),
  })
  .openapi({ required: ['instanceName'], title: 'StartInstanceRequest' })
  .openapi('StartInstanceRequest')

const StartRelationalDatabaseResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartRelationalDatabaseResult')

const StartRelationalDatabaseRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database to start.' }),
    ),
  })
  .openapi({ required: ['relationalDatabaseName'], title: 'StartRelationalDatabaseRequest' })
  .openapi('StartRelationalDatabaseRequest')

const StopGUISessionResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z.any().openapi({ description: 'The available API operations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopGUISessionResult')

const StopGUISessionRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(z.any().openapi({ description: 'The resource name.' })),
  })
  .openapi({ required: ['resourceName'], title: 'StopGUISessionRequest' })
  .openapi('StopGUISessionRequest')

const StopInstanceResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopInstanceResult')

const StopInstanceRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the instance (a virtual private server) to stop.' }),
    ),
    force: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>True</code>, forces a Lightsail instance that is stuck in a <code>stopping</code> state to stop.</p> <important> <p>Only use the <code>force</code> parameter if your instance is stuck in the <code>stopping</code> state. In any other state, your instance should stop normally without adding this parameter to your API request.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['instanceName'], title: 'StopInstanceRequest' })
  .openapi('StopInstanceRequest')

const StopRelationalDatabaseResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopRelationalDatabaseResult')

const StopRelationalDatabaseRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database to stop.' }),
    ),
    relationalDatabaseSnapshotName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of your new database snapshot to be created before stopping your database.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['relationalDatabaseName'], title: 'StopRelationalDatabaseRequest' })
  .openapi('StopRelationalDatabaseRequest')

const TagResourceResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagResourceResult')

const TagResourceRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the resource to which you are adding tags.' }),
    ),
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to which you want to add a tag.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(z.any().openapi({ description: 'The tag key and optional value.' })),
  })
  .openapi({ required: ['resourceName', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TestAlarmResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestAlarmResult')

const TestAlarmRequestSchema = z
  .object({
    alarmName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm to test.' }),
    ),
    state: AlarmStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The alarm state to test.</p> <p>An alarm has the following possible states that can be tested:</p> <ul> <li> <p> <code>ALARM</code> - The metric is outside of the defined threshold.</p> </li> <li> <p> <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not available, or not enough data is available for the metric to determine the alarm state.</p> </li> <li> <p> <code>OK</code> - The metric is within the defined threshold.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['alarmName', 'state'], title: 'TestAlarmRequest' })
  .openapi('TestAlarmRequest')

const UnpeerVpcResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnpeerVpcResult')

const UnpeerVpcRequestSchema = z
  .object({})
  .openapi({ title: 'UnpeerVpcRequest' })
  .openapi('UnpeerVpcRequest')

const UntagResourceResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UntagResourceResult')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the resource from which you are removing a tag.' }),
    ),
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource from which you want to remove a tag.',
        }),
    ).exactOptional(),
    tagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The tag keys to delete from the specified resource.' }),
    ),
  })
  .openapi({ required: ['resourceName', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateBucketResultSchema = z
  .object({
    bucket: BucketSchema.and(
      z.any().openapi({ description: 'An object that describes the bucket that is updated.' }),
    ).exactOptional(),
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBucketResult')

const UpdateBucketRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket to update.' }),
    ),
    accessRules: AccessRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that sets the public accessibility of objects in the specified bucket.',
        }),
    ).exactOptional(),
    versioning: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to enable or suspend versioning of objects in the bucket.</p> <p>The following options can be specified:</p> <ul> <li> <p> <code>Enabled</code> - Enables versioning of objects in the specified bucket.</p> </li> <li> <p> <code>Suspended</code> - Suspends versioning of objects in the specified bucket. Existing object versions are retained.</p> </li> </ul>',
        }),
    ).exactOptional(),
    readonlyAccessAccounts: PartnerIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings to specify the Amazon Web Services account IDs that can access the bucket.</p> <p>You can give a maximum of 10 Amazon Web Services accounts access to a bucket.</p>',
        }),
    ).exactOptional(),
    accessLogConfig: BucketAccessLogConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the access log configuration for the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['bucketName'], title: 'UpdateBucketRequest' })
  .openapi('UpdateBucketRequest')

const UpdateBucketBundleResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBucketBundleResult')

const UpdateBucketBundleRequestSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket for which to update the bundle.' }),
    ),
    bundleId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the new bundle to apply to the bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html">GetBucketBundles</a> action to get a list of bundle IDs that you can specify.</p>',
        }),
    ),
  })
  .openapi({ required: ['bucketName', 'bundleId'], title: 'UpdateBucketBundleRequest' })
  .openapi('UpdateBucketBundleRequest')

const UpdateContainerServiceResultSchema = z
  .object({
    containerService: ContainerServiceSchema.and(
      z.any().openapi({ description: 'An object that describes a container service.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateContainerServiceResult')

const UpdateContainerServiceRequestSchema = z
  .object({
    serviceName: ContainerServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the container service to update.' }),
    ),
    power: ContainerServicePowerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The power for the container service.</p> <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the container service. The <code>power</code> and <code>scale</code> of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of the service.</p> <p>Use the <code>GetContainerServicePowers</code> action to view the specifications of each power option.</p>',
        }),
    ).exactOptional(),
    scale: ContainerServiceScaleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scale for the container service.</p> <p>The scale specifies the allocated compute nodes of the container service. The <code>power</code> and <code>scale</code> of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of the service.</p>',
        }),
    ).exactOptional(),
    isDisabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value to indicate whether the container service is disabled.',
        }),
    ).exactOptional(),
    publicDomainNames: ContainerServicePublicDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The public domain names to use with the container service, such as <code>example.com</code> and <code>www.example.com</code>.</p> <p>You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container configured as the public endpoint of your container service.</p> <p>If you don't specify public domain names, then you can use the default domain of the container service.</p> <important> <p>You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the <code>CreateCertificate</code> action to create a certificate for the public domain names you want to use with your container service.</p> </important> <p>You can specify public domain names using a string to array map as shown in the example later on this page.</p>",
        }),
    ).exactOptional(),
    privateRegistryAccess: PrivateRegistryAccessRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['serviceName'], title: 'UpdateContainerServiceRequest' })
  .openapi('UpdateContainerServiceRequest')

const UpdateDistributionResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDistributionResult')

const UpdateDistributionRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution to update.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p>',
        }),
    ),
    origin: InputOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the origin resource for the distribution, such as a Lightsail instance, bucket, or load balancer.</p> <p>The distribution pulls, caches, and serves content from the origin.</p>',
        }),
    ).exactOptional(),
    defaultCacheBehavior: CacheBehaviorSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that describes the default cache behavior for the distribution.',
        }),
    ).exactOptional(),
    cacheBehaviorSettings: CacheSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An object that describes the cache behavior settings for the distribution.</p> <note> <p>The <code>cacheBehaviorSettings</code> specified in your <code>UpdateDistributionRequest</code> will replace your distribution's existing settings.</p> </note>",
        }),
    ).exactOptional(),
    cacheBehaviors: CacheBehaviorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the per-path cache behavior for the distribution.',
        }),
    ).exactOptional(),
    isEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether to enable the distribution.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['distributionName'], title: 'UpdateDistributionRequest' })
  .openapi('UpdateDistributionRequest')

const UpdateDistributionBundleResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDistributionBundleResult')

const UpdateDistributionBundleRequestSchema = z
  .object({
    distributionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the distribution for which to update the bundle.</p> <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you can specify.</p>',
        }),
    ).exactOptional(),
    bundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The bundle ID of the new bundle to apply to your distribution.</p> <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle IDs that you can specify.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDistributionBundleRequest', required: [] })
  .openapi('UpdateDistributionBundleRequest')

const UpdateDomainEntryResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDomainEntryResult')

const UpdateDomainEntryRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain recordset to update.' }),
    ),
    domainEntry: DomainEntrySchema.and(
      z
        .any()
        .openapi({
          description: 'An array of key-value pairs containing information about the domain entry.',
        }),
    ),
  })
  .openapi({ required: ['domainName', 'domainEntry'], title: 'UpdateDomainEntryRequest' })
  .openapi('UpdateDomainEntryRequest')

const UpdateInstanceMetadataOptionsResultSchema = z
  .object({
    operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateInstanceMetadataOptionsResult')

const UpdateInstanceMetadataOptionsRequestSchema = z
  .object({
    instanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the instance for which to update metadata parameters.',
        }),
    ),
    httpTokens: HttpTokensSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is <code>optional</code>.</p> <p>If the state is <code>optional</code>, you can choose whether to retrieve instance metadata with a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials by using a valid signed token, the version 2.0 role credentials are returned.</p> <p>If the state is <code>required</code>, you must send a signed token header with all instance metadata retrieval requests. In this state, retrieving the IAM role credential always returns the version 2.0 credentials. The version 1.0 credentials are not available.</p>',
        }),
    ).exactOptional(),
    httpEndpoint: HttpEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is not specified, the existing state is maintained.</p> <p>If you specify a value of <code>disabled</code>, you cannot access your instance metadata.</p>',
        }),
    ).exactOptional(),
    httpPutResponseHopLimit: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired HTTP PUT response hop limit for instance metadata requests. A larger number means that the instance metadata requests can travel farther. If no parameter is specified, the existing state is maintained.',
        }),
    ).exactOptional(),
    httpProtocolIpv6: HttpProtocolIpv6Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables or disables the IPv6 endpoint for the instance metadata service. This setting applies only when the HTTP metadata endpoint is enabled.</p> <note> <p>This parameter is available only for instances in the Europe (Stockholm) Amazon Web Services Region (<code>eu-north-1</code>).</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['instanceName'], title: 'UpdateInstanceMetadataOptionsRequest' })
  .openapi('UpdateInstanceMetadataOptionsRequest')

const UpdateLoadBalancerAttributeResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLoadBalancerAttributeResult')

const LoadBalancerAttributeNameSchema = z
  .enum([
    'HealthCheckPath',
    'SessionStickinessEnabled',
    'SessionStickiness_LB_CookieDurationSeconds',
    'HttpsRedirectionEnabled',
    'TlsPolicyName',
  ])
  .openapi('LoadBalancerAttributeName')

const UpdateLoadBalancerAttributeRequestSchema = z
  .object({
    loadBalancerName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the load balancer that you want to modify (e.g., <code>my-load-balancer</code>.',
        }),
    ),
    attributeName: LoadBalancerAttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the attribute you want to update.' }),
    ),
    attributeValue: StringMax256Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value that you want to specify for the attribute name.</p> <p>The following values are supported depending on what you specify for the <code>attributeName</code> request parameter:</p> <ul> <li> <p>If you specify <code>HealthCheckPath</code> for the <code>attributeName</code> request parameter, then the <code>attributeValue</code> request parameter must be the path to ping on the target (for example, <code>/weather/us/wa/seattle</code>).</p> </li> <li> <p>If you specify <code>SessionStickinessEnabled</code> for the <code>attributeName</code> request parameter, then the <code>attributeValue</code> request parameter must be <code>true</code> to activate session stickiness or <code>false</code> to deactivate session stickiness.</p> </li> <li> <p>If you specify <code>SessionStickiness_LB_CookieDurationSeconds</code> for the <code>attributeName</code> request parameter, then the <code>attributeValue</code> request parameter must be an interger that represents the cookie duration in seconds.</p> </li> <li> <p>If you specify <code>HttpsRedirectionEnabled</code> for the <code>attributeName</code> request parameter, then the <code>attributeValue</code> request parameter must be <code>true</code> to activate HTTP to HTTPS redirection or <code>false</code> to deactivate HTTP to HTTPS redirection.</p> </li> <li> <p>If you specify <code>TlsPolicyName</code> for the <code>attributeName</code> request parameter, then the <code>attributeValue</code> request parameter must be the name of the TLS policy.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html">GetLoadBalancerTlsPolicies</a> action to get a list of TLS policy names that you can specify.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['loadBalancerName', 'attributeName', 'attributeValue'],
    title: 'UpdateLoadBalancerAttributeRequest',
  })
  .openapi('UpdateLoadBalancerAttributeRequest')

const UpdateRelationalDatabaseResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRelationalDatabaseResult')

const UpdateRelationalDatabaseRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your Lightsail database resource to update.' }),
    ),
    masterUserPassword: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p> <p>My<b>SQL</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>PostgreSQL</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p>',
        }),
    ).exactOptional(),
    rotateMasterUserPassword: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When <code>true</code>, the master user password is changed to a new strong password generated by Lightsail.</p> <p>Use the <code>get relational database master user password</code> operation to get the new password.</p>',
        }),
    ).exactOptional(),
    preferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range during which automated backups are created for your database if automated backups are enabled.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p> <p>Example: <code>16:00-16:30</code> </p> </li> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
        }),
    ).exactOptional(),
    preferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur on your database.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p> </li> <li> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> <li> <p>Specified in Coordinated Universal Time (UTC).</p> </li> <li> <p>Example: <code>Tue:17:00-Tue:17:30</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    enableBackupRetention: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When <code>true</code>, enables automated backup retention for your database.</p> <p>Updates are applied during the next maintenance window because this can result in an outage.</p>',
        }),
    ).exactOptional(),
    disableBackupRetention: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When <code>true</code>, disables automated backup retention for your database.</p> <p>Disabling backup retention deletes all automated database backups. Before disabling this, you may want to create a snapshot of your database using the <code>create relational database snapshot</code> operation.</p> <p>Updates are applied during the next maintenance window because this can result in an outage.</p>',
        }),
    ).exactOptional(),
    publiclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the accessibility options for your database. A value of <code>true</code> specifies a database that is available to resources outside of your Lightsail account. A value of <code>false</code> specifies a database that is available only to your Lightsail resources in the same region as your database.',
        }),
    ).exactOptional(),
    applyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When <code>true</code>, applies changes immediately. When <code>false</code>, applies changes during the preferred maintenance window. Some changes may cause an outage.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    caCertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the certificate that needs to be associated with the database.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['relationalDatabaseName'], title: 'UpdateRelationalDatabaseRequest' })
  .openapi('UpdateRelationalDatabaseRequest')

const UpdateRelationalDatabaseParametersResultSchema = z
  .object({
    operations: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRelationalDatabaseParametersResult')

const UpdateRelationalDatabaseParametersRequestSchema = z
  .object({
    relationalDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your database for which to update parameters.' }),
    ),
    parameters: RelationalDatabaseParameterListSchema.and(
      z.any().openapi({ description: 'The database parameters to update.' }),
    ),
  })
  .openapi({
    required: ['relationalDatabaseName', 'parameters'],
    title: 'UpdateRelationalDatabaseParametersRequest',
  })
  .openapi('UpdateRelationalDatabaseParametersRequest')

const ContainerNameSchema = z
  .string()
  .regex(/^[a-z0-9]{1,2}|[a-z0-9][a-z0-9-]+[a-z0-9]$/)
  .min(1)
  .max(53)
  .openapi('ContainerName')

const DomainEntryOptionsKeysSchema = z.string().openapi('DomainEntryOptionsKeys')

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

export const postXAmzTargetLightsail20161128AllocateStaticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.AllocateStaticIp',
  description: 'Allocates a static IP address.',
  operationId: 'AllocateStaticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.AllocateStaticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.AllocateStaticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AllocateStaticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AllocateStaticIpResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128AttachCertificateToDistributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution',
  description:
    '<p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>',
  operationId: 'AttachCertificateToDistribution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.AttachCertificateToDistribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.AttachCertificateToDistribution'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AttachCertificateToDistributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachCertificateToDistributionResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128AttachDiskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.AttachDisk',
  description:
    '<p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'AttachDisk',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.AttachDisk')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.AttachDisk'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AttachDiskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachDiskResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128AttachInstancesToLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer',
  description:
    '<p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>',
  operationId: 'AttachInstancesToLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.AttachInstancesToLoadBalancer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.AttachInstancesToLoadBalancer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AttachInstancesToLoadBalancerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachInstancesToLoadBalancerResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate',
  description:
    '<p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'AttachLoadBalancerTlsCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.AttachLoadBalancerTlsCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.AttachLoadBalancerTlsCertificate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AttachLoadBalancerTlsCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachLoadBalancerTlsCertificateResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128AttachStaticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.AttachStaticIp',
  description: 'Attaches a static IP address to a specific Amazon Lightsail instance.',
  operationId: 'AttachStaticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.AttachStaticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.AttachStaticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AttachStaticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachStaticIpResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CloseInstancePublicPortsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts',
  description:
    '<p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CloseInstancePublicPorts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CloseInstancePublicPorts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CloseInstancePublicPorts'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CloseInstancePublicPortsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CloseInstancePublicPortsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CopySnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CopySnapshot',
  description:
    '<p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>',
  operationId: 'CopySnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CopySnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CopySnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CopySnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CopySnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateBucketRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateBucket',
  description:
    '<p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
  operationId: 'CreateBucket',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateBucket')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateBucket'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBucketResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateBucketAccessKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey',
  description:
    '<p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>',
  operationId: 'CreateBucketAccessKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateBucketAccessKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateBucketAccessKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBucketAccessKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBucketAccessKeyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateCertificate',
  description:
    '<p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>',
  operationId: 'CreateCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCertificateResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateCloudFormationStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack',
  description:
    '<p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>',
  operationId: 'CreateCloudFormationStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateCloudFormationStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateCloudFormationStack'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCloudFormationStackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCloudFormationStackResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateContactMethodRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateContactMethod',
  description:
    '<p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>',
  operationId: 'CreateContactMethod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateContactMethod')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateContactMethod'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContactMethodRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContactMethodResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateContainerServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateContainerService',
  description:
    '<p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>',
  operationId: 'CreateContainerService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateContainerService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateContainerService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContainerServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContainerServiceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateContainerServiceDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment',
  description:
    '<p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
  operationId: 'CreateContainerServiceDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateContainerServiceDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.CreateContainerServiceDeployment'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContainerServiceDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContainerServiceDeploymentResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin',
  description:
    '<p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you\'re logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>',
  operationId: 'CreateContainerServiceRegistryLogin',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateContainerServiceRegistryLogin')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.CreateContainerServiceRegistryLogin'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContainerServiceRegistryLoginRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContainerServiceRegistryLoginResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateDiskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateDisk',
  description:
    '<p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateDisk',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateDisk')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateDisk'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateDiskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDiskResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateDiskFromSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot',
  description:
    '<p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateDiskFromSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateDiskFromSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateDiskFromSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDiskFromSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDiskFromSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateDiskSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot',
  description:
    '<p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance\'s system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance\'s system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateDiskSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateDiskSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateDiskSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDiskSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDiskSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateDistributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateDistribution',
  description:
    '<p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>',
  operationId: 'CreateDistribution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateDistribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateDistribution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDistributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDistributionResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateDomain',
  description:
    '<p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDomainResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateDomainEntryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateDomainEntry',
  description:
    '<p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateDomainEntry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateDomainEntry')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateDomainEntry'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDomainEntryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDomainEntryResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateGUISessionAccessDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails',
  description:
    "<p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>",
  operationId: 'CreateGUISessionAccessDetails',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateGUISessionAccessDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateGUISessionAccessDetails'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGUISessionAccessDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGUISessionAccessDetailsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateInstanceSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot',
  description:
    '<p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateInstanceSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateInstanceSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateInstanceSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateInstanceSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInstanceSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateInstances',
  description:
    '<p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateInstances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInstancesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateInstancesFromSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot',
  description:
    '<p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateInstancesFromSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateInstancesFromSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateInstancesFromSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateInstancesFromSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInstancesFromSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateKeyPairRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateKeyPair',
  description:
    '<p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateKeyPair',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateKeyPair')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateKeyPair'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateKeyPairRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateKeyPairResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer',
  description:
    '<p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateLoadBalancer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateLoadBalancer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLoadBalancerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLoadBalancerResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate',
  description:
    '<p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateLoadBalancerTlsCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateLoadBalancerTlsCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.CreateLoadBalancerTlsCertificate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLoadBalancerTlsCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLoadBalancerTlsCertificateResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateRelationalDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase',
  description:
    '<p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateRelationalDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateRelationalDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.CreateRelationalDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRelationalDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRelationalDatabaseResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot',
    description:
      '<p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
    operationId: 'CreateRelationalDatabaseFromSnapshot',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Lightsail_20161128.CreateRelationalDatabaseFromSnapshot')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Lightsail_20161128.CreateRelationalDatabaseFromSnapshot'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: CreateRelationalDatabaseFromSnapshotRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: CreateRelationalDatabaseFromSnapshotResultSchema },
        },
      },
      480: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'OperationFailureException',
        content: { 'application/json': { schema: OperationFailureExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'AccountSetupInProgressException',
        content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
      },
      486: {
        description: 'UnauthenticatedException',
        content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot',
  description:
    '<p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'CreateRelationalDatabaseSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.CreateRelationalDatabaseSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.CreateRelationalDatabaseSnapshot'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRelationalDatabaseSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRelationalDatabaseSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteAlarmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteAlarm',
  description:
    '<p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>',
  operationId: 'DeleteAlarm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteAlarm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteAlarm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteAlarmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAlarmResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteAutoSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot',
  description:
    'Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.',
  operationId: 'DeleteAutoSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteAutoSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteAutoSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAutoSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAutoSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteBucketRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteBucket',
  description:
    '<p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>',
  operationId: 'DeleteBucket',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteBucket')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteBucket'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBucketResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteBucketAccessKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey',
  description:
    '<p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
  operationId: 'DeleteBucketAccessKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteBucketAccessKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteBucketAccessKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBucketAccessKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBucketAccessKeyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteCertificate',
  description:
    '<p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>',
  operationId: 'DeleteCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCertificateResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteContactMethodRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteContactMethod',
  description:
    '<p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>',
  operationId: 'DeleteContactMethod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteContactMethod')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteContactMethod'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContactMethodRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContactMethodResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteContainerImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteContainerImage',
  description:
    'Deletes a container image that is registered to your Amazon Lightsail container service.',
  operationId: 'DeleteContainerImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteContainerImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteContainerImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContainerImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContainerImageResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteContainerServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteContainerService',
  description: 'Deletes your Amazon Lightsail container service.',
  operationId: 'DeleteContainerService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteContainerService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteContainerService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContainerServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContainerServiceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteDiskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteDisk',
  description:
    '<p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteDisk',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteDisk')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteDisk'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteDiskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDiskResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteDiskSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot',
  description:
    '<p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteDiskSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteDiskSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteDiskSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDiskSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDiskSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteDistributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteDistribution',
  description: 'Deletes your Amazon Lightsail content delivery network (CDN) distribution.',
  operationId: 'DeleteDistribution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteDistribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteDistribution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDistributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDistributionResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteDomain',
  description:
    '<p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDomainResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteDomainEntryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry',
  description:
    '<p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteDomainEntry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteDomainEntry')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteDomainEntry'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDomainEntryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDomainEntryResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteInstance',
  description:
    '<p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInstanceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteInstanceSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot',
  description:
    '<p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteInstanceSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteInstanceSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteInstanceSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteInstanceSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInstanceSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteKeyPairRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteKeyPair',
  description:
    '<p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteKeyPair',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteKeyPair')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteKeyPair'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteKeyPairRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteKeyPairResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteKnownHostKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys',
  description:
    '<p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>',
  operationId: 'DeleteKnownHostKeys',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteKnownHostKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteKnownHostKeys'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteKnownHostKeysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteKnownHostKeysResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer',
  description:
    '<p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteLoadBalancer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteLoadBalancer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLoadBalancerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLoadBalancerResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate',
  description:
    '<p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteLoadBalancerTlsCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteLoadBalancerTlsCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.DeleteLoadBalancerTlsCertificate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLoadBalancerTlsCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLoadBalancerTlsCertificateResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteRelationalDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase',
  description:
    '<p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteRelationalDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteRelationalDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DeleteRelationalDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRelationalDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRelationalDatabaseResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot',
  description:
    '<p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DeleteRelationalDatabaseSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DeleteRelationalDatabaseSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.DeleteRelationalDatabaseSnapshot'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRelationalDatabaseSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRelationalDatabaseSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DetachCertificateFromDistributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution',
  description:
    '<p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>',
  operationId: 'DetachCertificateFromDistribution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DetachCertificateFromDistribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.DetachCertificateFromDistribution'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetachCertificateFromDistributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachCertificateFromDistributionResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DetachDiskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DetachDisk',
  description:
    '<p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DetachDisk',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DetachDisk')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DetachDisk'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetachDiskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachDiskResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer',
  description:
    '<p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'DetachInstancesFromLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DetachInstancesFromLoadBalancer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.DetachInstancesFromLoadBalancer'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetachInstancesFromLoadBalancerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachInstancesFromLoadBalancerResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DetachStaticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DetachStaticIp',
  description: 'Detaches a static IP from the Amazon Lightsail instance to which it is attached.',
  operationId: 'DetachStaticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DetachStaticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DetachStaticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetachStaticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachStaticIpResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DisableAddOnRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DisableAddOn',
  description:
    'Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.',
  operationId: 'DisableAddOn',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DisableAddOn')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DisableAddOn'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableAddOnRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableAddOnResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128DownloadDefaultKeyPairRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair',
  description:
    '<p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>',
  operationId: 'DownloadDefaultKeyPair',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.DownloadDefaultKeyPair')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.DownloadDefaultKeyPair'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DownloadDefaultKeyPairRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DownloadDefaultKeyPairResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128EnableAddOnRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.EnableAddOn',
  description:
    'Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.',
  operationId: 'EnableAddOn',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.EnableAddOn')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.EnableAddOn'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnableAddOnRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableAddOnResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128ExportSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.ExportSnapshot',
  description:
    '<p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>',
  operationId: 'ExportSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.ExportSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.ExportSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetActiveNamesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetActiveNames',
  description: 'Returns the names of all active (not deleted) resources.',
  operationId: 'GetActiveNames',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetActiveNames')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetActiveNames'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetActiveNamesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetActiveNamesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetAlarmsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetAlarms',
  description:
    '<p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>',
  operationId: 'GetAlarms',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetAlarms')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetAlarms'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetAlarmsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAlarmsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetAutoSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots',
  description:
    'Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.',
  operationId: 'GetAutoSnapshots',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetAutoSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetAutoSnapshots'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAutoSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAutoSnapshotsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetBlueprintsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetBlueprints',
  description:
    '<p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>',
  operationId: 'GetBlueprints',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetBlueprints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetBlueprints'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetBlueprintsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBlueprintsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetBucketAccessKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys',
  description:
    '<p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>',
  operationId: 'GetBucketAccessKeys',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetBucketAccessKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetBucketAccessKeys'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetBucketAccessKeysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBucketAccessKeysResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetBucketBundlesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetBucketBundles',
  description:
    '<p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>',
  operationId: 'GetBucketBundles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetBucketBundles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetBucketBundles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetBucketBundlesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBucketBundlesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetBucketMetricDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetBucketMetricData',
  description:
    '<p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>',
  operationId: 'GetBucketMetricData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetBucketMetricData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetBucketMetricData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetBucketMetricDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBucketMetricDataResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetBucketsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetBuckets',
  description:
    '<p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
  operationId: 'GetBuckets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetBuckets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetBuckets'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetBucketsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBucketsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetBundlesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetBundles',
  description:
    '<p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>',
  operationId: 'GetBundles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetBundles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetBundles'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetBundlesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBundlesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetCertificatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetCertificates',
  description:
    '<p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>',
  operationId: 'GetCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetCertificates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetCertificates'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCertificatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCertificatesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetCloudFormationStackRecordsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords',
  description:
    '<p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>',
  operationId: 'GetCloudFormationStackRecords',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetCloudFormationStackRecords')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetCloudFormationStackRecords'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCloudFormationStackRecordsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCloudFormationStackRecordsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContactMethodsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContactMethods',
  description:
    '<p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>',
  operationId: 'GetContactMethods',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContactMethods')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContactMethods'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContactMethodsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactMethodsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContainerAPIMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata',
  description:
    'Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.',
  operationId: 'GetContainerAPIMetadata',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContainerAPIMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContainerAPIMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerAPIMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerAPIMetadataResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContainerImagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContainerImages',
  description:
    '<p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>',
  operationId: 'GetContainerImages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContainerImages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContainerImages'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerImagesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerImagesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContainerLogRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContainerLog',
  description:
    '<p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>',
  operationId: 'GetContainerLog',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContainerLog')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContainerLog'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerLogRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerLogResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContainerServiceDeploymentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments',
  description:
    '<p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>',
  operationId: 'GetContainerServiceDeployments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContainerServiceDeployments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContainerServiceDeployments'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerServiceDeploymentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerServiceDeploymentsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContainerServiceMetricDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData',
  description:
    '<p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>',
  operationId: 'GetContainerServiceMetricData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContainerServiceMetricData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContainerServiceMetricData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerServiceMetricDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerServiceMetricDataResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContainerServicePowersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers',
  description:
    '<p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>',
  operationId: 'GetContainerServicePowers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContainerServicePowers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContainerServicePowers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerServicePowersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerServicePowersResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetContainerServicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetContainerServices',
  description: 'Returns information about one or more of your Amazon Lightsail container services.',
  operationId: 'GetContainerServices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetContainerServices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetContainerServices'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerServicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContainerServicesListResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetCostEstimateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetCostEstimate',
  description:
    'Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.',
  operationId: 'GetCostEstimate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetCostEstimate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetCostEstimate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCostEstimateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCostEstimateResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDiskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDisk',
  description: 'Returns information about a specific block storage disk.',
  operationId: 'GetDisk',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDisk')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDisk'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDiskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDiskResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDiskSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot',
  description: 'Returns information about a specific block storage disk snapshot.',
  operationId: 'GetDiskSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDiskSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDiskSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDiskSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDiskSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDiskSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots',
  description:
    'Returns information about all block storage disk snapshots in your AWS account and region.',
  operationId: 'GetDiskSnapshots',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDiskSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDiskSnapshots'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDiskSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDiskSnapshotsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDisksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDisks',
  description: 'Returns information about all block storage disks in your AWS account and region.',
  operationId: 'GetDisks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDisks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDisks'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDisksRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDisksResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDistributionBundlesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDistributionBundles',
  description:
    '<p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>',
  operationId: 'GetDistributionBundles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDistributionBundles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDistributionBundles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDistributionBundlesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDistributionBundlesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDistributionLatestCacheResetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset',
  description:
    'Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.',
  operationId: 'GetDistributionLatestCacheReset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDistributionLatestCacheReset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.GetDistributionLatestCacheReset'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDistributionLatestCacheResetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDistributionLatestCacheResetResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDistributionMetricDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData',
  description:
    '<p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>',
  operationId: 'GetDistributionMetricData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDistributionMetricData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDistributionMetricData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDistributionMetricDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDistributionMetricDataResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDistributionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDistributions',
  description:
    'Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.',
  operationId: 'GetDistributions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDistributions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDistributions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDistributionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDistributionsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDomain',
  description: 'Returns information about a specific domain recordset.',
  operationId: 'GetDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDomain'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDomainRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetDomains',
  description: "Returns a list of all domains in the user's account.",
  operationId: 'GetDomains',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetDomains'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDomainsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetExportSnapshotRecordsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords',
  description:
    '<p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>',
  operationId: 'GetExportSnapshotRecords',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetExportSnapshotRecords')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetExportSnapshotRecords'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetExportSnapshotRecordsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExportSnapshotRecordsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstance',
  description:
    'Returns information about a specific Amazon Lightsail instance, which is a virtual private server.',
  operationId: 'GetInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstance'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetInstanceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstanceAccessDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails',
  description:
    '<p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'GetInstanceAccessDetails',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstanceAccessDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstanceAccessDetails'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstanceAccessDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceAccessDetailsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstanceMetricDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData',
  description:
    '<p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>',
  operationId: 'GetInstanceMetricData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstanceMetricData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstanceMetricData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstanceMetricDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceMetricDataResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstancePortStatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstancePortStates',
  description:
    'Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.',
  operationId: 'GetInstancePortStates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstancePortStates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstancePortStates'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstancePortStatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstancePortStatesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstanceSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot',
  description: 'Returns information about a specific instance snapshot.',
  operationId: 'GetInstanceSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstanceSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstanceSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstanceSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstanceSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots',
  description: "Returns all instance snapshots for the user's account.",
  operationId: 'GetInstanceSnapshots',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstanceSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstanceSnapshots'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstanceSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceSnapshotsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstanceStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstanceState',
  description: 'Returns the state of a specific instance. Works on one instance at a time.',
  operationId: 'GetInstanceState',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstanceState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstanceState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstanceStateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceStateResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetInstances',
  description:
    'Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.',
  operationId: 'GetInstances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstancesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetKeyPairRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetKeyPair',
  description: 'Returns information about a specific key pair.',
  operationId: 'GetKeyPair',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetKeyPair')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetKeyPair'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetKeyPairRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetKeyPairResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetKeyPairsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetKeyPairs',
  description: "Returns information about all key pairs in the user's account.",
  operationId: 'GetKeyPairs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetKeyPairs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetKeyPairs'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetKeyPairsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetKeyPairsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancer',
  description: 'Returns information about the specified Lightsail load balancer.',
  operationId: 'GetLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetLoadBalancer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetLoadBalancer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLoadBalancerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLoadBalancerResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetLoadBalancerMetricDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData',
  description:
    '<p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>',
  operationId: 'GetLoadBalancerMetricData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetLoadBalancerMetricData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetLoadBalancerMetricData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLoadBalancerMetricDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLoadBalancerMetricDataResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates',
  description:
    '<p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>',
  operationId: 'GetLoadBalancerTlsCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetLoadBalancerTlsCertificates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetLoadBalancerTlsCertificates'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLoadBalancerTlsCertificatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLoadBalancerTlsCertificatesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies',
  description:
    '<p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>',
  operationId: 'GetLoadBalancerTlsPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetLoadBalancerTlsPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetLoadBalancerTlsPolicies'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLoadBalancerTlsPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLoadBalancerTlsPoliciesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetLoadBalancersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancers',
  description: 'Returns information about all load balancers in an account.',
  operationId: 'GetLoadBalancers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetLoadBalancers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetLoadBalancers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLoadBalancersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLoadBalancersResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetOperationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetOperation',
  description:
    'Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.',
  operationId: 'GetOperation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetOperation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetOperation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOperationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOperationResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetOperationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetOperations',
  description:
    '<p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>',
  operationId: 'GetOperations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetOperations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetOperations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOperationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOperationsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetOperationsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetOperationsForResource',
  description: 'Gets operations for a specific resource (e.g., an instance or a static IP).',
  operationId: 'GetOperationsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetOperationsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetOperationsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOperationsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOperationsForResourceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRegionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRegions',
  description:
    'Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.',
  operationId: 'GetRegions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRegions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRegions'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRegionsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRegionsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase',
  description: 'Returns information about a specific database in Amazon Lightsail.',
  operationId: 'GetRelationalDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRelationalDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints',
  description:
    '<p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>',
  operationId: 'GetRelationalDatabaseBlueprints',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseBlueprints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.GetRelationalDatabaseBlueprints'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseBlueprintsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseBlueprintsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseBundlesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles',
  description:
    '<p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>',
  operationId: 'GetRelationalDatabaseBundles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseBundles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRelationalDatabaseBundles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseBundlesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseBundlesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents',
  description: 'Returns a list of events for a specific database in Amazon Lightsail.',
  operationId: 'GetRelationalDatabaseEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRelationalDatabaseEvents'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseEventsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents',
  description: 'Returns a list of log events for a database in Amazon Lightsail.',
  operationId: 'GetRelationalDatabaseLogEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseLogEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRelationalDatabaseLogEvents'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseLogEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseLogEventsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams',
  description:
    'Returns a list of available log streams for a specific database in Amazon Lightsail.',
  operationId: 'GetRelationalDatabaseLogStreams',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseLogStreams')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.GetRelationalDatabaseLogStreams'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseLogStreamsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseLogStreamsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword',
    description:
      '<p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>',
    operationId: 'GetRelationalDatabaseMasterUserPassword',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Lightsail_20161128.GetRelationalDatabaseMasterUserPassword')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Lightsail_20161128.GetRelationalDatabaseMasterUserPassword'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetRelationalDatabaseMasterUserPasswordRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetRelationalDatabaseMasterUserPasswordResultSchema },
        },
      },
      480: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'OperationFailureException',
        content: { 'application/json': { schema: OperationFailureExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'AccountSetupInProgressException',
        content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
      },
      486: {
        description: 'UnauthenticatedException',
        content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetLightsail20161128GetRelationalDatabaseMetricDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData',
  description:
    '<p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>',
  operationId: 'GetRelationalDatabaseMetricData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseMetricData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.GetRelationalDatabaseMetricData'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseMetricDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseMetricDataResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseParametersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters',
  description:
    '<p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>',
  operationId: 'GetRelationalDatabaseParameters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseParameters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.GetRelationalDatabaseParameters'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseParametersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseParametersResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot',
  description: 'Returns information about a specific database snapshot in Amazon Lightsail.',
  operationId: 'GetRelationalDatabaseSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRelationalDatabaseSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseSnapshotResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots',
  description: 'Returns information about all of your database snapshots in Amazon Lightsail.',
  operationId: 'GetRelationalDatabaseSnapshots',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabaseSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRelationalDatabaseSnapshots'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabaseSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabaseSnapshotsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetRelationalDatabasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases',
  description: 'Returns information about all of your databases in Amazon Lightsail.',
  operationId: 'GetRelationalDatabases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetRelationalDatabases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetRelationalDatabases'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRelationalDatabasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRelationalDatabasesResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetStaticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetStaticIp',
  description: 'Returns information about an Amazon Lightsail static IP.',
  operationId: 'GetStaticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetStaticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetStaticIp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetStaticIpRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStaticIpResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128GetStaticIpsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.GetStaticIps',
  description: "Returns information about all static IPs in the user's account.",
  operationId: 'GetStaticIps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.GetStaticIps')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.GetStaticIps'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetStaticIpsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStaticIpsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128ImportKeyPairRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.ImportKeyPair',
  description: 'Imports a public SSH key from a specific key pair.',
  operationId: 'ImportKeyPair',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.ImportKeyPair')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.ImportKeyPair'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportKeyPairRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportKeyPairResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128IsVpcPeeredRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.IsVpcPeered',
  description: 'Returns a Boolean value indicating whether your Lightsail VPC is peered.',
  operationId: 'IsVpcPeered',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.IsVpcPeered')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.IsVpcPeered'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IsVpcPeeredRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IsVpcPeeredResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128OpenInstancePublicPortsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts',
  description:
    '<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'OpenInstancePublicPorts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.OpenInstancePublicPorts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.OpenInstancePublicPorts'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OpenInstancePublicPortsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OpenInstancePublicPortsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128PeerVpcRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.PeerVpc',
  description: "Peers the Lightsail VPC with the user's default VPC.",
  operationId: 'PeerVpc',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.PeerVpc')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.PeerVpc'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PeerVpcRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PeerVpcResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128PutAlarmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.PutAlarm',
  description:
    '<p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>',
  operationId: 'PutAlarm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.PutAlarm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.PutAlarm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutAlarmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAlarmResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128PutInstancePublicPortsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts',
  description:
    '<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'PutInstancePublicPorts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.PutInstancePublicPorts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.PutInstancePublicPorts'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutInstancePublicPortsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutInstancePublicPortsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128RebootInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.RebootInstance',
  description:
    '<p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'RebootInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.RebootInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.RebootInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RebootInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebootInstanceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128RebootRelationalDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase',
  description:
    '<p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'RebootRelationalDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.RebootRelationalDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.RebootRelationalDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RebootRelationalDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebootRelationalDatabaseResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128RegisterContainerImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.RegisterContainerImage',
  description:
    '<p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>',
  operationId: 'RegisterContainerImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.RegisterContainerImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.RegisterContainerImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterContainerImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterContainerImageResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128ReleaseStaticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp',
  description: 'Deletes a specific static IP from your account.',
  operationId: 'ReleaseStaticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.ReleaseStaticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.ReleaseStaticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReleaseStaticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReleaseStaticIpResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128ResetDistributionCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.ResetDistributionCache',
  description:
    '<p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>',
  operationId: 'ResetDistributionCache',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.ResetDistributionCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.ResetDistributionCache'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetDistributionCacheRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResetDistributionCacheResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128SendContactMethodVerificationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification',
  description:
    '<p>Sends a verification request to an email contact method to ensure it\'s owned by the requester. SMS contact methods don\'t need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>',
  operationId: 'SendContactMethodVerification',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.SendContactMethodVerification')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.SendContactMethodVerification'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendContactMethodVerificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendContactMethodVerificationResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128SetIpAddressTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.SetIpAddressType',
  description:
    '<p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>',
  operationId: 'SetIpAddressType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.SetIpAddressType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.SetIpAddressType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetIpAddressTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetIpAddressTypeResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128SetResourceAccessForBucketRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket',
  description:
    '<p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>',
  operationId: 'SetResourceAccessForBucket',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.SetResourceAccessForBucket')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.SetResourceAccessForBucket'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetResourceAccessForBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetResourceAccessForBucketResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128StartGUISessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.StartGUISession',
  description:
    'Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires. ',
  operationId: 'StartGUISession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.StartGUISession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.StartGUISession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartGUISessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartGUISessionResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128StartInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.StartInstance',
  description:
    '<p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'StartInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.StartInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.StartInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartInstanceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128StartRelationalDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase',
  description:
    '<p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'StartRelationalDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.StartRelationalDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.StartRelationalDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartRelationalDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartRelationalDatabaseResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128StopGUISessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.StopGUISession',
  description:
    'Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.',
  operationId: 'StopGUISession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.StopGUISession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.StopGUISession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopGUISessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopGUISessionResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128StopInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.StopInstance',
  description:
    '<p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'StopInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.StopInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.StopInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopInstanceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128StopRelationalDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase',
  description:
    '<p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'StopRelationalDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.StopRelationalDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.StopRelationalDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopRelationalDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopRelationalDatabaseResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.TagResource',
  description:
    '<p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
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
        .literal('Lightsail_20161128.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128TestAlarmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.TestAlarm',
  description:
    '<p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>',
  operationId: 'TestAlarm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.TestAlarm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.TestAlarm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestAlarmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestAlarmResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    483: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UnpeerVpcRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UnpeerVpc',
  description: "Unpeers the Lightsail VPC from the user's default VPC.",
  operationId: 'UnpeerVpc',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UnpeerVpc')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UnpeerVpc'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UnpeerVpcRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UnpeerVpcResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UntagResource',
  description:
    '<p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
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
        .literal('Lightsail_20161128.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UntagResource'] },
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
      content: { 'application/json': { schema: UntagResourceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateBucketRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateBucket',
  description:
    '<p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>',
  operationId: 'UpdateBucket',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateBucket')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateBucket'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBucketResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateBucketBundleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle',
  description:
    "<p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href=\"https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html\">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>",
  operationId: 'UpdateBucketBundle',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateBucketBundle')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateBucketBundle'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBucketBundleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBucketBundleResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateContainerServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateContainerService',
  description:
    'Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.',
  operationId: 'UpdateContainerService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateContainerService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateContainerService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateContainerServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateContainerServiceResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateDistributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateDistribution',
  description:
    '<p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>',
  operationId: 'UpdateDistribution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateDistribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateDistribution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDistributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDistributionResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateDistributionBundleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle',
  description:
    "<p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>",
  operationId: 'UpdateDistributionBundle',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateDistributionBundle')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateDistributionBundle'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDistributionBundleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDistributionBundleResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateDomainEntryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry',
  description:
    '<p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'UpdateDomainEntry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateDomainEntry')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateDomainEntry'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDomainEntryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDomainEntryResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions',
  description:
    'Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.',
  operationId: 'UpdateInstanceMetadataOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateInstanceMetadataOptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateInstanceMetadataOptions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateInstanceMetadataOptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateInstanceMetadataOptionsResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateLoadBalancerAttributeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute',
  description:
    '<p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'UpdateLoadBalancerAttribute',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateLoadBalancerAttribute')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateLoadBalancerAttribute'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLoadBalancerAttributeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLoadBalancerAttributeResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateRelationalDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase',
  description:
    '<p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database\'s predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'UpdateRelationalDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateRelationalDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Lightsail_20161128.UpdateRelationalDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRelationalDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRelationalDatabaseResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters',
  description:
    '<p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don\'t cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>',
  operationId: 'UpdateRelationalDatabaseParameters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Lightsail_20161128.UpdateRelationalDatabaseParameters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Lightsail_20161128.UpdateRelationalDatabaseParameters'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRelationalDatabaseParametersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRelationalDatabaseParametersResultSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationFailureException',
      content: { 'application/json': { schema: OperationFailureExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'AccountSetupInProgressException',
      content: { 'application/json': { schema: AccountSetupInProgressExceptionSchema } },
    },
    486: {
      description: 'UnauthenticatedException',
      content: { 'application/json': { schema: UnauthenticatedExceptionSchema } },
    },
  },
})
