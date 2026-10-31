import { createRoute, z } from '@hono/zod-openapi'

const DeleteRecommendationPreferencesResponseSchema = z
  .object({})
  .openapi('DeleteRecommendationPreferencesResponse')

const ResourceTypeSchema = z
  .enum([
    'Ec2Instance',
    'AutoScalingGroup',
    'EbsVolume',
    'LambdaFunction',
    'NotApplicable',
    'EcsService',
  ])
  .openapi('ResourceType')

const ScopeNameSchema = z.enum(['Organization', 'AccountId', 'ResourceArn']).openapi('ScopeName')

const ScopeValueSchema = z.string().openapi('ScopeValue')

const ScopeSchema = z
  .object({
    name: ScopeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the scope.</p> <p>The following scopes are possible:</p> <ul> <li> <p> <code>Organization</code> - Specifies that the recommendation preference applies at the organization level, for all member accounts of an organization.</p> </li> <li> <p> <code>AccountId</code> - Specifies that the recommendation preference applies at the account level, for all resources of a given resource type in an account.</p> </li> <li> <p> <code>ResourceArn</code> - Specifies that the recommendation preference applies at the individual resource level.</p> </li> </ul>',
        }),
    ).exactOptional(),
    value: ScopeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the scope.</p> <p>If you specified the <code>name</code> of the scope as:</p> <ul> <li> <p> <code>Organization</code> - The <code>value</code> must be <code>ALL_ACCOUNTS</code>.</p> </li> <li> <p> <code>AccountId</code> - The <code>value</code> must be a 12-digit Amazon Web Services account ID.</p> </li> <li> <p> <code>ResourceArn</code> - The <code>value</code> must be the Amazon Resource Name (ARN) of an EC2 instance or an Auto Scaling group.</p> </li> </ul> <p>Only EC2 instance and Auto Scaling group ARNs are currently supported.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the scope of a recommendation preference.</p> <p>Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p> <note> <p>You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of <code>ResourceArn</code> and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances.</p> </note>',
    required: [],
  })
  .openapi('Scope')

const RecommendationPreferenceNameSchema = z
  .enum(['EnhancedInfrastructureMetrics', 'InferredWorkloadTypes', 'ExternalMetricsPreference'])
  .openapi('RecommendationPreferenceName')

const RecommendationPreferenceNamesSchema = z
  .array(RecommendationPreferenceNameSchema)
  .openapi('RecommendationPreferenceNames')

const DeleteRecommendationPreferencesRequestSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target resource type of the recommendation preference to delete.</p> <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option encompasses only instances that are part of an Auto Scaling group.</p> <note> <p>The valid values for this parameter are <code>Ec2Instance</code> and <code>AutoScalingGroup</code>.</p> </note>',
        }),
    ),
    scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the scope of the recommendation preference to delete.</p> <p>You can delete recommendation preferences that are created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    recommendationPreferenceNames: RecommendationPreferenceNamesSchema.and(
      z.any().openapi({ description: 'The name of the recommendation preference to delete.' }),
    ),
  })
  .openapi({
    required: ['resourceType', 'recommendationPreferenceNames'],
    title: 'DeleteRecommendationPreferencesRequest',
  })
  .openapi('DeleteRecommendationPreferencesRequest')

const OptInRequiredExceptionSchema = z.any().openapi('OptInRequiredException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const MissingAuthenticationTokenSchema = z.any().openapi('MissingAuthenticationToken')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const JobIdSchema = z.string().openapi('JobId')

const DestinationBucketSchema = z.string().openapi('DestinationBucket')

const DestinationKeySchema = z.string().openapi('DestinationKey')

const MetadataKeySchema = z.string().openapi('MetadataKey')

const S3DestinationSchema = z
  .object({
    bucket: DestinationBucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket used as the destination of an export file.',
        }),
    ).exactOptional(),
    key: DestinationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 bucket key of an export file.</p> <p>The key uniquely identifies the object, or export file, in the S3 bucket.</p>',
        }),
    ).exactOptional(),
    metadataKey: MetadataKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 bucket key of a metadata file.</p> <p>The key uniquely identifies the object, or metadata file, in the S3 bucket.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.',
    required: [],
  })
  .openapi('S3Destination')

const ExportDestinationSchema = z
  .object({
    s3: S3DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the destination of the recommendations export and metadata files.',
    required: [],
  })
  .openapi('ExportDestination')

const JobStatusSchema = z.enum(['Queued', 'InProgress', 'Complete', 'Failed']).openapi('JobStatus')

const CreationTimestampSchema = z.iso.datetime({ offset: true }).openapi('CreationTimestamp')

const LastUpdatedTimestampSchema = z.iso.datetime({ offset: true }).openapi('LastUpdatedTimestamp')

const FailureReasonSchema = z.string().openapi('FailureReason')

const RecommendationExportJobSchema = z
  .object({
    jobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identification number of the export job.' }),
    ).exactOptional(),
    destination: ExportDestinationSchema.and(
      z
        .any()
        .openapi({ description: 'An object that describes the destination of the export file.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type of the exported recommendations.' }),
    ).exactOptional(),
    status: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the export job.' }),
    ).exactOptional(),
    creationTimestamp: CreationTimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the export job was created.' }),
    ).exactOptional(),
    lastUpdatedTimestamp: LastUpdatedTimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the export job was last updated.' }),
    ).exactOptional(),
    failureReason: FailureReasonSchema.and(
      z.any().openapi({ description: 'The reason for an export job failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>',
    required: [],
  })
  .openapi('RecommendationExportJob')

const RecommendationExportJobsSchema = z
  .array(RecommendationExportJobSchema)
  .openapi('RecommendationExportJobs')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeRecommendationExportJobsResponseSchema = z
  .object({
    recommendationExportJobs: RecommendationExportJobsSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe recommendation export jobs.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of export jobs.</p> <p>This value is null when there are no more pages of export jobs to return.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecommendationExportJobsResponse')

const JobIdsSchema = z.array(JobIdSchema).openapi('JobIds')

const JobFilterNameSchema = z.enum(['ResourceType', 'JobStatus']).openapi('JobFilterName')

const FilterValueSchema = z.string().openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).openapi('FilterValues')

const JobFilterSchema = z
  .object({
    name: JobFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the filter.</p> <p>Specify <code>ResourceType</code> to return export jobs of a specific resource type (for example, <code>Ec2Instance</code>).</p> <p>Specify <code>JobStatus</code> to return export jobs with a specific status (e.g, <code>Complete</code>).</p>',
        }),
    ).exactOptional(),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the filter.</p> <p>The valid values for this parameter are as follows, depending on what you specify for the <code>name</code> parameter:</p> <ul> <li> <p>Specify <code>Ec2Instance</code> or <code>AutoScalingGroup</code> if you specify the <code>name</code> parameter as <code>ResourceType</code>. There is no filter for EBS volumes because volume recommendations cannot be exported at this time.</p> </li> <li> <p>Specify <code>Queued</code>, <code>InProgress</code>, <code>Complete</code>, or <code>Failed</code> if you specify the <code>name</code> parameter as <code>JobStatus</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a filter that returns a more specific list of recommendation export jobs. Use this filter with the <a>DescribeRecommendationExportJobs</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>',
    required: [],
  })
  .openapi('JobFilter')

const JobFiltersSchema = z.array(JobFilterSchema).openapi('JobFilters')

const MaxResultsSchema = z.int().min(0).max(1000).openapi('MaxResults')

const DescribeRecommendationExportJobsRequestSchema = z
  .object({
    jobIds: JobIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identification numbers of the export jobs to return.</p> <p>An export job ID is returned when you create an export using the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions.</p> <p>All export jobs created in the last seven days are returned if this parameter is omitted.</p>',
        }),
    ).exactOptional(),
    filters: JobFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that returns a more specific list of export jobs.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to advance to the next page of export jobs.' }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of export jobs to return with a single request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRecommendationExportJobsRequest', required: [] })
  .openapi('DescribeRecommendationExportJobsRequest')

const ExportAutoScalingGroupRecommendationsResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identification number of the export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job ID to view the status of an export job.</p>',
        }),
    ).exactOptional(),
    s3Destination: S3DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the destination Amazon S3 bucket of a recommendations export file.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportAutoScalingGroupRecommendationsResponse')

const AccountIdSchema = z.string().openapi('AccountId')

const AccountIdsSchema = z.array(AccountIdSchema).openapi('AccountIds')

const FilterNameSchema = z
  .enum(['Finding', 'FindingReasonCodes', 'RecommendationSourceType'])
  .openapi('FilterName')

const FilterSchema = z
  .object({
    name: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the filter.</p> <p>Specify <code>Finding</code> to return recommendations with a specific finding classification (for example, <code>Underprovisioned</code>).</p> <p>Specify <code>RecommendationSourceType</code> to return recommendations of a specific resource type (for example, <code>Ec2Instance</code>).</p> <p>Specify <code>FindingReasonCodes</code> to return recommendations with a specific finding reason code (for example, <code>CPUUnderprovisioned</code>).</p>',
        }),
    ).exactOptional(),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value of the filter.</p> <p>The valid values for this parameter are as follows, depending on what you specify for the <code>name</code> parameter and the resource type that you wish to filter results for:</p> <ul> <li> <p>Specify <code>Optimized</code> or <code>NotOptimized</code> if you specify the <code>name</code> parameter as <code>Finding</code> and you want to filter results for Auto Scaling groups.</p> </li> <li> <p>Specify <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code> if you specify the <code>name</code> parameter as <code>Finding</code> and you want to filter results for EC2 instances.</p> </li> <li> <p>Specify <code>Ec2Instance</code> or <code>AutoScalingGroup</code> if you specify the <code>name</code> parameter as <code>RecommendationSourceType</code>.</p> </li> <li> <p>Specify one of the following options if you specify the <code>name</code> parameter as <code>FindingReasonCodes</code>:</p> <ul> <li> <p> <b> <code>CPUOverprovisioned</code> </b> — The instance’s CPU configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>CPUUnderprovisioned</code> </b> — The instance’s CPU configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better CPU performance.</p> </li> <li> <p> <b> <code>MemoryOverprovisioned</code> </b> — The instance’s memory configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>MemoryUnderprovisioned</code> </b> — The instance’s memory configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better memory performance.</p> </li> <li> <p> <b> <code>EBSThroughputOverprovisioned</code> </b> — The instance’s EBS throughput configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>EBSThroughputUnderprovisioned</code> </b> — The instance’s EBS throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS throughput performance.</p> </li> <li> <p> <b> <code>EBSIOPSOverprovisioned</code> </b> — The instance’s EBS IOPS configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>EBSIOPSUnderprovisioned</code> </b> — The instance’s EBS IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS IOPS performance.</p> </li> <li> <p> <b> <code>NetworkBandwidthOverprovisioned</code> </b> — The instance’s network bandwidth configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>NetworkBandwidthUnderprovisioned</code> </b> — The instance’s network bandwidth configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network bandwidth performance. This finding reason happens when the <code>NetworkIn</code> or <code>NetworkOut</code> performance of an instance is impacted.</p> </li> <li> <p> <b> <code>NetworkPPSOverprovisioned</code> </b> — The instance’s network PPS (packets per second) configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>NetworkPPSUnderprovisioned</code> </b> — The instance’s network PPS (packets per second) configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network PPS performance.</p> </li> <li> <p> <b> <code>DiskIOPSOverprovisioned</code> </b> — The instance’s disk IOPS configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>DiskIOPSUnderprovisioned</code> </b> — The instance’s disk IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk IOPS performance.</p> </li> <li> <p> <b> <code>DiskThroughputOverprovisioned</code> </b> — The instance’s disk throughput configuration can be sized down while still meeting the performance requirements of your workload.</p> </li> <li> <p> <b> <code>DiskThroughputUnderprovisioned</code> </b> — The instance’s disk throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk throughput performance.</p> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a filter that returns a more specific list of recommendations. Use this filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action.</p>',
    required: [],
  })
  .openapi('Filter')

const FiltersSchema = z.array(FilterSchema).openapi('Filters')

const ExportableAutoScalingGroupFieldSchema = z
  .enum([
    'AccountId',
    'AutoScalingGroupArn',
    'AutoScalingGroupName',
    'Finding',
    'UtilizationMetricsCpuMaximum',
    'UtilizationMetricsMemoryMaximum',
    'UtilizationMetricsEbsReadOpsPerSecondMaximum',
    'UtilizationMetricsEbsWriteOpsPerSecondMaximum',
    'UtilizationMetricsEbsReadBytesPerSecondMaximum',
    'UtilizationMetricsEbsWriteBytesPerSecondMaximum',
    'UtilizationMetricsDiskReadOpsPerSecondMaximum',
    'UtilizationMetricsDiskWriteOpsPerSecondMaximum',
    'UtilizationMetricsDiskReadBytesPerSecondMaximum',
    'UtilizationMetricsDiskWriteBytesPerSecondMaximum',
    'UtilizationMetricsNetworkInBytesPerSecondMaximum',
    'UtilizationMetricsNetworkOutBytesPerSecondMaximum',
    'UtilizationMetricsNetworkPacketsInPerSecondMaximum',
    'UtilizationMetricsNetworkPacketsOutPerSecondMaximum',
    'LookbackPeriodInDays',
    'CurrentConfigurationInstanceType',
    'CurrentConfigurationDesiredCapacity',
    'CurrentConfigurationMinSize',
    'CurrentConfigurationMaxSize',
    'CurrentOnDemandPrice',
    'CurrentStandardOneYearNoUpfrontReservedPrice',
    'CurrentStandardThreeYearNoUpfrontReservedPrice',
    'CurrentVCpus',
    'CurrentMemory',
    'CurrentStorage',
    'CurrentNetwork',
    'RecommendationOptionsConfigurationInstanceType',
    'RecommendationOptionsConfigurationDesiredCapacity',
    'RecommendationOptionsConfigurationMinSize',
    'RecommendationOptionsConfigurationMaxSize',
    'RecommendationOptionsProjectedUtilizationMetricsCpuMaximum',
    'RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum',
    'RecommendationOptionsPerformanceRisk',
    'RecommendationOptionsOnDemandPrice',
    'RecommendationOptionsStandardOneYearNoUpfrontReservedPrice',
    'RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice',
    'RecommendationOptionsVcpus',
    'RecommendationOptionsMemory',
    'RecommendationOptionsStorage',
    'RecommendationOptionsNetwork',
    'LastRefreshTimestamp',
    'CurrentPerformanceRisk',
    'RecommendationOptionsSavingsOpportunityPercentage',
    'RecommendationOptionsEstimatedMonthlySavingsCurrency',
    'RecommendationOptionsEstimatedMonthlySavingsValue',
    'EffectiveRecommendationPreferencesCpuVendorArchitectures',
    'EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics',
    'EffectiveRecommendationPreferencesInferredWorkloadTypes',
    'InferredWorkloadTypes',
    'RecommendationOptionsMigrationEffort',
  ])
  .openapi('ExportableAutoScalingGroupField')

const ExportableAutoScalingGroupFieldsSchema = z
  .array(ExportableAutoScalingGroupFieldSchema)
  .openapi('ExportableAutoScalingGroupFields')

const DestinationKeyPrefixSchema = z.string().openapi('DestinationKeyPrefix')

const S3DestinationConfigSchema = z
  .object({
    bucket: DestinationBucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket to use as the destination for an export job.',
        }),
    ).exactOptional(),
    keyPrefix: DestinationKeyPrefixSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket prefix for an export job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>',
    required: [],
  })
  .openapi('S3DestinationConfig')

const FileFormatSchema = z.literal('Csv').openapi('FileFormat')

const IncludeMemberAccountsSchema = z.boolean().openapi('IncludeMemberAccounts')

const CpuVendorArchitectureSchema = z
  .enum(['AWS_ARM64', 'CURRENT'])
  .openapi('CpuVendorArchitecture')

const CpuVendorArchitecturesSchema = z
  .array(CpuVendorArchitectureSchema)
  .openapi('CpuVendorArchitectures')

const RecommendationPreferencesSchema = z
  .object({
    cpuVendorArchitectures: CpuVendorArchitecturesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the CPU vendor and architecture for Amazon EC2 instance and Auto Scaling group recommendations.</p> <p>For example, when you specify <code>AWS_ARM64</code> with:</p> <ul> <li> <p>A <a>GetEC2InstanceRecommendations</a> or <a>GetAutoScalingGroupRecommendations</a> request, Compute Optimizer returns recommendations that consist of Graviton2 instance types only.</p> </li> <li> <p>A <a>GetEC2RecommendationProjectedMetrics</a> request, Compute Optimizer returns projected utilization metrics for Graviton2 instance type recommendations only.</p> </li> <li> <p>A <a>ExportEC2InstanceRecommendations</a> or <a>ExportAutoScalingGroupRecommendations</a> request, Compute Optimizer exports recommendations that consist of Graviton2 instance types only.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, and <a>GetEC2RecommendationProjectedMetrics</a> request.',
    required: [],
  })
  .openapi('RecommendationPreferences')

