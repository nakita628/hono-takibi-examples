import { createRoute, z } from '@hono/zod-openapi'

const DataStatsSchema: z.ZodType<DataStatsType> = z
  .lazy(() =>
    z
      .object({
        arrayStats: ArrayStatsSchema.exactOptional().openapi({
          description: 'The statistics for ARRAY DataType.',
        }),
        categoryStats: CategoryStatsSchema.exactOptional().openapi({
          description: 'The statistics for CATEGORY DataType.',
        }),
        distinctValueCount: z
          .string()
          .exactOptional()
          .openapi({ description: 'The number of distinct values.' }),
        float64Stats: Float64StatsSchema.exactOptional().openapi({
          description: 'The statistics for FLOAT64 DataType.',
        }),
        nullValueCount: z
          .string()
          .exactOptional()
          .openapi({ description: 'The number of values that are null.' }),
        stringStats: StringStatsSchema.exactOptional().openapi({
          description: 'The statistics for STRING DataType.',
        }),
        structStats: StructStatsSchema.exactOptional().openapi({
          description: 'The statistics for STRUCT DataType.',
        }),
        timestampStats: TimestampStatsSchema.exactOptional().openapi({
          description: 'The statistics for TIMESTAMP DataType.',
        }),
        validValueCount: z
          .string()
          .exactOptional()
          .openapi({ description: 'The number of values that are valid.' }),
      })
      .openapi({
        description: 'The data statistics of a series of values that share the same DataType.',
        required: [],
      }),
  )
  .openapi('DataStats')

type ArrayStatsType = { memberStats?: z.infer<typeof DataStatsSchema> }

const SingleCategoryStatsSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of occurrences of this value in the series.' }),
    value: z.string().exactOptional().openapi({ description: 'The CATEGORY value.' }),
  })
  .openapi({ description: 'The statistics of a single CATEGORY value.', required: [] })
  .openapi('SingleCategoryStats')

type CategoryStatsType = { topCategoryStats?: z.infer<typeof SingleCategoryStatsSchema>[] }

const ArrayStatsSchema: z.ZodType<ArrayStatsType> = z
  .lazy(() =>
    z
      .object({
        memberStats: DataStatsSchema.exactOptional().openapi({
          description:
            'Stats of all the values of all arrays, as if they were a single long series of data. The type depends on the element type of the array.',
        }),
      })
      .openapi({ description: 'The data statistics of a series of ARRAY values.', required: [] }),
  )
  .openapi('ArrayStats')

const CategoryStatsSchema: z.ZodType<CategoryStatsType> = z
  .lazy(() =>
    z
      .object({
        topCategoryStats: z
          .array(SingleCategoryStatsSchema)
          .exactOptional()
          .openapi({
            description: 'The statistics of the top 20 CATEGORY values, ordered by count.',
          }),
      })
      .openapi({
        description: 'The data statistics of a series of CATEGORY values.',
        required: [],
      }),
  )
  .openapi('CategoryStats')

const HistogramBucketSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of data values that are in the bucket, i.e. are between min and max values.',
      }),
    max: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it\'s inclusive.',
      }),
    min: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The minimum value of the bucket, inclusive.' }),
  })
  .openapi({ description: 'A bucket of a histogram.', required: [] })
  .openapi('HistogramBucket')

type Float64StatsType = {
  histogramBuckets?: z.infer<typeof HistogramBucketSchema>[]
  mean?: number
  quantiles?: number[]
  standardDeviation?: number
}

const Float64StatsSchema: z.ZodType<Float64StatsType> = z
  .object({
    histogramBuckets: z
      .array(HistogramBucketSchema)
      .exactOptional()
      .openapi({
        description:
          'Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being `"-Infinity"`, and max of the last one being `"Infinity"`.',
      }),
    mean: z.float64().exactOptional().openapi({ description: 'The mean of the series.' }),
    quantiles: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          'Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i = 0 and i = k these are, respectively, the min and max values.',
      }),
    standardDeviation: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The standard deviation of the series.' }),
  })
  .openapi({ description: 'The data statistics of a series of FLOAT64 values.', required: [] })
  .openapi('Float64Stats')

const UnigramStatsSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of occurrences of this unigram in the series.' }),
    value: z.string().exactOptional().openapi({ description: 'The unigram.' }),
  })
  .openapi({ description: 'The statistics of a unigram.', required: [] })
  .openapi('UnigramStats')

type StringStatsType = { topUnigramStats?: z.infer<typeof UnigramStatsSchema>[] }

const StringStatsSchema: z.ZodType<StringStatsType> = z
  .object({
    topUnigramStats: z
      .array(UnigramStatsSchema)
      .exactOptional()
      .openapi({ description: 'The statistics of the top 20 unigrams, ordered by count.' }),
  })
  .openapi({ description: 'The data statistics of a series of STRING values.', required: [] })
  .openapi('StringStats')

const StructStatsSchema: z.ZodType<StructStatsType> = z
  .lazy(() =>
    z
      .object({
        fieldStats: z
          .record(z.string(), DataStatsSchema)
          .exactOptional()
          .openapi({
            description:
              'Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs.',
          }),
      })
      .openapi({ description: 'The data statistics of a series of STRUCT values.', required: [] }),
  )
  .openapi('StructStats')

const GranularStatsSchema = z
  .object({
    buckets: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map from granularity key to example count for that key. E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May).',
      }),
  })
  .openapi({ description: 'Stats split by a defined in context granularity.', required: [] })
  .openapi('GranularStats')

type TimestampStatsType = { granularStats?: { [key: string]: z.infer<typeof GranularStatsSchema> } }

const TimestampStatsSchema: z.ZodType<TimestampStatsType> = z
  .object({
    granularStats: z
      .record(z.string(), GranularStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated).',
      }),
  })
  .openapi({ description: 'The data statistics of a series of TIMESTAMP values.', required: [] })
  .openapi('TimestampStats')

type DataStatsType = {
  arrayStats?: z.infer<typeof ArrayStatsSchema>
  categoryStats?: z.infer<typeof CategoryStatsSchema>
  distinctValueCount?: string
  float64Stats?: z.infer<typeof Float64StatsSchema>
  nullValueCount?: string
  stringStats?: z.infer<typeof StringStatsSchema>
  structStats?: z.infer<typeof StructStatsSchema>
  timestampStats?: z.infer<typeof TimestampStatsSchema>
  validValueCount?: string
}

const StructTypeSchema: z.ZodType<StructTypeType> = z
  .lazy(() =>
    z
      .object({
        fields: z
          .record(z.string(), DataTypeSchema)
          .exactOptional()
          .openapi({
            description:
              'Unordered map of struct field names to their data types. Fields cannot be added or removed via Update. Their names and data types are still mutable.',
          }),
      })
      .openapi({
        description: '`StructType` defines the DataType-s of a STRUCT type.',
        required: [],
      }),
  )
  .openapi('StructType')

type DataTypeType = {
  listElementType?: DataTypeType
  nullable?: boolean
  structType?: z.infer<typeof StructTypeSchema>
  timeFormat?: string
  typeCode?:
    | 'TYPE_CODE_UNSPECIFIED'
    | 'FLOAT64'
    | 'TIMESTAMP'
    | 'STRING'
    | 'ARRAY'
    | 'STRUCT'
    | 'CATEGORY'
}

const BigQuerySourceSchema = z
  .object({
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. BigQuery URI to a table, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId.bqDatasetId.bqTableId',
      }),
  })
  .openapi({ description: 'The BigQuery location for the input content.', required: [] })
  .openapi('BigQuerySource')

const GcsSourceSchema = z
  .object({
    inputUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Google Cloud Storage URIs to input files, up to 2000 characters long. Accepted forms: * Full object path, e.g. gs://bucket/directory/object.csv',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location for the input content.',
    required: [],
  })
  .openapi('GcsSource')

const BatchPredictInputConfigSchema = z
  .object({
    bigquerySource: BigQuerySourceSchema.exactOptional().openapi({
      description: 'The BigQuery location for the input content.',
    }),
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location for the input content.',
    }),
  })
  .openapi({
    description:
      'Input configuration for BatchPredict Action. The format of input depends on the ML problem of the model used for prediction. As input source the gcs_source is expected, unless specified otherwise. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Image Object Detection: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Video Classification: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,40 gs://folder/video1.mp4,20,60 gs://folder/vid2.mov,0,inf * For Video Object Tracking: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,240 gs://folder/video1.mp4,300,360 gs://folder/vid2.mov,0,inf * For Text Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 60,000 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Sentiment: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 500 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Extraction .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or as documents (for a single BatchPredict call only one of the these formats may be used). The in-line .JSONL file(s) contain per line a proto that wraps a temporary user-assigned TextSnippet ID (string up to 2000 characters long) called "id", a TextSnippet proto (in json representation) and zero or more TextFeature protos. Any given text snippet content must have 30,000 characters or less, and also be UTF-8 NFC encoded (ASCII already is). The IDs provided should be unique. The document .JSONL file(s) contain, per line, a proto that wraps a Document proto with input_config set. Only PDF documents are supported now, and each document must be up to 2MB large. Any given .JSONL file must be 100MB or smaller, and no more than 20 files may be given. Sample in-line JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \\n): { "id": "my_first_id", "text_snippet": { "content": "dog car cat"}, "text_features": [ { "text_segment": {"start_offset": 4, "end_offset": 6}, "structural_type": PARAGRAPH, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ] }, } ], }\\n { "id": "2", "text_snippet": { "content": "An elaborate content", "mime_type": "text/plain" } } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \\n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Tables: Either gcs_source or bigquery_source. GCS case: CSV file(s), each by itself 10GB or smaller and total size must be 100GB or smaller, where first file must have a header containing column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. The column names must contain the model\'s input_feature_column_specs\' display_name-s (order doesn\'t matter). The columns corresponding to the model\'s input feature column specs must contain values compatible with the column spec\'s data types. Prediction on all the rows, i.e. the CSV lines, will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. First three sample rows of a CSV file: "First Name","Last Name","Dob","Addresses" "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} BigQuery case: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. The column names must contain the model\'s input_feature_column_specs\' display_name-s (order doesn\'t matter). The columns corresponding to the model\'s input feature column specs must contain values compatible with the column spec\'s data types. Prediction on all the rows of the table will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. Definitions: GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi". TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes ("") TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed and it means the end of the example. Errors: If any of the provided CSV files can\'t be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and prediction does not happen. Regardless of overall success or failure the per-row failures, up to a certain count cap, will be listed in Operation.metadata.partial_failures.',
    required: [],
  })
  .openapi('BatchPredictInputConfig')

const BatchPredictOutputInfoSchema = z
  .object({
    bigqueryOutputDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the prediction output is written.',
      }),
    gcsOutputDirectory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full path of the Google Cloud Storage directory created, into which the prediction output is written.',
      }),
  })
  .openapi({
    description:
      "Further describes this batch predict's output. Supplements BatchPredictOutputConfig.",
    required: [],
  })
  .openapi('BatchPredictOutputInfo')

const BatchPredictOperationMetadataSchema = z
  .object({
    inputConfig: BatchPredictInputConfigSchema.exactOptional().openapi({
      description:
        'Output only. The input config that was given upon starting this batch predict operation.',
    }),
    outputInfo: BatchPredictOutputInfoSchema.exactOptional().openapi({
      description: "Output only. Information further describing this batch predict's output.",
    }),
  })
  .openapi({ description: 'Details of BatchPredict operation.', required: [] })
  .openapi('BatchPredictOperationMetadata')

const CreateModelOperationMetadataSchema = z
  .object({})
  .openapi({ description: 'Details of CreateModel operation.' })
  .openapi('CreateModelOperationMetadata')

const DeleteOperationMetadataSchema = z
  .object({})
  .openapi({ description: 'Details of operations that perform deletes of any entities.' })
  .openapi('DeleteOperationMetadata')

const DeployModelOperationMetadataSchema = z
  .object({})
  .openapi({ description: 'Details of DeployModel operation.' })
  .openapi('DeployModelOperationMetadata')

