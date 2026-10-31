import { createRoute, z } from '@hono/zod-openapi'

type StringType = string

const StringSchema: z.ZodType<StringType> = z.string().openapi('String')

type StringMapType = { [key: string]: z.infer<typeof StringSchema> }

const XmlStringMaxLen256Schema = z
  .string()
  .min(0)
  .max(256)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('XmlStringMaxLen256')

const XmlStringSchema = z
  .string()
  .min(0)
  .max(10280)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('XmlString')

const XmlStringListSchema = z.array(XmlStringSchema).openapi('XmlStringList')

const ScriptBootstrapActionConfigSchema = z
  .object({
    Path: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Location in Amazon S3 of the script to run during a bootstrap action.',
        }),
    ),
    Args: XmlStringListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of command line arguments to pass to the bootstrap action script.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Path'],
    description: 'Configuration of the script to run during a bootstrap action.',
  })
  .openapi('ScriptBootstrapActionConfig')

type BootstrapActionConfigType = {
  Name: z.infer<typeof XmlStringMaxLen256Schema> & { [key: string]: unknown }
  ScriptBootstrapAction: z.infer<typeof ScriptBootstrapActionConfigSchema> & {
    [key: string]: unknown
  }
}

const ConfigurationSchema: z.ZodType<ConfigurationType> = z
  .lazy(() =>
    z
      .object({
        Classification: StringSchema.and(
          z.any().openapi({ description: 'The classification within a configuration.' }),
        ).exactOptional(),
        Configurations: ConfigurationListSchema.and(
          z
            .any()
            .openapi({
              description:
                'A list of additional configurations to apply within a configuration object.',
            }),
        ).exactOptional(),
        Properties: StringMapSchema.and(
          z
            .any()
            .openapi({
              description: 'A set of properties specified within a configuration classification.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>',
        required: [],
      }),
  )
  .openapi('Configuration')

type ConfigurationListType = z.infer<typeof ConfigurationSchema>[]

const ConfigurationListSchema: z.ZodType<ConfigurationListType> = z
  .lazy(() => z.array(ConfigurationSchema))
  .openapi('ConfigurationList')

const StringMapSchema: z.ZodType<StringMapType> = z
  .record(z.string(), StringSchema)
  .openapi('StringMap')

type ConfigurationType = {
  Classification?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  Configurations?: z.infer<typeof ConfigurationListSchema> & { [key: string]: unknown }
  Properties?: z.infer<typeof StringMapSchema> & { [key: string]: unknown }
}

const ActionOnFailureSchema = z
  .enum(['TERMINATE_JOB_FLOW', 'TERMINATE_CLUSTER', 'CANCEL_AND_WAIT', 'CONTINUE'])
  .openapi('ActionOnFailure')

const KeyValueSchema = z
  .object({
    Key: XmlStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of a key-value pair.' }),
    ).exactOptional(),
    Value: XmlStringSchema.and(
      z.any().openapi({ description: 'The value part of the identified key.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A key-value pair.', required: [] })
  .openapi('KeyValue')

const KeyValueListSchema = z.array(KeyValueSchema).openapi('KeyValueList')

const HadoopJarStepConfigSchema = z
  .object({
    Properties: KeyValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Java properties that are set when the step runs. You can use these properties to pass key-value pairs to your main function.',
        }),
    ).exactOptional(),
    Jar: XmlStringSchema.and(
      z.any().openapi({ description: 'A path to a JAR file run during the step.' }),
    ),
    MainClass: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.',
        }),
    ).exactOptional(),
    Args: XmlStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of command line arguments passed to the JAR file's main function when executed.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Jar'],
    description:
      'A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.',
  })
  .openapi('HadoopJarStepConfig')

type StepConfigType = {
  Name: z.infer<typeof XmlStringMaxLen256Schema> & { [key: string]: unknown }
  ActionOnFailure?: z.infer<typeof ActionOnFailureSchema> & { [key: string]: unknown }
  HadoopJarStep: z.infer<typeof HadoopJarStepConfigSchema> & { [key: string]: unknown }
}

const InstanceFleetIdSchema = z.string().openapi('InstanceFleetId')

const ArnTypeSchema = z.string().min(20).max(2048).openapi('ArnType')

const AddInstanceFleetOutputSchema = z
  .object({
    ClusterId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of the cluster.' }),
    ).exactOptional(),
    InstanceFleetId: InstanceFleetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the instance fleet.' }),
    ).exactOptional(),
    ClusterArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the cluster.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddInstanceFleetOutput')

const InstanceFleetTypeSchema = z.enum(['MASTER', 'CORE', 'TASK']).openapi('InstanceFleetType')

const WholeNumberSchema = z.int().min(0).openapi('WholeNumber')

const InstanceTypeSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('InstanceType')

const NonNegativeDoubleSchema = z.float64().min(0).openapi('NonNegativeDouble')

const IntegerSchema = z.int().openapi('Integer')

const ThroughputValSchema = z.int().min(0).openapi('ThroughputVal')

const VolumeSpecificationSchema = z
  .object({
    VolumeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The volume type. Volume types supported are gp3, gp2, io1, st1, sc1, and standard.',
        }),
    ),
    Iops: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of I/O operations per second (IOPS) that the volume supports.',
        }),
    ).exactOptional(),
    SizeInGB: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.',
        }),
    ),
    Throughput: ThroughputValSchema.and(
      z
        .any()
        .openapi({
          description:
            'The throughput, in mebibyte per second (MiB/s). This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VolumeType', 'SizeInGB'],
    description:
      'EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an EC2 instance in the cluster.',
  })
  .openapi('VolumeSpecification')

const EbsBlockDeviceConfigSchema = z
  .object({
    VolumeSpecification: VolumeSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an EC2 instance in the cluster.',
        }),
    ),
    VolumesPerInstance: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of EBS volumes with a specific volume configuration that are associated with every instance in the instance group',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VolumeSpecification'],
    description:
      'Configuration of requested EBS block device associated with the instance group with count of volumes that are associated to every instance.',
  })
  .openapi('EbsBlockDeviceConfig')

const EbsBlockDeviceConfigListSchema = z
  .array(EbsBlockDeviceConfigSchema)
  .openapi('EbsBlockDeviceConfigList')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const EbsConfigurationSchema = z
  .object({
    EbsBlockDeviceConfigs: EbsBlockDeviceConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon EBS volume specifications attached to a cluster instance.',
        }),
    ).exactOptional(),
    EbsOptimized: BooleanObjectSchema.and(
      z.any().openapi({ description: 'Indicates whether an Amazon EBS volume is EBS-optimized.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The Amazon EBS configuration of a cluster instance.', required: [] })
  .openapi('EbsConfiguration')

const InstanceTypeConfigSchema = z
  .object({
    InstanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'An EC2 instance type, such as <code>m3.xlarge</code>. ' }),
    ),
    WeightedCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in <a>InstanceFleetConfig</a>. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified. ',
        }),
    ).exactOptional(),
    BidPrice: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The bid price for each EC2 Spot Instance type as defined by <code>InstanceType</code>. Expressed in USD. If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%. ',
        }),
    ).exactOptional(),
    BidPriceAsPercentageOfOnDemandPrice: NonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bid price, as a percentage of On-Demand price, for each EC2 Spot Instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%). If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.',
        }),
    ).exactOptional(),
    EbsConfiguration: EbsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by <code>InstanceType</code>. ',
        }),
    ).exactOptional(),
    Configurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.',
        }),
    ).exactOptional(),
    CustomAmiId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The custom AMI ID to use for the instance type.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceType'],
    description:
      '<p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
  })
  .openapi('InstanceTypeConfig')

const InstanceTypeConfigListSchema = z
  .array(InstanceTypeConfigSchema)
  .openapi('InstanceTypeConfigList')

const SpotProvisioningTimeoutActionSchema = z
  .enum(['SWITCH_TO_ON_DEMAND', 'TERMINATE_CLUSTER'])
  .openapi('SpotProvisioningTimeoutAction')

const SpotProvisioningAllocationStrategySchema = z
  .literal('capacity-optimized')
  .openapi('SpotProvisioningAllocationStrategy')

const SpotProvisioningSpecificationSchema = z
  .object({
    TimeoutDurationMinutes: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Spot provisioning timeout period in minutes. If Spot Instances are not provisioned within this time period, the <code>TimeOutAction</code> is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.',
        }),
    ),
    TimeoutAction: SpotProvisioningTimeoutActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action to take when <code>TargetSpotCapacity</code> has not been fulfilled when the <code>TimeoutDurationMinutes</code> has expired; that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are <code>TERMINATE_CLUSTER</code> and <code>SWITCH_TO_ON_DEMAND</code>. SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.',
        }),
    ),
    BlockDurationMinutes: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The defined duration for Spot Instances (also known as Spot blocks) in minutes. When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot Instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination and provides a Spot Instance termination notice, which gives the instance a two-minute warning before it terminates. </p> <note> <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. </p> </note>',
        }),
    ).exactOptional(),
    AllocationStrategy: SpotProvisioningAllocationStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the strategy to use in launching Spot Instance fleets. Currently, the only option is capacity-optimized (the default), which launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TimeoutDurationMinutes', 'TimeoutAction'],
    description:
      '<p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note> <note> <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. </p> </note>',
  })
  .openapi('SpotProvisioningSpecification')

const OnDemandProvisioningAllocationStrategySchema = z
  .literal('lowest-price')
  .openapi('OnDemandProvisioningAllocationStrategy')

const OnDemandCapacityReservationUsageStrategySchema = z
  .literal('use-capacity-reservations-first')
  .openapi('OnDemandCapacityReservationUsageStrategy')

const OnDemandCapacityReservationPreferenceSchema = z
  .enum(['open', 'none'])
  .openapi('OnDemandCapacityReservationPreference')

const OnDemandCapacityReservationOptionsSchema = z
  .object({
    UsageStrategy: OnDemandCapacityReservationUsageStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.</p> <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If multiple instance pools have unused Capacity Reservations, the On-Demand allocation strategy (<code>lowest-price</code>) is applied. If the number of unused Capacity Reservations is less than the On-Demand target capacity, the remaining On-Demand target capacity is launched according to the On-Demand allocation strategy (<code>lowest-price</code>).</p> <p>If you do not specify a value, the fleet fulfills the On-Demand capacity according to the chosen On-Demand allocation strategy.</p>',
        }),
    ).exactOptional(),
    CapacityReservationPreference: OnDemandCapacityReservationPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p> <ul> <li> <p> <code>open</code> - The instance can run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).</p> </li> <li> <p> <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance runs as an On-Demand Instance.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CapacityReservationResourceGroupArn: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Capacity Reservation resource group in which to run the instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.',
    required: [],
  })
  .openapi('OnDemandCapacityReservationOptions')

const OnDemandProvisioningSpecificationSchema = z
  .object({
    AllocationStrategy: OnDemandProvisioningAllocationStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the strategy to use in launching On-Demand instance fleets. Currently, the only option is <code>lowest-price</code> (the default), which launches the lowest price first.',
        }),
    ),
    CapacityReservationOptions: OnDemandCapacityReservationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The launch specification for On-Demand instances in the instance fleet, which determines the allocation strategy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AllocationStrategy'],
    description:
      '<p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>',
  })
  .openapi('OnDemandProvisioningSpecification')

const InstanceFleetProvisioningSpecificationsSchema = z
  .object({
    SpotSpecification: SpotProvisioningSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The launch specification for Spot instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.',
        }),
    ).exactOptional(),
    OnDemandSpecification: OnDemandProvisioningSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The launch specification for Spot Instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot instance allocation strategies are available in Amazon EMR version 5.12.1 and later.</p> </note>',
    required: [],
  })
  .openapi('InstanceFleetProvisioningSpecifications')

const SpotResizingSpecificationSchema = z
  .object({
    TimeoutDurationMinutes: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Spot resize timeout in minutes. If Spot Instances are not provisioned within this time, the resize workflow will stop provisioning of Spot instances. Minimum value is 5 minutes and maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.',
        }),
    ),
  })
  .openapi({
    required: ['TimeoutDurationMinutes'],
    description:
      'The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period. ',
  })
  .openapi('SpotResizingSpecification')

const OnDemandResizingSpecificationSchema = z
  .object({
    TimeoutDurationMinutes: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'On-Demand resize timeout in minutes. If On-Demand Instances are not provisioned within this time, the resize workflow stops. The minimum value is 5 minutes, and the maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.',
        }),
    ),
  })
  .openapi({
    required: ['TimeoutDurationMinutes'],
    description:
      'The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period. ',
  })
  .openapi('OnDemandResizingSpecification')

const InstanceFleetResizingSpecificationsSchema = z
  .object({
    SpotResizeSpecification: SpotResizingSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period. ',
        }),
    ).exactOptional(),
    OnDemandResizeSpecification: OnDemandResizingSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The resize specification for On-Demand and Spot Instances in the fleet.',
    required: [],
  })
  .openapi('InstanceFleetResizingSpecifications')

const InstanceFleetConfigSchema = z
  .object({
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The friendly name of the instance fleet.' }),
    ).exactOptional(),
    InstanceFleetType: InstanceFleetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The node type that the instance fleet hosts. Valid values are MASTER, CORE, and TASK.',
        }),
    ),
    TargetOnDemandCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand Instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand Instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.</p> <note> <p>If not specified or set to 0, only Spot Instances are provisioned for the instance fleet using <code>TargetSpotCapacity</code>. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>',
        }),
    ).exactOptional(),
    TargetSpotCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot Instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When a Spot Instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.</p> <note> <p>If not specified or set to 0, only On-Demand Instances are provisioned for the instance fleet. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>',
        }),
    ).exactOptional(),
    InstanceTypeConfigs: InstanceTypeConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance type configurations that define the EC2 instances in the instance fleet.',
        }),
    ).exactOptional(),
    LaunchSpecifications: InstanceFleetProvisioningSpecificationsSchema.and(
      z.any().openapi({ description: 'The launch specification for the instance fleet.' }),
    ).exactOptional(),
    ResizeSpecifications: InstanceFleetResizingSpecificationsSchema.and(
      z.any().openapi({ description: 'The resize specification for the instance fleet.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceFleetType'],
    description:
      '<p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
  })
  .openapi('InstanceFleetConfig')

const AddInstanceFleetInputSchema = z
  .object({
    ClusterId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of the cluster.' }),
    ),
    InstanceFleet: InstanceFleetConfigSchema.and(
      z.any().openapi({ description: 'Specifies the configuration of the instance fleet.' }),
    ),
  })
  .openapi({ required: ['ClusterId', 'InstanceFleet'], title: 'AddInstanceFleetInput' })
  .openapi('AddInstanceFleetInput')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InstanceGroupIdsListSchema = z.array(XmlStringMaxLen256Schema).openapi('InstanceGroupIdsList')

const AddInstanceGroupsOutputSchema = z
  .object({
    JobFlowId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The job flow ID in which the instance groups are added.' }),
    ).exactOptional(),
    InstanceGroupIds: InstanceGroupIdsListSchema.and(
      z.any().openapi({ description: 'Instance group IDs of the newly created instance groups.' }),
    ).exactOptional(),
    ClusterArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the cluster.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Output from an AddInstanceGroups call.', required: [] })
  .openapi('AddInstanceGroupsOutput')

const MarketTypeSchema = z.enum(['ON_DEMAND', 'SPOT']).openapi('MarketType')

const InstanceRoleTypeSchema = z.enum(['MASTER', 'CORE', 'TASK']).openapi('InstanceRoleType')

const ScalingConstraintsSchema = z
  .object({
    MinCapacity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The lower boundary of EC2 instances in an instance group below which scaling activities are not allowed to shrink. Scale-in activities will not terminate instances below this boundary.',
        }),
    ),
    MaxCapacity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upper boundary of EC2 instances in an instance group beyond which scaling activities are not allowed to grow. Scale-out activities will not add instances beyond this boundary.',
        }),
    ),
  })
  .openapi({
    required: ['MinCapacity', 'MaxCapacity'],
    description:
      'The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.',
  })
  .openapi('ScalingConstraints')

const AdjustmentTypeSchema = z
  .enum(['CHANGE_IN_CAPACITY', 'PERCENT_CHANGE_IN_CAPACITY', 'EXACT_CAPACITY'])
  .openapi('AdjustmentType')

const SimpleScalingPolicyConfigurationSchema = z
  .object({
    AdjustmentType: AdjustmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The way in which EC2 instances are added (if <code>ScalingAdjustment</code> is a positive number) or terminated (if <code>ScalingAdjustment</code> is a negative number) each time the scaling activity is triggered. <code>CHANGE_IN_CAPACITY</code> is the default. <code>CHANGE_IN_CAPACITY</code> indicates that the EC2 instance count increments or decrements by <code>ScalingAdjustment</code>, which should be expressed as an integer. <code>PERCENT_CHANGE_IN_CAPACITY</code> indicates the instance count increments or decrements by the percentage specified by <code>ScalingAdjustment</code>, which should be expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster capacity. <code>EXACT_CAPACITY</code> indicates the scaling activity results in an instance group with the number of EC2 instances specified by <code>ScalingAdjustment</code>, which should be expressed as a positive integer.',
        }),
    ).exactOptional(),
    ScalingAdjustment: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount by which to scale in or scale out, based on the specified <code>AdjustmentType</code>. A positive value adds to the instance group's EC2 instance count while a negative number removes instances. If <code>AdjustmentType</code> is set to <code>EXACT_CAPACITY</code>, the number should only be a positive integer. If <code>AdjustmentType</code> is set to <code>PERCENT_CHANGE_IN_CAPACITY</code>, the value should express the percentage as an integer. For example, -20 indicates a decrease in 20% increments of cluster capacity.",
        }),
    ),
    CoolDown: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. The default value is 0.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ScalingAdjustment'],
    description:
      'An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.',
  })
  .openapi('SimpleScalingPolicyConfiguration')

const ScalingActionSchema = z
  .object({
    Market: MarketTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Not available for instance groups. Instance groups use the market type specified for the group.',
        }),
    ).exactOptional(),
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.',
        }),
    ),
  })
  .openapi({
    required: ['SimpleScalingPolicyConfiguration'],
    description:
      'The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.',
  })
  .openapi('ScalingAction')

const ComparisonOperatorSchema = z
  .enum(['GREATER_THAN_OR_EQUAL', 'GREATER_THAN', 'LESS_THAN', 'LESS_THAN_OR_EQUAL'])
  .openapi('ComparisonOperator')

const StatisticSchema = z
  .enum(['SAMPLE_COUNT', 'AVERAGE', 'SUM', 'MINIMUM', 'MAXIMUM'])
  .openapi('Statistic')

