import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const ArrayJobDependencySchema = z.enum(['N_TO_N', 'SEQUENTIAL']).openapi('ArrayJobDependency')

type JobDependencyType = {
  jobId?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  type?: z.infer<typeof ArrayJobDependencySchema> & { [key: string]: unknown }
}

const CancelJobResponseSchema = z.object({}).openapi({ example: {} }).openapi('CancelJobResponse')

const ClientExceptionSchema = z.any().openapi('ClientException')

const ServerExceptionSchema = z.any().openapi('ServerException')

const CreateComputeEnvironmentResponseSchema = z
  .object({
    computeEnvironmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ).exactOptional(),
    computeEnvironmentArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the compute environment.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      computeEnvironmentArn: 'arn:aws:batch:us-east-1:012345678910:compute-environment/M4Spot',
      computeEnvironmentName: 'M4Spot',
    },
    required: [],
  })
  .openapi('CreateComputeEnvironmentResponse')

const CRTypeSchema = z.enum(['EC2', 'SPOT', 'FARGATE', 'FARGATE_SPOT']).openapi('CRType')

const CRAllocationStrategySchema = z
  .enum([
    'BEST_FIT',
    'BEST_FIT_PROGRESSIVE',
    'SPOT_CAPACITY_OPTIMIZED',
    'SPOT_PRICE_CAPACITY_OPTIMIZED',
  ])
  .openapi('CRAllocationStrategy')

const IntegerSchema = z.int().openapi('Integer')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const TagsMapSchema = z.record(z.string(), StringSchema).openapi('TagsMap')

const LaunchTemplateSpecificationSchema = z
  .object({
    launchTemplateId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the launch template.' }),
    ).exactOptional(),
    launchTemplateName: StringSchema.and(
      z.any().openapi({ description: 'The name of the launch template.' }),
    ).exactOptional(),
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The version number of the launch template, <code>$Latest</code>, or <code>$Default</code>.</p> <p>If the value is <code>$Latest</code>, the latest version of the launch template is used. If the value is <code>$Default</code>, the default version of the launch template is used.</p> <important> <p>If the AMI ID that's used in a compute environment is from the launch template, the AMI isn't changed when the compute environment is updated. It's only changed if the <code>updateToLatestImageVersion</code> parameter for the compute environment is set to <code>true</code>. During an infrastructure update, if either <code>$Latest</code> or <code>$Default</code> is specified, Batch re-evaluates the launch template version, and it might use a different version of the launch template. This is the case even if the launch template isn't specified in the update. When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </important> <p>Default: <code>$Default</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>An object that represents a launch template that's associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.</p> <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be used.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>",
    required: [],
  })
  .openapi('LaunchTemplateSpecification')

const ImageTypeSchema = z.string().min(1).max(256).openapi('ImageType')

const ImageIdOverrideSchema = z.string().min(1).max(256).openapi('ImageIdOverride')

const KubernetesVersionSchema = z.string().min(1).max(256).openapi('KubernetesVersion')

const Ec2ConfigurationSchema = z
  .object({
    imageType: ImageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The image type to match with the instance type to select an AMI. The supported values are different for <code>ECS</code> and <code>EKS</code> resources.</p> <dl> <dt>ECS</dt> <dd> <p>If the <code>imageIdOverride</code> parameter isn\'t specified, then a recent <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon ECS-optimized Amazon Linux 2 AMI</a> (<code>ECS_AL2</code>) is used. If a new image type is specified in an update, but neither an <code>imageId</code> nor a <code>imageIdOverride</code> parameter is specified, then the latest Amazon ECS optimized AMI for that image type that\'s supported by Batch is used.</p> <dl> <dt>ECS_AL2</dt> <dd> <p> <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>: Default for all non-GPU instance families.</p> </dd> <dt>ECS_AL2_NVIDIA</dt> <dd> <p> <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami">Amazon Linux 2 (GPU)</a>: Default for all GPU instance families (for example <code>P4</code> and <code>G4</code>) and can be used for all non Amazon Web Services Graviton-based instance types.</p> </dd> <dt>ECS_AL1</dt> <dd> <p> <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#alami">Amazon Linux</a>. Amazon Linux has reached the end-of-life of standard support. For more information, see <a href="http://aws.amazon.com/amazon-linux-ami/">Amazon Linux AMI</a>.</p> </dd> </dl> </dd> <dt>EKS</dt> <dd> <p>If the <code>imageIdOverride</code> parameter isn\'t specified, then a recent <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon EKS-optimized Amazon Linux AMI</a> (<code>EKS_AL2</code>) is used. If a new image type is specified in an update, but neither an <code>imageId</code> nor a <code>imageIdOverride</code> parameter is specified, then the latest Amazon EKS optimized AMI for that image type that Batch supports is used.</p> <dl> <dt>EKS_AL2</dt> <dd> <p> <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon Linux 2</a>: Default for all non-GPU instance families.</p> </dd> <dt>EKS_AL2_NVIDIA</dt> <dd> <p> <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon Linux 2 (accelerated)</a>: Default for all GPU instance families (for example, <code>P4</code> and <code>G4</code>) and can be used for all non Amazon Web Services Graviton-based instance types.</p> </dd> </dl> </dd> </dl>',
        }),
    ),
    imageIdOverride: ImageIdOverrideSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The AMI ID used for instances launched in the compute environment that match the image type. This setting overrides the <code>imageId</code> set in the <code>computeResource</code> object.</p> <note> <p>The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized Amazon Linux 2 AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    imageKubernetesVersion: KubernetesVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Kubernetes version for the compute environment. If you don't specify a value, the latest version that Batch supports is used.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['imageType'],
    description:
      '<p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If <code>Ec2Configuration</code> isn\'t specified, the default is <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p> <note> <p>This object isn\'t applicable to jobs that are running on Fargate resources.</p> </note>',
  })
  .openapi('Ec2Configuration')

const Ec2ConfigurationListSchema = z.array(Ec2ConfigurationSchema).openapi('Ec2ConfigurationList')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const CreateJobQueueResponseSchema = z
  .object({
    jobQueueName: StringSchema.and(z.any().openapi({ description: 'The name of the job queue.' })),
    jobQueueArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job queue.' }),
    ),
  })
  .openapi({
    required: ['jobQueueName', 'jobQueueArn'],
    example: {
      jobQueueArn: 'arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority',
      jobQueueName: 'HighPriority',
    },
  })
  .openapi('CreateJobQueueResponse')

const ComputeEnvironmentOrderSchema = z
  .object({
    order: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The order of the compute environment. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower <code>order</code> integer value is tried for job placement first.',
        }),
    ),
    computeEnvironment: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the compute environment.' }),
    ),
  })
  .openapi({
    required: ['order', 'computeEnvironment'],
    description:
      "<p>The order that compute environments are tried in for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>",
  })
  .openapi('ComputeEnvironmentOrder')

const CreateSchedulingPolicyResponseSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the scheduling policy.' })),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the scheduling policy. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. For example, <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.',
        }),
    ),
  })
  .openapi({ required: ['name', 'arn'] })
  .openapi('CreateSchedulingPolicyResponse')

const FloatSchema = z.float32().openapi('Float')

const ShareAttributesSchema = z
  .object({
    shareIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A fair share identifier or fair share identifier prefix. If the string ends with an asterisk (*), this entry specifies the weight factor to use for fair share identifiers that start with that prefix. The list of fair share identifiers in a fair share policy can't overlap. For example, you can't have one that specifies a <code>shareIdentifier</code> of <code>UserA*</code> and another that specifies a <code>shareIdentifier</code> of <code>UserA-1</code>.</p> <p>There can be no more than 500 fair share identifiers active in a job queue.</p> <p>The string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).</p>",
        }),
    ),
    weightFactor: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weight factor for the fair share identifier. The default value is 1.0. A lower value has a higher priority for compute resources. For example, jobs that use a share identifier with a weight factor of 0.125 (1/8) get 8 times the compute resources of jobs that use a share identifier with a weight factor of 1.</p> <p>The smallest supported value is 0.0001, and the largest supported value is 999.9999.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['shareIdentifier'],
    description:
      "Specifies the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>.",
  })
  .openapi('ShareAttributes')

const ShareAttributesListSchema = z.array(ShareAttributesSchema).openapi('ShareAttributesList')

const DeleteComputeEnvironmentResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteComputeEnvironmentResponse')

const DeleteJobQueueResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteJobQueueResponse')

const DeleteSchedulingPolicyResponseSchema = z.object({}).openapi('DeleteSchedulingPolicyResponse')

const DeregisterJobDefinitionResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeregisterJobDefinitionResponse')

const TagrisTagsMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagrisTagsMap')

const CETypeSchema = z.enum(['MANAGED', 'UNMANAGED']).openapi('CEType')

const CEStateSchema = z.enum(['ENABLED', 'DISABLED']).openapi('CEState')

const CEStatusSchema = z
  .enum(['CREATING', 'UPDATING', 'DELETING', 'DELETED', 'VALID', 'INVALID'])
  .openapi('CEStatus')

const ComputeResourceSchema = z
  .object({
    type: CRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>, or <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.</p> <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the <i>Batch User Guide</i>.</p>',
        }),
    ),
    allocationStrategy: CRAllocationStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The allocation strategy to use for the compute resource if not enough instances of the best fitting instance type can be allocated. This might be because of availability of the instance type in the Region or <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html\">Amazon EC2 service limits</a>. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html\">Allocation strategies</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <dl> <dt>BEST_FIT (default)</dt> <dd> <p>Batch selects an instance type that best fits the needs of the jobs with a preference for the lowest-cost instance type. If additional instances of the selected instance type aren't available, Batch waits for the additional instances to be available. If there aren't enough instances available or the user is reaching <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html\">Amazon EC2 service limits</a>, additional jobs aren't run until the currently running jobs are completed. This allocation strategy keeps costs lower but can limit scaling. If you're using Spot Fleets with <code>BEST_FIT</code>, the Spot Fleet IAM Role must be specified. Compute resources that use a <code>BEST_FIT</code> allocation strategy don't support infrastructure updates and can't update some parameters. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </dd> <dt>BEST_FIT_PROGRESSIVE</dt> <dd> <p>Batch selects additional instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously selected instance types aren't available, Batch selects new instance types.</p> </dd> <dt>SPOT_CAPACITY_OPTIMIZED</dt> <dd> <p>Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> <dt>SPOT_PRICE_CAPACITY_OPTIMIZED</dt> <dd> <p>The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> </dl> <p>With <code>BEST_FIT_PROGRESSIVE</code>,<code>SPOT_CAPACITY_OPTIMIZED</code> and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance.</p>",
        }),
    ).exactOptional(),
    minvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The minimum number of vCPUs that a compute environment should maintain (even if the compute environment is <code>DISABLED</code>).</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
    maxvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of vCPUs that a compute environment can support.</p> <note> <p>With <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code> and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> allocation strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance. For example, no more than a single instance from among those specified in your compute environment is allocated.</p> </note>',
        }),
    ),
    desiredvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The desired number of vCPUS in the compute environment. Batch modifies this value between the minimum and maximum values based on job queue demand.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
    instanceTypes: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The instances types that can be launched. You can specify instance families to launch any instance type within those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to select instance types (from the C4, M4, and R4 instance families) that match the demand of your job queues.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <note> <p>When you create a compute environment, the instance types that you select for the compute environment must share the same architecture. For example, you can't mix x86 and ARM instances in the same compute environment.</p> </note> <note> <p>Currently, <code>optimal</code> uses instance types from the C4, M4, and R4 instance families. In Regions that don't have instance types from those instance families, instance types from the C5, M5, and R5 instance families are used.</p> </note>",
        }),
    ).exactOptional(),
    imageId: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is overridden by the <code>imageIdOverride</code> member of the <code>Ec2Configuration</code> structure.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <note> <p>The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized Amazon Linux 2 AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>This field is deprecated, use ec2Configuration[].imageIdOverride instead.',
        }),
    ).exactOptional(),
    subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The VPC subnets where the compute resources are launched. These subnets must be within the same VPC. Fargate compute resources can contain up to 16 subnets. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p> <note> <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones"> Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the <i>Amazon ECS Developer Guide</i>.</p> <p>Batch on Fargate doesn\'t currently support Local Zones.</p> </note>',
        }),
    ),
    securityGroupIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon EC2 security groups that are associated with instances launched in the compute environment. One or more security groups must be specified, either in <code>securityGroupIds</code> or using a launch template referenced in <code>launchTemplate</code>. This parameter is required for jobs that are running on Fargate resources and must contain at least one security group. Fargate doesn't support launch templates. If security groups are specified using both <code>securityGroupIds</code> and <code>launchTemplate</code>, the values in <code>securityGroupIds</code> are used.",
        }),
    ).exactOptional(),
    ec2KeyPair: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to log in to your instances with SSH.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
    instanceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, <code> <i>ecsInstanceRole</i> </code> or <code>arn:aws:iam::<i>&lt;aws_account_id&gt;</i>:instance-profile/<i>ecsInstanceRole</i> </code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance role</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For Batch, these take the form of <code>"String1": "String2"</code>, where <code>String1</code> is the tag key and <code>String2</code> is the tag value-for example, <code>{ "Name": "Batch Instance - C4OnDemand" }</code>. This is helpful for recognizing your Batch instances in the Amazon EC2 console. Updating these tags requires an infrastructure update to the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. These tags aren\'t seen when using the Batch <code>ListTagsForResource</code> API operation.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    placementGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    bidPercentage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand price. For most use cases, we recommend leaving this field empty.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
    spotIamFleetRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute environment. This role is required if the allocation strategy set to <code>BEST_FIT</code> or if the allocation strategy isn\'t specified. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <important> <p>To tag your Spot Instances on creation, the Spot Fleet IAM role specified here must use the newer <b>AmazonEC2SpotFleetTaggingRole</b> managed policy. The previously recommended <b>AmazonEC2SpotFleetRole</b> managed policy doesn\'t have the required permissions to tag Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#spot-instance-no-tag">Spot instances not tagged on creation</a> in the <i>Batch User Guide</i>.</p> </important>',
        }),
    ).exactOptional(),
    launchTemplate: LaunchTemplateSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The launch template to use for your compute resources. Any other compute resource parameters that you specify in a <a>CreateComputeEnvironment</a> API operation override the same parameters in the launch template. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    ec2Configuration: Ec2ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Provides information that's used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code>.</p> <p>One or two values can be provided.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type', 'maxvCpus', 'subnets'],
    description:
      'An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.',
  })
  .openapi('ComputeResource')

const BooleanSchema = z.boolean().openapi('Boolean')

const JobExecutionTimeoutMinutesSchema = z
  .int()
  .min(1)
  .max(360)
  .openapi('JobExecutionTimeoutMinutes')

const UpdatePolicySchema = z
  .object({
    terminateJobsOnUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether jobs are automatically terminated when the computer environment infrastructure is updated. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
    jobExecutionTimeoutMinutes: JobExecutionTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the job timeout (in minutes) when the compute environment infrastructure is updated. The default value is 30.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.',
    required: [],
  })
  .openapi('UpdatePolicy')

const EksConfigurationSchema = z
  .object({
    eksClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon EKS cluster. An example is <code>arn:<i>aws</i>:eks:<i>us-east-1</i>:<i>123456789012</i>:cluster/<i>ClusterForBatch</i> </code>. ',
        }),
    ),
    kubernetesNamespace: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon EKS cluster. Batch manages pods in this namespace. The value can\'t left empty or null. It must be fewer than 64 characters long, can\'t be set to <code>default</code>, can\'t start with "<code>kube-</code>," and must match this regular expression: <code>^[a-z0-9]([-a-z0-9]*[a-z0-9])?$</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/">Namespaces</a> in the Kubernetes documentation.',
        }),
    ),
  })
  .openapi({
    required: ['eksClusterArn', 'kubernetesNamespace'],
    description:
      'Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.',
  })
  .openapi('EksConfiguration')

const OrchestrationTypeSchema = z.enum(['ECS', 'EKS']).openapi('OrchestrationType')

const ComputeEnvironmentDetailSchema = z
  .object({
    computeEnvironmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ),
    computeEnvironmentArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the compute environment.' }),
    ),
    unmanagedvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of VCPUs expected to be used for an unmanaged compute environment.',
        }),
    ).exactOptional(),
    ecsClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster that the compute environment uses.',
        }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z.any().openapi({ description: 'The tags applied to the compute environment.' }),
    ).exactOptional(),
    type: CETypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    state: CEStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the compute environment. The valid values are <code>ENABLED</code> or <code>DISABLED</code>.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state\">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>",
        }),
    ).exactOptional(),
    status: CEStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the compute environment (for example, <code>CREATING</code> or <code>VALID</code>).',
        }),
    ).exactOptional(),
    statusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short, human-readable string to provide additional details for the current status of the compute environment.',
        }),
    ).exactOptional(),
    computeResources: ComputeResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute resources defined for the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    serviceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service role that\'s associated with the compute environment that allows Batch to make calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    updatePolicy: UpdatePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    eksConfiguration: EksConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for the Amazon EKS cluster that supports the Batch compute environment. Only specify this parameter if the <code>containerOrchestrationType</code> is <code>EKS</code>.',
        }),
    ).exactOptional(),
    containerOrchestrationType: OrchestrationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The orchestration type of the compute environment. The valid values are <code>ECS</code> (default) or <code>EKS</code>.',
        }),
    ).exactOptional(),
    uuid: StringSchema.and(
      z.any().openapi({ description: 'Unique identifier for the compute environment.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['computeEnvironmentName', 'computeEnvironmentArn'],
    description: 'An object that represents an Batch compute environment.',
  })
  .openapi('ComputeEnvironmentDetail')

const ComputeEnvironmentDetailListSchema = z
  .array(ComputeEnvironmentDetailSchema)
  .openapi('ComputeEnvironmentDetailList')

const DescribeComputeEnvironmentsResponseSchema = z
  .object({
    computeEnvironments: ComputeEnvironmentDetailListSchema.and(
      z.any().openapi({ description: 'The list of compute environments.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeComputeEnvironments</code> request. When the results of a <code>DescribeComputeEnvironments</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      computeEnvironments: [
        {
          type: 'MANAGED',
          computeEnvironmentArn:
            'arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand',
          computeEnvironmentName: 'P2OnDemand',
          computeResources: {
            type: 'EC2',
            desiredvCpus: 48,
            ec2KeyPair: 'id_rsa',
            instanceRole: 'ecsInstanceRole',
            instanceTypes: ['p2'],
            maxvCpus: 128,
            minvCpus: 0,
            securityGroupIds: ['sg-cf5093b2'],
            subnets: ['subnet-220c0e0a', 'subnet-1a95556d', 'subnet-978f6dce'],
            tags: { Name: 'Batch Instance - P2OnDemand' },
          },
          ecsClusterArn:
            'arn:aws:ecs:us-east-1:012345678910:cluster/P2OnDemand_Batch_2c06f29d-d1fe-3a49-879d-42394c86effc',
          serviceRole: 'arn:aws:iam::012345678910:role/AWSBatchServiceRole',
          state: 'ENABLED',
          status: 'VALID',
          statusReason: 'ComputeEnvironment Healthy',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeComputeEnvironmentsResponse')

const ParametersMapSchema = z.record(z.string(), StringSchema).openapi('ParametersMap')

const RetryActionSchema = z.enum(['RETRY', 'EXIT']).openapi('RetryAction')

const EvaluateOnExitSchema = z
  .object({
    onStatusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a glob pattern to match against the <code>StatusReason</code> returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white spaces (including spaces or tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.',
        }),
    ).exactOptional(),
    onReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a glob pattern to match against the <code>Reason</code> returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white space (including spaces and tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.',
        }),
    ).exactOptional(),
    onExitCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains a glob pattern to match against the decimal representation of the <code>ExitCode</code> returned for a job. The pattern can be up to 512 characters long. It can contain only numbers, and can end with an asterisk (*) so that only the start of the string needs to be an exact match.</p> <p>The string can contain up to 512 characters.</p>',
        }),
    ).exactOptional(),
    action: RetryActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the action to take if all of the specified conditions (<code>onStatusReason</code>, <code>onReason</code>, and <code>onExitCode</code>) are met. The values aren't case sensitive.",
        }),
    ),
  })
  .openapi({
    required: ['action'],
    description:
      'Specifies an array of up to 5 conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met. If none of the <code>EvaluateOnExit</code> conditions in a <code>RetryStrategy</code> match, then the job is retried.',
  })
  .openapi('EvaluateOnExit')

const EvaluateOnExitListSchema = z.array(EvaluateOnExitSchema).openapi('EvaluateOnExitList')