const ExportDataOutputInfoSchema = z
  .object({
    bigqueryOutputDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the exported data is written.',
      }),
    gcsOutputDirectory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full path of the Google Cloud Storage directory created, into which the exported data is written.',
      }),
  })
  .openapi({
    description: "Further describes this export data's output. Supplements OutputConfig.",
    required: [],
  })
  .openapi('ExportDataOutputInfo')

const ExportDataOperationMetadataSchema = z
  .object({
    outputInfo: ExportDataOutputInfoSchema.exactOptional().openapi({
      description: "Output only. Information further describing this export data's output.",
    }),
  })
  .openapi({ description: 'Details of ExportData operation.', required: [] })
  .openapi('ExportDataOperationMetadata')

const ExportEvaluatedExamplesOutputInfoSchema = z
  .object({
    bigqueryOutputDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the output of export evaluated examples is written.',
      }),
  })
  .openapi({
    description:
      'Further describes the output of the evaluated examples export. Supplements ExportEvaluatedExamplesOutputConfig.',
    required: [],
  })
  .openapi('ExportEvaluatedExamplesOutputInfo')

const ExportEvaluatedExamplesOperationMetadataSchema = z
  .object({
    outputInfo: ExportEvaluatedExamplesOutputInfoSchema.exactOptional().openapi({
      description:
        'Output only. Information further describing the output of this evaluated examples export.',
    }),
  })
  .openapi({ description: 'Details of EvaluatedExamples operation.', required: [] })
  .openapi('ExportEvaluatedExamplesOperationMetadata')

const ExportModelOutputInfoSchema = z
  .object({
    gcsOutputDirectory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full path of the Google Cloud Storage directory created, into which the model will be exported.',
      }),
  })
  .openapi({
    description:
      'Further describes the output of model export. Supplements ModelExportOutputConfig.',
    required: [],
  })
  .openapi('ExportModelOutputInfo')

const ExportModelOperationMetadataSchema = z
  .object({
    outputInfo: ExportModelOutputInfoSchema.exactOptional().openapi({
      description: 'Output only. Information further describing the output of this model export.',
    }),
  })
  .openapi({ description: 'Details of ExportModel operation.', required: [] })
  .openapi('ExportModelOperationMetadata')

const ImportDataOperationMetadataSchema = z
  .object({})
  .openapi({ description: 'Details of ImportData operation.' })
  .openapi('ImportDataOperationMetadata')

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

const UndeployModelOperationMetadataSchema = z
  .object({})
  .openapi({ description: 'Details of UndeployModel operation.' })
  .openapi('UndeployModelOperationMetadata')

type OperationMetadataType = {
  batchPredictDetails?: z.infer<typeof BatchPredictOperationMetadataSchema>
  createModelDetails?: z.infer<typeof CreateModelOperationMetadataSchema>
  createTime?: string
  deleteDetails?: z.infer<typeof DeleteOperationMetadataSchema>
  deployModelDetails?: z.infer<typeof DeployModelOperationMetadataSchema>
  exportDataDetails?: z.infer<typeof ExportDataOperationMetadataSchema>
  exportEvaluatedExamplesDetails?: z.infer<typeof ExportEvaluatedExamplesOperationMetadataSchema>
  exportModelDetails?: z.infer<typeof ExportModelOperationMetadataSchema>
  importDataDetails?: z.infer<typeof ImportDataOperationMetadataSchema>
  partialFailures?: z.infer<typeof StatusSchema>[]
  progressPercent?: number
  undeployModelDetails?: z.infer<typeof UndeployModelOperationMetadataSchema>
  updateTime?: string
}

type StructStatsType = { fieldStats?: { [key: string]: z.infer<typeof DataStatsSchema> } }

const DataTypeSchema: z.ZodType<DataTypeType> = z
  .lazy(() =>
    z
      .object({
        listElementType: DataTypeSchema.exactOptional().openapi({
          description:
            'If type_code == ARRAY, then `list_element_type` is the type of the elements.',
        }),
        nullable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, this DataType can also be `NULL`. In .CSV files `NULL` value is expressed as an empty string.',
          }),
        structType: StructTypeSchema.exactOptional().openapi({
          description:
            "If type_code == STRUCT, then `struct_type` provides type information for the struct's fields.",
        }),
        timeFormat: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must either be one of: * `UNIX_SECONDS` * `UNIX_MILLISECONDS` * `UNIX_MICROSECONDS` * `UNIX_NANOSECONDS` (for respectively number of seconds, milliseconds, microseconds and nanoseconds since start of the Unix epoch); or be written in `strftime` syntax. If time_format is not set, then the default format as described on the type_code is used.',
          }),
        typeCode: z
          .enum([
            'TYPE_CODE_UNSPECIFIED',
            'FLOAT64',
            'TIMESTAMP',
            'STRING',
            'ARRAY',
            'STRUCT',
            'CATEGORY',
          ])
          .exactOptional()
          .openapi({ description: 'Required. The TypeCode for this type.' }),
      })
      .openapi({
        description:
          'Indicated the type of data that can be stored in a structured data entity (e.g. a table).',
        required: [],
      }),
  )
  .openapi('DataType')

type StructTypeType = { fields?: { [key: string]: z.infer<typeof DataTypeSchema> } }

const ClassificationAnnotationSchema = z
  .object({
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence that the annotation is positive. If a user approves an annotation as negative or positive, the score value remains unchanged. If a user creates an annotation, the score is 0 for negative or 1 for positive.',
      }),
  })
  .openapi({ description: 'Contains annotation details specific to classification.', required: [] })
  .openapi('ClassificationAnnotation')

const NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'Required. Horizontal coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Required. Vertical coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane.',
    required: [],
  })
  .openapi('NormalizedVertex')

const BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'Output only . The bounding polygon normalized vertices.' }),
  })
  .openapi({
    description:
      'A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.',
    required: [],
  })
  .openapi('BoundingPoly')

const ImageObjectDetectionAnnotationSchema = z
  .object({
    boundingBox: BoundingPolySchema.exactOptional().openapi({
      description: 'Output only. The rectangle representing the object location.',
    }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence that this annotation is positive for the parent example, value in [0, 1], higher means higher positivity confidence.',
      }),
  })
  .openapi({ description: 'Annotation details for image object detection.', required: [] })
  .openapi('ImageObjectDetectionAnnotation')

const DoubleRangeSchema = z
  .object({
    end: z.float64().exactOptional().openapi({ description: 'End of the range, exclusive.' }),
    start: z.float64().exactOptional().openapi({ description: 'Start of the range, inclusive.' }),
  })
  .openapi({ description: 'A range between two double numbers.', required: [] })
  .openapi('DoubleRange')

const TablesModelColumnInfoSchema = z
  .object({
    columnDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of the column (same as the display_name of its ColumnSpec).',
      }),
    columnSpecName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the ColumnSpec describing the column. Not populated when this proto is outputted to BigQuery.',
      }),
    featureImportance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. When given as part of a Model (always populated): Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict (populated iff feature_importance param is set) or Batch Predict (populated iff feature_importance param is set): Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method.',
      }),
  })
  .openapi({
    description:
      'An information specific to given column and Tables Model, in context of the Model and the predictions created by it.',
    required: [],
  })
  .openapi('TablesModelColumnInfo')

const TablesAnnotationSchema = z
  .object({
    baselineScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Output only. Stores the prediction score for the baseline example, which is defined as the example with all values set to their baseline values. This is used as part of the Sampled Shapley explanation of the model's prediction. This field is populated only when feature importance is requested. For regression models, this holds the baseline prediction for the baseline example. For classification models, this holds the baseline prediction for the baseline example for the argmax class.",
      }),
    predictionInterval: DoubleRangeSchema.exactOptional().openapi({
      description:
        'Output only. Only populated when target_column_spec has FLOAT64 data type. An interval in which the exactly correct target value has 95% chance to be in.',
    }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher value means greater confidence in the returned value. For target_column_spec of FLOAT64 data type the score is not populated.',
      }),
    tablesModelColumnInfo: z
      .array(TablesModelColumnInfoSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Auxiliary information for each of the model's input_feature_column_specs with respect to this particular prediction. If no other fields than column_spec_name and column_display_name would be populated, then this whole field is not.",
      }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The predicted value of the row's target_column. The value depends on the column's DataType: * CATEGORY - the predicted (with the above confidence `score`) CATEGORY value. * FLOAT64 - the predicted (with above `prediction_interval`) FLOAT64 value.",
      }),
  })
  .openapi({ description: 'Contains annotation details specific to Tables.', required: [] })
  .openapi('TablesAnnotation')

const TextSegmentSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The content of the TextSegment.' }),
    endOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Zero-based character index of the first character past the end of the text segment (counting character from the beginning of the text). The character at the end_offset is NOT included in the text segment.',
      }),
    startOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Zero-based character index of the first character of the text segment (counting characters from the beginning of the text).',
      }),
  })
  .openapi({
    description: 'A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.',
    required: [],
  })
  .openapi('TextSegment')

const TextExtractionAnnotationSchema = z
  .object({
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence in correctness of the annotation.',
      }),
    textSegment: TextSegmentSchema.exactOptional().openapi({
      description:
        'An entity annotation will set this, which is the part of the original text to which the annotation pertains.',
    }),
  })
  .openapi({ description: 'Annotation for identifying spans of text.', required: [] })
  .openapi('TextExtractionAnnotation')

const TextSentimentAnnotationSchema = z
  .object({
    sentiment: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The sentiment with the semantic, as given to the AutoMl.ImportData when populating the dataset from which the model used for the prediction had been trained. The sentiment values are between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive), with higher value meaning more positive sentiment. They are completely relative, i.e. 0 means least positive sentiment and sentiment_max means the most positive from the sentiments present in the train data. Therefore e.g. if train data had only negative sentiment, then sentiment_max, would be still negative (although least negative). The sentiment shouldn\'t be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API.',
      }),
  })
  .openapi({ description: 'Contains annotation details specific to text sentiment.', required: [] })
  .openapi('TextSentimentAnnotation')

const TextSnippetSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The content of the text snippet as a string. Up to 250000 characters long.',
      }),
    contentUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. HTTP URI where you can download the content.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The format of content. Currently the only two allowed values are "text/html" and "text/plain". If left blank, the format is automatically determined from the type of the uploaded content.',
      }),
  })
  .openapi({ description: 'A representation of a text snippet.', required: [] })
  .openapi('TextSnippet')

const TranslationAnnotationSchema = z
  .object({
    translatedContent: TextSnippetSchema.exactOptional().openapi({
      description: 'Output only . The translated content.',
    }),
  })
  .openapi({ description: 'Annotation details specific to translation.', required: [] })
  .openapi('TranslationAnnotation')

const TimeSegmentSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End of the time segment (exclusive), represented as the duration since the example start.',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start of the time segment (inclusive), represented as the duration since the example start.',
      }),
  })
  .openapi({
    description: 'A time period inside of an example that has a time dimension (e.g. video).',
    required: [],
  })
  .openapi('TimeSegment')

const VideoClassificationAnnotationSchema = z
  .object({
    classificationAnnotation: ClassificationAnnotationSchema.exactOptional().openapi({
      description: 'Output only . The classification details of this annotation.',
    }),
    timeSegment: TimeSegmentSchema.exactOptional().openapi({
      description: 'Output only . The time segment of the video to which the annotation applies.',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Expresses the type of video classification. Possible values: * `segment` - Classification done on a specified by user time segment of a video. AnnotationSpec is answered to be present in that time segment, if it is present in any part of it. The video ML model evaluations are done only for this type of classification. * `shot`- Shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. * `1s_interval` - AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality.',
      }),
  })
  .openapi({
    description: 'Contains annotation details specific to video classification.',
    required: [],
  })
  .openapi('VideoClassificationAnnotation')

