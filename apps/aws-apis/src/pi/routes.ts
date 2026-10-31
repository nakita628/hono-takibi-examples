import { createRoute, z } from '@hono/zod-openapi'

const ISOTimestampSchema = z.iso.datetime({ offset: true }).openapi('ISOTimestamp')

const RequestStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(0)
  .max(256)
  .openapi('RequestString')

const DimensionMapSchema = z.record(z.string(), RequestStringSchema).openapi('DimensionMap')

const ResponsePartitionKeySchema = z
  .object({
    Dimensions: DimensionMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A dimension map that contains the dimensions for this partition.',
        }),
    ),
  })
  .openapi({
    required: ['Dimensions'],
    description:
      'If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. ',
  })
  .openapi('ResponsePartitionKey')

const ResponsePartitionKeyListSchema = z
  .array(ResponsePartitionKeySchema)
  .openapi('ResponsePartitionKeyList')

const DoubleSchema = z.float64().openapi('Double')

const AdditionalMetricsMapSchema = z
  .record(z.string(), DoubleSchema)
  .openapi('AdditionalMetricsMap')

const MetricValuesListSchema = z.array(DoubleSchema).openapi('MetricValuesList')

const DimensionKeyDescriptionSchema = z
  .object({
    Dimensions: DimensionMapSchema.and(
      z
        .any()
        .openapi({ description: 'A map of name-value pairs for the dimensions in the group.' }),
    ).exactOptional(),
    Total: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregated metric value for the dimensions, over the requested time range.',
        }),
    ).exactOptional(),
    AdditionalMetrics: AdditionalMetricsMapSchema.and(
      z.any().openapi({ description: 'A map that contains the value for each additional metric.' }),
    ).exactOptional(),
    Partitions: MetricValuesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>PartitionBy</code> was specified, <code>PartitionKeys</code> contains the dimensions that were.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that includes the requested dimension key values and aggregated metric values within a dimension group.',
    required: [],
  })
  .openapi('DimensionKeyDescription')

const DimensionKeyDescriptionListSchema = z
  .array(DimensionKeyDescriptionSchema)
  .openapi('DimensionKeyDescriptionList')

const NextTokenSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(8192)
  .openapi('NextToken')

