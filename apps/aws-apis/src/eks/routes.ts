import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const UpdateStatusSchema = z
  .enum(['InProgress', 'Failed', 'Cancelled', 'Successful'])
  .openapi('UpdateStatus')

const UpdateTypeSchema = z
  .enum([
    'VersionUpdate',
    'EndpointAccessUpdate',
    'LoggingUpdate',
    'ConfigUpdate',
    'AssociateIdentityProviderConfig',
    'DisassociateIdentityProviderConfig',
    'AssociateEncryptionConfig',
    'AddonUpdate',
  ])
  .openapi('UpdateType')

const UpdateParamTypeSchema = z
  .enum([
    'Version',
    'PlatformVersion',
    'EndpointPrivateAccess',
    'EndpointPublicAccess',
    'ClusterLogging',
    'DesiredSize',
    'LabelsToAdd',
    'LabelsToRemove',
    'TaintsToAdd',
    'TaintsToRemove',
    'MaxSize',
    'MinSize',
    'ReleaseVersion',
    'PublicAccessCidrs',
    'LaunchTemplateName',
    'LaunchTemplateVersion',
    'IdentityProviderConfig',
    'EncryptionConfig',
    'AddonVersion',
    'ServiceAccountRoleArn',
    'ResolveConflicts',
    'MaxUnavailable',
    'MaxUnavailablePercentage',
  ])
  .openapi('UpdateParamType')

const UpdateParamSchema = z
  .object({
    type: UpdateParamTypeSchema.and(
      z.any().openapi({ description: 'The keys associated with an update request.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The value of the keys submitted as part of an update request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the details of an update request.',
    required: [],
  })
  .openapi('UpdateParam')

const UpdateParamsSchema = z.array(UpdateParamSchema).openapi('UpdateParams')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ErrorCodeSchema = z
  .enum([
    'SubnetNotFound',
    'SecurityGroupNotFound',
    'EniLimitReached',
    'IpNotAvailable',
    'AccessDenied',
    'OperationNotPermitted',
    'VpcIdNotFound',
    'Unknown',
    'NodeCreationFailure',
    'PodEvictionFailure',
    'InsufficientFreeAddresses',
    'ClusterUnreachable',
    'InsufficientNumberOfReplicas',
    'ConfigurationConflict',
    'AdmissionRequestDenied',
    'UnsupportedAddonModification',
    'K8sResourceNotFound',
  ])
  .openapi('ErrorCode')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const ErrorDetailSchema = z
  .object({
    errorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A brief description of the error. </p> <ul> <li> <p> <b>SubnetNotFound</b>: We couldn't find one of the subnets associated with the cluster.</p> </li> <li> <p> <b>SecurityGroupNotFound</b>: We couldn't find one of the security groups associated with the cluster.</p> </li> <li> <p> <b>EniLimitReached</b>: You have reached the elastic network interface limit for your account.</p> </li> <li> <p> <b>IpNotAvailable</b>: A subnet associated with the cluster doesn't have any free IP addresses.</p> </li> <li> <p> <b>AccessDenied</b>: You don't have permissions to perform the specified operation.</p> </li> <li> <p> <b>OperationNotPermitted</b>: The service role associated with the cluster doesn't have the required access permissions for Amazon EKS.</p> </li> <li> <p> <b>VpcIdNotFound</b>: We couldn't find the VPC associated with the cluster.</p> </li> </ul>",
        }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z.any().openapi({ description: 'A more complete description of the error.' }),
    ).exactOptional(),
    resourceIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional field that contains the resource IDs associated with the error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing an error when an asynchronous operation fails.',
    required: [],
  })
  .openapi('ErrorDetail')

const ErrorDetailsSchema = z.array(ErrorDetailSchema).openapi('ErrorDetails')

const UpdateSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'A UUID that is used to track the update.' }),
    ).exactOptional(),
    status: UpdateStatusSchema.and(
      z.any().openapi({ description: 'The current status of the update.' }),
    ).exactOptional(),
    type: UpdateTypeSchema.and(
      z.any().openapi({ description: 'The type of the update.' }),
    ).exactOptional(),
    params: UpdateParamsSchema.and(
      z
        .any()
        .openapi({
          description: 'A key-value map that contains the parameters associated with the update.',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the update was created.',
        }),
    ).exactOptional(),
    errors: ErrorDetailsSchema.and(
      z.any().openapi({ description: 'Any errors associated with a <code>Failed</code> update.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an asynchronous update.', required: [] })
  .openapi('Update')

const AssociateEncryptionConfigResponseSchema = z
  .object({ update: UpdateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AssociateEncryptionConfigResponse')

const ProviderSchema = z
  .object({
    keyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html">Allowing Users in Other Accounts to Use a KMS key</a> in the <i>Key Management Service Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Identifies the Key Management Service (KMS) key used to encrypt the secrets.',
    required: [],
  })
  .openapi('Provider')

const EncryptionConfigSchema = z
  .object({
    resources: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the resources to be encrypted. The only supported value is "secrets".',
        }),
    ).exactOptional(),
    provider: ProviderSchema.and(
      z
        .any()
        .openapi({
          description: 'Key Management Service (KMS) key. Either the ARN or the alias can be used.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The encryption configuration for the cluster.', required: [] })
  .openapi('EncryptionConfig')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ClientExceptionSchema = z.any().openapi('ClientException')

const ServerExceptionSchema = z.any().openapi('ServerException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const AssociateIdentityProviderConfigResponseSchema = z
  .object({
    update: UpdateSchema.exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateIdentityProviderConfigResponse')

const RequiredClaimsValueSchema = z.string().min(1).max(253).openapi('RequiredClaimsValue')

const RequiredClaimsMapSchema = z
  .record(z.string(), RequiredClaimsValueSchema)
  .openapi('RequiredClaimsMap')

const ClusterNameSchema = z
  .string()
  .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
  .min(1)
  .max(100)
  .openapi('ClusterName')

const AddonStatusSchema = z
  .enum([
    'CREATING',
    'ACTIVE',
    'CREATE_FAILED',
    'UPDATING',
    'DELETING',
    'DELETE_FAILED',
    'DEGRADED',
    'UPDATE_FAILED',
  ])
  .openapi('AddonStatus')

const AddonIssueCodeSchema = z
  .enum([
    'AccessDenied',
    'InternalFailure',
    'ClusterUnreachable',
    'InsufficientNumberOfReplicas',
    'ConfigurationConflict',
    'AdmissionRequestDenied',
    'UnsupportedAddonModification',
    'K8sResourceNotFound',
  ])
  .openapi('AddonIssueCode')

const AddonIssueSchema = z
  .object({
    code: AddonIssueCodeSchema.and(
      z.any().openapi({ description: 'A code that describes the type of issue.' }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message that provides details about the issue and what might cause it.',
        }),
    ).exactOptional(),
    resourceIds: StringListSchema.and(
      z.any().openapi({ description: 'The resource IDs of the issue.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An issue related to an add-on.', required: [] })
  .openapi('AddonIssue')

const AddonIssueListSchema = z.array(AddonIssueSchema).openapi('AddonIssueList')

const AddonHealthSchema = z
  .object({
    issues: AddonIssueListSchema.and(
      z.any().openapi({ description: 'An object representing the health issues for an add-on.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The health of the add-on.', required: [] })
  .openapi('AddonHealth')

const MarketplaceInformationSchema = z
  .object({
    productId: StringSchema.and(
      z.any().openapi({ description: 'The product ID from the Amazon Web Services Marketplace.' }),
    ).exactOptional(),
    productUrl: StringSchema.and(
      z.any().openapi({ description: 'The product URL from the Amazon Web Services Marketplace.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.',
    required: [],
  })
  .openapi('MarketplaceInformation')

const AddonSchema = z
  .object({
    addonName: StringSchema.and(
      z.any().openapi({ description: 'The name of the add-on.' }),
    ).exactOptional(),
    clusterName: ClusterNameSchema.and(
      z.any().openapi({ description: 'The name of the cluster.' }),
    ).exactOptional(),
    status: AddonStatusSchema.and(
      z.any().openapi({ description: 'The status of the add-on.' }),
    ).exactOptional(),
    addonVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the add-on.' }),
    ).exactOptional(),
    health: AddonHealthSchema.and(
      z.any().openapi({ description: 'An object that represents the health of the add-on.' }),
    ).exactOptional(),
    addonArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the add-on.' }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the add-on was created.' }),
    ).exactOptional(),
    modifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the add-on was last modified.' }),
    ).exactOptional(),
    serviceAccountRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the IAM role that's bound to the Kubernetes service account that the add-on uses.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata that you apply to the add-on to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Add-on tags do not propagate to any other resources associated with the cluster. ',
        }),
    ).exactOptional(),
    publisher: StringSchema.and(
      z.any().openapi({ description: 'The publisher of the add-on.' }),
    ).exactOptional(),
    owner: StringSchema.and(
      z.any().openapi({ description: 'The owner of the add-on.' }),
    ).exactOptional(),
    marketplaceInformation: MarketplaceInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.',
        }),
    ).exactOptional(),
    configurationValues: StringSchema.and(
      z.any().openapi({ description: 'The configuration values that you provided.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.',
    required: [],
  })
  .openapi('Addon')

const CreateAddonResponseSchema = z
  .object({ addon: AddonSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateAddonResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const VpcConfigResponseSchema = z
  .object({
    subnetIds: StringListSchema.and(
      z.any().openapi({ description: 'The subnets associated with your cluster.' }),
    ).exactOptional(),
    securityGroupIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Kubernetes control plane.',
        }),
    ).exactOptional(),
    clusterSecurityGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control-plane-to-data-plane communication.',
        }),
    ).exactOptional(),
    vpcId: StringSchema.and(
      z.any().openapi({ description: 'The VPC associated with your cluster.' }),
    ).exactOptional(),
    endpointPublicAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If the Amazon EKS public API server endpoint is disabled, your cluster's Kubernetes API server can only receive requests that originate from within the cluster VPC.",
        }),
    ).exactOptional(),
    endpointPrivateAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster\'s VPC use the private VPC endpoint instead of traversing the internet. If this value is disabled and you have nodes or Fargate pods in the cluster, then ensure that <code>publicAccessCidrs</code> includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ).exactOptional(),
    publicAccessCidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CIDR blocks that are allowed access to your cluster\'s public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the listed CIDR blocks is denied. The default value is <code>0.0.0.0/0</code>. If you\'ve disabled private endpoint access and you have nodes or Fargate pods in the cluster, then ensure that the necessary CIDR blocks are listed. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing an Amazon EKS cluster VPC configuration response.',
    required: [],
  })
  .openapi('VpcConfigResponse')

const IpFamilySchema = z.enum(['ipv4', 'ipv6']).openapi('IpFamily')

const KubernetesNetworkConfigResponseSchema = z
  .object({
    serviceIpv4Cidr: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The CIDR block that Kubernetes pod and service IP addresses are assigned from. Kubernetes assigns addresses from an IPv4 CIDR block assigned to a subnet that the node is in. If you didn't specify a CIDR block when you created the cluster, then Kubernetes assigns addresses from either the <code>10.100.0.0/16</code> or <code>172.20.0.0/16</code> CIDR blocks. If this was specified, then it was specified when the cluster was created and it can't be changed.",
        }),
    ).exactOptional(),
    serviceIpv6Cidr: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The CIDR block that Kubernetes pod and service IP addresses are assigned from if you created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and specified <code>ipv6</code> for <b>ipFamily</b> when you created the cluster. Kubernetes assigns service addresses from the unique local address range (<code>fc00::/7</code>) because you can't specify a custom IPv6 CIDR block when you create the cluster.",
        }),
    ).exactOptional(),
    ipFamily: IpFamilySchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP family used to assign Kubernetes pod and service IP addresses. The IP family is always <code>ipv4</code>, unless you have a <code>1.21</code> or later cluster running version 1.10.1 or later of the Amazon VPC CNI add-on and specified <code>ipv6</code> when you created the cluster. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Kubernetes network configuration for the cluster. The response contains a value for <b>serviceIpv6Cidr</b> or <b>serviceIpv4Cidr</b>, but not both. ',
    required: [],
  })
  .openapi('KubernetesNetworkConfigResponse')

const LogTypeSchema = z
  .enum(['api', 'audit', 'authenticator', 'controllerManager', 'scheduler'])
  .openapi('LogType')

const LogTypesSchema = z.array(LogTypeSchema).openapi('LogTypes')

const BoxedBooleanSchema = z.boolean().openapi('BoxedBoolean')

const LogSetupSchema = z
  .object({
    types: LogTypesSchema.and(
      z.any().openapi({ description: 'The available cluster control plane log types.' }),
    ).exactOptional(),
    enabled: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn't enabled, that log type doesn't export its control plane logs. Each individual log type can be enabled or disabled independently.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the enabled or disabled Kubernetes control plane logs for your cluster.',
    required: [],
  })
  .openapi('LogSetup')

