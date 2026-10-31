import { createRoute, z } from '@hono/zod-openapi'

const ExecutionConfigSchema = z
  .object({
    idleTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The duration to keep the session alive while it's idling. Exceeding this threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 4 hours if not set. If both ttl and idle_ttl are specified, the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceed, whichever occurs first.",
      }),
    kmsKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The Cloud KMS key to use for encryption.' }),
    networkTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Tags used for network traffic control.' }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Network URI to connect workload to.' }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Service account that used to execute workload.' }),
    stagingBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running, and then create and manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.',
      }),
    subnetworkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Subnetwork URI to connect workload to.' }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The duration after which the workload will be terminated. When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it exits naturally (or runs forever without exiting). If ttl is not specified for an interactive session, it defaults to 24h. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). If both ttl and idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first.',
      }),
  })
  .openapi({ description: 'Execution configuration for a workload.', required: [] })
  .openapi('ExecutionConfig')

const SparkHistoryServerConfigSchema = z
  .object({
    dataprocCluster: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name]',
      }),
  })
  .openapi({ description: 'Spark History Server configuration for the workload.', required: [] })
  .openapi('SparkHistoryServerConfig')

const PeripheralsConfigSchema = z
  .object({
    metastoreService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id]',
      }),
    sparkHistoryServerConfig: SparkHistoryServerConfigSchema.exactOptional().openapi({
      description: 'Optional. The Spark History Server configuration for the workload.',
    }),
  })
  .openapi({ description: 'Auxiliary services configuration for a workload.', required: [] })
  .openapi('PeripheralsConfig')

const EnvironmentConfigSchema = z
  .object({
    executionConfig: ExecutionConfigSchema.exactOptional().openapi({
      description: 'Optional. Execution configuration for a workload.',
    }),
    peripheralsConfig: PeripheralsConfigSchema.exactOptional().openapi({
      description: 'Optional. Peripherals configuration that workload has access to.',
    }),
  })
  .openapi({ description: 'Environment configuration for a workload.', required: [] })
  .openapi('EnvironmentConfig')

const PySparkBatchSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of files to be placed in the working directory of each executor.',
      }),
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.',
      }),
    mainPythonFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.',
      }),
    pythonFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.',
      }),
  })
  .openapi({
    description:
      'A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.',
    required: [],
  })
  .openapi('PySparkBatch')

const RuntimeConfigSchema = z
  .object({
    containerImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used.',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values, which are used to configure workload execution.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Version of the batch runtime.' }),
  })
  .openapi({ description: 'Runtime configuration for a workload.', required: [] })
  .openapi('RuntimeConfig')

const UsageMetricsSchema = z
  .object({
    milliDcuSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).',
      }),
    shuffleStorageGbSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).',
      }),
  })
  .openapi({
    description: 'Usage metrics represent approximate total resources consumed by a workload.',
    required: [],
  })
  .openapi('UsageMetrics')

const UsageSnapshotSchema = z
  .object({
    milliDcu: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).',
      }),
    shuffleStorageGb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))',
      }),
    snapshotTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The timestamp of the usage snapshot.' }),
  })
  .openapi({
    description:
      'The usage snaphot represents the resources consumed by a workload at a specified time.',
    required: [],
  })
  .openapi('UsageSnapshot')

const RuntimeInfoSchema = z
  .object({
    approximateUsage: UsageMetricsSchema.exactOptional().openapi({
      description:
        'Output only. Approximate workload resource usage calculated after workload finishes (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).',
      readOnly: true,
    }),
    currentUsage: UsageSnapshotSchema.exactOptional().openapi({
      description: 'Output only. Snapshot of current workload resource usage.',
      readOnly: true,
    }),
    diagnosticOutputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A URI pointing to the location of the diagnostics tarball.',
        readOnly: true,
      }),
    endpoints: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs.',
        readOnly: true,
      }),
    outputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A URI pointing to the location of the stdout and stderr of the workload.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Runtime information about workload execution.', required: [] })
  .openapi('RuntimeInfo')

const SparkBatchSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of files to be placed in the working directory of each executor.',
      }),
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.',
      }),
    mainClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or specified in jar_file_uris.',
      }),
    mainJarFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The HCFS URI of the jar file that contains the main class.',
      }),
  })
  .openapi({
    description:
      'A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.',
    required: [],
  })
  .openapi('SparkBatch')

const SparkRBatchSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of files to be placed in the working directory of each executor.',
      }),
    mainRFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file.',
      }),
  })
  .openapi({
    description:
      'A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.',
    required: [],
  })
  .openapi('SparkRBatch')

const SparkSqlBatchSchema = z
  .object({
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.',
      }),
    queryFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The HCFS URI of the script that contains Spark SQL queries to execute.',
      }),
    queryVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).',
      }),
  })
  .openapi({
    description:
      'A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.',
    required: [],
  })
  .openapi('SparkSqlBatch')

const StateHistorySchema = z
  .object({
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'RUNNING',
        'CANCELLING',
        'CANCELLED',
        'SUCCEEDED',
        'FAILED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The state of the batch at this point in history.',
        readOnly: true,
      }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Details about the state at this point in history.',
        readOnly: true,
      }),
    stateStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the batch entered the historical state.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Historical state information.', required: [] })
  .openapi('StateHistory')

type BatchType = {
  createTime?: string
  creator?: string
  environmentConfig?: z.infer<typeof EnvironmentConfigSchema>
  labels?: { [key: string]: string }
  name?: string
  operation?: string
  pysparkBatch?: z.infer<typeof PySparkBatchSchema>
  runtimeConfig?: z.infer<typeof RuntimeConfigSchema>
  runtimeInfo?: z.infer<typeof RuntimeInfoSchema>
  sparkBatch?: z.infer<typeof SparkBatchSchema>
  sparkRBatch?: z.infer<typeof SparkRBatchSchema>
  sparkSqlBatch?: z.infer<typeof SparkSqlBatchSchema>
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'RUNNING'
    | 'CANCELLING'
    | 'CANCELLED'
    | 'SUCCEEDED'
    | 'FAILED'
  stateHistory?: z.infer<typeof StateHistorySchema>[]
  stateMessage?: string
  stateTime?: string
  uuid?: string
}

const AutoscalingConfigSchema = z
  .object({
    policyUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region.',
      }),
  })
  .openapi({ description: 'Autoscaling Policy config associated with the cluster.', required: [] })
  .openapi('AutoscalingConfig')

const AcceleratorConfigSchema = z
  .object({
    acceleratorCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of the accelerator cards of this type exposed to this instance.',
      }),
    acceleratorTypeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 nvidia-tesla-k80Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80.',
      }),
  })
  .openapi({
    description:
      'Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).',
    required: [],
  })
  .openapi('AcceleratorConfig')

const DiskConfigSchema = z
  .object({
    bootDiskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. Size in GB of the boot disk (default is 500GB).' }),
    bootDiskType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types).',
      }),
    localSsdInterface: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance).',
      }),
    numLocalSsds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected.',
      }),
  })
  .openapi({
    description: 'Specifies the config of disk options for a group of VM instances.',
    required: [],
  })
  .openapi('DiskConfig')

const InstanceReferenceSchema = z
  .object({
    instanceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Compute Engine instance.' }),
    instanceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-friendly name of the Compute Engine instance.' }),
    publicEciesKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The public ECIES key used for sharing data with this instance.' }),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The public RSA key used for sharing data with this instance.' }),
  })
  .openapi({ description: 'A reference to a Compute Engine instance.', required: [] })
  .openapi('InstanceReference')

const ManagedGroupConfigSchema = z
  .object({
    instanceGroupManagerName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the Instance Group Manager for this group.',
        readOnly: true,
      }),
    instanceTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the Instance Template used for the Managed Instance Group.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Specifies the resources used to actively manage an instance group.',
    required: [],
  })
  .openapi('ManagedGroupConfig')

const InstanceGroupConfigSchema = z
  .object({
    accelerators: z
      .array(AcceleratorConfigSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. The Compute Engine accelerator configuration for these instances.',
      }),
    diskConfig: DiskConfigSchema.exactOptional().openapi({
      description: 'Optional. Disk option config settings.',
    }),
    imageUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default.',
      }),
    instanceNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group.',
        readOnly: true,
      }),
    instanceReferences: z
      .array(InstanceReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. List of references to Compute Engine instances.',
        readOnly: true,
      }),
    isPreemptible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies that this instance group contains preemptible instances.',
        readOnly: true,
      }),
    machineTypeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2.',
      }),
    managedGroupConfig: ManagedGroupConfigSchema.exactOptional().openapi({
      description:
        'Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.',
      readOnly: true,
    }),
    minCpuPlatform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).',
      }),
    numInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to 3. For standard cluster master_config groups, must be set to 1.',
      }),
    preemptibility: z
      .enum(['PREEMPTIBILITY_UNSPECIFIED', 'NON_PREEMPTIBLE', 'PREEMPTIBLE', 'SPOT'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE.',
      }),
  })
  .openapi({
    description:
      'The config settings for Compute Engine resources in an instance group, such as a master or worker group.',
    required: [],
  })
  .openapi('InstanceGroupConfig')

const NodeGroupSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Node group resource name (https://aip.dev/122).' }),
    nodeGroupConfig: InstanceGroupConfigSchema.exactOptional().openapi({
      description: 'Optional. The node group instance group configuration.',
    }),
    roles: z
      .array(z.enum(['ROLE_UNSPECIFIED', 'DRIVER']))
      .exactOptional()
      .openapi({ description: 'Required. Node group roles.' }),
  })
  .openapi({
    description:
      'Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.',
    required: [],
  })
  .openapi('NodeGroup')

const AuxiliaryNodeGroupSchema = z
  .object({
    nodeGroup: NodeGroupSchema.exactOptional().openapi({
      description: 'Required. Node group configuration.',
    }),
    nodeGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.',
      }),
  })
  .openapi({
    description: 'Node group identification and configuration information.',
    required: [],
  })
  .openapi('AuxiliaryNodeGroup')

const MetricSchema = z
  .object({
    metricOverrides: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Specify one or more available OSS metrics (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect for the metric course (for the SPARK metric source, any Spark metric (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified).Provide metrics in the following format: METRIC_SOURCE: INSTANCE:GROUP:METRIC Use camelcase as appropriate.Examples: yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used Notes: Only the specified overridden metrics will be collected for the metric source. For example, if one or more spark:executive metrics are listed as metric overrides, other SPARK metrics will not be collected. The collection of the default metrics for other OSS metric sources is unaffected. For example, if both SPARK andd YARN metric sources are enabled, and overrides are provided for Spark metrics only, all default YARN metrics will be collected.',
      }),
    metricSource: z
      .enum([
        'METRIC_SOURCE_UNSPECIFIED',
        'MONITORING_AGENT_DEFAULTS',
        'HDFS',
        'SPARK',
        'YARN',
        'SPARK_HISTORY_SERVER',
        'HIVESERVER2',
        'HIVEMETASTORE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Default metrics are collected unless metricOverrides are specified for the metric source (see Available OSS metrics (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) for more information).',
      }),
  })
  .openapi({ description: 'A Dataproc OSS metric.', required: [] })
  .openapi('Metric')

const DataprocMetricConfigSchema = z
  .object({
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({ description: 'Required. Metrics sources to enable.' }),
  })
  .openapi({ description: 'Dataproc metric config.', required: [] })
  .openapi('DataprocMetricConfig')

const EncryptionConfigSchema = z
  .object({
    gcePdKmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.',
      }),
    kmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud KMS key name to use for encrypting customer core content and cluster PD disk for all instances in the cluster.',
      }),
  })
  .openapi({ description: 'Encryption settings for the cluster.', required: [] })
  .openapi('EncryptionConfig')

const EndpointConfigSchema = z
  .object({
    enableHttpPortAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.',
      }),
    httpPorts: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Endpoint config for this cluster', required: [] })
  .openapi('EndpointConfig')

const ConfidentialInstanceConfigSchema = z
  .object({
    enableConfidentialCompute: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Defines whether the instance should have confidential compute enabled.',
      }),
  })
  .openapi({
    description:
      'Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)',
    required: [],
  })
  .openapi('ConfidentialInstanceConfig')

const NodeGroupAffinitySchema = z
  .object({
    nodeGroupUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1',
      }),
  })
  .openapi({
    description:
      'Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource.',
    required: [],
  })
  .openapi('NodeGroupAffinity')

const ReservationAffinitySchema = z
  .object({
    consumeReservationType: z
      .enum(['TYPE_UNSPECIFIED', 'NO_RESERVATION', 'ANY_RESERVATION', 'SPECIFIC_RESERVATION'])
      .exactOptional()
      .openapi({ description: 'Optional. Type of reservation to consume' }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Corresponds to the label key of reservation resource.' }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Optional. Corresponds to the label values of reservation resource.',
      }),
  })
  .openapi({ description: 'Reservation Affinity for consuming Zonal reservation.', required: [] })
  .openapi('ReservationAffinity')

const ShieldedInstanceConfigSchema = z
  .object({
    enableIntegrityMonitoring: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Defines whether instances have integrity monitoring enabled.',
      }),
    enableSecureBoot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Defines whether instances have Secure Boot enabled.' }),
    enableVtpm: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Defines whether instances have the vTPM enabled.' }),
  })
  .openapi({
    description:
      'Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).',
    required: [],
  })
  .openapi('ShieldedInstanceConfig')

const GceClusterConfigSchema = z
  .object({
    confidentialInstanceConfig: ConfidentialInstanceConfigSchema.exactOptional().openapi({
      description:
        'Optional. Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs).',
    }),
    internalIpOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).',
      }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default projects/[project_id]/global/networks/default default',
      }),
    nodeGroupAffinity: NodeGroupAffinitySchema.exactOptional().openapi({
      description: 'Optional. Node Group Affinity for sole-tenant clusters.',
    }),
    privateIpv6GoogleAccess: z
      .enum([
        'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED',
        'INHERIT_FROM_SUBNETWORK',
        'OUTBOUND',
        'BIDIRECTIONAL',
      ])
      .exactOptional()
      .openapi({ description: 'Optional. The type of IPv6 access for a cluster.' }),
    reservationAffinity: ReservationAffinitySchema.exactOptional().openapi({
      description: 'Optional. Reservation Affinity for consuming Zonal reservation.',
    }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Dataproc service account (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see VM Data Plane identity (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.',
      }),
    serviceAccountScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full_control',
      }),
    shieldedInstanceConfig: ShieldedInstanceConfigSchema.exactOptional().openapi({
      description:
        'Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).',
    }),
    subnetworkUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/[region]/subnetworks/sub0 projects/[project_id]/regions/[region]/subnetworks/sub0 sub0',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine tags to add to all instances (see Tagging instances (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).',
      }),
    zoneUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The Compute Engine zone where the Dataproc cluster will be located. If omitted, the service will pick a zone in the cluster's Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] [zone]",
      }),
  })
  .openapi({
    description:
      'Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.',
    required: [],
  })
  .openapi('GceClusterConfig')

const NamespacedGkeDeploymentTargetSchema = z
  .object({
    clusterNamespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A namespace within the GKE cluster to deploy into.' }),
    targetGkeCluster: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'",
      }),
  })
  .openapi({
    description:
      'Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.',
    required: [],
  })
  .openapi('NamespacedGkeDeploymentTarget')

const GkeNodePoolAutoscalingConfigSchema = z
  .object({
    maxNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note: Quota must be sufficient to scale up the cluster.',
      }),
    minNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count.',
      }),
  })
  .openapi({
    description:
      'GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.',
    required: [],
  })
  .openapi('GkeNodePoolAutoscalingConfig')

const GkeNodePoolAcceleratorConfigSchema = z
  .object({
    acceleratorCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of accelerator cards exposed to an instance.' }),
    acceleratorType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The accelerator type resource namename (see GPUs on Compute Engine).',
      }),
    gpuPartitionSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).',
      }),
  })
  .openapi({
    description:
      'A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.',
    required: [],
  })
  .openapi('GkeNodePoolAcceleratorConfig')

const GkeNodeConfigSchema = z
  .object({
    accelerators: z
      .array(GkeNodePoolAcceleratorConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to attach to each node.',
      }),
    bootDiskKmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Customer Managed Encryption Key (CMEK) (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: projects/KEY_PROJECT_ID/locations/LOCATION /keyRings/RING_NAME/cryptoKeys/KEY_NAME.',
      }),
    localSsdCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd)).',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types).',
      }),
    minCpuPlatform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge".',
      }),
    preemptible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether the nodes are created as legacy preemptible VM instances (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).',
      }),
    spot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether the nodes are created as Spot VM instances (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).',
      }),
  })
  .openapi({ description: 'Parameters that describe cluster nodes.', required: [] })
  .openapi('GkeNodeConfig')

const GkeNodePoolConfigSchema = z
  .object({
    autoscaling: GkeNodePoolAutoscalingConfigSchema.exactOptional().openapi({
      description:
        'Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid configuration is present.',
    }),
    config: GkeNodeConfigSchema.exactOptional().openapi({
      description: 'Optional. The node pool configuration.',
    }),
    locations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the zone.',
      }),
  })
  .openapi({
    description:
      'The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).',
    required: [],
  })
  .openapi('GkeNodePoolConfig')

