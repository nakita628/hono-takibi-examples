import { createRoute, z } from '@hono/zod-openapi'

const ExpressionsSchema: z.ZodType<ExpressionsType> = z
  .lazy(() => z.array(ExpressionSchema))
  .openapi('Expressions')

const DimensionSchema = z
  .enum([
    'AZ',
    'INSTANCE_TYPE',
    'LINKED_ACCOUNT',
    'LINKED_ACCOUNT_NAME',
    'OPERATION',
    'PURCHASE_TYPE',
    'REGION',
    'SERVICE',
    'SERVICE_CODE',
    'USAGE_TYPE',
    'USAGE_TYPE_GROUP',
    'RECORD_TYPE',
    'OPERATING_SYSTEM',
    'TENANCY',
    'SCOPE',
    'PLATFORM',
    'SUBSCRIPTION_ID',
    'LEGAL_ENTITY_NAME',
    'DEPLOYMENT_OPTION',
    'DATABASE_ENGINE',
    'CACHE_ENGINE',
    'INSTANCE_TYPE_FAMILY',
    'BILLING_ENTITY',
    'RESERVATION_ID',
    'RESOURCE_ID',
    'RIGHTSIZING_TYPE',
    'SAVINGS_PLANS_TYPE',
    'SAVINGS_PLAN_ARN',
    'PAYMENT_OPTION',
    'AGREEMENT_END_DATE_TIME_AFTER',
    'AGREEMENT_END_DATE_TIME_BEFORE',
    'INVOICING_ENTITY',
    'ANOMALY_TOTAL_IMPACT_ABSOLUTE',
    'ANOMALY_TOTAL_IMPACT_PERCENTAGE',
  ])
  .openapi('Dimension')

const ValueSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1024)
  .openapi('Value')

const ValuesSchema = z.array(ValueSchema).openapi('Values')

const MatchOptionSchema = z
  .enum([
    'EQUALS',
    'ABSENT',
    'STARTS_WITH',
    'ENDS_WITH',
    'CONTAINS',
    'CASE_SENSITIVE',
    'CASE_INSENSITIVE',
    'GREATER_THAN_OR_EQUAL',
  ])
  .openapi('MatchOption')

const MatchOptionsSchema = z.array(MatchOptionSchema).openapi('MatchOptions')

type DimensionValuesType = {
  Key?: z.infer<typeof DimensionSchema> & { [key: string]: unknown }
  Values?: z.infer<typeof ValuesSchema> & { [key: string]: unknown }
  MatchOptions?: z.infer<typeof MatchOptionsSchema> & { [key: string]: unknown }
}

const DimensionValuesSchema: z.ZodType<DimensionValuesType> = z
  .object({
    Key: DimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The names of the metadata types that you can use to filter and group your results. For example, <code>AZ</code> returns a list of Availability Zones.</p> <p>Not all dimensions are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p> <code>LINK_ACCOUNT_NAME</code> and <code>SERVICE_CODE</code> can only be used in <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule</a>.</p> <p> <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code> can only be used in <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html">AnomalySubscriptions</a>.</p>',
        }),
    ).exactOptional(),
    Values: ValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata values that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.',
        }),
    ).exactOptional(),
    MatchOptions: MatchOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The match options that you can use to filter your results.</p> <p> <code>MatchOptions</code> is only applicable for actions related to Cost Category and Anomaly Subscriptions. Refer to the documentation for each specific API to see what is supported.</p> <p>The default values for <code>MatchOptions</code> are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.',
    required: [],
  })
  .openapi('DimensionValues')

const TagKeySchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1024)
  .openapi('TagKey')

type TagValuesType = {
  Key?: z.infer<typeof TagKeySchema> & { [key: string]: unknown }
  Values?: z.infer<typeof ValuesSchema> & { [key: string]: unknown }
  MatchOptions?: z.infer<typeof MatchOptionsSchema> & { [key: string]: unknown }
}

const TagValuesSchema: z.ZodType<TagValuesType> = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key for the tag.' })).exactOptional(),
    Values: ValuesSchema.and(
      z.any().openapi({ description: 'The specific value of the tag.' }),
    ).exactOptional(),
    MatchOptions: MatchOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The match options that you can use to filter your results. <code>MatchOptions</code> is only applicable for actions related to Cost Category. The default values for <code>MatchOptions</code> are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The values that are available for a tag.</p> <p>If <code>Values</code> and <code>Key</code> aren't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all tags. That is, it's filtered on resources with no tags.</p> <p>If <code>Key</code> is provided and <code>Values</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the tag <code>Key</code> only. That is, it's filtered on resources without the given tag key.</p>",
    required: [],
  })
  .openapi('TagValues')

const CostCategoryNameSchema = z
  .string()
  .min(1)
  .max(50)
  .openapi({
    description: 'The unique name of the Cost Category.',
    'x-pattern': '^\\(\\?! \\)[\\p\\{L\\}\\p\\{N\\}\\p\\{Z\\}-_]*$',
  })
  .openapi('CostCategoryName')

type CostCategoryValuesType = {
  Key?: z.infer<typeof CostCategoryNameSchema>
  Values?: z.infer<typeof ValuesSchema> & { [key: string]: unknown }
  MatchOptions?: z.infer<typeof MatchOptionsSchema> & { [key: string]: unknown }
}

const CostCategoryValuesSchema: z.ZodType<CostCategoryValuesType> = z
  .object({
    Key: CostCategoryNameSchema.exactOptional(),
    Values: ValuesSchema.and(
      z.any().openapi({ description: 'The specific value of the Cost Category.' }),
    ).exactOptional(),
    MatchOptions: MatchOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for <code>MatchOptions</code> is <code>EQUALS</code> and <code>CASE_SENSITIVE</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The Cost Categories values used for filtering the costs.</p> <p>If <code>Values</code> and <code>Key</code> are not specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all Cost Categories. That is, it filters on resources that aren't mapped to any Cost Categories.</p> <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the Cost Categories <code>Key</code> only. That is, it filters on resources without the given Cost Categories key.</p>",
    required: [],
  })
  .openapi('CostCategoryValues')

type ExpressionType = {
  Or?: z.infer<typeof ExpressionsSchema> & { [key: string]: unknown }
  And?: z.infer<typeof ExpressionsSchema> & { [key: string]: unknown }
  Not?: ExpressionType & { [key: string]: unknown }
  Dimensions?: z.infer<typeof DimensionValuesSchema> & { [key: string]: unknown }
  Tags?: z.infer<typeof TagValuesSchema> & { [key: string]: unknown }
  CostCategories?: z.infer<typeof CostCategoryValuesSchema> & { [key: string]: unknown }
}

const GenericStringSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1024)
  .openapi('GenericString')

const EC2ResourceDetailsSchema = z
  .object({
    HourlyOnDemandRate: GenericStringSchema.and(
      z.any().openapi({ description: 'The hourly public On-Demand rate for the instance type.' }),
    ).exactOptional(),
    InstanceType: GenericStringSchema.and(
      z.any().openapi({ description: 'The type of Amazon Web Services instance.' }),
    ).exactOptional(),
    Platform: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform of the Amazon Web Services instance. The platform is the specific combination of operating system, license model, and software on an instance.',
        }),
    ).exactOptional(),
    Region: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region of the instance.' }),
    ).exactOptional(),
    Sku: GenericStringSchema.and(
      z.any().openapi({ description: 'The SKU of the product.' }),
    ).exactOptional(),
    Memory: GenericStringSchema.and(
      z.any().openapi({ description: 'The memory capacity of the Amazon Web Services instance.' }),
    ).exactOptional(),
    NetworkPerformance: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The network performance capacity of the Amazon Web Services instance.',
        }),
    ).exactOptional(),
    Storage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The disk storage of the Amazon Web Services instance. This doesn't include EBS storage.",
        }),
    ).exactOptional(),
    Vcpu: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of VCPU cores in the Amazon Web Services instance type.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details on the Amazon EC2 Resource.', required: [] })
  .openapi('EC2ResourceDetails')

type ResourceDetailsType = {
  EC2ResourceDetails?: z.infer<typeof EC2ResourceDetailsSchema> & { [key: string]: unknown }
}

const EBSResourceUtilizationSchema = z
  .object({
    EbsReadOpsPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum number of read operations per second. ' }),
    ).exactOptional(),
    EbsWriteOpsPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum number of write operations per second. ' }),
    ).exactOptional(),
    EbsReadBytesPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum size of read operations per second ' }),
    ).exactOptional(),
    EbsWriteBytesPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum size of write operations per second. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The EBS field that contains a list of EBS metrics that are associated with the current instance. ',
    required: [],
  })
  .openapi('EBSResourceUtilization')

const DiskResourceUtilizationSchema = z
  .object({
    DiskReadOpsPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum number of read operations per second. ' }),
    ).exactOptional(),
    DiskWriteOpsPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum number of write operations per second. ' }),
    ).exactOptional(),
    DiskReadBytesPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum read throughput operations per second. ' }),
    ).exactOptional(),
    DiskWriteBytesPerSecond: GenericStringSchema.and(
      z.any().openapi({ description: 'The maximum write throughput operations per second. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The field that contains a list of disk (local storage) metrics that are associated with the current instance. ',
    required: [],
  })
  .openapi('DiskResourceUtilization')

const NetworkResourceUtilizationSchema = z
  .object({
    NetworkInBytesPerSecond: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The network inbound throughput utilization measured in Bytes per second (Bps). ',
        }),
    ).exactOptional(),
    NetworkOutBytesPerSecond: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The network outbound throughput utilization measured in Bytes per second (Bps). ',
        }),
    ).exactOptional(),
    NetworkPacketsInPerSecond: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The network inbound packets that are measured in packets per second. ',
        }),
    ).exactOptional(),
    NetworkPacketsOutPerSecond: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The network outbound packets that are measured in packets per second. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The network field that contains a list of network metrics that are associated with the current instance. ',
    required: [],
  })
  .openapi('NetworkResourceUtilization')

const EC2ResourceUtilizationSchema = z
  .object({
    MaxCpuUtilizationPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum observed or expected CPU utilization of the instance.',
        }),
    ).exactOptional(),
    MaxMemoryUtilizationPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum observed or expected memory utilization of the instance.',
        }),
    ).exactOptional(),
    MaxStorageUtilizationPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum observed or expected storage utilization of the instance. This doesn't include EBS storage.",
        }),
    ).exactOptional(),
    EBSResourceUtilization: EBSResourceUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EBS field that contains a list of EBS metrics that are associated with the current instance. ',
        }),
    ).exactOptional(),
    DiskResourceUtilization: DiskResourceUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The field that contains a list of disk (local storage) metrics that are associated with the current instance. ',
        }),
    ).exactOptional(),
    NetworkResourceUtilization: NetworkResourceUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The network field that contains a list of network metrics that are associated with the current instance. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Utilization metrics for the instance. ', required: [] })
  .openapi('EC2ResourceUtilization')

type ResourceUtilizationType = {
  EC2ResourceUtilization?: z.infer<typeof EC2ResourceUtilizationSchema> & { [key: string]: unknown }
}

const ExpressionSchema: z.ZodType<ExpressionType> = z
  .lazy(() =>
    z
      .object({
        Or: ExpressionsSchema.and(
          z
            .any()
            .openapi({
              description: 'Return results that match either <code>Dimension</code> object.',
            }),
        ).exactOptional(),
        And: ExpressionsSchema.and(
          z
            .any()
            .openapi({
              description: 'Return results that match both <code>Dimension</code> objects.',
            }),
        ).exactOptional(),
        Not: ExpressionSchema.and(
          z
            .any()
            .openapi({
              description: "Return results that don't match a <code>Dimension</code> object.",
            }),
        ).exactOptional(),
        Dimensions: DimensionValuesSchema.and(
          z
            .any()
            .openapi({
              description:
                'The specific <code>Dimension</code> to use for <code>Expression</code>.',
            }),
        ).exactOptional(),
        Tags: TagValuesSchema.and(
          z
            .any()
            .openapi({
              description: 'The specific <code>Tag</code> to use for <code>Expression</code>.',
            }),
        ).exactOptional(),
        CostCategories: CostCategoryValuesSchema.and(
          z
            .any()
            .openapi({
              description: "The filter that's based on <code>CostCategory</code> values.",
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn\'t supported. OR isn\'t supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren\'t supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>',
        required: [],
      }),
  )
  .openapi('Expression')

type ExpressionsType = z.infer<typeof ExpressionSchema>[]

const GenericBooleanSchema = z.boolean().openapi('GenericBoolean')

const EC2InstanceDetailsSchema = z
  .object({
    Family: GenericStringSchema.and(
      z.any().openapi({ description: 'The instance family of the recommended reservation.' }),
    ).exactOptional(),
    InstanceType: GenericStringSchema.and(
      z.any().openapi({ description: 'The type of instance that Amazon Web Services recommends.' }),
    ).exactOptional(),
    Region: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services Region of the recommended reservation.' }),
    ).exactOptional(),
    AvailabilityZone: GenericStringSchema.and(
      z.any().openapi({ description: 'The Availability Zone of the recommended reservation.' }),
    ).exactOptional(),
    Platform: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.',
        }),
    ).exactOptional(),
    Tenancy: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether the recommended reservation is dedicated or shared.',
        }),
    ).exactOptional(),
    CurrentGeneration: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the recommendation is for a current-generation instance. ',
        }),
    ).exactOptional(),
    SizeFlexEligible: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether the recommended reservation is size flexible.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the Amazon EC2 instances that Amazon Web Services recommends that you purchase.',
    required: [],
  })
  .openapi('EC2InstanceDetails')

const RDSInstanceDetailsSchema = z
  .object({
    Family: GenericStringSchema.and(
      z.any().openapi({ description: 'The instance family of the recommended reservation.' }),
    ).exactOptional(),
    InstanceType: GenericStringSchema.and(
      z.any().openapi({ description: 'The type of instance that Amazon Web Services recommends.' }),
    ).exactOptional(),
    Region: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services Region of the recommended reservation.' }),
    ).exactOptional(),
    DatabaseEngine: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The database engine that the recommended reservation supports.' }),
    ).exactOptional(),
    DatabaseEdition: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The database edition that the recommended reservation supports.',
        }),
    ).exactOptional(),
    DeploymentOption: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the recommendation is for a reservation in a single Availability Zone or a reservation with a backup in a second Availability Zone.',
        }),
    ).exactOptional(),
    LicenseModel: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The license model that the recommended reservation supports.' }),
    ).exactOptional(),
    CurrentGeneration: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the recommendation is for a current-generation instance. ',
        }),
    ).exactOptional(),
    SizeFlexEligible: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether the recommended reservation is size flexible.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the Amazon RDS instances that Amazon Web Services recommends that you purchase.',
    required: [],
  })
  .openapi('RDSInstanceDetails')

const RedshiftInstanceDetailsSchema = z
  .object({
    Family: GenericStringSchema.and(
      z.any().openapi({ description: 'The instance family of the recommended reservation.' }),
    ).exactOptional(),
    NodeType: GenericStringSchema.and(
      z.any().openapi({ description: 'The type of node that Amazon Web Services recommends.' }),
    ).exactOptional(),
    Region: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services Region of the recommended reservation.' }),
    ).exactOptional(),
    CurrentGeneration: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the recommendation is for a current-generation instance.',
        }),
    ).exactOptional(),
    SizeFlexEligible: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether the recommended reservation is size flexible.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the Amazon Redshift instances that Amazon Web Services recommends that you purchase.',
    required: [],
  })
  .openapi('RedshiftInstanceDetails')

const ElastiCacheInstanceDetailsSchema = z
  .object({
    Family: GenericStringSchema.and(
      z.any().openapi({ description: 'The instance family of the recommended reservation.' }),
    ).exactOptional(),
    NodeType: GenericStringSchema.and(
      z.any().openapi({ description: 'The type of node that Amazon Web Services recommends.' }),
    ).exactOptional(),
    Region: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services Region of the recommended reservation.' }),
    ).exactOptional(),
    ProductDescription: GenericStringSchema.and(
      z.any().openapi({ description: 'The description of the recommended reservation.' }),
    ).exactOptional(),
    CurrentGeneration: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the recommendation is for a current generation instance.',
        }),
    ).exactOptional(),
    SizeFlexEligible: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether the recommended reservation is size flexible.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the Amazon ElastiCache instances that Amazon Web Services recommends that you purchase.',
    required: [],
  })
  .openapi('ElastiCacheInstanceDetails')

const ESInstanceDetailsSchema = z
  .object({
    InstanceClass: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The class of instance that Amazon Web Services recommends.' }),
    ).exactOptional(),
    InstanceSize: GenericStringSchema.and(
      z.any().openapi({ description: 'The size of instance that Amazon Web Services recommends.' }),
    ).exactOptional(),
    Region: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services Region of the recommended reservation.' }),
    ).exactOptional(),
    CurrentGeneration: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the recommendation is for a current-generation instance.',
        }),
    ).exactOptional(),
    SizeFlexEligible: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether the recommended reservation is size flexible.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the Amazon OpenSearch Service instances that Amazon Web Services recommends that you purchase.',
    required: [],
  })
  .openapi('ESInstanceDetails')

type InstanceDetailsType = {
  EC2InstanceDetails?: z.infer<typeof EC2InstanceDetailsSchema> & { [key: string]: unknown }
  RDSInstanceDetails?: z.infer<typeof RDSInstanceDetailsSchema> & { [key: string]: unknown }
  RedshiftInstanceDetails?: z.infer<typeof RedshiftInstanceDetailsSchema> & {
    [key: string]: unknown
  }
  ElastiCacheInstanceDetails?: z.infer<typeof ElastiCacheInstanceDetailsSchema> & {
    [key: string]: unknown
  }
  ESInstanceDetails?: z.infer<typeof ESInstanceDetailsSchema> & { [key: string]: unknown }
}

const CreateAnomalyMonitorResponseSchema = z
  .object({
    MonitorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of your newly created cost anomaly detection monitor.',
        }),
    ),
  })
  .openapi({ required: ['MonitorArn'] })
  .openapi('CreateAnomalyMonitorResponse')

const YearMonthDaySchema = z
  .string()
  .regex(/(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}Z)?/)
  .min(0)
  .max(40)
  .openapi('YearMonthDay')

const MonitorTypeSchema = z.enum(['DIMENSIONAL', 'CUSTOM']).openapi('MonitorType')

const MonitorDimensionSchema = z.literal('SERVICE').openapi('MonitorDimension')

const NonNegativeIntegerSchema = z.int().min(0).openapi('NonNegativeInteger')

const AnomalyMonitorSchema = z
  .object({
    MonitorArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) value. ' }),
    ).exactOptional(),
    MonitorName: GenericStringSchema.and(
      z.any().openapi({ description: 'The name of the monitor. ' }),
    ),
    CreationDate: YearMonthDaySchema.and(
      z.any().openapi({ description: 'The date when the monitor was created. ' }),
    ).exactOptional(),
    LastUpdatedDate: YearMonthDaySchema.and(
      z.any().openapi({ description: 'The date when the monitor was last updated. ' }),
    ).exactOptional(),
    LastEvaluatedDate: YearMonthDaySchema.and(
      z.any().openapi({ description: 'The date when the monitor last evaluated for anomalies. ' }),
    ).exactOptional(),
    MonitorType: MonitorTypeSchema.and(
      z.any().openapi({ description: 'The possible type values. ' }),
    ),
    MonitorDimension: MonitorDimensionSchema.and(
      z.any().openapi({ description: 'The dimensions to evaluate. ' }),
    ).exactOptional(),
    MonitorSpecification: ExpressionSchema.exactOptional(),
    DimensionalValueCount: NonNegativeIntegerSchema.and(
      z.any().openapi({ description: 'The value for evaluated dimensions. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MonitorName', 'MonitorType'],
    description:
      "This object continuously inspects your account's cost data for anomalies. It's based on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists of detailed metadata and the current status of the monitor object. ",
  })
  .openapi('AnomalyMonitor')

const ResourceTagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('ResourceTagKey')

const ResourceTagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('ResourceTagValue')

const ResourceTagSchema = z
  .object({
    Key: ResourceTagKeySchema.and(
      z.any().openapi({ description: "The key that's associated with the tag. " }),
    ),
    Value: ResourceTagValueSchema.and(
      z.any().openapi({ description: "The value that's associated with the tag. " }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>The tag structure that contains a tag key and value. </p> <note> <p>Tagging is supported only for the following Cost Explorer resource types: <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html"> <code>AnomalySubscription</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html"> <code>CostCategory</code> </a>.</p> </note>',
  })
  .openapi('ResourceTag')

const ResourceTagListSchema = z.array(ResourceTagSchema).min(0).max(200).openapi('ResourceTagList')

const CreateAnomalyMonitorRequestSchema = z
  .object({
    AnomalyMonitor: AnomalyMonitorSchema.and(
      z
        .any()
        .openapi({
          description: 'The cost anomaly detection monitor object that you want to create.',
        }),
    ),
    ResourceTags: ResourceTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of tags to associate with the specified <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a>. You can use resource tags to control access to your <code>monitor</code> using IAM policies.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AnomalyMonitor'], title: 'CreateAnomalyMonitorRequest' })
  .openapi('CreateAnomalyMonitorRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const CreateAnomalySubscriptionResponseSchema = z
  .object({
    SubscriptionArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of your newly created cost anomaly subscription. ',
        }),
    ),
  })
  .openapi({ required: ['SubscriptionArn'] })
  .openapi('CreateAnomalySubscriptionResponse')

const ArnSchema = z
  .string()
  .regex(/arn:aws[-a-z0-9]*:[a-z0-9]+:[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9\/:_]+/)
  .min(20)
  .max(2048)
  .openapi('Arn')

const MonitorArnListSchema = z.array(ArnSchema).openapi('MonitorArnList')

const SubscriberAddressSchema = z
  .string()
  .regex(
    /(^[a-zA-Z0-9.!#$%&'*+=?^_‘{|}~-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)|(^arn:(aws[a-zA-Z-]*):sns:[a-zA-Z0-9-]+:[0-9]{12}:[a-zA-Z0-9_-]+(\.fifo)?$)/,
  )
  .min(6)
  .max(302)
  .openapi('SubscriberAddress')

const SubscriberTypeSchema = z.enum(['EMAIL', 'SNS']).openapi('SubscriberType')

const SubscriberStatusSchema = z.enum(['CONFIRMED', 'DECLINED']).openapi('SubscriberStatus')

const SubscriberSchema = z
  .object({
    Address: SubscriberAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address or SNS Amazon Resource Name (ARN). This depends on the <code>Type</code>. ',
        }),
    ).exactOptional(),
    Type: SubscriberTypeSchema.and(
      z.any().openapi({ description: 'The notification delivery channel. ' }),
    ).exactOptional(),
    Status: SubscriberStatusSchema.and(
      z.any().openapi({ description: 'Indicates if the subscriber accepts the notifications. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The recipient of <code>AnomalySubscription</code> notifications. ',
    required: [],
  })
  .openapi('Subscriber')

const SubscribersSchema = z.array(SubscriberSchema).openapi('Subscribers')

const NullableNonNegativeDoubleSchema = z.float64().min(0).openapi('NullableNonNegativeDouble')

const AnomalySubscriptionFrequencySchema = z
  .enum(['DAILY', 'IMMEDIATE', 'WEEKLY'])
  .openapi('AnomalySubscriptionFrequency')

const AnomalySubscriptionSchema = z
  .object({
    SubscriptionArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>AnomalySubscription</code> Amazon Resource Name (ARN). ',
        }),
    ).exactOptional(),
    AccountId: GenericStringSchema.and(
      z.any().openapi({ description: 'Your unique account identifier. ' }),
    ).exactOptional(),
    MonitorArnList: MonitorArnListSchema.and(
      z.any().openapi({ description: 'A list of cost anomaly monitors. ' }),
    ),
    Subscribers: SubscribersSchema.and(
      z.any().openapi({ description: 'A list of subscribers to notify. ' }),
    ),
    Threshold: NullableNonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>(deprecated)</p> <p>The dollar value that triggers a notification if the threshold is exceeded. </p> <p>This field has been deprecated. To specify a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.</p> <p>One of Threshold or ThresholdExpression is required for this resource.</p>Threshold has been deprecated in favor of ThresholdExpression',
        }),
    ).exactOptional(),
    Frequency: AnomalySubscriptionFrequencySchema.and(
      z.any().openapi({ description: 'The frequency that anomaly reports are sent over email. ' }),
    ),
    SubscriptionName: GenericStringSchema.and(
      z.any().openapi({ description: 'The name for the subscription. ' }),
    ),
    ThresholdExpression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code>. The supported nested expression types are <code>AND</code> and <code>OR</code>. The match option <code>GREATER_THAN_OR_EQUAL</code> is required. Values must be numbers between 0 and 10,000,000,000.</p> <p>One of Threshold or ThresholdExpression is required for this resource.</p> <p>The following are examples of valid ThresholdExpressions:</p> <ul> <li> <p>Absolute threshold: <code>{ "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }</code> </p> </li> <li> <p>Percentage threshold: <code>{ "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }</code> </p> </li> <li> <p> <code>AND</code> two thresholds together: <code>{ "And": [ { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }, { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } } ] }</code> </p> </li> <li> <p> <code>OR</code> two thresholds together: <code>{ "Or": [ { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }, { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } } ] }</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MonitorArnList', 'Subscribers', 'Frequency', 'SubscriptionName'],
    description:
      'The association between a monitor, threshold, and list of subscribers used to deliver notifications about anomalies detected by a monitor that exceeds a threshold. The content consists of the detailed metadata and the current status of the <code>AnomalySubscription</code> object. ',
  })
  .openapi('AnomalySubscription')

const CreateAnomalySubscriptionRequestSchema = z
  .object({
    AnomalySubscription: AnomalySubscriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The cost anomaly subscription object that you want to create. ' }),
    ),
    ResourceTags: ResourceTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of tags to associate with the specified <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html"> <code>AnomalySubscription</code> </a>. You can use resource tags to control access to your <code>subscription</code> using IAM policies.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AnomalySubscription'], title: 'CreateAnomalySubscriptionRequest' })
  .openapi('CreateAnomalySubscriptionRequest')

const UnknownMonitorExceptionSchema = z.any().openapi('UnknownMonitorException')

const ZonedDateTimeSchema = z
  .string()
  .regex(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$/)
  .min(20)
  .max(25)
  .openapi({ description: 'The period of time that you want the usage and costs for.' })
  .openapi('ZonedDateTime')

const CreateCostCategoryDefinitionResponseSchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for your newly created Cost Category. ' }),
    ).exactOptional(),
    EffectiveStart: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Cost Category's effective start date. It can only be a billing start date (first day of the month).",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCostCategoryDefinitionResponse')

const CostCategoryRuleVersionSchema = z
  .literal('CostCategoryExpression.v1')
  .openapi({ description: 'The rule schema version in this particular Cost Category.' })
  .openapi('CostCategoryRuleVersion')

const CostCategoryValueSchema = z
  .string()
  .min(1)
  .max(50)
  .openapi({
    description: 'The default value for the cost category.',
    'x-pattern': '^\\(\\?! \\)[\\p\\{L\\}\\p\\{N\\}\\p\\{Z\\}-_]*$',
  })
  .openapi('CostCategoryValue')

const CostCategoryInheritedValueDimensionNameSchema = z
  .enum(['LINKED_ACCOUNT_NAME', 'TAG'])
  .openapi('CostCategoryInheritedValueDimensionName')

const CostCategoryInheritedValueDimensionSchema = z
  .object({
    DimensionName: CostCategoryInheritedValueDimensionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the dimension that's used to group costs.</p> <p>If you specify <code>LINKED_ACCOUNT_NAME</code>, the cost category value is based on account name. If you specify <code>TAG</code>, the cost category value is based on the value of the specified tag key.</p>",
        }),
    ).exactOptional(),
    DimensionKey: GenericStringSchema.and(
      z.any().openapi({ description: 'The key to extract cost category values.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "When you create or update a cost category, you can define the <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule type adds the flexibility to define a rule that dynamically inherits the cost category value from the dimension value that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want to dynamically group costs that are based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use.",
    required: [],
  })
  .openapi('CostCategoryInheritedValueDimension')

const CostCategoryRuleTypeSchema = z
  .enum(['REGULAR', 'INHERITED_VALUE'])
  .openapi('CostCategoryRuleType')

const CostCategoryRuleSchema = z
  .object({
    Value: CostCategoryValueSchema.exactOptional(),
    Rule: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object used to categorize costs. This supports dimensions, tags, and nested expressions. Currently the only dimensions supported are <code>LINKED_ACCOUNT</code>, <code>SERVICE_CODE</code>, <code>RECORD_TYPE</code>, and <code>LINKED_ACCOUNT_NAME</code>.</p> <p>Root level <code>OR</code> isn\'t supported. We recommend that you create a separate rule instead.</p> <p> <code>RECORD_TYPE</code> is a dimension used for Cost Explorer APIs, and is also supported for Cost Category expressions. This dimension uses different terms, depending on whether you\'re using the console or API/JSON editor. For a detailed comparison, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html#cost-categories-terms">Term Comparisons</a> in the <i>Billing and Cost Management User Guide</i>.</p>',
        }),
    ).exactOptional(),
    InheritedValue: CostCategoryInheritedValueDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value the line item is categorized as if the line item contains the matched dimension.',
        }),
    ).exactOptional(),
    Type: CostCategoryRuleTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "You can define the <code>CostCategoryRule</code> rule type as either <code>REGULAR</code> or <code>INHERITED_VALUE</code>. The <code>INHERITED_VALUE</code> rule type adds the flexibility to define a rule that dynamically inherits the cost category value. This value is from the dimension value that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want to costs to be dynamically grouped based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.',
    required: [],
  })
  .openapi('CostCategoryRule')

const CostCategoryRulesListSchema = z
  .array(CostCategoryRuleSchema)
  .min(1)
  .max(500)
  .openapi('CostCategoryRulesList')

const CostCategorySplitChargeRuleTargetsListSchema = z
  .array(GenericStringSchema)
  .min(1)
  .max(500)
  .openapi('CostCategorySplitChargeRuleTargetsList')

const CostCategorySplitChargeMethodSchema = z
  .enum(['FIXED', 'PROPORTIONAL', 'EVEN'])
  .openapi('CostCategorySplitChargeMethod')

const CostCategorySplitChargeRuleParameterTypeSchema = z
  .literal('ALLOCATION_PERCENTAGES')
  .openapi('CostCategorySplitChargeRuleParameterType')

const CostCategorySplitChargeRuleParameterValuesListSchema = z
  .array(GenericStringSchema)
  .min(1)
  .max(500)
  .openapi('CostCategorySplitChargeRuleParameterValuesList')

const CostCategorySplitChargeRuleParameterSchema = z
  .object({
    Type: CostCategorySplitChargeRuleParameterTypeSchema.and(
      z.any().openapi({ description: 'The parameter type. ' }),
    ),
    Values: CostCategorySplitChargeRuleParameterValuesListSchema.and(
      z.any().openapi({ description: 'The parameter values. ' }),
    ),
  })
  .openapi({
    required: ['Type', 'Values'],
    description: 'The parameters for a split charge method. ',
  })
  .openapi('CostCategorySplitChargeRuleParameter')

const CostCategorySplitChargeRuleParametersListSchema = z
  .array(CostCategorySplitChargeRuleParameterSchema)
  .min(1)
  .max(10)
  .openapi('CostCategorySplitChargeRuleParametersList')

const CostCategorySplitChargeRuleSchema = z
  .object({
    Source: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Cost Category value that you want to split. That value can't be used as a source or a target in other split charge rules. To indicate uncategorized costs, you can use an empty string as the source.",
        }),
    ),
    Targets: CostCategorySplitChargeRuleTargetsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Cost Category values that you want to split costs across. These values can't be used as a source in other split charge rules. ",
        }),
    ),
    Method: CostCategorySplitChargeMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The method that's used to define how to split your source costs across your targets. </p> <p> <code>Proportional</code> - Allocates charges across your targets based on the proportional weighted cost of each target.</p> <p> <code>Fixed</code> - Allocates charges across your targets based on your defined allocation percentage.</p> <p>&gt;<code>Even</code> - Allocates costs evenly across all targets.</p>",
        }),
    ),
    Parameters: CostCategorySplitChargeRuleParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameters for a split charge method. This is only required for the <code>FIXED</code> method. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Source', 'Targets', 'Method'],
    description:
      'Use the split charge rule to split the cost of one Cost Category value across several other target values. ',
  })
  .openapi('CostCategorySplitChargeRule')

const CostCategorySplitChargeRulesListSchema = z
  .array(CostCategorySplitChargeRuleSchema)
  .min(1)
  .max(10)
  .openapi('CostCategorySplitChargeRulesList')

const CreateCostCategoryDefinitionRequestSchema = z
  .object({
    Name: CostCategoryNameSchema,
    EffectiveStart: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.",
        }),
    ).exactOptional(),
    RuleVersion: CostCategoryRuleVersionSchema,
    Rules: CostCategoryRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Cost Category rules used to categorize costs. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule</a>.',
        }),
    ),
    DefaultValue: CostCategoryValueSchema.exactOptional(),
    SplitChargeRules: CostCategorySplitChargeRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The split charge rules used to allocate your charges between your Cost Category values. ',
        }),
    ).exactOptional(),
    ResourceTags: ResourceTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of tags to associate with the specified <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html"> <code>CostCategory</code> </a>. You can use resource tags to control access to your <code>cost category</code> using IAM policies.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'RuleVersion', 'Rules'],
    title: 'CreateCostCategoryDefinitionRequest',
  })
  .openapi('CreateCostCategoryDefinitionRequest')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const DeleteAnomalyMonitorResponseSchema = z.object({}).openapi('DeleteAnomalyMonitorResponse')

const DeleteAnomalyMonitorRequestSchema = z
  .object({
    MonitorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the cost anomaly monitor that you want to delete. ',
        }),
    ),
  })
  .openapi({ required: ['MonitorArn'], title: 'DeleteAnomalyMonitorRequest' })
  .openapi('DeleteAnomalyMonitorRequest')

const DeleteAnomalySubscriptionResponseSchema = z
  .object({})
  .openapi('DeleteAnomalySubscriptionResponse')

const DeleteAnomalySubscriptionRequestSchema = z
  .object({
    SubscriptionArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the cost anomaly subscription that you want to delete. ',
        }),
    ),
  })
  .openapi({ required: ['SubscriptionArn'], title: 'DeleteAnomalySubscriptionRequest' })
  .openapi('DeleteAnomalySubscriptionRequest')

const UnknownSubscriptionExceptionSchema = z.any().openapi('UnknownSubscriptionException')

const DeleteCostCategoryDefinitionResponseSchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique identifier for your Cost Category. ' }),
    ).exactOptional(),
    EffectiveEnd: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effective end date of the Cost Category as a result of deleting it. No costs after this date is categorized by the deleted Cost Category. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteCostCategoryDefinitionResponse')

const DeleteCostCategoryDefinitionRequestSchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique identifier for your Cost Category. ' }),
    ),
  })
  .openapi({ required: ['CostCategoryArn'], title: 'DeleteCostCategoryDefinitionRequest' })
  .openapi('DeleteCostCategoryDefinitionRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const CostCategoryStatusComponentSchema = z
  .literal('COST_EXPLORER')
  .openapi('CostCategoryStatusComponent')

const CostCategoryStatusSchema = z.enum(['PROCESSING', 'APPLIED']).openapi('CostCategoryStatus')

const CostCategoryProcessingStatusSchema = z
  .object({
    Component: CostCategoryStatusComponentSchema.and(
      z.any().openapi({ description: 'The Cost Management product name of the applied status. ' }),
    ).exactOptional(),
    Status: CostCategoryStatusSchema.and(
      z.any().openapi({ description: 'The process status for a specific cost category. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The list of processing statuses for Cost Management products for a specific cost category. ',
    required: [],
  })
  .openapi('CostCategoryProcessingStatus')

const CostCategoryProcessingStatusListSchema = z
  .array(CostCategoryProcessingStatusSchema)
  .openapi('CostCategoryProcessingStatusList')

const CostCategorySchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique identifier for your Cost Category. ' }),
    ),
    EffectiveStart: ZonedDateTimeSchema.and(
      z.any().openapi({ description: 'The effective start date of your Cost Category.' }),
    ),
    EffectiveEnd: ZonedDateTimeSchema.and(
      z.any().openapi({ description: 'The effective end date of your Cost Category.' }),
    ).exactOptional(),
    Name: CostCategoryNameSchema,
    RuleVersion: CostCategoryRuleVersionSchema,
    Rules: CostCategoryRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. ',
        }),
    ),
    SplitChargeRules: CostCategorySplitChargeRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The split charge rules that are used to allocate your charges between your Cost Category values. ',
        }),
    ).exactOptional(),
    ProcessingStatus: CostCategoryProcessingStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of processing statuses for Cost Management products for a specific cost category. ',
        }),
    ).exactOptional(),
    DefaultValue: CostCategoryValueSchema.exactOptional(),
  })
  .openapi({
    required: ['CostCategoryArn', 'EffectiveStart', 'Name', 'RuleVersion', 'Rules'],
    description:
      'The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.',
  })
  .openapi('CostCategory')

const DescribeCostCategoryDefinitionResponseSchema = z
  .object({ CostCategory: CostCategorySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeCostCategoryDefinitionResponse')

const DescribeCostCategoryDefinitionRequestSchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique identifier for your Cost Category. ' }),
    ),
    EffectiveOn: ZonedDateTimeSchema.and(
      z.any().openapi({ description: 'The date when the Cost Category was effective. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CostCategoryArn'], title: 'DescribeCostCategoryDefinitionRequest' })
  .openapi('DescribeCostCategoryDefinitionRequest')

const RootCauseSchema = z
  .object({
    Service: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Web Service name that's associated with the cost anomaly. ",
        }),
    ).exactOptional(),
    Region: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Web Services Region that's associated with the cost anomaly. ",
        }),
    ).exactOptional(),
    LinkedAccount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: "The member account value that's associated with the cost anomaly. ",
        }),
    ).exactOptional(),
    UsageType: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: "The <code>UsageType</code> value that's associated with the cost anomaly. ",
        }),
    ).exactOptional(),
    LinkedAccountName: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: "The member account name value that's associated with the cost anomaly.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The combination of Amazon Web Service, linked account, linked account name, Region, and usage type where a cost anomaly is observed. The linked account name will only be available when the account name can be identified.',
    required: [],
  })
  .openapi('RootCause')

const RootCausesSchema = z.array(RootCauseSchema).openapi('RootCauses')

const GenericDoubleSchema = z.float64().openapi('GenericDouble')

