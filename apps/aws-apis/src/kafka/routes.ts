import { createRoute, z } from '@hono/zod-openapi'

const BooleanSchema = z.boolean().openapi('Boolean')

const IntegerSchema = z.int().openapi('Integer')

const ProvisionedThroughputSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description: '\n            <p>Provisioned throughput is enabled or not.</p>\n         ',
        }),
    ).exactOptional(),
    VolumeThroughput: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'volumeThroughput' },
          description:
            '\n            <p>Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>\n         ',
    required: [],
  })
  .openapi('ProvisionedThroughput')

const IntegerMin1Max16384Schema = z.int().min(1).max(16384).openapi('IntegerMin1Max16384')

const EBSStorageInfoSchema = z
  .object({
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'provisionedThroughput' },
          description:
            '\n            <p>EBS volume provisioned throughput information.</p>\n         ',
        }),
    ).exactOptional(),
    VolumeSize: IntegerMin1Max16384Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'volumeSize' },
          description:
            '\n            <p>The size in GiB of the EBS volume for the data drive on each broker node.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.</p>\n         ',
    required: [],
  })
  .openapi('EBSStorageInfo')

type StorageInfoType = {
  EbsStorageInfo?: z.infer<typeof EBSStorageInfoSchema> & { [key: string]: unknown }
}

const StringSchema = z.string().openapi('String')

const DoubleSchema = z.float64().openapi('Double')

const LongSchema = z.int().openapi('Long')

const BrokerSoftwareInfoSchema = z
  .object({
    ConfigurationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationArn' },
          description:
            "\n            <p>The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.</p>\n         ",
        }),
    ).exactOptional(),
    ConfigurationRevision: LongSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationRevision' },
          description:
            "\n            <p>The revision of the configuration to use. This field isn't visible in this preview release.</p>\n         ",
        }),
    ).exactOptional(),
    KafkaVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaVersion' },
          description: '\n            <p>The version of Apache Kafka.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Information about the current software installed on the cluster.</p>\n         ',
    required: [],
  })
  .openapi('BrokerSoftwareInfo')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const BrokerNodeInfoSchema = z
  .object({
    AttachedENIId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attachedENIId' },
          description:
            '\n            <p>The attached elastic network interface of the broker.</p>\n         ',
        }),
    ).exactOptional(),
    BrokerId: DoubleSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: '\n            <p>The ID of the broker.</p>\n         ',
        }),
    ).exactOptional(),
    ClientSubnet: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientSubnet' },
          description:
            '\n            <p>The client subnet to which this broker node belongs.</p>\n         ',
        }),
    ).exactOptional(),
    ClientVpcIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientVpcIpAddress' },
          description:
            '\n            <p>The virtual private cloud (VPC) of the client.</p>\n         ',
        }),
    ).exactOptional(),
    CurrentBrokerSoftwareInfo: BrokerSoftwareInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentBrokerSoftwareInfo' },
          description:
            '\n            <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    Endpoints: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endpoints' },
          description: '\n            <p>Endpoints for accessing the broker.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '\n            <p>BrokerNodeInfo</p>\n         ', required: [] })
  .openapi('BrokerNodeInfo')

const NodeTypeSchema = z
  .literal('BROKER')
  .openapi({ description: '\n            <p>The broker or Zookeeper node.</p>\n         ' })
  .openapi('NodeType')

const ZookeeperNodeInfoSchema = z
  .object({
    AttachedENIId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attachedENIId' },
          description:
            '\n            <p>The attached elastic network interface of the broker.</p>\n         ',
        }),
    ).exactOptional(),
    ClientVpcIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientVpcIpAddress' },
          description:
            '\n            <p>The virtual private cloud (VPC) IP address of the client.</p>\n         ',
        }),
    ).exactOptional(),
    Endpoints: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endpoints' },
          description: '\n            <p>Endpoints for accessing the ZooKeeper.</p>\n         ',
        }),
    ).exactOptional(),
    ZookeeperId: DoubleSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'zookeeperId' },
          description: '\n            <p>The role-specific ID for Zookeeper.</p>\n         ',
        }),
    ).exactOptional(),
    ZookeeperVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'zookeeperVersion' },
          description: '\n            <p>The version of Zookeeper.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Zookeeper node information.</p>\n         ',
    required: [],
  })
  .openapi('ZookeeperNodeInfo')

type NodeInfoType = {
  AddedToClusterTime?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  BrokerNodeInfo?: z.infer<typeof BrokerNodeInfoSchema> & { [key: string]: unknown }
  InstanceType?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  NodeARN?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  NodeType?: z.infer<typeof NodeTypeSchema> & { [key: string]: unknown }
  ZookeeperNodeInfo?: z.infer<typeof ZookeeperNodeInfoSchema> & { [key: string]: unknown }
}

const UnprocessedScramSecretSchema = z
  .object({
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'errorCode' },
          description:
            '\n            <p>Error code for associate/disassociate failure.</p>\n         ',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'errorMessage' },
          description:
            '\n            <p>Error message for associate/disassociate failure.</p>\n         ',
        }),
    ).exactOptional(),
    SecretArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'secretArn' },
          description: '\n            <p>AWS Secrets Manager secret ARN.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Error info for scram secret associate/disassociate failure.</p>\n         ',
    required: [],
  })
  .openapi('UnprocessedScramSecret')

const ListOfUnprocessedScramSecretSchema = z
  .array(UnprocessedScramSecretSchema)
  .openapi('ListOfUnprocessedScramSecret')

const BatchAssociateScramSecretResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    UnprocessedScramSecrets: ListOfUnprocessedScramSecretSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'unprocessedScramSecrets' },
          description:
            '\n            <p>List of errors when associating secrets to cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchAssociateScramSecretResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ClusterStateSchema = z
  .enum([
    'ACTIVE',
    'CREATING',
    'DELETING',
    'FAILED',
    'HEALING',
    'MAINTENANCE',
    'REBOOTING_BROKER',
    'UPDATING',
  ])
  .openapi({
    description: '\n            <p>The state of the Apache Kafka cluster.</p>\n         ',
  })
  .openapi('ClusterState')

const CreateClusterResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterName' },
          description: '\n            <p>The name of the MSK cluster.</p>\n         ',
        }),
    ).exactOptional(),
    State: ClusterStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateClusterResponse')

const BrokerAZDistributionSchema = z
  .literal('DEFAULT')
  .openapi({
    description:
      "\n            <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>\n         <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>\n         ",
  })
  .openapi('BrokerAZDistribution')

const StringMin5Max32Schema = z.string().min(5).max(32).openapi('StringMin5Max32')

const StorageInfoSchema: z.ZodType<StorageInfoType> = z
  .lazy(() =>
    z
      .object({
        EbsStorageInfo: EBSStorageInfoSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'ebsStorageInfo' },
              description: '\n            <p>EBS volume information.</p>\n         ',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '\n            <p>Contains information about storage volumes attached to MSK broker nodes.</p>\n         ',
        required: [],
      }),
  )
  .openapi('StorageInfo')

const PublicAccessSchema = z
  .object({
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'type' },
          description:
            '\n            <p>The value DISABLED indicates that public access is turned off. SERVICE_PROVIDED_EIPS indicates that public access is turned on.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Public access control for brokers.', required: [] })
  .openapi('PublicAccess')

const VpcConnectivityScramSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description:
            '\n            <p>SASL/SCRAM authentication is on or off for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>\n         ',
    required: [],
  })
  .openapi('VpcConnectivityScram')

const VpcConnectivityIamSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description:
            '\n            <p>SASL/IAM authentication is on or off for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Details for IAM access control for VPC connectivity.</p>\n         ',
    required: [],
  })
  .openapi('VpcConnectivityIam')

const VpcConnectivitySaslSchema = z
  .object({
    Scram: VpcConnectivityScramSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'scram' },
          description:
            '\n            <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
    Iam: VpcConnectivityIamSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'iam' },
          description:
            '\n            <p>Details for SASL/IAM client authentication for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Details for SASL client authentication for VPC connectivity.</p>\n         ',
    required: [],
  })
  .openapi('VpcConnectivitySasl')

const VpcConnectivityTlsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description:
            '\n            <p>TLS authentication is on or off for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Details for TLS client authentication for VPC connectivity.</p>\n         ',
    required: [],
  })
  .openapi('VpcConnectivityTls')

const VpcConnectivityClientAuthenticationSchema = z
  .object({
    Sasl: VpcConnectivitySaslSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sasl' },
          description:
            '\n            <p>SASL authentication type details for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
    Tls: VpcConnectivityTlsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tls' },
          description:
            '\n            <p>TLS authentication type details for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Includes all client authentication information for VPC connectivity.</p>\n         ',
    required: [],
  })
  .openapi('VpcConnectivityClientAuthentication')

const VpcConnectivitySchema = z
  .object({
    ClientAuthentication: VpcConnectivityClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication information for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'VPC connectivity access control for brokers.', required: [] })
  .openapi('VpcConnectivity')

const ConnectivityInfoSchema = z
  .object({
    PublicAccess: PublicAccessSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'publicAccess' },
          description: '\n            <p>Public access control for brokers.</p>\n         ',
        }),
    ).exactOptional(),
    VpcConnectivity: VpcConnectivitySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectivity' },
          description:
            '\n            <p>VPC connectivity access control for brokers.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Information about the broker access configuration.</p>\n         ',
    required: [],
  })
  .openapi('ConnectivityInfo')

const ScramSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description:
            '\n            <p>SASL/SCRAM authentication is enabled or not.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Details for SASL/SCRAM client authentication.</p>\n         ',
    required: [],
  })
  .openapi('Scram')

const IamSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description:
            '\n            <p>Indicates whether IAM access control is enabled.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Details for IAM access control.</p>\n         ',
    required: [],
  })
  .openapi('Iam')

const SaslSchema = z
  .object({
    Scram: ScramSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'scram' },
          description:
            '\n            <p>Details for SASL/SCRAM client authentication.</p>\n         ',
        }),
    ).exactOptional(),
    Iam: IamSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'iam' },
          description:
            '\n            <p>Indicates whether IAM access control is enabled.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Details for client authentication using SASL.</p>\n         ',
    required: [],
  })
  .openapi('Sasl')

const TlsSchema = z
  .object({
    CertificateAuthorityArnList: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'certificateAuthorityArnList' },
          description: '\n            <p>List of ACM Certificate Authority ARNs.</p>\n         ',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description:
            '\n            <p>Specifies whether you want to turn on or turn off TLS authentication.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Details for client authentication using TLS.</p>\n         ',
    required: [],
  })
  .openapi('Tls')

const UnauthenticatedSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description:
            '\n            <p>Specifies whether you want to turn on or turn off unauthenticated traffic to your cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Unauthenticated')

const EncryptionAtRestSchema = z
  .object({
    DataVolumeKMSKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataVolumeKMSKeyId' },
          description:
            "\n            <p>The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.</p>\n         ",
        }),
    ),
  })
  .openapi({
    required: ['DataVolumeKMSKeyId'],
    description: '\n            <p>The data-volume encryption details.</p>\n         ',
  })
  .openapi('EncryptionAtRest')

const ClientBrokerSchema = z
  .enum(['TLS', 'TLS_PLAINTEXT', 'PLAINTEXT'])
  .openapi({
    description: '\n            <p>Client-broker encryption in transit setting.</p>\n         ',
  })
  .openapi('ClientBroker')

const EncryptionInTransitSchema = z
  .object({
    ClientBroker: ClientBrokerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientBroker' },
          description:
            '\n            <p>Indicates the encryption setting for data in transit between clients and brokers. The following are the possible values.</p>\n            <p>\n               TLS means that client-broker communication is enabled with TLS only.</p>\n            <p>\n               TLS_PLAINTEXT means that client-broker communication is enabled for both TLS-encrypted, as well as plaintext data.</p>\n            <p>\n               PLAINTEXT means that client-broker communication is enabled in plaintext only.</p>\n            <p>The default value is TLS_PLAINTEXT.</p>\n         ',
        }),
    ).exactOptional(),
    InCluster: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'inCluster' },
          description:
            '\n            <p>When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.</p>\n            <p>The default value is true.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>The settings for encrypting data in transit.</p>\n         ',
    required: [],
  })
  .openapi('EncryptionInTransit')

const JmxExporterInfoSchema = z
  .object({
    EnabledInBroker: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabledInBroker' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['EnabledInBroker'],
    description:
      '\n            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>\n         ',
  })
  .openapi('JmxExporterInfo')

const NodeExporterInfoSchema = z
  .object({
    EnabledInBroker: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabledInBroker' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['EnabledInBroker'],
    description:
      '\n            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>\n         ',
  })
  .openapi('NodeExporterInfo')

const PrometheusInfoSchema = z
  .object({
    JmxExporter: JmxExporterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jmxExporter' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>\n         ',
        }),
    ).exactOptional(),
    NodeExporter: NodeExporterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nodeExporter' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '\n            <p>Prometheus settings.</p>\n         ', required: [] })
  .openapi('PrometheusInfo')