const GkeNodePoolTargetSchema = z
  .object({
    nodePool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'",
      }),
    nodePoolConfig: GkeNodePoolConfigSchema.exactOptional().openapi({
      description:
        'Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a node pool with the specified shape. If one with the same name already exists, it is verified against all specified fields. If a field differs, the virtual cluster creation will fail.If omitted, any node pool with the specified name is used. If a node pool with the specified name does not exist, Dataproc create a node pool with default values.This is an input only field. It will not be returned by the API.',
    }),
    roles: z
      .array(
        z.enum(['ROLE_UNSPECIFIED', 'DEFAULT', 'CONTROLLER', 'SPARK_DRIVER', 'SPARK_EXECUTOR']),
      )
      .exactOptional()
      .openapi({ description: 'Required. The roles associated with the GKE node pool.' }),
  })
  .openapi({ description: 'GKE node pools that Dataproc workloads run on.', required: [] })
  .openapi('GkeNodePoolTarget')

const GkeClusterConfigSchema = z
  .object({
    gkeClusterTarget: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'",
      }),
    namespacedGkeDeploymentTarget: NamespacedGkeDeploymentTargetSchema.exactOptional().openapi({
      description:
        'Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the deployment.',
    }),
    nodePoolTarget: z
      .array(GkeNodePoolTargetSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.',
      }),
  })
  .openapi({ description: "The cluster's GKE config.", required: [] })
  .openapi('GkeClusterConfig')

const NodeInitializationActionSchema = z
  .object({
    executableFile: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Cloud Storage URI of executable file.' }),
    executionTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.',
      }),
  })
  .openapi({
    description:
      'Specifies an executable to run on a fully configured node and a timeout period for executable completion.',
    required: [],
  })
  .openapi('NodeInitializationAction')

const LifecycleConfigSchema = z
  .object({
    autoDeleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).',
      }),
    autoDeleteTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).',
      }),
    idleDeleteTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).',
      }),
    idleStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Specifies the cluster auto-delete schedule configuration.',
    required: [],
  })
  .openapi('LifecycleConfig')

const MetastoreConfigSchema = z
  .object({
    dataprocMetastoreService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name]',
      }),
  })
  .openapi({ description: 'Specifies a Metastore configuration.', required: [] })
  .openapi('MetastoreConfig')

const IdentityConfigSchema = z
  .object({
    userServiceAccountMapping: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Required. Map of user to service account.' }),
  })
  .openapi({
    description:
      'Identity related configuration, including service account based secure multi-tenancy user mappings.',
    required: [],
  })
  .openapi('IdentityConfig')

const KerberosConfigSchema = z
  .object({
    crossRealmTrustAdminServer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.',
      }),
    crossRealmTrustKdc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.',
      }),
    crossRealmTrustRealm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.',
      }),
    crossRealmTrustSharedPasswordUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.',
      }),
    enableKerberos: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster.',
      }),
    kdcDbKeyUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.',
      }),
    keyPasswordUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.',
      }),
    keystorePasswordUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc.',
      }),
    keystoreUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.',
      }),
    kmsKeyUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The uri of the KMS key used to encrypt various sensitive files.',
      }),
    realm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.',
      }),
    rootPrincipalPasswordUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password.',
      }),
    tgtLifetimeHours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.',
      }),
    truststorePasswordUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.',
      }),
    truststoreUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.',
      }),
  })
  .openapi({ description: 'Specifies Kerberos related configuration.', required: [] })
  .openapi('KerberosConfig')

const SecurityConfigSchema = z
  .object({
    identityConfig: IdentityConfigSchema.exactOptional().openapi({
      description:
        'Optional. Identity related configuration, including service account based secure multi-tenancy user mappings.',
    }),
    kerberosConfig: KerberosConfigSchema.exactOptional().openapi({
      description: 'Optional. Kerberos related configuration.',
    }),
  })
  .openapi({
    description: 'Security related configuration, including encryption, Kerberos, etc.',
    required: [],
  })
  .openapi('SecurityConfig')

const SoftwareConfigSchema = z
  .object({
    imageVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.',
      }),
    optionalComponents: z
      .array(
        z.enum([
          'COMPONENT_UNSPECIFIED',
          'ANACONDA',
          'DOCKER',
          'DRUID',
          'FLINK',
          'HBASE',
          'HIVE_WEBHCAT',
          'HUDI',
          'JUPYTER',
          'PRESTO',
          'TRINO',
          'RANGER',
          'SOLR',
          'ZEPPELIN',
          'ZOOKEEPER',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Optional. The set of components to activate on the cluster.' }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).',
      }),
  })
  .openapi({
    description: 'Specifies the selection and config of software inside the cluster.',
    required: [],
  })
  .openapi('SoftwareConfig')

type ClusterConfigType = {
  autoscalingConfig?: z.infer<typeof AutoscalingConfigSchema>
  auxiliaryNodeGroups?: z.infer<typeof AuxiliaryNodeGroupSchema>[]
  configBucket?: string
  dataprocMetricConfig?: z.infer<typeof DataprocMetricConfigSchema>
  encryptionConfig?: z.infer<typeof EncryptionConfigSchema>
  endpointConfig?: z.infer<typeof EndpointConfigSchema>
  gceClusterConfig?: z.infer<typeof GceClusterConfigSchema>
  gkeClusterConfig?: z.infer<typeof GkeClusterConfigSchema>
  initializationActions?: z.infer<typeof NodeInitializationActionSchema>[]
  lifecycleConfig?: z.infer<typeof LifecycleConfigSchema>
  masterConfig?: z.infer<typeof InstanceGroupConfigSchema>
  metastoreConfig?: z.infer<typeof MetastoreConfigSchema>
  secondaryWorkerConfig?: z.infer<typeof InstanceGroupConfigSchema>
  securityConfig?: z.infer<typeof SecurityConfigSchema>
  softwareConfig?: z.infer<typeof SoftwareConfigSchema>
  tempBucket?: string
  workerConfig?: z.infer<typeof InstanceGroupConfigSchema>
}

const DriverSchedulingConfigSchema = z
  .object({
    memoryMb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The amount of memory in MB the driver is requesting.' }),
    vcores: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The number of vCPUs the driver is requesting.' }),
  })
  .openapi({ description: 'Driver scheduling configuration.', required: [] })
  .openapi('DriverSchedulingConfig')

const LoggingConfigSchema = z
  .object({
    driverLogLevels: z
      .record(
        z.string(),
        z.enum([
          'LEVEL_UNSPECIFIED',
          'ALL',
          'TRACE',
          'DEBUG',
          'INFO',
          'WARN',
          'ERROR',
          'FATAL',
          'OFF',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "The per-package log levels for the driver. This may include \"root\" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      }),
  })
  .openapi({ description: 'The runtime logging config of the job.', required: [] })
  .openapi('LoggingConfig')

const HadoopJobSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision may occur that causes an incorrect job submission.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.',
      }),
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    mainClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris.",
      }),
    mainJarFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'",
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.',
      }),
  })
  .openapi({
    description:
      'A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).',
    required: [],
  })
  .openapi('HadoopJob')

const QueryListSchema = z
  .object({
    queries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } ',
      }),
  })
  .openapi({ description: 'A list of queries to run on a cluster.', required: [] })
  .openapi('QueryList')

const HiveJobSchema = z
  .object({
    continueOnFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.',
      }),
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.',
      }),
    queryFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HCFS URI of the script that contains Hive queries.' }),
    queryList: QueryListSchema.exactOptional().openapi({ description: 'A list of queries.' }),
    scriptVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).',
      }),
  })
  .openapi({
    description:
      'A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.',
    required: [],
  })
  .openapi('HiveJob')

const PigJobSchema = z
  .object({
    continueOnFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.',
      }),
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.',
      }),
    queryFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HCFS URI of the script that contains the Pig queries.' }),
    queryList: QueryListSchema.exactOptional().openapi({ description: 'A list of queries.' }),
    scriptVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).',
      }),
  })
  .openapi({
    description: 'A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.',
    required: [],
  })
  .openapi('PigJob')

const JobPlacementSchema = z
  .object({
    clusterLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Cluster labels to identify a cluster where the job will be submitted.',
      }),
    clusterName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the cluster where the job will be submitted.',
      }),
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A cluster UUID generated by the Dataproc service when the job is submitted.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Dataproc job config.', required: [] })
  .openapi('JobPlacement')

const PrestoJobSchema = z
  .object({
    clientTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Presto client tags to attach to this query' }),
    continueOnFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    outputFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI',
      }),
    queryFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HCFS URI of the script that contains SQL queries.' }),
    queryList: QueryListSchema.exactOptional().openapi({ description: 'A list of queries.' }),
  })
  .openapi({
    description:
      'A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.',
    required: [],
  })
  .openapi('PrestoJob')

const PySparkJobSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.',
      }),
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    mainPythonFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.',
      }),
    pythonFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.',
      }),
  })
  .openapi({
    description:
      'A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.',
    required: [],
  })
  .openapi('PySparkJob')

const JobReferenceSchema = z
  .object({
    jobId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID.',
      }),
  })
  .openapi({ description: 'Encapsulates the full scoping used to reference a job.', required: [] })
  .openapi('JobReference')