const AnomalyScoreSchema = z
  .object({
    MaxScore: GenericDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum score that's observed during the <code>AnomalyDateInterval</code>. ",
        }),
    ),
    CurrentScore: GenericDoubleSchema.and(
      z.any().openapi({ description: 'The last observed score. ' }),
    ),
  })
  .openapi({
    required: ['MaxScore', 'CurrentScore'],
    description: "Quantifies the anomaly. The higher score means that it's more anomalous. ",
  })
  .openapi('AnomalyScore')

const ImpactSchema = z
  .object({
    MaxImpact: GenericDoubleSchema.and(
      z.any().openapi({ description: "The maximum dollar value that's observed for an anomaly." }),
    ),
    TotalImpact: GenericDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cumulative dollar difference between the total actual spend and total expected spend. It is calculated as <code>TotalActualSpend - TotalExpectedSpend</code>.',
        }),
    ).exactOptional(),
    TotalActualSpend: NullableNonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The cumulative dollar amount that was actually spent during the anomaly.',
        }),
    ).exactOptional(),
    TotalExpectedSpend: NullableNonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cumulative dollar amount that was expected to be spent during the anomaly. It is calculated using advanced machine learning models to determine the typical spending pattern based on historical data for a customer.',
        }),
    ).exactOptional(),
    TotalImpactPercentage: NullableNonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cumulative percentage difference between the total actual spend and total expected spend. It is calculated as <code>(TotalImpact / TotalExpectedSpend) * 100</code>. When <code>TotalExpectedSpend</code> is zero, this field is omitted. Expected spend can be zero in situations such as when you start to use a service for the first time.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MaxImpact'], description: 'The dollar value of the anomaly. ' })
  .openapi('Impact')

const AnomalyFeedbackTypeSchema = z
  .enum(['YES', 'NO', 'PLANNED_ACTIVITY'])
  .openapi('AnomalyFeedbackType')

const AnomalySchema = z
  .object({
    AnomalyId: GenericStringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the anomaly. ' }),
    ),
    AnomalyStartDate: YearMonthDaySchema.and(
      z.any().openapi({ description: 'The first day the anomaly is detected. ' }),
    ).exactOptional(),
    AnomalyEndDate: YearMonthDaySchema.and(
      z.any().openapi({ description: 'The last day the anomaly is detected. ' }),
    ).exactOptional(),
    DimensionValue: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dimension for the anomaly (for example, an Amazon Web Service in a service monitor). ',
        }),
    ).exactOptional(),
    RootCauses: RootCausesSchema.and(
      z.any().openapi({ description: 'The list of identified root causes for the anomaly. ' }),
    ).exactOptional(),
    AnomalyScore: AnomalyScoreSchema.and(
      z.any().openapi({ description: 'The latest and maximum score for the anomaly. ' }),
    ),
    Impact: ImpactSchema.and(
      z.any().openapi({ description: 'The dollar impact for the anomaly. ' }),
    ),
    MonitorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the cost monitor that generated this anomaly. ',
        }),
    ),
    Feedback: AnomalyFeedbackTypeSchema.and(
      z.any().openapi({ description: 'The feedback value. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyId', 'AnomalyScore', 'Impact', 'MonitorArn'],
    description:
      'An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object. ',
  })
  .openapi('Anomaly')

const AnomaliesSchema = z.array(AnomalySchema).openapi('Anomalies')

const NextPageTokenSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(8192)
  .openapi('NextPageToken')

const GetAnomaliesResponseSchema = z
  .object({
    Anomalies: AnomaliesSchema.and(z.any().openapi({ description: 'A list of cost anomalies. ' })),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Anomalies'] })
  .openapi('GetAnomaliesResponse')

const AnomalyDateIntervalSchema = z
  .object({
    StartDate: YearMonthDaySchema.and(
      z.any().openapi({ description: 'The first date an anomaly was observed. ' }),
    ),
    EndDate: YearMonthDaySchema.and(
      z.any().openapi({ description: 'The last date an anomaly was observed. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StartDate'], description: 'The time period for an anomaly. ' })
  .openapi('AnomalyDateInterval')

const NumericOperatorSchema = z
  .enum([
    'EQUAL',
    'GREATER_THAN_OR_EQUAL',
    'LESS_THAN_OR_EQUAL',
    'GREATER_THAN',
    'LESS_THAN',
    'BETWEEN',
  ])
  .openapi('NumericOperator')

const TotalImpactFilterSchema = z
  .object({
    NumericOperator: NumericOperatorSchema.and(
      z.any().openapi({ description: "The comparing value that's used in the filter. " }),
    ),
    StartValue: GenericDoubleSchema.and(
      z.any().openapi({ description: "The lower bound dollar value that's used in the filter. " }),
    ),
    EndValue: GenericDoubleSchema.and(
      z.any().openapi({ description: "The upper bound dollar value that's used in the filter. " }),
    ).exactOptional(),
  })
  .openapi({
    required: ['NumericOperator', 'StartValue'],
    description: 'Filters cost anomalies based on the total impact. ',
  })
  .openapi('TotalImpactFilter')

const PageSizeSchema = z.int().openapi('PageSize')

const GetAnomaliesRequestSchema = z
  .object({
    MonitorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon Resource Name (ARN). ',
        }),
    ).exactOptional(),
    DateInterval: AnomalyDateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object will have an <code>AnomalyEndDate</code> in the specified time range. ',
        }),
    ),
    Feedback: AnomalyFeedbackTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters anomaly results by the feedback field on the anomaly object. ',
        }),
    ).exactOptional(),
    TotalImpact: TotalImpactFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters anomaly results by the total impact field on the anomaly object. For example, you can filter anomalies <code>GREATER_THAN 200.00</code> to retrieve anomalies, with an estimated dollar impact greater than 200. ',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The number of entries a paginated response contains. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DateInterval'], title: 'GetAnomaliesRequest' })
  .openapi('GetAnomaliesRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const AnomalyMonitorsSchema = z.array(AnomalyMonitorSchema).openapi('AnomalyMonitors')

const GetAnomalyMonitorsResponseSchema = z
  .object({
    AnomalyMonitors: AnomalyMonitorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cost anomaly monitors that includes the detailed metadata for each monitor. ',
        }),
    ),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AnomalyMonitors'] })
  .openapi('GetAnomalyMonitorsResponse')

const GetAnomalyMonitorsRequestSchema = z
  .object({
    MonitorArnList: ValuesSchema.and(
      z.any().openapi({ description: 'A list of cost anomaly monitor ARNs. ' }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The number of entries that a paginated response contains. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetAnomalyMonitorsRequest', required: [] })
  .openapi('GetAnomalyMonitorsRequest')

const AnomalySubscriptionsSchema = z
  .array(AnomalySubscriptionSchema)
  .openapi('AnomalySubscriptions')

const GetAnomalySubscriptionsResponseSchema = z
  .object({
    AnomalySubscriptions: AnomalySubscriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cost anomaly subscriptions that includes the detailed metadata for each one. ',
        }),
    ),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AnomalySubscriptions'] })
  .openapi('GetAnomalySubscriptionsResponse')

const GetAnomalySubscriptionsRequestSchema = z
  .object({
    SubscriptionArnList: ValuesSchema.and(
      z.any().openapi({ description: 'A list of cost anomaly subscription ARNs. ' }),
    ).exactOptional(),
    MonitorArn: GenericStringSchema.and(
      z.any().openapi({ description: 'Cost anomaly monitor ARNs. ' }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The number of entries a paginated response contains. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetAnomalySubscriptionsRequest', required: [] })
  .openapi('GetAnomalySubscriptionsRequest')

const GroupDefinitionTypeSchema = z
  .enum(['DIMENSION', 'TAG', 'COST_CATEGORY'])
  .openapi('GroupDefinitionType')

const GroupDefinitionKeySchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1024)
  .openapi('GroupDefinitionKey')

const GroupDefinitionSchema = z
  .object({
    Type: GroupDefinitionTypeSchema.and(
      z.any().openapi({ description: 'The string that represents the type of group.' }),
    ).exactOptional(),
    Key: GroupDefinitionKeySchema.and(
      z.any().openapi({ description: 'The string that represents a key for a specified group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a group when you specify a group by criteria or in the response to a query with a specific grouping.',
    required: [],
  })
  .openapi('GroupDefinition')

const GroupDefinitionsSchema = z.array(GroupDefinitionSchema).openapi('GroupDefinitions')

const DateIntervalSchema = z
  .object({
    Start: YearMonthDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning of the time period. The start date is inclusive. For example, if <code>start</code> is <code>2017-01-01</code>, Amazon Web Services retrieves cost and usage data starting at <code>2017-01-01</code> up to the end date. The start date must be equal to or no later than the current date to avoid a validation error.',
        }),
    ),
    End: YearMonthDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time period. The end date is exclusive. For example, if <code>end</code> is <code>2017-05-01</code>, Amazon Web Services retrieves cost and usage data from the start date up to, but not including, <code>2017-05-01</code>.',
        }),
    ),
  })
  .openapi({ required: ['Start', 'End'], description: 'The time period of the request. ' })
  .openapi('DateInterval')

const MetricAmountSchema = z.string().openapi('MetricAmount')

const MetricUnitSchema = z.string().openapi('MetricUnit')

const MetricValueSchema = z
  .object({
    Amount: MetricAmountSchema.and(
      z.any().openapi({ description: 'The actual number that represents the metric.' }),
    ).exactOptional(),
    Unit: MetricUnitSchema.and(
      z.any().openapi({ description: 'The unit that the metric is given in.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The aggregated value for a metric.', required: [] })
  .openapi('MetricValue')

const MetricsSchema = z.record(z.string(), MetricValueSchema).openapi('Metrics')

const KeySchema = z.string().openapi('Key')

const KeysSchema = z.array(KeySchema).openapi('Keys')

const GroupSchema = z
  .object({
    Keys: KeysSchema.and(
      z.any().openapi({ description: 'The keys that are included in this group.' }),
    ).exactOptional(),
    Metrics: MetricsSchema.and(
      z.any().openapi({ description: 'The metrics that are included in this group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'One level of grouped data in the results.', required: [] })
  .openapi('Group')

const GroupsSchema = z.array(GroupSchema).openapi('Groups')

const EstimatedSchema = z.boolean().openapi('Estimated')

const ResultByTimeSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z.any().openapi({ description: 'The time period that the result covers.' }),
    ).exactOptional(),
    Total: MetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'The total amount of cost or usage accrued during the time period.',
        }),
    ).exactOptional(),
    Groups: GroupsSchema.and(
      z.any().openapi({ description: 'The groups that this time period includes.' }),
    ).exactOptional(),
    Estimated: EstimatedSchema.and(
      z.any().openapi({ description: 'Determines whether the result is estimated.' }),
    ).exactOptional(),
  })
  .openapi({ description: "The result that's associated with a time period.", required: [] })
  .openapi('ResultByTime')

const ResultsByTimeSchema = z.array(ResultByTimeSchema).openapi('ResultsByTime')

const AttributeValueSchema = z.string().openapi('AttributeValue')

const AttributesSchema = z.record(z.string(), AttributeValueSchema).openapi('Attributes')

const DimensionValuesWithAttributesSchema = z
  .object({
    Value: ValueSchema.and(
      z.any().openapi({ description: 'The value of a dimension with a specific attribute.' }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description: 'The attribute that applies to a specific <code>Dimension</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.',
    required: [],
  })
  .openapi('DimensionValuesWithAttributes')

const DimensionValuesWithAttributesListSchema = z
  .array(DimensionValuesWithAttributesSchema)
  .openapi('DimensionValuesWithAttributesList')

const GetCostAndUsageResponseSchema = z
  .object({
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    GroupDefinitions: GroupDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The groups that are specified by the <code>Filter</code> or <code>GroupBy</code> parameters in the request.',
        }),
    ).exactOptional(),
    ResultsByTime: ResultsByTimeSchema.and(
      z
        .any()
        .openapi({ description: "The time period that's covered by the results in the response." }),
    ).exactOptional(),
    DimensionValueAttributes: DimensionValuesWithAttributesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attributes that apply to a specific dimension value. For example, if the value is a linked account, the attribute is that account name.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCostAndUsageResponse')

const GranularitySchema = z.enum(['DAILY', 'MONTHLY', 'HOURLY']).openapi('Granularity')

const MetricNameSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1024)
  .openapi('MetricName')

const MetricNamesSchema = z.array(MetricNameSchema).openapi('MetricNames')

const GetCostAndUsageRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the start date and end date for retrieving Amazon Web Services costs. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.',
        }),
    ),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            "Sets the Amazon Web Services cost granularity to <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. ",
        }),
    ),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters Amazon Web Services costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated with that account\'s usage of that service. You can nest <code>Expression</code> objects to define any combination of dimension filters. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p> <p>Valid values for <code>MatchOptions</code> for <code>Dimensions</code> are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p> <p>Valid values for <code>MatchOptions</code> for <code>CostCategories</code> and <code>Tags</code> are <code>EQUALS</code>, <code>ABSENT</code>, and <code>CASE_SENSITIVE</code>. Default values are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>',
        }),
    ).exactOptional(),
    Metrics: MetricNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Which metrics are returned in the query. For more information about blended and unblended rates, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation appear on some line items in my bill?</a>. </p> <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>. </p> <note> <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate <code>usageQuantity</code> across all of Amazon EC2, the results aren\'t meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours and GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or <code>UsageTypeGroups</code>. </p> </note> <p> <code>Metrics</code> is required for <code>GetCostAndUsage</code> requests.</p>',
        }),
    ),
    GroupBy: GroupDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can group Amazon Web Services costs using up to two different groups, either dimensions, tag keys, cost categories, or any two group by types.</p> <p>Valid values for the <code>DIMENSION</code> type are <code>AZ</code>, <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>INVOICING_ENTITY</code>, <code>LINKED_ACCOUNT</code>, <code>OPERATION</code>, <code>PLATFORM</code>, <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TENANCY</code>, <code>RECORD_TYPE</code>, and <code>USAGE_TYPE</code>.</p> <p>When you group by the <code>TAG</code> type and include a valid tag key, you get all tag values, including empty strings.</p>',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod', 'Granularity', 'Metrics'], title: 'GetCostAndUsageRequest' })
  .openapi('GetCostAndUsageRequest')

const BillExpirationExceptionSchema = z.any().openapi('BillExpirationException')

const DataUnavailableExceptionSchema = z.any().openapi('DataUnavailableException')

const RequestChangedExceptionSchema = z.any().openapi('RequestChangedException')

const GetCostAndUsageWithResourcesResponseSchema = z
  .object({
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    GroupDefinitions: GroupDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The groups that are specified by the <code>Filter</code> or <code>GroupBy</code> parameters in the request.',
        }),
    ).exactOptional(),
    ResultsByTime: ResultsByTimeSchema.and(
      z
        .any()
        .openapi({ description: "The time period that's covered by the results in the response." }),
    ).exactOptional(),
    DimensionValueAttributes: DimensionValuesWithAttributesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attributes that apply to a specific dimension value. For example, if the value is a linked account, the attribute is that account name.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCostAndUsageWithResourcesResponse')

const GetCostAndUsageWithResourcesRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.',
        }),
    ),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            "Sets the Amazon Web Services cost granularity to <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the response object doesn't include the <code>Granularity</code>, <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. ",
        }),
    ),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters Amazon Web Services costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated with that account\'s usage of that service. You can nest <code>Expression</code> objects to define any combination of dimension filters. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p> <p>The <code>GetCostAndUsageWithResources</code> operation requires that you either group by or filter by a <code>ResourceId</code>. It requires the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> <code>"SERVICE = Amazon Elastic Compute Cloud - Compute"</code> in the filter.</p> <p>Valid values for <code>MatchOptions</code> for <code>Dimensions</code> are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p> <p>Valid values for <code>MatchOptions</code> for <code>CostCategories</code> and <code>Tags</code> are <code>EQUALS</code>, <code>ABSENT</code>, and <code>CASE_SENSITIVE</code>. Default values are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>',
        }),
    ),
    Metrics: MetricNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Which metrics are returned in the query. For more information about blended and unblended rates, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation appear on some line items in my bill?</a>. </p> <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>. </p> <note> <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without taking the units into account. For example, if you aggregate <code>usageQuantity</code> across all of Amazon EC2, the results aren\'t meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hour or GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or <code>UsageTypeGroups</code>. </p> </note> <p> <code>Metrics</code> is required for <code>GetCostAndUsageWithResources</code> requests.</p>',
        }),
    ).exactOptional(),
    GroupBy: GroupDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can group Amazon Web Services costs using up to two different groups: <code>DIMENSION</code>, <code>TAG</code>, <code>COST_CATEGORY</code>.',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TimePeriod', 'Granularity', 'Filter'],
    title: 'GetCostAndUsageWithResourcesRequest',
  })
  .openapi('GetCostAndUsageWithResourcesRequest')

const CostCategoryNamesListSchema = z.array(CostCategoryNameSchema).openapi('CostCategoryNamesList')

const CostCategoryValuesListSchema = z
  .array(CostCategoryValueSchema)
  .openapi('CostCategoryValuesList')

const GetCostCategoriesResponseSchema = z
  .object({
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    CostCategoryNames: CostCategoryNamesListSchema.and(
      z.any().openapi({ description: 'The names of the Cost Categories.' }),
    ).exactOptional(),
    CostCategoryValues: CostCategoryValuesListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Cost Category values.</p> <p>If the <code>CostCategoryName</code> key isn't specified in the request, the <code>CostCategoryValues</code> fields aren't returned. </p>",
        }),
    ).exactOptional(),
    ReturnSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The number of objects that are returned.' }),
    ),
    TotalSize: PageSizeSchema.and(z.any().openapi({ description: 'The total number of objects.' })),
  })
  .openapi({ required: ['ReturnSize', 'TotalSize'] })
  .openapi('GetCostCategoriesResponse')

const SearchStringSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1024)
  .openapi('SearchString')

const SortDefinitionKeySchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1024)
  .openapi('SortDefinitionKey')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const SortDefinitionSchema = z
  .object({
    Key: SortDefinitionKeySchema.and(
      z.any().openapi({ description: "The key that's used to sort the data." }),
    ),
    SortOrder: SortOrderSchema.and(
      z.any().openapi({ description: "The order that's used to sort the data." }),
    ).exactOptional(),
  })
  .openapi({ required: ['Key'], description: 'The details for how to sort the data.' })
  .openapi('SortDefinition')

const SortDefinitionsSchema = z.array(SortDefinitionSchema).openapi('SortDefinitions')

const MaxResultsSchema = z.int().min(1).openapi('MaxResults')

const GetCostCategoriesRequestSchema = z
  .object({
    SearchString: SearchStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value that you want to search the filter values for.</p> <p>If you don't specify a <code>CostCategoryName</code>, <code>SearchString</code> is used to filter Cost Category names that match the <code>SearchString</code> pattern. If you specify a <code>CostCategoryName</code>, <code>SearchString</code> is used to filter Cost Category values that match the <code>SearchString</code> pattern.</p>",
        }),
    ).exactOptional(),
    TimePeriod: DateIntervalSchema,
    CostCategoryName: CostCategoryNameSchema.exactOptional(),
    Filter: ExpressionSchema.exactOptional(),
    SortBy: SortDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value that you sort the data by.</p> <p>The key represents the cost and usage metrics. The following values are supported:</p> <ul> <li> <p> <code>BlendedCost</code> </p> </li> <li> <p> <code>UnblendedCost</code> </p> </li> <li> <p> <code>AmortizedCost</code> </p> </li> <li> <p> <code>NetAmortizedCost</code> </p> </li> <li> <p> <code>NetUnblendedCost</code> </p> </li> <li> <p> <code>UsageQuantity</code> </p> </li> <li> <p> <code>NormalizedUsageAmount</code> </p> </li> </ul> <p>The supported key values for the <code>SortOrder</code> value are <code>ASCENDING</code> and <code>DESCENDING</code>.</p> <p>When you use the <code>SortBy</code> value, the <code>NextPageToken</code> and <code>SearchString</code> key values aren't supported.</p>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This field is only used when the <code>SortBy</code> value is provided in the request.</p> <p>The maximum number of objects that are returned for this request. If <code>MaxResults</code> isn't specified with the <code>SortBy</code> value, the request returns 1000 results as the default value for this parameter.</p> <p>For <code>GetCostCategories</code>, MaxResults has an upper quota of 1000.</p>",
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the NextPageToken from the previous call in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod'], title: 'GetCostCategoriesRequest' })
  .openapi('GetCostCategoriesRequest')

const ForecastResultSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z.any().openapi({ description: 'The period of time that the forecast covers.' }),
    ).exactOptional(),
    MeanValue: GenericStringSchema.and(
      z.any().openapi({ description: 'The mean value of the forecast.' }),
    ).exactOptional(),
    PredictionIntervalLowerBound: GenericStringSchema.and(
      z.any().openapi({ description: 'The lower limit for the prediction interval. ' }),
    ).exactOptional(),
    PredictionIntervalUpperBound: GenericStringSchema.and(
      z.any().openapi({ description: 'The upper limit for the prediction interval. ' }),
    ).exactOptional(),
  })
  .openapi({ description: "The forecast that's created for your query.", required: [] })
  .openapi('ForecastResult')

const ForecastResultsByTimeSchema = z.array(ForecastResultSchema).openapi('ForecastResultsByTime')

const GetCostForecastResponseSchema = z
  .object({
    Total: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'How much you are forecasted to spend over the forecast period, in <code>USD</code>.',
        }),
    ).exactOptional(),
    ForecastResultsByTime: ForecastResultsByTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list of days. For <code>MONTHLY</code> forecasts, this is a list of months.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCostForecastResponse')

const MetricSchema = z
  .enum([
    'BLENDED_COST',
    'UNBLENDED_COST',
    'AMORTIZED_COST',
    'NET_UNBLENDED_COST',
    'NET_AMORTIZED_COST',
    'USAGE_QUANTITY',
    'NORMALIZED_USAGE_AMOUNT',
  ])
  .openapi('Metric')

const PredictionIntervalLevelSchema = z.int().min(51).max(99).openapi('PredictionIntervalLevel')

const GetCostForecastRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period of time that you want the forecast to cover. The start date must be equal to or no later than the current date to avoid a validation error.',
        }),
    ),
    Metric: MetricSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation appear on some line items in my bill?</a>. </p> <p>Valid values for a <code>GetCostForecast</code> call are the following:</p> <ul> <li> <p>AMORTIZED_COST</p> </li> <li> <p>BLENDED_COST</p> </li> <li> <p>NET_AMORTIZED_COST</p> </li> <li> <p>NET_UNBLENDED_COST</p> </li> <li> <p>UNBLENDED_COST</p> </li> </ul>',
        }),
    ),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p> <p>The <code>GetCostForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>',
        }),
    ),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filters that you want to use to filter your forecast. The <code>GetCostForecast</code> API supports filtering by the following dimensions:</p> <ul> <li> <p> <code>AZ</code> </p> </li> <li> <p> <code>INSTANCE_TYPE</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT_NAME</code> </p> </li> <li> <p> <code>OPERATION</code> </p> </li> <li> <p> <code>PURCHASE_TYPE</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>USAGE_TYPE</code> </p> </li> <li> <p> <code>USAGE_TYPE_GROUP</code> </p> </li> <li> <p> <code>RECORD_TYPE</code> </p> </li> <li> <p> <code>OPERATING_SYSTEM</code> </p> </li> <li> <p> <code>TENANCY</code> </p> </li> <li> <p> <code>SCOPE</code> </p> </li> <li> <p> <code>PLATFORM</code> </p> </li> <li> <p> <code>SUBSCRIPTION_ID</code> </p> </li> <li> <p> <code>LEGAL_ENTITY_NAME</code> </p> </li> <li> <p> <code>DEPLOYMENT_OPTION</code> </p> </li> <li> <p> <code>DATABASE_ENGINE</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> <li> <p> <code>BILLING_ENTITY</code> </p> </li> <li> <p> <code>RESERVATION_ID</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    PredictionIntervalLevel: PredictionIntervalLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod', 'Metric', 'Granularity'], title: 'GetCostForecastRequest' })
  .openapi('GetCostForecastRequest')

const GetDimensionValuesResponseSchema = z
  .object({
    DimensionValues: DimensionValuesWithAttributesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filters that you used to filter your request. Some dimensions are available only for a specific context.</p> <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services services, such as Amazon Web Services.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p> </li> <li> <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.</p> </li> <li> <p>SERVICE - The Amazon Web Services service such as Amazon DynamoDB.</p> </li> <li> <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples include GB and Hrs.</p> </li> <li> <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.</p> </li> <li> <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p> </li> <li> <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service. You can opt-in by enabling <code>Hourly</code> and <code>Resource Level Data</code> in Cost Management Console preferences.</p> </li> </ul> <p>If you set the context to <code>RESERVATIONS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p> </li> <li> <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> </ul> <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p> </li> <li> <p>PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>INSTANCE_TYPE_FAMILY - The family of instances (For example, <code>m5</code>)</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan</p> </li> </ul>',
        }),
    ),
    ReturnSize: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of results that Amazon Web Services returned at one time.',
        }),
    ),
    TotalSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The total number of search results.' }),
    ),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DimensionValues', 'ReturnSize', 'TotalSize'] })
  .openapi('GetDimensionValuesResponse')

const ContextSchema = z.enum(['COST_AND_USAGE', 'RESERVATIONS', 'SAVINGS_PLANS']).openapi('Context')

const GetDimensionValuesRequestSchema = z
  .object({
    SearchString: SearchStringSchema.and(
      z.any().openapi({ description: 'The value that you want to search the filter values for.' }),
    ).exactOptional(),
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date and end date for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.',
        }),
    ),
    Dimension: DimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the dimension. Each <code>Dimension</code> is available for a different <code>Context</code>. For more information, see <code>Context</code>. <code>LINK_ACCOUNT_NAME</code> and <code>SERVICE_CODE</code> can only be used in <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/AAPI_CostCategoryRule.html">CostCategoryRule</a>. ',
        }),
    ),
    Context: ContextSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The context for the call to <code>GetDimensionValues</code>. This can be <code>RESERVATIONS</code> or <code>COST_AND_USAGE</code>. The default value is <code>COST_AND_USAGE</code>. If the context is set to <code>RESERVATIONS</code>, the resulting dimension values can be used in the <code>GetReservationUtilization</code> operation. If the context is set to <code>COST_AND_USAGE</code>, the resulting dimension values can be used in the <code>GetCostAndUsage</code> operation.</p> <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>BILLING_ENTITY - The Amazon Web Services seller that your account is with. Possible values are the following:</p> <p>- Amazon Web Services(Amazon Web Services): The entity that sells Amazon Web Services.</p> <p>- AISPL (Amazon Internet Services Pvt. Ltd.): The local Indian entity that's an acting reseller for Amazon Web Services in India.</p> <p>- Amazon Web Services Marketplace: The entity that supports the sale of solutions that are built on Amazon Web Services by third-party software providers.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>INSTANCE_TYPE_FAMILY - A family of instance types optimized to fit different use cases. Examples are <code>Compute Optimized</code> (for example, <code>C4</code>, <code>C5</code>, <code>C6g</code>, and <code>C7g</code>), <code>Memory Optimization</code> (for example, <code>R4</code>, <code>R5n</code>, <code>R5b</code>, and <code>R6g</code>).</p> </li> <li> <p>INVOICING_ENTITY - The name of the entity that issues the Amazon Web Services invoice.</p> </li> <li> <p>LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services services, such as Amazon Web Services.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p> </li> <li> <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>PURCHASE_TYPE - The reservation type of the purchase that this usage is related to. Examples include On-Demand Instances and Standard Reserved Instances.</p> </li> <li> <p>RESERVATION_ID - The unique identifier for an Amazon Web Services Reservation Instance.</p> </li> <li> <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.</p> </li> <li> <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute).</p> </li> <li> <p>SERVICE - The Amazon Web Services service such as Amazon DynamoDB.</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> <li> <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples include GB and Hrs.</p> </li> <li> <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>RECORD_TYPE - The different types of charges such as Reserved Instance (RI) fees, usage costs, tax refunds, and credits.</p> </li> <li> <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.</p> </li> </ul> <p>If you set the context to <code>RESERVATIONS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p> </li> <li> <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> </ul> <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p> </li> <li> <p>PAYMENT_OPTION - The payment option for the given Savings Plans (for example, All Upfront)</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>INSTANCE_TYPE_FAMILY - The family of instances (For example, <code>m5</code>)</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Filter: ExpressionSchema.exactOptional(),
    SortBy: SortDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value that you want to sort the data by.</p> <p>The key represents cost and usage metrics. The following values are supported:</p> <ul> <li> <p> <code>BlendedCost</code> </p> </li> <li> <p> <code>UnblendedCost</code> </p> </li> <li> <p> <code>AmortizedCost</code> </p> </li> <li> <p> <code>NetAmortizedCost</code> </p> </li> <li> <p> <code>NetUnblendedCost</code> </p> </li> <li> <p> <code>UsageQuantity</code> </p> </li> <li> <p> <code>NormalizedUsageAmount</code> </p> </li> </ul> <p>The supported values for the <code>SortOrder</code> key are <code>ASCENDING</code> or <code>DESCENDING</code>.</p> <p>When you specify a <code>SortBy</code> paramater, the context must be <code>COST_AND_USAGE</code>. Further, when using <code>SortBy</code>, <code>NextPageToken</code> and <code>SearchString</code> aren't supported.</p>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter.</p> <p>For <code>GetDimensionValues</code>, MaxResults has an upper limit of 1000.</p>",
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod', 'Dimension'], title: 'GetDimensionValuesRequest' })
  .openapi('GetDimensionValuesRequest')

const OnDemandHoursSchema = z.string().openapi('OnDemandHours')

const ReservedHoursSchema = z.string().openapi('ReservedHours')

const TotalRunningHoursSchema = z.string().openapi('TotalRunningHours')

const CoverageHoursPercentageSchema = z.string().openapi('CoverageHoursPercentage')

const CoverageHoursSchema = z
  .object({
    OnDemandHours: OnDemandHoursSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of instance running hours that On-Demand Instances covered.',
        }),
    ).exactOptional(),
    ReservedHours: ReservedHoursSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of instance running hours that reservations covered.',
        }),
    ).exactOptional(),
    TotalRunningHours: TotalRunningHoursSchema.and(
      z.any().openapi({ description: 'The total instance usage, in hours.' }),
    ).exactOptional(),
    CoverageHoursPercentage: CoverageHoursPercentageSchema.and(
      z
        .any()
        .openapi({ description: 'The percentage of instance hours that a reservation covered.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'How long a running instance either used a reservation or was On-Demand.',
    required: [],
  })
  .openapi('CoverageHours')

const OnDemandNormalizedUnitsSchema = z.string().openapi('OnDemandNormalizedUnits')

const ReservedNormalizedUnitsSchema = z.string().openapi('ReservedNormalizedUnits')

const TotalRunningNormalizedUnitsSchema = z.string().openapi('TotalRunningNormalizedUnits')

const CoverageNormalizedUnitsPercentageSchema = z
  .string()
  .openapi('CoverageNormalizedUnitsPercentage')

const CoverageNormalizedUnitsSchema = z
  .object({
    OnDemandNormalizedUnits: OnDemandNormalizedUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of normalized units that are covered by On-Demand Instances instead of a reservation.',
        }),
    ).exactOptional(),
    ReservedNormalizedUnits: ReservedNormalizedUnitsSchema.and(
      z.any().openapi({ description: 'The number of normalized units that a reservation covers.' }),
    ).exactOptional(),
    TotalRunningNormalizedUnits: TotalRunningNormalizedUnitsSchema.and(
      z.any().openapi({ description: 'The total number of normalized units that you used.' }),
    ).exactOptional(),
    CoverageNormalizedUnitsPercentage: CoverageNormalizedUnitsPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of your used instance normalized units that a reservation covers.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The amount of instance usage, in normalized units. You can use normalized units to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose that you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. When you use normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p>',
    required: [],
  })
  .openapi('CoverageNormalizedUnits')

const OnDemandCostSchema = z.string().openapi('OnDemandCost')

const CoverageCostSchema = z
  .object({
    OnDemandCost: OnDemandCostSchema.and(
      z.any().openapi({ description: 'How much an On-Demand Instance costs.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'How much it costs to run an instance.', required: [] })
  .openapi('CoverageCost')

const CoverageSchema = z
  .object({
    CoverageHours: CoverageHoursSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of instance usage that the reservation covered, in hours.',
        }),
    ).exactOptional(),
    CoverageNormalizedUnits: CoverageNormalizedUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of instance usage that the reservation covered, in normalized units.',
        }),
    ).exactOptional(),
    CoverageCost: CoverageCostSchema.and(
      z.any().openapi({ description: 'The amount of cost that the reservation covered.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The amount of instance usage that a reservation covered.',
    required: [],
  })
  .openapi('Coverage')

const ReservationCoverageGroupSchema = z
  .object({
    Attributes: AttributesSchema.and(
      z.any().openapi({ description: 'The attributes for this group of reservations.' }),
    ).exactOptional(),
    Coverage: CoverageSchema.and(
      z
        .any()
        .openapi({ description: 'How much instance usage this group of reservations covered.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A group of reservations that share a set of attributes.', required: [] })
  .openapi('ReservationCoverageGroup')

const ReservationCoverageGroupsSchema = z
  .array(ReservationCoverageGroupSchema)
  .openapi('ReservationCoverageGroups')

const CoverageByTimeSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z.any().openapi({ description: 'The period that this coverage was used over.' }),
    ).exactOptional(),
    Groups: ReservationCoverageGroupsSchema.and(
      z.any().openapi({ description: 'The groups of instances that the reservation covered.' }),
    ).exactOptional(),
    Total: CoverageSchema.and(
      z.any().openapi({ description: 'The total reservation coverage, in hours.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Reservation coverage for a specified period, in hours.', required: [] })
  .openapi('CoverageByTime')

const CoveragesByTimeSchema = z.array(CoverageByTimeSchema).openapi('CoveragesByTime')

const GetReservationCoverageResponseSchema = z
  .object({
    CoveragesByTime: CoveragesByTimeSchema.and(
      z.any().openapi({ description: 'The amount of time that your reservations covered.' }),
    ),
    Total: CoverageSchema.and(
      z
        .any()
        .openapi({ description: 'The total amount of instance usage that a reservation covered.' }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CoveragesByTime'] })
  .openapi('GetReservationCoverageResponse')

const GetReservationCoverageRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. ',
        }),
    ),
    GroupBy: GroupDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can group the data by the following attributes:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>INVOICING_ENTITY</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>TENANCY</p> </li> </ul>',
        }),
    ).exactOptional(),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The granularity of the Amazon Web Services cost data for the reservation. Valid values are <code>MONTHLY</code> and <code>DAILY</code>.</p> <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set, the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p> <p>The <code>GetReservationCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
        }),
    ).exactOptional(),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters utilization data by dimensions. You can filter by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p> <code>GetReservationCoverage</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR\'d together.</p> <p>If you don\'t provide a <code>SERVICE</code> filter, Cost Explorer defaults to EC2.</p> <p>Cost category is also supported.</p>',
        }),
    ).exactOptional(),
    Metrics: MetricNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The measurement that you want your reservation coverage reported in.</p> <p>Valid values are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>. You can use multiple values in a request.</p>',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    SortBy: SortDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value by which you want to sort the data.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>OnDemandCost</code> </p> </li> <li> <p> <code>CoverageHoursPercentage</code> </p> </li> <li> <p> <code>OnDemandHours</code> </p> </li> <li> <p> <code>ReservedHours</code> </p> </li> <li> <p> <code>TotalRunningHours</code> </p> </li> <li> <p> <code>CoverageNormalizedUnitsPercentage</code> </p> </li> <li> <p> <code>OnDemandNormalizedUnits</code> </p> </li> <li> <p> <code>ReservedNormalizedUnits</code> </p> </li> <li> <p> <code>TotalRunningNormalizedUnits</code> </p> </li> <li> <p> <code>Time</code> </p> </li> </ul> <p>Supported values for <code>SortOrder</code> are <code>ASCENDING</code> or <code>DESCENDING</code>.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TimePeriod'],
    title: 'GetReservationCoverageRequest',
    description:
      'You can use the following request parameters to query for how much of your instance usage a reservation covered.',
  })
  .openapi('GetReservationCoverageRequest')

const ReservationPurchaseRecommendationMetadataSchema = z
  .object({
    RecommendationId: GenericStringSchema.and(
      z.any().openapi({ description: 'The ID for this specific recommendation.' }),
    ).exactOptional(),
    GenerationTimestamp: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp for when Amazon Web Services made this recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about this specific recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation.',
    required: [],
  })
  .openapi('ReservationPurchaseRecommendationMetadata')

const AccountScopeSchema = z.enum(['PAYER', 'LINKED']).openapi('AccountScope')

const LookbackPeriodInDaysSchema = z
  .enum(['SEVEN_DAYS', 'THIRTY_DAYS', 'SIXTY_DAYS'])
  .openapi('LookbackPeriodInDays')

const TermInYearsSchema = z.enum(['ONE_YEAR', 'THREE_YEARS']).openapi('TermInYears')

const PaymentOptionSchema = z
  .enum([
    'NO_UPFRONT',
    'PARTIAL_UPFRONT',
    'ALL_UPFRONT',
    'LIGHT_UTILIZATION',
    'MEDIUM_UTILIZATION',
    'HEAVY_UTILIZATION',
  ])
  .openapi('PaymentOption')

const OfferingClassSchema = z.enum(['STANDARD', 'CONVERTIBLE']).openapi('OfferingClass')

const EC2SpecificationSchema = z
  .object({
    OfferingClass: OfferingClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether you want a recommendation for standard or convertible reservations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Amazon EC2 hardware specifications that you want Amazon Web Services to provide recommendations for.',
    required: [],
  })
  .openapi('EC2Specification')

const ServiceSpecificationSchema = z
  .object({
    EC2Specification: EC2SpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 hardware specifications that you want Amazon Web Services to provide recommendations for.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Hardware specifications for the service that you want recommendations for.',
    required: [],
  })
  .openapi('ServiceSpecification')

const InstanceDetailsSchema: z.ZodType<InstanceDetailsType> = z
  .lazy(() =>
    z
      .object({
        EC2InstanceDetails: EC2InstanceDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon EC2 instances that Amazon Web Services recommends that you purchase.',
            }),
        ).exactOptional(),
        RDSInstanceDetails: RDSInstanceDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon RDS instances that Amazon Web Services recommends that you purchase.',
            }),
        ).exactOptional(),
        RedshiftInstanceDetails: RedshiftInstanceDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon Redshift instances that Amazon Web Services recommends that you purchase.',
            }),
        ).exactOptional(),
        ElastiCacheInstanceDetails: ElastiCacheInstanceDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The ElastiCache instances that Amazon Web Services recommends that you purchase.',
            }),
        ).exactOptional(),
        ESInstanceDetails: ESInstanceDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon OpenSearch Service instances that Amazon Web Services recommends that you purchase.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Details about the instances that Amazon Web Services recommends that you purchase.',
        required: [],
      }),
  )
  .openapi('InstanceDetails')