const ExportAutoScalingGroupRecommendationsRequestSchema = z
  .object({
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the Amazon Web Services accounts for which to export Auto Scaling group recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.</p> <p>This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.</p> <p>You can specify multiple account IDs per request.</p>',
        }),
    ).exactOptional(),
    filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that exports a more specific set of Auto Scaling group recommendations.',
        }),
    ).exactOptional(),
    fieldsToExport: ExportableAutoScalingGroupFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendations data to include in the export file. For more information about the fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User Guide</i>.',
        }),
    ).exactOptional(),
    s3DestinationConfig: S3DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permissions policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ),
    fileFormat: FileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the export file.</p> <p>The only export file format currently supported is <code>Csv</code>.</p>',
        }),
    ).exactOptional(),
    includeMemberAccounts: IncludeMemberAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.</p> <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.</p> <p>This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.</p>',
        }),
    ).exactOptional(),
    recommendationPreferences: RecommendationPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object to specify the preferences for the Auto Scaling group recommendations to export.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['s3DestinationConfig'],
    title: 'ExportAutoScalingGroupRecommendationsRequest',
  })
  .openapi('ExportAutoScalingGroupRecommendationsRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ExportEBSVolumeRecommendationsResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identification number of the export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job ID to view the status of an export job.</p>',
        }),
    ).exactOptional(),
    s3Destination: S3DestinationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportEBSVolumeRecommendationsResponse')

const EBSFilterNameSchema = z.literal('Finding').openapi('EBSFilterName')

const EBSFilterSchema = z
  .object({
    name: EBSFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the filter.</p> <p>Specify <code>Finding</code> to return recommendations with a specific finding classification (for example, <code>NotOptimized</code>).</p>',
        }),
    ).exactOptional(),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the filter.</p> <p>The valid values are <code>Optimized</code>, or <code>NotOptimized</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p> <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>',
    required: [],
  })
  .openapi('EBSFilter')

const EBSFiltersSchema = z.array(EBSFilterSchema).openapi('EBSFilters')

const ExportableVolumeFieldSchema = z
  .enum([
    'AccountId',
    'VolumeArn',
    'Finding',
    'UtilizationMetricsVolumeReadOpsPerSecondMaximum',
    'UtilizationMetricsVolumeWriteOpsPerSecondMaximum',
    'UtilizationMetricsVolumeReadBytesPerSecondMaximum',
    'UtilizationMetricsVolumeWriteBytesPerSecondMaximum',
    'LookbackPeriodInDays',
    'CurrentConfigurationVolumeType',
    'CurrentConfigurationVolumeBaselineIOPS',
    'CurrentConfigurationVolumeBaselineThroughput',
    'CurrentConfigurationVolumeBurstIOPS',
    'CurrentConfigurationVolumeBurstThroughput',
    'CurrentConfigurationVolumeSize',
    'CurrentMonthlyPrice',
    'RecommendationOptionsConfigurationVolumeType',
    'RecommendationOptionsConfigurationVolumeBaselineIOPS',
    'RecommendationOptionsConfigurationVolumeBaselineThroughput',
    'RecommendationOptionsConfigurationVolumeBurstIOPS',
    'RecommendationOptionsConfigurationVolumeBurstThroughput',
    'RecommendationOptionsConfigurationVolumeSize',
    'RecommendationOptionsMonthlyPrice',
    'RecommendationOptionsPerformanceRisk',
    'LastRefreshTimestamp',
    'CurrentPerformanceRisk',
    'RecommendationOptionsSavingsOpportunityPercentage',
    'RecommendationOptionsEstimatedMonthlySavingsCurrency',
    'RecommendationOptionsEstimatedMonthlySavingsValue',
    'RootVolume',
  ])
  .openapi('ExportableVolumeField')

const ExportableVolumeFieldsSchema = z
  .array(ExportableVolumeFieldSchema)
  .openapi('ExportableVolumeFields')

const ExportEBSVolumeRecommendationsRequestSchema = z
  .object({
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the Amazon Web Services accounts for which to export Amazon EBS volume recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.</p> <p>This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.</p> <p>You can specify multiple account IDs per request.</p>',
        }),
    ).exactOptional(),
    filters: EBSFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that exports a more specific set of Amazon EBS volume recommendations.',
        }),
    ).exactOptional(),
    fieldsToExport: ExportableVolumeFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendations data to include in the export file. For more information about the fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User Guide</i>.',
        }),
    ).exactOptional(),
    s3DestinationConfig: S3DestinationConfigSchema,
    fileFormat: FileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the export file.</p> <p>The only export file format currently supported is <code>Csv</code>.</p>',
        }),
    ).exactOptional(),
    includeMemberAccounts: IncludeMemberAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.</p> <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.</p> <p>This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['s3DestinationConfig'], title: 'ExportEBSVolumeRecommendationsRequest' })
  .openapi('ExportEBSVolumeRecommendationsRequest')

const ExportEC2InstanceRecommendationsResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identification number of the export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job ID to view the status of an export job.</p>',
        }),
    ).exactOptional(),
    s3Destination: S3DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the destination Amazon S3 bucket of a recommendations export file.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportEC2InstanceRecommendationsResponse')

const ExportableInstanceFieldSchema = z
  .enum([
    'AccountId',
    'InstanceArn',
    'InstanceName',
    'Finding',
    'FindingReasonCodes',
    'LookbackPeriodInDays',
    'CurrentInstanceType',
    'UtilizationMetricsCpuMaximum',
    'UtilizationMetricsMemoryMaximum',
    'UtilizationMetricsEbsReadOpsPerSecondMaximum',
    'UtilizationMetricsEbsWriteOpsPerSecondMaximum',
    'UtilizationMetricsEbsReadBytesPerSecondMaximum',
    'UtilizationMetricsEbsWriteBytesPerSecondMaximum',
    'UtilizationMetricsDiskReadOpsPerSecondMaximum',
    'UtilizationMetricsDiskWriteOpsPerSecondMaximum',
    'UtilizationMetricsDiskReadBytesPerSecondMaximum',
    'UtilizationMetricsDiskWriteBytesPerSecondMaximum',
    'UtilizationMetricsNetworkInBytesPerSecondMaximum',
    'UtilizationMetricsNetworkOutBytesPerSecondMaximum',
    'UtilizationMetricsNetworkPacketsInPerSecondMaximum',
    'UtilizationMetricsNetworkPacketsOutPerSecondMaximum',
    'CurrentOnDemandPrice',
    'CurrentStandardOneYearNoUpfrontReservedPrice',
    'CurrentStandardThreeYearNoUpfrontReservedPrice',
    'CurrentVCpus',
    'CurrentMemory',
    'CurrentStorage',
    'CurrentNetwork',
    'RecommendationOptionsInstanceType',
    'RecommendationOptionsProjectedUtilizationMetricsCpuMaximum',
    'RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum',
    'RecommendationOptionsPlatformDifferences',
    'RecommendationOptionsPerformanceRisk',
    'RecommendationOptionsVcpus',
    'RecommendationOptionsMemory',
    'RecommendationOptionsStorage',
    'RecommendationOptionsNetwork',
    'RecommendationOptionsOnDemandPrice',
    'RecommendationOptionsStandardOneYearNoUpfrontReservedPrice',
    'RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice',
    'RecommendationsSourcesRecommendationSourceArn',
    'RecommendationsSourcesRecommendationSourceType',
    'LastRefreshTimestamp',
    'CurrentPerformanceRisk',
    'RecommendationOptionsSavingsOpportunityPercentage',
    'RecommendationOptionsEstimatedMonthlySavingsCurrency',
    'RecommendationOptionsEstimatedMonthlySavingsValue',
    'EffectiveRecommendationPreferencesCpuVendorArchitectures',
    'EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics',
    'EffectiveRecommendationPreferencesInferredWorkloadTypes',
    'InferredWorkloadTypes',
    'RecommendationOptionsMigrationEffort',
    'EffectiveRecommendationPreferencesExternalMetricsSource',
    'InstanceState',
  ])
  .openapi('ExportableInstanceField')

const ExportableInstanceFieldsSchema = z
  .array(ExportableInstanceFieldSchema)
  .openapi('ExportableInstanceFields')

const ExportEC2InstanceRecommendationsRequestSchema = z
  .object({
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the Amazon Web Services accounts for which to export instance recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.</p> <p>This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.</p> <p>You can specify multiple account IDs per request.</p>',
        }),
    ).exactOptional(),
    filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that exports a more specific set of instance recommendations.',
        }),
    ).exactOptional(),
    fieldsToExport: ExportableInstanceFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendations data to include in the export file. For more information about the fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User Guide</i>.',
        }),
    ).exactOptional(),
    s3DestinationConfig: S3DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permissions policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ),
    fileFormat: FileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the export file.</p> <p>The only export file format currently supported is <code>Csv</code>.</p>',
        }),
    ).exactOptional(),
    includeMemberAccounts: IncludeMemberAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.</p> <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.</p>',
        }),
    ).exactOptional(),
    recommendationPreferences: RecommendationPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object to specify the preferences for the Amazon EC2 instance recommendations to export.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['s3DestinationConfig'], title: 'ExportEC2InstanceRecommendationsRequest' })
  .openapi('ExportEC2InstanceRecommendationsRequest')

const ExportECSServiceRecommendationsResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The identification number of the export job. </p> <p>To view the status of an export job, use the <a>DescribeRecommendationExportJobs</a> action and specify the job ID. </p>',
        }),
    ).exactOptional(),
    s3Destination: S3DestinationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportECSServiceRecommendationsResponse')

const ECSServiceRecommendationFilterNameSchema = z
  .enum(['Finding', 'FindingReasonCode'])
  .openapi('ECSServiceRecommendationFilterName')

const ECSServiceRecommendationFilterSchema = z
  .object({
    name: ECSServiceRecommendationFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The name of the filter. </p> <p> Specify <code>Finding</code> to return recommendations with a specific finding classification. </p> <p> Specify <code>FindingReasonCode</code> to return recommendations with a specific finding reason code. </p>',
        }),
    ).exactOptional(),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The value of the filter. </p> <p>The valid values for this parameter are as follows:</p> <ul> <li> <p>If you specify the <code>name</code> parameter as <code>Finding</code>, specify <code>Optimized</code>, <code>NotOptimized</code>, or <code>Unavailable</code>.</p> </li> <li> <p>If you specify the <code>name</code> parameter as <code>FindingReasonCode</code>, specify <code>CPUUnderprovisioned</code>, <code>CPUOverprovisioned</code>, <code>MemoryUnderprovisioned</code>, or <code>MemoryOverprovisioned</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Describes a filter that returns a more specific list of Amazon ECS service recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action. ',
    required: [],
  })
  .openapi('ECSServiceRecommendationFilter')

const ECSServiceRecommendationFiltersSchema = z
  .array(ECSServiceRecommendationFilterSchema)
  .openapi('ECSServiceRecommendationFilters')

const ExportableECSServiceFieldSchema = z
  .enum([
    'AccountId',
    'ServiceArn',
    'LookbackPeriodInDays',
    'LastRefreshTimestamp',
    'LaunchType',
    'CurrentPerformanceRisk',
    'CurrentServiceConfigurationMemory',
    'CurrentServiceConfigurationCpu',
    'CurrentServiceConfigurationTaskDefinitionArn',
    'CurrentServiceConfigurationAutoScalingConfiguration',
    'CurrentServiceContainerConfigurations',
    'UtilizationMetricsCpuMaximum',
    'UtilizationMetricsMemoryMaximum',
    'Finding',
    'FindingReasonCodes',
    'RecommendationOptionsMemory',
    'RecommendationOptionsCpu',
    'RecommendationOptionsSavingsOpportunityPercentage',
    'RecommendationOptionsEstimatedMonthlySavingsCurrency',
    'RecommendationOptionsEstimatedMonthlySavingsValue',
    'RecommendationOptionsContainerRecommendations',
    'RecommendationOptionsProjectedUtilizationMetricsCpuMaximum',
    'RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum',
  ])
  .openapi('ExportableECSServiceField')

const ExportableECSServiceFieldsSchema = z
  .array(ExportableECSServiceFieldSchema)
  .openapi('ExportableECSServiceFields')

const ExportECSServiceRecommendationsRequestSchema = z
  .object({
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The Amazon Web Services account IDs for the export Amazon ECS service recommendations. </p> <p>If your account is the management account or the delegated administrator of an organization, use this parameter to specify the member account you want to export recommendations to.</p> <p>This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive.</p> <p>If this parameter or the include member accounts parameter is omitted, the recommendations for member accounts aren't included in the export.</p> <p>You can specify multiple account IDs per request.</p>",
        }),
    ).exactOptional(),
    filters: ECSServiceRecommendationFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of objects to specify a filter that exports a more specific set of Amazon ECS service recommendations. ',
        }),
    ).exactOptional(),
    fieldsToExport: ExportableECSServiceFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendations data to include in the export file. For more information about the fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User Guide</i>.',
        }),
    ).exactOptional(),
    s3DestinationConfig: S3DestinationConfigSchema,
    fileFormat: FileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The format of the export file. </p> <p>The CSV file is the only export file format currently supported.</p>',
        }),
    ).exactOptional(),
    includeMemberAccounts: IncludeMemberAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization.</p> <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>If this parameter is omitted, recommendations for member accounts of the organization aren\'t included in the export file.</p> <p>If this parameter or the account ID parameter is omitted, recommendations for member accounts aren\'t included in the export.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['s3DestinationConfig'], title: 'ExportECSServiceRecommendationsRequest' })
  .openapi('ExportECSServiceRecommendationsRequest')

const ExportLambdaFunctionRecommendationsResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identification number of the export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job ID to view the status of an export job.</p>',
        }),
    ).exactOptional(),
    s3Destination: S3DestinationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportLambdaFunctionRecommendationsResponse')

const LambdaFunctionRecommendationFilterNameSchema = z
  .enum(['Finding', 'FindingReasonCode'])
  .openapi('LambdaFunctionRecommendationFilterName')

const LambdaFunctionRecommendationFilterSchema = z
  .object({
    name: LambdaFunctionRecommendationFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the filter.</p> <p>Specify <code>Finding</code> to return recommendations with a specific finding classification (for example, <code>NotOptimized</code>).</p> <p>Specify <code>FindingReasonCode</code> to return recommendations with a specific finding reason code (for example, <code>MemoryUnderprovisioned</code>).</p>',
        }),
    ).exactOptional(),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the filter.</p> <p>The valid values for this parameter are as follows, depending on what you specify for the <code>name</code> parameter:</p> <ul> <li> <p>Specify <code>Optimized</code>, <code>NotOptimized</code>, or <code>Unavailable</code> if you specify the <code>name</code> parameter as <code>Finding</code>.</p> </li> <li> <p>Specify <code>MemoryOverprovisioned</code>, <code>MemoryUnderprovisioned</code>, <code>InsufficientData</code>, or <code>Inconclusive</code> if you specify the <code>name</code> parameter as <code>FindingReasonCode</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>',
    required: [],
  })
  .openapi('LambdaFunctionRecommendationFilter')

const LambdaFunctionRecommendationFiltersSchema = z
  .array(LambdaFunctionRecommendationFilterSchema)
  .openapi('LambdaFunctionRecommendationFilters')

const ExportableLambdaFunctionFieldSchema = z
  .enum([
    'AccountId',
    'FunctionArn',
    'FunctionVersion',
    'Finding',
    'FindingReasonCodes',
    'NumberOfInvocations',
    'UtilizationMetricsDurationMaximum',
    'UtilizationMetricsDurationAverage',
    'UtilizationMetricsMemoryMaximum',
    'UtilizationMetricsMemoryAverage',
    'LookbackPeriodInDays',
    'CurrentConfigurationMemorySize',
    'CurrentConfigurationTimeout',
    'CurrentCostTotal',
    'CurrentCostAverage',
    'RecommendationOptionsConfigurationMemorySize',
    'RecommendationOptionsCostLow',
    'RecommendationOptionsCostHigh',
    'RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound',
    'RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound',
    'RecommendationOptionsProjectedUtilizationMetricsDurationExpected',
    'LastRefreshTimestamp',
    'CurrentPerformanceRisk',
    'RecommendationOptionsSavingsOpportunityPercentage',
    'RecommendationOptionsEstimatedMonthlySavingsCurrency',
    'RecommendationOptionsEstimatedMonthlySavingsValue',
  ])
  .openapi('ExportableLambdaFunctionField')

const ExportableLambdaFunctionFieldsSchema = z
  .array(ExportableLambdaFunctionFieldSchema)
  .openapi('ExportableLambdaFunctionFields')

