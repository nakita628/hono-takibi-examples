import { createRoute, z } from '@hono/zod-openapi'

const IndexIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9-]*/)
  .length(36)
  .openapi('IndexId')

const StringSchema = z.string().min(1).max(2048).openapi('String')

const MaxResultsIntegerForListAccessControlConfigurationsRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListAccessControlConfigurationsRequest')

type ListAccessControlConfigurationsRequestType = {
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListAccessControlConfigurationsRequestSchema> & {
    [key: string]: unknown
  }
}

const DataSourceIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(100)
  .openapi('DataSourceId')

const NextTokenSchema = z.string().min(1).max(800).openapi('NextToken')

const MaxResultsIntegerForListDataSourceSyncJobsRequestSchema = z
  .int()
  .min(1)
  .max(10)
  .openapi('MaxResultsIntegerForListDataSourceSyncJobsRequest')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimeRangeSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp for the beginning of the time range.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp for the end of the time range.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides a range of time.', required: [] })
  .openapi('TimeRange')

const DataSourceSyncJobStatusSchema = z
  .enum(['FAILED', 'SUCCEEDED', 'SYNCING', 'INCOMPLETE', 'STOPPING', 'ABORTED', 'SYNCING_INDEXING'])
  .openapi('DataSourceSyncJobStatus')

type ListDataSourceSyncJobsRequestType = {
  Id: z.infer<typeof DataSourceIdSchema> & { [key: string]: unknown }
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListDataSourceSyncJobsRequestSchema> & {
    [key: string]: unknown
  }
  StartTimeFilter?: z.infer<typeof TimeRangeSchema> & { [key: string]: unknown }
  StatusFilter?: z.infer<typeof DataSourceSyncJobStatusSchema> & { [key: string]: unknown }
}

const MaxResultsIntegerForListDataSourcesRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListDataSourcesRequest')

type ListDataSourcesRequestType = {
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListDataSourcesRequestSchema> & {
    [key: string]: unknown
  }
}

const ExperienceIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(36)
  .openapi('ExperienceId')

const MaxResultsIntegerForListEntityPersonasRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListEntityPersonasRequest')

type ListEntityPersonasRequestType = {
  Id: z.infer<typeof ExperienceIdSchema> & { [key: string]: unknown }
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListEntityPersonasRequestSchema> & {
    [key: string]: unknown
  }
}

const MaxResultsIntegerForListExperiencesRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListExperiencesRequest')

type ListExperiencesRequestType = {
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListExperiencesRequestSchema> & {
    [key: string]: unknown
  }
}

const MaxResultsIntegerForListFaqsRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListFaqsRequest')

type ListFaqsRequestType = {
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListFaqsRequestSchema> & {
    [key: string]: unknown
  }
}

const MaxResultsIntegerForListFeaturedResultsSetsRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListFeaturedResultsSetsRequest')

type ListFeaturedResultsSetsRequestType = {
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListFeaturedResultsSetsRequestSchema> & {
    [key: string]: unknown
  }
}

const MaxResultsIntegerForListIndicesRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListIndicesRequest')

type ListIndicesRequestType = {
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListIndicesRequestSchema> & {
    [key: string]: unknown
  }
}

const MaxResultsIntegerForListThesauriRequestSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListThesauriRequest')

type ListThesauriRequestType = {
  IndexId: z.infer<typeof IndexIdSchema> & { [key: string]: unknown }
  NextToken?: z.infer<typeof NextTokenSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof MaxResultsIntegerForListThesauriRequestSchema> & {
    [key: string]: unknown
  }
}

const AttributeFilterSchema: z.ZodType<AttributeFilterType> = z
  .lazy(() =>
    z
      .object({
        AndAllFilters: AttributeFilterListSchema.and(
          z
            .any()
            .openapi({
              description: 'Performs a logical <code>AND</code> operation on all supplied filters.',
            }),
        ).exactOptional(),
        OrAllFilters: AttributeFilterListSchema.and(
          z
            .any()
            .openapi({
              description: 'Performs a logical <code>OR</code> operation on all supplied filters.',
            }),
        ).exactOptional(),
        NotFilter: AttributeFilterSchema.and(
          z
            .any()
            .openapi({
              description: 'Performs a logical <code>NOT</code> operation on all supplied filters.',
            }),
        ).exactOptional(),
        EqualsTo: DocumentAttributeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Performs an equals operation on two document attributes or metadata fields.',
            }),
        ).exactOptional(),
        ContainsAll: DocumentAttributeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Returns true when a document contains all of the specified document attributes or metadata fields. This filter is only applicable to <code>StringListValue</code> metadata.',
            }),
        ).exactOptional(),
        ContainsAny: DocumentAttributeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Returns true when a document contains any of the specified document attributes or metadata fields. This filter is only applicable to <code>StringListValue</code> metadata.',
            }),
        ).exactOptional(),
        GreaterThan: DocumentAttributeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Performs a greater than operation on two document attributes or metadata fields. Use with a document attribute of type <code>Date</code> or <code>Long</code>.',
            }),
        ).exactOptional(),
        GreaterThanOrEquals: DocumentAttributeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Performs a greater or equals than operation on two document attributes or metadata fields. Use with a document attribute of type <code>Date</code> or <code>Long</code>.',
            }),
        ).exactOptional(),
        LessThan: DocumentAttributeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Performs a less than operation on two document attributes or metadata fields. Use with a document attribute of type <code>Date</code> or <code>Long</code>.',
            }),
        ).exactOptional(),
        LessThanOrEquals: DocumentAttributeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Performs a less than or equals operation on two document attributes or metadata fields. Use with a document attribute of type <code>Date</code> or <code>Long</code>.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>Provides filtering the query results based on document attributes or metadata fields.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualsTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> <p>If you use more than 10 attribute filters in a given list for <code>AndAllFilters</code> or <code>OrAllFilters</code>, you receive a <code>ValidationException</code> with the message "<code>AttributeFilter</code> cannot have a length of more than 10".</p>',
        required: [],
      }),
  )
  .openapi('AttributeFilter')

type AttributeFilterListType = z.infer<typeof AttributeFilterSchema>[]

const AttributeFilterListSchema: z.ZodType<AttributeFilterListType> = z
  .lazy(() => z.array(AttributeFilterSchema))
  .openapi('AttributeFilterList')

type DocumentAttributeKeyType = string

const DocumentAttributeKeySchema: z.ZodType<DocumentAttributeKeyType> = z
  .string()
  .regex(/[a-zA-Z0-9_][a-zA-Z0-9_-]*/)
  .min(1)
  .max(200)
  .openapi('DocumentAttributeKey')

const DocumentAttributeStringValueSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi('DocumentAttributeStringValue')

const DocumentAttributeStringListValueSchema = z
  .array(StringSchema)
  .openapi('DocumentAttributeStringListValue')

const LongSchema = z.int().openapi('Long')

type DocumentAttributeValueType = {
  StringValue?: z.infer<typeof DocumentAttributeStringValueSchema> & { [key: string]: unknown }
  StringListValue?: z.infer<typeof DocumentAttributeStringListValueSchema> & {
    [key: string]: unknown
  }
  LongValue?: z.infer<typeof LongSchema> & { [key: string]: unknown }
  DateValue?: z.infer<typeof TimestampSchema> & { [key: string]: unknown }
}

const DocumentAttributeValueSchema: z.ZodType<DocumentAttributeValueType> = z
  .object({
    StringValue: DocumentAttributeStringValueSchema.and(
      z.any().openapi({ description: 'A string, such as "department".' }),
    ).exactOptional(),
    StringListValue: DocumentAttributeStringListValueSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of strings. The default maximum length or number of strings is 10.',
        }),
    ).exactOptional(),
    LongValue: LongSchema.and(
      z.any().openapi({ description: 'A long integer value.' }),
    ).exactOptional(),
    DateValue: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A date expressed as an ISO 8601 string.</p> <p>It is important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The value of a document attribute. You can only provide one value for a document attribute.',
    required: [],
  })
  .openapi('DocumentAttributeValue')

type DocumentAttributeType = {
  Key: z.infer<typeof DocumentAttributeKeySchema> & { [key: string]: unknown }
  Value: z.infer<typeof DocumentAttributeValueSchema> & { [key: string]: unknown }
}

const DocumentAttributeSchema: z.ZodType<DocumentAttributeType> = z
  .object({
    Key: DocumentAttributeKeySchema.and(
      z.any().openapi({ description: 'The identifier for the attribute.' }),
    ),
    Value: DocumentAttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A document attribute or metadata field. To create custom document attributes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-attributes.html">Custom attributes</a>.',
  })
  .openapi('DocumentAttribute')

type AttributeFilterType = {
  AndAllFilters?: z.infer<typeof AttributeFilterListSchema> & { [key: string]: unknown }
  OrAllFilters?: z.infer<typeof AttributeFilterListSchema> & { [key: string]: unknown }
  NotFilter?: AttributeFilterType & { [key: string]: unknown }
  EqualsTo?: z.infer<typeof DocumentAttributeSchema> & { [key: string]: unknown }
  ContainsAll?: z.infer<typeof DocumentAttributeSchema> & { [key: string]: unknown }
  ContainsAny?: z.infer<typeof DocumentAttributeSchema> & { [key: string]: unknown }
  GreaterThan?: z.infer<typeof DocumentAttributeSchema> & { [key: string]: unknown }
  GreaterThanOrEquals?: z.infer<typeof DocumentAttributeSchema> & { [key: string]: unknown }
  LessThan?: z.infer<typeof DocumentAttributeSchema> & { [key: string]: unknown }
  LessThanOrEquals?: z.infer<typeof DocumentAttributeSchema> & { [key: string]: unknown }
}

type IntegerType = number

const S3BucketNameSchema = z
  .string()
  .regex(/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const DataSourceInclusionsExclusionsStringsMemberSchema = z
  .string()
  .min(1)
  .max(150)
  .openapi('DataSourceInclusionsExclusionsStringsMember')

const DataSourceInclusionsExclusionsStringsSchema = z
  .array(DataSourceInclusionsExclusionsStringsMemberSchema)
  .min(0)
  .max(100)
  .openapi('DataSourceInclusionsExclusionsStrings')

const S3ObjectKeySchema = z.string().min(1).max(1024).openapi('S3ObjectKey')

const DocumentsMetadataConfigurationSchema = z
  .object({
    S3Prefix: S3ObjectKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A prefix used to filter metadata configuration files in the Amazon Web Services S3 bucket. The S3 bucket might contain multiple metadata files. Use <code>S3Prefix</code> to include only the desired metadata files.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.',
    required: [],
  })
  .openapi('DocumentsMetadataConfiguration')

const AccessControlListConfigurationSchema = z
  .object({
    KeyPath: S3ObjectKeySchema.and(
      z.any().openapi({ description: 'Path to the Amazon S3 bucket that contains the ACL files.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Access Control List files for the documents in a data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>.',
    required: [],
  })
  .openapi('AccessControlListConfiguration')

const S3DataSourceConfigurationSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket that contains the documents.' }),
    ),
    InclusionPrefixes: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of S3 prefixes for the documents that should be included in the index.',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of glob patterns for documents that should be indexed. If a document that matches an inclusion pattern also matches an exclusion pattern, the document is not indexed.</p> <p>Some <a href=\"https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters\">examples</a> are:</p> <ul> <li> <p> <i>*.txt</i> will include all text files in a directory (files with the extension .txt).</p> </li> <li> <p> <i>**/*.txt</i> will include all text files in a directory and its subdirectories.</p> </li> <li> <p> <i>*tax*</i> will include all files in a directory that contain 'tax' in the file name, such as 'tax', 'taxes', 'income_tax'.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of glob patterns for documents that should not be indexed. If a document that matches an inclusion prefix or inclusion pattern also matches an exclusion pattern, the document is not indexed.</p> <p>Some <a href=\"https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters\">examples</a> are:</p> <ul> <li> <p> <i>*.png , *.jpg</i> will exclude all PNG and JPEG image files in a directory (files with the extensions .png and .jpg).</p> </li> <li> <p> <i>*internal*</i> will exclude all files in a directory that contain 'internal' in the file name, such as 'internal', 'internal_only', 'company_internal'.</p> </li> <li> <p> <i>**/*internal*</i> will exclude all internal-related files in a directory and its subdirectories.</p> </li> </ul>",
        }),
    ).exactOptional(),
    DocumentsMetadataConfiguration: DocumentsMetadataConfigurationSchema.exactOptional(),
    AccessControlListConfiguration: AccessControlListConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the path to the S3 bucket that contains the user context filtering files for the data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketName'],
    description: 'Provides the configuration information to connect to an Amazon S3 bucket.',
  })
  .openapi('S3DataSourceConfiguration')

const SharePointVersionSchema = z
  .enum(['SHAREPOINT_2013', 'SHAREPOINT_2016', 'SHAREPOINT_ONLINE', 'SHAREPOINT_2019'])
  .openapi('SharePointVersion')

const UrlSchema = z
  .string()
  .regex(/^(https?|ftp|file):\/\/([^\s]*)/)
  .min(1)
  .max(2048)
  .openapi('Url')

const SharePointUrlListSchema = z.array(UrlSchema).min(1).max(100).openapi('SharePointUrlList')

const SecretArnSchema = z
  .string()
  .regex(
    /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
  )
  .min(1)
  .max(1284)
  .openapi('SecretArn')

const BooleanSchema = z.boolean().openapi('Boolean')

const SubnetIdSchema = z
  .string()
  .regex(/[\-0-9a-zA-Z]+/)
  .min(1)
  .max(200)
  .openapi('SubnetId')

const SubnetIdListSchema = z.array(SubnetIdSchema).min(1).max(6).openapi('SubnetIdList')

const VpcSecurityGroupIdSchema = z
  .string()
  .regex(/[-0-9a-zA-Z]+/)
  .min(1)
  .max(200)
  .openapi('VpcSecurityGroupId')

const SecurityGroupIdListSchema = z
  .array(VpcSecurityGroupIdSchema)
  .min(1)
  .max(10)
  .openapi('SecurityGroupIdList')

const DataSourceVpcConfigurationSchema = z
  .object({
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.',
        }),
    ),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Kendra to connect to the data source.',
        }),
    ),
  })
  .openapi({
    required: ['SubnetIds', 'SecurityGroupIds'],
    description: 'Provides the configuration information to connect to an Amazon VPC.',
  })
  .openapi('DataSourceVpcConfiguration')

const DataSourceFieldNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_.]*$/)
  .min(1)
  .max(100)
  .openapi('DataSourceFieldName')

const DataSourceDateFieldFormatSchema = z
  .string()
  .regex(/^(?!\s).*(?<!\s)$/)
  .min(4)
  .max(40)
  .openapi('DataSourceDateFieldFormat')

const IndexFieldNameSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(30)
  .openapi('IndexFieldName')

const DataSourceToIndexFieldMappingSchema = z
  .object({
    DataSourceFieldName: DataSourceFieldNameSchema.and(
      z.any().openapi({ description: 'The name of the column or attribute in the data source.' }),
    ),
    DateFieldFormat: DataSourceDateFieldFormatSchema.and(
      z.any().openapi({ description: 'The type of data stored in the column or attribute.' }),
    ).exactOptional(),
    IndexFieldName: IndexFieldNameSchema.and(
      z.any().openapi({ description: 'The name of the field in the index.' }),
    ),
  })
  .openapi({
    required: ['DataSourceFieldName', 'IndexFieldName'],
    description:
      'Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <code>UpdateIndex</code> API.',
  })
  .openapi('DataSourceToIndexFieldMapping')

const DataSourceToIndexFieldMappingListSchema = z
  .array(DataSourceToIndexFieldMappingSchema)
  .min(1)
  .max(100)
  .openapi('DataSourceToIndexFieldMappingList')

const S3PathSchema = z
  .object({
    Bucket: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the S3 bucket that contains the file.' }),
    ),
    Key: S3ObjectKeySchema.and(z.any().openapi({ description: 'The name of the file.' })),
  })
  .openapi({
    required: ['Bucket', 'Key'],
    description: 'Information required to find a specific file in an Amazon S3 bucket.',
  })
  .openapi('S3Path')

const SharePointOnlineAuthenticationTypeSchema = z
  .enum(['HTTP_BASIC', 'OAUTH2'])
  .openapi('SharePointOnlineAuthenticationType')

const HostSchema = z
  .string()
  .regex(/([^\s]*)/)
  .min(1)
  .max(253)
  .openapi('Host')

const PortSchema = z.int().min(1).max(65535).openapi('Port')

const ProxyConfigurationSchema = z
  .object({
    Host: HostSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the website host you want to connect to via a web proxy server.</p> <p>For example, the host name of https://a.example.com/page1.html is "a.example.com".</p>',
        }),
    ),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number of the website host you want to connect to via a web proxy server. </p> <p>For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.</p>',
        }),
    ),
    Credentials: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Your secret ARN, which you can create in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a> </p> <p>The credentials are optional. You use a secret if web proxy credentials are required to connect to a website host. Amazon Kendra currently support basic authentication to connect to a web proxy server. The secret stores your credentials.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Host', 'Port'],
    description:
      'Provides the configuration information for a web proxy to connect to website hosts.',
  })
  .openapi('ProxyConfiguration')

const SharePointConfigurationSchema = z
  .object({
    SharePointVersion: SharePointVersionSchema.and(
      z.any().openapi({ description: 'The version of Microsoft SharePoint that you use.' }),
    ),
    Urls: SharePointUrlListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Microsoft SharePoint site URLs for the documents you want to index.',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the user name and password required to connect to the SharePoint instance. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html">Microsoft SharePoint</a>.',
        }),
    ),
    CrawlAttachments: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index document attachments.' }),
    ).exactOptional(),
    UseChangeLog: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>TRUE</code> to use the SharePoint change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in SharePoint.",
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to include certain documents in your SharePoint. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.</p> <p>The regex applies to the display URL of the SharePoint document.</p>",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to exclude certain documents in your SharePoint. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.</p> <p>The regex applies to the display URL of the SharePoint document.</p>",
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your Microsoft SharePoint. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map SharePoint data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to SharePoint fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The SharePoint data source field names must exist in your SharePoint custom metadata.',
        }),
    ).exactOptional(),
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Microsoft SharePoint attribute field that contains the title of the document.',
        }),
    ).exactOptional(),
    DisableLocalGroups: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to disable local groups information.' }),
    ).exactOptional(),
    SslCertificateS3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path to the SSL certificate stored in an Amazon S3 bucket. You use this to connect to SharePoint Server if you require a secure SSL connection.</p> <p>You can generate a self-signed X509 certificate on any computer using OpenSSL. For an example of using OpenSSL to create an X509 certificate, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-ssl.html">Create and sign an X509 certificate</a>.</p>',
        }),
    ).exactOptional(),
    AuthenticationType: SharePointOnlineAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you want to connect to SharePoint Online using basic authentication of user name and password, or OAuth authentication of user name, password, client ID, and client secret, or AD App-only authentication of client secret.',
        }),
    ).exactOptional(),
    ProxyConfiguration: ProxyConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information to connect to your Microsoft SharePoint site URLs via instance via a web proxy. You can use this option for SharePoint Server.</p> <p>You must provide the website host name and port number. For example, the host name of <i>https://a.example.com/page1.html</i> is "a.example.com" and the port is 443, the standard port for HTTPS.</p> <p>Web proxy credentials are optional and you can use them to connect to a web proxy server that requires basic authentication of user name and password. To store web proxy credentials, you use a secret in Secrets Manager.</p> <p>It is recommended that you follow best security practices when configuring your web proxy. This includes setting up throttling, setting up logging and monitoring, and applying security patches on a regular basis. If you use your web proxy with multiple data sources, sync jobs that occur at the same time could strain the load on your proxy. It is recommended you prepare your proxy beforehand for any security and load requirements.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SharePointVersion', 'Urls', 'SecretArn'],
    description:
      'Provides the configuration information to connect to Microsoft SharePoint as your data source.',
  })
  .openapi('SharePointConfiguration')

const DatabaseEngineTypeSchema = z
  .enum(['RDS_AURORA_MYSQL', 'RDS_AURORA_POSTGRESQL', 'RDS_MYSQL', 'RDS_POSTGRESQL'])
  .openapi('DatabaseEngineType')

const DatabaseHostSchema = z.string().min(1).max(253).openapi('DatabaseHost')

const DatabasePortSchema = z.int().min(1).max(65535).openapi('DatabasePort')

const DatabaseNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(100)
  .openapi('DatabaseName')

const TableNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(100)
  .openapi('TableName')

const ConnectionConfigurationSchema = z
  .object({
    DatabaseHost: DatabaseHostSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the host for the database. Can be either a string (host.subdomain.domain.tld) or an IPv4 or IPv6 address.',
        }),
    ),
    DatabasePort: DatabasePortSchema.and(
      z.any().openapi({ description: 'The port that the database uses for connections.' }),
    ),
    DatabaseName: DatabaseNameSchema.and(
      z.any().openapi({ description: 'The name of the database containing the document data.' }),
    ),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table that contains the document data.' }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of credentials stored in Secrets Manager. The credentials should be a user/password pair. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html">Using a Database Data Source</a>. For more information about Secrets Manager, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"> What Is Secrets Manager</a> in the <i> Secrets Manager </i> user guide.',
        }),
    ),
  })
  .openapi({
    required: ['DatabaseHost', 'DatabasePort', 'DatabaseName', 'TableName', 'SecretArn'],
    description: "Provides the configuration information that's required to connect to a database.",
  })
  .openapi('ConnectionConfiguration')

const ColumnNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(100)
  .openapi('ColumnName')

const ChangeDetectingColumnsSchema = z
  .array(ColumnNameSchema)
  .min(1)
  .max(5)
  .openapi('ChangeDetectingColumns')

const ColumnConfigurationSchema = z
  .object({
    DocumentIdColumnName: ColumnNameSchema.and(
      z.any().openapi({ description: "The column that provides the document's identifier." }),
    ),
    DocumentDataColumnName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The column that contains the contents of the document.' }),
    ),
    DocumentTitleColumnName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The column that contains the title of the document.' }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that map database column names to the corresponding fields in an index. You must first create the fields in the index using the <code>UpdateIndex</code> API.',
        }),
    ).exactOptional(),
    ChangeDetectingColumns: ChangeDetectingColumnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'One to five columns that indicate when a document in the database has changed.',
        }),
    ),
  })
  .openapi({
    required: ['DocumentIdColumnName', 'DocumentDataColumnName', 'ChangeDetectingColumns'],
    description:
      'Provides information about how Amazon Kendra should use the columns of a database in an index.',
  })
  .openapi('ColumnConfiguration')

const AclConfigurationSchema = z
  .object({
    AllowedGroupsColumnName: ColumnNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of groups, separated by semi-colons, that filters a query response based on user context. The document is only returned to users that are in one of the groups specified in the <code>UserContext</code> field of the <code>Query</code> API.',
        }),
    ),
  })
  .openapi({
    required: ['AllowedGroupsColumnName'],
    description:
      'Provides information about the column that should be used for filtering the query response by groups.',
  })
  .openapi('AclConfiguration')

const QueryIdentifiersEnclosingOptionSchema = z
  .enum(['DOUBLE_QUOTES', 'NONE'])
  .openapi('QueryIdentifiersEnclosingOption')

const SqlConfigurationSchema = z
  .object({
    QueryIdentifiersEnclosingOption: QueryIdentifiersEnclosingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether Amazon Kendra encloses SQL identifiers for tables and column names in double quotes (") when making a database query.</p> <p>By default, Amazon Kendra passes SQL identifiers the way that they are entered into the data source configuration. It does not change the case of identifiers or enclose them in quotes.</p> <p>PostgreSQL internally converts uppercase characters to lower case characters in identifiers unless they are quoted. Choosing this option encloses identifiers in quotes so that PostgreSQL does not convert the character\'s case.</p> <p>For MySQL databases, you must enable the <code>ansi_quotes</code> option when you set this field to <code>DOUBLE_QUOTES</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides the configuration information to use a SQL database.',
    required: [],
  })
  .openapi('SqlConfiguration')

const DatabaseConfigurationSchema = z
  .object({
    DatabaseEngineType: DatabaseEngineTypeSchema.and(
      z.any().openapi({ description: 'The type of database engine that runs the database.' }),
    ),
    ConnectionConfiguration: ConnectionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: "Configuration information that's required to connect to a database.",
        }),
    ),
    VpcConfiguration: DataSourceVpcConfigurationSchema.exactOptional(),
    ColumnConfiguration: ColumnConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about where the index should get the document information from the database.',
        }),
    ),
    AclConfiguration: AclConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the database column that provides information for user context filtering.',
        }),
    ).exactOptional(),
    SqlConfiguration: SqlConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information about how Amazon Kendra uses quote marks around SQL identifiers when querying a database data source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseEngineType', 'ConnectionConfiguration', 'ColumnConfiguration'],
    description: 'Provides the configuration information to connect to a index. ',
  })
  .openapi('DatabaseConfiguration')

const SalesforceStandardObjectNameSchema = z
  .enum([
    'ACCOUNT',
    'CAMPAIGN',
    'CASE',
    'CONTACT',
    'CONTRACT',
    'DOCUMENT',
    'GROUP',
    'IDEA',
    'LEAD',
    'OPPORTUNITY',
    'PARTNER',
    'PRICEBOOK',
    'PRODUCT',
    'PROFILE',
    'SOLUTION',
    'TASK',
    'USER',
  ])
  .openapi('SalesforceStandardObjectName')

const SalesforceStandardObjectConfigurationSchema = z
  .object({
    Name: SalesforceStandardObjectNameSchema.and(
      z.any().openapi({ description: 'The name of the standard object.' }),
    ),
    DocumentDataFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the field in the standard object table that contains the document contents.',
        }),
    ),
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the field in the standard object table that contains the document title.',
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps attributes or field names of the standard object to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Salesforce fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Salesforce data source field names must exist in your Salesforce custom metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'DocumentDataFieldName'],
    description: 'Provides the configuration information for indexing a single standard object.',
  })
  .openapi('SalesforceStandardObjectConfiguration')

const SalesforceStandardObjectConfigurationListSchema = z
  .array(SalesforceStandardObjectConfigurationSchema)
  .min(1)
  .max(17)
  .openapi('SalesforceStandardObjectConfigurationList')

const SalesforceKnowledgeArticleStateSchema = z
  .enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
  .openapi('SalesforceKnowledgeArticleState')

const SalesforceKnowledgeArticleStateListSchema = z
  .array(SalesforceKnowledgeArticleStateSchema)
  .min(1)
  .max(3)
  .openapi('SalesforceKnowledgeArticleStateList')

const SalesforceStandardKnowledgeArticleTypeConfigurationSchema = z
  .object({
    DocumentDataFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the field that contains the document data to index.',
        }),
    ),
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z.any().openapi({ description: 'The name of the field that contains the document title.' }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps attributes or field names of the knowledge article to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Salesforce fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Salesforce data source field names must exist in your Salesforce custom metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentDataFieldName'],
    description:
      'Provides the configuration information for standard Salesforce knowledge articles.',
  })
  .openapi('SalesforceStandardKnowledgeArticleTypeConfiguration')

const SalesforceCustomKnowledgeArticleTypeNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(100)
  .openapi('SalesforceCustomKnowledgeArticleTypeName')

const SalesforceCustomKnowledgeArticleTypeConfigurationSchema = z
  .object({
    Name: SalesforceCustomKnowledgeArticleTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration.' }),
    ),
    DocumentDataFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the field in the custom knowledge article that contains the document data to index.',
        }),
    ),
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the field in the custom knowledge article that contains the document title.',
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps attributes or field names of the custom knowledge article to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Salesforce fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Salesforce data source field names must exist in your Salesforce custom metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'DocumentDataFieldName'],
    description: 'Provides the configuration information for indexing Salesforce custom articles.',
  })
  .openapi('SalesforceCustomKnowledgeArticleTypeConfiguration')

const SalesforceCustomKnowledgeArticleTypeConfigurationListSchema = z
  .array(SalesforceCustomKnowledgeArticleTypeConfigurationSchema)
  .min(1)
  .max(10)
  .openapi('SalesforceCustomKnowledgeArticleTypeConfigurationList')

const SalesforceKnowledgeArticleConfigurationSchema = z
  .object({
    IncludedStates: SalesforceKnowledgeArticleStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the document states that should be included when Amazon Kendra indexes knowledge articles. You must specify at least one state.',
        }),
    ),
    StandardKnowledgeArticleTypeConfiguration:
      SalesforceStandardKnowledgeArticleTypeConfigurationSchema.and(
        z
          .any()
          .openapi({
            description: 'Configuration information for standard Salesforce knowledge articles.',
          }),
      ).exactOptional(),
    CustomKnowledgeArticleTypeConfigurations:
      SalesforceCustomKnowledgeArticleTypeConfigurationListSchema.and(
        z
          .any()
          .openapi({
            description: 'Configuration information for custom Salesforce knowledge articles.',
          }),
      ).exactOptional(),
  })
  .openapi({
    required: ['IncludedStates'],
    description:
      'Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both ',
  })
  .openapi('SalesforceKnowledgeArticleConfiguration')

const SalesforceChatterFeedIncludeFilterTypeSchema = z
  .enum(['ACTIVE_USER', 'STANDARD_USER'])
  .openapi('SalesforceChatterFeedIncludeFilterType')

const SalesforceChatterFeedIncludeFilterTypesSchema = z
  .array(SalesforceChatterFeedIncludeFilterTypeSchema)
  .min(1)
  .max(2)
  .openapi('SalesforceChatterFeedIncludeFilterTypes')

const SalesforceChatterFeedConfigurationSchema = z
  .object({
    DocumentDataFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the column in the Salesforce FeedItem table that contains the content to index. Typically this is the <code>Body</code> column.',
        }),
    ),
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the column in the Salesforce FeedItem table that contains the title of the document. This is typically the <code>Title</code> column.',
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps fields from a Salesforce chatter feed into Amazon Kendra index fields.',
        }),
    ).exactOptional(),
    IncludeFilterTypes: SalesforceChatterFeedIncludeFilterTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the documents in the feed based on status of the user. When you specify <code>ACTIVE_USERS</code> only documents from users who have an active account are indexed. When you specify <code>STANDARD_USER</code> only documents for Salesforce standard users are documented. You can specify both.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentDataFieldName'],
    description:
      'The configuration information for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table.',
  })
  .openapi('SalesforceChatterFeedConfiguration')

const SalesforceStandardObjectAttachmentConfigurationSchema = z
  .object({
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z.any().openapi({ description: 'The name of the field used for the document title.' }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more objects that map fields in attachments to Amazon Kendra index fields.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the configuration information for processing attachments to Salesforce standard objects.',
    required: [],
  })
  .openapi('SalesforceStandardObjectAttachmentConfiguration')

const SalesforceConfigurationSchema = z
  .object({
    ServerUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The instance URL for the Salesforce site that you want to index.',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Managersecret that contains the key/value pairs required to connect to your Salesforce instance. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>authenticationUrl - The OAUTH endpoint that Amazon Kendra connects to get an OAUTH token. </p> </li> <li> <p>consumerKey - The application public key generated when you created your Salesforce application.</p> </li> <li> <p>consumerSecret - The application private key generated when you created your Salesforce application.</p> </li> <li> <p>password - The password associated with the user logging in to the Salesforce instance.</p> </li> <li> <p>securityToken - The token associated with the user logging in to the Salesforce instance.</p> </li> <li> <p>username - The user name of the user logging in to the Salesforce instance.</p> </li> </ul>',
        }),
    ),
    StandardObjectConfigurations: SalesforceStandardObjectConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the Salesforce standard objects that Amazon Kendra indexes.',
        }),
    ).exactOptional(),
    KnowledgeArticleConfiguration: SalesforceKnowledgeArticleConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both.',
        }),
    ).exactOptional(),
    ChatterFeedConfiguration: SalesforceChatterFeedConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration information for Salesforce chatter feeds.' }),
    ).exactOptional(),
    CrawlAttachments: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether Amazon Kendra should index attachments to Salesforce objects.',
        }),
    ).exactOptional(),
    StandardObjectAttachmentConfiguration:
      SalesforceStandardObjectAttachmentConfigurationSchema.and(
        z
          .any()
          .openapi({
            description:
              'Configuration information for processing attachments to Salesforce standard objects. ',
          }),
      ).exactOptional(),
    IncludeAttachmentFilePatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to include certain documents in your Salesforce. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.</p> <p>The pattern is applied to the name of the attached file.</p>",
        }),
    ).exactOptional(),
    ExcludeAttachmentFilePatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to exclude certain documents in your Salesforce. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.</p> <p>The pattern is applied to the name of the attached file.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServerUrl', 'SecretArn'],
    description:
      'Provides the configuration information to connect to Salesforce as your data source.',
  })
  .openapi('SalesforceConfiguration')