const UnitSchema = z
  .enum([
    'NONE',
    'SECONDS',
    'MICRO_SECONDS',
    'MILLI_SECONDS',
    'BYTES',
    'KILO_BYTES',
    'MEGA_BYTES',
    'GIGA_BYTES',
    'TERA_BYTES',
    'BITS',
    'KILO_BITS',
    'MEGA_BITS',
    'GIGA_BITS',
    'TERA_BITS',
    'PERCENT',
    'COUNT',
    'BYTES_PER_SECOND',
    'KILO_BYTES_PER_SECOND',
    'MEGA_BYTES_PER_SECOND',
    'GIGA_BYTES_PER_SECOND',
    'TERA_BYTES_PER_SECOND',
    'BITS_PER_SECOND',
    'KILO_BITS_PER_SECOND',
    'MEGA_BITS_PER_SECOND',
    'GIGA_BITS_PER_SECOND',
    'TERA_BITS_PER_SECOND',
    'COUNT_PER_SECOND',
  ])
  .openapi('Unit')

const MetricDimensionSchema = z
  .object({
    Key: StringSchema.and(z.any().openapi({ description: 'The dimension name.' })).exactOptional(),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The dimension value.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available.',
    required: [],
  })
  .openapi('MetricDimension')

const MetricDimensionListSchema = z.array(MetricDimensionSchema).openapi('MetricDimensionList')

const CloudWatchAlarmDefinitionSchema = z
  .object({
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines how the metric specified by <code>MetricName</code> is compared to the value specified by <code>Threshold</code>.',
        }),
    ),
    EvaluationPeriods: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of periods, in five-minute increments, during which the alarm condition must exist before the alarm triggers automatic scaling activity. The default value is <code>1</code>.',
        }),
    ).exactOptional(),
    MetricName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the CloudWatch metric that is watched to determine an alarm condition.',
        }),
    ),
    Namespace: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace for the CloudWatch metric. The default is <code>AWS/ElasticMapReduce</code>.',
        }),
    ).exactOptional(),
    Period: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period, in seconds, over which the statistic is applied. EMR CloudWatch metrics are emitted every five minutes (300 seconds), so if an EMR CloudWatch metric is specified, specify <code>300</code>.',
        }),
    ),
    Statistic: StatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The statistic to apply to the metric associated with the alarm. The default is <code>AVERAGE</code>.',
        }),
    ).exactOptional(),
    Threshold: NonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({ description: 'The value against which the specified statistic is compared.' }),
    ),
    Unit: UnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of measure associated with the CloudWatch metric being watched. The value specified for <code>Unit</code> must correspond to the units specified in the CloudWatch metric.',
        }),
    ).exactOptional(),
    Dimensions: MetricDimensionListSchema.and(
      z.any().openapi({ description: 'A CloudWatch metric dimension.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ComparisonOperator', 'MetricName', 'Period', 'Threshold'],
    description:
      'The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.',
  })
  .openapi('CloudWatchAlarmDefinition')

const ScalingTriggerSchema = z
  .object({
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.',
        }),
    ),
  })
  .openapi({
    required: ['CloudWatchAlarmDefinition'],
    description: 'The conditions that trigger an automatic scaling activity.',
  })
  .openapi('ScalingTrigger')

const ScalingRuleSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name used to identify an automatic scaling rule. Rule names must be unique within a scaling policy.',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A friendly, more verbose description of the automatic scaling rule.',
        }),
    ).exactOptional(),
    Action: ScalingActionSchema.and(
      z
        .any()
        .openapi({ description: 'The conditions that trigger an automatic scaling activity.' }),
    ),
    Trigger: ScalingTriggerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CloudWatch alarm definition that determines when automatic scaling activity is triggered.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Action', 'Trigger'],
    description:
      'A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.',
  })
  .openapi('ScalingRule')

const ScalingRuleListSchema = z.array(ScalingRuleSchema).openapi('ScalingRuleList')

const AutoScalingPolicySchema = z
  .object({
    Constraints: ScalingConstraintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.',
        }),
    ),
    Rules: ScalingRuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scale-in and scale-out rules that comprise the automatic scaling policy.',
        }),
    ),
  })
  .openapi({
    required: ['Constraints', 'Rules'],
    description:
      'An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.',
  })
  .openapi('AutoScalingPolicy')

const InstanceGroupConfigSchema = z
  .object({
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'Friendly name given to the instance group.' }),
    ).exactOptional(),
    Market: MarketTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Market type of the EC2 instances used to create a cluster node.',
        }),
    ).exactOptional(),
    InstanceRole: InstanceRoleTypeSchema.and(
      z.any().openapi({ description: 'The role of the instance group in the cluster.' }),
    ),
    BidPrice: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify <code>OnDemandPrice</code> to set the amount equal to the On-Demand price, or specify an amount in USD.',
        }),
    ).exactOptional(),
    InstanceType: InstanceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The EC2 instance type for all instances in the instance group.' }),
    ),
    InstanceCount: IntegerSchema.and(
      z.any().openapi({ description: 'Target number of instances for the instance group.' }),
    ),
    Configurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>',
        }),
    ).exactOptional(),
    EbsConfiguration: EbsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'EBS configurations that will be attached to each EC2 instance in the instance group.',
        }),
    ).exactOptional(),
    AutoScalingPolicy: AutoScalingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.',
        }),
    ).exactOptional(),
    CustomAmiId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({ description: 'The custom AMI ID to use for the provisioned instance group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceRole', 'InstanceType', 'InstanceCount'],
    description: 'Configuration defining a new instance group.',
  })
  .openapi('InstanceGroupConfig')

const InstanceGroupConfigListSchema = z
  .array(InstanceGroupConfigSchema)
  .openapi('InstanceGroupConfigList')

const AddInstanceGroupsInputSchema = z
  .object({
    InstanceGroups: InstanceGroupConfigListSchema.and(
      z.any().openapi({ description: 'Instance groups to add.' }),
    ),
    JobFlowId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'Job flow in which to add the instance groups.' }),
    ),
  })
  .openapi({
    required: ['InstanceGroups', 'JobFlowId'],
    title: 'AddInstanceGroupsInput',
    description: 'Input to an AddInstanceGroups call.',
  })
  .openapi('AddInstanceGroupsInput')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const StepIdsListSchema = z.array(XmlStringMaxLen256Schema).openapi('StepIdsList')

const AddJobFlowStepsOutputSchema = z
  .object({
    StepIds: StepIdsListSchema.and(
      z
        .any()
        .openapi({ description: 'The identifiers of the list of steps added to the job flow.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The output for the <a>AddJobFlowSteps</a> operation. ', required: [] })
  .openapi('AddJobFlowStepsOutput')

const StepConfigSchema: z.ZodType<StepConfigType> = z
  .lazy(() =>
    z
      .object({
        Name: XmlStringMaxLen256Schema.and(
          z.any().openapi({ description: 'The name of the step.' }),
        ),
        ActionOnFailure: ActionOnFailureSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>The action to take when the step fails. Use one of the following values:</p> <ul> <li> <p> <code>TERMINATE_CLUSTER</code> - Shuts down the cluster.</p> </li> <li> <p> <code>CANCEL_AND_WAIT</code> - Cancels any pending steps and returns the cluster to the <code>WAITING</code> state.</p> </li> <li> <p> <code>CONTINUE</code> - Continues to the next step in the queue.</p> </li> <li> <p> <code>TERMINATE_JOB_FLOW</code> - Shuts down the cluster. <code>TERMINATE_JOB_FLOW</code> is provided for backward compatibility. We recommend using <code>TERMINATE_CLUSTER</code> instead.</p> </li> </ul> <p>If a cluster's <code>StepConcurrencyLevel</code> is greater than <code>1</code>, do not use <code>AddJobFlowSteps</code> to submit a step with this parameter set to <code>CANCEL_AND_WAIT</code> or <code>TERMINATE_CLUSTER</code>. The step is not submitted and the action fails with a message that the <code>ActionOnFailure</code> setting is not valid.</p> <p>If you change a cluster's <code>StepConcurrencyLevel</code> to be greater than 1 while a step is running, the <code>ActionOnFailure</code> parameter may not behave as you expect. In this case, for a step that fails with this parameter set to <code>CANCEL_AND_WAIT</code>, pending steps and the running step are not canceled; for a step that fails with this parameter set to <code>TERMINATE_CLUSTER</code>, the cluster does not terminate.</p>",
            }),
        ).exactOptional(),
        HadoopJarStep: HadoopJarStepConfigSchema.and(
          z.any().openapi({ description: 'The JAR file used for the step.' }),
        ),
      })
      .openapi({
        required: ['Name', 'HadoopJarStep'],
        description: 'Specification for a cluster (job flow) step.',
      }),
  )
  .openapi('StepConfig')

const StepConfigListSchema = z.array(StepConfigSchema).openapi('StepConfigList')

const AddJobFlowStepsInputSchema = z
  .object({
    JobFlowId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'A string that uniquely identifies the job flow. This identifier is returned by <a>RunJobFlow</a> and can also be obtained from <a>ListClusters</a>. ',
        }),
    ),
    Steps: StepConfigListSchema.and(
      z
        .any()
        .openapi({ description: ' A list of <a>StepConfig</a> to be executed by the job flow. ' }),
    ),
    ExecutionRoleArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the runtime role for a step on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: <code>arn:partition:service:region:account:resource</code>. </p> <p>For example, <code>arn:aws:iam::1234567890:role/ReadOnly</code> is a correctly formatted runtime role ARN.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['JobFlowId', 'Steps'],
    title: 'AddJobFlowStepsInput',
    description: ' The input argument to the <a>AddJobFlowSteps</a> operation. ',
  })
  .openapi('AddJobFlowStepsInput')

const AddTagsOutputSchema = z
  .object({})
  .openapi({ description: 'This output indicates the result of adding tags to a resource.' })
  .openapi('AddTagsOutput')

const ResourceIdSchema = z.string().openapi('ResourceId')

const TagSchema = z
  .object({
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-defined key, which is the minimum required information for a valid tag. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag</a>. ',
        }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-defined value, which is optional in a tag. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. ',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const AddTagsInputSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EMR resource identifier to which tags will be added. For example, a cluster identifier or an Amazon EMR Studio ID.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associate with a resource. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'Tags'],
    title: 'AddTagsInput',
    description: 'This input identifies an Amazon EMR resource and a list of tags to attach.',
  })
  .openapi('AddTagsInput')

const StepIdSchema = z.string().openapi('StepId')

const CancelStepsRequestStatusSchema = z
  .enum(['SUBMITTED', 'FAILED'])
  .openapi('CancelStepsRequestStatus')

const CancelStepsInfoSchema = z
  .object({
    StepId: StepIdSchema.and(
      z.any().openapi({ description: 'The encrypted StepId of a step.' }),
    ).exactOptional(),
    Status: CancelStepsRequestStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of a CancelSteps Request. The value may be SUBMITTED or FAILED.',
        }),
    ).exactOptional(),
    Reason: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The reason for the failure if the CancelSteps request fails.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.',
    required: [],
  })
  .openapi('CancelStepsInfo')

const CancelStepsInfoListSchema = z.array(CancelStepsInfoSchema).openapi('CancelStepsInfoList')

const CancelStepsOutputSchema = z
  .object({
    CancelStepsInfoList: CancelStepsInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a>CancelStepsInfo</a>, which shows the status of specified cancel requests for each <code>StepID</code> specified.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The output for the <a>CancelSteps</a> operation. ', required: [] })
  .openapi('CancelStepsOutput')

const StepCancellationOptionSchema = z
  .enum(['SEND_INTERRUPT', 'TERMINATE_PROCESS'])
  .openapi('StepCancellationOption')

const CancelStepsInputSchema = z
  .object({
    ClusterId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ClusterID</code> for the specified steps that will be canceled. Use <a>RunJobFlow</a> and <a>ListClusters</a> to get ClusterIDs. ',
        }),
    ),
    StepIds: StepIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of <code>StepIDs</code> to cancel. Use <a>ListSteps</a> to get steps and their states for the specified cluster.',
        }),
    ),
    StepCancellationOption: StepCancellationOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The option to choose to cancel <code>RUNNING</code> steps. By default, the value is <code>SEND_INTERRUPT</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterId', 'StepIds'],
    title: 'CancelStepsInput',
    description: 'The input argument to the <a>CancelSteps</a> operation.',
  })
  .openapi('CancelStepsInput')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const CreateSecurityConfigurationOutputSchema = z
  .object({
    Name: XmlStringSchema.and(
      z.any().openapi({ description: 'The name of the security configuration.' }),
    ),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time the security configuration was created.' }),
    ),
  })
  .openapi({ required: ['Name', 'CreationDateTime'] })
  .openapi('CreateSecurityConfigurationOutput')

const CreateSecurityConfigurationInputSchema = z
  .object({
    Name: XmlStringSchema.and(
      z.any().openapi({ description: 'The name of the security configuration.' }),
    ),
    SecurityConfiguration: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security configuration details in JSON format. For JSON parameters and examples, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security-configurations.html">Use Security Configurations to Set Up Cluster Security</a> in the <i>Amazon EMR Management Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'SecurityConfiguration'],
    title: 'CreateSecurityConfigurationInput',
  })
  .openapi('CreateSecurityConfigurationInput')

const CreateStudioOutputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ).exactOptional(),
    Url: XmlStringSchema.and(
      z.any().openapi({ description: 'The unique Studio access URL.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStudioOutput')

const AuthModeSchema = z.enum(['SSO', 'IAM']).openapi('AuthMode')

const SubnetIdListSchema = z.array(StringSchema).openapi('SubnetIdList')

const CreateStudioInputSchema = z
  .object({
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'A descriptive name for the Amazon EMR Studio.' }),
    ),
    Description: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'A detailed description of the Amazon EMR Studio.' }),
    ).exactOptional(),
    AuthMode: AuthModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the Studio authenticates users using IAM or IAM Identity Center.',
        }),
    ),
    VpcId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.',
        }),
    ),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by <code>VpcId</code>. Studio users can create a Workspace in any of the specified subnets.',
        }),
    ),
    ServiceRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services.',
        }),
    ),
    UserRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a <code>UserRole</code> when you use IAM Identity Center authentication. The permissions attached to the <code>UserRole</code> can be scoped down for each user or group using session policies.',
        }),
    ).exactOptional(),
    WorkspaceSecurityGroupId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by <code>VpcId</code>.',
        }),
    ),
    EngineSecurityGroupId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by <code>VpcId</code>.',
        }),
    ),
    DefaultS3Location: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.',
        }),
    ),
    IdpAuthUrl: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials.',
        }),
    ).exactOptional(),
    IdpRelayStateParameterName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name that your identity provider (IdP) uses for its <code>RelayState</code> parameter. For example, <code>RelayState</code> or <code>TargetSource</code>. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The <code>RelayState</code> parameter differs by IdP.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associate with the Amazon EMR Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Name',
      'AuthMode',
      'VpcId',
      'SubnetIds',
      'ServiceRole',
      'WorkspaceSecurityGroupId',
      'EngineSecurityGroupId',
      'DefaultS3Location',
    ],
    title: 'CreateStudioInput',
  })
  .openapi('CreateStudioInput')

const IdentityTypeSchema = z.enum(['USER', 'GROUP']).openapi('IdentityType')

const CreateStudioSessionMappingInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon EMR Studio to which the user or group will be mapped.',
        }),
    ),
    IdentityId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier (GUID) of the user or group from the IAM Identity Center Identity Store. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified, but not both.',
        }),
    ).exactOptional(),
    IdentityName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified, but not both.',
        }),
    ).exactOptional(),
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the identity to map to the Amazon EMR Studio is a user or a group.',
        }),
    ),
    SessionPolicyArn: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-role.html">Create an EMR Studio User Role with Session Policies</a>.',
        }),
    ),
  })
  .openapi({
    required: ['StudioId', 'IdentityType', 'SessionPolicyArn'],
    title: 'CreateStudioSessionMappingInput',
  })
  .openapi('CreateStudioSessionMappingInput')

const DeleteSecurityConfigurationOutputSchema = z
  .object({})
  .openapi('DeleteSecurityConfigurationOutput')

const DeleteSecurityConfigurationInputSchema = z
  .object({
    Name: XmlStringSchema.and(
      z.any().openapi({ description: 'The name of the security configuration.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteSecurityConfigurationInput' })
  .openapi('DeleteSecurityConfigurationInput')

const DeleteStudioInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ),
  })
  .openapi({ required: ['StudioId'], title: 'DeleteStudioInput' })
  .openapi('DeleteStudioInput')

const DeleteStudioSessionMappingInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ),
    IdentityId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier (GUID) of the user or group to remove from the Amazon EMR Studio. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.',
        }),
    ).exactOptional(),
    IdentityName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the user name or group to remove from the Amazon EMR Studio. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.',
        }),
    ).exactOptional(),
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the identity to delete from the Amazon EMR Studio is a user or a group.',
        }),
    ),
  })
  .openapi({ required: ['StudioId', 'IdentityType'], title: 'DeleteStudioSessionMappingInput' })
  .openapi('DeleteStudioSessionMappingInput')

const ClusterIdSchema = z.string().openapi('ClusterId')

const ClusterStateSchema = z
  .enum([
    'STARTING',
    'BOOTSTRAPPING',
    'RUNNING',
    'WAITING',
    'TERMINATING',
    'TERMINATED',
    'TERMINATED_WITH_ERRORS',
  ])
  .openapi('ClusterState')

const ClusterStateChangeReasonCodeSchema = z
  .enum([
    'INTERNAL_ERROR',
    'VALIDATION_ERROR',
    'INSTANCE_FAILURE',
    'INSTANCE_FLEET_TIMEOUT',
    'BOOTSTRAP_FAILURE',
    'USER_REQUEST',
    'STEP_FAILURE',
    'ALL_STEPS_COMPLETED',
  ])
  .openapi('ClusterStateChangeReasonCode')

const ClusterStateChangeReasonSchema = z
  .object({
    Code: ClusterStateChangeReasonCodeSchema.and(
      z.any().openapi({ description: 'The programmatic code for the state change reason.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The descriptive message for the state change reason.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The reason that the cluster changed to its current state.',
    required: [],
  })
  .openapi('ClusterStateChangeReason')

const ClusterTimelineSchema = z
  .object({
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The creation date and time of the cluster.' }),
    ).exactOptional(),
    ReadyDateTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the cluster was ready to run steps.' }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the cluster was terminated.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Represents the timeline of the cluster's lifecycle.", required: [] })
  .openapi('ClusterTimeline')

const ErrorDataSchema = z.array(StringMapSchema).openapi('ErrorData')

const ErrorDetailSchema = z
  .object({
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: "The name or code that's associated with the error." }),
    ).exactOptional(),
    ErrorData: ErrorDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key value pairs that provide contextual information to explain why the error may have occured.',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'A message describing the error that occured.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A tuple that provides information about an error that caused a cluster to terminate.',
    required: [],
  })
  .openapi('ErrorDetail')

const ErrorDetailListSchema = z.array(ErrorDetailSchema).openapi('ErrorDetailList')

const ClusterStatusSchema = z
  .object({
    State: ClusterStateSchema.and(
      z.any().openapi({ description: 'The current state of the cluster.' }),
    ).exactOptional(),
    StateChangeReason: ClusterStateChangeReasonSchema.and(
      z.any().openapi({ description: 'The reason for the cluster status change.' }),
    ).exactOptional(),
    Timeline: ClusterTimelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timeline that represents the status of a cluster over the lifetime of the cluster.',
        }),
    ).exactOptional(),
    ErrorDetails: ErrorDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tuples that provide information about the errors that caused a cluster termination. This structure may have up to 10 different <code>ErrorDetail</code> tuples.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The detailed status of the cluster.', required: [] })
  .openapi('ClusterStatus')

