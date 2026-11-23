import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const DoubleSchema = z.float64().openapi('Double')

const AccessKeyDetailsSchema = z
  .object({
    AccessKeyId: StringSchema.exactOptional().openapi({
      xml: { name: 'accessKeyId' },
      description: 'The access key ID of the user.',
    }),
    PrincipalId: StringSchema.exactOptional().openapi({
      xml: { name: 'principalId' },
      description: 'The principal ID of the user.',
    }),
    UserName: StringSchema.exactOptional().openapi({
      xml: { name: 'userName' },
      description: 'The name of the user.',
    }),
    UserType: StringSchema.exactOptional().openapi({
      xml: { name: 'userType' },
      description: 'The type of the user.',
    }),
  })
  .openapi({ description: 'Contains information about the access keys.', required: [] })
  .openapi('AccessKeyDetails')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const OwnerSchema = z
  .object({
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description:
        'The canonical user ID of the bucket owner. For information about locating your canonical user ID see <a href="https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId">Finding Your Account Canonical User ID.</a> ',
    }),
  })
  .openapi({ description: 'Contains information on the owner of the bucket.', required: [] })
  .openapi('Owner')

const TagSchema = z
  .object({
    Key: StringSchema.exactOptional().openapi({
      xml: { name: 'key' },
      description: 'The EC2 instance tag key.',
    }),
    Value: StringSchema.exactOptional().openapi({
      xml: { name: 'value' },
      description: 'The EC2 instance tag value.',
    }),
  })
  .openapi({
    description: 'Contains information about a tag associated with the EC2 instance.',
    required: [],
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const DefaultServerSideEncryptionSchema = z
  .object({
    EncryptionType: StringSchema.exactOptional().openapi({
      xml: { name: 'encryptionType' },
      description: 'The type of encryption used for objects within the S3 bucket.',
    }),
    KmsMasterKeyArn: StringSchema.exactOptional().openapi({
      xml: { name: 'kmsMasterKeyArn' },
      description:
        'The Amazon Resource Name (ARN) of the KMS encryption key. Only available if the bucket <code>EncryptionType</code> is <code>aws:kms</code>.',
    }),
  })
  .openapi({
    description:
      'Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information.',
    required: [],
  })
  .openapi('DefaultServerSideEncryption')

const BooleanSchema = z.boolean().openapi('Boolean')

const AccessControlListSchema = z
  .object({
    AllowsPublicReadAccess: BooleanSchema.exactOptional().openapi({
      xml: { name: 'allowsPublicReadAccess' },
      description:
        'A value that indicates whether public read access for the bucket is enabled through an Access Control List (ACL).',
    }),
    AllowsPublicWriteAccess: BooleanSchema.exactOptional().openapi({
      xml: { name: 'allowsPublicWriteAccess' },
      description:
        'A value that indicates whether public write access for the bucket is enabled through an Access Control List (ACL).',
    }),
  })
  .openapi({
    description: 'Contains information on the current access control policies for the bucket.',
    required: [],
  })
  .openapi('AccessControlList')

const BucketPolicySchema = z
  .object({
    AllowsPublicReadAccess: BooleanSchema.exactOptional().openapi({
      xml: { name: 'allowsPublicReadAccess' },
      description:
        'A value that indicates whether public read access for the bucket is enabled through a bucket policy.',
    }),
    AllowsPublicWriteAccess: BooleanSchema.exactOptional().openapi({
      xml: { name: 'allowsPublicWriteAccess' },
      description:
        'A value that indicates whether public write access for the bucket is enabled through a bucket policy.',
    }),
  })
  .openapi({
    description: 'Contains information on the current bucket policies for the S3 bucket.',
    required: [],
  })
  .openapi('BucketPolicy')

const BlockPublicAccessSchema = z
  .object({
    IgnorePublicAcls: BooleanSchema.exactOptional().openapi({
      xml: { name: 'ignorePublicAcls' },
      description: 'Indicates if S3 Block Public Access is set to <code>IgnorePublicAcls</code>.',
    }),
    RestrictPublicBuckets: BooleanSchema.exactOptional().openapi({
      xml: { name: 'restrictPublicBuckets' },
      description:
        'Indicates if S3 Block Public Access is set to <code>RestrictPublicBuckets</code>.',
    }),
    BlockPublicAcls: BooleanSchema.exactOptional().openapi({
      xml: { name: 'blockPublicAcls' },
      description: 'Indicates if S3 Block Public Access is set to <code>BlockPublicAcls</code>.',
    }),
    BlockPublicPolicy: BooleanSchema.exactOptional().openapi({
      xml: { name: 'blockPublicPolicy' },
      description: 'Indicates if S3 Block Public Access is set to <code>BlockPublicPolicy</code>.',
    }),
  })
  .openapi({
    description:
      'Contains information on how the bucker owner\'s S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. ',
    required: [],
  })
  .openapi('BlockPublicAccess')

const BucketLevelPermissionsSchema = z
  .object({
    AccessControlList: AccessControlListSchema.exactOptional().openapi({
      xml: { name: 'accessControlList' },
      description: 'Contains information on how Access Control Policies are applied to the bucket.',
    }),
    BucketPolicy: BucketPolicySchema.exactOptional().openapi({
      xml: { name: 'bucketPolicy' },
      description: 'Contains information on the bucket policies for the S3 bucket.',
    }),
    BlockPublicAccess: BlockPublicAccessSchema.exactOptional().openapi({
      xml: { name: 'blockPublicAccess' },
      description:
        'Contains information on which account level S3 Block Public Access settings are applied to the S3 bucket.',
    }),
  })
  .openapi({
    description: 'Contains information about the bucket level permissions for the S3 bucket.',
    required: [],
  })
  .openapi('BucketLevelPermissions')

const AccountLevelPermissionsSchema = z
  .object({
    BlockPublicAccess: BlockPublicAccessSchema.exactOptional().openapi({
      xml: { name: 'blockPublicAccess' },
      description: "Describes the S3 Block Public Access settings of the bucket's parent account.",
    }),
  })
  .openapi({
    description: 'Contains information about the account level permissions on the S3 bucket.',
    required: [],
  })
  .openapi('AccountLevelPermissions')

const PermissionConfigurationSchema = z
  .object({
    BucketLevelPermissions: BucketLevelPermissionsSchema.exactOptional().openapi({
      xml: { name: 'bucketLevelPermissions' },
      description: 'Contains information about the bucket level permissions for the S3 bucket.',
    }),
    AccountLevelPermissions: AccountLevelPermissionsSchema.exactOptional().openapi({
      xml: { name: 'accountLevelPermissions' },
      description: 'Contains information about the account level permissions on the S3 bucket.',
    }),
  })
  .openapi({
    description: 'Contains information about how permissions are configured for the S3 bucket.',
    required: [],
  })
  .openapi('PermissionConfiguration')

const PublicAccessSchema = z
  .object({
    PermissionConfiguration: PermissionConfigurationSchema.exactOptional().openapi({
      xml: { name: 'permissionConfiguration' },
      description: 'Contains information about how permissions are configured for the S3 bucket.',
    }),
    EffectivePermission: StringSchema.exactOptional().openapi({
      xml: { name: 'effectivePermission' },
      description:
        'Describes the effective permission on this bucket after factoring all attached policies.',
    }),
  })
  .openapi({
    description: 'Describes the public access policies that apply to the S3 bucket.',
    required: [],
  })
  .openapi('PublicAccess')

const S3BucketDetailSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The Amazon Resource Name (ARN) of the S3 bucket.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the S3 bucket.',
    }),
    Type: StringSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description: 'Describes whether the bucket is a source or destination bucket.',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The date and time the bucket was created at.',
    }),
    Owner: OwnerSchema.exactOptional().openapi({
      xml: { name: 'owner' },
      description: 'The owner of the S3 bucket.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'All tags attached to the S3 bucket',
    }),
    DefaultServerSideEncryption: DefaultServerSideEncryptionSchema.exactOptional().openapi({
      xml: { name: 'defaultServerSideEncryption' },
      description: 'Describes the server side encryption method used in the S3 bucket.',
    }),
    PublicAccess: PublicAccessSchema.exactOptional().openapi({
      xml: { name: 'publicAccess' },
      description: 'Describes the public access policies that apply to the S3 bucket.',
    }),
  })
  .openapi({ description: 'Contains information on the S3 bucket.', required: [] })
  .openapi('S3BucketDetail')

const S3BucketDetailsSchema = z.array(S3BucketDetailSchema).openapi('S3BucketDetails')

const IamInstanceProfileSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The profile ARN of the EC2 instance.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The profile ID of the EC2 instance.',
    }),
  })
  .openapi({ description: 'Contains information about the EC2 instance profile.', required: [] })
  .openapi('IamInstanceProfile')

const Ipv6AddressesSchema = z.array(StringSchema).openapi('Ipv6Addresses')

const PrivateIpAddressDetailsSchema = z
  .object({
    PrivateDnsName: StringSchema.exactOptional().openapi({
      xml: { name: 'privateDnsName' },
      description: 'The private DNS name of the EC2 instance.',
    }),
    PrivateIpAddress: StringSchema.exactOptional().openapi({
      xml: { name: 'privateIpAddress' },
      description: 'The private IP address of the EC2 instance.',
    }),
  })
  .openapi({
    description: 'Contains other private IP address information of the EC2 instance.',
    required: [],
  })
  .openapi('PrivateIpAddressDetails')

const PrivateIpAddressesSchema = z
  .array(PrivateIpAddressDetailsSchema)
  .openapi('PrivateIpAddresses')

const SecurityGroupSchema = z
  .object({
    GroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'groupId' },
      description: 'The security group ID of the EC2 instance.',
    }),
    GroupName: StringSchema.exactOptional().openapi({
      xml: { name: 'groupName' },
      description: 'The security group name of the EC2 instance.',
    }),
  })
  .openapi({
    description: 'Contains information about the security groups associated with the EC2 instance.',
    required: [],
  })
  .openapi('SecurityGroup')

const SecurityGroupsSchema = z.array(SecurityGroupSchema).openapi('SecurityGroups')

const NetworkInterfaceSchema = z
  .object({
    Ipv6Addresses: Ipv6AddressesSchema.exactOptional().openapi({
      xml: { name: 'ipv6Addresses' },
      description: 'A list of IPv6 addresses for the EC2 instance.',
    }),
    NetworkInterfaceId: StringSchema.exactOptional().openapi({
      xml: { name: 'networkInterfaceId' },
      description: 'The ID of the network interface.',
    }),
    PrivateDnsName: StringSchema.exactOptional().openapi({
      xml: { name: 'privateDnsName' },
      description: 'The private DNS name of the EC2 instance.',
    }),
    PrivateIpAddress: StringSchema.exactOptional().openapi({
      xml: { name: 'privateIpAddress' },
      description: 'The private IP address of the EC2 instance.',
    }),
    PrivateIpAddresses: PrivateIpAddressesSchema.exactOptional().openapi({
      xml: { name: 'privateIpAddresses' },
      description: 'Other private IP address information of the EC2 instance.',
    }),
    PublicDnsName: StringSchema.exactOptional().openapi({
      xml: { name: 'publicDnsName' },
      description: 'The public DNS name of the EC2 instance.',
    }),
    PublicIp: StringSchema.exactOptional().openapi({
      xml: { name: 'publicIp' },
      description: 'The public IP address of the EC2 instance.',
    }),
    SecurityGroups: SecurityGroupsSchema.exactOptional().openapi({
      xml: { name: 'securityGroups' },
      description: 'The security groups associated with the EC2 instance.',
    }),
    SubnetId: StringSchema.exactOptional().openapi({
      xml: { name: 'subnetId' },
      description: 'The subnet ID of the EC2 instance.',
    }),
    VpcId: StringSchema.exactOptional().openapi({
      xml: { name: 'vpcId' },
      description: 'The VPC ID of the EC2 instance.',
    }),
  })
  .openapi({
    description: 'Contains information about the elastic network interface of the EC2 instance.',
    required: [],
  })
  .openapi('NetworkInterface')

const NetworkInterfacesSchema = z.array(NetworkInterfaceSchema).openapi('NetworkInterfaces')

const ProductCodeSchema = z
  .object({
    Code: StringSchema.exactOptional().openapi({
      xml: { name: 'productCodeId' },
      description: 'The product code information.',
    }),
    ProductType: StringSchema.exactOptional().openapi({
      xml: { name: 'productCodeType' },
      description: 'The product code type.',
    }),
  })
  .openapi({
    description: 'Contains information about the product code for the EC2 instance.',
    required: [],
  })
  .openapi('ProductCode')

const ProductCodesSchema = z.array(ProductCodeSchema).openapi('ProductCodes')

const InstanceDetailsSchema = z
  .object({
    AvailabilityZone: StringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZone' },
      description: 'The Availability Zone of the EC2 instance.',
    }),
    IamInstanceProfile: IamInstanceProfileSchema.exactOptional().openapi({
      xml: { name: 'iamInstanceProfile' },
      description: 'The profile information of the EC2 instance.',
    }),
    ImageDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'imageDescription' },
      description: 'The image description of the EC2 instance.',
    }),
    ImageId: StringSchema.exactOptional().openapi({
      xml: { name: 'imageId' },
      description: 'The image ID of the EC2 instance.',
    }),
    InstanceId: StringSchema.exactOptional().openapi({
      xml: { name: 'instanceId' },
      description: 'The ID of the EC2 instance.',
    }),
    InstanceState: StringSchema.exactOptional().openapi({
      xml: { name: 'instanceState' },
      description: 'The state of the EC2 instance.',
    }),
    InstanceType: StringSchema.exactOptional().openapi({
      xml: { name: 'instanceType' },
      description: 'The type of the EC2 instance.',
    }),
    OutpostArn: StringSchema.exactOptional().openapi({
      xml: { name: 'outpostArn' },
      description:
        'The Amazon Resource Name (ARN) of the Amazon Web Services Outpost. Only applicable to Amazon Web Services Outposts instances.',
    }),
    LaunchTime: StringSchema.exactOptional().openapi({
      xml: { name: 'launchTime' },
      description: 'The launch time of the EC2 instance.',
    }),
    NetworkInterfaces: NetworkInterfacesSchema.exactOptional().openapi({
      xml: { name: 'networkInterfaces' },
      description: 'The elastic network interface information of the EC2 instance.',
    }),
    Platform: StringSchema.exactOptional().openapi({
      xml: { name: 'platform' },
      description: 'The platform of the EC2 instance.',
    }),
    ProductCodes: ProductCodesSchema.exactOptional().openapi({
      xml: { name: 'productCodes' },
      description: 'The product code of the EC2 instance.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags of the EC2 instance.',
    }),
  })
  .openapi({ description: 'Contains information about the details of an instance.', required: [] })
  .openapi('InstanceDetails')

const EksClusterDetailsSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'EKS cluster name.',
    }),
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'EKS cluster ARN.',
    }),
    VpcId: StringSchema.exactOptional().openapi({
      xml: { name: 'vpcId' },
      description: 'The VPC ID to which the EKS cluster is attached.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The EKS cluster status.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The EKS cluster tags.',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The timestamp when the EKS cluster was created.',
    }),
  })
  .openapi({
    description: 'Details about the EKS cluster involved in a Kubernetes finding.',
    required: [],
  })
  .openapi('EksClusterDetails')

const GroupsSchema = z.array(StringSchema).openapi('Groups')

const KubernetesUserDetailsSchema = z
  .object({
    Username: StringSchema.exactOptional().openapi({
      xml: { name: 'username' },
      description: 'The username of the user who called the Kubernetes API.',
    }),
    Uid: StringSchema.exactOptional().openapi({
      xml: { name: 'uid' },
      description: 'The user ID of the user who called the Kubernetes API.',
    }),
    Groups: GroupsSchema.exactOptional().openapi({
      xml: { name: 'groups' },
      description: 'The groups that include the user who called the Kubernetes API.',
    }),
  })
  .openapi({
    description: 'Details about the Kubernetes user involved in a Kubernetes finding.',
    required: [],
  })
  .openapi('KubernetesUserDetails')

const VolumeMountSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Volume mount name.',
    }),
    MountPath: StringSchema.exactOptional().openapi({
      xml: { name: 'mountPath' },
      description: 'Volume mount path.',
    }),
  })
  .openapi({ description: 'Container volume mount.', required: [] })
  .openapi('VolumeMount')

const VolumeMountsSchema = z.array(VolumeMountSchema).openapi('VolumeMounts')

const SecurityContextSchema = z
  .object({
    Privileged: BooleanSchema.exactOptional().openapi({
      xml: { name: 'privileged' },
      description: 'Whether the container is privileged.',
    }),
  })
  .openapi({ description: 'Container security context.', required: [] })
  .openapi('SecurityContext')

const ContainerSchema = z
  .object({
    ContainerRuntime: StringSchema.exactOptional().openapi({
      xml: { name: 'containerRuntime' },
      description:
        'The container runtime (such as, Docker or containerd) used to run the container.',
    }),
    Id: StringSchema.exactOptional().openapi({ xml: { name: 'id' }, description: 'Container ID.' }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Container name.',
    }),
    Image: StringSchema.exactOptional().openapi({
      xml: { name: 'image' },
      description: 'Container image.',
    }),
    ImagePrefix: StringSchema.exactOptional().openapi({
      xml: { name: 'imagePrefix' },
      description:
        'Part of the image name before the last slash. For example, imagePrefix for public.ecr.aws/amazonlinux/amazonlinux:latest would be public.ecr.aws/amazonlinux. If the image name is relative and does not have a slash, this field is empty.',
    }),
    VolumeMounts: VolumeMountsSchema.exactOptional().openapi({
      xml: { name: 'volumeMounts' },
      description: 'Container volume mounts.',
    }),
    SecurityContext: SecurityContextSchema.exactOptional().openapi({
      xml: { name: 'securityContext' },
      description: 'Container security context.',
    }),
  })
  .openapi({ description: 'Details of a container.', required: [] })
  .openapi('Container')

const ContainersSchema = z.array(ContainerSchema).openapi('Containers')

const HostPathSchema = z
  .object({
    Path: StringSchema.exactOptional().openapi({
      xml: { name: 'path' },
      description: 'Path of the file or directory on the host that the volume maps to.',
    }),
  })
  .openapi({
    description:
      'Represents a pre-existing file or directory on the host machine that the volume maps to.',
    required: [],
  })
  .openapi('HostPath')

const VolumeSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Volume name.',
    }),
    HostPath: HostPathSchema.exactOptional().openapi({
      xml: { name: 'hostPath' },
      description:
        'Represents a pre-existing file or directory on the host machine that the volume maps to.',
    }),
  })
  .openapi({ description: 'Volume used by the Kubernetes workload.', required: [] })
  .openapi('Volume')

const VolumesSchema = z.array(VolumeSchema).openapi('Volumes')

const KubernetesWorkloadDetailsSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Kubernetes workload name.',
    }),
    Type: StringSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description: 'Kubernetes workload type (e.g. Pod, Deployment, etc.).',
    }),
    Uid: StringSchema.exactOptional().openapi({
      xml: { name: 'uid' },
      description: 'Kubernetes workload ID.',
    }),
    Namespace: StringSchema.exactOptional().openapi({
      xml: { name: 'namespace' },
      description: 'Kubernetes namespace that the workload is part of.',
    }),
    HostNetwork: BooleanSchema.exactOptional().openapi({
      xml: { name: 'hostNetwork' },
      description: 'Whether the hostNetwork flag is enabled for the pods included in the workload.',
    }),
    Containers: ContainersSchema.exactOptional().openapi({
      xml: { name: 'containers' },
      description: 'Containers running as part of the Kubernetes workload.',
    }),
    Volumes: VolumesSchema.exactOptional().openapi({
      xml: { name: 'volumes' },
      description: 'Volumes used by the Kubernetes workload.',
    }),
  })
  .openapi({
    description: 'Details about the Kubernetes workload involved in a Kubernetes finding.',
    required: [],
  })
  .openapi('KubernetesWorkloadDetails')

const KubernetesDetailsSchema = z
  .object({
    KubernetesUserDetails: KubernetesUserDetailsSchema.exactOptional().openapi({
      xml: { name: 'kubernetesUserDetails' },
      description: 'Details about the Kubernetes user involved in a Kubernetes finding.',
    }),
    KubernetesWorkloadDetails: KubernetesWorkloadDetailsSchema.exactOptional().openapi({
      xml: { name: 'kubernetesWorkloadDetails' },
      description: 'Details about the Kubernetes workload involved in a Kubernetes finding.',
    }),
  })
  .openapi({
    description:
      'Details about Kubernetes resources such as a Kubernetes user or workload resource involved in a Kubernetes finding.',
    required: [],
  })
  .openapi('KubernetesDetails')

const IntegerSchema = z.int().openapi('Integer')

const VolumeDetailSchema = z
  .object({
    VolumeArn: StringSchema.exactOptional().openapi({
      xml: { name: 'volumeArn' },
      description: 'EBS volume Arn information.',
    }),
    VolumeType: StringSchema.exactOptional().openapi({
      xml: { name: 'volumeType' },
      description: 'The EBS volume type.',
    }),
    DeviceName: StringSchema.exactOptional().openapi({
      xml: { name: 'deviceName' },
      description: 'The device name for the EBS volume.',
    }),
    VolumeSizeInGB: IntegerSchema.exactOptional().openapi({
      xml: { name: 'volumeSizeInGB' },
      description: 'EBS volume size in GB.',
    }),
    EncryptionType: StringSchema.exactOptional().openapi({
      xml: { name: 'encryptionType' },
      description: 'EBS volume encryption type.',
    }),
    SnapshotArn: StringSchema.exactOptional().openapi({
      xml: { name: 'snapshotArn' },
      description: 'Snapshot Arn of the EBS volume.',
    }),
    KmsKeyArn: StringSchema.exactOptional().openapi({
      xml: { name: 'kmsKeyArn' },
      description: 'KMS key Arn used to encrypt the EBS volume.',
    }),
  })
  .openapi({ description: 'Contains EBS volume details.', required: [] })
  .openapi('VolumeDetail')

const VolumeDetailsSchema = z.array(VolumeDetailSchema).openapi('VolumeDetails')

const EbsVolumeDetailsSchema = z
  .object({
    ScannedVolumeDetails: VolumeDetailsSchema.exactOptional().openapi({
      xml: { name: 'scannedVolumeDetails' },
      description: 'List of EBS volumes that were scanned.',
    }),
    SkippedVolumeDetails: VolumeDetailsSchema.exactOptional().openapi({
      xml: { name: 'skippedVolumeDetails' },
      description: 'List of EBS volumes that were skipped from the malware scan.',
    }),
  })
  .openapi({
    description: 'Contains list of scanned and skipped EBS volumes with details.',
    required: [],
  })
  .openapi('EbsVolumeDetails')

const EcsTaskDetailsSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The Amazon Resource Name (ARN) of the task.',
    }),
    DefinitionArn: StringSchema.exactOptional().openapi({
      xml: { name: 'definitionArn' },
      description: 'The ARN of the task definition that creates the task.',
    }),
    Version: StringSchema.exactOptional().openapi({
      xml: { name: 'version' },
      description: 'The version counter for the task.',
    }),
    TaskCreatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The Unix timestamp for the time when the task was created.',
    }),
    StartedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'startedAt' },
      description: 'The Unix timestamp for the time when the task started.',
    }),
    StartedBy: StringSchema.exactOptional().openapi({
      xml: { name: 'startedBy' },
      description: 'Contains the tag specified when a task is started.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags of the ECS Task.',
    }),
    Volumes: VolumesSchema.exactOptional().openapi({
      xml: { name: 'volumes' },
      description: 'The list of data volume definitions for the task.',
    }),
    Containers: ContainersSchema.exactOptional().openapi({
      xml: { name: 'containers' },
      description: "The containers that's associated with the task.",
    }),
    Group: StringSchema.exactOptional().openapi({
      xml: { name: 'group' },
      description: "The name of the task group that's associated with the task.",
    }),
  })
  .openapi({ description: 'Contains information about the task in an ECS cluster.', required: [] })
  .openapi('EcsTaskDetails')

const EcsClusterDetailsSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the ECS Cluster.',
    }),
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The Amazon Resource Name (ARN) that identifies the cluster.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The status of the ECS cluster.',
    }),
    ActiveServicesCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'activeServicesCount' },
      description: 'The number of services that are running on the cluster in an ACTIVE state.',
    }),
    RegisteredContainerInstancesCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'registeredContainerInstancesCount' },
      description: 'The number of container instances registered into the cluster.',
    }),
    RunningTasksCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'runningTasksCount' },
      description: 'The number of tasks in the cluster that are in the RUNNING state.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags of the ECS Cluster.',
    }),
    TaskDetails: EcsTaskDetailsSchema.exactOptional().openapi({
      xml: { name: 'taskDetails' },
      description: 'Contains information about the details of the ECS Task.',
    }),
  })
  .openapi({
    description: 'Contains information about the details of the ECS Cluster.',
    required: [],
  })
  .openapi('EcsClusterDetails')

const RdsDbInstanceDetailsSchema = z
  .object({
    DbInstanceIdentifier: StringSchema.exactOptional().openapi({
      xml: { name: 'dbInstanceIdentifier' },
      description:
        'The identifier associated to the database instance that was involved in the finding.',
    }),
    Engine: StringSchema.exactOptional().openapi({
      xml: { name: 'engine' },
      description: 'The database engine of the database instance involved in the finding.',
    }),
    EngineVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'engineVersion' },
      description: 'The version of the database engine that was involved in the finding.',
    }),
    DbClusterIdentifier: StringSchema.exactOptional().openapi({
      xml: { name: 'dbClusterIdentifier' },
      description:
        'The identifier of the database cluster that contains the database instance ID involved in the finding.',
    }),
    DbInstanceArn: StringSchema.exactOptional().openapi({
      xml: { name: 'dbInstanceArn' },
      description:
        'The Amazon Resource Name (ARN) that identifies the database instance involved in the finding.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'Instance tag key-value pairs associated with the database instance ID.',
    }),
  })
  .openapi({
    description:
      'Contains information about the resource type <code>RDSDBInstance</code> involved in a GuardDuty finding.',
    required: [],
  })
  .openapi('RdsDbInstanceDetails')

const RdsDbUserDetailsSchema = z
  .object({
    User: StringSchema.exactOptional().openapi({
      xml: { name: 'user' },
      description: 'The user name used in the anomalous login attempt.',
    }),
    Application: StringSchema.exactOptional().openapi({
      xml: { name: 'application' },
      description: 'The application name used in the anomalous login attempt.',
    }),
    Database: StringSchema.exactOptional().openapi({
      xml: { name: 'database' },
      description: 'The name of the database instance involved in the anomalous login attempt.',
    }),
    Ssl: StringSchema.exactOptional().openapi({
      xml: { name: 'ssl' },
      description: 'The version of the Secure Socket Layer (SSL) used for the network.',
    }),
    AuthMethod: StringSchema.exactOptional().openapi({
      xml: { name: 'authMethod' },
      description: 'The authentication method used by the user involved in the finding.',
    }),
  })
  .openapi({
    description:
      'Contains information about the user and authentication details for a database instance involved in the finding.',
    required: [],
  })
  .openapi('RdsDbUserDetails')

const SubnetIdsSchema = z.array(StringSchema).openapi('SubnetIds')

const VpcConfigSchema = z
  .object({
    SubnetIds: SubnetIdsSchema.exactOptional().openapi({
      xml: { name: 'subnetIds' },
      description: 'The identifiers of the subnets that are associated with your Lambda function.',
    }),
    VpcId: StringSchema.exactOptional().openapi({
      xml: { name: 'vpcId' },
      description: 'The identifier of the Amazon Virtual Private Cloud.',
    }),
    SecurityGroups: SecurityGroupsSchema.exactOptional().openapi({
      xml: { name: 'securityGroups' },
      description: 'The identifier of the security group attached to the Lambda function.',
    }),
  })
  .openapi({
    description:
      'Amazon Virtual Private Cloud configuration details associated with your Lambda function.',
    required: [],
  })
  .openapi('VpcConfig')