const LogSetupsSchema = z.array(LogSetupSchema).openapi('LogSetups')

const LoggingSchema = z
  .object({
    clusterLogging: LogSetupsSchema.and(
      z
        .any()
        .openapi({
          description: 'The cluster control plane logging configuration for your cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the logging configuration for resources in your cluster.',
    required: [],
  })
  .openapi('Logging')

const OIDCSchema = z
  .object({
    issuer: StringSchema.and(
      z.any().openapi({ description: 'The issuer URL for the OIDC identity provider.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster.',
    required: [],
  })
  .openapi('OIDC')

const IdentitySchema = z
  .object({
    oidc: OIDCSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> identity provider information.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an identity provider.', required: [] })
  .openapi('Identity')

const ClusterStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'FAILED', 'UPDATING', 'PENDING'])
  .openapi('ClusterStatus')

const CertificateSchema = z
  .object({
    data: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Base64-encoded certificate data required to communicate with your cluster. Add this to the <code>certificate-authority-data</code> section of the <code>kubeconfig</code> file for your cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the <code>certificate-authority-data</code> for your cluster.',
    required: [],
  })
  .openapi('Certificate')

const EncryptionConfigListSchema = z
  .array(EncryptionConfigSchema)
  .max(1)
  .openapi('EncryptionConfigList')

const ConnectorConfigResponseSchema = z
  .object({
    activationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique ID associated with the cluster for registration purposes.',
        }),
    ).exactOptional(),
    activationCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique code associated with the cluster for registration purposes.',
        }),
    ).exactOptional(),
    activationExpiry: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The expiration time of the connected cluster. The cluster's YAML file must be applied through the native provider.",
        }),
    ).exactOptional(),
    provider: StringSchema.and(
      z.any().openapi({ description: "The cluster's cloud service provider." }),
    ).exactOptional(),
    roleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role to communicate with services from the connected Kubernetes cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The full description of your connected cluster.', required: [] })
  .openapi('ConnectorConfigResponse')

const ClusterIssueCodeSchema = z
  .enum([
    'AccessDenied',
    'ClusterUnreachable',
    'ConfigurationConflict',
    'InternalFailure',
    'ResourceLimitExceeded',
    'ResourceNotFound',
  ])
  .openapi('ClusterIssueCode')

const ClusterIssueSchema = z
  .object({
    code: ClusterIssueCodeSchema.and(
      z.any().openapi({ description: 'The error code of the issue.' }),
    ).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'A description of the issue.' }),
    ).exactOptional(),
    resourceIds: StringListSchema.and(
      z.any().openapi({ description: 'The resource IDs that the issue relates to.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An issue with your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud.",
    required: [],
  })
  .openapi('ClusterIssue')

const ClusterIssueListSchema = z.array(ClusterIssueSchema).openapi('ClusterIssueList')

const ClusterHealthSchema = z
  .object({
    issues: ClusterIssueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing the health issues of your local Amazon EKS cluster on an Amazon Web Services Outpost.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object representing the health of your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud. ",
    required: [],
  })
  .openapi('ClusterHealth')

const ControlPlanePlacementResponseSchema = z
  .object({
    groupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the placement group for the Kubernetes control plane instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.',
    required: [],
  })
  .openapi('ControlPlanePlacementResponse')

const OutpostConfigResponseSchema = z
  .object({
    outpostArns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Outpost that you specified for use with your local Amazon EKS cluster on Outposts.',
        }),
    ),
    controlPlaneInstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 instance type used for the control plane. The instance type is the same for all control plane instances.',
        }),
    ),
    controlPlanePlacement: ControlPlanePlacementResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['outpostArns', 'controlPlaneInstanceType'],
    description:
      "An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.",
  })
  .openapi('OutpostConfigResponse')

const ClusterSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster.' }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the cluster.' }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the cluster was created.',
        }),
    ).exactOptional(),
    version: StringSchema.and(
      z.any().openapi({ description: 'The Kubernetes server version for the cluster.' }),
    ).exactOptional(),
    endpoint: StringSchema.and(
      z.any().openapi({ description: 'The endpoint for your Kubernetes API server.' }),
    ).exactOptional(),
    roleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf.',
        }),
    ).exactOptional(),
    resourcesVpcConfig: VpcConfigResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    kubernetesNetworkConfig: KubernetesNetworkConfigResponseSchema.and(
      z.any().openapi({ description: 'The Kubernetes network configuration for the cluster.' }),
    ).exactOptional(),
    logging: LoggingSchema.and(
      z.any().openapi({ description: 'The logging configuration for your cluster.' }),
    ).exactOptional(),
    identity: IdentitySchema.and(
      z.any().openapi({ description: 'The identity provider information for the cluster.' }),
    ).exactOptional(),
    status: ClusterStatusSchema.and(
      z.any().openapi({ description: 'The current status of the cluster.' }),
    ).exactOptional(),
    certificateAuthority: CertificateSchema.and(
      z
        .any()
        .openapi({ description: 'The <code>certificate-authority-data</code> for your cluster.' }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    platformVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform version of your Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html">Platform Versions</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Cluster tags do not propagate to any other resources associated with the cluster.',
        }),
    ).exactOptional(),
    encryptionConfig: EncryptionConfigListSchema.and(
      z.any().openapi({ description: 'The encryption configuration for the cluster.' }),
    ).exactOptional(),
    connectorConfig: ConnectorConfigResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration used to connect to a cluster for registration.',
        }),
    ).exactOptional(),
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of your local Amazon EKS cluster on an Amazon Web Services Outpost. This property isn't available for an Amazon EKS cluster on the Amazon Web Services cloud.",
        }),
    ).exactOptional(),
    health: ClusterHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object representing the health of your local Amazon EKS cluster on an Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.",
        }),
    ).exactOptional(),
    outpostConfig: OutpostConfigResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an Amazon EKS cluster.', required: [] })
  .openapi('Cluster')

const CreateClusterResponseSchema = z
  .object({
    cluster: ClusterSchema.and(
      z.any().openapi({ description: 'The full description of your new cluster.' }),
    ).exactOptional(),
  })
  .openapi({ example: {}, required: [] })
  .openapi('CreateClusterResponse')

const ControlPlanePlacementRequestSchema = z
  .object({
    groupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i> ',
    required: [],
  })
  .openapi('ControlPlanePlacementRequest')

const ResourceLimitExceededExceptionSchema = z.any().openapi('ResourceLimitExceededException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const UnsupportedAvailabilityZoneExceptionSchema = z
  .any()
  .openapi('UnsupportedAvailabilityZoneException')

const FargateProfileLabelSchema = z.record(z.string(), StringSchema).openapi('FargateProfileLabel')

const FargateProfileSelectorSchema = z
  .object({
    namespace: StringSchema.and(
      z.any().openapi({ description: 'The Kubernetes namespace that the selector should match.' }),
    ).exactOptional(),
    labels: FargateProfileLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes labels that the selector should match. A pod must contain all of the labels that are specified in the selector for it to be considered a match.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an Fargate profile selector.', required: [] })
  .openapi('FargateProfileSelector')

const FargateProfileSelectorsSchema = z
  .array(FargateProfileSelectorSchema)
  .openapi('FargateProfileSelectors')

const FargateProfileStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'CREATE_FAILED', 'DELETE_FAILED'])
  .openapi('FargateProfileStatus')

const FargateProfileSchema = z
  .object({
    fargateProfileName: StringSchema.and(
      z.any().openapi({ description: 'The name of the Fargate profile.' }),
    ).exactOptional(),
    fargateProfileArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The full Amazon Resource Name (ARN) of the Fargate profile.' }),
    ).exactOptional(),
    clusterName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon EKS cluster that the Fargate profile belongs to.',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the Fargate profile was created.',
        }),
    ).exactOptional(),
    podExecutionRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    subnets: StringListSchema.and(
      z.any().openapi({ description: 'The IDs of subnets to launch pods into.' }),
    ).exactOptional(),
    selectors: FargateProfileSelectorsSchema.and(
      z
        .any()
        .openapi({ description: 'The selectors to match for pods to use this Fargate profile.' }),
    ).exactOptional(),
    status: FargateProfileStatusSchema.and(
      z.any().openapi({ description: 'The current status of the Fargate profile.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata applied to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an Fargate profile.', required: [] })
  .openapi('FargateProfile')

const CreateFargateProfileResponseSchema = z
  .object({
    fargateProfile: FargateProfileSchema.and(
      z.any().openapi({ description: 'The full description of your new Fargate profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFargateProfileResponse')

const NodegroupStatusSchema = z
  .enum([
    'CREATING',
    'ACTIVE',
    'UPDATING',
    'DELETING',
    'CREATE_FAILED',
    'DELETE_FAILED',
    'DEGRADED',
  ])
  .openapi('NodegroupStatus')

const CapacityTypesSchema = z.enum(['ON_DEMAND', 'SPOT']).openapi('CapacityTypes')

const ZeroCapacitySchema = z.int().min(0).openapi('ZeroCapacity')

const CapacitySchema = z.int().min(1).openapi('Capacity')

const NodegroupScalingConfigSchema = z
  .object({
    minSize: ZeroCapacitySchema.and(
      z
        .any()
        .openapi({
          description: 'The minimum number of nodes that the managed node group can scale in to.',
        }),
    ).exactOptional(),
    maxSize: CapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of nodes that the managed node group can scale out to. For information about the maximum number that you can specify, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service quotas</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    desiredSize: ZeroCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current number of nodes that the managed node group should maintain.</p> <important> <p>If you use Cluster Autoscaler, you shouldn't change the desiredSize value directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale down.</p> </important> <p>Whenever this parameter changes, the number of worker nodes in the node group is updated to the specified size. If this parameter is given a value that is smaller than the current number of running worker nodes, the necessary number of worker nodes are terminated to match the given value. When using CloudFormation, no action occurs if you remove this parameter from your CFN template.</p> <p>This parameter can be different from minSize in some cases, such as when starting with extra hosts for testing. This parameter can also be different when you want to start with an estimated number of needed hosts, but let Cluster Autoscaler reduce the number if there are too many. When Cluster Autoscaler is used, the desiredSize parameter is altered by Cluster Autoscaler (but can be out-of-date for short periods of time). Cluster Autoscaler doesn't scale a managed node group lower than minSize or higher than maxSize.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.',
    required: [],
  })
  .openapi('NodegroupScalingConfig')

const RemoteAccessConfigSchema = z
  .object({
    ec2SshKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 SSH key name that provides access for SSH communication with the nodes in the managed node group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Linux instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>. For Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Windows instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Windows Instances</i>.',
        }),
    ).exactOptional(),
    sourceSecurityGroups: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security group IDs that are allowed SSH access (port 22) to the nodes. For Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don\'t specify a source security group when you create a managed node group, then the port on the nodes is opened to the internet (<code>0.0.0.0/0</code>). For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the remote access configuration for the managed node group.',
    required: [],
  })
  .openapi('RemoteAccessConfig')

const AMITypesSchema = z
  .enum([
    'AL2_x86_64',
    'AL2_x86_64_GPU',
    'AL2_ARM_64',
    'CUSTOM',
    'BOTTLEROCKET_ARM_64',
    'BOTTLEROCKET_x86_64',
    'BOTTLEROCKET_ARM_64_NVIDIA',
    'BOTTLEROCKET_x86_64_NVIDIA',
    'WINDOWS_CORE_2019_x86_64',
    'WINDOWS_FULL_2019_x86_64',
    'WINDOWS_CORE_2022_x86_64',
    'WINDOWS_FULL_2022_x86_64',
  ])
  .openapi('AMITypes')

const LabelValueSchema = z.string().min(1).max(63).openapi('LabelValue')

const LabelsMapSchema = z.record(z.string(), LabelValueSchema).openapi('LabelsMap')

const TaintKeySchema = z.string().min(1).max(63).openapi('TaintKey')

const TaintValueSchema = z.string().min(0).max(63).openapi('TaintValue')

const TaintEffectSchema = z
  .enum(['NO_SCHEDULE', 'NO_EXECUTE', 'PREFER_NO_SCHEDULE'])
  .openapi('TaintEffect')

const TaintSchema = z
  .object({
    key: TaintKeySchema.and(
      z.any().openapi({ description: 'The key of the taint.' }),
    ).exactOptional(),
    value: TaintValueSchema.and(
      z.any().openapi({ description: 'The value of the taint.' }),
    ).exactOptional(),
    effect: TaintEffectSchema.and(
      z.any().openapi({ description: 'The effect of the taint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A property that allows a node to repel a set of pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.',
    required: [],
  })
  .openapi('Taint')

const TaintsListSchema = z.array(TaintSchema).openapi('TaintsList')

const AutoScalingGroupSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Auto Scaling group associated with an Amazon EKS managed node group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An Auto Scaling group that is associated with an Amazon EKS managed node group.',
    required: [],
  })
  .openapi('AutoScalingGroup')

const AutoScalingGroupListSchema = z.array(AutoScalingGroupSchema).openapi('AutoScalingGroupList')

const NodegroupResourcesSchema = z
  .object({
    autoScalingGroups: AutoScalingGroupListSchema.and(
      z.any().openapi({ description: 'The Auto Scaling groups associated with the node group.' }),
    ).exactOptional(),
    remoteAccessSecurityGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The remote access security group associated with the node group. This security group controls SSH access to the nodes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.',
    required: [],
  })
  .openapi('NodegroupResources')

const BoxedIntegerSchema = z.int().openapi('BoxedInteger')

const NodegroupIssueCodeSchema = z
  .enum([
    'AutoScalingGroupNotFound',
    'AutoScalingGroupInvalidConfiguration',
    'Ec2SecurityGroupNotFound',
    'Ec2SecurityGroupDeletionFailure',
    'Ec2LaunchTemplateNotFound',
    'Ec2LaunchTemplateVersionMismatch',
    'Ec2SubnetNotFound',
    'Ec2SubnetInvalidConfiguration',
    'IamInstanceProfileNotFound',
    'Ec2SubnetMissingIpv6Assignment',
    'IamLimitExceeded',
    'IamNodeRoleNotFound',
    'NodeCreationFailure',
    'AsgInstanceLaunchFailures',
    'InstanceLimitExceeded',
    'InsufficientFreeAddresses',
    'AccessDenied',
    'InternalFailure',
    'ClusterUnreachable',
    'AmiIdNotFound',
    'AutoScalingGroupOptInRequired',
    'AutoScalingGroupRateLimitExceeded',
    'Ec2LaunchTemplateDeletionFailure',
    'Ec2LaunchTemplateInvalidConfiguration',
    'Ec2LaunchTemplateMaxLimitExceeded',
    'Ec2SubnetListTooLong',
    'IamThrottling',
    'NodeTerminationFailure',
    'PodEvictionFailure',
    'SourceEc2LaunchTemplateNotFound',
    'LimitExceeded',
    'Unknown',
    'AutoScalingGroupInstanceRefreshActive',
  ])
  .openapi('NodegroupIssueCode')

const IssueSchema = z
  .object({
    code: NodegroupIssueCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A brief description of the error.</p> <ul> <li> <p> <b>AccessDenied</b>: Amazon EKS or one or more of your managed nodes is failing to authenticate or authorize with your Kubernetes cluster API server.</p> </li> <li> <p> <b>AsgInstanceLaunchFailures</b>: Your Auto Scaling group is experiencing failures while attempting to launch instances.</p> </li> <li> <p> <b>AutoScalingGroupNotFound</b>: We couldn't find the Auto Scaling group associated with the managed node group. You may be able to recreate an Auto Scaling group with the same settings to recover.</p> </li> <li> <p> <b>ClusterUnreachable</b>: Amazon EKS or one or more of your managed nodes is unable to to communicate with your Kubernetes cluster API server. This can happen if there are network disruptions or if API servers are timing out processing requests. </p> </li> <li> <p> <b>Ec2LaunchTemplateNotFound</b>: We couldn't find the Amazon EC2 launch template for your managed node group. You may be able to recreate a launch template with the same settings to recover.</p> </li> <li> <p> <b>Ec2LaunchTemplateVersionMismatch</b>: The Amazon EC2 launch template version for your managed node group does not match the version that Amazon EKS created. You may be able to revert to the version that Amazon EKS created to recover.</p> </li> <li> <p> <b>Ec2SecurityGroupDeletionFailure</b>: We could not delete the remote access security group for your managed node group. Remove any dependencies from the security group.</p> </li> <li> <p> <b>Ec2SecurityGroupNotFound</b>: We couldn't find the cluster security group for the cluster. You must recreate your cluster.</p> </li> <li> <p> <b>Ec2SubnetInvalidConfiguration</b>: One or more Amazon EC2 subnets specified for a node group do not automatically assign public IP addresses to instances launched into it. If you want your instances to be assigned a public IP address, then you need to enable the <code>auto-assign public IP address</code> setting for the subnet. See <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#subnet-public-ip\">Modifying the public IPv4 addressing attribute for your subnet</a> in the <i>Amazon VPC User Guide</i>.</p> </li> <li> <p> <b>IamInstanceProfileNotFound</b>: We couldn't find the IAM instance profile for your managed node group. You may be able to recreate an instance profile with the same settings to recover.</p> </li> <li> <p> <b>IamNodeRoleNotFound</b>: We couldn't find the IAM role for your managed node group. You may be able to recreate an IAM role with the same settings to recover.</p> </li> <li> <p> <b>InstanceLimitExceeded</b>: Your Amazon Web Services account is unable to launch any more instances of the specified instance type. You may be able to request an Amazon EC2 instance limit increase to recover.</p> </li> <li> <p> <b>InsufficientFreeAddresses</b>: One or more of the subnets associated with your managed node group does not have enough available IP addresses for new nodes.</p> </li> <li> <p> <b>InternalFailure</b>: These errors are usually caused by an Amazon EKS server-side issue.</p> </li> <li> <p> <b>NodeCreationFailure</b>: Your launched instances are unable to register with your Amazon EKS cluster. Common causes of this failure are insufficient <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html\">node IAM role</a> permissions or lack of outbound internet access for the nodes. </p> </li> </ul>",
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'The error message associated with the issue.' }),
    ).exactOptional(),
    resourceIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services resources that are afflicted by this issue.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing an issue with an Amazon EKS resource.',
    required: [],
  })
  .openapi('Issue')