const ExportLambdaFunctionRecommendationsRequestSchema = z
  .object({
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the Amazon Web Services accounts for which to export Lambda function recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.</p> <p>This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.</p> <p>You can specify multiple account IDs per request.</p>',
        }),
    ).exactOptional(),
    filters: LambdaFunctionRecommendationFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that exports a more specific set of Lambda function recommendations.',
        }),
    ).exactOptional(),
    fieldsToExport: ExportableLambdaFunctionFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendations data to include in the export file. For more information about the fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User Guide</i>.',
        }),
    ).exactOptional(),
    s3DestinationConfig: S3DestinationConfigSchema,
    fileFormat: FileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the export file.</p> <p>The only export file format currently supported is <code>Csv</code>.</p>',
        }),
    ).exactOptional(),
    includeMemberAccounts: IncludeMemberAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.</p> <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.</p> <p>This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive.</p> <p>Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['s3DestinationConfig'],
    title: 'ExportLambdaFunctionRecommendationsRequest',
  })
  .openapi('ExportLambdaFunctionRecommendationsRequest')

const AutoScalingGroupArnSchema = z.string().openapi('AutoScalingGroupArn')

const AutoScalingGroupNameSchema = z.string().openapi('AutoScalingGroupName')

const FindingSchema = z
  .enum(['Underprovisioned', 'Overprovisioned', 'Optimized', 'NotOptimized'])
  .openapi('Finding')

const MetricNameSchema = z
  .enum([
    'Cpu',
    'Memory',
    'EBS_READ_OPS_PER_SECOND',
    'EBS_WRITE_OPS_PER_SECOND',
    'EBS_READ_BYTES_PER_SECOND',
    'EBS_WRITE_BYTES_PER_SECOND',
    'DISK_READ_OPS_PER_SECOND',
    'DISK_WRITE_OPS_PER_SECOND',
    'DISK_READ_BYTES_PER_SECOND',
    'DISK_WRITE_BYTES_PER_SECOND',
    'NETWORK_IN_BYTES_PER_SECOND',
    'NETWORK_OUT_BYTES_PER_SECOND',
    'NETWORK_PACKETS_IN_PER_SECOND',
    'NETWORK_PACKETS_OUT_PER_SECOND',
  ])
  .openapi('MetricName')

const MetricStatisticSchema = z.enum(['Maximum', 'Average']).openapi('MetricStatistic')

const MetricValueSchema = z.float64().openapi('MetricValue')

const UtilizationMetricSchema = z
  .object({
    name: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the utilization metric.</p> <p>The following utilization metrics are available:</p> <ul> <li> <p> <code>Cpu</code> - The percentage of allocated EC2 compute units that are currently in use on the instance. This metric identifies the processing power required to run an application on the instance.</p> <p>Depending on the instance type, tools in your operating system can show a lower percentage than CloudWatch when the instance is not allocated a full processor core.</p> <p>Units: Percent</p> </li> <li> <p> <code>Memory</code> - The percentage of memory that is currently in use on the instance. This metric identifies the amount of memory required to run an application on the instance.</p> <p>Units: Percent</p> <note> <p>The <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note> </li> <li> <p> <code>EBS_READ_OPS_PER_SECOND</code> - The completed read operations from all EBS volumes attached to the instance in a specified period of time.</p> <p>Unit: Count</p> </li> <li> <p> <code>EBS_WRITE_OPS_PER_SECOND</code> - The completed write operations to all EBS volumes attached to the instance in a specified period of time.</p> <p>Unit: Count</p> </li> <li> <p> <code>EBS_READ_BYTES_PER_SECOND</code> - The bytes read from all EBS volumes attached to the instance in a specified period of time.</p> <p>Unit: Bytes</p> </li> <li> <p> <code>EBS_WRITE_BYTES_PER_SECOND</code> - The bytes written to all EBS volumes attached to the instance in a specified period of time.</p> <p>Unit: Bytes</p> </li> <li> <p> <code>DISK_READ_OPS_PER_SECOND</code> - The completed read operations from all instance store volumes available to the instance in a specified period of time.</p> <p>If there are no instance store volumes, either the value is <code>0</code> or the metric is not reported.</p> </li> <li> <p> <code>DISK_WRITE_OPS_PER_SECOND</code> - The completed write operations from all instance store volumes available to the instance in a specified period of time.</p> <p>If there are no instance store volumes, either the value is <code>0</code> or the metric is not reported.</p> </li> <li> <p> <code>DISK_READ_BYTES_PER_SECOND</code> - The bytes read from all instance store volumes available to the instance. This metric is used to determine the volume of the data the application reads from the disk of the instance. This can be used to determine the speed of the application.</p> <p>If there are no instance store volumes, either the value is <code>0</code> or the metric is not reported.</p> </li> <li> <p> <code>DISK_WRITE_BYTES_PER_SECOND</code> - The bytes written to all instance store volumes available to the instance. This metric is used to determine the volume of the data the application writes onto the disk of the instance. This can be used to determine the speed of the application.</p> <p>If there are no instance store volumes, either the value is <code>0</code> or the metric is not reported.</p> </li> <li> <p> <code>NETWORK_IN_BYTES_PER_SECOND</code> - The number of bytes received by the instance on all network interfaces. This metric identifies the volume of incoming network traffic to a single instance.</p> </li> <li> <p> <code>NETWORK_OUT_BYTES_PER_SECOND</code> - The number of bytes sent out by the instance on all network interfaces. This metric identifies the volume of outgoing network traffic from a single instance.</p> </li> <li> <p> <code>NETWORK_PACKETS_IN_PER_SECOND</code> - The number of packets received by the instance on all network interfaces. This metric identifies the volume of incoming traffic in terms of the number of packets on a single instance.</p> </li> <li> <p> <code>NETWORK_PACKETS_OUT_PER_SECOND</code> - The number of packets sent out by the instance on all network interfaces. This metric identifies the volume of outgoing traffic in terms of the number of packets on a single instance.</p> </li> </ul>',
        }),
    ).exactOptional(),
    statistic: MetricStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic of the utilization metric.</p> <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the <code>Maximum</code> statistic, which is the highest value observed during the specified period.</p> <p>The Compute Optimizer console displays graphs for some utilization metrics using the <code>Average</code> statistic, which is the value of <code>Sum</code> / <code>SampleCount</code> during the specified period. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource recommendations</a> in the <i>Compute Optimizer User Guide</i>. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>',
        }),
    ).exactOptional(),
    value: MetricValueSchema.and(
      z.any().openapi({ description: 'The value of the utilization metric.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>',
    required: [],
  })
  .openapi('UtilizationMetric')

const UtilizationMetricsSchema = z.array(UtilizationMetricSchema).openapi('UtilizationMetrics')

const LookBackPeriodInDaysSchema = z.float64().openapi('LookBackPeriodInDays')

const DesiredCapacitySchema = z.int().openapi('DesiredCapacity')

const MinSizeSchema = z.int().openapi('MinSize')

const MaxSizeSchema = z.int().openapi('MaxSize')

const InstanceTypeSchema = z.string().openapi('InstanceType')

const AutoScalingGroupConfigurationSchema = z
  .object({
    desiredCapacity: DesiredCapacitySchema.and(
      z
        .any()
        .openapi({
          description: 'The desired capacity, or number of instances, for the Auto Scaling group.',
        }),
    ).exactOptional(),
    minSize: MinSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum size, or minimum number of instances, for the Auto Scaling group.',
        }),
    ).exactOptional(),
    maxSize: MaxSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size, or maximum number of instances, for the Auto Scaling group.',
        }),
    ).exactOptional(),
    instanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'The instance type for the Auto Scaling group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the configuration of an Auto Scaling group.', required: [] })
  .openapi('AutoScalingGroupConfiguration')

const ProjectedUtilizationMetricsSchema = z
  .array(UtilizationMetricSchema)
  .openapi('ProjectedUtilizationMetrics')

const PerformanceRiskSchema = z.float64().min(0).max(4).openapi('PerformanceRisk')

const RankSchema = z.int().openapi('Rank')

const SavingsOpportunityPercentageSchema = z.float64().openapi('SavingsOpportunityPercentage')

const CurrencySchema = z.enum(['USD', 'CNY']).openapi('Currency')

const ValueSchema = z.float64().openapi('Value')

const EstimatedMonthlySavingsSchema = z
  .object({
    currency: CurrencySchema.and(
      z.any().openapi({ description: 'The currency of the estimated monthly savings.' }),
    ).exactOptional(),
    value: ValueSchema.and(
      z.any().openapi({ description: 'The value of the estimated monthly savings.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the estimated monthly savings amount possible, based on On-Demand instance pricing, by adopting Compute Optimizer recommendations for a given resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation">Estimated monthly savings and savings opportunities</a> in the <i>Compute Optimizer User Guide</i>.</p>',
    required: [],
  })
  .openapi('EstimatedMonthlySavings')

const SavingsOpportunitySchema = z
  .object({
    savingsOpportunityPercentage: SavingsOpportunityPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer recommendations for a given resource.',
        }),
    ).exactOptional(),
    estimatedMonthlySavings: EstimatedMonthlySavingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the estimated monthly savings amount possible, based on On-Demand instance pricing, by adopting Compute Optimizer recommendations for a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.</p> <p>Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.</p> <important> <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as activate <b>Receive Amazon EC2 resource recommendations</b> in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost with Rightsizing Recommendations</a> in the <i>Cost Management User Guide</i>.</p> </important>',
    required: [],
  })
  .openapi('SavingsOpportunity')

const MigrationEffortSchema = z
  .enum(['VeryLow', 'Low', 'Medium', 'High'])
  .openapi('MigrationEffort')

const AutoScalingGroupRecommendationOptionSchema = z
  .object({
    configuration: AutoScalingGroupConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe an Auto Scaling group configuration.',
        }),
    ).exactOptional(),
    projectedUtilizationMetrics: ProjectedUtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects that describe the projected utilization metrics of the Auto Scaling group recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>',
        }),
    ).exactOptional(),
    performanceRisk: PerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The performance risk of the Auto Scaling group configuration recommendation.</p> <p>Performance risk indicates the likelihood of the recommended instance type not meeting the resource needs of your workload. Compute Optimizer calculates an individual performance risk score for each specification of the recommended instance, including CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput, and network PPS. The performance risk of the recommended instance is calculated as the maximum performance risk score across the analyzed resource specifications.</p> <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning that the recommended resource is predicted to always provide enough hardware capability. The higher the performance risk is, the more likely you should validate whether the recommendation will meet the performance requirements of your workload before migrating your resource.</p>',
        }),
    ).exactOptional(),
    rank: RankSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rank of the Auto Scaling group recommendation option.</p> <p>The top recommendation option is ranked as <code>1</code>.</p>',
        }),
    ).exactOptional(),
    savingsOpportunity: SavingsOpportunitySchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the savings opportunity for the Auto Scaling group recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.',
        }),
    ).exactOptional(),
    migrationEffort: MigrationEffortSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The level of effort required to migrate from the current instance type to the recommended instance type.</p> <p>For example, the migration effort is <code>Low</code> if Amazon EMR is the inferred workload type and an Amazon Web Services Graviton instance type is recommended. The migration effort is <code>Medium</code> if a workload type couldn't be inferred but an Amazon Web Services Graviton instance type is recommended. The migration effort is <code>VeryLow</code> if both the current and recommended instance types are of the same CPU architecture.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a recommendation option for an Auto Scaling group.',
    required: [],
  })
  .openapi('AutoScalingGroupRecommendationOption')

const AutoScalingGroupRecommendationOptionsSchema = z
  .array(AutoScalingGroupRecommendationOptionSchema)
  .openapi('AutoScalingGroupRecommendationOptions')

const LastRefreshTimestampSchema = z.iso.datetime({ offset: true }).openapi('LastRefreshTimestamp')

const CurrentPerformanceRiskSchema = z
  .enum(['VeryLow', 'Low', 'Medium', 'High'])
  .openapi('CurrentPerformanceRisk')

const EnhancedInfrastructureMetricsSchema = z
  .enum(['Active', 'Inactive'])
  .openapi('EnhancedInfrastructureMetrics')

const InferredWorkloadTypesPreferenceSchema = z
  .enum(['Active', 'Inactive'])
  .openapi('InferredWorkloadTypesPreference')

const ExternalMetricsSourceSchema = z
  .enum(['Datadog', 'Dynatrace', 'NewRelic', 'Instana'])
  .openapi('ExternalMetricsSource')

const ExternalMetricsPreferenceSchema = z
  .object({
    source: ExternalMetricsSourceSchema.and(
      z
        .any()
        .openapi({
          description: ' Contains the source options for external metrics preferences. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Describes the external metrics preferences for EC2 rightsizing recommendations. ',
    required: [],
  })
  .openapi('ExternalMetricsPreference')

const EffectiveRecommendationPreferencesSchema = z
  .object({
    cpuVendorArchitectures: CpuVendorArchitecturesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the CPU vendor and architecture for an instance or Auto Scaling group recommendations.</p> <p>For example, when you specify <code>AWS_ARM64</code> with:</p> <ul> <li> <p>A <a>GetEC2InstanceRecommendations</a> or <a>GetAutoScalingGroupRecommendations</a> request, Compute Optimizer returns recommendations that consist of Graviton2 instance types only.</p> </li> <li> <p>A <a>GetEC2RecommendationProjectedMetrics</a> request, Compute Optimizer returns projected utilization metrics for Graviton2 instance type recommendations only.</p> </li> <li> <p>A <a>ExportEC2InstanceRecommendations</a> or <a>ExportAutoScalingGroupRecommendations</a> request, Compute Optimizer exports recommendations that consist of Graviton2 instance types only.</p> </li> </ul>',
        }),
    ).exactOptional(),
    enhancedInfrastructureMetrics: EnhancedInfrastructureMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the activation status of the enhanced infrastructure metrics preference.</p> <p>A status of <code>Active</code> confirms that the preference is applied in the latest recommendation refresh, and a status of <code>Inactive</code> confirms that it\'s not yet applied to recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    inferredWorkloadTypes: InferredWorkloadTypesPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Describes the activation status of the inferred workload types preference.</p> <p>A status of <code>Active</code> confirms that the preference is applied in the latest recommendation refresh. A status of <code>Inactive</code> confirms that it's not yet applied to recommendations.</p>",
        }),
    ).exactOptional(),
    externalMetricsPreference: ExternalMetricsPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> An object that describes the external metrics recommendation preference. </p> <p> If the preference is applied in the latest recommendation refresh, an object with a valid <code>source</code> value appears in the response. If the preference isn't applied to the recommendations already, then this object doesn't appear in the response. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the effective recommendation preferences for a resource.',
    required: [],
  })
  .openapi('EffectiveRecommendationPreferences')

const InferredWorkloadTypeSchema = z
  .enum([
    'AmazonEmr',
    'ApacheCassandra',
    'ApacheHadoop',
    'Memcached',
    'Nginx',
    'PostgreSql',
    'Redis',
    'Kafka',
  ])
  .openapi('InferredWorkloadType')

const InferredWorkloadTypesSchema = z
  .array(InferredWorkloadTypeSchema)
  .openapi('InferredWorkloadTypes')

const AutoScalingGroupRecommendationSchema = z
  .object({
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID of the Auto Scaling group.' }),
    ).exactOptional(),
    autoScalingGroupArn: AutoScalingGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Auto Scaling group.' }),
    ).exactOptional(),
    autoScalingGroupName: AutoScalingGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the Auto Scaling group.' }),
    ).exactOptional(),
    finding: FindingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The finding classification of the Auto Scaling group.</p> <p>Findings for Auto Scaling groups include:</p> <ul> <li> <p> <b> <code>NotOptimized</code> </b>—An Auto Scaling group is considered not optimized when Compute Optimizer identifies a recommendation that can provide better performance for your workload.</p> </li> <li> <p> <b> <code>Optimized</code> </b>—An Auto Scaling group is considered optimized when Compute Optimizer determines that the group is correctly provisioned to run your workload based on the chosen instance type. For optimized resources, Compute Optimizer might recommend a new generation instance type.</p> </li> </ul>',
        }),
    ).exactOptional(),
    utilizationMetrics: UtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the utilization metrics of the Auto Scaling group.',
        }),
    ).exactOptional(),
    lookBackPeriodInDays: LookBackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days for which utilization metrics were analyzed for the Auto Scaling group.',
        }),
    ).exactOptional(),
    currentConfiguration: AutoScalingGroupConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the current configuration of the Auto Scaling group.',
        }),
    ).exactOptional(),
    recommendationOptions: AutoScalingGroupRecommendationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the recommendation options for the Auto Scaling group.',
        }),
    ).exactOptional(),
    lastRefreshTimestamp: LastRefreshTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of when the Auto Scaling group recommendation was last generated.',
        }),
    ).exactOptional(),
    currentPerformanceRisk: CurrentPerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            'The risk of the current Auto Scaling group not meeting the performance needs of its workloads. The higher the risk, the more likely the current Auto Scaling group configuration has insufficient capacity and cannot meet workload requirements.',
        }),
    ).exactOptional(),
    effectiveRecommendationPreferences: EffectiveRecommendationPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the effective recommendation preferences for the Auto Scaling group.',
        }),
    ).exactOptional(),
    inferredWorkloadTypes: InferredWorkloadTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The applications that might be running on the instances in the Auto Scaling group as inferred by Compute Optimizer.</p> <p>Compute Optimizer can infer if one of the following applications might be running on the instances:</p> <ul> <li> <p> <code>AmazonEmr</code> - Infers that Amazon EMR might be running on the instances.</p> </li> <li> <p> <code>ApacheCassandra</code> - Infers that Apache Cassandra might be running on the instances.</p> </li> <li> <p> <code>ApacheHadoop</code> - Infers that Apache Hadoop might be running on the instances.</p> </li> <li> <p> <code>Memcached</code> - Infers that Memcached might be running on the instances.</p> </li> <li> <p> <code>NGINX</code> - Infers that NGINX might be running on the instances.</p> </li> <li> <p> <code>PostgreSql</code> - Infers that PostgreSQL might be running on the instances.</p> </li> <li> <p> <code>Redis</code> - Infers that Redis might be running on the instances.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Auto Scaling group recommendation.', required: [] })
  .openapi('AutoScalingGroupRecommendation')