const TenantDomainSchema = z
  .string()
  .regex(/^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-z]{2,}$/)
  .min(1)
  .max(256)
  .openapi('TenantDomain')

const OneDriveUserSchema = z
  .string()
  .regex(/^(?!\s).+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  .min(1)
  .max(256)
  .openapi('OneDriveUser')

const OneDriveUserListSchema = z
  .array(OneDriveUserSchema)
  .min(1)
  .max(100)
  .openapi('OneDriveUserList')

const OneDriveUsersSchema = z
  .object({
    OneDriveUserList: OneDriveUserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users whose documents should be indexed. Specify the user names in email format, for example, <code>username@tenantdomain</code>. If you need to index the documents of more than 100 users, use the <code>OneDriveUserS3Path</code> field to specify the location of a file containing a list of users.',
        }),
    ).exactOptional(),
    OneDriveUserS3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket location of a file containing a list of users whose documents should be indexed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'User accounts whose documents should be indexed.', required: [] })
  .openapi('OneDriveUsers')

const OneDriveConfigurationSchema = z
  .object({
    TenantDomain: TenantDomainSchema.and(
      z.any().openapi({ description: 'The Azure Active Directory domain of the organization. ' }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Secrets Managersecret that contains the user name and password to connect to OneDrive. The user name should be the application ID for the OneDrive application, and the password is the application key for the OneDrive application.',
        }),
    ),
    OneDriveUsers: OneDriveUsersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of user accounts whose documents should be indexed.' }),
    ),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to include certain documents in your OneDrive. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.</p> <p>The pattern is applied to the file name.</p>",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to exclude certain documents in your OneDrive. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.</p> <p>The pattern is applied to the file name.</p>",
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map OneDrive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to OneDrive fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The OneDrive data source field names must exist in your OneDrive custom metadata.',
        }),
    ).exactOptional(),
    DisableLocalGroups: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to disable local groups information.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TenantDomain', 'SecretArn', 'OneDriveUsers'],
    description:
      'Provides the configuration information to connect to OneDrive as your data source.',
  })
  .openapi('OneDriveConfiguration')

const ServiceNowHostUrlSchema = z
  .string()
  .regex(/^(?!(^(https?|ftp|file):\/\/))[a-z0-9-]+(\.service-now\.com)$/)
  .min(1)
  .max(2048)
  .openapi('ServiceNowHostUrl')

const ServiceNowBuildVersionTypeSchema = z
  .enum(['LONDON', 'OTHERS'])
  .openapi('ServiceNowBuildVersionType')

const ServiceNowKnowledgeArticleFilterQuerySchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(2048)
  .openapi('ServiceNowKnowledgeArticleFilterQuery')

const ServiceNowKnowledgeArticleConfigurationSchema = z
  .object({
    CrawlAttachments: BooleanSchema.and(
      z
        .any()
        .openapi({ description: ' <code>TRUE</code> to index attachments to knowledge articles.' }),
    ).exactOptional(),
    IncludeAttachmentFilePatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to include certain attachments of knowledge articles in your ServiceNow. Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.</p> <p>The regex is applied to the field specified in the <code>PatternTargetField</code>.</p>",
        }),
    ).exactOptional(),
    ExcludeAttachmentFilePatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to exclude certain attachments of knowledge articles in your ServiceNow. Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.</p> <p>The regex is applied to the field specified in the <code>PatternTargetField</code>.</p>",
        }),
    ).exactOptional(),
    DocumentDataFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.',
        }),
    ),
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ServiceNow field that is mapped to the index document title field.',
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps attributes or field names of knoweldge articles to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to ServiceNow fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The ServiceNow data source field names must exist in your ServiceNow custom metadata.',
        }),
    ).exactOptional(),
    FilterQuery: ServiceNowKnowledgeArticleFilterQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A query that selects the knowledge articles to index. The query can return articles from multiple knowledge bases, and the knowledge bases can be public or private.</p> <p>The query string must be one generated by the ServiceNow console. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/servicenow-query.html">Specifying documents to index with a query</a>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentDataFieldName'],
    description:
      'Provides the configuration information for crawling knowledge articles in the ServiceNow site.',
  })
  .openapi('ServiceNowKnowledgeArticleConfiguration')

const ServiceNowServiceCatalogConfigurationSchema = z
  .object({
    CrawlAttachments: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' <code>TRUE</code> to index attachments to service catalog items.',
        }),
    ).exactOptional(),
    IncludeAttachmentFilePatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to include certain attachments of catalogs in your ServiceNow. Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.</p> <p>The regex is applied to the file name of the attachment.</p>",
        }),
    ).exactOptional(),
    ExcludeAttachmentFilePatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of regular expression patterns to exclude certain attachments of catalogs in your ServiceNow. Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.</p> <p>The regex is applied to the file name of the attachment.</p>",
        }),
    ).exactOptional(),
    DocumentDataFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.',
        }),
    ),
    DocumentTitleFieldName: DataSourceFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ServiceNow field that is mapped to the index document title field.',
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps attributes or field names of catalogs to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to ServiceNow fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The ServiceNow data source field names must exist in your ServiceNow custom metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentDataFieldName'],
    description:
      'Provides the configuration information for crawling service catalog items in the ServiceNow site',
  })
  .openapi('ServiceNowServiceCatalogConfiguration')

const ServiceNowAuthenticationTypeSchema = z
  .enum(['HTTP_BASIC', 'OAUTH2'])
  .openapi('ServiceNowAuthenticationType')

const ServiceNowConfigurationSchema = z
  .object({
    HostUrl: ServiceNowHostUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ServiceNow instance that the data source connects to. The host endpoint should look like the following: <i>{instance}.service-now.com.</i> ',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the user name and password required to connect to the ServiceNow instance. You can also provide OAuth authentication credentials of user name, password, client ID, and client secret. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html">Using a ServiceNow data source</a>.',
        }),
    ),
    ServiceNowBuildVersion: ServiceNowBuildVersionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the release that the ServiceNow host is running. If the host is not running the <code>LONDON</code> release, use <code>OTHERS</code>.',
        }),
    ),
    KnowledgeArticleConfiguration: ServiceNowKnowledgeArticleConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for crawling knowledge articles in the ServiceNow site.',
        }),
    ).exactOptional(),
    ServiceCatalogConfiguration: ServiceNowServiceCatalogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for crawling service catalogs in the ServiceNow site.',
        }),
    ).exactOptional(),
    AuthenticationType: ServiceNowAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of authentication used to connect to the ServiceNow instance. If you choose <code>HTTP_BASIC</code>, Amazon Kendra is authenticated using the user name and password provided in the Secrets Manager secret in the <code>SecretArn</code> field. If you choose <code>OAUTH2</code>, Amazon Kendra is authenticated using the credentials of client ID, client secret, user name and password.</p> <p>When you use <code>OAUTH2</code> authentication, you must generate a token and a client secret using the ServiceNow console. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html">Using a ServiceNow data source</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HostUrl', 'SecretArn', 'ServiceNowBuildVersion'],
    description:
      'Provides the configuration information to connect to ServiceNow as your data source.',
  })
  .openapi('ServiceNowConfiguration')

const ConfluenceVersionSchema = z.enum(['CLOUD', 'SERVER']).openapi('ConfluenceVersion')

const ConfluenceSpaceIdentifierSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(255)
  .openapi('ConfluenceSpaceIdentifier')

const ConfluenceSpaceListSchema = z
  .array(ConfluenceSpaceIdentifierSchema)
  .min(1)
  .openapi('ConfluenceSpaceList')

const ConfluenceSpaceFieldNameSchema = z
  .enum(['DISPLAY_URL', 'ITEM_TYPE', 'SPACE_KEY', 'URL'])
  .openapi('ConfluenceSpaceFieldName')

const ConfluenceSpaceToIndexFieldMappingSchema = z
  .object({
    DataSourceFieldName: ConfluenceSpaceFieldNameSchema.and(
      z.any().openapi({ description: 'The name of the field in the data source. ' }),
    ).exactOptional(),
    DateFieldFormat: DataSourceDateFieldFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format for date fields in the data source. If the field specified in <code>DataSourceFieldName</code> is a date field you must specify the date format. If the field is not a date field, an exception is thrown.',
        }),
    ).exactOptional(),
    IndexFieldName: IndexFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.',
    required: [],
  })
  .openapi('ConfluenceSpaceToIndexFieldMapping')

const ConfluenceSpaceFieldMappingsListSchema = z
  .array(ConfluenceSpaceToIndexFieldMappingSchema)
  .min(1)
  .max(4)
  .openapi('ConfluenceSpaceFieldMappingsList')

const ConfluenceSpaceConfigurationSchema = z
  .object({
    CrawlPersonalSpaces: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> to index personal spaces. You can add restrictions to items in personal spaces. If personal spaces are indexed, queries without user context information may return restricted items from a personal space in their results. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.',
        }),
    ).exactOptional(),
    CrawlArchivedSpaces: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index archived spaces.' }),
    ).exactOptional(),
    IncludeSpaces: ConfluenceSpaceListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of space keys for Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are indexed. Spaces that aren't in the list aren't indexed. A space in the list must exist. Otherwise, Amazon Kendra logs an error when the data source is synchronized. If a space is in both the <code>IncludeSpaces</code> and the <code>ExcludeSpaces</code> list, the space is excluded.",
        }),
    ).exactOptional(),
    ExcludeSpaces: ConfluenceSpaceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of space keys of Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are not indexed. If a space is in both the <code>ExcludeSpaces</code> and the <code>IncludeSpaces</code> list, the space is excluded.',
        }),
    ).exactOptional(),
    SpaceFieldMappings: ConfluenceSpaceFieldMappingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.</p> <p>If you specify the <code>SpaceFieldMappings</code> parameter, you must specify at least one field mapping.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configuration information for indexing Confluence spaces.',
    required: [],
  })
  .openapi('ConfluenceSpaceConfiguration')

const ConfluencePageFieldNameSchema = z
  .enum([
    'AUTHOR',
    'CONTENT_STATUS',
    'CREATED_DATE',
    'DISPLAY_URL',
    'ITEM_TYPE',
    'LABELS',
    'MODIFIED_DATE',
    'PARENT_ID',
    'SPACE_KEY',
    'SPACE_NAME',
    'URL',
    'VERSION',
  ])
  .openapi('ConfluencePageFieldName')

const ConfluencePageToIndexFieldMappingSchema = z
  .object({
    DataSourceFieldName: ConfluencePageFieldNameSchema.and(
      z.any().openapi({ description: 'The name of the field in the data source.' }),
    ).exactOptional(),
    DateFieldFormat: DataSourceDateFieldFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format for date fields in the data source. If the field specified in <code>DataSourceFieldName</code> is a date field you must specify the date format. If the field is not a date field, an exception is thrown.',
        }),
    ).exactOptional(),
    IndexFieldName: IndexFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.',
    required: [],
  })
  .openapi('ConfluencePageToIndexFieldMapping')

const ConfluencePageFieldMappingsListSchema = z
  .array(ConfluencePageToIndexFieldMappingSchema)
  .min(1)
  .max(12)
  .openapi('ConfluencePageFieldMappingsList')

const ConfluencePageConfigurationSchema = z
  .object({
    PageFieldMappings: ConfluencePageFieldMappingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.</p> <p>If you specify the <code>PageFieldMappings</code> parameter, you must specify at least one field mapping.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configuration of the page settings for the Confluence data source.',
    required: [],
  })
  .openapi('ConfluencePageConfiguration')

const ConfluenceBlogFieldNameSchema = z
  .enum([
    'AUTHOR',
    'DISPLAY_URL',
    'ITEM_TYPE',
    'LABELS',
    'PUBLISH_DATE',
    'SPACE_KEY',
    'SPACE_NAME',
    'URL',
    'VERSION',
  ])
  .openapi('ConfluenceBlogFieldName')

const ConfluenceBlogToIndexFieldMappingSchema = z
  .object({
    DataSourceFieldName: ConfluenceBlogFieldNameSchema.and(
      z.any().openapi({ description: 'The name of the field in the data source. ' }),
    ).exactOptional(),
    DateFieldFormat: DataSourceDateFieldFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format for date fields in the data source. If the field specified in <code>DataSourceFieldName</code> is a date field you must specify the date format. If the field is not a date field, an exception is thrown.',
        }),
    ).exactOptional(),
    IndexFieldName: IndexFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Maps attributes or field names of Confluence blog to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.',
    required: [],
  })
  .openapi('ConfluenceBlogToIndexFieldMapping')

const ConfluenceBlogFieldMappingsListSchema = z
  .array(ConfluenceBlogToIndexFieldMappingSchema)
  .min(1)
  .max(9)
  .openapi('ConfluenceBlogFieldMappingsList')

const ConfluenceBlogConfigurationSchema = z
  .object({
    BlogFieldMappings: ConfluenceBlogFieldMappingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Maps attributes or field names of Confluence blogs to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.</p> <p>If you specify the <code>BlogFieldMappings</code> parameter, you must specify at least one field mapping.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration of blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the <code>ExclusionPatterns</code> or <code>InclusionPatterns</code> fields in the <code>ConfluenceConfiguration</code> object.',
    required: [],
  })
  .openapi('ConfluenceBlogConfiguration')

const ConfluenceAttachmentFieldNameSchema = z
  .enum([
    'AUTHOR',
    'CONTENT_TYPE',
    'CREATED_DATE',
    'DISPLAY_URL',
    'FILE_SIZE',
    'ITEM_TYPE',
    'PARENT_ID',
    'SPACE_KEY',
    'SPACE_NAME',
    'URL',
    'VERSION',
  ])
  .openapi('ConfluenceAttachmentFieldName')

const ConfluenceAttachmentToIndexFieldMappingSchema = z
  .object({
    DataSourceFieldName: ConfluenceAttachmentFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the field in the data source. </p> <p>You must first create the index field using the <code>UpdateIndex</code> API. </p>',
        }),
    ).exactOptional(),
    DateFieldFormat: DataSourceDateFieldFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format for date fields in the data source. If the field specified in <code>DataSourceFieldName</code> is a date field you must specify the date format. If the field is not a date field, an exception is thrown.',
        }),
    ).exactOptional(),
    IndexFieldName: IndexFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confuence data source field names must exist in your Confluence custom metadata.',
    required: [],
  })
  .openapi('ConfluenceAttachmentToIndexFieldMapping')

const ConfluenceAttachmentFieldMappingsListSchema = z
  .array(ConfluenceAttachmentToIndexFieldMappingSchema)
  .min(1)
  .max(11)
  .openapi('ConfluenceAttachmentFieldMappingsList')

const ConfluenceAttachmentConfigurationSchema = z
  .object({
    CrawlAttachments: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' <code>TRUE</code> to index attachments of pages and blogs in Confluence.',
        }),
    ).exactOptional(),
    AttachmentFieldMappings: ConfluenceAttachmentFieldMappingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.</p> <p>If you specify the <code>AttachentFieldMappings</code> parameter, you must specify at least one field mapping.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Configuration of attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.",
    required: [],
  })
  .openapi('ConfluenceAttachmentConfiguration')

const ConfluenceAuthenticationTypeSchema = z
  .enum(['HTTP_BASIC', 'PAT'])
  .openapi('ConfluenceAuthenticationType')

const ConfluenceConfigurationSchema = z
  .object({
    ServerUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of your Confluence instance. Use the full URL of the server. For example, <i>https://server.example.com:port/</i>. You can also use an IP address, for example, <i>https://192.168.1.113/</i>.',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the user name and password required to connect to the Confluence instance. If you use Confluence Cloud, you use a generated API token as the password.</p> <p>You can also provide authentication credentials in the form of a personal access token. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-confluence.html">Using a Confluence data source</a>.</p>',
        }),
    ),
    Version: ConfluenceVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version or the type of Confluence installation to connect to.',
        }),
    ),
    SpaceConfiguration: ConfluenceSpaceConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration information for indexing Confluence spaces.' }),
    ).exactOptional(),
    PageConfiguration: ConfluencePageConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration information for indexing Confluence pages.' }),
    ).exactOptional(),
    BlogConfiguration: ConfluenceBlogConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration information for indexing Confluence blogs.' }),
    ).exactOptional(),
    AttachmentConfiguration: ConfluenceAttachmentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for indexing attachments to Confluence blogs and pages.',
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your Confluence. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are included in the index. Content that doesn't match the patterns is excluded from the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are excluded from the index. Content that doesn't match the patterns is included in the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.",
        }),
    ).exactOptional(),
    ProxyConfiguration: ProxyConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information to connect to your Confluence URL instance via a web proxy. You can use this option for Confluence Server.</p> <p>You must provide the website host name and port number. For example, the host name of <i>https://a.example.com/page1.html</i> is "a.example.com" and the port is 443, the standard port for HTTPS.</p> <p>Web proxy credentials are optional and you can use them to connect to a web proxy server that requires basic authentication of user name and password. To store web proxy credentials, you use a secret in Secrets Manager.</p> <p>It is recommended that you follow best security practices when configuring your web proxy. This includes setting up throttling, setting up logging and monitoring, and applying security patches on a regular basis. If you use your web proxy with multiple data sources, sync jobs that occur at the same time could strain the load on your proxy. It is recommended you prepare your proxy beforehand for any security and load requirements.</p>',
        }),
    ).exactOptional(),
    AuthenticationType: ConfluenceAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you want to connect to Confluence using basic authentication of user name and password, or a personal access token. You can use a personal access token for Confluence Server.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServerUrl', 'SecretArn', 'Version'],
    description:
      'Provides the configuration information to connect to Confluence as your data source.',
  })
  .openapi('ConfluenceConfiguration')

const MimeTypeSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(256)
  .openapi('MimeType')

const ExcludeMimeTypesListSchema = z
  .array(MimeTypeSchema)
  .min(0)
  .max(30)
  .openapi('ExcludeMimeTypesList')

const UserAccountSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(256)
  .openapi('UserAccount')

const ExcludeUserAccountsListSchema = z
  .array(UserAccountSchema)
  .min(0)
  .max(100)
  .openapi('ExcludeUserAccountsList')

const SharedDriveIdSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(256)
  .openapi('SharedDriveId')

const ExcludeSharedDrivesListSchema = z
  .array(SharedDriveIdSchema)
  .min(0)
  .max(100)
  .openapi('ExcludeSharedDrivesList')

const GoogleDriveConfigurationSchema = z
  .object({
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a Secrets Managersecret that contains the credentials required to connect to Google Drive. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html">Using a Google Workspace Drive data source</a>.',
        }),
    ),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.",
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps Google Drive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Google Drive fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Google Drive data source field names must exist in your Google Drive custom metadata.',
        }),
    ).exactOptional(),
    ExcludeMimeTypes: ExcludeMimeTypesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of MIME types to exclude from the index. All documents matching the specified MIME type are excluded. </p> <p>For a list of MIME types, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html">Using a Google Workspace Drive data source</a>.</p>',
        }),
    ).exactOptional(),
    ExcludeUserAccounts: ExcludeUserAccountsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of email addresses of the users. Documents owned by these users are excluded from the index. Documents shared with excluded users are indexed unless they are excluded in another way.',
        }),
    ).exactOptional(),
    ExcludeSharedDrives: ExcludeSharedDrivesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of identifiers or shared drives to exclude from the index. All files and folders stored on the shared drive are excluded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SecretArn'],
    description:
      'Provides the configuration information to connect to Google Drive as your data source.',
  })
  .openapi('GoogleDriveConfiguration')

const SeedUrlSchema = z
  .string()
  .regex(/^(https?):\/\/([^\s]*)/)
  .min(1)
  .max(2048)
  .openapi('SeedUrl')

const SeedUrlListSchema = z.array(SeedUrlSchema).min(0).max(100).openapi('SeedUrlList')

const WebCrawlerModeSchema = z
  .enum(['HOST_ONLY', 'SUBDOMAINS', 'EVERYTHING'])
  .openapi('WebCrawlerMode')

const SeedUrlConfigurationSchema = z
  .object({
    SeedUrls: SeedUrlListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of seed or starting point URLs of the websites you want to crawl.</p> <p>The list can include a maximum of 100 seed URLs.</p>',
        }),
    ),
    WebCrawlerMode: WebCrawlerModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can choose one of the following modes:</p> <ul> <li> <p> <code>HOST_ONLY</code> – crawl only the website host names. For example, if the seed URL is "abc.example.com", then only URLs with host name "abc.example.com" are crawled.</p> </li> <li> <p> <code>SUBDOMAINS</code> – crawl the website host names with subdomains. For example, if the seed URL is "abc.example.com", then "a.abc.example.com" and "b.abc.example.com" are also crawled.</p> </li> <li> <p> <code>EVERYTHING</code> – crawl the website host names with subdomains and other domains that the web pages link to.</p> </li> </ul> <p>The default mode is set to <code>HOST_ONLY</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SeedUrls'],
    description:
      '<p>Provides the configuration information for the seed or starting point URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p>',
  })
  .openapi('SeedUrlConfiguration')

const SiteMapSchema = z
  .string()
  .regex(/^(https?):\/\/([^\s]*)/)
  .min(1)
  .max(2048)
  .openapi('SiteMap')

const SiteMapsListSchema = z.array(SiteMapSchema).min(0).max(3).openapi('SiteMapsList')

const SiteMapsConfigurationSchema = z
  .object({
    SiteMaps: SiteMapsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of sitemap URLs of the websites you want to crawl.</p> <p>The list can include a maximum of three sitemap URLs.</p>',
        }),
    ),
  })
  .openapi({
    required: ['SiteMaps'],
    description:
      '<p>Provides the configuration information for the sitemap URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p>',
  })
  .openapi('SiteMapsConfiguration')

const UrlsSchema = z
  .object({
    SeedUrlConfiguration: SeedUrlConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration of the seed or starting point URLs of the websites you want to crawl.</p> <p>You can choose to crawl only the website host names, or the website host names with subdomains, or the website host names with subdomains and other domains that the web pages link to.</p> <p>You can list up to 100 seed URLs.</p>',
        }),
    ).exactOptional(),
    SiteMapsConfiguration: SiteMapsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration of the sitemap URLs of the websites you want to crawl.</p> <p>Only URLs belonging to the same website host names are crawled. You can list up to three sitemap URLs.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides the configuration information of the URLs to crawl.</p> <p>You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p>',
    required: [],
  })
  .openapi('Urls')

const CrawlDepthSchema = z.int().min(0).max(10).openapi('CrawlDepth')

const MaxLinksPerPageSchema = z.int().min(1).max(1000).openapi('MaxLinksPerPage')

const MaxContentSizePerPageInMegaBytesSchema = z
  .float32()
  .min(0.000001)
  .max(50)
  .openapi('MaxContentSizePerPageInMegaBytes')

const MaxUrlsPerMinuteCrawlRateSchema = z.int().min(1).max(300).openapi('MaxUrlsPerMinuteCrawlRate')

const BasicAuthenticationConfigurationSchema = z
  .object({
    Host: HostSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the website host you want to connect to using authentication credentials.</p> <p>For example, the host name of https://a.example.com/page1.html is "a.example.com".</p>',
        }),
    ),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number of the website host you want to connect to using authentication credentials.</p> <p>For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.</p>',
        }),
    ),
    Credentials: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Your secret ARN, which you can create in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a> </p> <p>You use a secret if basic authentication credentials are required to connect to a website. The secret stores your credentials of user name and password.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Host', 'Port', 'Credentials'],
    description:
      'Provides the configuration information to connect to websites that require basic user authentication.',
  })
  .openapi('BasicAuthenticationConfiguration')

const BasicAuthenticationConfigurationListSchema = z
  .array(BasicAuthenticationConfigurationSchema)
  .min(0)
  .max(10)
  .openapi('BasicAuthenticationConfigurationList')

const AuthenticationConfigurationSchema = z
  .object({
    BasicAuthentication: BasicAuthenticationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The list of configuration information that's required to connect to and crawl a website host using basic authentication credentials.</p> <p>The list includes the name and port number of the website host.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the configuration information to connect to websites that require user authentication.',
    required: [],
  })
  .openapi('AuthenticationConfiguration')

const WebCrawlerConfigurationSchema = z
  .object({
    Urls: UrlsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl.</p> <p>You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs.</p> <p>You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p>',
        }),
    ),
    CrawlDepth: CrawlDepthSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the number of levels in a website that you want to crawl.</p> <p>The first level begins from the website seed or starting point URL. For example, if a website has three levels—index level (the seed in this example), sections level, and subsections level—and you are only interested in crawling information up to the sections level (levels 0-1), you can set your depth to 1.</p> <p>The default crawl depth is set to 2.</p>',
        }),
    ).exactOptional(),
    MaxLinksPerPage: MaxLinksPerPageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of URLs on a web page to include when crawling a website. This number is per web page.</p> <p>As a website’s web pages are crawled, any URLs the web pages link to are also crawled. URLs on a web page are crawled in order of appearance.</p> <p>The default maximum links per page is 100.</p>',
        }),
    ).exactOptional(),
    MaxContentSizePerPageInMegaBytes: MaxContentSizePerPageInMegaBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum size (in MB) of a web page or attachment to crawl.</p> <p>Files larger than this size (in MB) are skipped/not crawled.</p> <p>The default maximum size of a web page or attachment is set to 50 MB.</p>',
        }),
    ).exactOptional(),
    MaxUrlsPerMinuteCrawlRate: MaxUrlsPerMinuteCrawlRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of URLs crawled per website host per minute.</p> <p>A minimum of one URL is required.</p> <p>The default maximum number of URLs crawled per website host per minute is 300.</p>',
        }),
    ).exactOptional(),
    UrlInclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain URLs to crawl. URLs that match the patterns are included in the index. URLs that don't match the patterns are excluded from the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.",
        }),
    ).exactOptional(),
    UrlExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain URLs to crawl. URLs that match the patterns are excluded from the index. URLs that don't match the patterns are included in the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.",
        }),
    ).exactOptional(),
    ProxyConfiguration: ProxyConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information required to connect to your internal websites via a web proxy.</p> <p>You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.</p> <p>Web proxy credentials are optional and you can use them to connect to a web proxy server that requires basic authentication. To store web proxy credentials, you use a secret in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a>.</p>',
        }),
    ).exactOptional(),
    AuthenticationConfiguration: AuthenticationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information required to connect to websites using authentication.</p> <p>You can connect to websites using basic authentication of user name and password. You use a secret in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a> to store your authentication credentials.</p> <p>You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Urls'],
    description: 'Provides the configuration information required for Amazon Kendra Web Crawler.',
  })
  .openapi('WebCrawlerConfiguration')

const OrganizationIdSchema = z
  .string()
  .regex(/d-[0-9a-fA-F]{10}/)
  .length(12)
  .openapi('OrganizationId')

const WorkDocsConfigurationSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the directory corresponding to your Amazon WorkDocs site repository.</p> <p>You can find the organization ID in the <a href="https://console.aws.amazon.com/directoryservicev2/">Directory Service</a> by going to <b>Active Directory</b>, then <b>Directories</b>. Your Amazon WorkDocs site directory has an ID, which is the organization ID. You can also set up a new Amazon WorkDocs directory in the Directory Service console and enable a Amazon WorkDocs site for the directory in the Amazon WorkDocs console.</p>',
        }),
    ),
    CrawlComments: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>TRUE</code> to include comments on documents in your index. Including comments in your index means each comment is a document that can be searched on.</p> <p>The default is set to <code>FALSE</code>.</p>',
        }),
    ).exactOptional(),
    UseChangeLog: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>TRUE</code> to use the Amazon WorkDocs change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Amazon WorkDocs.",
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain files in your Amazon WorkDocs site repository. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain files in your Amazon WorkDocs site repository. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map Amazon WorkDocs data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Amazon WorkDocs fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Amazon WorkDocs data source field names must exist in your Amazon WorkDocs custom metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationId'],
    description:
      '<p>Provides the configuration information to connect to Amazon WorkDocs as your data source.</p> <p>Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.</p>',
  })
  .openapi('WorkDocsConfiguration')

const FileSystemIdSchema = z
  .string()
  .regex(/^(fs-[0-9a-f]{8,})$/)
  .min(11)
  .max(21)
  .openapi('FileSystemId')

const FsxFileSystemTypeSchema = z.literal('WINDOWS').openapi('FsxFileSystemType')

const FsxConfigurationSchema = z
  .object({
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the Amazon FSx file system.</p> <p>You can find your file system ID on the file system dashboard in the Amazon FSx console. For information on how to create a file system in Amazon FSx console, using Windows File Server as an example, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/getting-started-step1.html">Amazon FSx Getting started guide</a>.</p>',
        }),
    ),
    FileSystemType: FsxFileSystemTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon FSx file system type. Windows is currently the only supported type.',
        }),
    ),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your Amazon FSx. Your Amazon FSx instance must reside inside your VPC.',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Amazon FSx file system. Windows is currently the only supported type. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>username—The Active Directory user name, along with the Domain Name System (DNS) domain name. For example, <i>user@corp.example.com</i>. The Active Directory user account must have read and mounting access to the Amazon FSx file system for Windows.</p> </li> <li> <p>password—The password of the Active Directory user account with read and mounting access to the Amazon FSx Windows file system.</p> </li> </ul>',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain files in your Amazon FSx file system. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain files in your Amazon FSx file system. Files that match the patterns are excluded from the index. Files that don't match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map Amazon FSx data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Amazon FSx fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Amazon FSx data source field names must exist in your Amazon FSx custom metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileSystemId', 'FileSystemType', 'VpcConfiguration'],
    description:
      'Provides the configuration information to connect to Amazon FSx as your data source.',
  })
  .openapi('FsxConfiguration')

const TeamIdSchema = z
  .string()
  .regex(/[A-Z0-9]*/)
  .min(1)
  .max(64)
  .openapi('TeamId')

const SlackEntitySchema = z
  .enum(['PUBLIC_CHANNEL', 'PRIVATE_CHANNEL', 'GROUP_MESSAGE', 'DIRECT_MESSAGE'])
  .openapi('SlackEntity')

const SlackEntityListSchema = z.array(SlackEntitySchema).min(1).max(4).openapi('SlackEntityList')

const SinceCrawlDateSchema = z
  .string()
  .regex(/(20\d{2})-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])/)
  .length(10)
  .openapi('SinceCrawlDate')

const LookBackPeriodSchema = z.int().min(0).max(168).openapi('LookBackPeriod')

const PrivateChannelFilterSchema = z.array(StringSchema).openapi('PrivateChannelFilter')

const PublicChannelFilterSchema = z.array(StringSchema).openapi('PublicChannelFilter')

