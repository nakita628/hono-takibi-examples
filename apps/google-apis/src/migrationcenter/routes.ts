import { createRoute, z } from '@hono/zod-openapi'

const DiskPartitionListSchema: z.ZodType<DiskPartitionListType> = z
  .lazy(() =>
    z
      .object({
        entries: z
          .array(DiskPartitionSchema)
          .exactOptional()
          .openapi({ description: 'Partition entries.' }),
      })
      .openapi({ description: 'Disk partition list.', required: [] }),
  )
  .openapi('DiskPartitionList')

type DiskPartitionType = {
  capacityBytes?: string
  fileSystem?: string
  freeBytes?: string
  mountPoint?: string
  subPartitions?: z.infer<typeof DiskPartitionListSchema>
  type?: string
  uuid?: string
}

const DiskPartitionSchema: z.ZodType<DiskPartitionType> = z
  .lazy(() =>
    z
      .object({
        capacityBytes: z.string().exactOptional().openapi({ description: 'Partition capacity.' }),
        fileSystem: z.string().exactOptional().openapi({ description: 'Partition file system.' }),
        freeBytes: z.string().exactOptional().openapi({ description: 'Partition free space.' }),
        mountPoint: z
          .string()
          .exactOptional()
          .openapi({ description: 'Mount pount (Linux/Windows) or drive letter (Windows).' }),
        subPartitions: DiskPartitionListSchema.exactOptional().openapi({
          description: 'Sub-partitions.',
        }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Partition type (e.g. BIOS boot).' }),
        uuid: z.string().exactOptional().openapi({ description: 'Partition UUID.' }),
      })
      .openapi({ description: 'Disk Partition details.', required: [] }),
  )
  .openapi('DiskPartition')

type DiskPartitionListType = { entries?: z.infer<typeof DiskPartitionSchema>[] }

const ComputeEngineShapeDescriptorSchema = z
  .object({
    logicalCoreCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of logical cores.' }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Compute Engine machine type.' }),
    memoryMb: z.int32().exactOptional().openapi({ description: 'Memory in mebibytes.' }),
    physicalCoreCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of physical cores.' }),
    series: z.string().exactOptional().openapi({ description: 'Compute Engine machine series.' }),
  })
  .openapi({ description: 'Compute Engine target shape descriptor.', required: [] })
  .openapi('ComputeEngineShapeDescriptor')

const ComputeEngineMigrationTargetSchema = z
  .object({
    shape: ComputeEngineShapeDescriptorSchema.exactOptional().openapi({
      description: 'Description of the suggested shape for the migration target.',
    }),
  })
  .openapi({ description: 'Compute engine migration target.', required: [] })
  .openapi('ComputeEngineMigrationTarget')

const FitDescriptorSchema = z
  .object({
    fitLevel: z
      .enum(['FIT_LEVEL_UNSPECIFIED', 'FIT', 'NO_FIT', 'REQUIRES_EFFORT'])
      .exactOptional()
      .openapi({ description: 'Fit level.' }),
  })
  .openapi({
    description: 'Describes the fit level of an asset for migration to a specific target.',
    required: [],
  })
  .openapi('FitDescriptor')

const GoogleKubernetesEngineMigrationTargetSchema = z
  .object({})
  .openapi({ description: 'GKE migration target.' })
  .openapi('GoogleKubernetesEngineMigrationTarget')

const VmwareEngineMigrationTargetSchema = z
  .object({})
  .openapi({ description: 'VMWare engine migration target.' })
  .openapi('VmwareEngineMigrationTarget')

const MigrationInsightSchema = z
  .object({
    computeEngineTarget: ComputeEngineMigrationTargetSchema.exactOptional().openapi({
      description: 'Output only. A Google Compute Engine target.',
      readOnly: true,
    }),
    fit: FitDescriptorSchema.exactOptional().openapi({
      description:
        'Output only. Description of how well the asset this insight is associated with fits the proposed migration.',
      readOnly: true,
    }),
    gkeTarget: GoogleKubernetesEngineMigrationTargetSchema.exactOptional().openapi({
      description: 'Output only. A Google Kubernetes Engine target.',
      readOnly: true,
    }),
    vmwareEngineTarget: VmwareEngineMigrationTargetSchema.exactOptional().openapi({
      description: 'Output only. A VMWare Engine target.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'An insight about potential migrations for an asset.', required: [] })
  .openapi('MigrationInsight')

type InsightType = { migrationInsight?: z.infer<typeof MigrationInsightSchema> }

const AwsEc2PlatformDetailsSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location of the machine in the AWS format.' }),
    machineTypeLabel: z
      .string()
      .exactOptional()
      .openapi({ description: "AWS platform's machine type label." }),
  })
  .openapi({ description: 'AWS EC2 specific details.', required: [] })
  .openapi('AwsEc2PlatformDetails')

const AzureVmPlatformDetailsSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location of the machine in the Azure format.' }),
    machineTypeLabel: z
      .string()
      .exactOptional()
      .openapi({ description: "Azure platform's machine type label." }),
    provisioningState: z
      .string()
      .exactOptional()
      .openapi({ description: "Azure platform's provisioning state." }),
  })
  .openapi({ description: 'Azure VM specific details.', required: [] })
  .openapi('AzureVmPlatformDetails')

const GenericPlatformDetailsSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field.',
      }),
  })
  .openapi({ description: 'Generic platform details.', required: [] })
  .openapi('GenericPlatformDetails')

const PhysicalPlatformDetailsSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field.',
      }),
  })
  .openapi({ description: 'Platform specific details for Physical Machines.', required: [] })
  .openapi('PhysicalPlatformDetails')

const VmwarePlatformDetailsSchema = z
  .object({
    esxVersion: z.string().exactOptional().openapi({ description: 'ESX version.' }),
    osid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html.',
      }),
    vcenterVersion: z.string().exactOptional().openapi({ description: 'vCenter version.' }),
  })
  .openapi({ description: 'VMware specific details.', required: [] })
  .openapi('VmwarePlatformDetails')

type PlatformDetailsType = {
  awsEc2Details?: z.infer<typeof AwsEc2PlatformDetailsSchema>
  azureVmDetails?: z.infer<typeof AzureVmPlatformDetailsSchema>
  genericDetails?: z.infer<typeof GenericPlatformDetailsSchema>
  physicalDetails?: z.infer<typeof PhysicalPlatformDetailsSchema>
  vmwareDetails?: z.infer<typeof VmwarePlatformDetailsSchema>
}

const ImportErrorSchema = z
  .object({
    errorDetails: z.string().exactOptional().openapi({ description: 'The error information.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'ERROR', 'WARNING', 'INFO'])
      .exactOptional()
      .openapi({ description: 'The severity of the error.' }),
  })
  .openapi({
    description: 'A resource that reports the errors encountered while processing an import job.',
    required: [],
  })
  .openapi('ImportError')

const ImportRowErrorSchema = z
  .object({
    errors: z
      .array(ImportErrorSchema)
      .exactOptional()
      .openapi({ description: 'The list of errors detected in the row.' }),
    rowNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The row number where the error was detected.' }),
    vmName: z.string().exactOptional().openapi({ description: 'The name of the VM in the row.' }),
    vmUuid: z.string().exactOptional().openapi({ description: 'The VM UUID.' }),
  })
  .openapi({
    description: 'A resource that reports the import job errors at row level.',
    required: [],
  })
  .openapi('ImportRowError')

const FileValidationReportSchema = z
  .object({
    fileErrors: z
      .array(ImportErrorSchema)
      .exactOptional()
      .openapi({ description: 'List of file level errors.' }),
    fileName: z.string().exactOptional().openapi({ description: 'The name of the file.' }),
    partialReport: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating that processing was aborted due to maximum number of errors.',
      }),
    rowErrors: z
      .array(ImportRowErrorSchema)
      .exactOptional()
      .openapi({ description: 'Partial list of rows that encountered validation error.' }),
  })
  .openapi({
    description: 'A resource that aggregates the validation errors found in an import job file.',
    required: [],
  })
  .openapi('FileValidationReport')

type ValidationReportType = {
  fileValidations?: z.infer<typeof FileValidationReportSchema>[]
  jobErrors?: z.infer<typeof ImportErrorSchema>[]
}

const AssetListSchema = z
  .object({
    assetIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. A list of asset IDs' }),
  })
  .openapi({ description: 'Lists the asset IDs of all assets.', required: [] })
  .openapi('AssetList')

const AddAssetsToGroupRequestSchema = z
  .object({
    allowExisting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.',
      }),
    assets: AssetListSchema.exactOptional().openapi({
      description:
        'Required. List of assets to be added. The maximum number of assets that can be added in a single request is 1000.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
  })
  .openapi({ description: 'A request to add assets to a group.', required: [] })
  .openapi('AddAssetsToGroupRequest')

const AggregationCountSchema = z
  .object({})
  .openapi({ description: 'Object count.' })
  .openapi('AggregationCount')

const AggregationFrequencySchema = z
  .object({})
  .openapi({ description: 'Frequency distribution of all field values.' })
  .openapi('AggregationFrequency')

const AggregationHistogramSchema = z
  .object({
    lowerBounds: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          'Lower bounds of buckets. The response will contain `n+1` buckets for `n` bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds.',
      }),
  })
  .openapi({ description: 'Histogram of bucketed assets counts by field value.', required: [] })
  .openapi('AggregationHistogram')

const AggregationSumSchema = z
  .object({})
  .openapi({ description: 'Sum of field values.' })
  .openapi('AggregationSum')