const XmlStringMaxLen256ListSchema = z
  .array(XmlStringMaxLen256Schema)
  .openapi('XmlStringMaxLen256List')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const Ec2InstanceAttributesSchema = z
  .object({
    Ec2KeyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon EC2 key pair to use when connecting with SSH into the master node as a user named "hadoop".',
        }),
    ).exactOptional(),
    Ec2SubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value, and your account supports EC2-Classic, the cluster launches in EC2-Classic.',
        }),
    ).exactOptional(),
    RequestedEc2SubnetIds: XmlStringMaxLen256ListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applies to clusters configured with the instance fleets option. Specifies the unique identifier of one or more Amazon EC2 subnets in which to launch EC2 cluster instances. Subnets must exist within the same VPC. Amazon EMR chooses the EC2 subnet with the best fit from among the list of <code>RequestedEc2SubnetIds</code>, and then launches all cluster instances within that Subnet. If this value is not specified, and the account and Region support EC2-Classic networks, the cluster launches instances in the EC2-Classic network and uses <code>RequestedEc2AvailabilityZones</code> instead of this setting. If EC2-Classic is not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.',
        }),
    ).exactOptional(),
    Ec2AvailabilityZone: StringSchema.and(
      z.any().openapi({ description: 'The Availability Zone in which the cluster will run. ' }),
    ).exactOptional(),
    RequestedEc2AvailabilityZones: XmlStringMaxLen256ListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applies to clusters configured with the instance fleets option. Specifies one or more Availability Zones in which to launch EC2 cluster instances when the EC2-Classic network configuration is supported. Amazon EMR chooses the Availability Zone with the best fit from among the list of <code>RequestedEc2AvailabilityZones</code>, and then launches all cluster instances within that Availability Zone. If you do not specify this value, Amazon EMR chooses the Availability Zone for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.',
        }),
    ).exactOptional(),
    IamInstanceProfile: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that was specified when the cluster was launched. The EC2 instances of the cluster assume this role.',
        }),
    ).exactOptional(),
    EmrManagedMasterSecurityGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the Amazon EC2 security group for the master node.',
        }),
    ).exactOptional(),
    EmrManagedSlaveSecurityGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon EC2 security group for the core and task nodes.',
        }),
    ).exactOptional(),
    ServiceAccessSecurityGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.',
        }),
    ).exactOptional(),
    AdditionalMasterSecurityGroups: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of additional Amazon EC2 security group IDs for the master node.',
        }),
    ).exactOptional(),
    AdditionalSlaveSecurityGroups: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of additional Amazon EC2 security group IDs for the core and task nodes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.',
    required: [],
  })
  .openapi('Ec2InstanceAttributes')

const InstanceCollectionTypeSchema = z
  .enum(['INSTANCE_FLEET', 'INSTANCE_GROUP'])
  .openapi('InstanceCollectionType')

const BooleanSchema = z.boolean().openapi('Boolean')

const ApplicationSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z.any().openapi({ description: 'The version of the application.' }),
    ).exactOptional(),
    Args: StringListSchema.and(
      z.any().openapi({ description: 'Arguments for Amazon EMR to pass to the application.' }),
    ).exactOptional(),
    AdditionalInfo: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'This option is for advanced users only. This is meta information about third-party applications that third-party vendors use for testing purposes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p>',
    required: [],
  })
  .openapi('Application')

const ApplicationListSchema = z.array(ApplicationSchema).openapi('ApplicationList')

const ScaleDownBehaviorSchema = z
  .enum(['TERMINATE_AT_INSTANCE_HOUR', 'TERMINATE_AT_TASK_COMPLETION'])
  .openapi('ScaleDownBehavior')

const RepoUpgradeOnBootSchema = z.enum(['SECURITY', 'NONE']).openapi('RepoUpgradeOnBoot')

const KerberosAttributesSchema = z
  .object({
    Realm: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Kerberos realm to which all nodes in a cluster belong. For example, <code>EC2.INTERNAL</code>. ',
        }),
    ),
    KdcAdminPassword: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.',
        }),
    ),
    CrossRealmTrustPrincipalPassword: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.',
        }),
    ).exactOptional(),
    ADDomainJoinUser: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.',
        }),
    ).exactOptional(),
    ADDomainJoinPassword: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description: 'The Active Directory password for <code>ADDomainJoinUser</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Realm', 'KdcAdminPassword'],
    description:
      'Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.',
  })
  .openapi('KerberosAttributes')

const OptionalArnTypeSchema = z.string().min(0).max(2048).openapi('OptionalArnType')

const PlacementGroupStrategySchema = z
  .enum(['SPREAD', 'PARTITION', 'CLUSTER', 'NONE'])
  .openapi('PlacementGroupStrategy')

const PlacementGroupConfigSchema = z
  .object({
    InstanceRole: InstanceRoleTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Role of the instance in the cluster.</p> <p>Starting with Amazon EMR version 5.23.0, the only supported instance role is <code>MASTER</code>.</p>',
        }),
    ),
    PlacementStrategy: PlacementGroupStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>EC2 Placement Group strategy associated with instance role.</p> <p>Starting with Amazon EMR version 5.23.0, the only supported placement strategy is <code>SPREAD</code> for the <code>MASTER</code> instance role.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceRole'],
    description:
      '<p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>',
  })
  .openapi('PlacementGroupConfig')

const PlacementGroupConfigListSchema = z
  .array(PlacementGroupConfigSchema)
  .openapi('PlacementGroupConfigList')

const ClusterSchema = z
  .object({
    Id: ClusterIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the cluster.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster.' }),
    ).exactOptional(),
    Status: ClusterStatusSchema.and(
      z.any().openapi({ description: 'The current status details about the cluster.' }),
    ).exactOptional(),
    Ec2InstanceAttributes: Ec2InstanceAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.',
        }),
    ).exactOptional(),
    InstanceCollectionType: InstanceCollectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> <p>The instance group configuration of the cluster. A value of <code>INSTANCE_GROUP</code> indicates a uniform instance group configuration. A value of <code>INSTANCE_FLEET</code> indicates an instance fleets configuration.</p>',
        }),
    ).exactOptional(),
    LogUri: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The path to the Amazon S3 location where logs for this cluster are stored.',
        }),
    ).exactOptional(),
    LogEncryptionKmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The KMS key used for encrypting log files. This attribute is only available with EMR version 5.30.0 and later, excluding EMR 6.0.0. ',
        }),
    ).exactOptional(),
    RequestedAmiVersion: StringSchema.and(
      z.any().openapi({ description: 'The AMI version requested for this cluster.' }),
    ).exactOptional(),
    RunningAmiVersion: StringSchema.and(
      z.any().openapi({ description: 'The AMI version running on this cluster.' }),
    ).exactOptional(),
    ReleaseLabel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version such as <code>emr-5.14.0</code>. For more information about Amazon EMR release versions and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use <code>AmiVersion</code>.',
        }),
    ).exactOptional(),
    AutoTerminate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the cluster should terminate after completing all steps.',
        }),
    ).exactOptional(),
    TerminationProtected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether Amazon EMR will lock the cluster to prevent the EC2 instances from being terminated by an API call or user intervention, or in the event of a cluster error.',
        }),
    ).exactOptional(),
    VisibleToAllUsers: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the cluster is visible to IAM principals in the Amazon Web Services account associated with the cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions on the cluster that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions, regardless of IAM permissions policies attached to other IAM principals.</p> <p>The default value is <code>true</code> if a value is not provided when creating a cluster using the EMR API <a>RunJobFlow</a> command, the CLI <a href="https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html">create-cluster</a> command, or the Amazon Web Services Management Console.</p>',
        }),
    ).exactOptional(),
    Applications: ApplicationListSchema.and(
      z.any().openapi({ description: 'The applications installed on this cluster.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags associated with a cluster.' }),
    ).exactOptional(),
    ServiceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that Amazon EMR assumes in order to access Amazon Web Services resources on your behalf.',
        }),
    ).exactOptional(),
    NormalizedInstanceHours: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.',
        }),
    ).exactOptional(),
    MasterPublicDnsName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.',
        }),
    ).exactOptional(),
    Configurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied to the EMR cluster.',
        }),
    ).exactOptional(),
    SecurityConfiguration: XmlStringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the security configuration applied to the cluster.' }),
    ).exactOptional(),
    AutoScalingRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.',
        }),
    ).exactOptional(),
    ScaleDownBehavior: ScaleDownBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> is available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.',
        }),
    ).exactOptional(),
    CustomAmiId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.',
        }),
    ).exactOptional(),
    EbsRootVolumeSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.',
        }),
    ).exactOptional(),
    RepoUpgradeOnBoot: RepoUpgradeOnBootSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applies only when <code>CustomAmiID</code> is used. Specifies the type of updates that are applied from the Amazon Linux AMI package repositories when an instance boots using the AMI.',
        }),
    ).exactOptional(),
    KerberosAttributes: KerberosAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.',
        }),
    ).exactOptional(),
    ClusterArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the cluster.' }),
    ).exactOptional(),
    OutpostArn: OptionalArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the Outpost where the cluster is launched. ',
        }),
    ).exactOptional(),
    StepConcurrencyLevel: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the number of steps that can be executed concurrently.',
        }),
    ).exactOptional(),
    PlacementGroups: PlacementGroupConfigListSchema.and(
      z.any().openapi({ description: 'Placement group configured for an Amazon EMR cluster.' }),
    ).exactOptional(),
    OSReleaseLabel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Linux release specified in a cluster launch RunJobFlow request. If no Amazon Linux release was specified, the default Amazon Linux release is shown in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The detailed description of the cluster.', required: [] })
  .openapi('Cluster')

const DescribeClusterOutputSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z
        .any()
        .openapi({ description: 'This output contains the details for the requested cluster.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'This output contains the description of the cluster.', required: [] })
  .openapi('DescribeClusterOutput')

const DescribeClusterInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The identifier of the cluster to describe.' }),
    ),
  })
  .openapi({
    required: ['ClusterId'],
    title: 'DescribeClusterInput',
    description: 'This input determines which cluster to describe.',
  })
  .openapi('DescribeClusterInput')

const JobFlowExecutionStateSchema = z
  .enum([
    'STARTING',
    'BOOTSTRAPPING',
    'RUNNING',
    'WAITING',
    'SHUTTING_DOWN',
    'TERMINATED',
    'COMPLETED',
    'FAILED',
  ])
  .openapi({ description: 'The type of instance.' })
  .openapi('JobFlowExecutionState')

const JobFlowExecutionStatusDetailSchema = z
  .object({
    State: JobFlowExecutionStateSchema.and(
      z.any().openapi({ description: 'The state of the job flow.' }),
    ),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The creation date and time of the job flow.' }),
    ),
    StartDateTime: DateSchema.and(
      z.any().openapi({ description: 'The start date and time of the job flow.' }),
    ).exactOptional(),
    ReadyDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the job flow was ready to start running bootstrap actions.',
        }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The completion date and time of the job flow.' }),
    ).exactOptional(),
    LastStateChangeReason: XmlStringSchema.and(
      z.any().openapi({ description: 'Description of the job flow last changed state.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['State', 'CreationDateTime'],
    description: 'Describes the status of the cluster (job flow).',
  })
  .openapi('JobFlowExecutionStatusDetail')

const InstanceGroupStateSchema = z
  .enum([
    'PROVISIONING',
    'BOOTSTRAPPING',
    'RUNNING',
    'RECONFIGURING',
    'RESIZING',
    'SUSPENDED',
    'TERMINATING',
    'TERMINATED',
    'ARRESTED',
    'SHUTTING_DOWN',
    'ENDED',
  ])
  .openapi('InstanceGroupState')

const InstanceGroupDetailSchema = z
  .object({
    InstanceGroupId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'Unique identifier for the instance group.' }),
    ).exactOptional(),
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'Friendly name for the instance group.' }),
    ).exactOptional(),
    Market: MarketTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Market type of the EC2 instances used to create a cluster node.',
        }),
    ),
    InstanceRole: InstanceRoleTypeSchema.and(
      z.any().openapi({ description: 'Instance group role in the cluster' }),
    ),
    BidPrice: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify <code>OnDemandPrice</code> to set the amount equal to the On-Demand price, or specify an amount in USD.',
        }),
    ).exactOptional(),
    InstanceType: InstanceTypeSchema.and(z.any().openapi({ description: 'EC2 instance type.' })),
    InstanceRequestCount: IntegerSchema.and(
      z.any().openapi({ description: 'Target number of instances to run in the instance group.' }),
    ),
    InstanceRunningCount: IntegerSchema.and(
      z.any().openapi({ description: 'Actual count of running instances.' }),
    ),
    State: InstanceGroupStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'State of instance group. The following values are no longer supported: STARTING, TERMINATED, and FAILED.',
        }),
    ),
    LastStateChangeReason: XmlStringSchema.and(
      z.any().openapi({ description: 'Details regarding the state of the instance group.' }),
    ).exactOptional(),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date/time the instance group was created.' }),
    ),
    StartDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date/time the instance group was started.' }),
    ).exactOptional(),
    ReadyDateTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The date/time the instance group was available to the cluster.' }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date/time the instance group was terminated.' }),
    ).exactOptional(),
    CustomAmiId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({ description: 'The custom AMI ID to use for the provisioned instance group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Market',
      'InstanceRole',
      'InstanceType',
      'InstanceRequestCount',
      'InstanceRunningCount',
      'State',
      'CreationDateTime',
    ],
    description: 'Detailed information about an instance group.',
  })
  .openapi('InstanceGroupDetail')

const InstanceGroupDetailListSchema = z
  .array(InstanceGroupDetailSchema)
  .openapi('InstanceGroupDetailList')

const PlacementTypeSchema = z
  .object({
    AvailabilityZone: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 Availability Zone for the cluster. <code>AvailabilityZone</code> is used for uniform instance groups, while <code>AvailabilityZones</code> (plural) is used for instance fleets.',
        }),
    ).exactOptional(),
    AvailabilityZones: XmlStringMaxLen256ListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When multiple Availability Zones are specified, Amazon EMR evaluates them and launches instances in the optimal Availability Zone. <code>AvailabilityZones</code> is used for instance fleets, while <code>AvailabilityZone</code> (singular) is used for uniform instance groups.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The Amazon EC2 Availability Zone configuration of the cluster (job flow).',
    required: [],
  })
  .openapi('PlacementType')

const JobFlowInstancesDetailSchema = z
  .object({
    MasterInstanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 master node instance type.' }),
    ),
    MasterPublicDnsName: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.',
        }),
    ).exactOptional(),
    MasterInstanceId: XmlStringSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 instance identifier of the master node.' }),
    ).exactOptional(),
    SlaveInstanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 core and task node instance type.' }),
    ),
    InstanceCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon EC2 instances in the cluster. If the value is 1, the same instance serves as both the master and core and task node. If the value is greater than 1, one instance is the master node and all others are core and task nodes.',
        }),
    ),
    InstanceGroups: InstanceGroupDetailListSchema.and(
      z.any().openapi({ description: 'Details about the instance groups in a cluster.' }),
    ).exactOptional(),
    NormalizedInstanceHours: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An approximation of the cost of the cluster, represented in m1.small/hours. This value is increased one time for every hour that an m1.small instance runs. Larger instances are weighted more heavily, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being increased incrementally four times. This result is only an approximation and does not reflect the actual billing rate.',
        }),
    ).exactOptional(),
    Ec2KeyName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Amazon EC2 key pair that can be used to connect to the master node using SSH.',
        }),
    ).exactOptional(),
    Ec2SubnetId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'For clusters launched within Amazon Virtual Private Cloud, this is the identifier of the subnet where the cluster was launched.',
        }),
    ).exactOptional(),
    Placement: PlacementTypeSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 Availability Zone for the cluster.' }),
    ).exactOptional(),
    KeepJobFlowAliveWhenNoSteps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the cluster should remain available after completing all steps.',
        }),
    ).exactOptional(),
    TerminationProtected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the Amazon EC2 instances in the cluster are protected from termination by API calls, user intervention, or in the event of a job-flow error.',
        }),
    ).exactOptional(),
    HadoopVersion: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The Hadoop version for the cluster.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MasterInstanceType', 'SlaveInstanceType', 'InstanceCount'],
    description: 'Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.',
  })
  .openapi('JobFlowInstancesDetail')

const StepExecutionStateSchema = z
  .enum(['PENDING', 'RUNNING', 'CONTINUE', 'COMPLETED', 'CANCELLED', 'FAILED', 'INTERRUPTED'])
  .openapi('StepExecutionState')

