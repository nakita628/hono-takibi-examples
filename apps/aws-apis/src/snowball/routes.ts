import { createRoute, z } from '@hono/zod-openapi'

const GSTINSchema = z
  .string()
  .regex(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/)
  .length(15)
  .openapi('GSTIN')

const INDTaxDocumentsSchema = z
  .object({
    GSTIN: GSTINSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Goods and Services Tax (GST) documents required in Amazon Web Services Region in India.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The tax documents required in Amazon Web Services Region in India.',
    required: [],
  })
  .openapi('INDTaxDocuments')

type TaxDocumentsType = { IND?: z.infer<typeof INDTaxDocumentsSchema> }

const StorageLimitSchema = z.int().min(0).openapi('StorageLimit')

const StorageUnitSchema = z.literal('TB').openapi('StorageUnit')

const NFSOnDeviceServiceConfigurationSchema = z
  .object({
    StorageLimit: StorageLimitSchema.and(
      z.any().openapi({ description: 'The maximum NFS storage for one Snow Family device.' }),
    ).exactOptional(),
    StorageUnit: StorageUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scale unit of the NFS storage on the device.</p> <p>Valid values: TB.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the metadata and configuration settings for the NFS (Network File System) service on an Amazon Web Services Snow Family device.',
    required: [],
  })
  .openapi('NFSOnDeviceServiceConfiguration')

const TGWOnDeviceServiceConfigurationSchema = z
  .object({
    StorageLimit: StorageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of virtual tapes to store on one Snow Family device. Due to physical resource limitations, this value must be set to 80 for Snowball Edge.',
        }),
    ).exactOptional(),
    StorageUnit: StorageUnitSchema.and(
      z.any().openapi({ description: 'The scale unit of the virtual tapes on the device.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the metadata and configuration settings for the Storage Gateway service Tape Gateway type on an Amazon Web Services Snow Family device.',
    required: [],
  })
  .openapi('TGWOnDeviceServiceConfiguration')

const StringSchema = z.string().regex(/.*/).min(1).max(1024).openapi('String')

const EKSOnDeviceServiceConfigurationSchema = z
  .object({
    KubernetesVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Kubernetes version for EKS Anywhere on the Snow Family device.',
        }),
    ).exactOptional(),
    EKSAnywhereVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of EKS Anywhere on the Snow Family device.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing the metadata and configuration settings of EKS Anywhere on the Snow Family device.',
    required: [],
  })
  .openapi('EKSOnDeviceServiceConfiguration')

const S3StorageLimitSchema = z.float64().min(0).openapi('S3StorageLimit')

const ServiceSizeSchema = z.int().min(3).max(16).openapi('ServiceSize')

const NodeFaultToleranceSchema = z.int().min(1).max(4).openapi('NodeFaultTolerance')

const S3OnDeviceServiceConfigurationSchema = z
  .object({
    StorageLimit: S3StorageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the specified storage limit value matches storage limit of one of the defined configurations, that configuration will be used. If the specified storage limit value does not match any defined configuration, the request will fail. If more than one configuration has the same storage limit as specified, the other input need to be provided.',
        }),
    ).exactOptional(),
    StorageUnit: StorageUnitSchema.and(
      z.any().openapi({ description: 'Storage unit. Currently the only supported unit is TB.' }),
    ).exactOptional(),
    ServiceSize: ServiceSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applicable when creating a cluster. Specifies how many nodes are needed for Amazon S3 compatible storage on Snow family devices. If specified, the other input can be omitted.',
        }),
    ).exactOptional(),
    FaultTolerance: NodeFaultToleranceSchema.and(
      z
        .any()
        .openapi({
          description:
            '&gt;Fault tolerance level of the cluster. This indicates the number of nodes that can go down without degrading the performance of the cluster. This additional input helps when the specified <code>StorageLimit</code> matches more than one Amazon S3 compatible storage on Snow family devices service configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Amazon S3 compatible storage on Snow family devices configuration items.',
    required: [],
  })
  .openapi('S3OnDeviceServiceConfiguration')

type OnDeviceServiceConfigurationType = {
  NFSOnDeviceService?: z.infer<typeof NFSOnDeviceServiceConfigurationSchema> & {
    [key: string]: unknown
  }
  TGWOnDeviceService?: z.infer<typeof TGWOnDeviceServiceConfigurationSchema> & {
    [key: string]: unknown
  }
  EKSOnDeviceService?: z.infer<typeof EKSOnDeviceServiceConfigurationSchema> & {
    [key: string]: unknown
  }
  S3OnDeviceService?: z.infer<typeof S3OnDeviceServiceConfigurationSchema> & {
    [key: string]: unknown
  }
}

const BooleanSchema = z.boolean().openapi('Boolean')

const WirelessConnectionSchema = z
  .object({
    IsWifiEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Enables the Wi-Fi adapter on an Snowcone device.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configures the wireless connection on an Snowcone device.',
    required: [],
  })
  .openapi('WirelessConnection')

const SnowconeDeviceConfigurationSchema = z
  .object({
    WirelessConnection: WirelessConnectionSchema.and(
      z
        .any()
        .openapi({ description: 'Configures the wireless connection for the Snowcone device.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the device configuration for an Snowcone job.', required: [] })
  .openapi('SnowconeDeviceConfiguration')

type DeviceConfigurationType = {
  SnowconeDeviceConfiguration?: z.infer<typeof SnowconeDeviceConfigurationSchema> & {
    [key: string]: unknown
  }
}

const CancelClusterResultSchema = z.object({}).openapi('CancelClusterResult')

const ClusterIdSchema = z
  .string()
  .regex(/CID[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .length(39)
  .openapi('ClusterId')

const CancelClusterRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 39-character ID for the cluster that you want to cancel, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
  })
  .openapi({ required: ['ClusterId'], title: 'CancelClusterRequest' })
  .openapi('CancelClusterRequest')

const KMSRequestFailedExceptionSchema = z.any().openapi('KMSRequestFailedException')

const InvalidJobStateExceptionSchema = z.any().openapi('InvalidJobStateException')

const InvalidResourceExceptionSchema = z.any().openapi('InvalidResourceException')

const CancelJobResultSchema = z.object({}).openapi('CancelJobResult')

const JobIdSchema = z
  .string()
  .regex(/(M|J)ID[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .length(39)
  .openapi('JobId')

const CancelJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 39-character job ID for the job that you want to cancel, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'CancelJobRequest' })
  .openapi('CancelJobRequest')

const CreateAddressResultSchema = z
  .object({
    AddressId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The automatically generated ID for a specific address. You'll use this ID when you create a job to specify which address you want the Snow device for that job shipped to.",
        }),
    ).exactOptional(),
  })
  .openapi({ example: { AddressId: 'ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b' }, required: [] })
  .openapi('CreateAddressResult')

const AddressIdSchema = z
  .string()
  .regex(/ADID[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .length(40)
  .openapi('AddressId')

const AddressSchema = z
  .object({
    AddressId: AddressIdSchema.and(
      z.any().openapi({ description: 'The unique ID for an address.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a person to receive a Snow device at an address.' }),
    ).exactOptional(),
    Company: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the company to receive a Snow device at an address.',
        }),
    ).exactOptional(),
    Street1: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first line in a street address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    Street2: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The second line in a street address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    Street3: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The third line in a street address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    City: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The city in an address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    StateOrProvince: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state or province in an address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    PrefectureOrDistrict: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer used and the value is ignored.' }),
    ).exactOptional(),
    Landmark: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer used and the value is ignored.' }),
    ).exactOptional(),
    Country: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The country in an address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    PostalCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The postal code in an address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    PhoneNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number associated with an address that a Snow device is to be delivered to.',
        }),
    ).exactOptional(),
    IsRestricted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the address you are creating is a primary address, then set this option to true. This field is not supported in most regions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.',
    required: [],
  })
  .openapi('Address')

const CreateAddressRequestSchema = z
  .object({
    Address: AddressSchema.and(
      z.any().openapi({ description: 'The address that you want the Snow device shipped to.' }),
    ),
  })
  .openapi({ required: ['Address'], title: 'CreateAddressRequest' })
  .openapi('CreateAddressRequest')

const InvalidAddressExceptionSchema = z.any().openapi('InvalidAddressException')

const UnsupportedAddressExceptionSchema = z.any().openapi('UnsupportedAddressException')