const IssueListSchema = z.array(IssueSchema).openapi('IssueList')

const NodegroupHealthSchema = z
  .object({
    issues: IssueListSchema.and(
      z.any().openapi({ description: 'Any issues that are associated with the node group. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the health status of the node group.',
    required: [],
  })
  .openapi('NodegroupHealth')

const NonZeroIntegerSchema = z.int().min(1).openapi('NonZeroInteger')

const PercentCapacitySchema = z.int().min(1).max(100).openapi('PercentCapacity')

const NodegroupUpdateConfigSchema = z
  .object({
    maxUnavailable: NonZeroIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or <code>maxUnavailablePercentage</code> is required to have a value.The maximum number is 100.',
        }),
    ).exactOptional(),
    maxUnavailablePercentage: PercentCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or <code>maxUnavailable</code> is required to have a value.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The node group update configuration.', required: [] })
  .openapi('NodegroupUpdateConfig')

const LaunchTemplateSpecificationSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the launch template.</p> <p>You must specify either the launch template name or the launch template ID in the request, but not both.</p>',
        }),
    ).exactOptional(),
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version number of the launch template to use. If no version is specified, then the template's default version is used.",
        }),
    ).exactOptional(),
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the launch template.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An object representing a node group launch template specification. The launch template can\'t include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>',
    required: [],
  })
  .openapi('LaunchTemplateSpecification')

const NodegroupSchema = z
  .object({
    nodegroupName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name associated with an Amazon EKS managed node group.' }),
    ).exactOptional(),
    nodegroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) associated with the managed node group.',
        }),
    ).exactOptional(),
    clusterName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the cluster that the managed node group resides in.',
        }),
    ).exactOptional(),
    version: StringSchema.and(
      z.any().openapi({ description: 'The Kubernetes version of the managed node group.' }),
    ).exactOptional(),
    releaseVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the node group was deployed using a launch template with a custom AMI, then this is the AMI ID that was specified in the launch template. For node groups that weren't deployed using a launch template, this is the version of the Amazon EKS optimized AMI that the node group was deployed with.",
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the managed node group was created.',
        }),
    ).exactOptional(),
    modifiedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the managed node group was last modified.',
        }),
    ).exactOptional(),
    status: NodegroupStatusSchema.and(
      z.any().openapi({ description: 'The current status of the managed node group.' }),
    ).exactOptional(),
    capacityType: CapacityTypesSchema.and(
      z.any().openapi({ description: 'The capacity type of your managed node group.' }),
    ).exactOptional(),
    scalingConfig: NodegroupScalingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scaling configuration details for the Auto Scaling group that is associated with your node group.',
        }),
    ).exactOptional(),
    instanceTypes: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the node group wasn't deployed with a launch template, then this is the instance type that is associated with the node group. If the node group was deployed with a launch template, then this is <code>null</code>.",
        }),
    ).exactOptional(),
    subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subnets that were specified for the Auto Scaling group that is associated with your node group.',
        }),
    ).exactOptional(),
    remoteAccess: RemoteAccessConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the node group wasn't deployed with a launch template, then this is the remote access configuration that is associated with the node group. If the node group was deployed with a launch template, then this is <code>null</code>.",
        }),
    ).exactOptional(),
    amiType: AMITypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the node group was deployed using a launch template with a custom AMI, then this is <code>CUSTOM</code>. For node groups that weren't deployed using a launch template, this is the AMI type that was specified in the node group configuration.",
        }),
    ).exactOptional(),
    nodeRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role associated with your node group. The Amazon EKS node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies.',
        }),
    ).exactOptional(),
    labels: LabelsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Kubernetes labels applied to the nodes in the node group.</p> <note> <p>Only labels that are applied with the Amazon EKS API are shown here. There may be other Kubernetes labels applied to the nodes in this group.</p> </note>',
        }),
    ).exactOptional(),
    taints: TaintsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes taints to be applied to the nodes in the node group when they are created. Effect is one of <code>No_Schedule</code>, <code>Prefer_No_Schedule</code>, or <code>No_Execute</code>. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.',
        }),
    ).exactOptional(),
    resources: NodegroupResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resources associated with the node group, such as Auto Scaling groups and security groups for remote access.',
        }),
    ).exactOptional(),
    diskSize: BoxedIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the node group wasn't deployed with a launch template, then this is the disk size in the node group configuration. If the node group was deployed with a launch template, then this is <code>null</code>.",
        }),
    ).exactOptional(),
    health: NodegroupHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            "The health status of the node group. If there are issues with your node group's health, they are listed here.",
        }),
    ).exactOptional(),
    updateConfig: NodegroupUpdateConfigSchema.and(
      z.any().openapi({ description: 'The node group update configuration.' }),
    ).exactOptional(),
    launchTemplate: LaunchTemplateSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a launch template was used to create the node group, then this is the launch template that was used.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata applied to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing an Amazon EKS managed node group.',
    required: [],
  })
  .openapi('Nodegroup')