const LambdaDetailsSchema = z
  .object({
    FunctionArn: StringSchema.exactOptional().openapi({
      xml: { name: 'functionArn' },
      description: 'Amazon Resource Name (ARN) of the Lambda function.',
    }),
    FunctionName: StringSchema.exactOptional().openapi({
      xml: { name: 'functionName' },
      description: 'Name of the Lambda function.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'Description of the Lambda function.',
    }),
    LastModifiedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'lastModifiedAt' },
      description:
        'The timestamp when the Lambda function was last modified. This field is in the UTC date string format <code>(2023-03-22T19:37:20.168Z)</code>.',
    }),
    RevisionId: StringSchema.exactOptional().openapi({
      xml: { name: 'revisionId' },
      description: 'The revision ID of the Lambda function version.',
    }),
    FunctionVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'functionVersion' },
      description: 'The version of the Lambda function.',
    }),
    Role: StringSchema.exactOptional().openapi({
      xml: { name: 'role' },
      description: 'The execution role of the Lambda function.',
    }),
    VpcConfig: VpcConfigSchema.exactOptional().openapi({
      xml: { name: 'vpcConfig' },
      description:
        'Amazon Virtual Private Cloud configuration details associated with your Lambda function.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description:
        'A list of tags attached to this resource, listed in the format of <code>key</code>:<code>value</code> pair.',
    }),
  })
  .openapi({
    description: 'Information about the Lambda function involved in the finding.',
    required: [],
  })
  .openapi('LambdaDetails')

const ResourceSchema = z
  .object({
    AccessKeyDetails: AccessKeyDetailsSchema.exactOptional().openapi({
      xml: { name: 'accessKeyDetails' },
      description:
        'The IAM access key details (user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding.',
    }),
    S3BucketDetails: S3BucketDetailsSchema.exactOptional().openapi({
      xml: { name: 's3BucketDetails' },
      description: 'Contains information on the S3 bucket.',
    }),
    InstanceDetails: InstanceDetailsSchema.exactOptional().openapi({
      xml: { name: 'instanceDetails' },
      description:
        'The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding.',
    }),
    EksClusterDetails: EksClusterDetailsSchema.exactOptional().openapi({
      xml: { name: 'eksClusterDetails' },
      description: 'Details about the EKS cluster involved in a Kubernetes finding.',
    }),
    KubernetesDetails: KubernetesDetailsSchema.exactOptional().openapi({
      xml: { name: 'kubernetesDetails' },
      description:
        'Details about the Kubernetes user and workload involved in a Kubernetes finding.',
    }),
    ResourceType: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceType' },
      description: 'The type of Amazon Web Services resource.',
    }),
    EbsVolumeDetails: EbsVolumeDetailsSchema.exactOptional().openapi({
      xml: { name: 'ebsVolumeDetails' },
      description: 'Contains list of scanned and skipped EBS volumes with details.',
    }),
    EcsClusterDetails: EcsClusterDetailsSchema.exactOptional().openapi({
      xml: { name: 'ecsClusterDetails' },
      description: 'Contains information about the details of the ECS Cluster.',
    }),
    ContainerDetails: ContainerSchema.exactOptional().openapi({
      xml: { name: 'containerDetails' },
    }),
    RdsDbInstanceDetails: RdsDbInstanceDetailsSchema.exactOptional().openapi({
      xml: { name: 'rdsDbInstanceDetails' },
      description:
        'Contains information about the database instance to which an anomalous login attempt was made.',
    }),
    RdsDbUserDetails: RdsDbUserDetailsSchema.exactOptional().openapi({
      xml: { name: 'rdsDbUserDetails' },
      description:
        'Contains information about the user details through which anomalous login attempt was made.',
    }),
    LambdaDetails: LambdaDetailsSchema.exactOptional().openapi({
      xml: { name: 'lambdaDetails' },
      description: 'Contains information about the Lambda function that was involved in a finding.',
    }),
  })
  .openapi({
    description:
      'Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding.',
    required: [],
  })
  .openapi('Resource')

const DomainDetailsSchema = z
  .object({
    Domain: StringSchema.exactOptional().openapi({
      xml: { name: 'domain' },
      description: 'The domain information for the Amazon Web Services API call.',
    }),
  })
  .openapi({ description: 'Contains information about the domain.', required: [] })
  .openapi('DomainDetails')

const CitySchema = z
  .object({
    CityName: StringSchema.exactOptional().openapi({
      xml: { name: 'cityName' },
      description: 'The city name of the remote IP address.',
    }),
  })
  .openapi({
    description: 'Contains information about the city associated with the IP address.',
    required: [],
  })
  .openapi('City')

const CountrySchema = z
  .object({
    CountryCode: StringSchema.exactOptional().openapi({
      xml: { name: 'countryCode' },
      description: 'The country code of the remote IP address.',
    }),
    CountryName: StringSchema.exactOptional().openapi({
      xml: { name: 'countryName' },
      description: 'The country name of the remote IP address.',
    }),
  })
  .openapi({
    description: 'Contains information about the country where the remote IP address is located.',
    required: [],
  })
  .openapi('Country')

const GeoLocationSchema = z
  .object({
    Lat: DoubleSchema.exactOptional().openapi({
      xml: { name: 'lat' },
      description: 'The latitude information of the remote IP address.',
    }),
    Lon: DoubleSchema.exactOptional().openapi({
      xml: { name: 'lon' },
      description: 'The longitude information of the remote IP address.',
    }),
  })
  .openapi({
    description: 'Contains information about the location of the remote IP address.',
    required: [],
  })
  .openapi('GeoLocation')

const OrganizationSchema = z
  .object({
    Asn: StringSchema.exactOptional().openapi({
      xml: { name: 'asn' },
      description:
        'The Autonomous System Number (ASN) of the internet provider of the remote IP address.',
    }),
    AsnOrg: StringSchema.exactOptional().openapi({
      xml: { name: 'asnOrg' },
      description: 'The organization that registered this ASN.',
    }),
    Isp: StringSchema.exactOptional().openapi({
      xml: { name: 'isp' },
      description: 'The ISP information for the internet provider.',
    }),
    Org: StringSchema.exactOptional().openapi({
      xml: { name: 'org' },
      description: 'The name of the internet provider.',
    }),
  })
  .openapi({
    description: 'Contains information about the ISP organization of the remote IP address.',
    required: [],
  })
  .openapi('Organization')

const RemoteIpDetailsSchema = z
  .object({
    City: CitySchema.exactOptional().openapi({
      xml: { name: 'city' },
      description: 'The city information of the remote IP address.',
    }),
    Country: CountrySchema.exactOptional().openapi({
      xml: { name: 'country' },
      description: 'The country code of the remote IP address.',
    }),
    GeoLocation: GeoLocationSchema.exactOptional().openapi({
      xml: { name: 'geoLocation' },
      description: 'The location information of the remote IP address.',
    }),
    IpAddressV4: StringSchema.exactOptional().openapi({
      xml: { name: 'ipAddressV4' },
      description: 'The IPv4 remote address of the connection.',
    }),
    Organization: OrganizationSchema.exactOptional().openapi({
      xml: { name: 'organization' },
      description: 'The ISP organization information of the remote IP address.',
    }),
  })
  .openapi({
    description: 'Contains information about the remote IP address of the connection.',
    required: [],
  })
  .openapi('RemoteIpDetails')

const RemoteAccountDetailsSchema = z
  .object({
    AccountId: StringSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The Amazon Web Services account ID of the remote API caller.',
    }),
    Affiliated: BooleanSchema.exactOptional().openapi({
      xml: { name: 'affiliated' },
      description:
        'Details on whether the Amazon Web Services account of the remote API caller is related to your GuardDuty environment. If this value is <code>True</code> the API caller is affiliated to your account in some way. If it is <code>False</code> the API caller is from outside your environment.',
    }),
  })
  .openapi({
    description:
      'Contains details about the remote Amazon Web Services account that made the API call.',
    required: [],
  })
  .openapi('RemoteAccountDetails')

const AffectedResourcesSchema = z.record(z.string(), StringSchema).openapi('AffectedResources')

const AwsApiCallActionSchema = z
  .object({
    Api: StringSchema.exactOptional().openapi({
      xml: { name: 'api' },
      description: 'The Amazon Web Services API name.',
    }),
    CallerType: StringSchema.exactOptional().openapi({
      xml: { name: 'callerType' },
      description: 'The Amazon Web Services API caller type.',
    }),
    DomainDetails: DomainDetailsSchema.exactOptional().openapi({
      xml: { name: 'domainDetails' },
      description: 'The domain information for the Amazon Web Services API call.',
    }),
    ErrorCode: StringSchema.exactOptional().openapi({
      xml: { name: 'errorCode' },
      description: 'The error code of the failed Amazon Web Services API action.',
    }),
    UserAgent: StringSchema.exactOptional().openapi({
      xml: { name: 'userAgent' },
      description: 'The agent through which the API request was made.',
    }),
    RemoteIpDetails: RemoteIpDetailsSchema.exactOptional().openapi({
      xml: { name: 'remoteIpDetails' },
      description:
        'The remote IP information of the connection that initiated the Amazon Web Services API call.',
    }),
    ServiceName: StringSchema.exactOptional().openapi({
      xml: { name: 'serviceName' },
      description: 'The Amazon Web Services service name whose API was invoked.',
    }),
    RemoteAccountDetails: RemoteAccountDetailsSchema.exactOptional().openapi({
      xml: { name: 'remoteAccountDetails' },
      description:
        'The details of the Amazon Web Services account that made the API call. This field appears if the call was made from outside your account.',
    }),
    AffectedResources: AffectedResourcesSchema.exactOptional().openapi({
      xml: { name: 'affectedResources' },
      description:
        'The details of the Amazon Web Services account that made the API call. This field identifies the resources that were affected by this API call.',
    }),
  })
  .openapi({ description: 'Contains information about the API action.', required: [] })
  .openapi('AwsApiCallAction')

const DnsRequestActionSchema = z
  .object({
    Domain: StringSchema.exactOptional().openapi({
      xml: { name: 'domain' },
      description: 'The domain information for the API request.',
    }),
    Protocol: StringSchema.exactOptional().openapi({
      xml: { name: 'protocol' },
      description:
        'The network connection protocol observed in the activity that prompted GuardDuty to generate the finding.',
    }),
    Blocked: BooleanSchema.exactOptional().openapi({
      xml: { name: 'blocked' },
      description: 'Indicates whether the targeted port is blocked.',
    }),
  })
  .openapi({
    description: 'Contains information about the DNS_REQUEST action described in this finding.',
    required: [],
  })
  .openapi('DnsRequestAction')

const LocalPortDetailsSchema = z
  .object({
    Port: IntegerSchema.exactOptional().openapi({
      xml: { name: 'port' },
      description: 'The port number of the local connection.',
    }),
    PortName: StringSchema.exactOptional().openapi({
      xml: { name: 'portName' },
      description: 'The port name of the local connection.',
    }),
  })
  .openapi({
    description: 'Contains information about the port for the local connection.',
    required: [],
  })
  .openapi('LocalPortDetails')

const LocalIpDetailsSchema = z
  .object({
    IpAddressV4: StringSchema.exactOptional().openapi({
      xml: { name: 'ipAddressV4' },
      description: 'The IPv4 local address of the connection.',
    }),
  })
  .openapi({
    description: 'Contains information about the local IP address of the connection.',
    required: [],
  })
  .openapi('LocalIpDetails')

const RemotePortDetailsSchema = z
  .object({
    Port: IntegerSchema.exactOptional().openapi({
      xml: { name: 'port' },
      description: 'The port number of the remote connection.',
    }),
    PortName: StringSchema.exactOptional().openapi({
      xml: { name: 'portName' },
      description: 'The port name of the remote connection.',
    }),
  })
  .openapi({ description: 'Contains information about the remote port.', required: [] })
  .openapi('RemotePortDetails')

const NetworkConnectionActionSchema = z
  .object({
    Blocked: BooleanSchema.exactOptional().openapi({
      xml: { name: 'blocked' },
      description: 'Indicates whether EC2 blocked the network connection to your instance.',
    }),
    ConnectionDirection: StringSchema.exactOptional().openapi({
      xml: { name: 'connectionDirection' },
      description: 'The network connection direction.',
    }),
    LocalPortDetails: LocalPortDetailsSchema.exactOptional().openapi({
      xml: { name: 'localPortDetails' },
      description: 'The local port information of the connection.',
    }),
    Protocol: StringSchema.exactOptional().openapi({
      xml: { name: 'protocol' },
      description: 'The network connection protocol.',
    }),
    LocalIpDetails: LocalIpDetailsSchema.exactOptional().openapi({
      xml: { name: 'localIpDetails' },
      description: 'The local IP information of the connection.',
    }),
    RemoteIpDetails: RemoteIpDetailsSchema.exactOptional().openapi({
      xml: { name: 'remoteIpDetails' },
      description: 'The remote IP information of the connection.',
    }),
    RemotePortDetails: RemotePortDetailsSchema.exactOptional().openapi({
      xml: { name: 'remotePortDetails' },
      description: 'The remote port information of the connection.',
    }),
  })
  .openapi({
    description:
      'Contains information about the NETWORK_CONNECTION action described in the finding.',
    required: [],
  })
  .openapi('NetworkConnectionAction')

const PortProbeDetailSchema = z
  .object({
    LocalPortDetails: LocalPortDetailsSchema.exactOptional().openapi({
      xml: { name: 'localPortDetails' },
      description: 'The local port information of the connection.',
    }),
    LocalIpDetails: LocalIpDetailsSchema.exactOptional().openapi({
      xml: { name: 'localIpDetails' },
      description: 'The local IP information of the connection.',
    }),
    RemoteIpDetails: RemoteIpDetailsSchema.exactOptional().openapi({
      xml: { name: 'remoteIpDetails' },
      description: 'The remote IP information of the connection.',
    }),
  })
  .openapi({ description: 'Contains information about the port probe details.', required: [] })
  .openapi('PortProbeDetail')

const PortProbeDetailsSchema = z.array(PortProbeDetailSchema).openapi('PortProbeDetails')

const PortProbeActionSchema = z
  .object({
    Blocked: BooleanSchema.exactOptional().openapi({
      xml: { name: 'blocked' },
      description:
        'Indicates whether EC2 blocked the port probe to the instance, such as with an ACL.',
    }),
    PortProbeDetails: PortProbeDetailsSchema.exactOptional().openapi({
      xml: { name: 'portProbeDetails' },
      description: 'A list of objects related to port probe details.',
    }),
  })
  .openapi({
    description: 'Contains information about the PORT_PROBE action described in the finding.',
    required: [],
  })
  .openapi('PortProbeAction')

const SourceIpsSchema = z.array(StringSchema).openapi('SourceIps')

const KubernetesApiCallActionSchema = z
  .object({
    RequestUri: StringSchema.exactOptional().openapi({
      xml: { name: 'requestUri' },
      description: 'The Kubernetes API request URI.',
    }),
    Verb: StringSchema.exactOptional().openapi({
      xml: { name: 'verb' },
      description: 'The Kubernetes API request HTTP verb.',
    }),
    SourceIps: SourceIpsSchema.exactOptional().openapi({
      xml: { name: 'sourceIps' },
      description:
        'The IP of the Kubernetes API caller and the IPs of any proxies or load balancers between the caller and the API endpoint.',
    }),
    UserAgent: StringSchema.exactOptional().openapi({
      xml: { name: 'userAgent' },
      description: 'The user agent of the caller of the Kubernetes API.',
    }),
    RemoteIpDetails: RemoteIpDetailsSchema.exactOptional().openapi({
      xml: { name: 'remoteIpDetails' },
    }),
    StatusCode: IntegerSchema.exactOptional().openapi({
      xml: { name: 'statusCode' },
      description: 'The resulting HTTP response code of the Kubernetes API call action.',
    }),
    Parameters: StringSchema.exactOptional().openapi({
      xml: { name: 'parameters' },
      description: 'Parameters related to the Kubernetes API call action.',
    }),
  })
  .openapi({
    description: 'Information about the Kubernetes API call action described in this finding.',
    required: [],
  })
  .openapi('KubernetesApiCallAction')

const LoginAttributeSchema = z
  .object({
    User: StringSchema.exactOptional().openapi({
      xml: { name: 'user' },
      description: 'Indicates the user name which attempted to log in.',
    }),
    Application: StringSchema.exactOptional().openapi({
      xml: { name: 'application' },
      description: 'Indicates the application name used to attempt log in.',
    }),
    FailedLoginAttempts: IntegerSchema.exactOptional().openapi({
      xml: { name: 'failedLoginAttempts' },
      description:
        'Represents the sum of failed (unsuccessful) login attempts made to establish a connection to the database instance.',
    }),
    SuccessfulLoginAttempts: IntegerSchema.exactOptional().openapi({
      xml: { name: 'successfulLoginAttempts' },
      description:
        'Represents the sum of successful connections (a correct combination of login attributes) made to the database instance by the actor.',
    }),
  })
  .openapi({ description: 'Information about the login attempts.', required: [] })
  .openapi('LoginAttribute')

const LoginAttributesSchema = z.array(LoginAttributeSchema).openapi('LoginAttributes')

const RdsLoginAttemptActionSchema = z
  .object({
    RemoteIpDetails: RemoteIpDetailsSchema.exactOptional().openapi({
      xml: { name: 'remoteIpDetails' },
    }),
    LoginAttributes: LoginAttributesSchema.exactOptional().openapi({
      description: 'Indicates the login attributes used in the login attempt.',
    }),
  })
  .openapi({
    description:
      'Indicates that a login attempt was made to the potentially compromised database from a remote IP address.',
    required: [],
  })
  .openapi('RdsLoginAttemptAction')

const ActionSchema = z
  .object({
    ActionType: StringSchema.exactOptional().openapi({
      xml: { name: 'actionType' },
      description: 'The GuardDuty finding activity type.',
    }),
    AwsApiCallAction: AwsApiCallActionSchema.exactOptional().openapi({
      xml: { name: 'awsApiCallAction' },
      description: 'Information about the AWS_API_CALL action described in this finding.',
    }),
    DnsRequestAction: DnsRequestActionSchema.exactOptional().openapi({
      xml: { name: 'dnsRequestAction' },
      description: 'Information about the DNS_REQUEST action described in this finding.',
    }),
    NetworkConnectionAction: NetworkConnectionActionSchema.exactOptional().openapi({
      xml: { name: 'networkConnectionAction' },
      description: 'Information about the NETWORK_CONNECTION action described in this finding.',
    }),
    PortProbeAction: PortProbeActionSchema.exactOptional().openapi({
      xml: { name: 'portProbeAction' },
      description: 'Information about the PORT_PROBE action described in this finding.',
    }),
    KubernetesApiCallAction: KubernetesApiCallActionSchema.exactOptional().openapi({
      xml: { name: 'kubernetesApiCallAction' },
      description: 'Information about the Kubernetes API call action described in this finding.',
    }),
    RdsLoginAttemptAction: RdsLoginAttemptActionSchema.exactOptional().openapi({
      xml: { name: 'rdsLoginAttemptAction' },
      description:
        'Information about <code>RDS_LOGIN_ATTEMPT</code> action described in this finding.',
    }),
  })
  .openapi({ description: 'Contains information about actions.', required: [] })
  .openapi('Action')

const ThreatNamesSchema = z.array(StringSchema).openapi('ThreatNames')

const ThreatIntelligenceDetailSchema = z
  .object({
    ThreatListName: StringSchema.exactOptional().openapi({
      xml: { name: 'threatListName' },
      description: 'The name of the threat intelligence list that triggered the finding.',
    }),
    ThreatNames: ThreatNamesSchema.exactOptional().openapi({
      xml: { name: 'threatNames' },
      description:
        'A list of names of the threats in the threat intelligence list that triggered the finding.',
    }),
  })
  .openapi({
    description:
      'An instance of a threat intelligence detail that constitutes evidence for the finding.',
    required: [],
  })
  .openapi('ThreatIntelligenceDetail')

const ThreatIntelligenceDetailsSchema = z
  .array(ThreatIntelligenceDetailSchema)
  .openapi('ThreatIntelligenceDetails')

const EvidenceSchema = z
  .object({
    ThreatIntelligenceDetails: ThreatIntelligenceDetailsSchema.exactOptional().openapi({
      xml: { name: 'threatIntelligenceDetails' },
      description: 'A list of threat intelligence details related to the evidence.',
    }),
  })
  .openapi({
    description: 'Contains information about the reason that the finding was generated.',
    required: [],
  })
  .openapi('Evidence')

const DetectorIdSchema = z.string().min(1).max(300).openapi('DetectorId')

const ServiceAdditionalInfoSchema = z
  .object({
    Value: StringSchema.exactOptional().openapi({
      xml: { name: 'value' },
      description: 'This field specifies the value of the additional information.',
    }),
    Type: StringSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description: 'Describes the type of the additional information.',
    }),
  })
  .openapi({ description: 'Additional information about the generated finding.', required: [] })
  .openapi('ServiceAdditionalInfo')

const SourcesSchema = z.array(StringSchema).openapi('Sources')

const ScannedItemCountSchema = z
  .object({
    TotalGb: IntegerSchema.exactOptional().openapi({
      xml: { name: 'totalGb' },
      description: 'Total GB of files scanned for malware.',
    }),
    Files: IntegerSchema.exactOptional().openapi({
      xml: { name: 'files' },
      description: 'Number of files scanned.',
    }),
    Volumes: IntegerSchema.exactOptional().openapi({
      xml: { name: 'volumes' },
      description: 'Total number of scanned volumes.',
    }),
  })
  .openapi({ description: 'Total number of scanned files.', required: [] })
  .openapi('ScannedItemCount')

const ThreatsDetectedItemCountSchema = z
  .object({
    Files: IntegerSchema.exactOptional().openapi({
      xml: { name: 'files' },
      description: 'Total number of infected files.',
    }),
  })
  .openapi({ description: 'Contains total number of infected files.', required: [] })
  .openapi('ThreatsDetectedItemCount')

const HighestSeverityThreatDetailsSchema = z
  .object({
    Severity: StringSchema.exactOptional().openapi({
      xml: { name: 'severity' },
      description: 'Severity level of the highest severity threat detected.',
    }),
    ThreatName: StringSchema.exactOptional().openapi({
      xml: { name: 'threatName' },
      description:
        'Threat name of the highest severity threat detected as part of the malware scan.',
    }),
    Count: IntegerSchema.exactOptional().openapi({
      xml: { name: 'count' },
      description: 'Total number of infected files with the highest severity threat detected.',
    }),
  })
  .openapi({
    description:
      'Contains details of the highest severity threat detected during scan and number of infected files.',
    required: [],
  })
  .openapi('HighestSeverityThreatDetails')

const ScanFilePathSchema = z
  .object({
    FilePath: StringSchema.exactOptional().openapi({
      xml: { name: 'filePath' },
      description: 'The file path of the infected file.',
    }),
    VolumeArn: StringSchema.exactOptional().openapi({
      xml: { name: 'volumeArn' },
      description: 'EBS volume Arn details of the infected file.',
    }),
    Hash: StringSchema.exactOptional().openapi({
      xml: { name: 'hash' },
      description: 'The hash value of the infected file.',
    }),
    FileName: StringSchema.exactOptional().openapi({
      xml: { name: 'fileName' },
      description: 'File name of the infected file.',
    }),
  })
  .openapi({
    description: 'Contains details of infected file including name, file path and hash.',
    required: [],
  })
  .openapi('ScanFilePath')

const FilePathsSchema = z.array(ScanFilePathSchema).openapi('FilePaths')

const ScanThreatNameSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the identified threat.',
    }),
    Severity: StringSchema.exactOptional().openapi({
      xml: { name: 'severity' },
      description: 'Severity of threat identified as part of the malware scan.',
    }),
    ItemCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'itemCount' },
      description: 'Total number of files infected with given threat.',
    }),
    FilePaths: FilePathsSchema.exactOptional().openapi({
      xml: { name: 'filePaths' },
      description: 'List of infected files in EBS volume with details.',
    }),
  })
  .openapi({
    description:
      'Contains files infected with the given threat providing details of malware name and severity.',
    required: [],
  })
  .openapi('ScanThreatName')

const ScanThreatNamesSchema = z.array(ScanThreatNameSchema).openapi('ScanThreatNames')

const ThreatDetectedByNameSchema = z
  .object({
    ItemCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'itemCount' },
      description: 'Total number of infected files identified.',
    }),
    UniqueThreatNameCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'uniqueThreatNameCount' },
      description:
        'Total number of unique threats by name identified, as part of the malware scan.',
    }),
    Shortened: BooleanSchema.exactOptional().openapi({
      xml: { name: 'shortened' },
      description:
        'Flag to determine if the finding contains every single infected file-path and/or every threat.',
    }),
    ThreatNames: ScanThreatNamesSchema.exactOptional().openapi({
      xml: { name: 'threatNames' },
      description: 'List of identified threats with details, organized by threat name.',
    }),
  })
  .openapi({
    description: 'Contains details about identified threats organized by threat name.',
    required: [],
  })
  .openapi('ThreatDetectedByName')

const ScanDetectionsSchema = z
  .object({
    ScannedItemCount: ScannedItemCountSchema.exactOptional().openapi({
      xml: { name: 'scannedItemCount' },
      description: 'Total number of scanned files.',
    }),
    ThreatsDetectedItemCount: ThreatsDetectedItemCountSchema.exactOptional().openapi({
      xml: { name: 'threatsDetectedItemCount' },
      description: 'Total number of infected files.',
    }),
    HighestSeverityThreatDetails: HighestSeverityThreatDetailsSchema.exactOptional().openapi({
      xml: { name: 'highestSeverityThreatDetails' },
      description:
        'Details of the highest severity threat detected during malware scan and number of infected files.',
    }),
    ThreatDetectedByName: ThreatDetectedByNameSchema.exactOptional().openapi({
      xml: { name: 'threatDetectedByName' },
      description: 'Contains details about identified threats organized by threat name.',
    }),
  })
  .openapi({
    description: 'Contains a complete view providing malware scan result details.',
    required: [],
  })
  .openapi('ScanDetections')

const EbsVolumeScanDetailsSchema = z
  .object({
    ScanId: StringSchema.exactOptional().openapi({
      xml: { name: 'scanId' },
      description: 'Unique Id of the malware scan that generated the finding.',
    }),
    ScanStartedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'scanStartedAt' },
      description: 'Returns the start date and time of the malware scan.',
    }),
    ScanCompletedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'scanCompletedAt' },
      description: 'Returns the completion date and time of the malware scan.',
    }),
    TriggerFindingId: StringSchema.exactOptional().openapi({
      xml: { name: 'triggerFindingId' },
      description: 'GuardDuty finding ID that triggered a malware scan.',
    }),
    Sources: SourcesSchema.exactOptional().openapi({
      xml: { name: 'sources' },
      description: 'Contains list of threat intelligence sources used to detect threats.',
    }),
    ScanDetections: ScanDetectionsSchema.exactOptional().openapi({
      xml: { name: 'scanDetections' },
      description: 'Contains a complete view providing malware scan result details.',
    }),
  })
  .openapi({
    description: 'Contains details from the malware scan that created a finding.',
    required: [],
  })
  .openapi('EbsVolumeScanDetails')

const LineageObjectSchema = z
  .object({
    StartTime: TimestampSchema.exactOptional().openapi({
      xml: { name: 'startTime' },
      description: 'The time when the process started. This is in UTC format.',
    }),
    NamespacePid: IntegerSchema.exactOptional().openapi({
      xml: { name: 'namespacePid' },
      description: 'The process ID of the child process.',
    }),
    UserId: IntegerSchema.exactOptional().openapi({
      xml: { name: 'userId' },
      description: 'The user ID of the user that executed the process.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the process.',
    }),
    Pid: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pid' },
      description: 'The ID of the process.',
    }),
    Uuid: StringSchema.exactOptional().openapi({
      xml: { name: 'uuid' },
      description: 'The unique ID assigned to the process by GuardDuty.',
    }),
    ExecutablePath: StringSchema.exactOptional().openapi({
      xml: { name: 'executablePath' },
      description: 'The absolute path of the process executable file.',
    }),
    Euid: IntegerSchema.exactOptional().openapi({
      xml: { name: 'euid' },
      description: 'The effective user ID that was used to execute the process.',
    }),
    ParentUuid: StringSchema.exactOptional().openapi({
      xml: { name: 'parentUuid' },
      description:
        'The unique ID of the parent process. This ID is assigned to the parent process by GuardDuty.',
    }),
  })
  .openapi({ description: 'Information about the runtime process details.', required: [] })
  .openapi('LineageObject')