const JobStateSchema = z
  .enum([
    'New',
    'PreparingAppliance',
    'PreparingShipment',
    'InTransitToCustomer',
    'WithCustomer',
    'InTransitToAWS',
    'WithAWSSortingFacility',
    'WithAWS',
    'InProgress',
    'Complete',
    'Cancelled',
    'Listing',
    'Pending',
  ])
  .openapi('JobState')

const JobTypeSchema = z.enum(['IMPORT', 'EXPORT', 'LOCAL_USE']).openapi('JobType')

const SnowballTypeSchema = z
  .enum([
    'STANDARD',
    'EDGE',
    'EDGE_C',
    'EDGE_CG',
    'EDGE_S',
    'SNC1_HDD',
    'SNC1_SSD',
    'V3_5C',
    'V3_5S',
  ])
  .openapi('SnowballType')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const JobListEntrySchema = z
  .object({
    JobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The automatically generated ID for a job, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ).exactOptional(),
    JobState: JobStateSchema.and(
      z.any().openapi({ description: 'The current state of this job.' }),
    ).exactOptional(),
    IsMaster: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that indicates that this job is a main job. A main job represents a successful request to create an export job. Main jobs aren't associated with any Snowballs. Instead, each main job will have at least one job part, and each job part is associated with a Snowball. It might take some time before the job parts associated with a particular main job are listed, because they are created after the main job is created.",
        }),
    ).exactOptional(),
    JobType: JobTypeSchema.and(
      z.any().openapi({ description: 'The type of job.' }),
    ).exactOptional(),
    SnowballType: SnowballTypeSchema.and(
      z.any().openapi({ description: 'The type of device used with this job.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date for this job.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional description of this specific job, for example <code>Important Photos 2016-08-11</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.",
    required: [],
  })
  .openapi('JobListEntry')

const JobListEntryListSchema = z.array(JobListEntrySchema).openapi('JobListEntryList')

const CreateClusterResultSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The automatically generated ID for a cluster.' }),
    ).exactOptional(),
    JobListEntries: JobListEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of jobs created for this cluster. For syntax, see <a href="https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListJobs.html#API_ListJobs_ResponseSyntax">ListJobsResult$JobListEntries</a> in this guide.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ClusterId: 'CID123e4567-e89b-12d3-a456-426655440000' }, required: [] })
  .openapi('CreateClusterResult')

const ResourceARNSchema = z
  .string()
  .regex(/arn:aws.*:*/)
  .max(255)
  .openapi('ResourceARN')

const KeyRangeSchema = z
  .object({
    BeginMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key that starts an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.',
        }),
    ).exactOptional(),
    EndMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key that ends an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.',
    required: [],
  })
  .openapi('KeyRange')

const DeviceServiceNameSchema = z
  .enum(['NFS_ON_DEVICE_SERVICE', 'S3_ON_DEVICE_SERVICE'])
  .openapi('DeviceServiceName')

const TransferOptionSchema = z.enum(['IMPORT', 'EXPORT', 'LOCAL_USE']).openapi('TransferOption')

const TargetOnDeviceServiceSchema = z
  .object({
    ServiceName: DeviceServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the service on the Snow Family device that your transferred data will be exported from or imported into.',
        }),
    ).exactOptional(),
    TransferOption: TransferOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the data is being imported or exported. You can import or export the data, or use it locally on the device.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System).',
    required: [],
  })
  .openapi('TargetOnDeviceService')

const TargetOnDeviceServiceListSchema = z
  .array(TargetOnDeviceServiceSchema)
  .openapi('TargetOnDeviceServiceList')

const S3ResourceSchema = z
  .object({
    BucketArn: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of an Amazon S3 bucket.' }),
    ).exactOptional(),
    KeyRange: KeyRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'For export jobs, you can provide an optional <code>KeyRange</code> within a specific Amazon S3 bucket. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.',
        }),
    ).exactOptional(),
    TargetOnDeviceServices: TargetOnDeviceServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.',
    required: [],
  })
  .openapi('S3Resource')

const S3ResourceListSchema = z.array(S3ResourceSchema).openapi('S3ResourceList')

const EventTriggerDefinitionSchema = z
  .object({
    EventResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) for any local Amazon S3 resource that is an Lambda function's event trigger associated with this job.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The container for the <a>EventTriggerDefinition$EventResourceARN</a>.',
    required: [],
  })
  .openapi('EventTriggerDefinition')

const EventTriggerDefinitionListSchema = z
  .array(EventTriggerDefinitionSchema)
  .openapi('EventTriggerDefinitionList')

const LambdaResourceSchema = z
  .object({
    LambdaArn: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that represents an Lambda function to be triggered by PUT object actions on the associated local Amazon S3 resource.',
        }),
    ).exactOptional(),
    EventTriggers: EventTriggerDefinitionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of ARNs for <a>S3Resource</a> objects to trigger the <a>LambdaResource</a> objects associated with this job.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Identifies ', required: [] })
  .openapi('LambdaResource')

const LambdaResourceListSchema = z.array(LambdaResourceSchema).openapi('LambdaResourceList')

const AmiIdSchema = z
  .string()
  .regex(/(ami-[0-9a-f]{8})|(ami-[0-9a-f]{17})/)
  .min(12)
  .max(21)
  .openapi('AmiId')

const Ec2AmiResourceSchema = z
  .object({
    AmiId: AmiIdSchema.and(z.any().openapi({ description: 'The ID of the AMI in Amazon EC2.' })),
    SnowballAmiId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the AMI on the Snow device.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AmiId'],
    description:
      'A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the Amazon Web Services Cloud and on the device.',
  })
  .openapi('Ec2AmiResource')

const Ec2AmiResourceListSchema = z.array(Ec2AmiResourceSchema).openapi('Ec2AmiResourceList')

const JobResourceSchema = z
  .object({
    S3Resources: S3ResourceListSchema.and(
      z.any().openapi({ description: 'An array of <code>S3Resource</code> objects.' }),
    ).exactOptional(),
    LambdaResources: LambdaResourceListSchema.and(
      z.any().openapi({ description: 'The Python-language Lambda functions for this job.' }),
    ).exactOptional(),
    Ec2AmiResources: Ec2AmiResourceListSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Machine Images (AMIs) associated with this job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains an array of Amazon Web Services resource objects. Each object represents an Amazon S3 bucket, an Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.',
    required: [],
  })
  .openapi('JobResource')

const OnDeviceServiceConfigurationSchema: z.ZodType<OnDeviceServiceConfigurationType> = z
  .lazy(() =>
    z
      .object({
        NFSOnDeviceService: NFSOnDeviceServiceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Represents the NFS (Network File System) service on a Snow Family device.',
            }),
        ).exactOptional(),
        TGWOnDeviceService: TGWOnDeviceServiceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Represents the Storage Gateway service Tape Gateway type on a Snow Family device.',
            }),
        ).exactOptional(),
        EKSOnDeviceService: EKSOnDeviceServiceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The configuration of EKS Anywhere on the Snow Family device.',
            }),
        ).exactOptional(),
        S3OnDeviceService: S3OnDeviceServiceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'Configuration for Amazon S3 compatible storage on Snow family devices.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'An object that represents the metadata and configuration settings for services on an Amazon Web Services Snow Family device.',
        required: [],
      }),
  )
  .openapi('OnDeviceServiceConfiguration')

const KmsKeyARNSchema = z
  .string()
  .regex(/arn:aws.*:kms:.*:[0-9]{12}:key\/.*/)
  .max(255)
  .openapi('KmsKeyARN')

const RoleARNSchema = z
  .string()
  .regex(/arn:aws.*:iam::[0-9]{12}:role\/.*/)
  .max(255)
  .openapi('RoleARN')

const ShippingOptionSchema = z
  .enum(['SECOND_DAY', 'NEXT_DAY', 'EXPRESS', 'STANDARD'])
  .openapi('ShippingOption')

const SnsTopicARNSchema = z
  .string()
  .regex(/arn:aws.*:sns:.*:[0-9]{12}:.*/)
  .max(255)
  .openapi('SnsTopicARN')

const JobStateListSchema = z.array(JobStateSchema).openapi('JobStateList')