const JobSchedulingSchema = z
  .object({
    maxFailuresPerHour: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.A job may be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).',
      }),
    maxFailuresTotal: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum total number of times a driver may be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).',
      }),
  })
  .openapi({ description: 'Job scheduling options.', required: [] })
  .openapi('JobScheduling')

const SparkJobSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.',
      }),
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    mainClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.",
      }),
    mainJarFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HCFS URI of the jar file that contains the main class.' }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.',
      }),
  })
  .openapi({
    description:
      'A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.',
    required: [],
  })
  .openapi('SparkJob')

const SparkRJobSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    mainRFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.',
      }),
  })
  .openapi({
    description:
      'A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.',
    required: [],
  })
  .openapi('SparkRJob')

const SparkSqlJobSchema = z
  .object({
    jarFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.",
      }),
    queryFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HCFS URI of the script that contains SQL queries.' }),
    queryList: QueryListSchema.exactOptional().openapi({ description: 'A list of queries.' }),
    scriptVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).',
      }),
  })
  .openapi({
    description:
      'A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.',
    required: [],
  })
  .openapi('SparkSqlJob')

const JobStatusSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Output only. Job state details, such as an error description if the state is ERROR.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'SETUP_DONE',
        'RUNNING',
        'CANCEL_PENDING',
        'CANCEL_STARTED',
        'CANCELLED',
        'DONE',
        'ERROR',
        'ATTEMPT_FAILURE',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. A state message specifying the overall job state.',
        readOnly: true,
      }),
    stateStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when this state was entered.',
        readOnly: true,
      }),
    substate: z
      .enum(['UNSPECIFIED', 'SUBMITTED', 'QUEUED', 'STALE_STATUS'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional state information, which includes status reported by the agent.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Dataproc job status.', required: [] })
  .openapi('JobStatus')

const TrinoJobSchema = z
  .object({
    clientTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Trino client tags to attach to this query' }),
    continueOnFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Optional. The runtime log config for job execution.',
    }),
    outputFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI',
      }),
    queryFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HCFS URI of the script that contains SQL queries.' }),
    queryList: QueryListSchema.exactOptional().openapi({ description: 'A list of queries.' }),
  })
  .openapi({
    description:
      'A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.',
    required: [],
  })
  .openapi('TrinoJob')

const YarnApplicationSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Required. The application name.' }),
    progress: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Required. The numerical progress of the application, from 1 to 100.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'NEW',
        'NEW_SAVING',
        'SUBMITTED',
        'ACCEPTED',
        'RUNNING',
        'FINISHED',
        'FAILED',
        'KILLED',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The application state.' }),
    trackingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.',
      }),
  })
  .openapi({
    description:
      'A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.',
    required: [],
  })
  .openapi('YarnApplication')

type JobType = {
  done?: boolean
  driverControlFilesUri?: string
  driverOutputResourceUri?: string
  driverSchedulingConfig?: z.infer<typeof DriverSchedulingConfigSchema>
  hadoopJob?: z.infer<typeof HadoopJobSchema>
  hiveJob?: z.infer<typeof HiveJobSchema>
  jobUuid?: string
  labels?: { [key: string]: string }
  pigJob?: z.infer<typeof PigJobSchema>
  placement?: z.infer<typeof JobPlacementSchema>
  prestoJob?: z.infer<typeof PrestoJobSchema>
  pysparkJob?: z.infer<typeof PySparkJobSchema>
  reference?: z.infer<typeof JobReferenceSchema>
  scheduling?: z.infer<typeof JobSchedulingSchema>
  sparkJob?: z.infer<typeof SparkJobSchema>
  sparkRJob?: z.infer<typeof SparkRJobSchema>
  sparkSqlJob?: z.infer<typeof SparkSqlJobSchema>
  status?: z.infer<typeof JobStatusSchema>
  statusHistory?: z.infer<typeof JobStatusSchema>[]
  trinoJob?: z.infer<typeof TrinoJobSchema>
  yarnApplications?: z.infer<typeof YarnApplicationSchema>[]
}

const SparkStandaloneAutoscalingConfigSchema = z
  .object({
    gracefulDecommissionTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling operations.Bounds: 0s, 1d.',
      }),
    scaleDownFactor: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0 will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0.',
      }),
    scaleDownMinWorkerFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.',
      }),
    scaleUpFactor: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0.',
      }),
    scaleUpMinWorkerFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.',
      }),
  })
  .openapi({ description: 'Basic autoscaling configurations for Spark Standalone.', required: [] })
  .openapi('SparkStandaloneAutoscalingConfig')

const BasicYarnAutoscalingConfigSchema = z
  .object({
    gracefulDecommissionTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d.',
      }),
    scaleDownFactor: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0.',
      }),
    scaleDownMinWorkerFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.',
      }),
    scaleUpFactor: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0.',
      }),
    scaleUpMinWorkerFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.',
      }),
  })
  .openapi({ description: 'Basic autoscaling configurations for YARN.', required: [] })
  .openapi('BasicYarnAutoscalingConfig')

const BasicAutoscalingAlgorithmSchema = z
  .object({
    cooldownPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m.',
      }),
    sparkStandaloneConfig: SparkStandaloneAutoscalingConfigSchema.exactOptional().openapi({
      description: 'Optional. Spark Standalone autoscaling configuration',
    }),
    yarnConfig: BasicYarnAutoscalingConfigSchema.exactOptional().openapi({
      description: 'Optional. YARN autoscaling configuration.',
    }),
  })
  .openapi({ description: 'Basic algorithm for autoscaling.', required: [] })
  .openapi('BasicAutoscalingAlgorithm')

const InstanceGroupAutoscalingPolicyConfigSchema = z
  .object({
    maxInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Secondary workers - Bounds: [min_instances, ). Default: 0.',
      }),
    minInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0.',
      }),
    weight: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers.',
      }),
  })
  .openapi({
    description:
      'Configuration for the size bounds of an instance group, including its proportional size to other groups.',
    required: [],
  })
  .openapi('InstanceGroupAutoscalingPolicyConfig')

const AutoscalingPolicySchema = z
  .object({
    basicAlgorithm: BasicAutoscalingAlgorithmSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}',
        readOnly: true,
      }),
    secondaryWorkerConfig: InstanceGroupAutoscalingPolicyConfigSchema.exactOptional().openapi({
      description: 'Optional. Describes how the autoscaler will operate for secondary workers.',
    }),
    workerConfig: InstanceGroupAutoscalingPolicyConfigSchema.exactOptional().openapi({
      description: 'Required. Describes how the autoscaler will operate for primary workers.',
    }),
  })
  .openapi({
    description: 'Describes an autoscaling policy for Dataproc cluster autoscaler.',
    required: [],
  })
  .openapi('AutoscalingPolicy')

const AuxiliaryServicesConfigSchema = z
  .object({
    metastoreConfig: MetastoreConfigSchema.exactOptional().openapi({
      description: 'Optional. The Hive Metastore configuration for this workload.',
    }),
    sparkHistoryServerConfig: SparkHistoryServerConfigSchema.exactOptional().openapi({
      description: 'Optional. The Spark History Server configuration for the workload.',
    }),
  })
  .openapi({ description: 'Auxiliary services configuration for a Cluster.', required: [] })
  .openapi('AuxiliaryServicesConfig')

const BatchSchema: z.ZodType<BatchType> = z
  .lazy(() =>
    z
      .object({
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time when the batch was created.',
            readOnly: true,
          }),
        creator: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The email address of the user who created the batch.',
            readOnly: true,
          }),
        environmentConfig: EnvironmentConfigSchema.exactOptional().openapi({
          description: 'Optional. Environment configuration for the batch execution.',
        }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The resource name of the batch.', readOnly: true }),
        operation: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The resource name of the operation associated with this batch.',
            readOnly: true,
          }),
        pysparkBatch: PySparkBatchSchema.exactOptional().openapi({
          description: 'Optional. PySpark batch config.',
        }),
        runtimeConfig: RuntimeConfigSchema.exactOptional().openapi({
          description: 'Optional. Runtime configuration for the batch execution.',
        }),
        runtimeInfo: RuntimeInfoSchema.exactOptional().openapi({
          description: 'Output only. Runtime information about batch execution.',
          readOnly: true,
        }),
        sparkBatch: SparkBatchSchema.exactOptional().openapi({
          description: 'Optional. Spark batch config.',
        }),
        sparkRBatch: SparkRBatchSchema.exactOptional().openapi({
          description: 'Optional. SparkR batch config.',
        }),
        sparkSqlBatch: SparkSqlBatchSchema.exactOptional().openapi({
          description: 'Optional. SparkSql batch config.',
        }),
        state: z
          .enum([
            'STATE_UNSPECIFIED',
            'PENDING',
            'RUNNING',
            'CANCELLING',
            'CANCELLED',
            'SUCCEEDED',
            'FAILED',
          ])
          .exactOptional()
          .openapi({ description: 'Output only. The state of the batch.', readOnly: true }),
        stateHistory: z
          .array(StateHistorySchema)
          .exactOptional()
          .openapi({
            description: 'Output only. Historical state information for the batch.',
            readOnly: true,
          }),
        stateMessage: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Batch state details, such as a failure description if the state is FAILED.',
            readOnly: true,
          }),
        stateTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time when the batch entered a current state.',
            readOnly: true,
          }),
        uuid: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch.',
            readOnly: true,
          }),
      })
      .openapi({
        description: 'A representation of a batch workload in the service.',
        required: [],
      }),
  )
  .openapi('Batch')