const VideoObjectTrackingAnnotationSchema = z
  .object({
    boundingBox: BoundingPolySchema.exactOptional().openapi({
      description:
        'Required. The rectangle representing the object location on the frame (i.e. at the time_offset of the video).',
    }),
    instanceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The instance of the object, expressed as a positive integer. Used to tell apart objects of the same type (i.e. AnnotationSpec) when multiple are present on a single example. NOTE: Instance ID prediction quality is not a part of model evaluation and is done as best effort. Especially in cases when an entity goes off-screen for a longer time (minutes), when it comes back it may be given a new instance ID.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence that this annotation is positive for the video at the time_offset, value in [0, 1], higher means higher positivity confidence. For annotations created by the user the score is 1. When user approves an annotation, the original float score is kept (and not changed to 1).',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. A time (frame) of a video to which this annotation pertains. Represented as the duration since the video's start.",
      }),
  })
  .openapi({ description: 'Annotation details for video object tracking.', required: [] })
  .openapi('VideoObjectTrackingAnnotation')

const AnnotationPayloadSchema = z
  .object({
    annotationSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only . The resource ID of the annotation spec that this annotation pertains to. The annotation spec comes from either an ancestor dataset, or the dataset that was used to train the model in use.',
      }),
    classification: ClassificationAnnotationSchema.exactOptional().openapi({
      description: 'Annotation details for content or image classification.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The value of display_name when the model was trained. Because this field returns a value at model training time, for different models trained using the same dataset, the returned value could be different as model owner could update the `display_name` between any two model training.',
      }),
    imageObjectDetection: ImageObjectDetectionAnnotationSchema.exactOptional().openapi({
      description: 'Annotation details for image object detection.',
    }),
    tables: TablesAnnotationSchema.exactOptional().openapi({
      description: 'Annotation details for Tables.',
    }),
    textExtraction: TextExtractionAnnotationSchema.exactOptional().openapi({
      description: 'Annotation details for text extraction.',
    }),
    textSentiment: TextSentimentAnnotationSchema.exactOptional().openapi({
      description: 'Annotation details for text sentiment.',
    }),
    translation: TranslationAnnotationSchema.exactOptional().openapi({
      description: 'Annotation details for translation.',
    }),
    videoClassification: VideoClassificationAnnotationSchema.exactOptional().openapi({
      description:
        'Annotation details for video classification. Returned for Video Classification predictions.',
    }),
    videoObjectTracking: VideoObjectTrackingAnnotationSchema.exactOptional().openapi({
      description: 'Annotation details for video object tracking.',
    }),
  })
  .openapi({
    description: 'Contains annotation information that is relevant to AutoML.',
    required: [],
  })
  .openapi('AnnotationPayload')

const AnnotationSpecSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the annotation spec to show in the interface. The name can be up to 32 characters long and must match the regexp `[a-zA-Z0-9_]+`.',
      }),
    exampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of examples in the parent dataset labeled by the annotation spec.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Resource name of the annotation spec. Form: 'projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationSpecs/{annotation_spec_id}'",
      }),
  })
  .openapi({ description: 'A definition of an annotation spec.', required: [] })
  .openapi('AnnotationSpec')

const BigQueryDestinationSchema = z
  .object({
    outputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. BigQuery URI to a project, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId',
      }),
  })
  .openapi({ description: 'The BigQuery location for the output content.', required: [] })
  .openapi('BigQueryDestination')

const GcsDestinationSchema = z
  .object({
    outputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Google Cloud Storage URI to output directory, up to 2000 characters long. Accepted forms: * Prefix path: gs://bucket/directory The requesting user must have write permission to the bucket. The directory is created if it doesn't exist.",
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the output is to be written to.',
    required: [],
  })
  .openapi('GcsDestination')

const BatchPredictOutputConfigSchema = z
  .object({
    bigqueryDestination: BigQueryDestinationSchema.exactOptional().openapi({
      description: 'The BigQuery location where the output is to be written to.',
    }),
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description:
        'The Google Cloud Storage location of the directory where the output is to be written to.',
    }),
  })
  .openapi({
    description:
      'Output configuration for BatchPredict Action. As destination the gcs_destination must be set unless specified otherwise for a domain. If gcs_destination is set then in the given directory a new directory is created. Its name will be "prediction--", where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. The contents of it depends on the ML problem the predictions are made for. * For Image Classification: In the created directory files `image_classification_1.jsonl`, `image_classification_2.jsonl`,...,`image_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. A single image will be listed only once with all its annotations, and its annotations will never be split across files. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image\'s "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. If prediction for any image failed (partially or completely), then an additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Image Object Detection: In the created directory files `image_object_detection_1.jsonl`, `image_object_detection_2.jsonl`,...,`image_object_detection_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image\'s "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have image_object_detection detail populated. A single image will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any image failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Video Classification: In the created directory a video_classification.csv file, and a .JSON file per each video classification requested in the input (i.e. each line in given CSV(s)), will be created. The format of video_classification.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_classification.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for the video time segment the file is assigned to in the video_classification.csv. All AnnotationPayload protos will have video_classification field set, and will be sorted by video_classification.type field (note that the returned types are governed by `classifaction_types` parameter in PredictService.BatchPredictRequest.params). * For Video Object Tracking: In the created directory a video_object_tracking.csv file will be created, and multiple files video_object_trackinng_1.json, video_object_trackinng_2.json,..., video_object_trackinng_N.json, where N is the number of requests in the input (i.e. the number of lines in given CSV(s)). The format of video_object_tracking.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_object_tracking.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for each frame of the video time segment the file is assigned to in video_object_tracking.csv. All AnnotationPayload protos will have video_object_tracking field set. * For Text Classification: In the created directory files `text_classification_1.jsonl`, `text_classification_2.jsonl`,...,`text_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Sentiment: In the created directory files `text_sentiment_1.jsonl`, `text_sentiment_2.jsonl`,...,`text_sentiment_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have text_sentiment detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Extraction: In the created directory files `text_extraction_1.jsonl`, `text_extraction_2.jsonl`,...,`text_extraction_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. The contents of these .JSONL file(s) depend on whether the input used inline text, or documents. If input was inline, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request text snippet\'s "id" (if specified), followed by input text snippet, and a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated. A single text snippet will be listed only once with all its annotations, and its annotations will never be split across files. If input used documents, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request document proto, followed by its OCR-ed representation in the form of a text snippet, finally followed by a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated and refer, via their indices, to the OCR-ed text snippet. A single document (and its text snippet) will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps either the "id" : "" (in case of inline) or the document proto (in case of document) but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Tables: Output depends on whether gcs_destination or bigquery_destination is set (either is allowed). GCS case: In the created directory files `tables_1.csv`, `tables_2.csv`,..., `tables_N.csv` will be created, where N may be 1, and depends on the total number of the successfully predicted rows. For all CLASSIFICATION prediction_type-s: Each .csv file will contain a header, listing all columns\' display_name-s given on input followed by M target column names in the format of "__score" where M is the number of distinct target values, i.e. number of distinct values in the target column of the table used to train the model. Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, columns having the corresponding prediction scores. For REGRESSION and FORECASTING prediction_type-s: Each .csv file will contain a header, listing all columns\' display_name-s given on input followed by the predicted target column with name in the format of "predicted_" Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, column having the predicted target value. If prediction for any rows failed, then an additional `errors_1.csv`, `errors_2.csv`,..., `errors_N.csv` will be created (N depends on total number of failed rows). These files will have analogous format as `tables_*.csv`, but always with a single target column having [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a JSON string, and containing only `code` and `message`. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `prediction__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset two tables will be created, `predictions`, and `errors`. The `predictions` table\'s column names will be the input columns\' display_name-s followed by the target column with name in the format of "predicted_" The input feature columns will contain the respective values of successfully predicted rows, with the target column having an ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. The `errors` table contains rows for which the prediction has failed, it has analogous input columns while the target column name is in the format of "errors_", and as a value has [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a STRUCT, and containing only `code` and `message`.',
    required: [],
  })
  .openapi('BatchPredictOutputConfig')

const BatchPredictRequestSchema = z
  .object({
    inputConfig: BatchPredictInputConfigSchema.exactOptional().openapi({
      description: 'Required. The input configuration for batch prediction.',
    }),
    outputConfig: BatchPredictOutputConfigSchema.exactOptional().openapi({
      description:
        'Required. The Configuration specifying where output predictions should be written.',
    }),
    params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Additional domain-specific parameters for the predictions, any string must be up to 25000 characters long. * For Text Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a text snippet, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be produced per image. Default is 100, the requested value may be limited by server. * For Video Classification : `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a video, it will only produce results that have at least this confidence score. The default is 0.5. `segment_classification` - (boolean) Set to true to request segment-level classification. AutoML Video Intelligence returns labels and their confidence scores for the entire segment of the video that user specified in the request configuration. The default is "true". `shot_classification` - (boolean) Set to true to request shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". `1s_interval_classification` - (boolean) Set to true to request classification for a video at one-second intervals. AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotations. The default is false. * For Video Object Tracking: `score_threshold` - (float) When Model detects objects on video frames, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned per frame. Default is 100, the requested value may be limited by server. `min_bounding_box_size` - (float) Only bounding boxes with shortest edge at least that long as a relative value of video frame size will be returned. Value in 0 to 1 range. Default is 0.',
      }),
  })
  .openapi({ description: 'Request message for PredictionService.BatchPredict.', required: [] })
  .openapi('BatchPredictRequest')

const BatchPredictResultSchema = z
  .object({
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Video Object Tracking: `max_bounding_box_count` - (int64) At most that many bounding boxes per frame could have been returned.',
      }),
  })
  .openapi({
    description:
      'Result of the Batch Predict. This message is returned in response of the operation returned by the PredictionService.BatchPredict.',
    required: [],
  })
  .openapi('BatchPredictResult')

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
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const BoundingBoxMetricsEntryConfidenceMetricsEntrySchema = z
  .object({
    confidenceThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Output only. The confidence threshold value used to compute the metrics.',
      }),
    f1Score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. The harmonic mean of recall and precision.' }),
    precision: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Precision under the given confidence threshold.' }),
    recall: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Recall under the given confidence threshold.' }),
  })
  .openapi({ description: 'Metrics for a single confidence threshold.', required: [] })
  .openapi('BoundingBoxMetricsEntryConfidenceMetricsEntry')

const BoundingBoxMetricsEntrySchema = z
  .object({
    confidenceMetricsEntries: z
      .array(BoundingBoxMetricsEntryConfidenceMetricsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them.',
      }),
    iouThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The intersection-over-union threshold value used to compute this metrics entry.',
      }),
    meanAveragePrecision: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Output only. The mean average precision, most often close to au_prc.',
      }),
  })
  .openapi({
    description:
      'Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.',
    required: [],
  })
  .openapi('BoundingBoxMetricsEntry')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const ClassificationEvaluationMetricsConfidenceMetricsEntrySchema = z
  .object({
    confidenceThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Metrics are computed with an assumption that the model never returns predictions with score lower than this value.',
      }),
    f1Score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. The harmonic mean of recall and precision.' }),
    f1ScoreAt1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. The harmonic mean of recall_at1 and precision_at1.' }),
    falseNegativeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of ground truth labels that are not matched by a model created label.',
      }),
    falsePositiveCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of model created labels that do not match a ground truth label.',
      }),
    falsePositiveRate: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Output only. False Positive Rate for the given confidence threshold.',
      }),
    falsePositiveRateAt1: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example.',
      }),
    positionThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold.',
      }),
    precision: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Precision for the given confidence threshold.' }),
    precisionAt1: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example.',
      }),
    recall: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Output only. Recall (True Positive Rate) for the given confidence threshold.',
      }),
    recallAt1: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Recall (True Positive Rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example.',
      }),
    trueNegativeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of labels that were not created by the model, but if they would, they would not match a ground truth label.',
      }),
    truePositiveCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of model created labels that match a ground truth label.',
      }),
  })
  .openapi({ description: 'Metrics for a single confidence threshold.', required: [] })
  .openapi('ClassificationEvaluationMetricsConfidenceMetricsEntry')

const ClassificationEvaluationMetricsConfusionMatrixRowSchema = z
  .object({
    exampleCount: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Output only. Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the `annotation_spec_id` field or, if that one is not populated, length of the display_name field.',
      }),
  })
  .openapi({ description: 'Output only. A row in the confusion matrix.', required: [] })
  .openapi('ClassificationEvaluationMetricsConfusionMatrixRow')

const ConfusionMatrixSchema = z
  .object({
    annotationSpecId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. IDs of the annotation specs used in the confusion matrix. For Tables CLASSIFICATION prediction_type only list of annotation_spec_display_name-s is populated.',
      }),
    displayName: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Display name of the annotation specs used in the confusion matrix, as they were at the moment of the evaluation. For Tables CLASSIFICATION prediction_type-s, distinct values of the target column at the moment of the model evaluation are populated here.',
      }),
    row: z
      .array(ClassificationEvaluationMetricsConfusionMatrixRowSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Rows in the confusion matrix. The number of rows is equal to the size of `annotation_spec_id`. `row[i].example_count[j]` is the number of examples that have ground truth of the `annotation_spec_id[i]` and are predicted as `annotation_spec_id[j]` by the model being evaluated.',
      }),
  })
  .openapi({
    description: 'Confusion matrix of the model running the classification.',
    required: [],
  })
  .openapi('ConfusionMatrix')

const ClassificationEvaluationMetricsSchema = z
  .object({
    annotationSpecId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. The annotation spec ids used for this evaluation.' }),
    auPrc: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Area Under Precision-Recall Curve metric. Micro-averaged for the overall evaluation.',
      }),
    auRoc: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation.',
      }),
    baseAuPrc: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Area Under Precision-Recall Curve metric based on priors. Micro-averaged for the overall evaluation. Deprecated.',
      }),
    confidenceMetricsEntry: z
      .array(ClassificationEvaluationMetricsConfidenceMetricsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Metrics for each confidence_threshold in 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and position_threshold = INT32_MAX_VALUE. ROC and precision-recall curves, and other aggregated metrics are derived from them. The confidence metrics entries may also be supplied for additional values of position_threshold, but from these no aggregated metrics are computed.',
      }),
    confusionMatrix: ConfusionMatrixSchema.exactOptional().openapi({
      description:
        'Output only. Confusion matrix of the evaluation. Only set for MULTICLASS classification problems where number of labels is no more than 10. Only set for model level evaluation, not for evaluation per label.',
    }),
    logLoss: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. The Log Loss metric.' }),
  })
  .openapi({
    description:
      'Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.',
    required: [],
  })
  .openapi('ClassificationEvaluationMetrics')

const CorrelationStatsSchema = z
  .object({
    cramersV: z
      .float64()
      .exactOptional()
      .openapi({ description: "The correlation value using the Cramer's V measure." }),
  })
  .openapi({
    description:
      'A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.',
    required: [],
  })
  .openapi('CorrelationStats')

const CorrelatedColumnSchema = z
  .object({
    columnSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The column_spec_id of the correlated column, which belongs to the same table as the in-context column.',
      }),
    correlationStats: CorrelationStatsSchema.exactOptional().openapi({
      description: 'Correlation between this and the in-context column.',
    }),
  })
  .openapi({
    description:
      "Identifies the table's column, and its correlation with the column this ColumnSpec describes.",
    required: [],
  })
  .openapi('CorrelatedColumn')

const ColumnSpecSchema = z
  .object({
    dataStats: DataStatsSchema.exactOptional().openapi({
      description:
        "Output only. Stats of the series of values in the column. This field may be stale, see the ancestor's Dataset.tables_dataset_metadata.stats_update_time field for the timestamp at which these stats were last updated.",
    }),
    dataType: DataTypeSchema.exactOptional().openapi({
      description: 'The data type of elements stored in the column.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the column to show in the interface. The name can be up to 100 characters long and can consist only of ASCII Latin letters A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and must start with a letter or a digit.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`',
      }),
    topCorrelatedColumns: z
      .array(CorrelatedColumnSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
  })
  .openapi({
    description:
      'A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables',
    required: [],
  })
  .openapi('ColumnSpec')