const AggregationSchema = z
  .object({
    count: AggregationCountSchema.exactOptional().openapi({
      description: 'Count the number of matching objects.',
    }),
    field: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the field on which to aggregate.' }),
    frequency: AggregationFrequencySchema.exactOptional().openapi({
      description: 'Creates a frequency distribution of all field values.',
    }),
    histogram: AggregationHistogramSchema.exactOptional().openapi({
      description: 'Creates a bucketed histogram of field values.',
    }),
    sum: AggregationSumSchema.exactOptional().openapi({ description: 'Sum over a numeric field.' }),
  })
  .openapi({
    description:
      'Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation.',
    required: [],
  })
  .openapi('Aggregation')

const AggregateAssetsValuesRequestSchema = z
  .object({
    aggregations: z
      .array(AggregationSchema)
      .exactOptional()
      .openapi({
        description: 'Array of aggregations to perform. Up to 25 aggregations can be defined.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The aggregation will be performed on assets that match the provided filter.',
      }),
  })
  .openapi({ description: 'A request to aggregate one or more values.', required: [] })
  .openapi('AggregateAssetsValuesRequest')

const AggregationResultCountSchema = z
  .object({ value: z.string().exactOptional() })
  .openapi({ description: 'The result of a count aggregation.', required: [] })
  .openapi('AggregationResultCount')

const AggregationResultFrequencySchema = z
  .object({ values: z.record(z.string(), z.string()).exactOptional() })
  .openapi({ description: 'The result of a frequency distribution aggregation.', required: [] })
  .openapi('AggregationResultFrequency')

const AggregationResultHistogramBucketSchema = z
  .object({
    count: z.string().exactOptional().openapi({ description: 'Count of items in the bucket.' }),
    lowerBound: z.float64().exactOptional().openapi({ description: 'Lower bound - inclusive.' }),
    upperBound: z.float64().exactOptional().openapi({ description: 'Upper bound - exclusive.' }),
  })
  .openapi({
    description:
      'A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.',
    required: [],
  })
  .openapi('AggregationResultHistogramBucket')

const AggregationResultHistogramSchema = z
  .object({
    buckets: z
      .array(AggregationResultHistogramBucketSchema)
      .exactOptional()
      .openapi({
        description:
          'Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.',
      }),
  })
  .openapi({ description: 'The result of a bucketed histogram aggregation.', required: [] })
  .openapi('AggregationResultHistogram')

const AggregationResultSumSchema = z
  .object({ value: z.float64().exactOptional() })
  .openapi({ description: 'The result of a sum aggregation.', required: [] })
  .openapi('AggregationResultSum')

const AggregationResultSchema = z
  .object({
    count: AggregationResultCountSchema.exactOptional(),
    field: z.string().exactOptional(),
    frequency: AggregationResultFrequencySchema.exactOptional(),
    histogram: AggregationResultHistogramSchema.exactOptional(),
    sum: AggregationResultSumSchema.exactOptional(),
  })
  .openapi({ description: 'Message describing a result of an aggregation.', required: [] })
  .openapi('AggregationResult')

const AggregateAssetsValuesResponseSchema = z
  .object({
    results: z
      .array(AggregationResultSchema)
      .exactOptional()
      .openapi({ description: 'The aggregation results.' }),
  })
  .openapi({ description: 'A response to a request to aggregated assets values.', required: [] })
  .openapi('AggregateAssetsValuesResponse')

const InsightSchema: z.ZodType<InsightType> = z
  .lazy(() =>
    z
      .object({
        migrationInsight: MigrationInsightSchema.exactOptional().openapi({
          description: 'Output only. An insight about potential migrations for an asset.',
          readOnly: true,
        }),
      })
      .openapi({ description: 'An insight about an asset.', required: [] }),
  )
  .openapi('Insight')

const InsightListSchema = z
  .object({
    insights: z
      .array(InsightSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Insights of the list.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Update timestamp.', readOnly: true }),
  })
  .openapi({ description: 'Message containing insights list.', required: [] })
  .openapi('InsightList')

const DailyResourceUsageAggregationStatsSchema = z
  .object({
    average: z.float32().exactOptional().openapi({ description: 'Average usage value.' }),
    median: z.float32().exactOptional().openapi({ description: 'Median usage value.' }),
    ninteyFifthPercentile: z
      .float32()
      .exactOptional()
      .openapi({ description: '95th percentile usage value.' }),
    peak: z.float32().exactOptional().openapi({ description: 'Peak usage value.' }),
  })
  .openapi({
    description: 'Statistical aggregation of samples for a single resource usage.',
    required: [],
  })
  .openapi('DailyResourceUsageAggregationStats')

const DailyResourceUsageAggregationCPUSchema = z
  .object({
    utilizationPercentage: DailyResourceUsageAggregationStatsSchema.exactOptional().openapi({
      description: 'CPU utilization percentage.',
    }),
  })
  .openapi({ description: 'Statistical aggregation of CPU usage.', required: [] })
  .openapi('DailyResourceUsageAggregationCPU')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const DailyResourceUsageAggregationDiskSchema = z
  .object({
    iops: DailyResourceUsageAggregationStatsSchema.exactOptional().openapi({
      description: 'Disk I/O operations per second.',
    }),
  })
  .openapi({ description: 'Statistical aggregation of disk usage.', required: [] })
  .openapi('DailyResourceUsageAggregationDisk')

const DailyResourceUsageAggregationMemorySchema = z
  .object({
    utilizationPercentage: DailyResourceUsageAggregationStatsSchema.exactOptional().openapi({
      description: 'Memory utilization percentage.',
    }),
  })
  .openapi({ description: 'Statistical aggregation of memory usage.', required: [] })
  .openapi('DailyResourceUsageAggregationMemory')

const DailyResourceUsageAggregationNetworkSchema = z
  .object({
    egressBps: DailyResourceUsageAggregationStatsSchema.exactOptional().openapi({
      description: 'Network egress in B/s.',
    }),
    ingressBps: DailyResourceUsageAggregationStatsSchema.exactOptional().openapi({
      description: 'Network ingress in B/s.',
    }),
  })
  .openapi({ description: 'Statistical aggregation of network usage.', required: [] })
  .openapi('DailyResourceUsageAggregationNetwork')

const DailyResourceUsageAggregationSchema = z
  .object({
    cpu: DailyResourceUsageAggregationCPUSchema.exactOptional().openapi({
      description: 'CPU usage.',
    }),
    date: DateSchema.exactOptional().openapi({
      description: 'Aggregation date. Day boundaries are at midnight UTC.',
    }),
    disk: DailyResourceUsageAggregationDiskSchema.exactOptional().openapi({
      description: 'Disk usage.',
    }),
    memory: DailyResourceUsageAggregationMemorySchema.exactOptional().openapi({
      description: 'Memory usage.',
    }),
    network: DailyResourceUsageAggregationNetworkSchema.exactOptional().openapi({
      description: 'Network usage.',
    }),
  })
  .openapi({ description: 'Usage data aggregation for a single day.', required: [] })
  .openapi('DailyResourceUsageAggregation')

const AssetPerformanceDataSchema = z
  .object({
    dailyResourceUsageAggregations: z
      .array(DailyResourceUsageAggregationSchema)
      .exactOptional()
      .openapi({
        description:
          'Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days.',
      }),
  })
  .openapi({ description: 'Performance data for an asset.', required: [] })
  .openapi('AssetPerformanceData')

const FstabEntrySchema = z
  .object({
    file: z
      .string()
      .exactOptional()
      .openapi({ description: 'The mount point for the filesystem.' }),
    freq: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Used by dump to determine which filesystems need to be dumped.' }),
    mntops: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mount options associated with the filesystem.' }),
    passno: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time.',
      }),
    spec: z
      .string()
      .exactOptional()
      .openapi({ description: 'The block special device or remote filesystem to be mounted.' }),
    vfstype: z.string().exactOptional().openapi({ description: 'The type of the filesystem.' }),
  })
  .openapi({ description: 'Single fstab entry.', required: [] })
  .openapi('FstabEntry')

const FstabEntryListSchema = z
  .object({
    entries: z.array(FstabEntrySchema).exactOptional().openapi({ description: 'Fstab entries.' }),
  })
  .openapi({ description: 'Fstab content.', required: [] })
  .openapi('FstabEntryList')

const HostsEntrySchema = z
  .object({
    hostNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of host names / aliases.' }),
    ip: z.string().exactOptional().openapi({ description: 'IP (raw, IPv4/6 agnostic).' }),
  })
  .openapi({ description: 'Single /etc/hosts entry.', required: [] })
  .openapi('HostsEntry')

const HostsEntryListSchema = z
  .object({
    entries: z.array(HostsEntrySchema).exactOptional().openapi({ description: 'Hosts entries.' }),
  })
  .openapi({ description: 'Hosts content.', required: [] })
  .openapi('HostsEntryList')

const NfsExportSchema = z
  .object({
    exportDirectory: z
      .string()
      .exactOptional()
      .openapi({ description: 'The directory being exported.' }),
    hosts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The hosts or networks to which the export is being shared.' }),
  })
  .openapi({ description: 'NFS export.', required: [] })
  .openapi('NfsExport')

const NfsExportListSchema = z
  .object({
    entries: z
      .array(NfsExportSchema)
      .exactOptional()
      .openapi({ description: 'NFS export entries.' }),
  })
  .openapi({ description: 'NFS exports.', required: [] })
  .openapi('NfsExportList')

const SelinuxSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ description: 'Is SELinux enabled.' }),
    mode: z
      .string()
      .exactOptional()
      .openapi({ description: 'SELinux mode enforcing / permissive.' }),
  })
  .openapi({ description: 'SELinux details.', required: [] })
  .openapi('Selinux')

const GuestConfigDetailsSchema = z
  .object({
    fstab: FstabEntryListSchema.exactOptional().openapi({
      description: 'Mount list (Linux fstab).',
    }),
    hosts: HostsEntryListSchema.exactOptional().openapi({
      description: 'Hosts file (/etc/hosts).',
    }),
    issue: z
      .string()
      .exactOptional()
      .openapi({ description: 'OS issue (typically /etc/issue in Linux).' }),
    nfsExports: NfsExportListSchema.exactOptional().openapi({ description: 'NFS exports.' }),
    selinux: SelinuxSchema.exactOptional().openapi({ description: 'SELinux details.' }),
  })
  .openapi({ description: 'Guest OS config information.', required: [] })
  .openapi('GuestConfigDetails')

const GuestInstalledApplicationSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Installed application name.' }),
    path: z.string().exactOptional().openapi({ description: 'Source path.' }),
    time: z.string().exactOptional().openapi({ description: 'Date application was installed.' }),
    vendor: z.string().exactOptional().openapi({ description: 'Installed application vendor.' }),
    version: z.string().exactOptional().openapi({ description: 'Installed application version.' }),
  })
  .openapi({ description: 'Guest installed application information.', required: [] })
  .openapi('GuestInstalledApplication')

const GuestInstalledApplicationListSchema = z
  .object({
    entries: z
      .array(GuestInstalledApplicationSchema)
      .exactOptional()
      .openapi({ description: 'Application entries.' }),
  })
  .openapi({ description: 'Guest installed application list.', required: [] })
  .openapi('GuestInstalledApplicationList')

const NetworkConnectionSchema = z
  .object({
    localIpAddress: z.string().exactOptional().openapi({ description: 'Local IP address.' }),
    localPort: z.int32().exactOptional().openapi({ description: 'Local port.' }),
    pid: z.string().exactOptional().openapi({ description: 'Process ID.' }),
    processName: z.string().exactOptional().openapi({ description: 'Process or service name.' }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({ description: 'Connection protocol (e.g. TCP/UDP).' }),
    remoteIpAddress: z.string().exactOptional().openapi({ description: 'Remote IP address.' }),
    remotePort: z.int32().exactOptional().openapi({ description: 'Remote port.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Connection state (e.g. CONNECTED).' }),
  })
  .openapi({ required: [] })
  .openapi('NetworkConnection')

const NetworkConnectionListSchema = z
  .object({
    entries: z
      .array(NetworkConnectionSchema)
      .exactOptional()
      .openapi({ description: 'Network connection entries.' }),
  })
  .openapi({ description: 'Network connection list.', required: [] })
  .openapi('NetworkConnectionList')

const TimeZoneSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA Time Zone Database time zone, e.g. "America/New_York".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. IANA Time Zone Database version number, e.g. "2019a".' }),
  })
  .openapi({
    description:
      'Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).',
    required: [],
  })
  .openapi('TimeZone')

const DateTimeSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.',
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.',
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.',
      }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.',
      }),
    timeZone: TimeZoneSchema.exactOptional().openapi({ description: 'Time zone.' }),
    utcOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.',
      }),
  })
  .openapi({
    description:
      "Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.",
    required: [],
  })
  .openapi('DateTime')

const RuntimeNetworkInfoSchema = z
  .object({
    connections: NetworkConnectionListSchema.exactOptional().openapi({
      description: 'Network connections.',
    }),
    netstat: z.string().exactOptional().openapi({ description: 'Netstat (raw, OS-agnostic).' }),
    netstatTime: DateTimeSchema.exactOptional().openapi({ description: 'Netstat time collected.' }),
  })
  .openapi({ description: 'Runtime networking information.', required: [] })
  .openapi('RuntimeNetworkInfo')

const OpenFileDetailsSchema = z
  .object({
    command: z.string().exactOptional().openapi({ description: 'Opened file command.' }),
    filePath: z.string().exactOptional().openapi({ description: 'Opened file file path.' }),
    fileType: z.string().exactOptional().openapi({ description: 'Opened file file type.' }),
    user: z.string().exactOptional().openapi({ description: 'Opened file user.' }),
  })
  .openapi({ description: 'Open file Information.', required: [] })
  .openapi('OpenFileDetails')

const OpenFileListSchema = z
  .object({
    entries: z
      .array(OpenFileDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Open file details entries.' }),
  })
  .openapi({ description: 'Open file list.', required: [] })
  .openapi('OpenFileList')

const RunningProcessSchema = z
  .object({
    attributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Process extended attributes.' }),
    cmdline: z.string().exactOptional().openapi({ description: 'Process full command line.' }),
    exePath: z.string().exactOptional().openapi({ description: 'Process binary path.' }),
    pid: z.string().exactOptional().openapi({ description: 'Process ID.' }),
    user: z.string().exactOptional().openapi({ description: 'User running the process.' }),
  })
  .openapi({ description: 'Guest OS running process details.', required: [] })
  .openapi('RunningProcess')

const RunningProcessListSchema = z
  .object({
    processes: z
      .array(RunningProcessSchema)
      .exactOptional()
      .openapi({ description: 'Running process entries.' }),
  })
  .openapi({ description: 'List of running guest OS processes.', required: [] })
  .openapi('RunningProcessList')

const RunningServiceSchema = z
  .object({
    cmdline: z.string().exactOptional().openapi({ description: 'Service command line.' }),
    exePath: z.string().exactOptional().openapi({ description: 'Service binary path.' }),
    name: z.string().exactOptional().openapi({ description: 'Service name.' }),
    pid: z.string().exactOptional().openapi({ description: 'Service pid.' }),
    startMode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service start mode (raw, OS-agnostic).' }),
    state: z.string().exactOptional().openapi({ description: 'Service state (raw, OS-agnostic).' }),
    status: z.string().exactOptional().openapi({ description: 'Service status.' }),
  })
  .openapi({ description: 'Guest OS running service details.', required: [] })
  .openapi('RunningService')

const RunningServiceListSchema = z
  .object({
    services: z
      .array(RunningServiceSchema)
      .exactOptional()
      .openapi({ description: 'Running service entries.' }),
  })
  .openapi({ description: 'List of running guest OS services.', required: [] })
  .openapi('RunningServiceList')

const GuestRuntimeDetailsSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Domain, e.g. c.stratozone-development.internal.' }),
    installedApps: GuestInstalledApplicationListSchema.exactOptional().openapi({
      description: 'Installed applications information.',
    }),
    lastUptime: DateSchema.exactOptional().openapi({
      description: 'Date since last booted (last uptime date).',
    }),
    machineName: z.string().exactOptional().openapi({ description: 'Machine name.' }),
    networkInfo: RuntimeNetworkInfoSchema.exactOptional().openapi({
      description: 'Runtime network information (connections, ports).',
    }),
    openFileList: OpenFileListSchema.exactOptional().openapi({
      description: 'Open files information.',
    }),
    processes: RunningProcessListSchema.exactOptional().openapi({
      description: 'Running processes.',
    }),
    services: RunningServiceListSchema.exactOptional().openapi({
      description: 'Running background services.',
    }),
  })
  .openapi({ description: 'Guest OS runtime information.', required: [] })
  .openapi('GuestRuntimeDetails')

const GuestOsDetailsSchema = z
  .object({
    config: GuestConfigDetailsSchema.exactOptional().openapi({
      description: 'OS and app configuration.',
    }),
    runtime: GuestRuntimeDetailsSchema.exactOptional().openapi({
      description: 'Runtime information.',
    }),
  })
  .openapi({ description: 'Information from Guest-level collections.', required: [] })
  .openapi('GuestOsDetails')

const PlatformDetailsSchema: z.ZodType<PlatformDetailsType> = z
  .lazy(() =>
    z
      .object({
        awsEc2Details: AwsEc2PlatformDetailsSchema.exactOptional().openapi({
          description: 'AWS EC2 specific details.',
        }),
        azureVmDetails: AzureVmPlatformDetailsSchema.exactOptional().openapi({
          description: 'Azure VM specific details.',
        }),
        genericDetails: GenericPlatformDetailsSchema.exactOptional().openapi({
          description: 'Generic platform details.',
        }),
        physicalDetails: PhysicalPlatformDetailsSchema.exactOptional().openapi({
          description: 'Physical machines platform details.',
        }),
        vmwareDetails: VmwarePlatformDetailsSchema.exactOptional().openapi({
          description: 'VMware specific details.',
        }),
      })
      .openapi({ description: 'Information about the platform.', required: [] }),
  )
  .openapi('PlatformDetails')

const BiosDetailsSchema = z
  .object({
    biosManufacturer: z.string().exactOptional().openapi({ description: 'BIOS manufacturer.' }),
    biosName: z.string().exactOptional().openapi({ description: 'BIOS name.' }),
    biosReleaseDate: z.string().exactOptional().openapi({ description: 'BIOS release date.' }),
    biosVersion: z.string().exactOptional().openapi({ description: 'BIOS version.' }),
    smbiosUuid: z.string().exactOptional().openapi({ description: 'SMBIOS UUID.' }),
  })
  .openapi({ description: 'Details about the BIOS.', required: [] })
  .openapi('BiosDetails')