const CreateNodegroupResponseSchema = z
  .object({
    nodegroup: NodegroupSchema.and(
      z.any().openapi({ description: 'The full description of your new node group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNodegroupResponse')

const DeleteAddonResponseSchema = z
  .object({ addon: AddonSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteAddonResponse')

const DeleteClusterResponseSchema = z
  .object({
    cluster: ClusterSchema.and(
      z.any().openapi({ description: 'The full description of the cluster to delete.' }),
    ).exactOptional(),
  })
  .openapi({ example: {}, required: [] })
  .openapi('DeleteClusterResponse')

const DeleteFargateProfileResponseSchema = z
  .object({
    fargateProfile: FargateProfileSchema.and(
      z.any().openapi({ description: 'The deleted Fargate profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFargateProfileResponse')

const DeleteNodegroupResponseSchema = z
  .object({
    nodegroup: NodegroupSchema.and(
      z.any().openapi({ description: 'The full description of your deleted node group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteNodegroupResponse')

const DeregisterClusterResponseSchema = z
  .object({ cluster: ClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeregisterClusterResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const DescribeAddonResponseSchema = z
  .object({ addon: AddonSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeAddonResponse')

const DescribeAddonConfigurationResponseSchema = z
  .object({
    addonName: StringSchema.and(
      z.any().openapi({ description: 'The name of the add-on.' }),
    ).exactOptional(),
    addonVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.',
        }),
    ).exactOptional(),
    configurationSchema: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A JSON schema that's used to validate the configuration values that you provide when an addon is created or updated.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAddonConfigurationResponse')

const CompatibilitySchema = z
  .object({
    clusterVersion: StringSchema.and(
      z.any().openapi({ description: 'The supported Kubernetes version of the cluster.' }),
    ).exactOptional(),
    platformVersions: StringListSchema.and(
      z.any().openapi({ description: 'The supported compute platform.' }),
    ).exactOptional(),
    defaultVersion: BooleanSchema.and(
      z.any().openapi({ description: 'The supported default version.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Compatibility information.', required: [] })
  .openapi('Compatibility')

const CompatibilitiesSchema = z.array(CompatibilitySchema).openapi('Compatibilities')

const AddonVersionInfoSchema = z
  .object({
    addonVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the add-on.' }),
    ).exactOptional(),
    architecture: StringListSchema.and(
      z.any().openapi({ description: 'The architectures that the version supports.' }),
    ).exactOptional(),
    compatibilities: CompatibilitiesSchema.and(
      z.any().openapi({ description: 'An object representing the compatibilities of a version.' }),
    ).exactOptional(),
    requiresConfiguration: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the add-on requires configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an add-on version.', required: [] })
  .openapi('AddonVersionInfo')

const AddonVersionInfoListSchema = z.array(AddonVersionInfoSchema).openapi('AddonVersionInfoList')

const AddonInfoSchema = z
  .object({
    addonName: StringSchema.and(
      z.any().openapi({ description: 'The name of the add-on.' }),
    ).exactOptional(),
    type: StringSchema.and(
      z.any().openapi({ description: 'The type of the add-on.' }),
    ).exactOptional(),
    addonVersions: AddonVersionInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing information about available add-on versions and compatible Kubernetes versions.',
        }),
    ).exactOptional(),
    publisher: StringSchema.and(
      z.any().openapi({ description: 'The publisher of the add-on.' }),
    ).exactOptional(),
    owner: StringSchema.and(
      z.any().openapi({ description: 'The owner of the add-on.' }),
    ).exactOptional(),
    marketplaceInformation: MarketplaceInformationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the add-on from the Amazon Web Services Marketplace.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an add-on.', required: [] })
  .openapi('AddonInfo')

const AddonsSchema = z.array(AddonInfoSchema).openapi('Addons')

const DescribeAddonVersionsResponseSchema = z
  .object({
    addons: AddonsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of available versions with Kubernetes version compatibility and other properties.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeAddonVersionsResponse</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAddonVersionsResponse')

const DescribeClusterResponseSchema = z
  .object({
    cluster: ClusterSchema.and(
      z.any().openapi({ description: 'The full description of your specified cluster.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      cluster: {
        version: '1.10',
        name: 'devel',
        arn: 'arn:aws:eks:us-west-2:012345678910:cluster/devel',
        certificateAuthority: {
          data: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRFNE1EVXpNVEl6TVRFek1Wb1hEVEk0TURVeU9ESXpNVEV6TVZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTTZWCjVUaG4rdFcySm9Xa2hQMzRlVUZMNitaRXJOZGIvWVdrTmtDdWNGS2RaaXl2TjlMVmdvUmV2MjlFVFZlN1ZGbSsKUTJ3ZURyRXJiQyt0dVlibkFuN1ZLYmE3ay9hb1BHekZMdmVnb0t6b0M1N2NUdGVwZzRIazRlK2tIWHNaME10MApyb3NzcjhFM1ROeExETnNJTThGL1cwdjhsTGNCbWRPcjQyV2VuTjFHZXJnaDNSZ2wzR3JIazBnNTU0SjFWenJZCm9hTi8zODFUczlOTFF2QTBXb0xIcjBFRlZpTFdSZEoyZ3lXaC9ybDVyOFNDOHZaQXg1YW1BU0hVd01aTFpWRC8KTDBpOW4wRVM0MkpVdzQyQmxHOEdpd3NhTkJWV3lUTHZKclNhRXlDSHFtVVZaUTFDZkFXUjl0L3JleVVOVXM3TApWV1FqM3BFbk9RMitMSWJrc0RzQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFNZ3RsQ1dIQ2U2YzVHMXl2YlFTS0Q4K2hUalkKSm1NSG56L2EvRGt0WG9YUjFVQzIrZUgzT1BZWmVjRVZZZHVaSlZCckNNQ2VWR0ZkeWdBYlNLc1FxWDg0S2RXbAp1MU5QaERDSmEyRHliN2pVMUV6VThTQjFGZUZ5ZFE3a0hNS1E1blpBRVFQOTY4S01hSGUrSm0yQ2x1UFJWbEJVCjF4WlhTS1gzTVZ0K1Q0SU1EV2d6c3JRSjVuQkRjdEtLcUZtM3pKdVVubHo5ZEpVckdscEltMjVJWXJDckxYUFgKWkUwRUtRNWEzMHhkVWNrTHRGQkQrOEtBdFdqSS9yZUZPNzM1YnBMdVoyOTBaNm42QlF3elRrS0p4cnhVc3QvOAppNGsxcnlsaUdWMm5SSjBUYjNORkczNHgrYWdzYTRoSTFPbU90TFM0TmgvRXJxT3lIUXNDc2hEQUtKUT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=',
        },
        createdAt: 1527807879.988,
        endpoint: 'https://A0DCCD80A04F01705DD065655C30CC3D.yl4.us-west-2.eks.amazonaws.com',
        resourcesVpcConfig: {
          securityGroupIds: ['sg-6979fe18'],
          subnetIds: ['subnet-6782e71e', 'subnet-e7e761ac'],
          vpcId: 'vpc-950809ec',
        },
        roleArn:
          'arn:aws:iam::012345678910:role/eks-service-role-AWSServiceRoleForAmazonEKS-J7ONKE3BQ4PI',
        status: 'ACTIVE',
      },
    },
    required: [],
  })
  .openapi('DescribeClusterResponse')

const DescribeFargateProfileResponseSchema = z
  .object({
    fargateProfile: FargateProfileSchema.and(
      z.any().openapi({ description: 'The full description of your Fargate profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFargateProfileResponse')

const ConfigStatusSchema = z.enum(['CREATING', 'DELETING', 'ACTIVE']).openapi('ConfigStatus')

const OidcIdentityProviderConfigSchema = z
  .object({
    identityProviderConfigName: StringSchema.and(
      z.any().openapi({ description: 'The name of the configuration.' }),
    ).exactOptional(),
    identityProviderConfigArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the configuration.' }),
    ).exactOptional(),
    clusterName: StringSchema.and(
      z.any().openapi({ description: 'The cluster that the configuration is associated to.' }),
    ).exactOptional(),
    issuerUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens.',
        }),
    ).exactOptional(),
    clientId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is also known as <i>audience</i>. The ID of the client application that makes authentication requests to the OIDC identity provider.',
        }),
    ).exactOptional(),
    usernameClaim: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The JSON Web token (JWT) claim that is used as the username.' }),
    ).exactOptional(),
    usernamePrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The prefix that is prepended to username claims to prevent clashes with existing names. The prefix can't contain <code>system:</code> ",
        }),
    ).exactOptional(),
    groupsClaim: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON web token (JWT) claim that the provider uses to return your groups.',
        }),
    ).exactOptional(),
    groupsPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The prefix that is prepended to group claims to prevent clashes with existing names (such as <code>system:</code> groups). For example, the value<code> oidc:</code> creates group names like <code>oidc:engineering</code> and <code>oidc:infra</code>. The prefix can't contain <code>system:</code> ",
        }),
    ).exactOptional(),
    requiredClaims: RequiredClaimsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata to apply to the provider configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.',
        }),
    ).exactOptional(),
    status: ConfigStatusSchema.and(
      z.any().openapi({ description: 'The status of the OIDC identity provider.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the configuration for an OpenID Connect (OIDC) identity provider. ',
    required: [],
  })
  .openapi('OidcIdentityProviderConfig')

const IdentityProviderConfigResponseSchema = z
  .object({
    oidc: OidcIdentityProviderConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing an OpenID Connect (OIDC) identity provider configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The full description of your identity configuration.', required: [] })
  .openapi('IdentityProviderConfigResponse')

const DescribeIdentityProviderConfigResponseSchema = z
  .object({
    identityProviderConfig: IdentityProviderConfigResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object that represents an OpenID Connect (OIDC) identity provider configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeIdentityProviderConfigResponse')

const DescribeNodegroupResponseSchema = z
  .object({
    nodegroup: NodegroupSchema.and(
      z.any().openapi({ description: 'The full description of your node group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeNodegroupResponse')

const DescribeUpdateResponseSchema = z
  .object({
    update: UpdateSchema.and(
      z.any().openapi({ description: 'The full description of the specified update.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUpdateResponse')

const DisassociateIdentityProviderConfigResponseSchema = z
  .object({ update: UpdateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DisassociateIdentityProviderConfigResponse')

const ListAddonsResponseSchema = z
  .object({
    addons: StringListSchema.and(
      z.any().openapi({ description: 'A list of available add-ons.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListAddonsResponse</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAddonsResponse')

const ListClustersResponseSchema = z
  .object({
    clusters: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of all of the clusters for your account in the specified Region.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListClusters</code> request. When the results of a <code>ListClusters</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { clusters: ['devel', 'prod'] }, required: [] })
  .openapi('ListClustersResponse')

const ListFargateProfilesResponseSchema = z
  .object({
    fargateProfileNames: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of all of the Fargate profiles associated with the specified cluster.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListFargateProfiles</code> request. When the results of a <code>ListFargateProfiles</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFargateProfilesResponse')

const IdentityProviderConfigSchema = z
  .object({
    type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the identity provider configuration. The only type available is <code>oidc</code>.',
        }),
    ),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the identity provider configuration.' }),
    ),
  })
  .openapi({
    required: ['type', 'name'],
    description: 'An object representing an identity provider configuration.',
  })
  .openapi('IdentityProviderConfig')

const IdentityProviderConfigsSchema = z
  .array(IdentityProviderConfigSchema)
  .openapi('IdentityProviderConfigs')

const ListIdentityProviderConfigsResponseSchema = z
  .object({
    identityProviderConfigs: IdentityProviderConfigsSchema.and(
      z.any().openapi({ description: 'The identity provider configurations for the cluster.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous paginated <code>ListIdentityProviderConfigsResponse</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIdentityProviderConfigsResponse')

const ListNodegroupsResponseSchema = z
  .object({
    nodegroups: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of all of the node groups associated with the specified cluster.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListNodegroups</code> request. When the results of a <code>ListNodegroups</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNodegroupsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ example: { tags: { 'aws:tag:domain': 'beta' } }, required: [] })
  .openapi('ListTagsForResourceResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ListUpdatesResponseSchema = z
  .object({
    updateIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of all the updates for the specified cluster and Region.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListUpdates</code> request. When the results of a <code>ListUpdates</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUpdatesResponse')

const RegisterClusterResponseSchema = z
  .object({ cluster: ClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RegisterClusterResponse')

const ConnectorConfigProviderSchema = z
  .enum(['EKS_ANYWHERE', 'ANTHOS', 'GKE', 'AKS', 'OPENSHIFT', 'TANZU', 'RANCHER', 'EC2', 'OTHER'])
  .openapi('ConnectorConfigProvider')

const ResourcePropagationDelayExceptionSchema = z.any().openapi('ResourcePropagationDelayException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateAddonResponseSchema = z
  .object({ update: UpdateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateAddonResponse')

const UpdateClusterConfigResponseSchema = z
  .object({ update: UpdateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateClusterConfigResponse')

const UpdateClusterVersionResponseSchema = z
  .object({
    update: UpdateSchema.and(
      z.any().openapi({ description: 'The full description of the specified update' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateClusterVersionResponse')

const UpdateNodegroupConfigResponseSchema = z
  .object({ update: UpdateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateNodegroupConfigResponse')

const LabelsKeyListSchema = z.array(StringSchema).openapi('LabelsKeyList')

const UpdateNodegroupVersionResponseSchema = z
  .object({ update: UpdateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateNodegroupVersionResponse')

const AssociateEncryptionConfigRequestSchema = z
  .object({
    encryptionConfig: EncryptionConfigListSchema.and(
      z.any().openapi({ description: 'The configuration you are using for encryption.' }),
    ),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The client request token you are using with the encryption configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['encryptionConfig'], title: 'AssociateEncryptionConfigRequest' })
  .openapi('AssociateEncryptionConfigRequest')

const OidcIdentityProviderConfigRequestSchema = z
  .object({
    identityProviderConfigName: StringSchema.and(
      z.any().openapi({ description: 'The name of the OIDC provider configuration.' }),
    ),
    issuerUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens. The URL must begin with <code>https://</code> and should correspond to the <code>iss</code> claim in the provider's OIDC ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like <code>https://server.example.org</code> or <code>https://example.com</code>. This URL should point to the level below <code>.well-known/openid-configuration</code> and must be publicly accessible over the internet.",
        }),
    ),
    clientId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is also known as <i>audience</i>. The ID for the client application that makes authentication requests to the OpenID identity provider.',
        }),
    ),
    usernameClaim: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON Web Token (JWT) claim to use as the username. The default is <code>sub</code>, which is expected to be a unique identifier of the end user. You can choose other claims, such as <code>email</code> or <code>name</code>, depending on the OpenID identity provider. Claims other than <code>email</code> are prefixed with the issuer URL to prevent naming clashes with other plug-ins.',
        }),
    ).exactOptional(),
    usernamePrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and <code>username</code> is a value other than <code>email</code>, the prefix defaults to <code>issuerurl#</code>. You can use the value <code>-</code> to disable all prefixing.',
        }),
    ).exactOptional(),
    groupsClaim: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The JWT claim that the provider uses to return your groups.' }),
    ).exactOptional(),
    groupsPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix that is prepended to group claims to prevent clashes with existing names (such as <code>system:</code> groups). For example, the value<code> oidc:</code> will create group names like <code>oidc:engineering</code> and <code>oidc:infra</code>.',
        }),
    ).exactOptional(),
    requiredClaims: RequiredClaimsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value. For the maximum number of claims that you can require, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service quotas</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['identityProviderConfigName', 'issuerUrl', 'clientId'],
    description:
      'An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.',
  })
  .openapi('OidcIdentityProviderConfigRequest')

const AssociateIdentityProviderConfigRequestSchema = z
  .object({
    oidc: OidcIdentityProviderConfigRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing an OpenID Connect (OIDC) identity provider configuration.',
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.',
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['oidc'], title: 'AssociateIdentityProviderConfigRequest' })
  .openapi('AssociateIdentityProviderConfigRequest')

const ConnectorConfigRequestSchema = z
  .object({
    roleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role that is authorized to request the connector configuration.',
        }),
    ),
    provider: ConnectorConfigProviderSchema.and(
      z.any().openapi({ description: 'The cloud provider for the target cluster to connect.' }),
    ),
  })
  .openapi({
    required: ['roleArn', 'provider'],
    description: 'The configuration sent to a cluster for configuration.',
  })
  .openapi('ConnectorConfigRequest')

const RoleArnSchema = z.string().min(1).max(255).openapi('RoleArn')

const ResolveConflictsSchema = z.enum(['OVERWRITE', 'NONE', 'PRESERVE']).openapi('ResolveConflicts')

const CreateAddonRequestSchema = z
  .object({
    addonName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.',
        }),
    ),
    addonVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.',
        }),
    ).exactOptional(),
    serviceAccountRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on\'s service account. The role must be assigned the IAM permissions required by the add-on. If you don\'t specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    resolveConflicts: ResolveConflictsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:</p> <ul> <li> <p> <b>None</b> – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn\'t change the value. Creation of the add-on might fail.</p> </li> <li> <p> <b>Overwrite</b> – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Not supported. You can set this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p> </li> </ul> <p>If you don\'t currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.</p>',
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.',
        }),
    ).exactOptional(),
    configurationValues: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of configuration values for the add-on that\'s created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html"> <code>DescribeAddonConfiguration</code> </a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['addonName'], title: 'CreateAddonRequest' })
  .openapi('CreateAddonRequest')

const VpcConfigRequestSchema = z
  .object({
    subnetIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.',
        }),
    ).exactOptional(),
    securityGroupIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane. If you don\'t specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Amazon EKS security group considerations</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ).exactOptional(),
    endpointPublicAccess: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this value to <code>false</code> to disable public access to your cluster\'s Kubernetes API server endpoint. If you disable public access, your cluster\'s Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is <code>true</code>, which enables public access for your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ).exactOptional(),
    endpointPrivateAccess: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this value to <code>true</code> to enable private access for your cluster\'s Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster\'s VPC use the private VPC endpoint. The default value for this parameter is <code>false</code>, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or Fargate pods in the cluster, then ensure that <code>publicAccessCidrs</code> includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ).exactOptional(),
    publicAccessCidrs: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CIDR blocks that are allowed access to your cluster\'s public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is <code>0.0.0.0/0</code>. If you\'ve disabled private endpoint access and you have nodes or Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the VPC configuration to use for an Amazon EKS cluster.',
    required: [],
  })
  .openapi('VpcConfigRequest')

const KubernetesNetworkConfigRequestSchema = z
  .object({
    serviceIpv4Cidr: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Don't specify a value if you select <code>ipv6</code> for <b>ipFamily</b>. The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the <code>10.100.0.0/16</code> or <code>172.20.0.0/16</code> CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:</p> <ul> <li> <p>Within one of the following private IP address blocks: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, or <code>192.168.0.0/16</code>.</p> </li> <li> <p>Doesn't overlap with any CIDR block assigned to the VPC that you selected for VPC.</p> </li> <li> <p>Between /24 and /12.</p> </li> </ul> <important> <p>You can only specify a custom CIDR block when you create a cluster and can't change this value once the cluster is created.</p> </important>",
        }),
    ).exactOptional(),
    ipFamily: IpFamilySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify which IP family is used to assign Kubernetes pod and service IP addresses. If you don't specify a value, <code>ipv4</code> is used by default. You can only specify an IP family when you create a cluster and can't change this value once the cluster is created. If you specify <code>ipv6</code>, the VPC and subnets that you specify for cluster creation must have both <code>IPv4</code> and <code>IPv6</code> CIDR blocks assigned to them. You can't specify <code>ipv6</code> for clusters in China Regions.</p> <p>You can only specify <code>ipv6</code> for <code>1.21</code> and later clusters that use version <code>1.10.1</code> or later of the Amazon VPC CNI add-on. If you specify <code>ipv6</code>, then ensure that your VPC meets the requirements listed in the considerations listed in <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html\">Assigning IPv6 addresses to pods and services</a> in the Amazon EKS User Guide. Kubernetes assigns services <code>IPv6</code> addresses from the unique local address range <code>(fc00::/7)</code>. You can't specify a custom <code>IPv6</code> CIDR block. Pod addresses are assigned from the subnet's <code>IPv6</code> CIDR.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The Kubernetes network configuration for the cluster.', required: [] })
  .openapi('KubernetesNetworkConfigRequest')

const OutpostConfigRequestSchema = z
  .object({
    outpostArns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.',
        }),
    ),
    controlPlaneInstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. Choose an instance type based on the number of nodes that your cluster will have. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.</p> <p>The instance type that you specify is used for all Kubernetes control plane instances. The instance type can\'t be changed after cluster creation. The control plane is not automatically scaled by Amazon EKS.</p> <p> </p>',
        }),
    ),
    controlPlanePlacement: ControlPlanePlacementRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['outpostArns', 'controlPlaneInstanceType'],
    description:
      'The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn\'t available for Amazon EKS clusters on the Amazon Web Services cloud.',
  })
  .openapi('OutpostConfigRequest')

const CreateClusterRequestSchema = z
  .object({
    name: ClusterNameSchema.and(
      z.any().openapi({ description: 'The unique name to give to your cluster.' }),
    ),
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.</p> <note> <p>The default version might not be the latest version available.</p> </note>",
        }),
    ).exactOptional(),
    roleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
        }),
    ),
    resourcesVpcConfig: VpcConfigRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC configuration that\'s used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the <i>Amazon EKS User Guide</i>. You must specify at least two subnets. You can specify up to five security groups. However, we recommend that you use a dedicated security group for your cluster control plane.',
        }),
    ),
    kubernetesNetworkConfig: KubernetesNetworkConfigRequestSchema.and(
      z.any().openapi({ description: 'The Kubernetes network configuration for the cluster.' }),
    ).exactOptional(),
    logging: LoggingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren\'t exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster control plane logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note>',
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.',
        }),
    ).exactOptional(),
    encryptionConfig: EncryptionConfigListSchema.and(
      z.any().openapi({ description: 'The encryption configuration for the cluster.' }),
    ).exactOptional(),
    outpostConfig: OutpostConfigRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a local cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-overview.html">Local clusters for Amazon EKS on Amazon Web Services Outposts</a> in the <i>Amazon EKS User Guide</i>. This object isn\'t available for creating Amazon EKS clusters on the Amazon Web Services cloud.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'roleArn', 'resourcesVpcConfig'], title: 'CreateClusterRequest' })
  .openapi('CreateClusterRequest')