const ImageClassificationDatasetMetadataSchema = z
  .object({
    classificationType: z
      .enum(['CLASSIFICATION_TYPE_UNSPECIFIED', 'MULTICLASS', 'MULTILABEL'])
      .exactOptional()
      .openapi({ description: 'Required. Type of the classification problem.' }),
  })
  .openapi({
    description: 'Dataset metadata that is specific to image classification.',
    required: [],
  })
  .openapi('ImageClassificationDatasetMetadata')

const ImageObjectDetectionDatasetMetadataSchema = z
  .object({})
  .openapi({ description: 'Dataset metadata specific to image object detection.' })
  .openapi('ImageObjectDetectionDatasetMetadata')

const TablesDatasetMetadataSchema = z
  .object({
    mlUseColumnSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'column_spec_id of the primary table column which specifies a possible ML use of the row, i.e. the column will be used to split the rows into TRAIN, VALIDATE and TEST sets. Required type: STRING. This column, if set, must either have all of `TRAIN`, `VALIDATE`, `TEST` among its values, or only have `TEST`, `UNASSIGNED` values. In the latter case the rows with `UNASSIGNED` value will be assigned by AutoML. Note that if a given ml use distribution makes it impossible to create a "good" model, that call will error describing the issue. If both this column_spec_id and primary table\'s time_column_spec_id are not set, then all rows are treated as `UNASSIGNED`. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.',
      }),
    primaryTableSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The table_spec_id of the primary table of this dataset.',
      }),
    statsUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The most recent timestamp when target_column_correlations field and all descendant ColumnSpec.data_stats and ColumnSpec.top_correlated_columns fields were last (re-)generated. Any changes that happened to the dataset afterwards are not reflected in these fields values. The regeneration happens in the background on a best effort basis.',
      }),
    targetColumnCorrelations: z
      .record(z.string(), CorrelationStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Correlations between TablesDatasetMetadata.target_column_spec_id, and other columns of the TablesDatasetMetadataprimary_table. Only set if the target column is set. Mapping from other column spec id to its CorrelationStats with the target column. This field may be stale, see the stats_update_time field for for the timestamp at which these stats were last updated.',
      }),
    targetColumnSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "column_spec_id of the primary table's column that should be used as the training & prediction target. This column must be non-nullable and have one of following data types (otherwise model creation will error): * CATEGORY * FLOAT64 If the type is CATEGORY , only up to 100 unique values may exist in that column across all rows. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.",
      }),
    weightColumnSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "column_spec_id of the primary table's column that should be used as the weight column, i.e. the higher the value the more important the row will be during model training. Required type: FLOAT64. Allowed values: 0 to 10000, inclusive on both ends; 0 means the row is ignored for training. If not set all rows are assumed to have equal weight of 1. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.",
      }),
  })
  .openapi({ description: 'Metadata for a dataset used for AutoML Tables.', required: [] })
  .openapi('TablesDatasetMetadata')

const TextClassificationDatasetMetadataSchema = z
  .object({
    classificationType: z
      .enum(['CLASSIFICATION_TYPE_UNSPECIFIED', 'MULTICLASS', 'MULTILABEL'])
      .exactOptional()
      .openapi({ description: 'Required. Type of the classification problem.' }),
  })
  .openapi({ description: 'Dataset metadata for classification.', required: [] })
  .openapi('TextClassificationDatasetMetadata')

const TextExtractionDatasetMetadataSchema = z
  .object({})
  .openapi({ description: 'Dataset metadata that is specific to text extraction' })
  .openapi('TextExtractionDatasetMetadata')

const TextSentimentDatasetMetadataSchema = z
  .object({
    sentimentMax: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. A sentiment is expressed as an integer ordinal, where higher value means a more positive sentiment. The range of sentiments that will be used is between 0 and sentiment_max (inclusive on both ends), and all the values in the range must be represented in the dataset before a model can be created. sentiment_max value must be between 1 and 10 (inclusive).',
      }),
  })
  .openapi({ description: 'Dataset metadata for text sentiment.', required: [] })
  .openapi('TextSentimentDatasetMetadata')

const TranslationDatasetMetadataSchema = z
  .object({
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The BCP-47 language code of the source language.' }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The BCP-47 language code of the target language.' }),
  })
  .openapi({ description: 'Dataset metadata that is specific to translation.', required: [] })
  .openapi('TranslationDatasetMetadata')

const VideoClassificationDatasetMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label.',
  })
  .openapi('VideoClassificationDatasetMetadata')

const VideoObjectTrackingDatasetMetadataSchema = z
  .object({})
  .openapi({ description: 'Dataset metadata specific to video object tracking.' })
  .openapi('VideoObjectTrackingDatasetMetadata')

const DatasetSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when this dataset was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided description of the dataset. The description can be up to 25000 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.',
      }),
    exampleCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. The number of examples in the dataset.' }),
    imageClassificationDatasetMetadata:
      ImageClassificationDatasetMetadataSchema.exactOptional().openapi({
        description: 'Metadata for a dataset used for image classification.',
      }),
    imageObjectDetectionDatasetMetadata:
      ImageObjectDetectionDatasetMetadataSchema.exactOptional().openapi({
        description: 'Metadata for a dataset used for image object detection.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the dataset. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`',
      }),
    tablesDatasetMetadata: TablesDatasetMetadataSchema.exactOptional().openapi({
      description: 'Metadata for a dataset used for Tables.',
    }),
    textClassificationDatasetMetadata:
      TextClassificationDatasetMetadataSchema.exactOptional().openapi({
        description: 'Metadata for a dataset used for text classification.',
      }),
    textExtractionDatasetMetadata: TextExtractionDatasetMetadataSchema.exactOptional().openapi({
      description: 'Metadata for a dataset used for text extraction.',
    }),
    textSentimentDatasetMetadata: TextSentimentDatasetMetadataSchema.exactOptional().openapi({
      description: 'Metadata for a dataset used for text sentiment.',
    }),
    translationDatasetMetadata: TranslationDatasetMetadataSchema.exactOptional().openapi({
      description: 'Metadata for a dataset used for translation.',
    }),
    videoClassificationDatasetMetadata:
      VideoClassificationDatasetMetadataSchema.exactOptional().openapi({
        description: 'Metadata for a dataset used for video classification.',
      }),
    videoObjectTrackingDatasetMetadata:
      VideoObjectTrackingDatasetMetadataSchema.exactOptional().openapi({
        description: 'Metadata for a dataset used for video object tracking.',
      }),
  })
  .openapi({
    description:
      'A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.',
    required: [],
  })
  .openapi('Dataset')

const ImageClassificationModelDeploymentMetadataSchema = z
  .object({
    nodeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's node_qps. Must be between 1 and 100, inclusive on both ends.",
      }),
  })
  .openapi({
    description: 'Model deployment metadata specific to Image Classification.',
    required: [],
  })
  .openapi('ImageClassificationModelDeploymentMetadata')

const ImageObjectDetectionModelDeploymentMetadataSchema = z
  .object({
    nodeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's qps_per_node. Must be between 1 and 100, inclusive on both ends.",
      }),
  })
  .openapi({
    description: 'Model deployment metadata specific to Image Object Detection.',
    required: [],
  })
  .openapi('ImageObjectDetectionModelDeploymentMetadata')

const DeployModelRequestSchema = z
  .object({
    imageClassificationModelDeploymentMetadata:
      ImageClassificationModelDeploymentMetadataSchema.exactOptional().openapi({
        description: 'Model deployment metadata specific to Image Classification.',
      }),
    imageObjectDetectionModelDeploymentMetadata:
      ImageObjectDetectionModelDeploymentMetadataSchema.exactOptional().openapi({
        description: 'Model deployment metadata specific to Image Object Detection.',
      }),
  })
  .openapi({ description: 'Request message for AutoMl.DeployModel.', required: [] })
  .openapi('DeployModelRequest')

const DocumentDimensionsSchema = z
  .object({
    height: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Height value of the document, works together with the unit.' }),
    unit: z
      .enum(['DOCUMENT_DIMENSION_UNIT_UNSPECIFIED', 'INCH', 'CENTIMETER', 'POINT'])
      .exactOptional()
      .openapi({ description: 'Unit of the dimension.' }),
    width: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Width value of the document, works together with the unit.' }),
  })
  .openapi({ description: 'Message that describes dimension of a document.', required: [] })
  .openapi('DocumentDimensions')