const VirtualMachineArchitectureDetailsSchema = z
  .object({
    bios: BiosDetailsSchema.exactOptional().openapi({ description: 'BIOS Details.' }),
    cpuArchitecture: z
      .string()
      .exactOptional()
      .openapi({ description: 'CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc.' }),
    cpuManufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'CPU manufacturer, e.g., "Intel", "AMD".' }),
    cpuName: z
      .string()
      .exactOptional()
      .openapi({ description: 'CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc.' }),
    cpuSocketCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of processor sockets allocated to the machine.' }),
    cpuThreadCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of CPU threads allocated to the machine.' }),
    firmware: z.string().exactOptional().openapi({ description: 'Firmware (BIOS/efi).' }),
    hyperthreading: z
      .enum(['HYPER_THREADING_UNSPECIFIED', 'HYPER_THREADING_DISABLED', 'HYPER_THREADING_ENABLED'])
      .exactOptional()
      .openapi({ description: 'CPU hyperthreading support.' }),
    vendor: z.string().exactOptional().openapi({ description: 'Hardware vendor.' }),
  })
  .openapi({ description: 'Details of the VM architecture.', required: [] })
  .openapi('VirtualMachineArchitectureDetails')

const VmwareDiskConfigSchema = z
  .object({
    backingType: z
      .enum([
        'BACKING_TYPE_UNSPECIFIED',
        'BACKING_TYPE_FLAT_V1',
        'BACKING_TYPE_FLAT_V2',
        'BACKING_TYPE_PMEM',
        'BACKING_TYPE_RDM_V1',
        'BACKING_TYPE_RDM_V2',
        'BACKING_TYPE_SESPARSE',
        'BACKING_TYPE_SESPARSE_V1',
        'BACKING_TYPE_SESPARSE_V2',
      ])
      .exactOptional()
      .openapi({ description: 'VMDK backing type.' }),
    rdmCompatibilityMode: z
      .string()
      .exactOptional()
      .openapi({ description: 'RDM compatibility mode.' }),
    shared: z.boolean().exactOptional().openapi({ description: 'Is VMDK shared with other VMs.' }),
    vmdkDiskMode: z.string().exactOptional().openapi({ description: 'VMDK disk mode.' }),
  })
  .openapi({ description: 'VMware disk config details.', required: [] })
  .openapi('VmwareDiskConfig')

const DiskEntrySchema = z
  .object({
    diskLabel: z.string().exactOptional().openapi({ description: 'Disk label.' }),
    diskLabelType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Disk label type (e.g. BIOS/GPT)' }),
    hwAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Disk hardware address (e.g. 0:1 for SCSI).' }),
    interfaceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Disks interface type (e.g. SATA/SCSI)' }),
    partitions: DiskPartitionListSchema.exactOptional().openapi({
      description: 'Partition layout.',
    }),
    status: z.string().exactOptional().openapi({ description: 'Disk status (e.g. online).' }),
    totalCapacityBytes: z.string().exactOptional().openapi({ description: 'Disk capacity.' }),
    totalFreeBytes: z.string().exactOptional().openapi({ description: 'Disk free space.' }),
    vmwareConfig: VmwareDiskConfigSchema.exactOptional().openapi({
      description: 'VMware disk details.',
    }),
  })
  .openapi({ description: 'Single disk entry.', required: [] })
  .openapi('DiskEntry')

const DiskEntryListSchema = z
  .object({
    entries: z.array(DiskEntrySchema).exactOptional().openapi({ description: 'Disk entries.' }),
  })
  .openapi({ description: 'VM disks.', required: [] })
  .openapi('DiskEntryList')

const VirtualMachineDiskDetailsSchema = z
  .object({
    disks: DiskEntryListSchema.exactOptional().openapi({ description: 'List of disks.' }),
    hddTotalCapacityBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Disk total Capacity.' }),
    hddTotalFreeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total Disk Free Space.' }),
    lsblkJson: z.string().exactOptional().openapi({ description: 'Raw lsblk output in json.' }),
  })
  .openapi({ description: 'Details of VM disks.', required: [] })
  .openapi('VirtualMachineDiskDetails')

const NetworkAddressSchema = z
  .object({
    assignment: z
      .enum([
        'ADDRESS_ASSIGNMENT_UNSPECIFIED',
        'ADDRESS_ASSIGNMENT_STATIC',
        'ADDRESS_ASSIGNMENT_DHCP',
      ])
      .exactOptional()
      .openapi({ description: 'Whether DHCP is used to assign addresses.' }),
    bcast: z.string().exactOptional().openapi({ description: 'Broadcast address.' }),
    fqdn: z.string().exactOptional().openapi({ description: 'Fully qualified domain name.' }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Assigned or configured IP Address.' }),
    subnetMask: z.string().exactOptional().openapi({ description: 'Subnet mask.' }),
  })
  .openapi({ description: 'Details of network address.', required: [] })
  .openapi('NetworkAddress')

const NetworkAddressListSchema = z
  .object({
    addresses: z
      .array(NetworkAddressSchema)
      .exactOptional()
      .openapi({ description: 'Network address entries.' }),
  })
  .openapi({ description: 'List of allocated/assigned network addresses.', required: [] })
  .openapi('NetworkAddressList')

const NetworkAdapterDetailsSchema = z
  .object({
    adapterType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Network adapter type (e.g. VMXNET3).' }),
    addresses: NetworkAddressListSchema.exactOptional().openapi({
      description: 'NetworkAddressList',
    }),
    macAddress: z.string().exactOptional().openapi({ description: 'MAC address.' }),
  })
  .openapi({ description: 'Details of network adapter.', required: [] })
  .openapi('NetworkAdapterDetails')

const NetworkAdapterListSchema = z
  .object({
    networkAdapters: z
      .array(NetworkAdapterDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Network adapter descriptions.' }),
  })
  .openapi({ description: 'List of network adapters.', required: [] })
  .openapi('NetworkAdapterList')

const VirtualMachineNetworkDetailsSchema = z
  .object({
    defaultGw: z.string().exactOptional().openapi({ description: 'Default gateway address.' }),
    networkAdapters: NetworkAdapterListSchema.exactOptional().openapi({
      description: 'List of network adapters.',
    }),
    primaryIpAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of the machine.' }),
    primaryMacAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'MAC address of the machine. This property is used to uniqly identify the machine.',
      }),
    publicIpAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Public IP address of the machine.' }),
  })
  .openapi({ description: 'Details of network adapters and settings.', required: [] })
  .openapi('VirtualMachineNetworkDetails')

const VirtualMachineDetailsSchema = z
  .object({
    coreCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of CPU cores in the VirtualMachine. Must be non-negative.' }),
    createTime: z.string().exactOptional().openapi({ description: 'VM creation timestamp.' }),
    guestOs: GuestOsDetailsSchema.exactOptional().openapi({ description: 'Guest OS information.' }),
    memoryMb: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The amount of memory in the VirtualMachine. Must be non-negative.',
      }),
    osFamily: z
      .enum(['OS_FAMILY_UNKNOWN', 'OS_FAMILY_WINDOWS', 'OS_FAMILY_LINUX', 'OS_FAMILY_UNIX'])
      .exactOptional()
      .openapi({ description: 'What family the OS belong to, if known.' }),
    osName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the operating system running on the VirtualMachine.' }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The version of the operating system running on the virtual machine.',
      }),
    platform: PlatformDetailsSchema.exactOptional().openapi({
      description: 'Platform information.',
    }),
    powerState: z
      .string()
      .exactOptional()
      .openapi({ description: 'Power state of VM (poweredOn or poweredOff).' }),
    vcenterFolder: z
      .string()
      .exactOptional()
      .openapi({ description: 'Folder name in vCenter where asset resides.' }),
    vcenterUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'vCenter URL used in collection.' }),
    vcenterVmId: z.string().exactOptional().openapi({ description: 'vCenter VM ID.' }),
    vmArchitecture: VirtualMachineArchitectureDetailsSchema.exactOptional().openapi({
      description: 'VM architecture details (vendor, cpu arch).',
    }),
    vmDisks: VirtualMachineDiskDetailsSchema.exactOptional().openapi({
      description: 'VM disk details.',
    }),
    vmName: z.string().exactOptional().openapi({ description: 'Virtual Machine display name.' }),
    vmNetwork: VirtualMachineNetworkDetailsSchema.exactOptional().openapi({
      description: 'VM network details.',
    }),
    vmUuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Virtual Machine unique identifier.' }),
  })
  .openapi({ description: 'Details of a VirtualMachine.', required: [] })
  .openapi('VirtualMachineDetails')

const AssetSchema = z
  .object({
    assignedGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The list of groups that the asset is assigned to.',
        readOnly: true,
      }),
    attributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Generic asset attributes.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the asset was created.',
        readOnly: true,
      }),
    insightList: InsightListSchema.exactOptional().openapi({
      description: 'Output only. The list of insights associated with the asset.',
      readOnly: true,
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The full name of the asset.', readOnly: true }),
    performanceData: AssetPerformanceDataSchema.exactOptional().openapi({
      description: 'Output only. Performance data for the asset.',
      readOnly: true,
    }),
    sources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The list of sources contributing to the asset.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the asset was last updated.',
        readOnly: true,
      }),
    virtualMachineDetails: VirtualMachineDetailsSchema.exactOptional().openapi({
      description: 'Output only. Asset information specific for virtual machines.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'An asset represents a resource in your environment. Asset types include virtual machines and databases.',
    required: [],
  })
  .openapi('Asset')