const RetryStrategySchema = z
  .object({
    attempts: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of times to move a job to the <code>RUNNABLE</code> status. You can specify between 1 and 10 attempts. If the value of <code>attempts</code> is greater than one, the job is retried on failure the same number of attempts as the value.',
        }),
    ).exactOptional(),
    evaluateOnExit: EvaluateOnExitListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of up to 5 objects that specify the conditions where jobs are retried or failed. If this parameter is specified, then the <code>attempts</code> parameter must also be specified. If none of the listed conditions match, then the job is retried.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The retry strategy that\'s associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.',
    required: [],
  })
  .openapi('RetryStrategy')

const HostSchema = z
  .object({
    sourcePath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the source path location doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.</p> <note> <p>This parameter isn't applicable to jobs that run on Fargate resources. Don't provide this for these jobs.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.",
    required: [],
  })
  .openapi('Host')

const EFSTransitEncryptionSchema = z.enum(['ENABLED', 'DISABLED']).openapi('EFSTransitEncryption')

const EFSAuthorizationConfigIAMSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('EFSAuthorizationConfigIAM')

const EFSAuthorizationConfigSchema = z
  .object({
    accessPointId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the <code>EFSVolumeConfiguration</code> must either be omitted or set to <code>/</code> which enforces the path set on the EFS access point. If an access point is used, transit encryption must be enabled in the <code>EFSVolumeConfiguration</code>. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Working with Amazon EFS access points</a> in the <i>Amazon Elastic File System User Guide</i>.',
        }),
    ).exactOptional(),
    iam: EFSAuthorizationConfigIAMSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether or not to use the Batch job IAM role defined in a job definition when mounting the Amazon EFS file system. If enabled, transit encryption must be enabled in the <code>EFSVolumeConfiguration</code>. If this parameter is omitted, the default value of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html#efs-volume-accesspoints">Using Amazon EFS access points</a> in the <i>Batch User Guide</i>. EFS IAM authorization requires that <code>TransitEncryption</code> be <code>ENABLED</code> and that a <code>JobRoleArn</code> is specified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The authorization configuration details for the Amazon EFS file system.',
    required: [],
  })
  .openapi('EFSAuthorizationConfig')

const EFSVolumeConfigurationSchema = z
  .object({
    fileSystemId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon EFS file system ID to use.' }),
    ),
    rootDirectory: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume is used instead. Specifying <code>/</code> has the same effect as omitting this parameter. The maximum length is 4,096 characters.</p> <important> <p>If an EFS access point is specified in the <code>authorizationConfig</code>, the root directory parameter must either be omitted or set to <code>/</code>, which enforces the path set on the Amazon EFS access point.</p> </important>',
        }),
    ).exactOptional(),
    transitEncryption: EFSTransitEncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html">Encrypting data in transit</a> in the <i>Amazon Elastic File System User Guide</i>.',
        }),
    ).exactOptional(),
    transitEncryptionPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you don\'t specify a transit encryption port, it uses the port selection strategy that the Amazon EFS mount helper uses. The value must be between 0 and 65,535. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html">EFS mount helper</a> in the <i>Amazon Elastic File System User Guide</i>.',
        }),
    ).exactOptional(),
    authorizationConfig: EFSAuthorizationConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The authorization configuration details for the Amazon EFS file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['fileSystemId'],
    description:
      'This is used when you\'re using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>.',
  })
  .openapi('EFSVolumeConfiguration')

const VolumeSchema = z
  .object({
    host: HostSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host container instance and where it's stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>",
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the volume. It can be up to 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_). This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.',
        }),
    ).exactOptional(),
    efsVolumeConfiguration: EFSVolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "This parameter is specified when you're using an Amazon Elastic File System file system for job storage. Jobs that are running on Fargate resources must specify a <code>platformVersion</code> of at least <code>1.4.0</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "A data volume that's used in a job's container properties.",
    required: [],
  })
  .openapi('Volume')

const VolumesSchema = z.array(VolumeSchema).openapi('Volumes')

const KeyValuePairSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the key-value pair. For environment variables, this is the name of the environment variable.',
        }),
    ).exactOptional(),
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key-value pair. For environment variables, this is the value of the environment variable.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A key-value pair object.', required: [] })
  .openapi('KeyValuePair')

const EnvironmentVariablesSchema = z.array(KeyValuePairSchema).openapi('EnvironmentVariables')

const MountPointSchema = z
  .object({
    containerPath: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The path on the container where the host volume is mounted.' }),
    ).exactOptional(),
    readOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is <code>true</code>, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
    sourceVolume: StringSchema.and(
      z.any().openapi({ description: 'The name of the volume to mount.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details for a Docker volume mount point that\'s used in a job\'s container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the <i>Docker Remote API</i> and the <code>--volume</code> option to docker run.',
    required: [],
  })
  .openapi('MountPoint')

const MountPointsSchema = z.array(MountPointSchema).openapi('MountPoints')

const UlimitSchema = z
  .object({
    hardLimit: IntegerSchema.and(
      z.any().openapi({ description: 'The hard limit for the <code>ulimit</code> type.' }),
    ),
    name: StringSchema.and(
      z.any().openapi({ description: 'The <code>type</code> of the <code>ulimit</code>.' }),
    ),
    softLimit: IntegerSchema.and(
      z.any().openapi({ description: 'The soft limit for the <code>ulimit</code> type.' }),
    ),
  })
  .openapi({
    required: ['hardLimit', 'name', 'softLimit'],
    description:
      "<p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>",
  })
  .openapi('Ulimit')

const UlimitsSchema = z.array(UlimitSchema).openapi('Ulimits')

const ResourceTypeSchema = z.enum(['GPU', 'VCPU', 'MEMORY']).openapi('ResourceType')

const ResourceRequirementSchema = z
  .object({
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The quantity of the specified resource to reserve for the container. The values vary based on the <code>type</code> specified.</p> <dl> <dt>type="GPU"</dt> <dd> <p>The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all containers in a job doesn\'t exceed the number of available GPUs on the compute resource that the job is launched on.</p> <note> <p>GPUs aren\'t available for jobs that are running on Fargate resources.</p> </note> </dd> <dt>type="MEMORY"</dt> <dd> <p>The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated. This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>If you\'re trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory management</a> in the <i>Batch User Guide</i>.</p> </note> <p>For jobs that are running on Fargate resources, then <code>value</code> is the hard limit (in MiB), and must match one of the supported values and the <code>VCPU</code> values must be one of the values supported for that memory value.</p> <dl> <dt>value = 512</dt> <dd> <p> <code>VCPU</code> = 0.25</p> </dd> <dt>value = 1024</dt> <dd> <p> <code>VCPU</code> = 0.25 or 0.5</p> </dd> <dt>value = 2048</dt> <dd> <p> <code>VCPU</code> = 0.25, 0.5, or 1</p> </dd> <dt>value = 3072</dt> <dd> <p> <code>VCPU</code> = 0.5, or 1</p> </dd> <dt>value = 4096</dt> <dd> <p> <code>VCPU</code> = 0.5, 1, or 2</p> </dd> <dt>value = 5120, 6144, or 7168</dt> <dd> <p> <code>VCPU</code> = 1 or 2</p> </dd> <dt>value = 8192</dt> <dd> <p> <code>VCPU</code> = 1, 2, or 4</p> </dd> <dt>value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360</dt> <dd> <p> <code>VCPU</code> = 2 or 4</p> </dd> <dt>value = 16384</dt> <dd> <p> <code>VCPU</code> = 2, 4, or 8</p> </dd> <dt>value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720</dt> <dd> <p> <code>VCPU</code> = 4</p> </dd> <dt>value = 20480, 24576, or 28672</dt> <dd> <p> <code>VCPU</code> = 4 or 8</p> </dd> <dt>value = 36864, 45056, 53248, or 61440</dt> <dd> <p> <code>VCPU</code> = 8</p> </dd> <dt>value = 32768, 40960, 49152, or 57344</dt> <dd> <p> <code>VCPU</code> = 8 or 16</p> </dd> <dt>value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880</dt> <dd> <p> <code>VCPU</code> = 16</p> </dd> </dl> </dd> <dt>type="VCPU"</dt> <dd> <p>The number of vCPUs reserved for the container. This parameter maps to <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. For EC2 resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be specified for each node at least once.</p> <p>The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about Fargate quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate">Fargate quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>For jobs that are running on Fargate resources, then <code>value</code> must match one of the supported values and the <code>MEMORY</code> values must be one of the values supported for that <code>VCPU</code> value. The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16</p> <dl> <dt>value = 0.25</dt> <dd> <p> <code>MEMORY</code> = 512, 1024, or 2048</p> </dd> <dt>value = 0.5</dt> <dd> <p> <code>MEMORY</code> = 1024, 2048, 3072, or 4096</p> </dd> <dt>value = 1</dt> <dd> <p> <code>MEMORY</code> = 2048, 3072, 4096, 5120, 6144, 7168, or 8192</p> </dd> <dt>value = 2</dt> <dd> <p> <code>MEMORY</code> = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384</p> </dd> <dt>value = 4</dt> <dd> <p> <code>MEMORY</code> = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720</p> </dd> <dt>value = 8</dt> <dd> <p> <code>MEMORY</code> = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440 </p> </dd> <dt>value = 16</dt> <dd> <p> <code>MEMORY</code> = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880 </p> </dd> </dl> </dd> </dl>',
        }),
    ),
    type: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.',
        }),
    ),
  })
  .openapi({
    required: ['value', 'type'],
    description:
      'The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.',
  })
  .openapi('ResourceRequirement')

const ResourceRequirementsSchema = z
  .array(ResourceRequirementSchema)
  .openapi('ResourceRequirements')

const DeviceCgroupPermissionSchema = z
  .enum(['READ', 'WRITE', 'MKNOD'])
  .openapi('DeviceCgroupPermission')

const DeviceCgroupPermissionsSchema = z
  .array(DeviceCgroupPermissionSchema)
  .openapi('DeviceCgroupPermissions')

const DeviceSchema = z
  .object({
    hostPath: StringSchema.and(
      z.any().openapi({ description: 'The path for the device on the host container instance.' }),
    ),
    containerPath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The path inside the container that's used to expose the host device. By default, the <code>hostPath</code> value is used.",
        }),
    ).exactOptional(),
    permissions: DeviceCgroupPermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The explicit permissions to provide to the container for the device. By default, the container has permissions for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['hostPath'],
    description:
      "<p>An object that represents a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>",
  })
  .openapi('Device')

const DevicesListSchema = z.array(DeviceSchema).openapi('DevicesList')

const TmpfsSchema = z
  .object({
    containerPath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The absolute file path in the container where the <code>tmpfs</code> volume is mounted.',
        }),
    ),
    size: IntegerSchema.and(
      z.any().openapi({ description: 'The size (in MiB) of the <code>tmpfs</code> volume.' }),
    ),
    mountOptions: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of <code>tmpfs</code> volume mount options.</p> <p>Valid values: "<code>defaults</code>" | "<code>ro</code>" | "<code>rw</code>" | "<code>suid</code>" | "<code>nosuid</code>" | "<code>dev</code>" | "<code>nodev</code>" | "<code>exec</code>" | "<code>noexec</code>" | "<code>sync</code>" | "<code>async</code>" | "<code>dirsync</code>" | "<code>remount</code>" | "<code>mand</code>" | "<code>nomand</code>" | "<code>atime</code>" | "<code>noatime</code>" | "<code>diratime</code>" | "<code>nodiratime</code>" | "<code>bind</code>" | "<code>rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime</code>" | "<code>norelatime</code>" | "<code>strictatime</code>" | "<code>nostrictatime</code>" | "<code>mode</code>" | "<code>uid</code>" | "<code>gid</code>" | "<code>nr_inodes</code>" | "<code>nr_blocks</code>" | "<code>mpol</code>"</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['containerPath', 'size'],
    description:
      "<p>The container path, mount options, and size of the <code>tmpfs</code> mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>",
  })
  .openapi('Tmpfs')

const TmpfsListSchema = z.array(TmpfsSchema).openapi('TmpfsList')

const LinuxParametersSchema = z
  .object({
    devices: DevicesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Any of the host devices to expose to the container. This parameter maps to <code>Devices</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t provide it for these jobs.</p> </note>',
        }),
    ).exactOptional(),
    initProcessEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If true, run an <code>init</code> process inside the container that forwards signals and reaps processes. This parameter maps to the <code>--init</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep "Server API version"</code> ',
        }),
    ).exactOptional(),
    sharedMemorySize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter maps to the <code>--shm-size</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t provide it for these jobs.</p> </note>',
        }),
    ).exactOptional(),
    tmpfs: TmpfsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The container path, mount options, and size (in MiB) of the <code>tmpfs</code> mount. This parameter maps to the <code>--tmpfs</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t provide this parameter for this resource type.</p> </note>',
        }),
    ).exactOptional(),
    maxSwap: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total amount of swap memory (in MiB) a container can use. This parameter is translated to the <code>--memory-swap</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a> where the value is the sum of the container memory plus the <code>maxSwap</code> value. For more information, see <a href=\"https://docs.docker.com/config/containers/resource_constraints/#--memory-swap-details\"> <code>--memory-swap</code> details</a> in the Docker documentation.</p> <p>If a <code>maxSwap</code> value of <code>0</code> is specified, the container doesn't use swap. Accepted values are <code>0</code> or any positive integer. If the <code>maxSwap</code> parameter is omitted, the container doesn't use the swap configuration for the container instance that it's running on. A <code>maxSwap</code> value must be set for the <code>swappiness</code> parameter to be used.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs.</p> </note>",
        }),
    ).exactOptional(),
    swappiness: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>You can use this parameter to tune a container's memory swappiness behavior. A <code>swappiness</code> value of <code>0</code> causes swapping to not occur unless absolutely necessary. A <code>swappiness</code> value of <code>100</code> causes pages to be swapped aggressively. Valid values are whole numbers between <code>0</code> and <code>100</code>. If the <code>swappiness</code> parameter isn't specified, a default value of <code>60</code> is used. If a value isn't specified for <code>maxSwap</code>, then this parameter is ignored. If <code>maxSwap</code> is set to 0, the container doesn't use swap. This parameter maps to the <code>--memory-swappiness</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <p>Consider the following when you use a per-container swap configuration.</p> <ul> <li> <p>Swap space must be enabled and allocated on the container instance for the containers to use.</p> <note> <p>By default, the Amazon ECS optimized AMIs don't have swap enabled. You must enable swap on the instance to use this feature. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-swap-volumes.html\">Instance store swap volumes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> or <a href=\"http://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/\">How do I allocate memory to work as swap space in an Amazon EC2 instance by using a swap file?</a> </p> </note> </li> <li> <p>The swap space parameters are only supported for job definitions using EC2 resources.</p> </li> <li> <p>If the <code>maxSwap</code> and <code>swappiness</code> parameters are omitted from a job definition, each container has a default <code>swappiness</code> value of 60. Moreover, the total swap usage is limited to two times the memory reservation of the container.</p> </li> </ul> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Linux-specific modifications that are applied to the container, such as details for device mappings.',
    required: [],
  })
  .openapi('LinuxParameters')

const LogDriverSchema = z
  .enum(['json-file', 'syslog', 'journald', 'gelf', 'fluentd', 'awslogs', 'splunk'])
  .openapi('LogDriver')

const LogConfigurationOptionsMapSchema = z
  .record(z.string(), StringSchema)
  .openapi('LogConfigurationOptionsMap')

const SecretSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the secret.' })),
    valueFrom: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.</p> <note> <p>If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Region as the job you're launching, then you can use either the full Amazon Resource Name (ARN) or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.</p> </note>",
        }),
    ),
  })
  .openapi({
    required: ['name', 'valueFrom'],
    description:
      '<p>An object that represents the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.</p>',
  })
  .openapi('Secret')

const SecretListSchema = z.array(SecretSchema).openapi('SecretList')

const LogConfigurationSchema = z
  .object({
    logDriver: LogDriverSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The log driver to use for the container. The valid values that are listed for this parameter are log drivers that the Amazon ECS container agent can communicate with by default.</p> <p>The supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>, <code>syslog</code>, and <code>splunk</code>.</p> <note> <p>Jobs that are running on Fargate resources are restricted to the <code>awslogs</code> and <code>splunk</code> log drivers.</p> </note> <dl> <dt>awslogs</dt> <dd> <p>Specifies the Amazon CloudWatch Logs logging driver. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using_awslogs.html">Using the awslogs log driver</a> in the <i>Batch User Guide</i> and <a href="https://docs.docker.com/config/containers/logging/awslogs/">Amazon CloudWatch Logs logging driver</a> in the Docker documentation.</p> </dd> <dt>fluentd</dt> <dd> <p>Specifies the Fluentd logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/fluentd/">Fluentd logging driver</a> in the <i>Docker documentation</i>.</p> </dd> <dt>gelf</dt> <dd> <p>Specifies the Graylog Extended Format (GELF) logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/gelf/">Graylog Extended Format logging driver</a> in the <i>Docker documentation</i>.</p> </dd> <dt>journald</dt> <dd> <p>Specifies the journald logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/journald/">Journald logging driver</a> in the <i>Docker documentation</i>.</p> </dd> <dt>json-file</dt> <dd> <p>Specifies the JSON file logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/json-file/">JSON File logging driver</a> in the <i>Docker documentation</i>.</p> </dd> <dt>splunk</dt> <dd> <p>Specifies the Splunk logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/splunk/">Splunk logging driver</a> in the <i>Docker documentation</i>.</p> </dd> <dt>syslog</dt> <dd> <p>Specifies the syslog logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/syslog/">Syslog logging driver</a> in the <i>Docker documentation</i>.</p> </dd> </dl> <note> <p>If you have a custom driver that\'s not listed earlier that you want to work with the Amazon ECS container agent, you can fork the Amazon ECS container agent project that\'s <a href="https://github.com/aws/amazon-ecs-agent">available on GitHub</a> and customize it to work with that driver. We encourage you to submit pull requests for changes that you want to have included. However, Amazon Web Services doesn\'t currently support running modified copies of this software.</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep "Server API version"</code> </p>',
        }),
    ),
    options: LogConfigurationOptionsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep "Server API version"</code> ',
        }),
    ).exactOptional(),
    secretOptions: SecretListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secrets to pass to the log configuration. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['logDriver'],
    description: 'Log configuration options to send to a custom log driver for the container.',
  })
  .openapi('LogConfiguration')

const AssignPublicIpSchema = z.enum(['ENABLED', 'DISABLED']).openapi('AssignPublicIp')

const NetworkConfigurationSchema = z
  .object({
    assignPublicIp: AssignPublicIpSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the job has a public IP address. For a job that\'s running on Fargate resources in a private subnet to send outbound traffic to the internet (for example, to pull container images), the private subnet requires a NAT gateway be attached to route requests to the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Amazon ECS task networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. The default value is "<code>DISABLED</code>".',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.',
    required: [],
  })
  .openapi('NetworkConfiguration')

const FargatePlatformConfigurationSchema = z
  .object({
    platformVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Fargate platform version where the jobs are running. A platform version is specified only for jobs that are running on Fargate resources. If one isn\'t specified, the <code>LATEST</code> platform version is used by default. This uses a recent, approved version of the Fargate platform for compute resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.',
    required: [],
  })
  .openapi('FargatePlatformConfiguration')

const EphemeralStorageSchema = z
  .object({
    sizeInGiB: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is <code>21</code> GiB and the maximum supported value is <code>200</code> GiB.',
        }),
    ),
  })
  .openapi({
    required: ['sizeInGiB'],
    description:
      'The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.',
  })
  .openapi('EphemeralStorage')

const RuntimePlatformSchema = z
  .object({
    operatingSystemFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operating system for the compute environment. Valid values are: <code>LINUX</code> (default), <code>WINDOWS_SERVER_2019_CORE</code>, <code>WINDOWS_SERVER_2019_FULL</code>, <code>WINDOWS_SERVER_2022_CORE</code>, and <code>WINDOWS_SERVER_2022_FULL</code>.</p> <note> <p>The following parameters can’t be set for Windows containers: <code>linuxParameters</code>, <code>privileged</code>, <code>user</code>, <code>ulimits</code>, <code>readonlyRootFilesystem</code>, and <code>efsVolumeConfiguration</code>.</p> </note> <note> <p>The Batch Scheduler checks before registering a task definition with Fargate. If the job requires a Windows container and the first compute environment is <code>LINUX</code>, the compute environment is skipped and the next is checked until a Windows-based compute environment is found.</p> </note> <note> <p>Fargate Spot is not supported for Windows-based containers on Fargate. A job queue will be blocked if a Fargate Windows job is submitted to a job queue with only Fargate Spot compute environments. However, you can attach both <code>FARGATE</code> and <code>FARGATE_SPOT</code> compute environments to the same job queue.</p> </note>',
        }),
    ).exactOptional(),
    cpuArchitecture: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The vCPU architecture. The default value is <code>X86_64</code>. Valid values are <code>X86_64</code> and <code>ARM64</code>.</p> <note> <p>This parameter must be set to <code>X86_64</code> for Windows containers.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the compute environment architecture for Batch jobs on Fargate.',
    required: [],
  })
  .openapi('RuntimePlatform')