const SlackConfigurationSchema = z
  .object({
    TeamId: TeamIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the team in the Slack workspace. For example, <i>T0123456789</i>.</p> <p>You can find your team ID in the URL of the main page of your Slack workspace. When you log in to Slack via a browser, you are directed to the URL of the main page. For example, <i>https://app.slack.com/client/<b>T0123456789</b>/...</i>.</p>',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Slack workspace team. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>slackToken—The user or bot token created in Slack. For more information on creating a token in Slack, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-slack.html#slack-authentication">Authentication for a Slack data source</a>.</p> </li> </ul>',
        }),
    ),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your Slack. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
    SlackEntityList: SlackEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify whether to index public channels, private channels, group messages, and direct messages. You can specify one or more of these options.',
        }),
    ),
    UseChangeLog: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>TRUE</code> to use the Slack change log to determine which documents require updating in the index. Depending on the Slack change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Slack.",
        }),
    ).exactOptional(),
    CrawlBotMessage: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' <code>TRUE</code> to index bot messages from your Slack workspace team.',
        }),
    ).exactOptional(),
    ExcludeArchived: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> to exclude archived messages to index from your Slack workspace team.',
        }),
    ).exactOptional(),
    SinceCrawlDate: SinceCrawlDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date to start crawling your data from your Slack workspace team. The date must follow this format: <code>yyyy-mm-dd</code>.',
        }),
    ),
    LookBackPeriod: LookBackPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of hours for change log to look back from when you last synchronized your data. You can look back up to 7 days or 168 hours.</p> <p>Change log updates your index only if new content was added since you last synced your data. Updated or deleted content from before you last synced does not get updated in your index. To capture updated or deleted content before you last synced, set the <code>LookBackPeriod</code> to the number of hours you want change log to look back.</p>',
        }),
    ).exactOptional(),
    PrivateChannelFilter: PrivateChannelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of private channel names from your Slack workspace team. You use this if you want to index specific private channels, not all private channels. You can also use regular expression patterns to filter private channels.',
        }),
    ).exactOptional(),
    PublicChannelFilter: PublicChannelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of public channel names to index from your Slack workspace team. You use this if you want to index specific public channels, not all public channels. You can also use regular expression patterns to filter public channels.',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain attached files in your Slack workspace team. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain attached files in your Slack workspace team. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    FieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map Slack data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Slack fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Slack data source field names must exist in your Slack custom metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TeamId', 'SecretArn', 'SlackEntityList', 'SinceCrawlDate'],
    description: 'Provides the configuration information to connect to Slack as your data source.',
  })
  .openapi('SlackConfiguration')

const EnterpriseIdSchema = z
  .string()
  .regex(/^[A-Z0-9]*$/)
  .min(1)
  .max(64)
  .openapi('EnterpriseId')

const BoxConfigurationSchema = z
  .object({
    EnterpriseId: EnterpriseIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Box Enterprise platform. You can find the enterprise ID in the Box Developer Console settings or when you create an app in Box and download your authentication credentials. For example, <i>801234567</i>.',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Box platform. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>clientID—The identifier of the client OAuth 2.0 authentication application created in Box.</p> </li> <li> <p>clientSecret—A set of characters known only to the OAuth 2.0 authentication application created in Box.</p> </li> <li> <p>publicKeyId—The identifier of the public key contained within an identity certificate.</p> </li> <li> <p>privateKey—A set of characters that make up an encryption key.</p> </li> <li> <p>passphrase—A set of characters that act like a password.</p> </li> </ul> <p>You create an application in Box to generate the keys or credentials required for the secret. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-box.html">Using a Box data source</a>.</p>',
        }),
    ),
    UseChangeLog: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>TRUE</code> to use the Slack change log to determine which documents require updating in the index. Depending on the data source change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents.",
        }),
    ).exactOptional(),
    CrawlComments: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index comments.' }),
    ).exactOptional(),
    CrawlTasks: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index the contents of tasks.' }),
    ).exactOptional(),
    CrawlWebLinks: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index web links.' }),
    ).exactOptional(),
    FileFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Box files to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Box fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Box field names must exist in your Box custom metadata.',
        }),
    ).exactOptional(),
    TaskFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Box tasks to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Box fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Box field names must exist in your Box custom metadata.',
        }),
    ).exactOptional(),
    CommentFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Box comments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Box fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Box field names must exist in your Box custom metadata.',
        }),
    ).exactOptional(),
    WebLinkFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Box web links to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Box fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Box field names must exist in your Box custom metadata.',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain files and folders in your Box platform. Files and folders that match the patterns are included in the index. Files and folders that don't match the patterns are excluded from the index. If a file or folder matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file or folder isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain files and folders from your Box platform. Files and folders that match the patterns are excluded from the index.Files and folders that don't match the patterns are included in the index. If a file or folder matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file or folder isn't included in the index.",
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon VPC to connect to your Box. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EnterpriseId', 'SecretArn'],
    description: 'Provides the configuration information to connect to Box as your data source.',
  })
  .openapi('BoxConfiguration')

const DomainSchema = z
  .string()
  .regex(/^(?!-)[A-Za-z0-9-].*(?<!-)$/)
  .min(1)
  .max(63)
  .openapi('Domain')

const FolderIdSchema = z.string().min(1).max(500).openapi('FolderId')

const FolderIdListSchema = z.array(FolderIdSchema).openapi('FolderIdList')

const QuipConfigurationSchema = z
  .object({
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Quip site domain. For example, <i>https://quip-company.quipdomain.com/browse</i>. The domain in this example is "quipdomain".',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs that are required to connect to your Quip. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>accessToken—The token created in Quip. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-slack.html">Using a Quip data source</a>.</p> </li> </ul>',
        }),
    ),
    CrawlFileComments: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index file comments.' }),
    ).exactOptional(),
    CrawlChatRooms: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index the contents of chat rooms.' }),
    ).exactOptional(),
    CrawlAttachments: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index attachments.' }),
    ).exactOptional(),
    FolderIds: FolderIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the Quip folders you want to index. You can find the folder ID in your browser URL when you access your folder in Quip. For example, <i>https://quip-company.quipdomain.com/zlLuOVNSarTL/folder-name</i>. The folder ID in this example is "zlLuOVNSarTL".',
        }),
    ).exactOptional(),
    ThreadFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Quip threads to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Quip fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Quip field names must exist in your Quip custom metadata.',
        }),
    ).exactOptional(),
    MessageFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Quip messages to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Quip fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Quip field names must exist in your Quip custom metadata.',
        }),
    ).exactOptional(),
    AttachmentFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Quip attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Quip fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Quip field names must exist in your Quip custom metadata.',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain files in your Quip file system. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence, and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain files in your Quip file system. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence, and the file isn't included in the index.",
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud (VPC) to connect to your Quip. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Domain', 'SecretArn'],
    description: 'Provides the configuration information to connect to Quip as your data source.',
  })
  .openapi('QuipConfiguration')

const JiraAccountUrlSchema = z
  .string()
  .regex(/^https:\/\/[a-zA-Z0-9_\-\.]+(\.atlassian\.net\/)$/)
  .min(1)
  .max(2048)
  .openapi('JiraAccountUrl')

const ProjectSchema = z.array(StringSchema).openapi('Project')

const IssueTypeSchema = z.array(StringSchema).openapi('IssueType')

const JiraStatusSchema = z.array(StringSchema).openapi('JiraStatus')

const IssueSubEntitySchema = z
  .enum(['COMMENTS', 'ATTACHMENTS', 'WORKLOGS'])
  .openapi('IssueSubEntity')

const IssueSubEntityFilterSchema = z
  .array(IssueSubEntitySchema)
  .min(0)
  .max(3)
  .openapi('IssueSubEntityFilter')

const JiraConfigurationSchema = z
  .object({
    JiraAccountUrl: JiraAccountUrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL of the Jira account. For example, <i>company.atlassian.net</i>.',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of a secret in Secrets Manager contains the key-value pairs required to connect to your Jira data source. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>jiraId—The Jira user name or email.</p> </li> <li> <p>jiraCredentials—The Jira API token. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-jira.html">Using a Jira data source</a>.</p> </li> </ul>',
        }),
    ),
    UseChangeLog: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>TRUE</code> to use the Jira change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Jira.",
        }),
    ).exactOptional(),
    Project: ProjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify which projects to crawl in your Jira data source. You can specify one or more Jira project IDs.',
        }),
    ).exactOptional(),
    IssueType: IssueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify which issue types to crawl in your Jira data source. You can specify one or more of these options to crawl.',
        }),
    ).exactOptional(),
    Status: JiraStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify which statuses to crawl in your Jira data source. You can specify one or more of these options to crawl.',
        }),
    ).exactOptional(),
    IssueSubEntityFilter: IssueSubEntityFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify whether to crawl comments, attachments, and work logs. You can specify one or more of these options.',
        }),
    ).exactOptional(),
    AttachmentFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Jira attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Jira data source field names must exist in your Jira custom metadata.',
        }),
    ).exactOptional(),
    CommentFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Jira comments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Jira data source field names must exist in your Jira custom metadata.',
        }),
    ).exactOptional(),
    IssueFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Jira issues to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Jira data source field names must exist in your Jira custom metadata.',
        }),
    ).exactOptional(),
    ProjectFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Jira projects to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Jira data source field names must exist in your Jira custom metadata.',
        }),
    ).exactOptional(),
    WorkLogFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Jira work logs to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Jira data source field names must exist in your Jira custom metadata.',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain file paths, file names, and file types in your Jira data source. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain file paths, file names, and file types in your Jira data source. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your Jira. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['JiraAccountUrl', 'SecretArn'],
    description: 'Provides the configuration information to connect to Jira as your data source.',
  })
  .openapi('JiraConfiguration')

const OrganizationNameSchema = z
  .string()
  .regex(/^[A-Za-z0-9_.-]+$/)
  .min(1)
  .max(60)
  .openapi('OrganizationName')

const SaaSConfigurationSchema = z
  .object({
    OrganizationName: OrganizationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the organization of the GitHub Enterprise Cloud (SaaS) account you want to connect to. You can find your organization name by logging into GitHub desktop and selecting <b>Your organizations</b> under your profile picture dropdown.',
        }),
    ),
    HostUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The GitHub host URL or API endpoint URL. For example, <i>https://api.github.com</i>.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationName', 'HostUrl'],
    description:
      'Provides the configuration information to connect to GitHub Enterprise Cloud (SaaS).',
  })
  .openapi('SaaSConfiguration')

const OnPremiseConfigurationSchema = z
  .object({
    HostUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The GitHub host URL or API endpoint URL. For example, <i>https://on-prem-host-url/api/v3/</i> ',
        }),
    ),
    OrganizationName: OrganizationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the organization of the GitHub Enterprise Server (in-premise) account you want to connect to. You can find your organization name by logging into GitHub desktop and selecting <b>Your organizations</b> under your profile picture dropdown.',
        }),
    ),
    SslCertificateS3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path to the SSL certificate stored in an Amazon S3 bucket. You use this to connect to GitHub if you require a secure SSL connection.</p> <p>You can simply generate a self-signed X509 certificate on any computer using OpenSSL. For an example of using OpenSSL to create an X509 certificate, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-ssl.html">Create and sign an X509 certificate</a>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['HostUrl', 'OrganizationName', 'SslCertificateS3Path'],
    description:
      'Provides the configuration information to connect to GitHub Enterprise Server (on premises).',
  })
  .openapi('OnPremiseConfiguration')

const TypeSchema = z.enum(['SAAS', 'ON_PREMISE']).openapi('Type')

const GitHubDocumentCrawlPropertiesSchema = z
  .object({
    CrawlRepositoryDocuments: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index all files with a repository.' }),
    ).exactOptional(),
    CrawlIssue: BooleanSchema.and(
      z
        .any()
        .openapi({ description: ' <code>TRUE</code> to index all issues within a repository.' }),
    ).exactOptional(),
    CrawlIssueComment: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index all comments on issues.' }),
    ).exactOptional(),
    CrawlIssueCommentAttachment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' <code>TRUE</code> to include all comment attachments for issues.',
        }),
    ).exactOptional(),
    CrawlPullRequest: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' <code>TRUE</code> to index all pull requests within a repository.',
        }),
    ).exactOptional(),
    CrawlPullRequestComment: BooleanSchema.and(
      z
        .any()
        .openapi({ description: ' <code>TRUE</code> to index all comments on pull requests.' }),
    ).exactOptional(),
    CrawlPullRequestCommentAttachment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' <code>TRUE</code> to include all comment attachments for pull requests.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the configuration information to include certain types of GitHub content. You can configure to index repository files only, or also include issues and pull requests, comments, and comment attachments.',
    required: [],
  })
  .openapi('GitHubDocumentCrawlProperties')

const RepositoryNameSchema = z
  .string()
  .regex(/^[A-Za-z0-9_.-]+$/)
  .min(1)
  .max(64)
  .openapi('RepositoryName')

const RepositoryNamesSchema = z.array(RepositoryNameSchema).openapi('RepositoryNames')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const GitHubConfigurationSchema = z
  .object({
    SaaSConfiguration: SaaSConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration information to connect to GitHub Enterprise Cloud (SaaS).',
        }),
    ).exactOptional(),
    OnPremiseConfiguration: OnPremiseConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information to connect to GitHub Enterprise Server (on premises).',
        }),
    ).exactOptional(),
    Type: TypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of GitHub service you want to connect to—GitHub Enterprise Cloud (SaaS) or GitHub Enterprise Server (on premises).',
        }),
    ).exactOptional(),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your GitHub. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>personalToken—The access token created in GitHub. For more information on creating a token in GitHub, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-github.html">Using a GitHub data source</a>.</p> </li> </ul>',
        }),
    ),
    UseChangeLog: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>TRUE</code> to use the GitHub change log to determine which documents require updating in the index. Depending on the GitHub change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in GitHub.",
        }),
    ).exactOptional(),
    GitHubDocumentCrawlProperties: GitHubDocumentCrawlPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information to include certain types of GitHub content. You can configure to index repository files only, or also include issues and pull requests, comments, and comment attachments.',
        }),
    ).exactOptional(),
    RepositoryFilter: RepositoryNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of names of the specific repositories you want to index.',
        }),
    ).exactOptional(),
    InclusionFolderNamePatterns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain folder names in your GitHub repository or repositories. Folder names that match the patterns are included in the index. Folder names that don't match the patterns are excluded from the index. If a folder matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the folder isn't included in the index.",
        }),
    ).exactOptional(),
    InclusionFileTypePatterns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain file types in your GitHub repository or repositories. File types that match the patterns are included in the index. File types that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    InclusionFileNamePatterns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain file names in your GitHub repository or repositories. File names that match the patterns are included in the index. File names that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionFolderNamePatterns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain folder names in your GitHub repository or repositories. Folder names that match the patterns are excluded from the index. Folder names that don't match the patterns are included in the index. If a folder matches both an exclusion and inclusion pattern, the exclusion pattern takes precedence and the folder isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionFileTypePatterns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain file types in your GitHub repository or repositories. File types that match the patterns are excluded from the index. File types that don't match the patterns are included in the index. If a file matches both an exclusion and inclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionFileNamePatterns: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain file names in your GitHub repository or repositories. File names that match the patterns are excluded from the index. File names that don't match the patterns are included in the index. If a file matches both an exclusion and inclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information of an Amazon Virtual Private Cloud to connect to your GitHub. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
    GitHubRepositoryConfigurationFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map GitHub repository attributes or field names to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
        }),
    ).exactOptional(),
    GitHubCommitConfigurationFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of GitHub commits to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
        }),
    ).exactOptional(),
    GitHubIssueDocumentConfigurationFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of GitHub issues to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
        }),
    ).exactOptional(),
    GitHubIssueCommentConfigurationFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of GitHub issue comments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
        }),
    ).exactOptional(),
    GitHubIssueAttachmentConfigurationFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of GitHub issue attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
        }),
    ).exactOptional(),
    GitHubPullRequestCommentConfigurationFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of GitHub pull request comments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
        }),
    ).exactOptional(),
    GitHubPullRequestDocumentConfigurationFieldMappings:
      DataSourceToIndexFieldMappingListSchema.and(
        z
          .any()
          .openapi({
            description:
              'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of GitHub pull requests to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
          }),
      ).exactOptional(),
    GitHubPullRequestDocumentAttachmentConfigurationFieldMappings:
      DataSourceToIndexFieldMappingListSchema.and(
        z
          .any()
          .openapi({
            description:
              'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of GitHub pull request attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist in your GitHub custom metadata.',
          }),
      ).exactOptional(),
  })
  .openapi({
    required: ['SecretArn'],
    description: 'Provides the configuration information to connect to GitHub as your data source.',
  })
  .openapi('GitHubConfiguration')

const SiteUrlSchema = z
  .string()
  .regex(/^https:\/\/[a-zA-Z0-9_\-\.]+$/)
  .min(1)
  .max(2048)
  .openapi('SiteUrl')

const SiteIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('SiteId')

const AlfrescoEntitySchema = z.enum(['wiki', 'blog', 'documentLibrary']).openapi('AlfrescoEntity')

const EntityFilterSchema = z.array(AlfrescoEntitySchema).min(1).max(3).openapi('EntityFilter')

const AlfrescoConfigurationSchema = z
  .object({
    SiteUrl: SiteUrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL of the Alfresco site. For example, <i>https://hostname:8080</i>.',
        }),
    ),
    SiteId: SiteIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the Alfresco site. For example, <i>my-site</i>.',
        }),
    ),
    SecretArn: SecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Alfresco data source. The secret must contain a JSON structure with the following keys:</p> <ul> <li> <p>username—The user name of the Alfresco account.</p> </li> <li> <p>password—The password of the Alfresco account.</p> </li> </ul>',
        }),
    ),
    SslCertificateS3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path to the SSL certificate stored in an Amazon S3 bucket. You use this to connect to Alfresco if you require a secure SSL connection.</p> <p>You can simply generate a self-signed X509 certificate on any computer using OpenSSL. For an example of using OpenSSL to create an X509 certificate, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-ssl.html">Create and sign an X509 certificate</a>.</p>',
        }),
    ),
    CrawlSystemFolders: BooleanSchema.and(
      z.any().openapi({ description: ' <code>TRUE</code> to index shared files.' }),
    ).exactOptional(),
    CrawlComments: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' <code>TRUE</code> to index comments of blogs and other content.',
        }),
    ).exactOptional(),
    EntityFilter: EntityFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify whether to index document libraries, wikis, or blogs. You can specify one or more of these options.',
        }),
    ).exactOptional(),
    DocumentLibraryFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Alfresco document libraries to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Alfresco fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Alfresco data source field names must exist in your Alfresco custom metadata.',
        }),
    ).exactOptional(),
    BlogFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Alfresco blogs to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Alfresco fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Alfresco data source field names must exist in your Alfresco custom metadata.',
        }),
    ).exactOptional(),
    WikiFieldMappings: DataSourceToIndexFieldMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or field names of Alfresco wikis to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Alfresco fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The Alfresco data source field names must exist in your Alfresco custom metadata.',
        }),
    ).exactOptional(),
    InclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to include certain files in your Alfresco data source. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    ExclusionPatterns: DataSourceInclusionsExclusionsStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of regular expression patterns to exclude certain files in your Alfresco data source. Files that match the patterns are excluded from the index. Files that don't match the patterns are included in the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.",
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your Alfresco. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SiteUrl', 'SiteId', 'SecretArn', 'SslCertificateS3Path'],
    description:
      '<p>Provides the configuration information to connect to Alfresco as your data source.</p> <note> <p>Alfresco data source connector is currently in preview mode. Basic authentication is currently supported. If you would like to use Alfresco connector in production, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p> </note>',
  })
  .openapi('AlfrescoConfiguration')

const TemplateSchema = z
  .object({})
  .openapi({
    description:
      '<p>The template schema used for the data source, where templates schemas are supported.</p> <p>See <a href="https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html">Data source template schemas</a>.</p>',
  })
  .openapi('Template')

const TemplateConfigurationSchema = z
  .object({
    Template: TemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The template schema used for the data source, where templates schemas are supported.</p> <p>See <a href="https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html">Data source template schemas</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a template for the configuration information to connect to your data source.',
    required: [],
  })
  .openapi('TemplateConfiguration')

type DataSourceConfigurationType = {
  S3Configuration?: z.infer<typeof S3DataSourceConfigurationSchema> & { [key: string]: unknown }
  SharePointConfiguration?: z.infer<typeof SharePointConfigurationSchema> & {
    [key: string]: unknown
  }
  DatabaseConfiguration?: z.infer<typeof DatabaseConfigurationSchema> & { [key: string]: unknown }
  SalesforceConfiguration?: z.infer<typeof SalesforceConfigurationSchema> & {
    [key: string]: unknown
  }
  OneDriveConfiguration?: z.infer<typeof OneDriveConfigurationSchema> & { [key: string]: unknown }
  ServiceNowConfiguration?: z.infer<typeof ServiceNowConfigurationSchema> & {
    [key: string]: unknown
  }
  ConfluenceConfiguration?: z.infer<typeof ConfluenceConfigurationSchema> & {
    [key: string]: unknown
  }
  GoogleDriveConfiguration?: z.infer<typeof GoogleDriveConfigurationSchema> & {
    [key: string]: unknown
  }
  WebCrawlerConfiguration?: z.infer<typeof WebCrawlerConfigurationSchema>
  WorkDocsConfiguration?: z.infer<typeof WorkDocsConfigurationSchema> & { [key: string]: unknown }
  FsxConfiguration?: z.infer<typeof FsxConfigurationSchema> & { [key: string]: unknown }
  SlackConfiguration?: z.infer<typeof SlackConfigurationSchema> & { [key: string]: unknown }
  BoxConfiguration?: z.infer<typeof BoxConfigurationSchema> & { [key: string]: unknown }
  QuipConfiguration?: z.infer<typeof QuipConfigurationSchema> & { [key: string]: unknown }
  JiraConfiguration?: z.infer<typeof JiraConfigurationSchema> & { [key: string]: unknown }
  GitHubConfiguration?: z.infer<typeof GitHubConfigurationSchema> & { [key: string]: unknown }
  AlfrescoConfiguration?: z.infer<typeof AlfrescoConfigurationSchema> & { [key: string]: unknown }
  TemplateConfiguration?: z.infer<typeof TemplateConfigurationSchema> & { [key: string]: unknown }
}

const FacetResultSchema: z.ZodType<FacetResultType> = z
  .lazy(() =>
    z
      .object({
        DocumentAttributeKey: DocumentAttributeKeySchema.and(
          z
            .any()
            .openapi({
              description:
                'The key for the facet values. This is the same as the <code>DocumentAttributeKey</code> provided in the query.',
            }),
        ).exactOptional(),
        DocumentAttributeValueType: DocumentAttributeValueTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'The data type of the facet value. This is the same as the type defined for the index field when it was created.',
            }),
        ).exactOptional(),
        DocumentAttributeValueCountPairs: DocumentAttributeValueCountPairListSchema.and(
          z
            .any()
            .openapi({
              description:
                'An array of key/value pairs, where the key is the value of the attribute and the count is the number of documents that share the key value.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'The facet values for the documents in the response.',
        required: [],
      }),
  )
  .openapi('FacetResult')

type FacetResultListType = z.infer<typeof FacetResultSchema>[]

const IntegerSchema: z.ZodType<IntegerType> = z.int().openapi('Integer')

const FacetResultListSchema: z.ZodType<FacetResultListType> = z
  .lazy(() => z.array(FacetResultSchema))
  .openapi('FacetResultList')

type DocumentAttributeValueCountPairType = {
  DocumentAttributeValue?: z.infer<typeof DocumentAttributeValueSchema> & { [key: string]: unknown }
  Count?: z.infer<typeof IntegerSchema> & { [key: string]: unknown }
  FacetResults?: z.infer<typeof FacetResultListSchema> & { [key: string]: unknown }
}

const DocumentAttributeValueCountPairSchema: z.ZodType<DocumentAttributeValueCountPairType> = z
  .lazy(() =>
    z
      .object({
        DocumentAttributeValue: DocumentAttributeValueSchema.and(
          z.any().openapi({ description: 'The value of the attribute. For example, "HR".' }),
        ).exactOptional(),
        Count: IntegerSchema.and(
          z
            .any()
            .openapi({
              description:
                'The number of documents in the response that have the attribute value for the key.',
            }),
        ).exactOptional(),
        FacetResults: FacetResultListSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Contains the results of a document attribute that is a nested facet. A <code>FacetResult</code> contains the counts for each facet nested within a facet.</p> <p>For example, the document attribute or facet "Department" includes a value called "Engineering". In addition, the document attribute or facet "SubDepartment" includes the values "Frontend" and "Backend" for documents assigned to "Engineering". You can display nested facets in the search results so that documents can be searched not only by department but also by a sub department within a department. The counts for documents that belong to "Frontend" and "Backend" within "Engineering" are returned for a query.</p> <p/> <p/>',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Provides the count of documents that match a particular attribute when doing a faceted search.',
        required: [],
      }),
  )
  .openapi('DocumentAttributeValueCountPair')

type DocumentAttributeValueCountPairListType = z.infer<
  typeof DocumentAttributeValueCountPairSchema
>[]

type DocumentAttributeValueTypeType =
  | 'STRING_VALUE'
  | 'STRING_LIST_VALUE'
  | 'LONG_VALUE'
  | 'DATE_VALUE'

const DocumentIdSchema = z.string().min(1).max(2048).openapi('DocumentId')

const DocumentStatusSchema = z
  .enum(['NOT_FOUND', 'PROCESSING', 'INDEXED', 'UPDATED', 'FAILED', 'UPDATE_FAILED'])
  .openapi('DocumentStatus')

type StatusType = {
  DocumentId?: z.infer<typeof DocumentIdSchema> & { [key: string]: unknown }
  DocumentStatus?: z.infer<typeof DocumentStatusSchema> & { [key: string]: unknown }
  FailureCode?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  FailureReason?: z.infer<typeof StringSchema> & { [key: string]: unknown }
}

const FacetSchema: z.ZodType<FacetType> = z
  .lazy(() =>
    z
      .object({
        DocumentAttributeKey: DocumentAttributeKeySchema.and(
          z.any().openapi({ description: 'The unique key for the document attribute.' }),
        ).exactOptional(),
        Facets: FacetListSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An array of document attributes that are nested facets within a facet.</p> <p>For example, the document attribute or facet "Department" includes a value called "Engineering". In addition, the document attribute or facet "SubDepartment" includes the values "Frontend" and "Backend" for documents assigned to "Engineering". You can display nested facets in the search results so that documents can be searched not only by department but also by a sub department within a department. This helps your users further narrow their search.</p> <p>You can only have one nested facet within a facet. If you want to increase this limit, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>',
            }),
        ).exactOptional(),
        MaxResults: TopDocumentAttributeValueCountPairsSizeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Maximum number of facet values per facet. The default is 10. You can use this to limit the number of facet values to less than 10. If you want to increase the default, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>Information about a document attribute. You can use document attributes as facets.</p> <p>For example, the document attribute or facet "Department" includes the values "HR", "Engineering", and "Accounting". You can display these values in the search results so that documents can be searched by department.</p> <p>You can display up to 10 facet values per facet for a query. If you want to increase this limit, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>',
        required: [],
      }),
  )
  .openapi('Facet')

type FacetListType = z.infer<typeof FacetSchema>[]

type TopDocumentAttributeValueCountPairsSizeType = number

const FacetListSchema: z.ZodType<FacetListType> = z
  .lazy(() => z.array(FacetSchema))
  .openapi('FacetList')

const TopDocumentAttributeValueCountPairsSizeSchema: z.ZodType<TopDocumentAttributeValueCountPairsSizeType> =
  z.int().min(0).max(5000).openapi('TopDocumentAttributeValueCountPairsSize')

type FacetType = {
  DocumentAttributeKey?: z.infer<typeof DocumentAttributeKeySchema> & { [key: string]: unknown }
  Facets?: z.infer<typeof FacetListSchema> & { [key: string]: unknown }
  MaxResults?: z.infer<typeof TopDocumentAttributeValueCountPairsSizeSchema> & {
    [key: string]: unknown
  }
}

const DocumentAttributeValueTypeSchema: z.ZodType<DocumentAttributeValueTypeType> = z
  .enum(['STRING_VALUE', 'STRING_LIST_VALUE', 'LONG_VALUE', 'DATE_VALUE'])
  .openapi('DocumentAttributeValueType')

const DocumentAttributeValueCountPairListSchema: z.ZodType<DocumentAttributeValueCountPairListType> =
  z
    .lazy(() => z.array(DocumentAttributeValueCountPairSchema))
    .openapi('DocumentAttributeValueCountPairList')

type FacetResultType = {
  DocumentAttributeKey?: z.infer<typeof DocumentAttributeKeySchema> & { [key: string]: unknown }
  DocumentAttributeValueType?: z.infer<typeof DocumentAttributeValueTypeSchema> & {
    [key: string]: unknown
  }
  DocumentAttributeValueCountPairs?: z.infer<typeof DocumentAttributeValueCountPairListSchema> & {
    [key: string]: unknown
  }
}

const EntityIdSchema = z
  .string()
  .regex(
    /^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/,
  )
  .min(1)
  .max(47)
  .openapi('EntityId')

const ErrorMessageSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(2048)
  .openapi('ErrorMessage')

const FailedEntitySchema = z
  .object({
    EntityId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the user or group in your IAM Identity Center identity source. For example, a user ID could be an email.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason the user or group in your IAM Identity Center identity source failed to properly configure with your Amazon Kendra experience.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information on the users or groups in your IAM Identity Center identity source that failed to properly configure with your Amazon Kendra experience.',
    required: [],
  })
  .openapi('FailedEntity')

const AssociateEntitiesToExperienceFailedEntityListSchema = z
  .array(FailedEntitySchema)
  .min(1)
  .max(20)
  .openapi('AssociateEntitiesToExperienceFailedEntityList')

const AssociateEntitiesToExperienceResponseSchema = z
  .object({
    FailedEntityList: AssociateEntitiesToExperienceFailedEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the users or groups in your IAM Identity Center identity source that failed to properly configure with your Amazon Kendra experience.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateEntitiesToExperienceResponse')

const EntityTypeSchema = z.enum(['USER', 'GROUP']).openapi('EntityType')

const EntityConfigurationSchema = z
  .object({
    EntityId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of a user or group in your IAM Identity Center identity source. For example, a user ID could be an email.',
        }),
    ),
    EntityType: EntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether you are configuring a <code>User</code> or a <code>Group</code>.',
        }),
    ),
  })
  .openapi({
    required: ['EntityId', 'EntityType'],
    description:
      'Provides the configuration information for users or groups in your IAM Identity Center identity source to grant access your Amazon Kendra experience.',
  })
  .openapi('EntityConfiguration')

const AssociateEntityListSchema = z
  .array(EntityConfigurationSchema)
  .min(1)
  .max(20)
  .openapi('AssociateEntityList')

const AssociateEntitiesToExperienceRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
    EntityList: AssociateEntityListSchema.and(
      z
        .any()
        .openapi({
          description: 'Lists users or groups in your IAM Identity Center identity source.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'IndexId', 'EntityList'],
    title: 'AssociateEntitiesToExperienceRequest',
  })
  .openapi('AssociateEntitiesToExperienceRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceAlreadyExistExceptionSchema = z.any().openapi('ResourceAlreadyExistException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const FailedEntityListSchema = z
  .array(FailedEntitySchema)
  .min(1)
  .max(25)
  .openapi('FailedEntityList')

const AssociatePersonasToEntitiesResponseSchema = z
  .object({
    FailedEntityList: FailedEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the users or groups in your IAM Identity Center identity source that failed to properly configure with your Amazon Kendra experience.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociatePersonasToEntitiesResponse')

const PersonaSchema = z.enum(['OWNER', 'VIEWER']).openapi('Persona')

const EntityPersonaConfigurationSchema = z
  .object({
    EntityId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of a user or group in your IAM Identity Center identity source. For example, a user ID could be an email.',
        }),
    ),
    Persona: PersonaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The persona that defines the specific permissions of the user or group in your IAM Identity Center identity source. The available personas or access roles are <code>Owner</code> and <code>Viewer</code>. For more information on these personas, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html#access-search-experience">Providing access to your search page</a>.',
        }),
    ),
  })
  .openapi({
    required: ['EntityId', 'Persona'],
    description:
      'Provides the configuration information for users or groups in your IAM Identity Center identity source for access to your Amazon Kendra experience. Specific permissions are defined for each user or group once they are granted access to your Amazon Kendra experience.',
  })
  .openapi('EntityPersonaConfiguration')

const EntityPersonaConfigurationListSchema = z
  .array(EntityPersonaConfigurationSchema)
  .min(1)
  .max(25)
  .openapi('EntityPersonaConfigurationList')

const AssociatePersonasToEntitiesRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
    Personas: EntityPersonaConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The personas that define the specific permissions of users or groups in your IAM Identity Center identity source. The available personas or access roles are <code>Owner</code> and <code>Viewer</code>. For more information on these personas, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html#access-search-experience">Providing access to your search page</a>.',
        }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId', 'Personas'], title: 'AssociatePersonasToEntitiesRequest' })
  .openapi('AssociatePersonasToEntitiesRequest')