const BatchOperationMetadataSchema = z
  .object({
    batch: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the batch for the operation.' }),
    batchUuid: z.string().exactOptional().openapi({ description: 'Batch UUID for the operation.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short description of the operation.' }),
    doneTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation finished.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels associated with the operation.' }),
    operationType: z
      .enum(['BATCH_OPERATION_TYPE_UNSPECIFIED', 'BATCH'])
      .exactOptional()
      .openapi({ description: 'The operation type.' }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Warnings encountered during operation execution.' }),
  })
  .openapi({ description: 'Metadata describing the Batch operation.', required: [] })
  .openapi('BatchOperationMetadata')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.',
      }),
  })
  .openapi({ description: 'Associates members, or principals, with a role.', required: [] })
  .openapi('Binding')

const CancelJobRequestSchema = z
  .object({})
  .openapi({ description: 'A request to cancel a job.' })
  .openapi('CancelJobRequest')

const ClusterConfigSchema: z.ZodType<ClusterConfigType> = z
  .lazy(() =>
    z
      .object({
        autoscalingConfig: AutoscalingConfigSchema.exactOptional().openapi({
          description:
            'Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.',
        }),
        auxiliaryNodeGroups: z
          .array(AuxiliaryNodeGroupSchema)
          .exactOptional()
          .openapi({ description: 'Optional. The node group settings.' }),
        configBucket: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.",
          }),
        dataprocMetricConfig: DataprocMetricConfigSchema.exactOptional().openapi({
          description: 'Optional. The config for Dataproc metrics.',
        }),
        encryptionConfig: EncryptionConfigSchema.exactOptional().openapi({
          description: 'Optional. Encryption settings for the cluster.',
        }),
        endpointConfig: EndpointConfigSchema.exactOptional().openapi({
          description: 'Optional. Port/endpoint configuration for this cluster',
        }),
        gceClusterConfig: GceClusterConfigSchema.exactOptional().openapi({
          description:
            'Optional. The shared Compute Engine config settings for all instances in a cluster.',
        }),
        gkeClusterConfig: GkeClusterConfigSchema.exactOptional().openapi({
          description:
            'Optional. BETA. The Kubernetes Engine config for Dataproc clusters deployed to The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. These config settings are mutually exclusive with Compute Engine-based options, such as gce_cluster_config, master_config, worker_config, secondary_worker_config, and autoscaling_config.',
        }),
        initializationActions: z
          .array(NodeInitializationActionSchema)
          .exactOptional()
          .openapi({
            description:
              "Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ \"${ROLE}\" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi ",
          }),
        lifecycleConfig: LifecycleConfigSchema.exactOptional().openapi({
          description: 'Optional. Lifecycle setting for the cluster.',
        }),
        masterConfig: InstanceGroupConfigSchema.exactOptional().openapi({
          description:
            "Optional. The Compute Engine config settings for the cluster's master instance.",
        }),
        metastoreConfig: MetastoreConfigSchema.exactOptional().openapi({
          description: 'Optional. Metastore configuration.',
        }),
        secondaryWorkerConfig: InstanceGroupConfigSchema.exactOptional().openapi({
          description:
            "Optional. The Compute Engine config settings for a cluster's secondary worker instances",
        }),
        securityConfig: SecurityConfigSchema.exactOptional().openapi({
          description: 'Optional. Security settings for the cluster.',
        }),
        softwareConfig: SoftwareConfigSchema.exactOptional().openapi({
          description: 'Optional. The config settings for cluster software.',
        }),
        tempBucket: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.",
          }),
        workerConfig: InstanceGroupConfigSchema.exactOptional().openapi({
          description:
            "Optional. The Compute Engine config settings for the cluster's worker instances.",
        }),
      })
      .openapi({ description: 'The cluster config.', required: [] }),
  )
  .openapi('ClusterConfig')

const ClusterMetricsSchema = z
  .object({
    hdfsMetrics: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The HDFS metrics.' }),
    yarnMetrics: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'YARN metrics.' }),
  })
  .openapi({
    description:
      'Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.',
    required: [],
  })
  .openapi('ClusterMetrics')

const ClusterStatusSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: "Optional. Output only. Details of cluster's state.",
        readOnly: true,
      }),
    state: z
      .enum([
        'UNKNOWN',
        'CREATING',
        'RUNNING',
        'ERROR',
        'ERROR_DUE_TO_UPDATE',
        'DELETING',
        'UPDATING',
        'STOPPING',
        'STOPPED',
        'STARTING',
        'REPAIRING',
      ])
      .exactOptional()
      .openapi({ description: "Output only. The cluster's state.", readOnly: true }),
    stateStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).',
        readOnly: true,
      }),
    substate: z
      .enum(['UNSPECIFIED', 'UNHEALTHY', 'STALE_STATUS'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional state information that includes status reported by the agent.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The status of a cluster and its instances.', required: [] })
  .openapi('ClusterStatus')

const KubernetesSoftwareConfigSchema = z
  .object({
    componentVersion: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).',
      }),
  })
  .openapi({
    description: 'The software configuration for this Dataproc cluster running on Kubernetes.',
    required: [],
  })
  .openapi('KubernetesSoftwareConfig')

const KubernetesClusterConfigSchema = z
  .object({
    gkeClusterConfig: GkeClusterConfigSchema.exactOptional().openapi({
      description: 'Required. The configuration for running the Dataproc cluster on GKE.',
    }),
    kubernetesNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.',
      }),
    kubernetesSoftwareConfig: KubernetesSoftwareConfigSchema.exactOptional().openapi({
      description:
        'Optional. The software configuration for this Dataproc cluster running on Kubernetes.',
    }),
  })
  .openapi({
    description: 'The configuration for running the Dataproc cluster on Kubernetes.',
    required: [],
  })
  .openapi('KubernetesClusterConfig')

const VirtualClusterConfigSchema = z
  .object({
    auxiliaryServicesConfig: AuxiliaryServicesConfigSchema.exactOptional().openapi({
      description: 'Optional. Configuration of auxiliary services used by this cluster.',
    }),
    kubernetesClusterConfig: KubernetesClusterConfigSchema.exactOptional().openapi({
      description: 'Required. The configuration for running the Dataproc cluster on Kubernetes.',
    }),
    stagingBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.",
      }),
  })
  .openapi({
    description:
      'The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).',
    required: [],
  })
  .openapi('VirtualClusterConfig')

const ClusterSchema = z
  .object({
    clusterName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.',
      }),
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster.',
        readOnly: true,
      }),
    config: ClusterConfigSchema.exactOptional().openapi({
      description:
        'Optional. The cluster config for a cluster of Compute Engine Instances. Note that Dataproc may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.',
      }),
    metrics: ClusterMetricsSchema.exactOptional().openapi({
      description:
        'Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.',
      readOnly: true,
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The Google Cloud Platform project ID that the cluster belongs to.',
      }),
    status: ClusterStatusSchema.exactOptional().openapi({
      description: 'Output only. Cluster status.',
      readOnly: true,
    }),
    statusHistory: z
      .array(ClusterStatusSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The previous cluster status.', readOnly: true }),
    virtualClusterConfig: VirtualClusterConfigSchema.exactOptional().openapi({
      description:
        'Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.',
    }),
  })
  .openapi({
    description: 'Describes the identifying information, config, and status of a Dataproc cluster',
    required: [],
  })
  .openapi('Cluster')

const ClusterOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Indicates the operation is done.', readOnly: true }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Error, if operation failed.', readOnly: true }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The id of the cluster operation.', readOnly: true }),
  })
  .openapi({ description: 'The cluster operation triggered by a workflow.', required: [] })
  .openapi('ClusterOperation')

const ClusterOperationStatusSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A message containing any operation metadata details.',
        readOnly: true,
      }),
    innerState: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A message containing the detailed operation state.',
        readOnly: true,
      }),
    state: z
      .enum(['UNKNOWN', 'PENDING', 'RUNNING', 'DONE'])
      .exactOptional()
      .openapi({
        description: 'Output only. A message containing the operation state.',
        readOnly: true,
      }),
    stateStartTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this state was entered.', readOnly: true }),
  })
  .openapi({ description: 'The status of the operation.', required: [] })
  .openapi('ClusterOperationStatus')