const LineageSchema = z.array(LineageObjectSchema).openapi('Lineage')

const ProcessDetailsSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the process.',
    }),
    ExecutablePath: StringSchema.exactOptional().openapi({
      xml: { name: 'executablePath' },
      description: 'The absolute path of the process executable file.',
    }),
    ExecutableSha256: StringSchema.exactOptional().openapi({
      xml: { name: 'executableSha256' },
      description: 'The <code>SHA256</code> hash of the process executable.',
    }),
    NamespacePid: IntegerSchema.exactOptional().openapi({
      xml: { name: 'namespacePid' },
      description: 'The ID of the child process.',
    }),
    Pwd: StringSchema.exactOptional().openapi({
      xml: { name: 'pwd' },
      description: 'The present working directory of the process.',
    }),
    Pid: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pid' },
      description: 'The ID of the process.',
    }),
    StartTime: TimestampSchema.exactOptional().openapi({
      xml: { name: 'startTime' },
      description: 'The time when the process started. This is in UTC format.',
    }),
    Uuid: StringSchema.exactOptional().openapi({
      xml: { name: 'uuid' },
      description: 'The unique ID assigned to the process by GuardDuty.',
    }),
    ParentUuid: StringSchema.exactOptional().openapi({
      xml: { name: 'parentUuid' },
      description:
        'The unique ID of the parent process. This ID is assigned to the parent process by GuardDuty.',
    }),
    User: StringSchema.exactOptional().openapi({
      xml: { name: 'user' },
      description: 'The user that executed the process.',
    }),
    UserId: IntegerSchema.exactOptional().openapi({
      xml: { name: 'userId' },
      description: 'The unique ID of the user that executed the process.',
    }),
    Euid: IntegerSchema.exactOptional().openapi({
      xml: { name: 'euid' },
      description: 'The effective user ID of the user that executed the process.',
    }),
    Lineage: LineageSchema.exactOptional().openapi({
      xml: { name: 'lineage' },
      description: "Information about the process's lineage.",
    }),
  })
  .openapi({ description: 'Information about the observed process.', required: [] })
  .openapi('ProcessDetails')

const FlagsListSchema = z.array(StringSchema).openapi('FlagsList')

const MemoryRegionsListSchema = z.array(StringSchema).openapi('MemoryRegionsList')

const RuntimeContextSchema = z
  .object({
    ModifyingProcess: ProcessDetailsSchema.exactOptional().openapi({
      xml: { name: 'modifyingProcess' },
      description:
        'Information about the process that modified the current process. This is available for multiple finding types.',
    }),
    ModifiedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'modifiedAt' },
      description:
        'The timestamp at which the process modified the current process. The timestamp is in UTC date string format.',
    }),
    ScriptPath: StringSchema.exactOptional().openapi({
      xml: { name: 'scriptPath' },
      description: 'The path to the script that was executed.',
    }),
    LibraryPath: StringSchema.exactOptional().openapi({
      xml: { name: 'libraryPath' },
      description: 'The path to the new library that was loaded.',
    }),
    LdPreloadValue: StringSchema.exactOptional().openapi({
      xml: { name: 'ldPreloadValue' },
      description: 'The value of the LD_PRELOAD environment variable.',
    }),
    SocketPath: StringSchema.exactOptional().openapi({
      xml: { name: 'socketPath' },
      description: 'The path to the docket socket that was accessed.',
    }),
    RuncBinaryPath: StringSchema.exactOptional().openapi({
      xml: { name: 'runcBinaryPath' },
      description: 'The path to the leveraged <code>runc</code> implementation.',
    }),
    ReleaseAgentPath: StringSchema.exactOptional().openapi({
      xml: { name: 'releaseAgentPath' },
      description: 'The path in the container that modified the release agent file.',
    }),
    MountSource: StringSchema.exactOptional().openapi({
      xml: { name: 'mountSource' },
      description: 'The path on the host that is mounted by the container.',
    }),
    MountTarget: StringSchema.exactOptional().openapi({
      xml: { name: 'mountTarget' },
      description: 'The path in the container that is mapped to the host directory.',
    }),
    FileSystemType: StringSchema.exactOptional().openapi({
      xml: { name: 'fileSystemType' },
      description: 'Represents the type of mounted fileSystem.',
    }),
    Flags: FlagsListSchema.exactOptional().openapi({
      xml: { name: 'flags' },
      description:
        'Represents options that control the behavior of a runtime operation or action. For example, a filesystem mount operation may contain a read-only flag.',
    }),
    ModuleName: StringSchema.exactOptional().openapi({
      xml: { name: 'moduleName' },
      description: 'The name of the module loaded into the kernel.',
    }),
    ModuleFilePath: StringSchema.exactOptional().openapi({
      xml: { name: 'moduleFilePath' },
      description: 'The path to the module loaded into the kernel.',
    }),
    ModuleSha256: StringSchema.exactOptional().openapi({
      xml: { name: 'moduleSha256' },
      description: 'The <code>SHA256</code> hash of the module.',
    }),
    ShellHistoryFilePath: StringSchema.exactOptional().openapi({
      xml: { name: 'shellHistoryFilePath' },
      description: 'The path to the modified shell history file.',
    }),
    TargetProcess: ProcessDetailsSchema.exactOptional().openapi({
      xml: { name: 'targetProcess' },
      description:
        'Information about the process that had its memory overwritten by the current process.',
    }),
    AddressFamily: StringSchema.exactOptional().openapi({
      xml: { name: 'addressFamily' },
      description:
        'Represents the communication protocol associated with the address. For example, the address family <code>AF_INET</code> is used for IP version of 4 protocol.',
    }),
    IanaProtocolNumber: IntegerSchema.exactOptional().openapi({
      xml: { name: 'ianaProtocolNumber' },
      description:
        'Specifies a particular protocol within the address family. Usually there is a single protocol in address families. For example, the address family <code>AF_INET</code> only has the IP protocol.',
    }),
    MemoryRegions: MemoryRegionsListSchema.exactOptional().openapi({
      xml: { name: 'memoryRegions' },
      description: "Specifies the Region of a process's address space such as stack and heap.",
    }),
  })
  .openapi({ description: 'Additional information about the suspicious activity.', required: [] })
  .openapi('RuntimeContext')

const RuntimeDetailsSchema = z
  .object({
    Process: ProcessDetailsSchema.exactOptional().openapi({
      xml: { name: 'process' },
      description: 'Information about the observed process.',
    }),
    Context: RuntimeContextSchema.exactOptional().openapi({
      xml: { name: 'context' },
      description: 'Additional information about the suspicious activity.',
    }),
  })
  .openapi({
    description:
      'Information about the process and any required context values for a specific finding.',
    required: [],
  })
  .openapi('RuntimeDetails')

type ServiceType = {
  Action?: z.infer<typeof ActionSchema>
  Evidence?: z.infer<typeof EvidenceSchema>
  Archived?: z.infer<typeof BooleanSchema>
  Count?: z.infer<typeof IntegerSchema>
  DetectorId?: z.infer<typeof DetectorIdSchema>
  EventFirstSeen?: z.infer<typeof StringSchema>
  EventLastSeen?: z.infer<typeof StringSchema>
  ResourceRole?: z.infer<typeof StringSchema>
  ServiceName?: z.infer<typeof StringSchema>
  UserFeedback?: z.infer<typeof StringSchema>
  AdditionalInfo?: z.infer<typeof ServiceAdditionalInfoSchema>
  FeatureName?: z.infer<typeof StringSchema>
  EbsVolumeScanDetails?: z.infer<typeof EbsVolumeScanDetailsSchema>
  RuntimeDetails?: z.infer<typeof RuntimeDetailsSchema>
}

const ServiceSchema: z.ZodType<ServiceType> = z
  .object({
    Action: ActionSchema.exactOptional().openapi({
      xml: { name: 'action' },
      description: 'Information about the activity that is described in a finding.',
    }),
    Evidence: EvidenceSchema.exactOptional().openapi({
      xml: { name: 'evidence' },
      description: 'An evidence object associated with the service.',
    }),
    Archived: BooleanSchema.exactOptional().openapi({
      xml: { name: 'archived' },
      description: 'Indicates whether this finding is archived.',
    }),
    Count: IntegerSchema.exactOptional().openapi({
      xml: { name: 'count' },
      description: 'The total count of the occurrences of this finding type.',
    }),
    DetectorId: DetectorIdSchema.exactOptional().openapi({
      xml: { name: 'detectorId' },
      description: 'The detector ID for the GuardDuty service.',
    }),
    EventFirstSeen: StringSchema.exactOptional().openapi({
      xml: { name: 'eventFirstSeen' },
      description:
        'The first-seen timestamp of the activity that prompted GuardDuty to generate this finding.',
    }),
    EventLastSeen: StringSchema.exactOptional().openapi({
      xml: { name: 'eventLastSeen' },
      description:
        'The last-seen timestamp of the activity that prompted GuardDuty to generate this finding.',
    }),
    ResourceRole: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceRole' },
      description: 'The resource role information for this finding.',
    }),
    ServiceName: StringSchema.exactOptional().openapi({
      xml: { name: 'serviceName' },
      description:
        'The name of the Amazon Web Services service (GuardDuty) that generated a finding.',
    }),
    UserFeedback: StringSchema.exactOptional().openapi({
      xml: { name: 'userFeedback' },
      description: 'Feedback that was submitted about the finding.',
    }),
    AdditionalInfo: ServiceAdditionalInfoSchema.exactOptional().openapi({
      xml: { name: 'additionalInfo' },
      description: 'Contains additional information about the generated finding.',
    }),
    FeatureName: StringSchema.exactOptional().openapi({
      xml: { name: 'featureName' },
      description: 'The name of the feature that generated a finding.',
    }),
    EbsVolumeScanDetails: EbsVolumeScanDetailsSchema.exactOptional().openapi({
      xml: { name: 'ebsVolumeScanDetails' },
      description: 'Returns details from the malware scan that created a finding.',
    }),
    RuntimeDetails: RuntimeDetailsSchema.exactOptional().openapi({
      xml: { name: 'runtimeDetails' },
      description:
        'Information about the process and any required context values for a specific finding',
    }),
  })
  .openapi({
    description: 'Contains additional information about the generated finding.',
    required: [],
  })
  .openapi('Service')

const FindingTypeSchema = z.string().min(1).max(50).openapi('FindingType')

type FindingType = {
  AccountId: z.infer<typeof StringSchema>
  Arn: z.infer<typeof StringSchema>
  Confidence?: z.infer<typeof DoubleSchema>
  CreatedAt: z.infer<typeof StringSchema>
  Description?: z.infer<typeof StringSchema>
  Id: z.infer<typeof StringSchema>
  Partition?: z.infer<typeof StringSchema>
  Region: z.infer<typeof StringSchema>
  Resource: z.infer<typeof ResourceSchema>
  SchemaVersion: z.infer<typeof StringSchema>
  Service?: z.infer<typeof ServiceSchema>
  Severity: z.infer<typeof DoubleSchema>
  Title?: z.infer<typeof StringSchema>
  Type: z.infer<typeof FindingTypeSchema>
  UpdatedAt: z.infer<typeof StringSchema>
}

const FindingSchema: z.ZodType<FindingType> = z
  .object({
    AccountId: StringSchema.openapi({
      xml: { name: 'accountId' },
      description: 'The ID of the account in which the finding was generated.',
    }),
    Arn: StringSchema.openapi({ xml: { name: 'arn' }, description: 'The ARN of the finding.' }),
    Confidence: DoubleSchema.exactOptional().openapi({
      xml: { name: 'confidence' },
      description: 'The confidence score for the finding.',
    }),
    CreatedAt: StringSchema.openapi({
      xml: { name: 'createdAt' },
      description: 'The time and date when the finding was created.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'The description of the finding.',
    }),
    Id: StringSchema.openapi({ xml: { name: 'id' }, description: 'The ID of the finding.' }),
    Partition: StringSchema.exactOptional().openapi({
      xml: { name: 'partition' },
      description: 'The partition associated with the finding.',
    }),
    Region: StringSchema.openapi({
      xml: { name: 'region' },
      description: 'The Region where the finding was generated.',
    }),
    Resource: ResourceSchema.openapi({ xml: { name: 'resource' } }),
    SchemaVersion: StringSchema.openapi({
      xml: { name: 'schemaVersion' },
      description: 'The version of the schema used for the finding.',
    }),
    Service: ServiceSchema.exactOptional().openapi({ xml: { name: 'service' } }),
    Severity: DoubleSchema.openapi({
      xml: { name: 'severity' },
      description: 'The severity of the finding.',
    }),
    Title: StringSchema.exactOptional().openapi({
      xml: { name: 'title' },
      description: 'The title of the finding.',
    }),
    Type: FindingTypeSchema.openapi({ xml: { name: 'type' }, description: 'The type of finding.' }),
    UpdatedAt: StringSchema.openapi({
      xml: { name: 'updatedAt' },
      description: 'The time and date when the finding was last updated.',
    }),
  })
  .openapi({
    required: [
      'AccountId',
      'Arn',
      'CreatedAt',
      'Id',
      'Region',
      'Resource',
      'SchemaVersion',
      'Severity',
      'Type',
      'UpdatedAt',
    ],
    description:
      'Contains information about the finding, which is generated when abnormal or suspicious activity is detected.',
  })
  .openapi('Finding')

type FindingsType = z.infer<typeof FindingSchema>[]

const FindingsSchema: z.ZodType<FindingsType> = z
  .array(FindingSchema)
  .min(0)
  .max(50)
  .openapi('Findings')

type GetFindingsResponseType = { Findings: z.infer<typeof FindingsSchema> }

const AcceptAdministratorInvitationResponseSchema = z
  .looseObject({})
  .openapi('AcceptAdministratorInvitationResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const AcceptInvitationResponseSchema = z
  .looseObject({})
  .openapi({
    deprecated: true,
    description: 'This output is deprecated, use AcceptAdministratorInvitationResponse instead',
  })
  .openapi('AcceptInvitationResponse')

const ArchiveFindingsResponseSchema = z.looseObject({}).openapi('ArchiveFindingsResponse')

const FindingIdSchema = z.string().min(1).max(300).openapi('FindingId')

const DataSourceStatusSchema = z.enum(['ENABLED', 'DISABLED']).openapi('DataSourceStatus')

const EbsVolumesResultSchema = z
  .object({
    Status: DataSourceStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'Describes whether scanning EBS volumes is enabled as a data source.',
    }),
    Reason: StringSchema.exactOptional().openapi({
      xml: { name: 'reason' },
      description:
        'Specifies the reason why scanning EBS volumes (Malware Protection) was not enabled as a data source.',
    }),
  })
  .openapi({
    description: 'Describes the configuration of scanning EBS volumes as a data source.',
    required: [],
  })
  .openapi('EbsVolumesResult')

const ScanEc2InstanceWithFindingsResultSchema = z
  .object({
    EbsVolumes: EbsVolumesResultSchema.exactOptional().openapi({
      xml: { name: 'ebsVolumes' },
      description: 'Describes the configuration of scanning EBS volumes as a data source.',
    }),
  })
  .openapi({
    description:
      'An object that contains information on the status of whether Malware Protection for EC2 instances with findings will be enabled as a data source.',
    required: [],
  })
  .openapi('ScanEc2InstanceWithFindingsResult')

const MalwareProtectionConfigurationResultSchema = z
  .object({
    ScanEc2InstanceWithFindings: ScanEc2InstanceWithFindingsResultSchema.exactOptional().openapi({
      xml: { name: 'scanEc2InstanceWithFindings' },
      description:
        'Describes the configuration of Malware Protection for EC2 instances with findings.',
    }),
    ServiceRole: StringSchema.exactOptional().openapi({
      xml: { name: 'serviceRole' },
      description: 'The GuardDuty Malware Protection service role.',
    }),
  })
  .openapi({
    description:
      'An object that contains information on the status of all Malware Protection data sources.',
    required: [],
  })
  .openapi('MalwareProtectionConfigurationResult')

const UnprocessedDataSourcesResultSchema = z
  .object({
    MalwareProtection: MalwareProtectionConfigurationResultSchema.exactOptional().openapi({
      xml: { name: 'malwareProtection' },
    }),
  })
  .openapi({
    description: "Specifies the names of the data sources that couldn't be enabled.",
    required: [],
  })
  .openapi('UnprocessedDataSourcesResult')

const CreateDetectorResponseSchema = z
  .object({
    DetectorId: DetectorIdSchema.exactOptional().openapi({
      xml: { name: 'detectorId' },
      description: 'The unique ID of the created detector.',
    }),
    UnprocessedDataSources: UnprocessedDataSourcesResultSchema.exactOptional().openapi({
      xml: { name: 'unprocessedDataSources' },
      description:
        "Specifies the data sources that couldn't be enabled when GuardDuty was enabled for the first time.",
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateDetectorResponse')

const S3LogsConfigurationSchema = z
  .object({
    Enable: BooleanSchema.openapi({
      xml: { name: 'enable' },
      description: ' The status of S3 data event logs as a data source.',
    }),
  })
  .openapi({
    required: ['Enable'],
    description: 'Describes whether S3 data event logs will be enabled as a data source.',
  })
  .openapi('S3LogsConfiguration')

const KubernetesAuditLogsConfigurationSchema = z
  .object({
    Enable: BooleanSchema.openapi({
      xml: { name: 'enable' },
      description: 'The status of Kubernetes audit logs as a data source.',
    }),
  })
  .openapi({
    required: ['Enable'],
    description: 'Describes whether Kubernetes audit logs are enabled as a data source.',
  })
  .openapi('KubernetesAuditLogsConfiguration')

const KubernetesConfigurationSchema = z
  .object({
    AuditLogs: KubernetesAuditLogsConfigurationSchema.openapi({
      xml: { name: 'auditLogs' },
      description: 'The status of Kubernetes audit logs as a data source.',
    }),
  })
  .openapi({
    required: ['AuditLogs'],
    description: 'Describes whether any Kubernetes data sources are enabled.',
  })
  .openapi('KubernetesConfiguration')

const ScanEc2InstanceWithFindingsSchema = z
  .object({
    EbsVolumes: BooleanSchema.exactOptional().openapi({
      xml: { name: 'ebsVolumes' },
      description: 'Describes the configuration for scanning EBS volumes as data source.',
    }),
  })
  .openapi({
    description:
      'Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source.',
    required: [],
  })
  .openapi('ScanEc2InstanceWithFindings')

const MalwareProtectionConfigurationSchema = z
  .object({
    ScanEc2InstanceWithFindings: ScanEc2InstanceWithFindingsSchema.exactOptional().openapi({
      xml: { name: 'scanEc2InstanceWithFindings' },
      description:
        'Describes the configuration of Malware Protection for EC2 instances with findings.',
    }),
  })
  .openapi({
    description: 'Describes whether Malware Protection will be enabled as a data source.',
    required: [],
  })
  .openapi('MalwareProtectionConfiguration')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const DetectorFeatureSchema = z
  .enum([
    'S3_DATA_EVENTS',
    'EKS_AUDIT_LOGS',
    'EBS_MALWARE_PROTECTION',
    'RDS_LOGIN_EVENTS',
    'EKS_RUNTIME_MONITORING',
    'LAMBDA_NETWORK_LOGS',
  ])
  .openapi('DetectorFeature')

const FeatureStatusSchema = z.enum(['ENABLED', 'DISABLED']).openapi('FeatureStatus')

const FeatureAdditionalConfigurationSchema = z
  .literal('EKS_ADDON_MANAGEMENT')
  .openapi('FeatureAdditionalConfiguration')

const DetectorAdditionalConfigurationSchema = z
  .object({
    Name: FeatureAdditionalConfigurationSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the additional configuration.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'Status of the additional configuration.',
    }),
  })
  .openapi({
    description:
      'Information about the additional configuration for a feature in your GuardDuty account.',
    required: [],
  })
  .openapi('DetectorAdditionalConfiguration')

const DetectorAdditionalConfigurationsSchema = z
  .array(DetectorAdditionalConfigurationSchema)
  .openapi('DetectorAdditionalConfigurations')

const DetectorFeatureConfigurationSchema = z
  .object({
    Name: DetectorFeatureSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the feature.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The status of the feature.',
    }),
    AdditionalConfiguration: DetectorAdditionalConfigurationsSchema.exactOptional().openapi({
      xml: { name: 'additionalConfiguration' },
      description: 'Additional configuration for a resource.',
    }),
  })
  .openapi({ description: 'Contains information about a GuardDuty feature.', required: [] })
  .openapi('DetectorFeatureConfiguration')

const FilterNameSchema = z.string().min(3).max(64).openapi('FilterName')

const CreateFilterResponseSchema = z
  .object({
    Name: FilterNameSchema.openapi({
      xml: { name: 'name' },
      description: 'The name of the successfully created filter.',
    }),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateFilterResponse')

const EqSchema = z.array(StringSchema).openapi('Eq')

const NeqSchema = z.array(StringSchema).openapi('Neq')

const EqualsSchema = z.array(StringSchema).openapi('Equals')

const NotEqualsSchema = z.array(StringSchema).openapi('NotEquals')

const LongSchema = z.int().openapi('Long')

const ConditionSchema = z
  .object({
    Eq: EqSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'eq' },
      description:
        'Represents the <i>equal</i> condition to be applied to a single field when querying for findings.',
    }),
    Neq: NeqSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'neq' },
      description:
        'Represents the <i>not equal</i> condition to be applied to a single field when querying for findings.',
    }),
    Gt: IntegerSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'gt' },
      description:
        'Represents a <i>greater than</i> condition to be applied to a single field when querying for findings.',
    }),
    Gte: IntegerSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'gte' },
      description:
        'Represents a <i>greater than or equal</i> condition to be applied to a single field when querying for findings.',
    }),
    Lt: IntegerSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'lt' },
      description:
        'Represents a <i>less than</i> condition to be applied to a single field when querying for findings.',
    }),
    Lte: IntegerSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'lte' },
      description:
        'Represents a <i>less than or equal</i> condition to be applied to a single field when querying for findings.',
    }),
    Equals: EqualsSchema.exactOptional().openapi({
      xml: { name: 'equals' },
      description:
        'Represents an <i>equal</i> <b/> condition to be applied to a single field when querying for findings.',
    }),
    NotEquals: NotEqualsSchema.exactOptional().openapi({
      xml: { name: 'notEquals' },
      description:
        'Represents a <i>not equal</i> <b/> condition to be applied to a single field when querying for findings.',
    }),
    GreaterThan: LongSchema.exactOptional().openapi({
      xml: { name: 'greaterThan' },
      description:
        'Represents a <i>greater than</i> condition to be applied to a single field when querying for findings.',
    }),
    GreaterThanOrEqual: LongSchema.exactOptional().openapi({
      xml: { name: 'greaterThanOrEqual' },
      description:
        'Represents a <i>greater than or equal</i> condition to be applied to a single field when querying for findings.',
    }),
    LessThan: LongSchema.exactOptional().openapi({
      xml: { name: 'lessThan' },
      description:
        'Represents a <i>less than</i> condition to be applied to a single field when querying for findings.',
    }),
    LessThanOrEqual: LongSchema.exactOptional().openapi({
      xml: { name: 'lessThanOrEqual' },
      description:
        'Represents a <i>less than or equal</i> condition to be applied to a single field when querying for findings.',
    }),
  })
  .openapi({ description: 'Contains information about the condition.', required: [] })
  .openapi('Condition')

const CriterionSchema = z.record(z.string(), ConditionSchema).openapi('Criterion')

const CreateIPSetResponseSchema = z
  .object({
    IpSetId: StringSchema.openapi({
      xml: { name: 'ipSetId' },
      description: 'The ID of the IPSet resource.',
    }),
  })
  .openapi({ required: ['IpSetId'] })
  .openapi('CreateIPSetResponse')

const AccountIdSchema = z.string().length(12).openapi('AccountId')

const UnprocessedAccountSchema = z
  .object({
    AccountId: AccountIdSchema.openapi({
      xml: { name: 'accountId' },
      description: 'The Amazon Web Services account ID.',
    }),
    Result: StringSchema.openapi({
      xml: { name: 'result' },
      description: "A reason why the account hasn't been processed.",
    }),
  })
  .openapi({
    required: ['AccountId', 'Result'],
    description: "Contains information about the accounts that weren't processed.",
  })
  .openapi('UnprocessedAccount')

const UnprocessedAccountsSchema = z
  .array(UnprocessedAccountSchema)
  .min(0)
  .max(50)
  .openapi('UnprocessedAccounts')

const CreateMembersResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that include the <code>accountIds</code> of the unprocessed accounts and a result string that explains why each was unprocessed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('CreateMembersResponse')

const EmailSchema = z.string().min(1).max(64).openapi('Email')

const AccountDetailSchema = z
  .object({
    AccountId: AccountIdSchema.openapi({
      xml: { name: 'accountId' },
      description: 'The member account ID.',
    }),
    Email: EmailSchema.openapi({
      xml: { name: 'email' },
      description: 'The email address of the member account.',
    }),
  })
  .openapi({
    required: ['AccountId', 'Email'],
    description: 'Contains information about the account.',
  })
  .openapi('AccountDetail')

const CreatePublishingDestinationResponseSchema = z
  .object({
    DestinationId: StringSchema.openapi({
      xml: { name: 'destinationId' },
      description: 'The ID of the publishing destination that is created.',
    }),
  })
  .openapi({ required: ['DestinationId'] })
  .openapi('CreatePublishingDestinationResponse')

const CreateSampleFindingsResponseSchema = z.looseObject({}).openapi('CreateSampleFindingsResponse')

const CreateThreatIntelSetResponseSchema = z
  .object({
    ThreatIntelSetId: StringSchema.openapi({
      xml: { name: 'threatIntelSetId' },
      description: 'The ID of the ThreatIntelSet resource.',
    }),
  })
  .openapi({ required: ['ThreatIntelSetId'] })
  .openapi('CreateThreatIntelSetResponse')

const DeclineInvitationsResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('DeclineInvitationsResponse')

const DeleteDetectorResponseSchema = z.looseObject({}).openapi('DeleteDetectorResponse')

const DeleteFilterResponseSchema = z.looseObject({}).openapi('DeleteFilterResponse')

const DeleteIPSetResponseSchema = z.looseObject({}).openapi('DeleteIPSetResponse')

const DeleteInvitationsResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('DeleteInvitationsResponse')

const DeleteMembersResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description: 'The accounts that could not be processed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('DeleteMembersResponse')

const DeletePublishingDestinationResponseSchema = z
  .looseObject({})
  .openapi('DeletePublishingDestinationResponse')

const DeleteThreatIntelSetResponseSchema = z.looseObject({}).openapi('DeleteThreatIntelSetResponse')

const NonEmptyStringSchema = z.string().min(1).max(200).openapi('NonEmptyString')

const ScanStatusSchema = z.enum(['RUNNING', 'COMPLETED', 'FAILED']).openapi('ScanStatus')

const TriggerDetailsSchema = z
  .object({
    GuardDutyFindingId: NonEmptyStringSchema.exactOptional().openapi({
      xml: { name: 'guardDutyFindingId' },
      description: 'The ID of the GuardDuty finding that triggered the malware scan.',
    }),
    Description: NonEmptyStringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'The description of the scan trigger.',
    }),
  })
  .openapi({ description: 'Represents the reason the scan was triggered.', required: [] })
  .openapi('TriggerDetails')

const InstanceArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov):[a-z]+:[a-z]+(-[0-9]+|-[a-z]+)+:([0-9]{12}):[a-z\-]+\/[a-zA-Z0-9]*$/,
  )
  .openapi('InstanceArn')

const ResourceDetailsSchema = z
  .object({
    InstanceArn: InstanceArnSchema.exactOptional().openapi({
      xml: { name: 'instanceArn' },
      description: 'InstanceArn that was scanned in the scan entry.',
    }),
  })
  .openapi({
    description: 'Represents the resources that were scanned in the scan entry.',
    required: [],
  })
  .openapi('ResourceDetails')

const ScanResultSchema = z.enum(['CLEAN', 'INFECTED']).openapi('ScanResult')

const ScanResultDetailsSchema = z
  .object({
    ScanResult: ScanResultSchema.exactOptional().openapi({
      xml: { name: 'scanResult' },
      description: 'An enum value representing possible scan results.',
    }),
  })
  .openapi({ description: 'Represents the result of the scan.', required: [] })
  .openapi('ScanResultDetails')