const ErrorCodeSchema = z.enum(['InternalError', 'InvalidRequest']).openapi('ErrorCode')

const BatchDeleteDocumentResponseFailedDocumentSchema = z
  .object({
    Id: DocumentIdSchema.and(
      z
        .any()
        .openapi({
          description: "The identifier of the document that couldn't be removed from the index.",
        }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description: "The error code for why the document couldn't be removed from the index.",
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: "An explanation for why the document couldn't be removed from the index.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about documents that could not be removed from an index by the <code>BatchDeleteDocument</code> API.',
    required: [],
  })
  .openapi('BatchDeleteDocumentResponseFailedDocument')

const BatchDeleteDocumentResponseFailedDocumentsSchema = z
  .array(BatchDeleteDocumentResponseFailedDocumentSchema)
  .openapi('BatchDeleteDocumentResponseFailedDocuments')

const BatchDeleteDocumentResponseSchema = z
  .object({
    FailedDocuments: BatchDeleteDocumentResponseFailedDocumentsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of documents that could not be removed from the index. Each entry contains an error message that indicates why the document couldn't be removed from the index.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteDocumentResponse')

const DocumentIdListSchema = z.array(DocumentIdSchema).min(1).max(10).openapi('DocumentIdList')

const DataSourceSyncJobIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(100)
  .openapi('DataSourceSyncJobId')

const DataSourceSyncJobMetricTargetSchema = z
  .object({
    DataSourceId: DataSourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the data source that is running the sync job.' }),
    ),
    DataSourceSyncJobId: DataSourceSyncJobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the sync job that is running on the data source.</p> <p>If the ID of a sync job is not provided and there is a sync job running, then the ID of this sync job is used and metrics are generated for this sync job.</p> <p>If the ID of a sync job is not provided and there is no sync job running, then no metrics are generated and documents are indexed/deleted at the index level without sync job metrics included.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataSourceId'],
    description: 'Maps a particular data source sync job to a particular data source.',
  })
  .openapi('DataSourceSyncJobMetricTarget')

const BatchDeleteDocumentRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index that contains the documents to delete.',
        }),
    ),
    DocumentIdList: DocumentIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more identifiers for documents to delete from the index.',
        }),
    ),
    DataSourceSyncJobMetricTarget: DataSourceSyncJobMetricTargetSchema.exactOptional(),
  })
  .openapi({ required: ['IndexId', 'DocumentIdList'], title: 'BatchDeleteDocumentRequest' })
  .openapi('BatchDeleteDocumentRequest')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const FeaturedResultsSetIdSchema = z
  .string()
  .regex(/^[a-zA-Z-0-9]*/)
  .length(36)
  .openapi('FeaturedResultsSetId')

const BatchDeleteFeaturedResultsSetErrorSchema = z
  .object({
    Id: FeaturedResultsSetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the set of featured results that couldn't be removed from the index.",
        }),
    ),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The error code for why the set of featured results couldn't be removed from the index.",
        }),
    ),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            "An explanation for why the set of featured results couldn't be removed from the index.",
        }),
    ),
  })
  .openapi({
    required: ['Id', 'ErrorCode', 'ErrorMessage'],
    description:
      'Provides information about a set of featured results that couldn\'t be removed from an index by the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteFeaturedResultsSet.html">BatchDeleteFeaturedResultsSet</a> API.',
  })
  .openapi('BatchDeleteFeaturedResultsSetError')

const BatchDeleteFeaturedResultsSetErrorsSchema = z
  .array(BatchDeleteFeaturedResultsSetErrorSchema)
  .openapi('BatchDeleteFeaturedResultsSetErrors')

const BatchDeleteFeaturedResultsSetResponseSchema = z
  .object({
    Errors: BatchDeleteFeaturedResultsSetErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of errors for the featured results set IDs, explaining why they couldn't be removed from the index.",
        }),
    ),
  })
  .openapi({ required: ['Errors'] })
  .openapi('BatchDeleteFeaturedResultsSetResponse')

const FeaturedResultsSetIdListSchema = z
  .array(FeaturedResultsSetIdSchema)
  .min(1)
  .max(50)
  .openapi('FeaturedResultsSetIdList')

const BatchDeleteFeaturedResultsSetRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index used for featuring results.' }),
    ),
    FeaturedResultsSetIds: FeaturedResultsSetIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifiers of the featured results sets that you want to delete.',
        }),
    ),
  })
  .openapi({
    required: ['IndexId', 'FeaturedResultsSetIds'],
    title: 'BatchDeleteFeaturedResultsSetRequest',
  })
  .openapi('BatchDeleteFeaturedResultsSetRequest')

const BatchGetDocumentStatusResponseErrorSchema = z
  .object({
    DocumentId: DocumentIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the document whose status could not be retrieved.',
        }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'Indicates the source of the error.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'States that the API could not get the status of a document. This could be because the request is not valid or there is a system error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides a response when the status of a document could not be retrieved.',
    required: [],
  })
  .openapi('BatchGetDocumentStatusResponseError')

const BatchGetDocumentStatusResponseErrorsSchema = z
  .array(BatchGetDocumentStatusResponseErrorSchema)
  .openapi('BatchGetDocumentStatusResponseErrors')

const StatusSchema: z.ZodType<StatusType> = z
  .lazy(() =>
    z
      .object({
        DocumentId: DocumentIdSchema.and(
          z.any().openapi({ description: 'The identifier of the document.' }),
        ).exactOptional(),
        DocumentStatus: DocumentStatusSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The current status of a document.</p> <p>If the document was submitted for deletion, the status is <code>NOT_FOUND</code> after the document is deleted.</p>',
            }),
        ).exactOptional(),
        FailureCode: StringSchema.and(
          z.any().openapi({ description: 'Indicates the source of the error.' }),
        ).exactOptional(),
        FailureReason: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                "Provides detailed information about why the document couldn't be indexed. Use this information to correct the error before you resubmit the document for indexing.",
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Provides information about the status of documents submitted for indexing.',
        required: [],
      }),
  )
  .openapi('Status')

const DocumentStatusListSchema = z.array(StatusSchema).openapi('DocumentStatusList')

const BatchGetDocumentStatusResponseSchema = z
  .object({
    Errors: BatchGetDocumentStatusResponseErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of documents that Amazon Kendra couldn't get the status for. The list includes the ID of the document and the reason that the status couldn't be found.",
        }),
    ).exactOptional(),
    DocumentStatusList: DocumentStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of documents. The status indicates if the document is waiting to be indexed, is in the process of indexing, has completed indexing, or failed indexing. If a document failed indexing, the status provides the reason why.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetDocumentStatusResponse')

const DocumentAttributeListSchema = z
  .array(DocumentAttributeSchema)
  .openapi('DocumentAttributeList')

const DocumentInfoSchema = z
  .object({
    DocumentId: DocumentIdSchema.and(
      z.any().openapi({ description: 'The identifier of the document.' }),
    ),
    Attributes: DocumentAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Attributes that identify a specific version of a document to check.</p> <p>The only valid attributes are:</p> <ul> <li> <p>version</p> </li> <li> <p>datasourceId</p> </li> <li> <p>jobExecutionId</p> </li> </ul> <p>The attributes follow these rules:</p> <ul> <li> <p> <code>dataSourceId</code> and <code>jobExecutionId</code> must be used together.</p> </li> <li> <p> <code>version</code> is ignored if <code>dataSourceId</code> and <code>jobExecutionId</code> are not provided.</p> </li> <li> <p>If <code>dataSourceId</code> and <code>jobExecutionId</code> are provided, but <code>version</code> is not, the version defaults to "0".</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentId'],
    description: 'Identifies a document for which to retrieve status information',
  })
  .openapi('DocumentInfo')

const DocumentInfoListSchema = z
  .array(DocumentInfoSchema)
  .min(1)
  .max(10)
  .openapi('DocumentInfoList')

const BatchGetDocumentStatusRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index to add documents to. The index ID is returned by the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html">CreateIndex </a> API.',
        }),
    ),
    DocumentInfoList: DocumentInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DocumentInfo</code> objects that identify the documents for which to get the status. You identify the documents by their document ID and optional attributes.',
        }),
    ),
  })
  .openapi({ required: ['IndexId', 'DocumentInfoList'], title: 'BatchGetDocumentStatusRequest' })
  .openapi('BatchGetDocumentStatusRequest')

const BatchPutDocumentResponseFailedDocumentSchema = z
  .object({
    Id: DocumentIdSchema.and(
      z.any().openapi({ description: 'The identifier of the document.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of error that caused the document to fail to be indexed.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the reason why the document could not be indexed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a document that could not be indexed.',
    required: [],
  })
  .openapi('BatchPutDocumentResponseFailedDocument')

const BatchPutDocumentResponseFailedDocumentsSchema = z
  .array(BatchPutDocumentResponseFailedDocumentSchema)
  .openapi('BatchPutDocumentResponseFailedDocuments')

const BatchPutDocumentResponseSchema = z
  .object({
    FailedDocuments: BatchPutDocumentResponseFailedDocumentsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of documents that were not added to the index because the document failed a validation check. Each document contains an error message that indicates why the document couldn\'t be added to the index.</p> <p>If there was an error adding a document to an index the error is reported in your Amazon Web Services CloudWatch log. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/cloudwatch-logs.html">Monitoring Amazon Kendra with Amazon CloudWatch Logs</a> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchPutDocumentResponse')

const RoleArnSchema = z
  .string()
  .regex(
    /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
  )
  .min(0)
  .max(1284)
  .openapi('RoleArn')

const TitleSchema = z.string().openapi('Title')

const BlobSchema = z.string().openapi('Blob')

const PrincipalNameSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(200)
  .openapi('PrincipalName')

const PrincipalTypeSchema = z.enum(['USER', 'GROUP']).openapi('PrincipalType')

const ReadAccessTypeSchema = z.enum(['ALLOW', 'DENY']).openapi('ReadAccessType')

const PrincipalSchema = z
  .object({
    Name: PrincipalNameSchema.and(
      z.any().openapi({ description: 'The name of the user or group.' }),
    ),
    Type: PrincipalTypeSchema.and(z.any().openapi({ description: 'The type of principal.' })),
    Access: ReadAccessTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Whether to allow or deny document access to the principal.' }),
    ),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the data source the principal should access documents from.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Type', 'Access'],
    description:
      'Provides user and group information for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context filtering</a>.',
  })
  .openapi('Principal')

const PrincipalListSchema = z.array(PrincipalSchema).openapi('PrincipalList')

const HierarchicalPrincipalSchema = z
  .object({
    PrincipalList: PrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should have access to. Each hierarchical list specifies which user or group has allow or deny access for each document.',
        }),
    ),
  })
  .openapi({
    required: ['PrincipalList'],
    description:
      ' Information to define the hierarchy for which documents users should have access to. ',
  })
  .openapi('HierarchicalPrincipal')

const HierarchicalPrincipalListSchema = z
  .array(HierarchicalPrincipalSchema)
  .min(1)
  .max(30)
  .openapi({
    description:
      'A list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should have access to. Each hierarchical list specifies which user or group has allow or deny access for each document.',
  })
  .openapi('HierarchicalPrincipalList')

const ContentTypeSchema = z
  .enum([
    'PDF',
    'HTML',
    'MS_WORD',
    'PLAIN_TEXT',
    'PPT',
    'RTF',
    'XML',
    'XSLT',
    'MS_EXCEL',
    'CSV',
    'JSON',
    'MD',
  ])
  .openapi('ContentType')

const AccessControlConfigurationIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+/)
  .min(1)
  .max(36)
  .openapi('AccessControlConfigurationId')

const DocumentSchema = z
  .object({
    Id: DocumentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A identifier of the document in the index.</p> <p>Note, each document ID must be unique per index. You cannot create a data source to index your documents with their unique IDs and then use the <code>BatchPutDocument</code> API to index the same documents, or vice versa. You can delete a data source and then use the <code>BatchPutDocument</code> API to index the same documents, or vice versa.</p>',
        }),
    ),
    Title: TitleSchema.and(
      z.any().openapi({ description: 'The title of the document.' }),
    ).exactOptional(),
    Blob: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The contents of the document. </p> <p>Documents passed to the <code>Blob</code> parameter must be base64 encoded. Your code might not need to encode the document file bytes if you're using an Amazon Web Services SDK to call Amazon Kendra APIs. If you are calling the Amazon Kendra endpoint directly using REST, you must base64 encode the contents before sending.</p>",
        }),
    ).exactOptional(),
    S3Path: S3PathSchema.exactOptional(),
    Attributes: DocumentAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Custom attributes to apply to the document. Use the custom attributes to provide additional information for searching, to provide facets for refining searches, and to provide additional information in the query response.</p> <p>For example, 'DataSourceId' and 'DataSourceSyncJobId' are custom attributes that provide information on the synchronization of documents running on a data source. Note, 'DataSourceSyncJobId' could be an optional custom attribute as Amazon Kendra will use the ID of a running sync job.</p>",
        }),
    ).exactOptional(),
    AccessControlList: PrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
        }),
    ).exactOptional(),
    HierarchicalAccessControlList: HierarchicalPrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should have access to.',
        }),
    ).exactOptional(),
    ContentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The file type of the document in the <code>Blob</code> field.' }),
    ).exactOptional(),
    AccessControlConfigurationId: AccessControlConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the access control configuration that you want to apply to the document.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], description: 'A document in an index.' })
  .openapi('Document')

const DocumentListSchema = z.array(DocumentSchema).min(1).max(10).openapi('DocumentList')

const ConditionOperatorSchema = z
  .enum([
    'GreaterThan',
    'GreaterThanOrEquals',
    'LessThan',
    'LessThanOrEquals',
    'Equals',
    'NotEquals',
    'Contains',
    'NotContains',
    'Exists',
    'NotExists',
    'BeginsWith',
  ])
  .openapi('ConditionOperator')

const DocumentAttributeConditionSchema = z
  .object({
    ConditionDocumentAttributeKey: DocumentAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier of the document attribute used for the condition.</p> <p>For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.</p> <p>Amazon Kendra currently does not support <code>_document_body</code> as an attribute key used for the condition.</p>",
        }),
    ),
    Operator: ConditionOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The condition operator.</p> <p>For example, you can use 'Contains' to partially match a string.</p>",
        }),
    ),
    ConditionOnValue: DocumentAttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value used by the operator.</p> <p>For example, you can specify the value 'financial' for strings in the 'Source_URI' field that partially match or contain this value.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConditionDocumentAttributeKey', 'Operator'],
    description:
      "<p>The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. You use this with <a href=\"https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html\">DocumentAttributeTarget to apply the condition</a>.</p> <p>For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p>",
  })
  .openapi('DocumentAttributeCondition')

const DocumentAttributeTargetSchema = z
  .object({
    TargetDocumentAttributeKey: DocumentAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier of the target document attribute or metadata field.</p> <p>For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.</p>",
        }),
    ).exactOptional(),
    TargetDocumentAttributeValueDeletion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to <code>TRUE</code>. To create a target value (<code>TargetDocumentAttributeValue</code>), set this to <code>FALSE</code>.',
        }),
    ).exactOptional(),
    TargetDocumentAttributeValue: DocumentAttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The target value you want to create for the target attribute.</p> <p>For example, 'Finance' could be the target value for the target attribute key 'Department'.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The target document attribute or metadata field you want to alter when ingesting documents into Amazon Kendra.</p> <p>For example, you can delete customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID'. You set the target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p> <p>You can also use this with <a href=\"https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html\">DocumentAttributeCondition</a>.</p>",
    required: [],
  })
  .openapi('DocumentAttributeTarget')

const InlineCustomDocumentEnrichmentConfigurationSchema = z
  .object({
    Condition: DocumentAttributeConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra.',
        }),
    ).exactOptional(),
    Target: DocumentAttributeTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the target document attribute or metadata field when ingesting documents into Amazon Kendra. You can also include a value.',
        }),
    ).exactOptional(),
    DocumentContentDeletion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> to delete content if the condition used for the target attribute is met.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra. To apply advanced logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html">HookConfiguration</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>',
    required: [],
  })
  .openapi('InlineCustomDocumentEnrichmentConfiguration')

const InlineCustomDocumentEnrichmentConfigurationListSchema = z
  .array(InlineCustomDocumentEnrichmentConfigurationSchema)
  .min(0)
  .max(100)
  .openapi('InlineCustomDocumentEnrichmentConfigurationList')

const LambdaArnSchema = z
  .string()
  .regex(
    /\/arn:aws[a-zA-Z-]*:lambda:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?\//,
  )
  .min(1)
  .max(2048)
  .openapi('LambdaArn')

const HookConfigurationSchema = z
  .object({
    InvocationCondition: DocumentAttributeConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The condition used for when a Lambda function should be invoked.</p> <p>For example, you can specify a condition that if there are empty date-time values, then Amazon Kendra should invoke a function that inserts the current date-time.</p>',
        }),
    ).exactOptional(),
    LambdaArn: LambdaArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a role with permission to run a Lambda function during ingestion. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.',
        }),
    ),
    S3Bucket: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#cde-data-contracts-lambda">Data contracts for Lambda functions</a>.',
        }),
    ),
  })
  .openapi({
    required: ['LambdaArn', 'S3Bucket'],
    description:
      '<p>Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Kendra. You can configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>. You can only invoke one Lambda function. However, this function can invoke other functions it requires.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>',
  })
  .openapi('HookConfiguration')

const CustomDocumentEnrichmentConfigurationSchema = z
  .object({
    InlineConfigurations: InlineCustomDocumentEnrichmentConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra.',
        }),
    ).exactOptional(),
    PreExtractionHookConfiguration: HookConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for invoking a Lambda function in Lambda on the original or raw documents before extracting their metadata and text. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation">Advanced data manipulation</a>.',
        }),
    ).exactOptional(),
    PostExtractionHookConfiguration: HookConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for invoking a Lambda function in Lambda on the structured documents with their metadata and text extracted. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation">Advanced data manipulation</a>.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a role with permission to run <code>PreExtractionHookConfiguration</code> and <code>PostExtractionHookConfiguration</code> for altering document metadata and content during the document ingestion process. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides the configuration information for altering document metadata and content during the document ingestion process.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>',
    required: [],
  })
  .openapi('CustomDocumentEnrichmentConfiguration')

const BatchPutDocumentRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index to add the documents to. You need to create the index first using the <code>CreateIndex</code> API.',
        }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.',
        }),
    ).exactOptional(),
    Documents: DocumentListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more documents to add to the index.</p> <p>Documents have the following file size limits.</p> <ul> <li> <p>50 MB total size for any file</p> </li> <li> <p>5 MB extracted text for any file</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>.</p>',
        }),
    ),
    CustomDocumentEnrichmentConfiguration: CustomDocumentEnrichmentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information for altering your document metadata and content during the document ingestion process when you use the <code>BatchPutDocument</code> API.</p> <p>For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'Documents'], title: 'BatchPutDocumentRequest' })
  .openapi('BatchPutDocumentRequest')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ClearQuerySuggestionsRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index you want to clear query suggestions from.',
        }),
    ),
  })
  .openapi({ required: ['IndexId'], title: 'ClearQuerySuggestionsRequest' })
  .openapi('ClearQuerySuggestionsRequest')

const CreateAccessControlConfigurationResponseSchema = z
  .object({
    Id: AccessControlConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the access control configuration for your documents in an index.',
        }),
    ),
  })
  .openapi({ required: ['Id'] })
  .openapi('CreateAccessControlConfigurationResponse')

const AccessControlConfigurationNameSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(1)
  .max(200)
  .openapi('AccessControlConfigurationName')

const DescriptionSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(0)
  .max(1000)
  .openapi('Description')

const ClientTokenNameSchema = z.string().min(1).max(100).openapi('ClientTokenName')

const CreateAccessControlConfigurationRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index to create an access control configuration for your documents.',
        }),
    ),
    Name: AccessControlConfigurationNameSchema.and(
      z.any().openapi({ description: 'A name for the access control configuration.' }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the access control configuration.' }),
    ).exactOptional(),
    AccessControlList: PrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
        }),
    ).exactOptional(),
    HierarchicalAccessControlList: HierarchicalPrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should have access to.',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create an access control configuration. Multiple calls to the <code>CreateAccessControlConfiguration</code> API with the same client token will create only one access control configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'Name'], title: 'CreateAccessControlConfigurationRequest' })
  .openapi('CreateAccessControlConfigurationRequest')

const CreateDataSourceResponseSchema = z
  .object({
    Id: DataSourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the data source connector.' }),
    ),
  })
  .openapi({ required: ['Id'] })
  .openapi('CreateDataSourceResponse')

const DataSourceNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(1000)
  .openapi('DataSourceName')

const DataSourceTypeSchema = z
  .enum([
    'S3',
    'SHAREPOINT',
    'DATABASE',
    'SALESFORCE',
    'ONEDRIVE',
    'SERVICENOW',
    'CUSTOM',
    'CONFLUENCE',
    'GOOGLEDRIVE',
    'WEBCRAWLER',
    'WORKDOCS',
    'FSX',
    'SLACK',
    'BOX',
    'QUIP',
    'JIRA',
    'GITHUB',
    'ALFRESCO',
    'TEMPLATE',
  ])
  .openapi('DataSourceType')

const DataSourceConfigurationSchema: z.ZodType<DataSourceConfigurationType> = z
  .lazy(() =>
    z
      .object({
        S3Configuration: S3DataSourceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to an Amazon S3 bucket as your data source.',
            }),
        ).exactOptional(),
        SharePointConfiguration: SharePointConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Microsoft SharePoint as your data source.',
            }),
        ).exactOptional(),
        DatabaseConfiguration: DatabaseConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to a database as your data source.',
            }),
        ).exactOptional(),
        SalesforceConfiguration: SalesforceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Salesforce as your data source.',
            }),
        ).exactOptional(),
        OneDriveConfiguration: OneDriveConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Microsoft OneDrive as your data source.',
            }),
        ).exactOptional(),
        ServiceNowConfiguration: ServiceNowConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to ServiceNow as your data source.',
            }),
        ).exactOptional(),
        ConfluenceConfiguration: ConfluenceConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Confluence as your data source.',
            }),
        ).exactOptional(),
        GoogleDriveConfiguration: GoogleDriveConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Google Drive as your data source.',
            }),
        ).exactOptional(),
        WebCrawlerConfiguration: WebCrawlerConfigurationSchema.exactOptional(),
        WorkDocsConfiguration: WorkDocsConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Amazon WorkDocs as your data source.',
            }),
        ).exactOptional(),
        FsxConfiguration: FsxConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Amazon FSx as your data source.',
            }),
        ).exactOptional(),
        SlackConfiguration: SlackConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Slack as your data source.',
            }),
        ).exactOptional(),
        BoxConfiguration: BoxConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Box as your data source.',
            }),
        ).exactOptional(),
        QuipConfiguration: QuipConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Quip as your data source.',
            }),
        ).exactOptional(),
        JiraConfiguration: JiraConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Jira as your data source.',
            }),
        ).exactOptional(),
        GitHubConfiguration: GitHubConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to GitHub as your data source.',
            }),
        ).exactOptional(),
        AlfrescoConfiguration: AlfrescoConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the configuration information to connect to Alfresco as your data source.',
            }),
        ).exactOptional(),
        TemplateConfiguration: TemplateConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides a template for the configuration information to connect to your data source.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Provides the configuration information for an Amazon Kendra data source.',
        required: [],
      }),
  )
  .openapi('DataSourceConfiguration')

const ScanScheduleSchema = z.string().openapi('ScanSchedule')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key for the tag. Keys are not case sensitive and must be unique for the index, FAQ, or data source.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The value associated with the tag. The value may be an empty string but it can't be null.",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const LanguageCodeSchema = z
  .string()
  .regex(/[a-zA-Z-]*/)
  .min(2)
  .max(10)
  .openapi({
    description:
      'The code for a language. The default language is English. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
  })
  .openapi('LanguageCode')

const CreateDataSourceRequestSchema = z
  .object({
    Name: DataSourceNameSchema.and(
      z.any().openapi({ description: 'A name for the data source connector.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index you want to use with the data source connector.',
        }),
    ),
    Type: DataSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of data source repository. For example, <code>SHAREPOINT</code>.',
        }),
    ),
    Configuration: DataSourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Configuration information to connect to your data source repository.</p> <p>You can't specify the <code>Configuration</code> parameter when the <code>Type</code> parameter is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code> exception.</p> <p>The <code>Configuration</code> parameter is required for all other data sources.</p>",
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your data source. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the data source connector.' }),
    ).exactOptional(),
    Schedule: ScanScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the frequency for Amazon Kendra to check the documents in your data source repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the <code>StartDataSourceSyncJob</code> API to update the index.</p> <p>Specify a <code>cron-</code> format schedule string or an empty string to indicate that the index is updated on demand.</p> <p>You can't specify the <code>Schedule</code> parameter when the <code>Type</code> parameter is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code> exception.</p>",
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra.</a>.</p> <p>You can\'t specify the <code>RoleArn</code> parameter when the <code>Type</code> parameter is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code> exception.</p> <p>The <code>RoleArn</code> parameter is required for all other data sources.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create a data source connector. Multiple calls to the <code>CreateDataSource</code> API with the same client token will create only one data source connector.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for a language. This allows you to support a language for all documents when creating the data source connector. English is supported by default. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
        }),
    ).exactOptional(),
    CustomDocumentEnrichmentConfiguration: CustomDocumentEnrichmentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information for altering document metadata and content during the document ingestion process.</p> <p>For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'IndexId', 'Type'], title: 'CreateDataSourceRequest' })
  .openapi('CreateDataSourceRequest')

const CreateExperienceResponseSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
    ),
  })
  .openapi({ required: ['Id'] })
  .openapi('CreateExperienceResponse')

const ExperienceNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(1000)
  .openapi('ExperienceName')

const DataSourceIdListSchema = z
  .array(DataSourceIdSchema)
  .min(1)
  .max(100)
  .openapi('DataSourceIdList')

const FaqIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(100)
  .openapi('FaqId')

const FaqIdsListSchema = z.array(FaqIdSchema).min(1).max(100).openapi('FaqIdsList')

const ContentSourceConfigurationSchema = z
  .object({
    DataSourceIds: DataSourceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the data sources you want to use for your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    FaqIds: FaqIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the FAQs that you want to use for your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    DirectPutContent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> to use documents you indexed directly using the <code>BatchPutDocument</code> API.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the configuration information for your content sources, such as data sources, FAQs, and content indexed directly via <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a>.',
    required: [],
  })
  .openapi('ContentSourceConfiguration')

const IdentityAttributeNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(1000)
  .openapi('IdentityAttributeName')

const UserIdentityConfigurationSchema = z
  .object({
    IdentityAttributeName: IdentityAttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Identity Center field name that contains the identifiers of your users, such as their emails. This is used for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context filtering</a> and for granting access to your Amazon Kendra experience. You must set up IAM Identity Center with Amazon Kendra. You must include your users and groups in your Access Control List when you ingest documents into your index. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/getting-started-aws-sso.html">Getting started with an IAM Identity Center identity source</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides the configuration information for the identifiers of your users.',
    required: [],
  })
  .openapi('UserIdentityConfiguration')

const ExperienceConfigurationSchema = z
  .object({
    ContentSourceConfiguration: ContentSourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of your data sources and FAQs. Or, you can specify that you want to use documents indexed via the <code>BatchPutDocument</code> API. This is the content you want to use for your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    UserIdentityConfiguration: UserIdentityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Identity Center field name that contains the identifiers of your users, such as their emails.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the configuration information for your Amazon Kendra experience. This includes the data source IDs and/or FAQ IDs, and user or group information to grant access to your Amazon Kendra experience.',
    required: [],
  })
  .openapi('ExperienceConfiguration')

const CreateExperienceRequestSchema = z
  .object({
    Name: ExperienceNameSchema.and(
      z.any().openapi({ description: 'A name for your Amazon Kendra experience.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role with permission to access <code>Query</code> API, <code>GetQuerySuggestions</code> API, and other required APIs. The role also must include permission to access IAM Identity Center (successor to Single Sign-On) that stores your user and group information. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.',
        }),
    ).exactOptional(),
    Configuration: ExperienceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for your Amazon Kendra experience. This includes <code>ContentSourceConfiguration</code>, which specifies the data source IDs and/or FAQ IDs, and <code>UserIdentityConfiguration</code>, which specifies the user or group information to grant access to your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for your Amazon Kendra experience.' }),
    ).exactOptional(),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create your Amazon Kendra experience. Multiple calls to the <code>CreateExperience</code> API with the same client token creates only one Amazon Kendra experience.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'IndexId'], title: 'CreateExperienceRequest' })
  .openapi('CreateExperienceRequest')

const CreateFaqResponseSchema = z
  .object({
    Id: FaqIdSchema.and(
      z.any().openapi({ description: 'The identifier of the FAQ.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFaqResponse')

const FaqNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(100)
  .openapi('FaqName')

const FaqFileFormatSchema = z.enum(['CSV', 'CSV_WITH_HEADER', 'JSON']).openapi('FaqFileFormat')

const CreateFaqRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the FAQ.' }),
    ),
    Name: FaqNameSchema.and(z.any().openapi({ description: 'A name for the FAQ.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the FAQ.' }),
    ).exactOptional(),
    S3Path: S3PathSchema.and(z.any().openapi({ description: 'The path to the FAQ file in S3.' })),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the FAQs. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that identify the FAQ. You can use the tags to identify and organize your resources and to control access to resources.',
        }),
    ).exactOptional(),
    FileFormat: FaqFileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the FAQ input file. You can choose between a basic CSV format, a CSV format that includes customs attributes in a header, and a JSON format that includes custom attributes.</p> <p>The format must match the format of the file stored in the S3 bucket identified in the <code>S3Path</code> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html">Adding questions and answers</a>.</p>',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create a FAQ. Multiple calls to the <code>CreateFaqRequest</code> API with the same client token will create only one FAQ. ',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for a language. This allows you to support a language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'Name', 'S3Path', 'RoleArn'], title: 'CreateFaqRequest' })
  .openapi('CreateFaqRequest')

const FeaturedResultsSetNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][ a-zA-Z0-9_-]*/)
  .min(1)
  .max(1000)
  .openapi('FeaturedResultsSetName')

const FeaturedResultsSetDescriptionSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(0)
  .max(1000)
  .openapi('FeaturedResultsSetDescription')

const FeaturedResultsSetStatusSchema = z
  .enum(['ACTIVE', 'INACTIVE'])
  .openapi('FeaturedResultsSetStatus')

const QueryTextSchema = z.string().min(1).max(1000).openapi('QueryText')

const QueryTextListSchema = z.array(QueryTextSchema).min(0).max(49).openapi('QueryTextList')

const FeaturedDocumentSchema = z
  .object({
    Id: DocumentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the document to feature in the search results. You can use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html">Query</a> API to search for specific documents with their document IDs included in the result items, or you can use the console.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A featured document. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results.",
    required: [],
  })
  .openapi('FeaturedDocument')

const FeaturedDocumentListSchema = z.array(FeaturedDocumentSchema).openapi('FeaturedDocumentList')

const FeaturedResultsSetSchema = z
  .object({
    FeaturedResultsSetId: FeaturedResultsSetIdSchema.and(
      z.any().openapi({ description: 'The identifier of the set of featured results.' }),
    ).exactOptional(),
    FeaturedResultsSetName: FeaturedResultsSetNameSchema.and(
      z.any().openapi({ description: 'The name for the set of featured results.' }),
    ).exactOptional(),
    Description: FeaturedResultsSetDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the set of featured results.' }),
    ).exactOptional(),
    Status: FeaturedResultsSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the set of featured results. When the value is <code>ACTIVE</code>, featured results are ready for use. You can still configure your settings before setting the status to <code>ACTIVE</code>. You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code> using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for featured results must be unique per featured results set for each index, whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    QueryTexts: QueryTextListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The list of queries for featuring results.</p> <p>Specific queries are mapped to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the results. The exact match applies to the full query. For example, if you only specify 'Kendra', queries such as 'How does kendra semantically rank results?' will not render the featured results. Featured results are designed for specific queries, rather than queries that are too broad in scope.</p>",
        }),
    ).exactOptional(),
    FeaturedDocuments: FeaturedDocumentListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of document IDs for the documents you want to feature at the top of the search results page. You can use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html">Query</a> API to search for specific documents with their document IDs included in the result items, or you can use the console.</p> <p>You can add up to four featured documents. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p> <p>Specific queries are mapped to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the results. The exact match applies to the full query. For example, if you only specify \'Kendra\', queries such as \'How does kendra semantically rank results?\' will not render the featured results. Featured results are designed for specific queries, rather than queries that are too broad in scope.</p>',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the set of featured results was last updated.',
        }),
    ).exactOptional(),
    CreationTimestamp: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the set of featured results was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A set of featured results that are displayed at the top of your search results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.",
    required: [],
  })
  .openapi('FeaturedResultsSet')