const DescribeDimensionKeysResponseSchema = z
  .object({
    AlignedStartTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time for the returned dimension keys, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or equal to the value of the user-specified <code>StartTime</code>. ',
        }),
    ).exactOptional(),
    AlignedEndTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end time for the returned dimension keys, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than or equal to the value of the user-specified <code>Endtime</code>. ',
        }),
    ).exactOptional(),
    PartitionKeys: ResponsePartitionKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>PartitionBy</code> was present in the request, <code>PartitionKeys</code> contains the breakdown of dimension keys by the specified partitions. ',
        }),
    ).exactOptional(),
    Keys: DimensionKeyDescriptionListSchema.and(
      z.any().openapi({ description: 'The dimension keys that were requested.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token that indicates the response didn’t return all available records because <code>MaxRecords</code> was specified in the previous request. To get the remaining records, specify <code>NextToken</code> in a separate request with this value. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDimensionKeysResponse')

const ServiceTypeSchema = z.enum(['RDS', 'DOCDB']).openapi('ServiceType')

const IntegerSchema = z.int().openapi('Integer')

const RequestStringListSchema = z
  .array(RequestStringSchema)
  .min(1)
  .max(10)
  .openapi('RequestStringList')

const LimitSchema = z.int().min(1).max(25).openapi('Limit')

const DimensionGroupSchema = z
  .object({
    Group: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the dimension group. Valid values are as follows:</p> <ul> <li> <p> <code>db</code> - The name of the database to which the client is connected. The following values are permitted:</p> <ul> <li> <p>Aurora PostgreSQL</p> </li> <li> <p>Amazon RDS PostgreSQL</p> </li> <li> <p>Aurora MySQL</p> </li> <li> <p>Amazon RDS MySQL</p> </li> <li> <p>Amazon RDS MariaDB</p> </li> <li> <p>Amazon DocumentDB</p> </li> </ul> </li> <li> <p> <code>db.application</code> - The name of the application that is connected to the database. The following values are permitted:</p> <ul> <li> <p>Aurora PostgreSQL</p> </li> <li> <p>Amazon RDS PostgreSQL</p> </li> <li> <p>Amazon DocumentDB</p> </li> </ul> </li> <li> <p> <code>db.host</code> - The host name of the connected client (all engines).</p> </li> <li> <p> <code>db.query</code> - The query that is currently running (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.query_tokenized</code> - The digest query (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.session_type</code> - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL).</p> </li> <li> <p> <code>db.sql</code> - The text of the SQL statement that is currently running (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.sql_tokenized</code> - The SQL digest (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.user</code> - The user logged in to the database (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.wait_event</code> - The event for which the database backend is waiting (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.wait_event_type</code> - The type of event for which the database backend is waiting (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.wait_state</code> - The event for which the database backend is waiting (only Amazon DocumentDB).</p> </li> </ul>',
        }),
    ),
    Dimensions: RequestStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested, or are present in the response.</p> <p>Valid values for elements in the <code>Dimensions</code> array are:</p> <ul> <li> <p> <code>db.application.name</code> - The name of the application that is connected to the database. Valid values are as follows: </p> <ul> <li> <p>Aurora PostgreSQL</p> </li> <li> <p>Amazon RDS PostgreSQL</p> </li> <li> <p>Amazon DocumentDB</p> </li> </ul> </li> <li> <p> <code>db.host.id</code> - The host ID of the connected client (all engines).</p> </li> <li> <p> <code>db.host.name</code> - The host name of the connected client (all engines).</p> </li> <li> <p> <code>db.name</code> - The name of the database to which the client is connected. Valid values are as follows:</p> <ul> <li> <p>Aurora PostgreSQL</p> </li> <li> <p>Amazon RDS PostgreSQL</p> </li> <li> <p>Aurora MySQL</p> </li> <li> <p>Amazon RDS MySQL</p> </li> <li> <p>Amazon RDS MariaDB</p> </li> <li> <p>Amazon DocumentDB</p> </li> </ul> </li> <li> <p> <code>db.query.id</code> - The query ID generated by Performance Insights (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.query.db_id</code> - The query ID generated by the database (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.query.statement</code> - The text of the query that is being run (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.query.tokenized_id</code> </p> </li> <li> <p> <code>db.query.tokenized.id</code> - The query digest ID generated by Performance Insights (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.query.tokenized.db_id</code> - The query digest ID generated by Performance Insights (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.query.tokenized.statement</code> - The text of the query digest (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.session_type.name</code> - The type of the current session (only Amazon DocumentDB).</p> </li> <li> <p> <code>db.sql.id</code> - The hash of the full, non-tokenized SQL statement generated by Performance Insights (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with <code>pi-</code> (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.sql.statement</code> - The full text of the SQL statement that is running, as in <code>SELECT * FROM employees</code> (all engines except Amazon DocumentDB)</p> </li> <li> <p> <code>db.sql.tokenized_id</code> </p> </li> <li> <p> <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights (all engines except Amazon DocumentDB). In the console, <code>db.sql_tokenized.id</code> is called the Support ID because Amazon Web Services Support can look at this data to help you troubleshoot database issues.</p> </li> <li> <p> <code>db.sql_tokenized.db_id</code> - Either the native database ID used to refer to the SQL statement, or a synthetic ID such as <code>pi-2372568224</code> that Performance Insights generates if the native database ID isn't available (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.sql_tokenized.statement</code> - The text of the SQL digest, as in <code>SELECT * FROM employees WHERE employee_id = ?</code> (all engines except Amazon DocumentDB)</p> </li> <li> <p> <code>db.user.id</code> - The ID of the user logged in to the database (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.user.name</code> - The name of the user logged in to the database (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.wait_event.name</code> - The event for which the backend is waiting (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.wait_event.type</code> - The type of event for which the backend is waiting (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.wait_event_type.name</code> - The name of the event type for which the backend is waiting (all engines except Amazon DocumentDB).</p> </li> <li> <p> <code>db.wait_state.name</code> - The event for which the backend is waiting (only Amazon DocumentDB).</p> </li> </ul>",
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of items to fetch for this dimension group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Group'],
    description:
      '<p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions:</p> <ul> <li> <p> <code>db.sql.id</code> - The hash of a running SQL statement, generated by Performance Insights.</p> </li> <li> <p> <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with <code>pi-</code>.</p> </li> <li> <p> <code>db.sql.statement</code> - The full text of the SQL statement that is running, for example, <code>SELECT * FROM employees</code>.</p> </li> <li> <p> <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights.</p> </li> </ul> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>',
  })
  .openapi('DimensionGroup')

const AdditionalMetricsListSchema = z
  .array(RequestStringSchema)
  .min(1)
  .max(30)
  .openapi('AdditionalMetricsList')

const MetricQueryFilterMapSchema = z
  .record(z.string(), RequestStringSchema)
  .openapi('MetricQueryFilterMap')

const MaxResultsSchema = z.int().min(0).max(25).openapi('MaxResults')

const DescribeDimensionKeysRequestSchema = z
  .object({
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services service for which Performance Insights will return metrics. Valid values are as follows:</p> <ul> <li> <p> <code>RDS</code> </p> </li> <li> <p> <code>DOCDB</code> </p> </li> </ul>',
        }),
    ),
    Identifier: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source.</p> <p>To use an Amazon RDS instance as a data source, you specify its <code>DbiResourceId</code> value. For example, specify <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>. </p>',
        }),
    ),
    StartTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time specifying the beginning of the requested time series data. You must specify a <code>StartTime</code> within the past 7 days. The value specified is <i>inclusive</i>, which means that data points equal to or greater than <code>StartTime</code> are returned. </p> <p>The value for <code>StartTime</code> must be earlier than the value for <code>EndTime</code>. </p>',
        }),
    ),
    EndTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time specifying the end of the requested time series data. The value specified is <i>exclusive</i>, which means that data points less than (but not equal to) <code>EndTime</code> are returned.</p> <p>The value for <code>EndTime</code> must be later than the value for <code>StartTime</code>.</p>',
        }),
    ),
    Metric: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a Performance Insights metric to be measured.</p> <p>Valid values for <code>Metric</code> are:</p> <ul> <li> <p> <code>db.load.avg</code> - A scaled representation of the number of active sessions for the database engine. </p> </li> <li> <p> <code>db.sampledload.avg</code> - The raw number of active sessions for the database engine. </p> </li> </ul> <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code> are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code> showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than <code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code> only. </p>',
        }),
    ),
    PeriodInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are: </p> <ul> <li> <p> <code>1</code> (one second)</p> </li> <li> <p> <code>60</code> (one minute)</p> </li> <li> <p> <code>300</code> (five minutes)</p> </li> <li> <p> <code>3600</code> (one hour)</p> </li> <li> <p> <code>86400</code> (twenty-four hours)</p> </li> </ul> <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights chooses a value for you, with a goal of returning roughly 100-200 data points in the response. </p>",
        }),
    ).exactOptional(),
    GroupBy: DimensionGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights returns all dimensions within this group, unless you provide the names of specific dimensions within this group. You can also request that Performance Insights return a limited number of values for a dimension. ',
        }),
    ),
    AdditionalMetrics: AdditionalMetricsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional metrics for the top <code>N</code> dimension keys. If the specified dimension group in the <code>GroupBy</code> parameter is <code>db.sql_tokenized</code>, you can specify per-SQL metrics to get the values for the top <code>N</code> SQL digests. The response syntax is as follows: <code>"AdditionalMetrics" : { "<i>string</i>" : "<i>string</i>" }</code>. ',
        }),
    ).exactOptional(),
    PartitionBy: DimensionGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'For each dimension specified in <code>GroupBy</code>, specify a secondary dimension to further subdivide the partition keys in the response. ',
        }),
    ).exactOptional(),
    Filter: MetricQueryFilterMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more filters to apply in the request. Restrictions:</p> <ul> <li> <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> or <code>Partition</code> parameters.</p> </li> <li> <p>A single filter for any other dimension in this dimension group.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in the response. If more items exist than the specified <code>MaxRecords</code> value, a pagination token is included in the response so that the remaining results can be retrieved. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceType', 'Identifier', 'StartTime', 'EndTime', 'Metric', 'GroupBy'],
    title: 'DescribeDimensionKeysRequest',
  })
  .openapi('DescribeDimensionKeysRequest')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const InternalServiceErrorSchema = z.any().openapi('InternalServiceError')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const StringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(0)
  .max(256)
  .openapi('String')