const CloudWatchLogsSchema = z
  .object({
    Enabled: BooleanSchema.and(z.any().openapi({ xml: { name: 'enabled' } })),
    LogGroup: StringSchema.and(z.any().openapi({ xml: { name: 'logGroup' } })).exactOptional(),
  })
  .openapi({ required: ['Enabled'] })
  .openapi('CloudWatchLogs')

const FirehoseSchema = z
  .object({
    DeliveryStream: StringSchema.and(
      z.any().openapi({ xml: { name: 'deliveryStream' } }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(z.any().openapi({ xml: { name: 'enabled' } })),
  })
  .openapi({ required: ['Enabled'] })
  .openapi('Firehose')

const S3Schema = z
  .object({
    Bucket: StringSchema.and(z.any().openapi({ xml: { name: 'bucket' } })).exactOptional(),
    Enabled: BooleanSchema.and(z.any().openapi({ xml: { name: 'enabled' } })),
    Prefix: StringSchema.and(z.any().openapi({ xml: { name: 'prefix' } })).exactOptional(),
  })
  .openapi({ required: ['Enabled'] })
  .openapi('S3')

const BrokerLogsSchema = z
  .object({
    CloudWatchLogs: CloudWatchLogsSchema.and(
      z.any().openapi({ xml: { name: 'cloudWatchLogs' } }),
    ).exactOptional(),
    Firehose: FirehoseSchema.and(z.any().openapi({ xml: { name: 'firehose' } })).exactOptional(),
    S3: S3Schema.and(z.any().openapi({ xml: { name: 's3' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BrokerLogs')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ClusterTypeSchema = z
  .enum(['PROVISIONED', 'SERVERLESS'])
  .openapi({ description: '\n            <p>The type of cluster.</p>\n         ' })
  .openapi('ClusterType')

const CreateClusterV2ResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterName' },
          description: '\n            <p>The name of the MSK cluster.</p>\n         ',
        }),
    ).exactOptional(),
    State: ClusterStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterType: ClusterTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterType' },
          description:
            '\n            <p>The type of the cluster. The possible states are PROVISIONED or SERVERLESS.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateClusterV2Response')

const BrokerNodeGroupInfoSchema = z
  .object({
    BrokerAZDistribution: BrokerAZDistributionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerAZDistribution' },
          description:
            "\n            <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>\n         <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>\n         ",
        }),
    ).exactOptional(),
    ClientSubnets: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientSubnets' },
          description:
            "\n            <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't occupy the Availability Zone with ID use use1-az3.</p>\n         ",
        }),
    ),
    InstanceType: StringMin5Max32Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'instanceType' },
          description:
            '\n            <p>The type of Amazon EC2 instances to use for Apache Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,\nkafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.</p>\n         ',
        }),
    ),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description:
            "\n            <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>\n         ",
        }),
    ).exactOptional(),
    StorageInfo: StorageInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'storageInfo' },
          description:
            '\n            <p>Contains information about storage volumes attached to MSK broker nodes.</p>\n         ',
        }),
    ).exactOptional(),
    ConnectivityInfo: ConnectivityInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectivityInfo' },
          description:
            '\n            <p>Information about the broker access configuration.</p>\n         ',
        }),
    ).exactOptional(),
    ZoneIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'zoneIds' },
          description:
            '\n            <p>The list of zoneIds for the cluster in the virtual private cloud (VPC).</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientSubnets', 'InstanceType'],
    description:
      '\n            <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>\n         ',
  })
  .openapi('BrokerNodeGroupInfo')

const ClientAuthenticationSchema = z
  .object({
    Sasl: SaslSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sasl' },
          description:
            '\n            <p>Details for ClientAuthentication using SASL.</p>\n         ',
        }),
    ).exactOptional(),
    Tls: TlsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tls' },
          description:
            '\n            <p>Details for ClientAuthentication using TLS.</p>\n         ',
        }),
    ).exactOptional(),
    Unauthenticated: UnauthenticatedSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'unauthenticated' },
          description:
            '\n            <p>Contains information about unauthenticated traffic to the cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Includes all client authentication information.</p>\n         ',
    required: [],
  })
  .openapi('ClientAuthentication')

const ConfigurationInfoSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: '\n            <p>ARN of the configuration to use.</p>\n         ',
        }),
    ),
    Revision: LongSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'revision' },
          description: '\n            <p>The revision of the configuration to use.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['Revision', 'Arn'],
    description:
      '\n            <p>Specifies the configuration to use for the brokers.</p>\n         ',
  })
  .openapi('ConfigurationInfo')

const EncryptionInfoSchema = z
  .object({
    EncryptionAtRest: EncryptionAtRestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionAtRest' },
          description: '\n            <p>The data-volume encryption details.</p>\n         ',
        }),
    ).exactOptional(),
    EncryptionInTransit: EncryptionInTransitSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionInTransit' },
          description: '\n            <p>The details for encryption in transit.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>\n         ',
    required: [],
  })
  .openapi('EncryptionInfo')

const EnhancedMonitoringSchema = z
  .enum(['DEFAULT', 'PER_BROKER', 'PER_TOPIC_PER_BROKER', 'PER_TOPIC_PER_PARTITION'])
  .openapi({
    description:
      '\n            <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>\n         ',
  })
  .openapi('EnhancedMonitoring')

const OpenMonitoringInfoSchema = z
  .object({
    Prometheus: PrometheusInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'prometheus' },
          description: '\n            <p>Prometheus settings.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['Prometheus'],
    description: '\n            <p>JMX and Node monitoring for the MSK cluster.</p>\n         ',
  })
  .openapi('OpenMonitoringInfo')

const StringMin1Max128Schema = z.string().min(1).max(128).openapi('StringMin1Max128')

const LoggingInfoSchema = z
  .object({ BrokerLogs: BrokerLogsSchema.and(z.any().openapi({ xml: { name: 'brokerLogs' } })) })
  .openapi({ required: ['BrokerLogs'] })
  .openapi('LoggingInfo')

const IntegerMin1Max15Schema = z.int().min(1).max(15).openapi('IntegerMin1Max15')

const StorageModeSchema = z
  .enum(['LOCAL', 'TIERED'])
  .openapi({ description: 'Controls storage mode for various supported storage tiers.' })
  .openapi('StorageMode')

const VpcConfigSchema = z
  .object({
    SubnetIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description:
            '\n            <p>The IDs of the subnets associated with the cluster.</p>\n         ',
        }),
    ),
    SecurityGroupIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description:
            '\n            <p>The IDs of the security groups associated with the cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubnetIds'],
    description:
      '\n            <p>The configuration of the Amazon VPCs for the cluster.</p>\n         ',
  })
  .openapi('VpcConfig')

const ListOfVpcConfigSchema = z.array(VpcConfigSchema).openapi('ListOfVpcConfig')

const ServerlessSaslSchema = z
  .object({
    Iam: IamSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'iam' },
          description:
            '\n            <p>Indicates whether IAM access control is enabled.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Details for client authentication using SASL.</p>\n         ',
    required: [],
  })
  .openapi('ServerlessSasl')

const ServerlessClientAuthenticationSchema = z
  .object({
    Sasl: ServerlessSaslSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sasl' },
          description:
            '\n            <p>Details for ClientAuthentication using SASL.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Includes all client authentication information.</p>\n         ',
    required: [],
  })
  .openapi('ServerlessClientAuthentication')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const ConfigurationRevisionSchema = z
  .object({
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description:
            '\n            <p>The time when the configuration revision was created.</p>\n         ',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            '\n            <p>The description of the configuration revision.</p>\n         ',
        }),
    ).exactOptional(),
    Revision: LongSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'revision' },
          description: '\n            <p>The revision number.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['Revision', 'CreationTime'],
    description: '\n            <p>Describes a configuration revision.</p>\n         ',
  })
  .openapi('ConfigurationRevision')

const ConfigurationStateSchema = z
  .enum(['ACTIVE', 'DELETING', 'DELETE_FAILED'])
  .openapi({ description: '\n            <p>The state of a configuration.</p>\n         ' })
  .openapi('ConfigurationState')

const CreateConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description:
            '\n            <p>The time when the configuration was created.</p>\n         ',
        }),
    ).exactOptional(),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: '\n            <p>Latest revision of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: '\n            <p>The name of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    State: ConfigurationStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateConfigurationResponse')

const VpcConnectionStateSchema = z
  .enum([
    'CREATING',
    'AVAILABLE',
    'INACTIVE',
    'DEACTIVATING',
    'DELETING',
    'FAILED',
    'REJECTED',
    'REJECTING',
  ])
  .openapi({ description: '\n            <p>The state of a VPC connection.</p>\n         ' })
  .openapi('VpcConnectionState')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const CreateVpcConnectionResponseSchema = z
  .object({
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description: '\n            <p>The VPC connection ARN.</p>\n         ',
        }),
    ).exactOptional(),
    State: VpcConnectionStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description: '\n            <p>The State of Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
    Authentication: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authentication' },
          description: '\n            <p>The authentication type of VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcId' },
          description: '\n            <p>The VPC ID of the VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
    ClientSubnets: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientSubnets' },
          description: '\n            <p>The list of client subnets.</p>\n         ',
        }),
    ).exactOptional(),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description: '\n            <p>The list of security groups.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>The creation time of VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>A map of tags for the VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVpcConnectionResponse')

const DeleteClusterResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    State: ClusterStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteClusterResponse')

const DeleteClusterPolicyResponseSchema = z.object({}).openapi('DeleteClusterPolicyResponse')

const DeleteConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>\n         ',
        }),
    ).exactOptional(),
    State: ConfigurationStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteConfigurationResponse')

const DeleteVpcConnectionResponseSchema = z
  .object({
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
    State: VpcConnectionStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description: '\n            <p>The state of the VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteVpcConnectionResponse')

const JmxExporterSchema = z
  .object({
    EnabledInBroker: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabledInBroker' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['EnabledInBroker'],
    description:
      '\n            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>\n         ',
  })
  .openapi('JmxExporter')

const NodeExporterSchema = z
  .object({
    EnabledInBroker: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabledInBroker' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['EnabledInBroker'],
    description:
      '\n            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>\n         ',
  })
  .openapi('NodeExporter')

const PrometheusSchema = z
  .object({
    JmxExporter: JmxExporterSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jmxExporter' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>\n         ',
        }),
    ).exactOptional(),
    NodeExporter: NodeExporterSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nodeExporter' },
          description:
            '\n            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '\n            <p>Prometheus settings.</p>\n         ', required: [] })
  .openapi('Prometheus')

const OpenMonitoringSchema = z
  .object({
    Prometheus: PrometheusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'prometheus' },
          description: '\n            <p>Prometheus settings.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['Prometheus'],
    description: '\n            <p>JMX and Node monitoring for the MSK cluster.</p>\n         ',
  })
  .openapi('OpenMonitoring')

const StateInfoSchema = z
  .object({
    Code: StringSchema.and(z.any().openapi({ xml: { name: 'code' } })).exactOptional(),
    Message: StringSchema.and(z.any().openapi({ xml: { name: 'message' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StateInfo')

const ClusterInfoSchema = z
  .object({
    ActiveOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'activeOperationArn' },
          description: '\n            <p>Arn of active cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
    BrokerNodeGroupInfo: BrokerNodeGroupInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerNodeGroupInfo' },
          description: '\n            <p>Information about the broker nodes.</p>\n         ',
        }),
    ).exactOptional(),
    ClientAuthentication: ClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication information.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterName' },
          description: '\n            <p>The name of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>The time when the cluster was created.</p>\n         ',
        }),
    ).exactOptional(),
    CurrentBrokerSoftwareInfo: BrokerSoftwareInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentBrokerSoftwareInfo' },
          description:
            '\n            <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description: '\n            <p>The current version of the MSK cluster.</p>\n         ',
        }),
    ).exactOptional(),
    EncryptionInfo: EncryptionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionInfo' },
          description:
            '\n            <p>Includes all encryption-related information.</p>\n         ',
        }),
    ).exactOptional(),
    EnhancedMonitoring: EnhancedMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enhancedMonitoring' },
          description:
            '\n            <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>\n         ',
        }),
    ).exactOptional(),
    OpenMonitoring: OpenMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'openMonitoring' },
          description:
            '\n            <p>Settings for open monitoring using Prometheus.</p>\n         ',
        }),
    ).exactOptional(),
    LoggingInfo: LoggingInfoSchema.and(
      z.any().openapi({ xml: { name: 'loggingInfo' } }),
    ).exactOptional(),
    NumberOfBrokerNodes: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'numberOfBrokerNodes' },
          description: '\n            <p>The number of broker nodes in the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    State: ClusterStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>\n         ',
        }),
    ).exactOptional(),
    StateInfo: StateInfoSchema.and(z.any().openapi({ xml: { name: 'stateInfo' } })).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>Tags attached to the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ZookeeperConnectString: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'zookeeperConnectString' },
          description:
            '\n            <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ZookeeperConnectStringTls: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'zookeeperConnectStringTls' },
          description:
            '\n            <p>The connection string to use to connect to zookeeper cluster on Tls port.</p>\n         ',
        }),
    ).exactOptional(),
    StorageMode: StorageModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'storageMode' },
          description:
            '\n            <p>This controls storage mode for supported storage tiers.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Returns information about a cluster.</p>\n         ',
    required: [],
  })
  .openapi('ClusterInfo')