const ContainerPropertiesSchema = z
  .object({
    image: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with <code> <i>repository-url</i>/<i>image</i>:<i>tag</i> </code>. It can be 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), underscores (_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>Docker image architecture must match the processor architecture of the compute resources that they\'re scheduled on. For example, ARM-based Docker images can only run on ARM-based compute resources.</p> </note> <ul> <li> <p>Images in Amazon ECR Public repositories use the full <code>registry/repository[:tag]</code> or <code>registry/repository[@digest]</code> naming conventions. For example, <code>public.ecr.aws/<i>registry_alias</i>/<i>my-web-app</i>:<i>latest</i> </code>.</p> </li> <li> <p>Images in Amazon ECR repositories use the full registry and repository URI (for example, <code>123456789012.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;</code>).</p> </li> <li> <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or <code>mongo</code>).</p> </li> <li> <p>Images in other repositories on Docker Hub are qualified with an organization name (for example, <code>amazon/amazon-ecs-agent</code>).</p> </li> <li> <p>Images in other online repositories are qualified further by a domain name (for example, <code>quay.io/assemblyline/ubuntu</code>).</p> </li> </ul>',
        }),
    ).exactOptional(),
    vcpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This parameter is deprecated, use <code>resourceRequirements</code> to specify the vCPU requirements for the job definition. It\'s not supported for jobs running on Fargate resources. For jobs running on EC2 resources, it specifies the number of vCPUs reserved for the job.</p> <p>Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The number of vCPUs must be specified but can be specified in several places. You must specify it at least once for each node.</p>This field is deprecated, use resourceRequirements instead.',
        }),
    ).exactOptional(),
    memory: IntegerSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "This parameter is deprecated, use <code>resourceRequirements</code> to specify the memory requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it specifies the memory hard limit (in MiB) for a container. If your container attempts to exceed the specified number, it's terminated. You must specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can be specified in several places. It must be specified for each node at least once.This field is deprecated, use resourceRequirements instead.",
        }),
    ).exactOptional(),
    command: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The command that\'s passed to the container. This parameter maps to <code>Cmd</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>.',
        }),
    ).exactOptional(),
    jobRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that the container can assume for Amazon Web Services permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM roles for tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.',
        }),
    ).exactOptional(),
    executionRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the execution role that Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM role</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    volumes: VolumesSchema.and(
      z.any().openapi({ description: 'A list of data volumes used in a job.' }),
    ).exactOptional(),
    environment: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <important> <p>We don\'t recommend using plaintext environment variables for sensitive information, such as credential data.</p> </important> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
        }),
    ).exactOptional(),
    mountPoints: MountPointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mount points for data volumes in your container. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.',
        }),
    ).exactOptional(),
    readonlyRootFilesystem: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this parameter is true, the container is given read-only access to its root file system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--read-only</code> option to <code>docker run</code>.',
        }),
    ).exactOptional(),
    privileged: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When this parameter is true, the container is given elevated permissions on the host container instance (similar to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--privileged</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The default value is false.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources and shouldn\'t be provided, or specified as false.</p> </note>',
        }),
    ).exactOptional(),
    ulimits: UlimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources and shouldn\'t be provided.</p> </note>',
        }),
    ).exactOptional(),
    user: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name to use inside the container. This parameter maps to <code>User</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.',
        }),
    ).exactOptional(),
    instanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The instance type to use for a multi-node parallel job. All node groups in a multi-node parallel job must use the same instance type.</p> <note> <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.</p> </note>",
        }),
    ).exactOptional(),
    resourceRequirements: ResourceRequirementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type and amount of resources to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.',
        }),
    ).exactOptional(),
    linuxParameters: LinuxParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Linux-specific modifications that are applied to the container, such as details for device mappings.',
        }),
    ).exactOptional(),
    logConfiguration: LogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The log configuration specification for the container.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. By default, containers use the same logging driver that the Docker daemon uses. However the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <note> <p>Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type).</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep "Server API version"</code> </p> <note> <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    secrets: SecretListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secrets for the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    networkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.',
        }),
    ).exactOptional(),
    fargatePlatformConfiguration: FargatePlatformConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.',
        }),
    ).exactOptional(),
    ephemeralStorage: EphemeralStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.',
        }),
    ).exactOptional(),
    runtimePlatform: RuntimePlatformSchema.exactOptional(),
  })
  .openapi({
    description:
      "Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.",
    required: [],
  })
  .openapi('ContainerProperties')

const JobTimeoutSchema = z
  .object({
    attemptDurationSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The job timeout time (in seconds) that's measured from the job attempt's <code>startedAt</code> timestamp. After this time passes, Batch terminates your jobs if they aren't finished. The minimum value for the timeout is 60 seconds.</p> <p>For array jobs, the timeout applies to the child jobs, not to the parent array job.</p> <p>For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the individual nodes.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents a job timeout configuration.', required: [] })
  .openapi('JobTimeout')

const NodeRangePropertySchema = z
  .object({
    targetNodes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The range of nodes, using node index values. A range of <code>0:3</code> indicates nodes with index values of <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>), then <code>0</code> is used to start the range. If the ending range value is omitted (<code>n:</code>), then the highest possible node index is used to end the range. Your accumulative node ranges must account for all nodes (<code>0:n</code>). You can nest node ranges (for example, <code>0:10</code> and <code>4:5</code>). In this case, the <code>4:5</code> range properties override the <code>0:10</code> properties.',
        }),
    ),
    container: ContainerPropertiesSchema.and(
      z.any().openapi({ description: 'The container details for the node range.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['targetNodes'],
    description:
      'An object that represents the properties of the node range for a multi-node parallel job.',
  })
  .openapi('NodeRangeProperty')

const NodeRangePropertiesSchema = z.array(NodeRangePropertySchema).openapi('NodeRangeProperties')

const NodePropertiesSchema = z
  .object({
    numNodes: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of nodes that are associated with a multi-node parallel job.',
        }),
    ),
    mainNode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.',
        }),
    ),
    nodeRangeProperties: NodeRangePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of node ranges and their properties that are associated with a multi-node parallel job.',
        }),
    ),
  })
  .openapi({
    required: ['numNodes', 'mainNode', 'nodeRangeProperties'],
    description:
      "<p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note>",
  })
  .openapi('NodeProperties')

const PlatformCapabilitySchema = z.enum(['EC2', 'FARGATE']).openapi('PlatformCapability')

const PlatformCapabilityListSchema = z
  .array(PlatformCapabilitySchema)
  .openapi('PlatformCapabilityList')

const EksContainerEnvironmentVariableSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the environment variable.' }),
    ),
    value: StringSchema.and(
      z.any().openapi({ description: 'The value of the environment variable.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], description: 'An environment variable.' })
  .openapi('EksContainerEnvironmentVariable')

const EksContainerEnvironmentVariablesSchema = z
  .array(EksContainerEnvironmentVariableSchema)
  .openapi('EksContainerEnvironmentVariables')

const QuantitySchema = z.string().min(1).max(256).openapi('Quantity')

const EksLimitsSchema = z.record(z.string(), QuantitySchema).openapi('EksLimits')

const EksRequestsSchema = z.record(z.string(), QuantitySchema).openapi('EksRequests')

const EksContainerResourceRequirementsSchema = z
  .object({
    limits: EksLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type and quantity of the resources to reserve for the container. The values vary based on the <code>name</code> that's specified. Resources can be requested using either the <code>limits</code> or the <code>requests</code> objects.</p> <dl> <dt>memory</dt> <dd> <p>The memory hard limit (in MiB) for the container, using whole integers, with a \"Mi\" suffix. If your container attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory for a job. <code>memory</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>memory</code> is specified in both places, then the value that's specified in <code>limits</code> must be equal to the value that's specified in <code>requests</code>.</p> <note> <p>To maximize your resource utilization, provide your jobs with as much memory as possible for the specific instance type that you are using. To learn how, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html\">Memory management</a> in the <i>Batch User Guide</i>.</p> </note> </dd> <dt>cpu</dt> <dd> <p>The number of CPUs that's reserved for the container. Values must be an even multiple of <code>0.25</code>. <code>cpu</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>cpu</code> is specified in both places, then the value that's specified in <code>limits</code> must be at least as large as the value that's specified in <code>requests</code>.</p> </dd> <dt>nvidia.com/gpu</dt> <dd> <p>The number of GPUs that's reserved for the container. Values must be a whole integer. <code>memory</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>memory</code> is specified in both places, then the value that's specified in <code>limits</code> must be equal to the value that's specified in <code>requests</code>.</p> </dd> </dl>",
        }),
    ).exactOptional(),
    requests: EksRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type and quantity of the resources to request for the container. The values vary based on the <code>name</code> that's specified. Resources can be requested by using either the <code>limits</code> or the <code>requests</code> objects.</p> <dl> <dt>memory</dt> <dd> <p>The memory hard limit (in MiB) for the container, using whole integers, with a \"Mi\" suffix. If your container attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory for a job. <code>memory</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>memory</code> is specified in both, then the value that's specified in <code>limits</code> must be equal to the value that's specified in <code>requests</code>.</p> <note> <p>If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html\">Memory management</a> in the <i>Batch User Guide</i>.</p> </note> </dd> <dt>cpu</dt> <dd> <p>The number of CPUs that are reserved for the container. Values must be an even multiple of <code>0.25</code>. <code>cpu</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>cpu</code> is specified in both, then the value that's specified in <code>limits</code> must be at least as large as the value that's specified in <code>requests</code>.</p> </dd> <dt>nvidia.com/gpu</dt> <dd> <p>The number of GPUs that are reserved for the container. Values must be a whole integer. <code>nvidia.com/gpu</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>nvidia.com/gpu</code> is specified in both, then the value that's specified in <code>limits</code> must be equal to the value that's specified in <code>requests</code>.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The type and amount of resources to assign to a container. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>.',
    required: [],
  })
  .openapi('EksContainerResourceRequirements')

const EksContainerVolumeMountSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name the volume mount. This must match the name of one of the volumes in the pod.',
        }),
    ).exactOptional(),
    mountPath: StringSchema.and(
      z.any().openapi({ description: 'The path on the container where the volume is mounted.' }),
    ).exactOptional(),
    readOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is <code>true</code>, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.',
    required: [],
  })
  .openapi('EksContainerVolumeMount')

const EksContainerVolumeMountsSchema = z
  .array(EksContainerVolumeMountSchema)
  .openapi('EksContainerVolumeMounts')

const LongSchema = z.int().openapi('Long')

const EksContainerSecurityContextSchema = z
  .object({
    runAsUser: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this parameter is specified, the container is run as the specified user ID (<code>uid</code>). If this parameter isn\'t specified, the default is the user that\'s specified in the image metadata. This parameter maps to <code>RunAsUser</code> and <code>MustRanAs</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users and groups pod security policies</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    runAsGroup: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this parameter is specified, the container is run as the specified group ID (<code>gid</code>). If this parameter isn\'t specified, the default is the group that\'s specified in the image metadata. This parameter maps to <code>RunAsGroup</code> and <code>MustRunAs</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users and groups pod security policies</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    privileged: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this parameter is <code>true</code>, the container is given elevated permissions on the host container instance. The level of permissions are similar to the <code>root</code> user permissions. The default value is <code>false</code>. This parameter maps to <code>privileged</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged">Privileged pod security policies</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    readOnlyRootFilesystem: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this parameter is <code>true</code>, the container is given read-only access to its root file system. The default value is <code>false</code>. This parameter maps to <code>ReadOnlyRootFilesystem</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems">Volumes and file systems pod security policies</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    runAsNonRoot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this parameter is specified, the container is run as a user with a <code>uid</code> other than 0. If this parameter isn\'t specified, so such rule is enforced. This parameter maps to <code>RunAsUser</code> and <code>MustRunAsNonRoot</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users and groups pod security policies</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a pod or container</a> in the <i>Kubernetes documentation</i>.',
    required: [],
  })
  .openapi('EksContainerSecurityContext')

const EksContainerSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container. If the name isn\'t specified, the default name "<code>Default</code>" is used. Each container in a pod must have a unique name.',
        }),
    ).exactOptional(),
    image: StringSchema.and(
      z.any().openapi({ description: 'The Docker image used to start the container.' }),
    ),
    imagePullPolicy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image pull policy for the container. Supported values are <code>Always</code>, <code>IfNotPresent</code>, and <code>Never</code>. This parameter defaults to <code>IfNotPresent</code>. However, if the <code>:latest</code> tag is specified, it defaults to <code>Always</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/containers/images/#updating-images">Updating images</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    command: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The entrypoint for the container. This isn\'t run within a shell. If this isn\'t specified, the <code>ENTRYPOINT</code> of the container image is used. Environment variable references are expanded using the container\'s environment.</p> <p>If the referenced environment variable doesn\'t exist, the reference in the command isn\'t changed. For example, if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code> environment variable doesn\'t exist, the command string will remain "<code>$(NAME1)</code>." <code>$$</code> is replaced with <code>$</code> and the resulting string isn\'t expanded. For example, <code>$$(VAR_NAME)</code> will be passed as <code>$(VAR_NAME)</code> whether or not the <code>VAR_NAME</code> environment variable exists. The entrypoint can\'t be updated. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">ENTRYPOINT</a> in the <i>Dockerfile reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command and arguments for a container</a> and <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> in the <i>Kubernetes documentation</i>.</p>',
        }),
    ).exactOptional(),
    args: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of arguments to the entrypoint. If this isn\'t specified, the <code>CMD</code> of the container image is used. This corresponds to the <code>args</code> member in the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> portion of the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/">Pod</a> in Kubernetes. Environment variable references are expanded using the container\'s environment.</p> <p>If the referenced environment variable doesn\'t exist, the reference in the command isn\'t changed. For example, if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code> environment variable doesn\'t exist, the command string will remain "<code>$(NAME1)</code>." <code>$$</code> is replaced with <code>$</code>, and the resulting string isn\'t expanded. For example, <code>$$(VAR_NAME)</code> is passed as <code>$(VAR_NAME)</code> whether or not the <code>VAR_NAME</code> environment variable exists. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">CMD</a> in the <i>Dockerfile reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command and arguments for a pod</a> in the <i>Kubernetes documentation</i>.</p>',
        }),
    ).exactOptional(),
    env: EksContainerEnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The environment variables to pass to a container.</p> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
        }),
    ).exactOptional(),
    resources: EksContainerResourceRequirementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type and amount of resources to assign to a container. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    volumeMounts: EksContainerVolumeMountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The volume mounts for the container. Batch supports <code>emptyDir</code>, <code>hostPath</code>, and <code>secret</code> volume types. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    securityContext: EksContainerSecurityContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a pod or container</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['image'],
    description:
      "EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions.",
  })
  .openapi('EksContainer')

const EksContainersSchema = z.array(EksContainerSchema).openapi('EksContainers')

const EksHostPathSchema = z
  .object({
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path of the file or directory on the host to mount into containers on the pod.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the configuration of a Kubernetes <code>hostPath</code> volume. A <code>hostPath</code> volume mounts an existing file or directory from the host node\'s filesystem into your pod. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes documentation</i>.',
    required: [],
  })
  .openapi('EksHostPath')

const EksEmptyDirSchema = z
  .object({
    medium: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The medium to store the volume. The default value is an empty string, which uses the storage of the node.</p> <dl> <dt>""</dt> <dd> <p> <b>(Default)</b> Use the disk storage of the node.</p> </dd> <dt>"Memory"</dt> <dd> <p>Use the <code>tmpfs</code> volume that\'s backed by the RAM of the node. Contents of the volume are lost when the node reboots, and any storage on the volume counts against the container\'s memory limit.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    sizeLimit: QuantitySchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum size of the volume. By default, there's no maximum size defined.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. An <code>emptyDir</code> volume is first created when a pod is assigned to a node. It exists as long as that pod is running on that node. The <code>emptyDir</code> volume is initially empty. All containers in the pod can read and write the files in the <code>emptyDir</code> volume. However, the <code>emptyDir</code> volume can be mounted at the same or different paths in each container. When a pod is removed from a node for any reason, the data in the <code>emptyDir</code> is deleted permanently. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the <i>Kubernetes documentation</i>.',
    required: [],
  })
  .openapi('EksEmptyDir')

const EksSecretSchema = z
  .object({
    secretName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the secret. The name must be allowed as a DNS subdomain name. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names">DNS subdomain names</a> in the <i>Kubernetes documentation</i>.',
        }),
    ),
    optional: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "Specifies whether the secret or the secret's keys must be defined.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['secretName'],
    description:
      'Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes documentation</i>.',
  })
  .openapi('EksSecret')

const EksVolumeSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the volume. The name must be allowed as a DNS subdomain name. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names">DNS subdomain names</a> in the <i>Kubernetes documentation</i>.',
        }),
    ),
    hostPath: EksHostPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the configuration of a Kubernetes <code>hostPath</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    emptyDir: EksEmptyDirSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    secret: EksSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    description: 'Specifies an Amazon EKS volume for a job definition.',
  })
  .openapi('EksVolume')

const EksVolumesSchema = z.array(EksVolumeSchema).openapi('EksVolumes')

const EksLabelsMapSchema = z.record(z.string(), StringSchema).openapi('EksLabelsMap')

const EksMetadataSchema = z
  .object({
    labels: EksLabelsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs used to identify, sort, and organize cube resources. Can contain up to 63 uppercase letters, lowercase letters, numbers, hyphens (-), and underscores (_). Labels can be added or modified at any time. Each resource can have multiple labels, but each key must be unique for a given object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>.',
    required: [],
  })
  .openapi('EksMetadata')

const EksPodPropertiesSchema = z
  .object({
    serviceAccountName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service account that\'s used to run the pod. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html">Kubernetes service accounts</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html">Configure a Kubernetes service account to assume an IAM role</a> in the <i>Amazon EKS User Guide</i> and <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/">Configure service accounts for pods</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    hostNetwork: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates if the pod uses the hosts\' network IP address. The default value is <code>true</code>. Setting this to <code>false</code> enables the Kubernetes pod networking model. Most Batch workloads are egress-only and don\'t require the overhead of IP allocation for each pod for incoming connections. For more information, see <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces">Host namespaces</a> and <a href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking">Pod networking</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    dnsPolicy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS policy for the pod. The default value is <code>ClusterFirst</code>. If the <code>hostNetwork</code> parameter is not specified, the default is <code>ClusterFirstWithHostNet</code>. <code>ClusterFirst</code> indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy">Pod\'s DNS policy</a> in the <i>Kubernetes documentation</i>.</p> <p>Valid values: <code>Default</code> | <code>ClusterFirst</code> | <code>ClusterFirstWithHostNet</code> </p>',
        }),
    ).exactOptional(),
    containers: EksContainersSchema.and(
      z
        .any()
        .openapi({
          description: "The properties of the container that's used on the Amazon EKS pod.",
        }),
    ).exactOptional(),
    volumes: EksVolumesSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the volumes for a job definition that uses Amazon EKS resources.',
        }),
    ).exactOptional(),
    metadata: EksMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata about the Kubernetes pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The properties for the pod.', required: [] })
  .openapi('EksPodProperties')