const CreateFeaturedResultsSetResponseSchema = z
  .object({
    FeaturedResultsSet: FeaturedResultsSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information on the set of featured results. This includes the identifier of the featured results set, whether the featured results set is active or inactive, when the featured results set was created, and more.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFeaturedResultsSetResponse')

const CreateFeaturedResultsSetRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index that you want to use for featuring results.',
        }),
    ),
    FeaturedResultsSetName: FeaturedResultsSetNameSchema.and(
      z.any().openapi({ description: 'A name for the set of featured results.' }),
    ),
    Description: FeaturedResultsSetDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the set of featured results.' }),
    ).exactOptional(),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create a set of featured results. Multiple calls to the <code>CreateFeaturedResultsSet</code> API with the same client token will create only one featured results set.',
        }),
    ).exactOptional(),
    Status: FeaturedResultsSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the set of featured results. When the value is <code>ACTIVE</code>, featured results are ready for use. You can still configure your settings before setting the status to <code>ACTIVE</code>. You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code> using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for featured results must be unique per featured results set for each index, whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    QueryTexts: QueryTextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of queries for featuring results. For more information on the list of queries, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.',
        }),
    ).exactOptional(),
    FeaturedDocuments: FeaturedDocumentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of document IDs for the documents you want to feature at the top of the search results page. For more information on the list of documents, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that identify or categorize the featured results set. You can also use tags to help control access to the featured results set. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols:_ . : / = + - @.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexId', 'FeaturedResultsSetName'],
    title: 'CreateFeaturedResultsSetRequest',
  })
  .openapi('CreateFeaturedResultsSetRequest')

const FeaturedResultsConflictExceptionSchema = z.any().openapi('FeaturedResultsConflictException')

const CreateIndexResponseSchema = z
  .object({
    Id: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index. Use this identifier when you query an index, set up a data source, or index a document.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIndexResponse')

const IndexNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(1000)
  .openapi('IndexName')

const IndexEditionSchema = z
  .enum(['DEVELOPER_EDITION', 'ENTERPRISE_EDITION'])
  .openapi('IndexEdition')

const KmsKeyIdSchema = z.string().min(1).max(2048).openapi('KmsKeyId')

const ServerSideEncryptionConfigurationSchema = z
  .object({
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the KMS key. Amazon Kendra doesn't support asymmetric keys.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides the identifier of the KMS key used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric keys.",
    required: [],
  })
  .openapi('ServerSideEncryptionConfiguration')

const KeyLocationSchema = z.enum(['URL', 'SECRET_MANAGER']).openapi('KeyLocation')

const UserNameAttributeFieldSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(100)
  .openapi('UserNameAttributeField')

const GroupAttributeFieldSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(100)
  .openapi('GroupAttributeField')

const IssuerSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(65)
  .openapi('Issuer')

const ClaimRegexSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(100)
  .openapi('ClaimRegex')

const JwtTokenTypeConfigurationSchema = z
  .object({
    KeyLocation: KeyLocationSchema.and(
      z.any().openapi({ description: 'The location of the key.' }),
    ),
    URL: UrlSchema.and(z.any().openapi({ description: 'The signing key URL.' })).exactOptional(),
    SecretManagerArn: RoleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (arn) of the secret.' }),
    ).exactOptional(),
    UserNameAttributeField: UserNameAttributeFieldSchema.and(
      z.any().openapi({ description: 'The user name attribute field.' }),
    ).exactOptional(),
    GroupAttributeField: GroupAttributeFieldSchema.and(
      z.any().openapi({ description: 'The group attribute field.' }),
    ).exactOptional(),
    Issuer: IssuerSchema.and(
      z.any().openapi({ description: 'The issuer of the token.' }),
    ).exactOptional(),
    ClaimRegex: ClaimRegexSchema.and(
      z.any().openapi({ description: 'The regular expression that identifies the claim.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['KeyLocation'],
    description: 'Provides the configuration information for the JWT token type.',
  })
  .openapi('JwtTokenTypeConfiguration')

const JsonTokenTypeConfigurationSchema = z
  .object({
    UserNameAttributeField: StringSchema.and(
      z.any().openapi({ description: 'The user name attribute field.' }),
    ),
    GroupAttributeField: StringSchema.and(
      z.any().openapi({ description: 'The group attribute field.' }),
    ),
  })
  .openapi({
    required: ['UserNameAttributeField', 'GroupAttributeField'],
    description: 'Provides the configuration information for the JSON token type.',
  })
  .openapi('JsonTokenTypeConfiguration')

const UserTokenConfigurationSchema = z
  .object({
    JwtTokenTypeConfiguration: JwtTokenTypeConfigurationSchema.and(
      z.any().openapi({ description: 'Information about the JWT token type configuration.' }),
    ).exactOptional(),
    JsonTokenTypeConfiguration: JsonTokenTypeConfigurationSchema.and(
      z.any().openapi({ description: 'Information about the JSON token type configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides the configuration information for a token.', required: [] })
  .openapi('UserTokenConfiguration')

const UserTokenConfigurationListSchema = z
  .array(UserTokenConfigurationSchema)
  .max(1)
  .openapi('UserTokenConfigurationList')

const UserContextPolicySchema = z
  .enum(['ATTRIBUTE_FILTER', 'USER_TOKEN'])
  .openapi('UserContextPolicy')

const UserGroupResolutionModeSchema = z.enum(['AWS_SSO', 'NONE']).openapi('UserGroupResolutionMode')

const UserGroupResolutionConfigurationSchema = z
  .object({
    UserGroupResolutionMode: UserGroupResolutionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity store provider (mode) you want to use to get users and groups. IAM Identity Center (successor to Single Sign-On) is currently the only available mode. Your users and groups must exist in an IAM Identity Center identity source in order to use this mode.',
        }),
    ),
  })
  .openapi({
    required: ['UserGroupResolutionMode'],
    description:
      '<p>Provides the configuration information to get users and groups from an IAM Identity Center (successor to Single Sign-On) identity source. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can also use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html">PutPrincipalMapping</a> API to map users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>To set up an IAM Identity Center identity source in the console to use with Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/getting-started-aws-sso.html">Getting started with an IAM Identity Center identity source</a>. You must also grant the required permissions to use IAM Identity Center with Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html#iam-roles-aws-sso">IAM roles for IAM Identity Center</a>.</p> <p>Amazon Kendra currently does not support using <code>UserGroupResolutionConfiguration</code> with an Amazon Web Services organization member account for your IAM Identity Center identify source. You must create your index in the management account for the organization in order to use <code>UserGroupResolutionConfiguration</code>.</p>',
  })
  .openapi('UserGroupResolutionConfiguration')

const CreateIndexRequestSchema = z
  .object({
    Name: IndexNameSchema.and(z.any().openapi({ description: 'A name for the index.' })),
    Edition: IndexEditionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Kendra edition to use for the index. Choose <code>DEVELOPER_EDITION</code> for indexes intended for development, testing, or proof of concept. Use <code>ENTERPRISE_EDITION</code> for production. Once you set the edition for an index, it can\'t be changed.</p> <p>The <code>Edition</code> parameter is optional. If you don\'t supply a value, the default is <code>ENTERPRISE_EDITION</code>.</p> <p>For more information on quota limits for Enterprise and Developer editions, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>.</p>',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role with permission to access your Amazon CloudWatch logs and metrics. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.',
        }),
    ),
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.",
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the index.' }),
    ).exactOptional(),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create an index. Multiple calls to the <code>CreateIndex</code> API with the same client token will create only one index.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that identify or categorize the index. You can also use tags to help control access to the index. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.',
        }),
    ).exactOptional(),
    UserTokenConfigurations: UserTokenConfigurationListSchema.and(
      z.any().openapi({ description: 'The user token configuration.' }),
    ).exactOptional(),
    UserContextPolicy: UserContextPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user context policy.</p> <dl> <dt>ATTRIBUTE_FILTER</dt> <dd> <p>All indexed content is searchable and displayable for all users. If you want to filter search results on user context, you can use the attribute filters of <code>_user_id</code> and <code>_group_ids</code> or you can provide user and group information in <code>UserContext</code>. </p> </dd> <dt>USER_TOKEN</dt> <dd> <p>Enables token-based user access control to filter search results on user context. All documents with no access control and all documents accessible to the user will be searchable and displayable. </p> </dd> </dl>',
        }),
    ).exactOptional(),
    UserGroupResolutionConfiguration: UserGroupResolutionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Gets users and groups from IAM Identity Center (successor to Single Sign-On) identity source. To configure this, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html">UserGroupResolutionConfiguration</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'RoleArn'], title: 'CreateIndexRequest' })
  .openapi('CreateIndexRequest')

const QuerySuggestionsBlockListIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9-]*/)
  .length(36)
  .openapi('QuerySuggestionsBlockListId')

const CreateQuerySuggestionsBlockListResponseSchema = z
  .object({
    Id: QuerySuggestionsBlockListIdSchema.and(
      z.any().openapi({ description: 'The identifier of the block list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateQuerySuggestionsBlockListResponse')

const QuerySuggestionsBlockListNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
  .min(1)
  .max(100)
  .openapi('QuerySuggestionsBlockListName')

const CreateQuerySuggestionsBlockListRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index you want to create a query suggestions block list for.',
        }),
    ),
    Name: QuerySuggestionsBlockListNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A name for the block list.</p> <p>For example, the name 'offensive-words', which includes all offensive words that could appear in user queries and need to be blocked from suggestions.</p>",
        }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A description for the block list.</p> <p>For example, the description "List of all offensive words that can appear in user queries and need to be blocked from suggestions."</p>',
        }),
    ).exactOptional(),
    SourceS3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The S3 path to your block list text file in your S3 bucket.</p> <p>Each block word or phrase should be on a separate line in a text file.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>',
        }),
    ),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create a query suggestions block list.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket that contains the block list text file. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that identify or categorize the block list. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexId', 'Name', 'SourceS3Path', 'RoleArn'],
    title: 'CreateQuerySuggestionsBlockListRequest',
  })
  .openapi('CreateQuerySuggestionsBlockListRequest')

const ThesaurusIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(100)
  .openapi('ThesaurusId')

const CreateThesaurusResponseSchema = z
  .object({
    Id: ThesaurusIdSchema.and(
      z.any().openapi({ description: 'The identifier of the thesaurus. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateThesaurusResponse')

const ThesaurusNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(100)
  .openapi('ThesaurusName')

const CreateThesaurusRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the thesaurus.' }),
    ),
    Name: ThesaurusNameSchema.and(z.any().openapi({ description: 'A name for the thesaurus.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the thesaurus.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket that contains the thesaurus file. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that identify or categorize the thesaurus. You can also use tags to help control access to the thesaurus. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.',
        }),
    ).exactOptional(),
    SourceS3Path: S3PathSchema.and(
      z.any().openapi({ description: 'The path to the thesaurus file in S3.' }),
    ),
    ClientToken: ClientTokenNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you provide to identify the request to create a thesaurus. Multiple calls to the <code>CreateThesaurus</code> API with the same client token will create only one thesaurus. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexId', 'Name', 'RoleArn', 'SourceS3Path'],
    title: 'CreateThesaurusRequest',
  })
  .openapi('CreateThesaurusRequest')

const DeleteAccessControlConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteAccessControlConfigurationResponse')

const DeleteAccessControlConfigurationRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index for an access control configuration.',
        }),
    ),
    Id: AccessControlConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the access control configuration you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['IndexId', 'Id'], title: 'DeleteAccessControlConfigurationRequest' })
  .openapi('DeleteAccessControlConfigurationRequest')

const DeleteDataSourceRequestSchema = z
  .object({
    Id: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the data source connector you want to delete.',
        }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index used with the data source connector.',
        }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DeleteDataSourceRequest' })
  .openapi('DeleteDataSourceRequest')

const DeleteExperienceResponseSchema = z.object({}).openapi('DeleteExperienceResponse')

const DeleteExperienceRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of your Amazon Kendra experience you want to delete.',
        }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DeleteExperienceRequest' })
  .openapi('DeleteExperienceRequest')

const DeleteFaqRequestSchema = z
  .object({
    Id: FaqIdSchema.and(
      z.any().openapi({ description: 'The identifier of the FAQ you want to remove.' }),
    ),
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the FAQ.' }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DeleteFaqRequest' })
  .openapi('DeleteFaqRequest')

const DeleteIndexRequestSchema = z
  .object({
    Id: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index you want to delete.' }),
    ),
  })
  .openapi({ required: ['Id'], title: 'DeleteIndexRequest' })
  .openapi('DeleteIndexRequest')

const GroupIdSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(1024)
  .openapi('GroupId')

const PrincipalOrderingIdSchema = z.int().min(0).max(32535158400000).openapi('PrincipalOrderingId')

const DeletePrincipalMappingRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index you want to delete a group from.' }),
    ),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the data source you want to delete a group from.</p> <p>A group can be tied to multiple data sources. You can delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company\'s documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source.</p>',
        }),
    ).exactOptional(),
    GroupId: GroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of the group you want to delete.' }),
    ),
    OrderingId: PrincipalOrderingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The timestamp identifier you specify to ensure Amazon Kendra does not override the latest <code>DELETE</code> action with previous actions. The highest number ID, which is the ordering ID, is the latest action you want to process and apply on top of other actions with lower number IDs. This prevents previous actions with lower number IDs from possibly overriding the latest action.</p> <p>The ordering ID can be the Unix time of the last update you made to a group members list. You would then provide this list when calling <code>PutPrincipalMapping</code>. This ensures your <code>DELETE</code> action for that updated group with the latest members list doesn't get overwritten by earlier <code>DELETE</code> actions for the same group which are yet to be processed.</p> <p>The default ordering ID is the current Unix time in milliseconds that the action was received by Amazon Kendra. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'GroupId'], title: 'DeletePrincipalMappingRequest' })
  .openapi('DeletePrincipalMappingRequest')

const DeleteQuerySuggestionsBlockListRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the block list.' }),
    ),
    Id: QuerySuggestionsBlockListIdSchema.and(
      z.any().openapi({ description: 'The identifier of the block list you want to delete.' }),
    ),
  })
  .openapi({ required: ['IndexId', 'Id'], title: 'DeleteQuerySuggestionsBlockListRequest' })
  .openapi('DeleteQuerySuggestionsBlockListRequest')

const DeleteThesaurusRequestSchema = z
  .object({
    Id: ThesaurusIdSchema.and(
      z.any().openapi({ description: 'The identifier of the thesaurus you want to delete.' }),
    ),
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the thesaurus.' }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DeleteThesaurusRequest' })
  .openapi('DeleteThesaurusRequest')

const DescribeAccessControlConfigurationResponseSchema = z
  .object({
    Name: AccessControlConfigurationNameSchema.and(
      z.any().openapi({ description: 'The name for the access control configuration.' }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the access control configuration.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message containing details if there are issues processing the access control configuration.',
        }),
    ).exactOptional(),
    AccessControlList: PrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
        }),
    ).exactOptional(),
    HierarchicalAccessControlList: HierarchicalPrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should have access to.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('DescribeAccessControlConfigurationResponse')

const DescribeAccessControlConfigurationRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index for an access control configuration.',
        }),
    ),
    Id: AccessControlConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the access control configuration you want to get information on.',
        }),
    ),
  })
  .openapi({ required: ['IndexId', 'Id'], title: 'DescribeAccessControlConfigurationRequest' })
  .openapi('DescribeAccessControlConfigurationRequest')

const DataSourceStatusSchema = z
  .enum(['CREATING', 'DELETING', 'FAILED', 'UPDATING', 'ACTIVE'])
  .openapi('DataSourceStatus')

const DescribeDataSourceResponseSchema = z
  .object({
    Id: DataSourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the data source connector.' }),
    ).exactOptional(),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index used with the data source connector.',
        }),
    ).exactOptional(),
    Name: DataSourceNameSchema.and(
      z.any().openapi({ description: 'The name for the data source connector.' }),
    ).exactOptional(),
    Type: DataSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the data source. For example, <code>SHAREPOINT</code>.',
        }),
    ).exactOptional(),
    Configuration: DataSourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration details for the data source connector. This shows how the data source is configured. The configuration options for a data source depend on the data source provider.',
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your data source. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The Unix timestamp when the data source connector was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the data source connector was last updated.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the data source connector.' }),
    ).exactOptional(),
    Status: DataSourceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the data source connector. When the status is <code>ACTIVE</code> the data source is ready to use. When the status is <code>FAILED</code>, the <code>ErrorMessage</code> field contains the reason that the data source failed.',
        }),
    ).exactOptional(),
    Schedule: ScanScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Amazon Kendra to update the index.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role with permission to access the data source and required resources.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the <code>Status</code> field value is <code>FAILED</code>, the <code>ErrorMessage</code> field contains a description of the error that caused the data source to fail.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for a language. This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
        }),
    ).exactOptional(),
    CustomDocumentEnrichmentConfiguration: CustomDocumentEnrichmentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information for altering document metadata and content during the document ingestion process when you describe a data source.</p> <p>For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDataSourceResponse')

const DescribeDataSourceRequestSchema = z
  .object({
    Id: DataSourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the data source connector.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index used with the data source connector.',
        }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DescribeDataSourceRequest' })
  .openapi('DescribeDataSourceRequest')

const EndpointTypeSchema = z.literal('HOME').openapi('EndpointType')

const EndpointSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(2048)
  .openapi('Endpoint')

const ExperienceEndpointSchema = z
  .object({
    EndpointType: EndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of endpoint for your Amazon Kendra experience. The type currently available is <code>HOME</code>, which is a unique and fully hosted URL to the home page of your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'The endpoint of your Amazon Kendra experience.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the configuration information for the endpoint for your Amazon Kendra experience.',
    required: [],
  })
  .openapi('ExperienceEndpoint')

const ExperienceEndpointsSchema = z
  .array(ExperienceEndpointSchema)
  .min(1)
  .max(2)
  .openapi('ExperienceEndpoints')

const ExperienceStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'FAILED'])
  .openapi('ExperienceStatus')

const DescribeExperienceResponseSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'Shows the identifier of your Amazon Kendra experience.' }),
    ).exactOptional(),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Shows the identifier of the index for your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    Name: ExperienceNameSchema.and(
      z.any().openapi({ description: 'Shows the name of your Amazon Kendra experience.' }),
    ).exactOptional(),
    Endpoints: ExperienceEndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the endpoint URLs for your Amazon Kendra experiences. The URLs are unique and fully hosted by Amazon Web Services.',
        }),
    ).exactOptional(),
    Configuration: ExperienceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the configuration information for your Amazon Kendra experience. This includes <code>ContentSourceConfiguration</code>, which specifies the data source IDs and/or FAQ IDs, and <code>UserIdentityConfiguration</code>, which specifies the user or group information to grant access to your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when your Amazon Kendra experience was created.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when your Amazon Kendra experience was last updated.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Shows the description for your Amazon Kendra experience.' }),
    ).exactOptional(),
    Status: ExperienceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current processing status of your Amazon Kendra experience. When the status is <code>ACTIVE</code>, your Amazon Kendra experience is ready to use. When the status is <code>FAILED</code>, the <code>ErrorMessage</code> field contains the reason that this failed.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the Amazon Resource Name (ARN) of a role with permission to access <code>Query</code> API, <code>QuerySuggestions</code> API, <code>SubmitFeedback</code> API, and IAM Identity Center that stores your user and group information.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason your Amazon Kendra experience could not properly process.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExperienceResponse')

const DescribeExperienceRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of your Amazon Kendra experience you want to get information on.',
        }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DescribeExperienceRequest' })
  .openapi('DescribeExperienceRequest')

const FaqStatusSchema = z
  .enum(['CREATING', 'UPDATING', 'ACTIVE', 'DELETING', 'FAILED'])
  .openapi('FaqStatus')

const DescribeFaqResponseSchema = z
  .object({
    Id: FaqIdSchema.and(
      z.any().openapi({ description: 'The identifier of the FAQ.' }),
    ).exactOptional(),
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the FAQ.' }),
    ).exactOptional(),
    Name: FaqNameSchema.and(
      z.any().openapi({ description: 'The name that you gave the FAQ when it was created.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The description of the FAQ that you provided when it was created.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the FAQ was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the FAQ was last updated.' }),
    ).exactOptional(),
    S3Path: S3PathSchema.exactOptional(),
    Status: FaqStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the FAQ. It is ready to use when the status is <code>ACTIVE</code>.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role that provides access to the S3 bucket containing the input files for the FAQ.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>Status</code> field is <code>FAILED</code>, the <code>ErrorMessage</code> field contains the reason why the FAQ failed.',
        }),
    ).exactOptional(),
    FileFormat: FaqFileFormatSchema.and(
      z.any().openapi({ description: 'The file format used by the input files for the FAQ.' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for a language. This shows a supported language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFaqResponse')

const DescribeFaqRequestSchema = z
  .object({
    Id: FaqIdSchema.and(
      z.any().openapi({ description: 'The identifier of the FAQ you want to get information on.' }),
    ),
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the FAQ.' }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DescribeFaqRequest' })
  .openapi('DescribeFaqRequest')

const FeaturedDocumentWithMetadataSchema = z
  .object({
    Id: DocumentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the featured document with its metadata. You can use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html">Query</a> API to search for specific documents with their document IDs included in the result items, or you can use the console.',
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z.any().openapi({ description: 'The main title of the featured document.' }),
    ).exactOptional(),
    URI: UrlSchema.and(
      z.any().openapi({ description: 'The source URI location of the featured document.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A featured document with its metadata information. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results.",
    required: [],
  })
  .openapi('FeaturedDocumentWithMetadata')

const FeaturedDocumentWithMetadataListSchema = z
  .array(FeaturedDocumentWithMetadataSchema)
  .openapi('FeaturedDocumentWithMetadataList')

const FeaturedDocumentMissingSchema = z
  .object({
    Id: DocumentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the document that doesn't exist but you have specified as a featured document.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A document ID doesn\'t exist but you have specified as a featured document. Amazon Kendra cannot feature the document if it doesn\'t exist in the index. You can check the status of a document and its ID or check for documents with status errors using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html">BatchGetDocumentStatus</a> API.',
    required: [],
  })
  .openapi('FeaturedDocumentMissing')

const FeaturedDocumentMissingListSchema = z
  .array(FeaturedDocumentMissingSchema)
  .openapi('FeaturedDocumentMissingList')

const DescribeFeaturedResultsSetResponseSchema = z
  .object({
    FeaturedResultsSetId: FeaturedResultsSetIdSchema.and(
      z.any().openapi({ description: 'The identifier of the set of featured results.' }),
    ).exactOptional(),
    FeaturedResultsSetName: FeaturedResultsSetNameSchema.and(
      z.any().openapi({ description: 'The name for the set of featured results.' }),
    ).exactOptional(),
    Description: FeaturedResultsSetDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the set of featured results.' }),
    ).exactOptional(),
    Status: FeaturedResultsSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the set of featured results. When the value is <code>ACTIVE</code>, featured results are ready for use. You can still configure your settings before setting the status to <code>ACTIVE</code>. You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code> using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for featured results must be unique per featured results set for each index, whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    QueryTexts: QueryTextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of queries for featuring results. For more information on the list of queries, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.',
        }),
    ).exactOptional(),
    FeaturedDocumentsWithMetadata: FeaturedDocumentWithMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of document IDs for the documents you want to feature with their metadata information. For more information on the list of featured documents, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.',
        }),
    ).exactOptional(),
    FeaturedDocumentsMissing: FeaturedDocumentMissingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of document IDs that don\'t exist but you have specified as featured documents. Amazon Kendra cannot feature these documents if they don\'t exist in the index. You can check the status of a document and its ID or check for documents with status errors using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html">BatchGetDocumentStatus</a> API.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp when the set of featured results was last updated.',
        }),
    ).exactOptional(),
    CreationTimestamp: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the set of the featured results was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFeaturedResultsSetResponse')

const DescribeFeaturedResultsSetRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index used for featuring results.' }),
    ),
    FeaturedResultsSetId: FeaturedResultsSetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the set of featured results that you want to get information on.',
        }),
    ),
  })
  .openapi({
    required: ['IndexId', 'FeaturedResultsSetId'],
    title: 'DescribeFeaturedResultsSetRequest',
  })
  .openapi('DescribeFeaturedResultsSetRequest')

const IndexStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'FAILED', 'UPDATING', 'SYSTEM_UPDATING'])
  .openapi('IndexStatus')

const DocumentMetadataConfigurationNameSchema = z
  .string()
  .min(1)
  .max(30)
  .openapi('DocumentMetadataConfigurationName')

const DocumentMetadataBooleanSchema = z.boolean().openapi('DocumentMetadataBoolean')

const ImportanceSchema = z.int().min(1).max(10).openapi('Importance')

const DurationSchema = z
  .string()
  .regex(/[0-9]+[s]/)
  .min(1)
  .max(10)
  .openapi('Duration')

const OrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('Order')

const ValueImportanceMapSchema = z
  .record(z.string(), ImportanceSchema)
  .openapi('ValueImportanceMap')

const RelevanceSchema = z
  .object({
    Freshness: DocumentMetadataBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that this field determines how "fresh" a document is. For example, if document 1 was created on November 5, and document 2 was created on October 31, document 1 is "fresher" than document 2. You can only set the <code>Freshness</code> field on one <code>DATE</code> type field. Only applies to <code>DATE</code> fields.',
        }),
    ).exactOptional(),
    Importance: ImportanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative importance of the field in the search. Larger numbers provide more of a boost than smaller numbers.',
        }),
    ).exactOptional(),
    Duration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the time period that the boost applies to. For example, to make the boost apply to documents with the field value within the last month, you would use "2628000s". Once the field value is beyond the specified range, the effect of the boost drops off. The higher the importance, the faster the effect drops off. If you don\'t specify a value, the default is 3 months. The value of the field is a numeric string followed by the character "s", for example "86400s" for one day, or "604800s" for one week. </p> <p>Only applies to <code>DATE</code> fields.</p>',
        }),
    ).exactOptional(),
    RankOrder: OrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how values should be interpreted.</p> <p>When the <code>RankOrder</code> field is <code>ASCENDING</code>, higher numbers are better. For example, a document with a rating score of 10 is higher ranking than a document with a rating score of 1.</p> <p>When the <code>RankOrder</code> field is <code>DESCENDING</code>, lower numbers are better. For example, in a task tracking application, a priority 1 task is more important than a priority 5 task.</p> <p>Only applies to <code>LONG</code> and <code>DOUBLE</code> fields.</p>',
        }),
    ).exactOptional(),
    ValueImportanceMap: ValueImportanceMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of values that should be given a different boost when they appear in the result list. For example, if you are boosting a field called "department," query terms that match the department field are boosted in the result. However, you can add entries from the department field to boost documents with those values higher. </p> <p>For example, you can add entries to the map with names of departments. If you add "HR",5 and "Legal",3 those departments are given special attention when they appear in the metadata of a document. When those terms appear they are given the specified importance instead of the regular importance for the boost.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters.',
    required: [],
  })
  .openapi('Relevance')

const SearchSchema = z
  .object({
    Facetable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the field can be used to create search facets, a count of results for each value in the field. The default is <code>false</code> .',
        }),
    ).exactOptional(),
    Searchable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the field is used in the search. If the <code>Searchable</code> field is <code>true</code>, you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is <code>true</code> for string fields and <code>false</code> for number and date fields.',
        }),
    ).exactOptional(),
    Displayable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the field is returned in the query response. The default is <code>true</code>.',
        }),
    ).exactOptional(),
    Sortable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the field can be used to sort the results of a query. If you specify sorting on a field that does not have <code>Sortable</code> set to <code>true</code>, Amazon Kendra returns an exception. The default is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about how a custom index field is used during a search.',
    required: [],
  })
  .openapi('Search')

const DocumentMetadataConfigurationSchema = z
  .object({
    Name: DocumentMetadataConfigurationNameSchema.and(
      z.any().openapi({ description: 'The name of the index field.' }),
    ),
    Type: DocumentAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The data type of the index field. ' }),
    ),
    Relevance: RelevanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides tuning parameters to determine how the field affects the search results.',
        }),
    ).exactOptional(),
    Search: SearchSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides information about how the field is used during a search.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Type'],
    description:
      'Specifies the properties, such as relevance tuning and searchability, of an index field.',
  })
  .openapi('DocumentMetadataConfiguration')

const DocumentMetadataConfigurationListSchema = z
  .array(DocumentMetadataConfigurationSchema)
  .min(0)
  .max(500)
  .openapi('DocumentMetadataConfigurationList')

const IndexedQuestionAnswersCountSchema = z.int().min(0).openapi('IndexedQuestionAnswersCount')

const FaqStatisticsSchema = z
  .object({
    IndexedQuestionAnswersCount: IndexedQuestionAnswersCountSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of FAQ questions and answers contained in the index.',
        }),
    ),
  })
  .openapi({
    required: ['IndexedQuestionAnswersCount'],
    description:
      'Provides statistical information about the FAQ questions and answers contained in an index.',
  })
  .openapi('FaqStatistics')

const IndexedTextDocumentsCountSchema = z.int().min(0).openapi('IndexedTextDocumentsCount')

const IndexedTextBytesSchema = z.int().min(0).openapi('IndexedTextBytes')

const TextDocumentStatisticsSchema = z
  .object({
    IndexedTextDocumentsCount: IndexedTextDocumentsCountSchema.and(
      z.any().openapi({ description: 'The number of text documents indexed.' }),
    ),
    IndexedTextBytes: IndexedTextBytesSchema.and(
      z.any().openapi({ description: 'The total size, in bytes, of the indexed documents.' }),
    ),
  })
  .openapi({
    required: ['IndexedTextDocumentsCount', 'IndexedTextBytes'],
    description: 'Provides information about text documents indexed in an index.',
  })
  .openapi('TextDocumentStatistics')

const IndexStatisticsSchema = z
  .object({
    FaqStatistics: FaqStatisticsSchema.and(
      z.any().openapi({ description: 'The number of question and answer topics in the index.' }),
    ),
    TextDocumentStatistics: TextDocumentStatisticsSchema.and(
      z.any().openapi({ description: 'The number of text documents indexed.' }),
    ),
  })
  .openapi({
    required: ['FaqStatistics', 'TextDocumentStatistics'],
    description:
      'Provides information about the number of documents and the number of questions and answers in an index.',
  })
  .openapi('IndexStatistics')

const StorageCapacityUnitSchema = z.int().min(0).openapi('StorageCapacityUnit')

const QueryCapacityUnitSchema = z.int().min(0).openapi('QueryCapacityUnit')

const CapacityUnitsConfigurationSchema = z
  .object({
    StorageCapacityUnits: StorageCapacityUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of extra storage capacity for an index. A single capacity unit provides 30 GB of storage space or 100,000 documents, whichever is reached first. You can add up to 100 extra capacity units.',
        }),
    ),
    QueryCapacityUnits: QueryCapacityUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of extra query capacity for an index and <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html">GetQuerySuggestions</a> capacity.</p> <p>A single extra capacity unit for an index provides 0.1 queries per second or approximately 8,000 queries per day. You can add up to 100 extra capacity units.</p> <p> <code>GetQuerySuggestions</code> capacity is five times the provisioned query capacity for an index, or the base capacity of 2.5 calls per second, whichever is higher. For example, the base capacity for an index is 0.1 queries per second, and <code>GetQuerySuggestions</code> capacity has a base of 2.5 calls per second. If you add another 0.1 queries per second to total 0.2 queries per second for an index, the <code>GetQuerySuggestions</code> capacity is 2.5 calls per second (higher than five times 0.2 queries per second).</p>',
        }),
    ),
  })
  .openapi({
    required: ['StorageCapacityUnits', 'QueryCapacityUnits'],
    description:
      'Specifies additional capacity units configured for your Enterprise Edition index. You can add and remove capacity units to fit your usage requirements.',
  })
  .openapi('CapacityUnitsConfiguration')