const StepExecutionStatusDetailSchema = z
  .object({
    State: StepExecutionStateSchema.and(z.any().openapi({ description: 'The state of the step.' })),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The creation date and time of the step.' }),
    ),
    StartDateTime: DateSchema.and(
      z.any().openapi({ description: 'The start date and time of the step.' }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The completion date and time of the step.' }),
    ).exactOptional(),
    LastStateChangeReason: XmlStringSchema.and(
      z.any().openapi({ description: "A description of the step's current state." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['State', 'CreationDateTime'],
    description: 'The execution state of a step.',
  })
  .openapi('StepExecutionStatusDetail')

const StepDetailSchema = z
  .object({
    StepConfig: StepConfigSchema.and(z.any().openapi({ description: 'The step configuration.' })),
    ExecutionStatusDetail: StepExecutionStatusDetailSchema.and(
      z.any().openapi({ description: 'The description of the step status.' }),
    ),
  })
  .openapi({
    required: ['StepConfig', 'ExecutionStatusDetail'],
    description: 'Combines the execution state and configuration of a step.',
  })
  .openapi('StepDetail')

const StepDetailListSchema = z.array(StepDetailSchema).openapi('StepDetailList')

const BootstrapActionConfigSchema: z.ZodType<BootstrapActionConfigType> = z
  .lazy(() =>
    z
      .object({
        Name: XmlStringMaxLen256Schema.and(
          z.any().openapi({ description: 'The name of the bootstrap action.' }),
        ),
        ScriptBootstrapAction: ScriptBootstrapActionConfigSchema.and(
          z.any().openapi({ description: 'The script run by the bootstrap action.' }),
        ),
      })
      .openapi({
        required: ['Name', 'ScriptBootstrapAction'],
        description: 'Configuration of a bootstrap action.',
      }),
  )
  .openapi('BootstrapActionConfig')

const BootstrapActionDetailSchema = z
  .object({
    BootstrapActionConfig: BootstrapActionConfigSchema.and(
      z.any().openapi({ description: 'A description of the bootstrap action.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Reports the configuration of a bootstrap action in a cluster (job flow).',
    required: [],
  })
  .openapi('BootstrapActionDetail')

const BootstrapActionDetailListSchema = z
  .array(BootstrapActionDetailSchema)
  .openapi('BootstrapActionDetailList')

const SupportedProductsListSchema = z
  .array(XmlStringMaxLen256Schema)
  .openapi('SupportedProductsList')

const JobFlowDetailSchema = z
  .object({
    JobFlowId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The job flow identifier.' }),
    ),
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The name of the job flow.' }),
    ),
    LogUri: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The location in Amazon S3 where log files for the job are stored.',
        }),
    ).exactOptional(),
    LogEncryptionKmsKeyId: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key used for encrypting log files. This attribute is only available with EMR version 5.30.0 and later, excluding EMR 6.0.0.',
        }),
    ).exactOptional(),
    AmiVersion: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use <code>CustomAmiID</code>.',
        }),
    ).exactOptional(),
    ExecutionStatusDetail: JobFlowExecutionStatusDetailSchema.and(
      z.any().openapi({ description: 'Describes the execution status of the job flow.' }),
    ),
    Instances: JobFlowInstancesDetailSchema.and(
      z.any().openapi({ description: 'Describes the Amazon EC2 instances of the job flow.' }),
    ),
    Steps: StepDetailListSchema.and(
      z.any().openapi({ description: 'A list of steps run by the job flow.' }),
    ).exactOptional(),
    BootstrapActions: BootstrapActionDetailListSchema.and(
      z.any().openapi({ description: 'A list of the bootstrap actions run by the job flow.' }),
    ).exactOptional(),
    SupportedProducts: SupportedProductsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of strings set by third-party software when the job flow is launched. If you are not using third-party software to manage the job flow, this value is empty.',
        }),
    ).exactOptional(),
    VisibleToAllUsers: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the cluster is visible to IAM principals in the Amazon Web Services account associated with the cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions, regardless of IAM permissions policies attached to other IAM principals.</p> <p>The default value is <code>true</code> if a value is not provided when creating a cluster using the EMR API <a>RunJobFlow</a> command, the CLI <a href="https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html">create-cluster</a> command, or the Amazon Web Services Management Console.</p>',
        }),
    ).exactOptional(),
    JobFlowRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that was specified when the job flow was launched. The EC2 instances of the job flow assume this role.',
        }),
    ).exactOptional(),
    ServiceRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that is assumed by the Amazon EMR service to access Amazon Web Services resources on your behalf.',
        }),
    ).exactOptional(),
    AutoScalingRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides a way for the automatic scaling feature to get the required permissions it needs to launch and terminate EC2 instances in an instance group.',
        }),
    ).exactOptional(),
    ScaleDownBehavior: ScaleDownBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['JobFlowId', 'Name', 'ExecutionStatusDetail', 'Instances'],
    description: 'A description of a cluster (job flow).',
  })
  .openapi('JobFlowDetail')

const JobFlowDetailListSchema = z.array(JobFlowDetailSchema).openapi('JobFlowDetailList')

const DescribeJobFlowsOutputSchema = z
  .object({
    JobFlows: JobFlowDetailListSchema.and(
      z.any().openapi({ description: 'A list of job flows matching the parameters supplied.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The output for the <a>DescribeJobFlows</a> operation. ', required: [] })
  .openapi('DescribeJobFlowsOutput')

const JobFlowExecutionStateListSchema = z
  .array(JobFlowExecutionStateSchema)
  .openapi('JobFlowExecutionStateList')

const DescribeJobFlowsInputSchema = z
  .object({
    CreatedAfter: DateSchema.and(
      z.any().openapi({ description: 'Return only job flows created after this date and time.' }),
    ).exactOptional(),
    CreatedBefore: DateSchema.and(
      z.any().openapi({ description: 'Return only job flows created before this date and time.' }),
    ).exactOptional(),
    JobFlowIds: XmlStringListSchema.and(
      z
        .any()
        .openapi({
          description: 'Return only job flows whose job flow ID is contained in this list.',
        }),
    ).exactOptional(),
    JobFlowStates: JobFlowExecutionStateListSchema.and(
      z
        .any()
        .openapi({ description: 'Return only job flows whose state is contained in this list.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeJobFlowsInput',
    description: ' The input for the <a>DescribeJobFlows</a> operation. ',
    required: [],
  })
  .openapi('DescribeJobFlowsInput')

const ExecutionEngineTypeSchema = z.literal('EMR').openapi('ExecutionEngineType')

const ExecutionEngineConfigSchema = z
  .object({
    Id: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the execution engine. For an EMR cluster, this is the cluster ID.',
        }),
    ),
    Type: ExecutionEngineTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of execution engine. A value of <code>EMR</code> specifies an EMR cluster.',
        }),
    ).exactOptional(),
    MasterInstanceSecurityGroupId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'An optional unique ID of an EC2 security group to associate with the master instance of the EMR cluster for this notebook execution. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html">Specifying EC2 Security Groups for EMR Notebooks</a> in the <i>EMR Management Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    description:
      'Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.',
  })
  .openapi('ExecutionEngineConfig')

const NotebookExecutionStatusSchema = z
  .enum([
    'START_PENDING',
    'STARTING',
    'RUNNING',
    'FINISHING',
    'FINISHED',
    'FAILING',
    'FAILED',
    'STOP_PENDING',
    'STOPPING',
    'STOPPED',
  ])
  .openapi('NotebookExecutionStatus')

const NotebookExecutionSchema = z
  .object({
    NotebookExecutionId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of a notebook execution.' }),
    ).exactOptional(),
    EditorId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the EMR Notebook that is used for the notebook execution.',
        }),
    ).exactOptional(),
    ExecutionEngine: ExecutionEngineConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The execution engine, such as an EMR cluster, used to run the EMR notebook and perform the notebook execution.',
        }),
    ).exactOptional(),
    NotebookExecutionName: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'A name for the notebook execution.' }),
    ).exactOptional(),
    NotebookParams: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Input parameters in JSON format passed to the EMR Notebook at runtime for execution.',
        }),
    ).exactOptional(),
    Status: NotebookExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the notebook execution.</p> <ul> <li> <p> <code>START_PENDING</code> indicates that the cluster has received the execution request but execution has not begun.</p> </li> <li> <p> <code>STARTING</code> indicates that the execution is starting on the cluster.</p> </li> <li> <p> <code>RUNNING</code> indicates that the execution is being processed by the cluster.</p> </li> <li> <p> <code>FINISHING</code> indicates that execution processing is in the final stages.</p> </li> <li> <p> <code>FINISHED</code> indicates that the execution has completed without error.</p> </li> <li> <p> <code>FAILING</code> indicates that the execution is failing and will not finish successfully.</p> </li> <li> <p> <code>FAILED</code> indicates that the execution failed.</p> </li> <li> <p> <code>STOP_PENDING</code> indicates that the cluster has received a <code>StopNotebookExecution</code> request and the stop is pending.</p> </li> <li> <p> <code>STOPPING</code> indicates that the cluster is in the process of stopping the execution as a result of a <code>StopNotebookExecution</code> request.</p> </li> <li> <p> <code>STOPPED</code> indicates that the execution stopped because of a <code>StopNotebookExecution</code> request.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StartTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp when notebook execution started.' }),
    ).exactOptional(),
    EndTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp when notebook execution ended.' }),
    ).exactOptional(),
    Arn: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the notebook execution.' }),
    ).exactOptional(),
    OutputNotebookURI: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description: "The location of the notebook execution's output file in Amazon S3.",
        }),
    ).exactOptional(),
    LastStateChangeReason: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason for the latest status change of the notebook execution.',
        }),
    ).exactOptional(),
    NotebookInstanceSecurityGroupId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the EC2 security group associated with the EMR Notebook instance. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html">Specifying EC2 Security Groups for EMR Notebooks</a> in the <i>EMR Management Guide</i>.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags associated with a notebook execution. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters and an optional value string with a maximum of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.',
    required: [],
  })
  .openapi('NotebookExecution')

const DescribeNotebookExecutionOutputSchema = z
  .object({
    NotebookExecution: NotebookExecutionSchema.and(
      z.any().openapi({ description: 'Properties of the notebook execution.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeNotebookExecutionOutput')

const DescribeNotebookExecutionInputSchema = z
  .object({
    NotebookExecutionId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of the notebook execution.' }),
    ),
  })
  .openapi({ required: ['NotebookExecutionId'], title: 'DescribeNotebookExecutionInput' })
  .openapi('DescribeNotebookExecutionInput')

const SimplifiedApplicationSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The returned release label application name. For example, <code>hadoop</code>.',
        }),
    ).exactOptional(),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The returned release label application version. For example, <code>3.2.1</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The returned release label application names or versions.',
    required: [],
  })
  .openapi('SimplifiedApplication')

const SimplifiedApplicationListSchema = z
  .array(SimplifiedApplicationSchema)
  .openapi('SimplifiedApplicationList')

const OSReleaseSchema = z
  .object({
    Label: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Linux release specified for a cluster in the RunJobFlow request. The format is as shown in <a href="https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-20220218.html"> <i>Amazon Linux 2 Release Notes</i> </a>. For example, 2.0.20220218.1.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The Amazon Linux release specified for a cluster in the RunJobFlow request.',
    required: [],
  })
  .openapi('OSRelease')

const OSReleaseListSchema = z.array(OSReleaseSchema).openapi('OSReleaseList')

const DescribeReleaseLabelOutputSchema = z
  .object({
    ReleaseLabel: StringSchema.and(
      z.any().openapi({ description: 'The target release label described in the response.' }),
    ).exactOptional(),
    Applications: SimplifiedApplicationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of applications available for the target release label. <code>Name</code> is the name of the application. <code>Version</code> is the concise version of the application.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token. Reserved for future use. Currently set to null.',
        }),
    ).exactOptional(),
    AvailableOSReleases: OSReleaseListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of available Amazon Linux release versions for an Amazon EMR release. Contains a Label field that is formatted as shown in <a href="https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-al2.html"> <i>Amazon Linux 2 Release Notes</i> </a>. For example, <a href="https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-20220218.html">2.0.20220218.1</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReleaseLabelOutput')

const MaxResultsNumberSchema = z.int().min(1).max(100).openapi('MaxResultsNumber')

const DescribeReleaseLabelInputSchema = z
  .object({
    ReleaseLabel: StringSchema.and(
      z.any().openapi({ description: 'The target release label to be described.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token. Reserved for future use. Currently set to null.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsNumberSchema.and(
      z.any().openapi({ description: 'Reserved for future use. Currently set to null.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeReleaseLabelInput', required: [] })
  .openapi('DescribeReleaseLabelInput')

const DescribeSecurityConfigurationOutputSchema = z
  .object({
    Name: XmlStringSchema.and(
      z.any().openapi({ description: 'The name of the security configuration.' }),
    ).exactOptional(),
    SecurityConfiguration: StringSchema.and(
      z.any().openapi({ description: 'The security configuration details in JSON format.' }),
    ).exactOptional(),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time the security configuration was created' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSecurityConfigurationOutput')

const DescribeSecurityConfigurationInputSchema = z
  .object({
    Name: XmlStringSchema.and(
      z.any().openapi({ description: 'The name of the security configuration.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DescribeSecurityConfigurationInput' })
  .openapi('DescribeSecurityConfigurationInput')

const HadoopStepConfigSchema = z
  .object({
    Jar: StringSchema.and(
      z.any().openapi({ description: 'The path to the JAR file that runs during the step.' }),
    ).exactOptional(),
    Properties: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of Java properties that are set when the step runs. You can use these properties to pass key-value pairs to your main function.',
        }),
    ).exactOptional(),
    MainClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the main class in the specified Java file. If not specified, the JAR file should specify a main class in its manifest file.',
        }),
    ).exactOptional(),
    Args: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of command line arguments to pass to the JAR file's main function for execution.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.',
    required: [],
  })
  .openapi('HadoopStepConfig')

const StepStateSchema = z
  .enum(['PENDING', 'CANCEL_PENDING', 'RUNNING', 'COMPLETED', 'CANCELLED', 'FAILED', 'INTERRUPTED'])
  .openapi('StepState')

const StepStateChangeReasonCodeSchema = z.literal('NONE').openapi('StepStateChangeReasonCode')

const StepStateChangeReasonSchema = z
  .object({
    Code: StepStateChangeReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The programmable code for the state change reason. Note: Currently, the service provides no code for the state change.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The descriptive message for the state change reason.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of the step state change reason.', required: [] })
  .openapi('StepStateChangeReason')

const FailureDetailsSchema = z
  .object({
    Reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason for the step failure. In the case where the service cannot successfully determine the root cause of the failure, it returns "Unknown Error" as a reason.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The descriptive message including the error the Amazon EMR service has identified as the cause of step failure. This is text from an error log that describes the root cause of the failure.',
        }),
    ).exactOptional(),
    LogFile: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the log file where the step failure root cause was originally recorded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of the step failure. The service attempts to detect the root cause for many common failures.',
    required: [],
  })
  .openapi('FailureDetails')

const StepTimelineSchema = z
  .object({
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the cluster step was created.' }),
    ).exactOptional(),
    StartDateTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the cluster step execution started.' }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the cluster step execution completed or failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The timeline of the cluster step lifecycle.', required: [] })
  .openapi('StepTimeline')

const StepStatusSchema = z
  .object({
    State: StepStateSchema.and(
      z.any().openapi({ description: 'The execution state of the cluster step.' }),
    ).exactOptional(),
    StateChangeReason: StepStateChangeReasonSchema.and(
      z.any().openapi({ description: 'The reason for the step execution status change.' }),
    ).exactOptional(),
    FailureDetails: FailureDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details for the step failure including reason, message, and log file path where the root cause was identified.',
        }),
    ).exactOptional(),
    Timeline: StepTimelineSchema.and(
      z.any().openapi({ description: 'The timeline of the cluster step status over time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The execution status details of the cluster step.', required: [] })
  .openapi('StepStatus')

const StepSchema = z
  .object({
    Id: StepIdSchema.and(
      z.any().openapi({ description: 'The identifier of the cluster step.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster step.' }),
    ).exactOptional(),
    Config: HadoopStepConfigSchema.and(
      z.any().openapi({ description: 'The Hadoop job configuration of the cluster step.' }),
    ).exactOptional(),
    ActionOnFailure: ActionOnFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to take when the cluster step fails. Possible values are <code>TERMINATE_CLUSTER</code>, <code>CANCEL_AND_WAIT</code>, and <code>CONTINUE</code>. <code>TERMINATE_JOB_FLOW</code> is provided for backward compatibility. We recommend using <code>TERMINATE_CLUSTER</code> instead.</p> <p>If a cluster's <code>StepConcurrencyLevel</code> is greater than <code>1</code>, do not use <code>AddJobFlowSteps</code> to submit a step with this parameter set to <code>CANCEL_AND_WAIT</code> or <code>TERMINATE_CLUSTER</code>. The step is not submitted and the action fails with a message that the <code>ActionOnFailure</code> setting is not valid.</p> <p>If you change a cluster's <code>StepConcurrencyLevel</code> to be greater than 1 while a step is running, the <code>ActionOnFailure</code> parameter may not behave as you expect. In this case, for a step that fails with this parameter set to <code>CANCEL_AND_WAIT</code>, pending steps and the running step are not canceled; for a step that fails with this parameter set to <code>TERMINATE_CLUSTER</code>, the cluster does not terminate.</p>",
        }),
    ).exactOptional(),
    Status: StepStatusSchema.and(
      z.any().openapi({ description: 'The current execution status details of the cluster step.' }),
    ).exactOptional(),
    ExecutionRoleArn: OptionalArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the runtime role for a step on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: <code>arn:partition:service:region:account:resource</code>. </p> <p>For example, <code>arn:aws:iam::1234567890:role/ReadOnly</code> is a correctly formatted runtime role ARN.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'This represents a step in a cluster.', required: [] })
  .openapi('Step')

const DescribeStepOutputSchema = z
  .object({
    Step: StepSchema.and(
      z.any().openapi({ description: 'The step details for the requested step identifier.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This output contains the description of the cluster step.',
    required: [],
  })
  .openapi('DescribeStepOutput')

const DescribeStepInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The identifier of the cluster with steps to describe.' }),
    ),
    StepId: StepIdSchema.and(
      z.any().openapi({ description: 'The identifier of the step to describe.' }),
    ),
  })
  .openapi({
    required: ['ClusterId', 'StepId'],
    title: 'DescribeStepInput',
    description: 'This input determines which step to describe.',
  })
  .openapi('DescribeStepInput')

const StudioSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ).exactOptional(),
    StudioArn: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Amazon EMR Studio.' }),
    ).exactOptional(),
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The name of the Amazon EMR Studio.' }),
    ).exactOptional(),
    Description: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The detailed description of the Amazon EMR Studio.' }),
    ).exactOptional(),
    AuthMode: AuthModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the Amazon EMR Studio authenticates users using IAM or IAM Identity Center.',
        }),
    ).exactOptional(),
    VpcId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the VPC associated with the Amazon EMR Studio.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of IDs of the subnets associated with the Amazon EMR Studio.',
        }),
    ).exactOptional(),
    ServiceRole: XmlStringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the IAM role assumed by the Amazon EMR Studio.' }),
    ).exactOptional(),
    UserRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IAM role assumed by users logged in to the Amazon EMR Studio. A Studio only requires a <code>UserRole</code> when you use IAM authentication.',
        }),
    ).exactOptional(),
    WorkspaceSecurityGroupId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Workspace security group associated with the Amazon EMR Studio. The Workspace security group allows outbound network traffic to resources in the Engine security group and to the internet.',
        }),
    ).exactOptional(),
    EngineSecurityGroupId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Engine security group associated with the Amazon EMR Studio. The Engine security group allows inbound network traffic from resources in the Workspace security group.',
        }),
    ).exactOptional(),
    Url: XmlStringSchema.and(
      z.any().openapi({ description: 'The unique access URL of the Amazon EMR Studio.' }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time the Amazon EMR Studio was created.' }),
    ).exactOptional(),
    DefaultS3Location: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.',
        }),
    ).exactOptional(),
    IdpAuthUrl: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.",
        }),
    ).exactOptional(),
    IdpRelayStateParameterName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description: "The name of your identity provider's <code>RelayState</code> parameter.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the Amazon EMR Studio.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details for an Amazon EMR Studio including ID, creation time, name, and so on.',
    required: [],
  })
  .openapi('Studio')

const DescribeStudioOutputSchema = z
  .object({
    Studio: StudioSchema.and(
      z.any().openapi({ description: 'The Amazon EMR Studio details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeStudioOutput')

const DescribeStudioInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The Amazon EMR Studio ID.' }),
    ),
  })
  .openapi({ required: ['StudioId'], title: 'DescribeStudioInput' })
  .openapi('DescribeStudioInput')

const LongSchema = z.int().openapi('Long')

const AutoTerminationPolicySchema = z
  .object({
    IdleTimeout: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of 60 seconds and a maximum of 604800 seconds (seven days).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.',
    required: [],
  })
  .openapi('AutoTerminationPolicy')

const GetAutoTerminationPolicyOutputSchema = z
  .object({
    AutoTerminationPolicy: AutoTerminationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the auto-termination policy that is attached to an Amazon EMR cluster. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAutoTerminationPolicyOutput')

const GetAutoTerminationPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the Amazon EMR cluster for which the auto-termination policy will be fetched.',
        }),
    ),
  })
  .openapi({ required: ['ClusterId'], title: 'GetAutoTerminationPolicyInput' })
  .openapi('GetAutoTerminationPolicyInput')