const PositiveLongSchema = z.int().min(0).openapi('PositiveLong')

const ScanSchema = z
  .object({
    DetectorId: DetectorIdSchema.exactOptional().openapi({
      xml: { name: 'detectorId' },
      description: 'The unique ID of the detector that the request is associated with.',
    }),
    AdminDetectorId: DetectorIdSchema.exactOptional().openapi({
      xml: { name: 'adminDetectorId' },
      description:
        'The unique detector ID of the administrator account that the request is associated with. Note that this value will be the same as the one used for <code>DetectorId</code> if the account is an administrator.',
    }),
    ScanId: NonEmptyStringSchema.exactOptional().openapi({
      xml: { name: 'scanId' },
      description: 'The unique scan ID associated with a scan entry.',
    }),
    ScanStatus: ScanStatusSchema.exactOptional().openapi({
      xml: { name: 'scanStatus' },
      description: 'An enum value representing possible scan statuses.',
    }),
    FailureReason: NonEmptyStringSchema.exactOptional().openapi({
      xml: { name: 'failureReason' },
      description: 'Represents the reason for FAILED scan status.',
    }),
    ScanStartTime: TimestampSchema.exactOptional().openapi({
      xml: { name: 'scanStartTime' },
      description: 'The timestamp of when the scan was triggered.',
    }),
    ScanEndTime: TimestampSchema.exactOptional().openapi({
      xml: { name: 'scanEndTime' },
      description: 'The timestamp of when the scan was finished.',
    }),
    TriggerDetails: TriggerDetailsSchema.exactOptional().openapi({
      xml: { name: 'triggerDetails' },
      description: 'Specifies the reason why the scan was initiated.',
    }),
    ResourceDetails: ResourceDetailsSchema.exactOptional().openapi({
      xml: { name: 'resourceDetails' },
      description: 'Represents the resources that were scanned in the scan entry.',
    }),
    ScanResultDetails: ScanResultDetailsSchema.exactOptional().openapi({
      xml: { name: 'scanResultDetails' },
      description: 'Represents the result of the scan.',
    }),
    AccountId: AccountIdSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The ID for the account that belongs to the scan.',
    }),
    TotalBytes: PositiveLongSchema.exactOptional().openapi({
      xml: { name: 'totalBytes' },
      description: 'Represents total bytes that were scanned.',
    }),
    FileCount: PositiveLongSchema.exactOptional().openapi({
      xml: { name: 'fileCount' },
      description: 'Represents the number of files that were scanned.',
    }),
    AttachedVolumes: VolumeDetailsSchema.exactOptional().openapi({
      xml: { name: 'attachedVolumes' },
      description: 'List of volumes that were attached to the original instance to be scanned.',
    }),
  })
  .openapi({ description: 'Contains information about a malware scan.', required: [] })
  .openapi('Scan')

const ScansSchema = z.array(ScanSchema).openapi('Scans')

const DescribeMalwareScansResponseSchema = z
  .object({
    Scans: ScansSchema.openapi({
      xml: { name: 'scans' },
      description: 'Contains information about malware scans.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: ['Scans'] })
  .openapi('DescribeMalwareScansResponse')

const CriterionKeySchema = z
  .enum([
    'EC2_INSTANCE_ARN',
    'SCAN_ID',
    'ACCOUNT_ID',
    'GUARDDUTY_FINDING_ID',
    'SCAN_START_TIME',
    'SCAN_STATUS',
  ])
  .openapi('CriterionKey')

const LongValueSchema = z.int().openapi('LongValue')

const FilterConditionSchema = z
  .object({
    EqualsValue: NonEmptyStringSchema.exactOptional().openapi({
      xml: { name: 'equalsValue' },
      description:
        'Represents an <i>equal</i> <b/> condition to be applied to a single field when querying for scan entries.',
    }),
    GreaterThan: LongValueSchema.exactOptional().openapi({
      xml: { name: 'greaterThan' },
      description:
        'Represents a <i>greater than</i> condition to be applied to a single field when querying for scan entries.',
    }),
    LessThan: LongValueSchema.exactOptional().openapi({
      xml: { name: 'lessThan' },
      description:
        'Represents a <i>less than</i> condition to be applied to a single field when querying for scan entries.',
    }),
  })
  .openapi({ description: 'Contains information about the condition.', required: [] })
  .openapi('FilterCondition')

const FilterCriterionSchema = z
  .object({
    CriterionKey: CriterionKeySchema.exactOptional().openapi({
      xml: { name: 'criterionKey' },
      description:
        'An enum value representing possible scan properties to match with given scan entries.',
    }),
    FilterCondition: FilterConditionSchema.exactOptional().openapi({
      xml: { name: 'filterCondition' },
      description: 'Contains information about the condition.',
    }),
  })
  .openapi({
    description:
      'Represents a condition that when matched will be added to the response of the operation. Irrespective of using any filter criteria, an administrator account can view the scan entries for all of its member accounts. However, each member account can view the scan entries only for their own account.',
    required: [],
  })
  .openapi('FilterCriterion')

const FilterCriterionListSchema = z
  .array(FilterCriterionSchema)
  .min(0)
  .max(1)
  .openapi('FilterCriterionList')

const OrderBySchema = z.enum(['ASC', 'DESC']).openapi('OrderBy')

const OrganizationS3LogsConfigurationResultSchema = z
  .object({
    AutoEnable: BooleanSchema.openapi({
      xml: { name: 'autoEnable' },
      description:
        'A value that describes whether S3 data event logs are automatically enabled for new members of the organization.',
    }),
  })
  .openapi({
    required: ['AutoEnable'],
    description:
      'The current configuration of S3 data event logs as a data source for the organization.',
  })
  .openapi('OrganizationS3LogsConfigurationResult')

const OrganizationKubernetesAuditLogsConfigurationResultSchema = z
  .object({
    AutoEnable: BooleanSchema.openapi({
      xml: { name: 'autoEnable' },
      description:
        'Whether Kubernetes audit logs data source should be auto-enabled for new members joining the organization.',
    }),
  })
  .openapi({
    required: ['AutoEnable'],
    description:
      'The current configuration of Kubernetes audit logs as a data source for the organization.',
  })
  .openapi('OrganizationKubernetesAuditLogsConfigurationResult')

const OrganizationKubernetesConfigurationResultSchema = z
  .object({
    AuditLogs: OrganizationKubernetesAuditLogsConfigurationResultSchema.openapi({
      xml: { name: 'auditLogs' },
      description:
        'The current configuration of Kubernetes audit logs as a data source for the organization.',
    }),
  })
  .openapi({
    required: ['AuditLogs'],
    description: 'The current configuration of all Kubernetes data sources for the organization.',
  })
  .openapi('OrganizationKubernetesConfigurationResult')

const OrganizationEbsVolumesResultSchema = z
  .object({
    AutoEnable: BooleanSchema.exactOptional().openapi({
      xml: { name: 'autoEnable' },
      description:
        'An object that contains the status of whether scanning EBS volumes should be auto-enabled for new members joining the organization.',
    }),
  })
  .openapi({
    description:
      'An object that contains information on the status of whether EBS volumes scanning will be enabled as a data source for an organization.',
    required: [],
  })
  .openapi('OrganizationEbsVolumesResult')

const OrganizationScanEc2InstanceWithFindingsResultSchema = z
  .object({
    EbsVolumes: OrganizationEbsVolumesResultSchema.exactOptional().openapi({
      xml: { name: 'ebsVolumes' },
      description: 'Describes the configuration for scanning EBS volumes for an organization.',
    }),
  })
  .openapi({
    description:
      'An object that contains information on the status of scanning EC2 instances with findings for an organization.',
    required: [],
  })
  .openapi('OrganizationScanEc2InstanceWithFindingsResult')

const OrganizationMalwareProtectionConfigurationResultSchema = z
  .object({
    ScanEc2InstanceWithFindings:
      OrganizationScanEc2InstanceWithFindingsResultSchema.exactOptional().openapi({
        xml: { name: 'scanEc2InstanceWithFindings' },
        description:
          'Describes the configuration for scanning EC2 instances with findings for an organization.',
      }),
  })
  .openapi({
    description:
      'An object that contains information on the status of all Malware Protection data source for an organization.',
    required: [],
  })
  .openapi('OrganizationMalwareProtectionConfigurationResult')

const OrganizationDataSourceConfigurationsResultSchema = z
  .object({
    S3Logs: OrganizationS3LogsConfigurationResultSchema.openapi({
      xml: { name: 's3Logs' },
      description: 'Describes whether S3 data event logs are enabled as a data source.',
    }),
    Kubernetes: OrganizationKubernetesConfigurationResultSchema.exactOptional().openapi({
      xml: { name: 'kubernetes' },
      description: 'Describes the configuration of Kubernetes data sources.',
    }),
    MalwareProtection:
      OrganizationMalwareProtectionConfigurationResultSchema.exactOptional().openapi({
        xml: { name: 'malwareProtection' },
        description:
          'Describes the configuration of Malware Protection data source for an organization.',
      }),
  })
  .openapi({
    required: ['S3Logs'],
    description:
      'An object that contains information on which data sources are automatically enabled for new members within the organization.',
  })
  .openapi('OrganizationDataSourceConfigurationsResult')

const OrgFeatureSchema = z
  .enum([
    'S3_DATA_EVENTS',
    'EKS_AUDIT_LOGS',
    'EBS_MALWARE_PROTECTION',
    'RDS_LOGIN_EVENTS',
    'EKS_RUNTIME_MONITORING',
    'LAMBDA_NETWORK_LOGS',
  ])
  .openapi('OrgFeature')

const OrgFeatureStatusSchema = z.enum(['NEW', 'NONE']).openapi('OrgFeatureStatus')

const OrgFeatureAdditionalConfigurationSchema = z
  .literal('EKS_ADDON_MANAGEMENT')
  .openapi('OrgFeatureAdditionalConfiguration')

const OrganizationAdditionalConfigurationResultSchema = z
  .object({
    Name: OrgFeatureAdditionalConfigurationSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description:
        'The name of the additional configuration that is configured for the member accounts within the organization.',
    }),
    AutoEnable: OrgFeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'autoEnable' },
      description:
        '<p>Describes how The status of the additional configuration that are configured for the member accounts within the organization.</p> <p>If you set <code>AutoEnable</code> to <code>NEW</code>, a feature will be configured for only the new accounts when they join the organization.</p> <p>If you set <code>AutoEnable</code> to <code>NONE</code>, no feature will be configured for the accounts when they join the organization.</p>',
    }),
  })
  .openapi({
    description:
      'A list of additional configuration which will be configured for the organization.',
    required: [],
  })
  .openapi('OrganizationAdditionalConfigurationResult')

const OrganizationAdditionalConfigurationResultsSchema = z
  .array(OrganizationAdditionalConfigurationResultSchema)
  .openapi('OrganizationAdditionalConfigurationResults')

const OrganizationFeatureConfigurationResultSchema = z
  .object({
    Name: OrgFeatureSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description:
        'The name of the feature that is configured for the member accounts within the organization.',
    }),
    AutoEnable: OrgFeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'autoEnable' },
      description:
        '<p>Describes how The status of the feature that are configured for the member accounts within the organization.</p> <p>If you set <code>AutoEnable</code> to <code>NEW</code>, a feature will be configured for only the new accounts when they join the organization.</p> <p>If you set <code>AutoEnable</code> to <code>NONE</code>, no feature will be configured for the accounts when they join the organization.</p>',
    }),
    AdditionalConfiguration:
      OrganizationAdditionalConfigurationResultsSchema.exactOptional().openapi({
        xml: { name: 'additionalConfiguration' },
        description:
          'The additional configuration that is configured for the member accounts within the organization.',
      }),
  })
  .openapi({
    description: 'A list of features which will be configured for the organization.',
    required: [],
  })
  .openapi('OrganizationFeatureConfigurationResult')

const OrganizationFeaturesConfigurationsResultsSchema = z
  .array(OrganizationFeatureConfigurationResultSchema)
  .openapi('OrganizationFeaturesConfigurationsResults')

const AutoEnableMembersSchema = z.enum(['NEW', 'ALL', 'NONE']).openapi('AutoEnableMembers')

const DescribeOrganizationConfigurationResponseSchema = z
  .object({
    AutoEnable: BooleanSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'autoEnable' },
      description:
        '<p>Indicates whether GuardDuty is automatically enabled for accounts added to the organization.</p> <p>Even though this is still supported, we recommend using <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p>This field is deprecated, use AutoEnableOrganizationMembers instead',
    }),
    MemberAccountLimitReached: BooleanSchema.openapi({
      xml: { name: 'memberAccountLimitReached' },
      description:
        'Indicates whether the maximum number of allowed member accounts are already associated with the delegated administrator account for your organization.',
    }),
    DataSources: OrganizationDataSourceConfigurationsResultSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        'Describes which data sources are enabled automatically for member accounts.This parameter is deprecated, use Features instead',
    }),
    Features: OrganizationFeaturesConfigurationsResultsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'A list of features that are configured for this organization.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
    AutoEnableOrganizationMembers: AutoEnableMembersSchema.exactOptional().openapi({
      xml: { name: 'autoEnableOrganizationMembers' },
      description:
        '<p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization.</p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the Amazon Web Services Organization have GuardDuty enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> </li> <li> <p> <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any accounts in the organization. GuardDuty must be managed for each account individually by the administrator.</p> </li> </ul>',
    }),
  })
  .openapi({ required: ['MemberAccountLimitReached'] })
  .openapi('DescribeOrganizationConfigurationResponse')

const DestinationTypeSchema = z.literal('S3').openapi('DestinationType')

const PublishingStatusSchema = z
  .enum([
    'PENDING_VERIFICATION',
    'PUBLISHING',
    'UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY',
    'STOPPED',
  ])
  .openapi('PublishingStatus')

const DestinationPropertiesSchema = z
  .object({
    DestinationArn: StringSchema.exactOptional().openapi({
      xml: { name: 'destinationArn' },
      description:
        '<p>The ARN of the resource to publish to.</p> <p>To specify an S3 bucket folder use the following format: <code>arn:aws:s3:::DOC-EXAMPLE-BUCKET/myFolder/</code> </p>',
    }),
    KmsKeyArn: StringSchema.exactOptional().openapi({
      xml: { name: 'kmsKeyArn' },
      description: 'The ARN of the KMS key to use for encryption.',
    }),
  })
  .openapi({
    description:
      'Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.',
    required: [],
  })
  .openapi('DestinationProperties')

const DescribePublishingDestinationResponseSchema = z
  .object({
    DestinationId: StringSchema.openapi({
      xml: { name: 'destinationId' },
      description: 'The ID of the publishing destination.',
    }),
    DestinationType: DestinationTypeSchema.openapi({
      xml: { name: 'destinationType' },
      description:
        'The type of publishing destination. Currently, only Amazon S3 buckets are supported.',
    }),
    Status: PublishingStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'The status of the publishing destination.',
    }),
    PublishingFailureStartTimestamp: LongSchema.openapi({
      xml: { name: 'publishingFailureStartTimestamp' },
      description:
        'The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.',
    }),
    DestinationProperties: DestinationPropertiesSchema.openapi({
      xml: { name: 'destinationProperties' },
      description:
        'A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code> and <code>KmsKeyArn</code> of the publishing destination.',
    }),
  })
  .openapi({
    required: [
      'DestinationId',
      'DestinationType',
      'Status',
      'PublishingFailureStartTimestamp',
      'DestinationProperties',
    ],
  })
  .openapi('DescribePublishingDestinationResponse')

const DisableOrganizationAdminAccountResponseSchema = z
  .looseObject({})
  .openapi('DisableOrganizationAdminAccountResponse')

const DisassociateFromAdministratorAccountResponseSchema = z
  .looseObject({})
  .openapi('DisassociateFromAdministratorAccountResponse')

const DisassociateFromMasterAccountResponseSchema = z
  .looseObject({})
  .openapi({
    deprecated: true,
    description:
      'This output is deprecated, use DisassociateFromAdministratorAccountResponse instead',
  })
  .openapi('DisassociateFromMasterAccountResponse')

const DisassociateMembersResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('DisassociateMembersResponse')

const EnableOrganizationAdminAccountResponseSchema = z
  .looseObject({})
  .openapi('EnableOrganizationAdminAccountResponse')

const AdministratorSchema = z
  .object({
    AccountId: AccountIdSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The ID of the account used as the administrator account.',
    }),
    InvitationId: StringSchema.exactOptional().openapi({
      xml: { name: 'invitationId' },
      description:
        'The value that is used to validate the administrator account to the member account.',
    }),
    RelationshipStatus: StringSchema.exactOptional().openapi({
      xml: { name: 'relationshipStatus' },
      description: 'The status of the relationship between the administrator and member accounts.',
    }),
    InvitedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'invitedAt' },
      description: 'The timestamp when the invitation was sent.',
    }),
  })
  .openapi({
    description: 'Contains information about the administrator account and invitation.',
    required: [],
  })
  .openapi('Administrator')

const GetAdministratorAccountResponseSchema = z
  .object({
    Administrator: AdministratorSchema.openapi({
      xml: { name: 'administrator' },
      description: 'The administrator account details.',
    }),
  })
  .openapi({ required: ['Administrator'] })
  .openapi('GetAdministratorAccountResponse')

const CountByResourceTypeSchema = z.record(z.string(), LongSchema).openapi('CountByResourceType')

const CountByCoverageStatusSchema = z
  .record(z.string(), LongSchema)
  .openapi('CountByCoverageStatus')

const CoverageStatisticsSchema = z
  .object({
    CountByResourceType: CountByResourceTypeSchema.exactOptional().openapi({
      xml: { name: 'countByResourceType' },
      description: 'Represents coverage statistics for EKS clusters aggregated by resource type.',
    }),
    CountByCoverageStatus: CountByCoverageStatusSchema.exactOptional().openapi({
      xml: { name: 'countByCoverageStatus' },
      description: 'Represents coverage statistics for EKS clusters aggregated by coverage status.',
    }),
  })
  .openapi({
    description: 'Information about the coverage statistics for a resource.',
    required: [],
  })
  .openapi('CoverageStatistics')

const GetCoverageStatisticsResponseSchema = z
  .object({
    CoverageStatistics: CoverageStatisticsSchema.exactOptional().openapi({
      xml: { name: 'coverageStatistics' },
      description:
        'Represents the count aggregated by the <code>statusCode</code> and <code>resourceType</code>.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCoverageStatisticsResponse')

const CoverageFilterCriterionKeySchema = z
  .enum(['ACCOUNT_ID', 'CLUSTER_NAME', 'RESOURCE_TYPE', 'COVERAGE_STATUS', 'ADDON_VERSION'])
  .openapi('CoverageFilterCriterionKey')

const CoverageFilterConditionSchema = z
  .object({
    Equals: EqualsSchema.exactOptional().openapi({
      xml: { name: 'equals' },
      description:
        'Represents an equal condition that is applied to a single field while retrieving the coverage details.',
    }),
    NotEquals: NotEqualsSchema.exactOptional().openapi({
      xml: { name: 'notEquals' },
      description:
        'Represents a not equal condition that is applied to a single field while retrieving the coverage details.',
    }),
  })
  .openapi({
    description:
      'Represents a condition that when matched will be added to the response of the operation.',
    required: [],
  })
  .openapi('CoverageFilterCondition')

const CoverageFilterCriterionSchema = z
  .object({
    CriterionKey: CoverageFilterCriterionKeySchema.exactOptional().openapi({
      xml: { name: 'criterionKey' },
      description: 'An enum value representing possible filter fields.',
    }),
    FilterCondition: CoverageFilterConditionSchema.exactOptional().openapi({
      xml: { name: 'filterCondition' },
      description: 'Contains information about the condition.',
    }),
  })
  .openapi({
    description:
      'Represents a condition that when matched will be added to the response of the operation.',
    required: [],
  })
  .openapi('CoverageFilterCriterion')

const CoverageFilterCriterionListSchema = z
  .array(CoverageFilterCriterionSchema)
  .min(0)
  .max(50)
  .openapi('CoverageFilterCriterionList')

const CoverageStatisticsTypeSchema = z
  .enum(['COUNT_BY_RESOURCE_TYPE', 'COUNT_BY_COVERAGE_STATUS'])
  .openapi('CoverageStatisticsType')

const FindingPublishingFrequencySchema = z
  .enum(['FIFTEEN_MINUTES', 'ONE_HOUR', 'SIX_HOURS'])
  .openapi('FindingPublishingFrequency')

const DetectorStatusSchema = z.enum(['ENABLED', 'DISABLED']).openapi('DetectorStatus')

const CloudTrailConfigurationResultSchema = z
  .object({
    Status: DataSourceStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'Describes whether CloudTrail is enabled as a data source for the detector.',
    }),
  })
  .openapi({
    required: ['Status'],
    description:
      'Contains information on the status of CloudTrail as a data source for the detector.',
  })
  .openapi('CloudTrailConfigurationResult')

const DNSLogsConfigurationResultSchema = z
  .object({
    Status: DataSourceStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'Denotes whether DNS logs is enabled as a data source.',
    }),
  })
  .openapi({
    required: ['Status'],
    description: 'Contains information on the status of DNS logs as a data source.',
  })
  .openapi('DNSLogsConfigurationResult')

const FlowLogsConfigurationResultSchema = z
  .object({
    Status: DataSourceStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'Denotes whether VPC flow logs is enabled as a data source.',
    }),
  })
  .openapi({
    required: ['Status'],
    description: 'Contains information on the status of VPC flow logs as a data source.',
  })
  .openapi('FlowLogsConfigurationResult')

const S3LogsConfigurationResultSchema = z
  .object({
    Status: DataSourceStatusSchema.openapi({
      xml: { name: 'status' },
      description:
        'A value that describes whether S3 data event logs are automatically enabled for new members of the organization.',
    }),
  })
  .openapi({
    required: ['Status'],
    description: 'Describes whether S3 data event logs will be enabled as a data source.',
  })
  .openapi('S3LogsConfigurationResult')

const KubernetesAuditLogsConfigurationResultSchema = z
  .object({
    Status: DataSourceStatusSchema.openapi({
      xml: { name: 'status' },
      description:
        'A value that describes whether Kubernetes audit logs are enabled as a data source.',
    }),
  })
  .openapi({
    required: ['Status'],
    description: 'Describes whether Kubernetes audit logs are enabled as a data source.',
  })
  .openapi('KubernetesAuditLogsConfigurationResult')

const KubernetesConfigurationResultSchema = z
  .object({
    AuditLogs: KubernetesAuditLogsConfigurationResultSchema.openapi({
      xml: { name: 'auditLogs' },
      description: 'Describes whether Kubernetes audit logs are enabled as a data source.',
    }),
  })
  .openapi({
    required: ['AuditLogs'],
    description: 'Describes whether any Kubernetes logs will be enabled as a data source.',
  })
  .openapi('KubernetesConfigurationResult')

const DataSourceConfigurationsResultSchema = z
  .object({
    CloudTrail: CloudTrailConfigurationResultSchema.openapi({
      xml: { name: 'cloudTrail' },
      description:
        'An object that contains information on the status of CloudTrail as a data source.',
    }),
    DNSLogs: DNSLogsConfigurationResultSchema.openapi({
      xml: { name: 'dnsLogs' },
      description:
        'An object that contains information on the status of DNS logs as a data source.',
    }),
    FlowLogs: FlowLogsConfigurationResultSchema.openapi({
      xml: { name: 'flowLogs' },
      description:
        'An object that contains information on the status of VPC flow logs as a data source.',
    }),
    S3Logs: S3LogsConfigurationResultSchema.openapi({
      xml: { name: 's3Logs' },
      description:
        'An object that contains information on the status of S3 Data event logs as a data source.',
    }),
    Kubernetes: KubernetesConfigurationResultSchema.exactOptional().openapi({
      xml: { name: 'kubernetes' },
      description:
        'An object that contains information on the status of all Kubernetes data sources.',
    }),
    MalwareProtection: MalwareProtectionConfigurationResultSchema.exactOptional().openapi({
      xml: { name: 'malwareProtection' },
      description: 'Describes the configuration of Malware Protection data sources.',
    }),
  })
  .openapi({
    required: ['CloudTrail', 'DNSLogs', 'FlowLogs', 'S3Logs'],
    description: 'Contains information on the status of data sources for the detector.',
  })
  .openapi('DataSourceConfigurationsResult')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const DetectorFeatureResultSchema = z
  .enum([
    'FLOW_LOGS',
    'CLOUD_TRAIL',
    'DNS_LOGS',
    'S3_DATA_EVENTS',
    'EKS_AUDIT_LOGS',
    'EBS_MALWARE_PROTECTION',
    'RDS_LOGIN_EVENTS',
    'EKS_RUNTIME_MONITORING',
    'LAMBDA_NETWORK_LOGS',
  ])
  .openapi('DetectorFeatureResult')

const DetectorAdditionalConfigurationResultSchema = z
  .object({
    Name: FeatureAdditionalConfigurationSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the additional configuration.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'Status of the additional configuration.',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'updatedAt' },
      description:
        'The timestamp at which the additional configuration was last updated. This is in UTC format.',
    }),
  })
  .openapi({ description: 'Information about the additional configuration.', required: [] })
  .openapi('DetectorAdditionalConfigurationResult')

const DetectorAdditionalConfigurationResultsSchema = z
  .array(DetectorAdditionalConfigurationResultSchema)
  .openapi('DetectorAdditionalConfigurationResults')

const DetectorFeatureConfigurationResultSchema = z
  .object({
    Name: DetectorFeatureResultSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Indicates the name of the feature that can be enabled for the detector.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'Indicates the status of the feature that is enabled for the detector.',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'updatedAt' },
      description: 'The timestamp at which the feature object was updated.',
    }),
    AdditionalConfiguration: DetectorAdditionalConfigurationResultsSchema.exactOptional().openapi({
      xml: { name: 'additionalConfiguration' },
      description: 'Additional configuration for a resource.',
    }),
  })
  .openapi({ description: 'Contains information about a GuardDuty feature.', required: [] })
  .openapi('DetectorFeatureConfigurationResult')

const DetectorFeatureConfigurationsResultsSchema = z
  .array(DetectorFeatureConfigurationResultSchema)
  .openapi('DetectorFeatureConfigurationsResults')

const GetDetectorResponseSchema = z
  .object({
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The timestamp of when the detector was created.',
    }),
    FindingPublishingFrequency: FindingPublishingFrequencySchema.exactOptional().openapi({
      xml: { name: 'findingPublishingFrequency' },
      description: 'The publishing frequency of the finding.',
    }),
    ServiceRole: StringSchema.openapi({
      xml: { name: 'serviceRole' },
      description: 'The GuardDuty service role.',
    }),
    Status: DetectorStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'The detector status.',
    }),
    UpdatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'updatedAt' },
      description: 'The last-updated timestamp for the detector.',
    }),
    DataSources: DataSourceConfigurationsResultSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        'Describes which data sources are enabled for the detector.This parameter is deprecated, use Features instead',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags of the detector resource.',
    }),
    Features: DetectorFeatureConfigurationsResultsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'Describes the features that have been enabled for the detector.',
    }),
  })
  .openapi({ required: ['ServiceRole', 'Status'] })
  .openapi('GetDetectorResponse')

const FilterDescriptionSchema = z.string().min(0).max(512).openapi('FilterDescription')

const FilterActionSchema = z.enum(['NOOP', 'ARCHIVE']).openapi('FilterAction')

const FilterRankSchema = z.int().min(1).max(100).openapi('FilterRank')

const FindingCriteriaSchema = z
  .object({
    Criterion: CriterionSchema.exactOptional().openapi({
      xml: { name: 'criterion' },
      description:
        'Represents a map of finding properties that match specified conditions and values when querying findings.',
    }),
  })
  .openapi({
    description: 'Contains information about the criteria used for querying findings.',
    required: [],
  })
  .openapi('FindingCriteria')