const NotificationSchema = z
  .object({
    SnsTopicARN: SnsTopicARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new SNS <code>TopicArn</code> that you want to associate with this job. You can create Amazon Resource Names (ARNs) for topics by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html">CreateTopic</a> Amazon SNS API action.</p> <p>You can subscribe email addresses to an Amazon SNS topic through the Amazon Web Services Management Console, or by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html">Subscribe</a> Amazon Simple Notification Service (Amazon SNS) API action.</p>',
        }),
    ).exactOptional(),
    JobStatesToNotify: JobStateListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of job states that will trigger a notification for this job.',
        }),
    ).exactOptional(),
    NotifyAll: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Any change in job state will trigger a notification for this job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>',
    required: [],
  })
  .openapi('Notification')

const TaxDocumentsSchema: z.ZodType<TaxDocumentsType> = z
  .lazy(() =>
    z
      .object({ IND: INDTaxDocumentsSchema.exactOptional() })
      .openapi({
        description: 'The tax documents required in your Amazon Web Services Region.',
        required: [],
      }),
  )
  .openapi('TaxDocuments')

const RemoteManagementSchema = z
  .enum(['INSTALLED_ONLY', 'INSTALLED_AUTOSTART'])
  .openapi('RemoteManagement')

const InitialClusterSizeSchema = z.int().min(0).max(16).openapi('InitialClusterSize')

const LongTermPricingIdSchema = z
  .string()
  .regex(/LTPID[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .length(41)
  .openapi('LongTermPricingId')

const LongTermPricingIdListSchema = z
  .array(LongTermPricingIdSchema)
  .openapi('LongTermPricingIdList')

const SnowballCapacitySchema = z
  .enum(['T50', 'T80', 'T100', 'T42', 'T98', 'T8', 'T14', 'T32', 'NoPreference', 'T240'])
  .openapi('SnowballCapacity')

const CreateClusterRequestSchema = z
  .object({
    JobType: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of job for this cluster. Currently, the only job type supported for clusters is <code>LOCAL_USE</code>.</p> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ),
    Resources: JobResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resources associated with the cluster job. These resources include Amazon S3 buckets and optional Lambda functions written in the Python language. ',
        }),
    ).exactOptional(),
    OnDeviceServiceConfiguration: OnDeviceServiceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS (Network File System).',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description of this specific cluster, for example <code>Environmental Data Cluster-01</code>.',
        }),
    ).exactOptional(),
    AddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID for the address that you want the cluster shipped to.' }),
    ),
    KmsKeyARN: KmsKeyARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>KmsKeyARN</code> value that you want to associate with this cluster. <code>KmsKeyARN</code> values are created by using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in Key Management Service (KMS). ',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RoleARN</code> that you want to associate with this cluster. <code>RoleArn</code> values are created by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management (IAM).',
        }),
    ).exactOptional(),
    SnowballType: SnowballTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of Snow Family devices to use for this cluster. </p> <note> <p>For cluster jobs, Amazon Web Services Snow Family currently supports only the <code>EDGE</code> device type.</p> </note> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ),
    ShippingOption: ShippingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each Snowball Edge device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows: </p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, Snow devices are delivered in one to seven days.</p> </li> <li> <p>In the United States of America (US), you have access to one-day shipping and two-day shipping.</p> </li> </ul> <ul> <li> <p>In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, Snow devices are delivered in one to seven days.</p> </li> <li> <p>In the US, you have access to one-day shipping and two-day shipping.</p> </li> </ul>",
        }),
    ),
    Notification: NotificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.',
        }),
    ).exactOptional(),
    ForwardingAddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forwarding address ID for a cluster. This field is not supported in most regions.',
        }),
    ).exactOptional(),
    TaxDocuments: TaxDocumentsSchema.and(
      z
        .any()
        .openapi({ description: 'The tax documents required in your Amazon Web Services Region.' }),
    ).exactOptional(),
    RemoteManagement: RemoteManagementSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows you to securely operate and manage Snow devices in a cluster remotely from outside of your internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Client to manage the device.',
        }),
    ).exactOptional(),
    InitialClusterSize: InitialClusterSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, each job will be automatically created and associated with the new cluster. If not provided, will be treated as 0.',
        }),
    ).exactOptional(),
    ForceCreateJobs: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Force to create cluster when user attempts to overprovision or underprovision a cluster. A cluster is overprovisioned or underprovisioned if the initial size of the cluster is more (overprovisioned) or less (underprovisioned) than what needed to meet capacity requirement specified with <code>OnDeviceServiceConfiguration</code>.',
        }),
    ).exactOptional(),
    LongTermPricingIds: LongTermPricingIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists long-term pricing id that will be used to associate with jobs automatically created for the new cluster.',
        }),
    ).exactOptional(),
    SnowballCapacityPreference: SnowballCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If your job is being created in one of the US regions, you have the option of specifying what size Snow device you\'d like for this job. In all other regions, Snowballs come with 80 TB in storage capacity.</p> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['JobType', 'AddressId', 'SnowballType', 'ShippingOption'],
    title: 'CreateClusterRequest',
  })
  .openapi('CreateClusterRequest')

const InvalidInputCombinationExceptionSchema = z.any().openapi('InvalidInputCombinationException')

const Ec2RequestFailedExceptionSchema = z.any().openapi('Ec2RequestFailedException')

const CreateJobResultSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The automatically generated ID for a job, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { JobId: 'JID123e4567-e89b-12d3-a456-426655440000' }, required: [] })
  .openapi('CreateJobResult')

const DeviceConfigurationSchema: z.ZodType<DeviceConfigurationType> = z
  .lazy(() =>
    z
      .object({
        SnowconeDeviceConfiguration: SnowconeDeviceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Returns information about the device configuration for an Snowcone job.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'The container for <code>SnowconeDeviceConfiguration</code>. ',
        required: [],
      }),
  )
  .openapi('DeviceConfiguration')