const AutoScalingGroupRecommendationsSchema = z
  .array(AutoScalingGroupRecommendationSchema)
  .openapi('AutoScalingGroupRecommendations')

const IdentifierSchema = z.string().openapi('Identifier')

const CodeSchema = z.string().openapi('Code')

const MessageSchema = z.string().openapi('Message')

const GetRecommendationErrorSchema = z
  .object({
    identifier: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the error.' }),
    ).exactOptional(),
    code: CodeSchema.and(z.any().openapi({ description: 'The error code.' })).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: 'The message, or reason, for the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>',
    required: [],
  })
  .openapi('GetRecommendationError')

const GetRecommendationErrorsSchema = z
  .array(GetRecommendationErrorSchema)
  .openapi('GetRecommendationErrors')

const GetAutoScalingGroupRecommendationsResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of Auto Scaling group recommendations.</p> <p>This value is null when there are no more pages of Auto Scaling group recommendations to return.</p>',
        }),
    ).exactOptional(),
    autoScalingGroupRecommendations: AutoScalingGroupRecommendationsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe Auto Scaling group recommendations.',
        }),
    ).exactOptional(),
    errors: GetRecommendationErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects that describe errors of the request.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAutoScalingGroupRecommendationsResponse')

const AutoScalingGroupArnsSchema = z
  .array(AutoScalingGroupArnSchema)
  .openapi('AutoScalingGroupArns')

const GetAutoScalingGroupRecommendationsRequestSchema = z
  .object({
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the Amazon Web Services account for which to return Auto Scaling group recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to return Auto Scaling group recommendations.</p> <p>Only one account ID can be specified per request.</p>',
        }),
    ).exactOptional(),
    autoScalingGroupArns: AutoScalingGroupArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return recommendations.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to advance to the next page of Auto Scaling group recommendations.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of Auto Scaling group recommendations to return with a single request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
    filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that returns a more specific list of Auto Scaling group recommendations.',
        }),
    ).exactOptional(),
    recommendationPreferences: RecommendationPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object to specify the preferences for the Auto Scaling group recommendations to return in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetAutoScalingGroupRecommendationsRequest', required: [] })
  .openapi('GetAutoScalingGroupRecommendationsRequest')

const VolumeArnSchema = z.string().openapi('VolumeArn')

const VolumeTypeSchema = z.string().openapi('VolumeType')

const VolumeSizeSchema = z.int().openapi('VolumeSize')

const VolumeBaselineIOPSSchema = z.int().openapi('VolumeBaselineIOPS')

const VolumeBurstIOPSSchema = z.int().openapi('VolumeBurstIOPS')

const VolumeBaselineThroughputSchema = z.int().openapi('VolumeBaselineThroughput')

const VolumeBurstThroughputSchema = z.int().openapi('VolumeBurstThroughput')

const RootVolumeSchema = z.boolean().openapi('RootVolume')

const VolumeConfigurationSchema = z
  .object({
    volumeType: VolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The volume type.</p> <p>This can be <code>gp2</code> for General Purpose SSD, <code>io1</code> or <code>io2</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput Optimized HDD, <code>sc1</code> for Cold HDD, or <code>standard</code> for Magnetic volumes.</p>',
        }),
    ).exactOptional(),
    volumeSize: VolumeSizeSchema.and(
      z.any().openapi({ description: 'The size of the volume, in GiB.' }),
    ).exactOptional(),
    volumeBaselineIOPS: VolumeBaselineIOPSSchema.and(
      z.any().openapi({ description: 'The baseline IOPS of the volume.' }),
    ).exactOptional(),
    volumeBurstIOPS: VolumeBurstIOPSSchema.and(
      z.any().openapi({ description: 'The burst IOPS of the volume.' }),
    ).exactOptional(),
    volumeBaselineThroughput: VolumeBaselineThroughputSchema.and(
      z.any().openapi({ description: 'The baseline throughput of the volume.' }),
    ).exactOptional(),
    volumeBurstThroughput: VolumeBurstThroughputSchema.and(
      z.any().openapi({ description: 'The burst throughput of the volume.' }),
    ).exactOptional(),
    rootVolume: RootVolumeSchema.and(
      z
        .any()
        .openapi({ description: ' Contains the image used to boot the instance during launch. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.',
    required: [],
  })
  .openapi('VolumeConfiguration')

const EBSFindingSchema = z.enum(['Optimized', 'NotOptimized']).openapi('EBSFinding')

const EBSMetricNameSchema = z
  .enum([
    'VolumeReadOpsPerSecond',
    'VolumeWriteOpsPerSecond',
    'VolumeReadBytesPerSecond',
    'VolumeWriteBytesPerSecond',
  ])
  .openapi('EBSMetricName')

const EBSUtilizationMetricSchema = z
  .object({
    name: EBSMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the utilization metric.</p> <p>The following utilization metrics are available:</p> <ul> <li> <p> <code>VolumeReadOpsPerSecond</code> - The completed read operations per second from the volume in a specified period of time.</p> <p>Unit: Count</p> </li> <li> <p> <code>VolumeWriteOpsPerSecond</code> - The completed write operations per second to the volume in a specified period of time.</p> <p>Unit: Count</p> </li> <li> <p> <code>VolumeReadBytesPerSecond</code> - The bytes read per second from the volume in a specified period of time.</p> <p>Unit: Bytes</p> </li> <li> <p> <code>VolumeWriteBytesPerSecond</code> - The bytes written to the volume in a specified period of time.</p> <p>Unit: Bytes</p> </li> </ul>',
        }),
    ).exactOptional(),
    statistic: MetricStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic of the utilization metric.</p> <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the <code>Maximum</code> statistic, which is the highest value observed during the specified period.</p> <p>The Compute Optimizer console displays graphs for some utilization metrics using the <code>Average</code> statistic, which is the value of <code>Sum</code> / <code>SampleCount</code> during the specified period. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource recommendations</a> in the <i>Compute Optimizer User Guide</i>. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>',
        }),
    ).exactOptional(),
    value: MetricValueSchema.and(
      z.any().openapi({ description: 'The value of the utilization metric.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>',
    required: [],
  })
  .openapi('EBSUtilizationMetric')

const EBSUtilizationMetricsSchema = z
  .array(EBSUtilizationMetricSchema)
  .openapi('EBSUtilizationMetrics')

const VolumeRecommendationOptionSchema = z
  .object({
    configuration: VolumeConfigurationSchema.and(
      z.any().openapi({ description: 'An array of objects that describe a volume configuration.' }),
    ).exactOptional(),
    performanceRisk: PerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The performance risk of the volume recommendation option.</p> <p>Performance risk is the likelihood of the recommended volume type meeting the performance requirement of your workload.</p> <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning that the recommended resource is predicted to always provide enough hardware capability. The higher the performance risk is, the more likely you should validate whether the recommendation will meet the performance requirements of your workload before migrating your resource.</p>',
        }),
    ).exactOptional(),
    rank: RankSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rank of the volume recommendation option.</p> <p>The top recommendation option is ranked as <code>1</code>.</p>',
        }),
    ).exactOptional(),
    savingsOpportunity: SavingsOpportunitySchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the savings opportunity for the EBS volume recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.',
    required: [],
  })
  .openapi('VolumeRecommendationOption')

const VolumeRecommendationOptionsSchema = z
  .array(VolumeRecommendationOptionSchema)
  .openapi('VolumeRecommendationOptions')

const VolumeRecommendationSchema = z
  .object({
    volumeArn: VolumeArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the current volume.' }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID of the volume.' }),
    ).exactOptional(),
    currentConfiguration: VolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe the current configuration of the volume.',
        }),
    ).exactOptional(),
    finding: EBSFindingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The finding classification of the volume.</p> <p>Findings for volumes include:</p> <ul> <li> <p> <b> <code>NotOptimized</code> </b>—A volume is considered not optimized when Compute Optimizer identifies a recommendation that can provide better performance for your workload.</p> </li> <li> <p> <b> <code>Optimized</code> </b>—An volume is considered optimized when Compute Optimizer determines that the volume is correctly provisioned to run your workload based on the chosen volume type. For optimized resources, Compute Optimizer might recommend a new generation volume type.</p> </li> </ul>',
        }),
    ).exactOptional(),
    utilizationMetrics: EBSUtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe the utilization metrics of the volume.',
        }),
    ).exactOptional(),
    lookBackPeriodInDays: LookBackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days for which utilization metrics were analyzed for the volume.',
        }),
    ).exactOptional(),
    volumeRecommendationOptions: VolumeRecommendationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the recommendation options for the volume.',
        }),
    ).exactOptional(),
    lastRefreshTimestamp: LastRefreshTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of when the volume recommendation was last generated.',
        }),
    ).exactOptional(),
    currentPerformanceRisk: CurrentPerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            "The risk of the current EBS volume not meeting the performance needs of its workloads. The higher the risk, the more likely the current EBS volume doesn't have sufficient capacity.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.',
    required: [],
  })
  .openapi('VolumeRecommendation')

const VolumeRecommendationsSchema = z
  .array(VolumeRecommendationSchema)
  .openapi('VolumeRecommendations')

const GetEBSVolumeRecommendationsResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of volume recommendations.</p> <p>This value is null when there are no more pages of volume recommendations to return.</p>',
        }),
    ).exactOptional(),
    volumeRecommendations: VolumeRecommendationsSchema.and(
      z.any().openapi({ description: 'An array of objects that describe volume recommendations.' }),
    ).exactOptional(),
    errors: GetRecommendationErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects that describe errors of the request.</p> <p>For example, an error is returned if you request recommendations for an unsupported volume.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEBSVolumeRecommendationsResponse')

const VolumeArnsSchema = z.array(VolumeArnSchema).openapi('VolumeArns')

const GetEBSVolumeRecommendationsRequestSchema = z
  .object({
    volumeArns: VolumeArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volumes for which to return recommendations.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token to advance to the next page of volume recommendations.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of volume recommendations to return with a single request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
    filters: EBSFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that returns a more specific list of volume recommendations.',
        }),
    ).exactOptional(),
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the Amazon Web Services account for which to return volume recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to return volume recommendations.</p> <p>Only one account ID can be specified per request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetEBSVolumeRecommendationsRequest', required: [] })
  .openapi('GetEBSVolumeRecommendationsRequest')

const InstanceArnSchema = z.string().openapi('InstanceArn')

const InstanceNameSchema = z.string().openapi('InstanceName')

const CurrentInstanceTypeSchema = z.string().openapi('CurrentInstanceType')

const InstanceRecommendationFindingReasonCodeSchema = z
  .enum([
    'CPUOverprovisioned',
    'CPUUnderprovisioned',
    'MemoryOverprovisioned',
    'MemoryUnderprovisioned',
    'EBSThroughputOverprovisioned',
    'EBSThroughputUnderprovisioned',
    'EBSIOPSOverprovisioned',
    'EBSIOPSUnderprovisioned',
    'NetworkBandwidthOverprovisioned',
    'NetworkBandwidthUnderprovisioned',
    'NetworkPPSOverprovisioned',
    'NetworkPPSUnderprovisioned',
    'DiskIOPSOverprovisioned',
    'DiskIOPSUnderprovisioned',
    'DiskThroughputOverprovisioned',
    'DiskThroughputUnderprovisioned',
  ])
  .openapi('InstanceRecommendationFindingReasonCode')

const InstanceRecommendationFindingReasonCodesSchema = z
  .array(InstanceRecommendationFindingReasonCodeSchema)
  .openapi('InstanceRecommendationFindingReasonCodes')

const PlatformDifferenceSchema = z
  .enum([
    'Hypervisor',
    'NetworkInterface',
    'StorageInterface',
    'InstanceStoreAvailability',
    'VirtualizationType',
    'Architecture',
  ])
  .openapi('PlatformDifference')

const PlatformDifferencesSchema = z.array(PlatformDifferenceSchema).openapi('PlatformDifferences')

const InstanceRecommendationOptionSchema = z
  .object({
    instanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'The instance type of the instance recommendation.' }),
    ).exactOptional(),
    projectedUtilizationMetrics: ProjectedUtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects that describe the projected utilization metrics of the instance recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>',
        }),
    ).exactOptional(),
    platformDifferences: PlatformDifferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the configuration differences between the current instance and the recommended instance type. You should consider the configuration differences before migrating your workloads from the current instance to the recommended instance type. The <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html">Change the instance type guide for Linux</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-resize.html">Change the instance type guide for Windows</a> provide general guidance for getting started with an instance migration.</p> <p>Platform differences include:</p> <ul> <li> <p> <b> <code>Hypervisor</code> </b> — The hypervisor of the recommended instance type is different than that of the current instance. For example, the recommended instance type uses a Nitro hypervisor and the current instance uses a Xen hypervisor. The differences that you should consider between these hypervisors are covered in the <a href="http://aws.amazon.com/ec2/faqs/#Nitro_Hypervisor">Nitro Hypervisor</a> section of the Amazon EC2 frequently asked questions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the <i>Amazon EC2 User Guide for Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the <i>Amazon EC2 User Guide for Windows</i>.</p> </li> <li> <p> <b> <code>NetworkInterface</code> </b> — The network interface of the recommended instance type is different than that of the current instance. For example, the recommended instance type supports enhanced networking and the current instance might not. To enable enhanced networking for the recommended instance type, you must install the Elastic Network Adapter (ENA) driver or the Intel 82599 Virtual Function driver. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html">Enhanced networking on Linux</a> in the <i>Amazon EC2 User Guide for Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/enhanced-networking.html">Enhanced networking on Windows</a> in the <i>Amazon EC2 User Guide for Windows</i>.</p> </li> <li> <p> <b> <code>StorageInterface</code> </b> — The storage interface of the recommended instance type is different than that of the current instance. For example, the recommended instance type uses an NVMe storage interface and the current instance does not. To access NVMe volumes for the recommended instance type, you will need to install or upgrade the NVMe driver. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nvme-ebs-volumes.html">Amazon EBS and NVMe on Linux instances</a> in the <i>Amazon EC2 User Guide for Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/nvme-ebs-volumes.html">Amazon EBS and NVMe on Windows instances</a> in the <i>Amazon EC2 User Guide for Windows</i>.</p> </li> <li> <p> <b> <code>InstanceStoreAvailability</code> </b> — The recommended instance type does not support instance store volumes and the current instance does. Before migrating, you might need to back up the data on your instance store volumes if you want to preserve them. For more information, see <a href="https://aws.amazon.com/premiumsupport/knowledge-center/back-up-instance-store-ebs/">How do I back up an instance store volume on my Amazon EC2 instance to Amazon EBS?</a> in the <i>Amazon Web Services Premium Support Knowledge Base</i>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon EC2 instance store</a> in the <i>Amazon EC2 User Guide for Linux</i>, or see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/InstanceStorage.html">Amazon EC2 instance store</a> in the <i>Amazon EC2 User Guide for Windows</i>.</p> </li> <li> <p> <b> <code>VirtualizationType</code> </b> — The recommended instance type uses the hardware virtual machine (HVM) virtualization type and the current instance uses the paravirtual (PV) virtualization type. For more information about the differences between these virtualization types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/virtualization_types.html">Linux AMI virtualization types</a> in the <i>Amazon EC2 User Guide for Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/windows-ami-version-history.html#virtualization-types">Windows AMI virtualization types</a> in the <i>Amazon EC2 User Guide for Windows</i>.</p> </li> <li> <p> <b> <code>Architecture</code> </b> — The CPU architecture between the recommended instance type and the current instance is different. For example, the recommended instance type might use an Arm CPU architecture and the current instance type might use a different one, such as x86. Before migrating, you should consider recompiling the software on your instance for the new architecture. Alternatively, you might switch to an Amazon Machine Image (AMI) that supports the new architecture. For more information about the CPU architecture for each instance type, see <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    performanceRisk: PerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The performance risk of the instance recommendation option.</p> <p>Performance risk indicates the likelihood of the recommended instance type not meeting the resource needs of your workload. Compute Optimizer calculates an individual performance risk score for each specification of the recommended instance, including CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput, and network PPS. The performance risk of the recommended instance is calculated as the maximum performance risk score across the analyzed resource specifications.</p> <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning that the recommended resource is predicted to always provide enough hardware capability. The higher the performance risk is, the more likely you should validate whether the recommendation will meet the performance requirements of your workload before migrating your resource.</p>',
        }),
    ).exactOptional(),
    rank: RankSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rank of the instance recommendation option.</p> <p>The top recommendation option is ranked as <code>1</code>.</p>',
        }),
    ).exactOptional(),
    savingsOpportunity: SavingsOpportunitySchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the savings opportunity for the instance recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.',
        }),
    ).exactOptional(),
    migrationEffort: MigrationEffortSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The level of effort required to migrate from the current instance type to the recommended instance type.</p> <p>For example, the migration effort is <code>Low</code> if Amazon EMR is the inferred workload type and an Amazon Web Services Graviton instance type is recommended. The migration effort is <code>Medium</code> if a workload type couldn't be inferred but an Amazon Web Services Graviton instance type is recommended. The migration effort is <code>VeryLow</code> if both the current and recommended instance types are of the same CPU architecture.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a recommendation option for an Amazon EC2 instance.',
    required: [],
  })
  .openapi('InstanceRecommendationOption')