const EksPropertiesSchema = z
  .object({
    podProperties: EksPodPropertiesSchema.and(
      z.any().openapi({ description: 'The properties for the Kubernetes pod resources of a job.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains the properties for the Kubernetes resources of a job.',
    required: [],
  })
  .openapi('EksProperties')

const JobDefinitionSchema = z
  .object({
    jobDefinitionName: StringSchema.and(
      z.any().openapi({ description: 'The name of the job definition.' }),
    ),
    jobDefinitionArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the job definition.' }),
    ),
    revision: IntegerSchema.and(
      z.any().openapi({ description: 'The revision of the job definition.' }),
    ),
    status: StringSchema.and(
      z.any().openapi({ description: 'The status of the job definition.' }),
    ).exactOptional(),
    type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of job definition. It\'s either <code>container</code> or <code>multinode</code>. If the job is run on Fargate resources, then <code>multinode</code> isn\'t supported. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.',
        }),
    ),
    schedulingPriority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.',
        }),
    ).exactOptional(),
    parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html">Job definition parameters</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    retryStrategy: RetryStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry strategy to use for failed jobs that are submitted with this job definition.',
        }),
    ).exactOptional(),
    containerProperties: ContainerPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object with various properties specific to Amazon ECS based jobs. Valid values are <code>containerProperties</code>, <code>eksProperties</code>, and <code>nodeProperties</code>. Only one can be specified.',
        }),
    ).exactOptional(),
    timeout: JobTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            "The timeout time for jobs that are submitted with this job definition. After the amount of time you specify passes, Batch terminates your jobs if they aren't finished.",
        }),
    ).exactOptional(),
    nodeProperties: NodePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An object with various properties that are specific to multi-node parallel jobs. Valid values are <code>containerProperties</code>, <code>eksProperties</code>, and <code>nodeProperties</code>. Only one can be specified.</p> <note> <p>If the job runs on Fargate resources, don't specify <code>nodeProperties</code>. Use <code>containerProperties</code> instead.</p> </note>",
        }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z.any().openapi({ description: 'The tags that are applied to the job definition.' }),
    ).exactOptional(),
    propagateTags: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.",
        }),
    ).exactOptional(),
    platformCapabilities: PlatformCapabilityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. Jobs run on Fargate resources specify <code>FARGATE</code>.',
        }),
    ).exactOptional(),
    eksProperties: EksPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object with various properties that are specific to Amazon EKS based jobs. Valid values are <code>containerProperties</code>, <code>eksProperties</code>, and <code>nodeProperties</code>. Only one can be specified.',
        }),
    ).exactOptional(),
    containerOrchestrationType: OrchestrationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The orchestration type of the compute environment. The valid values are <code>ECS</code> (default) or <code>EKS</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobDefinitionName', 'jobDefinitionArn', 'revision', 'type'],
    description: 'An object that represents an Batch job definition.',
  })
  .openapi('JobDefinition')

const JobDefinitionListSchema = z.array(JobDefinitionSchema).openapi('JobDefinitionList')

const DescribeJobDefinitionsResponseSchema = z
  .object({
    jobDefinitions: JobDefinitionListSchema.and(
      z.any().openapi({ description: 'The list of job definitions.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeJobDefinitions</code> request. When the results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      jobDefinitions: [
        {
          type: 'container',
          containerProperties: {
            command: ['sleep', '60'],
            environment: [],
            image: 'busybox',
            mountPoints: [],
            resourceRequirements: [
              { type: 'MEMORY', value: '128' },
              { type: 'VCPU', value: '1' },
            ],
            ulimits: [],
            volumes: [],
          },
          jobDefinitionArn: 'arn:aws:batch:us-east-1:012345678910:job-definition/sleep60:1',
          jobDefinitionName: 'sleep60',
          revision: 1,
          status: 'ACTIVE',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeJobDefinitionsResponse')

const JQStateSchema = z.enum(['ENABLED', 'DISABLED']).openapi('JQState')

const JQStatusSchema = z
  .enum(['CREATING', 'UPDATING', 'DELETING', 'DELETED', 'VALID', 'INVALID'])
  .openapi('JQStatus')

const ComputeEnvironmentOrdersSchema = z
  .array(ComputeEnvironmentOrderSchema)
  .openapi('ComputeEnvironmentOrders')

const JobQueueDetailSchema = z
  .object({
    jobQueueName: StringSchema.and(z.any().openapi({ description: 'The job queue name.' })),
    jobQueueArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job queue.' }),
    ),
    state: JQStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the ability of the queue to accept new jobs. If the job queue state is <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.",
        }),
    ),
    schedulingPolicyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the scheduling policy. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. For example, <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.',
        }),
    ).exactOptional(),
    status: JQStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the job queue (for example, <code>CREATING</code> or <code>VALID</code>).',
        }),
    ).exactOptional(),
    statusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short, human-readable string to provide additional details for the current status of the job queue.',
        }),
    ).exactOptional(),
    priority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.",
        }),
    ),
    computeEnvironmentOrder: ComputeEnvironmentOrdersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute environments that are attached to the job queue and the order that job placement is preferred. Compute environments are selected for job placement in ascending order.',
        }),
    ),
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that are applied to the job queue. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobQueueName', 'jobQueueArn', 'state', 'priority', 'computeEnvironmentOrder'],
    description: 'An object that represents the details for an Batch job queue.',
  })
  .openapi('JobQueueDetail')

const JobQueueDetailListSchema = z.array(JobQueueDetailSchema).openapi('JobQueueDetailList')

const DescribeJobQueuesResponseSchema = z
  .object({
    jobQueues: JobQueueDetailListSchema.and(
      z.any().openapi({ description: 'The list of job queues.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeJobQueues</code> request. When the results of a <code>DescribeJobQueues</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      jobQueues: [
        {
          computeEnvironmentOrder: [
            {
              computeEnvironment:
                'arn:aws:batch:us-east-1:012345678910:compute-environment/C4OnDemand',
              order: 1,
            },
          ],
          jobQueueArn: 'arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority',
          jobQueueName: 'HighPriority',
          priority: 1,
          state: 'ENABLED',
          status: 'VALID',
          statusReason: 'JobQueue Healthy',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeJobQueuesResponse')

const JobStatusSchema = z
  .enum(['SUBMITTED', 'PENDING', 'RUNNABLE', 'STARTING', 'RUNNING', 'SUCCEEDED', 'FAILED'])
  .openapi('JobStatus')

const NetworkInterfaceSchema = z
  .object({
    attachmentId: StringSchema.and(
      z.any().openapi({ description: 'The attachment ID for the network interface.' }),
    ).exactOptional(),
    ipv6Address: StringSchema.and(
      z.any().openapi({ description: 'The private IPv6 address for the network interface.' }),
    ).exactOptional(),
    privateIpv4Address: StringSchema.and(
      z.any().openapi({ description: 'The private IPv4 address for the network interface.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the elastic network interface for a multi-node parallel job node.',
    required: [],
  })
  .openapi('NetworkInterface')

const NetworkInterfaceListSchema = z.array(NetworkInterfaceSchema).openapi('NetworkInterfaceList')

const AttemptContainerDetailSchema = z
  .object({
    containerInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.',
        }),
    ).exactOptional(),
    taskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the job attempt. Each container attempt receives a task ARN when they reach the <code>STARTING</code> status.",
        }),
    ).exactOptional(),
    exitCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exit code for the job attempt. A non-zero exit code is considered failed.',
        }),
    ).exactOptional(),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short (255 max characters) human-readable string to provide additional details for a running or stopped container.',
        }),
    ).exactOptional(),
    logStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the <code>RUNNING</code> status.",
        }),
    ).exactOptional(),
    networkInterfaces: NetworkInterfaceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The network interfaces that are associated with the job attempt.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that represents the details of a container that's part of a job attempt.",
    required: [],
  })
  .openapi('AttemptContainerDetail')

const AttemptDetailSchema = z
  .object({
    container: AttemptContainerDetailSchema.and(
      z.any().openapi({ description: 'The details for the container in this job attempt.' }),
    ).exactOptional(),
    startedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).',
        }),
    ).exactOptional(),
    stoppedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp (in milliseconds) for when the attempt was stopped (when the attempt transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).',
        }),
    ).exactOptional(),
    statusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short, human-readable string to provide additional details for the current status of the job attempt.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents a job attempt.', required: [] })
  .openapi('AttemptDetail')

const AttemptDetailsSchema = z.array(AttemptDetailSchema).openapi('AttemptDetails')

const JobDependencySchema: z.ZodType<JobDependencyType> = z
  .lazy(() =>
    z
      .object({
        jobId: StringSchema.and(
          z
            .any()
            .openapi({
              description: "The job ID of the Batch job that's associated with this dependency.",
            }),
        ).exactOptional(),
        type: ArrayJobDependencySchema.and(
          z.any().openapi({ description: 'The type of the job dependency.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'An object that represents an Batch job dependency.', required: [] }),
  )
  .openapi('JobDependency')

const JobDependencyListSchema = z.array(JobDependencySchema).openapi('JobDependencyList')

const ContainerDetailSchema = z
  .object({
    image: StringSchema.and(
      z.any().openapi({ description: 'The image used to start the container.' }),
    ).exactOptional(),
    vcpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of vCPUs reserved for the container. For jobs that run on EC2 resources, you can specify the vCPU requirement for the job using <code>resourceRequirements</code>, but you can\'t specify the vCPU requirements in both the <code>vcpus</code> and <code>resourceRequirements</code> object. This parameter maps to <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. You must specify at least one vCPU. This is required but can be specified in several places. It must be specified for each node at least once.</p> <note> <p>This parameter isn\'t applicable to jobs that run on Fargate resources. For jobs that run on Fargate resources, you must specify the vCPU requirement for the job using <code>resourceRequirements</code>.</p> </note>',
        }),
    ).exactOptional(),
    memory: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "For jobs running on EC2 resources that didn't specify memory requirements using <code>resourceRequirements</code>, the number of MiB of memory reserved for the job. For other jobs, including all run on Fargate resources, see <code>resourceRequirements</code>.",
        }),
    ).exactOptional(),
    command: StringListSchema.and(
      z.any().openapi({ description: "The command that's passed to the container." }),
    ).exactOptional(),
    jobRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) that's associated with the job when run.",
        }),
    ).exactOptional(),
    executionRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the execution role that Batch can assume. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM role</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    volumes: VolumesSchema.and(
      z.any().openapi({ description: 'A list of volumes that are associated with the job.' }),
    ).exactOptional(),
    environment: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The environment variables to pass to a container.</p> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
        }),
    ).exactOptional(),
    mountPoints: MountPointsSchema.and(
      z.any().openapi({ description: 'The mount points for data volumes in your container.' }),
    ).exactOptional(),
    readonlyRootFilesystem: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this parameter is true, the container is given read-only access to its root file system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--read-only</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.',
        }),
    ).exactOptional(),
    ulimits: UlimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of <code>ulimit</code> values to set in the container. This parameter maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources.</p> </note>',
        }),
    ).exactOptional(),
    privileged: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>When this parameter is true, the container is given elevated permissions on the host container instance (similar to the <code>root</code> user). The default value is <code>false</code>.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided, or specified as <code>false</code>.</p> </note>",
        }),
    ).exactOptional(),
    user: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name to use inside the container. This parameter maps to <code>User</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.',
        }),
    ).exactOptional(),
    exitCode: IntegerSchema.and(
      z.any().openapi({ description: 'The exit code to return upon completion.' }),
    ).exactOptional(),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short (255 max characters) human-readable string to provide additional details for a running or stopped container.',
        }),
    ).exactOptional(),
    containerInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the container instance that the container is running on.',
        }),
    ).exactOptional(),
    taskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the container job. Each container attempt receives a task ARN when they reach the <code>STARTING</code> status.",
        }),
    ).exactOptional(),
    logStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the Amazon CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the <code>RUNNING</code> status.",
        }),
    ).exactOptional(),
    instanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The instance type of the underlying host infrastructure of a multi-node parallel job.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources.</p> </note>",
        }),
    ).exactOptional(),
    networkInterfaces: NetworkInterfaceListSchema.and(
      z.any().openapi({ description: 'The network interfaces that are associated with the job.' }),
    ).exactOptional(),
    resourceRequirements: ResourceRequirementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type and amount of resources to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.',
        }),
    ).exactOptional(),
    linuxParameters: LinuxParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Linux-specific modifications that are applied to the container, such as details for device mappings.',
        }),
    ).exactOptional(),
    logConfiguration: LogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The log configuration specification for the container.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance. Or, alternatively, it must be configured on a different log server for remote logging options. For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <note> <p>Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type). Additional log drivers might be available in future releases of the Amazon ECS container agent.</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep "Server API version"</code> </p> <note> <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    secrets: SecretListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    networkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.',
        }),
    ).exactOptional(),
    fargatePlatformConfiguration: FargatePlatformConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.',
        }),
    ).exactOptional(),
    ephemeralStorage: EphemeralStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of ephemeral storage allocated for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.',
        }),
    ).exactOptional(),
    runtimePlatform: RuntimePlatformSchema.exactOptional(),
  })
  .openapi({
    description: "An object that represents the details of a container that's part of a job.",
    required: [],
  })
  .openapi('ContainerDetail')

const NodeDetailsSchema = z
  .object({
    nodeIndex: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The node index for the node. Node index numbering starts at zero. This index is also available on the node with the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.',
        }),
    ).exactOptional(),
    isMainNode: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the current node is the main node for a multi-node parallel job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the details of a multi-node parallel job node.',
    required: [],
  })
  .openapi('NodeDetails')

const ArrayJobStatusSummarySchema = z
  .record(z.string(), IntegerSchema)
  .openapi('ArrayJobStatusSummary')

const ArrayPropertiesDetailSchema = z
  .object({
    statusSummary: ArrayJobStatusSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'A summary of the number of array job children in each available job status. This parameter is returned for parent array jobs.',
        }),
    ).exactOptional(),
    size: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the array job. This parameter is returned for parent array jobs.',
        }),
    ).exactOptional(),
    index: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job index within the array that's associated with this job. This parameter is returned for array job children.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the array properties of a job.',
    required: [],
  })
  .openapi('ArrayPropertiesDetail')

const EksContainerDetailSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container. If the name isn\'t specified, the default name "<code>Default</code>" is used. Each container in a pod must have a unique name.',
        }),
    ).exactOptional(),
    image: StringSchema.and(
      z.any().openapi({ description: 'The Docker image used to start the container.' }),
    ).exactOptional(),
    imagePullPolicy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image pull policy for the container. Supported values are <code>Always</code>, <code>IfNotPresent</code>, and <code>Never</code>. This parameter defaults to <code>Always</code> if the <code>:latest</code> tag is specified, <code>IfNotPresent</code> otherwise. For more information, see <a href="https://kubernetes.io/docs/concepts/containers/images/#updating-images">Updating images</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    command: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entrypoint for the container. For more information, see <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    args: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of arguments to the entrypoint. If this isn\'t specified, the <code>CMD</code> of the container image is used. This corresponds to the <code>args</code> member in the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> portion of the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/">Pod</a> in Kubernetes. Environment variable references are expanded using the container\'s environment.</p> <p>If the referenced environment variable doesn\'t exist, the reference in the command isn\'t changed. For example, if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code> environment variable doesn\'t exist, the command string will remain "<code>$(NAME1)</code>". <code>$$</code> is replaced with <code>$</code> and the resulting string isn\'t expanded. For example, <code>$$(VAR_NAME)</code> is passed as <code>$(VAR_NAME)</code> whether or not the <code>VAR_NAME</code> environment variable exists. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">CMD</a> in the <i>Dockerfile reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command and arguments for a pod</a> in the <i>Kubernetes documentation</i>.</p>',
        }),
    ).exactOptional(),
    env: EksContainerEnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The environment variables to pass to a container.</p> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
        }),
    ).exactOptional(),
    resources: EksContainerResourceRequirementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type and amount of resources to assign to a container. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    exitCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exit code for the job attempt. A non-zero exit code is considered failed.',
        }),
    ).exactOptional(),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short human-readable string to provide additional details for a running or stopped container. It can be up to 255 characters long.',
        }),
    ).exactOptional(),
    volumeMounts: EksContainerVolumeMountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The volume mounts for the container. Batch supports <code>emptyDir</code>, <code>hostPath</code>, and <code>secret</code> volume types. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    securityContext: EksContainerSecurityContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a pod or container</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details for container properties that are returned by <code>DescribeJobs</code> for jobs that use Amazon EKS.',
    required: [],
  })
  .openapi('EksContainerDetail')

const EksContainerDetailsSchema = z.array(EksContainerDetailSchema).openapi('EksContainerDetails')

const EksPodPropertiesDetailSchema = z
  .object({
    serviceAccountName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service account that\'s used to run the pod. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html">Kubernetes service accounts</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html">Configure a Kubernetes service account to assume an IAM role</a> in the <i>Amazon EKS User Guide</i> and <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/">Configure service accounts for pods</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    hostNetwork: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates if the pod uses the hosts\' network IP address. The default value is <code>true</code>. Setting this to <code>false</code> enables the Kubernetes pod networking model. Most Batch workloads are egress-only and don\'t require the overhead of IP allocation for each pod for incoming connections. For more information, see <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces">Host namespaces</a> and <a href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking">Pod networking</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    dnsPolicy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS policy for the pod. The default value is <code>ClusterFirst</code>. If the <code>hostNetwork</code> parameter is not specified, the default is <code>ClusterFirstWithHostNet</code>. <code>ClusterFirst</code> indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. If no value was specified for <code>dnsPolicy</code> in the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html">RegisterJobDefinition</a> API operation, then no value will be returned for <code>dnsPolicy</code> by either of <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html">DescribeJobDefinitions</a> or <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html">DescribeJobs</a> API operations. The pod spec setting will contain either <code>ClusterFirst</code> or <code>ClusterFirstWithHostNet</code>, depending on the value of the <code>hostNetwork</code> parameter. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy">Pod\'s DNS policy</a> in the <i>Kubernetes documentation</i>.</p> <p>Valid values: <code>Default</code> | <code>ClusterFirst</code> | <code>ClusterFirstWithHostNet</code> </p>',
        }),
    ).exactOptional(),
    containers: EksContainerDetailsSchema.and(
      z
        .any()
        .openapi({
          description: "The properties of the container that's used on the Amazon EKS pod.",
        }),
    ).exactOptional(),
    volumes: EksVolumesSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the volumes for a job definition using Amazon EKS resources.',
        }),
    ).exactOptional(),
    podName: StringSchema.and(
      z.any().openapi({ description: 'The name of the pod for this job.' }),
    ).exactOptional(),
    nodeName: StringSchema.and(
      z.any().openapi({ description: 'The name of the node for this job.' }),
    ).exactOptional(),
    metadata: EksMetadataSchema.exactOptional(),
  })
  .openapi({ description: 'The details for the pod.', required: [] })
  .openapi('EksPodPropertiesDetail')

const EksPropertiesDetailSchema = z
  .object({
    podProperties: EksPodPropertiesDetailSchema.and(
      z.any().openapi({ description: 'The properties for the Kubernetes pod resources of a job.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains the details for the Kubernetes resources of a job.',
    required: [],
  })
  .openapi('EksPropertiesDetail')

const EksAttemptContainerDetailSchema = z
  .object({
    exitCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exit code for the job attempt. A non-zero exit code is considered failed.',
        }),
    ).exactOptional(),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short (255 max characters) human-readable string to provide additional details for a running or stopped container.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the details for an attempt for a job attempt that an Amazon EKS container runs.',
    required: [],
  })
  .openapi('EksAttemptContainerDetail')

const EksAttemptContainerDetailsSchema = z
  .array(EksAttemptContainerDetailSchema)
  .openapi('EksAttemptContainerDetails')

const EksAttemptDetailSchema = z
  .object({
    containers: EksAttemptContainerDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details for the final status of the containers for this job attempt.',
        }),
    ).exactOptional(),
    podName: StringSchema.and(
      z.any().openapi({ description: 'The name of the pod for this job attempt.' }),
    ).exactOptional(),
    nodeName: StringSchema.and(
      z.any().openapi({ description: 'The name of the node for this job attempt.' }),
    ).exactOptional(),
    startedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).',
        }),
    ).exactOptional(),
    stoppedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp (in milliseconds) for when the attempt was stopped. This happens when the attempt transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>.',
        }),
    ).exactOptional(),
    statusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short, human-readable string to provide additional details for the current status of the job attempt.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the details of a job attempt for a job attempt by an Amazon EKS container.',
    required: [],
  })
  .openapi('EksAttemptDetail')

const EksAttemptDetailsSchema = z.array(EksAttemptDetailSchema).openapi('EksAttemptDetails')