const CreateJobRequestSchema = z
  .object({
    JobType: JobTypeSchema.and(
      z.any().openapi({ description: "Defines the type of job that you're creating. " }),
    ).exactOptional(),
    Resources: JobResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the Amazon S3 buckets associated with this job.</p> <p>With <code>IMPORT</code> jobs, you specify the bucket or buckets that your transferred data will be imported into.</p> <p>With <code>EXPORT</code> jobs, you specify the bucket or buckets that your transferred data will be exported from. Optionally, you can also specify a <code>KeyRange</code> value. If you choose to export a range, you define the length of the range by providing either an inclusive <code>BeginMarker</code> value, an inclusive <code>EndMarker</code> value, or both. Ranges are UTF-8 binary sorted.</p>',
        }),
    ).exactOptional(),
    OnDeviceServiceConfiguration: OnDeviceServiceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System) and the Amazon Web Services Storage Gateway service Tape Gateway type.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines an optional description of this specific job, for example <code>Important Photos 2016-08-11</code>.',
        }),
    ).exactOptional(),
    AddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID for the address that you want the Snow device shipped to.',
        }),
    ).exactOptional(),
    KmsKeyARN: KmsKeyARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>KmsKeyARN</code> that you want to associate with this job. <code>KmsKeyARN</code>s are created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> Key Management Service (KMS) API action.',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RoleARN</code> that you want to associate with this job. <code>RoleArn</code>s are created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> Identity and Access Management (IAM) API action.',
        }),
    ).exactOptional(),
    SnowballCapacityPreference: SnowballCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If your job is being created in one of the US regions, you have the option of specifying what size Snow device you\'d like for this job. In all other regions, Snowballs come with 80 TB in storage capacity.</p> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ).exactOptional(),
    ShippingOption: ShippingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The shipping speed for this job. This speed doesn't dictate how soon you'll get the Snow device, rather it represents how quickly the Snow device moves to its destination while in transit. Regional shipping speeds are as follows:</p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, Snow devices are delivered in one to seven days.</p> </li> <li> <p>In the US, you have access to one-day shipping and two-day shipping.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Notification: NotificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for this job.',
        }),
    ).exactOptional(),
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of a cluster. If you're creating a job for a node in a cluster, you need to provide only this <code>clusterId</code> value. The other job attributes are inherited from the cluster.",
        }),
    ).exactOptional(),
    SnowballType: SnowballTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of Snow Family devices to use for this job. </p> <note> <p>For cluster jobs, Amazon Web Services Snow Family currently supports only the <code>EDGE</code> device type.</p> </note> <p>The type of Amazon Web Services Snow device to use for this job. Currently, the only supported device type for cluster jobs is <code>EDGE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html">Snowball Edge Device Options</a> in the Snowball Edge Developer Guide.</p> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ).exactOptional(),
    ForwardingAddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forwarding address ID for a job. This field is not supported in most Regions.',
        }),
    ).exactOptional(),
    TaxDocuments: TaxDocumentsSchema.and(
      z
        .any()
        .openapi({ description: 'The tax documents required in your Amazon Web Services Region.' }),
    ).exactOptional(),
    DeviceConfiguration: DeviceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the device configuration for an Snowcone job.</p> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ).exactOptional(),
    RemoteManagement: RemoteManagementSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows you to securely operate and manage Snowcone devices remotely from outside of your internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Client to manage the device.',
        }),
    ).exactOptional(),
    LongTermPricingId: LongTermPricingIdSchema.and(
      z.any().openapi({ description: 'The ID of the long-term pricing type for the device.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateJobRequest', required: [] })
  .openapi('CreateJobRequest')

const ClusterLimitExceededExceptionSchema = z.any().openapi('ClusterLimitExceededException')

const CreateLongTermPricingResultSchema = z
  .object({
    LongTermPricingId: LongTermPricingIdSchema.and(
      z.any().openapi({ description: 'The ID of the long-term pricing type for the device.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLongTermPricingResult')

const LongTermPricingTypeSchema = z
  .enum(['OneYear', 'ThreeYear', 'OneMonth'])
  .openapi('LongTermPricingType')

const JavaBooleanSchema = z.boolean().openapi('JavaBoolean')

const CreateLongTermPricingRequestSchema = z
  .object({
    LongTermPricingType: LongTermPricingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of long-term pricing option you want for the device, either 1-year or 3-year long-term pricing.',
        }),
    ),
    IsLongTermPricingAutoRenew: JavaBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the current long-term pricing type for the device should be renewed.',
        }),
    ).exactOptional(),
    SnowballType: SnowballTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of Snow Family devices to use for the long-term pricing job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LongTermPricingType'], title: 'CreateLongTermPricingRequest' })
  .openapi('CreateLongTermPricingRequest')

const ShippingLabelStatusSchema = z
  .enum(['InProgress', 'TimedOut', 'Succeeded', 'Failed'])
  .openapi('ShippingLabelStatus')

const CreateReturnShippingLabelResultSchema = z
  .object({
    Status: ShippingLabelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status information of the task on a Snow device that is being returned to Amazon Web Services.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateReturnShippingLabelResult')

const CreateReturnShippingLabelRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for a job that you want to create the return shipping label for; for example, <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
    ShippingOption: ShippingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The shipping speed for a particular job. This speed doesn't dictate how soon the device is returned to Amazon Web Services. This speed represents how quickly it moves to its destination while in transit. Regional shipping speeds are as follows:",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'CreateReturnShippingLabelRequest' })
  .openapi('CreateReturnShippingLabelRequest')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ReturnShippingLabelAlreadyExistsExceptionSchema = z
  .any()
  .openapi('ReturnShippingLabelAlreadyExistsException')

const DescribeAddressResultSchema = z
  .object({
    Address: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address that you want the Snow device(s) associated with a specific job to be shipped to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Address: {
        AddressId: 'ADID5643ec50-3eec-4eb3-9be6-9374c10eb51b',
        City: 'Seattle',
        Company: 'My Company',
        Country: 'US',
        Name: 'My Name',
        PhoneNumber: '425-555-5555',
        PostalCode: '98101',
        StateOrProvince: 'WA',
        Street1: '123 Main Street',
      },
    },
    required: [],
  })
  .openapi('DescribeAddressResult')

const DescribeAddressRequestSchema = z
  .object({
    AddressId: AddressIdSchema.and(
      z.any().openapi({ description: 'The automatically generated ID for a specific address.' }),
    ),
  })
  .openapi({ required: ['AddressId'], title: 'DescribeAddressRequest' })
  .openapi('DescribeAddressRequest')

const AddressListSchema = z.array(AddressSchema).openapi('AddressList')

const DescribeAddressesResultSchema = z
  .object({
    Addresses: AddressListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Snow device shipping addresses that were created for this account.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. If you use the automatically generated <code>NextToken</code> value in your next <code>DescribeAddresses</code> call, your list of returned addresses will start from this point in the array.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Addresses: [
        {
          AddressId: 'ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b',
          City: 'Seattle',
          Company: 'My Company',
          Country: 'US',
          Name: 'My Name',
          PhoneNumber: '425-555-5555',
          PostalCode: '98101',
          StateOrProvince: 'WA',
          Street1: '123 Main Street',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeAddressesResult')

const ListLimitSchema = z.int().min(0).max(100).openapi('ListLimit')

const DescribeAddressesRequestSchema = z
  .object({
    MaxResults: ListLimitSchema.and(
      z.any().openapi({ description: 'The number of <code>ADDRESS</code> objects to return.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. To identify what object comes "next" in the list of <code>ADDRESS</code> objects, you have the option of specifying a value for <code>NextToken</code> as the starting point for your list of returned addresses.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAddressesRequest', required: [] })
  .openapi('DescribeAddressesRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ClusterStateSchema = z
  .enum(['AwaitingQuorum', 'Pending', 'InUse', 'Complete', 'Cancelled'])
  .openapi('ClusterState')

const ClusterMetadataSchema = z
  .object({
    ClusterId: StringSchema.and(
      z.any().openapi({ description: 'The automatically generated ID for a cluster.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The optional description of the cluster.' }),
    ).exactOptional(),
    KmsKeyARN: KmsKeyARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>KmsKeyARN</code> Amazon Resource Name (ARN) associated with this cluster. This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in Key Management Service (KMS.',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role ARN associated with this cluster. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management (IAM).',
        }),
    ).exactOptional(),
    ClusterState: ClusterStateSchema.and(
      z.any().openapi({ description: 'The current status of the cluster.' }),
    ).exactOptional(),
    JobType: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of job for this cluster. Currently, the only job type supported for clusters is <code>LOCAL_USE</code>.',
        }),
    ).exactOptional(),
    SnowballType: SnowballTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of Snowcone device to use for this cluster. </p> <note> <p>For cluster jobs, Amazon Web Services Snow Family currently supports only the <code>EDGE</code> device type.</p> </note>',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date for this cluster.' }),
    ).exactOptional(),
    Resources: JobResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.',
        }),
    ).exactOptional(),
    AddressId: AddressIdSchema.and(
      z.any().openapi({ description: 'The automatically generated ID for a specific address.' }),
    ).exactOptional(),
    ShippingOption: ShippingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows:</p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, Snow devices are delivered in one to seven days.</p> </li> <li> <p>In the US, you have access to one-day shipping and two-day shipping.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Notification: NotificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.',
        }),
    ).exactOptional(),
    ForwardingAddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the address that you want a cluster shipped to, after it will be shipped to its primary address. This field is not supported in most regions.',
        }),
    ).exactOptional(),
    TaxDocuments: TaxDocumentsSchema.and(
      z
        .any()
        .openapi({ description: 'The tax documents required in your Amazon Web Services Region.' }),
    ).exactOptional(),
    OnDeviceServiceConfiguration: OnDeviceServiceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents metadata and configuration settings for services on an Amazon Web Services Snow Family device.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains metadata about a specific cluster.', required: [] })
  .openapi('ClusterMetadata')

const DescribeClusterResultSchema = z
  .object({
    ClusterMetadata: ClusterMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a specific cluster, including shipping information, cluster status, and other important metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ClusterMetadata: {
        AddressId: 'ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b',
        ClusterId: 'CID123e4567-e89b-12d3-a456-426655440000',
        ClusterState: 'Pending',
        CreationDate: '1480475517.0',
        Description: 'MyCluster',
        JobType: 'LOCAL_USE',
        KmsKeyARN: 'arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456',
        Notification: { JobStatesToNotify: [], NotifyAll: false },
        Resources: { S3Resources: [{ BucketArn: 'arn:aws:s3:::MyBucket', KeyRange: {} }] },
        RoleARN: 'arn:aws:iam::123456789012:role/snowball-import-S3-role',
        ShippingOption: 'SECOND_DAY',
      },
    },
    required: [],
  })
  .openapi('DescribeClusterResult')

const DescribeClusterRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The automatically generated ID for a cluster.' }),
    ),
  })
  .openapi({ required: ['ClusterId'], title: 'DescribeClusterRequest' })
  .openapi('DescribeClusterRequest')

const ShipmentSchema = z
  .object({
    Status: StringSchema.and(
      z.any().openapi({ description: 'Status information for a shipment.' }),
    ).exactOptional(),
    TrackingNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tracking number for this job. Using this tracking number with your region's carrier's website, you can track a Snow device as the carrier transports it.</p> <p>For India, the carrier is Amazon Logistics. For all other regions, UPS is the carrier.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.',
    required: [],
  })
  .openapi('Shipment')

const ShippingDetailsSchema = z
  .object({
    ShippingOption: ShippingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The shipping speed for a particular job. This speed doesn't dictate how soon you'll get the Snow device from the job's creation date. This speed represents how quickly it moves to its destination while in transit. Regional shipping speeds are as follows:</p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, Snow devices are delivered in one to seven days.</p> </li> <li> <p>In the United States of America (US), you have access to one-day shipping and two-day shipping.</p> </li> </ul>",
        }),
    ).exactOptional(),
    InboundShipment: ShipmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being returned to Amazon Web Services for a particular job.',
        }),
    ).exactOptional(),
    OutboundShipment: ShipmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being delivered to the address that you specified for a particular job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.",
    required: [],
  })
  .openapi('ShippingDetails')

const LongSchema = z.int().openapi('Long')

const DataTransferSchema = z
  .object({
    BytesTransferred: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of bytes transferred between a Snow device and Amazon S3.',
        }),
    ).exactOptional(),
    ObjectsTransferred: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of objects transferred between a Snow device and Amazon S3.',
        }),
    ).exactOptional(),
    TotalBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total bytes of data for a transfer between a Snow device and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.',
        }),
    ).exactOptional(),
    TotalObjects: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of objects for a transfer between a Snow device and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Defines the real-time status of a Snow device's data transfer while the device is at Amazon Web Services. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.",
    required: [],
  })
  .openapi('DataTransfer')

const JobLogsSchema = z
  .object({
    JobCompletionReportURI: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A link to an Amazon S3 presigned URL where the job completion report is located.',
        }),
    ).exactOptional(),
    JobSuccessLogURI: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A link to an Amazon S3 presigned URL where the job success log is located.',
        }),
    ).exactOptional(),
    JobFailureLogURI: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A link to an Amazon S3 presigned URL where the job failure log is located.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Contains job logs. Whenever a Snow device is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p>",
    required: [],
  })
  .openapi('JobLogs')

const JobMetadataSchema = z
  .object({
    JobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The automatically generated ID for a job, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ).exactOptional(),
    JobState: JobStateSchema.and(
      z.any().openapi({ description: 'The current status of the jobs.' }),
    ).exactOptional(),
    JobType: JobTypeSchema.and(
      z.any().openapi({ description: 'The type of job.' }),
    ).exactOptional(),
    SnowballType: SnowballTypeSchema.and(
      z.any().openapi({ description: 'The type of device used with this job.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date for this job.' }),
    ).exactOptional(),
    Resources: JobResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the job, provided at job creation.' }),
    ).exactOptional(),
    KmsKeyARN: KmsKeyARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the Key Management Service (KMS) key associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in KMS.',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role ARN associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management.',
        }),
    ).exactOptional(),
    AddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID for the address that you want the Snow device shipped to.',
        }),
    ).exactOptional(),
    ShippingDetails: ShippingDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.",
        }),
    ).exactOptional(),
    SnowballCapacityPreference: SnowballCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Snow device capacity preference for this job, specified at job creation. In US regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB capacity Snowballs.</p> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ).exactOptional(),
    Notification: NotificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.',
        }),
    ).exactOptional(),
    DataTransferProgress: DataTransferSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that defines the real-time status of a Snow device's data transfer while the device is at Amazon Web Services. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.",
        }),
    ).exactOptional(),
    JobLogInfo: JobLogsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.',
        }),
    ).exactOptional(),
    ClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 39-character ID for the cluster, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ).exactOptional(),
    ForwardingAddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the address that you want a job shipped to, after it will be shipped to its primary address. This field is not supported in most regions.',
        }),
    ).exactOptional(),
    TaxDocuments: TaxDocumentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata associated with the tax documents required in your Amazon Web Services Region.',
        }),
    ).exactOptional(),
    DeviceConfiguration: DeviceConfigurationSchema.exactOptional(),
    RemoteManagement: RemoteManagementSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows you to securely operate and manage Snowcone devices remotely from outside of your internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Client to manage the device.',
        }),
    ).exactOptional(),
    LongTermPricingId: LongTermPricingIdSchema.and(
      z.any().openapi({ description: 'The ID of the long-term pricing type for the device.' }),
    ).exactOptional(),
    OnDeviceServiceConfiguration: OnDeviceServiceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents metadata and configuration settings for services on an Amazon Web Services Snow Family device.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.',
    required: [],
  })
  .openapi('JobMetadata')

const JobMetadataListSchema = z.array(JobMetadataSchema).openapi('JobMetadataList')

const DescribeJobResultSchema = z
  .object({
    JobMetadata: JobMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a specific job, including shipping information, job status, and other important metadata.',
        }),
    ).exactOptional(),
    SubJobMetadata: JobMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a specific job part (in the case of an export job), including shipping information, job status, and other important metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      JobMetadata: {
        AddressId: 'ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b',
        CreationDate: '1475626164',
        Description: 'My Job',
        JobId: 'JID123e4567-e89b-12d3-a456-426655440000',
        JobState: 'New',
        JobType: 'IMPORT',
        KmsKeyARN: 'arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456',
        Notification: { JobStatesToNotify: [], NotifyAll: false },
        Resources: { S3Resources: [{ BucketArn: 'arn:aws:s3:::MyBucket', KeyRange: {} }] },
        RoleARN: 'arn:aws:iam::123456789012:role/snowball-import-S3-role',
        ShippingDetails: { ShippingOption: 'SECOND_DAY' },
        SnowballCapacityPreference: 'T80',
        SnowballType: 'STANDARD',
      },
    },
    required: [],
  })
  .openapi('DescribeJobResult')

const DescribeJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The automatically generated ID for a job, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeJobRequest' })
  .openapi('DescribeJobRequest')

const DescribeReturnShippingLabelResultSchema = z
  .object({
    Status: ShippingLabelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status information of the task on a Snow device that is being returned to Amazon Web Services.',
        }),
    ).exactOptional(),
    ExpirationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The expiration date of the current return shipping label.' }),
    ).exactOptional(),
    ReturnShippingLabelURI: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The pre-signed Amazon S3 URI used to download the return shipping label.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReturnShippingLabelResult')

const DescribeReturnShippingLabelRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The automatically generated ID for a job, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeReturnShippingLabelRequest' })
  .openapi('DescribeReturnShippingLabelRequest')

const GetJobManifestResultSchema = z
  .object({
    ManifestURI: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ManifestURI:
        'https://awsie-frosty-manifests-prod.s3.amazonaws.com/JID123e4567-e89b-12d3-a456-426655440000_manifest.bin?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20161224T005115Z&X-Amz-SignedHeaders=...',
    },
    required: [],
  })
  .openapi('GetJobManifestResult')

const GetJobManifestRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for a job that you want to get the manifest file for, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'GetJobManifestRequest' })
  .openapi('GetJobManifestRequest')

const GetJobUnlockCodeResultSchema = z
  .object({
    UnlockCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>UnlockCode</code> value for the specified job. The <code>UnlockCode</code> value can be accessed for up to 360 days after the job has been created.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { UnlockCode: '12345-abcde-56789-fghij-01234' }, required: [] })
  .openapi('GetJobUnlockCodeResult')

const GetJobUnlockCodeRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for the job that you want to get the <code>UnlockCode</code> value for, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'GetJobUnlockCodeRequest' })
  .openapi('GetJobUnlockCodeRequest')

const IntegerSchema = z.int().openapi('Integer')