const DescribeIndexResponseSchema = z
  .object({
    Name: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the index.' }),
    ).exactOptional(),
    Id: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index.' }),
    ).exactOptional(),
    Edition: IndexEditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Kendra edition used for the index. You decide the edition when you create the index.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that gives Amazon Kendra permission to write to your Amazon Cloudwatch logs.',
        }),
    ).exactOptional(),
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the KMScustomer master key (CMK) that is used to encrypt your data. Amazon Kendra doesn't support asymmetric CMKs.",
        }),
    ).exactOptional(),
    Status: IndexStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the index. When the value is <code>ACTIVE</code>, the index is ready for use. If the <code>Status</code> field value is <code>FAILED</code>, the <code>ErrorMessage</code> field contains a message that explains why.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the index.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the index was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix when the index was last updated.' }),
    ).exactOptional(),
    DocumentMetadataConfigurations: DocumentMetadataConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for document metadata or fields. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document.',
        }),
    ).exactOptional(),
    IndexStatistics: IndexStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information about the number of FAQ questions and answers and the number of text documents indexed.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the <code>Status</code> field value is <code>FAILED</code>, the <code>ErrorMessage</code> field contains a message that explains why.',
        }),
    ).exactOptional(),
    CapacityUnits: CapacityUnitsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For Enterprise Edition indexes, you can choose to use additional capacity to meet the needs of your application. This contains the capacity units used for the index. A query or document storage capacity of zero indicates that the index is using the default capacity. For more information on the default capacity for an index and adjusting this, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html">Adjusting capacity</a>.',
        }),
    ).exactOptional(),
    UserTokenConfigurations: UserTokenConfigurationListSchema.and(
      z.any().openapi({ description: 'The user token configuration for the Amazon Kendra index.' }),
    ).exactOptional(),
    UserContextPolicy: UserContextPolicySchema.and(
      z.any().openapi({ description: 'The user context policy for the Amazon Kendra index.' }),
    ).exactOptional(),
    UserGroupResolutionConfiguration: UserGroupResolutionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you have enabled the configuration for fetching access levels of groups and users from an IAM Identity Center (successor to Single Sign-On) identity source.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeIndexResponse')

const DescribeIndexRequestSchema = z
  .object({
    Id: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index you want to get information on.' }),
    ),
  })
  .openapi({ required: ['Id'], title: 'DescribeIndexRequest' })
  .openapi('DescribeIndexRequest')

const PrincipalMappingStatusSchema = z
  .enum(['FAILED', 'SUCCEEDED', 'PROCESSING', 'DELETING', 'DELETED'])
  .openapi('PrincipalMappingStatus')

const FailureReasonSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(2048)
  .openapi('FailureReason')

const GroupOrderingIdSummarySchema = z
  .object({
    Status: PrincipalMappingStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current processing status of actions for mapping users to their groups. The status can be either <code>PROCESSING</code>, <code>SUCCEEDED</code>, <code>DELETING</code>, <code>DELETED</code>, or <code>FAILED</code>.',
        }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp when an action was last updated. An action can be a <code>PUT</code> or <code>DELETE</code> action for mapping users to their groups.',
        }),
    ).exactOptional(),
    ReceivedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp when an action was received by Amazon Kendra. An action can be a <code>PUT</code> or <code>DELETE</code> action for mapping users to their groups.',
        }),
    ).exactOptional(),
    OrderingId: PrincipalOrderingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The order in which actions should complete processing. An action can be a <code>PUT</code> or <code>DELETE</code> action for mapping users to their groups.',
        }),
    ).exactOptional(),
    FailureReason: FailureReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason an action could not be processed. An action can be a <code>PUT</code> or <code>DELETE</code> action for mapping users to their groups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.',
    required: [],
  })
  .openapi('GroupOrderingIdSummary')

const GroupOrderingIdSummariesSchema = z
  .array(GroupOrderingIdSummarySchema)
  .max(10)
  .openapi('GroupOrderingIdSummaries')

const DescribePrincipalMappingResponseSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the identifier of the index to see information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.',
        }),
    ).exactOptional(),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the identifier of the data source to see information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.',
        }),
    ).exactOptional(),
    GroupId: GroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the identifier of the group to see information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.',
        }),
    ).exactOptional(),
    GroupOrderingIdSummaries: GroupOrderingIdSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Shows the following information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups:</p> <ul> <li> <p>Status—the status can be either <code>PROCESSING</code>, <code>SUCCEEDED</code>, <code>DELETING</code>, <code>DELETED</code>, or <code>FAILED</code>.</p> </li> <li> <p>Last updated—the last date-time an action was updated.</p> </li> <li> <p>Received—the last date-time an action was received or submitted.</p> </li> <li> <p>Ordering ID—the latest action that should process and apply after other actions.</p> </li> <li> <p>Failure reason—the reason an action could not be processed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePrincipalMappingResponse')

const DescribePrincipalMappingRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index required to check the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.',
        }),
    ),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the data source to check the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.',
        }),
    ).exactOptional(),
    GroupId: GroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the group required to check the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.',
        }),
    ),
  })
  .openapi({ required: ['IndexId', 'GroupId'], title: 'DescribePrincipalMappingRequest' })
  .openapi('DescribePrincipalMappingRequest')

const QuerySuggestionsBlockListStatusSchema = z
  .enum(['ACTIVE', 'CREATING', 'DELETING', 'UPDATING', 'ACTIVE_BUT_UPDATE_FAILED', 'FAILED'])
  .openapi('QuerySuggestionsBlockListStatus')

const DescribeQuerySuggestionsBlockListResponseSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the block list.' }),
    ).exactOptional(),
    Id: QuerySuggestionsBlockListIdSchema.and(
      z.any().openapi({ description: 'The identifier of the block list.' }),
    ).exactOptional(),
    Name: QuerySuggestionsBlockListNameSchema.and(
      z.any().openapi({ description: 'The name of the block list.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the block list.' }),
    ).exactOptional(),
    Status: QuerySuggestionsBlockListStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the block list. When the value is <code>ACTIVE</code>, the block list is ready for use.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message containing details if there are issues processing the block list.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when a block list for query suggestions was created.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp when a block list for query suggestions was last updated.',
        }),
    ).exactOptional(),
    SourceS3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Shows the current S3 path to your block list text file in your S3 bucket.</p> <p>Each block word or phrase should be on a separate line in a text file.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>',
        }),
    ).exactOptional(),
    ItemCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current number of valid, non-empty words or phrases in the block list text file.',
        }),
    ).exactOptional(),
    FileSizeBytes: LongSchema.and(
      z.any().openapi({ description: 'The current size of the block list text file in S3.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IAM (Identity and Access Management) role used by Amazon Kendra to access the block list text file in S3.</p> <p>The role needs S3 read permissions to your file in S3 and needs to give STS (Security Token Service) assume role permissions to Amazon Kendra.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeQuerySuggestionsBlockListResponse')

const DescribeQuerySuggestionsBlockListRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the block list.' }),
    ),
    Id: QuerySuggestionsBlockListIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the block list you want to get information on.',
        }),
    ),
  })
  .openapi({ required: ['IndexId', 'Id'], title: 'DescribeQuerySuggestionsBlockListRequest' })
  .openapi('DescribeQuerySuggestionsBlockListRequest')

const ModeSchema = z.enum(['ENABLED', 'LEARN_ONLY']).openapi('Mode')

const QuerySuggestionsStatusSchema = z
  .enum(['ACTIVE', 'UPDATING'])
  .openapi('QuerySuggestionsStatus')

const ObjectBooleanSchema = z.boolean().openapi('ObjectBoolean')

const MinimumNumberOfQueryingUsersSchema = z
  .int()
  .min(1)
  .max(10000)
  .openapi('MinimumNumberOfQueryingUsers')

const MinimumQueryCountSchema = z.int().min(1).max(10000).openapi('MinimumQueryCount')

const DescribeQuerySuggestionsConfigResponseSchema = z
  .object({
    Mode: ModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether query suggestions are currently in <code>ENABLED</code> mode or <code>LEARN_ONLY</code> mode.</p> <p>By default, Amazon Kendra enables query suggestions.<code>LEARN_ONLY</code> turns off query suggestions for your users. You can change the mode using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html">UpdateQuerySuggestionsConfig</a> API.</p>',
        }),
    ).exactOptional(),
    Status: QuerySuggestionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether the status of query suggestions settings is currently <code>ACTIVE</code> or <code>UPDATING</code>.</p> <p>Active means the current settings apply and Updating means your changed settings are in the process of applying.</p>',
        }),
    ).exactOptional(),
    QueryLogLookBackWindowInDays: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'How recent your queries are in your query log time window (in days).',
        }),
    ).exactOptional(),
    IncludeQueriesWithoutUserInformation: ObjectBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> to use all queries, otherwise use only queries that include user information to generate the query suggestions.',
        }),
    ).exactOptional(),
    MinimumNumberOfQueryingUsers: MinimumNumberOfQueryingUsersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of unique users who must search a query in order for the query to be eligible to suggest to your users.',
        }),
    ).exactOptional(),
    MinimumQueryCount: MinimumQueryCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of times a query must be searched in order for the query to be eligible to suggest to your users.',
        }),
    ).exactOptional(),
    LastSuggestionsBuildTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when query suggestions for an index was last updated.',
        }),
    ).exactOptional(),
    LastClearTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Unix timestamp when query suggestions for an index was last cleared.</p> <p>After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. Amazon Kendra only considers re-occurences of a query from the time you cleared suggestions. </p>',
        }),
    ).exactOptional(),
    TotalSuggestionsCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current total count of query suggestions for an index.</p> <p>This count can change when you update your query suggestions settings, if you filter out certain queries from suggestions using a block list, and as the query log accumulates more queries for Amazon Kendra to learn from.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeQuerySuggestionsConfigResponse')

const DescribeQuerySuggestionsConfigRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index with query suggestions that you want to get information on.',
        }),
    ),
  })
  .openapi({ required: ['IndexId'], title: 'DescribeQuerySuggestionsConfigRequest' })
  .openapi('DescribeQuerySuggestionsConfigRequest')

const ThesaurusStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'UPDATING', 'ACTIVE_BUT_UPDATE_FAILED', 'FAILED'])
  .openapi('ThesaurusStatus')

const DescribeThesaurusResponseSchema = z
  .object({
    Id: ThesaurusIdSchema.and(
      z.any().openapi({ description: 'The identifier of the thesaurus.' }),
    ).exactOptional(),
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the thesaurus.' }),
    ).exactOptional(),
    Name: ThesaurusNameSchema.and(
      z.any().openapi({ description: 'The thesaurus name.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The thesaurus description.' }),
    ).exactOptional(),
    Status: ThesaurusStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the thesaurus. When the value is <code>ACTIVE</code>, queries are able to use the thesaurus. If the <code>Status</code> field value is <code>FAILED</code>, the <code>ErrorMessage</code> field provides more information. </p> <p>If the status is <code>ACTIVE_BUT_UPDATE_FAILED</code>, it means that Amazon Kendra could not ingest the new thesaurus file. The old thesaurus file is still active. </p>',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the <code>Status</code> field value is <code>FAILED</code>, the <code>ErrorMessage</code> field provides more information. ',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the thesaurus was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the thesaurus was last updated.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role that gives Amazon Kendra permissions to access thesaurus file specified in <code>SourceS3Path</code>. ',
        }),
    ).exactOptional(),
    SourceS3Path: S3PathSchema.exactOptional(),
    FileSizeBytes: LongSchema.and(
      z.any().openapi({ description: 'The size of the thesaurus file in bytes.' }),
    ).exactOptional(),
    TermCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of unique terms in the thesaurus file. For example, the synonyms <code>a,b,c</code> and <code>a=&gt;d</code>, the term count would be 4. ',
        }),
    ).exactOptional(),
    SynonymRuleCount: LongSchema.and(
      z.any().openapi({ description: 'The number of synonym rules in the thesaurus file.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeThesaurusResponse')

const DescribeThesaurusRequestSchema = z
  .object({
    Id: ThesaurusIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the thesaurus you want to get information on.',
        }),
    ),
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the thesaurus.' }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'DescribeThesaurusRequest' })
  .openapi('DescribeThesaurusRequest')

const DisassociateEntitiesFromExperienceResponseSchema = z
  .object({
    FailedEntityList: FailedEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the users or groups in your IAM Identity Center identity source that failed to properly remove access to your Amazon Kendra experience.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateEntitiesFromExperienceResponse')

const DisassociateEntityListSchema = z
  .array(EntityConfigurationSchema)
  .min(1)
  .max(40)
  .openapi('DisassociateEntityList')

const DisassociateEntitiesFromExperienceRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
    EntityList: DisassociateEntityListSchema.and(
      z
        .any()
        .openapi({
          description: 'Lists users or groups in your IAM Identity Center identity source.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'IndexId', 'EntityList'],
    title: 'DisassociateEntitiesFromExperienceRequest',
  })
  .openapi('DisassociateEntitiesFromExperienceRequest')

const DisassociatePersonasFromEntitiesResponseSchema = z
  .object({
    FailedEntityList: FailedEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the users or groups in your IAM Identity Center identity source that failed to properly remove access to your Amazon Kendra experience.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociatePersonasFromEntitiesResponse')

const EntityIdsListSchema = z.array(EntityIdSchema).min(1).max(25).openapi('EntityIdsList')

const DisassociatePersonasFromEntitiesRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
    EntityIds: EntityIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of users or groups in your IAM Identity Center identity source. For example, user IDs could be user emails.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'IndexId', 'EntityIds'],
    title: 'DisassociatePersonasFromEntitiesRequest',
  })
  .openapi('DisassociatePersonasFromEntitiesRequest')

const QuerySuggestionsIdSchema = z.string().min(1).max(36).openapi('QuerySuggestionsId')

const ResultIdSchema = z.string().min(1).max(73).openapi('ResultId')

const SuggestionHighlightSchema = z
  .object({
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The zero-based location in the response string where the highlight starts.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The zero-based location in the response string where the highlight ends.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The text highlights for a single query suggestion.', required: [] })
  .openapi('SuggestionHighlight')

const SuggestionHighlightListSchema = z
  .array(SuggestionHighlightSchema)
  .openapi('SuggestionHighlightList')

const SuggestionTextWithHighlightsSchema = z
  .object({
    Text: StringSchema.and(
      z.any().openapi({ description: 'The query suggestion text to display to the user.' }),
    ).exactOptional(),
    Highlights: SuggestionHighlightListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning and end of the query suggestion text that should be highlighted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides text and information about where to highlight the query suggestion text.',
    required: [],
  })
  .openapi('SuggestionTextWithHighlights')

const SuggestionValueSchema = z
  .object({
    Text: SuggestionTextWithHighlightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>SuggestionTextWithHighlights</code> structure that contains the query suggestion text and highlights.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The <code>SuggestionTextWithHighlights</code> structure information.',
    required: [],
  })
  .openapi('SuggestionValue')

const SuggestionSchema = z
  .object({
    Id: ResultIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The UUID (universally unique identifier) of a single query suggestion.',
        }),
    ).exactOptional(),
    Value: SuggestionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value for the UUID (universally unique identifier) of a single query suggestion.</p> <p>The value is the text string of a suggestion.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A single query suggestion.', required: [] })
  .openapi('Suggestion')

const SuggestionListSchema = z.array(SuggestionSchema).openapi('SuggestionList')

const GetQuerySuggestionsResponseSchema = z
  .object({
    QuerySuggestionsId: QuerySuggestionsIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier for a list of query suggestions for an index.' }),
    ).exactOptional(),
    Suggestions: SuggestionListSchema.and(
      z.any().openapi({ description: 'A list of query suggestions for an index.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQuerySuggestionsResponse')

const SuggestionQueryTextSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .openapi('SuggestionQueryText')

const GetQuerySuggestionsRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index you want to get query suggestions from.',
        }),
    ),
    QueryText: SuggestionQueryTextSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The text of a user's query to generate query suggestions.</p> <p>A query is suggested if the query prefix matches what a user starts to type as their query.</p> <p>Amazon Kendra does not show any suggestions if a user types fewer than two characters or more than 60 characters. A query must also have at least one search result and contain at least one word of more than four characters.</p>",
        }),
    ),
    MaxSuggestionsCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of query suggestions you want to show to your users.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'QueryText'], title: 'GetQuerySuggestionsRequest' })
  .openapi('GetQuerySuggestionsRequest')

const SnapshotsDataHeaderFieldsSchema = z.array(StringSchema).openapi('SnapshotsDataHeaderFields')

const SnapshotsDataRecordSchema = z.array(StringSchema).openapi('SnapshotsDataRecord')

const SnapshotsDataRecordsSchema = z
  .array(SnapshotsDataRecordSchema)
  .openapi('SnapshotsDataRecords')

const GetSnapshotsResponseSchema = z
  .object({
    SnapShotTimeFilter: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp for the beginning and end of the time window for the search metrics data.',
        }),
    ).exactOptional(),
    SnapshotsDataHeader: SnapshotsDataHeaderFieldsSchema.and(
      z.any().openapi({ description: 'The column headers for the search metrics data.' }),
    ).exactOptional(),
    SnapshotsData: SnapshotsDataRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The search metrics data. The data returned depends on the metric type you requested.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of search metrics data.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSnapshotsResponse')

const IntervalSchema = z
  .enum([
    'THIS_MONTH',
    'THIS_WEEK',
    'ONE_WEEK_AGO',
    'TWO_WEEKS_AGO',
    'ONE_MONTH_AGO',
    'TWO_MONTHS_AGO',
  ])
  .openapi('Interval')

const MetricTypeSchema = z
  .enum([
    'QUERIES_BY_COUNT',
    'QUERIES_BY_ZERO_CLICK_RATE',
    'QUERIES_BY_ZERO_RESULT_RATE',
    'DOCS_BY_CLICK_COUNT',
    'AGG_QUERY_DOC_METRICS',
    'TREND_QUERY_DOC_METRICS',
  ])
  .openapi('MetricType')

const GetSnapshotsRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index to get search metrics data.' }),
    ),
    Interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time interval or time window to get search metrics data. The time interval uses the time zone of your index. You can view data in the following time windows:</p> <ul> <li> <p> <code>THIS_WEEK</code>: The current week, starting on the Sunday and ending on the day before the current date.</p> </li> <li> <p> <code>ONE_WEEK_AGO</code>: The previous week, starting on the Sunday and ending on the following Saturday.</p> </li> <li> <p> <code>TWO_WEEKS_AGO</code>: The week before the previous week, starting on the Sunday and ending on the following Saturday.</p> </li> <li> <p> <code>THIS_MONTH</code>: The current month, starting on the first day of the month and ending on the day before the current date.</p> </li> <li> <p> <code>ONE_MONTH_AGO</code>: The previous month, starting on the first day of the month and ending on the last day of the month.</p> </li> <li> <p> <code>TWO_MONTHS_AGO</code>: The month before the previous month, starting on the first day of the month and ending on last day of the month.</p> </li> </ul>',
        }),
    ),
    MetricType: MetricTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric you want to retrieve. You can specify only one metric per call.</p> <p>For more information about the metrics you can view, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-analytics.html">Gaining insights with search analytics</a>.</p>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of search metrics data.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of returned data for the metric.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'Interval', 'MetricType'], title: 'GetSnapshotsRequest' })
  .openapi('GetSnapshotsRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const AccessControlConfigurationSummarySchema = z
  .object({
    Id: AccessControlConfigurationIdSchema.and(
      z.any().openapi({ description: 'The identifier of the access control configuration.' }),
    ),
  })
  .openapi({
    required: ['Id'],
    description:
      'Summary information on an access control configuration that you created for your documents in an index.',
  })
  .openapi('AccessControlConfigurationSummary')

const AccessControlConfigurationSummaryListSchema = z
  .array(AccessControlConfigurationSummarySchema)
  .openapi('AccessControlConfigurationSummaryList')

const ListAccessControlConfigurationsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token, which you can use in the subsequent request to retrieve the next set of access control configurations.',
        }),
    ).exactOptional(),
    AccessControlConfigurations: AccessControlConfigurationSummaryListSchema.and(
      z.any().openapi({ description: 'The details of your access control configurations.' }),
    ),
  })
  .openapi({ required: ['AccessControlConfigurations'] })
  .openapi('ListAccessControlConfigurationsResponse')

const ListAccessControlConfigurationsRequestSchema: z.ZodType<ListAccessControlConfigurationsRequestType> =
  z
    .lazy(() =>
      z
        .object({
          IndexId: IndexIdSchema.and(
            z
              .any()
              .openapi({
                description: 'The identifier of the index for the access control configuration.',
              }),
          ),
          NextToken: StringSchema.and(
            z
              .any()
              .openapi({
                description:
                  "If the previous response was incomplete (because there's more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of access control configurations.",
              }),
          ).exactOptional(),
          MaxResults: MaxResultsIntegerForListAccessControlConfigurationsRequestSchema.and(
            z
              .any()
              .openapi({
                description: 'The maximum number of access control configurations to return.',
              }),
          ).exactOptional(),
        })
        .openapi({ required: ['IndexId'], title: 'ListAccessControlConfigurationsRequest' }),
    )
    .openapi('ListAccessControlConfigurationsRequest')

const MetricValueSchema = z
  .string()
  .regex(/(([1-9][0-9]*)|0)/)
  .openapi('MetricValue')

const DataSourceSyncJobMetricsSchema = z
  .object({
    DocumentsAdded: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents added from the data source up to now in the data source sync.',
        }),
    ).exactOptional(),
    DocumentsModified: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents modified in the data source up to now in the data source sync run.',
        }),
    ).exactOptional(),
    DocumentsDeleted: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents deleted from the data source up to now in the data source sync run.',
        }),
    ).exactOptional(),
    DocumentsFailed: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents that failed to sync from the data source up to now in the data source sync run.',
        }),
    ).exactOptional(),
    DocumentsScanned: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current number of documents crawled by the current sync job in the data source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.',
    required: [],
  })
  .openapi('DataSourceSyncJobMetrics')

const DataSourceSyncJobSchema = z
  .object({
    ExecutionId: StringSchema.and(
      z.any().openapi({ description: 'A identifier for the synchronization job.' }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the synchronization job started.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The Unix timestamp when the synchronization job completed.' }),
    ).exactOptional(),
    Status: DataSourceSyncJobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The execution status of the synchronization job. When the <code>Status</code> field is set to <code>SUCCEEDED</code>, the synchronization job is done. If the status code is set to <code>FAILED</code>, the <code>ErrorCode</code> and <code>ErrorMessage</code> fields give you the reason for the failure.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>Status</code> field is set to <code>ERROR</code>, the <code>ErrorMessage</code> field contains a description of the error that caused the synchronization to fail.',
        }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>Status</code> field is set to <code>FAILED</code>, the <code>ErrorCode</code> field indicates the reason the synchronization failed.',
        }),
    ).exactOptional(),
    DataSourceErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the reason that the synchronization failed is due to an error with the underlying data source, this field contains a code that identifies the error.',
        }),
    ).exactOptional(),
    Metrics: DataSourceSyncJobMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a data source synchronization job.',
    required: [],
  })
  .openapi('DataSourceSyncJob')

const DataSourceSyncJobHistoryListSchema = z
  .array(DataSourceSyncJobSchema)
  .openapi('DataSourceSyncJobHistoryList')

const ListDataSourceSyncJobsResponseSchema = z
  .object({
    History: DataSourceSyncJobHistoryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A history of synchronization jobs for the data source connector.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of jobs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataSourceSyncJobsResponse')

const ListDataSourceSyncJobsRequestSchema: z.ZodType<ListDataSourceSyncJobsRequestType> = z
  .lazy(() =>
    z
      .object({
        Id: DataSourceIdSchema.and(
          z.any().openapi({ description: 'The identifier of the data source connector.' }),
        ),
        IndexId: IndexIdSchema.and(
          z
            .any()
            .openapi({
              description: 'The identifier of the index used with the data source connector.',
            }),
        ),
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of jobs.',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListDataSourceSyncJobsRequestSchema.and(
          z
            .any()
            .openapi({
              description:
                'The maximum number of synchronization jobs to return in the response. If there are fewer results in the list, this response contains only the actual results.',
            }),
        ).exactOptional(),
        StartTimeFilter: TimeRangeSchema.and(
          z
            .any()
            .openapi({
              description:
                'When specified, the synchronization jobs returned in the list are limited to jobs between the specified dates.',
            }),
        ).exactOptional(),
        StatusFilter: DataSourceSyncJobStatusSchema.and(
          z
            .any()
            .openapi({
              description:
                'Only returns synchronization jobs with the <code>Status</code> field equal to the specified status.',
            }),
        ).exactOptional(),
      })
      .openapi({ required: ['Id', 'IndexId'], title: 'ListDataSourceSyncJobsRequest' }),
  )
  .openapi('ListDataSourceSyncJobsRequest')

const DataSourceSummarySchema = z
  .object({
    Name: DataSourceNameSchema.and(
      z.any().openapi({ description: 'The name of the data source.' }),
    ).exactOptional(),
    Id: DataSourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for the data source.' }),
    ).exactOptional(),
    Type: DataSourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the data source.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The Unix timestamp when the data source connector was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the data source connector was last updated.',
        }),
    ).exactOptional(),
    Status: DataSourceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the data source. When the status is <code>ACTIVE</code> the data source is ready to use.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for a language. This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information for a Amazon Kendra data source.', required: [] })
  .openapi('DataSourceSummary')

const DataSourceSummaryListSchema = z
  .array(DataSourceSummarySchema)
  .openapi('DataSourceSummaryList')

const ListDataSourcesResponseSchema = z
  .object({
    SummaryItems: DataSourceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of summary information for one or more data source connector.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of data source connectors.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataSourcesResponse')

const ListDataSourcesRequestSchema: z.ZodType<ListDataSourcesRequestType> = z
  .lazy(() =>
    z
      .object({
        IndexId: IndexIdSchema.and(
          z
            .any()
            .openapi({
              description:
                'The identifier of the index used with one or more data source connectors.',
            }),
        ),
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of data source connectors. ',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListDataSourcesRequestSchema.and(
          z
            .any()
            .openapi({ description: 'The maximum number of data source connectors to return.' }),
        ).exactOptional(),
      })
      .openapi({ required: ['IndexId'], title: 'ListDataSourcesRequest' }),
  )
  .openapi('ListDataSourcesRequest')

const PersonasSummarySchema = z
  .object({
    EntityId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of a user or group in your IAM Identity Center identity source. For example, a user ID could be an email.',
        }),
    ).exactOptional(),
    Persona: PersonaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The persona that defines the specific permissions of the user or group in your IAM Identity Center identity source. The available personas or access roles are <code>Owner</code> and <code>Viewer</code>. For more information on these personas, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html#access-search-experience">Providing access to your search page</a>.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The Unix timestamp when the summary information was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the summary information was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information for users or groups in your IAM Identity Center identity source. This applies to users and groups with specific permissions that define their level of access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
    required: [],
  })
  .openapi('PersonasSummary')

const PersonasSummaryListSchema = z.array(PersonasSummarySchema).openapi('PersonasSummaryList')

const ListEntityPersonasResponseSchema = z
  .object({
    SummaryItems: PersonasSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of summary information for one or more users or groups.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of users or groups.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntityPersonasResponse')

const ListEntityPersonasRequestSchema: z.ZodType<ListEntityPersonasRequestType> = z
  .lazy(() =>
    z
      .object({
        Id: ExperienceIdSchema.and(
          z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
        ),
        IndexId: IndexIdSchema.and(
          z
            .any()
            .openapi({
              description: 'The identifier of the index for your Amazon Kendra experience.',
            }),
        ),
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of users or groups.',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListEntityPersonasRequestSchema.and(
          z.any().openapi({ description: 'The maximum number of returned users or groups.' }),
        ).exactOptional(),
      })
      .openapi({ required: ['Id', 'IndexId'], title: 'ListEntityPersonasRequest' }),
  )
  .openapi('ListEntityPersonasRequest')

const NameTypeSchema = z
  .string()
  .regex(/^[\S\s]*$/)
  .min(1)
  .max(100)
  .openapi('NameType')

const EntityDisplayDataSchema = z
  .object({
    UserName: NameTypeSchema.and(
      z.any().openapi({ description: 'The name of the user.' }),
    ).exactOptional(),
    GroupName: NameTypeSchema.and(
      z.any().openapi({ description: 'The name of the group.' }),
    ).exactOptional(),
    IdentifiedUserName: NameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user.' }),
    ).exactOptional(),
    FirstName: NameTypeSchema.and(
      z.any().openapi({ description: 'The first name of the user.' }),
    ).exactOptional(),
    LastName: NameTypeSchema.and(
      z.any().openapi({ description: 'The last name of the user.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the user entity.', required: [] })
  .openapi('EntityDisplayData')

const ExperienceEntitiesSummarySchema = z
  .object({
    EntityId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of a user or group in your IAM Identity Center identity source. For example, a user ID could be an email.',
        }),
    ).exactOptional(),
    EntityType: EntityTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Shows the type as <code>User</code> or <code>Group</code>.' }),
    ).exactOptional(),
    DisplayData: EntityDisplayDataSchema.and(
      z.any().openapi({ description: 'Information about the user entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information for users or groups in your IAM Identity Center identity source with granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
    required: [],
  })
  .openapi('ExperienceEntitiesSummary')

const ExperienceEntitiesSummaryListSchema = z
  .array(ExperienceEntitiesSummarySchema)
  .openapi('ExperienceEntitiesSummaryList')

const ListExperienceEntitiesResponseSchema = z
  .object({
    SummaryItems: ExperienceEntitiesSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of summary information for one or more users or groups.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of users or groups.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExperienceEntitiesResponse')

const ListExperienceEntitiesRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of users or groups.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'ListExperienceEntitiesRequest' })
  .openapi('ListExperienceEntitiesRequest')

const ExperiencesSummarySchema = z
  .object({
    Name: ExperienceNameSchema.and(
      z.any().openapi({ description: 'The name of your Amazon Kendra experience.' }),
    ).exactOptional(),
    Id: ExperienceIdSchema.and(
      z.any().openapi({ description: 'The identifier of your Amazon Kendra experience.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when your Amazon Kendra experience was created.',
        }),
    ).exactOptional(),
    Status: ExperienceStatusSchema.and(
      z.any().openapi({ description: 'The processing status of your Amazon Kendra experience.' }),
    ).exactOptional(),
    Endpoints: ExperienceEndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint URLs for your Amazon Kendra experiences. The URLs are unique and fully hosted by Amazon Web Services.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information for your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
    required: [],
  })
  .openapi('ExperiencesSummary')

const ExperiencesSummaryListSchema = z
  .array(ExperiencesSummarySchema)
  .openapi('ExperiencesSummaryList')

const ListExperiencesResponseSchema = z
  .object({
    SummaryItems: ExperiencesSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of summary information for one or more Amazon Kendra experiences.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of Amazon Kendra experiences.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExperiencesResponse')

const ListExperiencesRequestSchema: z.ZodType<ListExperiencesRequestType> = z
  .lazy(() =>
    z
      .object({
        IndexId: IndexIdSchema.and(
          z
            .any()
            .openapi({
              description: 'The identifier of the index for your Amazon Kendra experience.',
            }),
        ),
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Kendra experiences.',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListExperiencesRequestSchema.and(
          z
            .any()
            .openapi({ description: 'The maximum number of returned Amazon Kendra experiences.' }),
        ).exactOptional(),
      })
      .openapi({ required: ['IndexId'], title: 'ListExperiencesRequest' }),
  )
  .openapi('ListExperiencesRequest')

const FaqSummarySchema = z
  .object({
    Id: FaqIdSchema.and(
      z.any().openapi({ description: 'The identifier of the FAQ.' }),
    ).exactOptional(),
    Name: FaqNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name that you assigned the FAQ when you created or updated the FAQ.',
        }),
    ).exactOptional(),
    Status: FaqStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the FAQ. When the status is <code>ACTIVE</code> the FAQ is ready for use.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the FAQ was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the FAQ was last updated.' }),
    ).exactOptional(),
    FileFormat: FaqFileFormatSchema.and(
      z.any().openapi({ description: 'The file type used to create the FAQ. ' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for a language. This shows a supported language for the FAQ document as part of the summary information for FAQs. English is supported by default. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information for frequently asked questions and answers included in an index.',
    required: [],
  })
  .openapi('FaqSummary')

const FaqSummaryItemsSchema = z.array(FaqSummarySchema).openapi('FaqSummaryItems')

const ListFaqsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of FAQs.',
        }),
    ).exactOptional(),
    FaqSummaryItems: FaqSummaryItemsSchema.and(
      z
        .any()
        .openapi({
          description: 'information about the FAQs associated with the specified index.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFaqsResponse')

const ListFaqsRequestSchema: z.ZodType<ListFaqsRequestType> = z
  .lazy(() =>
    z
      .object({
        IndexId: IndexIdSchema.and(
          z.any().openapi({ description: 'The index that contains the FAQ lists.' }),
        ),
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of FAQs.',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListFaqsRequestSchema.and(
          z
            .any()
            .openapi({
              description:
                'The maximum number of FAQs to return in the response. If there are fewer results in the list, this response contains only the actual results.',
            }),
        ).exactOptional(),
      })
      .openapi({ required: ['IndexId'], title: 'ListFaqsRequest' }),
  )
  .openapi('ListFaqsRequest')

const FeaturedResultsSetSummarySchema = z
  .object({
    FeaturedResultsSetId: FeaturedResultsSetIdSchema.and(
      z.any().openapi({ description: 'The identifier of the set of featured results.' }),
    ).exactOptional(),
    FeaturedResultsSetName: FeaturedResultsSetNameSchema.and(
      z.any().openapi({ description: 'The name for the set of featured results.' }),
    ).exactOptional(),
    Status: FeaturedResultsSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the set of featured results. When the value is <code>ACTIVE</code>, featured results are ready for use. You can still configure your settings before setting the status to <code>ACTIVE</code>. You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code> using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for featured results must be unique per featured results set for each index, whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the set of featured results was last updated.',
        }),
    ).exactOptional(),
    CreationTimestamp: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp when the set of featured results was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Summary information for a set of featured results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.",
    required: [],
  })
  .openapi('FeaturedResultsSetSummary')