const ReservationPurchaseRecommendationDetailSchema = z
  .object({
    AccountId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The account that this Reserved Instance (RI) recommendation is for.',
        }),
    ).exactOptional(),
    InstanceDetails: InstanceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the instances that Amazon Web Services recommends that you purchase.',
        }),
    ).exactOptional(),
    RecommendedNumberOfInstancesToPurchase: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of instances that Amazon Web Services recommends that you purchase.',
        }),
    ).exactOptional(),
    RecommendedNormalizedUnitsToPurchase: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of normalized units that Amazon Web Services recommends that you purchase.',
        }),
    ).exactOptional(),
    MinimumNumberOfInstancesUsedPerHour: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of instances that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.',
        }),
    ).exactOptional(),
    MinimumNormalizedUnitsUsedPerHour: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of normalized units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.',
        }),
    ).exactOptional(),
    MaximumNumberOfInstancesUsedPerHour: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of instances that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.',
        }),
    ).exactOptional(),
    MaximumNormalizedUnitsUsedPerHour: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of normalized units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.',
        }),
    ).exactOptional(),
    AverageNumberOfInstancesUsedPerHour: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average number of instances that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.',
        }),
    ).exactOptional(),
    AverageNormalizedUnitsUsedPerHour: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average number of normalized units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.',
        }),
    ).exactOptional(),
    AverageUtilization: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average utilization of your instances. Amazon Web Services uses this to calculate your recommended reservation purchases.',
        }),
    ).exactOptional(),
    EstimatedBreakEvenInMonths: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long Amazon Web Services estimates that it takes for this instance to start saving you money, in months.',
        }),
    ).exactOptional(),
    CurrencyCode: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The currency code that Amazon Web Services used to calculate the costs for this instance.',
        }),
    ).exactOptional(),
    EstimatedMonthlySavingsAmount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How much Amazon Web Services estimates that this specific recommendation might save you in a month.',
        }),
    ).exactOptional(),
    EstimatedMonthlySavingsPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How much Amazon Web Services estimates that this specific recommendation might save you in a month, as a percentage of your overall costs.',
        }),
    ).exactOptional(),
    EstimatedMonthlyOnDemandCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How much Amazon Web Services estimates that you spend on On-Demand Instances in a month.',
        }),
    ).exactOptional(),
    EstimatedReservationCostForLookbackPeriod: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How much Amazon Web Services estimates that you might spend for all usage during the specified historical period if you had a reservation.',
        }),
    ).exactOptional(),
    UpfrontCost: GenericStringSchema.and(
      z.any().openapi({ description: 'How much purchasing this instance costs you upfront.' }),
    ).exactOptional(),
    RecurringStandardMonthlyCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'How much purchasing this instance costs you on a monthly basis.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about your recommended reservation purchase.', required: [] })
  .openapi('ReservationPurchaseRecommendationDetail')

const ReservationPurchaseRecommendationDetailsSchema = z
  .array(ReservationPurchaseRecommendationDetailSchema)
  .openapi('ReservationPurchaseRecommendationDetails')

const ReservationPurchaseRecommendationSummarySchema = z
  .object({
    TotalEstimatedMonthlySavingsAmount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amount that Amazon Web Services estimates that this recommendation could save you in a month.',
        }),
    ).exactOptional(),
    TotalEstimatedMonthlySavingsPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amount that Amazon Web Services estimates that this recommendation could save you in a month, as a percentage of your costs.',
        }),
    ).exactOptional(),
    CurrencyCode: GenericStringSchema.and(
      z.any().openapi({ description: 'The currency code used for this recommendation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A summary about this recommendation, such as the currency code, the amount that Amazon Web Services estimates that you could save, and the total amount of reservation to purchase.',
    required: [],
  })
  .openapi('ReservationPurchaseRecommendationSummary')

const ReservationPurchaseRecommendationSchema = z
  .object({
    AccountScope: AccountScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account scope that Amazon Web Services recommends that you purchase this instance for. For example, you can purchase this reservation for an entire organization in Amazon Web Services Organizations.',
        }),
    ).exactOptional(),
    LookbackPeriodInDays: LookbackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'How many days of previous usage that Amazon Web Services considers when making this recommendation.',
        }),
    ).exactOptional(),
    TermInYears: TermInYearsSchema.and(
      z
        .any()
        .openapi({
          description: 'The term of the reservation that you want recommendations for, in years.',
        }),
    ).exactOptional(),
    PaymentOption: PaymentOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The payment option for the reservation (for example, <code>AllUpfront</code> or <code>NoUpfront</code>).',
        }),
    ).exactOptional(),
    ServiceSpecification: ServiceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'Hardware specifications for the service that you want recommendations for.',
        }),
    ).exactOptional(),
    RecommendationDetails: ReservationPurchaseRecommendationDetailsSchema.and(
      z.any().openapi({ description: 'Details about the recommended purchases.' }),
    ).exactOptional(),
    RecommendationSummary: ReservationPurchaseRecommendationSummarySchema.and(
      z.any().openapi({ description: 'A summary about the recommended purchase.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A specific reservation that Amazon Web Services recommends for purchase.',
    required: [],
  })
  .openapi('ReservationPurchaseRecommendation')

const ReservationPurchaseRecommendationsSchema = z
  .array(ReservationPurchaseRecommendationSchema)
  .openapi('ReservationPurchaseRecommendations')

const GetReservationPurchaseRecommendationResponseSchema = z
  .object({
    Metadata: ReservationPurchaseRecommendationMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about this specific recommendation call, such as the time stamp for when Cost Explorer generated this recommendation.',
        }),
    ).exactOptional(),
    Recommendations: ReservationPurchaseRecommendationsSchema.and(
      z.any().openapi({ description: 'Recommendations for reservations to purchase.' }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token for the next set of retrievable results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetReservationPurchaseRecommendationResponse')

const GetReservationPurchaseRecommendationRequestSchema = z
  .object({
    AccountId: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: "The account ID that's associated with the recommendation. " }),
    ).exactOptional(),
    Service: GenericStringSchema.and(
      z.any().openapi({ description: 'The specific service that you want recommendations for.' }),
    ),
    Filter: ExpressionSchema.exactOptional(),
    AccountScope: AccountScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.',
        }),
    ).exactOptional(),
    LookbackPeriodInDays: LookbackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of previous days that you want Amazon Web Services to consider when it calculates your recommendations.',
        }),
    ).exactOptional(),
    TermInYears: TermInYearsSchema.and(
      z.any().openapi({ description: 'The reservation term that you want recommendations for.' }),
    ).exactOptional(),
    PaymentOption: PaymentOptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The reservation purchase option that you want recommendations for.',
        }),
    ).exactOptional(),
    ServiceSpecification: ServiceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.',
        }),
    ).exactOptional(),
    PageSize: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of recommendations that you want returned in a single response object.',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that indicates the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Service'], title: 'GetReservationPurchaseRecommendationRequest' })
  .openapi('GetReservationPurchaseRecommendationRequest')

const ReservationGroupKeySchema = z.string().openapi('ReservationGroupKey')

const ReservationGroupValueSchema = z.string().openapi('ReservationGroupValue')

const UtilizationPercentageSchema = z.string().openapi('UtilizationPercentage')

const UtilizationPercentageInUnitsSchema = z.string().openapi('UtilizationPercentageInUnits')

const PurchasedHoursSchema = z.string().openapi('PurchasedHours')

const PurchasedUnitsSchema = z.string().openapi('PurchasedUnits')

const TotalActualHoursSchema = z.string().openapi('TotalActualHours')

const TotalActualUnitsSchema = z.string().openapi('TotalActualUnits')

const UnusedHoursSchema = z.string().openapi('UnusedHours')

const UnusedUnitsSchema = z.string().openapi('UnusedUnits')

const OnDemandCostOfRIHoursUsedSchema = z.string().openapi('OnDemandCostOfRIHoursUsed')

const NetRISavingsSchema = z.string().openapi('NetRISavings')

const TotalPotentialRISavingsSchema = z.string().openapi('TotalPotentialRISavings')

const AmortizedUpfrontFeeSchema = z.string().openapi('AmortizedUpfrontFee')

const AmortizedRecurringFeeSchema = z.string().openapi('AmortizedRecurringFee')

const TotalAmortizedFeeSchema = z.string().openapi('TotalAmortizedFee')

const RICostForUnusedHoursSchema = z.string().openapi('RICostForUnusedHours')

const RealizedSavingsSchema = z.string().openapi('RealizedSavings')

const UnrealizedSavingsSchema = z.string().openapi('UnrealizedSavings')

const ReservationAggregatesSchema = z
  .object({
    UtilizationPercentage: UtilizationPercentageSchema.and(
      z.any().openapi({ description: 'The percentage of reservation time that you used.' }),
    ).exactOptional(),
    UtilizationPercentageInUnits: UtilizationPercentageInUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The percentage of Amazon EC2 reservation time that you used. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.",
        }),
    ).exactOptional(),
    PurchasedHours: PurchasedHoursSchema.and(
      z.any().openapi({ description: 'How many reservation hours that you purchased.' }),
    ).exactOptional(),
    PurchasedUnits: PurchasedUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of Amazon EC2 reservation hours that you purchased. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.",
        }),
    ).exactOptional(),
    TotalActualHours: TotalActualHoursSchema.and(
      z.any().openapi({ description: 'The total number of reservation hours that you used.' }),
    ).exactOptional(),
    TotalActualUnits: TotalActualUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of Amazon EC2 reservation hours that you used. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.",
        }),
    ).exactOptional(),
    UnusedHours: UnusedHoursSchema.and(
      z.any().openapi({ description: "The number of reservation hours that you didn't use." }),
    ).exactOptional(),
    UnusedUnits: UnusedUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of Amazon EC2 reservation hours that you didn't use. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.",
        }),
    ).exactOptional(),
    OnDemandCostOfRIHoursUsed: OnDemandCostOfRIHoursUsedSchema.and(
      z
        .any()
        .openapi({ description: 'How much your reservation costs if charged On-Demand rates.' }),
    ).exactOptional(),
    NetRISavings: NetRISavingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'How much you saved due to purchasing and utilizing reservation. Amazon Web Services calculates this by subtracting <code>TotalAmortizedFee</code> from <code>OnDemandCostOfRIHoursUsed</code>.',
        }),
    ).exactOptional(),
    TotalPotentialRISavings: TotalPotentialRISavingsSchema.and(
      z
        .any()
        .openapi({ description: 'How much you might save if you use your entire reservation.' }),
    ).exactOptional(),
    AmortizedUpfrontFee: AmortizedUpfrontFeeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The upfront cost of your reservation. It's amortized over the reservation period.",
        }),
    ).exactOptional(),
    AmortizedRecurringFee: AmortizedRecurringFeeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The monthly cost of your reservation. It's amortized over the reservation period.",
        }),
    ).exactOptional(),
    TotalAmortizedFee: TotalAmortizedFeeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total cost of your reservation. It's amortized over the reservation period.",
        }),
    ).exactOptional(),
    RICostForUnusedHours: RICostForUnusedHoursSchema.and(
      z.any().openapi({ description: 'The cost of unused hours for your reservation.' }),
    ).exactOptional(),
    RealizedSavings: RealizedSavingsSchema.and(
      z
        .any()
        .openapi({
          description: 'The realized savings because of purchasing and using a reservation.',
        }),
    ).exactOptional(),
    UnrealizedSavings: UnrealizedSavingsSchema.and(
      z
        .any()
        .openapi({
          description: 'The unrealized savings because of purchasing and using a reservation.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The aggregated numbers for your reservation usage.', required: [] })
  .openapi('ReservationAggregates')

const ReservationUtilizationGroupSchema = z
  .object({
    Key: ReservationGroupKeySchema.and(
      z.any().openapi({ description: 'The key for a specific reservation attribute.' }),
    ).exactOptional(),
    Value: ReservationGroupValueSchema.and(
      z.any().openapi({ description: 'The value of a specific reservation attribute.' }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z.any().openapi({ description: 'The attributes for this group of reservations.' }),
    ).exactOptional(),
    Utilization: ReservationAggregatesSchema.and(
      z.any().openapi({ description: 'How much you used this group of reservations.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A group of reservations that share a set of attributes.', required: [] })
  .openapi('ReservationUtilizationGroup')

const ReservationUtilizationGroupsSchema = z
  .array(ReservationUtilizationGroupSchema)
  .openapi('ReservationUtilizationGroups')

const UtilizationByTimeSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z.any().openapi({ description: 'The period of time that this utilization was used for.' }),
    ).exactOptional(),
    Groups: ReservationUtilizationGroupsSchema.and(
      z.any().openapi({ description: 'The groups that this utilization result uses.' }),
    ).exactOptional(),
    Total: ReservationAggregatesSchema.and(
      z.any().openapi({ description: 'The total number of reservation hours that were used.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The amount of utilization, in hours.', required: [] })
  .openapi('UtilizationByTime')

const UtilizationsByTimeSchema = z.array(UtilizationByTimeSchema).openapi('UtilizationsByTime')

const GetReservationUtilizationResponseSchema = z
  .object({
    UtilizationsByTime: UtilizationsByTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of time that you used your Reserved Instances (RIs).',
        }),
    ),
    Total: ReservationAggregatesSchema.and(
      z
        .any()
        .openapi({
          description: 'The total amount of time that you used your Reserved Instances (RIs).',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UtilizationsByTime'] })
  .openapi('GetReservationUtilizationResponse')

const GetReservationUtilizationRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. ',
        }),
    ),
    GroupBy: GroupDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Groups only by <code>SUBSCRIPTION_ID</code>. Metadata is included.',
        }),
    ).exactOptional(),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set, the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>. If both <code>GroupBy</code> and <code>Granularity</code> aren't set, <code>GetReservationUtilization</code> defaults to <code>DAILY</code>.</p> <p>The <code>GetReservationUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
        }),
    ).exactOptional(),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters utilization data by dimensions. You can filter by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>SCOPE</p> </li> <li> <p>TENANCY</p> </li> </ul> <p> <code>GetReservationUtilization</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR\'d together.</p>',
        }),
    ).exactOptional(),
    SortBy: SortDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>UtilizationPercentage</code> </p> </li> <li> <p> <code>UtilizationPercentageInUnits</code> </p> </li> <li> <p> <code>PurchasedHours</code> </p> </li> <li> <p> <code>PurchasedUnits</code> </p> </li> <li> <p> <code>TotalActualHours</code> </p> </li> <li> <p> <code>TotalActualUnits</code> </p> </li> <li> <p> <code>UnusedHours</code> </p> </li> <li> <p> <code>UnusedUnits</code> </p> </li> <li> <p> <code>OnDemandCostOfRIHoursUsed</code> </p> </li> <li> <p> <code>NetRISavings</code> </p> </li> <li> <p> <code>TotalPotentialRISavings</code> </p> </li> <li> <p> <code>AmortizedUpfrontFee</code> </p> </li> <li> <p> <code>AmortizedRecurringFee</code> </p> </li> <li> <p> <code>TotalAmortizedFee</code> </p> </li> <li> <p> <code>RICostForUnusedHours</code> </p> </li> <li> <p> <code>RealizedSavings</code> </p> </li> <li> <p> <code>UnrealizedSavings</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod'], title: 'GetReservationUtilizationRequest' })
  .openapi('GetReservationUtilizationRequest')

const RightsizingRecommendationMetadataSchema = z
  .object({
    RecommendationId: GenericStringSchema.and(
      z.any().openapi({ description: 'The ID for this specific recommendation.' }),
    ).exactOptional(),
    GenerationTimestamp: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp for when Amazon Web Services made this recommendation.',
        }),
    ).exactOptional(),
    LookbackPeriodInDays: LookbackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days of previous usage that Amazon Web Services considers when making this recommendation.',
        }),
    ).exactOptional(),
    AdditionalMetadata: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional metadata that might be applicable to the recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Metadata for this recommendation set.', required: [] })
  .openapi('RightsizingRecommendationMetadata')

const RightsizingRecommendationSummarySchema = z
  .object({
    TotalRecommendationCount: GenericStringSchema.and(
      z.any().openapi({ description: 'The total number of instance recommendations.' }),
    ).exactOptional(),
    EstimatedTotalMonthlySavingsAmount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated total savings resulting from modifications, on a monthly basis.',
        }),
    ).exactOptional(),
    SavingsCurrencyCode: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The currency code that Amazon Web Services used to calculate the savings.',
        }),
    ).exactOptional(),
    SavingsPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            " The savings percentage based on the recommended modifications. It's relative to the total On-Demand costs that are associated with these instances.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of rightsizing recommendations ', required: [] })
  .openapi('RightsizingRecommendationSummary')

const TagValuesListSchema = z.array(TagValuesSchema).openapi('TagValuesList')

const ResourceDetailsSchema: z.ZodType<ResourceDetailsType> = z
  .lazy(() =>
    z
      .object({
        EC2ResourceDetails: EC2ResourceDetailsSchema.and(
          z.any().openapi({ description: 'Details for the Amazon EC2 resource.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'Details for the resource.', required: [] }),
  )
  .openapi('ResourceDetails')

const ResourceUtilizationSchema: z.ZodType<ResourceUtilizationType> = z
  .lazy(() =>
    z
      .object({
        EC2ResourceUtilization: EC2ResourceUtilizationSchema.and(
          z.any().openapi({ description: 'The utilization of current Amazon EC2 instance. ' }),
        ).exactOptional(),
      })
      .openapi({ description: 'Resource utilization of current resource. ', required: [] }),
  )
  .openapi('ResourceUtilization')

const CurrentInstanceSchema = z
  .object({
    ResourceId: GenericStringSchema.and(
      z.any().openapi({ description: 'Resource ID of the current instance.' }),
    ).exactOptional(),
    InstanceName: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name that you given an instance. This field shows as blank if you haven't given the instance a name.",
        }),
    ).exactOptional(),
    Tags: TagValuesListSchema.and(
      z
        .any()
        .openapi({
          description: 'Cost allocation resource tags that are applied to the instance.',
        }),
    ).exactOptional(),
    ResourceDetails: ResourceDetailsSchema.and(
      z.any().openapi({ description: 'Details about the resource and utilization.' }),
    ).exactOptional(),
    ResourceUtilization: ResourceUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Utilization information of the current instance during the lookback period.',
        }),
    ).exactOptional(),
    ReservationCoveredHoursInLookbackPeriod: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of hours during the lookback period that's covered by reservations.",
        }),
    ).exactOptional(),
    SavingsPlansCoveredHoursInLookbackPeriod: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of hours during the lookback period that's covered by Savings Plans.",
        }),
    ).exactOptional(),
    OnDemandHoursInLookbackPeriod: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of hours during the lookback period that's billed at On-Demand rates.",
        }),
    ).exactOptional(),
    TotalRunningHoursInLookbackPeriod: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of hours that the instance ran during the lookback period.',
        }),
    ).exactOptional(),
    MonthlyCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The current On-Demand cost of operating this instance on a monthly basis.',
        }),
    ).exactOptional(),
    CurrencyCode: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The currency code that Amazon Web Services used to calculate the costs for this instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Context about the current instance.', required: [] })
  .openapi('CurrentInstance')

const RightsizingTypeSchema = z.enum(['TERMINATE', 'MODIFY']).openapi('RightsizingType')