const DocumentInputConfigSchema = z
  .object({
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description:
        'The Google Cloud Storage location of the document file. Only a single path should be given. Max supported size: 512MB. Supported extensions: .PDF.',
    }),
  })
  .openapi({ description: 'Input configuration of a Document.', required: [] })
  .openapi('DocumentInputConfig')

const LayoutSchema = z
  .object({
    boundingPoly: BoundingPolySchema.exactOptional().openapi({
      description:
        'The position of the text_segment in the page. Contains exactly 4 normalized_vertices and they are connected by edges in the order provided, which will represent a rectangle parallel to the frame. The NormalizedVertex-s are relative to the page. Coordinates are based on top-left as point (0,0).',
    }),
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Page number of the text_segment in the original document, starts from 1.',
      }),
    textSegment: TextSegmentSchema.exactOptional().openapi({
      description: 'Text Segment that represents a segment in document_text.',
    }),
    textSegmentType: z
      .enum([
        'TEXT_SEGMENT_TYPE_UNSPECIFIED',
        'TOKEN',
        'PARAGRAPH',
        'FORM_FIELD',
        'FORM_FIELD_NAME',
        'FORM_FIELD_CONTENTS',
        'TABLE',
        'TABLE_HEADER',
        'TABLE_ROW',
        'TABLE_CELL',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the text_segment in document.' }),
  })
  .openapi({
    description: 'Describes the layout information of a text_segment in the document.',
    required: [],
  })
  .openapi('Layout')

const DocumentSchema = z
  .object({
    documentDimensions: DocumentDimensionsSchema.exactOptional().openapi({
      description: 'The dimensions of the page in the document.',
    }),
    documentText: TextSnippetSchema.exactOptional().openapi({
      description: 'The plain text version of this document.',
    }),
    inputConfig: DocumentInputConfigSchema.exactOptional().openapi({
      description: 'An input config specifying the content of the document.',
    }),
    layout: z
      .array(LayoutSchema)
      .exactOptional()
      .openapi({ description: 'Describes the layout of the document. Sorted by page_number.' }),
    pageCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of pages in the document.' }),
  })
  .openapi({ description: 'A structured text document e.g. a PDF.', required: [] })
  .openapi('Document')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const InputConfigSchema = z
  .object({
    bigquerySource: BigQuerySourceSchema.exactOptional().openapi({
      description: 'The BigQuery location for the input content.',
    }),
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description:
        'The Google Cloud Storage location for the input content. In ImportData, the gcs_source points to a csv with structure described in the comment.',
    }),
    params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional domain-specific parameters describing the semantic of the imported data, any string must be up to 25000 characters long. * For Tables: `schema_inference_version` - (integer) Required. The version of the algorithm that should be used for the initial inference of the schema (columns\' DataTypes) of the table the data is being imported into. Allowed values: "1".',
      }),
  })
  .openapi({
    description:
      'Input configuration for ImportData Action. The format of input depends on dataset_metadata the Dataset into which the import is happening has. As input source the gcs_source is expected, unless specified otherwise. Additionally any input .CSV file by itself must be 100MB or smaller, unless specified otherwise. If an "example" file (that is, image, video etc.) with identical content (even if it had different GCS_FILE_PATH) is mentioned multiple times, then its label, bounding boxes etc. are appended. The same file should be always provided with the same ML_USE and GCS_FILE_PATH, if it is not, then these values are nondeterministically selected from the given ones. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,LABEL,LABEL,... GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO For MULTICLASS classification type, at most one LABEL is allowed per image. If an image has not yet been labeled, then it should be mentioned just once with no LABEL. Some sample rows: TRAIN,gs://folder/image1.jpg,daisy TEST,gs://folder/image2.jpg,dandelion,tulip,rose UNASSIGNED,gs://folder/image3.jpg,daisy UNASSIGNED,gs://folder/image4.jpg * For Image Object Detection: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,) GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. Each image is assumed to be exhaustively labeled. The minimum allowed BOUNDING_BOX edge length is 0.01, and no more than 500 BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined per line). If an image has not yet been labeled, then it should be mentioned just once with no LABEL and the ",,,,,,," in place of the BOUNDING_BOX. For images which are known to not contain any bounding boxes, they should be labelled explictly as "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the BOUNDING_BOX. Sample rows: TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,, TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,, UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3 TEST,gs://folder/im3.png,,,,,,,,, TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,, * For Video Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using the following row format: GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,) Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Any segment of a video which has one or more labels on it, is considered a hard negative for all other labels. Any segment with no labels on it is considered to be unknown. If a whole video is unknown, then it shuold be mentioned just once with ",," in place of LABEL, TIME_SEGMENT_START,TIME_SEGMENT_END. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,120,180.000021 gs://folder/video1.avi,bike,150,180.000021 gs://folder/vid2.avi,car,0,60.5 gs://folder/vid3.avi,,, * For Video Object Tracking: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using one of the following row format: GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX or GCS_FILE_PATH,,,,,,,,,, Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. Providing INSTANCE_IDs can help to obtain a better model. When a specific labeled entity leaves the video frame, and shows up afterwards it is not required, albeit preferable, that the same INSTANCE_ID is given to it. TIMESTAMP must be within the length of the video, the BOUNDING_BOX is assumed to be drawn on the closest video\'s frame to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per frame are allowed. If a whole video is unknown, then it should be mentioned just once with ",,,,,,,,,," in place of LABEL, [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Seven sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9 gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9 gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3 gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,, gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,, gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,, gs://folder/video2.avi,,,,,,,,,,, * For Text Extraction: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which either imports text in-line or as documents. Any given .JSONL file must be 100MB or smaller. The in-line .JSONL file contains, per line, a proto that wraps a TextSnippet proto (in json representation) followed by one or more AnnotationPayload protos (called annotations), which have display_name and text_extraction detail populated. The given text is expected to be annotated exhaustively, for example, if you look for animals and text contains "dolphin" that is not labeled, then "dolphin" is assumed to not be an animal. Any given text snippet content must be 10KB or smaller, and also be UTF-8 NFC encoded (ASCII already is). The document .JSONL file contains, per line, a proto that wraps a Document proto. The Document proto must have either document_text or input_config set. In document_text case, the Document proto may also contain the spatial information of the document, including layout, document dimension and page number. In input_config case, only PDF documents are supported now, and each document may be up to 2MB large. Currently, annotations on documents cannot be specified at import. Three sample CSV rows: TRAIN,gs://folder/file1.jsonl VALIDATE,gs://folder/file2.jsonl TEST,gs://folder/file3.jsonl Sample in-line JSON Lines file for entity extraction (presented here with artificial line breaks, but the only actual line break is denoted by \\n).: { "document": { "document_text": {"content": "dog cat"} "layout": [ { "text_segment": { "start_offset": 0, "end_offset": 3, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ], }, "text_segment_type": TOKEN, }, { "text_segment": { "start_offset": 4, "end_offset": 7, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.4, "y": 0.1}, {"x": 0.4, "y": 0.3}, {"x": 0.8, "y": 0.3}, {"x": 0.8, "y": 0.1}, ], }, "text_segment_type": TOKEN, } ], "document_dimensions": { "width": 8.27, "height": 11.69, "unit": INCH, } "page_count": 1, }, "annotations": [ { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 0, "end_offset": 3}} }, { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 4, "end_offset": 7}} } ], }\\n { "text_snippet": { "content": "This dog is good." }, "annotations": [ { "display_name": "animal", "text_extraction": { "text_segment": {"start_offset": 5, "end_offset": 8} } } ] } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \\n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Text Classification: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,... TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, i.e. prefixed by "gs://", it will be treated as a GCS_FILE_PATH, else if the content is enclosed within double quotes (""), it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content excluding quotes is treated as to be imported text snippet. In both cases, the text snippet/file size must be within 128kB. Maximum 100 unique labels are allowed per CSV row. Sample rows: TRAIN,"They have bad food and very rude",RudeService,BadFood TRAIN,gs://folder/content.txt,SlowService TEST,"Typically always bad service there.",RudeService VALIDATE,"Stomach ache to go.",BadFood * For Text Sentiment: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, that is, prefixed by "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content itself is treated as to be imported text snippet. In both cases, the text snippet must be up to 500 characters long. Sample rows: TRAIN,"@freewrytin this is way too good for your product",2 TRAIN,"I need this product so bad",3 TEST,"Thank you for this product.",4 VALIDATE,gs://folder/content.txt,2 * For Tables: Either gcs_source or bigquery_source can be used. All inputs is concatenated into a single primary_table For gcs_source: CSV file(s), where the first row of the first file is the header, containing unique column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. Each .CSV file by itself must be 10GB or smaller, and their total size must be 100GB or smaller. First three sample rows of a CSV file: "Id","First Name","Last Name","Dob","Addresses" "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} For bigquery_source: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. An imported table must have between 2 and 1,000 columns, inclusive, and between 1000 and 100,000,000 rows, inclusive. There are at most 5 import data running in parallel. Definitions: ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED" Describes how the given example (file) should be used for model training. "UNASSIGNED" can be used when user has no preference. GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png". LABEL = A display name of an object on an image, video etc., e.g. "dog". Must be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9. For each label an AnnotationSpec is created which display_name becomes the label; AnnotationSpecs are given back in predictions. INSTANCE_ID = A positive integer that identifies a specific instance of a labeled entity on an example. Used e.g. to track two cars on a video while being able to tell apart which one is which. BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,, A rectangle parallel to the frame of the example (image, video). If 4 vertices are given they are connected by edges in the order provided, if 2 are given they are recognized as diagonally opposite vertices of the rectangle. VERTEX = COORDINATE,COORDINATE First coordinate is horizontal (x), the second is vertical (y). COORDINATE = A float in 0 to 1 range, relative to total length of image or video in given dimension. For fractions the leading non-decimal 0 can be omitted (i.e. 0.3 = .3). Point 0,0 is in top left. TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed, and it means the end of the example. TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes (""). SENTIMENT = An integer between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive). Describes the ordinal of the sentiment - higher value means a more positive sentiment. All the values are completely relative, i.e. neither 0 needs to mean a negative or neutral sentiment nor sentiment_max needs to mean a positive one - it is just required that 0 is the least positive sentiment in the data, and sentiment_max is the most positive one. The SENTIMENT shouldn\'t be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. All SENTIMENT values between 0 and sentiment_max must be represented in the imported data. On prediction the same 0 to sentiment_max range will be used. The difference between neighboring sentiment values needs not to be uniform, e.g. 1 and 2 may be similar whereas the difference between 2 and 3 may be huge. Errors: If any of the provided CSV files can\'t be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and nothing is imported. Regardless of overall success or failure the per-row failures, up to a certain count cap, is listed in Operation.metadata.partial_failures. ',
    required: [],
  })
  .openapi('InputConfig')

const ImageSchema = z
  .object({
    imageBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Image content represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.',
      }),
    inputConfig: InputConfigSchema.exactOptional().openapi({
      description: 'An input config specifying the content of the image.',
    }),
    thumbnailUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. HTTP URI to the thumbnail image.' }),
  })
  .openapi({
    description: 'A representation of an image. Only images up to 30MB in size are supported.',
    required: [],
  })
  .openapi('Image')

const RowSchema = z
  .object({
    columnSpecIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The resource IDs of the column specs describing the columns of the row. If set must contain, but possibly in a different order, all input feature column_spec_ids of the Model this row is being passed to. Note: The below `values` field must match order of this field, if this field is set.',
      }),
    values: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Required. The values of the row cells, given in the same order as the column_spec_ids, or, if not set, then in the same order as input feature column_specs of the Model this row is being passed to.',
      }),
  })
  .openapi({ description: 'A representation of a row in a relational table.', required: [] })
  .openapi('Row')

const ExamplePayloadSchema = z
  .object({
    document: DocumentSchema.exactOptional().openapi({ description: 'Example document.' }),
    image: ImageSchema.exactOptional().openapi({ description: 'Example image.' }),
    row: RowSchema.exactOptional().openapi({ description: 'Example relational table row.' }),
    textSnippet: TextSnippetSchema.exactOptional().openapi({ description: 'Example text.' }),
  })
  .openapi({ description: 'Example data used for training or prediction.', required: [] })
  .openapi('ExamplePayload')