const FeaturedResultsSetSummaryItemsSchema = z
  .array(FeaturedResultsSetSummarySchema)
  .openapi('FeaturedResultsSetSummaryItems')

const ListFeaturedResultsSetsResponseSchema = z
  .object({
    FeaturedResultsSetSummaryItems: FeaturedResultsSetSummaryItemsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of summary information for one or more featured results sets.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns a pagination token in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFeaturedResultsSetsResponse')

const ListFeaturedResultsSetsRequestSchema: z.ZodType<ListFeaturedResultsSetsRequestType> = z
  .lazy(() =>
    z
      .object({
        IndexId: IndexIdSchema.and(
          z
            .any()
            .openapi({ description: 'The identifier of the index used for featuring results.' }),
        ),
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the response is truncated, Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of featured results sets.',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListFeaturedResultsSetsRequestSchema.and(
          z
            .any()
            .openapi({ description: 'The maximum number of featured results sets to return.' }),
        ).exactOptional(),
      })
      .openapi({ required: ['IndexId'], title: 'ListFeaturedResultsSetsRequest' }),
  )
  .openapi('ListFeaturedResultsSetsRequest')

const GroupSummarySchema = z
  .object({
    GroupId: GroupIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the group you want group summary information on.',
        }),
    ).exactOptional(),
    OrderingId: PrincipalOrderingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp identifier used for the latest <code>PUT</code> or <code>DELETE</code> action.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information for groups.', required: [] })
  .openapi('GroupSummary')

const ListOfGroupSummariesSchema = z.array(GroupSummarySchema).openapi('ListOfGroupSummaries')

const ListGroupsOlderThanOrderingIdResponseSchema = z
  .object({
    GroupsSummaries: ListOfGroupSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Summary information for list of groups that are mapped to users before a given ordering or timestamp identifier. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of groups that are mapped to users before a given ordering or timestamp identifier. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupsOlderThanOrderingIdResponse')

const MaxResultsIntegerForListPrincipalsRequestSchema = z
  .int()
  .min(1)
  .max(10)
  .openapi('MaxResultsIntegerForListPrincipalsRequest')

const ListGroupsOlderThanOrderingIdRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index for getting a list of groups mapped to users before a given ordering or timestamp identifier.',
        }),
    ),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the data source for getting a list of groups mapped to users before a given ordering timestamp identifier.',
        }),
    ).exactOptional(),
    OrderingId: PrincipalOrderingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp identifier used for the latest <code>PUT</code> or <code>DELETE</code> action for mapping users to their groups.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users before a given ordering or timestamp identifier. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerForListPrincipalsRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of returned groups that are mapped to users before a given ordering or timestamp identifier. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'OrderingId'], title: 'ListGroupsOlderThanOrderingIdRequest' })
  .openapi('ListGroupsOlderThanOrderingIdRequest')

const IndexConfigurationSummarySchema = z
  .object({
    Name: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the index.' }),
    ).exactOptional(),
    Id: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A identifier for the index. Use this to identify the index when you are using APIs such as <code>Query</code>, <code>DescribeIndex</code>, <code>UpdateIndex</code>, and <code>DeleteIndex</code>.',
        }),
    ).exactOptional(),
    Edition: IndexEditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the index is a Enterprise Edition index or a Developer Edition index. ',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the index was created.' }),
    ),
    UpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the index was last updated.' }),
    ),
    Status: IndexStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the index. When the status is <code>ACTIVE</code>, the index is ready to search.',
        }),
    ),
  })
  .openapi({
    required: ['CreatedAt', 'UpdatedAt', 'Status'],
    description: 'Summary information on the configuration of an index.',
  })
  .openapi('IndexConfigurationSummary')

const IndexConfigurationSummaryListSchema = z
  .array(IndexConfigurationSummarySchema)
  .openapi('IndexConfigurationSummaryList')

const ListIndicesResponseSchema = z
  .object({
    IndexConfigurationSummaryItems: IndexConfigurationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of summary information on the configuration of one or more indexes.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of indexes.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIndicesResponse')

const ListIndicesRequestSchema: z.ZodType<ListIndicesRequestType> = z
  .lazy(() =>
    z
      .object({
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of indexes. ',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListIndicesRequestSchema.and(
          z.any().openapi({ description: 'The maximum number of indices to return.' }),
        ).exactOptional(),
      })
      .openapi({ title: 'ListIndicesRequest', required: [] }),
  )
  .openapi('ListIndicesRequest')

const QuerySuggestionsBlockListSummarySchema = z
  .object({
    Id: QuerySuggestionsBlockListIdSchema.and(
      z.any().openapi({ description: 'The identifier of a block list.' }),
    ).exactOptional(),
    Name: QuerySuggestionsBlockListNameSchema.and(
      z.any().openapi({ description: 'The name of the block list.' }),
    ).exactOptional(),
    Status: QuerySuggestionsBlockListStatusSchema.and(
      z.any().openapi({ description: 'The status of the block list.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the block list was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the block list was last updated.' }),
    ).exactOptional(),
    ItemCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of items in the block list file.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Summary information on a query suggestions block list.</p> <p>This includes information on the block list ID, block list name, when the block list was created, when the block list was last updated, and the count of block words/phrases in the block list.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>',
    required: [],
  })
  .openapi('QuerySuggestionsBlockListSummary')

const QuerySuggestionsBlockListSummaryItemsSchema = z
  .array(QuerySuggestionsBlockListSummarySchema)
  .openapi('QuerySuggestionsBlockListSummaryItems')

const ListQuerySuggestionsBlockListsResponseSchema = z
  .object({
    BlockListSummaryItems: QuerySuggestionsBlockListSummaryItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Summary items for a block list.</p> <p>This includes summary items on the block list ID, block list name, when the block list was created, when the block list was last updated, and the count of block words/phrases in the block list.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of block lists.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListQuerySuggestionsBlockListsResponse')

const MaxResultsIntegerForListQuerySuggestionsBlockListsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxResultsIntegerForListQuerySuggestionsBlockLists')

const ListQuerySuggestionsBlockListsRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the index for a list of all block lists that exist for that index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of block lists (<code>BlockListSummaryItems</code>).',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerForListQuerySuggestionsBlockListsSchema.and(
      z.any().openapi({ description: 'The maximum number of block lists to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId'], title: 'ListQuerySuggestionsBlockListsRequest' })
  .openapi('ListQuerySuggestionsBlockListsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of tags associated with the index, FAQ, or data source.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the index, FAQ, or data source to get a list of tags for.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ResourceUnavailableExceptionSchema = z.any().openapi('ResourceUnavailableException')

const ThesaurusSummarySchema = z
  .object({
    Id: ThesaurusIdSchema.and(
      z.any().openapi({ description: 'The identifier of the thesaurus.' }),
    ).exactOptional(),
    Name: ThesaurusNameSchema.and(
      z.any().openapi({ description: 'The name of the thesaurus.' }),
    ).exactOptional(),
    Status: ThesaurusStatusSchema.and(
      z.any().openapi({ description: 'The status of the thesaurus.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the thesaurus was created.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the thesaurus was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An array of summary information for a thesaurus or multiple thesauri.',
    required: [],
  })
  .openapi('ThesaurusSummary')

const ThesaurusSummaryItemsSchema = z.array(ThesaurusSummarySchema).openapi('ThesaurusSummaryItems')

const ListThesauriResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of thesauri. ',
        }),
    ).exactOptional(),
    ThesaurusSummaryItems: ThesaurusSummaryItemsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of summary information for a thesaurus or multiple thesauri.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListThesauriResponse')

const ListThesauriRequestSchema: z.ZodType<ListThesauriRequestType> = z
  .lazy(() =>
    z
      .object({
        IndexId: IndexIdSchema.and(
          z
            .any()
            .openapi({ description: 'The identifier of the index with one or more thesauri.' }),
        ),
        NextToken: NextTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of thesauri (<code>ThesaurusSummaryItems</code>). ',
            }),
        ).exactOptional(),
        MaxResults: MaxResultsIntegerForListThesauriRequestSchema.and(
          z.any().openapi({ description: 'The maximum number of thesauri to return.' }),
        ).exactOptional(),
      })
      .openapi({ required: ['IndexId'], title: 'ListThesauriRequest' }),
  )
  .openapi('ListThesauriRequest')

const MemberGroupSchema = z
  .object({
    GroupId: GroupIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the sub group you want to map to a group.' }),
    ),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the data source for the sub group you want to map to a group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GroupId'], description: 'The sub groups that belong to a group.' })
  .openapi('MemberGroup')

const MemberGroupsSchema = z.array(MemberGroupSchema).min(1).max(1000).openapi('MemberGroups')

const UserIdSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(1024)
  .openapi('UserId')

const MemberUserSchema = z
  .object({
    UserId: UserIdSchema.and(
      z.any().openapi({ description: 'The identifier of the user you want to map to a group.' }),
    ),
  })
  .openapi({ required: ['UserId'], description: 'The users that belong to a group.' })
  .openapi('MemberUser')

const MemberUsersSchema = z.array(MemberUserSchema).min(1).max(1000).openapi('MemberUsers')

const GroupMembersSchema = z
  .object({
    MemberGroups: MemberGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of sub groups that belong to a group. For example, the sub groups "Research", "Engineering", and "Sales and Marketing" all belong to the group "Company".',
        }),
    ).exactOptional(),
    MemberUsers: MemberUsersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users that belong to a group. For example, a list of interns all belong to the "Interns" group.',
        }),
    ).exactOptional(),
    S3PathforGroupMembers: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000.</p> <p>You can download this <a href="https://docs.aws.amazon.com/kendra/latest/dg/samples/group_members.zip">example S3 file</a> that uses the correct format for listing group members. Note, <code>dataSourceId</code> is optional. The value of <code>type</code> for a group is always <code>GROUP</code> and for a user it is always <code>USER</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of users or sub groups that belong to a group. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
    required: [],
  })
  .openapi('GroupMembers')

const PutPrincipalMappingRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index you want to map users to their groups.',
        }),
    ),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the data source you want to map users to their groups.</p> <p>This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company\'s documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce.</p>',
        }),
    ).exactOptional(),
    GroupId: GroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of the group you want to map its users to.' }),
    ),
    GroupMembers: GroupMembersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list that contains your users or sub groups that belong the same group.</p> <p>For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing".</p> <p>If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000.</p>',
        }),
    ),
    OrderingId: PrincipalOrderingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The timestamp identifier you specify to ensure Amazon Kendra does not override the latest <code>PUT</code> action with previous actions. The highest number ID, which is the ordering ID, is the latest action you want to process and apply on top of other actions with lower number IDs. This prevents previous actions with lower number IDs from possibly overriding the latest action.</p> <p>The ordering ID can be the Unix time of the last update you made to a group members list. You would then provide this list when calling <code>PutPrincipalMapping</code>. This ensures your <code>PUT</code> action for that updated group with the latest members list doesn't get overwritten by earlier <code>PUT</code> actions for the same group which are yet to be processed.</p> <p>The default ordering ID is the current Unix time in milliseconds that the action was received by Amazon Kendra.</p>",
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of a role that has access to the S3 file that contains your list of users or sub groups that belong to a group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html#iam-roles-ds">IAM roles for Amazon Kendra</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexId', 'GroupId', 'GroupMembers'],
    title: 'PutPrincipalMappingRequest',
  })
  .openapi('PutPrincipalMappingRequest')

const QueryIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9-]*/)
  .min(1)
  .max(36)
  .openapi('QueryId')

const QueryResultTypeSchema = z
  .enum(['DOCUMENT', 'QUESTION_ANSWER', 'ANSWER'])
  .openapi('QueryResultType')

const QueryResultFormatSchema = z.enum(['TABLE', 'TEXT']).openapi('QueryResultFormat')

const AdditionalResultAttributeValueTypeSchema = z
  .literal('TEXT_WITH_HIGHLIGHTS_VALUE')
  .openapi('AdditionalResultAttributeValueType')

const HighlightTypeSchema = z.enum(['STANDARD', 'THESAURUS_SYNONYM']).openapi('HighlightType')

const HighlightSchema = z
  .object({
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The zero-based location in the response string where the highlight starts.',
        }),
    ),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The zero-based location in the response string where the highlight ends.',
        }),
    ),
    TopAnswer: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the response is the best response. True if this is the best response; otherwise, false.',
        }),
    ).exactOptional(),
    Type: HighlightTypeSchema.and(
      z.any().openapi({ description: 'The highlight type. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BeginOffset', 'EndOffset'],
    description:
      'Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response.',
  })
  .openapi('Highlight')

const HighlightListSchema = z.array(HighlightSchema).openapi('HighlightList')

const TextWithHighlightsSchema = z
  .object({
    Text: StringSchema.and(
      z.any().openapi({ description: 'The text to display to the user.' }),
    ).exactOptional(),
    Highlights: HighlightListSchema.and(
      z
        .any()
        .openapi({ description: 'The beginning and end of the text that should be highlighted.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides text and information about where to highlight the text.',
    required: [],
  })
  .openapi('TextWithHighlights')

const AdditionalResultAttributeValueSchema = z
  .object({
    TextWithHighlightsValue: TextWithHighlightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text associated with the attribute and information about the highlight to apply to the text.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An attribute returned with a document from a search.', required: [] })
  .openapi('AdditionalResultAttributeValue')

const AdditionalResultAttributeSchema = z
  .object({
    Key: StringSchema.and(
      z.any().openapi({ description: 'The key that identifies the attribute.' }),
    ),
    ValueType: AdditionalResultAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The data type of the <code>Value</code> property.' }),
    ),
    Value: AdditionalResultAttributeValueSchema.and(
      z.any().openapi({ description: 'An object that contains the attribute value.' }),
    ),
  })
  .openapi({
    required: ['Key', 'ValueType', 'Value'],
    description: 'An attribute returned from an index query.',
  })
  .openapi('AdditionalResultAttribute')

const AdditionalResultAttributeListSchema = z
  .array(AdditionalResultAttributeSchema)
  .openapi('AdditionalResultAttributeList')

const ScoreConfidenceSchema = z
  .enum(['VERY_HIGH', 'HIGH', 'MEDIUM', 'LOW', 'NOT_AVAILABLE'])
  .openapi({ description: 'Enumeration for query score confidence.' })
  .openapi('ScoreConfidence')

const ScoreAttributesSchema = z
  .object({
    ScoreConfidence: ScoreConfidenceSchema.and(
      z
        .any()
        .openapi({
          description: 'A relative ranking for how well the response matches the query.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a relative ranking that indicates how confident Amazon Kendra is that the response matches the query.',
    required: [],
  })
  .openapi('ScoreAttributes')

const FeedbackTokenSchema = z
  .string()
  .regex(/^\P{C}*.\P{C}*$/u)
  .min(1)
  .max(2048)
  .openapi('FeedbackToken')

const TableCellSchema = z
  .object({
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actual value or content within a table cell. A table cell could contain a date value of a year, or a string value of text, for example.',
        }),
    ).exactOptional(),
    TopAnswer: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> if the response of the table cell is the top answer. This is the cell value or content with the highest confidence score or is the most relevant to the query.',
        }),
    ).exactOptional(),
    Highlighted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> means that the table cell has a high enough confidence and is relevant to the query, so the value or content should be highlighted.',
        }),
    ).exactOptional(),
    Header: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>TRUE</code> means that the table cell should be treated as a header.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a table cell in a table excerpt.',
    required: [],
  })
  .openapi('TableCell')

const TableCellListSchema = z.array(TableCellSchema).openapi('TableCellList')

const TableRowSchema = z
  .object({
    Cells: TableCellListSchema.and(
      z.any().openapi({ description: 'A list of table cells in a row.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a row in a table excerpt.', required: [] })
  .openapi('TableRow')

const TableRowListSchema = z.array(TableRowSchema).openapi('TableRowList')

const TableExcerptSchema = z
  .object({
    Rows: TableRowListSchema.and(
      z.any().openapi({ description: 'A list of rows in the table excerpt.' }),
    ).exactOptional(),
    TotalNumberOfRows: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'A count of the number of rows in the original table within the document.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An excerpt from a table within a document. The table excerpt displays up to five columns and three rows, depending on how many table cells are relevant to the query and how many columns are available in the original table. The top most relevant cell is displayed in the table excerpt, along with the next most relevant cells.',
    required: [],
  })
  .openapi('TableExcerpt')

const QueryResultItemSchema = z
  .object({
    Id: ResultIdSchema.and(
      z.any().openapi({ description: 'The identifier for the query result.' }),
    ).exactOptional(),
    Type: QueryResultTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of document within the response. For example, a response could include a question-answer that's relevant to the query.",
        }),
    ).exactOptional(),
    Format: QueryResultFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the <code>Type</code> of document within the response is <code>ANSWER</code>, then it is either a <code>TABLE</code> answer or <code>TEXT</code> answer. If it's a table answer, a table excerpt is returned in <code>TableExcerpt</code>. If it's a text answer, a text excerpt is returned in <code>DocumentExcerpt</code>.",
        }),
    ).exactOptional(),
    AdditionalAttributes: AdditionalResultAttributeListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more additional attributes associated with the query result.',
        }),
    ).exactOptional(),
    DocumentId: DocumentIdSchema.and(
      z.any().openapi({ description: 'The identifier for the document.' }),
    ).exactOptional(),
    DocumentTitle: TextWithHighlightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The title of the document. Contains the text of the title and information for highlighting the relevant terms in the title.',
        }),
    ).exactOptional(),
    DocumentExcerpt: TextWithHighlightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An extract of the text in the document. Contains information about highlighting the relevant terms in the excerpt.',
        }),
    ).exactOptional(),
    DocumentURI: UrlSchema.and(
      z.any().openapi({ description: 'The URI of the original location of the document.' }),
    ).exactOptional(),
    DocumentAttributes: DocumentAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of document attributes assigned to a document in the search results. For example, the document author (<code>_author</code>) or the source URI (<code>_source_uri</code>) of the document.',
        }),
    ).exactOptional(),
    ScoreAttributes: ScoreAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the confidence that Amazon Kendra has that a result matches the query that you provided. Each result is placed into a bin that indicates the confidence, <code>VERY_HIGH</code>, <code>HIGH</code>, <code>MEDIUM</code> and <code>LOW</code>. You can use the score to determine if a response meets the confidence needed for your application.</p> <p>The field is only set to <code>LOW</code> when the <code>Type</code> field is set to <code>DOCUMENT</code> and Amazon Kendra is not confident that the result matches the query.</p>',
        }),
    ).exactOptional(),
    FeedbackToken: FeedbackTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that identifies a particular result from a particular query. Use this token to provide click-through feedback for the result. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/submitting-feedback.html">Submitting feedback </a>.',
        }),
    ).exactOptional(),
    TableExcerpt: TableExcerptSchema.and(
      z.any().openapi({ description: 'An excerpt from a table within a document.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p>',
    required: [],
  })
  .openapi('QueryResultItem')

const QueryResultItemListSchema = z.array(QueryResultItemSchema).openapi('QueryResultItemList')

const WarningMessageSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(2048)
  .openapi('WarningMessage')

const WarningCodeSchema = z.literal('QUERY_LANGUAGE_INVALID_SYNTAX').openapi('WarningCode')

const WarningSchema = z
  .object({
    Message: WarningMessageSchema.and(
      z.any().openapi({ description: 'The message that explains the problem with the query.' }),
    ).exactOptional(),
    Code: WarningCodeSchema.and(
      z.any().openapi({ description: 'The code used to show the type of warning for the query.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The warning code and message that explains a problem with a query.',
    required: [],
  })
  .openapi('Warning')

const WarningListSchema = z.array(WarningSchema).length(1).openapi('WarningList')

const SuggestedQueryTextSchema = z.string().min(1).max(1000).openapi('SuggestedQueryText')

const CorrectionSchema = z
  .object({
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based location in the response string or text where the corrected word starts.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based location in the response string or text where the corrected word ends.',
        }),
    ).exactOptional(),
    Term: StringSchema.and(
      z.any().openapi({ description: 'The string or text of a misspelled word in a query.' }),
    ).exactOptional(),
    CorrectedTerm: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The string or text of a corrected misspelled word in a query.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A corrected misspelled word in a query.', required: [] })
  .openapi('Correction')

const CorrectionListSchema = z.array(CorrectionSchema).openapi('CorrectionList')

const SpellCorrectedQuerySchema = z
  .object({
    SuggestedQueryText: SuggestedQueryTextSchema.and(
      z.any().openapi({ description: 'The query with the suggested spell corrections.' }),
    ).exactOptional(),
    Corrections: CorrectionListSchema.and(
      z.any().openapi({ description: 'The corrected misspelled word or words in a query.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A query with suggested spell corrections. ', required: [] })
  .openapi('SpellCorrectedQuery')

const SpellCorrectedQueryListSchema = z
  .array(SpellCorrectedQuerySchema)
  .openapi('SpellCorrectedQueryList')

const FeaturedResultsItemSchema = z
  .object({
    Id: ResultIdSchema.and(
      z.any().openapi({ description: 'The identifier of the featured result.' }),
    ).exactOptional(),
    Type: QueryResultTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of document within the featured result response. For example, a response could include a question-answer type that's relevant to the query.",
        }),
    ).exactOptional(),
    AdditionalAttributes: AdditionalResultAttributeListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more additional attributes associated with the featured result.',
        }),
    ).exactOptional(),
    DocumentId: DocumentIdSchema.and(
      z.any().openapi({ description: 'The identifier of the featured document.' }),
    ).exactOptional(),
    DocumentTitle: TextWithHighlightsSchema.exactOptional(),
    DocumentExcerpt: TextWithHighlightsSchema.exactOptional(),
    DocumentURI: UrlSchema.and(
      z.any().openapi({ description: 'The source URI location of the featured document.' }),
    ).exactOptional(),
    DocumentAttributes: DocumentAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of document attributes assigned to a featured document in the search results. For example, the document author (<code>_author</code>) or the source URI (<code>_source_uri</code>) of the document.',
        }),
    ).exactOptional(),
    FeedbackToken: FeedbackTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that identifies a particular featured result from a particular query. Use this token to provide click-through feedback for the result. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/submitting-feedback.html">Submitting feedback</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A single featured result item. A featured result is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then certain documents are featured in the search results.",
    required: [],
  })
  .openapi('FeaturedResultsItem')

const FeaturedResultsItemListSchema = z
  .array(FeaturedResultsItemSchema)
  .openapi('FeaturedResultsItemList')

const QueryResultSchema = z
  .object({
    QueryId: QueryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the search. You use <code>QueryId</code> to identify the search when using the feedback API.',
        }),
    ).exactOptional(),
    ResultItems: QueryResultItemListSchema.and(
      z.any().openapi({ description: 'The results of the search.' }),
    ).exactOptional(),
    FacetResults: FacetResultListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the facet results. A <code>FacetResult</code> contains the counts for each attribute key that was specified in the <code>Facets</code> input parameter.',
        }),
    ).exactOptional(),
    TotalNumberOfResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items found by the search; however, you can only retrieve up to 100 items. For example, if the search found 192 items, you can only retrieve the first 100 of the items.',
        }),
    ).exactOptional(),
    Warnings: WarningListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of warning codes and their messages on problems with your query.</p> <p>Amazon Kendra currently only supports one type of warning, which is a warning on invalid syntax used in the query. For examples of invalid query syntax, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/searching-example.html#searching-index-query-syntax">Searching with advanced query syntax</a>.</p>',
        }),
    ).exactOptional(),
    SpellCorrectedQueries: SpellCorrectedQueryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of information related to suggested spell corrections for a query.',
        }),
    ).exactOptional(),
    FeaturedResultsItems: FeaturedResultsItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of featured result items. Featured results are displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then certain documents are featured in the search results.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryResult')

const DocumentAttributeKeyListSchema = z
  .array(DocumentAttributeKeySchema)
  .min(1)
  .max(100)
  .openapi('DocumentAttributeKeyList')

const DocumentRelevanceConfigurationSchema = z
  .object({
    Name: DocumentMetadataConfigurationNameSchema.and(
      z.any().openapi({ description: 'The name of the index field.' }),
    ),
    Relevance: RelevanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information for tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Relevance'],
    description: 'Overrides the document relevance properties of a custom index field.',
  })
  .openapi('DocumentRelevanceConfiguration')

const DocumentRelevanceOverrideConfigurationListSchema = z
  .array(DocumentRelevanceConfigurationSchema)
  .min(0)
  .max(500)
  .openapi('DocumentRelevanceOverrideConfigurationList')

const SortOrderSchema = z.enum(['DESC', 'ASC']).openapi('SortOrder')

const SortingConfigurationSchema = z
  .object({
    DocumentAttributeKey: DocumentAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the document attribute used to sort the response. You can use any field that has the <code>Sortable</code> flag set to true.</p> <p>You can also sort by any of the following built-in attributes:</p> <ul> <li> <p>_category</p> </li> <li> <p>_created_at</p> </li> <li> <p>_last_updated_at</p> </li> <li> <p>_version</p> </li> <li> <p>_view_count</p> </li> </ul>',
        }),
    ),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The order that the results should be returned in. In case of ties, the relevance assigned to the result by Amazon Kendra is used as the tie-breaker.',
        }),
    ),
  })
  .openapi({
    required: ['DocumentAttributeKey', 'SortOrder'],
    description:
      "<p>Specifies the document attribute to use to sort the response to a Amazon Kendra query. You can specify a single attribute for sorting. The attribute must have the <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra returns an exception.</p> <p>You can sort attributes of the following types.</p> <ul> <li> <p>Date value</p> </li> <li> <p>Long value</p> </li> <li> <p>String value</p> </li> </ul> <p>You can't sort attributes of the following type.</p> <ul> <li> <p>String list value</p> </li> </ul>",
  })
  .openapi('SortingConfiguration')

const TokenSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .min(1)
  .max(100000)
  .openapi('Token')

const GroupsSchema = z.array(PrincipalNameSchema).min(1).max(2048).openapi('Groups')

const DataSourceGroupSchema = z
  .object({
    GroupId: PrincipalNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the group you want to add to your list of groups. This is for filtering search results based on the groups' access to documents.",
        }),
    ),
    DataSourceId: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the data source group you want to add to your list of data source groups. This is for filtering search results based on the groups' access to documents in that data source.",
        }),
    ),
  })
  .openapi({
    required: ['GroupId', 'DataSourceId'],
    description: 'Data source information for user context filtering.',
  })
  .openapi('DataSourceGroup')

const DataSourceGroupsSchema = z
  .array(DataSourceGroupSchema)
  .min(1)
  .max(2048)
  .openapi('DataSourceGroups')

const UserContextSchema = z
  .object({
    Token: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user context token for filtering search results for a user. It must be a JWT or a JSON token.',
        }),
    ).exactOptional(),
    UserId: PrincipalNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the user you want to filter search results based on their access to documents.',
        }),
    ).exactOptional(),
    Groups: GroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of groups you want to filter search results based on the groups' access to documents.",
        }),
    ).exactOptional(),
    DataSourceGroups: DataSourceGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of data source groups you want to filter search results based on groups' access to documents in that data source.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides information about the user context for an Amazon Kendra index.</p> <p>User context filtering is a kind of personalized search with the benefit of controlling access to documents. For example, not all teams that search the company portal for information should access top-secret company documents, nor are these documents relevant to all users. Only specific users or groups of teams given access to top-secret documents should see these documents in their search results.</p> <p>You provide one of the following:</p> <ul> <li> <p>User token</p> </li> <li> <p>User ID, the groups the user belongs to, and any data sources the groups can access.</p> </li> </ul> <p>If you provide both, an exception is thrown.</p>',
    required: [],
  })
  .openapi('UserContext')

const VisitorIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(256)
  .openapi('VisitorId')

const SpellCorrectionConfigurationSchema = z
  .object({
    IncludeQuerySpellCheckSuggestions: BooleanSchema.and(
      z
        .any()
        .openapi({ description: ' <code>TRUE</code> to suggest spell corrections for queries.' }),
    ),
  })
  .openapi({
    required: ['IncludeQuerySpellCheckSuggestions'],
    description:
      '<p>Provides the configuration information for suggested query spell corrections.</p> <p>Suggested spell corrections are based on words that appear in your indexed documents and how closely a corrected word matches a misspelled word.</p> <p>This feature is designed with certain defaults or limits. For information on the current limits and how to request more support for some limits, see the <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-spell-check.html">Spell Checker documentation</a>.</p>',
  })
  .openapi('SpellCorrectionConfiguration')

const QueryRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the index to search. The identifier is returned in the response from the <code>CreateIndex</code> API.',
        }),
    ),
    QueryText: QueryTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input query text for the search. Amazon Kendra truncates queries at 30 token words, which excludes punctuation and stop words. Truncation still applies if you use Boolean or more advanced, complex queries. ',
        }),
    ).exactOptional(),
    AttributeFilter: AttributeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables filtered searches based on document attributes. You can only provide one attribute filter; however, the <code>AndAllFilters</code>, <code>NotFilter</code>, and <code>OrAllFilters</code> parameters contain a list of other filters.</p> <p>The <code>AttributeFilter</code> parameter enables you to create a set of filtering rules that a document must satisfy to be included in the query results.</p>',
        }),
    ).exactOptional(),
    Facets: FacetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of documents attributes. Amazon Kendra returns a count for each attribute key specified. This helps your users narrow their search.',
        }),
    ).exactOptional(),
    RequestedDocumentAttributes: DocumentAttributeKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of document attributes to include in the response. You can limit the response to include certain document attributes. By default all document attributes are included in the response.',
        }),
    ).exactOptional(),
    QueryResultTypeFilter: QueryResultTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the type of query. Only results for the specified query type are returned.',
        }),
    ).exactOptional(),
    DocumentRelevanceOverrideConfigurations: DocumentRelevanceOverrideConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Overrides relevance tuning configurations of fields or attributes set at the index level.</p> <p>If you use this API to override the relevance tuning configured at the index level, but there is no relevance tuning configured at the index level, then Amazon Kendra does not apply any relevance tuning.</p> <p>If there is relevance tuning configured at the index level, but you do not use this API to override any relevance tuning in the index, then Amazon Kendra uses the relevance tuning that is configured at the index level.</p> <p>If there is relevance tuning configured for fields at the index level, but you use this API to override only some of these fields, then for the fields you did not override, the importance is set to 1.</p>',
        }),
    ).exactOptional(),
    PageNumber: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Query results are returned in pages the size of the <code>PageSize</code> parameter. By default, Amazon Kendra returns the first page of results. Use this parameter to get result pages after the first one.',
        }),
    ).exactOptional(),
    PageSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the number of results that are returned in each page of results. The default page size is 10. The maximum number of results returned is 100. If you ask for more than 100 results, only 100 are returned.',
        }),
    ).exactOptional(),
    SortingConfiguration: SortingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Provides information that determines how the results of the query are sorted. You can set the field that Amazon Kendra should sort the results on, and specify whether the results should be sorted in ascending or descending order. In the case of ties in sorting the results, the results are sorted by relevance.</p> <p>If you don't provide sorting configuration, the results are sorted by the relevance that Amazon Kendra determines for the result.</p>",
        }),
    ).exactOptional(),
    UserContext: UserContextSchema.and(
      z.any().openapi({ description: 'The user context token or user and group information.' }),
    ).exactOptional(),
    VisitorId: VisitorIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "Provides an identifier for a specific user. The <code>VisitorId</code> should be a unique identifier, such as a GUID. Don't use personally identifiable information, such as the user's email address, as the <code>VisitorId</code>.",
        }),
    ).exactOptional(),
    SpellCorrectionConfiguration: SpellCorrectionConfigurationSchema.and(
      z.any().openapi({ description: 'Enables suggested spell corrections for queries.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId'], title: 'QueryRequest' })
  .openapi('QueryRequest')

const StartDataSourceSyncJobResponseSchema = z
  .object({
    ExecutionId: StringSchema.and(
      z.any().openapi({ description: 'Identifies a particular synchronization job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDataSourceSyncJobResponse')

const StartDataSourceSyncJobRequestSchema = z
  .object({
    Id: DataSourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the data source connector to synchronize.' }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index used with the data source connector.',
        }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'StartDataSourceSyncJobRequest' })
  .openapi('StartDataSourceSyncJobRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const StopDataSourceSyncJobRequestSchema = z
  .object({
    Id: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the data source connector for which to stop the synchronization jobs.',
        }),
    ),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index used with the data source connector.',
        }),
    ),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'StopDataSourceSyncJobRequest' })
  .openapi('StopDataSourceSyncJobRequest')

const ClickFeedbackSchema = z
  .object({
    ResultId: ResultIdSchema.and(
      z.any().openapi({ description: 'The identifier of the search result that was clicked.' }),
    ),
    ClickTime: TimestampSchema.and(
      z.any().openapi({ description: 'The Unix timestamp when the result was clicked.' }),
    ),
  })
  .openapi({
    required: ['ResultId', 'ClickTime'],
    description:
      'Gathers information about when a particular result was clicked by a user. Your application uses the <code>SubmitFeedback</code> API to provide click information.',
  })
  .openapi('ClickFeedback')

const ClickFeedbackListSchema = z.array(ClickFeedbackSchema).openapi('ClickFeedbackList')

const RelevanceTypeSchema = z.enum(['RELEVANT', 'NOT_RELEVANT']).openapi('RelevanceType')

const RelevanceFeedbackSchema = z
  .object({
    ResultId: ResultIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the search result that the user provided relevance feedback for.',
        }),
    ),
    RelevanceValue: RelevanceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the document was relevant or not relevant to the search.',
        }),
    ),
  })
  .openapi({
    required: ['ResultId', 'RelevanceValue'],
    description:
      'Provides feedback on how relevant a document is to a search. Your application uses the <code>SubmitFeedback</code> API to provide relevance information.',
  })
  .openapi('RelevanceFeedback')

const RelevanceFeedbackListSchema = z
  .array(RelevanceFeedbackSchema)
  .openapi('RelevanceFeedbackList')

const SubmitFeedbackRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index that was queried.' }),
    ),
    QueryId: QueryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the specific query for which you are submitting feedback. The query ID is returned in the response to the <code>Query</code> API.',
        }),
    ),
    ClickFeedbackItems: ClickFeedbackListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tells Amazon Kendra that a particular search result link was chosen by the user. ',
        }),
    ).exactOptional(),
    RelevanceFeedbackItems: RelevanceFeedbackListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides Amazon Kendra with relevant or not relevant feedback for whether a particular item was relevant to the search.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'QueryId'], title: 'SubmitFeedbackRequest' })
  .openapi('SubmitFeedbackRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the index, FAQ, or data source to tag.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tag keys to add to the index, FAQ, or data source. If a tag already exists, the existing value is replaced with the new value.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the index, FAQ, or data source to remove the tag from.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tag keys to remove from the index, FAQ, or data source. If a tag key does not exist on the resource, it is ignored.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAccessControlConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateAccessControlConfigurationResponse')

const UpdateAccessControlConfigurationRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index for an access control configuration.',
        }),
    ),
    Id: AccessControlConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the access control configuration you want to update.',
        }),
    ),
    Name: AccessControlConfigurationNameSchema.and(
      z.any().openapi({ description: 'A new name for the access control configuration.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the access control configuration.' }),
    ).exactOptional(),
    AccessControlList: PrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information you want to update on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
        }),
    ).exactOptional(),
    HierarchicalAccessControlList: HierarchicalPrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should have access to.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'Id'], title: 'UpdateAccessControlConfigurationRequest' })
  .openapi('UpdateAccessControlConfigurationRequest')

const UpdateDataSourceRequestSchema = z
  .object({
    Id: DataSourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the data source connector you want to update.',
        }),
    ),
    Name: DataSourceNameSchema.and(
      z.any().openapi({ description: 'A new name for the data source connector.' }),
    ).exactOptional(),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the index used with the data source connector.',
        }),
    ),
    Configuration: DataSourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information you want to update for the data source connector.',
        }),
    ).exactOptional(),
    VpcConfiguration: DataSourceVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for an Amazon Virtual Private Cloud to connect to your data source. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the data source connector.' }),
    ).exactOptional(),
    Schedule: ScanScheduleSchema.and(
      z
        .any()
        .openapi({
          description: 'The sync schedule you want to update for the data source connector.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a role with permission to access the data source and required resources. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for a language you want to update for the data source connector. This allows you to support a language for all documents when updating the data source. English is supported by default. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.',
        }),
    ).exactOptional(),
    CustomDocumentEnrichmentConfiguration: CustomDocumentEnrichmentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration information you want to update for altering document metadata and content during the document ingestion process.</p> <p>For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'UpdateDataSourceRequest' })
  .openapi('UpdateDataSourceRequest')

const UpdateExperienceRequestSchema = z
  .object({
    Id: ExperienceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of your Amazon Kendra experience you want to update.',
        }),
    ),
    Name: ExperienceNameSchema.and(
      z.any().openapi({ description: 'A new name for your Amazon Kendra experience.' }),
    ).exactOptional(),
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the index for your Amazon Kendra experience.' }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a role with permission to access <code>Query</code> API, <code>QuerySuggestions</code> API, <code>SubmitFeedback</code> API, and IAM Identity Center that stores your user and group information. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.',
        }),
    ).exactOptional(),
    Configuration: ExperienceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information you want to update for your Amazon Kendra experience.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for your Amazon Kendra experience.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'UpdateExperienceRequest' })
  .openapi('UpdateExperienceRequest')

const UpdateFeaturedResultsSetResponseSchema = z
  .object({
    FeaturedResultsSet: FeaturedResultsSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information on the set of featured results. This includes the identifier of the featured results set, whether the featured results set is active or inactive, when the featured results set was last updated, and more.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFeaturedResultsSetResponse')

const UpdateFeaturedResultsSetRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index used for featuring results.' }),
    ),
    FeaturedResultsSetId: FeaturedResultsSetIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index used for featuring results.' }),
    ),
    FeaturedResultsSetName: FeaturedResultsSetNameSchema.and(
      z.any().openapi({ description: 'A new name for the set of featured results.' }),
    ).exactOptional(),
    Description: FeaturedResultsSetDescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the set of featured results.' }),
    ).exactOptional(),
    Status: FeaturedResultsSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code>. When the value is <code>ACTIVE</code>, featured results are ready for use. You can still configure your settings before setting the status to <code>ACTIVE</code>. The queries you specify for featured results must be unique per featured results set for each index, whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    QueryTexts: QueryTextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of queries for featuring results. For more information on the list of queries, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.',
        }),
    ).exactOptional(),
    FeaturedDocuments: FeaturedDocumentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of document IDs for the documents you want to feature at the top of the search results page. For more information on the list of featured documents, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexId', 'FeaturedResultsSetId'],
    title: 'UpdateFeaturedResultsSetRequest',
  })
  .openapi('UpdateFeaturedResultsSetRequest')

const UpdateIndexRequestSchema = z
  .object({
    Id: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index you want to update.' }),
    ),
    Name: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the index you want to update.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Identity and Access Management (IAM) role that gives Amazon Kendra permission to access Amazon CloudWatch logs and metrics.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the index.' }),
    ).exactOptional(),
    DocumentMetadataConfigurationUpdates: DocumentMetadataConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The document metadata configuration you want to update for the index. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document.',
        }),
    ).exactOptional(),
    CapacityUnits: CapacityUnitsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the number of additional document storage and query capacity units that should be used by the index. You can change the capacity of the index up to 5 times per day, or make 5 API calls.</p> <p>If you are using extra storage units, you can't reduce the storage capacity below what is required to meet the storage needs for your index.</p>",
        }),
    ).exactOptional(),
    UserTokenConfigurations: UserTokenConfigurationListSchema.and(
      z.any().openapi({ description: 'The user token configuration.' }),
    ).exactOptional(),
    UserContextPolicy: UserContextPolicySchema.and(
      z.any().openapi({ description: 'The user context policy.' }),
    ).exactOptional(),
    UserGroupResolutionConfiguration: UserGroupResolutionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables fetching access levels of groups and users from an IAM Identity Center (successor to Single Sign-On) identity source. To configure this, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html">UserGroupResolutionConfiguration</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'UpdateIndexRequest' })
  .openapi('UpdateIndexRequest')

const UpdateQuerySuggestionsBlockListRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the block list.' }),
    ),
    Id: QuerySuggestionsBlockListIdSchema.and(
      z.any().openapi({ description: 'The identifier of the block list you want to update.' }),
    ),
    Name: QuerySuggestionsBlockListNameSchema.and(
      z.any().openapi({ description: 'A new name for the block list.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the block list.' }),
    ).exactOptional(),
    SourceS3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The S3 path where your block list text file sits in S3.</p> <p>If you update your block list and provide the same path to the block list text file in S3, then Amazon Kendra reloads the file to refresh the block list. Amazon Kendra does not automatically refresh your block list. You need to call the <code>UpdateQuerySuggestionsBlockList</code> API to refresh you block list.</p> <p>If you update your block list, then Amazon Kendra asynchronously refreshes all query suggestions with the latest content in the S3 file. This means changes might not take effect immediately.</p>',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM (Identity and Access Management) role used to access the block list text file in S3.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId', 'Id'], title: 'UpdateQuerySuggestionsBlockListRequest' })
  .openapi('UpdateQuerySuggestionsBlockListRequest')

const UpdateQuerySuggestionsConfigRequestSchema = z
  .object({
    IndexId: IndexIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The identifier of the index with query suggestions you want to update.',
        }),
    ),
    Mode: ModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set the mode to <code>ENABLED</code> or <code>LEARN_ONLY</code>.</p> <p>By default, Amazon Kendra enables query suggestions. <code>LEARN_ONLY</code> mode allows you to turn off query suggestions. You can to update this at any time.</p> <p>In <code>LEARN_ONLY</code> mode, Amazon Kendra continues to learn from new queries to keep suggestions up to date for when you are ready to switch to ENABLED mode again.</p>',
        }),
    ).exactOptional(),
    QueryLogLookBackWindowInDays: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>How recent your queries are in your query log time window.</p> <p>The time window is the number of days from current day to past days.</p> <p>By default, Amazon Kendra sets this to 180.</p>',
        }),
    ).exactOptional(),
    IncludeQueriesWithoutUserInformation: ObjectBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>TRUE</code> to include queries without user information (i.e. all queries, irrespective of the user), otherwise <code>FALSE</code> to only include queries with user information.</p> <p>If you pass user information to Amazon Kendra along with the queries, you can set this flag to <code>FALSE</code> and instruct Amazon Kendra to only consider queries with user information.</p> <p>If you set to <code>FALSE</code>, Amazon Kendra only considers queries searched at least <code>MinimumQueryCount</code> times across <code>MinimumNumberOfQueryingUsers</code> unique users for suggestions.</p> <p>If you set to <code>TRUE</code>, Amazon Kendra ignores all user information and learns from all queries.</p>',
        }),
    ).exactOptional(),
    MinimumNumberOfQueryingUsers: MinimumNumberOfQueryingUsersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum number of unique users who must search a query in order for the query to be eligible to suggest to your users.</p> <p>Increasing this number might decrease the number of suggestions. However, this ensures a query is searched by many users and is truly popular to suggest to users.</p> <p>How you tune this setting depends on your specific needs.</p>',
        }),
    ).exactOptional(),
    MinimumQueryCount: MinimumQueryCountSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The the minimum number of times a query must be searched in order to be eligible to suggest to your users.</p> <p>Decreasing this number increases the number of suggestions. However, this affects the quality of suggestions as it sets a low bar for a query to be considered popular to suggest to users.</p> <p>How you tune this setting depends on your specific needs.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexId'], title: 'UpdateQuerySuggestionsConfigRequest' })
  .openapi('UpdateQuerySuggestionsConfigRequest')

const UpdateThesaurusRequestSchema = z
  .object({
    Id: ThesaurusIdSchema.and(
      z.any().openapi({ description: 'The identifier of the thesaurus you want to update.' }),
    ),
    Name: ThesaurusNameSchema.and(
      z.any().openapi({ description: 'A new name for the thesaurus.' }),
    ).exactOptional(),
    IndexId: IndexIdSchema.and(
      z.any().openapi({ description: 'The identifier of the index for the thesaurus.' }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the thesaurus.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role that gives Amazon Kendra permissions to access thesaurus file specified in <code>SourceS3Path</code>.',
        }),
    ).exactOptional(),
    SourceS3Path: S3PathSchema.exactOptional(),
  })
  .openapi({ required: ['Id', 'IndexId'], title: 'UpdateThesaurusRequest' })
  .openapi('UpdateThesaurusRequest')

const ValueImportanceMapKeySchema = z.string().min(1).max(50).openapi('ValueImportanceMapKey')

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

export const postXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience',
    description:
      'Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
    operationId: 'AssociateEntitiesToExperience',
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
          .literal('AWSKendraFrontendService.AssociateEntitiesToExperience')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.AssociateEntitiesToExperience'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateEntitiesToExperienceRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateEntitiesToExperienceResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ResourceAlreadyExistException',
        content: { 'application/json': { schema: ResourceAlreadyExistExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities',
  description:
    'Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
  operationId: 'AssociatePersonasToEntities',
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
        .literal('AWSKendraFrontendService.AssociatePersonasToEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSKendraFrontendService.AssociatePersonasToEntities'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociatePersonasToEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociatePersonasToEntitiesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistException',
      content: { 'application/json': { schema: ResourceAlreadyExistExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument',
  description:
    '<p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>',
  operationId: 'BatchDeleteDocument',
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
        .literal('AWSKendraFrontendService.BatchDeleteDocument')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.BatchDeleteDocument'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDeleteDocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteDocumentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet',
    description:
      "Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.",
    operationId: 'BatchDeleteFeaturedResultsSet',
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
          .literal('AWSKendraFrontendService.BatchDeleteFeaturedResultsSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.BatchDeleteFeaturedResultsSet'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: BatchDeleteFeaturedResultsSetRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BatchDeleteFeaturedResultsSetResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus',
  description:
    '<p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>',
  operationId: 'BatchGetDocumentStatus',
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
        .literal('AWSKendraFrontendService.BatchGetDocumentStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.BatchGetDocumentStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetDocumentStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetDocumentStatusResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceBatchPutDocumentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument',
  description:
    '<p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>',
  operationId: 'BatchPutDocument',
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
        .literal('AWSKendraFrontendService.BatchPutDocument')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.BatchPutDocument'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchPutDocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchPutDocumentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions',
  description:
    '<p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
  operationId: 'ClearQuerySuggestions',
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
        .literal('AWSKendraFrontendService.ClearQuerySuggestions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ClearQuerySuggestions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClearQuerySuggestionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration',
    description:
      '<p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the \'top-secret\' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>',
    operationId: 'CreateAccessControlConfiguration',
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
          .literal('AWSKendraFrontendService.CreateAccessControlConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.CreateAccessControlConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateAccessControlConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateAccessControlConfigurationResponseSchema } },
      },
      480: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceCreateDataSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.CreateDataSource',
  description:
    '<p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>',
  operationId: 'CreateDataSource',
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
        .literal('AWSKendraFrontendService.CreateDataSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.CreateDataSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDataSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataSourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistException',
      content: { 'application/json': { schema: ResourceAlreadyExistExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceCreateExperienceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.CreateExperience',
  description:
    'Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
  operationId: 'CreateExperience',
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
        .literal('AWSKendraFrontendService.CreateExperience')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.CreateExperience'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateExperienceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExperienceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceCreateFaqRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.CreateFaq',
  description:
    '<p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>',
  operationId: 'CreateFaq',
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
        .literal('AWSKendraFrontendService.CreateFaq')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.CreateFaq'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateFaqRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFaqResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet',
  description:
    '<p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>',
  operationId: 'CreateFeaturedResultsSet',
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
        .literal('AWSKendraFrontendService.CreateFeaturedResultsSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.CreateFeaturedResultsSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFeaturedResultsSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFeaturedResultsSetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'FeaturedResultsConflictException',
      content: { 'application/json': { schema: FeaturedResultsConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceCreateIndexRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.CreateIndex',
  description:
    '<p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>',
  operationId: 'CreateIndex',
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
        .literal('AWSKendraFrontendService.CreateIndex')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.CreateIndex'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateIndexRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIndexResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistException',
      content: { 'application/json': { schema: ResourceAlreadyExistExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList',
    description:
      '<p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>',
    operationId: 'CreateQuerySuggestionsBlockList',
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
          .literal('AWSKendraFrontendService.CreateQuerySuggestionsBlockList')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.CreateQuerySuggestionsBlockList'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateQuerySuggestionsBlockListRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateQuerySuggestionsBlockListResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      486: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceCreateThesaurusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus',
  description:
    '<p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>',
  operationId: 'CreateThesaurus',
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
        .literal('AWSKendraFrontendService.CreateThesaurus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.CreateThesaurus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateThesaurusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateThesaurusResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration',
    description:
      'Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
    operationId: 'DeleteAccessControlConfiguration',
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
          .literal('AWSKendraFrontendService.DeleteAccessControlConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.DeleteAccessControlConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteAccessControlConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteAccessControlConfigurationResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceDeleteDataSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource',
  description:
    'Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.',
  operationId: 'DeleteDataSource',
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
        .literal('AWSKendraFrontendService.DeleteDataSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DeleteDataSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDataSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDeleteExperienceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DeleteExperience',
  description:
    'Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
  operationId: 'DeleteExperience',
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
        .literal('AWSKendraFrontendService.DeleteExperience')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DeleteExperience'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteExperienceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteExperienceResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDeleteFaqRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DeleteFaq',
  description: 'Removes an FAQ from an index.',
  operationId: 'DeleteFaq',
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
        .literal('AWSKendraFrontendService.DeleteFaq')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DeleteFaq'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteFaqRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDeleteIndexRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DeleteIndex',
  description:
    'Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.',
  operationId: 'DeleteIndex',
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
        .literal('AWSKendraFrontendService.DeleteIndex')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DeleteIndex'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteIndexRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping',
  description:
    '<p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
  operationId: 'DeletePrincipalMapping',
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
        .literal('AWSKendraFrontendService.DeletePrincipalMapping')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DeletePrincipalMapping'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePrincipalMappingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList',
    description:
      '<p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
    operationId: 'DeleteQuerySuggestionsBlockList',
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
          .literal('AWSKendraFrontendService.DeleteQuerySuggestionsBlockList')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.DeleteQuerySuggestionsBlockList'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteQuerySuggestionsBlockListRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceDeleteThesaurusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus',
  description: 'Deletes an existing Amazon Kendra thesaurus. ',
  operationId: 'DeleteThesaurus',
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
        .literal('AWSKendraFrontendService.DeleteThesaurus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DeleteThesaurus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteThesaurusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration',
    description:
      'Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
    operationId: 'DescribeAccessControlConfiguration',
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
          .literal('AWSKendraFrontendService.DescribeAccessControlConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.DescribeAccessControlConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeAccessControlConfigurationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeAccessControlConfigurationResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceDescribeDataSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource',
  description: 'Gets information about an Amazon Kendra data source connector.',
  operationId: 'DescribeDataSource',
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
        .literal('AWSKendraFrontendService.DescribeDataSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DescribeDataSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDataSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDataSourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDescribeExperienceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeExperience',
  description:
    'Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
  operationId: 'DescribeExperience',
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
        .literal('AWSKendraFrontendService.DescribeExperience')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DescribeExperience'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExperienceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExperienceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDescribeFaqRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeFaq',
  description: 'Gets information about an FAQ list.',
  operationId: 'DescribeFaq',
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
        .literal('AWSKendraFrontendService.DescribeFaq')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DescribeFaq'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeFaqRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFaqResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet',
  description:
    "Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.",
  operationId: 'DescribeFeaturedResultsSet',
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
        .literal('AWSKendraFrontendService.DescribeFeaturedResultsSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSKendraFrontendService.DescribeFeaturedResultsSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFeaturedResultsSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFeaturedResultsSetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDescribeIndexRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeIndex',
  description: 'Gets information about an existing Amazon Kendra index.',
  operationId: 'DescribeIndex',
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
        .literal('AWSKendraFrontendService.DescribeIndex')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DescribeIndex'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeIndexRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeIndexResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping',
  description:
    '<p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
  operationId: 'DescribePrincipalMapping',
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
        .literal('AWSKendraFrontendService.DescribePrincipalMapping')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DescribePrincipalMapping'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePrincipalMappingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePrincipalMappingResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList',
    description:
      '<p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
    operationId: 'DescribeQuerySuggestionsBlockList',
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
          .literal('AWSKendraFrontendService.DescribeQuerySuggestionsBlockList')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.DescribeQuerySuggestionsBlockList'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeQuerySuggestionsBlockListRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeQuerySuggestionsBlockListResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig',
    description:
      '<p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
    operationId: 'DescribeQuerySuggestionsConfig',
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
          .literal('AWSKendraFrontendService.DescribeQuerySuggestionsConfig')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.DescribeQuerySuggestionsConfig'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeQuerySuggestionsConfigRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeQuerySuggestionsConfigResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceDescribeThesaurusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus',
  description: 'Gets information about an existing Amazon Kendra thesaurus.',
  operationId: 'DescribeThesaurus',
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
        .literal('AWSKendraFrontendService.DescribeThesaurus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.DescribeThesaurus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeThesaurusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeThesaurusResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience',
    description:
      'Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
    operationId: 'DisassociateEntitiesFromExperience',
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
          .literal('AWSKendraFrontendService.DisassociateEntitiesFromExperience')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.DisassociateEntitiesFromExperience'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DisassociateEntitiesFromExperienceRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DisassociateEntitiesFromExperienceResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities',
    description:
      'Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
    operationId: 'DisassociatePersonasFromEntities',
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
          .literal('AWSKendraFrontendService.DisassociatePersonasFromEntities')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.DisassociatePersonasFromEntities'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociatePersonasFromEntitiesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociatePersonasFromEntitiesResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions',
  description:
    '<p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
  operationId: 'GetQuerySuggestions',
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
        .literal('AWSKendraFrontendService.GetQuerySuggestions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.GetQuerySuggestions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetQuerySuggestionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQuerySuggestionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceGetSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.GetSnapshots',
  description:
    'Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.',
  operationId: 'GetSnapshots',
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
        .literal('AWSKendraFrontendService.GetSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.GetSnapshots'] },
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
      content: { 'application/json': { schema: GetSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSnapshotsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations',
    description:
      'Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.',
    operationId: 'ListAccessControlConfigurations',
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
          .literal('AWSKendraFrontendService.ListAccessControlConfigurations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.ListAccessControlConfigurations'],
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
        content: { 'application/json': { schema: ListAccessControlConfigurationsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListAccessControlConfigurationsResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs',
  description: 'Gets statistics about synchronizing a data source connector.',
  operationId: 'ListDataSourceSyncJobs',
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
        .literal('AWSKendraFrontendService.ListDataSourceSyncJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListDataSourceSyncJobs'] },
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
      content: { 'application/json': { schema: ListDataSourceSyncJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataSourceSyncJobsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListDataSourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListDataSources',
  description: 'Lists the data source connectors that you have created.',
  operationId: 'ListDataSources',
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
        .literal('AWSKendraFrontendService.ListDataSources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListDataSources'] },
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
      content: { 'application/json': { schema: ListDataSourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataSourcesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListEntityPersonasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas',
  description:
    'Lists specific permissions of users and groups with access to your Amazon Kendra experience.',
  operationId: 'ListEntityPersonas',
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
        .literal('AWSKendraFrontendService.ListEntityPersonas')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListEntityPersonas'] },
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
      content: { 'application/json': { schema: ListEntityPersonasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEntityPersonasResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities',
  description:
    'Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
  operationId: 'ListExperienceEntities',
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
        .literal('AWSKendraFrontendService.ListExperienceEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListExperienceEntities'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListExperienceEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExperienceEntitiesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListExperiencesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListExperiences',
  description:
    'Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
  operationId: 'ListExperiences',
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
        .literal('AWSKendraFrontendService.ListExperiences')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListExperiences'] },
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
      content: { 'application/json': { schema: ListExperiencesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExperiencesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListFaqsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListFaqs',
  description: 'Gets a list of FAQ lists associated with an index.',
  operationId: 'ListFaqs',
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
        .literal('AWSKendraFrontendService.ListFaqs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListFaqs'] },
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
    body: { content: { 'application/json': { schema: ListFaqsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFaqsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets',
  description:
    "Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.",
  operationId: 'ListFeaturedResultsSets',
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
        .literal('AWSKendraFrontendService.ListFeaturedResultsSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListFeaturedResultsSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFeaturedResultsSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFeaturedResultsSetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId',
    description:
      '<p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
    operationId: 'ListGroupsOlderThanOrderingId',
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
          .literal('AWSKendraFrontendService.ListGroupsOlderThanOrderingId')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.ListGroupsOlderThanOrderingId'],
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
        content: { 'application/json': { schema: ListGroupsOlderThanOrderingIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListGroupsOlderThanOrderingIdResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSKendraFrontendServiceListIndicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListIndices',
  description: 'Lists the Amazon Kendra indexes that you created.',
  operationId: 'ListIndices',
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
        .literal('AWSKendraFrontendService.ListIndices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListIndices'] },
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
    body: { content: { 'application/json': { schema: ListIndicesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIndicesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists',
    description:
      '<p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
    operationId: 'ListQuerySuggestionsBlockLists',
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
          .literal('AWSKendraFrontendService.ListQuerySuggestionsBlockLists')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.ListQuerySuggestionsBlockLists'],
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
        content: { 'application/json': { schema: ListQuerySuggestionsBlockListsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListQuerySuggestionsBlockListsResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource',
  description:
    'Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.',
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
        .literal('AWSKendraFrontendService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListTagsForResource'] },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceListThesauriRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.ListThesauri',
  description: 'Lists the thesauri for an index.',
  operationId: 'ListThesauri',
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
        .literal('AWSKendraFrontendService.ListThesauri')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.ListThesauri'] },
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
      content: { 'application/json': { schema: ListThesauriRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListThesauriResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServicePutPrincipalMappingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping',
  description:
    '<p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>',
  operationId: 'PutPrincipalMapping',
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
        .literal('AWSKendraFrontendService.PutPrincipalMapping')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.PutPrincipalMapping'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutPrincipalMappingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.Query',
  description:
    '<p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>',
  operationId: 'Query',
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
        .literal('AWSKendraFrontendService.Query')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.Query'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: QueryResultSchema } } },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob',
  description:
    'Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.',
  operationId: 'StartDataSourceSyncJob',
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
        .literal('AWSKendraFrontendService.StartDataSourceSyncJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.StartDataSourceSyncJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDataSourceSyncJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDataSourceSyncJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob',
  description:
    "Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.",
  operationId: 'StopDataSourceSyncJob',
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
        .literal('AWSKendraFrontendService.StopDataSourceSyncJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.StopDataSourceSyncJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopDataSourceSyncJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceSubmitFeedbackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback',
  description:
    '<p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
  operationId: 'SubmitFeedback',
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
        .literal('AWSKendraFrontendService.SubmitFeedback')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.SubmitFeedback'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SubmitFeedbackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.TagResource',
  description:
    'Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.',
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
        .literal('AWSKendraFrontendService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.TagResource'] },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.UntagResource',
  description: 'Removes a tag from an index, FAQ, or a data source.',
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
        .literal('AWSKendraFrontendService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.UntagResource'] },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration',
    description:
      "<p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href=\"https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html\">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href=\"https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html\">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>",
    operationId: 'UpdateAccessControlConfiguration',
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
          .literal('AWSKendraFrontendService.UpdateAccessControlConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.UpdateAccessControlConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateAccessControlConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateAccessControlConfigurationResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      486: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceUpdateDataSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource',
  description: 'Updates an existing Amazon Kendra data source connector.',
  operationId: 'UpdateDataSource',
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
        .literal('AWSKendraFrontendService.UpdateDataSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.UpdateDataSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDataSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceUpdateExperienceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateExperience',
  description:
    'Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.',
  operationId: 'UpdateExperience',
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
        .literal('AWSKendraFrontendService.UpdateExperience')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.UpdateExperience'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateExperienceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet',
  description:
    'Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.',
  operationId: 'UpdateFeaturedResultsSet',
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
        .literal('AWSKendraFrontendService.UpdateFeaturedResultsSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.UpdateFeaturedResultsSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFeaturedResultsSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFeaturedResultsSetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'FeaturedResultsConflictException',
      content: { 'application/json': { schema: FeaturedResultsConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceUpdateIndexRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateIndex',
  description: 'Updates an existing Amazon Kendra index.',
  operationId: 'UpdateIndex',
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
        .literal('AWSKendraFrontendService.UpdateIndex')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.UpdateIndex'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateIndexRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList',
    description:
      '<p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>',
    operationId: 'UpdateQuerySuggestionsBlockList',
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
          .literal('AWSKendraFrontendService.UpdateQuerySuggestionsBlockList')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSKendraFrontendService.UpdateQuerySuggestionsBlockList'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateQuerySuggestionsBlockListRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig',
  description:
    "<p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>",
  operationId: 'UpdateQuerySuggestionsConfig',
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
        .literal('AWSKendraFrontendService.UpdateQuerySuggestionsConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSKendraFrontendService.UpdateQuerySuggestionsConfig'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateQuerySuggestionsConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSKendraFrontendServiceUpdateThesaurusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus',
  description: 'Updates a thesaurus for an index.',
  operationId: 'UpdateThesaurus',
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
        .literal('AWSKendraFrontendService.UpdateThesaurus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSKendraFrontendService.UpdateThesaurus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateThesaurusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