const PlatformDifferenceSchema = z
  .enum([
    'HYPERVISOR',
    'NETWORK_INTERFACE',
    'STORAGE_INTERFACE',
    'INSTANCE_STORE_AVAILABILITY',
    'VIRTUALIZATION_TYPE',
  ])
  .openapi('PlatformDifference')

const PlatformDifferencesSchema = z.array(PlatformDifferenceSchema).openapi('PlatformDifferences')

const TargetInstanceSchema = z
  .object({
    EstimatedMonthlyCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The expected cost to operate this instance type on a monthly basis.',
        }),
    ).exactOptional(),
    EstimatedMonthlySavings: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The estimated savings that result from modification, on a monthly basis.',
        }),
    ).exactOptional(),
    CurrencyCode: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The currency code that Amazon Web Services used to calculate the costs for this instance.',
        }),
    ).exactOptional(),
    DefaultTargetInstance: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether this recommendation is the defaulted Amazon Web Services recommendation.',
        }),
    ).exactOptional(),
    ResourceDetails: ResourceDetailsSchema.and(
      z.any().openapi({ description: 'Details on the target instance type. ' }),
    ).exactOptional(),
    ExpectedResourceUtilization: ResourceUtilizationSchema.and(
      z
        .any()
        .openapi({ description: 'The expected utilization metrics for target instance type.' }),
    ).exactOptional(),
    PlatformDifferences: PlatformDifferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Explains the actions that you might need to take to successfully migrate your workloads from the current instance type to the recommended instance type. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details on recommended instance.', required: [] })
  .openapi('TargetInstance')

const TargetInstancesListSchema = z.array(TargetInstanceSchema).openapi('TargetInstancesList')

const ModifyRecommendationDetailSchema = z
  .object({
    TargetInstances: TargetInstancesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether this instance type is the Amazon Web Services default recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details for the modification recommendation.', required: [] })
  .openapi('ModifyRecommendationDetail')

const TerminateRecommendationDetailSchema = z
  .object({
    EstimatedMonthlySavings: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The estimated savings that result from modification, on a monthly basis.',
        }),
    ).exactOptional(),
    CurrencyCode: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The currency code that Amazon Web Services used to calculate the costs for this instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details on termination recommendation. ', required: [] })
  .openapi('TerminateRecommendationDetail')

const FindingReasonCodeSchema = z
  .enum([
    'CPU_OVER_PROVISIONED',
    'CPU_UNDER_PROVISIONED',
    'MEMORY_OVER_PROVISIONED',
    'MEMORY_UNDER_PROVISIONED',
    'EBS_THROUGHPUT_OVER_PROVISIONED',
    'EBS_THROUGHPUT_UNDER_PROVISIONED',
    'EBS_IOPS_OVER_PROVISIONED',
    'EBS_IOPS_UNDER_PROVISIONED',
    'NETWORK_BANDWIDTH_OVER_PROVISIONED',
    'NETWORK_BANDWIDTH_UNDER_PROVISIONED',
    'NETWORK_PPS_OVER_PROVISIONED',
    'NETWORK_PPS_UNDER_PROVISIONED',
    'DISK_IOPS_OVER_PROVISIONED',
    'DISK_IOPS_UNDER_PROVISIONED',
    'DISK_THROUGHPUT_OVER_PROVISIONED',
    'DISK_THROUGHPUT_UNDER_PROVISIONED',
  ])
  .openapi('FindingReasonCode')

const FindingReasonCodesSchema = z.array(FindingReasonCodeSchema).openapi('FindingReasonCodes')

const RightsizingRecommendationSchema = z
  .object({
    AccountId: GenericStringSchema.and(
      z.any().openapi({ description: 'The account that this recommendation is for.' }),
    ).exactOptional(),
    CurrentInstance: CurrentInstanceSchema.and(
      z.any().openapi({ description: 'Context regarding the current instance.' }),
    ).exactOptional(),
    RightsizingType: RightsizingTypeSchema.and(
      z
        .any()
        .openapi({ description: 'A recommendation to either terminate or modify the resource.' }),
    ).exactOptional(),
    ModifyRecommendationDetail: ModifyRecommendationDetailSchema.and(
      z.any().openapi({ description: 'The details for the modification recommendations. ' }),
    ).exactOptional(),
    TerminateRecommendationDetail: TerminateRecommendationDetailSchema.and(
      z.any().openapi({ description: 'The details for termination recommendations.' }),
    ).exactOptional(),
    FindingReasonCodes: FindingReasonCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of possible reasons why the recommendation is generated, such as under- or over-utilization of specific metrics (for example, CPU, Memory, Network). ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Recommendations to rightsize resources.', required: [] })
  .openapi('RightsizingRecommendation')

const RightsizingRecommendationListSchema = z
  .array(RightsizingRecommendationSchema)
  .openapi('RightsizingRecommendationList')

const RecommendationTargetSchema = z
  .enum(['SAME_INSTANCE_FAMILY', 'CROSS_INSTANCE_FAMILY'])
  .openapi('RecommendationTarget')

const RightsizingRecommendationConfigurationSchema = z
  .object({
    RecommendationTarget: RecommendationTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The option to see recommendations within the same instance family or recommendations for instances across other families. The default value is <code>SAME_INSTANCE_FAMILY</code>. ',
        }),
    ),
    BenefitsConsidered: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The option to consider RI or Savings Plans discount benefits in your savings calculation. The default value is <code>TRUE</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['RecommendationTarget', 'BenefitsConsidered'],
    description:
      'You can use <code>RightsizingRecommendationConfiguration</code> to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or neither. ',
  })
  .openapi('RightsizingRecommendationConfiguration')

const GetRightsizingRecommendationResponseSchema = z
  .object({
    Metadata: RightsizingRecommendationMetadataSchema.and(
      z.any().openapi({ description: 'Information regarding this specific recommendation set.' }),
    ).exactOptional(),
    Summary: RightsizingRecommendationSummarySchema.and(
      z.any().openapi({ description: 'Summary of this recommendation set.' }),
    ).exactOptional(),
    RightsizingRecommendations: RightsizingRecommendationListSchema.and(
      z.any().openapi({ description: 'Recommendations to rightsize resources.' }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z.any().openapi({ description: 'The token to retrieve the next set of results.' }),
    ).exactOptional(),
    Configuration: RightsizingRecommendationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use Configuration to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRightsizingRecommendationResponse')

const GetRightsizingRecommendationRequestSchema = z
  .object({
    Filter: ExpressionSchema.exactOptional(),
    Configuration: RightsizingRecommendationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use Configuration to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither. ',
        }),
    ).exactOptional(),
    Service: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific service that you want recommendations for. The only valid value for <code>GetRightsizingRecommendation</code> is "<code>AmazonEC2</code>".',
        }),
    ),
    PageSize: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of recommendations that you want returned in a single response object.',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that indicates the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Service'], title: 'GetRightsizingRecommendationRequest' })
  .openapi('GetRightsizingRecommendationRequest')

const SavingsPlansCoverageDataSchema = z
  .object({
    SpendCoveredBySavingsPlans: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of your Amazon Web Services usage that's covered by a Savings Plans.",
        }),
    ).exactOptional(),
    OnDemandCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The cost of your Amazon Web Services usage at the public On-Demand rate.',
        }),
    ).exactOptional(),
    TotalCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total cost of your Amazon Web Services usage, regardless of your purchase option.',
        }),
    ).exactOptional(),
    CoveragePercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of your existing Savings Plans covered usage, divided by all of your eligible Savings Plans usage in an account (or set of accounts).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account.',
    required: [],
  })
  .openapi('SavingsPlansCoverageData')

const SavingsPlansCoverageSchema = z
  .object({
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description: 'The attribute that applies to a specific <code>Dimension</code>.',
        }),
    ).exactOptional(),
    Coverage: SavingsPlansCoverageDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of Savings Plans eligible usage that the Savings Plans covered.',
        }),
    ).exactOptional(),
    TimePeriod: DateIntervalSchema.exactOptional(),
  })
  .openapi({
    description:
      "The amount of Savings Plans eligible usage that's covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.",
    required: [],
  })
  .openapi('SavingsPlansCoverage')

const SavingsPlansCoveragesSchema = z
  .array(SavingsPlansCoverageSchema)
  .openapi('SavingsPlansCoverages')

const GetSavingsPlansCoverageResponseSchema = z
  .object({
    SavingsPlansCoverages: SavingsPlansCoveragesSchema.and(
      z.any().openapi({ description: 'The amount of spend that your Savings Plans covered.' }),
    ),
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SavingsPlansCoverages'] })
  .openapi('GetSavingsPlansCoverageResponse')

const GetSavingsPlansCoverageRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.",
        }),
    ),
    GroupBy: GroupDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can group the data using the attributes <code>INSTANCE_FAMILY</code>, <code>REGION</code>, or <code>SERVICE</code>.',
        }),
    ).exactOptional(),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The granularity of the Amazon Web Services cost data for your Savings Plans. <code>Granularity</code> can't be set if <code>GroupBy</code> is set.</p> <p>The <code>GetSavingsPlansCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
        }),
    ).exactOptional(),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p> <code>GetSavingsPlansCoverage</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension. If there are multiple values for a dimension, they are OR\'d together.</p> <p>Cost category is also supported.</p>',
        }),
    ).exactOptional(),
    Metrics: MetricNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The measurement that you want your Savings Plans coverage reported in. The only valid value is <code>SpendCoveredBySavingsPlans</code>.',
        }),
    ).exactOptional(),
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.',
        }),
    ).exactOptional(),
    SortBy: SortDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>SpendCoveredBySavingsPlan</code> </p> </li> <li> <p> <code>OnDemandCost</code> </p> </li> <li> <p> <code>CoveragePercentage</code> </p> </li> <li> <p> <code>TotalCost</code> </p> </li> <li> <p> <code>InstanceFamily</code> </p> </li> <li> <p> <code>Region</code> </p> </li> <li> <p> <code>Service</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod'], title: 'GetSavingsPlansCoverageRequest' })
  .openapi('GetSavingsPlansCoverageRequest')

const SavingsPlansPurchaseRecommendationMetadataSchema = z
  .object({
    RecommendationId: GenericStringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the recommendation set.' }),
    ).exactOptional(),
    GenerationTimestamp: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that shows when the recommendations were generated.',
        }),
    ).exactOptional(),
    AdditionalMetadata: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional metadata that might be applicable to the recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Metadata about your Savings Plans Purchase Recommendations.',
    required: [],
  })
  .openapi('SavingsPlansPurchaseRecommendationMetadata')

const SupportedSavingsPlansTypeSchema = z
  .enum(['COMPUTE_SP', 'EC2_INSTANCE_SP', 'SAGEMAKER_SP'])
  .openapi('SupportedSavingsPlansType')

const SavingsPlansDetailsSchema = z
  .object({
    Region: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of Amazon Web Services resources in a geographic area. Each Amazon Web Services Region is isolated and independent of the other Regions.',
        }),
    ).exactOptional(),
    InstanceFamily: GenericStringSchema.and(
      z.any().openapi({ description: 'A group of instance types that Savings Plans applies to.' }),
    ).exactOptional(),
    OfferingId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: "The unique ID that's used to distinguish Savings Plans from one another.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The attribute details on a specific Savings Plan.', required: [] })
  .openapi('SavingsPlansDetails')

const SavingsPlansPurchaseRecommendationDetailSchema = z
  .object({
    SavingsPlansDetails: SavingsPlansDetailsSchema.and(
      z.any().openapi({ description: 'Details for your recommended Savings Plans.' }),
    ).exactOptional(),
    AccountId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>AccountID</code> the recommendation is generated for.',
        }),
    ).exactOptional(),
    UpfrontCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upfront cost of the recommended Savings Plans, based on the selected payment option.',
        }),
    ).exactOptional(),
    EstimatedROI: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated return on investment that's based on the recommended Savings Plans that you purchased. This is calculated as <code>estimatedSavingsAmount</code>/ <code>estimatedSPCost</code>*100.",
        }),
    ).exactOptional(),
    CurrencyCode: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The currency code that Amazon Web Services used to generate the recommendations and present potential savings.',
        }),
    ).exactOptional(),
    EstimatedSPCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cost of the recommended Savings Plans over the length of the lookback period.',
        }),
    ).exactOptional(),
    EstimatedOnDemandCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The remaining On-Demand cost estimated to not be covered by the recommended Savings Plans, over the length of the lookback period.',
        }),
    ).exactOptional(),
    EstimatedOnDemandCostWithCurrentCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The estimated On-Demand costs you expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own. ',
        }),
    ).exactOptional(),
    EstimatedSavingsAmount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated savings amount that's based on the recommended Savings Plans over the length of the lookback period.",
        }),
    ).exactOptional(),
    EstimatedSavingsPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated savings percentage relative to the total cost of applicable On-Demand usage over the lookback period.',
        }),
    ).exactOptional(),
    HourlyCommitmentToPurchase: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The recommended hourly commitment level for the Savings Plans type and the configuration that's based on the usage during the lookback period.",
        }),
    ).exactOptional(),
    EstimatedAverageUtilization: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The estimated utilization of the recommended Savings Plans.' }),
    ).exactOptional(),
    EstimatedMonthlySavingsAmount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated monthly savings amount based on the recommended Savings Plans.',
        }),
    ).exactOptional(),
    CurrentMinimumHourlyOnDemandSpend: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The lowest value of hourly On-Demand spend over the lookback period of the applicable usage type.',
        }),
    ).exactOptional(),
    CurrentMaximumHourlyOnDemandSpend: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The highest value of hourly On-Demand spend over the lookback period of the applicable usage type.',
        }),
    ).exactOptional(),
    CurrentAverageHourlyOnDemandSpend: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average value of hourly On-Demand spend over the lookback period of the applicable usage type.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details for your recommended Savings Plans.', required: [] })
  .openapi('SavingsPlansPurchaseRecommendationDetail')

const SavingsPlansPurchaseRecommendationDetailListSchema = z
  .array(SavingsPlansPurchaseRecommendationDetailSchema)
  .openapi('SavingsPlansPurchaseRecommendationDetailList')

const SavingsPlansPurchaseRecommendationSummarySchema = z
  .object({
    EstimatedROI: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated return on investment that's based on the recommended Savings Plans and estimated savings.",
        }),
    ).exactOptional(),
    CurrencyCode: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The currency code that Amazon Web Services used to generate the recommendations and present potential savings.',
        }),
    ).exactOptional(),
    EstimatedTotalCost: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated total cost of the usage after purchasing the recommended Savings Plans. This is a sum of the cost of Savings Plans during this term, and the remaining On-Demand usage.',
        }),
    ).exactOptional(),
    CurrentOnDemandSpend: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current total on demand spend of the applicable usage types over the lookback period.',
        }),
    ).exactOptional(),
    EstimatedSavingsAmount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated total savings over the lookback period, based on the purchase of the recommended Savings Plans.',
        }),
    ).exactOptional(),
    TotalRecommendationCount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregate number of Savings Plans recommendations that exist for your account.',
        }),
    ).exactOptional(),
    DailyCommitmentToPurchase: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The recommended Savings Plans cost on a daily (24 hourly) basis.',
        }),
    ).exactOptional(),
    HourlyCommitmentToPurchase: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The recommended hourly commitment that's based on the recommendation parameters.",
        }),
    ).exactOptional(),
    EstimatedSavingsPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated savings relative to the total cost of On-Demand usage, over the lookback period. This is calculated as <code>estimatedSavingsAmount</code>/ <code>CurrentOnDemandSpend</code>*100.',
        }),
    ).exactOptional(),
    EstimatedMonthlySavingsAmount: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated monthly savings amount that's based on the recommended Savings Plans purchase.",
        }),
    ).exactOptional(),
    EstimatedOnDemandCostWithCurrentCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated On-Demand costs you expect with no additional commitment. It's based on your usage of the selected time period and the Savings Plans you own. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary metrics for your Savings Plans Purchase Recommendations.',
    required: [],
  })
  .openapi('SavingsPlansPurchaseRecommendationSummary')

const SavingsPlansPurchaseRecommendationSchema = z
  .object({
    AccountScope: AccountScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account scope that you want your recommendations for. Amazon Web Services calculates recommendations that include the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.',
        }),
    ).exactOptional(),
    SavingsPlansType: SupportedSavingsPlansTypeSchema.and(
      z.any().openapi({ description: 'The requested Savings Plans recommendation type.' }),
    ).exactOptional(),
    TermInYears: TermInYearsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Savings Plans recommendation term in years. It's used to generate the recommendation.",
        }),
    ).exactOptional(),
    PaymentOption: PaymentOptionSchema.and(
      z
        .any()
        .openapi({ description: "The payment option that's used to generate the recommendation." }),
    ).exactOptional(),
    LookbackPeriodInDays: LookbackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description: "The lookback period in days that's used to generate the recommendation.",
        }),
    ).exactOptional(),
    SavingsPlansPurchaseRecommendationDetails:
      SavingsPlansPurchaseRecommendationDetailListSchema.and(
        z
          .any()
          .openapi({
            description:
              'Details for the Savings Plans that we recommend that you purchase to cover existing Savings Plans eligible workloads.',
          }),
      ).exactOptional(),
    SavingsPlansPurchaseRecommendationSummary: SavingsPlansPurchaseRecommendationSummarySchema.and(
      z.any().openapi({ description: 'Summary metrics for your Savings Plans Recommendations. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains your request parameters, Savings Plan Recommendations Summary, and Details.',
    required: [],
  })
  .openapi('SavingsPlansPurchaseRecommendation')

const GetSavingsPlansPurchaseRecommendationResponseSchema = z
  .object({
    Metadata: SavingsPlansPurchaseRecommendationMetadataSchema.and(
      z
        .any()
        .openapi({ description: 'Information that regards this specific recommendation set.' }),
    ).exactOptional(),
    SavingsPlansPurchaseRecommendation: SavingsPlansPurchaseRecommendationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains your request parameters, Savings Plan Recommendations Summary, and Details.',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSavingsPlansPurchaseRecommendationResponse')

const GetSavingsPlansPurchaseRecommendationRequestSchema = z
  .object({
    SavingsPlansType: SupportedSavingsPlansTypeSchema.and(
      z.any().openapi({ description: "The Savings Plans recommendation type that's requested." }),
    ),
    TermInYears: TermInYearsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The savings plan recommendation term that's used to generate these recommendations.",
        }),
    ),
    PaymentOption: PaymentOptionSchema.and(
      z
        .any()
        .openapi({
          description: "The payment option that's used to generate these recommendations.",
        }),
    ),
    AccountScope: AccountScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    PageSize: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of recommendations that you want returned in a single response object.',
        }),
    ).exactOptional(),
    LookbackPeriodInDays: LookbackPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description: "The lookback period that's used to generate the recommendation.",
        }),
    ),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>You can filter your recommendations by Account ID with the <code>LINKED_ACCOUNT</code> dimension. To filter your recommendations by Account ID, specify <code>Key</code> as <code>LINKED_ACCOUNT</code> and <code>Value</code> as the comma-separated Acount ID(s) that you want to see Savings Plans purchase recommendations for.</p> <p>For GetSavingsPlansPurchaseRecommendation, the <code>Filter</code> doesn't include <code>CostCategories</code> or <code>Tags</code>. It only includes <code>Dimensions</code>. With <code>Dimensions</code>, <code>Key</code> must be <code>LINKED_ACCOUNT</code> and <code>Value</code> can be a single Account ID or multiple comma-separated Account IDs that you want to see Savings Plans Purchase Recommendations for. <code>AND</code> and <code>OR</code> operators are not supported.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SavingsPlansType', 'TermInYears', 'PaymentOption', 'LookbackPeriodInDays'],
    title: 'GetSavingsPlansPurchaseRecommendationRequest',
  })
  .openapi('GetSavingsPlansPurchaseRecommendationRequest')