const DetailStatusSchema = z
  .enum(['AVAILABLE', 'PROCESSING', 'UNAVAILABLE'])
  .openapi('DetailStatus')

const DimensionKeyDetailSchema = z
  .object({
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the dimension detail data. Depending on the return status, this value is either the full or truncated SQL query for the following dimensions:</p> <ul> <li> <p> <code>db.query.statement</code> (Amazon DocumentDB)</p> </li> <li> <p> <code>db.sql.statement</code> (Amazon RDS and Aurora)</p> </li> </ul>',
        }),
    ).exactOptional(),
    Dimension: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full name of the dimension. The full name includes the group name and key name. The following values are valid:</p> <ul> <li> <p> <code>db.query.statement</code> (Amazon DocumentDB)</p> </li> <li> <p> <code>db.sql.statement</code> (Amazon RDS and Aurora)</p> </li> </ul>',
        }),
    ).exactOptional(),
    Status: DetailStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the dimension detail data. Possible values include the following:</p> <ul> <li> <p> <code>AVAILABLE</code> - The dimension detail data is ready to be retrieved.</p> </li> <li> <p> <code>PROCESSING</code> - The dimension detail data isn't ready to be retrieved because more processing time is required. If the requested detail data has the status <code>PROCESSING</code>, Performance Insights returns the truncated query.</p> </li> <li> <p> <code>UNAVAILABLE</code> - The dimension detail data could not be collected successfully.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that describes the details for a specified dimension.',
    required: [],
  })
  .openapi('DimensionKeyDetail')