const ClusterOperationMetadataSchema = z
  .object({
    childOperationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. Child operation ids', readOnly: true }),
    clusterName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the cluster for the operation.',
        readOnly: true,
      }),
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Cluster UUID for the operation.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Short description of operation.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Labels associated with the operation',
        readOnly: true,
      }),
    operationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The operation type.', readOnly: true }),
    status: ClusterOperationStatusSchema.exactOptional().openapi({
      description: 'Output only. Current operation status.',
      readOnly: true,
    }),
    statusHistory: z
      .array(ClusterOperationStatusSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The previous operation status.', readOnly: true }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Errors encountered during operation execution.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata describing the operation.', required: [] })
  .openapi('ClusterOperationMetadata')

const ClusterSelectorSchema = z
  .object({
    clusterLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Required. The cluster labels. Cluster must have all labels to match.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used.',
      }),
  })
  .openapi({
    description: 'A selector that chooses target cluster for jobs based on metadata.',
    required: [],
  })
  .openapi('ClusterSelector')

const IntervalSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start.',
      }),
  })
  .openapi({
    description:
      'Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.',
    required: [],
  })
  .openapi('Interval')

const DiagnoseClusterRequestSchema = z
  .object({
    diagnosisInterval: IntervalSchema.exactOptional().openapi({
      description:
        'Optional. Time interval in which diagnosis should be carried out on the cluster.',
    }),
    job: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}',
      }),
    jobs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}',
      }),
    yarnApplicationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed.',
      }),
    yarnApplicationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies a list of yarn applications on which diagnosis is to be performed.',
      }),
  })
  .openapi({ description: 'A request to collect cluster diagnostic information.', required: [] })
  .openapi('DiagnoseClusterRequest')

const DiagnoseClusterResultsSchema = z
  .object({
    outputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The location of diagnostic output.', required: [] })
  .openapi('DiagnoseClusterResults')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } ',
  })
  .openapi('Empty')

const GetPolicyOptionsSchema = z
  .object({
    requestedPolicyVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({ description: 'Encapsulates settings provided to GetIamPolicy.', required: [] })
  .openapi('GetPolicyOptions')

const GetIamPolicyRequestSchema = z
  .object({
    options: GetPolicyOptionsSchema.exactOptional().openapi({
      description: 'OPTIONAL: A GetPolicyOptions object for specifying options to GetIamPolicy.',
    }),
  })
  .openapi({ description: 'Request message for GetIamPolicy method.', required: [] })
  .openapi('GetIamPolicyRequest')

const InjectCredentialsRequestSchema = z
  .object({
    clusterUuid: z.string().exactOptional().openapi({ description: 'Required. The cluster UUID.' }),
    credentialsCiphertext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs.',
      }),
  })
  .openapi({ description: 'A request to inject credentials into a cluster.', required: [] })
  .openapi('InjectCredentialsRequest')

const InstantiateWorkflowTemplateRequestSchema = z
  .object({
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template.',
      }),
  })
  .openapi({ description: 'A request to instantiate a workflow template.', required: [] })
  .openapi('InstantiateWorkflowTemplateRequest')

const JobSchema: z.ZodType<JobType> = z
  .lazy(() =>
    z
      .object({
        done: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled.',
            readOnly: true,
          }),
        driverControlFilesUri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.',
            readOnly: true,
          }),
        driverOutputResourceUri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Output only. A URI pointing to the location of the stdout of the job's driver program.",
            readOnly: true,
          }),
        driverSchedulingConfig: DriverSchedulingConfigSchema.exactOptional().openapi({
          description: 'Optional. Driver scheduling configuration.',
        }),
        hadoopJob: HadoopJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a Hadoop job.',
        }),
        hiveJob: HiveJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a Hive job.',
        }),
        jobUuid: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that may be reused over time.',
            readOnly: true,
          }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.',
          }),
        pigJob: PigJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a Pig job.',
        }),
        placement: JobPlacementSchema.exactOptional().openapi({
          description: 'Required. Job information, including how, when, and where to run the job.',
        }),
        prestoJob: PrestoJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a Presto job.',
        }),
        pysparkJob: PySparkJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a PySpark job.',
        }),
        reference: JobReferenceSchema.exactOptional().openapi({
          description:
            'Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id.',
        }),
        scheduling: JobSchedulingSchema.exactOptional().openapi({
          description: 'Optional. Job scheduling configuration.',
        }),
        sparkJob: SparkJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a Spark job.',
        }),
        sparkRJob: SparkRJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a SparkR job.',
        }),
        sparkSqlJob: SparkSqlJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a SparkSql job.',
        }),
        status: JobStatusSchema.exactOptional().openapi({
          description:
            'Output only. The job status. Additional application-specific status information may be contained in the type_job and yarn_applications fields.',
          readOnly: true,
        }),
        statusHistory: z
          .array(JobStatusSchema)
          .exactOptional()
          .openapi({ description: 'Output only. The previous job status.', readOnly: true }),
        trinoJob: TrinoJobSchema.exactOptional().openapi({
          description: 'Optional. Job is a Trino job.',
        }),
        yarnApplications: z
          .array(YarnApplicationSchema)
          .exactOptional()
          .openapi({
            description:
              'Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release.',
            readOnly: true,
          }),
      })
      .openapi({ description: 'A Dataproc job resource.', required: [] }),
  )
  .openapi('Job')

const JobMetadataSchema = z
  .object({
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The job id.', readOnly: true }),
    operationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Operation type.', readOnly: true }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Job submission time.', readOnly: true }),
    status: JobStatusSchema.exactOptional().openapi({
      description: 'Output only. Most recent job status.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Job Operation metadata.', required: [] })
  .openapi('JobMetadata')

const ListAutoscalingPoliciesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This token is included in the response if there are more results to fetch.',
        readOnly: true,
      }),
    policies: z
      .array(AutoscalingPolicySchema)
      .exactOptional()
      .openapi({ description: 'Output only. Autoscaling policies list.', readOnly: true }),
  })
  .openapi({
    description: 'A response to a request to list autoscaling policies in a project.',
    required: [],
  })
  .openapi('ListAutoscalingPoliciesResponse')

const ListBatchesResponseSchema = z
  .object({
    batches: z
      .array(BatchSchema)
      .exactOptional()
      .openapi({ description: 'The batches from the specified collection.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'A list of batch workloads.', required: [] })
  .openapi('ListBatchesResponse')

const ListClustersResponseSchema = z
  .object({
    clusters: z
      .array(ClusterSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The clusters in the project.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The list of all clusters in a project.', required: [] })
  .openapi('ListClustersResponse')

const ListJobsResponseSchema = z
  .object({
    jobs: z
      .array(JobSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Jobs list.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest.',
      }),
  })
  .openapi({ description: 'A list of jobs in a project.', required: [] })
  .openapi('ListJobsResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const OrderedJobSchema = z
  .object({
    hadoopJob: HadoopJobSchema.exactOptional().openapi({
      description: 'Optional. Job is a Hadoop job.',
    }),
    hiveJob: HiveJobSchema.exactOptional().openapi({ description: 'Optional. Job is a Hive job.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \\p{Ll}\\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \\p{Ll}\\p{Lo}\\p{N}_-{0,63}No more than 32 labels can be associated with a given job.',
      }),
    pigJob: PigJobSchema.exactOptional().openapi({ description: 'Optional. Job is a Pig job.' }),
    prerequisiteStepIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.',
      }),
    prestoJob: PrestoJobSchema.exactOptional().openapi({
      description: 'Optional. Job is a Presto job.',
    }),
    pysparkJob: PySparkJobSchema.exactOptional().openapi({
      description: 'Optional. Job is a PySpark job.',
    }),
    scheduling: JobSchedulingSchema.exactOptional().openapi({
      description: 'Optional. Job scheduling configuration.',
    }),
    sparkJob: SparkJobSchema.exactOptional().openapi({
      description: 'Optional. Job is a Spark job.',
    }),
    sparkRJob: SparkRJobSchema.exactOptional().openapi({
      description: 'Optional. Job is a SparkR job.',
    }),
    sparkSqlJob: SparkSqlJobSchema.exactOptional().openapi({
      description: 'Optional. Job is a SparkSql job.',
    }),
    stepId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.',
      }),
    trinoJob: TrinoJobSchema.exactOptional().openapi({
      description: 'Optional. Job is a Trino job.',
    }),
  })
  .openapi({ description: 'A job executed by the workflow.', required: [] })
  .openapi('OrderedJob')

const RegexValidationSchema = z
  .object({
    regexes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).",
      }),
  })
  .openapi({ description: 'Validation based on regular expressions.', required: [] })
  .openapi('RegexValidation')

const ValueValidationSchema = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. List of allowed values for the parameter.' }),
  })
  .openapi({ description: 'Validation based on a list of allowed values.', required: [] })
  .openapi('ValueValidation')

const ParameterValidationSchema = z
  .object({
    regex: RegexValidationSchema.exactOptional().openapi({
      description: 'Validation based on regular expressions.',
    }),
    values: ValueValidationSchema.exactOptional().openapi({
      description: 'Validation based on a list of allowed values.',
    }),
  })
  .openapi({ description: 'Configuration for parameter validation.', required: [] })
  .openapi('ParameterValidation')

const TemplateParameterSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Brief description of the parameter. Must not exceed 1024 characters.',
      }),
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax: Values in maps can be referenced by key: labels'key' placement.clusterSelector.clusterLabels'key' placement.managedCluster.labels'key' placement.clusterSelector.clusterLabels'key' jobs'step-id'.labels'key' Jobs in the jobs list can be referenced by step-id: jobs'step-id'.hadoopJob.mainJarFileUri jobs'step-id'.hiveJob.queryFileUri jobs'step-id'.pySparkJob.mainPythonFileUri jobs'step-id'.hadoopJob.jarFileUris0 jobs'step-id'.hadoopJob.archiveUris0 jobs'step-id'.hadoopJob.fileUris0 jobs'step-id'.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a zero-based index: jobs'step-id'.sparkJob.args0 Other examples: jobs'step-id'.hadoopJob.properties'key' jobs'step-id'.hadoopJob.args0 jobs'step-id'.hiveJob.scriptVariables'key' jobs'step-id'.hadoopJob.mainJarFileUri placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: placement.clusterSelector.clusterLabels jobs'step-id'.sparkJob.args",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.',
      }),
    validation: ParameterValidationSchema.exactOptional().openapi({
      description: "Optional. Validation rules to be applied to this parameter's value.",
    }),
  })
  .openapi({
    description:
      'A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)',
    required: [],
  })
  .openapi('TemplateParameter')

const ManagedClusterSchema = z
  .object({
    clusterName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.',
      }),
    config: ClusterConfigSchema.exactOptional().openapi({
      description: 'Required. The cluster configuration.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}\\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster.',
      }),
  })
  .openapi({ description: 'Cluster that is managed by the workflow.', required: [] })
  .openapi('ManagedCluster')

const WorkflowTemplatePlacementSchema = z
  .object({
    clusterSelector: ClusterSelectorSchema.exactOptional().openapi({
      description:
        'Optional. A selector that chooses target cluster for jobs based on metadata.The selector is evaluated at the time each job is submitted.',
    }),
    managedCluster: ManagedClusterSchema.exactOptional().openapi({
      description: 'A cluster that is managed by the workflow.',
    }),
  })
  .openapi({
    description:
      'Specifies workflow execution target.Either managed_cluster or cluster_selector is required.',
    required: [],
  })
  .openapi('WorkflowTemplatePlacement')

const WorkflowTemplateSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time template was created.', readOnly: true }),
    dagTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.',
      }),
    id: z.string().exactOptional(),
    jobs: z
      .array(OrderedJobSchema)
      .exactOptional()
      .openapi({ description: 'Required. The Directed Acyclic Graph of Jobs to submit.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}',
        readOnly: true,
      }),
    parameters: z
      .array(TemplateParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.',
      }),
    placement: WorkflowTemplatePlacementSchema.exactOptional().openapi({
      description: 'Required. WorkflowTemplate scheduling information.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time template was last updated.', readOnly: true }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.',
      }),
  })
  .openapi({ description: 'A Dataproc workflow template resource.', required: [] })
  .openapi('WorkflowTemplate')

const ListWorkflowTemplatesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest.',
        readOnly: true,
      }),
    templates: z
      .array(WorkflowTemplateSchema)
      .exactOptional()
      .openapi({ description: 'Output only. WorkflowTemplates list.', readOnly: true }),
  })
  .openapi({
    description: 'A response to a request to list workflow templates in a project.',
    required: [],
  })
  .openapi('ListWorkflowTemplatesResponse')

const NodeGroupOperationMetadataSchema = z
  .object({
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Cluster UUID associated with the node group operation.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Short description of operation.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Labels associated with the operation.',
        readOnly: true,
      }),
    nodeGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Node group ID for the operation.', readOnly: true }),
    operationType: z
      .enum(['NODE_GROUP_OPERATION_TYPE_UNSPECIFIED', 'CREATE', 'UPDATE', 'DELETE', 'RESIZE'])
      .exactOptional()
      .openapi({ description: 'The operation type.' }),
    status: ClusterOperationStatusSchema.exactOptional().openapi({
      description: 'Output only. Current operation status.',
      readOnly: true,
    }),
    statusHistory: z
      .array(ClusterOperationStatusSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The previous operation status.', readOnly: true }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Errors encountered during operation execution.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata describing the node group operation.', required: [] })
  .openapi('NodeGroupOperationMetadata')

const NodePoolSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding pool id.',
      }),
    instanceNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Name of instances to be repaired. These instances must belong to specified node pool.',
      }),
    repairAction: z
      .enum(['REPAIR_ACTION_UNSPECIFIED', 'DELETE'])
      .exactOptional()
      .openapi({
        description: 'Required. Repair action to take on specified resources of the node pool.',
      }),
  })
  .openapi({ description: 'indicating a list of workers of same type', required: [] })
  .openapi('NodePool')

const PolicySchema = z
  .object({
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const RepairClusterRequestSchema = z
  .object({
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.',
      }),
    gracefulDecommissionTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+.',
      }),
    nodePools: z
      .array(NodePoolSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this request. i.e. Multiple entries for the same node pool id are not allowed.',
      }),
    parentOperationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. operation id of the parent operation sending the repair request',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
      }),
  })
  .openapi({ description: 'A request to repair a cluster.', required: [] })
  .openapi('RepairClusterRequest')

const ResizeNodeGroupRequestSchema = z
  .object({
    gracefulDecommissionTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning) allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The number of running instances for the node group to maintain. The group adds or removes instances to maintain the number of instances specified by this parameter.',
      }),
  })
  .openapi({ description: 'A request to resize a node group.', required: [] })
  .openapi('ResizeNodeGroupRequest')

const SessionOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short description of the operation.' }),
    doneTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation was finished.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels associated with the operation.' }),
    operationType: z
      .enum(['SESSION_OPERATION_TYPE_UNSPECIFIED', 'CREATE', 'TERMINATE', 'DELETE'])
      .exactOptional()
      .openapi({ description: 'The operation type.' }),
    session: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the session for the operation.' }),
    sessionUuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Session UUID for the operation.' }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Warnings encountered during operation execution.' }),
  })
  .openapi({ description: 'Metadata describing the Session operation.', required: [] })
  .openapi('SessionOperationMetadata')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
  })
  .openapi({ description: 'Request message for SetIamPolicy method.', required: [] })
  .openapi('SetIamPolicyRequest')

const StartClusterRequestSchema = z
  .object({
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A unique ID used to identify the request. If the server receives two StartClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
      }),
  })
  .openapi({ description: 'A request to start a cluster.', required: [] })
  .openapi('StartClusterRequest')

const StopClusterRequestSchema = z
  .object({
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A unique ID used to identify the request. If the server receives two StopClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
      }),
  })
  .openapi({ description: 'A request to stop a cluster.', required: [] })
  .openapi('StopClusterRequest')

const SubmitJobRequestSchema = z
  .object({
    job: JobSchema.exactOptional().openapi({ description: 'Required. The job resource.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
      }),
  })
  .openapi({ description: 'A request to submit a job.', required: [] })
  .openapi('SubmitJobRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for TestIamPermissions method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of TestPermissionsRequest.permissions that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for TestIamPermissions method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const WorkflowNodeSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The error detail.', readOnly: true }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The job id; populated after the node enters RUNNING state.',
        readOnly: true,
      }),
    prerequisiteStepIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "Output only. Node's prerequisite nodes.", readOnly: true }),
    state: z
      .enum(['NODE_STATE_UNSPECIFIED', 'BLOCKED', 'RUNNABLE', 'RUNNING', 'COMPLETED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. The node state.', readOnly: true }),
    stepId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the node.', readOnly: true }),
  })
  .openapi({ description: 'The workflow node.', required: [] })
  .openapi('WorkflowNode')