const JobDetailSchema = z
  .object({
    jobArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job.' }),
    ).exactOptional(),
    jobName: StringSchema.and(z.any().openapi({ description: 'The job name.' })),
    jobId: StringSchema.and(z.any().openapi({ description: 'The job ID.' })),
    jobQueue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the job queue that the job is associated with.',
        }),
    ),
    status: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status for the job.</p> <note> <p>If your jobs don\'t progress to <code>STARTING</code>, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable">Jobs stuck in RUNNABLE status</a> in the troubleshooting section of the <i>Batch User Guide</i>.</p> </note>',
        }),
    ),
    shareIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The share identifier for the job.' }),
    ).exactOptional(),
    schedulingPriority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduling policy of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.',
        }),
    ).exactOptional(),
    attempts: AttemptDetailsSchema.and(
      z.any().openapi({ description: 'A list of job attempts that are associated with this job.' }),
    ).exactOptional(),
    statusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short, human-readable string to provide more details for the current status of the job.',
        }),
    ).exactOptional(),
    createdAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the <code>SUBMITTED</code> state. This is specifically at the time <a>SubmitJob</a> was called. For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.',
        }),
    ).exactOptional(),
    retryStrategy: RetryStrategySchema.and(
      z
        .any()
        .openapi({ description: 'The retry strategy to use for this job if an attempt fails.' }),
    ).exactOptional(),
    startedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Unix timestamp (in milliseconds) for when the job was started. More specifically, it's when the job transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state. This parameter isn't provided for child jobs of array jobs or multi-node parallel jobs.",
        }),
    ),
    stoppedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Unix timestamp (in milliseconds) for when the job was stopped. More specifically, it's when the job transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>.",
        }),
    ).exactOptional(),
    dependsOn: JobDependencyListSchema.and(
      z.any().openapi({ description: 'A list of job IDs that this job depends on.' }),
    ).exactOptional(),
    jobDefinition: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the job definition that this job uses.',
        }),
    ),
    parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional parameters that are passed to the job that replace parameter substitution placeholders or override any corresponding parameter defaults from the job definition.',
        }),
    ).exactOptional(),
    container: ContainerDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that represents the details for the container that's associated with the job.",
        }),
    ).exactOptional(),
    nodeDetails: NodeDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that represents the details of a node that's associated with a multi-node parallel job.",
        }),
    ).exactOptional(),
    nodeProperties: NodePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources.</p> </note>",
        }),
    ).exactOptional(),
    arrayProperties: ArrayPropertiesDetailSchema.and(
      z.any().openapi({ description: "The array properties of the job, if it's an array job." }),
    ).exactOptional(),
    timeout: JobTimeoutSchema.and(
      z.any().openapi({ description: 'The timeout configuration for the job.' }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z.any().openapi({ description: 'The tags that are applied to the job.' }),
    ).exactOptional(),
    propagateTags: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.",
        }),
    ).exactOptional(),
    platformCapabilities: PlatformCapabilityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. Jobs run on Fargate resources specify <code>FARGATE</code>.',
        }),
    ).exactOptional(),
    eksProperties: EksPropertiesDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object with various properties that are specific to Amazon EKS based jobs. Only one of <code>container</code>, <code>eksProperties</code>, or <code>nodeDetails</code> is specified.',
        }),
    ).exactOptional(),
    eksAttempts: EksAttemptDetailsSchema.and(
      z.any().openapi({ description: 'A list of job attempts that are associated with this job.' }),
    ).exactOptional(),
    isCancelled: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the job is canceled.' }),
    ).exactOptional(),
    isTerminated: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the job is terminated.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobName', 'jobId', 'jobQueue', 'status', 'startedAt', 'jobDefinition'],
    description: 'An object that represents an Batch job.',
  })
  .openapi('JobDetail')

const JobDetailListSchema = z.array(JobDetailSchema).openapi('JobDetailList')

const DescribeJobsResponseSchema = z
  .object({
    jobs: JobDetailListSchema.and(
      z.any().openapi({ description: 'The list of jobs.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      jobs: [
        {
          container: {
            command: ['sleep', '60'],
            containerInstanceArn:
              'arn:aws:ecs:us-east-1:012345678910:container-instance/5406d7cd-58bd-4b8f-9936-48d7c6b1526c',
            environment: [],
            exitCode: 0,
            image: 'busybox',
            memory: 128,
            mountPoints: [],
            ulimits: [],
            vcpus: 1,
            volumes: [],
          },
          createdAt: 1480460782010,
          dependsOn: [],
          jobDefinition: 'sleep60',
          jobId: '24fa2d7a-64c4-49d2-8b47-f8da4fbde8e9',
          jobName: 'example',
          jobQueue: 'arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority',
          parameters: {},
          startedAt: 1480460816500,
          status: 'SUCCEEDED',
          stoppedAt: 1480460880699,
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeJobsResponse')

const FairsharePolicySchema = z
  .object({
    shareDecaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time (in seconds) to use to calculate a fair share percentage for each fair share identifier in use. A value of zero (0) indicates that only current usage is measured. The decay allows for more recently run jobs to have more weight than jobs that ran earlier. The maximum supported value is 604800 (1 week).',
        }),
    ).exactOptional(),
    computeReservation: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value used to reserve some of the available maximum vCPU for fair share identifiers that aren't already used.</p> <p>The reserved ratio is <code>(<i>computeReservation</i>/100)^<i>ActiveFairShares</i> </code> where <code> <i>ActiveFairShares</i> </code> is the number of active fair share identifiers.</p> <p>For example, a <code>computeReservation</code> value of 50 indicates that Batchreserves 50% of the maximum available vCPU if there's only one fair share identifier. It reserves 25% if there are two fair share identifiers. It reserves 12.5% if there are three fair share identifiers. A <code>computeReservation</code> value of 25 indicates that Batch should reserve 25% of the maximum available vCPU if there's only one fair share identifier, 6.25% if there are two fair share identifiers, and 1.56% if there are three fair share identifiers.</p> <p>The minimum value is 0 and the maximum value is 99.</p>",
        }),
    ).exactOptional(),
    shareDistribution: ShareAttributesListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of <code>SharedIdentifier</code> objects that contain the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The fair share policy for a scheduling policy.', required: [] })
  .openapi('FairsharePolicy')

const SchedulingPolicyDetailSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the scheduling policy.' })),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the scheduling policy. An example is <code>arn:<i>aws</i>:batch:<i>us-east-1</i>:<i>123456789012</i>:scheduling-policy/<i>HighPriority</i> </code>.',
        }),
    ),
    fairsharePolicy: FairsharePolicySchema.and(
      z.any().openapi({ description: 'The fair share policy for the scheduling policy.' }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that you apply to the scheduling policy to categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'arn'],
    description: 'An object that represents a scheduling policy.',
  })
  .openapi('SchedulingPolicyDetail')

const SchedulingPolicyDetailListSchema = z
  .array(SchedulingPolicyDetailSchema)
  .openapi('SchedulingPolicyDetailList')

const DescribeSchedulingPoliciesResponseSchema = z
  .object({
    schedulingPolicies: SchedulingPolicyDetailListSchema.and(
      z.any().openapi({ description: 'The list of scheduling policies.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSchedulingPoliciesResponse')

const ContainerSummarySchema = z
  .object({
    exitCode: IntegerSchema.and(
      z.any().openapi({ description: 'The exit code to return upon completion.' }),
    ).exactOptional(),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short (255 max characters) human-readable string to provide additional details for a running or stopped container.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents summary details of a container within a job.',
    required: [],
  })
  .openapi('ContainerSummary')

const ArrayPropertiesSummarySchema = z
  .object({
    size: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the array job. This parameter is returned for parent array jobs.',
        }),
    ).exactOptional(),
    index: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job index within the array that's associated with this job. This parameter is returned for children of array jobs.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the array properties of a job.',
    required: [],
  })
  .openapi('ArrayPropertiesSummary')

const NodePropertiesSummarySchema = z
  .object({
    isMainNode: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the current node is the main node for a multi-node parallel job.',
        }),
    ).exactOptional(),
    numNodes: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of nodes that are associated with a multi-node parallel job.',
        }),
    ).exactOptional(),
    nodeIndex: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The node index for the node. Node index numbering begins at zero. This index is also available on the node with the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that represents the properties of a node that's associated with a multi-node parallel job.",
    required: [],
  })
  .openapi('NodePropertiesSummary')

const JobSummarySchema = z
  .object({
    jobArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job.' }),
    ).exactOptional(),
    jobId: StringSchema.and(z.any().openapi({ description: 'The job ID.' })),
    jobName: StringSchema.and(z.any().openapi({ description: 'The job name.' })),
    createdAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called). For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.',
        }),
    ).exactOptional(),
    status: JobStatusSchema.and(
      z.any().openapi({ description: 'The current status for the job.' }),
    ).exactOptional(),
    statusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short, human-readable string to provide more details for the current status of the job.',
        }),
    ).exactOptional(),
    startedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Unix timestamp for when the job was started. More specifically, it's when the job transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state.",
        }),
    ).exactOptional(),
    stoppedAt: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Unix timestamp for when the job was stopped. More specifically, it's when the job transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>.",
        }),
    ).exactOptional(),
    container: ContainerSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that represents the details of the container that's associated with the job.",
        }),
    ).exactOptional(),
    arrayProperties: ArrayPropertiesSummarySchema.and(
      z.any().openapi({ description: "The array properties of the job, if it's an array job." }),
    ).exactOptional(),
    nodeProperties: NodePropertiesSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The node properties for a single node in a job summary list.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources.</p> </note>",
        }),
    ).exactOptional(),
    jobDefinition: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job definition.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobId', 'jobName'],
    description: 'An object that represents summary details of a job.',
  })
  .openapi('JobSummary')

const JobSummaryListSchema = z.array(JobSummarySchema).openapi('JobSummaryList')

const ListJobsResponseSchema = z
  .object({
    jobSummaryList: JobSummaryListSchema.and(
      z.any().openapi({ description: 'A list of job summaries that match the request.' }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListJobs</code> request. When the results of a <code>ListJobs</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobSummaryList'],
    example: {
      jobSummaryList: [{ jobId: '68f0c163-fbd4-44e6-9fd1-25b14a434786', jobName: 'example' }],
    },
  })
  .openapi('ListJobsResponse')

const KeyValuesPairSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the filter. Filter names are case sensitive.' }),
    ).exactOptional(),
    values: StringListSchema.and(
      z.any().openapi({ description: 'The filter values.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation.",
    required: [],
  })
  .openapi('KeyValuesPair')

const SchedulingPolicyListingDetailSchema = z
  .object({
    arn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the scheduling policy.' }),
    ),
  })
  .openapi({
    required: ['arn'],
    description:
      "An object that contains the details of a scheduling policy that's returned in a <code>ListSchedulingPolicy</code> action.",
  })
  .openapi('SchedulingPolicyListingDetail')

const SchedulingPolicyListingDetailListSchema = z
  .array(SchedulingPolicyListingDetailSchema)
  .openapi('SchedulingPolicyListingDetailList')

const ListSchedulingPoliciesResponseSchema = z
  .object({
    schedulingPolicies: SchedulingPolicyListingDetailListSchema.and(
      z.any().openapi({ description: 'A list of scheduling policies that match the request.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListSchedulingPolicies</code> request. When the results of a <code>ListSchedulingPolicies</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSchedulingPoliciesResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagrisTagsMapSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { tags: { Department: 'Engineering', Stage: 'Alpha', User: 'JaneDoe' } },
    required: [],
  })
  .openapi('ListTagsForResourceResponse')

const RegisterJobDefinitionResponseSchema = z
  .object({
    jobDefinitionName: StringSchema.and(
      z.any().openapi({ description: 'The name of the job definition.' }),
    ),
    jobDefinitionArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job definition.' }),
    ),
    revision: IntegerSchema.and(
      z.any().openapi({ description: 'The revision of the job definition.' }),
    ),
  })
  .openapi({
    required: ['jobDefinitionName', 'jobDefinitionArn', 'revision'],
    example: {
      jobDefinitionArn: 'arn:aws:batch:us-east-1:012345678910:job-definition/sleep30:1',
      jobDefinitionName: 'sleep30',
      revision: 1,
    },
  })
  .openapi('RegisterJobDefinitionResponse')

const SubmitJobResponseSchema = z
  .object({
    jobArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the job.' }),
    ).exactOptional(),
    jobName: StringSchema.and(z.any().openapi({ description: 'The name of the job.' })),
    jobId: StringSchema.and(z.any().openapi({ description: 'The unique identifier for the job.' })),
  })
  .openapi({
    required: ['jobName', 'jobId'],
    example: { jobId: '876da822-4198-45f2-a252-6cea32512ea8', jobName: 'example' },
  })
  .openapi('SubmitJobResponse')

const ContainerOverridesSchema = z
  .object({
    vcpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "This parameter is deprecated, use <code>resourceRequirements</code> to override the <code>vcpus</code> parameter that's set in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it overrides the <code>vcpus</code> parameter set in the job definition, but doesn't override any vCPU requirement specified in the <code>resourceRequirements</code> structure in the job definition. To override vCPU requirements that are specified in the <code>resourceRequirements</code> structure in the job definition, <code>resourceRequirements</code> must be specified in the <code>SubmitJob</code> request, with <code>type</code> set to <code>VCPU</code> and <code>value</code> set to the new value. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements\">Can't override job definition resource requirements</a> in the <i>Batch User Guide</i>.This field is deprecated, use resourceRequirements instead.",
        }),
    ).exactOptional(),
    memory: IntegerSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "This parameter is deprecated, use <code>resourceRequirements</code> to override the memory requirements specified in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it overrides the <code>memory</code> parameter set in the job definition, but doesn't override any memory requirement that's specified in the <code>resourceRequirements</code> structure in the job definition. To override memory requirements that are specified in the <code>resourceRequirements</code> structure in the job definition, <code>resourceRequirements</code> must be specified in the <code>SubmitJob</code> request, with <code>type</code> set to <code>MEMORY</code> and <code>value</code> set to the new value. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements\">Can't override job definition resource requirements</a> in the <i>Batch User Guide</i>.This field is deprecated, use resourceRequirements instead.",
        }),
    ).exactOptional(),
    command: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The command to send to the container that overrides the default command from the Docker image or the job definition.</p> <note> <p>This parameter can't contain an empty string.</p> </note>",
        }),
    ).exactOptional(),
    instanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The instance type to use for a multi-node parallel job.</p> <note> <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.</p> </note>",
        }),
    ).exactOptional(),
    environment: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.</p> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
        }),
    ).exactOptional(),
    resourceRequirements: ResourceRequirementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The overrides that should be sent to a container.</p> <p>For information about using Batch overrides when you connect event sources to targets, see <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p>',
    required: [],
  })
  .openapi('ContainerOverrides')

const NodePropertyOverrideSchema = z
  .object({
    targetNodes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The range of nodes, using node index values, that's used to override. A range of <code>0:3</code> indicates nodes with index values of <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>), then <code>0</code> is used to start the range. If the ending range value is omitted (<code>n:</code>), then the highest possible node index is used to end the range.",
        }),
    ),
    containerOverrides: ContainerOverridesSchema.and(
      z.any().openapi({ description: 'The overrides that are sent to a node range.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['targetNodes'],
    description:
      "The object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.",
  })
  .openapi('NodePropertyOverride')

const NodePropertyOverridesSchema = z
  .array(NodePropertyOverrideSchema)
  .openapi('NodePropertyOverrides')

const EksContainerOverrideSchema = z
  .object({
    image: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The override of the Docker image that's used to start the container.",
        }),
    ).exactOptional(),
    command: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The command to send to the container that overrides the default command from the Docker image or the job definition.',
        }),
    ).exactOptional(),
    args: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The arguments to the entrypoint to send to the container that overrides the default arguments from the Docker image or the job definition. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">CMD</a> in the <i>Dockerfile reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command an arguments for a pod</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
    env: EksContainerEnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch. Or, you can override the existing environment variables from the Docker image or the job definition.</p> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
        }),
    ).exactOptional(),
    resources: EksContainerResourceRequirementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type and amount of resources to assign to a container. These override the settings in the job definition. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Object representing any Kubernetes overrides to a job definition that's used in a <a>SubmitJob</a> API operation.",
    required: [],
  })
  .openapi('EksContainerOverride')

const EksContainerOverrideListSchema = z
  .array(EksContainerOverrideSchema)
  .openapi('EksContainerOverrideList')

const EksPodPropertiesOverrideSchema = z
  .object({
    containers: EksContainerOverrideListSchema.and(
      z
        .any()
        .openapi({
          description: "The overrides for the container that's used on the Amazon EKS pod.",
        }),
    ).exactOptional(),
    metadata: EksMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            "Metadata about the overrides for the container that's used on the Amazon EKS pod.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains overrides for the Kubernetes pod properties of a job.',
    required: [],
  })
  .openapi('EksPodPropertiesOverride')

const TagResourceResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('TagResourceResponse')

const TerminateJobResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('TerminateJobResponse')

const UntagResourceResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateComputeEnvironmentResponseSchema = z
  .object({
    computeEnvironmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ).exactOptional(),
    computeEnvironmentArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the compute environment.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      computeEnvironmentArn: 'arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand',
      computeEnvironmentName: 'P2OnDemand',
    },
    required: [],
  })
  .openapi('UpdateComputeEnvironmentResponse')

const CRUpdateAllocationStrategySchema = z
  .enum(['BEST_FIT_PROGRESSIVE', 'SPOT_CAPACITY_OPTIMIZED', 'SPOT_PRICE_CAPACITY_OPTIMIZED'])
  .openapi('CRUpdateAllocationStrategy')

const UpdateJobQueueResponseSchema = z
  .object({
    jobQueueName: StringSchema.and(
      z.any().openapi({ description: 'The name of the job queue.' }),
    ).exactOptional(),
    jobQueueArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job queue.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      jobQueueArn: 'arn:aws:batch:us-east-1:012345678910:job-queue/GPGPU',
      jobQueueName: 'GPGPU',
    },
    required: [],
  })
  .openapi('UpdateJobQueueResponse')

const UpdateSchedulingPolicyResponseSchema = z.object({}).openapi('UpdateSchedulingPolicyResponse')

const ArrayPropertiesSchema = z
  .object({
    size: IntegerSchema.and(
      z.any().openapi({ description: 'The size of the array job.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents an Batch array job.', required: [] })
  .openapi('ArrayProperties')

const CancelJobRequestSchema = z
  .object({
    jobId: StringSchema.and(
      z.any().openapi({ description: 'The Batch job ID of the job to cancel.' }),
    ),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.',
        }),
    ),
  })
  .openapi({
    required: ['jobId', 'reason'],
    title: 'CancelJobRequest',
    description: 'Contains the parameters for <code>CancelJob</code>.',
  })
  .openapi('CancelJobRequest')