const RecommendationOptionsSchema = z
  .array(InstanceRecommendationOptionSchema)
  .openapi('RecommendationOptions')

const RecommendationSourceArnSchema = z.string().openapi('RecommendationSourceArn')

const RecommendationSourceTypeSchema = z
  .enum(['Ec2Instance', 'AutoScalingGroup', 'EbsVolume', 'LambdaFunction', 'EcsService'])
  .openapi('RecommendationSourceType')

const RecommendationSourceSchema = z
  .object({
    recommendationSourceArn: RecommendationSourceArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the recommendation source.' }),
    ).exactOptional(),
    recommendationSourceType: RecommendationSourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type of the recommendation source.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.',
    required: [],
  })
  .openapi('RecommendationSource')

const RecommendationSourcesSchema = z
  .array(RecommendationSourceSchema)
  .openapi('RecommendationSources')

const InstanceStateSchema = z
  .enum(['pending', 'running', 'shutting-down', 'terminated', 'stopping', 'stopped'])
  .openapi('InstanceState')

const InstanceRecommendationSchema = z
  .object({
    instanceArn: InstanceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the current instance.' }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID of the instance.' }),
    ).exactOptional(),
    instanceName: InstanceNameSchema.and(
      z.any().openapi({ description: 'The name of the current instance.' }),
    ).exactOptional(),
    currentInstanceType: CurrentInstanceTypeSchema.and(
      z.any().openapi({ description: 'The instance type of the current instance.' }),
    ).exactOptional(),
    finding: FindingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The finding classification of the instance.</p> <p>Findings for instances include:</p> <ul> <li> <p> <b> <code>Underprovisioned</code> </b>—An instance is considered under-provisioned when at least one specification of your instance, such as CPU, memory, or network, does not meet the performance requirements of your workload. Under-provisioned instances may lead to poor application performance.</p> </li> <li> <p> <b> <code>Overprovisioned</code> </b>—An instance is considered over-provisioned when at least one specification of your instance, such as CPU, memory, or network, can be sized down while still meeting the performance requirements of your workload, and no specification is under-provisioned. Over-provisioned instances may lead to unnecessary infrastructure cost.</p> </li> <li> <p> <b> <code>Optimized</code> </b>—An instance is considered optimized when all specifications of your instance, such as CPU, memory, and network, meet the performance requirements of your workload and is not over provisioned. For optimized resources, Compute Optimizer might recommend a new generation instance type.</p> </li> </ul>',
        }),
    ).exactOptional(),
    findingReasonCodes: InstanceRecommendationFindingReasonCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The reason for the finding classification of the instance.</p> <p>Finding reason codes for instances include:</p> <ul> <li> <p> <b> <code>CPUOverprovisioned</code> </b> — The instance’s CPU configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>CPUUtilization</code> metric of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>CPUUnderprovisioned</code> </b> — The instance’s CPU configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better CPU performance. This is identified by analyzing the <code>CPUUtilization</code> metric of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>MemoryOverprovisioned</code> </b> — The instance’s memory configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the memory utilization metric of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>MemoryUnderprovisioned</code> </b> — The instance’s memory configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better memory performance. This is identified by analyzing the memory utilization metric of the current instance during the look-back period.</p> <note> <p>Memory utilization is analyzed only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href=\"https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent\">Enabling memory utilization with the Amazon CloudWatch Agent</a> in the <i>Compute Optimizer User Guide</i>. On Linux instances, Compute Optimizer analyses the <code>mem_used_percent</code> metric in the <code>CWAgent</code> namespace, or the legacy <code>MemoryUtilization</code> metric in the <code>System/Linux</code> namespace. On Windows instances, Compute Optimizer analyses the <code>Memory % Committed Bytes In Use</code> metric in the <code>CWAgent</code> namespace.</p> </note> </li> <li> <p> <b> <code>EBSThroughputOverprovisioned</code> </b> — The instance’s EBS throughput configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>VolumeReadBytes</code> and <code>VolumeWriteBytes</code> metrics of EBS volumes attached to the current instance during the look-back period.</p> </li> <li> <p> <b> <code>EBSThroughputUnderprovisioned</code> </b> — The instance’s EBS throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS throughput performance. This is identified by analyzing the <code>VolumeReadBytes</code> and <code>VolumeWriteBytes</code>&gt; metrics of EBS volumes attached to the current instance during the look-back period.</p> </li> <li> <p> <b> <code>EBSIOPSOverprovisioned</code> </b> — The instance’s EBS IOPS configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>VolumeReadOps</code> and <code>VolumeWriteOps</code> metric of EBS volumes attached to the current instance during the look-back period.</p> </li> <li> <p> <b> <code>EBSIOPSUnderprovisioned</code> </b> — The instance’s EBS IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS IOPS performance. This is identified by analyzing the <code>VolumeReadOps</code> and <code>VolumeWriteOps</code> metric of EBS volumes attached to the current instance during the look-back period.</p> </li> <li> <p> <b> <code>NetworkBandwidthOverprovisioned</code> </b> — The instance’s network bandwidth configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>NetworkIn</code> and <code>NetworkOut</code> metrics of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>NetworkBandwidthUnderprovisioned</code> </b> — The instance’s network bandwidth configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network bandwidth performance. This is identified by analyzing the <code>NetworkIn</code> and <code>NetworkOut</code> metrics of the current instance during the look-back period. This finding reason happens when the <code>NetworkIn</code> or <code>NetworkOut</code> performance of an instance is impacted.</p> </li> <li> <p> <b> <code>NetworkPPSOverprovisioned</code> </b> — The instance’s network PPS (packets per second) configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>NetworkPacketsIn</code> and <code>NetworkPacketsIn</code> metrics of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>NetworkPPSUnderprovisioned</code> </b> — The instance’s network PPS (packets per second) configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network PPS performance. This is identified by analyzing the <code>NetworkPacketsIn</code> and <code>NetworkPacketsIn</code> metrics of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>DiskIOPSOverprovisioned</code> </b> — The instance’s disk IOPS configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>DiskReadOps</code> and <code>DiskWriteOps</code> metrics of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>DiskIOPSUnderprovisioned</code> </b> — The instance’s disk IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk IOPS performance. This is identified by analyzing the <code>DiskReadOps</code> and <code>DiskWriteOps</code> metrics of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>DiskThroughputOverprovisioned</code> </b> — The instance’s disk throughput configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>DiskReadBytes</code> and <code>DiskWriteBytes</code> metrics of the current instance during the look-back period.</p> </li> <li> <p> <b> <code>DiskThroughputUnderprovisioned</code> </b> — The instance’s disk throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk throughput performance. This is identified by analyzing the <code>DiskReadBytes</code> and <code>DiskWriteBytes</code> metrics of the current instance during the look-back period.</p> </li> </ul> <note> <p>For more information about instance metrics, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html\">List the available CloudWatch metrics for your instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about EBS volume metrics, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs.html\">Amazon CloudWatch metrics for Amazon EBS</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>",
        }),
    ).exactOptional(),
    utilizationMetrics: UtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe the utilization metrics of the instance.',
        }),
    ).exactOptional(),
    lookBackPeriodInDays: LookBackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days for which utilization metrics were analyzed for the instance.',
        }),
    ).exactOptional(),
    recommendationOptions: RecommendationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the recommendation options for the instance.',
        }),
    ).exactOptional(),
    recommendationSources: RecommendationSourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the source resource of the recommendation.',
        }),
    ).exactOptional(),
    lastRefreshTimestamp: LastRefreshTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of when the instance recommendation was last generated.',
        }),
    ).exactOptional(),
    currentPerformanceRisk: CurrentPerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            'The risk of the current instance not meeting the performance needs of its workloads. The higher the risk, the more likely the current instance cannot meet the performance requirements of its workload.',
        }),
    ).exactOptional(),
    effectiveRecommendationPreferences: EffectiveRecommendationPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the effective recommendation preferences for the instance.',
        }),
    ).exactOptional(),
    inferredWorkloadTypes: InferredWorkloadTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The applications that might be running on the instance as inferred by Compute Optimizer.</p> <p>Compute Optimizer can infer if one of the following applications might be running on the instance:</p> <ul> <li> <p> <code>AmazonEmr</code> - Infers that Amazon EMR might be running on the instance.</p> </li> <li> <p> <code>ApacheCassandra</code> - Infers that Apache Cassandra might be running on the instance.</p> </li> <li> <p> <code>ApacheHadoop</code> - Infers that Apache Hadoop might be running on the instance.</p> </li> <li> <p> <code>Memcached</code> - Infers that Memcached might be running on the instance.</p> </li> <li> <p> <code>NGINX</code> - Infers that NGINX might be running on the instance.</p> </li> <li> <p> <code>PostgreSql</code> - Infers that PostgreSQL might be running on the instance.</p> </li> <li> <p> <code>Redis</code> - Infers that Redis might be running on the instance.</p> </li> <li> <p> <code>Kafka</code> - Infers that Kafka might be running on the instance.</p> </li> </ul>',
        }),
    ).exactOptional(),
    instanceState: InstanceStateSchema.and(
      z
        .any()
        .openapi({
          description: ' The state of the instance when the recommendation was generated. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon EC2 instance recommendation.', required: [] })
  .openapi('InstanceRecommendation')

const InstanceRecommendationsSchema = z
  .array(InstanceRecommendationSchema)
  .openapi('InstanceRecommendations')

const GetEC2InstanceRecommendationsResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of instance recommendations.</p> <p>This value is null when there are no more pages of instance recommendations to return.</p>',
        }),
    ).exactOptional(),
    instanceRecommendations: InstanceRecommendationsSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe instance recommendations.' }),
    ).exactOptional(),
    errors: GetRecommendationErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects that describe errors of the request.</p> <p>For example, an error is returned if you request recommendations for an instance of an unsupported instance family.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEC2InstanceRecommendationsResponse')

const InstanceArnsSchema = z.array(InstanceArnSchema).openapi('InstanceArns')

const GetEC2InstanceRecommendationsRequestSchema = z
  .object({
    instanceArns: InstanceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the instances for which to return recommendations.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token to advance to the next page of instance recommendations.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of instance recommendations to return with a single request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
    filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that returns a more specific list of instance recommendations.',
        }),
    ).exactOptional(),
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the Amazon Web Services account for which to return instance recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to return instance recommendations.</p> <p>Only one account ID can be specified per request.</p>',
        }),
    ).exactOptional(),
    recommendationPreferences: RecommendationPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object to specify the preferences for the Amazon EC2 instance recommendations to return in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetEC2InstanceRecommendationsRequest', required: [] })
  .openapi('GetEC2InstanceRecommendationsRequest')

const RecommendedInstanceTypeSchema = z.string().openapi('RecommendedInstanceType')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimestampsSchema = z.array(TimestampSchema).openapi('Timestamps')

const MetricValuesSchema = z.array(MetricValueSchema).openapi('MetricValues')

const ProjectedMetricSchema = z
  .object({
    name: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the projected utilization metric.</p> <p>The following projected utilization metrics are returned:</p> <ul> <li> <p> <code>Cpu</code> - The projected percentage of allocated EC2 compute units that would be in use on the recommendation option had you used that resource during the analyzed period. This metric identifies the processing power required to run an application on the recommendation option.</p> <p>Depending on the instance type, tools in your operating system can show a lower percentage than CloudWatch when the instance is not allocated a full processor core.</p> <p>Units: Percent</p> </li> <li> <p> <code>Memory</code> - The percentage of memory that would be in use on the recommendation option had you used that resource during the analyzed period. This metric identifies the amount of memory required to run an application on the recommendation option.</p> <p>Units: Percent</p> <note> <p>The <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note> </li> </ul>',
        }),
    ).exactOptional(),
    timestamps: TimestampsSchema.and(
      z.any().openapi({ description: 'The timestamps of the projected utilization metric.' }),
    ).exactOptional(),
    values: MetricValuesSchema.and(
      z.any().openapi({ description: 'The values of the projected utilization metrics.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. This represents the projected utilization of a recommendation option had you used that resource during the analyzed period.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>',
    required: [],
  })
  .openapi('ProjectedMetric')

const ProjectedMetricsSchema = z.array(ProjectedMetricSchema).openapi('ProjectedMetrics')

const RecommendedOptionProjectedMetricSchema = z
  .object({
    recommendedInstanceType: RecommendedInstanceTypeSchema.and(
      z.any().openapi({ description: 'The recommended instance type.' }),
    ).exactOptional(),
    rank: RankSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rank of the recommendation option projected metric.</p> <p>The top recommendation option is ranked as <code>1</code>.</p> <p>The projected metric rank correlates to the recommendation option rank. For example, the projected metric ranked as <code>1</code> is related to the recommendation option that is also ranked as <code>1</code> in the same response.</p>',
        }),
    ).exactOptional(),
    projectedMetrics: ProjectedMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe a projected utilization metric.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>',
    required: [],
  })
  .openapi('RecommendedOptionProjectedMetric')

const RecommendedOptionProjectedMetricsSchema = z
  .array(RecommendedOptionProjectedMetricSchema)
  .openapi('RecommendedOptionProjectedMetrics')

const GetEC2RecommendationProjectedMetricsResponseSchema = z
  .object({
    recommendedOptionProjectedMetrics: RecommendedOptionProjectedMetricsSchema.and(
      z.any().openapi({ description: 'An array of objects that describes projected metrics.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEC2RecommendationProjectedMetricsResponse')

const PeriodSchema = z.int().openapi('Period')

const GetEC2RecommendationProjectedMetricsRequestSchema = z
  .object({
    instanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the instances for which to return recommendation projected metrics.',
        }),
    ),
    stat: MetricStatisticSchema.and(
      z.any().openapi({ description: 'The statistic of the projected metrics.' }),
    ),
    period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description: 'The granularity, in seconds, of the projected metrics data points.',
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the first projected metrics data point to return.',
        }),
    ),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the last projected metrics data point to return.',
        }),
    ),
    recommendationPreferences: RecommendationPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object to specify the preferences for the Amazon EC2 recommendation projected metrics to return in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['instanceArn', 'stat', 'period', 'startTime', 'endTime'],
    title: 'GetEC2RecommendationProjectedMetricsRequest',
  })
  .openapi('GetEC2RecommendationProjectedMetricsRequest')

const CpuSizeSchema = z.int().openapi('CpuSize')

const MemorySizeSchema = z.int().openapi('MemorySize')

const ECSServiceMetricNameSchema = z.enum(['Cpu', 'Memory']).openapi('ECSServiceMetricName')