const GetFilterResponseSchema = z
  .object({
    Name: FilterNameSchema.openapi({
      xml: { name: 'name' },
      description: 'The name of the filter.',
    }),
    Description: FilterDescriptionSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'The description of the filter.',
    }),
    Action: FilterActionSchema.openapi({
      xml: { name: 'action' },
      description:
        'Specifies the action that is to be applied to the findings that match the filter.',
    }),
    Rank: FilterRankSchema.exactOptional().openapi({
      xml: { name: 'rank' },
      description:
        'Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.',
    }),
    FindingCriteria: FindingCriteriaSchema.openapi({
      xml: { name: 'findingCriteria' },
      description: 'Represents the criteria to be used in the filter for querying findings.',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags of the filter resource.',
    }),
  })
  .openapi({ required: ['Name', 'Action', 'FindingCriteria'] })
  .openapi('GetFilterResponse')

const GetFindingsResponseSchema: z.ZodType<GetFindingsResponseType> = z
  .object({
    Findings: FindingsSchema.openapi({
      xml: { name: 'findings' },
      description: 'A list of findings.',
    }),
  })
  .openapi({ required: ['Findings'] })
  .openapi('GetFindingsResponse')

const CountBySeveritySchema = z.record(z.string(), IntegerSchema).openapi('CountBySeverity')

const FindingStatisticsSchema = z
  .object({
    CountBySeverity: CountBySeveritySchema.exactOptional().openapi({
      xml: { name: 'countBySeverity' },
      description: 'Represents a map of severity to count statistics for a set of findings.',
    }),
  })
  .openapi({ description: 'Contains information about finding statistics.', required: [] })
  .openapi('FindingStatistics')

const GetFindingsStatisticsResponseSchema = z
  .object({
    FindingStatistics: FindingStatisticsSchema.openapi({
      xml: { name: 'findingStatistics' },
      description: 'The finding statistics object.',
    }),
  })
  .openapi({ required: ['FindingStatistics'] })
  .openapi('GetFindingsStatisticsResponse')

const FindingStatisticTypeSchema = z.literal('COUNT_BY_SEVERITY').openapi('FindingStatisticType')

const NameSchema = z.string().min(1).max(300).openapi('Name')

const IpSetFormatSchema = z
  .enum(['TXT', 'STIX', 'OTX_CSV', 'ALIEN_VAULT', 'PROOF_POINT', 'FIRE_EYE'])
  .openapi('IpSetFormat')

const LocationSchema = z.string().min(1).max(300).openapi('Location')

const IpSetStatusSchema = z
  .enum(['INACTIVE', 'ACTIVATING', 'ACTIVE', 'DEACTIVATING', 'ERROR', 'DELETE_PENDING', 'DELETED'])
  .openapi('IpSetStatus')

const GetIPSetResponseSchema = z
  .object({
    Name: NameSchema.openapi({
      xml: { name: 'name' },
      description: 'The user-friendly name for the IPSet.',
    }),
    Format: IpSetFormatSchema.openapi({
      xml: { name: 'format' },
      description: 'The format of the file that contains the IPSet.',
    }),
    Location: LocationSchema.openapi({
      xml: { name: 'location' },
      description: 'The URI of the file that contains the IPSet.',
    }),
    Status: IpSetStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'The status of IPSet file that was uploaded.',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags of the IPSet resource.',
    }),
  })
  .openapi({ required: ['Name', 'Format', 'Location', 'Status'] })
  .openapi('GetIPSetResponse')

const GetInvitationsCountResponseSchema = z
  .object({
    InvitationsCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'invitationsCount' },
      description: 'The number of received invitations.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetInvitationsCountResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const ScanConditionPairSchema = z
  .object({
    Key: TagKeySchema.openapi({
      xml: { name: 'key' },
      description: 'Represents <i>key</i> <b/> in the map condition.',
    }),
    Value: TagValueSchema.exactOptional().openapi({
      xml: { name: 'value' },
      description:
        'Represents optional <i>value</i> <b/> in the map condition. If not specified, only <i>key</i> <b/> will be matched.',
    }),
  })
  .openapi({
    required: ['Key'],
    description: 'Represents key, value pair to be matched against given resource property.',
  })
  .openapi('ScanConditionPair')

const MapEqualsSchema = z.array(ScanConditionPairSchema).openapi('MapEquals')

const ScanConditionSchema = z
  .object({
    MapEquals: MapEqualsSchema.openapi({
      xml: { name: 'mapEquals' },
      description:
        'Represents an <i>mapEqual</i> <b/> condition to be applied to a single field when triggering for malware scan.',
    }),
  })
  .openapi({ required: ['MapEquals'], description: 'Contains information about the condition.' })
  .openapi('ScanCondition')

const ScanCriterionSchema = z
  .record(z.string(), ScanConditionSchema)
  .openapi({
    description:
      'Represents a map of resource properties that match specified conditions and values when triggering malware scans.',
  })
  .openapi('ScanCriterion')

const ScanResourceCriteriaSchema = z
  .object({
    Include: ScanCriterionSchema.exactOptional().openapi({
      xml: { name: 'include' },
      description:
        'Represents condition that when matched will allow a malware scan for a certain resource.',
    }),
    Exclude: ScanCriterionSchema.exactOptional().openapi({
      xml: { name: 'exclude' },
      description:
        'Represents condition that when matched will prevent a malware scan for a certain resource.',
    }),
  })
  .openapi({
    description:
      'Contains information about criteria used to filter resources before triggering malware scan.',
    required: [],
  })
  .openapi('ScanResourceCriteria')

const EbsSnapshotPreservationSchema = z
  .enum(['NO_RETENTION', 'RETENTION_WITH_FINDING'])
  .openapi('EbsSnapshotPreservation')

const GetMalwareScanSettingsResponseSchema = z
  .object({
    ScanResourceCriteria: ScanResourceCriteriaSchema.exactOptional().openapi({
      xml: { name: 'scanResourceCriteria' },
      description: 'Represents the criteria to be used in the filter for scanning resources.',
    }),
    EbsSnapshotPreservation: EbsSnapshotPreservationSchema.exactOptional().openapi({
      xml: { name: 'ebsSnapshotPreservation' },
      description: 'An enum value representing possible snapshot preservation settings.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetMalwareScanSettingsResponse')

const MasterSchema = z
  .object({
    AccountId: AccountIdSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The ID of the account used as the administrator account.',
    }),
    InvitationId: StringSchema.exactOptional().openapi({
      xml: { name: 'invitationId' },
      description: 'The value used to validate the administrator account to the member account.',
    }),
    RelationshipStatus: StringSchema.exactOptional().openapi({
      xml: { name: 'relationshipStatus' },
      description: 'The status of the relationship between the administrator and member accounts.',
    }),
    InvitedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'invitedAt' },
      description: 'The timestamp when the invitation was sent.',
    }),
  })
  .openapi({
    description: 'Contains information about the administrator account and invitation.',
    required: [],
  })
  .openapi('Master')

const GetMasterAccountResponseSchema = z
  .object({
    Master: MasterSchema.openapi({
      xml: { name: 'master' },
      description: 'The administrator account details.',
    }),
  })
  .openapi({
    required: ['Master'],
    deprecated: true,
    description: 'This output is deprecated, use GetAdministratorAccountResponse instead',
  })
  .openapi('GetMasterAccountResponse')

const MemberAdditionalConfigurationResultSchema = z
  .object({
    Name: OrgFeatureAdditionalConfigurationSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description:
        'Indicates the name of the additional configuration that is set for the member account.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        'Indicates the status of the additional configuration that is set for the member account.',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'updatedAt' },
      description:
        'The timestamp at which the additional configuration was set for the member account. This is in UTC format.',
    }),
  })
  .openapi({
    description: 'Information about the additional configuration for the member account.',
    required: [],
  })
  .openapi('MemberAdditionalConfigurationResult')

const MemberAdditionalConfigurationResultsSchema = z
  .array(MemberAdditionalConfigurationResultSchema)
  .openapi('MemberAdditionalConfigurationResults')

const MemberFeaturesConfigurationResultSchema = z
  .object({
    Name: OrgFeatureSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Indicates the name of the feature that is enabled for the detector.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'Indicates the status of the feature that is enabled for the detector.',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'updatedAt' },
      description: 'The timestamp at which the feature object was updated.',
    }),
    AdditionalConfiguration: MemberAdditionalConfigurationResultsSchema.exactOptional().openapi({
      xml: { name: 'additionalConfiguration' },
      description:
        'Indicates the additional configuration of the feature that is configured for the member account.',
    }),
  })
  .openapi({
    description: 'Contains information about the features for the member account.',
    required: [],
  })
  .openapi('MemberFeaturesConfigurationResult')

const MemberFeaturesConfigurationsResultsSchema = z
  .array(MemberFeaturesConfigurationResultSchema)
  .openapi('MemberFeaturesConfigurationsResults')

const MemberDataSourceConfigurationSchema = z
  .object({
    AccountId: AccountIdSchema.openapi({
      xml: { name: 'accountId' },
      description: 'The account ID for the member account.',
    }),
    DataSources: DataSourceConfigurationsResultSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        'Contains information on the status of data sources for the account.This parameter is deprecated, use Features instead',
    }),
    Features: MemberFeaturesConfigurationsResultsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'Contains information about the status of the features for the member account.',
    }),
  })
  .openapi({
    required: ['AccountId'],
    description: 'Contains information on which data sources are enabled for a member account.',
  })
  .openapi('MemberDataSourceConfiguration')

const MemberDataSourceConfigurationsSchema = z
  .array(MemberDataSourceConfigurationSchema)
  .min(1)
  .max(50)
  .openapi('MemberDataSourceConfigurations')

const GetMemberDetectorsResponseSchema = z
  .object({
    MemberDataSourceConfigurations: MemberDataSourceConfigurationsSchema.openapi({
      xml: { name: 'members' },
      description: 'An object that describes which data sources are enabled for a member account.',
    }),
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of member account IDs that were unable to be processed along with an explanation for why they were not processed.',
    }),
  })
  .openapi({ required: ['MemberDataSourceConfigurations', 'UnprocessedAccounts'] })
  .openapi('GetMemberDetectorsResponse')

const MemberSchema = z
  .object({
    AccountId: AccountIdSchema.openapi({
      xml: { name: 'accountId' },
      description: 'The ID of the member account.',
    }),
    DetectorId: DetectorIdSchema.exactOptional().openapi({
      xml: { name: 'detectorId' },
      description: 'The detector ID of the member account.',
    }),
    MasterId: StringSchema.openapi({
      xml: { name: 'masterId' },
      description: 'The administrator account ID.',
    }),
    Email: EmailSchema.openapi({
      xml: { name: 'email' },
      description: 'The email address of the member account.',
    }),
    RelationshipStatus: StringSchema.openapi({
      xml: { name: 'relationshipStatus' },
      description: 'The status of the relationship between the member and the administrator.',
    }),
    InvitedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'invitedAt' },
      description: 'The timestamp when the invitation was sent.',
    }),
    UpdatedAt: StringSchema.openapi({
      xml: { name: 'updatedAt' },
      description: 'The last-updated timestamp of the member.',
    }),
    AdministratorId: StringSchema.exactOptional().openapi({
      xml: { name: 'administratorId' },
      description: 'The administrator account ID.',
    }),
  })
  .openapi({
    required: ['AccountId', 'MasterId', 'Email', 'RelationshipStatus', 'UpdatedAt'],
    description: 'Contains information about the member account. ',
  })
  .openapi('Member')

const MembersSchema = z.array(MemberSchema).min(0).max(50).openapi('Members')

const GetMembersResponseSchema = z
  .object({
    Members: MembersSchema.openapi({ xml: { name: 'members' }, description: 'A list of members.' }),
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.',
    }),
  })
  .openapi({ required: ['Members', 'UnprocessedAccounts'] })
  .openapi('GetMembersResponse')

const DataSourceFreeTrialSchema = z
  .object({
    FreeTrialDaysRemaining: IntegerSchema.exactOptional().openapi({
      xml: { name: 'freeTrialDaysRemaining' },
      description:
        'A value that specifies the number of days left to use each enabled data source.',
    }),
  })
  .openapi({
    description:
      'Contains information about which data sources are enabled for the GuardDuty member account.',
    required: [],
  })
  .openapi('DataSourceFreeTrial')

const KubernetesDataSourceFreeTrialSchema = z
  .object({
    AuditLogs: DataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 'auditLogs' },
      description: 'Describes whether Kubernetes audit logs are enabled as a data source.',
    }),
  })
  .openapi({
    description:
      'Provides details about the Kubernetes resources when it is enabled as a data source.',
    required: [],
  })
  .openapi('KubernetesDataSourceFreeTrial')

const MalwareProtectionDataSourceFreeTrialSchema = z
  .object({
    ScanEc2InstanceWithFindings: DataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 'scanEc2InstanceWithFindings' },
      description:
        'Describes whether Malware Protection for EC2 instances with findings is enabled as a data source.',
    }),
  })
  .openapi({
    description: 'Provides details about Malware Protection when it is enabled as a data source.',
    required: [],
  })
  .openapi('MalwareProtectionDataSourceFreeTrial')

const DataSourcesFreeTrialSchema = z
  .object({
    CloudTrail: DataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 'cloudTrail' },
      description:
        'Describes whether any Amazon Web Services CloudTrail management event logs are enabled as data sources.',
    }),
    DnsLogs: DataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 'dnsLogs' },
      description: 'Describes whether any DNS logs are enabled as data sources.',
    }),
    FlowLogs: DataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 'flowLogs' },
      description: 'Describes whether any VPC Flow logs are enabled as data sources.',
    }),
    S3Logs: DataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 's3Logs' },
      description: 'Describes whether any S3 data event logs are enabled as data sources.',
    }),
    Kubernetes: KubernetesDataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 'kubernetes' },
      description: 'Describes whether any Kubernetes logs are enabled as data sources.',
    }),
    MalwareProtection: MalwareProtectionDataSourceFreeTrialSchema.exactOptional().openapi({
      xml: { name: 'malwareProtection' },
      description: 'Describes whether Malware Protection is enabled as a data source.',
    }),
  })
  .openapi({
    description:
      'Contains information about which data sources are enabled for the GuardDuty member account.',
    required: [],
  })
  .openapi('DataSourcesFreeTrial')

const FreeTrialFeatureResultSchema = z
  .enum([
    'FLOW_LOGS',
    'CLOUD_TRAIL',
    'DNS_LOGS',
    'S3_DATA_EVENTS',
    'EKS_AUDIT_LOGS',
    'EBS_MALWARE_PROTECTION',
    'RDS_LOGIN_EVENTS',
    'EKS_RUNTIME_MONITORING',
    'LAMBDA_NETWORK_LOGS',
  ])
  .openapi('FreeTrialFeatureResult')

const FreeTrialFeatureConfigurationResultSchema = z
  .object({
    Name: FreeTrialFeatureResultSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the feature for which the free trial is configured.',
    }),
    FreeTrialDaysRemaining: IntegerSchema.exactOptional().openapi({
      xml: { name: 'freeTrialDaysRemaining' },
      description: 'The number of the remaining free trial days for the feature.',
    }),
  })
  .openapi({
    description: 'Contains information about the free trial period for a feature.',
    required: [],
  })
  .openapi('FreeTrialFeatureConfigurationResult')

const FreeTrialFeatureConfigurationsResultsSchema = z
  .array(FreeTrialFeatureConfigurationResultSchema)
  .openapi('FreeTrialFeatureConfigurationsResults')

const AccountFreeTrialInfoSchema = z
  .object({
    AccountId: StringSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The account identifier of the GuardDuty member account.',
    }),
    DataSources: DataSourcesFreeTrialSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        'Describes the data source enabled for the GuardDuty member account.This parameter is deprecated, use Features instead',
    }),
    Features: FreeTrialFeatureConfigurationsResultsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'A list of features enabled for the GuardDuty account.',
    }),
  })
  .openapi({
    description: 'Provides details of the GuardDuty member account that uses a free trial service.',
    required: [],
  })
  .openapi('AccountFreeTrialInfo')

const AccountFreeTrialInfosSchema = z
  .array(AccountFreeTrialInfoSchema)
  .openapi('AccountFreeTrialInfos')

const GetRemainingFreeTrialDaysResponseSchema = z
  .object({
    Accounts: AccountFreeTrialInfosSchema.exactOptional().openapi({
      xml: { name: 'accounts' },
      description:
        'The member accounts which were included in a request and were processed successfully.',
    }),
    UnprocessedAccounts: UnprocessedAccountsSchema.exactOptional().openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'The member account that was included in a request but for which the request could not be processed.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetRemainingFreeTrialDaysResponse')

const ThreatIntelSetFormatSchema = z
  .enum(['TXT', 'STIX', 'OTX_CSV', 'ALIEN_VAULT', 'PROOF_POINT', 'FIRE_EYE'])
  .openapi('ThreatIntelSetFormat')

const ThreatIntelSetStatusSchema = z
  .enum(['INACTIVE', 'ACTIVATING', 'ACTIVE', 'DEACTIVATING', 'ERROR', 'DELETE_PENDING', 'DELETED'])
  .openapi('ThreatIntelSetStatus')

const GetThreatIntelSetResponseSchema = z
  .object({
    Name: NameSchema.openapi({
      xml: { name: 'name' },
      description:
        'A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.',
    }),
    Format: ThreatIntelSetFormatSchema.openapi({
      xml: { name: 'format' },
      description: 'The format of the threatIntelSet.',
    }),
    Location: LocationSchema.openapi({
      xml: { name: 'location' },
      description: 'The URI of the file that contains the ThreatIntelSet. ',
    }),
    Status: ThreatIntelSetStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'The status of threatIntelSet file uploaded.',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags of the threat list resource.',
    }),
  })
  .openapi({ required: ['Name', 'Format', 'Location', 'Status'] })
  .openapi('GetThreatIntelSetResponse')

const TotalSchema = z
  .object({
    Amount: StringSchema.exactOptional().openapi({
      xml: { name: 'amount' },
      description: 'The total usage.',
    }),
    Unit: StringSchema.exactOptional().openapi({
      xml: { name: 'unit' },
      description: 'The currency unit that the amount is given in.',
    }),
  })
  .openapi({
    description: 'Contains the total usage with the corresponding currency unit for that value.',
    required: [],
  })
  .openapi('Total')

const UsageAccountResultSchema = z
  .object({
    AccountId: AccountIdSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The Account ID that generated usage.',
    }),
    Total: TotalSchema.exactOptional().openapi({
      xml: { name: 'total' },
      description: 'Represents the total of usage for the Account ID.',
    }),
  })
  .openapi({
    description: 'Contains information on the total of usage based on account IDs.',
    required: [],
  })
  .openapi('UsageAccountResult')

const UsageAccountResultListSchema = z
  .array(UsageAccountResultSchema)
  .openapi('UsageAccountResultList')

const DataSourceSchema = z
  .enum([
    'FLOW_LOGS',
    'CLOUD_TRAIL',
    'DNS_LOGS',
    'S3_LOGS',
    'KUBERNETES_AUDIT_LOGS',
    'EC2_MALWARE_SCAN',
  ])
  .openapi('DataSource')

const UsageDataSourceResultSchema = z
  .object({
    DataSource: DataSourceSchema.exactOptional().openapi({
      xml: { name: 'dataSource' },
      description: 'The data source type that generated usage.',
    }),
    Total: TotalSchema.exactOptional().openapi({
      xml: { name: 'total' },
      description: 'Represents the total of usage for the specified data source.',
    }),
  })
  .openapi({
    description: 'Contains information on the result of usage based on data source type.',
    required: [],
  })
  .openapi('UsageDataSourceResult')

const UsageDataSourceResultListSchema = z
  .array(UsageDataSourceResultSchema)
  .openapi('UsageDataSourceResultList')

const UsageResourceResultSchema = z
  .object({
    Resource: StringSchema.exactOptional().openapi({
      xml: { name: 'resource' },
      description: 'The Amazon Web Services resource that generated usage.',
    }),
    Total: TotalSchema.exactOptional().openapi({
      xml: { name: 'total' },
      description: 'Represents the sum total of usage for the specified resource type.',
    }),
  })
  .openapi({
    description:
      'Contains information on the sum of usage based on an Amazon Web Services resource.',
    required: [],
  })
  .openapi('UsageResourceResult')

const UsageResourceResultListSchema = z
  .array(UsageResourceResultSchema)
  .openapi('UsageResourceResultList')

const UsageFeatureSchema = z
  .enum([
    'FLOW_LOGS',
    'CLOUD_TRAIL',
    'DNS_LOGS',
    'S3_DATA_EVENTS',
    'EKS_AUDIT_LOGS',
    'EBS_MALWARE_PROTECTION',
    'RDS_LOGIN_EVENTS',
    'LAMBDA_NETWORK_LOGS',
    'EKS_RUNTIME_MONITORING',
  ])
  .openapi('UsageFeature')

const UsageFeatureResultSchema = z
  .object({
    Feature: UsageFeatureSchema.exactOptional().openapi({
      xml: { name: 'feature' },
      description: 'The feature that generated the usage cost.',
    }),
    Total: TotalSchema.exactOptional().openapi({ xml: { name: 'total' } }),
  })
  .openapi({
    description: 'Contains information about the result of the total usage based on the feature.',
    required: [],
  })
  .openapi('UsageFeatureResult')

const UsageFeatureResultListSchema = z
  .array(UsageFeatureResultSchema)
  .openapi('UsageFeatureResultList')

const UsageStatisticsSchema = z
  .object({
    SumByAccount: UsageAccountResultListSchema.exactOptional().openapi({
      xml: { name: 'sumByAccount' },
      description: 'The usage statistic sum organized by account ID.',
    }),
    SumByDataSource: UsageDataSourceResultListSchema.exactOptional().openapi({
      xml: { name: 'sumByDataSource' },
      description: 'The usage statistic sum organized by on data source.',
    }),
    SumByResource: UsageResourceResultListSchema.exactOptional().openapi({
      xml: { name: 'sumByResource' },
      description: 'The usage statistic sum organized by resource.',
    }),
    TopResources: UsageResourceResultListSchema.exactOptional().openapi({
      xml: { name: 'topResources' },
      description:
        'Lists the top 50 resources that have generated the most GuardDuty usage, in order from most to least expensive.',
    }),
    SumByFeature: UsageFeatureResultListSchema.exactOptional().openapi({
      xml: { name: 'sumByFeature' },
      description: 'The usage statistic sum organized by feature.',
    }),
  })
  .openapi({
    description:
      'Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for other types will be null. ',
    required: [],
  })
  .openapi('UsageStatistics')

const GetUsageStatisticsResponseSchema = z
  .object({
    UsageStatistics: UsageStatisticsSchema.exactOptional().openapi({
      xml: { name: 'usageStatistics' },
      description:
        'The usage statistics object. If a UsageStatisticType was provided, the objects representing other types will be null.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetUsageStatisticsResponse')

const AccountIdsSchema = z.array(AccountIdSchema).min(1).max(50).openapi('AccountIds')

const DataSourceListSchema = z.array(DataSourceSchema).openapi('DataSourceList')

const ResourceListSchema = z.array(StringSchema).openapi('ResourceList')

const UsageFeatureListSchema = z.array(UsageFeatureSchema).openapi('UsageFeatureList')

const InviteMembersResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('InviteMembersResponse')

const AddonDetailsSchema = z
  .object({
    AddonVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'addonVersion' },
      description: 'Version of the installed EKS add-on.',
    }),
    AddonStatus: StringSchema.exactOptional().openapi({
      xml: { name: 'addonStatus' },
      description: 'Status of the installed EKS add-on.',
    }),
  })
  .openapi({
    description: 'Information about the installed EKS add-on (GuardDuty security agent).',
    required: [],
  })
  .openapi('AddonDetails')

const CoverageEksClusterDetailsSchema = z
  .object({
    ClusterName: StringSchema.exactOptional().openapi({
      xml: { name: 'clusterName' },
      description: 'Name of the EKS cluster.',
    }),
    CoveredNodes: LongSchema.exactOptional().openapi({
      xml: { name: 'coveredNodes' },
      description:
        'Represents the nodes within the EKS cluster that have a <code>HEALTHY</code> coverage status.',
    }),
    CompatibleNodes: LongSchema.exactOptional().openapi({
      xml: { name: 'compatibleNodes' },
      description: 'Represents all the nodes within the EKS cluster in your account.',
    }),
    AddonDetails: AddonDetailsSchema.exactOptional().openapi({
      xml: { name: 'addonDetails' },
      description: 'Information about the installed EKS add-on.',
    }),
  })
  .openapi({
    description: 'Information about the EKS cluster that has a coverage status.',
    required: [],
  })
  .openapi('CoverageEksClusterDetails')

const ResourceTypeSchema = z.literal('EKS').openapi('ResourceType')

const CoverageResourceDetailsSchema = z
  .object({
    EksClusterDetails: CoverageEksClusterDetailsSchema.exactOptional().openapi({
      xml: { name: 'eksClusterDetails' },
      description: 'EKS cluster details involved in the coverage statistics.',
    }),
    ResourceType: ResourceTypeSchema.exactOptional().openapi({
      xml: { name: 'resourceType' },
      description: 'The type of Amazon Web Services resource.',
    }),
  })
  .openapi({
    description: 'Information about the resource for each individual EKS cluster.',
    required: [],
  })
  .openapi('CoverageResourceDetails')

const CoverageStatusSchema = z.enum(['HEALTHY', 'UNHEALTHY']).openapi('CoverageStatus')

const CoverageResourceSchema = z
  .object({
    ResourceId: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceId' },
      description: 'The unique ID of the resource.',
    }),
    DetectorId: DetectorIdSchema.exactOptional().openapi({
      xml: { name: 'detectorId' },
      description: 'The unique ID of the GuardDuty detector associated with the resource.',
    }),
    AccountId: AccountIdSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The unique ID of the Amazon Web Services account.',
    }),
    ResourceDetails: CoverageResourceDetailsSchema.exactOptional().openapi({
      xml: { name: 'resourceDetails' },
      description:
        'Information about the resource for which the coverage statistics are retrieved.',
    }),
    CoverageStatus: CoverageStatusSchema.exactOptional().openapi({
      xml: { name: 'coverageStatus' },
      description: 'Represents the status of the EKS cluster coverage.',
    }),
    Issue: StringSchema.exactOptional().openapi({
      xml: { name: 'issue' },
      description:
        'Represents the reason why a coverage status was <code>UNHEALTHY</code> for the EKS cluster.',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      xml: { name: 'updatedAt' },
      description:
        'The timestamp at which the coverage details for the resource were last updated. This is in UTC format.',
    }),
  })
  .openapi({
    description: 'Information about the resource of the GuardDuty account.',
    required: [],
  })
  .openapi('CoverageResource')

const CoverageResourcesSchema = z.array(CoverageResourceSchema).openapi('CoverageResources')