const GetSnowballUsageResultSchema = z
  .object({
    SnowballLimit: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service limit for number of Snow devices this account can have at once. The default service limit is 1 (one).',
        }),
    ).exactOptional(),
    SnowballsInUse: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of Snow devices that this account is currently using.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { SnowballLimit: 1, SnowballsInUse: 0 }, required: [] })
  .openapi('GetSnowballUsageResult')

const GetSnowballUsageRequestSchema = z
  .object({})
  .openapi({ title: 'GetSnowballUsageRequest' })
  .openapi('GetSnowballUsageRequest')

const GetSoftwareUpdatesResultSchema = z
  .object({
    UpdatesURI: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon S3 presigned URL for the update file associated with the specified <code>JobId</code> value. The software update will be available for 2 days after this request is made. To access an update after the 2 days have passed, you'll have to make another call to <code>GetSoftwareUpdates</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSoftwareUpdatesResult')

const GetSoftwareUpdatesRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for a job that you want to get the software update file for, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'GetSoftwareUpdatesRequest' })
  .openapi('GetSoftwareUpdatesRequest')

const ListClusterJobsResultSchema = z
  .object({
    JobListEntries: JobListEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. ",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. If you use the automatically generated <code>NextToken</code> value in your next <code>ListClusterJobsResult</code> call, your list of returned jobs will start from this point in the array.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      JobListEntries: [
        {
          CreationDate: '1480475524.0',
          Description: 'MyClustrer-node-001',
          IsMaster: false,
          JobId: 'JID123e4567-e89b-12d3-a456-426655440000',
          JobState: 'New',
          JobType: 'LOCAL_USE',
          SnowballType: 'EDGE',
        },
        {
          CreationDate: '1480475525.0',
          Description: 'MyClustrer-node-002',
          IsMaster: false,
          JobId: 'JID123e4567-e89b-12d3-a456-426655440001',
          JobState: 'New',
          JobType: 'LOCAL_USE',
          SnowballType: 'EDGE',
        },
        {
          CreationDate: '1480475525.0',
          Description: 'MyClustrer-node-003',
          IsMaster: false,
          JobId: 'JID123e4567-e89b-12d3-a456-426655440002',
          JobState: 'New',
          JobType: 'LOCAL_USE',
          SnowballType: 'EDGE',
        },
        {
          CreationDate: '1480475525.0',
          Description: 'MyClustrer-node-004',
          IsMaster: false,
          JobId: 'JID123e4567-e89b-12d3-a456-426655440003',
          JobState: 'New',
          JobType: 'LOCAL_USE',
          SnowballType: 'EDGE',
        },
        {
          CreationDate: '1480475525.0',
          Description: 'MyClustrer-node-005',
          IsMaster: false,
          JobId: 'JID123e4567-e89b-12d3-a456-426655440004',
          JobState: 'New',
          JobType: 'LOCAL_USE',
          SnowballType: 'EDGE',
        },
      ],
    },
    required: [],
  })
  .openapi('ListClusterJobsResult')

const ListClusterJobsRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 39-character ID for the cluster that you want to list, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
    MaxResults: ListLimitSchema.and(
      z
        .any()
        .openapi({ description: 'The number of <code>JobListEntry</code> objects to return.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. To identify what object comes "next" in the list of <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code> as the starting point for your returned list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterId'], title: 'ListClusterJobsRequest' })
  .openapi('ListClusterJobsRequest')

const ClusterListEntrySchema = z
  .object({
    ClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 39-character ID for the cluster that you want to list, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ).exactOptional(),
    ClusterState: ClusterStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of this cluster. For information about the state of a specific node, see <a>JobListEntry$JobState</a>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date for this cluster.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines an optional description of the cluster, for example <code>Environmental Data Cluster-01</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Contains a cluster's state, a cluster's ID, and other important information.",
    required: [],
  })
  .openapi('ClusterListEntry')

const ClusterListEntryListSchema = z.array(ClusterListEntrySchema).openapi('ClusterListEntryList')

const ListClustersResultSchema = z
  .object({
    ClusterListEntries: ClusterListEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. If you use the automatically generated <code>NextToken</code> value in your next <code>ClusterListEntry</code> call, your list of returned clusters will start from this point in the array.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ClusterListEntries: [
        {
          ClusterId: 'CID123e4567-e89b-12d3-a456-426655440000',
          ClusterState: 'Pending',
          CreationDate: '1480475517.0',
          Description: 'MyCluster',
        },
      ],
    },
    required: [],
  })
  .openapi('ListClustersResult')

const ListClustersRequestSchema = z
  .object({
    MaxResults: ListLimitSchema.and(
      z
        .any()
        .openapi({ description: 'The number of <code>ClusterListEntry</code> objects to return.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. To identify what object comes "next" in the list of <code>ClusterListEntry</code> objects, you have the option of specifying <code>NextToken</code> as the starting point for your returned list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListClustersRequest', required: [] })
  .openapi('ListClustersRequest')

const CompatibleImageSchema = z
  .object({
    AmiId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for an individual Snow device AMI.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The optional name of a compatible image.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.",
    required: [],
  })
  .openapi('CompatibleImage')

const CompatibleImageListSchema = z.array(CompatibleImageSchema).openapi('CompatibleImageList')

const ListCompatibleImagesResultSchema = z
  .object({
    CompatibleImages: CompatibleImageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON-formatted object that describes a compatible AMI, including the ID and name for a Snow device AMI.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Because HTTP requests are stateless, this is the starting point for your next list of returned images.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCompatibleImagesResult')

const ListCompatibleImagesRequestSchema = z
  .object({
    MaxResults: ListLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results for the list of compatible images. Currently, a Snowball Edge device can store 10 AMIs.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. To identify what object comes "next" in the list of compatible images, you can specify a value for <code>NextToken</code> as the starting point for your list of returned images.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCompatibleImagesRequest', required: [] })
  .openapi('ListCompatibleImagesRequest')

const ListJobsResultSchema = z
  .object({
    JobListEntries: JobListEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. ",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. If you use this automatically generated <code>NextToken</code> value in your next <code>ListJobs</code> call, your returned <code>JobListEntry</code> objects will start from this point in the array.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      JobListEntries: [
        {
          CreationDate: '1460678186.0',
          Description: 'MyJob',
          IsMaster: false,
          JobId: 'JID123e4567-e89b-12d3-a456-426655440000',
          JobState: 'New',
          JobType: 'IMPORT',
          SnowballType: 'STANDARD',
        },
      ],
    },
    required: [],
  })
  .openapi('ListJobsResult')

const ListJobsRequestSchema = z
  .object({
    MaxResults: ListLimitSchema.and(
      z
        .any()
        .openapi({ description: 'The number of <code>JobListEntry</code> objects to return.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'HTTP requests are stateless. To identify what object comes "next" in the list of <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code> as the starting point for your returned list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListJobsRequest', required: [] })
  .openapi('ListJobsRequest')

const LongTermPricingAssociatedJobIdListSchema = z
  .array(JobIdSchema)
  .openapi('LongTermPricingAssociatedJobIdList')

const LongTermPricingListEntrySchema = z
  .object({
    LongTermPricingId: LongTermPricingIdSchema.and(
      z.any().openapi({ description: 'The ID of the long-term pricing type for the device.' }),
    ).exactOptional(),
    LongTermPricingEndDate: TimestampSchema.and(
      z.any().openapi({ description: 'The end date the long-term pricing contract.' }),
    ).exactOptional(),
    LongTermPricingStartDate: TimestampSchema.and(
      z.any().openapi({ description: 'The start date of the long-term pricing contract.' }),
    ).exactOptional(),
    LongTermPricingType: LongTermPricingTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of long-term pricing that was selected for the device.',
        }),
    ).exactOptional(),
    CurrentActiveJob: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The current active jobs on the device the long-term pricing type.',
        }),
    ).exactOptional(),
    ReplacementJob: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new device that replaces a device that is ordered with long-term pricing.',
        }),
    ).exactOptional(),
    IsLongTermPricingAutoRenew: JavaBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, specifies that the current long-term pricing type for the device should be automatically renewed before the long-term pricing contract expires.',
        }),
    ).exactOptional(),
    LongTermPricingStatus: StringSchema.and(
      z.any().openapi({ description: 'The status of the long-term pricing type.' }),
    ).exactOptional(),
    SnowballType: SnowballTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Snow Family devices associated with this long-term pricing job.',
        }),
    ).exactOptional(),
    JobIds: LongTermPricingAssociatedJobIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The IDs of the jobs that are associated with a long-term pricing type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.',
    required: [],
  })
  .openapi('LongTermPricingListEntry')

