import { createRoute, z } from '@hono/zod-openapi'

const DataSetRequestIdSchema = z.string().openapi('DataSetRequestId')

const GenerateDataSetResultSchema = z
  .object({
    dataSetRequestId: DataSetRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier representing a specific request to the GenerateDataSet operation. This identifier can be used to correlate a request with notifications from the SNS topic.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Container for the result of the GenerateDataSet operation.',
    required: [],
  })
  .openapi('GenerateDataSetResult')

const DataSetTypeSchema = z
  .enum([
    'customer_subscriber_hourly_monthly_subscriptions',
    'customer_subscriber_annual_subscriptions',
    'daily_business_usage_by_instance_type',
    'daily_business_fees',
    'daily_business_free_trial_conversions',
    'daily_business_new_instances',
    'daily_business_new_product_subscribers',
    'daily_business_canceled_product_subscribers',
    'monthly_revenue_billing_and_revenue_data',
    'monthly_revenue_annual_subscriptions',
    'monthly_revenue_field_demonstration_usage',
    'monthly_revenue_flexible_payment_schedule',
    'disbursed_amount_by_product',
    'disbursed_amount_by_product_with_uncollected_funds',
    'disbursed_amount_by_instance_hours',
    'disbursed_amount_by_customer_geo',
    'disbursed_amount_by_age_of_uncollected_funds',
    'disbursed_amount_by_age_of_disbursed_funds',
    'disbursed_amount_by_age_of_past_due_funds',
    'disbursed_amount_by_uncollected_funds_breakdown',
    'customer_profile_by_industry',
    'customer_profile_by_revenue',
    'customer_profile_by_geography',
    'sales_compensation_billed_revenue',
    'us_sales_and_use_tax_records',
  ])
  .openapi('DataSetType')

const DataSetPublicationDateSchema = z.iso
  .datetime({ offset: true })
  .openapi('DataSetPublicationDate')

const RoleNameArnSchema = z.string().min(1).openapi('RoleNameArn')

const DestinationS3BucketNameSchema = z.string().min(1).openapi('DestinationS3BucketName')

const DestinationS3PrefixSchema = z.string().openapi('DestinationS3Prefix')

const SnsTopicArnSchema = z.string().min(1).openapi('SnsTopicArn')

const OptionalValueSchema = z.string().min(1).max(255).openapi('OptionalValue')

const CustomerDefinedValuesSchema = z
  .record(z.string(), OptionalValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 5)
  .openapi('CustomerDefinedValues')

const GenerateDataSetRequestSchema = z
  .object({
    dataSetType: DataSetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The desired data set type.</p> <p> <ul> <li> <strong>customer_subscriber_hourly_monthly_subscriptions</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>customer_subscriber_annual_subscriptions</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>daily_business_usage_by_instance_type</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>daily_business_fees</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>daily_business_free_trial_conversions</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>daily_business_new_instances</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>daily_business_new_product_subscribers</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>daily_business_canceled_product_subscribers</strong> <p>From 2017-09-15 to present: Available daily by 24:00 UTC.</p> </li> <li> <strong>monthly_revenue_billing_and_revenue_data</strong> <p>From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC. Data includes metered transactions (e.g. hourly) from one month prior.</p> </li> <li> <strong>monthly_revenue_annual_subscriptions</strong> <p>From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC. Data includes up-front software charges (e.g. annual) from one month prior.</p> </li> <li> <strong>monthly_revenue_field_demonstration_usage</strong> <p>From 2018-03-15 to present: Available monthly on the 15th day of the month by 24:00 UTC.</p> </li> <li> <strong>monthly_revenue_flexible_payment_schedule</strong> <p>From 2018-11-15 to present: Available monthly on the 15th day of the month by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_product</strong> <p>From 2017-09-15 to present: Available every 30 days by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_instance_hours</strong> <p>From 2017-09-15 to present: Available every 30 days by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_customer_geo</strong> <p>From 2017-09-15 to present: Available every 30 days by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_age_of_uncollected_funds</strong> <p>From 2017-09-15 to present: Available every 30 days by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_age_of_disbursed_funds</strong> <p>From 2017-09-15 to present: Available every 30 days by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_age_of_past_due_funds</strong> <p>From 2018-04-07 to present: Available every 30 days by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_uncollected_funds_breakdown</strong> <p>From 2019-10-04 to present: Available every 30 days by 24:00 UTC.</p> </li> <li> <strong>sales_compensation_billed_revenue</strong> <p>From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC. Data includes metered transactions (e.g. hourly) from one month prior, and up-front software charges (e.g. annual) from one month prior.</p> </li> <li> <strong>us_sales_and_use_tax_records</strong> <p>From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC.</p> </li> <li> <strong>disbursed_amount_by_product_with_uncollected_funds</strong> <p>This data set is deprecated. Download related reports from AMMP instead!</p> </li> <li> <strong>customer_profile_by_industry</strong> <p>This data set is deprecated. Download related reports from AMMP instead!</p> </li> <li> <strong>customer_profile_by_revenue</strong> <p>This data set is deprecated. Download related reports from AMMP instead!</p> </li> <li> <strong>customer_profile_by_geography</strong> <p>This data set is deprecated. Download related reports from AMMP instead!</p> </li> </ul> </p>',
        }),
    ),
    dataSetPublicationDate: DataSetPublicationDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date a data set was published. For daily data sets, provide a date with day-level granularity for the desired day. For monthly data sets except those with prefix disbursed_amount, provide a date with month-level granularity for the desired month (the day value will be ignored). For data sets with prefix disbursed_amount, provide a date with day-level granularity for the desired day. For these data sets we will look backwards in time over the range of 31 days until the first data set is found (the latest one).',
        }),
    ),
    roleNameArn: RoleNameArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services.',
        }),
    ),
    destinationS3BucketName: DestinationS3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name (friendly name, not ARN) of the destination S3 bucket.',
        }),
    ),
    destinationS3Prefix: DestinationS3PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root.',
        }),
    ).exactOptional(),
    snsTopicArn: SnsTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred.',
        }),
    ),
    customerDefinedValues: CustomerDefinedValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file. These key-value pairs can be used to correlated responses with tracking information from other systems.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'dataSetType',
      'dataSetPublicationDate',
      'roleNameArn',
      'destinationS3BucketName',
      'snsTopicArn',
    ],
    title: 'GenerateDataSetRequest',
    description: 'Container for the parameters to the GenerateDataSet operation.',
  })
  .openapi('GenerateDataSetRequest')