const PortSchema = z.int().min(-1).max(65535).openapi('Port')

const PortRangeSchema = z
  .object({
    MinRange: PortSchema.and(
      z
        .any()
        .openapi({ description: 'The smallest port number in a specified range of port numbers.' }),
    ),
    MaxRange: PortSchema.and(
      z
        .any()
        .openapi({ description: 'The smallest port number in a specified range of port numbers.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MinRange'],
    description:
      'A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.',
  })
  .openapi('PortRange')

const PortRangesSchema = z.array(PortRangeSchema).openapi('PortRanges')

const BlockPublicAccessConfigurationSchema = z
  .object({
    BlockPublicSecurityGroupRules: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether Amazon EMR block public access is enabled (<code>true</code>) or disabled (<code>false</code>). By default, the value is <code>false</code> for accounts that have created EMR clusters before July 2019. For accounts created after this, the default is <code>true</code>.',
        }),
    ),
    PermittedPublicSecurityGroupRuleRanges: PortRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies ports and port ranges that are permitted to have security group rules that allow inbound traffic from all public sources. For example, if Port 23 (Telnet) is specified for <code>PermittedPublicSecurityGroupRuleRanges</code>, Amazon EMR allows cluster creation if a security group associated with the cluster has a rule that allows inbound traffic on Port 23 from IPv4 0.0.0.0/0 or IPv6 port ::/0 as the source.</p> <p>By default, Port 22, which is used for SSH access to the cluster EC2 instances, is in the list of <code>PermittedPublicSecurityGroupRuleRanges</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BlockPublicSecurityGroupRules'],
    description:
      "A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.",
  })
  .openapi('BlockPublicAccessConfiguration')

const BlockPublicAccessConfigurationMetadataSchema = z
  .object({
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the configuration was created.' }),
    ),
    CreatedByArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name that created or last modified the configuration.',
        }),
    ),
  })
  .openapi({
    required: ['CreationDateTime', 'CreatedByArn'],
    description:
      'Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.',
  })
  .openapi('BlockPublicAccessConfigurationMetadata')

const GetBlockPublicAccessConfigurationOutputSchema = z
  .object({
    BlockPublicAccessConfiguration: BlockPublicAccessConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code> in the <code>BlockPublicAccessConfiguration</code>. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating the block public access configuration to remove the exception.</p> <note> <p>For accounts that created clusters in a Region before November 25, 2019, block public access is disabled by default in that Region. To use this feature, you must manually enable and configure it. For accounts that did not create an EMR cluster in a Region before this date, block public access is enabled by default in that Region.</p> </note>',
        }),
    ),
    BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.',
        }),
    ),
  })
  .openapi({
    required: ['BlockPublicAccessConfiguration', 'BlockPublicAccessConfigurationMetadata'],
  })
  .openapi('GetBlockPublicAccessConfigurationOutput')

const GetBlockPublicAccessConfigurationInputSchema = z
  .object({})
  .openapi({ title: 'GetBlockPublicAccessConfigurationInput' })
  .openapi('GetBlockPublicAccessConfigurationInput')

const UsernamePasswordSchema = z
  .object({
    Username: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The username associated with the temporary credentials that you use to connect to cluster endpoints.',
        }),
    ).exactOptional(),
    Password: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The password associated with the temporary credentials that you use to connect to cluster endpoints.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The username and password that you use to connect to cluster endpoints.',
    required: [],
  })
  .openapi('UsernamePassword')

const CredentialsSchema = z
  .object({
    UsernamePassword: UsernamePasswordSchema.and(
      z
        .any()
        .openapi({
          description: 'The username and password that you use to connect to cluster endpoints.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The credentials that you can use to connect to cluster endpoints. Credentials consist of a username and a password.',
    required: [],
  })
  .openapi('Credentials')

const GetClusterSessionCredentialsOutputSchema = z
  .object({
    Credentials: CredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The credentials that you can use to connect to cluster endpoints that support username and password authentication.',
        }),
    ).exactOptional(),
    ExpiresAt: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the credentials that are returned by the <code>GetClusterSessionCredentials</code> API expire.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetClusterSessionCredentialsOutput')

const GetClusterSessionCredentialsInputSchema = z
  .object({
    ClusterId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of the cluster.' }),
    ),
    ExecutionRoleArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the runtime role for interactive workload submission on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: <code>arn:partition:service:region:account:resource</code>.',
        }),
    ),
  })
  .openapi({
    required: ['ClusterId', 'ExecutionRoleArn'],
    title: 'GetClusterSessionCredentialsInput',
  })
  .openapi('GetClusterSessionCredentialsInput')

const ComputeLimitsUnitTypeSchema = z
  .enum(['InstanceFleetUnits', 'Instances', 'VCPU'])
  .openapi('ComputeLimitsUnitType')

const ComputeLimitsSchema = z
  .object({
    UnitType: ComputeLimitsUnitTypeSchema.and(
      z
        .any()
        .openapi({ description: ' The unit type used for specifying a managed scaling policy. ' }),
    ),
    MinimumCapacityUnits: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The lower boundary of EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. ',
        }),
    ),
    MaximumCapacityUnits: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The upper boundary of EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. ',
        }),
    ),
    MaximumOnDemandCapacityUnits: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The upper boundary of On-Demand EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The On-Demand units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between On-Demand and Spot Instances. ',
        }),
    ).exactOptional(),
    MaximumCoreCapacityUnits: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The upper boundary of EC2 units for core node type in a cluster. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The core units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between core and task nodes. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UnitType', 'MinimumCapacityUnits', 'MaximumCapacityUnits'],
    description:
      ' The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. ',
  })
  .openapi('ComputeLimits')

const ManagedScalingPolicySchema = z
  .object({
    ComputeLimits: ComputeLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster is not allowed to go above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. ',
    required: [],
  })
  .openapi('ManagedScalingPolicy')

const GetManagedScalingPolicyOutputSchema = z
  .object({
    ManagedScalingPolicy: ManagedScalingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the managed scaling policy that is attached to an Amazon EMR cluster. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetManagedScalingPolicyOutput')

const GetManagedScalingPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the cluster for which the managed scaling policy will be fetched. ',
        }),
    ),
  })
  .openapi({ required: ['ClusterId'], title: 'GetManagedScalingPolicyInput' })
  .openapi('GetManagedScalingPolicyInput')

const SessionMappingDetailSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ).exactOptional(),
    IdentityId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({ description: 'The globally unique identifier (GUID) of the user or group.' }),
    ).exactOptional(),
    IdentityName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API Reference</i>.',
        }),
    ).exactOptional(),
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the identity mapped to the Amazon EMR Studio is a user or a group.',
        }),
    ).exactOptional(),
    SessionPolicyArn: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the session policy associated with the user or group.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time the session mapping was created.' }),
    ).exactOptional(),
    LastModifiedTime: DateSchema.and(
      z.any().openapi({ description: 'The time the session mapping was last modified.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.',
    required: [],
  })
  .openapi('SessionMappingDetail')

const GetStudioSessionMappingOutputSchema = z
  .object({
    SessionMapping: SessionMappingDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session mapping details for the specified Amazon EMR Studio and identity, including session policy ARN and creation time.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStudioSessionMappingOutput')

const GetStudioSessionMappingInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ),
    IdentityId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier (GUID) of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.',
        }),
    ).exactOptional(),
    IdentityName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the user or group to fetch. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.',
        }),
    ).exactOptional(),
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether the identity to fetch is a user or a group.' }),
    ),
  })
  .openapi({ required: ['StudioId', 'IdentityType'], title: 'GetStudioSessionMappingInput' })
  .openapi('GetStudioSessionMappingInput')

const CommandSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the command.' }),
    ).exactOptional(),
    ScriptPath: StringSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of the command script.' }),
    ).exactOptional(),
    Args: StringListSchema.and(
      z
        .any()
        .openapi({ description: 'Arguments for Amazon EMR to pass to the command for execution.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An entity describing an executable that runs on a cluster.',
    required: [],
  })
  .openapi('Command')

const CommandListSchema = z.array(CommandSchema).openapi('CommandList')

const MarkerSchema = z.string().openapi('Marker')

const ListBootstrapActionsOutputSchema = z
  .object({
    BootstrapActions: CommandListSchema.and(
      z.any().openapi({ description: 'The bootstrap actions associated with the cluster.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'This output contains the bootstrap actions detail.', required: [] })
  .openapi('ListBootstrapActionsOutput')

const ListBootstrapActionsInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The cluster identifier for the bootstrap actions to list.' }),
    ),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterId'],
    title: 'ListBootstrapActionsInput',
    description: 'This input determines which bootstrap actions to retrieve.',
  })
  .openapi('ListBootstrapActionsInput')

const ClusterSummarySchema = z
  .object({
    Id: ClusterIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the cluster.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster.' }),
    ).exactOptional(),
    Status: ClusterStatusSchema.and(
      z.any().openapi({ description: 'The details about the current status of the cluster.' }),
    ).exactOptional(),
    NormalizedInstanceHours: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.',
        }),
    ).exactOptional(),
    ClusterArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the cluster.' }),
    ).exactOptional(),
    OutpostArn: OptionalArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the Outpost where the cluster is launched. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary description of the cluster.', required: [] })
  .openapi('ClusterSummary')

const ClusterSummaryListSchema = z.array(ClusterSummarySchema).openapi('ClusterSummaryList')

const ListClustersOutputSchema = z
  .object({
    Clusters: ClusterSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of clusters for the account based on the given filters.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.',
    required: [],
  })
  .openapi('ListClustersOutput')

const ClusterStateListSchema = z.array(ClusterStateSchema).openapi('ClusterStateList')

const ListClustersInputSchema = z
  .object({
    CreatedAfter: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The creation date and time beginning value filter for listing clusters.',
        }),
    ).exactOptional(),
    CreatedBefore: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The creation date and time end value filter for listing clusters.',
        }),
    ).exactOptional(),
    ClusterStates: ClusterStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster state filters to apply when listing clusters. Clusters that change state while this action runs may be not be returned as expected in the list of clusters.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListClustersInput',
    description:
      'This input determines how the ListClusters action filters the list of clusters that it returns.',
    required: [],
  })
  .openapi('ListClustersInput')

const InstanceFleetStateSchema = z
  .enum([
    'PROVISIONING',
    'BOOTSTRAPPING',
    'RUNNING',
    'RESIZING',
    'SUSPENDED',
    'TERMINATING',
    'TERMINATED',
  ])
  .openapi('InstanceFleetState')

const InstanceFleetStateChangeReasonCodeSchema = z
  .enum(['INTERNAL_ERROR', 'VALIDATION_ERROR', 'INSTANCE_FAILURE', 'CLUSTER_TERMINATED'])
  .openapi('InstanceFleetStateChangeReasonCode')

const InstanceFleetStateChangeReasonSchema = z
  .object({
    Code: InstanceFleetStateChangeReasonCodeSchema.and(
      z
        .any()
        .openapi({ description: 'A code corresponding to the reason the state change occurred.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'An explanatory message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
    required: [],
  })
  .openapi('InstanceFleetStateChangeReason')

const InstanceFleetTimelineSchema = z
  .object({
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The time and date the instance fleet was created.' }),
    ).exactOptional(),
    ReadyDateTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The time and date the instance fleet was ready to run jobs.' }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The time and date the instance fleet terminated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
    required: [],
  })
  .openapi('InstanceFleetTimeline')

const InstanceFleetStatusSchema = z
  .object({
    State: InstanceFleetStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A code representing the instance fleet status.</p> <ul> <li> <p> <code>PROVISIONING</code>—The instance fleet is provisioning EC2 resources and is not yet ready to run jobs.</p> </li> <li> <p> <code>BOOTSTRAPPING</code>—EC2 instances and other resources have been provisioned and the bootstrap actions specified for the instances are underway.</p> </li> <li> <p> <code>RUNNING</code>—EC2 instances and other resources are running. They are either executing jobs or waiting to execute jobs.</p> </li> <li> <p> <code>RESIZING</code>—A resize operation is underway. EC2 instances are either being added or removed.</p> </li> <li> <p> <code>SUSPENDED</code>—A resize operation could not complete. Existing EC2 instances are running, but instances can't be added or removed.</p> </li> <li> <p> <code>TERMINATING</code>—The instance fleet is terminating EC2 instances.</p> </li> <li> <p> <code>TERMINATED</code>—The instance fleet is no longer active, and all EC2 instances have been terminated.</p> </li> </ul>",
        }),
    ).exactOptional(),
    StateChangeReason: InstanceFleetStateChangeReasonSchema.and(
      z
        .any()
        .openapi({ description: 'Provides status change reason details for the instance fleet.' }),
    ).exactOptional(),
    Timeline: InstanceFleetTimelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
    required: [],
  })
  .openapi('InstanceFleetStatus')

const EbsBlockDeviceSchema = z
  .object({
    VolumeSpecification: VolumeSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an EC2 instance in the cluster.',
        }),
    ).exactOptional(),
    Device: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The device name that is exposed to the instance, such as /dev/sdh.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configuration of requested EBS block device associated with the instance group.',
    required: [],
  })
  .openapi('EbsBlockDevice')

const EbsBlockDeviceListSchema = z.array(EbsBlockDeviceSchema).openapi('EbsBlockDeviceList')

const InstanceTypeSpecificationSchema = z
  .object({
    InstanceType: InstanceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The EC2 instance type, for example <code>m3.xlarge</code>.' }),
    ).exactOptional(),
    WeightedCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in <a>InstanceFleetConfig</a>. Capacity values represent performance characteristics such as vCPUs, memory, or I/O. If not specified, the default value is 1.',
        }),
    ).exactOptional(),
    BidPrice: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The bid price for each EC2 Spot Instance type as defined by <code>InstanceType</code>. Expressed in USD.',
        }),
    ).exactOptional(),
    BidPriceAsPercentageOfOnDemandPrice: NonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bid price, as a percentage of On-Demand price, for each EC2 Spot Instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%).',
        }),
    ).exactOptional(),
    Configurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.',
        }),
    ).exactOptional(),
    EbsBlockDevices: EbsBlockDeviceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by <code>InstanceType</code>.',
        }),
    ).exactOptional(),
    EbsOptimized: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Evaluates to <code>TRUE</code> when the specified <code>InstanceType</code> is EBS-optimized.',
        }),
    ).exactOptional(),
    CustomAmiId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The custom AMI ID to use for the instance type.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
    required: [],
  })
  .openapi('InstanceTypeSpecification')

const InstanceTypeSpecificationListSchema = z
  .array(InstanceTypeSpecificationSchema)
  .openapi('InstanceTypeSpecificationList')

const InstanceFleetSchema = z
  .object({
    Id: InstanceFleetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the instance fleet.' }),
    ).exactOptional(),
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'A friendly name for the instance fleet.' }),
    ).exactOptional(),
    Status: InstanceFleetStatusSchema.and(
      z.any().openapi({ description: 'The current status of the instance fleet. ' }),
    ).exactOptional(),
    InstanceFleetType: InstanceFleetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK. ',
        }),
    ).exactOptional(),
    TargetOnDemandCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand Instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand Instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedOnDemandCapacity</a> to determine the Spot capacity units that have been provisioned for the instance fleet.</p> <note> <p>If not specified or set to 0, only Spot Instances are provisioned for the instance fleet using <code>TargetSpotCapacity</code>. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>',
        }),
    ).exactOptional(),
    TargetSpotCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot Instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When a Spot instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedSpotCapacity</a> to determine the Spot capacity units that have been provisioned for the instance fleet.</p> <note> <p>If not specified or set to 0, only On-Demand Instances are provisioned for the instance fleet. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>',
        }),
    ).exactOptional(),
    ProvisionedOnDemandCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of On-Demand units that have been provisioned for the instance fleet to fulfill <code>TargetOnDemandCapacity</code>. This provisioned capacity might be less than or greater than <code>TargetOnDemandCapacity</code>.',
        }),
    ).exactOptional(),
    ProvisionedSpotCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Spot units that have been provisioned for this instance fleet to fulfill <code>TargetSpotCapacity</code>. This provisioned capacity might be less than or greater than <code>TargetSpotCapacity</code>.',
        }),
    ).exactOptional(),
    InstanceTypeSpecifications: InstanceTypeSpecificationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of specifications for the instance types that comprise an instance fleet.',
        }),
    ).exactOptional(),
    LaunchSpecifications: InstanceFleetProvisioningSpecificationsSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the launch specification for an instance fleet. ' }),
    ).exactOptional(),
    ResizeSpecifications: InstanceFleetResizingSpecificationsSchema.and(
      z.any().openapi({ description: 'The resize specification for the instance fleet.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
    required: [],
  })
  .openapi('InstanceFleet')

const InstanceFleetListSchema = z.array(InstanceFleetSchema).openapi('InstanceFleetList')

const ListInstanceFleetsOutputSchema = z
  .object({
    InstanceFleets: InstanceFleetListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of instance fleets for the cluster and given filters.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInstanceFleetsOutput')

const ListInstanceFleetsInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the cluster.' }),
    ),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterId'], title: 'ListInstanceFleetsInput' })
  .openapi('ListInstanceFleetsInput')

const InstanceGroupIdSchema = z.string().openapi('InstanceGroupId')

const InstanceGroupTypeSchema = z.enum(['MASTER', 'CORE', 'TASK']).openapi('InstanceGroupType')

const InstanceGroupStateChangeReasonCodeSchema = z
  .enum(['INTERNAL_ERROR', 'VALIDATION_ERROR', 'INSTANCE_FAILURE', 'CLUSTER_TERMINATED'])
  .openapi('InstanceGroupStateChangeReasonCode')

const InstanceGroupStateChangeReasonSchema = z
  .object({
    Code: InstanceGroupStateChangeReasonCodeSchema.and(
      z.any().openapi({ description: 'The programmable code for the state change reason.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The status change reason description.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The status change reason details for the instance group.',
    required: [],
  })
  .openapi('InstanceGroupStateChangeReason')

const InstanceGroupTimelineSchema = z
  .object({
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The creation date and time of the instance group.' }),
    ).exactOptional(),
    ReadyDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the instance group became ready to perform tasks.',
        }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the instance group terminated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The timeline of the instance group lifecycle.', required: [] })
  .openapi('InstanceGroupTimeline')

const InstanceGroupStatusSchema = z
  .object({
    State: InstanceGroupStateSchema.and(
      z.any().openapi({ description: 'The current state of the instance group.' }),
    ).exactOptional(),
    StateChangeReason: InstanceGroupStateChangeReasonSchema.and(
      z.any().openapi({ description: 'The status change reason details for the instance group.' }),
    ).exactOptional(),
    Timeline: InstanceGroupTimelineSchema.and(
      z.any().openapi({ description: 'The timeline of the instance group status over time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of the instance group status.', required: [] })
  .openapi('InstanceGroupStatus')

const InstanceIdSchema = z.string().openapi('InstanceId')

const EC2InstanceIdsListSchema = z.array(InstanceIdSchema).openapi('EC2InstanceIdsList')

const InstanceResizePolicySchema = z
  .object({
    InstancesToTerminate: EC2InstanceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specific list of instances to be terminated when shrinking an instance group.',
        }),
    ).exactOptional(),
    InstancesToProtect: EC2InstanceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specific list of instances to be protected when shrinking an instance group.',
        }),
    ).exactOptional(),
    InstanceTerminationTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Decommissioning timeout override for the specific list of instances to be terminated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.',
    required: [],
  })
  .openapi('InstanceResizePolicy')

const ShrinkPolicySchema = z
  .object({
    DecommissionTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired timeout for decommissioning an instance. Overrides the default YARN decommissioning timeout.',
        }),
    ).exactOptional(),
    InstanceResizePolicy: InstanceResizePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.',
    required: [],
  })
  .openapi('ShrinkPolicy')