const DimensionKeyDetailListSchema = z
  .array(DimensionKeyDetailSchema)
  .openapi('DimensionKeyDetailList')

const GetDimensionKeyDetailsResponseSchema = z
  .object({
    Dimensions: DimensionKeyDetailListSchema.and(
      z.any().openapi({ description: 'The details for the requested dimensions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDimensionKeyDetailsResponse')

const IdentifierStringSchema = z
  .string()
  .regex(/^db-[a-zA-Z0-9-]*$/)
  .min(0)
  .max(256)
  .openapi('IdentifierString')

const RequestedDimensionListSchema = z
  .array(RequestStringSchema)
  .min(1)
  .max(10)
  .openapi('RequestedDimensionList')

const GetDimensionKeyDetailsRequestSchema = z
  .object({
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service for which Performance Insights returns data. The only valid value is <code>RDS</code>.',
        }),
    ),
    Identifier: IdentifierStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for a data source from which to gather dimension data. This ID must be immutable and unique within an Amazon Web Services Region. When a DB instance is the data source, specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>. ',
        }),
    ),
    Group: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the dimension group. Performance Insights searches the specified group for the dimension group ID. The following group name values are valid:</p> <ul> <li> <p> <code>db.query</code> (Amazon DocumentDB only)</p> </li> <li> <p> <code>db.sql</code> (Amazon RDS and Aurora only)</p> </li> </ul>',
        }),
    ),
    GroupIdentifier: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the dimension group from which to retrieve dimension details. For dimension group <code>db.sql</code>, the group ID is <code>db.sql.id</code>. The following group ID values are valid:</p> <ul> <li> <p> <code>db.sql.id</code> for dimension group <code>db.sql</code> (Aurora and RDS only)</p> </li> <li> <p> <code>db.query.id</code> for dimension group <code>db.query</code> (DocumentDB only)</p> </li> </ul>',
        }),
    ),
    RequestedDimensions: RequestedDimensionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of dimensions to retrieve the detail data for within the given dimension group. If you don't specify this parameter, Performance Insights returns all dimension data within the specified dimension group. Specify dimension names for the following dimension groups:</p> <ul> <li> <p> <code>db.sql</code> - Specify either the full dimension name <code>db.sql.statement</code> or the short dimension name <code>statement</code> (Aurora and RDS only).</p> </li> <li> <p> <code>db.query</code> - Specify either the full dimension name <code>db.query.statement</code> or the short dimension name <code>statement</code> (DocumentDB only).</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceType', 'Identifier', 'Group', 'GroupIdentifier'],
    title: 'GetDimensionKeyDetailsRequest',
  })
  .openapi('GetDimensionKeyDetailsRequest')