const OutputConfigSchema = z
  .object({
    bigqueryDestination: BigQueryDestinationSchema.exactOptional().openapi({
      description: 'The BigQuery location where the output is to be written to.',
    }),
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description:
        'The Google Cloud Storage location where the output is to be written to. For Image Object Detection, Text Extraction, Video Classification and Tables, in the given directory a new directory will be created with name: export_data-- where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. All export output will be written into that directory.',
    }),
  })
  .openapi({
    description:
      '* For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \\t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table\'s column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import.',
    required: [],
  })
  .openapi('OutputConfig')

const ExportDataRequestSchema = z
  .object({
    outputConfig: OutputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired output location.',
    }),
  })
  .openapi({ description: 'Request message for AutoMl.ExportData.', required: [] })
  .openapi('ExportDataRequest')

const ExportEvaluatedExamplesOutputConfigSchema = z
  .object({
    bigqueryDestination: BigQueryDestinationSchema.exactOptional().openapi({
      description: 'The BigQuery location where the output is to be written to.',
    }),
  })
  .openapi({
    description:
      'Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported): * For Tables: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_evaluated_examples__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset an `evaluated_examples` table will be created. It will have all the same columns as the primary_table of the dataset from which the model was created, as they were at the moment of model\'s evaluation (this includes the target column with its ground truth), followed by a column called "predicted_". That last column will contain the model\'s prediction result for each respective row, given as ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation.',
    required: [],
  })
  .openapi('ExportEvaluatedExamplesOutputConfig')

const ExportEvaluatedExamplesRequestSchema = z
  .object({
    outputConfig: ExportEvaluatedExamplesOutputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired output location and configuration.',
    }),
  })
  .openapi({ description: 'Request message for AutoMl.ExportEvaluatedExamples.', required: [] })
  .openapi('ExportEvaluatedExamplesRequest')

const GcrDestinationSchema = z
  .object({
    outputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Google Contained Registry URI of the new image, up to 2000 characters long. See https: //cloud.google.com/container-registry/do // cs/pushing-and-pulling#pushing_an_image_to_a_registry Accepted forms: * [HOSTNAME]/[PROJECT-ID]/[IMAGE] * [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] The requesting user must have permission to push images the project.',
      }),
  })
  .openapi({ description: 'The GCR location where the image must be pushed to.', required: [] })
  .openapi('GcrDestination')

const ModelExportOutputConfigSchema = z
  .object({
    gcrDestination: GcrDestinationSchema.exactOptional().openapi({
      description:
        'The GCR location where model image is to be pushed to. This location may only be set for the following model formats: "docker". The model image will be created under the given URI.',
    }),
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description:
        'The Google Cloud Storage location where the model is to be written to. This location may only be set for the following model formats: "tflite", "edgetpu_tflite", "tf_saved_model", "tf_js", "core_ml". Under the directory given as the destination a new one with name "model-export--", where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format, will be created. Inside the model and any of its supporting files will be written.',
    }),
    modelFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The format in which the model must be exported. The available, and default, formats depend on the problem and model type (if given problem and type combination doesn\'t have a format listed, it means its models are not exportable): * For Image Classification mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite" (default), "edgetpu_tflite", "tf_saved_model", "tf_js", "docker". * For Image Classification mobile-core-ml-low-latency-1, mobile-core-ml-versatile-1, mobile-core-ml-high-accuracy-1: "core_ml" (default). * For Image Object Detection mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite", "tf_saved_model", "tf_js". * For Video Classification cloud, "tf_saved_model". * For Video Object Tracking cloud, "tf_saved_model". * For Video Object Tracking mobile-versatile-1: "tflite", "edgetpu_tflite", "tf_saved_model", "docker". * For Video Object Tracking mobile-coral-versatile-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-coral-low-latency-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-jetson-versatile-1: "tf_saved_model", "docker". * For Tables: "docker". Formats description: * tflite - Used for Android mobile devices. * edgetpu_tflite - Used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices. * tf_saved_model - A tensorflow model in SavedModel format. * tf_js - A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript. * docker - Used for Docker containers. Use the params field to customize the container. The container is verified to work correctly on ubuntu 16.04 operating system. See more at [containers quickstart](https: //cloud.google.com/vision/automl/docs/containers-gcs-quickstart) * core_ml - Used for iOS mobile devices.',
      }),
    params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional model-type and format specific parameters describing the requirements for the to be exported model files, any string must be up to 25000 characters long. * For `docker` format: `cpu_architecture` - (string) "x86_64" (default). `gpu_architecture` - (string) "none" (default), "nvidia".',
      }),
  })
  .openapi({ description: 'Output configuration for ModelExport Action.', required: [] })
  .openapi('ModelExportOutputConfig')

const ExportModelRequestSchema = z
  .object({
    outputConfig: ModelExportOutputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired output location and configuration.',
    }),
  })
  .openapi({
    description:
      'Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.',
    required: [],
  })
  .openapi('ExportModelRequest')

const ImageClassificationModelMetadataSchema = z
  .object({
    baseModelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The ID of the `base` model. If it is specified, the new model will be created based on the `base` model. Otherwise, the new model will be created from scratch. The `base` model must be in the same `project` and `location` as the new model to create, and have the same `model_type`.',
      }),
    modelType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Type of the model. The available values are: * `cloud` - Model to be used via prediction calls to AutoML API. This is the default value. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `mobile-core-ml-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-core-ml-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. * `mobile-core-ml-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models.',
      }),
    nodeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the node_qps field.',
      }),
    nodeQps: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed.',
      }),
    stopReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.',
      }),
    trainBudget: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The train budget of creating this model, expressed in hours. The actual `train_cost` will be equal or less than this value.',
      }),
    trainCost: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The actual train cost of creating this model, expressed in hours. If this model is created from a `base` model, the train cost used to create the `base` model are not included.',
      }),
  })
  .openapi({ description: 'Model metadata for image classification.', required: [] })
  .openapi('ImageClassificationModelMetadata')

const ImageObjectDetectionEvaluationMetricsSchema = z
  .object({
    boundingBoxMeanAveragePrecision: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries.',
      }),
    boundingBoxMetricsEntries: z
      .array(BoundingBoxMetricsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair.',
      }),
    evaluatedBoundingBoxCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had.',
      }),
  })
  .openapi({
    description:
      'Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.',
    required: [],
  })
  .openapi('ImageObjectDetectionEvaluationMetrics')

const ImageObjectDetectionModelMetadataSchema = z
  .object({
    modelType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Type of the model. The available values are: * `cloud-high-accuracy-1` - (default) A model to be used via prediction calls to AutoML API. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `cloud-low-latency-1` - A model to be used via prediction calls to AutoML API. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models.',
      }),
    nodeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the qps_per_node field.',
      }),
    nodeQps: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed.',
      }),
    stopReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.',
      }),
    trainBudgetMilliNodeHours: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The actual `train_cost` will be equal or less than this value. If further model training ceases to provide any improvements, it will stop without using full budget and the stop_reason will be `MODEL_CONVERGED`. Note, node_hour = actual_hour * number_of_nodes_invovled. For model type `cloud-high-accuracy-1`(default) and `cloud-low-latency-1`, the train budget must be between 20,000 and 900,000 milli node hours, inclusive. The default value is 216, 000 which represents one day in wall time. For model type `mobile-low-latency-1`, `mobile-versatile-1`, `mobile-high-accuracy-1`, `mobile-core-ml-low-latency-1`, `mobile-core-ml-versatile-1`, `mobile-core-ml-high-accuracy-1`, the train budget must be between 1,000 and 100,000 milli node hours, inclusive. The default value is 24, 000 which represents one day in wall time.',
      }),
    trainCostMilliNodeHours: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The actual train cost of creating this model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget.',
      }),
  })
  .openapi({ description: 'Model metadata specific to image object detection.', required: [] })
  .openapi('ImageObjectDetectionModelMetadata')

const ImportDataRequestSchema = z
  .object({
    inputConfig: InputConfigSchema.exactOptional().openapi({
      description:
        'Required. The desired input location and its domain specific semantics, if any.',
    }),
  })
  .openapi({ description: 'Request message for AutoMl.ImportData.', required: [] })
  .openapi('ImportDataRequest')

const ListColumnSpecsResponseSchema = z
  .object({
    columnSpecs: z
      .array(ColumnSpecSchema)
      .exactOptional()
      .openapi({ description: 'The column specs read.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass to ListColumnSpecsRequest.page_token to obtain that page.',
      }),
  })
  .openapi({ description: 'Response message for AutoMl.ListColumnSpecs.', required: [] })
  .openapi('ListColumnSpecsResponse')

const ListDatasetsResponseSchema = z
  .object({
    datasets: z.array(DatasetSchema).exactOptional().openapi({ description: 'The datasets read.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass to ListDatasetsRequest.page_token to obtain that page.',
      }),
  })
  .openapi({ description: 'Response message for AutoMl.ListDatasets.', required: [] })
  .openapi('ListDatasetsResponse')

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

const RegressionEvaluationMetricsSchema = z
  .object({
    meanAbsoluteError: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Mean Absolute Error (MAE).' }),
    meanAbsolutePercentageError: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Mean absolute percentage error. Only set if all ground truth values are are positive.',
      }),
    rSquared: z.float32().exactOptional().openapi({ description: 'Output only. R squared.' }),
    rootMeanSquaredError: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Root Mean Squared Error (RMSE).' }),
    rootMeanSquaredLogError: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Root mean squared log error.' }),
  })
  .openapi({ description: 'Metrics for regression problems.', required: [] })
  .openapi('RegressionEvaluationMetrics')

const TextExtractionEvaluationMetricsConfidenceMetricsEntrySchema = z
  .object({
    confidenceThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence threshold value used to compute the metrics. Only annotations with score of at least this threshold are considered to be ones the model would return.',
      }),
    f1Score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. The harmonic mean of recall and precision.' }),
    precision: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Precision under the given confidence threshold.' }),
    recall: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. Recall under the given confidence threshold.' }),
  })
  .openapi({ description: 'Metrics for a single confidence threshold.', required: [] })
  .openapi('TextExtractionEvaluationMetricsConfidenceMetricsEntry')

const TextExtractionEvaluationMetricsSchema = z
  .object({
    auPrc: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. The Area under precision recall curve metric.' }),
    confidenceMetricsEntries: z
      .array(TextExtractionEvaluationMetricsConfidenceMetricsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Metrics that have confidence thresholds. Precision-recall curve can be derived from it.',
      }),
  })
  .openapi({ description: 'Model evaluation metrics for text extraction problems.', required: [] })
  .openapi('TextExtractionEvaluationMetrics')

const TextSentimentEvaluationMetricsSchema = z
  .object({
    annotationSpecId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The annotation spec ids used for this evaluation. Deprecated .',
      }),
    confusionMatrix: ConfusionMatrixSchema.exactOptional().openapi({
      description:
        'Output only. Confusion matrix of the evaluation. Only set for the overall model evaluation, not for evaluation of a single annotation spec.',
    }),
    f1Score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Output only. The harmonic mean of recall and precision.' }),
    linearKappa: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.',
      }),
    meanAbsoluteError: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.',
      }),
    meanSquaredError: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.',
      }),
    precision: z.float32().exactOptional().openapi({ description: 'Output only. Precision.' }),
    quadraticKappa: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.',
      }),
    recall: z.float32().exactOptional().openapi({ description: 'Output only. Recall.' }),
  })
  .openapi({ description: 'Model evaluation metrics for text sentiment problems.', required: [] })
  .openapi('TextSentimentEvaluationMetrics')

const TranslationEvaluationMetricsSchema = z
  .object({
    baseBleuScore: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Output only. BLEU score for base model.' }),
    bleuScore: z.float64().exactOptional().openapi({ description: 'Output only. BLEU score.' }),
  })
  .openapi({ description: 'Evaluation metrics for the dataset.', required: [] })
  .openapi('TranslationEvaluationMetrics')