const AutoScalingPolicyStateSchema = z
  .enum(['PENDING', 'ATTACHING', 'ATTACHED', 'DETACHING', 'DETACHED', 'FAILED'])
  .openapi('AutoScalingPolicyState')

const AutoScalingPolicyStateChangeReasonCodeSchema = z
  .enum(['USER_REQUEST', 'PROVISION_FAILURE', 'CLEANUP_FAILURE'])
  .openapi('AutoScalingPolicyStateChangeReasonCode')

const AutoScalingPolicyStateChangeReasonSchema = z
  .object({
    Code: AutoScalingPolicyStateChangeReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code indicating the reason for the change in status.<code>USER_REQUEST</code> indicates that the scaling policy status was changed by a user. <code>PROVISION_FAILURE</code> indicates that the status change was because the policy failed to provision. <code>CLEANUP_FAILURE</code> indicates an error.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly, more verbose message that accompanies an automatic scaling policy state change.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The reason for an <a>AutoScalingPolicyStatus</a> change.',
    required: [],
  })
  .openapi('AutoScalingPolicyStateChangeReason')

const AutoScalingPolicyStatusSchema = z
  .object({
    State: AutoScalingPolicyStateSchema.and(
      z.any().openapi({ description: 'Indicates the status of the automatic scaling policy.' }),
    ).exactOptional(),
    StateChangeReason: AutoScalingPolicyStateChangeReasonSchema.and(
      z.any().openapi({ description: 'The reason for a change in status.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of an automatic scaling policy. ', required: [] })
  .openapi('AutoScalingPolicyStatus')

const AutoScalingPolicyDescriptionSchema = z
  .object({
    Status: AutoScalingPolicyStatusSchema.and(
      z.any().openapi({ description: 'The status of an automatic scaling policy. ' }),
    ).exactOptional(),
    Constraints: ScalingConstraintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.',
        }),
    ).exactOptional(),
    Rules: ScalingRuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scale-in and scale-out rules that comprise the automatic scaling policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.',
    required: [],
  })
  .openapi('AutoScalingPolicyDescription')

const InstanceGroupSchema = z
  .object({
    Id: InstanceGroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of the instance group.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the instance group.' }),
    ).exactOptional(),
    Market: MarketTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marketplace to provision instances for this group. Valid values are ON_DEMAND or SPOT.',
        }),
    ).exactOptional(),
    InstanceGroupType: InstanceGroupTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the instance group. Valid values are MASTER, CORE or TASK.',
        }),
    ).exactOptional(),
    BidPrice: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify <code>OnDemandPrice</code> to set the amount equal to the On-Demand price, or specify an amount in USD.',
        }),
    ).exactOptional(),
    InstanceType: InstanceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The EC2 instance type for all instances in the instance group.' }),
    ).exactOptional(),
    RequestedInstanceCount: IntegerSchema.and(
      z.any().openapi({ description: 'The target number of instances for the instance group.' }),
    ).exactOptional(),
    RunningInstanceCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of instances currently running in this instance group.',
        }),
    ).exactOptional(),
    Status: InstanceGroupStatusSchema.and(
      z.any().openapi({ description: 'The current status of the instance group.' }),
    ).exactOptional(),
    Configurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>The list of configurations supplied for an Amazon EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>',
        }),
    ).exactOptional(),
    ConfigurationsVersion: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the requested configuration specification for this instance group.',
        }),
    ).exactOptional(),
    LastSuccessfullyAppliedConfigurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of configurations that were successfully applied for an instance group last time.',
        }),
    ).exactOptional(),
    LastSuccessfullyAppliedConfigurationsVersion: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of a configuration specification that was successfully applied for an instance group last time. ',
        }),
    ).exactOptional(),
    EbsBlockDevices: EbsBlockDeviceListSchema.and(
      z
        .any()
        .openapi({ description: 'The EBS block devices that are mapped to this instance group.' }),
    ).exactOptional(),
    EbsOptimized: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O.',
        }),
    ).exactOptional(),
    ShrinkPolicy: ShrinkPolicySchema.and(
      z.any().openapi({ description: 'Policy for customizing shrink operations.' }),
    ).exactOptional(),
    AutoScalingPolicy: AutoScalingPolicyDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.',
        }),
    ).exactOptional(),
    CustomAmiId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({ description: 'The custom AMI ID to use for the provisioned instance group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.',
    required: [],
  })
  .openapi('InstanceGroup')

const InstanceGroupListSchema = z.array(InstanceGroupSchema).openapi('InstanceGroupList')

const ListInstanceGroupsOutputSchema = z
  .object({
    InstanceGroups: InstanceGroupListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of instance groups for the cluster and given filters.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This input determines which instance groups to retrieve.',
    required: [],
  })
  .openapi('ListInstanceGroupsOutput')

const ListInstanceGroupsInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the cluster for which to list the instance groups.',
        }),
    ),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterId'],
    title: 'ListInstanceGroupsInput',
    description: 'This input determines which instance groups to retrieve.',
  })
  .openapi('ListInstanceGroupsInput')

const InstanceStateSchema = z
  .enum(['AWAITING_FULFILLMENT', 'PROVISIONING', 'BOOTSTRAPPING', 'RUNNING', 'TERMINATED'])
  .openapi('InstanceState')

const InstanceStateChangeReasonCodeSchema = z
  .enum([
    'INTERNAL_ERROR',
    'VALIDATION_ERROR',
    'INSTANCE_FAILURE',
    'BOOTSTRAP_FAILURE',
    'CLUSTER_TERMINATED',
  ])
  .openapi('InstanceStateChangeReasonCode')

const InstanceStateChangeReasonSchema = z
  .object({
    Code: InstanceStateChangeReasonCodeSchema.and(
      z.any().openapi({ description: 'The programmable code for the state change reason.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The status change reason description.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The details of the status change reason for the instance.',
    required: [],
  })
  .openapi('InstanceStateChangeReason')

const InstanceTimelineSchema = z
  .object({
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The creation date and time of the instance.' }),
    ).exactOptional(),
    ReadyDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the instance was ready to perform tasks.',
        }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the instance was terminated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The timeline of the instance lifecycle.', required: [] })
  .openapi('InstanceTimeline')

const InstanceStatusSchema = z
  .object({
    State: InstanceStateSchema.and(
      z.any().openapi({ description: 'The current state of the instance.' }),
    ).exactOptional(),
    StateChangeReason: InstanceStateChangeReasonSchema.and(
      z.any().openapi({ description: 'The details of the status change reason for the instance.' }),
    ).exactOptional(),
    Timeline: InstanceTimelineSchema.and(
      z.any().openapi({ description: 'The timeline of the instance status over time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The instance status details.', required: [] })
  .openapi('InstanceStatus')

const EbsVolumeSchema = z
  .object({
    Device: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The device name that is exposed to the instance, such as /dev/sdh.',
        }),
    ).exactOptional(),
    VolumeId: StringSchema.and(
      z.any().openapi({ description: 'The volume identifier of the EBS volume.' }),
    ).exactOptional(),
  })
  .openapi({ description: "EBS block device that's attached to an EC2 instance.", required: [] })
  .openapi('EbsVolume')

const EbsVolumeListSchema = z.array(EbsVolumeSchema).openapi('EbsVolumeList')

const InstanceSchema = z
  .object({
    Id: InstanceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the instance in Amazon EMR.' }),
    ).exactOptional(),
    Ec2InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the instance in Amazon EC2.' }),
    ).exactOptional(),
    PublicDnsName: StringSchema.and(
      z.any().openapi({ description: 'The public DNS name of the instance.' }),
    ).exactOptional(),
    PublicIpAddress: StringSchema.and(
      z.any().openapi({ description: 'The public IP address of the instance.' }),
    ).exactOptional(),
    PrivateDnsName: StringSchema.and(
      z.any().openapi({ description: 'The private DNS name of the instance.' }),
    ).exactOptional(),
    PrivateIpAddress: StringSchema.and(
      z.any().openapi({ description: 'The private IP address of the instance.' }),
    ).exactOptional(),
    Status: InstanceStatusSchema.and(
      z.any().openapi({ description: 'The current status of the instance.' }),
    ).exactOptional(),
    InstanceGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the instance group to which this instance belongs.',
        }),
    ).exactOptional(),
    InstanceFleetId: InstanceFleetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the instance fleet to which an EC2 instance belongs.',
        }),
    ).exactOptional(),
    Market: MarketTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance purchasing option. Valid values are <code>ON_DEMAND</code> or <code>SPOT</code>. ',
        }),
    ).exactOptional(),
    InstanceType: InstanceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The EC2 instance type, for example <code>m3.xlarge</code>.' }),
    ).exactOptional(),
    EbsVolumes: EbsVolumeListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of Amazon EBS volumes that are attached to this instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents an EC2 instance provisioned as part of cluster.',
    required: [],
  })
  .openapi('Instance')

const InstanceListSchema = z.array(InstanceSchema).openapi('InstanceList')

const ListInstancesOutputSchema = z
  .object({
    Instances: InstanceListSchema.and(
      z.any().openapi({ description: 'The list of instances for the cluster and given filters.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'This output contains the list of instances.', required: [] })
  .openapi('ListInstancesOutput')

const InstanceGroupTypeListSchema = z
  .array(InstanceGroupTypeSchema)
  .openapi('InstanceGroupTypeList')

const InstanceStateListSchema = z.array(InstanceStateSchema).openapi('InstanceStateList')

const ListInstancesInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the cluster for which to list the instances.' }),
    ),
    InstanceGroupId: InstanceGroupIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the instance group for which to list the instances.',
        }),
    ).exactOptional(),
    InstanceGroupTypes: InstanceGroupTypeListSchema.and(
      z
        .any()
        .openapi({ description: 'The type of instance group for which to list the instances.' }),
    ).exactOptional(),
    InstanceFleetId: InstanceFleetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the instance fleet.' }),
    ).exactOptional(),
    InstanceFleetType: InstanceFleetTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The node type of the instance fleet. For example MASTER, CORE, or TASK.',
        }),
    ).exactOptional(),
    InstanceStates: InstanceStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of instance states that will filter the instances returned with this request.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterId'],
    title: 'ListInstancesInput',
    description: 'This input determines which instances to list.',
  })
  .openapi('ListInstancesInput')

const NotebookExecutionSummarySchema = z
  .object({
    NotebookExecutionId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of the notebook execution.' }),
    ).exactOptional(),
    EditorId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the editor associated with the notebook execution.',
        }),
    ).exactOptional(),
    NotebookExecutionName: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The name of the notebook execution.' }),
    ).exactOptional(),
    Status: NotebookExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the notebook execution.</p> <ul> <li> <p> <code>START_PENDING</code> indicates that the cluster has received the execution request but execution has not begun.</p> </li> <li> <p> <code>STARTING</code> indicates that the execution is starting on the cluster.</p> </li> <li> <p> <code>RUNNING</code> indicates that the execution is being processed by the cluster.</p> </li> <li> <p> <code>FINISHING</code> indicates that execution processing is in the final stages.</p> </li> <li> <p> <code>FINISHED</code> indicates that the execution has completed without error.</p> </li> <li> <p> <code>FAILING</code> indicates that the execution is failing and will not finish successfully.</p> </li> <li> <p> <code>FAILED</code> indicates that the execution failed.</p> </li> <li> <p> <code>STOP_PENDING</code> indicates that the cluster has received a <code>StopNotebookExecution</code> request and the stop is pending.</p> </li> <li> <p> <code>STOPPING</code> indicates that the cluster is in the process of stopping the execution as a result of a <code>StopNotebookExecution</code> request.</p> </li> <li> <p> <code>STOPPED</code> indicates that the execution stopped because of a <code>StopNotebookExecution</code> request.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StartTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp when notebook execution started.' }),
    ).exactOptional(),
    EndTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp when notebook execution started.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution.',
    required: [],
  })
  .openapi('NotebookExecutionSummary')

const NotebookExecutionSummaryListSchema = z
  .array(NotebookExecutionSummarySchema)
  .openapi('NotebookExecutionSummaryList')

const ListNotebookExecutionsOutputSchema = z
  .object({
    NotebookExecutions: NotebookExecutionSummaryListSchema.and(
      z.any().openapi({ description: 'A list of notebook executions.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token that a subsequent <code>ListNotebookExecutions</code> can use to determine the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNotebookExecutionsOutput')

const ListNotebookExecutionsInputSchema = z
  .object({
    EditorId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description: 'The unique ID of the editor associated with the notebook execution.',
        }),
    ).exactOptional(),
    Status: NotebookExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status filter for listing notebook executions.</p> <ul> <li> <p> <code>START_PENDING</code> indicates that the cluster has received the execution request but execution has not begun.</p> </li> <li> <p> <code>STARTING</code> indicates that the execution is starting on the cluster.</p> </li> <li> <p> <code>RUNNING</code> indicates that the execution is being processed by the cluster.</p> </li> <li> <p> <code>FINISHING</code> indicates that execution processing is in the final stages.</p> </li> <li> <p> <code>FINISHED</code> indicates that the execution has completed without error.</p> </li> <li> <p> <code>FAILING</code> indicates that the execution is failing and will not finish successfully.</p> </li> <li> <p> <code>FAILED</code> indicates that the execution failed.</p> </li> <li> <p> <code>STOP_PENDING</code> indicates that the cluster has received a <code>StopNotebookExecution</code> request and the stop is pending.</p> </li> <li> <p> <code>STOPPING</code> indicates that the cluster is in the process of stopping the execution as a result of a <code>StopNotebookExecution</code> request.</p> </li> <li> <p> <code>STOPPED</code> indicates that the execution stopped because of a <code>StopNotebookExecution</code> request.</p> </li> </ul>',
        }),
    ).exactOptional(),
    From: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning of time range filter for listing notebook executions. The default is the timestamp of 30 days ago.',
        }),
    ).exactOptional(),
    To: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of time range filter for listing notebook executions. The default is the current timestamp.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token, returned by a previous <code>ListNotebookExecutions</code> call, that indicates the start of the list for this <code>ListNotebookExecutions</code> call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListNotebookExecutionsInput', required: [] })
  .openapi('ListNotebookExecutionsInput')

const ListReleaseLabelsOutputSchema = z
  .object({
    ReleaseLabels: StringListSchema.and(
      z.any().openapi({ description: 'The returned release labels.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to paginate the next page of results if specified in the next <code>ListReleaseLabels</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReleaseLabelsOutput')

const ReleaseLabelFilterSchema = z
  .object({
    Prefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional release label version prefix filter. For example, <code>emr-5</code>.',
        }),
    ).exactOptional(),
    Application: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional release label application filter. For example, <code>spark@2.1.0</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The release label filters by application or version prefix.',
    required: [],
  })
  .openapi('ReleaseLabelFilter')

const ListReleaseLabelsInputSchema = z
  .object({
    Filters: ReleaseLabelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the results of the request. <code>Prefix</code> specifies the prefix of release labels to return. <code>Application</code> specifies the application (with/without version) of release labels to return.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next page of results. If <code>NextToken</code> is not specified, which is usually the case for the first request of ListReleaseLabels, the first page of results are determined by other filtering parameters or by the latest version. The <code>ListReleaseLabels</code> request fails if the identity (Amazon Web Services account ID) and all filtering parameters are different from the original request, or if the <code>NextToken</code> is expired or tampered with.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the maximum number of release labels to return in a single response. The default is <code>100</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReleaseLabelsInput', required: [] })
  .openapi('ListReleaseLabelsInput')

const SecurityConfigurationSummarySchema = z
  .object({
    Name: XmlStringSchema.and(
      z.any().openapi({ description: 'The name of the security configuration.' }),
    ).exactOptional(),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time the security configuration was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The creation date and time, and name, of a security configuration.',
    required: [],
  })
  .openapi('SecurityConfigurationSummary')

const SecurityConfigurationListSchema = z
  .array(SecurityConfigurationSummarySchema)
  .openapi('SecurityConfigurationList')

const ListSecurityConfigurationsOutputSchema = z
  .object({
    SecurityConfigurations: SecurityConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'The creation date and time, and name, of each security configuration.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token that indicates the next set of results to retrieve. Include the marker in the next ListSecurityConfiguration call to retrieve the next page of results, if required.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSecurityConfigurationsOutput')

const ListSecurityConfigurationsInputSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSecurityConfigurationsInput', required: [] })
  .openapi('ListSecurityConfigurationsInput')

const StepSummarySchema = z
  .object({
    Id: StepIdSchema.and(
      z.any().openapi({ description: 'The identifier of the cluster step.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster step.' }),
    ).exactOptional(),
    Config: HadoopStepConfigSchema.and(
      z.any().openapi({ description: 'The Hadoop job configuration of the cluster step.' }),
    ).exactOptional(),
    ActionOnFailure: ActionOnFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is available for backward compatibility.',
        }),
    ).exactOptional(),
    Status: StepStatusSchema.and(
      z.any().openapi({ description: 'The current execution status details of the cluster step.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of the cluster step.', required: [] })
  .openapi('StepSummary')

const StepSummaryListSchema = z.array(StepSummarySchema).openapi('StepSummaryList')

const ListStepsOutputSchema = z
  .object({
    Steps: StepSummaryListSchema.and(
      z.any().openapi({ description: 'The filtered list of steps for the cluster.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of steps that a single <code>ListSteps</code> action returns is 50. To return a longer list of steps, use multiple <code>ListSteps</code> actions along with the <code>Marker</code> parameter, which is a pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.',
    required: [],
  })
  .openapi('ListStepsOutput')

const StepStateListSchema = z.array(StepStateSchema).openapi('StepStateList')

const ListStepsInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the cluster for which to list the steps.' }),
    ),
    StepStates: StepStateListSchema.and(
      z
        .any()
        .openapi({ description: 'The filter to limit the step list based on certain states.' }),
    ).exactOptional(),
    StepIds: XmlStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filter to limit the step list based on the identifier of the steps. You can specify a maximum of ten Step IDs. The character constraint applies to the overall length of the array.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of steps that a single <code>ListSteps</code> action returns is 50. To return a longer list of steps, use multiple <code>ListSteps</code> actions along with the <code>Marker</code> parameter, which is a pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterId'],
    title: 'ListStepsInput',
    description: 'This input determines which steps to list.',
  })
  .openapi('ListStepsInput')

const SessionMappingSummarySchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ).exactOptional(),
    IdentityId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier (GUID) of the user or group from the IAM Identity Center Identity Store.',
        }),
    ).exactOptional(),
    IdentityName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API Reference</i>.',
        }),
    ).exactOptional(),
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the identity mapped to the Amazon EMR Studio is a user or a group.',
        }),
    ).exactOptional(),
    SessionPolicyArn: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the session policy associated with the user or group.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time the session mapping was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.',
    required: [],
  })
  .openapi('SessionMappingSummary')