const CpuUsageSampleSchema = z
  .object({
    utilizedPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage.',
      }),
  })
  .openapi({ description: 'CPU usage sample.', required: [] })
  .openapi('CpuUsageSample')

const DiskUsageSampleSchema = z
  .object({
    averageIops: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Average IOPS sampled over a short window. Must be non-negative.' }),
  })
  .openapi({ description: 'Disk usage sample. Values are across all disks.', required: [] })
  .openapi('DiskUsageSample')

const MemoryUsageSampleSchema = z
  .object({
    utilizedPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Percentage of system memory utilized. Must be in the interval [0, 100].',
      }),
  })
  .openapi({ description: 'Memory usage sample.', required: [] })
  .openapi('MemoryUsageSample')

const NetworkUsageSampleSchema = z
  .object({
    averageEgressBps: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Average network egress in B/s sampled over a short window. Must be non-negative.',
      }),
    averageIngressBps: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Average network ingress in B/s sampled over a short window. Must be non-negative.',
      }),
  })
  .openapi({
    description: 'Network usage sample. Values are across all network interfaces.',
    required: [],
  })
  .openapi('NetworkUsageSample')

const PerformanceSampleSchema = z
  .object({
    cpu: CpuUsageSampleSchema.exactOptional().openapi({ description: 'CPU usage sample.' }),
    disk: DiskUsageSampleSchema.exactOptional().openapi({ description: 'Disk usage sample.' }),
    memory: MemoryUsageSampleSchema.exactOptional().openapi({
      description: 'Memory usage sample.',
    }),
    network: NetworkUsageSampleSchema.exactOptional().openapi({
      description: 'Network usage sample.',
    }),
    sampleTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the sample was collected.' }),
  })
  .openapi({ description: 'Performance data sample.', required: [] })
  .openapi('PerformanceSample')

const AssetFrameSchema = z
  .object({
    attributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Generic asset attributes.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    performanceSamples: z
      .array(PerformanceSampleSchema)
      .exactOptional()
      .openapi({ description: 'Asset performance data samples.' }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the data was reported.' }),
    traceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Trace token is optionally provided to assist with debugging and traceability.',
      }),
    virtualMachineDetails: VirtualMachineDetailsSchema.exactOptional().openapi({
      description: 'Asset information specific for virtual machines.',
    }),
  })
  .openapi({
    description: 'Contains data reported from an inventory source on an asset.',
    required: [],
  })
  .openapi('AssetFrame')