const MarketplaceCommerceAnalyticsExceptionSchema = z
  .any()
  .openapi('MarketplaceCommerceAnalyticsException')

const StartSupportDataExportResultSchema = z
  .object({
    dataSetRequestId: DataSetRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier representing a specific request to the StartSupportDataExport operation. This identifier can be used to correlate a request with notifications from the SNS topic.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Container for the result of the StartSupportDataExport operation.',
    required: [],
  })
  .openapi('StartSupportDataExportResult')

const SupportDataSetTypeSchema = z
  .enum(['customer_support_contacts_data', 'test_customer_support_contacts_data'])
  .openapi('SupportDataSetType')

const FromDateSchema = z.iso.datetime({ offset: true }).openapi('FromDate')

const StartSupportDataExportRequestSchema = z
  .object({
    dataSetType: SupportDataSetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies the data set type to be written to the output csv file. The data set types customer_support_contacts_data and test_customer_support_contacts_data both result in a csv file containing the following fields: Product Id, Product Code, Customer Guid, Subscription Guid, Subscription Start Date, Organization, AWS Account Id, Given Name, Surname, Telephone Number, Email, Title, Country Code, ZIP Code, Operation Type, and Operation Time. </p> <p> <ul> <li><i>customer_support_contacts_data</i> Customer support contact data. The data set will contain all changes (Creates, Updates, and Deletes) to customer support contact data from the date specified in the from_date parameter.</li> <li><i>test_customer_support_contacts_data</i> An example data set containing static test data in the same format as customer_support_contacts_data</li> </ul> </p>',
        }),
    ),
    fromDate: FromDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date from which to retrieve the data set in UTC. This parameter only affects the customer_support_contacts_data data set type.',
        }),
    ),
    roleNameArn: RoleNameArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services.',
        }),
    ),
    destinationS3BucketName: DestinationS3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name (friendly name, not ARN) of the destination S3 bucket.',
        }),
    ),
    destinationS3Prefix: DestinationS3PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root.',
        }),
    ).exactOptional(),
    snsTopicArn: SnsTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred.',
        }),
    ),
    customerDefinedValues: CustomerDefinedValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['dataSetType', 'fromDate', 'roleNameArn', 'destinationS3BucketName', 'snsTopicArn'],
    title: 'StartSupportDataExportRequest',
    description: 'Container for the parameters to the StartSupportDataExport operation.',
  })
  .openapi('StartSupportDataExportRequest')

const OptionalKeySchema = z.string().min(1).max(255).openapi('OptionalKey')

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

export const postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet',
  description:
    'Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.',
  operationId: 'GenerateDataSet',
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
        .literal('MarketplaceCommerceAnalytics20150701.GenerateDataSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MarketplaceCommerceAnalytics20150701.GenerateDataSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GenerateDataSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GenerateDataSetResultSchema } },
    },
    480: {
      description: 'MarketplaceCommerceAnalyticsException',
      content: { 'application/json': { schema: MarketplaceCommerceAnalyticsExceptionSchema } },
    },
  },
})

export const postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport',
    description:
      "Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.",
    operationId: 'StartSupportDataExport',
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
          .literal('MarketplaceCommerceAnalytics20150701.StartSupportDataExport')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MarketplaceCommerceAnalytics20150701.StartSupportDataExport'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartSupportDataExportRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartSupportDataExportResultSchema } },
      },
      480: {
        description: 'MarketplaceCommerceAnalyticsException',
        content: { 'application/json': { schema: MarketplaceCommerceAnalyticsExceptionSchema } },
      },
    },
  })