const SessionMappingSummaryListSchema = z
  .array(SessionMappingSummarySchema)
  .openapi('SessionMappingSummaryList')

const ListStudioSessionMappingsOutputSchema = z
  .object({
    SessionMappings: SessionMappingSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of session mapping summary objects. Each object includes session mapping details such as creation time, identity type (user or group), and Amazon EMR Studio ID.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStudioSessionMappingsOutput')

const ListStudioSessionMappingsInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ).exactOptional(),
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to return session mappings for users or groups. If not specified, the results include session mapping details for both users and groups.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListStudioSessionMappingsInput', required: [] })
  .openapi('ListStudioSessionMappingsInput')

const StudioSummarySchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ).exactOptional(),
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The name of the Amazon EMR Studio.' }),
    ).exactOptional(),
    VpcId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Virtual Private Cloud (Amazon VPC) associated with the Amazon EMR Studio.',
        }),
    ).exactOptional(),
    Description: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The detailed description of the Amazon EMR Studio.' }),
    ).exactOptional(),
    Url: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique access URL of the Amazon EMR Studio.' }),
    ).exactOptional(),
    AuthMode: AuthModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the Studio authenticates users using IAM or IAM Identity Center.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the Amazon EMR Studio was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio.',
    required: [],
  })
  .openapi('StudioSummary')

const StudioSummaryListSchema = z.array(StudioSummarySchema).openapi('StudioSummaryList')

const ListStudiosOutputSchema = z
  .object({
    Studios: StudioSummaryListSchema.and(
      z.any().openapi({ description: 'The list of Studio summary objects.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStudiosOutput')

const ListStudiosInputSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListStudiosInput', required: [] })
  .openapi('ListStudiosInput')

const ModifyClusterOutputSchema = z
  .object({
    StepConcurrencyLevel: IntegerSchema.and(
      z.any().openapi({ description: 'The number of steps that can be executed concurrently.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModifyClusterOutput')

const ModifyClusterInputSchema = z
  .object({
    ClusterId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the cluster.' }),
    ),
    StepConcurrencyLevel: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of steps that can be executed concurrently. You can specify a minimum of 1 step and a maximum of 256 steps. We recommend that you do not change this parameter while steps are running or the <code>ActionOnFailure</code> setting may not behave as expected. For more information see <a>Step$ActionOnFailure</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterId'], title: 'ModifyClusterInput' })
  .openapi('ModifyClusterInput')

const InstanceFleetModifyConfigSchema = z
  .object({
    InstanceFleetId: InstanceFleetIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the instance fleet.' }),
    ),
    TargetOnDemandCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target capacity of On-Demand units for the instance fleet. For more information see <a>InstanceFleetConfig$TargetOnDemandCapacity</a>.',
        }),
    ).exactOptional(),
    TargetSpotCapacity: WholeNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target capacity of Spot units for the instance fleet. For more information, see <a>InstanceFleetConfig$TargetSpotCapacity</a>.',
        }),
    ).exactOptional(),
    ResizeSpecifications: InstanceFleetResizingSpecificationsSchema.and(
      z.any().openapi({ description: 'The resize specification for the instance fleet.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceFleetId'],
    description:
      '<p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
  })
  .openapi('InstanceFleetModifyConfig')

const ModifyInstanceFleetInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the cluster.' }),
    ),
    InstanceFleet: InstanceFleetModifyConfigSchema.and(
      z.any().openapi({ description: 'The configuration parameters of the instance fleet.' }),
    ),
  })
  .openapi({ required: ['ClusterId', 'InstanceFleet'], title: 'ModifyInstanceFleetInput' })
  .openapi('ModifyInstanceFleetInput')

const EC2InstanceIdsToTerminateListSchema = z
  .array(InstanceIdSchema)
  .openapi('EC2InstanceIdsToTerminateList')

const ReconfigurationTypeSchema = z.enum(['OVERWRITE', 'MERGE']).openapi('ReconfigurationType')

const InstanceGroupModifyConfigSchema = z
  .object({
    InstanceGroupId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'Unique ID of the instance group to modify.' }),
    ),
    InstanceCount: IntegerSchema.and(
      z.any().openapi({ description: 'Target size for the instance group.' }),
    ).exactOptional(),
    EC2InstanceIdsToTerminate: EC2InstanceIdsToTerminateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EC2 InstanceIds to terminate. After you terminate the instances, the instance group will not return to its original requested size.',
        }),
    ).exactOptional(),
    ShrinkPolicy: ShrinkPolicySchema.and(
      z.any().openapi({ description: 'Policy for customizing shrink operations.' }),
    ).exactOptional(),
    ReconfigurationType: ReconfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Type of reconfiguration requested. Valid values are MERGE and OVERWRITE.',
        }),
    ).exactOptional(),
    Configurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of new or modified configurations to apply for an instance group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceGroupId'],
    description: 'Modify the size or configurations of an instance group.',
  })
  .openapi('InstanceGroupModifyConfig')

const InstanceGroupModifyConfigListSchema = z
  .array(InstanceGroupModifyConfigSchema)
  .openapi('InstanceGroupModifyConfigList')

const ModifyInstanceGroupsInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the cluster to which the instance group belongs.' }),
    ).exactOptional(),
    InstanceGroups: InstanceGroupModifyConfigListSchema.and(
      z.any().openapi({ description: 'Instance groups to change.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ModifyInstanceGroupsInput',
    description: 'Change the size of some instance groups.',
    required: [],
  })
  .openapi('ModifyInstanceGroupsInput')

const PutAutoScalingPolicyOutputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.',
        }),
    ).exactOptional(),
    InstanceGroupId: InstanceGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the instance group to which the scaling policy is applied.',
        }),
    ).exactOptional(),
    AutoScalingPolicy: AutoScalingPolicyDescriptionSchema.and(
      z.any().openapi({ description: 'The automatic scaling policy definition.' }),
    ).exactOptional(),
    ClusterArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the cluster.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutAutoScalingPolicyOutput')

const PutAutoScalingPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.',
        }),
    ),
    InstanceGroupId: InstanceGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the instance group to which the automatic scaling policy is applied.',
        }),
    ),
    AutoScalingPolicy: AutoScalingPolicySchema.and(
      z.any().openapi({ description: 'Specifies the definition of the automatic scaling policy.' }),
    ),
  })
  .openapi({
    required: ['ClusterId', 'InstanceGroupId', 'AutoScalingPolicy'],
    title: 'PutAutoScalingPolicyInput',
  })
  .openapi('PutAutoScalingPolicyInput')

const PutAutoTerminationPolicyOutputSchema = z.object({}).openapi('PutAutoTerminationPolicyOutput')

const PutAutoTerminationPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the Amazon EMR cluster to which the auto-termination policy will be attached.',
        }),
    ),
    AutoTerminationPolicy: AutoTerminationPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the auto-termination policy to attach to the cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterId'], title: 'PutAutoTerminationPolicyInput' })
  .openapi('PutAutoTerminationPolicyInput')

const PutBlockPublicAccessConfigurationOutputSchema = z
  .object({})
  .openapi('PutBlockPublicAccessConfigurationOutput')

const PutBlockPublicAccessConfigurationInputSchema = z
  .object({
    BlockPublicAccessConfiguration: BlockPublicAccessConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code> in the <code>BlockPublicAccessConfiguration</code>. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating <code>BlockPublicSecurityGroupRules</code> to remove the exception.</p> <note> <p>For accounts that created clusters in a Region before November 25, 2019, block public access is disabled by default in that Region. To use this feature, you must manually enable and configure it. For accounts that did not create an EMR cluster in a Region before this date, block public access is enabled by default in that Region.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['BlockPublicAccessConfiguration'],
    title: 'PutBlockPublicAccessConfigurationInput',
  })
  .openapi('PutBlockPublicAccessConfigurationInput')

const PutManagedScalingPolicyOutputSchema = z.object({}).openapi('PutManagedScalingPolicyOutput')

const PutManagedScalingPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of an EMR cluster where the managed scaling policy is attached. ',
        }),
    ),
    ManagedScalingPolicy: ManagedScalingPolicySchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the constraints for the managed scaling policy. ' }),
    ),
  })
  .openapi({
    required: ['ClusterId', 'ManagedScalingPolicy'],
    title: 'PutManagedScalingPolicyInput',
  })
  .openapi('PutManagedScalingPolicyInput')

const RemoveAutoScalingPolicyOutputSchema = z.object({}).openapi('RemoveAutoScalingPolicyOutput')

const RemoveAutoScalingPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.',
        }),
    ),
    InstanceGroupId: InstanceGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the instance group to which the scaling policy is applied.',
        }),
    ),
  })
  .openapi({ required: ['ClusterId', 'InstanceGroupId'], title: 'RemoveAutoScalingPolicyInput' })
  .openapi('RemoveAutoScalingPolicyInput')

const RemoveAutoTerminationPolicyOutputSchema = z
  .object({})
  .openapi('RemoveAutoTerminationPolicyOutput')

const RemoveAutoTerminationPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the Amazon EMR cluster from which the auto-termination policy will be removed.',
        }),
    ),
  })
  .openapi({ required: ['ClusterId'], title: 'RemoveAutoTerminationPolicyInput' })
  .openapi('RemoveAutoTerminationPolicyInput')

const RemoveManagedScalingPolicyOutputSchema = z
  .object({})
  .openapi('RemoveManagedScalingPolicyOutput')

const RemoveManagedScalingPolicyInputSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the ID of the cluster from which the managed scaling policy will be removed. ',
        }),
    ),
  })
  .openapi({ required: ['ClusterId'], title: 'RemoveManagedScalingPolicyInput' })
  .openapi('RemoveManagedScalingPolicyInput')

const RemoveTagsOutputSchema = z
  .object({})
  .openapi({ description: 'This output indicates the result of removing tags from the resource.' })
  .openapi('RemoveTagsOutput')

const RemoveTagsInputSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EMR resource identifier from which tags will be removed. For example, a cluster identifier or an Amazon EMR Studio ID.',
        }),
    ),
    TagKeys: StringListSchema.and(
      z.any().openapi({ description: 'A list of tag keys to remove from the resource.' }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'TagKeys'],
    title: 'RemoveTagsInput',
    description: 'This input identifies an Amazon EMR resource and a list of tags to remove.',
  })
  .openapi('RemoveTagsInput')

const RunJobFlowOutputSchema = z
  .object({
    JobFlowId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'A unique identifier for the job flow.' }),
    ).exactOptional(),
    ClusterArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the cluster.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The result of the <a>RunJobFlow</a> operation. ', required: [] })
  .openapi('RunJobFlowOutput')

const InstanceFleetConfigListSchema = z
  .array(InstanceFleetConfigSchema)
  .openapi('InstanceFleetConfigList')

const SecurityGroupsListSchema = z.array(XmlStringMaxLen256Schema).openapi('SecurityGroupsList')

const JobFlowInstancesConfigSchema = z
  .object({
    MasterInstanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'The EC2 instance type of the master node.' }),
    ).exactOptional(),
    SlaveInstanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'The EC2 instance type of the core and task nodes.' }),
    ).exactOptional(),
    InstanceCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of EC2 instances in the cluster.' }),
    ).exactOptional(),
    InstanceGroups: InstanceGroupConfigListSchema.and(
      z.any().openapi({ description: 'Configuration for the instance groups in a cluster.' }),
    ).exactOptional(),
    InstanceFleets: InstanceFleetConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> <p>Describes the EC2 instances and instance configurations for clusters that use the instance fleet configuration.</p>',
        }),
    ).exactOptional(),
    Ec2KeyName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the EC2 key pair that can be used to connect to the master node using SSH as the user called "hadoop."',
        }),
    ).exactOptional(),
    Placement: PlacementTypeSchema.and(
      z.any().openapi({ description: 'The Availability Zone in which the cluster runs.' }),
    ).exactOptional(),
    KeepJobFlowAliveWhenNoSteps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the cluster should remain available after completing all steps. Defaults to <code>true</code>. For more information about configuring cluster termination, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control Cluster Termination</a> in the <i>EMR Management Guide</i>.',
        }),
    ).exactOptional(),
    TerminationProtected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.',
        }),
    ).exactOptional(),
    HadoopVersion: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the cluster. Valid inputs are "0.18" (no longer maintained), "0.20" (no longer maintained), "0.20.205" (no longer maintained), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the <code>AmiVersion</code> parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.',
        }),
    ).exactOptional(),
    Ec2SubnetId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Applies to clusters that use the uniform instance group configuration. To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value and your account supports EC2-Classic, the cluster launches in EC2-Classic.',
        }),
    ).exactOptional(),
    Ec2SubnetIds: XmlStringMaxLen256ListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
        }),
    ).exactOptional(),
    EmrManagedMasterSecurityGroup: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon EC2 security group for the master node. If you specify <code>EmrManagedMasterSecurityGroup</code>, you must also specify <code>EmrManagedSlaveSecurityGroup</code>.',
        }),
    ).exactOptional(),
    EmrManagedSlaveSecurityGroup: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon EC2 security group for the core and task nodes. If you specify <code>EmrManagedSlaveSecurityGroup</code>, you must also specify <code>EmrManagedMasterSecurityGroup</code>.',
        }),
    ).exactOptional(),
    ServiceAccessSecurityGroup: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.',
        }),
    ).exactOptional(),
    AdditionalMasterSecurityGroups: SecurityGroupsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of additional Amazon EC2 security group IDs for the master node.',
        }),
    ).exactOptional(),
    AdditionalSlaveSecurityGroups: SecurityGroupsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of additional Amazon EC2 security group IDs for the core and task nodes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.",
    required: [],
  })
  .openapi('JobFlowInstancesConfig')

const BootstrapActionConfigListSchema = z
  .array(BootstrapActionConfigSchema)
  .openapi('BootstrapActionConfigList')

const SupportedProductConfigSchema = z
  .object({
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The name of the product configuration.' }),
    ).exactOptional(),
    Args: XmlStringListSchema.and(
      z.any().openapi({ description: 'The list of user-supplied arguments.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The list of supported product configurations that allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.',
    required: [],
  })
  .openapi('SupportedProductConfig')

const NewSupportedProductsListSchema = z
  .array(SupportedProductConfigSchema)
  .openapi('NewSupportedProductsList')

const RunJobFlowInputSchema = z
  .object({
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The name of the job flow.' }),
    ),
    LogUri: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created.',
        }),
    ).exactOptional(),
    LogEncryptionKmsKeyId: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key used for encrypting log files. If a value is not provided, the logs remain encrypted by AES-256. This attribute is only available with Amazon EMR version 5.30.0 and later, excluding Amazon EMR 6.0.0.',
        }),
    ).exactOptional(),
    AdditionalInfo: XmlStringSchema.and(
      z.any().openapi({ description: 'A JSON string for selecting additional features.' }),
    ).exactOptional(),
    AmiVersion: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use <code>CustomAmiID</code>.',
        }),
    ).exactOptional(),
    ReleaseLabel: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version such as <code>emr-5.14.0</code>. For more information about Amazon EMR release versions and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use <code>AmiVersion</code>.',
        }),
    ).exactOptional(),
    Instances: JobFlowInstancesConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'A specification of the number and type of Amazon EC2 instances.',
        }),
    ),
    Steps: StepConfigListSchema.and(
      z.any().openapi({ description: 'A list of steps to run.' }),
    ).exactOptional(),
    BootstrapActions: BootstrapActionConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of bootstrap actions to run before Hadoop starts on the cluster nodes.',
        }),
    ).exactOptional(),
    SupportedProducts: SupportedProductsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.</p> </note> <p>A list of strings that indicates third-party software to use. For more information, see the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Currently supported values are:</p> <ul> <li> <p>"mapr-m3" - launch the job flow using MapR M3 Edition.</p> </li> <li> <p>"mapr-m5" - launch the job flow using MapR M5 Edition.</p> </li> </ul>',
        }),
    ).exactOptional(),
    NewSupportedProducts: NewSupportedProductsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.</p> </note> <p>A list of strings that indicates third-party software to use with the job flow that accepts a user argument list. EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action arguments. For more information, see "Launch a Job Flow on the MapR Distribution for Hadoop" in the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Supported values are:</p> <ul> <li> <p>"mapr-m3" - launch the cluster using MapR M3 Edition.</p> </li> <li> <p>"mapr-m5" - launch the cluster using MapR M5 Edition.</p> </li> <li> <p>"mapr" with the user arguments specifying "--edition,m3" or "--edition,m5" - launch the job flow using MapR M3 or M5 Edition respectively.</p> </li> <li> <p>"mapr-m7" - launch the cluster using MapR M7 Edition.</p> </li> <li> <p>"hunk" - launch the cluster with the Hunk Big Data Analytics Platform.</p> </li> <li> <p>"hue"- launch the cluster with Hue installed.</p> </li> <li> <p>"spark" - launch the cluster with Apache Spark installed.</p> </li> <li> <p>"ganglia" - launch the cluster with the Ganglia Monitoring System installed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Applications: ApplicationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applies to Amazon EMR releases 4.0 and later. A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">Amazon EMRRelease Guide</a>.',
        }),
    ).exactOptional(),
    Configurations: ConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'For Amazon EMR releases 4.0 and later. The list of configurations supplied for the EMR cluster you are creating.',
        }),
    ).exactOptional(),
    VisibleToAllUsers: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>The VisibleToAllUsers parameter is no longer supported. By default, the value is set to <code>true</code>. Setting it to <code>false</code> now has no effect.</p> </important> <p>Set this value to <code>true</code> so that IAM principals in the Amazon Web Services account associated with the cluster can perform EMR actions on the cluster that their IAM policies allow. This value defaults to <code>true</code> for clusters created using the EMR API or the CLI <a href="https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html">create-cluster</a> command.</p> <p>When set to <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions for the cluster, regardless of the IAM permissions policies attached to other IAM principals. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>',
        }),
    ).exactOptional(),
    JobFlowRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Also called instance profile and EC2 role. An IAM role for an EMR cluster. The EC2 instances of the cluster assume this role. The default role is <code>EMR_EC2_DefaultRole</code>. In order to use the default role, you must have already created it using the CLI or console.',
        }),
    ).exactOptional(),
    ServiceRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IAM role that Amazon EMR assumes in order to access Amazon Web Services resources on your behalf. If you've created a custom service role path, you must specify it for the service role when you launch your cluster.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associate with a cluster and propagate to Amazon EC2 instances.',
        }),
    ).exactOptional(),
    SecurityConfiguration: XmlStringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a security configuration to apply to the cluster.' }),
    ).exactOptional(),
    AutoScalingRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.',
        }),
    ).exactOptional(),
    ScaleDownBehavior: ScaleDownBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.',
        }),
    ).exactOptional(),
    CustomAmiId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI. If specified, Amazon EMR uses this AMI when it launches cluster EC2 instances. For more information about custom AMIs in Amazon EMR, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-custom-ami.html">Using a Custom AMI</a> in the <i>Amazon EMR Management Guide</i>. If omitted, the cluster uses the base Linux AMI for the <code>ReleaseLabel</code> specified. For Amazon EMR versions 2.x and 3.x, use <code>AmiVersion</code> instead.</p> <p>For information about creating a custom AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating an Amazon EBS-Backed Linux AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>. For information about finding an AMI ID, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux AMI</a>. </p>',
        }),
    ).exactOptional(),
    EbsRootVolumeSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.',
        }),
    ).exactOptional(),
    RepoUpgradeOnBoot: RepoUpgradeOnBootSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applies only when <code>CustomAmiID</code> is used. Specifies which updates from the Amazon Linux AMI package repositories to apply automatically when the instance boots using the AMI. If omitted, the default is <code>SECURITY</code>, which indicates that only security updates are applied. If <code>NONE</code> is specified, no updates are applied, and all updates must be applied manually.',
        }),
    ).exactOptional(),
    KerberosAttributes: KerberosAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.',
        }),
    ).exactOptional(),
    StepConcurrencyLevel: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of steps that can be executed concurrently. The default value is <code>1</code>. The maximum value is <code>256</code>.',
        }),
    ).exactOptional(),
    ManagedScalingPolicy: ManagedScalingPolicySchema.and(
      z
        .any()
        .openapi({
          description: ' The specified managed scaling policy for an Amazon EMR cluster. ',
        }),
    ).exactOptional(),
    PlacementGroupConfigs: PlacementGroupConfigListSchema.and(
      z
        .any()
        .openapi({
          description: 'The specified placement group configuration for an Amazon EMR cluster.',
        }),
    ).exactOptional(),
    AutoTerminationPolicy: AutoTerminationPolicySchema.exactOptional(),
    OSReleaseLabel: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a particular Amazon Linux release for all nodes in a cluster launch RunJobFlow request. If a release is not specified, Amazon EMR uses the latest validated Amazon Linux release for cluster launch.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Instances'],
    title: 'RunJobFlowInput',
    description: ' Input to the <a>RunJobFlow</a> operation. ',
  })
  .openapi('RunJobFlowInput')