const ListCoverageResponseSchema = z
  .object({
    Resources: CoverageResourcesSchema.openapi({
      xml: { name: 'resources' },
      description: 'A list of resources and their attributes providing cluster details.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: ['Resources'] })
  .openapi('ListCoverageResponse')

const CoverageSortKeySchema = z
  .enum(['ACCOUNT_ID', 'CLUSTER_NAME', 'COVERAGE_STATUS', 'ISSUE', 'ADDON_VERSION', 'UPDATED_AT'])
  .openapi('CoverageSortKey')

const DetectorIdsSchema = z.array(DetectorIdSchema).min(0).max(50).openapi('DetectorIds')

const ListDetectorsResponseSchema = z
  .object({
    DetectorIds: DetectorIdsSchema.openapi({
      xml: { name: 'detectorIds' },
      description: 'A list of detector IDs.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: ['DetectorIds'] })
  .openapi('ListDetectorsResponse')

const FilterNamesSchema = z.array(FilterNameSchema).min(0).max(50).openapi('FilterNames')

const ListFiltersResponseSchema = z
  .object({
    FilterNames: FilterNamesSchema.openapi({
      xml: { name: 'filterNames' },
      description: 'A list of filter names.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: ['FilterNames'] })
  .openapi('ListFiltersResponse')

const FindingIdsSchema = z.array(FindingIdSchema).min(0).max(50).openapi('FindingIds')

const ListFindingsResponseSchema = z
  .object({
    FindingIds: FindingIdsSchema.openapi({
      xml: { name: 'findingIds' },
      description: "The IDs of the findings that you're listing.",
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: ['FindingIds'] })
  .openapi('ListFindingsResponse')

const IpSetIdsSchema = z.array(StringSchema).min(0).max(50).openapi('IpSetIds')

const ListIPSetsResponseSchema = z
  .object({
    IpSetIds: IpSetIdsSchema.openapi({
      xml: { name: 'ipSetIds' },
      description: 'The IDs of the IPSet resources.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: ['IpSetIds'] })
  .openapi('ListIPSetsResponse')

const InvitationSchema = z
  .object({
    AccountId: AccountIdSchema.exactOptional().openapi({
      xml: { name: 'accountId' },
      description: 'The ID of the account that the invitation was sent from.',
    }),
    InvitationId: StringSchema.exactOptional().openapi({
      xml: { name: 'invitationId' },
      description:
        'The ID of the invitation. This value is used to validate the inviter account to the member account.',
    }),
    RelationshipStatus: StringSchema.exactOptional().openapi({
      xml: { name: 'relationshipStatus' },
      description: 'The status of the relationship between the inviter and invitee accounts.',
    }),
    InvitedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'invitedAt' },
      description: 'The timestamp when the invitation was sent.',
    }),
  })
  .openapi({
    description: 'Contains information about the invitation to become a member account.',
    required: [],
  })
  .openapi('Invitation')

const InvitationsSchema = z.array(InvitationSchema).min(0).max(50).openapi('Invitations')

const ListInvitationsResponseSchema = z
  .object({
    Invitations: InvitationsSchema.exactOptional().openapi({
      xml: { name: 'invitations' },
      description: 'A list of invitation descriptions.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListInvitationsResponse')

const ListMembersResponseSchema = z
  .object({
    Members: MembersSchema.exactOptional().openapi({
      xml: { name: 'members' },
      description: 'A list of members.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListMembersResponse')

const AdminStatusSchema = z.enum(['ENABLED', 'DISABLE_IN_PROGRESS']).openapi('AdminStatus')

const AdminAccountSchema = z
  .object({
    AdminAccountId: StringSchema.exactOptional().openapi({
      xml: { name: 'adminAccountId' },
      description: 'The Amazon Web Services account ID for the account.',
    }),
    AdminStatus: AdminStatusSchema.exactOptional().openapi({
      xml: { name: 'adminStatus' },
      description: 'Indicates whether the account is enabled as the delegated administrator.',
    }),
  })
  .openapi({
    description:
      'The account within the organization specified as the GuardDuty delegated administrator.',
    required: [],
  })
  .openapi('AdminAccount')

const AdminAccountsSchema = z.array(AdminAccountSchema).min(0).max(1).openapi('AdminAccounts')

const ListOrganizationAdminAccountsResponseSchema = z
  .object({
    AdminAccounts: AdminAccountsSchema.exactOptional().openapi({
      xml: { name: 'adminAccounts' },
      description: 'A list of accounts configured as GuardDuty delegated administrators.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationAdminAccountsResponse')

const DestinationSchema = z
  .object({
    DestinationId: StringSchema.openapi({
      xml: { name: 'destinationId' },
      description: 'The unique ID of the publishing destination.',
    }),
    DestinationType: DestinationTypeSchema.openapi({
      xml: { name: 'destinationType' },
      description:
        'The type of resource used for the publishing destination. Currently, only Amazon S3 buckets are supported.',
    }),
    Status: PublishingStatusSchema.openapi({
      xml: { name: 'status' },
      description: 'The status of the publishing destination.',
    }),
  })
  .openapi({
    required: ['DestinationId', 'DestinationType', 'Status'],
    description:
      'Contains information about the publishing destination, including the ID, type, and status.',
  })
  .openapi('Destination')

const DestinationsSchema = z.array(DestinationSchema).openapi('Destinations')

const ListPublishingDestinationsResponseSchema = z
  .object({
    Destinations: DestinationsSchema.openapi({
      xml: { name: 'destinations' },
      description:
        'A <code>Destinations</code> object that includes information about each publishing destination returned.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.',
    }),
  })
  .openapi({ required: ['Destinations'] })
  .openapi('ListPublishingDestinationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags associated with the resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ThreatIntelSetIdsSchema = z.array(StringSchema).min(0).max(50).openapi('ThreatIntelSetIds')

const ListThreatIntelSetsResponseSchema = z
  .object({
    ThreatIntelSetIds: ThreatIntelSetIdsSchema.openapi({
      xml: { name: 'threatIntelSetIds' },
      description: 'The IDs of the ThreatIntelSet resources.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'The pagination parameter to be used on the next list operation to retrieve more items.',
    }),
  })
  .openapi({ required: ['ThreatIntelSetIds'] })
  .openapi('ListThreatIntelSetsResponse')

const StartMonitoringMembersResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('StartMonitoringMembersResponse')

const StopMonitoringMembersResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of objects that contain an accountId for each account that could not be processed, and a result string that indicates why the account was not processed. ',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('StopMonitoringMembersResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UnarchiveFindingsResponseSchema = z.looseObject({}).openapi('UnarchiveFindingsResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const UpdateDetectorResponseSchema = z.looseObject({}).openapi('UpdateDetectorResponse')

const UpdateFilterResponseSchema = z
  .object({
    Name: FilterNameSchema.openapi({
      xml: { name: 'name' },
      description: 'The name of the filter.',
    }),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateFilterResponse')

const UpdateFindingsFeedbackResponseSchema = z
  .looseObject({})
  .openapi('UpdateFindingsFeedbackResponse')

const UpdateIPSetResponseSchema = z.looseObject({}).openapi('UpdateIPSetResponse')

const UpdateMalwareScanSettingsResponseSchema = z
  .looseObject({})
  .openapi('UpdateMalwareScanSettingsResponse')

const UpdateMemberDetectorsResponseSchema = z
  .object({
    UnprocessedAccounts: UnprocessedAccountsSchema.openapi({
      xml: { name: 'unprocessedAccounts' },
      description:
        'A list of member account IDs that were unable to be processed along with an explanation for why they were not processed.',
    }),
  })
  .openapi({ required: ['UnprocessedAccounts'] })
  .openapi('UpdateMemberDetectorsResponse')

const MemberAdditionalConfigurationSchema = z
  .object({
    Name: OrgFeatureAdditionalConfigurationSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the additional configuration.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'Status of the additional configuration.',
    }),
  })
  .openapi({
    description: 'Information about the additional configuration for the member account.',
    required: [],
  })
  .openapi('MemberAdditionalConfiguration')

const MemberAdditionalConfigurationsSchema = z
  .array(MemberAdditionalConfigurationSchema)
  .openapi('MemberAdditionalConfigurations')

const MemberFeaturesConfigurationSchema = z
  .object({
    Name: OrgFeatureSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the feature.',
    }),
    Status: FeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The status of the feature.',
    }),
    AdditionalConfiguration: MemberAdditionalConfigurationsSchema.exactOptional().openapi({
      xml: { name: 'additionalConfiguration' },
      description: 'Additional configuration of the feature for the member account.',
    }),
  })
  .openapi({
    description: 'Contains information about the features for the member account.',
    required: [],
  })
  .openapi('MemberFeaturesConfiguration')

const UpdateOrganizationConfigurationResponseSchema = z
  .looseObject({})
  .openapi('UpdateOrganizationConfigurationResponse')

const OrganizationS3LogsConfigurationSchema = z
  .object({
    AutoEnable: BooleanSchema.openapi({
      xml: { name: 'autoEnable' },
      description:
        'A value that contains information on whether S3 data event logs will be enabled automatically as a data source for the organization.',
    }),
  })
  .openapi({
    required: ['AutoEnable'],
    description:
      'Describes whether S3 data event logs will be automatically enabled for new members of the organization.',
  })
  .openapi('OrganizationS3LogsConfiguration')

const OrganizationKubernetesAuditLogsConfigurationSchema = z
  .object({
    AutoEnable: BooleanSchema.openapi({
      xml: { name: 'autoEnable' },
      description:
        'A value that contains information on whether Kubernetes audit logs should be enabled automatically as a data source for the organization.',
    }),
  })
  .openapi({
    required: ['AutoEnable'],
    description: 'Organization-wide Kubernetes audit logs configuration.',
  })
  .openapi('OrganizationKubernetesAuditLogsConfiguration')

const OrganizationKubernetesConfigurationSchema = z
  .object({
    AuditLogs: OrganizationKubernetesAuditLogsConfigurationSchema.openapi({
      xml: { name: 'auditLogs' },
      description:
        'Whether Kubernetes audit logs data source should be auto-enabled for new members joining the organization.',
    }),
  })
  .openapi({
    required: ['AuditLogs'],
    description: 'Organization-wide Kubernetes data sources configurations.',
  })
  .openapi('OrganizationKubernetesConfiguration')

const OrganizationEbsVolumesSchema = z
  .object({
    AutoEnable: BooleanSchema.exactOptional().openapi({
      xml: { name: 'autoEnable' },
      description:
        'Whether scanning EBS volumes should be auto-enabled for new members joining the organization.',
    }),
  })
  .openapi({ description: 'Organization-wide EBS volumes scan configuration.', required: [] })
  .openapi('OrganizationEbsVolumes')

const OrganizationScanEc2InstanceWithFindingsSchema = z
  .object({
    EbsVolumes: OrganizationEbsVolumesSchema.exactOptional().openapi({
      xml: { name: 'ebsVolumes' },
      description:
        'Whether scanning EBS volumes should be auto-enabled for new members joining the organization.',
    }),
  })
  .openapi({
    description: 'Organization-wide EC2 instances with findings scan configuration.',
    required: [],
  })
  .openapi('OrganizationScanEc2InstanceWithFindings')

const OrganizationMalwareProtectionConfigurationSchema = z
  .object({
    ScanEc2InstanceWithFindings:
      OrganizationScanEc2InstanceWithFindingsSchema.exactOptional().openapi({
        xml: { name: 'scanEc2InstanceWithFindings' },
        description:
          'Whether Malware Protection for EC2 instances with findings should be auto-enabled for new members joining the organization.',
      }),
  })
  .openapi({ description: 'Organization-wide Malware Protection configurations.', required: [] })
  .openapi('OrganizationMalwareProtectionConfiguration')

const OrganizationAdditionalConfigurationSchema = z
  .object({
    Name: OrgFeatureAdditionalConfigurationSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description:
        'The name of the additional configuration that will be configured for the organization.',
    }),
    AutoEnable: OrgFeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'autoEnable' },
      description:
        'The status of the additional configuration that will be configured for the organization.',
    }),
  })
  .openapi({
    description:
      'A list of additional configurations which will be configured for the organization.',
    required: [],
  })
  .openapi('OrganizationAdditionalConfiguration')

const OrganizationAdditionalConfigurationsSchema = z
  .array(OrganizationAdditionalConfigurationSchema)
  .openapi('OrganizationAdditionalConfigurations')

const OrganizationFeatureConfigurationSchema = z
  .object({
    Name: OrgFeatureSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the feature that will be configured for the organization.',
    }),
    AutoEnable: OrgFeatureStatusSchema.exactOptional().openapi({
      xml: { name: 'autoEnable' },
      description: 'The status of the feature that will be configured for the organization.',
    }),
    AdditionalConfiguration: OrganizationAdditionalConfigurationsSchema.exactOptional().openapi({
      xml: { name: 'additionalConfiguration' },
      description: 'The additional information that will be configured for the organization.',
    }),
  })
  .openapi({
    description: 'A list of features which will be configured for the organization.',
    required: [],
  })
  .openapi('OrganizationFeatureConfiguration')

const UpdatePublishingDestinationResponseSchema = z
  .looseObject({})
  .openapi('UpdatePublishingDestinationResponse')

const UpdateThreatIntelSetResponseSchema = z.looseObject({}).openapi('UpdateThreatIntelSetResponse')

const AcceptAdministratorInvitationRequestSchema = z
  .object({
    AdministratorId: StringSchema.openapi({
      xml: { name: 'administratorId' },
      description:
        "The account ID of the GuardDuty administrator account whose invitation you're accepting.",
    }),
    InvitationId: StringSchema.openapi({
      xml: { name: 'invitationId' },
      description:
        'The value that is used to validate the administrator account to the member account.',
    }),
  })
  .openapi({
    required: ['AdministratorId', 'InvitationId'],
    title: 'AcceptAdministratorInvitationRequest',
  })
  .openapi('AcceptAdministratorInvitationRequest')

const AcceptInvitationRequestSchema = z
  .object({
    MasterId: StringSchema.openapi({
      xml: { name: 'masterId' },
      description:
        "The account ID of the GuardDuty administrator account whose invitation you're accepting.",
    }),
    InvitationId: StringSchema.openapi({
      xml: { name: 'invitationId' },
      description:
        'The value that is used to validate the administrator account to the member account.',
    }),
  })
  .openapi({
    required: ['MasterId', 'InvitationId'],
    deprecated: true,
    title: 'AcceptInvitationRequest',
    description: 'This input is deprecated, use AcceptAdministratorInvitationRequest instead',
  })
  .openapi('AcceptInvitationRequest')

const AccountDetailsSchema = z.array(AccountDetailSchema).min(1).max(50).openapi('AccountDetails')

const ArchiveFindingsRequestSchema = z
  .object({
    FindingIds: FindingIdsSchema.openapi({
      xml: { name: 'findingIds' },
      description: 'The IDs of the findings that you want to archive.',
    }),
  })
  .openapi({ required: ['FindingIds'], title: 'ArchiveFindingsRequest' })
  .openapi('ArchiveFindingsRequest')

const ClientTokenSchema = z.string().min(0).max(64).openapi('ClientToken')

const CoverageFilterCriteriaSchema = z
  .object({
    FilterCriterion: CoverageFilterCriterionListSchema.exactOptional().openapi({
      xml: { name: 'filterCriterion' },
      description:
        'Represents a condition that when matched will be added to the response of the operation.',
    }),
  })
  .openapi({ description: 'Represents the criteria used in the filter.', required: [] })
  .openapi('CoverageFilterCriteria')

const CoverageSortCriteriaSchema = z
  .object({
    AttributeName: CoverageSortKeySchema.exactOptional().openapi({
      xml: { name: 'attributeName' },
      description: 'Represents the field name used to sort the coverage details.',
    }),
    OrderBy: OrderBySchema.exactOptional().openapi({
      xml: { name: 'orderBy' },
      description: 'The order in which the sorted findings are to be displayed.',
    }),
  })
  .openapi({
    description: 'Information about the sorting criteria used in the coverage statistics.',
    required: [],
  })
  .openapi('CoverageSortCriteria')

const CoverageStatisticsTypeListSchema = z
  .array(CoverageStatisticsTypeSchema)
  .openapi('CoverageStatisticsTypeList')

const DataSourceConfigurationsSchema = z
  .object({
    S3Logs: S3LogsConfigurationSchema.exactOptional().openapi({
      xml: { name: 's3Logs' },
      description: 'Describes whether S3 data event logs are enabled as a data source.',
    }),
    Kubernetes: KubernetesConfigurationSchema.exactOptional().openapi({
      xml: { name: 'kubernetes' },
      description: 'Describes whether any Kubernetes logs are enabled as data sources.',
    }),
    MalwareProtection: MalwareProtectionConfigurationSchema.exactOptional().openapi({
      xml: { name: 'malwareProtection' },
      description: 'Describes whether Malware Protection is enabled as a data source.',
    }),
  })
  .openapi({
    description: 'Contains information about which data sources are enabled.',
    required: [],
  })
  .openapi('DataSourceConfigurations')

const DetectorFeatureConfigurationsSchema = z
  .array(DetectorFeatureConfigurationSchema)
  .openapi('DetectorFeatureConfigurations')

const CreateDetectorRequestSchema = z
  .object({
    Enable: BooleanSchema.openapi({
      xml: { name: 'enable' },
      description: 'A Boolean value that specifies whether the detector is to be enabled.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      xml: { name: 'clientToken' },
      description: 'The idempotency token for the create request.',
    }),
    FindingPublishingFrequency: FindingPublishingFrequencySchema.exactOptional().openapi({
      xml: { name: 'findingPublishingFrequency' },
      description: 'A value that specifies how frequently updated findings are exported.',
    }),
    DataSources: DataSourceConfigurationsSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        '<p>Describes which data sources will be enabled for the detector.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>This parameter is deprecated, use Features instead',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags to be added to a new detector resource.',
    }),
    Features: DetectorFeatureConfigurationsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'A list of features that will be configured for the detector.',
    }),
  })
  .openapi({ required: ['Enable'], title: 'CreateDetectorRequest' })
  .openapi('CreateDetectorRequest')

const CreateFilterRequestSchema = z
  .object({
    Name: FilterNameSchema.openapi({
      xml: { name: 'name' },
      description:
        'The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.',
    }),
    Description: FilterDescriptionSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        'The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.',
    }),
    Action: FilterActionSchema.exactOptional().openapi({
      xml: { name: 'action' },
      description:
        'Specifies the action that is to be applied to the findings that match the filter.',
    }),
    Rank: FilterRankSchema.exactOptional().openapi({
      xml: { name: 'rank' },
      description:
        'Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.',
    }),
    FindingCriteria: FindingCriteriaSchema.openapi({
      xml: { name: 'findingCriteria' },
      description:
        '<p>Represents the criteria to be used in the filter for querying findings.</p> <p>You can only use the following attributes to query findings:</p> <ul> <li> <p>accountId</p> </li> <li> <p>region</p> </li> <li> <p>id</p> </li> <li> <p>resource.accessKeyDetails.accessKeyId</p> </li> <li> <p>resource.accessKeyDetails.principalId</p> </li> <li> <p>resource.accessKeyDetails.userName</p> </li> <li> <p>resource.accessKeyDetails.userType</p> </li> <li> <p>resource.instanceDetails.iamInstanceProfile.id</p> </li> <li> <p>resource.instanceDetails.imageId</p> </li> <li> <p>resource.instanceDetails.instanceId</p> </li> <li> <p>resource.instanceDetails.outpostArn</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicDnsName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicIp</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.subnetId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.vpcId</p> </li> <li> <p>resource.instanceDetails.tags.key</p> </li> <li> <p>resource.instanceDetails.tags.value</p> </li> <li> <p>resource.resourceType</p> </li> <li> <p>service.action.actionType</p> </li> <li> <p>service.action.awsApiCallAction.api</p> </li> <li> <p>service.action.awsApiCallAction.callerType</p> </li> <li> <p>service.action.awsApiCallAction.errorCode</p> </li> <li> <p>service.action.awsApiCallAction.userAgent</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.awsApiCallAction.serviceName</p> </li> <li> <p>service.action.dnsRequestAction.domain</p> </li> <li> <p>service.action.networkConnectionAction.blocked</p> </li> <li> <p>service.action.networkConnectionAction.connectionDirection</p> </li> <li> <p>service.action.networkConnectionAction.localPortDetails.port</p> </li> <li> <p>service.action.networkConnectionAction.protocol</p> </li> <li> <p>service.action.networkConnectionAction.localIpDetails.ipAddressV4</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.networkConnectionAction.remotePortDetails.port</p> </li> <li> <p>service.additionalInfo.threatListName</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.effectivePermissions</p> </li> <li> <p>resource.s3BucketDetails.name</p> </li> <li> <p>resource.s3BucketDetails.tags.key</p> </li> <li> <p>resource.s3BucketDetails.tags.value</p> </li> <li> <p>resource.s3BucketDetails.type</p> </li> <li> <p>service.resourceRole</p> </li> <li> <p>severity</p> </li> <li> <p>type</p> </li> <li> <p>updatedAt</p> <p>Type: ISO 8601 string format: YYYY-MM-DDTHH:MM:SS.SSSZ or YYYY-MM-DDTHH:MM:SSZ depending on whether the value contains milliseconds.</p> </li> </ul>',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      xml: { name: 'clientToken' },
      description: 'The idempotency token for the create request.',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags to be added to a new filter resource.',
    }),
  })
  .openapi({ required: ['Name', 'FindingCriteria'], title: 'CreateFilterRequest' })
  .openapi('CreateFilterRequest')

const CreateIPSetRequestSchema = z
  .object({
    Name: NameSchema.openapi({
      xml: { name: 'name' },
      description:
        '<p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).</p>',
    }),
    Format: IpSetFormatSchema.openapi({
      xml: { name: 'format' },
      description: 'The format of the file that contains the IPSet.',
    }),
    Location: LocationSchema.openapi({
      xml: { name: 'location' },
      description: 'The URI of the file that contains the IPSet. ',
    }),
    Activate: BooleanSchema.openapi({
      xml: { name: 'activate' },
      description:
        'A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      xml: { name: 'clientToken' },
      description: 'The idempotency token for the create request.',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags to be added to a new IP set resource.',
    }),
  })
  .openapi({ required: ['Name', 'Format', 'Location', 'Activate'], title: 'CreateIPSetRequest' })
  .openapi('CreateIPSetRequest')

const CreateMembersRequestSchema = z
  .object({
    AccountDetails: AccountDetailsSchema.openapi({
      xml: { name: 'accountDetails' },
      description:
        'A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account.',
    }),
  })
  .openapi({ required: ['AccountDetails'], title: 'CreateMembersRequest' })
  .openapi('CreateMembersRequest')

const CreatePublishingDestinationRequestSchema = z
  .object({
    DestinationType: DestinationTypeSchema.openapi({
      xml: { name: 'destinationType' },
      description:
        'The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.',
    }),
    DestinationProperties: DestinationPropertiesSchema.openapi({
      xml: { name: 'destinationProperties' },
      description:
        'The properties of the publishing destination, including the ARNs for the destination and the KMS key used for encryption.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      xml: { name: 'clientToken' },
      description: 'The idempotency token for the request.',
    }),
  })
  .openapi({
    required: ['DestinationType', 'DestinationProperties'],
    title: 'CreatePublishingDestinationRequest',
  })
  .openapi('CreatePublishingDestinationRequest')

const FindingTypesSchema = z.array(FindingTypeSchema).min(0).max(50).openapi('FindingTypes')

const CreateSampleFindingsRequestSchema = z
  .object({
    FindingTypes: FindingTypesSchema.exactOptional().openapi({
      xml: { name: 'findingTypes' },
      description: 'The types of sample findings to generate.',
    }),
  })
  .openapi({ title: 'CreateSampleFindingsRequest', required: [] })
  .openapi('CreateSampleFindingsRequest')

const CreateThreatIntelSetRequestSchema = z
  .object({
    Name: NameSchema.openapi({
      xml: { name: 'name' },
      description:
        'A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.',
    }),
    Format: ThreatIntelSetFormatSchema.openapi({
      xml: { name: 'format' },
      description: 'The format of the file that contains the ThreatIntelSet.',
    }),
    Location: LocationSchema.openapi({
      xml: { name: 'location' },
      description: 'The URI of the file that contains the ThreatIntelSet. ',
    }),
    Activate: BooleanSchema.openapi({
      xml: { name: 'activate' },
      description:
        'A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      xml: { name: 'clientToken' },
      description: 'The idempotency token for the create request.',
    }),
    Tags: TagMapSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags to be added to a new threat list resource.',
    }),
  })
  .openapi({
    required: ['Name', 'Format', 'Location', 'Activate'],
    title: 'CreateThreatIntelSetRequest',
  })
  .openapi('CreateThreatIntelSetRequest')

const DeclineInvitationsRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description:
        'A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to decline invitations from.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'DeclineInvitationsRequest' })
  .openapi('DeclineInvitationsRequest')

const DeleteDetectorRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteDetectorRequest' })
  .openapi('DeleteDetectorRequest')

const DeleteFilterRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteFilterRequest' })
  .openapi('DeleteFilterRequest')

const DeleteIPSetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteIPSetRequest' })
  .openapi('DeleteIPSetRequest')

const DeleteInvitationsRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description:
        'A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to delete invitations from.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'DeleteInvitationsRequest' })
  .openapi('DeleteInvitationsRequest')

const DeleteMembersRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description:
        'A list of account IDs of the GuardDuty member accounts that you want to delete.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'DeleteMembersRequest' })
  .openapi('DeleteMembersRequest')

const DeletePublishingDestinationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeletePublishingDestinationRequest' })
  .openapi('DeletePublishingDestinationRequest')

const DeleteThreatIntelSetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteThreatIntelSetRequest' })
  .openapi('DeleteThreatIntelSetRequest')

const IntegerValueWithMaxSchema = z.int().min(1).max(50).openapi('IntegerValueWithMax')

const FilterCriteriaSchema = z
  .object({
    FilterCriterion: FilterCriterionListSchema.exactOptional().openapi({
      xml: { name: 'filterCriterion' },
      description:
        'Represents a condition that when matched will be added to the response of the operation.',
    }),
  })
  .openapi({
    description: 'Represents the criteria to be used in the filter for describing scan entries.',
    required: [],
  })
  .openapi('FilterCriteria')

const SortCriteriaSchema = z
  .object({
    AttributeName: StringSchema.exactOptional().openapi({
      xml: { name: 'attributeName' },
      description:
        'Represents the finding attribute, such as <code>accountId</code>, that sorts the findings.',
    }),
    OrderBy: OrderBySchema.exactOptional().openapi({
      xml: { name: 'orderBy' },
      description: 'The order by which the sorted findings are to be displayed.',
    }),
  })
  .openapi({
    description: 'Contains information about the criteria used for sorting findings.',
    required: [],
  })
  .openapi('SortCriteria')

const DescribeMalwareScansRequestSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
    }),
    MaxResults: IntegerValueWithMaxSchema.exactOptional().openapi({
      xml: { name: 'maxResults' },
      description:
        'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.',
    }),
    FilterCriteria: FilterCriteriaSchema.exactOptional().openapi({
      xml: { name: 'filterCriteria' },
      description: 'Represents the criteria to be used in the filter for describing scan entries.',
    }),
    SortCriteria: SortCriteriaSchema.exactOptional().openapi({
      xml: { name: 'sortCriteria' },
      description:
        'Represents the criteria used for sorting scan entries. The <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_SortCriteria.html#guardduty-Type-SortCriteria-attributeName"> <code>attributeName</code> </a> is required and it must be <code>scanStartTime</code>.',
    }),
  })
  .openapi({ title: 'DescribeMalwareScansRequest', required: [] })
  .openapi('DescribeMalwareScansRequest')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const DescribeOrganizationConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DescribeOrganizationConfigurationRequest' })
  .openapi('DescribeOrganizationConfigurationRequest')

const DescribePublishingDestinationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DescribePublishingDestinationRequest' })
  .openapi('DescribePublishingDestinationRequest')

const DisableOrganizationAdminAccountRequestSchema = z
  .object({
    AdminAccountId: StringSchema.openapi({
      xml: { name: 'adminAccountId' },
      description:
        'The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.',
    }),
  })
  .openapi({ required: ['AdminAccountId'], title: 'DisableOrganizationAdminAccountRequest' })
  .openapi('DisableOrganizationAdminAccountRequest')

const DisassociateFromAdministratorAccountRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateFromAdministratorAccountRequest' })
  .openapi('DisassociateFromAdministratorAccountRequest')

const DisassociateFromMasterAccountRequestSchema = z
  .looseObject({})
  .openapi({
    deprecated: true,
    title: 'DisassociateFromMasterAccountRequest',
    description:
      'This input is deprecated, use DisassociateFromAdministratorAccountRequest instead',
  })
  .openapi('DisassociateFromMasterAccountRequest')

const DisassociateMembersRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description:
        'A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'DisassociateMembersRequest' })
  .openapi('DisassociateMembersRequest')

const EnableOrganizationAdminAccountRequestSchema = z
  .object({
    AdminAccountId: StringSchema.openapi({
      xml: { name: 'adminAccountId' },
      description:
        'The Amazon Web Services Account ID for the organization account to be enabled as a GuardDuty delegated administrator.',
    }),
  })
  .openapi({ required: ['AdminAccountId'], title: 'EnableOrganizationAdminAccountRequest' })
  .openapi('EnableOrganizationAdminAccountRequest')

const FeedbackSchema = z.enum(['USEFUL', 'NOT_USEFUL']).openapi('Feedback')

const FindingStatisticTypesSchema = z
  .array(FindingStatisticTypeSchema)
  .min(0)
  .max(10)
  .openapi('FindingStatisticTypes')

const GetAdministratorAccountRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetAdministratorAccountRequest' })
  .openapi('GetAdministratorAccountRequest')

const GetCoverageStatisticsRequestSchema = z
  .object({
    FilterCriteria: CoverageFilterCriteriaSchema.exactOptional().openapi({
      xml: { name: 'filterCriteria' },
      description: 'Represents the criteria used to filter the coverage statistics',
    }),
    StatisticsType: CoverageStatisticsTypeListSchema.openapi({
      xml: { name: 'statisticsType' },
      description: 'Represents the statistics type used to aggregate the coverage details.',
    }),
  })
  .openapi({ required: ['StatisticsType'], title: 'GetCoverageStatisticsRequest' })
  .openapi('GetCoverageStatisticsRequest')

const GetDetectorRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetDetectorRequest' })
  .openapi('GetDetectorRequest')

const GetFilterRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetFilterRequest' })
  .openapi('GetFilterRequest')

const GetFindingsRequestSchema = z
  .object({
    FindingIds: FindingIdsSchema.openapi({
      xml: { name: 'findingIds' },
      description: 'The IDs of the findings that you want to retrieve.',
    }),
    SortCriteria: SortCriteriaSchema.exactOptional().openapi({
      xml: { name: 'sortCriteria' },
      description: 'Represents the criteria used for sorting findings.',
    }),
  })
  .openapi({ required: ['FindingIds'], title: 'GetFindingsRequest' })
  .openapi('GetFindingsRequest')

const GetFindingsStatisticsRequestSchema = z
  .object({
    FindingStatisticTypes: FindingStatisticTypesSchema.openapi({
      xml: { name: 'findingStatisticTypes' },
      description: 'The types of finding statistics to retrieve.',
    }),
    FindingCriteria: FindingCriteriaSchema.exactOptional().openapi({
      xml: { name: 'findingCriteria' },
      description: 'Represents the criteria that is used for querying findings.',
    }),
  })
  .openapi({ required: ['FindingStatisticTypes'], title: 'GetFindingsStatisticsRequest' })
  .openapi('GetFindingsStatisticsRequest')

const GetIPSetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetIPSetRequest' })
  .openapi('GetIPSetRequest')

const GetInvitationsCountRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetInvitationsCountRequest' })
  .openapi('GetInvitationsCountRequest')

const GetMalwareScanSettingsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetMalwareScanSettingsRequest' })
  .openapi('GetMalwareScanSettingsRequest')

const GetMasterAccountRequestSchema = z
  .looseObject({})
  .openapi({
    deprecated: true,
    title: 'GetMasterAccountRequest',
    description: 'This input is deprecated, use GetAdministratorAccountRequest instead',
  })
  .openapi('GetMasterAccountRequest')

const GetMemberDetectorsRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description: 'The account ID of the member account.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'GetMemberDetectorsRequest' })
  .openapi('GetMemberDetectorsRequest')

const GetMembersRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description:
        'A list of account IDs of the GuardDuty member accounts that you want to describe.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'GetMembersRequest' })
  .openapi('GetMembersRequest')

const GetRemainingFreeTrialDaysRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.exactOptional().openapi({
      xml: { name: 'accountIds' },
      description: 'A list of account identifiers of the GuardDuty member account.',
    }),
  })
  .openapi({ title: 'GetRemainingFreeTrialDaysRequest', required: [] })
  .openapi('GetRemainingFreeTrialDaysRequest')

const GetThreatIntelSetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetThreatIntelSetRequest' })
  .openapi('GetThreatIntelSetRequest')

const UsageStatisticTypeSchema = z
  .enum([
    'SUM_BY_ACCOUNT',
    'SUM_BY_DATA_SOURCE',
    'SUM_BY_RESOURCE',
    'TOP_RESOURCES',
    'SUM_BY_FEATURES',
  ])
  .openapi('UsageStatisticType')

const UsageCriteriaSchema = z
  .object({
    AccountIds: AccountIdsSchema.exactOptional().openapi({
      xml: { name: 'accountIds' },
      description: 'The account IDs to aggregate usage statistics from.',
    }),
    DataSources: DataSourceListSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        'The data sources to aggregate usage statistics from.This parameter is deprecated, use Features instead',
    }),
    Resources: ResourceListSchema.exactOptional().openapi({
      xml: { name: 'resources' },
      description:
        'The resources to aggregate usage statistics from. Only accepts exact resource names.',
    }),
    Features: UsageFeatureListSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'The features to aggregate usage statistics from.',
    }),
  })
  .openapi({
    description: 'Contains information about the criteria used to query usage statistics.',
    required: [],
  })
  .openapi('UsageCriteria')