const FeatureStatusSchema = z
  .enum([
    'ENABLED',
    'DISABLED',
    'UNSUPPORTED',
    'ENABLED_PENDING_REBOOT',
    'DISABLED_PENDING_REBOOT',
    'UNKNOWN',
  ])
  .openapi('FeatureStatus')

const FeatureMetadataSchema = z
  .object({
    Status: FeatureStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the feature on the DB instance. Possible values include the following:</p> <ul> <li> <p> <code>ENABLED</code> - The feature is enabled on the instance.</p> </li> <li> <p> <code>DISABLED</code> - The feature is disabled on the instance.</p> </li> <li> <p> <code>UNSUPPORTED</code> - The feature isn't supported on the instance.</p> </li> <li> <p> <code>ENABLED_PENDING_REBOOT</code> - The feature is enabled on the instance but requires a reboot to take effect.</p> </li> <li> <p> <code>DISABLED_PENDING_REBOOT</code> - The feature is disabled on the instance but requires a reboot to take effect.</p> </li> <li> <p> <code>UNKNOWN</code> - The feature status couldn't be determined.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.',
    required: [],
  })
  .openapi('FeatureMetadata')

const FeatureMetadataMapSchema = z
  .record(z.string(), FeatureMetadataSchema)
  .openapi('FeatureMetadataMap')

const GetResourceMetadataResponseSchema = z
  .object({
    Identifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>. ',
        }),
    ).exactOptional(),
    Features: FeatureMetadataMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceMetadataResponse')

const GetResourceMetadataRequestSchema = z
  .object({
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service for which Performance Insights returns metrics.',
        }),
    ),
    Identifier: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>. ',
        }),
    ),
  })
  .openapi({ required: ['ServiceType', 'Identifier'], title: 'GetResourceMetadataRequest' })
  .openapi('GetResourceMetadataRequest')

const ResponseResourceMetricKeySchema = z
  .object({
    Metric: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a Performance Insights metric to be measured.</p> <p>Valid values for <code>Metric</code> are:</p> <ul> <li> <p> <code>db.load.avg</code> - A scaled representation of the number of active sessions for the database engine.</p> </li> <li> <p> <code>db.sampledload.avg</code> - The raw number of active sessions for the database engine.</p> </li> <li> <p>The counter metrics listed in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS">Performance Insights operating system counters</a> in the <i>Amazon Aurora User Guide</i>.</p> </li> </ul> <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code> are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code> showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than <code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code> only. </p>',
        }),
    ),
    Dimensions: DimensionMapSchema.and(
      z.any().openapi({ description: 'The valid dimensions for the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Metric'],
    description:
      'An object describing a Performance Insights metric and one or more dimensions for that metric.',
  })
  .openapi('ResponseResourceMetricKey')

const DataPointSchema = z
  .object({
    Timestamp: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in epoch format, associated with a particular <code>Value</code>.',
        }),
    ),
    Value: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The actual value associated with a particular <code>Timestamp</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Timestamp', 'Value'],
    description:
      'A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.',
  })
  .openapi('DataPoint')