const DescribeClusterResponseSchema = z
  .object({
    ClusterInfo: ClusterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterInfo' },
          description: '\n            <p>The cluster information.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClusterResponse')

const ProvisionedSchema = z
  .object({
    BrokerNodeGroupInfo: BrokerNodeGroupInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerNodeGroupInfo' },
          description: '\n            <p>Information about the brokers.</p>\n         ',
        }),
    ),
    CurrentBrokerSoftwareInfo: BrokerSoftwareInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentBrokerSoftwareInfo' },
          description:
            '\n            <p>Information about the Apache Kafka version deployed on the brokers.</p>\n         ',
        }),
    ).exactOptional(),
    ClientAuthentication: ClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication information.</p>\n         ',
        }),
    ).exactOptional(),
    EncryptionInfo: EncryptionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionInfo' },
          description:
            '\n            <p>Includes all encryption-related information.</p>\n         ',
        }),
    ).exactOptional(),
    EnhancedMonitoring: EnhancedMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enhancedMonitoring' },
          description:
            '\n            <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>\n         ',
        }),
    ).exactOptional(),
    OpenMonitoring: OpenMonitoringInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'openMonitoring' },
          description: '\n            <p>The settings for open monitoring.</p>\n         ',
        }),
    ).exactOptional(),
    LoggingInfo: LoggingInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'loggingInfo' },
          description: '\n            <p>Log delivery information for the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    NumberOfBrokerNodes: IntegerMin1Max15Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'numberOfBrokerNodes' },
          description: '\n            <p>The number of broker nodes in the cluster.</p>\n         ',
        }),
    ),
    ZookeeperConnectString: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'zookeeperConnectString' },
          description:
            '\n            <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ZookeeperConnectStringTls: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'zookeeperConnectStringTls' },
          description:
            '\n            <p>The connection string to use to connect to the Apache ZooKeeper cluster on a TLS port.</p>\n         ',
        }),
    ).exactOptional(),
    StorageMode: StorageModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'storageMode' },
          description:
            '\n            <p>This controls storage mode for supported storage tiers.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BrokerNodeGroupInfo', 'NumberOfBrokerNodes'],
    description: '\n            <p>Provisioned cluster.</p>\n         ',
  })
  .openapi('Provisioned')

const ServerlessSchema = z
  .object({
    VpcConfigs: ListOfVpcConfigSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConfigs' },
          description:
            '\n            <p>The configuration of the Amazon VPCs for the cluster.</p>\n         ',
        }),
    ),
    ClientAuthentication: ServerlessClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication information.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VpcConfigs'],
    description: '\n            <p>Serverless cluster.</p>\n         ',
  })
  .openapi('Serverless')

const ClusterSchema = z
  .object({
    ActiveOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'activeOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterType: ClusterTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterType' },
          description: '\n            <p>Cluster Type.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterName' },
          description: '\n            <p>The name of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>The time when the cluster was created.</p>\n         ',
        }),
    ).exactOptional(),
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description: '\n            <p>The current version of the MSK cluster.</p>\n         ',
        }),
    ).exactOptional(),
    State: ClusterStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>\n         ',
        }),
    ).exactOptional(),
    StateInfo: StateInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stateInfo' },
          description: '\n            <p>State Info for the Amazon MSK cluster.</p>\n         ',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>Tags attached to the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    Provisioned: ProvisionedSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'provisioned' },
          description: '\n            <p>Information about the provisioned cluster.</p>\n         ',
        }),
    ).exactOptional(),
    Serverless: ServerlessSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverless' },
          description: '\n            <p>Information about the serverless cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Returns information about a cluster.</p>\n         ',
    required: [],
  })
  .openapi('Cluster')

const DescribeClusterV2ResponseSchema = z
  .object({
    ClusterInfo: ClusterSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterInfo' },
          description: '\n            <p>The cluster information.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClusterV2Response')

const ErrorInfoSchema = z
  .object({
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'errorCode' },
          description:
            '\n            <p>A number describing the error programmatically.</p>\n         ',
        }),
    ).exactOptional(),
    ErrorString: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'errorString' },
          description:
            '\n            <p>An optional field to provide more details about the error.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Returns information about an error state of the cluster.</p>\n         ',
    required: [],
  })
  .openapi('ErrorInfo')

const ClusterOperationStepInfoSchema = z
  .object({
    StepStatus: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stepStatus' },
          description: '\n            <p>The steps current status.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>State information about the operation step.</p>\n         ',
    required: [],
  })
  .openapi('ClusterOperationStepInfo')

const ClusterOperationStepSchema = z
  .object({
    StepInfo: ClusterOperationStepInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stepInfo' },
          description: '\n            <p>Information about the step and its status.</p>\n         ',
        }),
    ).exactOptional(),
    StepName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stepName' },
          description: '\n            <p>The name of the step.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Step taken during a cluster operation.</p>\n         ',
    required: [],
  })
  .openapi('ClusterOperationStep')

const ListOfClusterOperationStepSchema = z
  .array(ClusterOperationStepSchema)
  .openapi('ListOfClusterOperationStep')

const BrokerEBSVolumeInfoSchema = z
  .object({
    KafkaBrokerNodeId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaBrokerNodeId' },
          description: '\n            <p>The ID of the broker to update.</p>\n         ',
        }),
    ),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'provisionedThroughput' },
          description:
            '\n            <p>EBS volume provisioned throughput information.</p>\n         ',
        }),
    ).exactOptional(),
    VolumeSizeGB: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'volumeSizeGB' },
          description: '\n            <p>Size of the EBS volume to update.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['KafkaBrokerNodeId'],
    description:
      '\n            <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>\n         ',
  })
  .openapi('BrokerEBSVolumeInfo')

const ListOfBrokerEBSVolumeInfoSchema = z
  .array(BrokerEBSVolumeInfoSchema)
  .openapi('ListOfBrokerEBSVolumeInfo')

const MutableClusterInfoSchema = z
  .object({
    BrokerEBSVolumeInfo: ListOfBrokerEBSVolumeInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerEBSVolumeInfo' },
          description:
            '\n            <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>\n         ',
        }),
    ).exactOptional(),
    ConfigurationInfo: ConfigurationInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationInfo' },
          description:
            '\n            <p>Information about the changes in the configuration of the brokers.</p>\n         ',
        }),
    ).exactOptional(),
    NumberOfBrokerNodes: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'numberOfBrokerNodes' },
          description: '\n            <p>The number of broker nodes in the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    EnhancedMonitoring: EnhancedMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enhancedMonitoring' },
          description:
            '\n            <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>\n         ',
        }),
    ).exactOptional(),
    OpenMonitoring: OpenMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'openMonitoring' },
          description: '\n            <p>The settings for open monitoring.</p>\n         ',
        }),
    ).exactOptional(),
    KafkaVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaVersion' },
          description: '\n            <p>The Apache Kafka version.</p>\n            ',
        }),
    ).exactOptional(),
    LoggingInfo: LoggingInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'loggingInfo' },
          description:
            '\n            <p>You can configure your MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.</p>\n            ',
        }),
    ).exactOptional(),
    InstanceType: StringMin5Max32Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'instanceType' },
          description:
            '\n            <p>Information about the Amazon MSK broker type.</p>\n            ',
        }),
    ).exactOptional(),
    ClientAuthentication: ClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication information.</p>\n         ',
        }),
    ).exactOptional(),
    EncryptionInfo: EncryptionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionInfo' },
          description:
            '\n            <p>Includes all encryption-related information.</p>\n         ',
        }),
    ).exactOptional(),
    ConnectivityInfo: ConnectivityInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectivityInfo' },
          description:
            '\n            <p>Information about the broker access configuration.</p>\n         ',
        }),
    ).exactOptional(),
    StorageMode: StorageModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'storageMode' },
          description:
            '\n            <p>This controls storage mode for supported storage tiers.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Information about cluster attributes that can be updated via update APIs.</p>\n         ',
    required: [],
  })
  .openapi('MutableClusterInfo')

const UserIdentityTypeSchema = z
  .enum(['AWSACCOUNT', 'AWSSERVICE'])
  .openapi({
    description:
      '\n            <p>The identity type of the requester that calls the API operation.</p>\n         ',
  })
  .openapi('UserIdentityType')

const UserIdentitySchema = z
  .object({
    Type: UserIdentityTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'type' },
          description:
            '\n            <p>The identity type of the requester that calls the API operation.</p>\n         ',
        }),
    ).exactOptional(),
    PrincipalId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'principalId' },
          description:
            '\n            <p>A unique identifier for the requester that calls the API operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Description of the requester that calls the API operation.</p>\n         ',
    required: [],
  })
  .openapi('UserIdentity')

const VpcConnectionInfoSchema = z
  .object({
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
    Owner: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'owner' },
          description: '\n            <p>The owner of the VPC Connection.</p>\n         ',
        }),
    ).exactOptional(),
    UserIdentity: UserIdentitySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userIdentity' },
          description:
            '\n            <p>Description of the requester that calls the API operation.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description:
            '\n            <p>The time when Amazon MSK creates the VPC Connnection.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Description of the VPC connection.</p>\n         ',
    required: [],
  })
  .openapi('VpcConnectionInfo')

const ClusterOperationInfoSchema = z
  .object({
    ClientRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientRequestId' },
          description:
            '\n            <p>The ID of the API request that triggered this operation.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description: '\n            <p>ARN of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>The time that the operation was created.</p>\n         ',
        }),
    ).exactOptional(),
    EndTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endTime' },
          description: '\n            <p>The time at which the operation finished.</p>\n         ',
        }),
    ).exactOptional(),
    ErrorInfo: ErrorInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'errorInfo' },
          description:
            '\n            <p>Describes the error if the operation fails.</p>\n         ',
        }),
    ).exactOptional(),
    OperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationArn' },
          description: '\n            <p>ARN of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
    OperationState: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationState' },
          description: '\n            <p>State of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
    OperationSteps: ListOfClusterOperationStepSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationSteps' },
          description: '\n            <p>Steps completed during the operation.</p>\n         ',
        }),
    ).exactOptional(),
    OperationType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationType' },
          description: '\n            <p>Type of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
    SourceClusterInfo: MutableClusterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceClusterInfo' },
          description:
            '\n            <p>Information about cluster attributes before a cluster is updated.</p>\n         ',
        }),
    ).exactOptional(),
    TargetClusterInfo: MutableClusterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetClusterInfo' },
          description:
            '\n            <p>Information about cluster attributes after a cluster is updated.</p>\n         ',
        }),
    ).exactOptional(),
    VpcConnectionInfo: VpcConnectionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionInfo' },
          description:
            '\n            <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Returns information about a cluster operation.</p>\n         ',
    required: [],
  })
  .openapi('ClusterOperationInfo')

const DescribeClusterOperationResponseSchema = z
  .object({
    ClusterOperationInfo: ClusterOperationInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationInfo' },
          description: '\n            <p>Cluster operation information</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClusterOperationResponse')

const ClusterOperationV2ProvisionedSchema = z
  .object({
    OperationSteps: ListOfClusterOperationStepSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationSteps' },
          description: '\n            <p>Steps completed during the operation.</p>',
        }),
    ).exactOptional(),
    SourceClusterInfo: MutableClusterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceClusterInfo' },
          description:
            '\n            <p>Information about cluster attributes before a cluster is updated.</p>',
        }),
    ).exactOptional(),
    TargetClusterInfo: MutableClusterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetClusterInfo' },
          description:
            '\n            <p>Information about cluster attributes after a cluster is updated.</p>',
        }),
    ).exactOptional(),
    VpcConnectionInfo: VpcConnectionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionInfo' },
          description:
            '\n            <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Returns information about a provisioned cluster operation.</p>',
    required: [],
  })
  .openapi('ClusterOperationV2Provisioned')

const VpcConnectionInfoServerlessSchema = z
  .object({
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>The time when Amazon MSK creates the VPC Connnection.</p>',
        }),
    ).exactOptional(),
    Owner: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'owner' },
          description: '\n            <p>The owner of the VPC Connection.</p>',
        }),
    ).exactOptional(),
    UserIdentity: UserIdentitySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userIdentity' },
          description:
            '\n            <p>Description of the requester that calls the API operation.</p>',
        }),
    ).exactOptional(),
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description: '\n            <p>The Amazon Resource Name (ARN) of the VPC connection.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Description of the VPC connection.', required: [] })
  .openapi('VpcConnectionInfoServerless')