const SavingsPlansUtilizationSchema = z
  .object({
    TotalCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total amount of Savings Plans commitment that's been purchased in an account (or set of accounts).",
        }),
    ).exactOptional(),
    UsedCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of your Savings Plans commitment that was consumed from Savings Plans eligible usage in a specific period.',
        }),
    ).exactOptional(),
    UnusedCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of your Savings Plans commitment that wasn't consumed from Savings Plans eligible usage in a specific period.",
        }),
    ).exactOptional(),
    UtilizationPercentage: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of <code>UsedCommitment</code> divided by the <code>TotalCommitment</code> for your Savings Plans.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "The measurement of how well you're using your existing Savings Plans.",
    required: [],
  })
  .openapi('SavingsPlansUtilization')

const SavingsPlansSavingsSchema = z
  .object({
    NetSavings: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The savings amount that you're accumulating for the usage that's covered by a Savings Plans, when compared to the On-Demand equivalent of the same usage.",
        }),
    ).exactOptional(),
    OnDemandCostEquivalent: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How much the amount that the usage would have cost if it was accrued at the On-Demand rate.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The amount of savings that you're accumulating, against the public On-Demand rate of the usage accrued in an account.",
    required: [],
  })
  .openapi('SavingsPlansSavings')

const SavingsPlansAmortizedCommitmentSchema = z
  .object({
    AmortizedRecurringCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amortized amount of your Savings Plans commitment that was purchased with either a <code>Partial</code> or a <code>NoUpfront</code>.',
        }),
    ).exactOptional(),
    AmortizedUpfrontCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amortized amount of your Savings Plans commitment that was purchased with an <code>Upfront</code> or <code>PartialUpfront</code> Savings Plans.',
        }),
    ).exactOptional(),
    TotalAmortizedCommitment: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amortized amount of your Savings Plans commitment, regardless of your Savings Plans purchase method. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The amortized amount of Savings Plans purchased in a specific account during a specific time interval.',
    required: [],
  })
  .openapi('SavingsPlansAmortizedCommitment')

const SavingsPlansUtilizationByTimeSchema = z
  .object({
    TimePeriod: DateIntervalSchema,
    Utilization: SavingsPlansUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.',
        }),
    ),
    Savings: SavingsPlansSavingsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount that's saved by using existing Savings Plans. Savings returns both net savings from Savings Plans and also the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.",
        }),
    ).exactOptional(),
    AmortizedCommitment: SavingsPlansAmortizedCommitmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TimePeriod', 'Utilization'],
    description: 'The amount of Savings Plans utilization (in hours).',
  })
  .openapi('SavingsPlansUtilizationByTime')

const SavingsPlansUtilizationsByTimeSchema = z
  .array(SavingsPlansUtilizationByTimeSchema)
  .openapi('SavingsPlansUtilizationsByTime')

const SavingsPlansUtilizationAggregatesSchema = z
  .object({
    Utilization: SavingsPlansUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.',
        }),
    ),
    Savings: SavingsPlansSavingsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount that's saved by using existing Savings Plans. Savings returns both net savings from Savings Plans and also the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.",
        }),
    ).exactOptional(),
    AmortizedCommitment: SavingsPlansAmortizedCommitmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Utilization'],
    description: 'The aggregated utilization metrics for your Savings Plans usage.',
  })
  .openapi('SavingsPlansUtilizationAggregates')

const GetSavingsPlansUtilizationResponseSchema = z
  .object({
    SavingsPlansUtilizationsByTime: SavingsPlansUtilizationsByTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of cost/commitment that you used your Savings Plans. You can use it to specify date ranges.',
        }),
    ).exactOptional(),
    Total: SavingsPlansUtilizationAggregatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amount of cost/commitment that you used your Savings Plans, regardless of date ranges.',
        }),
    ),
  })
  .openapi({ required: ['Total'] })
  .openapi('GetSavingsPlansUtilizationResponse')

const GetSavingsPlansUtilizationRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.",
        }),
    ),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The granularity of the Amazon Web Services utillization data for your Savings Plans.</p> <p>The <code>GetSavingsPlansUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>',
        }),
    ).exactOptional(),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> <li> <p> <code>SAVINGS_PLANS_TYPE</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>PAYMENT_OPTION</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> </ul> <p> <code>GetSavingsPlansUtilization</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension.</p>',
        }),
    ).exactOptional(),
    SortBy: SortDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>UtilizationPercentage</code> </p> </li> <li> <p> <code>TotalCommitment</code> </p> </li> <li> <p> <code>UsedCommitment</code> </p> </li> <li> <p> <code>UnusedCommitment</code> </p> </li> <li> <p> <code>NetSavings</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod'], title: 'GetSavingsPlansUtilizationRequest' })
  .openapi('GetSavingsPlansUtilizationRequest')

const SavingsPlanArnSchema = z.string().openapi('SavingsPlanArn')

const SavingsPlansUtilizationDetailSchema = z
  .object({
    SavingsPlanArn: SavingsPlanArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique Amazon Resource Name (ARN) for a particular Savings Plan.',
        }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description: 'The attribute that applies to a specific <code>Dimension</code>.',
        }),
    ).exactOptional(),
    Utilization: SavingsPlansUtilizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.',
        }),
    ).exactOptional(),
    Savings: SavingsPlansSavingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount saved by using existing Savings Plans. Savings returns both net savings from savings plans and also the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.',
        }),
    ).exactOptional(),
    AmortizedCommitment: SavingsPlansAmortizedCommitmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amortized commitment for a Savings Plans. Includes the sum of the upfront and recurring Savings Plans fees.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A single daily or monthly Savings Plans utilization rate and details for your account. A management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values. ',
    required: [],
  })
  .openapi('SavingsPlansUtilizationDetail')

const SavingsPlansUtilizationDetailsSchema = z
  .array(SavingsPlansUtilizationDetailSchema)
  .openapi('SavingsPlansUtilizationDetails')

const GetSavingsPlansUtilizationDetailsResponseSchema = z
  .object({
    SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves a single daily or monthly Savings Plans utilization rate and details for your account.',
        }),
    ),
    Total: SavingsPlansUtilizationAggregatesSchema.and(
      z
        .any()
        .openapi({
          description: 'The total Savings Plans utilization, regardless of time period.',
        }),
    ).exactOptional(),
    TimePeriod: DateIntervalSchema,
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SavingsPlansUtilizationDetails', 'TimePeriod'] })
  .openapi('GetSavingsPlansUtilizationDetailsResponse')

const SavingsPlansDataTypeSchema = z
  .enum(['ATTRIBUTES', 'UTILIZATION', 'AMORTIZED_COMMITMENT', 'SAVINGS'])
  .openapi('SavingsPlansDataType')

const SavingsPlansDataTypesSchema = z
  .array(SavingsPlansDataTypeSchema)
  .openapi('SavingsPlansDataTypes')

const GetSavingsPlansUtilizationDetailsRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.",
        }),
    ),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>PAYMENT_OPTION</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> </ul> <p> <code>GetSavingsPlansUtilizationDetails</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension.</p>',
        }),
    ).exactOptional(),
    DataType: SavingsPlansDataTypesSchema.and(
      z.any().openapi({ description: 'The data type.' }),
    ).exactOptional(),
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.',
        }),
    ).exactOptional(),
    SortBy: SortDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>UtilizationPercentage</code> </p> </li> <li> <p> <code>TotalCommitment</code> </p> </li> <li> <p> <code>UsedCommitment</code> </p> </li> <li> <p> <code>UnusedCommitment</code> </p> </li> <li> <p> <code>NetSavings</code> </p> </li> <li> <p> <code>AmortizedRecurringCommitment</code> </p> </li> <li> <p> <code>AmortizedUpfrontCommitment</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod'], title: 'GetSavingsPlansUtilizationDetailsRequest' })
  .openapi('GetSavingsPlansUtilizationDetailsRequest')

const EntitySchema = z.string().openapi('Entity')

const TagListSchema = z.array(EntitySchema).openapi('TagList')

const GetTagsResponseSchema = z
  .object({
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(z.any().openapi({ description: 'The tags that match your request.' })),
    ReturnSize: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of query results that Amazon Web Services returns at a time.',
        }),
    ),
    TotalSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The total number of query results.' }),
    ),
  })
  .openapi({ required: ['Tags', 'ReturnSize', 'TotalSize'] })
  .openapi('GetTagsResponse')

const GetTagsRequestSchema = z
  .object({
    SearchString: SearchStringSchema.and(
      z.any().openapi({ description: 'The value that you want to search for.' }),
    ).exactOptional(),
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.',
        }),
    ),
    TagKey: TagKeySchema.and(
      z.any().openapi({ description: 'The key of the tag that you want to return values for.' }),
    ).exactOptional(),
    Filter: ExpressionSchema.exactOptional(),
    SortBy: SortDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value that you want to sort the data by.</p> <p>The key represents cost and usage metrics. The following values are supported:</p> <ul> <li> <p> <code>BlendedCost</code> </p> </li> <li> <p> <code>UnblendedCost</code> </p> </li> <li> <p> <code>AmortizedCost</code> </p> </li> <li> <p> <code>NetAmortizedCost</code> </p> </li> <li> <p> <code>NetUnblendedCost</code> </p> </li> <li> <p> <code>UsageQuantity</code> </p> </li> <li> <p> <code>NormalizedUsageAmount</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p> <p>When you use <code>SortBy</code>, <code>NextPageToken</code> and <code>SearchString</code> aren't supported.</p>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter.</p> <p>For <code>GetTags</code>, MaxResults has an upper quota of 1000.</p>",
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod'], title: 'GetTagsRequest' })
  .openapi('GetTagsRequest')

const GetUsageForecastResponseSchema = z
  .object({
    Total: MetricValueSchema.and(
      z
        .any()
        .openapi({ description: "How much you're forecasted to use over the forecast period." }),
    ).exactOptional(),
    ForecastResultsByTime: ForecastResultsByTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list of days. For <code>MONTHLY</code> forecasts, this is a list of months.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUsageForecastResponse')

const GetUsageForecastRequestSchema = z
  .object({
    TimePeriod: DateIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The start and end dates of the period that you want to retrieve usage forecast for. The start date is included in the period, but the end date isn't included in the period. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. The start date must be equal to or later than the current date to avoid a validation error.",
        }),
    ),
    Metric: MetricSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Which metric Cost Explorer uses to create your forecast.</p> <p>Valid values for a <code>GetUsageForecast</code> call are the following:</p> <ul> <li> <p>USAGE_QUANTITY</p> </li> <li> <p>NORMALIZED_USAGE_AMOUNT</p> </li> </ul>',
        }),
    ),
    Granularity: GranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p> <p>The <code>GetUsageForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>',
        }),
    ),
    Filter: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filters that you want to use to filter your forecast. The <code>GetUsageForecast</code> API supports filtering by the following dimensions:</p> <ul> <li> <p> <code>AZ</code> </p> </li> <li> <p> <code>INSTANCE_TYPE</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT_NAME</code> </p> </li> <li> <p> <code>OPERATION</code> </p> </li> <li> <p> <code>PURCHASE_TYPE</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>USAGE_TYPE</code> </p> </li> <li> <p> <code>USAGE_TYPE_GROUP</code> </p> </li> <li> <p> <code>RECORD_TYPE</code> </p> </li> <li> <p> <code>OPERATING_SYSTEM</code> </p> </li> <li> <p> <code>TENANCY</code> </p> </li> <li> <p> <code>SCOPE</code> </p> </li> <li> <p> <code>PLATFORM</code> </p> </li> <li> <p> <code>SUBSCRIPTION_ID</code> </p> </li> <li> <p> <code>LEGAL_ENTITY_NAME</code> </p> </li> <li> <p> <code>DEPLOYMENT_OPTION</code> </p> </li> <li> <p> <code>DATABASE_ENGINE</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> <li> <p> <code>BILLING_ENTITY</code> </p> </li> <li> <p> <code>RESERVATION_ID</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    PredictionIntervalLevel: PredictionIntervalLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Web Services Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimePeriod', 'Metric', 'Granularity'], title: 'GetUsageForecastRequest' })
  .openapi('GetUsageForecastRequest')

const UnresolvableUsageUnitExceptionSchema = z.any().openapi('UnresolvableUsageUnitException')

const CostAllocationTagTypeSchema = z
  .enum(['AWSGenerated', 'UserDefined'])
  .openapi('CostAllocationTagType')

const CostAllocationTagStatusSchema = z
  .enum(['Active', 'Inactive'])
  .openapi('CostAllocationTagStatus')

const CostAllocationTagSchema = z
  .object({
    TagKey: TagKeySchema.and(
      z.any().openapi({ description: 'The key for the cost allocation tag. ' }),
    ),
    Type: CostAllocationTagTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of cost allocation tag. You can use <code>AWSGenerated</code> or <code>UserDefined</code> type tags. <code>AWSGenerated</code> type tags are tags that Amazon Web Services defines and applies to support Amazon Web Services resources for cost allocation purposes. <code>UserDefined</code> type tags are tags that you define, create, and apply to resources. ',
        }),
    ),
    Status: CostAllocationTagStatusSchema.and(
      z.any().openapi({ description: 'The status of a cost allocation tag. ' }),
    ),
  })
  .openapi({
    required: ['TagKey', 'Type', 'Status'],
    description:
      'The cost allocation tag structure. This includes detailed metadata for the <code>CostAllocationTag</code> object. ',
  })
  .openapi('CostAllocationTag')

const CostAllocationTagListSchema = z
  .array(CostAllocationTagSchema)
  .min(0)
  .max(100)
  .openapi('CostAllocationTagList')

const ListCostAllocationTagsResponseSchema = z
  .object({
    CostAllocationTags: CostAllocationTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cost allocation tags that includes the detailed metadata for each one. ',
        }),
    ).exactOptional(),
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCostAllocationTagsResponse')

const CostAllocationTagKeyListSchema = z
  .array(TagKeySchema)
  .min(1)
  .max(100)
  .openapi('CostAllocationTagKeyList')

const CostAllocationTagsMaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('CostAllocationTagsMaxResults')

const ListCostAllocationTagsRequestSchema = z
  .object({
    Status: CostAllocationTagStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of cost allocation tag keys that are returned for this request. ',
        }),
    ).exactOptional(),
    TagKeys: CostAllocationTagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of cost allocation tag keys that are returned for this request. ',
        }),
    ).exactOptional(),
    Type: CostAllocationTagTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of <code>CostAllocationTag</code> object that are returned for this request. The <code>AWSGenerated</code> type tags are tags that Amazon Web Services defines and applies to support Amazon Web Services resources for cost allocation purposes. The <code>UserDefined</code> type tags are tags that you define, create, and apply to resources. ',
        }),
    ).exactOptional(),
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
    MaxResults: CostAllocationTagsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that are returned for this request. By default, the request returns 100 results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCostAllocationTagsRequest', required: [] })
  .openapi('ListCostAllocationTagsRequest')

const CostCategoryReferenceSchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique identifier for your Cost Category. ' }),
    ).exactOptional(),
    Name: CostCategoryNameSchema.exactOptional(),
    EffectiveStart: ZonedDateTimeSchema.and(
      z.any().openapi({ description: "The Cost Category's effective start date." }),
    ).exactOptional(),
    EffectiveEnd: ZonedDateTimeSchema.and(
      z.any().openapi({ description: "The Cost Category's effective end date." }),
    ).exactOptional(),
    NumberOfRules: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of rules that are associated with a specific Cost Category. ',
        }),
    ).exactOptional(),
    ProcessingStatus: CostCategoryProcessingStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of processing statuses for Cost Management products for a specific cost category. ',
        }),
    ).exactOptional(),
    Values: CostCategoryValuesListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of unique cost category values in a specific cost category. ',
        }),
    ).exactOptional(),
    DefaultValue: CostCategoryValueSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p>',
    required: [],
  })
  .openapi('CostCategoryReference')

const CostCategoryReferencesListSchema = z
  .array(CostCategoryReferenceSchema)
  .openapi('CostCategoryReferencesList')

const ListCostCategoryDefinitionsResponseSchema = z
  .object({
    CostCategoryReferences: CostCategoryReferencesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to a Cost Category that contains enough information to identify the Cost Category. ',
        }),
    ).exactOptional(),
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCostCategoryDefinitionsResponse')

const CostCategoryMaxResultsSchema = z.int().min(1).max(100).openapi('CostCategoryMaxResults')

const ListCostCategoryDefinitionsRequestSchema = z
  .object({
    EffectiveOn: ZonedDateTimeSchema.and(
      z.any().openapi({ description: 'The date when the Cost Category was effective. ' }),
    ).exactOptional(),
    NextToken: NextPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ',
        }),
    ).exactOptional(),
    MaxResults: CostCategoryMaxResultsSchema.and(
      z.any().openapi({ description: 'The number of entries a paginated response contains. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCostCategoryDefinitionsRequest', required: [] })
  .openapi('ListCostCategoryDefinitionsRequest')

const RecommendationIdSchema = z
  .string()
  .regex(/^[\S\s]{8}-[\S\s]{4}-[\S\s]{4}-[\S\s]{4}-[\S\s]{12}$/)
  .length(36)
  .openapi('RecommendationId')

const GenerationStatusSchema = z
  .enum(['SUCCEEDED', 'PROCESSING', 'FAILED'])
  .openapi('GenerationStatus')

const GenerationSummarySchema = z
  .object({
    RecommendationId: RecommendationIdSchema.and(
      z.any().openapi({ description: 'Indicates the ID for this specific recommendation.' }),
    ).exactOptional(),
    GenerationStatus: GenerationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the recommendation generation succeeded, is processing, or failed.',
        }),
    ).exactOptional(),
    GenerationStartedTime: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates the start time of the recommendation generation.' }),
    ).exactOptional(),
    GenerationCompletionTime: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the completion time of the recommendation generation.',
        }),
    ).exactOptional(),
    EstimatedCompletionTime: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the estimated time for when the recommendation generation will complete.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The summary of the Savings Plans recommendation generation.',
    required: [],
  })
  .openapi('GenerationSummary')

const GenerationSummaryListSchema = z
  .array(GenerationSummarySchema)
  .openapi('GenerationSummaryList')