const DataPointsListSchema = z.array(DataPointSchema).openapi('DataPointsList')

const MetricKeyDataPointsSchema = z
  .object({
    Key: ResponseResourceMetricKeySchema.and(
      z.any().openapi({ description: 'The dimensions to which the data points apply.' }),
    ).exactOptional(),
    DataPoints: DataPointsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of timestamp-value pairs, representing measurements over a period of time.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.',
    required: [],
  })
  .openapi('MetricKeyDataPoints')

const MetricKeyDataPointsListSchema = z
  .array(MetricKeyDataPointsSchema)
  .openapi('MetricKeyDataPointsList')

const GetResourceMetricsResponseSchema = z
  .object({
    AlignedStartTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time for the returned metrics, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or equal to the value of the user-specified <code>StartTime</code>.',
        }),
    ).exactOptional(),
    AlignedEndTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end time for the returned metrics, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than or equal to the value of the user-specified <code>Endtime</code>.',
        }),
    ).exactOptional(),
    Identifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as <i>ResourceID</i>. When you call <code>DescribeDBInstances</code>, the identifier is returned as <code>DbiResourceId</code>.',
        }),
    ).exactOptional(),
    MetricList: MetricKeyDataPointsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of metric results, where each array element contains all of the data points for a particular dimension.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceMetricsResponse')

const MetricQuerySchema = z
  .object({
    Metric: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a Performance Insights metric to be measured.</p> <p>Valid values for <code>Metric</code> are:</p> <ul> <li> <p> <code>db.load.avg</code> - A scaled representation of the number of active sessions for the database engine.</p> </li> <li> <p> <code>db.sampledload.avg</code> - The raw number of active sessions for the database engine.</p> </li> <li> <p>The counter metrics listed in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS">Performance Insights operating system counters</a> in the <i>Amazon Aurora User Guide</i>.</p> </li> </ul> <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code> are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code> showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than <code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code> only.</p>',
        }),
    ),
    GroupBy: DimensionGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.',
        }),
    ).exactOptional(),
    Filter: MetricQueryFilterMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more filters to apply in the request. Restrictions:</p> <ul> <li> <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> parameter.</p> </li> <li> <p>A single filter for any other dimension in this dimension group.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Metric'],
    description:
      'A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can request that the data points be aggregated by dimension group (<code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).',
  })
  .openapi('MetricQuery')

const MetricQueryListSchema = z.array(MetricQuerySchema).min(1).max(15).openapi('MetricQueryList')

const PeriodAlignmentSchema = z.enum(['END_TIME', 'START_TIME']).openapi('PeriodAlignment')

const GetResourceMetricsRequestSchema = z
  .object({
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services service for which Performance Insights returns metrics. Valid values are as follows:</p> <ul> <li> <p> <code>RDS</code> </p> </li> <li> <p> <code>DOCDB</code> </p> </li> </ul>',
        }),
    ),
    Identifier: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as <i>ResourceID</i>. When you call <code>DescribeDBInstances</code>, the identifier is returned as <code>DbiResourceId</code>.</p> <p>To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.</p>',
        }),
    ),
    MetricQueries: MetricQueryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of one or more queries to perform. Each query must specify a Performance Insights metric, and can optionally specify aggregation and filtering criteria.',
        }),
    ),
    StartTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The date and time specifying the beginning of the requested time series query range. You can't specify a <code>StartTime</code> that is earlier than 7 days ago. By default, Performance Insights has 7 days of retention, but you can extend this range up to 2 years. The value specified is <i>inclusive</i>. Thus, the command returns data points equal to or greater than <code>StartTime</code>.</p> <p>The value for <code>StartTime</code> must be earlier than the value for <code>EndTime</code>.</p>",
        }),
    ),
    EndTime: ISOTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time specifying the end of the requested time series query range. The value specified is <i>exclusive</i>. Thus, the command returns data points less than (but not equal to) <code>EndTime</code>.</p> <p>The value for <code>EndTime</code> must be later than the value for <code>StartTime</code>.</p>',
        }),
    ),
    PeriodInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:</p> <ul> <li> <p> <code>1</code> (one second)</p> </li> <li> <p> <code>60</code> (one minute)</p> </li> <li> <p> <code>300</code> (five minutes)</p> </li> <li> <p> <code>3600</code> (one hour)</p> </li> <li> <p> <code>86400</code> (twenty-four hours)</p> </li> </ul> <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response.</p>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in the response. If more items exist than the specified <code>MaxRecords</code> value, a pagination token is included in the response so that the remaining results can be retrieved. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    PeriodAlignment: PeriodAlignmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The returned timestamp which is the start or end time of the time periods. The default value is <code>END_TIME</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceType', 'Identifier', 'MetricQueries', 'StartTime', 'EndTime'],
    title: 'GetResourceMetricsRequest',
  })
  .openapi('GetResourceMetricsRequest')