const ECSServiceProjectedMetricSchema = z
  .object({
    name: ECSServiceMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The name of the projected metric. </p> <p>The following metrics are available:</p> <ul> <li> <p> <code>Cpu</code> — The percentage of allocated compute units that are currently in use on the service tasks.</p> </li> <li> <p> <code>Memory</code> — The percentage of memory that's currently in use on the service tasks.</p> </li> </ul>",
        }),
    ).exactOptional(),
    timestamps: TimestampsSchema.and(
      z.any().openapi({ description: ' The timestamps of the projected metric. ' }),
    ).exactOptional(),
    upperBoundValues: MetricValuesSchema.and(
      z.any().openapi({ description: ' The upper bound values for the projected metric. ' }),
    ).exactOptional(),
    lowerBoundValues: MetricValuesSchema.and(
      z.any().openapi({ description: ' The lower bound values for the projected metric. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p>',
    required: [],
  })
  .openapi('ECSServiceProjectedMetric')

const ECSServiceProjectedMetricsSchema = z
  .array(ECSServiceProjectedMetricSchema)
  .openapi('ECSServiceProjectedMetrics')

const ECSServiceRecommendedOptionProjectedMetricSchema = z
  .object({
    recommendedCpuUnits: CpuSizeSchema.and(
      z.any().openapi({ description: ' The recommended CPU size for the Amazon ECS service. ' }),
    ).exactOptional(),
    recommendedMemorySize: MemorySizeSchema.and(
      z.any().openapi({ description: ' The recommended memory size for the Amazon ECS service. ' }),
    ).exactOptional(),
    projectedMetrics: ECSServiceProjectedMetricsSchema.and(
      z.any().openapi({ description: ' An array of objects that describe the projected metric. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p>',
    required: [],
  })
  .openapi('ECSServiceRecommendedOptionProjectedMetric')

const ECSServiceRecommendedOptionProjectedMetricsSchema = z
  .array(ECSServiceRecommendedOptionProjectedMetricSchema)
  .openapi('ECSServiceRecommendedOptionProjectedMetrics')

const GetECSServiceRecommendationProjectedMetricsResponseSchema = z
  .object({
    recommendedOptionProjectedMetrics: ECSServiceRecommendedOptionProjectedMetricsSchema.and(
      z
        .any()
        .openapi({ description: ' An array of objects that describes the projected metrics. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetECSServiceRecommendationProjectedMetricsResponse')

const ServiceArnSchema = z.string().openapi('ServiceArn')

const GetECSServiceRecommendationProjectedMetricsRequestSchema = z
  .object({
    serviceArn: ServiceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The ARN that identifies the Amazon ECS service. </p> <p> The following is the format of the ARN: </p> <p> <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code> </p>',
        }),
    ),
    stat: MetricStatisticSchema.and(
      z.any().openapi({ description: ' The statistic of the projected metrics. ' }),
    ),
    period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description: ' The granularity, in seconds, of the projected metrics data points. ',
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: ' The timestamp of the first projected metrics data point to return. ',
        }),
    ),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: ' The timestamp of the last projected metrics data point to return. ',
        }),
    ),
  })
  .openapi({
    required: ['serviceArn', 'stat', 'period', 'startTime', 'endTime'],
    title: 'GetECSServiceRecommendationProjectedMetricsRequest',
  })
  .openapi('GetECSServiceRecommendationProjectedMetricsRequest')

const NullableMemorySchema = z.int().openapi('NullableMemory')

const NullableCpuSchema = z.int().openapi('NullableCpu')

const ContainerNameSchema = z.string().openapi('ContainerName')

const NullableMemoryReservationSchema = z.int().openapi('NullableMemoryReservation')

const MemorySizeConfigurationSchema = z
  .object({
    memory: NullableMemorySchema.and(
      z.any().openapi({ description: ' The amount of memory in the container. ' }),
    ).exactOptional(),
    memoryReservation: NullableMemoryReservationSchema.and(
      z.any().openapi({ description: ' The limit of memory reserve for the container. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The memory size configurations of a container. ', required: [] })
  .openapi('MemorySizeConfiguration')

const ContainerConfigurationSchema = z
  .object({
    containerName: ContainerNameSchema.and(
      z.any().openapi({ description: ' The name of the container. ' }),
    ).exactOptional(),
    memorySizeConfiguration: MemorySizeConfigurationSchema.and(
      z.any().openapi({ description: ' The memory size configurations for the container. ' }),
    ).exactOptional(),
    cpu: NullableCpuSchema.and(
      z.any().openapi({ description: ' The number of CPU units reserved for the container. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Describes the container configurations within the tasks of your Amazon ECS service. ',
    required: [],
  })
  .openapi('ContainerConfiguration')

const ContainerConfigurationsSchema = z
  .array(ContainerConfigurationSchema)
  .openapi('ContainerConfigurations')

const AutoScalingConfigurationSchema = z
  .enum(['TargetTrackingScalingCpu', 'TargetTrackingScalingMemory'])
  .openapi('AutoScalingConfiguration')

const TaskDefinitionArnSchema = z.string().openapi('TaskDefinitionArn')

const ServiceConfigurationSchema = z
  .object({
    memory: NullableMemorySchema.and(
      z
        .any()
        .openapi({
          description: ' The amount of memory used by the tasks in the Amazon ECS service. ',
        }),
    ).exactOptional(),
    cpu: NullableCpuSchema.and(
      z
        .any()
        .openapi({
          description: ' The number of CPU units used by the tasks in the Amazon ECS service. ',
        }),
    ).exactOptional(),
    containerConfigurations: ContainerConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: ' The container configurations within a task of an Amazon ECS service. ',
        }),
    ).exactOptional(),
    autoScalingConfiguration: AutoScalingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Describes the Auto Scaling configuration methods for an Amazon ECS service. This affects the generated recommendations. For example, if Auto Scaling is configured on a service’s CPU, then Compute Optimizer doesn’t generate CPU size recommendations. </p> <p>The Auto Scaling configuration methods include:</p> <ul> <li> <p> <code>TARGET_TRACKING_SCALING_CPU</code> — If the Amazon ECS service is configured to use target scaling on CPU, Compute Optimizer doesn\'t generate CPU recommendations.</p> </li> <li> <p> <code>TARGET_TRACKING_SCALING_MEMORY</code> — If the Amazon ECS service is configured to use target scaling on memory, Compute Optimizer doesn\'t generate memory recommendations.</p> </li> </ul> <p>For more information about step scaling and target scaling, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html"> Step scaling policies for Application Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html"> Target tracking scaling policies for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
        }),
    ).exactOptional(),
    taskDefinitionArn: TaskDefinitionArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The task definition ARN used by the tasks in the Amazon ECS service. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Amazon ECS service configurations used for recommendations. ',
    required: [],
  })
  .openapi('ServiceConfiguration')

const ECSServiceMetricStatisticSchema = z
  .enum(['Maximum', 'Average'])
  .openapi('ECSServiceMetricStatistic')

const ECSServiceUtilizationMetricSchema = z
  .object({
    name: ECSServiceMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The name of the utilization metric. </p> <p>The following utilization metrics are available:</p> <ul> <li> <p> <code>Cpu</code> — The amount of CPU capacity that's used in the service.</p> </li> <li> <p> <code>Memory</code> — The amount of memory that's used in the service.</p> </li> </ul>",
        }),
    ).exactOptional(),
    statistic: ECSServiceMetricStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic of the utilization metric.</p> <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the <code>Maximum</code> statistic, which is the highest value observed during the specified period.</p> <p>The Compute Optimizer console displays graphs for some utilization metrics using the <code>Average</code> statistic, which is the value of <code>Sum</code> / <code>SampleCount</code> during the specified period. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource recommendations</a> in the <i>Compute Optimizer User Guide</i>. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>',
        }),
    ).exactOptional(),
    value: MetricValueSchema.and(
      z.any().openapi({ description: ' The value of the utilization metric. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Describes the utilization metric of an Amazon ECS service. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p>',
    required: [],
  })
  .openapi('ECSServiceUtilizationMetric')

const ECSServiceUtilizationMetricsSchema = z
  .array(ECSServiceUtilizationMetricSchema)
  .openapi('ECSServiceUtilizationMetrics')

const ECSServiceLaunchTypeSchema = z.enum(['EC2', 'Fargate']).openapi('ECSServiceLaunchType')

const ECSServiceRecommendationFindingSchema = z
  .enum(['Optimized', 'Underprovisioned', 'Overprovisioned'])
  .openapi('ECSServiceRecommendationFinding')

const ECSServiceRecommendationFindingReasonCodeSchema = z
  .enum([
    'MemoryOverprovisioned',
    'MemoryUnderprovisioned',
    'CPUOverprovisioned',
    'CPUUnderprovisioned',
  ])
  .openapi('ECSServiceRecommendationFindingReasonCode')

const ECSServiceRecommendationFindingReasonCodesSchema = z
  .array(ECSServiceRecommendationFindingReasonCodeSchema)
  .openapi('ECSServiceRecommendationFindingReasonCodes')

const LowerBoundValueSchema = z.float64().openapi('LowerBoundValue')

const UpperBoundValueSchema = z.float64().openapi('UpperBoundValue')

const ECSServiceProjectedUtilizationMetricSchema = z
  .object({
    name: ECSServiceMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The name of the projected utilization metric. </p> <p>The following utilization metrics are available:</p> <ul> <li> <p> <code>Cpu</code> — The percentage of allocated compute units that are currently in use on the service tasks.</p> </li> <li> <p> <code>Memory</code> — The percentage of memory that's currently in use on the service tasks.</p> </li> </ul>",
        }),
    ).exactOptional(),
    statistic: ECSServiceMetricStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic of the projected utilization metric.</p> <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the <code>Maximum</code> statistic, which is the highest value observed during the specified period.</p> <p>The Compute Optimizer console displays graphs for some utilization metrics using the <code>Average</code> statistic, which is the value of <code>Sum</code> / <code>SampleCount</code> during the specified period. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource recommendations</a> in the <i>Compute Optimizer User Guide</i>. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>',
        }),
    ).exactOptional(),
    lowerBoundValue: LowerBoundValueSchema.and(
      z
        .any()
        .openapi({
          description: ' The lower bound values for the projected utilization metrics. ',
        }),
    ).exactOptional(),
    upperBoundValue: UpperBoundValueSchema.and(
      z
        .any()
        .openapi({
          description: ' The upper bound values for the projected utilization metrics. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Describes the projected utilization metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p>',
    required: [],
  })
  .openapi('ECSServiceProjectedUtilizationMetric')

const ECSServiceProjectedUtilizationMetricsSchema = z
  .array(ECSServiceProjectedUtilizationMetricSchema)
  .openapi('ECSServiceProjectedUtilizationMetrics')

const ContainerRecommendationSchema = z
  .object({
    containerName: ContainerNameSchema.and(
      z.any().openapi({ description: ' The name of the container. ' }),
    ).exactOptional(),
    memorySizeConfiguration: MemorySizeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: ' The recommended memory size configurations for the container. ',
        }),
    ).exactOptional(),
    cpu: NullableCpuSchema.and(
      z
        .any()
        .openapi({
          description: ' The recommended number of CPU units reserved for the container. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The CPU and memory recommendations for a container within the tasks of your Amazon ECS service. ',
    required: [],
  })
  .openapi('ContainerRecommendation')

const ContainerRecommendationsSchema = z
  .array(ContainerRecommendationSchema)
  .openapi('ContainerRecommendations')

const ECSServiceRecommendationOptionSchema = z
  .object({
    memory: NullableMemorySchema.and(
      z
        .any()
        .openapi({
          description: ' The memory size of the Amazon ECS service recommendation option. ',
        }),
    ).exactOptional(),
    cpu: NullableCpuSchema.and(
      z
        .any()
        .openapi({
          description: ' The CPU size of the Amazon ECS service recommendation option. ',
        }),
    ).exactOptional(),
    savingsOpportunity: SavingsOpportunitySchema.exactOptional(),
    projectedUtilizationMetrics: ECSServiceProjectedUtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of objects that describe the projected utilization metrics of the Amazon ECS service recommendation option. ',
        }),
    ).exactOptional(),
    containerRecommendations: ContainerRecommendationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The CPU and memory size recommendations for the containers within the task of your Amazon ECS service. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Describes the recommendation options for an Amazon ECS service. ',
    required: [],
  })
  .openapi('ECSServiceRecommendationOption')

const ECSServiceRecommendationOptionsSchema = z
  .array(ECSServiceRecommendationOptionSchema)
  .openapi('ECSServiceRecommendationOptions')

const ECSServiceRecommendationSchema = z
  .object({
    serviceArn: ServiceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The Amazon Resource Name (ARN) of the current Amazon ECS service. </p> <p> The following is the format of the ARN: </p> <p> <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code> </p>',
        }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Web Services account ID of the Amazon ECS service. ',
        }),
    ).exactOptional(),
    currentServiceConfiguration: ServiceConfigurationSchema.and(
      z.any().openapi({ description: ' The configuration of the current Amazon ECS service. ' }),
    ).exactOptional(),
    utilizationMetrics: ECSServiceUtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of objects that describe the utilization metrics of the Amazon ECS service. ',
        }),
    ).exactOptional(),
    lookbackPeriodInDays: LookBackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of days the Amazon ECS service utilization metrics were analyzed. ',
        }),
    ).exactOptional(),
    launchType: ECSServiceLaunchTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The launch type the Amazon ECS service is using. </p> <note> <p>Compute Optimizer only supports the Fargate launch type.</p> </note>',
        }),
    ).exactOptional(),
    lastRefreshTimestamp: LastRefreshTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The timestamp of when the Amazon ECS service recommendation was last generated. ',
        }),
    ).exactOptional(),
    finding: ECSServiceRecommendationFindingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The finding classification of an Amazon ECS service. </p> <p>Findings for Amazon ECS services include:</p> <ul> <li> <p> <b> <code>Underprovisioned</code> </b> — When Compute Optimizer detects that there’s not enough memory or CPU, an Amazon ECS service is considered under-provisioned. An under-provisioned service might result in poor application performance.</p> </li> <li> <p> <b> <code>Overprovisioned</code> </b> — When Compute Optimizer detects that there’s excessive memory or CPU, an Amazon ECS service is considered over-provisioned. An over-provisioned service might result in additional infrastructure costs. </p> </li> <li> <p> <b> <code>Optimized</code> </b> — When both the CPU and memory of your Amazon ECS service meet the performance requirements of your workload, the service is considered optimized.</p> </li> </ul>',
        }),
    ).exactOptional(),
    findingReasonCodes: ECSServiceRecommendationFindingReasonCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The reason for the finding classification of an Amazon ECS service. </p> <p>Finding reason codes for Amazon ECS services include:</p> <ul> <li> <p> <b> <code>CPUUnderprovisioned</code> </b> — The service CPU configuration can be sized up to enhance the performance of your workload. This is identified by analyzing the <code>CPUUtilization</code> metric of the current service during the look-back period.</p> </li> <li> <p> <b> <code>CPUOverprovisioned</code> </b> — The service CPU configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>CPUUtilization</code> metric of the current service during the look-back period. </p> </li> <li> <p> <b> <code>MemoryUnderprovisioned</code> </b> — The service memory configuration can be sized up to enhance the performance of your workload. This is identified by analyzing the <code>MemoryUtilization</code> metric of the current service during the look-back period.</p> </li> <li> <p> <b> <code>MemoryOverprovisioned</code> </b> — The service memory configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the <code>MemoryUtilization</code> metric of the current service during the look-back period.</p> </li> </ul>',
        }),
    ).exactOptional(),
    serviceRecommendationOptions: ECSServiceRecommendationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of objects that describe the recommendation options for the Amazon ECS service. ',
        }),
    ).exactOptional(),
    currentPerformanceRisk: CurrentPerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            " The risk of the current Amazon ECS service not meeting the performance needs of its workloads. The higher the risk, the more likely the current service can't meet the performance requirements of its workload. ",
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Describes an Amazon ECS service recommendation. ', required: [] })
  .openapi('ECSServiceRecommendation')

const ECSServiceRecommendationsSchema = z
  .array(ECSServiceRecommendationSchema)
  .openapi('ECSServiceRecommendations')

const GetECSServiceRecommendationsResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token to advance to the next page of Amazon ECS service recommendations. ',
        }),
    ).exactOptional(),
    ecsServiceRecommendations: ECSServiceRecommendationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of objects that describe the Amazon ECS service recommendations. ',
        }),
    ).exactOptional(),
    errors: GetRecommendationErrorsSchema.and(
      z
        .any()
        .openapi({ description: ' An array of objects that describe errors of the request. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetECSServiceRecommendationsResponse')

const ServiceArnsSchema = z.array(ServiceArnSchema).openapi('ServiceArns')

const GetECSServiceRecommendationsRequestSchema = z
  .object({
    serviceArns: ServiceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The ARN that identifies the Amazon ECS service. </p> <p> The following is the format of the ARN: </p> <p> <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code> </p>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token to advance to the next page of Amazon ECS service recommendations. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of Amazon ECS service recommendations to return with a single request. </p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
    filters: ECSServiceRecommendationFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of objects to specify a filter that returns a more specific list of Amazon ECS service recommendations. ',
        }),
    ).exactOptional(),
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Return the Amazon ECS service recommendations to the specified Amazon Web Services account IDs. </p> <p>If your account is the management account or the delegated administrator of an organization, use this parameter to return the Amazon ECS service recommendations to specific member accounts.</p> <p>You can only specify one account ID per request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetECSServiceRecommendationsRequest', required: [] })
  .openapi('GetECSServiceRecommendationsRequest')

const GetEffectiveRecommendationPreferencesResponseSchema = z
  .object({
    enhancedInfrastructureMetrics: EnhancedInfrastructureMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the enhanced infrastructure metrics recommendation preference. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>A status of <code>Active</code> confirms that the preference is applied in the latest recommendation refresh, and a status of <code>Inactive</code> confirms that it\'s not yet applied to recommendations.</p> <p>To validate whether the preference is applied to your last generated set of recommendations, review the <code>effectiveRecommendationPreferences</code> value in the response of the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    externalMetricsPreference: ExternalMetricsPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The provider of the external metrics recommendation preference. Considers all applicable preferences that you might have set at the account and organization level.</p> <p>If the preference is applied in the latest recommendation refresh, an object with a valid <code>source</code> value appears in the response. If the preference isn\'t applied to the recommendations already, then this object doesn\'t appear in the response.</p> <p>To validate whether the preference is applied to your last generated set of recommendations, review the <code>effectiveRecommendationPreferences</code> value in the response of the <a>GetEC2InstanceRecommendations</a> actions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/external-metrics-ingestion.html">Enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEffectiveRecommendationPreferencesResponse')

const ResourceArnSchema = z.string().openapi('ResourceArn')

const GetEffectiveRecommendationPreferencesRequestSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource for which to confirm effective recommendation preferences. Only EC2 instance and Auto Scaling group ARNs are currently supported.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'GetEffectiveRecommendationPreferencesRequest' })
  .openapi('GetEffectiveRecommendationPreferencesRequest')

const StatusSchema = z.enum(['Active', 'Inactive', 'Pending', 'Failed']).openapi('Status')

const StatusReasonSchema = z.string().openapi('StatusReason')

const MemberAccountsEnrolledSchema = z.boolean().openapi('MemberAccountsEnrolled')

const NumberOfMemberAccountsOptedInSchema = z.int().openapi('NumberOfMemberAccountsOptedIn')

const GetEnrollmentStatusResponseSchema = z
  .object({
    status: StatusSchema.and(
      z.any().openapi({ description: 'The enrollment status of the account.' }),
    ).exactOptional(),
    statusReason: StatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reason for the enrollment status of the account.</p> <p>For example, an account might show a status of <code>Pending</code> because member accounts of an organization require more time to be enrolled in the service.</p>',
        }),
    ).exactOptional(),
    memberAccountsEnrolled: MemberAccountsEnrolledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Confirms the enrollment status of member accounts of the organization, if the account is a management account of an organization.',
        }),
    ).exactOptional(),
    lastUpdatedTimestamp: LastUpdatedTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp, in seconds, of when the account enrollment status was last updated.',
        }),
    ).exactOptional(),
    numberOfMemberAccountsOptedIn: NumberOfMemberAccountsOptedInSchema.and(
      z
        .any()
        .openapi({
          description:
            'The count of organization member accounts that are opted in to the service, if your account is an organization management account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEnrollmentStatusResponse')

const GetEnrollmentStatusRequestSchema = z
  .object({})
  .openapi({ title: 'GetEnrollmentStatusRequest' })
  .openapi('GetEnrollmentStatusRequest')

const AccountEnrollmentStatusSchema = z
  .object({
    accountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID.' }),
    ).exactOptional(),
    status: StatusSchema.and(
      z.any().openapi({ description: 'The account enrollment status.' }),
    ).exactOptional(),
    statusReason: StatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reason for the account enrollment status.</p> <p>For example, an account might show a status of <code>Pending</code> because member accounts of an organization require more time to be enrolled in the service.</p>',
        }),
    ).exactOptional(),
    lastUpdatedTimestamp: LastUpdatedTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp, in seconds, of when the account enrollment status was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Describes the enrollment status of an organization's member accounts in Compute Optimizer.",
    required: [],
  })
  .openapi('AccountEnrollmentStatus')

const AccountEnrollmentStatusesSchema = z
  .array(AccountEnrollmentStatusSchema)
  .openapi('AccountEnrollmentStatuses')

const GetEnrollmentStatusesForOrganizationResponseSchema = z
  .object({
    accountEnrollmentStatuses: AccountEnrollmentStatusesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the enrollment statuses of organization member accounts.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of account enrollment statuses.</p> <p>This value is null when there are no more pages of account enrollment statuses to return.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEnrollmentStatusesForOrganizationResponse')

const EnrollmentFilterNameSchema = z.literal('Status').openapi('EnrollmentFilterName')

const EnrollmentFilterSchema = z
  .object({
    name: EnrollmentFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the filter.</p> <p>Specify <code>Status</code> to return accounts with a specific enrollment status (for example, <code>Active</code>).</p>',
        }),
    ).exactOptional(),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the filter.</p> <p>The valid values are <code>Active</code>, <code>Inactive</code>, <code>Pending</code>, and <code>Failed</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.',
    required: [],
  })
  .openapi('EnrollmentFilter')

const EnrollmentFiltersSchema = z.array(EnrollmentFilterSchema).openapi('EnrollmentFilters')

const GetEnrollmentStatusesForOrganizationRequestSchema = z
  .object({
    filters: EnrollmentFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that returns a more specific list of account enrollment statuses.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token to advance to the next page of account enrollment statuses.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of account enrollment statuses to return with a single request. You can specify up to 100 statuses to return with each request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetEnrollmentStatusesForOrganizationRequest', required: [] })
  .openapi('GetEnrollmentStatusesForOrganizationRequest')

const FunctionArnSchema = z.string().openapi('FunctionArn')

const FunctionVersionSchema = z.string().openapi('FunctionVersion')

const NumberOfInvocationsSchema = z.int().openapi('NumberOfInvocations')

const LambdaFunctionMetricNameSchema = z
  .enum(['Duration', 'Memory'])
  .openapi('LambdaFunctionMetricName')

const LambdaFunctionMetricStatisticSchema = z
  .enum(['Maximum', 'Average'])
  .openapi('LambdaFunctionMetricStatistic')

const LambdaFunctionUtilizationMetricSchema = z
  .object({
    name: LambdaFunctionMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the utilization metric.</p> <p>The following utilization metrics are available:</p> <ul> <li> <p> <code>Duration</code> - The amount of time that your function code spends processing an event.</p> </li> <li> <p> <code>Memory</code> - The amount of memory used per invocation.</p> </li> </ul>',
        }),
    ).exactOptional(),
    statistic: LambdaFunctionMetricStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic of the utilization metric.</p> <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the <code>Maximum</code> statistic, which is the highest value observed during the specified period.</p> <p>The Compute Optimizer console displays graphs for some utilization metrics using the <code>Average</code> statistic, which is the value of <code>Sum</code> / <code>SampleCount</code> during the specified period. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource recommendations</a> in the <i>Compute Optimizer User Guide</i>. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>',
        }),
    ).exactOptional(),
    value: MetricValueSchema.and(
      z.any().openapi({ description: 'The value of the utilization metric.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a utilization metric of an Lambda function.', required: [] })
  .openapi('LambdaFunctionUtilizationMetric')

const LambdaFunctionUtilizationMetricsSchema = z
  .array(LambdaFunctionUtilizationMetricSchema)
  .openapi('LambdaFunctionUtilizationMetrics')

const LambdaFunctionRecommendationFindingSchema = z
  .enum(['Optimized', 'NotOptimized', 'Unavailable'])
  .openapi('LambdaFunctionRecommendationFinding')

const LambdaFunctionRecommendationFindingReasonCodeSchema = z
  .enum(['MemoryOverprovisioned', 'MemoryUnderprovisioned', 'InsufficientData', 'Inconclusive'])
  .openapi('LambdaFunctionRecommendationFindingReasonCode')

const LambdaFunctionRecommendationFindingReasonCodesSchema = z
  .array(LambdaFunctionRecommendationFindingReasonCodeSchema)
  .openapi('LambdaFunctionRecommendationFindingReasonCodes')

const LambdaFunctionMemoryMetricNameSchema = z
  .literal('Duration')
  .openapi('LambdaFunctionMemoryMetricName')

const LambdaFunctionMemoryMetricStatisticSchema = z
  .enum(['LowerBound', 'UpperBound', 'Expected'])
  .openapi('LambdaFunctionMemoryMetricStatistic')

const LambdaFunctionMemoryProjectedMetricSchema = z
  .object({
    name: LambdaFunctionMemoryMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the projected utilization metric.' }),
    ).exactOptional(),
    statistic: LambdaFunctionMemoryMetricStatisticSchema.and(
      z.any().openapi({ description: 'The statistic of the projected utilization metric.' }),
    ).exactOptional(),
    value: MetricValueSchema.and(
      z.any().openapi({ description: 'The values of the projected utilization metrics.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a projected utilization metric of an Lambda function recommendation option.',
    required: [],
  })
  .openapi('LambdaFunctionMemoryProjectedMetric')

const LambdaFunctionMemoryProjectedMetricsSchema = z
  .array(LambdaFunctionMemoryProjectedMetricSchema)
  .openapi('LambdaFunctionMemoryProjectedMetrics')

const LambdaFunctionMemoryRecommendationOptionSchema = z
  .object({
    rank: RankSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rank of the function recommendation option.</p> <p>The top recommendation option is ranked as <code>1</code>.</p>',
        }),
    ).exactOptional(),
    memorySize: MemorySizeSchema.and(
      z
        .any()
        .openapi({ description: 'The memory size, in MB, of the function recommendation option.' }),
    ).exactOptional(),
    projectedUtilizationMetrics: LambdaFunctionMemoryProjectedMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the projected utilization metrics of the function recommendation option.',
        }),
    ).exactOptional(),
    savingsOpportunity: SavingsOpportunitySchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the savings opportunity for the Lambda function recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a recommendation option for an Lambda function.',
    required: [],
  })
  .openapi('LambdaFunctionMemoryRecommendationOption')

const LambdaFunctionMemoryRecommendationOptionsSchema = z
  .array(LambdaFunctionMemoryRecommendationOptionSchema)
  .openapi('LambdaFunctionMemoryRecommendationOptions')

const LambdaFunctionRecommendationSchema = z
  .object({
    functionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the current function.' }),
    ).exactOptional(),
    functionVersion: FunctionVersionSchema.and(
      z.any().openapi({ description: 'The version number of the current function.' }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID of the function.' }),
    ).exactOptional(),
    currentMemorySize: MemorySizeSchema.and(
      z
        .any()
        .openapi({
          description: "The amount of memory, in MB, that's allocated to the current function.",
        }),
    ).exactOptional(),
    numberOfInvocations: NumberOfInvocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of times your function code was applied during the look-back period.',
        }),
    ).exactOptional(),
    utilizationMetrics: LambdaFunctionUtilizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that describe the utilization metrics of the function.',
        }),
    ).exactOptional(),
    lookbackPeriodInDays: LookBackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days for which utilization metrics were analyzed for the function.',
        }),
    ).exactOptional(),
    lastRefreshTimestamp: LastRefreshTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of when the function recommendation was last generated.',
        }),
    ).exactOptional(),
    finding: LambdaFunctionRecommendationFindingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The finding classification of the function.</p> <p>Findings for functions include:</p> <ul> <li> <p> <b> <code>Optimized</code> </b> — The function is correctly provisioned to run your workload based on its current configuration and its utilization history. This finding classification does not include finding reason codes.</p> </li> <li> <p> <b> <code>NotOptimized</code> </b> — The function is performing at a higher level (over-provisioned) or at a lower level (under-provisioned) than required for your workload because its current configuration is not optimal. Over-provisioned resources might lead to unnecessary infrastructure cost, and under-provisioned resources might lead to poor application performance. This finding classification can include the <code>MemoryUnderprovisioned</code> and <code>MemoryUnderprovisioned</code> finding reason codes.</p> </li> <li> <p> <b> <code>Unavailable</code> </b> — Compute Optimizer was unable to generate a recommendation for the function. This could be because the function has not accumulated sufficient metric data, or the function does not qualify for a recommendation. This finding classification can include the <code>InsufficientData</code> and <code>Inconclusive</code> finding reason codes.</p> <note> <p>Functions with a finding of unavailable are not returned unless you specify the <code>filter</code> parameter with a value of <code>Unavailable</code> in your <code>GetLambdaFunctionRecommendations</code> request.</p> </note> </li> </ul>',
        }),
    ).exactOptional(),
    findingReasonCodes: LambdaFunctionRecommendationFindingReasonCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reason for the finding classification of the function.</p> <note> <p>Functions that have a finding classification of <code>Optimized</code> don\'t have a finding reason code.</p> </note> <p>Finding reason codes for functions include:</p> <ul> <li> <p> <b> <code>MemoryOverprovisioned</code> </b> — The function is over-provisioned when its memory configuration can be sized down while still meeting the performance requirements of your workload. An over-provisioned function might lead to unnecessary infrastructure cost. This finding reason code is part of the <code>NotOptimized</code> finding classification.</p> </li> <li> <p> <b> <code>MemoryUnderprovisioned</code> </b> — The function is under-provisioned when its memory configuration doesn\'t meet the performance requirements of the workload. An under-provisioned function might lead to poor application performance. This finding reason code is part of the <code>NotOptimized</code> finding classification.</p> </li> <li> <p> <b> <code>InsufficientData</code> </b> — The function does not have sufficient metric data for Compute Optimizer to generate a recommendation. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. This finding reason code is part of the <code>Unavailable</code> finding classification.</p> </li> <li> <p> <b> <code>Inconclusive</code> </b> — The function does not qualify for a recommendation because Compute Optimizer cannot generate a recommendation with a high degree of confidence. This finding reason code is part of the <code>Unavailable</code> finding classification.</p> </li> </ul>',
        }),
    ).exactOptional(),
    memorySizeRecommendationOptions: LambdaFunctionMemoryRecommendationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the memory configuration recommendation options for the function.',
        }),
    ).exactOptional(),
    currentPerformanceRisk: CurrentPerformanceRiskSchema.and(
      z
        .any()
        .openapi({
          description:
            'The risk of the current Lambda function not meeting the performance needs of its workloads. The higher the risk, the more likely the current Lambda function requires more memory.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Lambda function recommendation.', required: [] })
  .openapi('LambdaFunctionRecommendation')

const LambdaFunctionRecommendationsSchema = z
  .array(LambdaFunctionRecommendationSchema)
  .openapi('LambdaFunctionRecommendations')

const GetLambdaFunctionRecommendationsResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of function recommendations.</p> <p>This value is null when there are no more pages of function recommendations to return.</p>',
        }),
    ).exactOptional(),
    lambdaFunctionRecommendations: LambdaFunctionRecommendationsSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe function recommendations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLambdaFunctionRecommendationsResponse')

const FunctionArnsSchema = z.array(FunctionArnSchema).openapi('FunctionArns')

const GetLambdaFunctionRecommendationsRequestSchema = z
  .object({
    functionArns: FunctionArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the functions for which to return recommendations.</p> <p>You can specify a qualified or unqualified ARN. If you specify an unqualified ARN without a function version suffix, Compute Optimizer will return recommendations for the latest (<code>$LATEST</code>) version of the function. If you specify a qualified ARN with a version suffix, Compute Optimizer will return recommendations for the specified function version. For more information about using function versions, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using">Using versions</a> in the <i>Lambda Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the Amazon Web Services account for which to return function recommendations.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to return function recommendations.</p> <p>Only one account ID can be specified per request.</p>',
        }),
    ).exactOptional(),
    filters: LambdaFunctionRecommendationFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects to specify a filter that returns a more specific list of function recommendations.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token to advance to the next page of function recommendations.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of function recommendations to return with a single request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetLambdaFunctionRecommendationsRequest', required: [] })
  .openapi('GetLambdaFunctionRecommendationsRequest')

const RecommendationPreferencesDetailSchema = z
  .object({
    scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the scope of the recommendation preference.</p> <p>Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target resource type of the recommendation preference to create.</p> <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option encompasses only instances that are part of an Auto Scaling group.</p>',
        }),
    ).exactOptional(),
    enhancedInfrastructureMetrics: EnhancedInfrastructureMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the enhanced infrastructure metrics recommendation preference.</p> <p>When the recommendations page is refreshed, a status of <code>Active</code> confirms that the preference is applied to the recommendations, and a status of <code>Inactive</code> confirms that the preference isn\'t yet applied to recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    inferredWorkloadTypes: InferredWorkloadTypesPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the inferred workload types recommendation preference.</p> <p>When the recommendations page is refreshed, a status of <code>Active</code> confirms that the preference is applied to the recommendations, and a status of <code>Inactive</code> confirms that the preference isn't yet applied to recommendations.</p>",
        }),
    ).exactOptional(),
    externalMetricsPreference: ExternalMetricsPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> An object that describes the external metrics recommendation preference. </p> <p> If the preference is applied in the latest recommendation refresh, an object with a valid <code>source</code> value appears in the response. If the preference isn't applied to the recommendations already, then this object doesn't appear in the response. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a recommendation preference.', required: [] })
  .openapi('RecommendationPreferencesDetail')