const ComputeResourceUpdateSchema = z
  .object({
    minvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The minimum number of vCPUs that an environment should maintain (even if the compute environment is <code>DISABLED</code>).</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
    maxvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of Amazon EC2 vCPUs that an environment can reach.</p> <note> <p>With <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code>, and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> allocation strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance. That is, no more than a single instance from among those specified in your compute environment.</p> </note>',
        }),
    ).exactOptional(),
    desiredvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The desired number of vCPUS in the compute environment. Batch modifies this value between the minimum and maximum values based on job queue demand.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <note> <p>Batch doesn't support changing the desired number of vCPUs of an existing compute environment. Don't specify this parameter for compute environments using Amazon EKS clusters.</p> </note> <note> <p>When you update the <code>desiredvCpus</code> setting, the value must be between the <code>minvCpus</code> and <code>maxvCpus</code> values. </p> <p>Additionally, the updated <code>desiredvCpus</code> value must be greater than or equal to the current <code>desiredvCpus</code> value. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#error-desired-vcpus-update\">Troubleshooting Batch</a> in the <i>Batch User Guide</i>.</p> </note>",
        }),
    ).exactOptional(),
    subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The VPC subnets where the compute resources are launched. Fargate compute resources can contain up to 16 subnets. For Fargate compute resources, providing an empty list will be handled as if this parameter wasn\'t specified and no change is made. For EC2 compute resources, providing an empty list removes the VPC subnets from the compute resource. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p> <p>When updating a compute environment, changing the VPC subnets requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones"> Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the <i>Amazon ECS Developer Guide</i>.</p> <p>Batch on Fargate doesn\'t currently support Local Zones.</p> </note>',
        }),
    ).exactOptional(),
    securityGroupIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon EC2 security groups that are associated with instances launched in the compute environment. This parameter is required for Fargate compute resources, where it can contain up to 5 security groups. For Fargate compute resources, providing an empty list is handled as if this parameter wasn\'t specified and no change is made. For EC2 compute resources, providing an empty list removes the security groups from the compute resource.</p> <p>When updating a compute environment, changing the EC2 security groups requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>',
        }),
    ).exactOptional(),
    allocationStrategy: CRUpdateAllocationStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The allocation strategy to use for the compute resource if there\'s not enough instances of the best fitting instance type that can be allocated. This might be because of availability of the instance type in the Region or <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html">Allocation strategies</a> in the <i>Batch User Guide</i>.</p> <p>When updating a compute environment, changing the allocation strategy requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. <code>BEST_FIT</code> isn\'t supported when updating a compute environment.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <dl> <dt>BEST_FIT_PROGRESSIVE</dt> <dd> <p>Batch selects additional instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously selected instance types aren\'t available, Batch selects new instance types.</p> </dd> <dt>SPOT_CAPACITY_OPTIMIZED</dt> <dd> <p>Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> <dt>SPOT_PRICE_CAPACITY_OPTIMIZED</dt> <dd> <p>The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> </dl> <p>With both <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code>, and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance.</p>',
        }),
    ).exactOptional(),
    instanceTypes: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The instances types that can be launched. You can specify instance families to launch any instance type within those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to select instance types (from the C4, M4, and R4 instance families) that match the demand of your job queues.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <note> <p>When you create a compute environment, the instance types that you select for the compute environment must share the same architecture. For example, you can't mix x86 and ARM instances in the same compute environment.</p> </note> <note> <p>Currently, <code>optimal</code> uses instance types from the C4, M4, and R4 instance families. In Regions that don't have instance types from those instance families, instance types from the C5, M5, and R5 instance families are used.</p> </note>",
        }),
    ).exactOptional(),
    ec2KeyPair: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to log in to your instances with SSH. To remove the Amazon EC2 key pair, set this value to an empty string.</p> <p>When updating a compute environment, changing the EC2 key pair requires an infrastructure update of the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
    instanceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, <code> <i>ecsInstanceRole</i> </code> or <code>arn:aws:iam::<i>&lt;aws_account_id&gt;</i>:instance-profile/<i>ecsInstanceRole</i> </code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance role</a> in the <i>Batch User Guide</i>.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For Batch, these take the form of <code>"String1": "String2"</code>, where <code>String1</code> is the tag key and <code>String2</code> is the tag value-for example, <code>{ "Name": "Batch Instance - C4OnDemand" }</code>. This is helpful for recognizing your Batch instances in the Amazon EC2 console. These tags aren\'t seen when using the Batch <code>ListTagsForResource</code> API operation.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    placementGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>When updating a compute environment, changing the placement group requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    bidPercentage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, the Spot price must be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. For most use cases, we recommend leaving this field empty.</p> <p>When updating a compute environment, changing the bid percentage requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    launchTemplate: LaunchTemplateSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The updated launch template to use for your compute resources. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Batch User Guide</i>. To remove the custom launch template and use the default launch template, set <code>launchTemplateId</code> or <code>launchTemplateName</code> member of the launch template specification to an empty string. Removing the launch template from a compute environment will not remove the AMI specified in the launch template. In order to update the AMI specified in a launch template, the <code>updateToLatestImageVersion</code> parameter must be set to <code>true</code>.</p> <p>When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
        }),
    ).exactOptional(),
    ec2Configuration: Ec2ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code>.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>. To remove the EC2 configuration and any custom AMI ID specified in <code>imageIdOverride</code>, set this value to an empty string.</p> <p>One or two values can be provided.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
        }),
    ).exactOptional(),
    updateToLatestImageVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the AMI ID is updated to the latest one that\'s supported by Batch when the compute environment has an infrastructure update. The default value is <code>false</code>.</p> <note> <p>An AMI ID can either be specified in the <code>imageId</code> or <code>imageIdOverride</code> parameters or be determined by the launch template that\'s specified in the <code>launchTemplate</code> parameter. If an AMI ID is specified any of these ways, this parameter is ignored. For more information about to update AMI IDs during an infrastructure update, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html#updating-compute-environments-ami">Updating the AMI ID</a> in the <i>Batch User Guide</i>.</p> </note> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>',
        }),
    ).exactOptional(),
    type: CRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>, or <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.</p> <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the <i>Batch User Guide</i>.</p> <p>When updating a compute environment, changing the type of a compute environment requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>',
        }),
    ).exactOptional(),
    imageId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is overridden by the <code>imageIdOverride</code> member of the <code>Ec2Configuration</code> structure. To remove the custom AMI ID and use the default AMI ID, set this value to an empty string.</p> <p>When updating a compute environment, changing the AMI ID requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <note> <p>The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized Amazon Linux 2 AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.',
    required: [],
  })
  .openapi('ComputeResourceUpdate')

const CreateComputeEnvironmentRequestSchema = z
  .object({
    computeEnvironmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ),
    type: CETypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.',
        }),
    ),
    state: CEStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state\">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>",
        }),
    ).exactOptional(),
    unmanagedvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.</p> <note> <p>This parameter is only supported when the <code>type</code> parameter is set to <code>UNMANAGED</code>.</p> </note>",
        }),
    ).exactOptional(),
    computeResources: ComputeResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the compute resources managed by the compute environment. This parameter is required for managed compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    serviceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn\'t exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>, specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn\'t use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>',
        }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don\'t propagate to the underlying compute resources.</p>',
        }),
    ).exactOptional(),
    eksConfiguration: EksConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details for the Amazon EKS cluster that supports the compute environment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['computeEnvironmentName', 'type'],
    title: 'CreateComputeEnvironmentRequest',
    description: 'Contains the parameters for <code>CreateComputeEnvironment</code>.',
  })
  .openapi('CreateComputeEnvironmentRequest')

const CreateJobQueueRequestSchema = z
  .object({
    jobQueueName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ),
    state: JQStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.",
        }),
    ).exactOptional(),
    schedulingPolicyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. An example is <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.",
        }),
    ).exactOptional(),
    priority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.",
        }),
    ),
    computeEnvironmentOrder: ComputeEnvironmentOrdersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>",
        }),
    ),
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobQueueName', 'priority', 'computeEnvironmentOrder'],
    title: 'CreateJobQueueRequest',
    description: 'Contains the parameters for <code>CreateJobQueue</code>.',
  })
  .openapi('CreateJobQueueRequest')

const CreateSchedulingPolicyRequestSchema = z
  .object({
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ),
    fairsharePolicy: FairsharePolicySchema.and(
      z.any().openapi({ description: 'The fair share policy of the scheduling policy.' }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    title: 'CreateSchedulingPolicyRequest',
    description: 'Contains the parameters for <code>CreateSchedulingPolicy</code>.',
  })
  .openapi('CreateSchedulingPolicyRequest')

const DeleteComputeEnvironmentRequestSchema = z
  .object({
    computeEnvironment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or Amazon Resource Name (ARN) of the compute environment to delete.',
        }),
    ),
  })
  .openapi({
    required: ['computeEnvironment'],
    title: 'DeleteComputeEnvironmentRequest',
    description: 'Contains the parameters for <code>DeleteComputeEnvironment</code>.',
  })
  .openapi('DeleteComputeEnvironmentRequest')

const DeleteJobQueueRequestSchema = z
  .object({
    jobQueue: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The short name or full Amazon Resource Name (ARN) of the queue to delete.',
        }),
    ),
  })
  .openapi({
    required: ['jobQueue'],
    title: 'DeleteJobQueueRequest',
    description: 'Contains the parameters for <code>DeleteJobQueue</code>.',
  })
  .openapi('DeleteJobQueueRequest')

const DeleteSchedulingPolicyRequestSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the scheduling policy to delete.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'DeleteSchedulingPolicyRequest',
    description: 'Contains the parameters for <code>DeleteSchedulingPolicy</code>.',
  })
  .openapi('DeleteSchedulingPolicyRequest')

const DeregisterJobDefinitionRequestSchema = z
  .object({
    jobDefinition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.',
        }),
    ),
  })
  .openapi({ required: ['jobDefinition'], title: 'DeregisterJobDefinitionRequest' })
  .openapi('DeregisterJobDefinitionRequest')

const DescribeComputeEnvironmentsRequestSchema = z
  .object({
    computeEnvironments: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeComputeEnvironmentsRequest',
    description: 'Contains the parameters for <code>DescribeComputeEnvironments</code>.',
    required: [],
  })
  .openapi('DescribeComputeEnvironmentsRequest')

const DescribeJobDefinitionsRequestSchema = z
  .object({
    jobDefinitions: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format <code>arn:aws:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code> or a short version using the form <code>${JobDefinitionName}:${Revision}</code>.',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
        }),
    ).exactOptional(),
    jobDefinitionName: StringSchema.and(
      z.any().openapi({ description: 'The name of the job definition to describe.' }),
    ).exactOptional(),
    status: StringSchema.and(
      z.any().openapi({ description: 'The status used to filter job definitions.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeJobDefinitionsRequest',
    description: 'Contains the parameters for <code>DescribeJobDefinitions</code>.',
    required: [],
  })
  .openapi('DescribeJobDefinitionsRequest')

const DescribeJobQueuesRequestSchema = z
  .object({
    jobQueues: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeJobQueuesRequest',
    description: 'Contains the parameters for <code>DescribeJobQueues</code>.',
    required: [],
  })
  .openapi('DescribeJobQueuesRequest')

const DescribeJobsRequestSchema = z
  .object({
    jobs: StringListSchema.and(z.any().openapi({ description: 'A list of up to 100 job IDs.' })),
  })
  .openapi({
    required: ['jobs'],
    title: 'DescribeJobsRequest',
    description: 'Contains the parameters for <code>DescribeJobs</code>.',
  })
  .openapi('DescribeJobsRequest')

const DescribeSchedulingPoliciesRequestSchema = z
  .object({
    arns: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.',
        }),
    ),
  })
  .openapi({
    required: ['arns'],
    title: 'DescribeSchedulingPoliciesRequest',
    description: 'Contains the parameters for <code>DescribeSchedulingPolicies</code>.',
  })
  .openapi('DescribeSchedulingPoliciesRequest')

const EksPropertiesOverrideSchema = z
  .object({
    podProperties: EksPodPropertiesOverrideSchema.and(
      z.any().openapi({ description: 'The overrides for the Kubernetes pod resources of a job.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains overrides for the Kubernetes resources of a job.',
    required: [],
  })
  .openapi('EksPropertiesOverride')

const JobDefinitionTypeSchema = z.enum(['container', 'multinode']).openapi('JobDefinitionType')

const ListJobsFilterListSchema = z.array(KeyValuesPairSchema).openapi('ListJobsFilterList')

const ListJobsRequestSchema = z
  .object({
    jobQueue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or full Amazon Resource Name (ARN) of the job queue used to list jobs.',
        }),
    ).exactOptional(),
    arrayJobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array.',
        }),
    ).exactOptional(),
    multiNodeJobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job.',
        }),
    ).exactOptional(),
    jobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job status used to filter jobs in the specified queue. If the <code>filters</code> parameter is specified, the <code>jobStatus</code> parameter is ignored and jobs with any status are returned. If you don't specify a status, only <code>RUNNING</code> jobs are returned.",
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
        }),
    ).exactOptional(),
    filters: ListJobsFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The filter to apply to the query. Only one filter can be used at a time. When the filter is used, <code>jobStatus</code> is ignored. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP) jobs. The results are sorted by the <code>createdAt</code> field, with the most recent jobs being first.</p> <dl> <dt>JOB_NAME</dt> <dd> <p>The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the <code>jobName</code> value. For example, <code>test1</code> matches both <code>Test1</code> and <code>test1</code>, and <code>test1*</code> matches both <code>test1</code> and <code>Test10</code>. When the <code>JOB_NAME</code> filter is used, the results are grouped by the job name and version.</p> </dd> <dt>JOB_DEFINITION</dt> <dd> <p>The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the <code>jobDefinition</code> value. The value is case sensitive. When the value for the filter is the job definition name, the results include all the jobs that used any revision of that job definition name. If the value ends with an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For example, <code>jd1</code> matches only <code>jd1</code>, and <code>jd1*</code> matches both <code>jd1</code> and <code>jd1A</code>. The version of the job definition that's used doesn't affect the sort order. When the <code>JOB_DEFINITION</code> filter is used and the ARN is used (which is in the form <code>arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code>), the results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the ARN is used.</p> </dd> <dt>BEFORE_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's before the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> <dt>AFTER_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's after the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListJobsRequest',
    description: 'Contains the parameters for <code>ListJobs</code>.',
    required: [],
  })
  .openapi('ListJobsRequest')

const ListSchedulingPoliciesRequestSchema = z
  .object({
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of results that's returned by <code>ListSchedulingPolicies</code> in paginated output. When this parameter is used, <code>ListSchedulingPolicies</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListSchedulingPolicies</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, <code>ListSchedulingPolicies</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>nextToken</code> value that's returned from a previous paginated <code>ListSchedulingPolicies</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListSchedulingPoliciesRequest',
    description: 'Contains the parameters for <code>ListSchedulingPolicies</code>.',
    required: [],
  })
  .openapi('ListSchedulingPoliciesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTagsForResourceRequest',
    description: 'Contains the parameters for <code>ListTagsForResource</code>.',
  })
  .openapi('ListTagsForResourceRequest')

const NodeOverridesSchema = z
  .object({
    numNodes: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of nodes to use with a multi-node parallel job. This value overrides the number of nodes that are specified in the job definition. To use this override, you must meet the following conditions:</p> <ul> <li> <p>There must be at least one node range in your job definition that has an open upper boundary, such as <code>:</code> or <code>n:</code>.</p> </li> <li> <p>The lower boundary of the node range that's specified in the job definition must be fewer than the number of nodes specified in the override.</p> </li> <li> <p>The main node index that's specified in the job definition must be fewer than the number of nodes specified in the override.</p> </li> </ul>",
        }),
    ).exactOptional(),
    nodePropertyOverrides: NodePropertyOverridesSchema.and(
      z.any().openapi({ description: 'The node property overrides for the job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note>",
    required: [],
  })
  .openapi('NodeOverrides')

const RegisterJobDefinitionRequestSchema = z
  .object({
    jobDefinitionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ),
    type: JobDefinitionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn\'t supported.</p> </note>',
        }),
    ),
    parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.',
        }),
    ).exactOptional(),
    schedulingPriority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>',
        }),
    ).exactOptional(),
    containerProperties: ContainerPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An object with various properties specific to Amazon ECS based single-node container-based jobs. If the job definition's <code>type</code> parameter is <code>container</code>, then you must specify either <code>containerProperties</code> or <code>nodeProperties</code>. This must not be specified for Amazon EKS based job definitions.</p> <note> <p>If the job runs on Fargate resources, then you must not specify <code>nodeProperties</code>; use only <code>containerProperties</code>.</p> </note>",
        }),
    ).exactOptional(),
    nodeProperties: NodePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object with various properties specific to multi-node parallel jobs. If you specify node properties for a job, it becomes a multi-node parallel job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html">Multi-node Parallel Jobs</a> in the <i>Batch User Guide</i>. If the job definition\'s <code>type</code> parameter is <code>container</code>, then you must specify either <code>containerProperties</code> or <code>nodeProperties</code>.</p> <note> <p>If the job runs on Fargate resources, then you must not specify <code>nodeProperties</code>; use <code>containerProperties</code> instead.</p> </note> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>nodeProperties</code>.</p> </note>',
        }),
    ).exactOptional(),
    retryStrategy: RetryStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that's specified during a <a>SubmitJob</a> operation overrides the retry strategy defined here. If a job is terminated due to a timeout, it isn't retried.",
        }),
    ).exactOptional(),
    propagateTags: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>propagateTags</code>.</p> </note>',
        }),
    ).exactOptional(),
    timeout: JobTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timeout configuration for jobs that are submitted with this job definition, after which Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it isn\'t retried. The minimum value for the timeout is 60 seconds. Any timeout configuration that\'s specified during a <a>SubmitJob</a> operation overrides the timeout configuration defined here. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_timeouts.html">Job Timeouts</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    platformCapabilities: PlatformCapabilityListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>platformCapabilities</code>.</p> </note>',
        }),
    ).exactOptional(),
    eksProperties: EksPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object with various properties that are specific to Amazon EKS based jobs. This must not be specified for Amazon ECS based job definitions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobDefinitionName', 'type'],
    title: 'RegisterJobDefinitionRequest',
    description: 'Contains the parameters for <code>RegisterJobDefinition</code>.',
  })
  .openapi('RegisterJobDefinitionRequest')

const SubmitJobRequestSchema = z
  .object({
    jobName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
        }),
    ),
    jobQueue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.',
        }),
    ),
    shareIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The share identifier for the job. Don't specify this parameter if the job queue doesn't have a scheduling policy. If the job queue has a scheduling policy, then this parameter must be specified.</p> <p>This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).</p>",
        }),
    ).exactOptional(),
    schedulingPriorityOverride: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>',
        }),
    ).exactOptional(),
    arrayProperties: ArrayPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html">Array Jobs</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    dependsOn: JobDependencyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.',
        }),
    ).exactOptional(),
    jobDefinition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The job definition used by this job. This value can be one of <code>definition-name</code>, <code>definition-name:revision</code>, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (<code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>:<i>revision</i> </code>, or <code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i> </code>).</p> <p>If the revision is not specified, then the latest active revision is used.</p>',
        }),
    ),
    parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.',
        }),
    ).exactOptional(),
    containerOverrides: ContainerOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object with various properties that override the defaults for the job definition that specify the name of a container in the specified job definition and the overrides it should receive. You can override the default command for a container, which is specified in the job definition or the Docker image, with a <code>command</code> override. You can also override existing environment variables on a container or add new environment variables to it with an <code>environment</code> override.',
        }),
    ).exactOptional(),
    nodeOverrides: NodeOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of node overrides in JSON format that specify the node range to target and the container overrides for that node range.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources; use <code>containerOverrides</code> instead.</p> </note>",
        }),
    ).exactOptional(),
    retryStrategy: RetryStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry strategy to use for failed jobs from this <a>SubmitJob</a> operation. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.',
        }),
    ).exactOptional(),
    propagateTags: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this overrides the tag propagation setting in the job definition.",
        }),
    ).exactOptional(),
    timeout: JobTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timeout configuration for this <a>SubmitJob</a> operation. You can specify a timeout duration after which Batch terminates your jobs if they haven\'t finished. If a job is terminated due to a timeout, it isn\'t retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.',
        }),
    ).exactOptional(),
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
    eksPropertiesOverride: EksPropertiesOverrideSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that can only be specified for jobs that are run on Amazon EKS resources with various properties that override defaults for the job definition.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobName', 'jobQueue', 'jobDefinition'],
    title: 'SubmitJobRequest',
    description: 'Contains the parameters for <code>SubmitJob</code>.',
  })
  .openapi('SubmitJobRequest')

const TagKeysListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeysList')

const TagResourceRequestSchema = z
  .object({
    tags: TagrisTagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.',
        }),
    ),
  })
  .openapi({
    required: ['tags'],
    title: 'TagResourceRequest',
    description: 'Contains the parameters for <code>TagResource</code>.',
  })
  .openapi('TagResourceRequest')

const TerminateJobRequestSchema = z
  .object({
    jobId: StringSchema.and(
      z.any().openapi({ description: 'The Batch job ID of the job to terminate.' }),
    ),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.',
        }),
    ),
  })
  .openapi({
    required: ['jobId', 'reason'],
    title: 'TerminateJobRequest',
    description: 'Contains the parameters for <code>TerminateJob</code>.',
  })
  .openapi('TerminateJobRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'UntagResourceRequest',
    description: 'Contains the parameters for <code>UntagResource</code>.',
  })
  .openapi('UntagResourceRequest')

const UpdateComputeEnvironmentRequestSchema = z
  .object({
    computeEnvironment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or full Amazon Resource Name (ARN) of the compute environment to update.',
        }),
    ),
    state: CEStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state\">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>",
        }),
    ).exactOptional(),
    unmanagedvCpus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.",
        }),
    ).exactOptional(),
    computeResources: ComputeResourceUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of the compute resources managed by the compute environment. Required for a managed compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
    serviceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If the compute environment has a service-linked role, it can\'t be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can\'t be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the <b>AWSServiceRoleForBatch</b> service-linked role must be used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn\'t use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>',
        }),
    ).exactOptional(),
    updatePolicy: UpdatePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the updated infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['computeEnvironment'],
    title: 'UpdateComputeEnvironmentRequest',
    description: 'Contains the parameters for <code>UpdateComputeEnvironment</code>.',
  })
  .openapi('UpdateComputeEnvironmentRequest')

const UpdateJobQueueRequestSchema = z
  .object({
    jobQueue: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name or the Amazon Resource Name (ARN) of the job queue.' }),
    ),
    state: JQStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the queue's ability to accept new jobs. If the job queue state is <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.",
        }),
    ).exactOptional(),
    schedulingPolicyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the fair share scheduling policy. Once a job queue is created, the fair share scheduling policy can be replaced but not removed. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. For example, <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.',
        }),
    ).exactOptional(),
    priority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.",
        }),
    ).exactOptional(),
    computeEnvironmentOrder: ComputeEnvironmentOrdersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobQueue'],
    title: 'UpdateJobQueueRequest',
    description: 'Contains the parameters for <code>UpdateJobQueue</code>.',
  })
  .openapi('UpdateJobQueueRequest')

const UpdateSchedulingPolicyRequestSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the scheduling policy to update.',
        }),
    ),
    fairsharePolicy: FairsharePolicySchema.and(
      z.any().openapi({ description: 'The fair share policy.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'UpdateSchedulingPolicyRequest',
    description: 'Contains the parameters for <code>UpdateSchedulingPolicy</code>.',
  })
  .openapi('UpdateSchedulingPolicyRequest')

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

export const postV1CanceljobRoute = createRoute({
  method: 'post',
  path: '/v1/canceljob',
  description:
    "<p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <note> <p>A <code>PENDING</code> job is canceled after all dependency jobs are completed. Therefore, it may take longer than expected to cancel a job in <code>PENDING</code> status.</p> <p>When you try to cancel an array parent job in <code>PENDING</code>, Batch attempts to cancel all child jobs. The array parent job is canceled when all child jobs are completed.</p> </note> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>",
  operationId: 'CancelJob',
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
              jobId: z.string().openapi({ description: 'The Batch job ID of the job to cancel.' }),
              reason: z
                .string()
                .openapi({
                  description:
                    'A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.',
                }),
            })
            .openapi({ required: ['jobId', 'reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelJobResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1CreatecomputeenvironmentRoute = createRoute({
  method: 'post',
  path: '/v1/createcomputeenvironment',
  description:
    "<p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html\">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html\">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html\">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code>, or <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>. The <code>updateToLatestImageVersion</code> parameter is used when you update a compute environment. This parameter is ignored when you create a compute environment.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href=\"https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html\"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>",
  operationId: 'CreateComputeEnvironment',
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
              computeEnvironmentName: z
                .string()
                .openapi({
                  description:
                    'The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
                }),
              type: z
                .enum(['MANAGED', 'UNMANAGED'])
                .openapi({
                  description:
                    'The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.',
                }),
              state: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state\">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>",
                }),
              unmanagedvCpus: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.</p> <note> <p>This parameter is only supported when the <code>type</code> parameter is set to <code>UNMANAGED</code>.</p> </note>",
                }),
              computeResources: z
                .object({
                  type: CRTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>, or <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.</p> <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the <i>Batch User Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  allocationStrategy: CRAllocationStrategySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The allocation strategy to use for the compute resource if not enough instances of the best fitting instance type can be allocated. This might be because of availability of the instance type in the Region or <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html\">Amazon EC2 service limits</a>. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html\">Allocation strategies</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <dl> <dt>BEST_FIT (default)</dt> <dd> <p>Batch selects an instance type that best fits the needs of the jobs with a preference for the lowest-cost instance type. If additional instances of the selected instance type aren't available, Batch waits for the additional instances to be available. If there aren't enough instances available or the user is reaching <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html\">Amazon EC2 service limits</a>, additional jobs aren't run until the currently running jobs are completed. This allocation strategy keeps costs lower but can limit scaling. If you're using Spot Fleets with <code>BEST_FIT</code>, the Spot Fleet IAM Role must be specified. Compute resources that use a <code>BEST_FIT</code> allocation strategy don't support infrastructure updates and can't update some parameters. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </dd> <dt>BEST_FIT_PROGRESSIVE</dt> <dd> <p>Batch selects additional instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously selected instance types aren't available, Batch selects new instance types.</p> </dd> <dt>SPOT_CAPACITY_OPTIMIZED</dt> <dd> <p>Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> <dt>SPOT_PRICE_CAPACITY_OPTIMIZED</dt> <dd> <p>The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> </dl> <p>With <code>BEST_FIT_PROGRESSIVE</code>,<code>SPOT_CAPACITY_OPTIMIZED</code> and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance.</p>",
                      }),
                  ).exactOptional(),
                  minvCpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The minimum number of vCPUs that a compute environment should maintain (even if the compute environment is <code>DISABLED</code>).</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                  maxvCpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The maximum number of vCPUs that a compute environment can support.</p> <note> <p>With <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code> and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> allocation strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance. For example, no more than a single instance from among those specified in your compute environment is allocated.</p> </note>',
                      }),
                  ).exactOptional(),
                  desiredvCpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The desired number of vCPUS in the compute environment. Batch modifies this value between the minimum and maximum values based on job queue demand.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                  instanceTypes: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The instances types that can be launched. You can specify instance families to launch any instance type within those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to select instance types (from the C4, M4, and R4 instance families) that match the demand of your job queues.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <note> <p>When you create a compute environment, the instance types that you select for the compute environment must share the same architecture. For example, you can't mix x86 and ARM instances in the same compute environment.</p> </note> <note> <p>Currently, <code>optimal</code> uses instance types from the C4, M4, and R4 instance families. In Regions that don't have instance types from those instance families, instance types from the C5, M5, and R5 instance families are used.</p> </note>",
                      }),
                  ).exactOptional(),
                  imageId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        deprecated: true,
                        description:
                          '<p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is overridden by the <code>imageIdOverride</code> member of the <code>Ec2Configuration</code> structure.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <note> <p>The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized Amazon Linux 2 AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>This field is deprecated, use ec2Configuration[].imageIdOverride instead.',
                      }),
                  ).exactOptional(),
                  subnets: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The VPC subnets where the compute resources are launched. These subnets must be within the same VPC. Fargate compute resources can contain up to 16 subnets. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p> <note> <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones"> Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the <i>Amazon ECS Developer Guide</i>.</p> <p>Batch on Fargate doesn\'t currently support Local Zones.</p> </note>',
                      }),
                  ).exactOptional(),
                  securityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The Amazon EC2 security groups that are associated with instances launched in the compute environment. One or more security groups must be specified, either in <code>securityGroupIds</code> or using a launch template referenced in <code>launchTemplate</code>. This parameter is required for jobs that are running on Fargate resources and must contain at least one security group. Fargate doesn't support launch templates. If security groups are specified using both <code>securityGroupIds</code> and <code>launchTemplate</code>, the values in <code>securityGroupIds</code> are used.",
                      }),
                  ).exactOptional(),
                  ec2KeyPair: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to log in to your instances with SSH.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                  instanceRole: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, <code> <i>ecsInstanceRole</i> </code> or <code>arn:aws:iam::<i>&lt;aws_account_id&gt;</i>:instance-profile/<i>ecsInstanceRole</i> </code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance role</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  tags: TagsMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For Batch, these take the form of <code>"String1": "String2"</code>, where <code>String1</code> is the tag key and <code>String2</code> is the tag value-for example, <code>{ "Name": "Batch Instance - C4OnDemand" }</code>. This is helpful for recognizing your Batch instances in the Amazon EC2 console. Updating these tags requires an infrastructure update to the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. These tags aren\'t seen when using the Batch <code>ListTagsForResource</code> API operation.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  placementGroup: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  bidPercentage: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand price. For most use cases, we recommend leaving this field empty.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                  spotIamFleetRole: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute environment. This role is required if the allocation strategy set to <code>BEST_FIT</code> or if the allocation strategy isn\'t specified. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <important> <p>To tag your Spot Instances on creation, the Spot Fleet IAM role specified here must use the newer <b>AmazonEC2SpotFleetTaggingRole</b> managed policy. The previously recommended <b>AmazonEC2SpotFleetRole</b> managed policy doesn\'t have the required permissions to tag Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#spot-instance-no-tag">Spot instances not tagged on creation</a> in the <i>Batch User Guide</i>.</p> </important>',
                      }),
                  ).exactOptional(),
                  launchTemplate: LaunchTemplateSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The launch template to use for your compute resources. Any other compute resource parameters that you specify in a <a>CreateComputeEnvironment</a> API operation override the same parameters in the launch template. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  ec2Configuration: Ec2ConfigurationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Provides information that's used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code>.</p> <p>One or two values can be provided.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.',
                  required: [],
                }),
              serviceRole: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn\'t exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>, specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn\'t use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don\'t propagate to the underlying compute resources.</p>',
                }),
              eksConfiguration: z
                .object({
                  eksClusterArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the Amazon EKS cluster. An example is <code>arn:<i>aws</i>:eks:<i>us-east-1</i>:<i>123456789012</i>:cluster/<i>ClusterForBatch</i> </code>. ',
                      }),
                  ).exactOptional(),
                  kubernetesNamespace: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The namespace of the Amazon EKS cluster. Batch manages pods in this namespace. The value can\'t left empty or null. It must be fewer than 64 characters long, can\'t be set to <code>default</code>, can\'t start with "<code>kube-</code>," and must match this regular expression: <code>^[a-z0-9]([-a-z0-9]*[a-z0-9])?$</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/">Namespaces</a> in the Kubernetes documentation.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.',
                  required: [],
                }),
            })
            .openapi({ required: ['computeEnvironmentName', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateComputeEnvironmentResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1CreatejobqueueRoute = createRoute({
  method: 'post',
  path: '/v1/createjobqueue',
  description:
    '<p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>',
  operationId: 'CreateJobQueue',
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
              jobQueueName: z
                .string()
                .openapi({
                  description:
                    'The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
                }),
              state: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    "The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.",
                }),
              schedulingPolicyArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The Amazon Resource Name (ARN) of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. An example is <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.",
                }),
              priority: z
                .int()
                .openapi({
                  description:
                    "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.",
                }),
              computeEnvironmentOrder: z
                .array(ComputeEnvironmentOrderSchema)
                .openapi({
                  description:
                    "<p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>",
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in <i>Batch User Guide</i>.',
                }),
            })
            .openapi({ required: ['jobQueueName', 'priority', 'computeEnvironmentOrder'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJobQueueResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1CreateschedulingpolicyRoute = createRoute({
  method: 'post',
  path: '/v1/createschedulingpolicy',
  description: 'Creates an Batch scheduling policy.',
  operationId: 'CreateSchedulingPolicy',
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
                .openapi({
                  description:
                    'The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
                }),
              fairsharePolicy: z
                .object({
                  shareDecaySeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The amount of time (in seconds) to use to calculate a fair share percentage for each fair share identifier in use. A value of zero (0) indicates that only current usage is measured. The decay allows for more recently run jobs to have more weight than jobs that ran earlier. The maximum supported value is 604800 (1 week).',
                      }),
                  ).exactOptional(),
                  computeReservation: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A value used to reserve some of the available maximum vCPU for fair share identifiers that aren't already used.</p> <p>The reserved ratio is <code>(<i>computeReservation</i>/100)^<i>ActiveFairShares</i> </code> where <code> <i>ActiveFairShares</i> </code> is the number of active fair share identifiers.</p> <p>For example, a <code>computeReservation</code> value of 50 indicates that Batchreserves 50% of the maximum available vCPU if there's only one fair share identifier. It reserves 25% if there are two fair share identifiers. It reserves 12.5% if there are three fair share identifiers. A <code>computeReservation</code> value of 25 indicates that Batch should reserve 25% of the maximum available vCPU if there's only one fair share identifier, 6.25% if there are two fair share identifiers, and 1.56% if there are three fair share identifiers.</p> <p>The minimum value is 0 and the maximum value is 99.</p>",
                      }),
                  ).exactOptional(),
                  shareDistribution: ShareAttributesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "An array of <code>SharedIdentifier</code> objects that contain the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The fair share policy for a scheduling policy.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p>',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSchedulingPolicyResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DeletecomputeenvironmentRoute = createRoute({
  method: 'post',
  path: '/v1/deletecomputeenvironment',
  description:
    "<p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>",
  operationId: 'DeleteComputeEnvironment',
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
              computeEnvironment: z
                .string()
                .openapi({
                  description:
                    'The name or Amazon Resource Name (ARN) of the compute environment to delete.',
                }),
            })
            .openapi({ required: ['computeEnvironment'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteComputeEnvironmentResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DeletejobqueueRoute = createRoute({
  method: 'post',
  path: '/v1/deletejobqueue',
  description:
    "<p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>",
  operationId: 'DeleteJobQueue',
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
              jobQueue: z
                .string()
                .openapi({
                  description:
                    'The short name or full Amazon Resource Name (ARN) of the queue to delete.',
                }),
            })
            .openapi({ required: ['jobQueue'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteJobQueueResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DeleteschedulingpolicyRoute = createRoute({
  method: 'post',
  path: '/v1/deleteschedulingpolicy',
  description:
    "<p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>",
  operationId: 'DeleteSchedulingPolicy',
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
              arn: z
                .string()
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the scheduling policy to delete.',
                }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSchedulingPolicyResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DeregisterjobdefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/deregisterjobdefinition',
  description:
    'Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.',
  operationId: 'DeregisterJobDefinition',
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
              jobDefinition: z
                .string()
                .openapi({
                  description:
                    'The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.',
                }),
            })
            .openapi({ required: ['jobDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterJobDefinitionResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DescribecomputeenvironmentsRoute = createRoute({
  method: 'post',
  path: '/v1/describecomputeenvironments',
  description:
    "<p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>",
  operationId: 'DescribeComputeEnvironments',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              computeEnvironments: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.',
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
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
      content: { 'application/json': { schema: DescribeComputeEnvironmentsResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DescribejobdefinitionsRoute = createRoute({
  method: 'post',
  path: '/v1/describejobdefinitions',
  description:
    'Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.',
  operationId: 'DescribeJobDefinitions',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              jobDefinitions: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format <code>arn:aws:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code> or a short version using the form <code>${JobDefinitionName}:${Revision}</code>.',
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
                }),
              jobDefinitionName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the job definition to describe.' }),
              status: z
                .string()
                .exactOptional()
                .openapi({ description: 'The status used to filter job definitions.' }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
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
      content: { 'application/json': { schema: DescribeJobDefinitionsResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DescribejobqueuesRoute = createRoute({
  method: 'post',
  path: '/v1/describejobqueues',
  description: 'Describes one or more of your job queues.',
  operationId: 'DescribeJobQueues',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              jobQueues: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.',
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
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
      content: { 'application/json': { schema: DescribeJobQueuesResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DescribejobsRoute = createRoute({
  method: 'post',
  path: '/v1/describejobs',
  description: 'Describes a list of Batch jobs.',
  operationId: 'DescribeJobs',
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
              jobs: z.array(StringSchema).openapi({ description: 'A list of up to 100 job IDs.' }),
            })
            .openapi({ required: ['jobs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobsResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1DescribeschedulingpoliciesRoute = createRoute({
  method: 'post',
  path: '/v1/describeschedulingpolicies',
  description: 'Describes one or more of your scheduling policies.',
  operationId: 'DescribeSchedulingPolicies',
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
              arns: z
                .array(StringSchema)
                .openapi({
                  description:
                    'A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.',
                }),
            })
            .openapi({ required: ['arns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSchedulingPoliciesResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1ListjobsRoute = createRoute({
  method: 'post',
  path: '/v1/listjobs',
  description:
    "<p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>",
  operationId: 'ListJobs',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              jobQueue: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name or full Amazon Resource Name (ARN) of the job queue used to list jobs.',
                }),
              arrayJobId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array.',
                }),
              multiNodeJobId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job.',
                }),
              jobStatus: z
                .enum([
                  'SUBMITTED',
                  'PENDING',
                  'RUNNABLE',
                  'STARTING',
                  'RUNNING',
                  'SUCCEEDED',
                  'FAILED',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "The job status used to filter jobs in the specified queue. If the <code>filters</code> parameter is specified, the <code>jobStatus</code> parameter is ignored and jobs with any status are returned. If you don't specify a status, only <code>RUNNING</code> jobs are returned.",
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
                }),
              filters: z
                .array(KeyValuesPairSchema)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The filter to apply to the query. Only one filter can be used at a time. When the filter is used, <code>jobStatus</code> is ignored. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP) jobs. The results are sorted by the <code>createdAt</code> field, with the most recent jobs being first.</p> <dl> <dt>JOB_NAME</dt> <dd> <p>The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the <code>jobName</code> value. For example, <code>test1</code> matches both <code>Test1</code> and <code>test1</code>, and <code>test1*</code> matches both <code>test1</code> and <code>Test10</code>. When the <code>JOB_NAME</code> filter is used, the results are grouped by the job name and version.</p> </dd> <dt>JOB_DEFINITION</dt> <dd> <p>The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the <code>jobDefinition</code> value. The value is case sensitive. When the value for the filter is the job definition name, the results include all the jobs that used any revision of that job definition name. If the value ends with an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For example, <code>jd1</code> matches only <code>jd1</code>, and <code>jd1*</code> matches both <code>jd1</code> and <code>jd1A</code>. The version of the job definition that's used doesn't affect the sort order. When the <code>JOB_DEFINITION</code> filter is used and the ARN is used (which is in the form <code>arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code>), the results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the ARN is used.</p> </dd> <dt>BEFORE_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's before the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> <dt>AFTER_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's after the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> </dl>",
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
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1ListschedulingpoliciesRoute = createRoute({
  method: 'post',
  path: '/v1/listschedulingpolicies',
  description: 'Returns a list of Batch scheduling policies.',
  operationId: 'ListSchedulingPolicies',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of results that's returned by <code>ListSchedulingPolicies</code> in paginated output. When this parameter is used, <code>ListSchedulingPolicies</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListSchedulingPolicies</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, <code>ListSchedulingPolicies</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>nextToken</code> value that's returned from a previous paginated <code>ListSchedulingPolicies</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
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
      content: { 'application/json': { schema: ListSchedulingPoliciesResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const getV1TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v1/tags/{resourceArn}',
  description:
    "Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.",
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
              "The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.",
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
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/v1/tags/{resourceArn}',
  description:
    "Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.",
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
              "The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.",
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
                    'The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.',
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
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1RegisterjobdefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/registerjobdefinition',
  description: 'Registers an Batch job definition.',
  operationId: 'RegisterJobDefinition',
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
              jobDefinitionName: z
                .string()
                .openapi({
                  description:
                    'The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
                }),
              type: z
                .enum(['container', 'multinode'])
                .openapi({
                  description:
                    '<p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn\'t supported.</p> </note>',
                }),
              parameters: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.',
                }),
              schedulingPriority: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>',
                }),
              containerProperties: z
                .object({
                  image: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with <code> <i>repository-url</i>/<i>image</i>:<i>tag</i> </code>. It can be 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), underscores (_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>Docker image architecture must match the processor architecture of the compute resources that they\'re scheduled on. For example, ARM-based Docker images can only run on ARM-based compute resources.</p> </note> <ul> <li> <p>Images in Amazon ECR Public repositories use the full <code>registry/repository[:tag]</code> or <code>registry/repository[@digest]</code> naming conventions. For example, <code>public.ecr.aws/<i>registry_alias</i>/<i>my-web-app</i>:<i>latest</i> </code>.</p> </li> <li> <p>Images in Amazon ECR repositories use the full registry and repository URI (for example, <code>123456789012.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;</code>).</p> </li> <li> <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or <code>mongo</code>).</p> </li> <li> <p>Images in other repositories on Docker Hub are qualified with an organization name (for example, <code>amazon/amazon-ecs-agent</code>).</p> </li> <li> <p>Images in other online repositories are qualified further by a domain name (for example, <code>quay.io/assemblyline/ubuntu</code>).</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  vcpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        deprecated: true,
                        description:
                          '<p>This parameter is deprecated, use <code>resourceRequirements</code> to specify the vCPU requirements for the job definition. It\'s not supported for jobs running on Fargate resources. For jobs running on EC2 resources, it specifies the number of vCPUs reserved for the job.</p> <p>Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The number of vCPUs must be specified but can be specified in several places. You must specify it at least once for each node.</p>This field is deprecated, use resourceRequirements instead.',
                      }),
                  ).exactOptional(),
                  memory: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        deprecated: true,
                        description:
                          "This parameter is deprecated, use <code>resourceRequirements</code> to specify the memory requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it specifies the memory hard limit (in MiB) for a container. If your container attempts to exceed the specified number, it's terminated. You must specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can be specified in several places. It must be specified for each node at least once.This field is deprecated, use resourceRequirements instead.",
                      }),
                  ).exactOptional(),
                  command: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The command that\'s passed to the container. This parameter maps to <code>Cmd</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>.',
                      }),
                  ).exactOptional(),
                  jobRoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the IAM role that the container can assume for Amazon Web Services permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM roles for tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                  executionRoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the execution role that Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM role</a> in the <i>Batch User Guide</i>.',
                      }),
                  ).exactOptional(),
                  volumes: VolumesSchema.and(
                    z.any().openapi({ description: 'A list of data volumes used in a job.' }),
                  ).exactOptional(),
                  environment: EnvironmentVariablesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <important> <p>We don\'t recommend using plaintext environment variables for sensitive information, such as credential data.</p> </important> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
                      }),
                  ).exactOptional(),
                  mountPoints: MountPointsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The mount points for data volumes in your container. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.',
                      }),
                  ).exactOptional(),
                  readonlyRootFilesystem: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'When this parameter is true, the container is given read-only access to its root file system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--read-only</code> option to <code>docker run</code>.',
                      }),
                  ).exactOptional(),
                  privileged: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>When this parameter is true, the container is given elevated permissions on the host container instance (similar to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--privileged</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The default value is false.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources and shouldn\'t be provided, or specified as false.</p> </note>',
                      }),
                  ).exactOptional(),
                  ulimits: UlimitsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources and shouldn\'t be provided.</p> </note>',
                      }),
                  ).exactOptional(),
                  user: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The user name to use inside the container. This parameter maps to <code>User</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.',
                      }),
                  ).exactOptional(),
                  instanceType: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The instance type to use for a multi-node parallel job. All node groups in a multi-node parallel job must use the same instance type.</p> <note> <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.</p> </note>",
                      }),
                  ).exactOptional(),
                  resourceRequirements: ResourceRequirementsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type and amount of resources to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.',
                      }),
                  ).exactOptional(),
                  linuxParameters: LinuxParametersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Linux-specific modifications that are applied to the container, such as details for device mappings.',
                      }),
                  ).exactOptional(),
                  logConfiguration: LogConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The log configuration specification for the container.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. By default, containers use the same logging driver that the Docker daemon uses. However the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <note> <p>Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type).</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep "Server API version"</code> </p> <note> <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>',
                      }),
                  ).exactOptional(),
                  secrets: SecretListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The secrets for the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.',
                      }),
                  ).exactOptional(),
                  networkConfiguration: NetworkConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.',
                      }),
                  ).exactOptional(),
                  fargatePlatformConfiguration: FargatePlatformConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.',
                      }),
                  ).exactOptional(),
                  ephemeralStorage: EphemeralStorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.',
                      }),
                  ).exactOptional(),
                  runtimePlatform: RuntimePlatformSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.",
                  required: [],
                }),
              nodeProperties: z
                .object({
                  numNodes: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of nodes that are associated with a multi-node parallel job.',
                      }),
                  ).exactOptional(),
                  mainNode: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.',
                      }),
                  ).exactOptional(),
                  nodeRangeProperties: NodeRangePropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of node ranges and their properties that are associated with a multi-node parallel job.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "<p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note>",
                  required: [],
                }),
              retryStrategy: z
                .object({
                  attempts: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of times to move a job to the <code>RUNNABLE</code> status. You can specify between 1 and 10 attempts. If the value of <code>attempts</code> is greater than one, the job is retried on failure the same number of attempts as the value.',
                      }),
                  ).exactOptional(),
                  evaluateOnExit: EvaluateOnExitListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Array of up to 5 objects that specify the conditions where jobs are retried or failed. If this parameter is specified, then the <code>attempts</code> parameter must also be specified. If none of the listed conditions match, then the job is retried.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The retry strategy that\'s associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.',
                  required: [],
                }),
              propagateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>propagateTags</code>.</p> </note>',
                }),
              timeout: z
                .object({
                  attemptDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The job timeout time (in seconds) that's measured from the job attempt's <code>startedAt</code> timestamp. After this time passes, Batch terminates your jobs if they aren't finished. The minimum value for the timeout is 60 seconds.</p> <p>For array jobs, the timeout applies to the child jobs, not to the parent array job.</p> <p>For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the individual nodes.</p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An object that represents a job timeout configuration.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in <i>Batch User Guide</i>.',
                }),
              platformCapabilities: z
                .array(PlatformCapabilitySchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>platformCapabilities</code>.</p> </note>',
                }),
              eksProperties: z
                .object({
                  podProperties: EksPodPropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The properties for the Kubernetes pod resources of a job.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains the properties for the Kubernetes resources of a job.',
                  required: [],
                }),
            })
            .openapi({ required: ['jobDefinitionName', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterJobDefinitionResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1SubmitjobRoute = createRoute({
  method: 'post',
  path: '/v1/submitjob',
  description:
    "<p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>",
  operationId: 'SubmitJob',
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
              jobName: z
                .string()
                .openapi({
                  description:
                    'The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
                }),
              jobQueue: z
                .string()
                .openapi({
                  description:
                    'The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.',
                }),
              shareIdentifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The share identifier for the job. Don't specify this parameter if the job queue doesn't have a scheduling policy. If the job queue has a scheduling policy, then this parameter must be specified.</p> <p>This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).</p>",
                }),
              schedulingPriorityOverride: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>',
                }),
              arrayProperties: z
                .object({
                  size: IntegerSchema.and(
                    z.any().openapi({ description: 'The size of the array job.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An object that represents an Batch array job.',
                  required: [],
                }),
              dependsOn: z
                .array(JobDependencySchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.',
                }),
              jobDefinition: z
                .string()
                .openapi({
                  description:
                    '<p>The job definition used by this job. This value can be one of <code>definition-name</code>, <code>definition-name:revision</code>, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (<code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>:<i>revision</i> </code>, or <code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i> </code>).</p> <p>If the revision is not specified, then the latest active revision is used.</p>',
                }),
              parameters: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.',
                }),
              containerOverrides: z
                .object({
                  vcpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        deprecated: true,
                        description:
                          "This parameter is deprecated, use <code>resourceRequirements</code> to override the <code>vcpus</code> parameter that's set in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it overrides the <code>vcpus</code> parameter set in the job definition, but doesn't override any vCPU requirement specified in the <code>resourceRequirements</code> structure in the job definition. To override vCPU requirements that are specified in the <code>resourceRequirements</code> structure in the job definition, <code>resourceRequirements</code> must be specified in the <code>SubmitJob</code> request, with <code>type</code> set to <code>VCPU</code> and <code>value</code> set to the new value. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements\">Can't override job definition resource requirements</a> in the <i>Batch User Guide</i>.This field is deprecated, use resourceRequirements instead.",
                      }),
                  ).exactOptional(),
                  memory: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        deprecated: true,
                        description:
                          "This parameter is deprecated, use <code>resourceRequirements</code> to override the memory requirements specified in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it overrides the <code>memory</code> parameter set in the job definition, but doesn't override any memory requirement that's specified in the <code>resourceRequirements</code> structure in the job definition. To override memory requirements that are specified in the <code>resourceRequirements</code> structure in the job definition, <code>resourceRequirements</code> must be specified in the <code>SubmitJob</code> request, with <code>type</code> set to <code>MEMORY</code> and <code>value</code> set to the new value. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements\">Can't override job definition resource requirements</a> in the <i>Batch User Guide</i>.This field is deprecated, use resourceRequirements instead.",
                      }),
                  ).exactOptional(),
                  command: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The command to send to the container that overrides the default command from the Docker image or the job definition.</p> <note> <p>This parameter can't contain an empty string.</p> </note>",
                      }),
                  ).exactOptional(),
                  instanceType: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The instance type to use for a multi-node parallel job.</p> <note> <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.</p> </note>",
                      }),
                  ).exactOptional(),
                  environment: EnvironmentVariablesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.</p> <note> <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming convention is reserved for variables that Batch sets.</p> </note>',
                      }),
                  ).exactOptional(),
                  resourceRequirements: ResourceRequirementsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The overrides that should be sent to a container.</p> <p>For information about using Batch overrides when you connect event sources to targets, see <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p>',
                  required: [],
                }),
              nodeOverrides: z
                .object({
                  numNodes: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The number of nodes to use with a multi-node parallel job. This value overrides the number of nodes that are specified in the job definition. To use this override, you must meet the following conditions:</p> <ul> <li> <p>There must be at least one node range in your job definition that has an open upper boundary, such as <code>:</code> or <code>n:</code>.</p> </li> <li> <p>The lower boundary of the node range that's specified in the job definition must be fewer than the number of nodes specified in the override.</p> </li> <li> <p>The main node index that's specified in the job definition must be fewer than the number of nodes specified in the override.</p> </li> </ul>",
                      }),
                  ).exactOptional(),
                  nodePropertyOverrides: NodePropertyOverridesSchema.and(
                    z.any().openapi({ description: 'The node property overrides for the job.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "<p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note>",
                  required: [],
                }),
              retryStrategy: z
                .object({
                  attempts: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of times to move a job to the <code>RUNNABLE</code> status. You can specify between 1 and 10 attempts. If the value of <code>attempts</code> is greater than one, the job is retried on failure the same number of attempts as the value.',
                      }),
                  ).exactOptional(),
                  evaluateOnExit: EvaluateOnExitListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Array of up to 5 objects that specify the conditions where jobs are retried or failed. If this parameter is specified, then the <code>attempts</code> parameter must also be specified. If none of the listed conditions match, then the job is retried.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The retry strategy that\'s associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.',
                  required: [],
                }),
              propagateTags: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this overrides the tag propagation setting in the job definition.",
                }),
              timeout: z
                .object({
                  attemptDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The job timeout time (in seconds) that's measured from the job attempt's <code>startedAt</code> timestamp. After this time passes, Batch terminates your jobs if they aren't finished. The minimum value for the timeout is 60 seconds.</p> <p>For array jobs, the timeout applies to the child jobs, not to the parent array job.</p> <p>For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the individual nodes.</p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An object that represents a job timeout configuration.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.',
                }),
              eksPropertiesOverride: z
                .object({
                  podProperties: EksPodPropertiesOverrideSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The overrides for the Kubernetes pod resources of a job.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains overrides for the Kubernetes resources of a job.',
                  required: [],
                }),
            })
            .openapi({ required: ['jobName', 'jobQueue', 'jobDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubmitJobResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1TerminatejobRoute = createRoute({
  method: 'post',
  path: '/v1/terminatejob',
  description:
    'Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.',
  operationId: 'TerminateJob',
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
              jobId: z
                .string()
                .openapi({ description: 'The Batch job ID of the job to terminate.' }),
              reason: z
                .string()
                .openapi({
                  description:
                    'A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.',
                }),
            })
            .openapi({ required: ['jobId', 'reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TerminateJobResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const deleteV1TagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/v1/tags/{resourceArn}#tagKeys',
  description: 'Deletes specified tags from an Batch resource.',
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
              "The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.",
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
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1UpdatecomputeenvironmentRoute = createRoute({
  method: 'post',
  path: '/v1/updatecomputeenvironment',
  description: 'Updates an Batch compute environment.',
  operationId: 'UpdateComputeEnvironment',
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
              computeEnvironment: z
                .string()
                .openapi({
                  description:
                    'The name or full Amazon Resource Name (ARN) of the compute environment to update.',
                }),
              state: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state\">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>",
                }),
              unmanagedvCpus: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.",
                }),
              computeResources: z
                .object({
                  minvCpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The minimum number of vCPUs that an environment should maintain (even if the compute environment is <code>DISABLED</code>).</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                  maxvCpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The maximum number of Amazon EC2 vCPUs that an environment can reach.</p> <note> <p>With <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code>, and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> allocation strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance. That is, no more than a single instance from among those specified in your compute environment.</p> </note>',
                      }),
                  ).exactOptional(),
                  desiredvCpus: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The desired number of vCPUS in the compute environment. Batch modifies this value between the minimum and maximum values based on job queue demand.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <note> <p>Batch doesn't support changing the desired number of vCPUs of an existing compute environment. Don't specify this parameter for compute environments using Amazon EKS clusters.</p> </note> <note> <p>When you update the <code>desiredvCpus</code> setting, the value must be between the <code>minvCpus</code> and <code>maxvCpus</code> values. </p> <p>Additionally, the updated <code>desiredvCpus</code> value must be greater than or equal to the current <code>desiredvCpus</code> value. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#error-desired-vcpus-update\">Troubleshooting Batch</a> in the <i>Batch User Guide</i>.</p> </note>",
                      }),
                  ).exactOptional(),
                  subnets: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The VPC subnets where the compute resources are launched. Fargate compute resources can contain up to 16 subnets. For Fargate compute resources, providing an empty list will be handled as if this parameter wasn\'t specified and no change is made. For EC2 compute resources, providing an empty list removes the VPC subnets from the compute resource. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p> <p>When updating a compute environment, changing the VPC subnets requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones"> Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the <i>Amazon ECS Developer Guide</i>.</p> <p>Batch on Fargate doesn\'t currently support Local Zones.</p> </note>',
                      }),
                  ).exactOptional(),
                  securityGroupIds: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon EC2 security groups that are associated with instances launched in the compute environment. This parameter is required for Fargate compute resources, where it can contain up to 5 security groups. For Fargate compute resources, providing an empty list is handled as if this parameter wasn\'t specified and no change is made. For EC2 compute resources, providing an empty list removes the security groups from the compute resource.</p> <p>When updating a compute environment, changing the EC2 security groups requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  allocationStrategy: CRUpdateAllocationStrategySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The allocation strategy to use for the compute resource if there\'s not enough instances of the best fitting instance type that can be allocated. This might be because of availability of the instance type in the Region or <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html">Allocation strategies</a> in the <i>Batch User Guide</i>.</p> <p>When updating a compute environment, changing the allocation strategy requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. <code>BEST_FIT</code> isn\'t supported when updating a compute environment.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <dl> <dt>BEST_FIT_PROGRESSIVE</dt> <dd> <p>Batch selects additional instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously selected instance types aren\'t available, Batch selects new instance types.</p> </dd> <dt>SPOT_CAPACITY_OPTIMIZED</dt> <dd> <p>Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> <dt>SPOT_PRICE_CAPACITY_OPTIMIZED</dt> <dd> <p>The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price. This allocation strategy is only available for Spot Instance compute resources.</p> </dd> </dl> <p>With both <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code>, and <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> strategies using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code> by more than a single instance.</p>',
                      }),
                  ).exactOptional(),
                  instanceTypes: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The instances types that can be launched. You can specify instance families to launch any instance type within those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to select instance types (from the C4, M4, and R4 instance families) that match the demand of your job queues.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note> <note> <p>When you create a compute environment, the instance types that you select for the compute environment must share the same architecture. For example, you can't mix x86 and ARM instances in the same compute environment.</p> </note> <note> <p>Currently, <code>optimal</code> uses instance types from the C4, M4, and R4 instance families. In Regions that don't have instance types from those instance families, instance types from the C5, M5, and R5 instance families are used.</p> </note>",
                      }),
                  ).exactOptional(),
                  ec2KeyPair: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to log in to your instances with SSH. To remove the Amazon EC2 key pair, set this value to an empty string.</p> <p>When updating a compute environment, changing the EC2 key pair requires an infrastructure update of the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                  instanceRole: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, <code> <i>ecsInstanceRole</i> </code> or <code>arn:aws:iam::<i>&lt;aws_account_id&gt;</i>:instance-profile/<i>ecsInstanceRole</i> </code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance role</a> in the <i>Batch User Guide</i>.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  tags: TagsMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For Batch, these take the form of <code>"String1": "String2"</code>, where <code>String1</code> is the tag key and <code>String2</code> is the tag value-for example, <code>{ "Name": "Batch Instance - C4OnDemand" }</code>. This is helpful for recognizing your Batch instances in the Amazon EC2 console. These tags aren\'t seen when using the Batch <code>ListTagsForResource</code> API operation.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  placementGroup: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>When updating a compute environment, changing the placement group requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  bidPercentage: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, the Spot price must be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. For most use cases, we recommend leaving this field empty.</p> <p>When updating a compute environment, changing the bid percentage requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  launchTemplate: LaunchTemplateSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The updated launch template to use for your compute resources. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Batch User Guide</i>. To remove the custom launch template and use the default launch template, set <code>launchTemplateId</code> or <code>launchTemplateName</code> member of the launch template specification to an empty string. Removing the launch template from a compute environment will not remove the AMI specified in the launch template. In order to update the AMI specified in a launch template, the <code>updateToLatestImageVersion</code> parameter must be set to <code>true</code>.</p> <p>When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note>',
                      }),
                  ).exactOptional(),
                  ec2Configuration: Ec2ConfigurationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code>.</p> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html\">Updating compute environments</a> in the <i>Batch User Guide</i>. To remove the EC2 configuration and any custom AMI ID specified in <code>imageIdOverride</code>, set this value to an empty string.</p> <p>One or two values can be provided.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p> </note>",
                      }),
                  ).exactOptional(),
                  updateToLatestImageVersion: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies whether the AMI ID is updated to the latest one that\'s supported by Batch when the compute environment has an infrastructure update. The default value is <code>false</code>.</p> <note> <p>An AMI ID can either be specified in the <code>imageId</code> or <code>imageIdOverride</code> parameters or be determined by the launch template that\'s specified in the <code>launchTemplate</code> parameter. If an AMI ID is specified any of these ways, this parameter is ignored. For more information about to update AMI IDs during an infrastructure update, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html#updating-compute-environments-ami">Updating the AMI ID</a> in the <i>Batch User Guide</i>.</p> </note> <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  type: CRTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>, or <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.</p> <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the <i>Batch User Guide</i>.</p> <p>When updating a compute environment, changing the type of a compute environment requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  imageId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is overridden by the <code>imageIdOverride</code> member of the <code>Ec2Configuration</code> structure. To remove the custom AMI ID and use the default AMI ID, set this value to an empty string.</p> <p>When updating a compute environment, changing the AMI ID requires an infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> <note> <p>This parameter isn\'t applicable to jobs that are running on Fargate resources. Don\'t specify it.</p> </note> <note> <p>The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized Amazon Linux 2 AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that represents the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.',
                  required: [],
                }),
              serviceRole: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If the compute environment has a service-linked role, it can\'t be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can\'t be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the <b>AWSServiceRoleForBatch</b> service-linked role must be used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn\'t use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>',
                }),
              updatePolicy: z
                .object({
                  terminateJobsOnUpdate: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether jobs are automatically terminated when the computer environment infrastructure is updated. The default value is <code>false</code>.',
                      }),
                  ).exactOptional(),
                  jobExecutionTimeoutMinutes: JobExecutionTimeoutMinutesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the job timeout (in minutes) when the compute environment infrastructure is updated. The default value is 30.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.',
                  required: [],
                }),
            })
            .openapi({ required: ['computeEnvironment'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateComputeEnvironmentResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1UpdatejobqueueRoute = createRoute({
  method: 'post',
  path: '/v1/updatejobqueue',
  description: 'Updates a job queue.',
  operationId: 'UpdateJobQueue',
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
              jobQueue: z
                .string()
                .openapi({
                  description: 'The name or the Amazon Resource Name (ARN) of the job queue.',
                }),
              state: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    "Describes the queue's ability to accept new jobs. If the job queue state is <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.",
                }),
              schedulingPolicyArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Amazon Resource Name (ARN) of the fair share scheduling policy. Once a job queue is created, the fair share scheduling policy can be replaced but not removed. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. For example, <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.',
                }),
              priority: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.",
                }),
              computeEnvironmentOrder: z
                .array(ComputeEnvironmentOrderSchema)
                .exactOptional()
                .openapi({
                  description:
                    "<p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>",
                }),
            })
            .openapi({ required: ['jobQueue'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateJobQueueResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postV1UpdateschedulingpolicyRoute = createRoute({
  method: 'post',
  path: '/v1/updateschedulingpolicy',
  description: 'Updates a scheduling policy.',
  operationId: 'UpdateSchedulingPolicy',
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
              arn: z
                .string()
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the scheduling policy to update.',
                }),
              fairsharePolicy: z
                .object({
                  shareDecaySeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The amount of time (in seconds) to use to calculate a fair share percentage for each fair share identifier in use. A value of zero (0) indicates that only current usage is measured. The decay allows for more recently run jobs to have more weight than jobs that ran earlier. The maximum supported value is 604800 (1 week).',
                      }),
                  ).exactOptional(),
                  computeReservation: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A value used to reserve some of the available maximum vCPU for fair share identifiers that aren't already used.</p> <p>The reserved ratio is <code>(<i>computeReservation</i>/100)^<i>ActiveFairShares</i> </code> where <code> <i>ActiveFairShares</i> </code> is the number of active fair share identifiers.</p> <p>For example, a <code>computeReservation</code> value of 50 indicates that Batchreserves 50% of the maximum available vCPU if there's only one fair share identifier. It reserves 25% if there are two fair share identifiers. It reserves 12.5% if there are three fair share identifiers. A <code>computeReservation</code> value of 25 indicates that Batch should reserve 25% of the maximum available vCPU if there's only one fair share identifier, 6.25% if there are two fair share identifiers, and 1.56% if there are three fair share identifiers.</p> <p>The minimum value is 0 and the maximum value is 99.</p>",
                      }),
                  ).exactOptional(),
                  shareDistribution: ShareAttributesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "An array of <code>SharedIdentifier</code> objects that contain the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The fair share policy for a scheduling policy.',
                  required: [],
                }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSchedulingPolicyResponseSchema } },
    },
    480: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    481: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})