const BatchDeleteAssetsRequestSchema = z
  .object({
    allowMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`.',
      }),
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The IDs of the assets to delete. A maximum of 10 assets can be deleted in a batch. format: projects/{project}/locations/{location}/asset/{name}.',
      }),
  })
  .openapi({ description: 'A request to delete a list of asset.', required: [] })
  .openapi('BatchDeleteAssetsRequest')

const UpdateAssetRequestSchema = z
  .object({
    asset: AssetSchema.exactOptional().openapi({
      description: 'Required. The resource being updated.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.',
      }),
  })
  .openapi({ description: 'A request to update an asset.', required: [] })
  .openapi('UpdateAssetRequest')

const BatchUpdateAssetsRequestSchema = z
  .object({
    requests: z
      .array(UpdateAssetRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch.',
      }),
  })
  .openapi({ description: 'A request to update a list of assets.', required: [] })
  .openapi('BatchUpdateAssetsRequest')

const BatchUpdateAssetsResponseSchema = z
  .object({
    assets: z
      .array(AssetSchema)
      .exactOptional()
      .openapi({
        description:
          'Update asset content. The content only includes values after field mask being applied.',
      }),
  })
  .openapi({ description: 'Response for updating a list of assets.', required: [] })
  .openapi('BatchUpdateAssetsResponse')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const MachineSeriesSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.',
      }),
  })
  .openapi({ description: 'A Compute Engine machine series.', required: [] })
  .openapi('MachineSeries')

const MachinePreferencesSchema = z
  .object({
    allowedMachineSeries: z
      .array(MachineSeriesSchema)
      .exactOptional()
      .openapi({
        description:
          'Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.',
      }),
  })
  .openapi({
    description:
      'The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.',
    required: [],
  })
  .openapi('MachinePreferences')

const ComputeEnginePreferencesSchema = z
  .object({
    licenseType: z
      .enum([
        'LICENSE_TYPE_UNSPECIFIED',
        'LICENSE_TYPE_DEFAULT',
        'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE',
      ])
      .exactOptional()
      .openapi({
        description:
          'License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.',
      }),
    machinePreferences: MachinePreferencesSchema.exactOptional().openapi({
      description: 'Preferences concerning the machine types to consider on Compute Engine.',
    }),
    persistentDiskType: z
      .enum([
        'PERSISTENT_DISK_TYPE_UNSPECIFIED',
        'PERSISTENT_DISK_TYPE_STANDARD',
        'PERSISTENT_DISK_TYPE_BALANCED',
        'PERSISTENT_DISK_TYPE_SSD',
      ])
      .exactOptional()
      .openapi({
        description:
          'Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data.',
      }),
  })
  .openapi({
    description: 'The user preferences relating to Compute Engine target platform.',
    required: [],
  })
  .openapi('ComputeEnginePreferences')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ValidationReportSchema: z.ZodType<ValidationReportType> = z
  .lazy(() =>
    z
      .object({
        fileValidations: z
          .array(FileValidationReportSchema)
          .exactOptional()
          .openapi({ description: 'List of errors found in files.' }),
        jobErrors: z
          .array(ImportErrorSchema)
          .exactOptional()
          .openapi({ description: 'List of job level errors.' }),
      })
      .openapi({
        description: 'A resource that aggregates errors across import job files.',
        required: [],
      }),
  )
  .openapi('ValidationReport')

const ExecutionReportSchema = z
  .object({
    executionErrors: ValidationReportSchema.exactOptional().openapi({
      description: 'Validation errors encountered during the execution of the import job.',
    }),
    framesReported: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of asset frames reported for the import job.' }),
    jobErrors: z
      .array(ImportErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'List of job-level errors. Deprecated, use the job errors under execution_errors instead.',
      }),
    totalRowsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of rows in the import job.' }),
  })
  .openapi({
    description: 'A resource that reports result of the import job execution.',
    required: [],
  })
  .openapi('ExecutionReport')

const FramesSchema = z
  .object({
    framesData: z
      .array(AssetFrameSchema)
      .exactOptional()
      .openapi({ description: 'A repeated field of asset data.' }),
  })
  .openapi({ description: 'Collection of frame data.', required: [] })
  .openapi('Frames')

const GCSPayloadInfoSchema = z
  .object({
    format: z
      .enum([
        'IMPORT_JOB_FORMAT_UNSPECIFIED',
        'IMPORT_JOB_FORMAT_CMDB',
        'IMPORT_JOB_FORMAT_RVTOOLS_XLSX',
        'IMPORT_JOB_FORMAT_RVTOOLS_CSV',
        'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV',
        'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV',
        'IMPORT_JOB_FORMAT_MANUAL_CSV',
      ])
      .exactOptional()
      .openapi({ description: 'The import job format.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payload path in Google Cloud Storage.' }),
  })
  .openapi({
    description: 'A resource that represents a payload hosted on Google Cloud Storage.',
    required: [],
  })
  .openapi('GCSPayloadInfo')

const GroupSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the group was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    displayName: z.string().exactOptional().openapi({ description: 'User-friendly display name.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the group.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the group was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.',
    required: [],
  })
  .openapi('Group')

const UploadFileInfoSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The headers that were used to sign the URL.',
        readOnly: true,
      }),
    signedUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Upload URI for the file.', readOnly: true }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Upload URI for the file.', readOnly: true }),
    uriExpirationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Expiration time of the upload URI.', readOnly: true }),
  })
  .openapi({
    description: 'A resource that contains a URI to which a data file can be uploaded.',
    required: [],
  })
  .openapi('UploadFileInfo')

const ImportDataFileSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the file was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-friendly display name. Maximum length is 63 characters.' }),
    format: z
      .enum([
        'IMPORT_JOB_FORMAT_UNSPECIFIED',
        'IMPORT_JOB_FORMAT_CMDB',
        'IMPORT_JOB_FORMAT_RVTOOLS_XLSX',
        'IMPORT_JOB_FORMAT_RVTOOLS_CSV',
        'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV',
        'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV',
        'IMPORT_JOB_FORMAT_MANUAL_CSV',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The payload format.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the file.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE'])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the import data file.', readOnly: true }),
    uploadFileInfo: UploadFileInfoSchema.exactOptional().openapi({
      description: 'Information about a file that is uploaded to a storage service.',
    }),
  })
  .openapi({
    description: 'A resource that represents a payload file in an import job.',
    required: [],
  })
  .openapi('ImportDataFile')

const PayloadFileSchema = z
  .object({
    data: z.string().exactOptional().openapi({ description: 'The file data.' }),
    name: z.string().exactOptional().openapi({ description: 'The file name.' }),
  })
  .openapi({ description: 'Payload file for inline import job payload.', required: [] })
  .openapi('PayloadFile')

const InlinePayloadInfoSchema = z
  .object({
    format: z
      .enum([
        'IMPORT_JOB_FORMAT_UNSPECIFIED',
        'IMPORT_JOB_FORMAT_CMDB',
        'IMPORT_JOB_FORMAT_RVTOOLS_XLSX',
        'IMPORT_JOB_FORMAT_RVTOOLS_CSV',
        'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV',
        'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV',
        'IMPORT_JOB_FORMAT_MANUAL_CSV',
      ])
      .exactOptional()
      .openapi({ description: 'The import job format.' }),
    payload: z
      .array(PayloadFileSchema)
      .exactOptional()
      .openapi({ description: 'List of payload files.' }),
  })
  .openapi({
    description: 'A resource that represents the inline import job payload.',
    required: [],
  })
  .openapi('InlinePayloadInfo')

const ImportJobSchema = z
  .object({
    assetSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Reference to a source.' }),
    completeTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the import job was completed.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the import job was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-friendly display name. Maximum length is 63 characters.' }),
    executionReport: ExecutionReportSchema.exactOptional().openapi({
      description: 'Output only. The report with the results of running the import job.',
      readOnly: true,
    }),
    gcsPayload: GCSPayloadInfoSchema.exactOptional().openapi({
      description: 'The payload is in Google Cloud Storage.',
    }),
    inlinePayload: InlinePayloadInfoSchema.exactOptional().openapi({
      description: 'The payload is included in the request, mainly used for small import jobs.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The full name of the import job.', readOnly: true }),
    state: z
      .enum([
        'IMPORT_JOB_STATE_UNSPECIFIED',
        'IMPORT_JOB_STATE_PENDING',
        'IMPORT_JOB_STATE_RUNNING',
        'IMPORT_JOB_STATE_COMPLETED',
        'IMPORT_JOB_STATE_FAILED',
        'IMPORT_JOB_STATE_VALIDATING',
        'IMPORT_JOB_STATE_FAILED_VALIDATION',
        'IMPORT_JOB_STATE_READY',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the import job.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the import job was last updated.',
        readOnly: true,
      }),
    validationReport: ValidationReportSchema.exactOptional().openapi({
      description: 'Output only. The report with the validation results of the import job.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'A resource that represents the background job that imports asset frames.',
    required: [],
  })
  .openapi('ImportJob')

const ListAssetsResponseSchema = z
  .object({
    assets: z.array(AssetSchema).exactOptional().openapi({ description: 'A list of assets.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for listing assets.', required: [] })
  .openapi('ListAssetsResponse')

const ListGroupsResponseSchema = z
  .object({
    groups: z.array(GroupSchema).exactOptional().openapi({ description: 'The list of Group' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'A response for listing groups.', required: [] })
  .openapi('ListGroupsResponse')

const ListImportDataFilesResponseSchema = z
  .object({
    importDataFiles: z
      .array(ImportDataFileSchema)
      .exactOptional()
      .openapi({ description: 'The list of import data files.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for listing payload files of an import job.', required: [] })
  .openapi('ListImportDataFilesResponse')

const ListImportJobsResponseSchema = z
  .object({
    importJobs: z
      .array(ImportJobSchema)
      .exactOptional()
      .openapi({ description: 'The list of import jobs.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'A response for listing import jobs.', required: [] })
  .openapi('ListImportJobsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
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
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

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
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
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
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
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
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
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

const RegionPreferencesSchema = z
  .object({
    preferredRegions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.',
      }),
  })
  .openapi({ description: 'The user preferences relating to target regions.', required: [] })
  .openapi('RegionPreferences')

const VirtualMachinePreferencesSchema = z
  .object({
    commitmentPlan: z
      .enum([
        'COMMITMENT_PLAN_UNSPECIFIED',
        'COMMITMENT_PLAN_NONE',
        'COMMITMENT_PLAN_ONE_YEAR',
        'COMMITMENT_PLAN_THREE_YEARS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.',
      }),
    computeEnginePreferences: ComputeEnginePreferencesSchema.exactOptional().openapi({
      description:
        'Compute Engine preferences concern insights and recommendations for Compute Engine target.',
    }),
    regionPreferences: RegionPreferencesSchema.exactOptional().openapi({
      description:
        'Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with.',
    }),
    sizingOptimizationStrategy: z
      .enum([
        'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED',
        'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE',
        'SIZING_OPTIMIZATION_STRATEGY_MODERATE',
        'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.',
      }),
  })
  .openapi({
    description:
      'VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.',
    required: [],
  })
  .openapi('VirtualMachinePreferences')

const PreferenceSetSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the preference set was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the preference set.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-friendly display name. Maximum length is 63 characters.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the preference set.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the preference set was last updated.',
        readOnly: true,
      }),
    virtualMachinePreferences: VirtualMachinePreferencesSchema.exactOptional().openapi({
      description: 'A set of preferences that applies to all virtual machines in the context.',
    }),
  })
  .openapi({
    description: 'The preferences that apply to all assets in a given context.',
    required: [],
  })
  .openapi('PreferenceSet')

const ListPreferenceSetsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    preferenceSets: z
      .array(PreferenceSetSchema)
      .exactOptional()
      .openapi({ description: 'The list of PreferenceSets' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for listing preference sets.', required: [] })
  .openapi('ListPreferenceSetsResponse')

const ReportConfigGroupPreferenceSetAssignmentSchema = z
  .object({
    group: z.string().exactOptional().openapi({ description: 'Required. Name of the group.' }),
    preferenceSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the Preference Set.' }),
  })
  .openapi({
    description: 'Represents a combination of a group with a preference set.',
    required: [],
  })
  .openapi('ReportConfigGroupPreferenceSetAssignment')

const ReportConfigSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the resource was created.',
        readOnly: true,
      }),
    description: z.string().exactOptional().openapi({ description: 'Free-text description.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-friendly display name. Maximum length is 63 characters.' }),
    groupPreferencesetAssignments: z
      .array(ReportConfigGroupPreferenceSetAssignmentSchema)
      .exactOptional()
      .openapi({
        description: 'Required. Collection of combinations of groups and preference sets.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of resource.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the resource was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The groups and associated preference sets on which we can generate reports.',
    required: [],
  })
  .openapi('ReportConfig')

const ListReportConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    reportConfigs: z
      .array(ReportConfigSchema)
      .exactOptional()
      .openapi({ description: 'A list of report configs.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for listing report configs.', required: [] })
  .openapi('ListReportConfigsResponse')

const ReportSummaryChartDataDataPointSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The X-axis label for this data point.' }),
    value: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Y-axis value for this data point.' }),
  })
  .openapi({ description: 'Describes a single data point in the Chart.', required: [] })
  .openapi('ReportSummaryChartDataDataPoint')

const ReportSummaryChartDataSchema = z
  .object({
    dataPoints: z
      .array(ReportSummaryChartDataDataPointSchema)
      .exactOptional()
      .openapi({
        description:
          'Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value.',
      }),
  })
  .openapi({
    description: 'Describes a collection of data points rendered as a Chart.',
    required: [],
  })
  .openapi('ReportSummaryChartData')

const ReportSummaryHistogramChartDataBucketSchema = z
  .object({
    count: z.string().exactOptional().openapi({ description: 'Count of items in the bucket.' }),
    lowerBound: z.string().exactOptional().openapi({ description: 'Lower bound - inclusive.' }),
    upperBound: z.string().exactOptional().openapi({ description: 'Upper bound - exclusive.' }),
  })
  .openapi({
    description:
      'A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.',
    required: [],
  })
  .openapi('ReportSummaryHistogramChartDataBucket')

const ReportSummaryHistogramChartDataSchema = z
  .object({
    buckets: z
      .array(ReportSummaryHistogramChartDataBucketSchema)
      .exactOptional()
      .openapi({
        description:
          'Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.',
      }),
  })
  .openapi({
    description:
      'A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket.',
    required: [],
  })
  .openapi('ReportSummaryHistogramChartData')

const ReportSummaryUtilizationChartDataSchema = z
  .object({
    free: z
      .string()
      .exactOptional()
      .openapi({ description: 'Aggregate value which falls into the "Free" bucket.' }),
    used: z
      .string()
      .exactOptional()
      .openapi({ description: 'Aggregate value which falls into the "Used" bucket.' }),
  })
  .openapi({
    description:
      'Utilization Chart is a specific type of visualization which displays a metric classified into "Used" and "Free" buckets.',
    required: [],
  })
  .openapi('ReportSummaryUtilizationChartData')

const ReportSummaryAssetAggregateStatsSchema = z
  .object({
    assetAge: ReportSummaryChartDataSchema.exactOptional().openapi({
      description: 'Count of assets grouped by age.',
    }),
    coreCountHistogram: ReportSummaryHistogramChartDataSchema.exactOptional().openapi({
      description: 'Histogram showing a distribution of CPU core counts.',
    }),
    memoryBytesHistogram: ReportSummaryHistogramChartDataSchema.exactOptional().openapi({
      description: 'Histogram showing a distribution of memory sizes.',
    }),
    memoryUtilization: ReportSummaryChartDataSchema.exactOptional().openapi({
      description: 'Total memory split into Used/Free buckets.',
    }),
    memoryUtilizationChart: ReportSummaryUtilizationChartDataSchema.exactOptional().openapi({
      description: 'Total memory split into Used/Free buckets.',
    }),
    operatingSystem: ReportSummaryChartDataSchema.exactOptional().openapi({
      description: 'Count of assets grouped by Operating System families.',
    }),
    storageBytesHistogram: ReportSummaryHistogramChartDataSchema.exactOptional().openapi({
      description: 'Histogram showing a distribution of memory sizes.',
    }),
    storageUtilization: ReportSummaryChartDataSchema.exactOptional().openapi({
      description: 'Total storage split into Used/Free buckets.',
    }),
    storageUtilizationChart: ReportSummaryUtilizationChartDataSchema.exactOptional().openapi({
      description: 'Total memory split into Used/Free buckets.',
    }),
    totalAssets: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of the number of unique assets in this collection.' }),
    totalCores: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sum of the CPU core count of all the assets in this collection.' }),
    totalMemoryBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sum of the memory in bytes of all the assets in this collection.' }),
    totalStorageBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sum of persistent storage in bytes of all the assets in this collection.',
      }),
  })
  .openapi({ description: 'Aggregate statistics for a collection of assets.', required: [] })
  .openapi('ReportSummaryAssetAggregateStats')

const ReportSummaryMachineSeriesAllocationSchema = z
  .object({
    allocatedAssetCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of assets allocated to this machine series.' }),
    machineSeries: MachineSeriesSchema.exactOptional().openapi({
      description: 'The Machine Series (e.g. "E2", "N2")',
    }),
  })
  .openapi({
    description:
      'Represents a data point tracking the count of assets allocated for a specific Machine Series.',
    required: [],
  })
  .openapi('ReportSummaryMachineSeriesAllocation')

const ReportSummaryMachineFindingSchema = z
  .object({
    allocatedAssetCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of assets which were allocated.' }),
    allocatedDiskTypes: z
      .array(
        z.enum([
          'PERSISTENT_DISK_TYPE_UNSPECIFIED',
          'PERSISTENT_DISK_TYPE_STANDARD',
          'PERSISTENT_DISK_TYPE_BALANCED',
          'PERSISTENT_DISK_TYPE_SSD',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Set of disk types allocated to assets.' }),
    allocatedRegions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Set of regions in which the assets were allocated.' }),
    machineSeriesAllocations: z
      .array(ReportSummaryMachineSeriesAllocationSchema)
      .exactOptional()
      .openapi({ description: 'Distribution of assets based on the Machine Series.' }),
  })
  .openapi({
    description: 'A set of findings that applies to assets of type Virtual/Physical Machine.',
    required: [],
  })
  .openapi('ReportSummaryMachineFinding')

const MoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('Money')

const ReportSummaryGroupPreferenceSetFindingSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description for the Preference Set.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display Name of the Preference Set' }),
    machineFinding: ReportSummaryMachineFindingSchema.exactOptional().openapi({
      description: 'A set of findings that applies to all machines in the input.',
    }),
    machinePreferences: VirtualMachinePreferencesSchema.exactOptional().openapi({
      description: 'A set of preferences that applies to all machines in the context.',
    }),
    monthlyCostCompute: MoneySchema.exactOptional().openapi({
      description: 'Compute monthly cost for this preference set.',
    }),
    monthlyCostNetworkEgress: MoneySchema.exactOptional().openapi({
      description: 'Network Egress monthly cost for this preference set.',
    }),
    monthlyCostOsLicense: MoneySchema.exactOptional().openapi({
      description: 'Licensing monthly cost for this preference set.',
    }),
    monthlyCostOther: MoneySchema.exactOptional().openapi({
      description: 'Miscellaneous monthly cost for this preference set.',
    }),
    monthlyCostStorage: MoneySchema.exactOptional().openapi({
      description: 'Storage monthly cost for this preference set.',
    }),
    monthlyCostTotal: MoneySchema.exactOptional().openapi({
      description: 'Total monthly cost for this preference set.',
    }),
    preferredRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Target region for this Preference Set' }),
    pricingTrack: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text describing the pricing track specified for this Preference Set',
      }),
    topPriority: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text describing the business priority specified for this Preference Set',
      }),
  })
  .openapi({
    description: 'Summary Findings for a specific Group/PreferenceSet combination.',
    required: [],
  })
  .openapi('ReportSummaryGroupPreferenceSetFinding')

const ReportSummaryGroupFindingSchema = z
  .object({
    assetAggregateStats: ReportSummaryAssetAggregateStatsSchema.exactOptional().openapi({
      description: 'Summary statistics for all the assets in this group.',
    }),
    description: z.string().exactOptional().openapi({ description: 'Description for the Group.' }),
    displayName: z.string().exactOptional().openapi({ description: 'Display Name for the Group.' }),
    overlappingAssetCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of the number of assets in this group which are also included in another group within the same report.',
      }),
    preferenceSetFindings: z
      .array(ReportSummaryGroupPreferenceSetFindingSchema)
      .exactOptional()
      .openapi({ description: 'Findings for each of the PreferenceSets for this group.' }),
  })
  .openapi({ description: 'Summary Findings for a specific Group.', required: [] })
  .openapi('ReportSummaryGroupFinding')

const ReportSummarySchema = z
  .object({
    allAssetsStats: ReportSummaryAssetAggregateStatsSchema.exactOptional().openapi({
      description: 'Aggregate statistics for all the assets across all the groups.',
    }),
    groupFindings: z
      .array(ReportSummaryGroupFindingSchema)
      .exactOptional()
      .openapi({ description: 'Findings for each Group included in this report.' }),
  })
  .openapi({
    description:
      'Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report.',
    required: [],
  })
  .openapi('ReportSummary')

const ReportSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp.', readOnly: true }),
    description: z.string().exactOptional().openapi({ description: 'Free-text description.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-friendly display name. Maximum length is 63 characters.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of resource.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'SUCCEEDED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Report creation state.' }),
    summary: ReportSummarySchema.exactOptional().openapi({
      description: 'Output only. Summary view of the Report.',
      readOnly: true,
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TOTAL_COST_OF_OWNERSHIP'])
      .exactOptional()
      .openapi({ description: 'Report type.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update timestamp.', readOnly: true }),
  })
  .openapi({
    description: 'Report represents a point-in-time rendering of the ReportConfig results.',
    required: [],
  })
  .openapi('Report')

const ListReportsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    reports: z.array(ReportSchema).exactOptional().openapi({ description: 'The list of Reports.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for listing Reports.', required: [] })
  .openapi('ListReportsResponse')

const SourceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the source was created.',
        readOnly: true,
      }),
    description: z.string().exactOptional().openapi({ description: 'Free-text description.' }),
    displayName: z.string().exactOptional().openapi({ description: 'User-friendly display name.' }),
    isManaged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, the source is managed by other service(s).' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The full name of the source.', readOnly: true }),
    pendingFrameCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of frames that are still being processed.',
        readOnly: true,
      }),
    priority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The information confidence of the source. The higher the value, the higher the confidence.',
      }),
    type: z
      .enum([
        'SOURCE_TYPE_UNKNOWN',
        'SOURCE_TYPE_UPLOAD',
        'SOURCE_TYPE_GUEST_OS_SCAN',
        'SOURCE_TYPE_INVENTORY_SCAN',
        'SOURCE_TYPE_CUSTOM',
      ])
      .exactOptional()
      .openapi({ description: 'Data source type.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the source was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Source represents an object from which asset information is streamed to Migration Center.',
    required: [],
  })
  .openapi('Source')

const ListSourcesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    sources: z.array(SourceSchema).exactOptional().openapi({ description: 'The list of sources.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for listing sources.', required: [] })
  .openapi('ListSourcesResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('OperationMetadata')

const RemoveAssetsFromGroupRequestSchema = z
  .object({
    allowMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.',
      }),
    assets: AssetListSchema.exactOptional().openapi({
      description:
        'Required. List of assets to be removed. The maximum number of assets that can be removed in a single request is 1000.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
  })
  .openapi({ description: 'A request to remove assets from a group.', required: [] })
  .openapi('RemoveAssetsFromGroupRequest')

const ReportAssetFramesResponseSchema = z
  .object({})
  .openapi({ description: 'A response to a call to `ReportAssetFrame`.' })
  .openapi('ReportAssetFramesResponse')

const RunImportJobRequestSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
  })
  .openapi({ description: 'A request to run an import job.', required: [] })
  .openapi('RunImportJobRequest')

const SettingsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the resource.', readOnly: true }),
    preferenceSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'The preference set used by default for a project.' }),
  })
  .openapi({
    description: 'Describes the Migration Center settings related to the project.',
    required: [],
  })
  .openapi('Settings')

const ValidateImportJobRequestSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
  })
  .openapi({ description: 'A request to validate an import job.', required: [] })
  .openapi('ValidateImportJobRequest')

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

export const postV1alpha1GroupAddAssetsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{group}:addAssets',
  tags: ['projects'],
  description: 'Adds assets to a group.',
  operationId: 'migrationcenter.projects.locations.groups.addAssets',
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
      group: z
        .string()
        .openapi({
          param: {
            description: 'Required. Group reference.',
            in: 'path',
            name: 'group',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddAssetsToGroupRequestSchema } } },
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

export const postV1alpha1GroupRemoveAssetsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{group}:removeAssets',
  tags: ['projects'],
  description: 'Removes assets from a group.',
  operationId: 'migrationcenter.projects.locations.groups.removeAssets',
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
      group: z
        .string()
        .openapi({
          param: {
            description: 'Required. Group reference.',
            in: 'path',
            name: 'group',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveAssetsFromGroupRequestSchema } } },
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

export const getV1alpha1NameRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description: 'Gets the details of a source.',
  operationId: 'migrationcenter.projects.locations.sources.get',
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
      view: z
        .enum([
          'REPORT_VIEW_UNSPECIFIED',
          'REPORT_VIEW_BASIC',
          'REPORT_VIEW_FULL',
          'REPORT_VIEW_STANDARD',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Determines what information to retrieve for the Report.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'REPORT_VIEW_UNSPECIFIED',
                'REPORT_VIEW_BASIC',
                'REPORT_VIEW_FULL',
                'REPORT_VIEW_STANDARD',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the resource.',
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
      content: { 'application/json': { schema: SourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1alpha1NameRoute = createRoute({
  method: 'delete',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description: 'Deletes a source.',
  operationId: 'migrationcenter.projects.locations.sources.delete',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
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
            description: 'Required. Name of the resource.',
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

export const patchV1alpha1NameRoute = createRoute({
  method: 'patch',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description: 'Updates the parameters of a source.',
  operationId: 'migrationcenter.projects.locations.sources.patch',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
              'Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.',
            in: 'query',
            name: 'updateMask',
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
            description: 'Output only. The full name of the source.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SourceSchema } } },
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

export const getV1alpha1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'migrationcenter.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
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
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
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
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
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
            description: 'The resource that owns the locations collection, if applicable.',
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
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'migrationcenter.projects.locations.operations.list',
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
            description: 'The standard list filter.',
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
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'migrationcenter.projects.locations.operations.cancel',
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
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
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

export const postV1alpha1NameRunRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:run',
  tags: ['projects'],
  description: 'Runs an import job.',
  operationId: 'migrationcenter.projects.locations.importJobs.run',
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
            description: 'Required. The name of the import job to run.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunImportJobRequestSchema } } },
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

export const postV1alpha1NameValidateRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:validate',
  tags: ['projects'],
  description: 'Validates an import job.',
  operationId: 'migrationcenter.projects.locations.importJobs.validate',
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
            description: 'Required. The name of the import job to validate.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ValidateImportJobRequestSchema } } },
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

export const getV1alpha1ParentAssetsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/assets',
  tags: ['projects'],
  description: 'Lists all the assets in a given project and location.',
  operationId: 'migrationcenter.projects.locations.assets.list',
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
            description: 'Filtering results.',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum([
          'ASSET_VIEW_UNSPECIFIED',
          'ASSET_VIEW_BASIC',
          'ASSET_VIEW_FULL',
          'ASSET_VIEW_STANDARD',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'View of the assets. Defaults to BASIC.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'ASSET_VIEW_UNSPECIFIED',
                'ASSET_VIEW_BASIC',
                'ASSET_VIEW_FULL',
                'ASSET_VIEW_STANDARD',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for `ListAssetsRequest`.',
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
      content: { 'application/json': { schema: ListAssetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentAssetsAggregateValuesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/assets:aggregateValues',
  tags: ['projects'],
  description: 'Aggregates the requested fields based on provided function.',
  operationId: 'migrationcenter.projects.locations.assets.aggregateValues',
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
            description: 'Required. Parent value for `AggregateAssetsValuesRequest`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AggregateAssetsValuesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AggregateAssetsValuesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentAssetsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/assets:batchDelete',
  tags: ['projects'],
  description: 'Deletes list of Assets.',
  operationId: 'migrationcenter.projects.locations.assets.batchDelete',
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
            description: 'Required. Parent value for batch asset delete.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchDeleteAssetsRequestSchema } } },
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

export const postV1alpha1ParentAssetsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/assets:batchUpdate',
  tags: ['projects'],
  description: 'Updates the parameters of a list of assets.',
  operationId: 'migrationcenter.projects.locations.assets.batchUpdate',
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
            description: 'Required. Parent value for batch asset update.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchUpdateAssetsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUpdateAssetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentAssetsReportAssetFramesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/assets:reportAssetFrames',
  tags: ['projects'],
  description: 'Reports a set of frames.',
  operationId: 'migrationcenter.projects.locations.assets.reportAssetFrames',
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
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Reference to a source.',
            in: 'query',
            name: 'source',
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
            description: 'Required. Parent of the resource.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FramesSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportAssetFramesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1ParentGroupsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/groups',
  tags: ['projects'],
  description: 'Lists all groups in a given project and location.',
  operationId: 'migrationcenter.projects.locations.groups.list',
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
            description: 'Filtering results.',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
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
            description: 'Required. Parent value for `ListGroupsRequest`.',
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
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentGroupsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/groups',
  tags: ['projects'],
  description: 'Creates a new group in a given project and location.',
  operationId: 'migrationcenter.projects.locations.groups.create',
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
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.',
            in: 'query',
            name: 'groupId',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. Value for parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupSchema } } },
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

export const getV1alpha1ParentImportDataFilesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/importDataFiles',
  tags: ['projects'],
  description: 'List import data files.',
  operationId: 'migrationcenter.projects.locations.importJobs.importDataFiles.list',
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
            description: 'Filtering results.',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token.',
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
            description: 'Required. Name of the parent of the `ImportDataFiles` resource.',
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
      content: { 'application/json': { schema: ListImportDataFilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentImportDataFilesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/importDataFiles',
  tags: ['projects'],
  description: 'Creates an import data file.',
  operationId: 'migrationcenter.projects.locations.importJobs.importDataFiles.create',
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
      importDataFileId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The ID of the new data file.',
            in: 'query',
            name: 'importDataFileId',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. Name of the parent of the ImportDataFile.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportDataFileSchema } } },
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

export const getV1alpha1ParentImportJobsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/importJobs',
  tags: ['projects'],
  description: 'Lists all import jobs.',
  operationId: 'migrationcenter.projects.locations.importJobs.list',
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
            description: 'Filtering results.',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['IMPORT_JOB_VIEW_UNSPECIFIED', 'IMPORT_JOB_VIEW_BASIC', 'IMPORT_JOB_VIEW_FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The level of details of each import job. Default value is BASIC.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'IMPORT_JOB_VIEW_UNSPECIFIED',
                'IMPORT_JOB_VIEW_BASIC',
                'IMPORT_JOB_VIEW_FULL',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for `ListImportJobsRequest`.',
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
      content: { 'application/json': { schema: ListImportJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentImportJobsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/importJobs',
  tags: ['projects'],
  description: 'Creates an import job.',
  operationId: 'migrationcenter.projects.locations.importJobs.create',
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
      importJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID of the import job.',
            in: 'query',
            name: 'importJobId',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. Value for parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportJobSchema } } },
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

export const getV1alpha1ParentPreferenceSetsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/preferenceSets',
  tags: ['projects'],
  description: 'Lists all the preference sets in a given project and location.',
  operationId: 'migrationcenter.projects.locations.preferenceSets.list',
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
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description: 'A token identifying a page of results the server should return.',
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
            description: 'Required. Parent value for `ListPreferenceSetsRequest`.',
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
      content: { 'application/json': { schema: ListPreferenceSetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentPreferenceSetsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/preferenceSets',
  tags: ['projects'],
  description: 'Creates a new preference set in a given project and location.',
  operationId: 'migrationcenter.projects.locations.preferenceSets.create',
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
      preferenceSetId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'preferenceSetId',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. Value for parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PreferenceSetSchema } } },
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

export const getV1alpha1ParentReportConfigsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/reportConfigs',
  tags: ['projects'],
  description: 'Lists ReportConfigs in a given project and location.',
  operationId: 'migrationcenter.projects.locations.reportConfigs.list',
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
            description: 'Filtering results.',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
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
            description: 'Required. Parent value for `ListReportConfigsRequest`.',
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
      content: { 'application/json': { schema: ListReportConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentReportConfigsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/reportConfigs',
  tags: ['projects'],
  description: 'Creates a report configuration.',
  operationId: 'migrationcenter.projects.locations.reportConfigs.create',
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
      reportConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.',
            in: 'query',
            name: 'reportConfigId',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. Value for parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportConfigSchema } } },
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

export const getV1alpha1ParentReportsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/reports',
  tags: ['projects'],
  description: 'Lists Reports in a given ReportConfig.',
  operationId: 'migrationcenter.projects.locations.reportConfigs.reports.list',
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
            description: 'Filtering results.',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.',
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
            description: 'A token identifying a page of results that the server should return.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum([
          'REPORT_VIEW_UNSPECIFIED',
          'REPORT_VIEW_BASIC',
          'REPORT_VIEW_FULL',
          'REPORT_VIEW_STANDARD',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Determines what information to retrieve for each Report.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'REPORT_VIEW_UNSPECIFIED',
                'REPORT_VIEW_BASIC',
                'REPORT_VIEW_FULL',
                'REPORT_VIEW_STANDARD',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for `ListReportsRequest`.',
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
      content: { 'application/json': { schema: ListReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentReportsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/reports',
  tags: ['projects'],
  description: 'Creates a report.',
  operationId: 'migrationcenter.projects.locations.reportConfigs.reports.create',
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
      reportId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.',
            in: 'query',
            name: 'reportId',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. Value for parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportSchema } } },
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

export const getV1alpha1ParentSourcesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/sources',
  tags: ['projects'],
  description: 'Lists all the sources in a given project and location.',
  operationId: 'migrationcenter.projects.locations.sources.list',
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
            description: 'Filtering results.',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.',
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
            description: 'A token identifying a page of results that the server should return.',
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
            description: 'Required. Parent value for `ListSourcesRequest`.',
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
      content: { 'application/json': { schema: ListSourcesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentSourcesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/sources',
  tags: ['projects'],
  description: 'Creates a new source in a given project and location.',
  operationId: 'migrationcenter.projects.locations.sources.create',
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
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.',
            in: 'query',
            name: 'sourceId',
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
            description: 'Required. Value for parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SourceSchema } } },
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