const LongTermPricingEntryListSchema = z
  .array(LongTermPricingListEntrySchema)
  .openapi('LongTermPricingEntryList')

const ListLongTermPricingResultSchema = z
  .object({
    LongTermPricingEntries: LongTermPricingEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each <code>LongTermPricingEntry</code> object contains a status, ID, and other information about the <code>LongTermPricing</code> type. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Because HTTP requests are stateless, this is the starting point for your next list of returned <code>ListLongTermPricing</code> list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLongTermPricingResult')

const ListLongTermPricingRequestSchema = z
  .object({
    MaxResults: ListLimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of <code>ListLongTermPricing</code> objects to return.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Because HTTP requests are stateless, this is the starting point for your next list of <code>ListLongTermPricing</code> to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLongTermPricingRequest', required: [] })
  .openapi('ListLongTermPricingRequest')

const ServiceVersionSchema = z
  .object({
    Version: StringSchema.and(
      z.any().openapi({ description: 'The version number of the requested service.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The version of the requested service.', required: [] })
  .openapi('ServiceVersion')

const ServiceVersionListSchema = z.array(ServiceVersionSchema).openapi('ServiceVersionList')

const ServiceNameSchema = z.enum(['KUBERNETES', 'EKS_ANYWHERE']).openapi('ServiceName')

const DependentServiceSchema = z
  .object({
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the dependent service.' }),
    ).exactOptional(),
    ServiceVersion: ServiceVersionSchema.and(
      z.any().openapi({ description: 'The version of the dependent service.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The name and version of the service dependant on the requested service.',
    required: [],
  })
  .openapi('DependentService')

const DependentServiceListSchema = z.array(DependentServiceSchema).openapi('DependentServiceList')

const ListServiceVersionsResultSchema = z
  .object({
    ServiceVersions: ServiceVersionListSchema.and(
      z.any().openapi({ description: 'A list of supported versions.' }),
    ),
    ServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service for which the system provided supported versions.',
        }),
    ),
    DependentServices: DependentServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of names and versions of dependant services of the service for which the system provided supported versions.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Because HTTP requests are stateless, this is the starting point of the next list of returned <code>ListServiceVersionsResult</code> results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceVersions', 'ServiceName'] })
  .openapi('ListServiceVersionsResult')

const ListServiceVersionsRequestSchema = z
  .object({
    ServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the service for which you're requesting supported versions.",
        }),
    ),
    DependentServices: DependentServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of names and versions of dependant services of the requested service.',
        }),
    ).exactOptional(),
    MaxResults: ListLimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of <code>ListServiceVersions</code> objects to return.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Because HTTP requests are stateless, this is the starting point for the next list of returned <code>ListServiceVersionsRequest</code> versions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceName'], title: 'ListServiceVersionsRequest' })
  .openapi('ListServiceVersionsRequest')

const UpdateClusterResultSchema = z.object({}).openapi('UpdateClusterResult')

const UpdateClusterRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster ID of the cluster that you want to update, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new role Amazon Resource Name (ARN) that you want to associate with this cluster. To create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management (IAM).',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The updated description of this cluster.' }),
    ).exactOptional(),
    Resources: JobResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.',
        }),
    ).exactOptional(),
    OnDeviceServiceConfiguration: OnDeviceServiceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS (Network File System).',
        }),
    ).exactOptional(),
    AddressId: AddressIdSchema.and(
      z.any().openapi({ description: 'The ID of the updated <a>Address</a> object.' }),
    ).exactOptional(),
    ShippingOption: ShippingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The updated shipping option value of this cluster's <a>ShippingDetails</a> object.",
        }),
    ).exactOptional(),
    Notification: NotificationSchema.and(
      z.any().openapi({ description: 'The new or updated <a>Notification</a> object.' }),
    ).exactOptional(),
    ForwardingAddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated ID for the forwarding address for a cluster. This field is not supported in most regions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterId'], title: 'UpdateClusterRequest' })
  .openapi('UpdateClusterRequest')

const UpdateJobResultSchema = z.object({}).openapi('UpdateJobResult')

const UpdateJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job ID of the job that you want to update, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new role Amazon Resource Name (ARN) that you want to associate with this job. To create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>Identity and Access Management (IAM) API action.',
        }),
    ).exactOptional(),
    Notification: NotificationSchema.and(
      z.any().openapi({ description: 'The new or updated <a>Notification</a> object.' }),
    ).exactOptional(),
    Resources: JobResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated <code>JobResource</code> object, or the updated <a>JobResource</a> object. ',
        }),
    ).exactOptional(),
    OnDeviceServiceConfiguration: OnDeviceServiceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System) and the Amazon Web Services Storage Gateway service Tape Gateway type.',
        }),
    ).exactOptional(),
    AddressId: AddressIdSchema.and(
      z.any().openapi({ description: 'The ID of the updated <a>Address</a> object.' }),
    ).exactOptional(),
    ShippingOption: ShippingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The updated shipping option value of this job's <a>ShippingDetails</a> object.",
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The updated description of this job's <a>JobMetadata</a> object.",
        }),
    ).exactOptional(),
    SnowballCapacityPreference: SnowballCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The updated <code>SnowballCapacityPreference</code> of this job\'s <a>JobMetadata</a> object. The 50 TB Snowballs are only available in the US regions.</p> <p>For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i> or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>',
        }),
    ).exactOptional(),
    ForwardingAddressId: AddressIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated ID for the forwarding address for a job. This field is not supported in most regions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'UpdateJobRequest' })
  .openapi('UpdateJobRequest')

const UpdateJobShipmentStateResultSchema = z.object({}).openapi('UpdateJobShipmentStateResult')

const ShipmentStateSchema = z.enum(['RECEIVED', 'RETURNED']).openapi('ShipmentState')

const UpdateJobShipmentStateRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job ID of the job whose shipment date you want to update, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.',
        }),
    ),
    ShipmentState: ShipmentStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of a device when it is being shipped. </p> <p>Set to <code>RECEIVED</code> when the device arrives at your location.</p> <p>Set to <code>RETURNED</code> when you have returned the device to Amazon Web Services.</p>',
        }),
    ),
  })
  .openapi({ required: ['JobId', 'ShipmentState'], title: 'UpdateJobShipmentStateRequest' })
  .openapi('UpdateJobShipmentStateRequest')

const UpdateLongTermPricingResultSchema = z.object({}).openapi('UpdateLongTermPricingResult')

const UpdateLongTermPricingRequestSchema = z
  .object({
    LongTermPricingId: LongTermPricingIdSchema.and(
      z.any().openapi({ description: 'The ID of the long-term pricing type for the device.' }),
    ),
    ReplacementJob: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that a device that is ordered with long-term pricing should be replaced with a new device.',
        }),
    ).exactOptional(),
    IsLongTermPricingAutoRenew: JavaBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, specifies that the current long-term pricing type for the device should be automatically renewed before the long-term pricing contract expires.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LongTermPricingId'], title: 'UpdateLongTermPricingRequest' })
  .openapi('UpdateLongTermPricingRequest')

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