const WorkflowGraphSchema = z
  .object({
    nodes: z
      .array(WorkflowNodeSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The workflow nodes.', readOnly: true }),
  })
  .openapi({ description: 'The workflow graph.', required: [] })
  .openapi('WorkflowGraph')

const WorkflowMetadataSchema = z
  .object({
    clusterName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the target cluster.', readOnly: true }),
    clusterUuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The UUID of target cluster.', readOnly: true }),
    createCluster: ClusterOperationSchema.exactOptional().openapi({
      description: 'Output only. The create cluster operation metadata.',
      readOnly: true,
    }),
    dagEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. DAG end time, only set for workflows with dag_timeout when DAG ends.',
        readOnly: true,
      }),
    dagStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. DAG start time, only set for workflows with dag_timeout when DAG begins.',
        readOnly: true,
      }),
    dagTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).',
        readOnly: true,
      }),
    deleteCluster: ClusterOperationSchema.exactOptional().openapi({
      description: 'Output only. The delete cluster operation metadata.',
      readOnly: true,
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Workflow end time.', readOnly: true }),
    graph: WorkflowGraphSchema.exactOptional().openapi({
      description: 'Output only. The workflow graph.',
      readOnly: true,
    }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Map from parameter names to values that were used for those parameters.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Workflow start time.', readOnly: true }),
    state: z
      .enum(['UNKNOWN', 'PENDING', 'RUNNING', 'DONE'])
      .exactOptional()
      .openapi({ description: 'Output only. The workflow state.', readOnly: true }),
    template: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}',
        readOnly: true,
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The version of template at the time of workflow instantiation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A Dataproc workflow template resource.', required: [] })
  .openapi('WorkflowMetadata')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1ProjectsProjectIdRegionsRegionClustersRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{projectId}/regions/{region}/clusters',
  tags: ['projects'],
  description: 'Lists all regions/{region}/clusters in a project alphabetically.',
  operationId: 'dataproc.projects.regions.clusters.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The standard List page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The standard List page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListClustersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionClustersRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/clusters',
  tags: ['projects'],
  description:
    'Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).',
  operationId: 'dataproc.projects.regions.clusters.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      actionOnFailedPrimaryWorkers: z
        .enum(['FAILURE_ACTION_UNSPECIFIED', 'NO_ACTION', 'DELETE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Failure action when primary worker creation fails.',
            in: 'query',
            name: 'actionOnFailedPrimaryWorkers',
            schema: { enum: ['FAILURE_ACTION_UNSPECIFIED', 'NO_ACTION', 'DELETE'], type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClusterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
  tags: ['projects'],
  description: 'Gets the resource representation for a cluster in a project.',
  operationId: 'dataproc.projects.regions.clusters.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster name.',
            in: 'path',
            name: 'clusterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClusterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
  tags: ['projects'],
  description:
    'Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).',
  operationId: 'dataproc.projects.regions.clusters.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      clusterUuid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.',
            in: 'query',
            name: 'clusterUuid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster name.',
            in: 'path',
            name: 'clusterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
  tags: ['projects'],
  description:
    'Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.',
  operationId: 'dataproc.projects.regions.clusters.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      gracefulDecommissionTimeout: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.',
            in: 'query',
            name: 'gracefulDecommissionTimeout',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies ',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster name.',
            in: 'path',
            name: 'clusterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClusterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionClustersClusterNameDiagnoseRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose',
  tags: ['projects'],
  description:
    'Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).',
  operationId: 'dataproc.projects.regions.clusters.diagnose',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster name.',
            in: 'path',
            name: 'clusterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DiagnoseClusterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionClustersClusterNameRepairRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair',
  tags: ['projects'],
  description: 'Repairs a cluster.',
  operationId: 'dataproc.projects.regions.clusters.repair',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster name.',
            in: 'path',
            name: 'clusterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RepairClusterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionClustersClusterNameStartRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start',
  tags: ['projects'],
  description: 'Starts a cluster in a project.',
  operationId: 'dataproc.projects.regions.clusters.start',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster name.',
            in: 'path',
            name: 'clusterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartClusterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionClustersClusterNameStopRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop',
  tags: ['projects'],
  description: 'Stops a cluster in a project.',
  operationId: 'dataproc.projects.regions.clusters.stop',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project the cluster belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster name.',
            in: 'path',
            name: 'clusterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopClusterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ProjectsProjectIdRegionsRegionJobsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{projectId}/regions/{region}/jobs',
  tags: ['projects'],
  description: 'Lists regions/{region}/jobs in a project.',
  operationId: 'dataproc.projects.regions.jobs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      clusterName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.',
            in: 'query',
            name: 'clusterName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      jobStateMatcher: z
        .enum(['ALL', 'ACTIVE', 'NON_ACTIVE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.',
            in: 'query',
            name: 'jobStateMatcher',
            schema: { enum: ['ALL', 'ACTIVE', 'NON_ACTIVE'], type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The number of results to return in each response.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page token, returned by a previous call, to request the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ProjectsProjectIdRegionsRegionJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
  tags: ['projects'],
  description: 'Gets the resource representation for a job in a project.',
  operationId: 'dataproc.projects.regions.jobs.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1ProjectsProjectIdRegionsRegionJobsJobIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
  tags: ['projects'],
  description:
    'Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.',
  operationId: 'dataproc.projects.regions.jobs.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1ProjectsProjectIdRegionsRegionJobsJobIdRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
  tags: ['projects'],
  description: 'Updates a job in a project.',
  operationId: 'dataproc.projects.regions.jobs.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel',
  tags: ['projects'],
  description:
    'Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).',
  operationId: 'dataproc.projects.regions.jobs.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionJobsSubmitRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/jobs:submit',
  tags: ['projects'],
  description: 'Submits a job to a cluster.',
  operationId: 'dataproc.projects.regions.jobs.submit',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubmitJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdRegionsRegionJobsSubmitAsOperationRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation',
  tags: ['projects'],
  description: 'Submits job to a cluster.',
  operationId: 'dataproc.projects.regions.jobs.submitAsOperation',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Dataproc region in which to handle the request.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubmitJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.',
  operationId: 'dataproc.projects.regions.workflowTemplates.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.',
            in: 'query',
            name: 'version',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkflowTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1NameRoute = createRoute({
  method: 'put',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Updates (replaces) workflow template. The updated template must contain version that matches the current server version.',
  operationId: 'dataproc.projects.regions.workflowTemplates.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkflowTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkflowTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes a workflow template. It does not cancel in-progress workflows.',
  operationId: 'dataproc.projects.regions.workflowTemplates.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.',
            in: 'query',
            name: 'version',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.",
  operationId: 'dataproc.projects.regions.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameInstantiateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:instantiate',
  tags: ['projects'],
  description:
    'Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.',
  operationId: 'dataproc.projects.regions.workflowTemplates.instantiate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstantiateWorkflowTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameResizeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:resize',
  tags: ['projects'],
  description:
    'Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).',
  operationId: 'dataproc.projects.regions.clusters.nodeGroups.resize',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResizeNodeGroupRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAutoscalingPoliciesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/autoscalingPolicies',
  tags: ['projects'],
  description: 'Lists autoscaling policies in the project.',
  operationId: 'dataproc.projects.regions.autoscalingPolicies.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page token, returned by a previous call, to request the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAutoscalingPoliciesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAutoscalingPoliciesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/autoscalingPolicies',
  tags: ['projects'],
  description: 'Creates new autoscaling policy.',
  operationId: 'dataproc.projects.regions.autoscalingPolicies.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AutoscalingPolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AutoscalingPolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentBatchesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/batches',
  tags: ['projects'],
  description: 'Lists batch workloads.',
  operationId: 'dataproc.projects.locations.batches.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields are batch_id, batch_uuid, state, and create_time.e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of batches.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListBatchesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentBatchesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/batches',
  tags: ['projects'],
  description: 'Creates a batch workload that executes asynchronously.',
  operationId: 'dataproc.projects.locations.batches.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      batchId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.",
            in: 'query',
            name: 'batchId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateBatchRequest)s with the same request_id, the second request is ignored and the Operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource where this batch will be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentNodeGroupsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/nodeGroups',
  tags: ['projects'],
  description:
    'Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).',
  operationId: 'dataproc.projects.regions.clusters.nodeGroups.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      nodeGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.',
            in: 'query',
            name: 'nodeGroupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource where this node group will be created. Format: projects/{project}/regions/{region}/clusters/{cluster}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NodeGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentWorkflowTemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/workflowTemplates',
  tags: ['projects'],
  description: 'Lists workflows that match the specified filter in the request.',
  operationId: 'dataproc.projects.regions.workflowTemplates.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The maximum number of results to return in each response.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page token, returned by a previous call, to request the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWorkflowTemplatesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentWorkflowTemplatesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/workflowTemplates',
  tags: ['projects'],
  description: 'Creates new workflow template.',
  operationId: 'dataproc.projects.regions.workflowTemplates.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkflowTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkflowTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentWorkflowTemplatesInstantiateInlineRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/workflowTemplates:instantiateInline',
  tags: ['projects'],
  description:
    'Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.',
  operationId: 'dataproc.projects.regions.workflowTemplates.instantiateInline',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkflowTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectRegionClusterInjectCredentialsRoute = createRoute({
  method: 'post',
  path: '/v1/{project}/{region}/{cluster}:injectCredentials',
  tags: ['projects'],
  description:
    'Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.',
  operationId: 'dataproc.projects.regions.clusters.injectCredentials',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud Platform project the cluster belongs to, of the form projects/.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Required. The region containing the cluster, of the form regions/.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Required. The cluster, in the form clusters/.',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InjectCredentialsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceGetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'dataproc.projects.regions.workflowTemplates.getIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.',
  operationId: 'dataproc.projects.regions.workflowTemplates.setIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'dataproc.projects.regions.workflowTemplates.testIamPermissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