const GetUsageStatisticsRequestSchema = z
  .object({
    UsageStatisticType: UsageStatisticTypeSchema.openapi({
      xml: { name: 'usageStatisticsType' },
      description: 'The type of usage statistics to retrieve.',
    }),
    UsageCriteria: UsageCriteriaSchema.openapi({
      xml: { name: 'usageCriteria' },
      description: 'Represents the criteria used for querying usage.',
    }),
    Unit: StringSchema.exactOptional().openapi({
      xml: { name: 'unit' },
      description:
        'The currency unit you would like to view your usage statistics in. Current valid values are USD.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      xml: { name: 'maxResults' },
      description: 'The maximum number of results to return in the response.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.',
    }),
  })
  .openapi({
    required: ['UsageStatisticType', 'UsageCriteria'],
    title: 'GetUsageStatisticsRequest',
  })
  .openapi('GetUsageStatisticsRequest')

const GuardDutyArnSchema = z
  .string()
  .regex(
    /^arn:[A-Za-z_.-]{1,20}:guardduty:[A-Za-z0-9_\/.-]{0,63}:\d+:detector\/[A-Za-z0-9_\/.-]{32,264}$/,
  )
  .openapi('GuardDutyArn')

const InviteMembersRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description:
        'A list of account IDs of the accounts that you want to invite to GuardDuty as members.',
    }),
    DisableEmailNotification: BooleanSchema.exactOptional().openapi({
      xml: { name: 'disableEmailNotification' },
      description:
        'A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.',
    }),
    Message: StringSchema.exactOptional().openapi({
      xml: { name: 'message' },
      description:
        "The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.",
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'InviteMembersRequest' })
  .openapi('InviteMembersRequest')

const ListCoverageRequestSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      xml: { name: 'maxResults' },
      description: 'The maximum number of results to return in the response.',
    }),
    FilterCriteria: CoverageFilterCriteriaSchema.exactOptional().openapi({
      xml: { name: 'filterCriteria' },
      description: 'Represents the criteria used to filter the coverage details.',
    }),
    SortCriteria: CoverageSortCriteriaSchema.exactOptional().openapi({
      xml: { name: 'sortCriteria' },
      description: 'Represents the criteria used to sort the coverage details.',
    }),
  })
  .openapi({ title: 'ListCoverageRequest', required: [] })
  .openapi('ListCoverageRequest')

const ListDetectorsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListDetectorsRequest' })
  .openapi('ListDetectorsRequest')

const ListFiltersRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListFiltersRequest' })
  .openapi('ListFiltersRequest')

const ListFindingsRequestSchema = z
  .object({
    FindingCriteria: FindingCriteriaSchema.exactOptional().openapi({
      xml: { name: 'findingCriteria' },
      description:
        "<p>Represents the criteria used for querying findings. Valid values include:</p> <ul> <li> <p>JSON field name</p> </li> <li> <p>accountId</p> </li> <li> <p>region</p> </li> <li> <p>confidence</p> </li> <li> <p>id</p> </li> <li> <p>resource.accessKeyDetails.accessKeyId</p> </li> <li> <p>resource.accessKeyDetails.principalId</p> </li> <li> <p>resource.accessKeyDetails.userName</p> </li> <li> <p>resource.accessKeyDetails.userType</p> </li> <li> <p>resource.instanceDetails.iamInstanceProfile.id</p> </li> <li> <p>resource.instanceDetails.imageId</p> </li> <li> <p>resource.instanceDetails.instanceId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicDnsName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicIp</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.subnetId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.vpcId</p> </li> <li> <p>resource.instanceDetails.tags.key</p> </li> <li> <p>resource.instanceDetails.tags.value</p> </li> <li> <p>resource.resourceType</p> </li> <li> <p>service.action.actionType</p> </li> <li> <p>service.action.awsApiCallAction.api</p> </li> <li> <p>service.action.awsApiCallAction.callerType</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.awsApiCallAction.serviceName</p> </li> <li> <p>service.action.dnsRequestAction.domain</p> </li> <li> <p>service.action.networkConnectionAction.blocked</p> </li> <li> <p>service.action.networkConnectionAction.connectionDirection</p> </li> <li> <p>service.action.networkConnectionAction.localPortDetails.port</p> </li> <li> <p>service.action.networkConnectionAction.protocol</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.networkConnectionAction.remotePortDetails.port</p> </li> <li> <p>service.additionalInfo.threatListName</p> </li> <li> <p>service.archived</p> <p>When this attribute is set to 'true', only archived findings are listed. When it's set to 'false', only unarchived findings are listed. When this attribute is not set, all existing findings are listed.</p> </li> <li> <p>service.resourceRole</p> </li> <li> <p>severity</p> </li> <li> <p>type</p> </li> <li> <p>updatedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format: 1486685375000</p> </li> </ul>",
    }),
    SortCriteria: SortCriteriaSchema.exactOptional().openapi({
      xml: { name: 'sortCriteria' },
      description: 'Represents the criteria used for sorting findings.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      xml: { name: 'maxResults' },
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
    }),
  })
  .openapi({ title: 'ListFindingsRequest', required: [] })
  .openapi('ListFindingsRequest')

const ListIPSetsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListIPSetsRequest' })
  .openapi('ListIPSetsRequest')

const ListInvitationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListInvitationsRequest' })
  .openapi('ListInvitationsRequest')

const ListMembersRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListMembersRequest' })
  .openapi('ListMembersRequest')

const ListOrganizationAdminAccountsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListOrganizationAdminAccountsRequest' })
  .openapi('ListOrganizationAdminAccountsRequest')

const ListPublishingDestinationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListPublishingDestinationsRequest' })
  .openapi('ListPublishingDestinationsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListThreatIntelSetsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListThreatIntelSetsRequest' })
  .openapi('ListThreatIntelSetsRequest')

const MemberFeaturesConfigurationsSchema = z
  .array(MemberFeaturesConfigurationSchema)
  .openapi('MemberFeaturesConfigurations')

const OrganizationDataSourceConfigurationsSchema = z
  .object({
    S3Logs: OrganizationS3LogsConfigurationSchema.exactOptional().openapi({
      xml: { name: 's3Logs' },
      description:
        'Describes whether S3 data event logs are enabled for new members of the organization.',
    }),
    Kubernetes: OrganizationKubernetesConfigurationSchema.exactOptional().openapi({
      xml: { name: 'kubernetes' },
      description:
        'Describes the configuration of Kubernetes data sources for new members of the organization.',
    }),
    MalwareProtection: OrganizationMalwareProtectionConfigurationSchema.exactOptional().openapi({
      xml: { name: 'malwareProtection' },
      description:
        'Describes the configuration of Malware Protection for new members of the organization.',
    }),
  })
  .openapi({
    description:
      'An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization.',
    required: [],
  })
  .openapi('OrganizationDataSourceConfigurations')

const OrganizationFeaturesConfigurationsSchema = z
  .array(OrganizationFeatureConfigurationSchema)
  .openapi('OrganizationFeaturesConfigurations')

const ScanCriterionKeySchema = z
  .literal('EC2_INSTANCE_TAG')
  .openapi({
    description:
      'An enum value representing possible resource properties to match with given scan condition.',
  })
  .openapi('ScanCriterionKey')

const StartMonitoringMembersRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description: 'A list of account IDs of the GuardDuty member accounts to start monitoring.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'StartMonitoringMembersRequest' })
  .openapi('StartMonitoringMembersRequest')

const StopMonitoringMembersRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description: 'A list of account IDs for the member accounts to stop monitoring.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'StopMonitoringMembersRequest' })
  .openapi('StopMonitoringMembersRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.openapi({
      xml: { name: 'tags' },
      description: 'The tags to be added to a resource.',
    }),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UnarchiveFindingsRequestSchema = z
  .object({
    FindingIds: FindingIdsSchema.openapi({
      xml: { name: 'findingIds' },
      description: 'The IDs of the findings to unarchive.',
    }),
  })
  .openapi({ required: ['FindingIds'], title: 'UnarchiveFindingsRequest' })
  .openapi('UnarchiveFindingsRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDetectorRequestSchema = z
  .object({
    Enable: BooleanSchema.exactOptional().openapi({
      xml: { name: 'enable' },
      description: 'Specifies whether the detector is enabled or not enabled.',
    }),
    FindingPublishingFrequency: FindingPublishingFrequencySchema.exactOptional().openapi({
      xml: { name: 'findingPublishingFrequency' },
      description:
        'An enum value that specifies how frequently findings are exported, such as to CloudWatch Events.',
    }),
    DataSources: DataSourceConfigurationsSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        '<p>Describes which data sources will be updated.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>This parameter is deprecated, use Features instead',
    }),
    Features: DetectorFeatureConfigurationsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'Provides the features that will be updated for the detector.',
    }),
  })
  .openapi({ title: 'UpdateDetectorRequest', required: [] })
  .openapi('UpdateDetectorRequest')

const UpdateFilterRequestSchema = z
  .object({
    Description: FilterDescriptionSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        'The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.',
    }),
    Action: FilterActionSchema.exactOptional().openapi({
      xml: { name: 'action' },
      description:
        'Specifies the action that is to be applied to the findings that match the filter.',
    }),
    Rank: FilterRankSchema.exactOptional().openapi({
      xml: { name: 'rank' },
      description:
        'Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.',
    }),
    FindingCriteria: FindingCriteriaSchema.exactOptional().openapi({
      xml: { name: 'findingCriteria' },
      description: 'Represents the criteria to be used in the filter for querying findings.',
    }),
  })
  .openapi({ title: 'UpdateFilterRequest', required: [] })
  .openapi('UpdateFilterRequest')

const UpdateFindingsFeedbackRequestSchema = z
  .object({
    FindingIds: FindingIdsSchema.openapi({
      xml: { name: 'findingIds' },
      description: 'The IDs of the findings that you want to mark as useful or not useful.',
    }),
    Feedback: FeedbackSchema.openapi({
      xml: { name: 'feedback' },
      description: 'The feedback for the finding.',
    }),
    Comments: StringSchema.exactOptional().openapi({
      xml: { name: 'comments' },
      description: 'Additional feedback about the GuardDuty findings.',
    }),
  })
  .openapi({ required: ['FindingIds', 'Feedback'], title: 'UpdateFindingsFeedbackRequest' })
  .openapi('UpdateFindingsFeedbackRequest')

const UpdateIPSetRequestSchema = z
  .object({
    Name: NameSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The unique ID that specifies the IPSet that you want to update.',
    }),
    Location: LocationSchema.exactOptional().openapi({
      xml: { name: 'location' },
      description: 'The updated URI of the file that contains the IPSet. ',
    }),
    Activate: BooleanSchema.exactOptional().openapi({
      xml: { name: 'activate' },
      description: 'The updated Boolean value that specifies whether the IPSet is active or not.',
    }),
  })
  .openapi({ title: 'UpdateIPSetRequest', required: [] })
  .openapi('UpdateIPSetRequest')

const UpdateMalwareScanSettingsRequestSchema = z
  .object({
    ScanResourceCriteria: ScanResourceCriteriaSchema.exactOptional().openapi({
      xml: { name: 'scanResourceCriteria' },
      description:
        'Represents the criteria to be used in the filter for selecting resources to scan.',
    }),
    EbsSnapshotPreservation: EbsSnapshotPreservationSchema.exactOptional().openapi({
      xml: { name: 'ebsSnapshotPreservation' },
      description: 'An enum value representing possible snapshot preservation settings.',
    }),
  })
  .openapi({ title: 'UpdateMalwareScanSettingsRequest', required: [] })
  .openapi('UpdateMalwareScanSettingsRequest')

const UpdateMemberDetectorsRequestSchema = z
  .object({
    AccountIds: AccountIdsSchema.openapi({
      xml: { name: 'accountIds' },
      description: 'A list of member account IDs to be updated.',
    }),
    DataSources: DataSourceConfigurationsSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        'Describes which data sources will be updated.This parameter is deprecated, use Features instead',
    }),
    Features: MemberFeaturesConfigurationsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'A list of features that will be updated for the specified member accounts.',
    }),
  })
  .openapi({ required: ['AccountIds'], title: 'UpdateMemberDetectorsRequest' })
  .openapi('UpdateMemberDetectorsRequest')

const UpdateOrganizationConfigurationRequestSchema = z
  .object({
    AutoEnable: BooleanSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'autoEnable' },
      description:
        '<p>Indicates whether to automatically enable member accounts in the organization.</p> <p>Even though this is still supported, we recommend using <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p>This field is deprecated, use AutoEnableOrganizationMembers instead',
    }),
    DataSources: OrganizationDataSourceConfigurationsSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'dataSources' },
      description:
        'Describes which data sources will be updated.This parameter is deprecated, use Features instead',
    }),
    Features: OrganizationFeaturesConfigurationsSchema.exactOptional().openapi({
      xml: { name: 'features' },
      description: 'A list of features that will be configured for the organization.',
    }),
    AutoEnableOrganizationMembers: AutoEnableMembersSchema.exactOptional().openapi({
      xml: { name: 'autoEnableOrganizationMembers' },
      description:
        '<p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. </p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the Amazon Web Services Organization have GuardDuty enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> </li> <li> <p> <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any accounts in the organization. GuardDuty must be managed for each account individually by the administrator.</p> </li> </ul>',
    }),
  })
  .openapi({ title: 'UpdateOrganizationConfigurationRequest', required: [] })
  .openapi('UpdateOrganizationConfigurationRequest')

const UpdatePublishingDestinationRequestSchema = z
  .object({
    DestinationProperties: DestinationPropertiesSchema.exactOptional().openapi({
      xml: { name: 'destinationProperties' },
      description:
        'A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code> and <code>KmsKeyArn</code> of the publishing destination.',
    }),
  })
  .openapi({ title: 'UpdatePublishingDestinationRequest', required: [] })
  .openapi('UpdatePublishingDestinationRequest')

const UpdateThreatIntelSetRequestSchema = z
  .object({
    Name: NameSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The unique ID that specifies the ThreatIntelSet that you want to update.',
    }),
    Location: LocationSchema.exactOptional().openapi({
      xml: { name: 'location' },
      description: 'The updated URI of the file that contains the ThreateIntelSet.',
    }),
    Activate: BooleanSchema.exactOptional().openapi({
      xml: { name: 'activate' },
      description:
        'The updated Boolean value that specifies whether the ThreateIntelSet is active or not.',
    }),
  })
  .openapi({ title: 'UpdateThreatIntelSetRequest', required: [] })
  .openapi('UpdateThreatIntelSetRequest')

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

export const getDetectorDetectorIdAdministratorRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/administrator',
  description:
    'Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.',
  operationId: 'GetAdministratorAccount',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector of the GuardDuty member account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAdministratorAccountResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdAdministratorRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/administrator',
  description:
    'Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.',
  operationId: 'AcceptAdministratorInvitation',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector of the GuardDuty member account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              administratorId: z
                .string()
                .openapi({
                  description:
                    "The account ID of the GuardDuty administrator account whose invitation you're accepting.",
                }),
              invitationId: z
                .string()
                .openapi({
                  description:
                    'The value that is used to validate the administrator account to the member account.',
                }),
            })
            .openapi({ required: ['administratorId', 'invitationId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptAdministratorInvitationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdMasterRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/master',
  description:
    'Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.',
  operationId: 'GetMasterAccount',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector of the GuardDuty member account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMasterAccountResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDetectorDetectorIdMasterRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/master',
  description: 'Accepts the invitation to be monitored by a GuardDuty administrator account.',
  operationId: 'AcceptInvitation',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector of the GuardDuty member account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              masterId: z
                .string()
                .openapi({
                  description:
                    "The account ID of the GuardDuty administrator account whose invitation you're accepting.",
                }),
              invitationId: z
                .string()
                .openapi({
                  description:
                    'The value that is used to validate the administrator account to the member account.',
                }),
            })
            .openapi({ required: ['masterId', 'invitationId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptInvitationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDetectorDetectorIdFindingsArchiveRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/findings/archive',
  description:
    "<p>Archives GuardDuty findings that are specified by the list of finding IDs.</p> <note> <p>Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts.</p> </note>",
  operationId: 'ArchiveFindings',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector that specifies the GuardDuty service whose findings you want to archive.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              findingIds: z
                .array(FindingIdSchema)
                .min(0)
                .max(50)
                .openapi({ description: 'The IDs of the findings that you want to archive.' }),
            })
            .openapi({ required: ['findingIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ArchiveFindingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorRoute = createRoute({
  method: 'get',
  path: '/detector',
  description: 'Lists detectorIds of all the existing Amazon GuardDuty detector resources.',
  operationId: 'ListDetectors',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
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
      content: { 'application/json': { schema: ListDetectorsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorRoute = createRoute({
  method: 'post',
  path: '/detector',
  description:
    '<p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'CreateDetector',
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
              enable: z
                .boolean()
                .openapi({
                  description:
                    'A Boolean value that specifies whether the detector is to be enabled.',
                }),
              clientToken: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The idempotency token for the create request.' }),
              findingPublishingFrequency: z
                .enum(['FIFTEEN_MINUTES', 'ONE_HOUR', 'SIX_HOURS'])
                .exactOptional()
                .openapi({
                  description:
                    'A value that specifies how frequently updated findings are exported.',
                }),
              dataSources: z
                .object({
                  S3Logs: S3LogsConfigurationSchema.exactOptional().openapi({
                    xml: { name: 's3Logs' },
                    description:
                      'Describes whether S3 data event logs are enabled as a data source.',
                  }),
                  Kubernetes: KubernetesConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'kubernetes' },
                    description:
                      'Describes whether any Kubernetes logs are enabled as data sources.',
                  }),
                  MalwareProtection: MalwareProtectionConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'malwareProtection' },
                    description:
                      'Describes whether Malware Protection is enabled as a data source.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about which data sources are enabled.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'The tags to be added to a new detector resource.' }),
              features: z
                .array(DetectorFeatureConfigurationSchema)
                .exactOptional()
                .openapi({
                  description: 'A list of features that will be configured for the detector.',
                }),
            })
            .openapi({ required: ['enable'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDetectorResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdFilterRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/filter',
  description: 'Returns a paginated list of the current filters.',
  operationId: 'ListFilters',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that the filter is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
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
      content: { 'application/json': { schema: ListFiltersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFilterRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/filter',
  description:
    'Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_limits.html">Quotas for GuardDuty</a>.',
  operationId: 'CreateFilter',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector belonging to the GuardDuty account that you want to create a filter for.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .min(3)
                .max(64)
                .openapi({
                  description:
                    'The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.',
                }),
              description: z
                .string()
                .min(0)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.',
                }),
              action: z
                .enum(['NOOP', 'ARCHIVE'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the action that is to be applied to the findings that match the filter.',
                }),
              rank: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.',
                }),
              findingCriteria: z
                .object({
                  Criterion: CriterionSchema.exactOptional().openapi({
                    xml: { name: 'criterion' },
                    description:
                      'Represents a map of finding properties that match specified conditions and values when querying findings.',
                  }),
                })
                .openapi({
                  description:
                    'Contains information about the criteria used for querying findings.',
                  required: [],
                }),
              clientToken: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The idempotency token for the create request.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'The tags to be added to a new filter resource.' }),
            })
            .openapi({ required: ['name', 'findingCriteria'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFilterResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdIpsetRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/ipset',
  description:
    'Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account.',
  operationId: 'ListIPSets',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that the IPSet is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
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
      content: { 'application/json': { schema: ListIPSetsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdIpsetRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/ipset',
  description:
    "Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation.",
  operationId: 'CreateIPSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty account that you want to create an IPSet for.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .min(1)
                .max(300)
                .openapi({
                  description:
                    '<p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).</p>',
                }),
              format: z
                .enum(['TXT', 'STIX', 'OTX_CSV', 'ALIEN_VAULT', 'PROOF_POINT', 'FIRE_EYE'])
                .openapi({ description: 'The format of the file that contains the IPSet.' }),
              location: z
                .string()
                .min(1)
                .max(300)
                .openapi({ description: 'The URI of the file that contains the IPSet. ' }),
              activate: z
                .boolean()
                .openapi({
                  description:
                    'A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.',
                }),
              clientToken: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The idempotency token for the create request.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'The tags to be added to a new IP set resource.' }),
            })
            .openapi({ required: ['name', 'format', 'location', 'activate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIPSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdMemberRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/member',
  description:
    'Lists details about all member accounts for the current GuardDuty administrator account.',
  operationId: 'ListMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector the member is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
            schema: { type: 'string' },
          },
        }),
      onlyAssociated: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'onlyAssociated',
            in: 'query',
            required: false,
            description:
              'Specifies whether to only return associated members or to return all members (including members who haven\'t been invited yet or have been disassociated). Member accounts must have been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html"> <code>Create Members</code> </a>. ',
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
      content: { 'application/json': { schema: ListMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member',
  description:
    '<p>Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization.</p> <p>When using <code>Create Members</code> as an organizations delegated administrator this action will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account, which must enable GuardDuty prior to being added as a member.</p> <p>If you are adding accounts by invitation, use this action after GuardDuty has bee enabled in potential member accounts and before using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a>.</p>',
  operationId: 'CreateMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty account that you want to associate member accounts with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountDetails: z
                .array(AccountDetailSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account.',
                }),
            })
            .openapi({ required: ['accountDetails'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdPublishingDestinationRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/publishingDestination',
  description:
    'Returns a list of publishing destinations associated with the specified <code>detectorId</code>.',
  operationId: 'ListPublishingDestinations',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The ID of the detector to retrieve publishing destinations for.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in the response.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.',
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
      content: { 'application/json': { schema: ListPublishingDestinationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdPublishingDestinationRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/publishingDestination',
  description:
    'Creates a publishing destination to export findings to. The resource to export findings to must exist before you use this operation.',
  operationId: 'CreatePublishingDestination',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the GuardDuty detector associated with the publishing destination.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destinationType: z
                .literal('S3')
                .openapi({
                  description:
                    'The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.',
                }),
              destinationProperties: z
                .object({
                  DestinationArn: StringSchema.exactOptional().openapi({
                    xml: { name: 'destinationArn' },
                    description:
                      '<p>The ARN of the resource to publish to.</p> <p>To specify an S3 bucket folder use the following format: <code>arn:aws:s3:::DOC-EXAMPLE-BUCKET/myFolder/</code> </p>',
                  }),
                  KmsKeyArn: StringSchema.exactOptional().openapi({
                    xml: { name: 'kmsKeyArn' },
                    description: 'The ARN of the KMS key to use for encryption.',
                  }),
                })
                .openapi({
                  description:
                    'Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.',
                  required: [],
                }),
              clientToken: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The idempotency token for the request.' }),
            })
            .openapi({ required: ['destinationType', 'destinationProperties'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePublishingDestinationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFindingsCreateRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/findings/create',
  description:
    "Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for <code>findingTypes</code>, the API generates sample findings of all supported finding types.",
  operationId: 'CreateSampleFindings',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The ID of the detector to create sample findings for.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              findingTypes: z
                .array(FindingTypeSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The types of sample findings to generate.' }),
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
      content: { 'application/json': { schema: CreateSampleFindingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdThreatintelsetRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/threatintelset',
  description:
    'Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the administrator account are returned.',
  operationId: 'ListThreatIntelSets',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector that the threatIntelSet is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
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
      content: { 'application/json': { schema: ListThreatIntelSetsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdThreatintelsetRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/threatintelset',
  description:
    'Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can use this operation.',
  operationId: 'CreateThreatIntelSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty account that you want to create a threatIntelSet for.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .min(1)
                .max(300)
                .openapi({
                  description:
                    'A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.',
                }),
              format: z
                .enum(['TXT', 'STIX', 'OTX_CSV', 'ALIEN_VAULT', 'PROOF_POINT', 'FIRE_EYE'])
                .openapi({
                  description: 'The format of the file that contains the ThreatIntelSet.',
                }),
              location: z
                .string()
                .min(1)
                .max(300)
                .openapi({ description: 'The URI of the file that contains the ThreatIntelSet. ' }),
              activate: z
                .boolean()
                .openapi({
                  description:
                    'A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.',
                }),
              clientToken: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The idempotency token for the create request.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'The tags to be added to a new threat list resource.' }),
            })
            .openapi({ required: ['name', 'format', 'location', 'activate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateThreatIntelSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postInvitationDeclineRoute = createRoute({
  method: 'post',
  path: '/invitation/decline',
  description:
    'Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.',
  operationId: 'DeclineInvitations',
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
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to decline invitations from.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeclineInvitationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}',
  description:
    '<p>Retrieves an Amazon GuardDuty detector specified by the detectorId.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'GetDetector',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that you want to get.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDetectorResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}',
  description:
    '<p>Updates the Amazon GuardDuty detector specified by the detectorId.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'UpdateDetector',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector to update.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Specifies whether the detector is enabled or not enabled.',
                }),
              findingPublishingFrequency: z
                .enum(['FIFTEEN_MINUTES', 'ONE_HOUR', 'SIX_HOURS'])
                .exactOptional()
                .openapi({
                  description:
                    'An enum value that specifies how frequently findings are exported, such as to CloudWatch Events.',
                }),
              dataSources: z
                .object({
                  S3Logs: S3LogsConfigurationSchema.exactOptional().openapi({
                    xml: { name: 's3Logs' },
                    description:
                      'Describes whether S3 data event logs are enabled as a data source.',
                  }),
                  Kubernetes: KubernetesConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'kubernetes' },
                    description:
                      'Describes whether any Kubernetes logs are enabled as data sources.',
                  }),
                  MalwareProtection: MalwareProtectionConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'malwareProtection' },
                    description:
                      'Describes whether Malware Protection is enabled as a data source.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about which data sources are enabled.',
                  required: [],
                }),
              features: z
                .array(DetectorFeatureConfigurationSchema)
                .exactOptional()
                .openapi({
                  description: 'Provides the features that will be updated for the detector.',
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
      content: { 'application/json': { schema: UpdateDetectorResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteDetectorDetectorIdRoute = createRoute({
  method: 'delete',
  path: '/detector/{detectorId}',
  description: 'Deletes an Amazon GuardDuty detector that is specified by the detector ID.',
  operationId: 'DeleteDetector',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that you want to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDetectorResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdFilterFilterNameRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/filter/{filterName}',
  description: 'Returns the details of the filter specified by the filter name.',
  operationId: 'GetFilter',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that the filter is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      filterName: z
        .string()
        .openapi({
          param: {
            name: 'filterName',
            in: 'path',
            required: true,
            description: 'The name of the filter you want to get.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFilterResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFilterFilterNameRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/filter/{filterName}',
  description: 'Updates the filter specified by the filter name.',
  operationId: 'UpdateFilter',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      filterName: z
        .string()
        .openapi({
          param: {
            name: 'filterName',
            in: 'path',
            required: true,
            description: 'The name of the filter.',
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
                .min(0)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.',
                }),
              action: z
                .enum(['NOOP', 'ARCHIVE'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the action that is to be applied to the findings that match the filter.',
                }),
              rank: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.',
                }),
              findingCriteria: z
                .object({
                  Criterion: CriterionSchema.exactOptional().openapi({
                    xml: { name: 'criterion' },
                    description:
                      'Represents a map of finding properties that match specified conditions and values when querying findings.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the criteria used for querying findings.',
                  required: [],
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
      content: { 'application/json': { schema: UpdateFilterResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteDetectorDetectorIdFilterFilterNameRoute = createRoute({
  method: 'delete',
  path: '/detector/{detectorId}/filter/{filterName}',
  description: 'Deletes the filter specified by the filter name.',
  operationId: 'DeleteFilter',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that the filter is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      filterName: z
        .string()
        .openapi({
          param: {
            name: 'filterName',
            in: 'path',
            required: true,
            description: 'The name of the filter that you want to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFilterResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdIpsetIpSetIdRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/ipset/{ipSetId}',
  description: 'Retrieves the IPSet specified by the <code>ipSetId</code>.',
  operationId: 'GetIPSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that the IPSet is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      ipSetId: z
        .string()
        .openapi({
          param: {
            name: 'ipSetId',
            in: 'path',
            required: true,
            description: 'The unique ID of the IPSet to retrieve.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIPSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdIpsetIpSetIdRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/ipset/{ipSetId}',
  description: 'Updates the IPSet specified by the IPSet ID.',
  operationId: 'UpdateIPSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The detectorID that specifies the GuardDuty service whose IPSet you want to update.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      ipSetId: z
        .string()
        .openapi({
          param: {
            name: 'ipSetId',
            in: 'path',
            required: true,
            description: 'The unique ID that specifies the IPSet that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description: 'The unique ID that specifies the IPSet that you want to update.',
                }),
              location: z
                .string()
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({ description: 'The updated URI of the file that contains the IPSet. ' }),
              activate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The updated Boolean value that specifies whether the IPSet is active or not.',
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
      content: { 'application/json': { schema: UpdateIPSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteDetectorDetectorIdIpsetIpSetIdRoute = createRoute({
  method: 'delete',
  path: '/detector/{detectorId}/ipset/{ipSetId}',
  description:
    'Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP lists in the console user interface.',
  operationId: 'DeleteIPSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector associated with the IPSet.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      ipSetId: z
        .string()
        .openapi({
          param: {
            name: 'ipSetId',
            in: 'path',
            required: true,
            description: 'The unique ID of the IPSet to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteIPSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postInvitationDeleteRoute = createRoute({
  method: 'post',
  path: '/invitation/delete',
  description:
    'Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.',
  operationId: 'DeleteInvitations',
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
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to delete invitations from.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInvitationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberDeleteRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/delete',
  description:
    "<p>Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization.</p>",
  operationId: 'DeleteMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty account whose members you want to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account IDs of the GuardDuty member accounts that you want to delete.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdPublishingDestinationDestinationIdRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/publishingDestination/{destinationId}',
  description:
    'Returns information about the publishing destination specified by the provided <code>destinationId</code>.',
  operationId: 'DescribePublishingDestination',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector associated with the publishing destination to retrieve.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            description: 'The ID of the publishing destination to retrieve.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePublishingDestinationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdPublishingDestinationDestinationIdRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/publishingDestination/{destinationId}',
  description:
    'Updates information about the publishing destination specified by the <code>destinationId</code>.',
  operationId: 'UpdatePublishingDestination',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector associated with the publishing destinations to update.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            description: 'The ID of the publishing destination to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destinationProperties: z
                .object({
                  DestinationArn: StringSchema.exactOptional().openapi({
                    xml: { name: 'destinationArn' },
                    description:
                      '<p>The ARN of the resource to publish to.</p> <p>To specify an S3 bucket folder use the following format: <code>arn:aws:s3:::DOC-EXAMPLE-BUCKET/myFolder/</code> </p>',
                  }),
                  KmsKeyArn: StringSchema.exactOptional().openapi({
                    xml: { name: 'kmsKeyArn' },
                    description: 'The ARN of the KMS key to use for encryption.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.',
                  required: [],
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
      content: { 'application/json': { schema: UpdatePublishingDestinationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteDetectorDetectorIdPublishingDestinationDestinationIdRoute = createRoute({
  method: 'delete',
  path: '/detector/{detectorId}/publishingDestination/{destinationId}',
  description: 'Deletes the publishing definition with the specified <code>destinationId</code>.',
  operationId: 'DeletePublishingDestination',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector associated with the publishing destination to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      destinationId: z
        .string()
        .openapi({
          param: {
            name: 'destinationId',
            in: 'path',
            required: true,
            description: 'The ID of the publishing destination to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePublishingDestinationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/threatintelset/{threatIntelSetId}',
  description: 'Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.',
  operationId: 'GetThreatIntelSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector that the threatIntelSet is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      threatIntelSetId: z
        .string()
        .openapi({
          param: {
            name: 'threatIntelSetId',
            in: 'path',
            required: true,
            description: 'The unique ID of the threatIntelSet that you want to get.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetThreatIntelSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/threatintelset/{threatIntelSetId}',
  description: 'Updates the ThreatIntelSet specified by the ThreatIntelSet ID.',
  operationId: 'UpdateThreatIntelSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      threatIntelSetId: z
        .string()
        .openapi({
          param: {
            name: 'threatIntelSetId',
            in: 'path',
            required: true,
            description: 'The unique ID that specifies the ThreatIntelSet that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description:
                    'The unique ID that specifies the ThreatIntelSet that you want to update.',
                }),
              location: z
                .string()
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description: 'The updated URI of the file that contains the ThreateIntelSet.',
                }),
              activate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The updated Boolean value that specifies whether the ThreateIntelSet is active or not.',
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
      content: { 'application/json': { schema: UpdateThreatIntelSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute = createRoute({
  method: 'delete',
  path: '/detector/{detectorId}/threatintelset/{threatIntelSetId}',
  description: 'Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.',
  operationId: 'DeleteThreatIntelSet',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector that the threatIntelSet is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
      threatIntelSetId: z
        .string()
        .openapi({
          param: {
            name: 'threatIntelSetId',
            in: 'path',
            required: true,
            description: 'The unique ID of the threatIntelSet that you want to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteThreatIntelSetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMalwareScansRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/malware-scans',
  description:
    '<p>Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all the member accounts.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'DescribeMalwareScans',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that the request is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.',
                }),
              filterCriteria: z
                .object({
                  FilterCriterion: FilterCriterionListSchema.exactOptional().openapi({
                    xml: { name: 'filterCriterion' },
                    description:
                      'Represents a condition that when matched will be added to the response of the operation.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents the criteria to be used in the filter for describing scan entries.',
                  required: [],
                }),
              sortCriteria: z
                .object({
                  AttributeName: StringSchema.exactOptional().openapi({
                    xml: { name: 'attributeName' },
                    description:
                      'Represents the finding attribute, such as <code>accountId</code>, that sorts the findings.',
                  }),
                  OrderBy: OrderBySchema.exactOptional().openapi({
                    xml: { name: 'orderBy' },
                    description: 'The order by which the sorted findings are to be displayed.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about the criteria used for sorting findings.',
                  required: [],
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
      content: { 'application/json': { schema: DescribeMalwareScansResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdAdminRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/admin',
  description:
    '<p>Returns information about the account selected as the delegated administrator for GuardDuty.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'DescribeOrganizationConfiguration',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector to retrieve information about the delegated administrator from.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'You can use this parameter to indicate the maximum number of items that you want in the response.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill <code>nextToken</code> in the request with the value of <code>NextToken</code> from the previous response to continue listing data.',
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
      content: { 'application/json': { schema: DescribeOrganizationConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdAdminRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/admin',
  description:
    '<p>Configures the delegated administrator account with the provided values. You must provide the value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>. </p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'UpdateOrganizationConfiguration',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The ID of the detector that configures the delegated administrator.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              autoEnable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Indicates whether to automatically enable member accounts in the organization.</p> <p>Even though this is still supported, we recommend using <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p>',
                }),
              dataSources: z
                .object({
                  S3Logs: OrganizationS3LogsConfigurationSchema.exactOptional().openapi({
                    xml: { name: 's3Logs' },
                    description:
                      'Describes whether S3 data event logs are enabled for new members of the organization.',
                  }),
                  Kubernetes: OrganizationKubernetesConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'kubernetes' },
                    description:
                      'Describes the configuration of Kubernetes data sources for new members of the organization.',
                  }),
                  MalwareProtection:
                    OrganizationMalwareProtectionConfigurationSchema.exactOptional().openapi({
                      xml: { name: 'malwareProtection' },
                      description:
                        'Describes the configuration of Malware Protection for new members of the organization.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization.',
                  required: [],
                }),
              features: z
                .array(OrganizationFeatureConfigurationSchema)
                .exactOptional()
                .openapi({
                  description: 'A list of features that will be configured for the organization.',
                }),
              autoEnableOrganizationMembers: z
                .enum(['NEW', 'ALL', 'NONE'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. </p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the Amazon Web Services Organization have GuardDuty enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> </li> <li> <p> <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any accounts in the organization. GuardDuty must be managed for each account individually by the administrator.</p> </li> </ul>',
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
      content: { 'application/json': { schema: UpdateOrganizationConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postAdminDisableRoute = createRoute({
  method: 'post',
  path: '/admin/disable',
  description:
    'Disables an Amazon Web Services account within the Organization as the GuardDuty delegated administrator.',
  operationId: 'DisableOrganizationAdminAccount',
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
              adminAccountId: z
                .string()
                .openapi({
                  description:
                    'The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.',
                }),
            })
            .openapi({ required: ['adminAccountId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableOrganizationAdminAccountResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdAdministratorDisassociateRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/administrator/disassociate',
  description:
    "<p>Disassociates the current GuardDuty member account from its administrator account.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty in a member account.</p>",
  operationId: 'DisassociateFromAdministratorAccount',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector of the GuardDuty member account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateFromAdministratorAccountResponseSchema },
      },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMasterDisassociateRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/master/disassociate',
  description: 'Disassociates the current GuardDuty member account from its administrator account.',
  operationId: 'DisassociateFromMasterAccount',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector of the GuardDuty member account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateFromMasterAccountResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postDetectorDetectorIdMemberDisassociateRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/disassociate',
  description:
    "<p>Disassociates GuardDuty member accounts (to the current administrator account) specified by the account IDs.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disassociate a member account before removing them from your Amazon Web Services organization.</p>",
  operationId: 'DisassociateMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the administrator account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postAdminEnableRoute = createRoute({
  method: 'post',
  path: '/admin/enable',
  description:
    'Enables an Amazon Web Services account within the organization as the GuardDuty delegated administrator.',
  operationId: 'EnableOrganizationAdminAccount',
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
              adminAccountId: z
                .string()
                .openapi({
                  description:
                    'The Amazon Web Services Account ID for the organization account to be enabled as a GuardDuty delegated administrator.',
                }),
            })
            .openapi({ required: ['adminAccountId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableOrganizationAdminAccountResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdCoverageStatisticsRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/coverage/statistics',
  description:
    'Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you can retrieve the statistics for all the resources associated with the active member accounts in your organization who have enabled EKS Runtime Monitoring and have the GuardDuty agent running on their EKS nodes.',
  operationId: 'GetCoverageStatistics',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the GuardDuty detector associated to the coverage statistics.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filterCriteria: z
                .object({
                  FilterCriterion: CoverageFilterCriterionListSchema.exactOptional().openapi({
                    xml: { name: 'filterCriterion' },
                    description:
                      'Represents a condition that when matched will be added to the response of the operation.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Represents the criteria used in the filter.',
                  required: [],
                }),
              statisticsType: z
                .array(CoverageStatisticsTypeSchema)
                .openapi({
                  description:
                    'Represents the statistics type used to aggregate the coverage details.',
                }),
            })
            .openapi({ required: ['statisticsType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCoverageStatisticsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFindingsGetRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/findings/get',
  description: 'Describes Amazon GuardDuty findings specified by finding IDs.',
  operationId: 'GetFindings',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              findingIds: z
                .array(FindingIdSchema)
                .min(0)
                .max(50)
                .openapi({ description: 'The IDs of the findings that you want to retrieve.' }),
              sortCriteria: z
                .object({
                  AttributeName: StringSchema.exactOptional().openapi({
                    xml: { name: 'attributeName' },
                    description:
                      'Represents the finding attribute, such as <code>accountId</code>, that sorts the findings.',
                  }),
                  OrderBy: OrderBySchema.exactOptional().openapi({
                    xml: { name: 'orderBy' },
                    description: 'The order by which the sorted findings are to be displayed.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about the criteria used for sorting findings.',
                  required: [],
                }),
            })
            .openapi({ required: ['findingIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFindingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFindingsStatisticsRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/findings/statistics',
  description: 'Lists Amazon GuardDuty findings statistics for the specified detector ID.',
  operationId: 'GetFindingsStatistics',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              "The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.",
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              findingStatisticTypes: z
                .array(FindingStatisticTypeSchema)
                .min(0)
                .max(10)
                .openapi({ description: 'The types of finding statistics to retrieve.' }),
              findingCriteria: z
                .object({
                  Criterion: CriterionSchema.exactOptional().openapi({
                    xml: { name: 'criterion' },
                    description:
                      'Represents a map of finding properties that match specified conditions and values when querying findings.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the criteria used for querying findings.',
                  required: [],
                }),
            })
            .openapi({ required: ['findingStatisticTypes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFindingsStatisticsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getInvitationCountRoute = createRoute({
  method: 'get',
  path: '/invitation/count',
  description:
    'Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.',
  operationId: 'GetInvitationsCount',
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
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInvitationsCountResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getDetectorDetectorIdMalwareScanSettingsRoute = createRoute({
  method: 'get',
  path: '/detector/{detectorId}/malware-scan-settings',
  description:
    '<p>Returns the details of the malware scan settings.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'GetMalwareScanSettings',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector that the scan setting is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMalwareScanSettingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMalwareScanSettingsRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/malware-scan-settings',
  description:
    '<p>Updates the malware scan settings.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'UpdateMalwareScanSettings',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector that specifies the GuardDuty service where you want to update scan settings.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              scanResourceCriteria: z
                .object({
                  Include: ScanCriterionSchema.exactOptional().openapi({
                    xml: { name: 'include' },
                    description:
                      'Represents condition that when matched will allow a malware scan for a certain resource.',
                  }),
                  Exclude: ScanCriterionSchema.exactOptional().openapi({
                    xml: { name: 'exclude' },
                    description:
                      'Represents condition that when matched will prevent a malware scan for a certain resource.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about criteria used to filter resources before triggering malware scan.',
                  required: [],
                }),
              ebsSnapshotPreservation: z
                .enum(['NO_RETENTION', 'RETENTION_WITH_FINDING'])
                .exactOptional()
                .openapi({
                  description:
                    'An enum value representing possible snapshot preservation settings.',
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
      content: { 'application/json': { schema: UpdateMalwareScanSettingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberDetectorGetRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/detector/get',
  description:
    '<p>Describes which data sources are enabled for the member account\'s detector.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'GetMemberDetectors',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The detector ID for the administrator account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The account ID of the member account.' }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMemberDetectorsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberGetRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/get',
  description:
    'Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs.',
  operationId: 'GetMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty account whose members you want to retrieve.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account IDs of the GuardDuty member accounts that you want to describe.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFreeTrialDaysRemainingRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/freeTrial/daysRemaining',
  description:
    'Provides the number of days left for each data source used in the free trial period.',
  operationId: 'GetRemainingFreeTrialDays',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The unique ID of the detector of the GuardDuty member account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'A list of account identifiers of the GuardDuty member account.',
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
      content: { 'application/json': { schema: GetRemainingFreeTrialDaysResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdUsageStatisticsRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/usage/statistics',
  description:
    'Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.',
  operationId: 'GetUsageStatistics',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector that specifies the GuardDuty service whose usage statistics you want to retrieve.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
      content: {
        'application/json': {
          schema: z
            .object({
              usageStatisticsType: z
                .enum([
                  'SUM_BY_ACCOUNT',
                  'SUM_BY_DATA_SOURCE',
                  'SUM_BY_RESOURCE',
                  'TOP_RESOURCES',
                  'SUM_BY_FEATURES',
                ])
                .openapi({ description: 'The type of usage statistics to retrieve.' }),
              usageCriteria: z
                .object({
                  AccountIds: AccountIdsSchema.exactOptional().openapi({
                    xml: { name: 'accountIds' },
                    description: 'The account IDs to aggregate usage statistics from.',
                  }),
                  DataSources: DataSourceListSchema.exactOptional().openapi({
                    deprecated: true,
                    xml: { name: 'dataSources' },
                    description:
                      'The data sources to aggregate usage statistics from.This parameter is deprecated, use Features instead',
                  }),
                  Resources: ResourceListSchema.exactOptional().openapi({
                    xml: { name: 'resources' },
                    description:
                      'The resources to aggregate usage statistics from. Only accepts exact resource names.',
                  }),
                  Features: UsageFeatureListSchema.exactOptional().openapi({
                    xml: { name: 'features' },
                    description: 'The features to aggregate usage statistics from.',
                  }),
                })
                .openapi({
                  description:
                    'Contains information about the criteria used to query usage statistics.',
                  required: [],
                }),
              unit: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The currency unit you would like to view your usage statistics in. Current valid values are USD.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.',
                }),
            })
            .openapi({ required: ['usageStatisticsType', 'usageCriteria'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUsageStatisticsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberInviteRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/invite',
  description:
    "Invites other Amazon Web Services accounts (created as members of the current Amazon Web Services account by CreateMembers) to enable GuardDuty, and allow the current Amazon Web Services account to view and manage these accounts' findings on their behalf as the GuardDuty administrator account.",
  operationId: 'InviteMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty account that you want to invite members with.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account IDs of the accounts that you want to invite to GuardDuty as members.',
                }),
              disableEmailNotification: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.',
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.",
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InviteMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdCoverageRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/coverage',
  description:
    "<p>Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization.</p> <p>Make sure the accounts have EKS Runtime Monitoring enabled and GuardDuty agent running on their EKS nodes.</p>",
  operationId: 'ListCoverage',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector whose coverage details you want to retrieve.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
      content: {
        'application/json': {
          schema: z
            .object({
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
              filterCriteria: z
                .object({
                  FilterCriterion: CoverageFilterCriterionListSchema.exactOptional().openapi({
                    xml: { name: 'filterCriterion' },
                    description:
                      'Represents a condition that when matched will be added to the response of the operation.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Represents the criteria used in the filter.',
                  required: [],
                }),
              sortCriteria: z
                .object({
                  AttributeName: CoverageSortKeySchema.exactOptional().openapi({
                    xml: { name: 'attributeName' },
                    description: 'Represents the field name used to sort the coverage details.',
                  }),
                  OrderBy: OrderBySchema.exactOptional().openapi({
                    xml: { name: 'orderBy' },
                    description: 'The order in which the sorted findings are to be displayed.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Information about the sorting criteria used in the coverage statistics.',
                  required: [],
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
      content: { 'application/json': { schema: ListCoverageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFindingsRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/findings',
  description: 'Lists Amazon GuardDuty findings for the specified detector ID.',
  operationId: 'ListFindings',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector that specifies the GuardDuty service whose findings you want to list.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
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
      content: {
        'application/json': {
          schema: z
            .object({
              findingCriteria: z
                .object({
                  Criterion: CriterionSchema.exactOptional().openapi({
                    xml: { name: 'criterion' },
                    description:
                      'Represents a map of finding properties that match specified conditions and values when querying findings.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the criteria used for querying findings.',
                  required: [],
                }),
              sortCriteria: z
                .object({
                  AttributeName: StringSchema.exactOptional().openapi({
                    xml: { name: 'attributeName' },
                    description:
                      'Represents the finding attribute, such as <code>accountId</code>, that sorts the findings.',
                  }),
                  OrderBy: OrderBySchema.exactOptional().openapi({
                    xml: { name: 'orderBy' },
                    description: 'The order by which the sorted findings are to be displayed.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about the criteria used for sorting findings.',
                  required: [],
                }),
              maxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
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
      content: { 'application/json': { schema: ListFindingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getInvitationRoute = createRoute({
  method: 'get',
  path: '/invitation',
  description:
    'Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account.',
  operationId: 'ListInvitations',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.',
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
      content: { 'application/json': { schema: ListInvitationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getAdminRoute = createRoute({
  method: 'get',
  path: '/admin',
  description: 'Lists the accounts configured as GuardDuty delegated administrators.',
  operationId: 'ListOrganizationAdminAccounts',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in the response.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
              'A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.',
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
      content: { 'application/json': { schema: ListOrganizationAdminAccountsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    'Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource.',
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
        .regex(
          /^arn:[A-Za-z_.-]{1,20}:guardduty:[A-Za-z0-9_\/.-]{0,63}:\d+:detector\/[A-Za-z0-9_\/.-]{32,264}$/,
        )
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) for the given GuardDuty resource. ',
            schema: {
              type: 'string',
              pattern:
                '^arn:[A-Za-z_.-]{1,20}:guardduty:[A-Za-z0-9_/.-]{0,63}:\\d+:detector/[A-Za-z0-9_/.-]{32,264}$',
            },
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds tags to a resource.',
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
        .regex(
          /^arn:[A-Za-z_.-]{1,20}:guardduty:[A-Za-z0-9_\/.-]{0,63}:\d+:detector\/[A-Za-z0-9_\/.-]{32,264}$/,
        )
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.',
            schema: {
              type: 'string',
              pattern:
                '^arn:[A-Za-z_.-]{1,20}:guardduty:[A-Za-z0-9_/.-]{0,63}:\\d+:detector/[A-Za-z0-9_/.-]{32,264}$',
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({ description: 'The tags to be added to a resource.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberStartRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/start',
  description:
    'Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html">StopMonitoringMembers</a> operation.',
  operationId: 'StartMonitoringMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector of the GuardDuty administrator account associated with the member accounts to monitor.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of account IDs of the GuardDuty member accounts to start monitoring.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartMonitoringMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberStopRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/stop',
  description:
    "<p>Stops GuardDuty monitoring for the specified member accounts. Use the <code>StartMonitoringMembers</code> operation to restart monitoring for those accounts.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to stop monitoring the member accounts in your organization.</p>",
  operationId: 'StopMonitoringMembers',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the detector associated with the GuardDuty administrator account that is monitoring member accounts.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description: 'A list of account IDs for the member accounts to stop monitoring.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopMonitoringMembersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFindingsUnarchiveRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/findings/unarchive',
  description: 'Unarchives GuardDuty findings specified by the <code>findingIds</code>.',
  operationId: 'UnarchiveFindings',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The ID of the detector associated with the findings to unarchive.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              findingIds: z
                .array(FindingIdSchema)
                .min(0)
                .max(50)
                .openapi({ description: 'The IDs of the findings to unarchive.' }),
            })
            .openapi({ required: ['findingIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UnarchiveFindingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes tags from a resource.',
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
        .regex(
          /^arn:[A-Za-z_.-]{1,20}:guardduty:[A-Za-z0-9_\/.-]{0,63}:\d+:detector\/[A-Za-z0-9_\/.-]{32,264}$/,
        )
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) for the resource to remove tags from.',
            schema: {
              type: 'string',
              pattern:
                '^arn:[A-Za-z_.-]{1,20}:guardduty:[A-Za-z0-9_/.-]{0,63}:\\d+:detector/[A-Za-z0-9_/.-]{32,264}$',
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys to remove from the resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 200,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdFindingsFeedbackRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/findings/feedback',
  description: 'Marks the specified GuardDuty findings as useful or not useful.',
  operationId: 'UpdateFindingsFeedback',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description:
              'The ID of the detector associated with the findings to update feedback for.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              findingIds: z
                .array(FindingIdSchema)
                .min(0)
                .max(50)
                .openapi({
                  description:
                    'The IDs of the findings that you want to mark as useful or not useful.',
                }),
              feedback: z
                .enum(['USEFUL', 'NOT_USEFUL'])
                .openapi({ description: 'The feedback for the finding.' }),
              comments: z
                .string()
                .exactOptional()
                .openapi({ description: 'Additional feedback about the GuardDuty findings.' }),
            })
            .openapi({ required: ['findingIds', 'feedback'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFindingsFeedbackResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDetectorDetectorIdMemberDetectorUpdateRoute = createRoute({
  method: 'post',
  path: '/detector/{detectorId}/member/detector/update',
  description:
    '<p>Contains information on member accounts to be updated.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>',
  operationId: 'UpdateMemberDetectors',
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
      detectorId: z
        .string()
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'detectorId',
            in: 'path',
            required: true,
            description: 'The detector ID of the administrator account.',
            schema: { type: 'string', minLength: 1, maxLength: 300 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'A list of member account IDs to be updated.' }),
              dataSources: z
                .object({
                  S3Logs: S3LogsConfigurationSchema.exactOptional().openapi({
                    xml: { name: 's3Logs' },
                    description:
                      'Describes whether S3 data event logs are enabled as a data source.',
                  }),
                  Kubernetes: KubernetesConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'kubernetes' },
                    description:
                      'Describes whether any Kubernetes logs are enabled as data sources.',
                  }),
                  MalwareProtection: MalwareProtectionConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'malwareProtection' },
                    description:
                      'Describes whether Malware Protection is enabled as a data source.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about which data sources are enabled.',
                  required: [],
                }),
              features: z
                .array(MemberFeaturesConfigurationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of features that will be updated for the specified member accounts.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMemberDetectorsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})