const DimensionDetailSchema = z
  .object({
    Identifier: StringSchema.and(
      z.any().openapi({ description: 'The identifier of a dimension.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The information about a dimension.', required: [] })
  .openapi('DimensionDetail')

const DimensionDetailListSchema = z.array(DimensionDetailSchema).openapi('DimensionDetailList')

const DimensionGroupDetailSchema = z
  .object({
    Group: StringSchema.and(
      z.any().openapi({ description: 'The name of the dimension group.' }),
    ).exactOptional(),
    Dimensions: DimensionDetailListSchema.and(
      z.any().openapi({ description: 'The dimensions within a dimension group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about dimensions within a dimension group.', required: [] })
  .openapi('DimensionGroupDetail')

const DimensionGroupDetailListSchema = z
  .array(DimensionGroupDetailSchema)
  .openapi('DimensionGroupDetailList')

const MetricDimensionGroupsSchema = z
  .object({
    Metric: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The metric type to which the dimension information belongs.' }),
    ).exactOptional(),
    Groups: DimensionGroupDetailListSchema.and(
      z.any().openapi({ description: 'The available dimension groups for a metric type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The available dimension information for a metric type.', required: [] })
  .openapi('MetricDimensionGroups')

const MetricDimensionsListSchema = z
  .array(MetricDimensionGroupsSchema)
  .openapi('MetricDimensionsList')

const ListAvailableResourceDimensionsResponseSchema = z
  .object({
    MetricDimensions: MetricDimensionsListSchema.and(
      z
        .any()
        .openapi({ description: 'The dimension information returned for requested metric types.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAvailableResourceDimensionsResponse')

const DimensionsMetricListSchema = z
  .array(RequestStringSchema)
  .min(1)
  .max(5)
  .openapi('DimensionsMetricList')

const ListAvailableResourceDimensionsRequestSchema = z
  .object({
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service for which Performance Insights returns metrics.',
        }),
    ),
    Identifier: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VWZ</code>. ',
        }),
    ),
    Metrics: DimensionsMetricListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of metrics for which to retrieve dimensions. Valid values include <code>db.load</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in the response. If more items exist than the specified <code>MaxRecords</code> value, a pagination token is included in the response so that the remaining results can be retrieved.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceType', 'Identifier', 'Metrics'],
    title: 'ListAvailableResourceDimensionsRequest',
  })
  .openapi('ListAvailableResourceDimensionsRequest')

const DescriptionSchema = z.string().min(1).max(2048).openapi('Description')

const ResponseResourceMetricSchema = z
  .object({
    Metric: StringSchema.and(
      z.any().openapi({ description: 'The full name of the metric.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the metric.' }),
    ).exactOptional(),
    Unit: StringSchema.and(
      z.any().openapi({ description: 'The unit of the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains the full name, description, and unit of a metric. ',
    required: [],
  })
  .openapi('ResponseResourceMetric')

const ResponseResourceMetricListSchema = z
  .array(ResponseResourceMetricSchema)
  .openapi('ResponseResourceMetricList')

const ListAvailableResourceMetricsResponseSchema = z
  .object({
    Metrics: ResponseResourceMetricListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of metrics available to query. Each array element contains the full name, description, and unit of the metric. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token that indicates the response didn’t return all available records because <code>MaxRecords</code> was specified in the previous request. To get the remaining records, specify <code>NextToken</code> in a separate request with this value. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAvailableResourceMetricsResponse')

const MetricTypeListSchema = z.array(RequestStringSchema).openapi('MetricTypeList')

const ListAvailableResourceMetricsRequestSchema = z
  .object({
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service for which Performance Insights returns metrics.',
        }),
    ),
    Identifier: RequestStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VWZ</code>. ',
        }),
    ),
    MetricTypes: MetricTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The types of metrics to return in the response. Valid values in the array include the following:</p> <ul> <li> <p> <code>os</code> (OS counter metrics) - All engines</p> </li> <li> <p> <code>db</code> (DB load metrics) - All engines except for Amazon DocumentDB</p> </li> <li> <p> <code>db.sql.stats</code> (per-SQL metrics) - All engines except for Amazon DocumentDB</p> </li> <li> <p> <code>db.sql_tokenized.stats</code> (per-SQL digest metrics) - All engines except for Amazon DocumentDB</p> </li> </ul>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return. If the <code>MaxRecords</code> value is less than the number of existing items, the response includes a pagination token. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceType', 'Identifier', 'MetricTypes'],
    title: 'ListAvailableResourceMetricsRequest',
  })
  .openapi('ListAvailableResourceMetricsRequest')

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

export const postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys',
  description:
    '<p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>',
  operationId: 'DescribeDimensionKeys',
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
        .literal('PerformanceInsightsv20180227.DescribeDimensionKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['PerformanceInsightsv20180227.DescribeDimensionKeys'],
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
      content: { 'application/json': { schema: DescribeDimensionKeysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDimensionKeysResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails',
  description:
    "Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.",
  operationId: 'GetDimensionKeyDetails',
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
        .literal('PerformanceInsightsv20180227.GetDimensionKeyDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['PerformanceInsightsv20180227.GetDimensionKeyDetails'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDimensionKeyDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDimensionKeyDetailsResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPerformanceInsightsv20180227GetResourceMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata',
  description:
    'Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. ',
  operationId: 'GetResourceMetadata',
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
        .literal('PerformanceInsightsv20180227.GetResourceMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PerformanceInsightsv20180227.GetResourceMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResourceMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceMetadataResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPerformanceInsightsv20180227GetResourceMetricsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics',
  description:
    '<p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>',
  operationId: 'GetResourceMetrics',
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
        .literal('PerformanceInsightsv20180227.GetResourceMetrics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PerformanceInsightsv20180227.GetResourceMetrics'] },
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
      content: { 'application/json': { schema: GetResourceMetricsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceMetricsResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions',
    description:
      'Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.',
    operationId: 'ListAvailableResourceDimensions',
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
          .literal('PerformanceInsightsv20180227.ListAvailableResourceDimensions')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['PerformanceInsightsv20180227.ListAvailableResourceDimensions'],
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
        content: { 'application/json': { schema: ListAvailableResourceDimensionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListAvailableResourceDimensionsResponseSchema } },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'InternalServiceError',
        content: { 'application/json': { schema: InternalServiceErrorSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics',
    description:
      'Retrieve metrics of the specified types that can be queried for a specified DB instance. ',
    operationId: 'ListAvailableResourceMetrics',
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
          .literal('PerformanceInsightsv20180227.ListAvailableResourceMetrics')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['PerformanceInsightsv20180227.ListAvailableResourceMetrics'],
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
        content: { 'application/json': { schema: ListAvailableResourceMetricsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListAvailableResourceMetricsResponseSchema } },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'InternalServiceError',
        content: { 'application/json': { schema: InternalServiceErrorSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
    },
  })