const VideoObjectTrackingEvaluationMetricsSchema = z
  .object({
    boundingBoxMeanAveragePrecision: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries.',
      }),
    boundingBoxMetricsEntries: z
      .array(BoundingBoxMetricsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair.',
      }),
    evaluatedBoundingBoxCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The total number of bounding boxes (i.e. summed over all frames) the ground truth used to create this evaluation had.',
      }),
    evaluatedFrameCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of video frames used to create this evaluation.',
      }),
  })
  .openapi({
    description:
      'Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).',
    required: [],
  })
  .openapi('VideoObjectTrackingEvaluationMetrics')

const ModelEvaluationSchema = z
  .object({
    annotationSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of the annotation spec that the model evaluation applies to. The The ID is empty for the overall model evaluation. For Tables annotation specs in the dataset do not exist and this ID is always not set, but for CLASSIFICATION prediction_type-s the display_name field is used.',
      }),
    classificationEvaluationMetrics: ClassificationEvaluationMetricsSchema.exactOptional().openapi({
      description:
        'Model evaluation metrics for image, text, video and tables classification. Tables problem is considered a classification when the target column is CATEGORY DataType.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when this model evaluation was created.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The value of display_name at the moment when the model was trained. Because this field returns a value at model training time, for different models trained from the same dataset, the values may differ, since display names could had been changed between the two model's trainings. For Tables CLASSIFICATION prediction_type-s distinct values of the target column at the moment of the model evaluation are populated here. The display_name is empty for the overall model evaluation.",
      }),
    evaluatedExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of examples used for model evaluation, i.e. for which ground truth from time of model creation is compared against the predicted annotations created by the model. For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is the total number of all examples used for evaluation. Otherwise, this is the count of examples that according to the ground truth were annotated by the annotation_spec_id.',
      }),
    imageObjectDetectionEvaluationMetrics:
      ImageObjectDetectionEvaluationMetricsSchema.exactOptional().openapi({
        description: 'Model evaluation metrics for image object detection.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the model evaluation. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}`',
      }),
    regressionEvaluationMetrics: RegressionEvaluationMetricsSchema.exactOptional().openapi({
      description:
        'Model evaluation metrics for Tables regression. Tables problem is considered a regression when the target column has FLOAT64 DataType.',
    }),
    textExtractionEvaluationMetrics: TextExtractionEvaluationMetricsSchema.exactOptional().openapi({
      description: 'Evaluation metrics for text extraction models.',
    }),
    textSentimentEvaluationMetrics: TextSentimentEvaluationMetricsSchema.exactOptional().openapi({
      description: 'Evaluation metrics for text sentiment models.',
    }),
    translationEvaluationMetrics: TranslationEvaluationMetricsSchema.exactOptional().openapi({
      description: 'Model evaluation metrics for translation.',
    }),
    videoObjectTrackingEvaluationMetrics:
      VideoObjectTrackingEvaluationMetricsSchema.exactOptional().openapi({
        description: 'Model evaluation metrics for video object tracking.',
      }),
  })
  .openapi({ description: 'Evaluation results of a model.', required: [] })
  .openapi('ModelEvaluation')

const ListModelEvaluationsResponseSchema = z
  .object({
    modelEvaluation: z
      .array(ModelEvaluationSchema)
      .exactOptional()
      .openapi({ description: 'List of model evaluations in the requested page.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass to the ListModelEvaluationsRequest.page_token field of a new AutoMl.ListModelEvaluations request to obtain that page.',
      }),
  })
  .openapi({ description: 'Response message for AutoMl.ListModelEvaluations.', required: [] })
  .openapi('ListModelEvaluationsResponse')

const TablesModelMetadataSchema = z
  .object({
    disableEarlyStopping: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use the entire training budget. This disables the early stopping feature. By default, the early stopping feature is enabled, which means that AutoML Tables might stop training before the entire training budget has been used.',
      }),
    inputFeatureColumnSpecs: z
      .array(ColumnSpecSchema)
      .exactOptional()
      .openapi({
        description:
          "Column specs of the dataset's primary table's columns, on which the model is trained and which are used as the input for predictions. The target_column as well as, according to dataset's state upon model creation, weight_column, and ml_use_column must never be included here. Only 3 fields are used: * name - May be set on CreateModel, if set only the columns specified are used, otherwise all primary table's columns (except the ones listed above) are used for the training and prediction input. * display_name - Output only. * data_type - Output only.",
      }),
    optimizationObjective: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Objective function the model is optimizing towards. The training process creates a model that maximizes/minimizes the value of the objective function over the validation set. The supported optimization objectives depend on the prediction type. If the field is not set, a default objective function is used. CLASSIFICATION_BINARY: "MAXIMIZE_AU_ROC" (default) - Maximize the area under the receiver operating characteristic (ROC) curve. "MINIMIZE_LOG_LOSS" - Minimize log loss. "MAXIMIZE_AU_PRC" - Maximize the area under the precision-recall curve. "MAXIMIZE_PRECISION_AT_RECALL" - Maximize precision for a specified recall value. "MAXIMIZE_RECALL_AT_PRECISION" - Maximize recall for a specified precision value. CLASSIFICATION_MULTI_CLASS : "MINIMIZE_LOG_LOSS" (default) - Minimize log loss. REGRESSION: "MINIMIZE_RMSE" (default) - Minimize root-mean-squared error (RMSE). "MINIMIZE_MAE" - Minimize mean-absolute error (MAE). "MINIMIZE_RMSLE" - Minimize root-mean-squared log error (RMSLE).',
      }),
    optimizationObjectivePrecisionValue: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Required when optimization_objective is "MAXIMIZE_RECALL_AT_PRECISION". Must be between 0 and 1, inclusive.',
      }),
    optimizationObjectiveRecallValue: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Required when optimization_objective is "MAXIMIZE_PRECISION_AT_RECALL". Must be between 0 and 1, inclusive.',
      }),
    tablesModelColumnInfo: z
      .array(TablesModelColumnInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Auxiliary information for each of the input_feature_column_specs with respect to this particular model.',
      }),
    targetColumnSpec: ColumnSpecSchema.exactOptional().openapi({
      description:
        "Column spec of the dataset's primary table's column the model is predicting. Snapshotted when model creation started. Only 3 fields are used: name - May be set on CreateModel, if it's not then the ColumnSpec corresponding to the current target_column_spec_id of the dataset the model is trained from is used. If neither is set, CreateModel will error. display_name - Output only. data_type - Output only.",
    }),
    trainBudgetMilliNodeHours: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The training cost of the model will not exceed this budget. The final cost will be attempted to be close to the budget, though may end up being (even) noticeably smaller - at the backend's discretion. This especially may happen when further model training ceases to provide any improvements. If the budget is set to a value known to be insufficient to train a model for the given dataset, the training won't be attempted and will error. The train budget must be between 1,000 and 72,000 milli node hours, inclusive.",
      }),
    trainCostMilliNodeHours: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget.',
      }),
  })
  .openapi({ description: 'Model metadata specific to AutoML Tables.', required: [] })
  .openapi('TablesModelMetadata')

const TextClassificationModelMetadataSchema = z
  .object({
    classificationType: z
      .enum(['CLASSIFICATION_TYPE_UNSPECIFIED', 'MULTICLASS', 'MULTILABEL'])
      .exactOptional()
      .openapi({
        description: 'Output only. Classification type of the dataset used to train this model.',
      }),
  })
  .openapi({ description: 'Model metadata that is specific to text classification.', required: [] })
  .openapi('TextClassificationModelMetadata')

const TextExtractionModelMetadataSchema = z
  .object({
    modelHint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the scope of model use case. * `default`: Use to train a general text extraction model. Default value. * `health_care`: Use to train a text extraction model that is tuned for healthcare applications.',
      }),
  })
  .openapi({ description: 'Model metadata that is specific to text extraction.', required: [] })
  .openapi('TextExtractionModelMetadata')

const TextSentimentModelMetadataSchema = z
  .object({})
  .openapi({ description: 'Model metadata that is specific to text sentiment.' })
  .openapi('TextSentimentModelMetadata')

const TranslationModelMetadataSchema = z
  .object({
    baseModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model to use as a baseline to train the custom model. If unset, we use the default base model provided by Google Translate. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`',
      }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Inferred from the dataset. The source languge (The BCP-47 language code) that is used for training.',
      }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The target languge (The BCP-47 language code) that is used for training.',
      }),
  })
  .openapi({ description: 'Model metadata that is specific to translation.', required: [] })
  .openapi('TranslationModelMetadata')

const VideoClassificationModelMetadataSchema = z
  .object({})
  .openapi({ description: 'Model metadata specific to video classification.' })
  .openapi('VideoClassificationModelMetadata')

const VideoObjectTrackingModelMetadataSchema = z
  .object({})
  .openapi({ description: 'Model metadata specific to video object tracking.' })
  .openapi('VideoObjectTrackingModelMetadata')

const ModelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp when the model training finished and can be used for prediction.',
      }),
    datasetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location.',
      }),
    deploymentState: z
      .enum(['DEPLOYMENT_STATE_UNSPECIFIED', 'DEPLOYED', 'UNDEPLOYED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter.',
      }),
    imageClassificationModelMetadata:
      ImageClassificationModelMetadataSchema.exactOptional().openapi({
        description: 'Metadata for image classification models.',
      }),
    imageObjectDetectionModelMetadata:
      ImageObjectDetectionModelMetadataSchema.exactOptional().openapi({
        description: 'Metadata for image object detection models.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the model. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`',
      }),
    tablesModelMetadata: TablesModelMetadataSchema.exactOptional().openapi({
      description: 'Metadata for Tables models.',
    }),
    textClassificationModelMetadata: TextClassificationModelMetadataSchema.exactOptional().openapi({
      description: 'Metadata for text classification models.',
    }),
    textExtractionModelMetadata: TextExtractionModelMetadataSchema.exactOptional().openapi({
      description: 'Metadata for text extraction models.',
    }),
    textSentimentModelMetadata: TextSentimentModelMetadataSchema.exactOptional().openapi({
      description: 'Metadata for text sentiment models.',
    }),
    trainExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of examples in the training set used for the model creation.',
        readOnly: true,
      }),
    translationModelMetadata: TranslationModelMetadataSchema.exactOptional().openapi({
      description: 'Metadata for translation models.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when this model was last updated.' }),
    validateExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of examples in the validation set used for the model creation.',
        readOnly: true,
      }),
    videoClassificationModelMetadata:
      VideoClassificationModelMetadataSchema.exactOptional().openapi({
        description: 'Metadata for video classification models.',
      }),
    videoObjectTrackingModelMetadata:
      VideoObjectTrackingModelMetadataSchema.exactOptional().openapi({
        description: 'Metadata for video object tracking models.',
      }),
  })
  .openapi({
    description: 'API proto representing a trained machine learning model.',
    required: [],
  })
  .openapi('Model')

const ListModelsResponseSchema = z
  .object({
    model: z
      .array(ModelSchema)
      .exactOptional()
      .openapi({ description: 'List of models in the requested page.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page.',
      }),
  })
  .openapi({ description: 'Response message for AutoMl.ListModels.', required: [] })
  .openapi('ListModelsResponse')

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