const SetTerminationProtectionInputSchema = z
  .object({
    JobFlowIds: XmlStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of strings that uniquely identify the clusters to protect. This identifier is returned by <a>RunJobFlow</a> and can also be obtained from <a>DescribeJobFlows</a> . ',
        }),
    ),
    TerminationProtected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that indicates whether to protect the cluster and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or job-flow error.',
        }),
    ),
  })
  .openapi({
    required: ['JobFlowIds', 'TerminationProtected'],
    title: 'SetTerminationProtectionInput',
    description: ' The input argument to the <a>TerminationProtection</a> operation. ',
  })
  .openapi('SetTerminationProtectionInput')

const SetVisibleToAllUsersInputSchema = z
  .object({
    JobFlowIds: XmlStringListSchema.and(
      z.any().openapi({ description: 'The unique identifier of the job flow (cluster).' }),
    ),
    VisibleToAllUsers: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value of <code>true</code> indicates that an IAM principal in the Amazon Web Services account can perform EMR actions on the cluster that the IAM policies attached to the principal allow. A value of <code>false</code> indicates that only the IAM principal that created the cluster and the Amazon Web Services root user can perform EMR actions on the cluster.',
        }),
    ),
  })
  .openapi({
    required: ['JobFlowIds', 'VisibleToAllUsers'],
    title: 'SetVisibleToAllUsersInput',
    description: 'The input to the SetVisibleToAllUsers action.',
  })
  .openapi('SetVisibleToAllUsersInput')

const StartNotebookExecutionOutputSchema = z
  .object({
    NotebookExecutionId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of the notebook execution.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartNotebookExecutionOutput')

const StartNotebookExecutionInputSchema = z
  .object({
    EditorId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the EMR Notebook to use for notebook execution.',
        }),
    ),
    RelativePath: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path and file name of the notebook file for this execution, relative to the path specified for the EMR Notebook. For example, if you specify a path of <code>s3://MyBucket/MyNotebooks</code> when you create an EMR Notebook for a notebook with an ID of <code>e-ABCDEFGHIJK1234567890ABCD</code> (the <code>EditorID</code> of this request), and you specify a <code>RelativePath</code> of <code>my_notebook_executions/notebook_execution.ipynb</code>, the location of the file for the notebook execution is <code>s3://MyBucket/MyNotebooks/e-ABCDEFGHIJK1234567890ABCD/my_notebook_executions/notebook_execution.ipynb</code>.',
        }),
    ),
    NotebookExecutionName: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'An optional name for the notebook execution.' }),
    ).exactOptional(),
    NotebookParams: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Input parameters in JSON format passed to the EMR Notebook at runtime for execution.',
        }),
    ).exactOptional(),
    ExecutionEngine: ExecutionEngineConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the execution engine (cluster) that runs the notebook execution.',
        }),
    ),
    ServiceRole: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the IAM role that is used as the service role for Amazon EMR (the EMR role) for the notebook execution.',
        }),
    ),
    NotebookInstanceSecurityGroupId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the Amazon EC2 security group to associate with the EMR Notebook for this notebook execution.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags associated with a notebook execution. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters and an optional value string with a maximum of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EditorId', 'RelativePath', 'ExecutionEngine', 'ServiceRole'],
    title: 'StartNotebookExecutionInput',
  })
  .openapi('StartNotebookExecutionInput')

const StopNotebookExecutionInputSchema = z
  .object({
    NotebookExecutionId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The unique identifier of the notebook execution.' }),
    ),
  })
  .openapi({ required: ['NotebookExecutionId'], title: 'StopNotebookExecutionInput' })
  .openapi('StopNotebookExecutionInput')

const TerminateJobFlowsInputSchema = z
  .object({
    JobFlowIds: XmlStringListSchema.and(
      z.any().openapi({ description: 'A list of job flows to be shut down.' }),
    ),
  })
  .openapi({
    required: ['JobFlowIds'],
    title: 'TerminateJobFlowsInput',
    description: ' Input to the <a>TerminateJobFlows</a> operation. ',
  })
  .openapi('TerminateJobFlowsInput')

const UpdateStudioInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio to update.' }),
    ),
    Name: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'A descriptive name for the Amazon EMR Studio.' }),
    ).exactOptional(),
    Description: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({ description: 'A detailed description to assign to the Amazon EMR Studio.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of subnet IDs to associate with the Amazon EMR Studio. The list can include new subnet IDs, but must also include all of the subnet IDs previously associated with the Studio. The list order does not matter. A Studio can have a maximum of 5 subnets. The subnets must belong to the same VPC as the Studio. ',
        }),
    ).exactOptional(),
    DefaultS3Location: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location to back up Workspaces and notebook files for the Amazon EMR Studio.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StudioId'], title: 'UpdateStudioInput' })
  .openapi('UpdateStudioInput')

const UpdateStudioSessionMappingInputSchema = z
  .object({
    StudioId: XmlStringMaxLen256Schema.and(
      z.any().openapi({ description: 'The ID of the Amazon EMR Studio.' }),
    ),
    IdentityId: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier (GUID) of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.',
        }),
    ).exactOptional(),
    IdentityName: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the user or group to update. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.',
        }),
    ).exactOptional(),
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether the identity to update is a user or a group.' }),
    ),
    SessionPolicyArn: XmlStringMaxLen256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the session policy to associate with the specified user or group.',
        }),
    ),
  })
  .openapi({
    required: ['StudioId', 'IdentityType', 'SessionPolicyArn'],
    title: 'UpdateStudioSessionMappingInput',
  })
  .openapi('UpdateStudioSessionMappingInput')

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

export const postXAmzTargetElasticMapReduceAddInstanceFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.AddInstanceFleet',
  description:
    '<p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>',
  operationId: 'AddInstanceFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.AddInstanceFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.AddInstanceFleet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddInstanceFleetInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddInstanceFleetOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceAddInstanceGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.AddInstanceGroups',
  description: 'Adds one or more instance groups to a running cluster.',
  operationId: 'AddInstanceGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.AddInstanceGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.AddInstanceGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddInstanceGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddInstanceGroupsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceAddJobFlowStepsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps',
  description:
    '<p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>',
  operationId: 'AddJobFlowSteps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.AddJobFlowSteps')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.AddJobFlowSteps'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddJobFlowStepsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddJobFlowStepsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceAddTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.AddTags',
  description:
    'Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. ',
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
      'X-Amz-Target': z
        .literal('ElasticMapReduce.AddTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.AddTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddTagsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddTagsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceCancelStepsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.CancelSteps',
  description:
    'Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. ',
  operationId: 'CancelSteps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.CancelSteps')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.CancelSteps'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelStepsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelStepsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceCreateSecurityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration',
  description:
    'Creates a security configuration, which is stored in the service and can be specified when a cluster is created.',
  operationId: 'CreateSecurityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.CreateSecurityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.CreateSecurityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSecurityConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSecurityConfigurationOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceCreateStudioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.CreateStudio',
  description: 'Creates a new Amazon EMR Studio.',
  operationId: 'CreateStudio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.CreateStudio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.CreateStudio'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateStudioInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStudioOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceCreateStudioSessionMappingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping',
  description:
    'Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.',
  operationId: 'CreateStudioSessionMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.CreateStudioSessionMapping')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.CreateStudioSessionMapping'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateStudioSessionMappingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDeleteSecurityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration',
  description: 'Deletes a security configuration.',
  operationId: 'DeleteSecurityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DeleteSecurityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DeleteSecurityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSecurityConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSecurityConfigurationOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDeleteStudioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DeleteStudio',
  description: 'Removes an Amazon EMR Studio from the Studio metadata store.',
  operationId: 'DeleteStudio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DeleteStudio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DeleteStudio'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteStudioInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDeleteStudioSessionMappingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping',
  description: 'Removes a user or group from an Amazon EMR Studio.',
  operationId: 'DeleteStudioSessionMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DeleteStudioSessionMapping')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DeleteStudioSessionMapping'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteStudioSessionMappingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDescribeClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DescribeCluster',
  description:
    'Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.',
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
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DescribeCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DescribeCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeClusterInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClusterOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDescribeJobFlowsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DescribeJobFlows',
  description:
    '<p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>',
  operationId: 'DescribeJobFlows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DescribeJobFlows')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DescribeJobFlows'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeJobFlowsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobFlowsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetElasticMapReduceDescribeNotebookExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution',
  description: 'Provides details of a notebook execution.',
  operationId: 'DescribeNotebookExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DescribeNotebookExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DescribeNotebookExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeNotebookExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeNotebookExecutionOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDescribeReleaseLabelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel',
  description:
    'Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.',
  operationId: 'DescribeReleaseLabel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DescribeReleaseLabel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DescribeReleaseLabel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeReleaseLabelInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReleaseLabelOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDescribeSecurityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration',
  description:
    'Provides the details of a security configuration by returning the configuration JSON.',
  operationId: 'DescribeSecurityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DescribeSecurityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DescribeSecurityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSecurityConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSecurityConfigurationOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDescribeStepRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DescribeStep',
  description: 'Provides more detail about the cluster step.',
  operationId: 'DescribeStep',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DescribeStep')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DescribeStep'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeStepInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStepOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceDescribeStudioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.DescribeStudio',
  description:
    'Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.',
  operationId: 'DescribeStudio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.DescribeStudio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.DescribeStudio'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStudioInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStudioOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceGetAutoTerminationPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy',
  description: 'Returns the auto-termination policy for an Amazon EMR cluster.',
  operationId: 'GetAutoTerminationPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.GetAutoTerminationPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.GetAutoTerminationPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAutoTerminationPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAutoTerminationPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration',
  description:
    'Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.',
  operationId: 'GetBlockPublicAccessConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.GetBlockPublicAccessConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ElasticMapReduce.GetBlockPublicAccessConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetBlockPublicAccessConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBlockPublicAccessConfigurationOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceGetClusterSessionCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials',
  description:
    'Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.',
  operationId: 'GetClusterSessionCredentials',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.GetClusterSessionCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.GetClusterSessionCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetClusterSessionCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetClusterSessionCredentialsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceGetManagedScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy',
  description: 'Fetches the attached managed scaling policy for an Amazon EMR cluster. ',
  operationId: 'GetManagedScalingPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.GetManagedScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.GetManagedScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetManagedScalingPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetManagedScalingPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceGetStudioSessionMappingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping',
  description:
    'Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).',
  operationId: 'GetStudioSessionMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.GetStudioSessionMapping')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.GetStudioSessionMapping'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetStudioSessionMappingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStudioSessionMappingOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListBootstrapActionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListBootstrapActions',
  description: 'Provides information about the bootstrap actions associated with a cluster.',
  operationId: 'ListBootstrapActions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListBootstrapActions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListBootstrapActions'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListBootstrapActionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBootstrapActionsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListClustersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListClusters',
  description:
    'Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.',
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
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListClusters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListClusters'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListClustersInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListClustersOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListInstanceFleetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListInstanceFleets',
  description:
    '<p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
  operationId: 'ListInstanceFleets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListInstanceFleets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListInstanceFleets'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListInstanceFleetsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInstanceFleetsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListInstanceGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListInstanceGroups',
  description: 'Provides all available details about the instance groups in a cluster.',
  operationId: 'ListInstanceGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListInstanceGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListInstanceGroups'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListInstanceGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInstanceGroupsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListInstances',
  description:
    'Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.',
  operationId: 'ListInstances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListInstances'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListInstancesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInstancesOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListNotebookExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions',
  description:
    'Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.',
  operationId: 'ListNotebookExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListNotebookExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListNotebookExecutions'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListNotebookExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNotebookExecutionsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListReleaseLabelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListReleaseLabels',
  description: 'Retrieves release labels of EMR services in the region where the API is called.',
  operationId: 'ListReleaseLabels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListReleaseLabels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListReleaseLabels'] },
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
      content: { 'application/json': { schema: ListReleaseLabelsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReleaseLabelsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListSecurityConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations',
  description:
    'Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.',
  operationId: 'ListSecurityConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListSecurityConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListSecurityConfigurations'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSecurityConfigurationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSecurityConfigurationsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListStepsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListSteps',
  description:
    'Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.',
  operationId: 'ListSteps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListSteps')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListSteps'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListStepsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStepsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListStudioSessionMappingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings',
  description:
    'Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.',
  operationId: 'ListStudioSessionMappings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListStudioSessionMappings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListStudioSessionMappings'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListStudioSessionMappingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStudioSessionMappingsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceListStudiosRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ListStudios',
  description:
    'Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.',
  operationId: 'ListStudios',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ListStudios')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ListStudios'] },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListStudiosInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStudiosOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceModifyClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ModifyCluster',
  description:
    'Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.',
  operationId: 'ModifyCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ModifyCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ModifyCluster'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyClusterInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyClusterOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceModifyInstanceFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet',
  description:
    '<p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>',
  operationId: 'ModifyInstanceFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ModifyInstanceFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ModifyInstanceFleet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyInstanceFleetInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceModifyInstanceGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups',
  description:
    'ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.',
  operationId: 'ModifyInstanceGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.ModifyInstanceGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.ModifyInstanceGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyInstanceGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReducePutAutoScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy',
  description:
    'Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.',
  operationId: 'PutAutoScalingPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.PutAutoScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.PutAutoScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutAutoScalingPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAutoScalingPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReducePutAutoTerminationPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy',
  description:
    '<note> <p>Auto-termination is supported in Amazon EMR versions 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>',
  operationId: 'PutAutoTerminationPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.PutAutoTerminationPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.PutAutoTerminationPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutAutoTerminationPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAutoTerminationPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration',
  description:
    'Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.',
  operationId: 'PutBlockPublicAccessConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.PutBlockPublicAccessConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ElasticMapReduce.PutBlockPublicAccessConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutBlockPublicAccessConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutBlockPublicAccessConfigurationOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReducePutManagedScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy',
  description:
    'Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. ',
  operationId: 'PutManagedScalingPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.PutManagedScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.PutManagedScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutManagedScalingPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutManagedScalingPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceRemoveAutoScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy',
  description:
    'Removes an automatic scaling policy from a specified instance group within an EMR cluster.',
  operationId: 'RemoveAutoScalingPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.RemoveAutoScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.RemoveAutoScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveAutoScalingPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveAutoScalingPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy',
  description: 'Removes an auto-termination policy from an Amazon EMR cluster.',
  operationId: 'RemoveAutoTerminationPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.RemoveAutoTerminationPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.RemoveAutoTerminationPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveAutoTerminationPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveAutoTerminationPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceRemoveManagedScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy',
  description: ' Removes a managed scaling policy from a specified EMR cluster. ',
  operationId: 'RemoveManagedScalingPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.RemoveManagedScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.RemoveManagedScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveManagedScalingPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveManagedScalingPolicyOutputSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceRemoveTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.RemoveTags',
  description:
    '<p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>',
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
      'X-Amz-Target': z
        .literal('ElasticMapReduce.RemoveTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.RemoveTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveTagsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTagsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceRunJobFlowRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.RunJobFlow',
  description:
    '<p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>',
  operationId: 'RunJobFlow',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.RunJobFlow')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.RunJobFlow'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunJobFlowInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RunJobFlowOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceSetTerminationProtectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.SetTerminationProtection',
  description:
    '<p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>',
  operationId: 'SetTerminationProtection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.SetTerminationProtection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.SetTerminationProtection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetTerminationProtectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceSetVisibleToAllUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers',
  description:
    '<important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access Management for EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>',
  operationId: 'SetVisibleToAllUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.SetVisibleToAllUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.SetVisibleToAllUsers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetVisibleToAllUsersInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceStartNotebookExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.StartNotebookExecution',
  description: 'Starts a notebook execution.',
  operationId: 'StartNotebookExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.StartNotebookExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.StartNotebookExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartNotebookExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartNotebookExecutionOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceStopNotebookExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.StopNotebookExecution',
  description: 'Stops a notebook execution.',
  operationId: 'StopNotebookExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.StopNotebookExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.StopNotebookExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopNotebookExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceTerminateJobFlowsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.TerminateJobFlows',
  description:
    '<p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>',
  operationId: 'TerminateJobFlows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.TerminateJobFlows')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.TerminateJobFlows'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateJobFlowsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceUpdateStudioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.UpdateStudio',
  description:
    'Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.',
  operationId: 'UpdateStudio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.UpdateStudio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.UpdateStudio'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateStudioInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetElasticMapReduceUpdateStudioSessionMappingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping',
  description:
    'Updates the session policy attached to the user or group for the specified Amazon EMR Studio.',
  operationId: 'UpdateStudioSessionMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ElasticMapReduce.UpdateStudioSessionMapping')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ElasticMapReduce.UpdateStudioSessionMapping'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateStudioSessionMappingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})