const ClusterOperationV2ServerlessSchema = z
  .object({
    VpcConnectionInfo: VpcConnectionInfoServerlessSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionInfo' },
          description:
            '\n            <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Returns information about a serverless cluster operation.</p>',
    required: [],
  })
  .openapi('ClusterOperationV2Serverless')

const ClusterOperationV2Schema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description: '\n            <p>ARN of the cluster.</p>',
        }),
    ).exactOptional(),
    ClusterType: ClusterTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterType' },
          description: '\n            <p>Type of the backend cluster.</p>',
        }),
    ).exactOptional(),
    StartTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startTime' },
          description: '\n            <p>The time at which operation was started.</p>',
        }),
    ).exactOptional(),
    EndTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endTime' },
          description: '\n            <p>The time at which the operation finished.</p>',
        }),
    ).exactOptional(),
    ErrorInfo: ErrorInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'errorInfo' },
          description:
            '\n            <p>If cluster operation failed from an error, it describes the error.</p>',
        }),
    ).exactOptional(),
    OperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationArn' },
          description: '\n            <p>ARN of the cluster operation.</p>',
        }),
    ).exactOptional(),
    OperationState: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationState' },
          description: '\n            <p>State of the cluster operation.</p>',
        }),
    ).exactOptional(),
    OperationType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationType' },
          description: '\n            <p>Type of the cluster operation.</p>',
        }),
    ).exactOptional(),
    Provisioned: ClusterOperationV2ProvisionedSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'provisioned' },
          description: '\n            <p>Properties of a provisioned cluster.</p>',
        }),
    ).exactOptional(),
    Serverless: ClusterOperationV2ServerlessSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverless' },
          description: '\n            <p>Properties of a serverless cluster.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Returns information about a cluster operation.</p>',
    required: [],
  })
  .openapi('ClusterOperationV2')

const DescribeClusterOperationV2ResponseSchema = z
  .object({
    ClusterOperationInfo: ClusterOperationV2Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationInfo' },
          description: '\n            <p>Cluster operation information</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClusterOperationV2Response')

const DescribeConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description:
            '\n            <p>The time when the configuration was created.</p>\n         ',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: '\n            <p>The description of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    KafkaVersions: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaVersions' },
          description:
            '\n            <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>\n         ',
        }),
    ).exactOptional(),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: '\n            <p>Latest revision of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: '\n            <p>The name of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    State: ConfigurationStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConfigurationResponse')

const BlobSchema = z.string().openapi('Blob')

const DescribeConfigurationRevisionResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description:
            '\n            <p>The time when the configuration was created.</p>\n         ',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: '\n            <p>The description of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    Revision: LongSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'revision' },
          description: '\n            <p>The revision number.</p>\n         ',
        }),
    ).exactOptional(),
    ServerProperties: BlobSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverProperties' },
          description:
            '\n            <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. \n               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConfigurationRevisionResponse')

const DescribeVpcConnectionResponseSchema = z
  .object({
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p>\n   ',
        }),
    ).exactOptional(),
    TargetClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetClusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK cluster.</p>\n   ',
        }),
    ).exactOptional(),
    State: VpcConnectionStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description: '\n            <p>The state of VPC connection.</p>\n   ',
        }),
    ).exactOptional(),
    Authentication: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authentication' },
          description: '\n            <p>The authentication type of VPC connection.</p>\n   ',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcId' },
          description: '\n            <p>The VPC Id for the VPC connection.</p>\n   ',
        }),
    ).exactOptional(),
    Subnets: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnets' },
          description: '\n            <p>The list of subnets for the VPC connection.</p>\n   ',
        }),
    ).exactOptional(),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description:
            '\n            <p>The list of security groups for the VPC connection.</p>\n   ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>The creation time of the VPC connection.</p>\n   ',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>A map of tags for the VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeVpcConnectionResponse')

const BatchDisassociateScramSecretResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    UnprocessedScramSecrets: ListOfUnprocessedScramSecretSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'unprocessedScramSecrets' },
          description:
            '\n            <p>List of errors when disassociating secrets to cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDisassociateScramSecretResponse')

const GetBootstrapBrokersResponseSchema = z
  .object({
    BootstrapBrokerString: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerString' },
          description:
            '\n            <p>A string containing one or more hostname:port pairs.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringTls: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringTls' },
          description:
            '\n            <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringSaslScram: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringSaslScram' },
          description:
            '\n            <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringSaslIam: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringSaslIam' },
          description:
            '\n            <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringPublicTls: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringPublicTls' },
          description:
            '\n            <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringPublicSaslScram: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringPublicSaslScram' },
          description:
            '\n            <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringPublicSaslIam: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringPublicSaslIam' },
          description:
            '\n            <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringVpcConnectivityTls: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringVpcConnectivityTls' },
          description:
            '\n            <p>A string containing one or more DNS names (or IP) and TLS port pairs for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringVpcConnectivitySaslScram: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringVpcConnectivitySaslScram' },
          description:
            '\n            <p>A string containing one or more DNS names (or IP) and SASL/SCRAM port pairs for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
    BootstrapBrokerStringVpcConnectivitySaslIam: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bootstrapBrokerStringVpcConnectivitySaslIam' },
          description:
            '\n            <p>A string containing one or more DNS names (or IP) and SASL/IAM port pairs for VPC connectivity.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBootstrapBrokersResponse')

const CompatibleKafkaVersionSchema = z
  .object({
    SourceVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceVersion' },
          description: '\n            <p>An Apache Kafka version.</p>\n            ',
        }),
    ).exactOptional(),
    TargetVersions: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetVersions' },
          description: '\n            <p>A list of Apache Kafka versions.</p>\n            ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '\n            <p>Contains source Apache Kafka versions and compatible target Apache Kafka versions.</p>\n        ',
    required: [],
  })
  .openapi('CompatibleKafkaVersion')

const ListOfCompatibleKafkaVersionSchema = z
  .array(CompatibleKafkaVersionSchema)
  .openapi('ListOfCompatibleKafkaVersion')

const GetCompatibleKafkaVersionsResponseSchema = z
  .object({
    CompatibleKafkaVersions: ListOfCompatibleKafkaVersionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'compatibleKafkaVersions' },
          description:
            '\n            <p>A list of CompatibleKafkaVersion objects.</p>\n            ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCompatibleKafkaVersionsResponse')

const GetClusterPolicyResponseSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description: '\n            <p>The version of cluster policy.</p>\n            ',
        }),
    ).exactOptional(),
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'policy' },
          description: '\n            <p>The cluster policy.</p>\n            ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetClusterPolicyResponse')

const ListOfClusterOperationInfoSchema = z
  .array(ClusterOperationInfoSchema)
  .openapi('ListOfClusterOperationInfo')

const ListClusterOperationsResponseSchema = z
  .object({
    ClusterOperationInfoList: ListOfClusterOperationInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationInfoList' },
          description:
            '\n            <p>An array of cluster operation information objects.</p>\n         ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClusterOperationsResponse')

const ClusterOperationV2SummarySchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description: '\n            <p>ARN of the cluster.</p>',
        }),
    ).exactOptional(),
    ClusterType: ClusterTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterType' },
          description: '\n            <p>Type of the backend cluster.</p>',
        }),
    ).exactOptional(),
    StartTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startTime' },
          description: '\n            <p>The time at which operation was started.</p>',
        }),
    ).exactOptional(),
    EndTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endTime' },
          description: '\n            <p>The time at which the operation finished.</p>',
        }),
    ).exactOptional(),
    OperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationArn' },
          description: '\n            <p>ARN of the cluster operation.</p>',
        }),
    ).exactOptional(),
    OperationState: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationState' },
          description: '\n            <p>State of the cluster operation.</p>',
        }),
    ).exactOptional(),
    OperationType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationType' },
          description: '\n            <p>Type of the cluster operation.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '\n            <p>Returns information about a cluster operation.</p>',
    required: [],
  })
  .openapi('ClusterOperationV2Summary')

const ListOfClusterOperationV2SummarySchema = z
  .array(ClusterOperationV2SummarySchema)
  .openapi('ListOfClusterOperationV2Summary')

const ListClusterOperationsV2ResponseSchema = z
  .object({
    ClusterOperationInfoList: ListOfClusterOperationV2SummarySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationInfoList' },
          description: '\n            <p>An array of cluster operation information objects.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>If the response of ListClusterOperationsV2 is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListClusterOperationsV2.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClusterOperationsV2Response')

const ListOfClusterInfoSchema = z.array(ClusterInfoSchema).openapi('ListOfClusterInfo')

const ListClustersResponseSchema = z
  .object({
    ClusterInfoList: ListOfClusterInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterInfoList' },
          description:
            '\n            <p>Information on each of the MSK clusters in the response.</p>\n         ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. \n               To get another batch of clusters, provide this token in your next request.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClustersResponse')

const ListOfClusterSchema = z.array(ClusterSchema).openapi('ListOfCluster')

const ListClustersV2ResponseSchema = z
  .object({
    ClusterInfoList: ListOfClusterSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterInfoList' },
          description:
            '\n            <p>Information on each of the MSK clusters in the response.</p>\n         ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. \n               To get another batch of clusters, provide this token in your next request.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClustersV2Response')

const ListOfConfigurationRevisionSchema = z
  .array(ConfigurationRevisionSchema)
  .openapi('ListOfConfigurationRevision')

const ListConfigurationRevisionsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description: '\n            <p>Paginated results marker.</p>\n         ',
        }),
    ).exactOptional(),
    Revisions: ListOfConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'revisions' },
          description: '\n            <p>List of ConfigurationRevision objects.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConfigurationRevisionsResponse')

const ConfigurationSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the configuration.</p>\n         ',
        }),
    ),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description:
            '\n            <p>The time when the configuration was created.</p>\n         ',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: '\n            <p>The description of the configuration.</p>\n         ',
        }),
    ),
    KafkaVersions: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaVersions' },
          description:
            '\n            <p>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</p>\n         ',
        }),
    ),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: '\n            <p>Latest revision of the configuration.</p>\n         ',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: '\n            <p>The name of the configuration.</p>\n         ',
        }),
    ),
    State: ConfigurationStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description:
            '\n            <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>\n         ',
        }),
    ),
  })
  .openapi({
    required: [
      'Description',
      'LatestRevision',
      'CreationTime',
      'KafkaVersions',
      'Arn',
      'Name',
      'State',
    ],
    description: '\n            <p>Represents an MSK Configuration.</p>\n         ',
  })
  .openapi('Configuration')

const ListOfConfigurationSchema = z.array(ConfigurationSchema).openapi('ListOfConfiguration')

const ListConfigurationsResponseSchema = z
  .object({
    Configurations: ListOfConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurations' },
          description: '\n            <p>An array of MSK configurations.</p>\n         ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response. \n               To get another batch of configurations, provide this token in your next request.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConfigurationsResponse')

const KafkaVersionStatusSchema = z.enum(['ACTIVE', 'DEPRECATED']).openapi('KafkaVersionStatus')

const KafkaVersionSchema = z
  .object({
    Version: StringSchema.and(z.any().openapi({ xml: { name: 'version' } })).exactOptional(),
    Status: KafkaVersionStatusSchema.and(
      z.any().openapi({ xml: { name: 'status' } }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KafkaVersion')

const ListOfKafkaVersionSchema = z.array(KafkaVersionSchema).openapi('ListOfKafkaVersion')

const ListKafkaVersionsResponseSchema = z
  .object({
    KafkaVersions: ListOfKafkaVersionSchema.and(
      z.any().openapi({ xml: { name: 'kafkaVersions' } }),
    ).exactOptional(),
    NextToken: StringSchema.and(z.any().openapi({ xml: { name: 'nextToken' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListKafkaVersionsResponse')

const NodeInfoSchema: z.ZodType<NodeInfoType> = z
  .lazy(() =>
    z
      .object({
        AddedToClusterTime: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'addedToClusterTime' },
              description: '\n            <p>The start time.</p>\n         ',
            }),
        ).exactOptional(),
        BrokerNodeInfo: BrokerNodeInfoSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'brokerNodeInfo' },
              description: '\n            <p>The broker node info.</p>\n         ',
            }),
        ).exactOptional(),
        InstanceType: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'instanceType' },
              description: '\n            <p>The instance type.</p>\n         ',
            }),
        ).exactOptional(),
        NodeARN: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'nodeARN' },
              description:
                '\n            <p>The Amazon Resource Name (ARN) of the node.</p>\n         ',
            }),
        ).exactOptional(),
        NodeType: NodeTypeSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'nodeType' },
              description: '\n            <p>The node type.</p>\n         ',
            }),
        ).exactOptional(),
        ZookeeperNodeInfo: ZookeeperNodeInfoSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'zookeeperNodeInfo' },
              description: '\n            <p>The ZookeeperNodeInfo.</p>\n         ',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: '\n            <p>The node information object.</p>\n         ',
        required: [],
      }),
  )
  .openapi('NodeInfo')