export const postXAmzTargetAWSIESnowballJobManagementServiceCancelClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster',
  description:
    "Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.",
  operationId: 'CancelCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.CancelCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.CancelCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelClusterResultSchema } },
    },
    480: {
      description: 'KMSRequestFailedException',
      content: { 'application/json': { schema: KMSRequestFailedExceptionSchema } },
    },
    481: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
    482: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceCancelJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob',
  description:
    "Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.",
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
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.CancelJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.CancelJob'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelJobRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelJobResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
    482: {
      description: 'KMSRequestFailedException',
      content: { 'application/json': { schema: KMSRequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceCreateAddressRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress',
  description:
    'Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.',
  operationId: 'CreateAddress',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.CreateAddress')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.CreateAddress'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAddressRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAddressResultSchema } },
    },
    480: {
      description: 'InvalidAddressException',
      content: { 'application/json': { schema: InvalidAddressExceptionSchema } },
    },
    481: {
      description: 'UnsupportedAddressException',
      content: { 'application/json': { schema: UnsupportedAddressExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceCreateClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster',
  description:
    'Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.',
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
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.CreateCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.CreateCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateClusterResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'KMSRequestFailedException',
      content: { 'application/json': { schema: KMSRequestFailedExceptionSchema } },
    },
    482: {
      description: 'InvalidInputCombinationException',
      content: { 'application/json': { schema: InvalidInputCombinationExceptionSchema } },
    },
    483: {
      description: 'Ec2RequestFailedException',
      content: { 'application/json': { schema: Ec2RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceCreateJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob',
  description:
    '<p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you\'re creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5C</b> </p> <ul> <li> <p>Capacity: T32</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> <p/> </li> </ul>',
  operationId: 'CreateJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.CreateJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.CreateJob'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateJobRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJobResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'KMSRequestFailedException',
      content: { 'application/json': { schema: KMSRequestFailedExceptionSchema } },
    },
    482: {
      description: 'InvalidInputCombinationException',
      content: { 'application/json': { schema: InvalidInputCombinationExceptionSchema } },
    },
    483: {
      description: 'ClusterLimitExceededException',
      content: { 'application/json': { schema: ClusterLimitExceededExceptionSchema } },
    },
    484: {
      description: 'Ec2RequestFailedException',
      content: { 'application/json': { schema: Ec2RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing',
    description:
      'Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. ',
    operationId: 'CreateLongTermPricing',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSIESnowballJobManagementService.CreateLongTermPricing')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSIESnowballJobManagementService.CreateLongTermPricing'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateLongTermPricingRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateLongTermPricingResultSchema } },
      },
      480: {
        description: 'InvalidResourceException',
        content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel',
    description:
      'Creates a shipping label that will be used to return the Snow device to Amazon Web Services.',
    operationId: 'CreateReturnShippingLabel',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSIESnowballJobManagementService.CreateReturnShippingLabel')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSIESnowballJobManagementService.CreateReturnShippingLabel'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateReturnShippingLabelRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateReturnShippingLabelResultSchema } },
      },
      480: {
        description: 'InvalidResourceException',
        content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
      },
      481: {
        description: 'InvalidJobStateException',
        content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
      },
      482: {
        description: 'InvalidInputCombinationException',
        content: { 'application/json': { schema: InvalidInputCombinationExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'ReturnShippingLabelAlreadyExistsException',
        content: {
          'application/json': { schema: ReturnShippingLabelAlreadyExistsExceptionSchema },
        },
      },
    },
  })

export const postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress',
  description:
    'Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.',
  operationId: 'DescribeAddress',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.DescribeAddress')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.DescribeAddress'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAddressRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAddressResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses',
  description:
    'Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.',
  operationId: 'DescribeAddresses',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.DescribeAddresses')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSIESnowballJobManagementService.DescribeAddresses'],
            },
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
      content: { 'application/json': { schema: DescribeAddressesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAddressesResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster',
  description:
    'Returns information about a specific cluster including shipping information, cluster status, and other important metadata.',
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
        .literal('AWSIESnowballJobManagementService.DescribeCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.DescribeCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClusterResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceDescribeJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob',
  description:
    'Returns information about a specific job including shipping information, job status, and other important metadata. ',
  operationId: 'DescribeJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.DescribeJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.DescribeJob'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeJobRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel',
    description:
      'Information on the shipping label of a Snow device that is being returned to Amazon Web Services.',
    operationId: 'DescribeReturnShippingLabel',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSIESnowballJobManagementService.DescribeReturnShippingLabel')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSIESnowballJobManagementService.DescribeReturnShippingLabel'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeReturnShippingLabelRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeReturnShippingLabelResultSchema } },
      },
      480: {
        description: 'InvalidResourceException',
        content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
      },
      481: {
        description: 'InvalidJobStateException',
        content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest',
  description:
    "<p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>",
  operationId: 'GetJobManifest',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.GetJobManifest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.GetJobManifest'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetJobManifestRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobManifestResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode',
  description:
    "<p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>",
  operationId: 'GetJobUnlockCode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.GetJobUnlockCode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSIESnowballJobManagementService.GetJobUnlockCode'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetJobUnlockCodeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobUnlockCodeResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage',
  description:
    '<p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>',
  operationId: 'GetSnowballUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.GetSnowballUsage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSIESnowballJobManagementService.GetSnowballUsage'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSnowballUsageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSnowballUsageResultSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates',
  description:
    'Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.',
  operationId: 'GetSoftwareUpdates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.GetSoftwareUpdates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSIESnowballJobManagementService.GetSoftwareUpdates'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSoftwareUpdatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSoftwareUpdatesResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs',
  description:
    "Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.",
  operationId: 'ListClusterJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.ListClusterJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.ListClusterJobs'] },
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
      content: { 'application/json': { schema: ListClusterJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListClusterJobsResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceListClustersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters',
  description:
    "Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.",
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
        .literal('AWSIESnowballJobManagementService.ListClusters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.ListClusters'] },
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
      content: { 'application/json': { schema: ListClustersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListClustersResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages',
    description:
      'This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.',
    operationId: 'ListCompatibleImages',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSIESnowballJobManagementService.ListCompatibleImages')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSIESnowballJobManagementService.ListCompatibleImages'],
              },
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
        content: { 'application/json': { schema: ListCompatibleImagesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListCompatibleImagesResultSchema } },
      },
      480: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      481: {
        description: 'Ec2RequestFailedException',
        content: { 'application/json': { schema: Ec2RequestFailedExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSIESnowballJobManagementServiceListJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs',
  description:
    "Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.",
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
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.ListJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.ListJobs'] },
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
    body: { content: { 'application/json': { schema: ListJobsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing',
  description: 'Lists all long-term pricing types.',
  operationId: 'ListLongTermPricing',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.ListLongTermPricing')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSIESnowballJobManagementService.ListLongTermPricing'],
            },
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
      content: { 'application/json': { schema: ListLongTermPricingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLongTermPricingResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions',
  description:
    'Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.',
  operationId: 'ListServiceVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.ListServiceVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSIESnowballJobManagementService.ListServiceVersions'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServiceVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceVersionsResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster',
  description:
    "While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.",
  operationId: 'UpdateCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.UpdateCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.UpdateCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateClusterResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
    482: {
      description: 'KMSRequestFailedException',
      content: { 'application/json': { schema: KMSRequestFailedExceptionSchema } },
    },
    483: {
      description: 'InvalidInputCombinationException',
      content: { 'application/json': { schema: InvalidInputCombinationExceptionSchema } },
    },
    484: {
      description: 'Ec2RequestFailedException',
      content: { 'application/json': { schema: Ec2RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob',
  description:
    "While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.",
  operationId: 'UpdateJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIESnowballJobManagementService.UpdateJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIESnowballJobManagementService.UpdateJob'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateJobRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateJobResultSchema } },
    },
    480: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
    482: {
      description: 'KMSRequestFailedException',
      content: { 'application/json': { schema: KMSRequestFailedExceptionSchema } },
    },
    483: {
      description: 'InvalidInputCombinationException',
      content: { 'application/json': { schema: InvalidInputCombinationExceptionSchema } },
    },
    484: {
      description: 'ClusterLimitExceededException',
      content: { 'application/json': { schema: ClusterLimitExceededExceptionSchema } },
    },
    485: {
      description: 'Ec2RequestFailedException',
      content: { 'application/json': { schema: Ec2RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState',
    description: 'Updates the state when a shipment state changes to a different state.',
    operationId: 'UpdateJobShipmentState',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSIESnowballJobManagementService.UpdateJobShipmentState')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSIESnowballJobManagementService.UpdateJobShipmentState'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateJobShipmentStateRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateJobShipmentStateResultSchema } },
      },
      480: {
        description: 'InvalidResourceException',
        content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
      },
      481: {
        description: 'InvalidJobStateException',
        content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing',
    description: 'Updates the long-term pricing type.',
    operationId: 'UpdateLongTermPricing',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSIESnowballJobManagementService.UpdateLongTermPricing')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSIESnowballJobManagementService.UpdateLongTermPricing'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateLongTermPricingRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateLongTermPricingResultSchema } },
      },
      480: {
        description: 'InvalidResourceException',
        content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
      },
    },
  })