const ListSavingsPlansPurchaseRecommendationGenerationResponseSchema = z
  .object({
    GenerationSummaryList: GenerationSummaryListSchema.and(
      z.any().openapi({ description: 'The list of historical recommendation generations.' }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z.any().openapi({ description: 'The token to retrieve the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSavingsPlansPurchaseRecommendationGenerationResponse')

const RecommendationIdListSchema = z.array(RecommendationIdSchema).openapi('RecommendationIdList')

const ListSavingsPlansPurchaseRecommendationGenerationRequestSchema = z
  .object({
    GenerationStatus: GenerationStatusSchema.and(
      z.any().openapi({ description: 'The status of the recommendation generation.' }),
    ).exactOptional(),
    RecommendationIds: RecommendationIdListSchema.and(
      z.any().openapi({ description: 'The IDs for each specific recommendation.' }),
    ).exactOptional(),
    PageSize: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of recommendations that you want returned in a single response object.',
        }),
    ).exactOptional(),
    NextPageToken: NextPageTokenSchema.and(
      z.any().openapi({ description: 'The token to retrieve the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSavingsPlansPurchaseRecommendationGenerationRequest', required: [] })
  .openapi('ListSavingsPlansPurchaseRecommendationGenerationRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    ResourceTags: ResourceTagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag key value pairs that are associated with the resource. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ProvideAnomalyFeedbackResponseSchema = z
  .object({
    AnomalyId: GenericStringSchema.and(
      z.any().openapi({ description: 'The ID of the modified cost anomaly. ' }),
    ),
  })
  .openapi({ required: ['AnomalyId'] })
  .openapi('ProvideAnomalyFeedbackResponse')

const ProvideAnomalyFeedbackRequestSchema = z
  .object({
    AnomalyId: GenericStringSchema.and(z.any().openapi({ description: 'A cost anomaly ID. ' })),
    Feedback: AnomalyFeedbackTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether the cost anomaly was a planned activity or you considered it an anomaly. ',
        }),
    ),
  })
  .openapi({ required: ['AnomalyId', 'Feedback'], title: 'ProvideAnomalyFeedbackRequest' })
  .openapi('ProvideAnomalyFeedbackRequest')

const StartSavingsPlansPurchaseRecommendationGenerationResponseSchema = z
  .object({
    RecommendationId: RecommendationIdSchema.and(
      z.any().openapi({ description: 'The ID for this specific recommendation.' }),
    ).exactOptional(),
    GenerationStartedTime: ZonedDateTimeSchema.and(
      z.any().openapi({ description: 'The start time of the recommendation generation.' }),
    ).exactOptional(),
    EstimatedCompletionTime: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The estimated time for when the recommendation generation will complete.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSavingsPlansPurchaseRecommendationGenerationResponse')

const StartSavingsPlansPurchaseRecommendationGenerationRequestSchema = z
  .object({})
  .openapi({ title: 'StartSavingsPlansPurchaseRecommendationGenerationRequest' })
  .openapi('StartSavingsPlansPurchaseRecommendationGenerationRequest')

const GenerationExistsExceptionSchema = z.any().openapi('GenerationExistsException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>. ',
        }),
    ),
    ResourceTags: ResourceTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A list of tag key-value pairs to be added to the resource.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'ResourceTags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const ResourceTagKeyListSchema = z
  .array(ResourceTagKeySchema)
  .min(0)
  .max(200)
  .openapi('ResourceTagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>. ',
        }),
    ),
    ResourceTagKeys: ResourceTagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tag keys associated with tags that need to be removed from the resource. If you specify a tag key that doesn't exist, it's ignored. Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use. ",
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'ResourceTagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAnomalyMonitorResponseSchema = z
  .object({
    MonitorArn: GenericStringSchema.and(
      z.any().openapi({ description: 'A cost anomaly monitor ARN. ' }),
    ),
  })
  .openapi({ required: ['MonitorArn'] })
  .openapi('UpdateAnomalyMonitorResponse')

const UpdateAnomalyMonitorRequestSchema = z
  .object({
    MonitorArn: GenericStringSchema.and(
      z.any().openapi({ description: 'Cost anomaly monitor Amazon Resource Names (ARNs). ' }),
    ),
    MonitorName: GenericStringSchema.and(
      z.any().openapi({ description: 'The new name for the cost anomaly monitor. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MonitorArn'], title: 'UpdateAnomalyMonitorRequest' })
  .openapi('UpdateAnomalyMonitorRequest')

const UpdateAnomalySubscriptionResponseSchema = z
  .object({
    SubscriptionArn: GenericStringSchema.and(
      z.any().openapi({ description: 'A cost anomaly subscription ARN. ' }),
    ),
  })
  .openapi({ required: ['SubscriptionArn'] })
  .openapi('UpdateAnomalySubscriptionResponse')

const UpdateAnomalySubscriptionRequestSchema = z
  .object({
    SubscriptionArn: GenericStringSchema.and(
      z.any().openapi({ description: 'A cost anomaly subscription Amazon Resource Name (ARN). ' }),
    ),
    Threshold: NullableNonNegativeDoubleSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>(deprecated)</p> <p>The update to the threshold value for receiving notifications. </p> <p>This field has been deprecated. To update a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.</p>Threshold has been deprecated in favor of ThresholdExpression',
        }),
    ).exactOptional(),
    Frequency: AnomalySubscriptionFrequencySchema.and(
      z
        .any()
        .openapi({
          description: 'The update to the frequency value that subscribers receive notifications. ',
        }),
    ).exactOptional(),
    MonitorArnList: MonitorArnListSchema.and(
      z.any().openapi({ description: 'A list of cost anomaly monitor ARNs. ' }),
    ).exactOptional(),
    Subscribers: SubscribersSchema.and(
      z.any().openapi({ description: 'The update to the subscriber list. ' }),
    ).exactOptional(),
    SubscriptionName: GenericStringSchema.and(
      z.any().openapi({ description: 'The new name of the subscription. ' }),
    ).exactOptional(),
    ThresholdExpression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The update to the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code>. The supported nested expression types are <code>AND</code> and <code>OR</code>. The match option <code>GREATER_THAN_OR_EQUAL</code> is required. Values must be numbers between 0 and 10,000,000,000.</p> <p>The following are examples of valid ThresholdExpressions:</p> <ul> <li> <p>Absolute threshold: <code>{ "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }</code> </p> </li> <li> <p>Percentage threshold: <code>{ "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }</code> </p> </li> <li> <p> <code>AND</code> two thresholds together: <code>{ "And": [ { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }, { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } } ] }</code> </p> </li> <li> <p> <code>OR</code> two thresholds together: <code>{ "Or": [ { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }, { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } } ] }</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SubscriptionArn'], title: 'UpdateAnomalySubscriptionRequest' })
  .openapi('UpdateAnomalySubscriptionRequest')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const UpdateCostAllocationTagsStatusErrorSchema = z
  .object({
    TagKey: TagKeySchema.and(
      z.any().openapi({ description: 'The key for the cost allocation tag. ' }),
    ).exactOptional(),
    Code: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'An error code representing why the action failed on this entry. ',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({ description: 'A message explaining why the action failed on this entry. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Gives a detailed description of the result of an action. It's on each cost allocation tag entry in the request. ",
    required: [],
  })
  .openapi('UpdateCostAllocationTagsStatusError')

const UpdateCostAllocationTagsStatusErrorsSchema = z
  .array(UpdateCostAllocationTagsStatusErrorSchema)
  .min(0)
  .max(20)
  .openapi('UpdateCostAllocationTagsStatusErrors')

const UpdateCostAllocationTagsStatusResponseSchema = z
  .object({
    Errors: UpdateCostAllocationTagsStatusErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of <code>UpdateCostAllocationTagsStatusError</code> objects with error details about each cost allocation tag that can't be updated. If there's no failure, an empty array returns. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCostAllocationTagsStatusResponse')

const CostAllocationTagStatusEntrySchema = z
  .object({
    TagKey: TagKeySchema.and(
      z.any().openapi({ description: 'The key for the cost allocation tag. ' }),
    ),
    Status: CostAllocationTagStatusSchema.and(
      z.any().openapi({ description: 'The status of a cost allocation tag. ' }),
    ),
  })
  .openapi({
    required: ['TagKey', 'Status'],
    description:
      'The cost allocation tag status. The status of a key can either be active or inactive. ',
  })
  .openapi('CostAllocationTagStatusEntry')

const CostAllocationTagStatusListSchema = z
  .array(CostAllocationTagStatusEntrySchema)
  .min(1)
  .max(20)
  .openapi('CostAllocationTagStatusList')

const UpdateCostAllocationTagsStatusRequestSchema = z
  .object({
    CostAllocationTagsStatus: CostAllocationTagStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of <code>CostAllocationTagStatusEntry</code> objects that are used to update cost allocation tags status for this request. ',
        }),
    ),
  })
  .openapi({
    required: ['CostAllocationTagsStatus'],
    title: 'UpdateCostAllocationTagsStatusRequest',
  })
  .openapi('UpdateCostAllocationTagsStatusRequest')

const UpdateCostCategoryDefinitionResponseSchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique identifier for your Cost Category. ' }),
    ).exactOptional(),
    EffectiveStart: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Cost Category's effective start date. It can only be a billing start date (first day of the month).",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCostCategoryDefinitionResponse')

const UpdateCostCategoryDefinitionRequestSchema = z
  .object({
    CostCategoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique identifier for your Cost Category.' }),
    ),
    EffectiveStart: ZonedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.",
        }),
    ).exactOptional(),
    RuleVersion: CostCategoryRuleVersionSchema,
    Rules: CostCategoryRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Expression</code> object used to categorize costs. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule </a>. ',
        }),
    ),
    DefaultValue: CostCategoryValueSchema.exactOptional(),
    SplitChargeRules: CostCategorySplitChargeRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The split charge rules used to allocate your charges between your Cost Category values. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CostCategoryArn', 'RuleVersion', 'Rules'],
    title: 'UpdateCostCategoryDefinitionRequest',
  })
  .openapi('UpdateCostCategoryDefinitionRequest')

const AttributeTypeSchema = z.string().openapi('AttributeType')

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

export const postXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor',
  description:
    'Creates a new cost anomaly detection monitor with the requested type and monitor specification. ',
  operationId: 'CreateAnomalyMonitor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.CreateAnomalyMonitor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.CreateAnomalyMonitor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAnomalyMonitorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAnomalyMonitorResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription',
  description:
    'Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. ',
  operationId: 'CreateAnomalySubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.CreateAnomalySubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.CreateAnomalySubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAnomalySubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAnomalySubscriptionResponseSchema } },
    },
    480: {
      description: 'UnknownMonitorException',
      content: { 'application/json': { schema: UnknownMonitorExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition',
  description: 'Creates a new Cost Category with the requested name and rules.',
  operationId: 'CreateCostCategoryDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.CreateCostCategoryDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSInsightsIndexService.CreateCostCategoryDefinition'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCostCategoryDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCostCategoryDefinitionResponseSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor',
  description: 'Deletes a cost anomaly monitor. ',
  operationId: 'DeleteAnomalyMonitor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.DeleteAnomalyMonitor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.DeleteAnomalyMonitor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAnomalyMonitorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAnomalyMonitorResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'UnknownMonitorException',
      content: { 'application/json': { schema: UnknownMonitorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription',
  description: 'Deletes a cost anomaly subscription. ',
  operationId: 'DeleteAnomalySubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.DeleteAnomalySubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.DeleteAnomalySubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAnomalySubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAnomalySubscriptionResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'UnknownSubscriptionException',
      content: { 'application/json': { schema: UnknownSubscriptionExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition',
  description:
    'Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.',
  operationId: 'DeleteCostCategoryDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.DeleteCostCategoryDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSInsightsIndexService.DeleteCostCategoryDefinition'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCostCategoryDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCostCategoryDefinitionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition',
    description:
      "<p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>",
    operationId: 'DescribeCostCategoryDefinition',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSInsightsIndexService.DescribeCostCategoryDefinition')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSInsightsIndexService.DescribeCostCategoryDefinition'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeCostCategoryDefinitionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeCostCategoryDefinitionResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSInsightsIndexServiceGetAnomaliesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalies',
  description:
    "Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.",
  operationId: 'GetAnomalies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetAnomalies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetAnomalies'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAnomaliesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAnomaliesResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors',
  description:
    'Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). ',
  operationId: 'GetAnomalyMonitors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetAnomalyMonitors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetAnomalyMonitors'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAnomalyMonitorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAnomalyMonitorsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'UnknownMonitorException',
      content: { 'application/json': { schema: UnknownMonitorExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions',
  description:
    'Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). ',
  operationId: 'GetAnomalySubscriptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetAnomalySubscriptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetAnomalySubscriptions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAnomalySubscriptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAnomalySubscriptionsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'UnknownSubscriptionException',
      content: { 'application/json': { schema: UnknownSubscriptionExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage',
  description:
    '<p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>',
  operationId: 'GetCostAndUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetCostAndUsage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetCostAndUsage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCostAndUsageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCostAndUsageResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'BillExpirationException',
      content: { 'application/json': { schema: BillExpirationExceptionSchema } },
    },
    482: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'RequestChangedException',
      content: { 'application/json': { schema: RequestChangedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources',
  description:
    '<p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>',
  operationId: 'GetCostAndUsageWithResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetCostAndUsageWithResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSInsightsIndexService.GetCostAndUsageWithResources'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCostAndUsageWithResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCostAndUsageWithResourcesResponseSchema } },
    },
    480: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'BillExpirationException',
      content: { 'application/json': { schema: BillExpirationExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'RequestChangedException',
      content: { 'application/json': { schema: RequestChangedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetCostCategoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetCostCategories',
  description:
    '<p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>',
  operationId: 'GetCostCategories',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetCostCategories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetCostCategories'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCostCategoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCostCategoriesResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'BillExpirationException',
      content: { 'application/json': { schema: BillExpirationExceptionSchema } },
    },
    482: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'RequestChangedException',
      content: { 'application/json': { schema: RequestChangedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetCostForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetCostForecast',
  description:
    'Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. ',
  operationId: 'GetCostForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetCostForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetCostForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCostForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCostForecastResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetDimensionValuesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues',
  description:
    'Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. ',
  operationId: 'GetDimensionValues',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetDimensionValues')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetDimensionValues'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDimensionValuesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDimensionValuesResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'BillExpirationException',
      content: { 'application/json': { schema: BillExpirationExceptionSchema } },
    },
    482: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'RequestChangedException',
      content: { 'application/json': { schema: RequestChangedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetReservationCoverageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage',
  description:
    "<p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>",
  operationId: 'GetReservationCoverage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetReservationCoverage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetReservationCoverage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetReservationCoverageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetReservationCoverageResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation',
    description:
      '<p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>',
    operationId: 'GetReservationPurchaseRecommendation',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSInsightsIndexService.GetReservationPurchaseRecommendation')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSInsightsIndexService.GetReservationPurchaseRecommendation'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetReservationPurchaseRecommendationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetReservationPurchaseRecommendationResponseSchema },
        },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      481: {
        description: 'DataUnavailableException',
        content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization',
  description:
    'Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. ',
  operationId: 'GetReservationUtilization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetReservationUtilization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetReservationUtilization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetReservationUtilizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetReservationUtilizationResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation',
  description:
    '<p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>',
  operationId: 'GetRightsizingRecommendation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetRightsizingRecommendation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSInsightsIndexService.GetRightsizingRecommendation'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRightsizingRecommendationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRightsizingRecommendationResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage',
  description:
    '<p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>',
  operationId: 'GetSavingsPlansCoverage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetSavingsPlansCoverage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetSavingsPlansCoverage'] },
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
      content: { 'application/json': { schema: GetSavingsPlansCoverageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSavingsPlansCoverageResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation',
    description:
      'Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.',
    operationId: 'GetSavingsPlansPurchaseRecommendation',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetSavingsPlansPurchaseRecommendationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetSavingsPlansPurchaseRecommendationResponseSchema },
        },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization',
  description:
    "<p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>",
  operationId: 'GetSavingsPlansUtilization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetSavingsPlansUtilization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSInsightsIndexService.GetSavingsPlansUtilization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSavingsPlansUtilizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSavingsPlansUtilizationResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails',
    description:
      "<p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>",
    operationId: 'GetSavingsPlansUtilizationDetails',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSInsightsIndexService.GetSavingsPlansUtilizationDetails')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSInsightsIndexService.GetSavingsPlansUtilizationDetails'],
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
        content: { 'application/json': { schema: GetSavingsPlansUtilizationDetailsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetSavingsPlansUtilizationDetailsResponseSchema },
        },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      481: {
        description: 'DataUnavailableException',
        content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSInsightsIndexServiceGetTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetTags',
  description:
    'Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. ',
  operationId: 'GetTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTagsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'BillExpirationException',
      content: { 'application/json': { schema: BillExpirationExceptionSchema } },
    },
    482: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'RequestChangedException',
      content: { 'application/json': { schema: RequestChangedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceGetUsageForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast',
  description:
    'Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. ',
  operationId: 'GetUsageForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.GetUsageForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.GetUsageForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetUsageForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUsageForecastResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'DataUnavailableException',
      content: { 'application/json': { schema: DataUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnresolvableUsageUnitException',
      content: { 'application/json': { schema: UnresolvableUsageUnitExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags',
  description:
    'Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. ',
  operationId: 'ListCostAllocationTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.ListCostAllocationTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.ListCostAllocationTags'] },
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
      content: { 'application/json': { schema: ListCostAllocationTagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCostAllocationTagsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions',
  description:
    'Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.',
  operationId: 'ListCostCategoryDefinitions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.ListCostCategoryDefinitions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSInsightsIndexService.ListCostCategoryDefinitions'],
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
      content: { 'application/json': { schema: ListCostCategoryDefinitionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCostCategoryDefinitionsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration',
    description:
      'Retrieves a list of your historical recommendation generations within the past 30 days.',
    operationId: 'ListSavingsPlansPurchaseRecommendationGeneration',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: ListSavingsPlansPurchaseRecommendationGenerationRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: ListSavingsPlansPurchaseRecommendationGenerationResponseSchema,
          },
        },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSInsightsIndexServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource',
  description:
    'Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). ',
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
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback',
  description: 'Modifies the feedback property of a given cost anomaly. ',
  operationId: 'ProvideAnomalyFeedback',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.ProvideAnomalyFeedback')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.ProvideAnomalyFeedback'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProvideAnomalyFeedbackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ProvideAnomalyFeedbackResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration',
    description:
      '<p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>',
    operationId: 'StartSavingsPlansPurchaseRecommendationGeneration',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: StartSavingsPlansPurchaseRecommendationGenerationRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: StartSavingsPlansPurchaseRecommendationGenerationResponseSchema,
          },
        },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'GenerationExistsException',
        content: { 'application/json': { schema: GenerationExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSInsightsIndexServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.TagResource',
  description:
    '<p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>',
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
        .literal('AWSInsightsIndexService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.UntagResource',
  description:
    "Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. ",
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
        .literal('AWSInsightsIndexService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.UntagResource'] },
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
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor',
  description:
    "Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. ",
  operationId: 'UpdateAnomalyMonitor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.UpdateAnomalyMonitor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.UpdateAnomalyMonitor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAnomalyMonitorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAnomalyMonitorResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'UnknownMonitorException',
      content: { 'application/json': { schema: UnknownMonitorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription',
  description: 'Updates an existing cost anomaly monitor subscription. ',
  operationId: 'UpdateAnomalySubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.UpdateAnomalySubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSInsightsIndexService.UpdateAnomalySubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAnomalySubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAnomalySubscriptionResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'UnknownMonitorException',
      content: { 'application/json': { schema: UnknownMonitorExceptionSchema } },
    },
    482: {
      description: 'UnknownSubscriptionException',
      content: { 'application/json': { schema: UnknownSubscriptionExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus',
    description:
      "Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). ",
    operationId: 'UpdateCostAllocationTagsStatus',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSInsightsIndexService.UpdateCostAllocationTagsStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSInsightsIndexService.UpdateCostAllocationTagsStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateCostAllocationTagsStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateCostAllocationTagsStatusResponseSchema } },
      },
      480: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition',
  description:
    'Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.',
  operationId: 'UpdateCostCategoryDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSInsightsIndexService.UpdateCostCategoryDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSInsightsIndexService.UpdateCostCategoryDefinition'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCostCategoryDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCostCategoryDefinitionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