const ListOfNodeInfoSchema = z.array(NodeInfoSchema).openapi('ListOfNodeInfo')

const ListNodesResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response. \n               To get another batch of nodes, provide this token in your next request.</p>\n         ',
        }),
    ).exactOptional(),
    NodeInfoList: ListOfNodeInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nodeInfoList' },
          description: '\n            <p>List containing a NodeInfo object.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNodesResponse')

const ListScramSecretsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description: '\n            <p>Paginated results marker.</p>\n         ',
        }),
    ).exactOptional(),
    SecretArnList: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'secretArnList' },
          description:
            '\n            <p>The list of scram secrets associated with the cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListScramSecretsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>The key-value pair for the resource tag.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ClientVpcConnectionSchema = z
  .object({
    Authentication: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authentication' },
          description:
            '\n            <p>Information about the auth scheme of Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>Creation time of the Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
    State: VpcConnectionStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description: '\n            <p>State of the Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description:
            '\n            <p>The ARN that identifies the Vpc Connection.</p>\n         ',
        }),
    ),
    Owner: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'owner' },
          description: '\n            <p>The Owner of the Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VpcConnectionArn'],
    description: '\n            <p>The client VPC connection object.</p>\n         ',
  })
  .openapi('ClientVpcConnection')

const ListOfClientVpcConnectionSchema = z
  .array(ClientVpcConnectionSchema)
  .openapi('ListOfClientVpcConnection')

const ListClientVpcConnectionsResponseSchema = z
  .object({
    ClientVpcConnections: ListOfClientVpcConnectionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientVpcConnections' },
          description: '\n            <p>List of client VPC connections.</p>\n         ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response. \n               To get another batch of configurations, provide this token in your next request.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClientVpcConnectionsResponse')

const VpcConnectionSchema = z
  .object({
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description:
            '\n            <p>The ARN that identifies the Vpc Connection.</p>\n         ',
        }),
    ),
    TargetClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetClusterArn' },
          description:
            '\n            <p>The ARN that identifies the Cluster which the Vpc Connection belongs to.</p>\n         ',
        }),
    ),
    CreationTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creationTime' },
          description: '\n            <p>Creation time of the Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
    Authentication: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authentication' },
          description:
            '\n            <p>Information about the auth scheme of Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcId' },
          description:
            '\n            <p>The vpcId that belongs to the Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
    State: VpcConnectionStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'state' },
          description: '\n            <p>State of the Vpc Connection.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VpcConnectionArn', 'TargetClusterArn'],
    description: '\n            <p>The VPC connection object.</p>\n         ',
  })
  .openapi('VpcConnection')

const ListOfVpcConnectionSchema = z.array(VpcConnectionSchema).openapi('ListOfVpcConnection')

const ListVpcConnectionsResponseSchema = z
  .object({
    VpcConnections: ListOfVpcConnectionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnections' },
          description: '\n            <p>List of VPC connections.</p>\n         ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            '\n            <p>The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response. \n               To get another batch of configurations, provide this token in your next request.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVpcConnectionsResponse')

const RejectClientVpcConnectionResponseSchema = z
  .object({})
  .openapi('RejectClientVpcConnectionResponse')

const PutClusterPolicyResponseSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description: '\n            <p>The policy version.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutClusterPolicyResponse')

const RebootBrokerResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RebootBrokerResponse')

const UpdateBrokerCountResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBrokerCountResponse')

const UpdateBrokerTypeResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBrokerTypeResponse')

const UpdateBrokerStorageResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBrokerStorageResponse')

const UpdateConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: '\n            <p>Latest revision of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConfigurationResponse')

const UpdateConnectivityResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectivityResponse')

const UpdateClusterConfigurationResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateClusterConfigurationResponse')

const UpdateClusterKafkaVersionResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n            ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n            ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateClusterKafkaVersionResponse')

const UpdateMonitoringResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateMonitoringResponse')

const UpdateSecurityResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSecurityResponse')

const UpdateStorageResponseSchema = z
  .object({
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterOperationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterOperationArn' },
          description:
            '\n            <p>The Amazon Resource Name (ARN) of the cluster operation.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateStorageResponse')

const BatchAssociateScramSecretRequestSchema = z
  .object({
    SecretArnList: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'secretArnList' },
          description: '\n            <p>List of AWS Secrets Manager secret ARNs.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['SecretArnList'],
    title: 'BatchAssociateScramSecretRequest',
    description: '\n            <p>Associates sasl scram secrets to cluster.</p>\n         ',
  })
  .openapi('BatchAssociateScramSecretRequest')

const ProvisionedRequestSchema = z
  .object({
    BrokerNodeGroupInfo: BrokerNodeGroupInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerNodeGroupInfo' },
          description: '\n            <p>Information about the brokers.</p>\n         ',
        }),
    ),
    ClientAuthentication: ClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication information.</p>\n         ',
        }),
    ).exactOptional(),
    ConfigurationInfo: ConfigurationInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationInfo' },
          description:
            '\n            <p>Represents the configuration that you want Amazon MSK to use for the brokers in a cluster.</p>\n         ',
        }),
    ).exactOptional(),
    EncryptionInfo: EncryptionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionInfo' },
          description:
            '\n            <p>Includes all encryption-related information.</p>\n         ',
        }),
    ).exactOptional(),
    EnhancedMonitoring: EnhancedMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enhancedMonitoring' },
          description:
            '\n            <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>\n         ',
        }),
    ).exactOptional(),
    OpenMonitoring: OpenMonitoringInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'openMonitoring' },
          description: '\n            <p>The settings for open monitoring.</p>\n         ',
        }),
    ).exactOptional(),
    KafkaVersion: StringMin1Max128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaVersion' },
          description:
            '\n            <p>The Apache Kafka version that you want for the cluster.</p>\n         ',
        }),
    ),
    LoggingInfo: LoggingInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'loggingInfo' },
          description: '\n            <p>Log delivery information for the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    NumberOfBrokerNodes: IntegerMin1Max15Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'numberOfBrokerNodes' },
          description: '\n            <p>The number of broker nodes in the cluster.</p>\n         ',
        }),
    ),
    StorageMode: StorageModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'storageMode' },
          description:
            '\n            <p>This controls storage mode for supported storage tiers.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BrokerNodeGroupInfo', 'KafkaVersion', 'NumberOfBrokerNodes'],
    description: '\n            <p>Provisioned cluster request.</p>\n         ',
  })
  .openapi('ProvisionedRequest')

const ServerlessRequestSchema = z
  .object({
    VpcConfigs: ListOfVpcConfigSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConfigs' },
          description:
            '\n            <p>The configuration of the Amazon VPCs for the cluster.</p>\n         ',
        }),
    ),
    ClientAuthentication: ServerlessClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication information.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VpcConfigs'],
    description: '\n            <p>Serverless cluster request.</p>\n         ',
  })
  .openapi('ServerlessRequest')

const StringMin1Max64Schema = z.string().min(1).max(64).openapi('StringMin1Max64')

const CreateClusterV2RequestSchema = z
  .object({
    ClusterName: StringMin1Max64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterName' },
          description: '\n            <p>The name of the cluster.</p>\n         ',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            '\n            <p>A map of tags that you want the cluster to have.</p>\n         ',
        }),
    ).exactOptional(),
    Provisioned: ProvisionedRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'provisioned' },
          description: '\n            <p>Information about the provisioned cluster.</p>\n         ',
        }),
    ).exactOptional(),
    Serverless: ServerlessRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverless' },
          description: '\n            <p>Information about the serverless cluster.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterName'], title: 'CreateClusterV2Request' })
  .openapi('CreateClusterV2Request')

const CreateClusterRequestSchema = z
  .object({
    BrokerNodeGroupInfo: BrokerNodeGroupInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerNodeGroupInfo' },
          description:
            '\n            <p>Information about the broker nodes in the cluster.</p>\n         ',
        }),
    ),
    ClientAuthentication: ClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication related information.</p>\n         ',
        }),
    ).exactOptional(),
    ClusterName: StringMin1Max64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clusterName' },
          description: '\n            <p>The name of the cluster.</p>\n         ',
        }),
    ),
    ConfigurationInfo: ConfigurationInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationInfo' },
          description:
            '\n            <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>\n         ',
        }),
    ).exactOptional(),
    EncryptionInfo: EncryptionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionInfo' },
          description:
            '\n            <p>Includes all encryption-related information.</p>\n         ',
        }),
    ).exactOptional(),
    EnhancedMonitoring: EnhancedMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enhancedMonitoring' },
          description:
            '\n            <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>\n         ',
        }),
    ).exactOptional(),
    OpenMonitoring: OpenMonitoringInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'openMonitoring' },
          description: '\n            <p>The settings for open monitoring.</p>\n         ',
        }),
    ).exactOptional(),
    KafkaVersion: StringMin1Max128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaVersion' },
          description: '\n            <p>The version of Apache Kafka.</p>\n         ',
        }),
    ),
    LoggingInfo: LoggingInfoSchema.and(
      z.any().openapi({ xml: { name: 'loggingInfo' } }),
    ).exactOptional(),
    NumberOfBrokerNodes: IntegerMin1Max15Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'numberOfBrokerNodes' },
          description: '\n            <p>The number of broker nodes in the cluster.</p>\n         ',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>Create tags when creating the cluster.</p>\n         ',
        }),
    ).exactOptional(),
    StorageMode: StorageModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'storageMode' },
          description:
            '\n            <p>This controls storage mode for supported storage tiers.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BrokerNodeGroupInfo', 'KafkaVersion', 'NumberOfBrokerNodes', 'ClusterName'],
    title: 'CreateClusterRequest',
  })
  .openapi('CreateClusterRequest')

const CreateConfigurationRequestSchema = z
  .object({
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: '\n            <p>The description of the configuration.</p>\n         ',
        }),
    ).exactOptional(),
    KafkaVersions: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kafkaVersions' },
          description:
            '\n            <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>\n         ',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: '\n            <p>The name of the configuration.</p>\n         ',
        }),
    ),
    ServerProperties: BlobSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverProperties' },
          description:
            '\n            <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. \n               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>\n         ',
        }),
    ),
  })
  .openapi({ required: ['ServerProperties', 'Name'], title: 'CreateConfigurationRequest' })
  .openapi('CreateConfigurationRequest')

const CreateVpcConnectionRequestSchema = z
  .object({
    TargetClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetClusterArn' },
          description:
            '\n            <p>The cluster Amazon Resource Name (ARN) for the VPC connection.</p>\n         ',
        }),
    ),
    Authentication: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authentication' },
          description: '\n            <p>The authentication type of VPC connection.</p>\n         ',
        }),
    ),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcId' },
          description: '\n            <p>The VPC ID of VPC connection.</p>\n         ',
        }),
    ),
    ClientSubnets: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientSubnets' },
          description: '\n            <p>The list of client subnets.</p>\n         ',
        }),
    ),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description: '\n            <p>The list of security groups.</p>\n         ',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>A map of tags for the VPC connection.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TargetClusterArn', 'Authentication', 'VpcId', 'ClientSubnets', 'SecurityGroups'],
    title: 'CreateVpcConnectionRequest',
  })
  .openapi('CreateVpcConnectionRequest')

const DeleteClusterRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteClusterRequest' })
  .openapi('DeleteClusterRequest')

const DeleteClusterPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteClusterPolicyRequest' })
  .openapi('DeleteClusterPolicyRequest')

const DeleteConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteConfigurationRequest' })
  .openapi('DeleteConfigurationRequest')

const DeleteVpcConnectionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVpcConnectionRequest' })
  .openapi('DeleteVpcConnectionRequest')

const DescribeClusterOperationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeClusterOperationRequest' })
  .openapi('DescribeClusterOperationRequest')

const DescribeClusterOperationV2RequestSchema = z
  .object({})
  .openapi({ title: 'DescribeClusterOperationV2Request' })
  .openapi('DescribeClusterOperationV2Request')

const DescribeClusterRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeClusterRequest' })
  .openapi('DescribeClusterRequest')

const DescribeClusterV2RequestSchema = z
  .object({})
  .openapi({ title: 'DescribeClusterV2Request' })
  .openapi('DescribeClusterV2Request')

const DescribeConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeConfigurationRequest' })
  .openapi('DescribeConfigurationRequest')

const DescribeConfigurationRevisionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeConfigurationRevisionRequest' })
  .openapi('DescribeConfigurationRevisionRequest')

const DescribeVpcConnectionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeVpcConnectionRequest' })
  .openapi('DescribeVpcConnectionRequest')