const TableSpecSchema = z
  .object({
    columnCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of columns of the table. That is, the number of child ColumnSpec-s.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.',
      }),
    inputConfigs: z
      .array(InputConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Input configs via which data currently residing in the table had been imported.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the table spec. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}`',
      }),
    rowCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The number of rows (i.e. examples) in the table.' }),
    timeColumnSpecId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "column_spec_id of the time column. Only used if the parent dataset's ml_use_column_spec_id is not set. Used to split rows into TRAIN, VALIDATE and TEST sets such that oldest rows go to TRAIN set, newest to TEST, and those in between to VALIDATE. Required type: TIMESTAMP. If both this column and ml_use_column are not set, then ML use of all rows will be assigned by AutoML. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.",
      }),
    validRowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The number of valid rows (i.e. without values that don't match DataType-s of their columns).",
      }),
  })
  .openapi({
    description:
      "A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables",
    required: [],
  })
  .openapi('TableSpec')

const ListTableSpecsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass to ListTableSpecsRequest.page_token to obtain that page.',
      }),
    tableSpecs: z
      .array(TableSpecSchema)
      .exactOptional()
      .openapi({ description: 'The table specs read.' }),
  })
  .openapi({ description: 'Response message for AutoMl.ListTableSpecs.', required: [] })
  .openapi('ListTableSpecsResponse')

const OperationMetadataSchema: z.ZodType<OperationMetadataType> = z
  .lazy(() =>
    z
      .object({
        batchPredictDetails: BatchPredictOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of BatchPredict operation.',
        }),
        createModelDetails: CreateModelOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of CreateModel operation.',
        }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. Time when the operation was created.' }),
        deleteDetails: DeleteOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of a Delete operation.',
        }),
        deployModelDetails: DeployModelOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of a DeployModel operation.',
        }),
        exportDataDetails: ExportDataOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of ExportData operation.',
        }),
        exportEvaluatedExamplesDetails:
          ExportEvaluatedExamplesOperationMetadataSchema.exactOptional().openapi({
            description: 'Details of ExportEvaluatedExamples operation.',
          }),
        exportModelDetails: ExportModelOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of ExportModel operation.',
        }),
        importDataDetails: ImportDataOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of ImportData operation.',
        }),
        partialFailures: z
          .array(StatusSchema)
          .exactOptional()
          .openapi({
            description:
              "Output only. Partial failures encountered. E.g. single files that couldn't be read. This field should never exceed 20 entries. Status details field will contain standard GCP error details.",
          }),
        progressPercent: z
          .int32()
          .exactOptional()
          .openapi({
            description: 'Output only. Progress of operation. Range: [0, 100]. Not used currently.',
          }),
        undeployModelDetails: UndeployModelOperationMetadataSchema.exactOptional().openapi({
          description: 'Details of an UndeployModel operation.',
        }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Time when the operation was updated for the last time.',
          }),
      })
      .openapi({
        description: 'Metadata used across all long running operations returned by AutoML API.',
        required: [],
      }),
  )
  .openapi('OperationMetadata')

const PolicySchema = z
  .object({
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const PredictRequestSchema = z
  .object({
    params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional domain-specific parameters, any string must be up to 25000 characters long. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned in the response. Default is 100, the requested value may be limited by server. * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotation. The default is false.',
      }),
    payload: ExamplePayloadSchema.exactOptional().openapi({
      description:
        'Required. Payload to perform a prediction on. The payload must match the problem type that the model was trained to solve.',
    }),
  })
  .openapi({ description: 'Request message for PredictionService.Predict.', required: [] })
  .openapi('PredictRequest')

const PredictResponseSchema = z
  .object({
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Text Sentiment: `sentiment_score` - (float, deprecated) A value between -1 and 1, -1 maps to least positive sentiment, while 1 maps to the most positive one and the higher the score, the more positive the sentiment in the document is. Yet these values are relative to the training data, so e.g. if all data was positive then -1 will be also positive (though the least). The sentiment_score shouldn\'t be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API.',
      }),
    payload: z
      .array(AnnotationPayloadSchema)
      .exactOptional()
      .openapi({
        description:
          'Prediction result. Translation and Text Sentiment will return precisely one payload.',
      }),
    preprocessedInput: ExamplePayloadSchema.exactOptional().openapi({
      description:
        "The preprocessed example that AutoML actually makes prediction on. Empty if AutoML does not preprocess the input example. * For Text Extraction: If the input is a .pdf file, the OCR'ed text will be provided in document_text.",
    }),
  })
  .openapi({ description: 'Response message for PredictionService.Predict.', required: [] })
  .openapi('PredictResponse')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const UndeployModelRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for AutoMl.UndeployModel.' })
  .openapi('UndeployModelRequest')

const WaitOperationRequestSchema = z
  .object({
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.',
      }),
  })
  .openapi({ description: 'The request message for Operations.WaitOperation.', required: [] })
  .openapi('WaitOperationRequest')

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

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'automl.projects.locations.operations.get',
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
      fieldMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mask specifying which fields to read.',
            in: 'query',
            name: 'fieldMask',
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
            description: 'The name of the operation resource.',
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

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'automl.projects.locations.operations.delete',
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
            description: 'The name of the operation resource to be deleted.',
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

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Updates a column spec.',
  operationId: 'automl.projects.locations.datasets.tableSpecs.columnSpecs.patch',
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
            description: 'The update mask applies to the resource.',
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
            description:
              'Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ColumnSpecSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ColumnSpecSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'automl.projects.locations.list',
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

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'automl.projects.locations.operations.list',
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
              'An expression for filtering the results of the request. * `operation_id` - for = or !=. * `done` - for = or !=. * `works_on` - for = or !=. Some examples of using the filter are: * `done=true` --> The operation has finished running. * `works_on = projects/my-project/locations/us-central1/datasets/5` --> The operation works on a dataset with ID 5. * `works_on = projects/my-project/locations/us-central1/models/15` --> The operation works on a model with ID 15.',
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

export const postV1beta1NameBatchPredictRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:batchPredict',
  tags: ['projects'],
  description:
    "Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables",
  operationId: 'automl.projects.locations.models.batchPredict',
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
            description: 'Required. Name of the model requested to serve the batch prediction.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchPredictRequestSchema } } },
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

export const postV1beta1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'automl.projects.locations.operations.cancel',
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

export const postV1beta1NameDeployRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:deploy',
  tags: ['projects'],
  description:
    "Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.",
  operationId: 'automl.projects.locations.models.deploy',
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
            description: 'Required. Resource name of the model to deploy.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeployModelRequestSchema } } },
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

export const postV1beta1NameExportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:export',
  tags: ['projects'],
  description:
    'Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.',
  operationId: 'automl.projects.locations.models.export',
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
            description: 'Required. The resource name of the model to export.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportModelRequestSchema } } },
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

export const postV1beta1NameExportDataRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:exportData',
  tags: ['projects'],
  description:
    "Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.",
  operationId: 'automl.projects.locations.datasets.exportData',
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
            description: 'Required. The resource name of the dataset.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportDataRequestSchema } } },
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

export const postV1beta1NameExportEvaluatedExamplesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:exportEvaluatedExamples',
  tags: ['projects'],
  description:
    'Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.',
  operationId: 'automl.projects.locations.models.exportEvaluatedExamples',
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
              'Required. The resource name of the model whose evaluated examples are to be exported.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportEvaluatedExamplesRequestSchema } } },
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

export const postV1beta1NameImportDataRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:importData',
  tags: ['projects'],
  description:
    'Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.',
  operationId: 'automl.projects.locations.datasets.importData',
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
              'Required. Dataset name. Dataset must already exist. All imported annotations and examples will be added.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportDataRequestSchema } } },
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

export const postV1beta1NamePredictRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:predict',
  tags: ['projects'],
  description:
    'Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.',
  operationId: 'automl.projects.locations.models.predict',
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
            description: 'Required. Name of the model requested to serve the prediction.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PredictRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PredictResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameUndeployRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:undeploy',
  tags: ['projects'],
  description:
    'Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.',
  operationId: 'automl.projects.locations.models.undeploy',
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
            description: 'Required. Resource name of the model to undeploy.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UndeployModelRequestSchema } } },
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

export const postV1beta1NameWaitRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:wait',
  tags: ['projects'],
  description:
    'Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.',
  operationId: 'automl.projects.locations.operations.wait',
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
            description: 'The name of the operation resource to wait on.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WaitOperationRequestSchema } } },
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

export const getV1beta1ParentColumnSpecsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/columnSpecs',
  tags: ['projects'],
  description: 'Lists column specs in a table spec.',
  operationId: 'automl.projects.locations.datasets.tableSpecs.columnSpecs.list',
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
      fieldMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mask specifying which fields to read.',
            in: 'query',
            name: 'fieldMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter expression, see go/filtering.',
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
              'Requested page size. The server can return fewer results than requested. If unspecified, the server will pick a default size.',
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
              'A token identifying a page of results for the server to return. Typically obtained from the ListColumnSpecsResponse.next_page_token field of the previous AutoMl.ListColumnSpecs call.',
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
            description: 'Required. The resource name of the table spec to list column specs from.',
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
      content: { 'application/json': { schema: ListColumnSpecsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/datasets',
  tags: ['projects'],
  description: 'Lists datasets in a project.',
  operationId: 'automl.projects.locations.datasets.list',
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
              'An expression for filtering the results of the request. * `dataset_metadata` - for existence of the case (e.g. `image_classification_dataset_metadata:*`). Some examples of using the filter are: * `translation_dataset_metadata:*` --> The dataset has `translation_dataset_metadata`.',
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
              'Requested page size. Server may return fewer results than requested. If unspecified, server will pick a default size.',
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
              'A token identifying a page of results for the server to return Typically obtained via ListDatasetsResponse.next_page_token of the previous AutoMl.ListDatasets call.',
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
            description: 'Required. The resource name of the project from which to list datasets.',
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
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentDatasetsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/datasets',
  tags: ['projects'],
  description: 'Creates a dataset.',
  operationId: 'automl.projects.locations.datasets.create',
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
            description: 'Required. The resource name of the project to create the dataset for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentModelEvaluationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/modelEvaluations',
  tags: ['projects'],
  description: 'Lists model evaluations.',
  operationId: 'automl.projects.locations.models.modelEvaluations.list',
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
              'An expression for filtering the results of the request. * `annotation_spec_id` - for =, != or existence. See example below for the last. Some examples of using the filter are: * `annotation_spec_id!=4` --> The model evaluation was done for annotation spec with ID different than 4. * `NOT annotation_spec_id:*` --> The model evaluation was done for aggregate of all annotation specs.',
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
            description: 'Requested page size.',
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
              'A token identifying a page of results for the server to return. Typically obtained via ListModelEvaluationsResponse.next_page_token of the previous AutoMl.ListModelEvaluations call.',
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
              'Required. Resource name of the model to list the model evaluations for. If modelId is set as "-", this will list model evaluations from across all models of the parent location.',
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
      content: { 'application/json': { schema: ListModelEvaluationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentModelsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/models',
  tags: ['projects'],
  description: 'Lists models.',
  operationId: 'automl.projects.locations.models.list',
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
              'An expression for filtering the results of the request. * `model_metadata` - for existence of the case (e.g. `video_classification_model_metadata:*`). * `dataset_id` - for = or !=. Some examples of using the filter are: * `image_classification_model_metadata:*` --> The model has `image_classification_model_metadata`. * `dataset_id=5` --> The model was created from a dataset with ID 5.',
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
            description: 'Requested page size.',
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
              'A token identifying a page of results for the server to return Typically obtained via ListModelsResponse.next_page_token of the previous AutoMl.ListModels call.',
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
            description: 'Required. Resource name of the project, from which to list the models.',
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
      content: { 'application/json': { schema: ListModelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentModelsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/models',
  tags: ['projects'],
  description:
    'Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.',
  operationId: 'automl.projects.locations.models.create',
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
              'Required. Resource name of the parent project where the model is being created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModelSchema } } },
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

export const getV1beta1ParentTableSpecsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/tableSpecs',
  tags: ['projects'],
  description: 'Lists table specs in a dataset.',
  operationId: 'automl.projects.locations.datasets.tableSpecs.list',
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
      fieldMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mask specifying which fields to read.',
            in: 'query',
            name: 'fieldMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter expression, see go/filtering.',
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
              'Requested page size. The server can return fewer results than requested. If unspecified, the server will pick a default size.',
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
              'A token identifying a page of results for the server to return. Typically obtained from the ListTableSpecsResponse.next_page_token field of the previous AutoMl.ListTableSpecs call.',
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
            description: 'Required. The resource name of the dataset to list table specs from.',
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
      content: { 'application/json': { schema: ListTableSpecsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'automl.projects.locations.models.getIamPolicy',
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
      'options.requestedPolicyVersion': z
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
              'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
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

export const postV1beta1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'automl.projects.locations.models.setIamPolicy',
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
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
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

export const postV1beta1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'automl.projects.locations.testIamPermissions',
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
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
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