const RecommendationPreferencesDetailsSchema = z
  .array(RecommendationPreferencesDetailSchema)
  .openapi('RecommendationPreferencesDetails')

const GetRecommendationPreferencesResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of recommendation preferences.</p> <p>This value is null when there are no more pages of recommendation preferences to return.</p>',
        }),
    ).exactOptional(),
    recommendationPreferencesDetails: RecommendationPreferencesDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe recommendation preferences.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRecommendationPreferencesResponse')

const GetRecommendationPreferencesRequestSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target resource type of the recommendation preference for which to return preferences.</p> <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option encompasses only instances that are part of an Auto Scaling group.</p> <note> <p>The valid values for this parameter are <code>Ec2Instance</code> and <code>AutoScalingGroup</code>.</p> </note>',
        }),
    ),
    scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the scope of the recommendation preference to return.</p> <p>You can return recommendation preferences that are created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token to advance to the next page of recommendation preferences.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of recommendation preferences to return with a single request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceType'], title: 'GetRecommendationPreferencesRequest' })
  .openapi('GetRecommendationPreferencesRequest')

const SummaryValueSchema = z.float64().openapi('SummaryValue')

const FindingReasonCodeSchema = z
  .enum(['MemoryOverprovisioned', 'MemoryUnderprovisioned'])
  .openapi('FindingReasonCode')

const ReasonCodeSummarySchema = z
  .object({
    name: FindingReasonCodeSchema.and(
      z.any().openapi({ description: 'The name of the finding reason code.' }),
    ).exactOptional(),
    value: SummaryValueSchema.and(
      z.any().openapi({ description: 'The value of the finding reason code summary.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of a finding reason code.', required: [] })
  .openapi('ReasonCodeSummary')

const ReasonCodeSummariesSchema = z.array(ReasonCodeSummarySchema).openapi('ReasonCodeSummaries')

const SummarySchema = z
  .object({
    name: FindingSchema.and(
      z.any().openapi({ description: 'The finding classification of the recommendation.' }),
    ).exactOptional(),
    value: SummaryValueSchema.and(
      z.any().openapi({ description: 'The value of the recommendation summary.' }),
    ).exactOptional(),
    reasonCodeSummaries: ReasonCodeSummariesSchema.and(
      z.any().openapi({ description: 'An array of objects that summarize a finding reason code.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of a recommendation.', required: [] })
  .openapi('Summary')

const SummariesSchema = z.array(SummarySchema).openapi('Summaries')

const HighSchema = z.int().openapi('High')

const MediumSchema = z.int().openapi('Medium')

const LowSchema = z.int().openapi('Low')

const VeryLowSchema = z.int().openapi('VeryLow')

const CurrentPerformanceRiskRatingsSchema = z
  .object({
    high: HighSchema.and(
      z
        .any()
        .openapi({
          description:
            'A count of the applicable resource types with a high performance risk rating.',
        }),
    ).exactOptional(),
    medium: MediumSchema.and(
      z
        .any()
        .openapi({
          description:
            'A count of the applicable resource types with a medium performance risk rating.',
        }),
    ).exactOptional(),
    low: LowSchema.and(
      z
        .any()
        .openapi({
          description:
            'A count of the applicable resource types with a low performance risk rating.',
        }),
    ).exactOptional(),
    veryLow: VeryLowSchema.and(
      z
        .any()
        .openapi({
          description:
            'A count of the applicable resource types with a very low performance risk rating.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes the performance risk ratings for a given resource type.</p> <p>Resources with a <code>high</code> or <code>medium</code> rating are at risk of not meeting the performance needs of their workloads, while resources with a <code>low</code> rating are performing well in their workloads.</p>',
    required: [],
  })
  .openapi('CurrentPerformanceRiskRatings')

const RecommendationSummarySchema = z
  .object({
    summaries: SummariesSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects that describe a recommendation summary.' }),
    ).exactOptional(),
    recommendationResourceType: RecommendationSourceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The resource type that the recommendation summary applies to.' }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account ID of the recommendation summary.',
        }),
    ).exactOptional(),
    savingsOpportunity: SavingsOpportunitySchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the savings opportunity for a given resource type. Savings opportunity includes the estimated monthly savings amount and percentage.',
        }),
    ).exactOptional(),
    currentPerformanceRiskRatings: CurrentPerformanceRiskRatingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the performance risk ratings for a given resource type.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of a recommendation.', required: [] })
  .openapi('RecommendationSummary')

const RecommendationSummariesSchema = z
  .array(RecommendationSummarySchema)
  .openapi('RecommendationSummaries')

const GetRecommendationSummariesResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The token to use to advance to the next page of recommendation summaries.</p> <p>This value is null when there are no more pages of recommendation summaries to return.</p>',
        }),
    ).exactOptional(),
    recommendationSummaries: RecommendationSummariesSchema.and(
      z.any().openapi({ description: 'An array of objects that summarize a recommendation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRecommendationSummariesResponse')

const GetRecommendationSummariesRequestSchema = z
  .object({
    accountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the Amazon Web Services account for which to return recommendation summaries.</p> <p>If your account is the management account of an organization, use this parameter to specify the member account for which you want to return recommendation summaries.</p> <p>Only one account ID can be specified per request.</p>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token to advance to the next page of recommendation summaries.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of recommendation summaries to return with a single request.</p> <p>To retrieve the remaining results, make another request with the returned <code>nextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRecommendationSummariesRequest', required: [] })
  .openapi('GetRecommendationSummariesRequest')

const PutRecommendationPreferencesResponseSchema = z
  .object({})
  .openapi('PutRecommendationPreferencesResponse')

const PutRecommendationPreferencesRequestSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target resource type of the recommendation preference to create.</p> <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option encompasses only instances that are part of an Auto Scaling group.</p> <note> <p>The valid values for this parameter are <code>Ec2Instance</code> and <code>AutoScalingGroup</code>.</p> </note>',
        }),
    ),
    scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that describes the scope of the recommendation preference to create.</p> <p>You can create recommendation preferences at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p> <note> <p>You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of <code>ResourceArn</code> and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances.</p> </note>',
        }),
    ).exactOptional(),
    enhancedInfrastructureMetrics: EnhancedInfrastructureMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the enhanced infrastructure metrics recommendation preference to create or update.</p> <p>Specify the <code>Active</code> status to activate the preference, or specify <code>Inactive</code> to deactivate the preference.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    inferredWorkloadTypes: InferredWorkloadTypesPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the inferred workload types recommendation preference to create or update.</p> <note> <p>The inferred workload type feature is active by default. To deactivate it, create a recommendation preference.</p> </note> <p>Specify the <code>Inactive</code> status to deactivate the feature, or specify <code>Active</code> to activate it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/inferred-workload-types.html">Inferred workload types</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
    externalMetricsPreference: ExternalMetricsPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The provider of the external metrics recommendation preference to create or update.</p> <p>Specify a valid provider in the <code>source</code> field to activate the preference. To delete this preference, see the <a>DeleteRecommendationPreferences</a> action.</p> <p>This preference can only be set for the <code>Ec2Instance</code> resource type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/external-metrics-ingestion.html">External metrics ingestion</a> in the <i>Compute Optimizer User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceType'], title: 'PutRecommendationPreferencesRequest' })
  .openapi('PutRecommendationPreferencesRequest')

const UpdateEnrollmentStatusResponseSchema = z
  .object({
    status: StatusSchema.and(
      z.any().openapi({ description: 'The enrollment status of the account.' }),
    ).exactOptional(),
    statusReason: StatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason for the enrollment status of the account. For example, an account might show a status of <code>Pending</code> because member accounts of an organization require more time to be enrolled in the service.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEnrollmentStatusResponse')

const UpdateEnrollmentStatusRequestSchema = z
  .object({
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new enrollment status of the account.</p> <p>The following status options are available:</p> <ul> <li> <p> <code>Active</code> - Opts in your account to the Compute Optimizer service. Compute Optimizer begins analyzing the configuration and utilization metrics of your Amazon Web Services resources after you opt in. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html">Metrics analyzed by Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p> </li> <li> <p> <code>Inactive</code> - Opts out your account from the Compute Optimizer service. Your account\'s recommendations and related metrics data will be deleted from Compute Optimizer after you opt out.</p> </li> </ul> <note> <p>The <code>Pending</code> and <code>Failed</code> options cannot be used to update the enrollment status of an account. They are returned in the response of a request to update the enrollment status of an account.</p> </note>',
        }),
    ),
    includeMemberAccounts: IncludeMemberAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to enroll member accounts of the organization if the account is the management account of an organization.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['status'], title: 'UpdateEnrollmentStatusRequest' })
  .openapi('UpdateEnrollmentStatusRequest')

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

export const postXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences',
    description:
      '<p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
    operationId: 'DeleteRecommendationPreferences',
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
          .literal('ComputeOptimizerService.DeleteRecommendationPreferences')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.DeleteRecommendationPreferences'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteRecommendationPreferencesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteRecommendationPreferencesResponseSchema } },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      487: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs',
    description:
      '<p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>',
    operationId: 'DescribeRecommendationExportJobs',
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
          .literal('ComputeOptimizerService.DescribeRecommendationExportJobs')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.DescribeRecommendationExportJobs'],
              },
            },
          }),
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
        content: { 'application/json': { schema: DescribeRecommendationExportJobsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeRecommendationExportJobsResponseSchema } },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      487: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations',
    description:
      '<p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>',
    operationId: 'ExportAutoScalingGroupRecommendations',
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
          .literal('ComputeOptimizerService.ExportAutoScalingGroupRecommendations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.ExportAutoScalingGroupRecommendations'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ExportAutoScalingGroupRecommendationsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ExportAutoScalingGroupRecommendationsResponseSchema },
        },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations',
    description:
      '<p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>',
    operationId: 'ExportEBSVolumeRecommendations',
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
          .literal('ComputeOptimizerService.ExportEBSVolumeRecommendations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.ExportEBSVolumeRecommendations'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ExportEBSVolumeRecommendationsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ExportEBSVolumeRecommendationsResponseSchema } },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations',
    description:
      '<p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>',
    operationId: 'ExportEC2InstanceRecommendations',
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
          .literal('ComputeOptimizerService.ExportEC2InstanceRecommendations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.ExportEC2InstanceRecommendations'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ExportEC2InstanceRecommendationsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ExportEC2InstanceRecommendationsResponseSchema } },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations',
    description:
      '<p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>',
    operationId: 'ExportECSServiceRecommendations',
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
          .literal('ComputeOptimizerService.ExportECSServiceRecommendations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.ExportECSServiceRecommendations'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ExportECSServiceRecommendationsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ExportECSServiceRecommendationsResponseSchema } },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations',
    description:
      '<p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>',
    operationId: 'ExportLambdaFunctionRecommendations',
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
          .literal('ComputeOptimizerService.ExportLambdaFunctionRecommendations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.ExportLambdaFunctionRecommendations'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ExportLambdaFunctionRecommendationsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ExportLambdaFunctionRecommendationsResponseSchema },
        },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations',
    description:
      '<p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>',
    operationId: 'GetAutoScalingGroupRecommendations',
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
          .literal('ComputeOptimizerService.GetAutoScalingGroupRecommendations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.GetAutoScalingGroupRecommendations'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetAutoScalingGroupRecommendationsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetAutoScalingGroupRecommendationsResponseSchema },
        },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      487: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations',
  description:
    '<p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>',
  operationId: 'GetEBSVolumeRecommendations',
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
        .literal('ComputeOptimizerService.GetEBSVolumeRecommendations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComputeOptimizerService.GetEBSVolumeRecommendations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEBSVolumeRecommendationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEBSVolumeRecommendationsResponseSchema } },
    },
    480: {
      description: 'OptInRequiredException',
      content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations',
  description:
    '<p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>',
  operationId: 'GetEC2InstanceRecommendations',
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
        .literal('ComputeOptimizerService.GetEC2InstanceRecommendations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComputeOptimizerService.GetEC2InstanceRecommendations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEC2InstanceRecommendationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEC2InstanceRecommendationsResponseSchema } },
    },
    480: {
      description: 'OptInRequiredException',
      content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics',
    description:
      '<p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>',
    operationId: 'GetEC2RecommendationProjectedMetrics',
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
          .literal('ComputeOptimizerService.GetEC2RecommendationProjectedMetrics')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.GetEC2RecommendationProjectedMetrics'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetEC2RecommendationProjectedMetricsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetEC2RecommendationProjectedMetricsResponseSchema },
        },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      487: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics',
    description: ' Returns the projected metrics of Amazon ECS service recommendations. ',
    operationId: 'GetECSServiceRecommendationProjectedMetrics',
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
          .literal('ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetECSServiceRecommendationProjectedMetricsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetECSServiceRecommendationProjectedMetricsResponseSchema },
        },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      487: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations',
  description:
    '<p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>',
  operationId: 'GetECSServiceRecommendations',
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
        .literal('ComputeOptimizerService.GetECSServiceRecommendations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComputeOptimizerService.GetECSServiceRecommendations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetECSServiceRecommendationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetECSServiceRecommendationsResponseSchema } },
    },
    480: {
      description: 'OptInRequiredException',
      content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences',
    description:
      '<p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>',
    operationId: 'GetEffectiveRecommendationPreferences',
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
          .literal('ComputeOptimizerService.GetEffectiveRecommendationPreferences')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.GetEffectiveRecommendationPreferences'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetEffectiveRecommendationPreferencesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetEffectiveRecommendationPreferencesResponseSchema },
        },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      487: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceGetEnrollmentStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus',
  description:
    '<p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>',
  operationId: 'GetEnrollmentStatus',
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
        .literal('ComputeOptimizerService.GetEnrollmentStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComputeOptimizerService.GetEnrollmentStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEnrollmentStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEnrollmentStatusResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization',
    description:
      '<p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>',
    operationId: 'GetEnrollmentStatusesForOrganization',
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
          .literal('ComputeOptimizerService.GetEnrollmentStatusesForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.GetEnrollmentStatusesForOrganization'],
              },
            },
          }),
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
          'application/json': { schema: GetEnrollmentStatusesForOrganizationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetEnrollmentStatusesForOrganizationResponseSchema },
        },
      },
      480: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      481: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      484: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      485: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations',
    description:
      '<p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>',
    operationId: 'GetLambdaFunctionRecommendations',
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
          .literal('ComputeOptimizerService.GetLambdaFunctionRecommendations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComputeOptimizerService.GetLambdaFunctionRecommendations'],
              },
            },
          }),
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
        content: { 'application/json': { schema: GetLambdaFunctionRecommendationsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLambdaFunctionRecommendationsResponseSchema } },
      },
      480: {
        description: 'OptInRequiredException',
        content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'MissingAuthenticationToken',
        content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences',
  description:
    '<p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
  operationId: 'GetRecommendationPreferences',
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
        .literal('ComputeOptimizerService.GetRecommendationPreferences')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComputeOptimizerService.GetRecommendationPreferences'],
            },
          },
        }),
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
      content: { 'application/json': { schema: GetRecommendationPreferencesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecommendationPreferencesResponseSchema } },
    },
    480: {
      description: 'OptInRequiredException',
      content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetComputeOptimizerServiceGetRecommendationSummariesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries',
  description:
    '<p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>',
  operationId: 'GetRecommendationSummaries',
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
        .literal('ComputeOptimizerService.GetRecommendationSummaries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComputeOptimizerService.GetRecommendationSummaries'],
            },
          },
        }),
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
      content: { 'application/json': { schema: GetRecommendationSummariesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecommendationSummariesResponseSchema } },
    },
    480: {
      description: 'OptInRequiredException',
      content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetComputeOptimizerServicePutRecommendationPreferencesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences',
  description:
    '<p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>',
  operationId: 'PutRecommendationPreferences',
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
        .literal('ComputeOptimizerService.PutRecommendationPreferences')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComputeOptimizerService.PutRecommendationPreferences'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRecommendationPreferencesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRecommendationPreferencesResponseSchema } },
    },
    480: {
      description: 'OptInRequiredException',
      content: { 'application/json': { schema: OptInRequiredExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus',
  description:
    '<p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>',
  operationId: 'UpdateEnrollmentStatus',
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
        .literal('ComputeOptimizerService.UpdateEnrollmentStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComputeOptimizerService.UpdateEnrollmentStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEnrollmentStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEnrollmentStatusResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'MissingAuthenticationToken',
      content: { 'application/json': { schema: MissingAuthenticationTokenSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