const CreateFargateProfileRequestSchema = z
  .object({
    fargateProfileName: StringSchema.and(
      z.any().openapi({ description: 'The name of the Fargate profile.' }),
    ),
    podExecutionRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ),
    subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.',
        }),
    ).exactOptional(),
    selectors: FargateProfileSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile.',
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['fargateProfileName', 'podExecutionRoleArn'],
    title: 'CreateFargateProfileRequest',
  })
  .openapi('CreateFargateProfileRequest')

const CreateNodegroupRequestSchema = z
  .object({
    nodegroupName: StringSchema.and(
      z.any().openapi({ description: 'The unique name to give your node group.' }),
    ),
    scalingConfig: NodegroupScalingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scaling configuration details for the Auto Scaling group that is created for your node group.',
        }),
    ).exactOptional(),
    diskSize: BoxedIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify <code>launchTemplate</code>, then don\'t specify <code>diskSize</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subnets to use for the Auto Scaling group that is created for your node group. If you specify <code>launchTemplate</code>, then don\'t specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ),
    instanceTypes: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the <code>amiType</code> parameter. If you specify <code>launchTemplate</code>, then you can specify zero or one instance type in your launch template <i>or</i> you can specify 0-20 instance types for <code>instanceTypes</code>. If however, you specify an instance type in your launch template <i>and</i> specify any <code>instanceTypes</code>, the node group deployment will fail. If you don\'t specify an instance type in a launch template or for <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    amiType: AMITypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>amiType</code>, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in the <code>aws-auth</code> <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    remoteAccess: RemoteAccessConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The remote access configuration to use with your node group. For Linux, the protocol is SSH. For Windows, the protocol is RDP. If you specify <code>launchTemplate</code>, then don\'t specify <code>remoteAccess</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    nodeRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i> <i>Amazon EKS User Guide</i> </i>. If you specify <code>launchTemplate</code>, then don\'t specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ),
    labels: LabelsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes labels to be applied to the nodes in the node group when they are created.',
        }),
    ).exactOptional(),
    taints: TaintsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes taints to be applied to the nodes in the node group. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.',
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    launchTemplate: LaunchTemplateSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object representing a node group's launch template specification. If specified, then do not specify <code>instanceTypes</code>, <code>diskSize</code>, or <code>remoteAccess</code> and make sure that the launch template meets the requirements in <code>launchTemplateSpecification</code>.",
        }),
    ).exactOptional(),
    updateConfig: NodegroupUpdateConfigSchema.and(
      z.any().openapi({ description: 'The node group update configuration.' }),
    ).exactOptional(),
    capacityType: CapacityTypesSchema.and(
      z.any().openapi({ description: 'The capacity type for your node group.' }),
    ).exactOptional(),
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>version</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    releaseVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group\'s current Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>releaseVersion</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['nodegroupName', 'subnets', 'nodeRole'], title: 'CreateNodegroupRequest' })
  .openapi('CreateNodegroupRequest')

const DeleteAddonRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAddonRequest' })
  .openapi('DeleteAddonRequest')

const DeleteClusterRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteClusterRequest' })
  .openapi('DeleteClusterRequest')

const DeleteFargateProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFargateProfileRequest' })
  .openapi('DeleteFargateProfileRequest')

const DeleteNodegroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteNodegroupRequest' })
  .openapi('DeleteNodegroupRequest')

const DeregisterClusterRequestSchema = z
  .object({})
  .openapi({ title: 'DeregisterClusterRequest' })
  .openapi('DeregisterClusterRequest')

const DescribeAddonConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAddonConfigurationRequest' })
  .openapi('DescribeAddonConfigurationRequest')

const DescribeAddonRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAddonRequest' })
  .openapi('DescribeAddonRequest')

const DescribeAddonVersionsRequestMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('DescribeAddonVersionsRequestMaxResults')

const DescribeAddonVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAddonVersionsRequest' })
  .openapi('DescribeAddonVersionsRequest')

const DescribeClusterRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeClusterRequest' })
  .openapi('DescribeClusterRequest')

const DescribeFargateProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeFargateProfileRequest' })
  .openapi('DescribeFargateProfileRequest')

const DescribeIdentityProviderConfigRequestSchema = z
  .object({
    identityProviderConfig: IdentityProviderConfigSchema.and(
      z
        .any()
        .openapi({ description: 'An object representing an identity provider configuration.' }),
    ),
  })
  .openapi({ required: ['identityProviderConfig'], title: 'DescribeIdentityProviderConfigRequest' })
  .openapi('DescribeIdentityProviderConfigRequest')

const DescribeNodegroupRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeNodegroupRequest' })
  .openapi('DescribeNodegroupRequest')

const DescribeUpdateRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeUpdateRequest' })
  .openapi('DescribeUpdateRequest')

const DisassociateIdentityProviderConfigRequestSchema = z
  .object({
    identityProviderConfig: IdentityProviderConfigSchema.and(
      z
        .any()
        .openapi({ description: 'An object representing an identity provider configuration.' }),
    ),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['identityProviderConfig'],
    title: 'DisassociateIdentityProviderConfigRequest',
  })
  .openapi('DisassociateIdentityProviderConfigRequest')

const FargateProfilesRequestMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('FargateProfilesRequestMaxResults')

const IncludeClustersListSchema = z.array(StringSchema).openapi('IncludeClustersList')

const ListAddonsRequestMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListAddonsRequestMaxResults')

const ListAddonsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAddonsRequest' })
  .openapi('ListAddonsRequest')

const ListClustersRequestMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListClustersRequestMaxResults')

const ListClustersRequestSchema = z
  .object({})
  .openapi({ title: 'ListClustersRequest' })
  .openapi('ListClustersRequest')

const ListFargateProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListFargateProfilesRequest' })
  .openapi('ListFargateProfilesRequest')

const ListIdentityProviderConfigsRequestMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListIdentityProviderConfigsRequestMaxResults')

const ListIdentityProviderConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListIdentityProviderConfigsRequest' })
  .openapi('ListIdentityProviderConfigsRequest')

const ListNodegroupsRequestMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListNodegroupsRequestMaxResults')

const ListNodegroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListNodegroupsRequest' })
  .openapi('ListNodegroupsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListUpdatesRequestMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListUpdatesRequestMaxResults')

const ListUpdatesRequestSchema = z
  .object({})
  .openapi({ title: 'ListUpdatesRequest' })
  .openapi('ListUpdatesRequest')

const RegisterClusterRequestSchema = z
  .object({
    name: ClusterNameSchema.and(
      z.any().openapi({ description: 'Define a unique name for this cluster for your Region.' }),
    ),
    connectorConfig: ConnectorConfigRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings required to connect the Kubernetes cluster to the Amazon EKS control plane.',
        }),
    ),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'connectorConfig'], title: 'RegisterClusterRequest' })
  .openapi('RegisterClusterRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags to add to the resource. A tag is an array of key-value pairs.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAddonRequestSchema = z
  .object({
    addonVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.',
        }),
    ).exactOptional(),
    serviceAccountRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on\'s service account. The role must be assigned the IAM permissions required by the add-on. If you don\'t specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    resolveConflicts: ResolveConflictsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:</p> <ul> <li> <p> <b>None</b> – Amazon EKS doesn't change the value. The update might fail.</p> </li> <li> <p> <b>Overwrite</b> – Amazon EKS overwrites the changed value back to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster.</p> </li> </ul>",
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    configurationValues: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of configuration values for the add-on that\'s created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html">DescribeAddonConfiguration</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAddonRequest', required: [] })
  .openapi('UpdateAddonRequest')

const UpdateClusterConfigRequestSchema = z
  .object({
    resourcesVpcConfig: VpcConfigRequestSchema.exactOptional(),
    logging: LoggingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren\'t exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS cluster control plane logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note>',
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateClusterConfigRequest', required: [] })
  .openapi('UpdateClusterConfigRequest')

const UpdateClusterVersionRequestSchema = z
  .object({
    version: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The desired Kubernetes version following a successful update.' }),
    ),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['version'], title: 'UpdateClusterVersionRequest' })
  .openapi('UpdateClusterVersionRequest')

const UpdateLabelsPayloadSchema = z
  .object({
    addOrUpdateLabels: LabelsMapSchema.and(
      z.any().openapi({ description: 'Kubernetes labels to be added or updated.' }),
    ).exactOptional(),
    removeLabels: LabelsKeyListSchema.and(
      z.any().openapi({ description: 'Kubernetes labels to be removed.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing a Kubernetes label change for a managed node group.',
    required: [],
  })
  .openapi('UpdateLabelsPayload')

const UpdateTaintsPayloadSchema = z
  .object({
    addOrUpdateTaints: TaintsListSchema.and(
      z.any().openapi({ description: 'Kubernetes taints to be added or updated.' }),
    ).exactOptional(),
    removeTaints: TaintsListSchema.and(
      z.any().openapi({ description: 'Kubernetes taints to remove.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.',
    required: [],
  })
  .openapi('UpdateTaintsPayload')

const UpdateNodegroupConfigRequestSchema = z
  .object({
    labels: UpdateLabelsPayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes labels to be applied to the nodes in the node group after the update.',
        }),
    ).exactOptional(),
    taints: UpdateTaintsPayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes taints to be applied to the nodes in the node group after the update. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.',
        }),
    ).exactOptional(),
    scalingConfig: NodegroupScalingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scaling configuration details for the Auto Scaling group after the update.',
        }),
    ).exactOptional(),
    updateConfig: NodegroupUpdateConfigSchema.and(
      z.any().openapi({ description: 'The node group update configuration.' }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateNodegroupConfigRequest', required: [] })
  .openapi('UpdateNodegroupConfigRequest')

const UpdateNodegroupVersionRequestSchema = z
  .object({
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster\'s Kubernetes version. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>version</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
        }),
    ).exactOptional(),
    releaseVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group\'s Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>releaseVersion</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>',
        }),
    ).exactOptional(),
    launchTemplate: LaunchTemplateSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object representing a node group's launch template specification. You can only update a node group using a launch template if the node group was originally deployed with a launch template.",
        }),
    ).exactOptional(),
    force: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node.",
        }),
    ).exactOptional(),
    clientRequestToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateNodegroupVersionRequest', required: [] })
  .openapi('UpdateNodegroupVersionRequest')

const LabelKeySchema = z.string().min(1).max(63).openapi('LabelKey')

const RequiredClaimsKeySchema = z.string().min(1).max(63).openapi('RequiredClaimsKey')

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

export const postClustersNameEncryptionConfigAssociateRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/encryption-config/associate',
  description:
    '<p>Associate encryption configuration to an existing cluster.</p> <p>You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</p>',
  operationId: 'AssociateEncryptionConfig',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the cluster that you are associating with encryption configuration.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encryptionConfig: z
                .array(EncryptionConfigSchema)
                .max(1)
                .openapi({ description: 'The configuration you are using for encryption.' }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The client request token you are using with the encryption configuration.',
                }),
            })
            .openapi({ required: ['encryptionConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateEncryptionConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postClustersNameIdentityProviderConfigsAssociateRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/identity-provider-configs/associate',
  description:
    '<p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>',
  operationId: 'AssociateIdentityProviderConfig',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster to associate the configuration to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              oidc: z
                .object({
                  identityProviderConfigName: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The name of the OIDC provider configuration.' }),
                  ).exactOptional(),
                  issuerUrl: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens. The URL must begin with <code>https://</code> and should correspond to the <code>iss</code> claim in the provider's OIDC ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like <code>https://server.example.org</code> or <code>https://example.com</code>. This URL should point to the level below <code>.well-known/openid-configuration</code> and must be publicly accessible over the internet.",
                      }),
                  ).exactOptional(),
                  clientId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'This is also known as <i>audience</i>. The ID for the client application that makes authentication requests to the OpenID identity provider.',
                      }),
                  ).exactOptional(),
                  usernameClaim: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The JSON Web Token (JWT) claim to use as the username. The default is <code>sub</code>, which is expected to be a unique identifier of the end user. You can choose other claims, such as <code>email</code> or <code>name</code>, depending on the OpenID identity provider. Claims other than <code>email</code> are prefixed with the issuer URL to prevent naming clashes with other plug-ins.',
                      }),
                  ).exactOptional(),
                  usernamePrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and <code>username</code> is a value other than <code>email</code>, the prefix defaults to <code>issuerurl#</code>. You can use the value <code>-</code> to disable all prefixing.',
                      }),
                  ).exactOptional(),
                  groupsClaim: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The JWT claim that the provider uses to return your groups.',
                      }),
                  ).exactOptional(),
                  groupsPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The prefix that is prepended to group claims to prevent clashes with existing names (such as <code>system:</code> groups). For example, the value<code> oidc:</code> will create group names like <code>oidc:engineering</code> and <code>oidc:infra</code>.',
                      }),
                  ).exactOptional(),
                  requiredClaims: RequiredClaimsMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The key value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value. For the maximum number of claims that you can require, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service quotas</a> in the <i>Amazon EKS User Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.',
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
            })
            .openapi({ required: ['oidc'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateIdentityProviderConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const getClustersNameAddonsRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/addons',
  description: 'Lists the available add-ons.',
  operationId: 'ListAddons',
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
      name: z
        .string()
        .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z][A-Za-z0-9\\-_]*',
              minLength: 1,
              maxLength: 100,
            },
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
              "The maximum number of add-on results returned by <code>ListAddonsRequest</code> in paginated output. When you use this parameter, <code>ListAddonsRequest</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListAddonsRequest</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListAddonsRequest</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.",
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
              '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListAddonsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAddonsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postClustersNameAddonsRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/addons',
  description:
    '<p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>',
  operationId: 'CreateAddon',
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
      name: z
        .string()
        .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster to create the add-on for.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z][A-Za-z0-9\\-_]*',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              addonName: z
                .string()
                .openapi({
                  description:
                    'The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.',
                }),
              addonVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.',
                }),
              serviceAccountRoleArn: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on\'s service account. The role must be assigned the IAM permissions required by the add-on. If you don\'t specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>',
                }),
              resolveConflicts: z
                .enum(['OVERWRITE', 'NONE', 'PRESERVE'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:</p> <ul> <li> <p> <b>None</b> – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn\'t change the value. Creation of the add-on might fail.</p> </li> <li> <p> <b>Overwrite</b> – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Not supported. You can set this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p> </li> </ul> <p>If you don\'t currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.</p>',
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.',
                }),
              configurationValues: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The set of configuration values for the add-on that\'s created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html"> <code>DescribeAddonConfiguration</code> </a>.',
                }),
            })
            .openapi({ required: ['addonName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAddonResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const getClustersRoute = createRoute({
  method: 'get',
  path: '/clusters',
  description:
    'Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.',
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
              "The maximum number of cluster results returned by <code>ListClusters</code> in paginated output. When you use this parameter, <code>ListClusters</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListClusters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListClusters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
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
              '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListClusters</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'include',
            in: 'query',
            required: false,
            description:
              "Indicates whether external clusters are included in the returned list. Use '<code>all</code>' to return connected clusters, or blank to return only Amazon EKS clusters. '<code>all</code>' must be in lowercase otherwise an error occurs.",
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postClustersRoute = createRoute({
  method: 'post',
  path: '/clusters',
  description:
    '<p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster\'s control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>',
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
              name: z
                .string()
                .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
                .min(1)
                .max(100)
                .openapi({ description: 'The unique name to give to your cluster.' }),
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.</p> <note> <p>The default version might not be the latest version available.</p> </note>",
                }),
              roleArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                }),
              resourcesVpcConfig: z
                .object({
                  subnetIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.',
                      }),
                  ).exactOptional(),
                  securityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane. If you don\'t specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Amazon EKS security group considerations</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                  endpointPublicAccess: BoxedBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set this value to <code>false</code> to disable public access to your cluster\'s Kubernetes API server endpoint. If you disable public access, your cluster\'s Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is <code>true</code>, which enables public access for your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                  endpointPrivateAccess: BoxedBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set this value to <code>true</code> to enable private access for your cluster\'s Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster\'s VPC use the private VPC endpoint. The default value for this parameter is <code>false</code>, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or Fargate pods in the cluster, then ensure that <code>publicAccessCidrs</code> includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                  publicAccessCidrs: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The CIDR blocks that are allowed access to your cluster\'s public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is <code>0.0.0.0/0</code>. If you\'ve disabled private endpoint access and you have nodes or Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object representing the VPC configuration to use for an Amazon EKS cluster.',
                  required: [],
                }),
              kubernetesNetworkConfig: z
                .object({
                  serviceIpv4Cidr: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Don't specify a value if you select <code>ipv6</code> for <b>ipFamily</b>. The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the <code>10.100.0.0/16</code> or <code>172.20.0.0/16</code> CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:</p> <ul> <li> <p>Within one of the following private IP address blocks: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, or <code>192.168.0.0/16</code>.</p> </li> <li> <p>Doesn't overlap with any CIDR block assigned to the VPC that you selected for VPC.</p> </li> <li> <p>Between /24 and /12.</p> </li> </ul> <important> <p>You can only specify a custom CIDR block when you create a cluster and can't change this value once the cluster is created.</p> </important>",
                      }),
                  ).exactOptional(),
                  ipFamily: IpFamilySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specify which IP family is used to assign Kubernetes pod and service IP addresses. If you don't specify a value, <code>ipv4</code> is used by default. You can only specify an IP family when you create a cluster and can't change this value once the cluster is created. If you specify <code>ipv6</code>, the VPC and subnets that you specify for cluster creation must have both <code>IPv4</code> and <code>IPv6</code> CIDR blocks assigned to them. You can't specify <code>ipv6</code> for clusters in China Regions.</p> <p>You can only specify <code>ipv6</code> for <code>1.21</code> and later clusters that use version <code>1.10.1</code> or later of the Amazon VPC CNI add-on. If you specify <code>ipv6</code>, then ensure that your VPC meets the requirements listed in the considerations listed in <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html\">Assigning IPv6 addresses to pods and services</a> in the Amazon EKS User Guide. Kubernetes assigns services <code>IPv6</code> addresses from the unique local address range <code>(fc00::/7)</code>. You can't specify a custom <code>IPv6</code> CIDR block. Pod addresses are assigned from the subnet's <code>IPv6</code> CIDR.</p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The Kubernetes network configuration for the cluster.',
                  required: [],
                }),
              logging: z
                .object({
                  clusterLogging: LogSetupsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The cluster control plane logging configuration for your cluster.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing the logging configuration for resources in your cluster.',
                  required: [],
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.',
                }),
              encryptionConfig: z
                .array(EncryptionConfigSchema)
                .max(1)
                .exactOptional()
                .openapi({ description: 'The encryption configuration for the cluster.' }),
              outpostConfig: z
                .object({
                  outpostArns: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.',
                      }),
                  ).exactOptional(),
                  controlPlaneInstanceType: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. Choose an instance type based on the number of nodes that your cluster will have. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.</p> <p>The instance type that you specify is used for all Kubernetes control plane instances. The instance type can\'t be changed after cluster creation. The control plane is not automatically scaled by Amazon EKS.</p> <p> </p>',
                      }),
                  ).exactOptional(),
                  controlPlanePlacement: ControlPlanePlacementRequestSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn\'t available for Amazon EKS clusters on the Amazon Web Services cloud.',
                  required: [],
                }),
            })
            .openapi({ required: ['name', 'roleArn', 'resourcesVpcConfig'] }),
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'UnsupportedAvailabilityZoneException',
      content: { 'application/json': { schema: UnsupportedAvailabilityZoneExceptionSchema } },
    },
  },
})

export const getClustersNameFargateProfilesRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/fargate-profiles',
  description:
    'Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.',
  operationId: 'ListFargateProfiles',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon EKS cluster that you would like to list Fargate profiles in.',
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
              "The maximum number of Fargate profile results returned by <code>ListFargateProfiles</code> in paginated output. When you use this parameter, <code>ListFargateProfiles</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListFargateProfiles</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListFargateProfiles</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
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
              'The <code>nextToken</code> value returned from a previous paginated <code>ListFargateProfiles</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFargateProfilesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postClustersNameFargateProfilesRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/fargate-profiles',
  description:
    '<p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster\'s Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>',
  operationId: 'CreateFargateProfile',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Amazon EKS cluster to apply the Fargate profile to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fargateProfileName: z
                .string()
                .openapi({ description: 'The name of the Fargate profile.' }),
              podExecutionRoleArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              subnets: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.',
                }),
              selectors: z
                .array(FargateProfileSelectorSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile.',
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it.',
                }),
            })
            .openapi({ required: ['fargateProfileName', 'podExecutionRoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFargateProfileResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'UnsupportedAvailabilityZoneException',
      content: { 'application/json': { schema: UnsupportedAvailabilityZoneExceptionSchema } },
    },
  },
})

export const getClustersNameNodeGroupsRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/node-groups',
  description:
    'Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.',
  operationId: 'ListNodegroups',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon EKS cluster that you would like to list node groups in.',
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
              "The maximum number of node group results returned by <code>ListNodegroups</code> in paginated output. When you use this parameter, <code>ListNodegroups</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListNodegroups</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListNodegroups</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
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
              'The <code>nextToken</code> value returned from a previous paginated <code>ListNodegroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNodegroupsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postClustersNameNodeGroupsRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/node-groups',
  description:
    '<p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>',
  operationId: 'CreateNodegroup',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster to create the node group in.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              nodegroupName: z
                .string()
                .openapi({ description: 'The unique name to give your node group.' }),
              scalingConfig: z
                .object({
                  minSize: ZeroCapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The minimum number of nodes that the managed node group can scale in to.',
                      }),
                  ).exactOptional(),
                  maxSize: CapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum number of nodes that the managed node group can scale out to. For information about the maximum number that you can specify, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service quotas</a> in the <i>Amazon EKS User Guide</i>.',
                      }),
                  ).exactOptional(),
                  desiredSize: ZeroCapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The current number of nodes that the managed node group should maintain.</p> <important> <p>If you use Cluster Autoscaler, you shouldn't change the desiredSize value directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale down.</p> </important> <p>Whenever this parameter changes, the number of worker nodes in the node group is updated to the specified size. If this parameter is given a value that is smaller than the current number of running worker nodes, the necessary number of worker nodes are terminated to match the given value. When using CloudFormation, no action occurs if you remove this parameter from your CFN template.</p> <p>This parameter can be different from minSize in some cases, such as when starting with extra hosts for testing. This parameter can also be different when you want to start with an estimated number of needed hosts, but let Cluster Autoscaler reduce the number if there are too many. When Cluster Autoscaler is used, the desiredSize parameter is altered by Cluster Autoscaler (but can be out-of-date for short periods of time). Cluster Autoscaler doesn't scale a managed node group lower than minSize or higher than maxSize.</p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.',
                  required: [],
                }),
              diskSize: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify <code>launchTemplate</code>, then don\'t specify <code>diskSize</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              subnets: z
                .array(StringSchema)
                .openapi({
                  description:
                    'The subnets to use for the Auto Scaling group that is created for your node group. If you specify <code>launchTemplate</code>, then don\'t specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              instanceTypes: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the <code>amiType</code> parameter. If you specify <code>launchTemplate</code>, then you can specify zero or one instance type in your launch template <i>or</i> you can specify 0-20 instance types for <code>instanceTypes</code>. If however, you specify an instance type in your launch template <i>and</i> specify any <code>instanceTypes</code>, the node group deployment will fail. If you don\'t specify an instance type in a launch template or for <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              amiType: z
                .enum([
                  'AL2_x86_64',
                  'AL2_x86_64_GPU',
                  'AL2_ARM_64',
                  'CUSTOM',
                  'BOTTLEROCKET_ARM_64',
                  'BOTTLEROCKET_x86_64',
                  'BOTTLEROCKET_ARM_64_NVIDIA',
                  'BOTTLEROCKET_x86_64_NVIDIA',
                  'WINDOWS_CORE_2019_x86_64',
                  'WINDOWS_FULL_2019_x86_64',
                  'WINDOWS_CORE_2022_x86_64',
                  'WINDOWS_FULL_2022_x86_64',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>amiType</code>, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in the <code>aws-auth</code> <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              remoteAccess: z
                .object({
                  ec2SshKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon EC2 SSH key name that provides access for SSH communication with the nodes in the managed node group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Linux instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>. For Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Windows instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Windows Instances</i>.',
                      }),
                  ).exactOptional(),
                  sourceSecurityGroups: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The security group IDs that are allowed SSH access (port 22) to the nodes. For Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don\'t specify a source security group when you create a managed node group, then the port on the nodes is opened to the internet (<code>0.0.0.0/0</code>). For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing the remote access configuration for the managed node group.',
                  required: [],
                }),
              nodeRole: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i> <i>Amazon EKS User Guide</i> </i>. If you specify <code>launchTemplate</code>, then don\'t specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              labels: z
                .record(z.string(), LabelValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The Kubernetes labels to be applied to the nodes in the node group when they are created.',
                }),
              taints: z
                .array(TaintSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The Kubernetes taints to be applied to the nodes in the node group. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.',
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              launchTemplate: z
                .object({
                  name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The name of the launch template.</p> <p>You must specify either the launch template name or the launch template ID in the request, but not both.</p>',
                      }),
                  ).exactOptional(),
                  version: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The version number of the launch template to use. If no version is specified, then the template's default version is used.",
                      }),
                  ).exactOptional(),
                  id: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The ID of the launch template.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>An object representing a node group launch template specification. The launch template can\'t include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>',
                  required: [],
                }),
              updateConfig: z
                .object({
                  maxUnavailable: NonZeroIntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or <code>maxUnavailablePercentage</code> is required to have a value.The maximum number is 100.',
                      }),
                  ).exactOptional(),
                  maxUnavailablePercentage: PercentCapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or <code>maxUnavailable</code> is required to have a value.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The node group update configuration.', required: [] }),
              capacityType: z
                .enum(['ON_DEMAND', 'SPOT'])
                .exactOptional()
                .openapi({ description: 'The capacity type for your node group.' }),
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>version</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              releaseVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group\'s current Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>releaseVersion</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>',
                }),
            })
            .openapi({ required: ['nodegroupName', 'subnets', 'nodeRole'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNodegroupResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getClustersNameAddonsAddonNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/addons/{addonName}',
  description: 'Describes an Amazon EKS add-on.',
  operationId: 'DescribeAddon',
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
      name: z
        .string()
        .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z][A-Za-z0-9\\-_]*',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
      addonName: z
        .string()
        .openapi({
          param: {
            name: 'addonName',
            in: 'path',
            required: true,
            description:
              'The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAddonResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const deleteClustersNameAddonsAddonNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{name}/addons/{addonName}',
  description:
    '<p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>',
  operationId: 'DeleteAddon',
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
      name: z
        .string()
        .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster to delete the add-on from.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z][A-Za-z0-9\\-_]*',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
      addonName: z
        .string()
        .openapi({
          param: {
            name: 'addonName',
            in: 'path',
            required: true,
            description:
              'The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      preserve: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'preserve',
            in: 'query',
            required: false,
            description:
              "Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed.",
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAddonResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const getClustersNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}',
  description:
    '<p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren\'t available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster to describe.',
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteClustersNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{name}',
  description:
    '<p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster to delete.',
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getClustersNameFargateProfilesFargateProfileNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/fargate-profiles/{fargateProfileName}',
  description: 'Returns descriptive information about an Fargate profile.',
  operationId: 'DescribeFargateProfile',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Amazon EKS cluster associated with the Fargate profile.',
            schema: { type: 'string' },
          },
        }),
      fargateProfileName: z
        .string()
        .openapi({
          param: {
            name: 'fargateProfileName',
            in: 'path',
            required: true,
            description: 'The name of the Fargate profile to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFargateProfileResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteClustersNameFargateProfilesFargateProfileNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{name}/fargate-profiles/{fargateProfileName}',
  description:
    '<p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>',
  operationId: 'DeleteFargateProfile',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon EKS cluster associated with the Fargate profile to delete.',
            schema: { type: 'string' },
          },
        }),
      fargateProfileName: z
        .string()
        .openapi({
          param: {
            name: 'fargateProfileName',
            in: 'path',
            required: true,
            description: 'The name of the Fargate profile to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFargateProfileResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getClustersNameNodeGroupsNodegroupNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/node-groups/{nodegroupName}',
  description: 'Returns descriptive information about an Amazon EKS node group.',
  operationId: 'DescribeNodegroup',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Amazon EKS cluster associated with the node group.',
            schema: { type: 'string' },
          },
        }),
      nodegroupName: z
        .string()
        .openapi({
          param: {
            name: 'nodegroupName',
            in: 'path',
            required: true,
            description: 'The name of the node group to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeNodegroupResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteClustersNameNodeGroupsNodegroupNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{name}/node-groups/{nodegroupName}',
  description: 'Deletes an Amazon EKS node group for a cluster.',
  operationId: 'DeleteNodegroup',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon EKS cluster that is associated with your node group.',
            schema: { type: 'string' },
          },
        }),
      nodegroupName: z
        .string()
        .openapi({
          param: {
            name: 'nodegroupName',
            in: 'path',
            required: true,
            description: 'The name of the node group to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNodegroupResponseSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteClusterRegistrationsNameRoute = createRoute({
  method: 'delete',
  path: '/cluster-registrations/{name}',
  description: 'Deregisters a connected cluster to remove it from the Amazon EKS control plane.',
  operationId: 'DeregisterCluster',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the connected cluster to deregister.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterClusterResponseSchema } },
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
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAddonsConfigurationSchemasAddonNameAddonVersionRoute = createRoute({
  method: 'get',
  path: '/addons/configuration-schemas#addonName&addonVersion',
  description: 'Returns configuration options.',
  operationId: 'DescribeAddonConfiguration',
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
      addonName: z
        .string()
        .openapi({
          param: {
            name: 'addonName',
            in: 'query',
            required: true,
            description:
              'The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.',
            schema: { type: 'string' },
          },
        }),
      addonVersion: z
        .string()
        .openapi({
          param: {
            name: 'addonVersion',
            in: 'query',
            required: true,
            description:
              'The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAddonConfigurationResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const getAddonsSupportedVersionsRoute = createRoute({
  method: 'get',
  path: '/addons/supported-versions',
  description:
    'Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned. ',
  operationId: 'DescribeAddonVersions',
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
      kubernetesVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'kubernetesVersion',
            in: 'query',
            required: false,
            description: 'The Kubernetes versions that you can use the add-on with.',
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
            description: 'The maximum number of results to return.',
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
              '<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeAddonVersionsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      addonName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'addonName',
            in: 'query',
            required: false,
            description:
              'The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.',
            schema: { type: 'string' },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            required: false,
            description:
              "The type of the add-on. For valid <code>types</code>, don't specify a value for this property.",
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      publishers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'publishers',
            in: 'query',
            required: false,
            description:
              "The publisher of the add-on. For valid <code>publishers</code>, don't specify a value for this property.",
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      owners: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'owners',
            in: 'query',
            required: false,
            description:
              "The owner of the add-on. For valid <code>owners</code>, don't specify a value for this property.",
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAddonVersionsResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postClustersNameIdentityProviderConfigsDescribeRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/identity-provider-configs/describe',
  description: 'Returns descriptive information about an identity provider configuration.',
  operationId: 'DescribeIdentityProviderConfig',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The cluster name that the identity provider configuration is associated to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identityProviderConfig: z
                .object({
                  type: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type of the identity provider configuration. The only type available is <code>oidc</code>.',
                      }),
                  ).exactOptional(),
                  name: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The name of the identity provider configuration.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object representing an identity provider configuration.',
                  required: [],
                }),
            })
            .openapi({ required: ['identityProviderConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeIdentityProviderConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getClustersNameUpdatesUpdateIdRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/updates/{updateId}',
  description:
    '<p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>',
  operationId: 'DescribeUpdate',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Amazon EKS cluster associated with the update.',
            schema: { type: 'string' },
          },
        }),
      updateId: z
        .string()
        .openapi({
          param: {
            name: 'updateId',
            in: 'path',
            required: true,
            description: 'The ID of the update to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      nodegroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nodegroupName',
            in: 'query',
            required: false,
            description:
              'The name of the Amazon EKS node group associated with the update. This parameter is required if the update is a node group update.',
            schema: { type: 'string' },
          },
        }),
      addonName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'addonName',
            in: 'query',
            required: false,
            description:
              'The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>. This parameter is required if the update is an add-on update.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUpdateResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postClustersNameIdentityProviderConfigsDisassociateRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/identity-provider-configs/disassociate',
  description:
    'Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.',
  operationId: 'DisassociateIdentityProviderConfig',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster to disassociate an identity provider from.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identityProviderConfig: z
                .object({
                  type: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type of the identity provider configuration. The only type available is <code>oidc</code>.',
                      }),
                  ).exactOptional(),
                  name: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The name of the identity provider configuration.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object representing an identity provider configuration.',
                  required: [],
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
            })
            .openapi({ required: ['identityProviderConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateIdentityProviderConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const getClustersNameIdentityProviderConfigsRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/identity-provider-configs',
  description: 'A list of identity provider configurations.',
  operationId: 'ListIdentityProviderConfigs',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The cluster name that you want to list identity provider configurations for.',
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
              "The maximum number of identity provider configurations returned by <code>ListIdentityProviderConfigs</code> in paginated output. When you use this parameter, <code>ListIdentityProviderConfigs</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListIdentityProviderConfigs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListIdentityProviderConfigs</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.",
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
              'The <code>nextToken</code> value returned from a previous paginated <code>IdentityProviderConfigsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIdentityProviderConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'List the tags for an Amazon EKS resource.',
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
              'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.',
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    'Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.',
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
              'The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.',
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
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'The tags to add to the resource. A tag is an array of key-value pairs.',
                }),
            })
            .openapi({ required: ['tags'] }),
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getClustersNameUpdatesRoute = createRoute({
  method: 'get',
  path: '/clusters/{name}/updates',
  description:
    'Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.',
  operationId: 'ListUpdates',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Amazon EKS cluster to list updates for.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      nodegroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nodegroupName',
            in: 'query',
            required: false,
            description: 'The name of the Amazon EKS managed node group to list updates for.',
            schema: { type: 'string' },
          },
        }),
      addonName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'addonName',
            in: 'query',
            required: false,
            description: 'The names of the installed add-ons that have available updates.',
            schema: { type: 'string' },
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
              'The <code>nextToken</code> value returned from a previous paginated <code>ListUpdates</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
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
              "The maximum number of update results returned by <code>ListUpdates</code> in paginated output. When you use this parameter, <code>ListUpdates</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListUpdates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListUpdates</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUpdatesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postClustersNameUpdatesRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/updates',
  description:
    '<p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>',
  operationId: 'UpdateClusterVersion',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Amazon EKS cluster to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .string()
                .openapi({
                  description: 'The desired Kubernetes version following a successful update.',
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
            })
            .openapi({ required: ['version'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateClusterVersionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postClusterRegistrationsRoute = createRoute({
  method: 'post',
  path: '/cluster-registrations',
  description:
    '<p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it\'s native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>',
  operationId: 'RegisterCluster',
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
              name: z
                .string()
                .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
                .min(1)
                .max(100)
                .openapi({ description: 'Define a unique name for this cluster for your Region.' }),
              connectorConfig: z
                .object({
                  roleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the role that is authorized to request the connector configuration.',
                      }),
                  ).exactOptional(),
                  provider: ConnectorConfigProviderSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The cloud provider for the target cluster to connect.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The configuration sent to a cluster for configuration.',
                  required: [],
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster.',
                }),
            })
            .openapi({ required: ['name', 'connectorConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterClusterResponseSchema } },
    },
    480: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    487: {
      description: 'ResourcePropagationDelayException',
      content: { 'application/json': { schema: ResourcePropagationDelayExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Deletes specified tags from a resource.',
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
              'The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.',
            schema: { type: 'string' },
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
            description: 'The keys of the tags to be removed.',
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postClustersNameAddonsAddonNameUpdateRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/addons/{addonName}/update',
  description: 'Updates an Amazon EKS add-on.',
  operationId: 'UpdateAddon',
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
      name: z
        .string()
        .regex(/^[0-9A-Za-z][A-Za-z0-9\-_]*/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the cluster.',
            schema: {
              type: 'string',
              pattern: '^[0-9A-Za-z][A-Za-z0-9\\-_]*',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
      addonName: z
        .string()
        .openapi({
          param: {
            name: 'addonName',
            in: 'path',
            required: true,
            description:
              'The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              addonVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.',
                }),
              serviceAccountRoleArn: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on\'s service account. The role must be assigned the IAM permissions required by the add-on. If you don\'t specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>',
                }),
              resolveConflicts: z
                .enum(['OVERWRITE', 'NONE', 'PRESERVE'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:</p> <ul> <li> <p> <b>None</b> – Amazon EKS doesn't change the value. The update might fail.</p> </li> <li> <p> <b>Overwrite</b> – Amazon EKS overwrites the changed value back to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster.</p> </li> </ul>",
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              configurationValues: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The set of configuration values for the add-on that\'s created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html">DescribeAddonConfiguration</a>.',
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
      content: { 'application/json': { schema: UpdateAddonResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postClustersNameUpdateConfigRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/update-config',
  description:
    '<p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren\'t exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster\'s Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can\'t update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>',
  operationId: 'UpdateClusterConfig',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Amazon EKS cluster to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourcesVpcConfig: z
                .object({
                  subnetIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.',
                      }),
                  ).exactOptional(),
                  securityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane. If you don\'t specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Amazon EKS security group considerations</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                  endpointPublicAccess: BoxedBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set this value to <code>false</code> to disable public access to your cluster\'s Kubernetes API server endpoint. If you disable public access, your cluster\'s Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is <code>true</code>, which enables public access for your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                  endpointPrivateAccess: BoxedBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set this value to <code>true</code> to enable private access for your cluster\'s Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster\'s VPC use the private VPC endpoint. The default value for this parameter is <code>false</code>, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or Fargate pods in the cluster, then ensure that <code>publicAccessCidrs</code> includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                  publicAccessCidrs: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The CIDR blocks that are allowed access to your cluster\'s public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is <code>0.0.0.0/0</code>. If you\'ve disabled private endpoint access and you have nodes or Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing the VPC configuration to use for an Amazon EKS cluster.',
                  required: [],
                }),
              logging: z
                .object({
                  clusterLogging: LogSetupsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The cluster control plane logging configuration for your cluster.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing the logging configuration for resources in your cluster.',
                  required: [],
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
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
      content: { 'application/json': { schema: UpdateClusterConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postClustersNameNodeGroupsNodegroupNameUpdateConfigRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/node-groups/{nodegroupName}/update-config',
  description:
    'Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.',
  operationId: 'UpdateNodegroupConfig',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon EKS cluster that the managed node group resides in.',
            schema: { type: 'string' },
          },
        }),
      nodegroupName: z
        .string()
        .openapi({
          param: {
            name: 'nodegroupName',
            in: 'path',
            required: true,
            description: 'The name of the managed node group to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              labels: z
                .object({
                  addOrUpdateLabels: LabelsMapSchema.and(
                    z.any().openapi({ description: 'Kubernetes labels to be added or updated.' }),
                  ).exactOptional(),
                  removeLabels: LabelsKeyListSchema.and(
                    z.any().openapi({ description: 'Kubernetes labels to be removed.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing a Kubernetes label change for a managed node group.',
                  required: [],
                }),
              taints: z
                .object({
                  addOrUpdateTaints: TaintsListSchema.and(
                    z.any().openapi({ description: 'Kubernetes taints to be added or updated.' }),
                  ).exactOptional(),
                  removeTaints: TaintsListSchema.and(
                    z.any().openapi({ description: 'Kubernetes taints to remove.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.',
                  required: [],
                }),
              scalingConfig: z
                .object({
                  minSize: ZeroCapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The minimum number of nodes that the managed node group can scale in to.',
                      }),
                  ).exactOptional(),
                  maxSize: CapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum number of nodes that the managed node group can scale out to. For information about the maximum number that you can specify, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service quotas</a> in the <i>Amazon EKS User Guide</i>.',
                      }),
                  ).exactOptional(),
                  desiredSize: ZeroCapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The current number of nodes that the managed node group should maintain.</p> <important> <p>If you use Cluster Autoscaler, you shouldn't change the desiredSize value directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale down.</p> </important> <p>Whenever this parameter changes, the number of worker nodes in the node group is updated to the specified size. If this parameter is given a value that is smaller than the current number of running worker nodes, the necessary number of worker nodes are terminated to match the given value. When using CloudFormation, no action occurs if you remove this parameter from your CFN template.</p> <p>This parameter can be different from minSize in some cases, such as when starting with extra hosts for testing. This parameter can also be different when you want to start with an estimated number of needed hosts, but let Cluster Autoscaler reduce the number if there are too many. When Cluster Autoscaler is used, the desiredSize parameter is altered by Cluster Autoscaler (but can be out-of-date for short periods of time). Cluster Autoscaler doesn't scale a managed node group lower than minSize or higher than maxSize.</p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.',
                  required: [],
                }),
              updateConfig: z
                .object({
                  maxUnavailable: NonZeroIntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or <code>maxUnavailablePercentage</code> is required to have a value.The maximum number is 100.',
                      }),
                  ).exactOptional(),
                  maxUnavailablePercentage: PercentCapacitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or <code>maxUnavailable</code> is required to have a value.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The node group update configuration.', required: [] }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
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
      content: { 'application/json': { schema: UpdateNodegroupConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postClustersNameNodeGroupsNodegroupNameUpdateVersionRoute = createRoute({
  method: 'post',
  path: '/clusters/{name}/node-groups/{nodegroupName}/update-version',
  description:
    '<p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group\'s current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster\'s current Kubernetes version by specifying your cluster\'s Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>',
  operationId: 'UpdateNodegroupVersion',
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
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Amazon EKS cluster that is associated with the managed node group to update.',
            schema: { type: 'string' },
          },
        }),
      nodegroupName: z
        .string()
        .openapi({
          param: {
            name: 'nodegroupName',
            in: 'path',
            required: true,
            description: 'The name of the managed node group to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster\'s Kubernetes version. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>version</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.',
                }),
              releaseVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group\'s Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don\'t specify <code>releaseVersion</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>',
                }),
              launchTemplate: z
                .object({
                  name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The name of the launch template.</p> <p>You must specify either the launch template name or the launch template ID in the request, but not both.</p>',
                      }),
                  ).exactOptional(),
                  version: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The version number of the launch template to use. If no version is specified, then the template's default version is used.",
                      }),
                  ).exactOptional(),
                  id: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The ID of the launch template.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>An object representing a node group launch template specification. The launch template can\'t include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>',
                  required: [],
                }),
              force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node.",
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
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
      content: { 'application/json': { schema: UpdateNodegroupVersionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})