const BatchDisassociateScramSecretRequestSchema = z
  .object({
    SecretArnList: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'secretArnList' },
          description: '\n            <p>List of AWS Secrets Manager secret ARNs.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['SecretArnList'],
    title: 'BatchDisassociateScramSecretRequest',
    description: '\n            <p>Disassociates sasl scram secrets to cluster.</p>\n         ',
  })
  .openapi('BatchDisassociateScramSecretRequest')

const GetBootstrapBrokersRequestSchema = z
  .object({})
  .openapi({ title: 'GetBootstrapBrokersRequest' })
  .openapi('GetBootstrapBrokersRequest')

const GetCompatibleKafkaVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'GetCompatibleKafkaVersionsRequest' })
  .openapi('GetCompatibleKafkaVersionsRequest')

const GetClusterPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetClusterPolicyRequest' })
  .openapi('GetClusterPolicyRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListClusterOperationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListClusterOperationsRequest' })
  .openapi('ListClusterOperationsRequest')

const ListClusterOperationsV2RequestSchema = z
  .object({})
  .openapi({ title: 'ListClusterOperationsV2Request' })
  .openapi('ListClusterOperationsV2Request')

const ListClustersRequestSchema = z
  .object({})
  .openapi({ title: 'ListClustersRequest' })
  .openapi('ListClustersRequest')

const ListClustersV2RequestSchema = z
  .object({})
  .openapi({ title: 'ListClustersV2Request' })
  .openapi('ListClustersV2Request')

const ListConfigurationRevisionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListConfigurationRevisionsRequest' })
  .openapi('ListConfigurationRevisionsRequest')

const ListConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListConfigurationsRequest' })
  .openapi('ListConfigurationsRequest')

const ListKafkaVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListKafkaVersionsRequest' })
  .openapi('ListKafkaVersionsRequest')

const ListNodesRequestSchema = z
  .object({})
  .openapi({ title: 'ListNodesRequest' })
  .openapi('ListNodesRequest')

const ListScramSecretsRequestSchema = z
  .object({})
  .openapi({ title: 'ListScramSecretsRequest' })
  .openapi('ListScramSecretsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListClientVpcConnectionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListClientVpcConnectionsRequest' })
  .openapi('ListClientVpcConnectionsRequest')

const ListVpcConnectionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListVpcConnectionsRequest' })
  .openapi('ListVpcConnectionsRequest')

const RejectClientVpcConnectionRequestSchema = z
  .object({
    VpcConnectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcConnectionArn' },
          description: '\n            <p>The VPC connection ARN.</p>\n         ',
        }),
    ),
  })
  .openapi({ required: ['VpcConnectionArn'], title: 'RejectClientVpcConnectionRequest' })
  .openapi('RejectClientVpcConnectionRequest')

const PutClusterPolicyRequestSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description: '\n            <p>The policy version.</p>\n         ',
        }),
    ).exactOptional(),
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'policy' },
          description: '\n            <p>The policy.</p>\n         ',
        }),
    ),
  })
  .openapi({ required: ['Policy'], title: 'PutClusterPolicyRequest' })
  .openapi('PutClusterPolicyRequest')

const RebootBrokerRequestSchema = z
  .object({
    BrokerIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerIds' },
          description:
            '\n            <p>The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['BrokerIds'],
    title: 'RebootBrokerRequest',
    description: 'Reboots a node.',
  })
  .openapi('RebootBrokerRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: '\n            <p>The key-value pair for the resource tag.</p>\n         ',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateBrokerCountRequestSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            '\n            <p>The version of cluster to update from. A successful operation will then generate a new version.</p>\n         ',
        }),
    ),
    TargetNumberOfBrokerNodes: IntegerMin1Max15Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetNumberOfBrokerNodes' },
          description:
            '\n            <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['CurrentVersion', 'TargetNumberOfBrokerNodes'],
    title: 'UpdateBrokerCountRequest',
  })
  .openapi('UpdateBrokerCountRequest')

const UpdateBrokerTypeRequestSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            '\n            <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p>\n         ',
        }),
    ),
    TargetInstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetInstanceType' },
          description:
            '\n            <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p>\n         ',
        }),
    ),
  })
  .openapi({ required: ['CurrentVersion', 'TargetInstanceType'], title: 'UpdateBrokerTypeRequest' })
  .openapi('UpdateBrokerTypeRequest')

const UpdateBrokerStorageRequestSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            '\n            <p>The version of cluster to update from. A successful operation will then generate a new version.</p>\n         ',
        }),
    ),
    TargetBrokerEBSVolumeInfo: ListOfBrokerEBSVolumeInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetBrokerEBSVolumeInfo' },
          description:
            '\n            <p>Describes the target volume size and the ID of the broker to apply the update to.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['TargetBrokerEBSVolumeInfo', 'CurrentVersion'],
    title: 'UpdateBrokerStorageRequest',
  })
  .openapi('UpdateBrokerStorageRequest')

const UpdateClusterConfigurationRequestSchema = z
  .object({
    ConfigurationInfo: ConfigurationInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationInfo' },
          description:
            '\n            <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>\n         ',
        }),
    ),
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            '\n            <p>The version of the cluster that needs to be updated.</p>\n         ',
        }),
    ),
  })
  .openapi({
    required: ['CurrentVersion', 'ConfigurationInfo'],
    title: 'UpdateClusterConfigurationRequest',
  })
  .openapi('UpdateClusterConfigurationRequest')

const UpdateClusterKafkaVersionRequestSchema = z
  .object({
    ConfigurationInfo: ConfigurationInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationInfo' },
          description:
            '\n            <p>The custom configuration that should be applied on the new version of cluster.</p>\n            ',
        }),
    ).exactOptional(),
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description: '\n            <p>Current cluster version.</p>\n            ',
        }),
    ),
    TargetKafkaVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'targetKafkaVersion' },
          description: '\n            <p>Target Kafka version.</p>\n            ',
        }),
    ),
  })
  .openapi({
    required: ['TargetKafkaVersion', 'CurrentVersion'],
    title: 'UpdateClusterKafkaVersionRequest',
  })
  .openapi('UpdateClusterKafkaVersionRequest')

const UpdateMonitoringRequestSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            "\n            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>\n         ",
        }),
    ),
    EnhancedMonitoring: EnhancedMonitoringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enhancedMonitoring' },
          description:
            '\n            <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>\n         ',
        }),
    ).exactOptional(),
    OpenMonitoring: OpenMonitoringInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'openMonitoring' },
          description: '\n            <p>The settings for open monitoring.</p>\n         ',
        }),
    ).exactOptional(),
    LoggingInfo: LoggingInfoSchema.and(
      z.any().openapi({ xml: { name: 'loggingInfo' } }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CurrentVersion'],
    title: 'UpdateMonitoringRequest',
    description: 'Request body for UpdateMonitoring.',
  })
  .openapi('UpdateMonitoringRequest')

const UpdateSecurityRequestSchema = z
  .object({
    ClientAuthentication: ClientAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientAuthentication' },
          description:
            '\n            <p>Includes all client authentication related information.</p>\n         ',
        }),
    ).exactOptional(),
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            "\n            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>\n         ",
        }),
    ),
    EncryptionInfo: EncryptionInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionInfo' },
          description:
            '\n            <p>Includes all encryption-related information.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CurrentVersion'], title: 'UpdateSecurityRequest' })
  .openapi('UpdateSecurityRequest')

const UpdateStorageRequestSchema = z
  .object({
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            '\n            <p>The version of cluster to update from. A successful operation will then generate a new version.</p>\n         ',
        }),
    ),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'provisionedThroughput' },
          description:
            '\n            <p>EBS volume provisioned throughput information.</p>\n         ',
        }),
    ).exactOptional(),
    StorageMode: StorageModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'storageMode' },
          description:
            '\n            <p>Controls storage mode for supported storage tiers.</p>\n         ',
        }),
    ).exactOptional(),
    VolumeSizeGB: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'volumeSizeGB' },
          description: '\n            <p>size of the EBS volume to update.</p>\n         ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CurrentVersion'],
    title: 'UpdateStorageRequest',
    description:
      '\n            <p>Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.</p>\n         ',
  })
  .openapi('UpdateStorageRequest')

const UpdateConfigurationRequestSchema = z
  .object({
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            '\n            <p>The description of the configuration revision.</p>\n         ',
        }),
    ).exactOptional(),
    ServerProperties: BlobSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverProperties' },
          description:
            '\n            <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. \n               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>\n         ',
        }),
    ),
  })
  .openapi({ required: ['ServerProperties'], title: 'UpdateConfigurationRequest' })
  .openapi('UpdateConfigurationRequest')

const UpdateConnectivityRequestSchema = z
  .object({
    ConnectivityInfo: ConnectivityInfoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectivityInfo' },
          description:
            '\n            <p>Information about the broker access configuration.</p>\n         ',
        }),
    ),
    CurrentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currentVersion' },
          description:
            "\n            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>\n         ",
        }),
    ),
  })
  .openapi({
    required: ['ConnectivityInfo', 'CurrentVersion'],
    title: 'UpdateConnectivityRequest',
    description: 'Request body for UpdateConnectivity.',
  })
  .openapi('UpdateConnectivityRequest')

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

export const getV1ClustersClusterArnScramSecretsRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{clusterArn}/scram-secrets',
  description:
    '\n            <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>\n         ',
  operationId: 'ListScramSecrets',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description: '\n            <p>The arn of the cluster.</p>\n         ',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '\n            <p>The maxResults of the query.</p>\n         ',
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
            description: '\n            <p>The nextToken of the query.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListScramSecretsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1ClustersClusterArnScramSecretsRoute = createRoute({
  method: 'post',
  path: '/v1/clusters/{clusterArn}/scram-secrets',
  description:
    '\n            <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>\n         ',
  operationId: 'BatchAssociateScramSecret',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              secretArnList: z
                .array(StringSchema)
                .openapi({
                  description:
                    '\n            <p>List of AWS Secrets Manager secret ARNs.</p>\n         ',
                }),
            })
            .openapi({ required: ['secretArnList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchAssociateScramSecretResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV1ClustersClusterArnScramSecretsRoute = createRoute({
  method: 'patch',
  path: '/v1/clusters/{clusterArn}/scram-secrets',
  description:
    '\n            <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>\n         ',
  operationId: 'BatchDisassociateScramSecret',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              secretArnList: z
                .array(StringSchema)
                .openapi({
                  description:
                    '\n            <p>List of AWS Secrets Manager secret ARNs.</p>\n         ',
                }),
            })
            .openapi({ required: ['secretArnList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDisassociateScramSecretResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1ClustersRoute = createRoute({
  method: 'get',
  path: '/v1/clusters',
  description:
    '\n            <p>Returns a list of all the MSK clusters in the current Region.</p>\n         ',
  operationId: 'ListClusters',
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
      clusterNameFilter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clusterNameFilter',
            in: 'query',
            required: false,
            description:
              '\n            <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
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
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListClustersResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1ClustersRoute = createRoute({
  method: 'post',
  path: '/v1/clusters',
  description: '\n            <p>Creates a new MSK cluster.</p>\n         ',
  operationId: 'CreateCluster',
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
              brokerNodeGroupInfo: z
                .object({
                  BrokerAZDistribution: BrokerAZDistributionSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'brokerAZDistribution' },
                        description:
                          "\n            <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>\n         <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>\n         ",
                      }),
                  ).exactOptional(),
                  ClientSubnets: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'clientSubnets' },
                        description:
                          "\n            <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't occupy the Availability Zone with ID use use1-az3.</p>\n         ",
                      }),
                  ).exactOptional(),
                  InstanceType: StringMin5Max32Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'instanceType' },
                        description:
                          '\n            <p>The type of Amazon EC2 instances to use for Apache Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,\nkafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.</p>\n         ',
                      }),
                  ).exactOptional(),
                  SecurityGroups: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'securityGroups' },
                        description:
                          "\n            <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>\n         ",
                      }),
                  ).exactOptional(),
                  StorageInfo: StorageInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'storageInfo' },
                        description:
                          '\n            <p>Contains information about storage volumes attached to MSK broker nodes.</p>\n         ',
                      }),
                  ).exactOptional(),
                  ConnectivityInfo: ConnectivityInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'connectivityInfo' },
                        description:
                          '\n            <p>Information about the broker access configuration.</p>\n         ',
                      }),
                  ).exactOptional(),
                  ZoneIds: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'zoneIds' },
                        description:
                          '\n            <p>The list of zoneIds for the cluster in the virtual private cloud (VPC).</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '\n            <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>\n         ',
                  required: [],
                }),
              clientAuthentication: z
                .object({
                  Sasl: SaslSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sasl' },
                        description:
                          '\n            <p>Details for ClientAuthentication using SASL.</p>\n         ',
                      }),
                  ).exactOptional(),
                  Tls: TlsSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'tls' },
                        description:
                          '\n            <p>Details for ClientAuthentication using TLS.</p>\n         ',
                      }),
                  ).exactOptional(),
                  Unauthenticated: UnauthenticatedSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'unauthenticated' },
                        description:
                          '\n            <p>Contains information about unauthenticated traffic to the cluster.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Includes all client authentication information.</p>\n         ',
                  required: [],
                }),
              clusterName: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description: '\n            <p>The name of the cluster.</p>\n         ',
                }),
              configurationInfo: z
                .object({
                  Arn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'arn' },
                        description:
                          '\n            <p>ARN of the configuration to use.</p>\n         ',
                      }),
                  ).exactOptional(),
                  Revision: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'revision' },
                        description:
                          '\n            <p>The revision of the configuration to use.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Specifies the configuration to use for the brokers.</p>\n         ',
                  required: [],
                }),
              encryptionInfo: z
                .object({
                  EncryptionAtRest: EncryptionAtRestSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'encryptionAtRest' },
                        description:
                          '\n            <p>The data-volume encryption details.</p>\n         ',
                      }),
                  ).exactOptional(),
                  EncryptionInTransit: EncryptionInTransitSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'encryptionInTransit' },
                        description:
                          '\n            <p>The details for encryption in transit.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>\n         ',
                  required: [],
                }),
              enhancedMonitoring: z
                .enum(['DEFAULT', 'PER_BROKER', 'PER_TOPIC_PER_BROKER', 'PER_TOPIC_PER_PARTITION'])
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>\n         ',
                }),
              openMonitoring: z
                .object({
                  Prometheus: PrometheusInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'prometheus' },
                        description: '\n            <p>Prometheus settings.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>JMX and Node monitoring for the MSK cluster.</p>\n         ',
                  required: [],
                }),
              kafkaVersion: z
                .string()
                .min(1)
                .max(128)
                .openapi({
                  description: '\n            <p>The version of Apache Kafka.</p>\n         ',
                }),
              loggingInfo: z
                .object({
                  BrokerLogs: BrokerLogsSchema.and(
                    z.any().openapi({ xml: { name: 'brokerLogs' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
              numberOfBrokerNodes: z
                .int()
                .min(1)
                .max(15)
                .openapi({
                  description:
                    '\n            <p>The number of broker nodes in the cluster.</p>\n         ',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Create tags when creating the cluster.</p>\n         ',
                }),
              storageMode: z
                .enum(['LOCAL', 'TIERED'])
                .exactOptional()
                .openapi({
                  description: 'Controls storage mode for various supported storage tiers.',
                }),
            })
            .openapi({
              required: [
                'brokerNodeGroupInfo',
                'clusterName',
                'kafkaVersion',
                'numberOfBrokerNodes',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateClusterResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getApiV2ClustersRoute = createRoute({
  method: 'get',
  path: '/api/v2/clusters',
  description:
    '\n            <p>Returns a list of all the MSK clusters in the current Region.</p>\n         ',
  operationId: 'ListClustersV2',
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
      clusterNameFilter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clusterNameFilter',
            in: 'query',
            required: false,
            description:
              '\n            <p>Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
      clusterTypeFilter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clusterTypeFilter',
            in: 'query',
            required: false,
            description:
              '\n            <p>Specify either PROVISIONED or SERVERLESS.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
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
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListClustersV2ResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postApiV2ClustersRoute = createRoute({
  method: 'post',
  path: '/api/v2/clusters',
  description: '\n            <p>Creates a new MSK cluster.</p>\n         ',
  operationId: 'CreateClusterV2',
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
              clusterName: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description: '\n            <p>The name of the cluster.</p>\n         ',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>A map of tags that you want the cluster to have.</p>\n         ',
                }),
              provisioned: z
                .object({
                  BrokerNodeGroupInfo: BrokerNodeGroupInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'brokerNodeGroupInfo' },
                        description:
                          '\n            <p>Information about the brokers.</p>\n         ',
                      }),
                  ).exactOptional(),
                  ClientAuthentication: ClientAuthenticationSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'clientAuthentication' },
                        description:
                          '\n            <p>Includes all client authentication information.</p>\n         ',
                      }),
                  ).exactOptional(),
                  ConfigurationInfo: ConfigurationInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'configurationInfo' },
                        description:
                          '\n            <p>Represents the configuration that you want Amazon MSK to use for the brokers in a cluster.</p>\n         ',
                      }),
                  ).exactOptional(),
                  EncryptionInfo: EncryptionInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'encryptionInfo' },
                        description:
                          '\n            <p>Includes all encryption-related information.</p>\n         ',
                      }),
                  ).exactOptional(),
                  EnhancedMonitoring: EnhancedMonitoringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'enhancedMonitoring' },
                        description:
                          '\n            <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>\n         ',
                      }),
                  ).exactOptional(),
                  OpenMonitoring: OpenMonitoringInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'openMonitoring' },
                        description:
                          '\n            <p>The settings for open monitoring.</p>\n         ',
                      }),
                  ).exactOptional(),
                  KafkaVersion: StringMin1Max128Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'kafkaVersion' },
                        description:
                          '\n            <p>The Apache Kafka version that you want for the cluster.</p>\n         ',
                      }),
                  ).exactOptional(),
                  LoggingInfo: LoggingInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'loggingInfo' },
                        description:
                          '\n            <p>Log delivery information for the cluster.</p>\n         ',
                      }),
                  ).exactOptional(),
                  NumberOfBrokerNodes: IntegerMin1Max15Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'numberOfBrokerNodes' },
                        description:
                          '\n            <p>The number of broker nodes in the cluster.</p>\n         ',
                      }),
                  ).exactOptional(),
                  StorageMode: StorageModeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'storageMode' },
                        description:
                          '\n            <p>This controls storage mode for supported storage tiers.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: '\n            <p>Provisioned cluster request.</p>\n         ',
                  required: [],
                }),
              serverless: z
                .object({
                  VpcConfigs: ListOfVpcConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'vpcConfigs' },
                        description:
                          '\n            <p>The configuration of the Amazon VPCs for the cluster.</p>\n         ',
                      }),
                  ).exactOptional(),
                  ClientAuthentication: ServerlessClientAuthenticationSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'clientAuthentication' },
                        description:
                          '\n            <p>Includes all client authentication information.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: '\n            <p>Serverless cluster request.</p>\n         ',
                  required: [],
                }),
            })
            .openapi({ required: ['clusterName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateClusterV2ResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1ConfigurationsRoute = createRoute({
  method: 'get',
  path: '/v1/configurations',
  description:
    '\n            <p>Returns a list of all the MSK configurations in this Region.</p>\n         ',
  operationId: 'ListConfigurations',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListConfigurationsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const postV1ConfigurationsRoute = createRoute({
  method: 'post',
  path: '/v1/configurations',
  description: '\n            <p>Creates a new MSK configuration.</p>\n         ',
  operationId: 'CreateConfiguration',
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
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>The description of the configuration.</p>\n         ',
                }),
              kafkaVersions: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>\n         ',
                }),
              name: z
                .string()
                .openapi({
                  description: '\n            <p>The name of the configuration.</p>\n         ',
                }),
              serverProperties: z
                .string()
                .openapi({
                  description:
                    '\n            <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. \n               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>\n         ',
                }),
            })
            .openapi({ required: ['name', 'serverProperties'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConfigurationResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postV1VpcConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/vpc-connection',
  description: '\n            <p>Creates a new MSK VPC connection.</p>\n         ',
  operationId: 'CreateVpcConnection',
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
              targetClusterArn: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The cluster Amazon Resource Name (ARN) for the VPC connection.</p>\n         ',
                }),
              authentication: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The authentication type of VPC connection.</p>\n         ',
                }),
              vpcId: z
                .string()
                .openapi({
                  description: '\n            <p>The VPC ID of VPC connection.</p>\n         ',
                }),
              clientSubnets: z
                .array(StringSchema)
                .openapi({
                  description: '\n            <p>The list of client subnets.</p>\n         ',
                }),
              securityGroups: z
                .array(StringSchema)
                .openapi({
                  description: '\n            <p>The list of security groups.</p>\n         ',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>A map of tags for the VPC connection.</p>\n         ',
                }),
            })
            .openapi({
              required: [
                'targetClusterArn',
                'authentication',
                'vpcId',
                'clientSubnets',
                'securityGroups',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcConnectionResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1ClustersClusterArnRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{clusterArn}',
  description:
    '\n            <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>\n         ',
  operationId: 'DescribeCluster',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClusterResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const deleteV1ClustersClusterArnRoute = createRoute({
  method: 'delete',
  path: '/v1/clusters/{clusterArn}',
  description:
    '\n            <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>\n         ',
  operationId: 'DeleteCluster',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      currentVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'currentVersion',
            in: 'query',
            required: false,
            description: '\n            <p>The current version of the MSK cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteClusterResponseSchema } },
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

export const getV1ClustersClusterArnPolicyRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{clusterArn}/policy',
  description:
    '\n            <p>Get the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>\n         ',
  operationId: 'GetClusterPolicy',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n            ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetClusterPolicyResponseSchema } },
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

export const putV1ClustersClusterArnPolicyRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/policy',
  description:
    '\n            <p>Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.</p>\n         ',
  operationId: 'PutClusterPolicy',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentVersion: z
                .string()
                .exactOptional()
                .openapi({ description: '\n            <p>The policy version.</p>\n         ' }),
              policy: z
                .string()
                .openapi({ description: '\n            <p>The policy.</p>\n         ' }),
            })
            .openapi({ required: ['policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutClusterPolicyResponseSchema } },
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
  },
})

export const deleteV1ClustersClusterArnPolicyRoute = createRoute({
  method: 'delete',
  path: '/v1/clusters/{clusterArn}/policy',
  description:
    '\n            <p>Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>\n         ',
  operationId: 'DeleteClusterPolicy',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteClusterPolicyResponseSchema } },
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

export const getV1ConfigurationsArnRoute = createRoute({
  method: 'get',
  path: '/v1/configurations/{arn}',
  description: '\n            <p>Returns a description of this MSK configuration.</p>\n         ',
  operationId: 'DescribeConfiguration',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putV1ConfigurationsArnRoute = createRoute({
  method: 'put',
  path: '/v1/configurations/{arn}',
  description: '\n            <p>Updates an MSK configuration.</p>\n         ',
  operationId: 'UpdateConfiguration',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the configuration.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>The description of the configuration revision.</p>\n         ',
                }),
              serverProperties: z
                .string()
                .openapi({
                  description:
                    '\n            <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. \n               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>\n         ',
                }),
            })
            .openapi({ required: ['serverProperties'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteV1ConfigurationsArnRoute = createRoute({
  method: 'delete',
  path: '/v1/configurations/{arn}',
  description: '\n            <p>Deletes an MSK Configuration.</p>\n         ',
  operationId: 'DeleteConfiguration',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConfigurationResponseSchema } },
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

export const getV1VpcConnectionArnRoute = createRoute({
  method: 'get',
  path: '/v1/vpc-connection/{arn}',
  description: '\n            <p>Returns a description of this MSK VPC connection.</p>\n         ',
  operationId: 'DescribeVpcConnection',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p>\n   ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVpcConnectionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteV1VpcConnectionArnRoute = createRoute({
  method: 'delete',
  path: '/v1/vpc-connection/{arn}',
  description: '\n            <p>Deletes a MSK VPC connection.</p>\n         ',
  operationId: 'DeleteVpcConnection',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVpcConnectionResponseSchema } },
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

export const getApiV2ClustersClusterArnRoute = createRoute({
  method: 'get',
  path: '/api/v2/clusters/{clusterArn}',
  description:
    '\n            <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>\n         ',
  operationId: 'DescribeClusterV2',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClusterV2ResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const getV1OperationsClusterOperationArnRoute = createRoute({
  method: 'get',
  path: '/v1/operations/{clusterOperationArn}',
  description:
    '\n            <p>Returns a description of the cluster operation specified by the ARN.</p>\n         ',
  operationId: 'DescribeClusterOperation',
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
      clusterOperationArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterOperationArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClusterOperationResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const getApiV2OperationsClusterOperationArnRoute = createRoute({
  method: 'get',
  path: '/api/v2/operations/{clusterOperationArn}',
  description:
    '\n            <p>Returns a description of the cluster operation specified by the ARN.</p>\n',
  operationId: 'DescribeClusterOperationV2',
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
      clusterOperationArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterOperationArn',
            in: 'path',
            required: true,
            description: 'ARN of the cluster operation to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClusterOperationV2ResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1ConfigurationsArnRevisionsRevisionRoute = createRoute({
  method: 'get',
  path: '/v1/configurations/{arn}/revisions/{revision}',
  description:
    '\n            <p>Returns a description of this revision of the configuration.</p>\n         ',
  operationId: 'DescribeConfigurationRevision',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
      revision: z
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
            name: 'revision',
            in: 'path',
            required: true,
            description:
              '\n            <p>A string that uniquely identifies a revision of an MSK configuration.</p>\n         ',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigurationRevisionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getV1ClustersClusterArnBootstrapBrokersRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{clusterArn}/bootstrap-brokers',
  description:
    '\n            <p>A list of brokers that a client application can use to bootstrap.</p>\n         ',
  operationId: 'GetBootstrapBrokers',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBootstrapBrokersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const getV1CompatibleKafkaVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/compatible-kafka-versions',
  description:
    '\n            <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>\n         ',
  operationId: 'GetCompatibleKafkaVersions',
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
      clusterArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'query',
            required: false,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster check.</p>\n            ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCompatibleKafkaVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1ClustersClusterArnOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{clusterArn}/operations',
  description:
    '\n            <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>\n         ',
  operationId: 'ListClusterOperations',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListClusterOperationsResponseSchema } },
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
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getApiV2ClustersClusterArnOperationsRoute = createRoute({
  method: 'get',
  path: '/api/v2/clusters/{clusterArn}/operations',
  description:
    '\n            <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>\n         ',
  operationId: 'ListClusterOperationsV2',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description: 'The arn of the cluster whose operations are being requested.',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maxResults of the query.',
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
            description: 'The nextToken of the query.',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListClusterOperationsV2ResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1ConfigurationsArnRevisionsRoute = createRoute({
  method: 'get',
  path: '/v1/configurations/{arn}/revisions',
  description:
    '\n            <p>Returns a list of all the MSK configurations in this Region.</p>\n         ',
  operationId: 'ListConfigurationRevisions',
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
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>\n         ',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListConfigurationRevisionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getV1KafkaVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/kafka-versions',
  description: '\n            <p>Returns a list of Apache Kafka versions.</p>\n         ',
  operationId: 'ListKafkaVersions',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</p>',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListKafkaVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const getV1ClustersClusterArnNodesRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{clusterArn}/nodes',
  description: '\n            <p>Returns a list of the broker nodes in the cluster.</p>\n         ',
  operationId: 'ListNodes',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListNodesResponseSchema } },
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

export const getV1TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v1/tags/{resourceArn}',
  description:
    '\n            <p>Returns a list of the tags associated with the specified resource.</p>\n         ',
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
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              "\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>\n         ",
            schema: { type: 'string' },
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
  },
})

export const postV1TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/v1/tags/{resourceArn}',
  description: '\n            <p>Adds tags to the specified MSK resource.</p>\n         ',
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
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              "\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>\n         ",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({
                  description:
                    '\n            <p>The key-value pair for the resource tag.</p>\n         ',
                }),
            })
            .openapi({ required: ['tags'] }),
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV1ClustersClusterArnClientVpcConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{clusterArn}/client-vpc-connections',
  description:
    '\n            <p>Returns a list of all the VPC connections in this Region.</p>\n         ',
  operationId: 'ListClientVpcConnections',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListClientVpcConnectionsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const getV1VpcConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/vpc-connections',
  description:
    '\n            <p>Returns a list of all the VPC connections in this Region.</p>\n         ',
  operationId: 'ListVpcConnections',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '\n            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>\n         ',
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
            description:
              '\n            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. \n            To get the next batch, provide this token in your next request.</p>\n         ',
            schema: { type: 'string' },
          },
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
      content: { 'application/json': { schema: ListVpcConnectionsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const putV1ClustersClusterArnClientVpcConnectionRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/client-vpc-connection',
  description: '\n            <p>Returns empty response.</p>\n         ',
  operationId: 'RejectClientVpcConnection',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              vpcConnectionArn: z
                .string()
                .openapi({
                  description: '\n            <p>The VPC connection ARN.</p>\n         ',
                }),
            })
            .openapi({ required: ['vpcConnectionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectClientVpcConnectionResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const putV1ClustersClusterArnRebootBrokerRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/reboot-broker',
  description: 'Reboots brokers.',
  operationId: 'RebootBroker',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              brokerIds: z
                .array(StringSchema)
                .openapi({
                  description:
                    '\n            <p>The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.</p>\n         ',
                }),
            })
            .openapi({ required: ['brokerIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebootBrokerResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1TagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/v1/tags/{resourceArn}#tagKeys',
  description:
    '\n            <p>Removes the tags associated with the keys that are provided in the query.</p>\n         ',
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
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              "\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>\n         ",
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              "\n            <p>Tag keys must be unique for a given cluster. In addition, the following restrictions apply:</p>\n            <ul>\n               <li>\n                  <p>Each tag key must be unique. If you add a tag with a key that's already in\n                  use, your new tag overwrites the existing key-value pair. </p>\n               </li>\n               <li>\n                  <p>You can't start a tag key with aws: because this prefix is reserved for use\n                  by  AWS.  AWS creates tags that begin with this prefix on your behalf, but\n                  you can't edit or delete them.</p>\n               </li>\n               <li>\n                  <p>Tag keys must be between 1 and 128 Unicode characters in length.</p>\n               </li>\n               <li>\n                  <p>Tag keys must consist of the following characters: Unicode letters, digits,\n                  white space, and the following special characters: _ . / = + -\n                     @.</p>\n               </li>\n            </ul>\n         ",
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
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
  },
})

export const putV1ClustersClusterArnNodesCountRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/nodes/count',
  description: '\n            <p>Updates the number of broker nodes in the cluster.</p>\n         ',
  operationId: 'UpdateBrokerCount',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentVersion: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The version of cluster to update from. A successful operation will then generate a new version.</p>\n         ',
                }),
              targetNumberOfBrokerNodes: z
                .int()
                .min(1)
                .max(15)
                .openapi({
                  description:
                    '\n            <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>\n         ',
                }),
            })
            .openapi({ required: ['currentVersion', 'targetNumberOfBrokerNodes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBrokerCountResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const putV1ClustersClusterArnNodesTypeRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/nodes/type',
  description: '\n            <p>Updates EC2 instance type.</p>\n         ',
  operationId: 'UpdateBrokerType',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentVersion: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p>\n         ',
                }),
              targetInstanceType: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p>\n         ',
                }),
            })
            .openapi({ required: ['currentVersion', 'targetInstanceType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBrokerTypeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1ClustersClusterArnNodesStorageRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/nodes/storage',
  description:
    '\n            <p>Updates the EBS storage associated with MSK brokers.</p>\n         ',
  operationId: 'UpdateBrokerStorage',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentVersion: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The version of cluster to update from. A successful operation will then generate a new version.</p>\n         ',
                }),
              targetBrokerEBSVolumeInfo: z
                .array(BrokerEBSVolumeInfoSchema)
                .openapi({
                  description:
                    '\n            <p>Describes the target volume size and the ID of the broker to apply the update to.</p>\n         ',
                }),
            })
            .openapi({ required: ['currentVersion', 'targetBrokerEBSVolumeInfo'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBrokerStorageResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const putV1ClustersClusterArnConnectivityRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/connectivity',
  description: "\n            <p>Updates the cluster's connectivity configuration.</p>\n         ",
  operationId: 'UpdateConnectivity',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the configuration.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectivityInfo: z
                .object({
                  PublicAccess: PublicAccessSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'publicAccess' },
                        description:
                          '\n            <p>Public access control for brokers.</p>\n         ',
                      }),
                  ).exactOptional(),
                  VpcConnectivity: VpcConnectivitySchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'vpcConnectivity' },
                        description:
                          '\n            <p>VPC connectivity access control for brokers.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '\n            <p>Information about the broker access configuration.</p>\n         ',
                  required: [],
                }),
              currentVersion: z
                .string()
                .openapi({
                  description:
                    "\n            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>\n         ",
                }),
            })
            .openapi({ required: ['connectivityInfo', 'currentVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectivityResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putV1ClustersClusterArnConfigurationRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/configuration',
  description:
    '\n            <p>Updates the cluster with the configuration that is specified in the request body.</p>\n         ',
  operationId: 'UpdateClusterConfiguration',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configurationInfo: z
                .object({
                  Arn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'arn' },
                        description:
                          '\n            <p>ARN of the configuration to use.</p>\n         ',
                      }),
                  ).exactOptional(),
                  Revision: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'revision' },
                        description:
                          '\n            <p>The revision of the configuration to use.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '\n            <p>Specifies the configuration to use for the brokers.</p>\n         ',
                  required: [],
                }),
              currentVersion: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The version of the cluster that needs to be updated.</p>\n         ',
                }),
            })
            .openapi({ required: ['configurationInfo', 'currentVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateClusterConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putV1ClustersClusterArnVersionRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/version',
  description: '\n            <p>Updates the Apache Kafka version for the cluster.</p>\n         ',
  operationId: 'UpdateClusterKafkaVersion',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>\n            ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configurationInfo: z
                .object({
                  Arn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'arn' },
                        description:
                          '\n            <p>ARN of the configuration to use.</p>\n         ',
                      }),
                  ).exactOptional(),
                  Revision: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'revision' },
                        description:
                          '\n            <p>The revision of the configuration to use.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Specifies the configuration to use for the brokers.</p>\n         ',
                  required: [],
                }),
              currentVersion: z
                .string()
                .openapi({
                  description: '\n            <p>Current cluster version.</p>\n            ',
                }),
              targetKafkaVersion: z
                .string()
                .openapi({
                  description: '\n            <p>Target Kafka version.</p>\n            ',
                }),
            })
            .openapi({ required: ['currentVersion', 'targetKafkaVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateClusterKafkaVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1ClustersClusterArnMonitoringRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/monitoring',
  description:
    '\n            <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>\n         ',
  operationId: 'UpdateMonitoring',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentVersion: z
                .string()
                .openapi({
                  description:
                    "\n            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>\n         ",
                }),
              enhancedMonitoring: z
                .enum(['DEFAULT', 'PER_BROKER', 'PER_TOPIC_PER_BROKER', 'PER_TOPIC_PER_PARTITION'])
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>\n         ',
                }),
              openMonitoring: z
                .object({
                  Prometheus: PrometheusInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'prometheus' },
                        description: '\n            <p>Prometheus settings.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>JMX and Node monitoring for the MSK cluster.</p>\n         ',
                  required: [],
                }),
              loggingInfo: z
                .object({
                  BrokerLogs: BrokerLogsSchema.and(
                    z.any().openapi({ xml: { name: 'brokerLogs' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
            })
            .openapi({ required: ['currentVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMonitoringResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
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

export const patchV1ClustersClusterArnSecurityRoute = createRoute({
  method: 'patch',
  path: '/v1/clusters/{clusterArn}/security',
  description:
    '\n            <p>Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.</p>\n         ',
  operationId: 'UpdateSecurity',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientAuthentication: z
                .object({
                  Sasl: SaslSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sasl' },
                        description:
                          '\n            <p>Details for ClientAuthentication using SASL.</p>\n         ',
                      }),
                  ).exactOptional(),
                  Tls: TlsSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'tls' },
                        description:
                          '\n            <p>Details for ClientAuthentication using TLS.</p>\n         ',
                      }),
                  ).exactOptional(),
                  Unauthenticated: UnauthenticatedSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'unauthenticated' },
                        description:
                          '\n            <p>Contains information about unauthenticated traffic to the cluster.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Includes all client authentication information.</p>\n         ',
                  required: [],
                }),
              currentVersion: z
                .string()
                .openapi({
                  description:
                    "\n            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>\n         ",
                }),
              encryptionInfo: z
                .object({
                  EncryptionAtRest: EncryptionAtRestSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'encryptionAtRest' },
                        description:
                          '\n            <p>The data-volume encryption details.</p>\n         ',
                      }),
                  ).exactOptional(),
                  EncryptionInTransit: EncryptionInTransitSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'encryptionInTransit' },
                        description:
                          '\n            <p>The details for encryption in transit.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>\n         ',
                  required: [],
                }),
            })
            .openapi({ required: ['currentVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSecurityResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1ClustersClusterArnStorageRoute = createRoute({
  method: 'put',
  path: '/v1/clusters/{clusterArn}/storage',
  description: 'Updates cluster broker volume size (or) sets cluster storage mode to TIERED.',
  operationId: 'UpdateStorage',
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
      clusterArn: z
        .string()
        .openapi({
          param: {
            name: 'clusterArn',
            in: 'path',
            required: true,
            description:
              '\n            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>\n         ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentVersion: z
                .string()
                .openapi({
                  description:
                    '\n            <p>The version of cluster to update from. A successful operation will then generate a new version.</p>\n         ',
                }),
              provisionedThroughput: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'enabled' },
                        description:
                          '\n            <p>Provisioned throughput is enabled or not.</p>\n         ',
                      }),
                  ).exactOptional(),
                  VolumeThroughput: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'volumeThroughput' },
                        description:
                          '\n            <p>Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.</p>\n         ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '\n            <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>\n         ',
                  required: [],
                }),
              storageMode: z
                .enum(['LOCAL', 'TIERED'])
                .exactOptional()
                .openapi({
                  description: 'Controls storage mode for various supported storage tiers.',
                }),
              volumeSizeGB: z
                .int()
                .exactOptional()
                .openapi({
                  description: '\n            <p>size of the EBS volume to update.</p>\n         ',
                }),
            })
            .openapi({ required: ['currentVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateStorageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})
