import { createRoute, z } from '@hono/zod-openapi'

const SingleTargetDatasetSchema = z
  .object({
    datasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dataset ID of the target dataset.' }),
  })
  .openapi({
    description: 'A single target dataset to which all data will be streamed.',
    required: [],
  })
  .openapi('SingleTargetDataset')

const DatasetTemplateSchema = z
  .object({
    datasetIdPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _.',
      }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.',
      }),
  })
  .openapi({ description: 'Dataset template used for dynamic dataset creation.', required: [] })
  .openapi('DatasetTemplate')

const SourceHierarchyDatasetsSchema = z
  .object({
    datasetTemplate: DatasetTemplateSchema.exactOptional().openapi({
      description: 'The dataset template to use for dynamic dataset creation.',
    }),
  })
  .openapi({
    description:
      'Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.',
    required: [],
  })
  .openapi('SourceHierarchyDatasets')

const BigQueryDestinationConfigSchema = z
  .object({
    dataFreshness: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.',
      }),
    singleTargetDataset: SingleTargetDatasetSchema.exactOptional().openapi({
      description: 'Single destination dataset.',
    }),
    sourceHierarchyDatasets: SourceHierarchyDatasetsSchema.exactOptional().openapi({
      description: 'Source hierarchy datasets.',
    }),
  })
  .openapi({ description: 'BigQuery destination configuration', required: [] })
  .openapi('BigQueryDestinationConfig')

const AvroFileFormatSchema = z
  .object({})
  .openapi({ description: 'AVRO file format configuration.' })
  .openapi('AvroFileFormat')

const JsonFileFormatSchema = z
  .object({
    compression: z
      .enum(['JSON_COMPRESSION_UNSPECIFIED', 'NO_COMPRESSION', 'GZIP'])
      .exactOptional()
      .openapi({ description: 'Compression of the loaded JSON file.' }),
    schemaFileFormat: z
      .enum(['SCHEMA_FILE_FORMAT_UNSPECIFIED', 'NO_SCHEMA_FILE', 'AVRO_SCHEMA_FILE'])
      .exactOptional()
      .openapi({ description: 'The schema file format along JSON data files.' }),
  })
  .openapi({ description: 'JSON file format configuration.', required: [] })
  .openapi('JsonFileFormat')

const GcsDestinationConfigSchema = z
  .object({
    avroFileFormat: AvroFileFormatSchema.exactOptional().openapi({
      description: 'AVRO file format configuration.',
    }),
    fileRotationInterval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum duration for which new events are added before a file is closed and a new file is created.',
      }),
    fileRotationMb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum file size to be saved in the bucket.' }),
    jsonFileFormat: JsonFileFormatSchema.exactOptional().openapi({
      description: 'JSON file format configuration.',
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path inside the Cloud Storage bucket to write data to.' }),
  })
  .openapi({ description: 'Google Cloud Storage destination configuration', required: [] })
  .openapi('GcsDestinationConfig')

type DestinationConfigType = {
  bigqueryDestinationConfig?: z.infer<typeof BigQueryDestinationConfigSchema>
  destinationConnectionProfile?: string
  gcsDestinationConfig?: z.infer<typeof GcsDestinationConfigSchema>
}

const MysqlColumnSchema = z
  .object({
    collation: z.string().exactOptional().openapi({ description: 'Column collation.' }),
    column: z.string().exactOptional().openapi({ description: 'Column name.' }),
    dataType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html',
      }),
    length: z.int32().exactOptional().openapi({ description: 'Column length.' }),
    nullable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the column can accept a null value.' }),
    ordinalPosition: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ordinal position of the column in the table.' }),
    primaryKey: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the column represents a primary key.' }),
  })
  .openapi({ description: 'MySQL Column.', required: [] })
  .openapi('MysqlColumn')

const MysqlTableSchema = z
  .object({
    mysqlColumns: z
      .array(MysqlColumnSchema)
      .exactOptional()
      .openapi({
        description:
          'MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything.',
      }),
    table: z.string().exactOptional().openapi({ description: 'Table name.' }),
  })
  .openapi({ description: 'MySQL table.', required: [] })
  .openapi('MysqlTable')

const MysqlDatabaseSchema = z
  .object({
    database: z.string().exactOptional().openapi({ description: 'Database name.' }),
    mysqlTables: z
      .array(MysqlTableSchema)
      .exactOptional()
      .openapi({ description: 'Tables in the database.' }),
  })
  .openapi({ description: 'MySQL database.', required: [] })
  .openapi('MysqlDatabase')

const MysqlRdbmsSchema = z
  .object({
    mysqlDatabases: z
      .array(MysqlDatabaseSchema)
      .exactOptional()
      .openapi({ description: 'Mysql databases on the server' }),
  })
  .openapi({ description: 'MySQL database structure', required: [] })
  .openapi('MysqlRdbms')

const MysqlSourceConfigSchema = z
  .object({
    excludeObjects: MysqlRdbmsSchema.exactOptional().openapi({
      description: 'MySQL objects to exclude from the stream.',
    }),
    includeObjects: MysqlRdbmsSchema.exactOptional().openapi({
      description: 'MySQL objects to retrieve from the source.',
    }),
    maxConcurrentBackfillTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.",
      }),
    maxConcurrentCdcTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.",
      }),
  })
  .openapi({ description: 'MySQL source configuration', required: [] })
  .openapi('MysqlSourceConfig')

const DropLargeObjectsSchema = z
  .object({})
  .openapi({ description: 'Configuration to drop large object values.' })
  .openapi('DropLargeObjects')

const OracleColumnSchema = z
  .object({
    column: z.string().exactOptional().openapi({ description: 'Column name.' }),
    dataType: z.string().exactOptional().openapi({ description: 'The Oracle data type.' }),
    encoding: z.string().exactOptional().openapi({ description: 'Column encoding.' }),
    length: z.int32().exactOptional().openapi({ description: 'Column length.' }),
    nullable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the column can accept a null value.' }),
    ordinalPosition: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ordinal position of the column in the table.' }),
    precision: z.int32().exactOptional().openapi({ description: 'Column precision.' }),
    primaryKey: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the column represents a primary key.' }),
    scale: z.int32().exactOptional().openapi({ description: 'Column scale.' }),
  })
  .openapi({ description: 'Oracle Column.', required: [] })
  .openapi('OracleColumn')

const OracleTableSchema = z
  .object({
    oracleColumns: z
      .array(OracleColumnSchema)
      .exactOptional()
      .openapi({
        description:
          'Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.',
      }),
    table: z.string().exactOptional().openapi({ description: 'Table name.' }),
  })
  .openapi({ description: 'Oracle table.', required: [] })
  .openapi('OracleTable')

const OracleSchemaSchema = z
  .object({
    oracleTables: z
      .array(OracleTableSchema)
      .exactOptional()
      .openapi({ description: 'Tables in the schema.' }),
    schema: z.string().exactOptional().openapi({ description: 'Schema name.' }),
  })
  .openapi({ description: 'Oracle schema.', required: [] })
  .openapi('OracleSchema')

const OracleRdbmsSchema = z
  .object({
    oracleSchemas: z
      .array(OracleSchemaSchema)
      .exactOptional()
      .openapi({ description: 'Oracle schemas/databases in the database server.' }),
  })
  .openapi({ description: 'Oracle database structure.', required: [] })
  .openapi('OracleRdbms')

const StreamLargeObjectsSchema = z
  .object({})
  .openapi({ description: 'Configuration to stream large object values.' })
  .openapi('StreamLargeObjects')

const OracleSourceConfigSchema = z
  .object({
    dropLargeObjects: DropLargeObjectsSchema.exactOptional().openapi({
      description: 'Drop large object values.',
    }),
    excludeObjects: OracleRdbmsSchema.exactOptional().openapi({
      description: 'Oracle objects to exclude from the stream.',
    }),
    includeObjects: OracleRdbmsSchema.exactOptional().openapi({
      description: 'Oracle objects to include in the stream.',
    }),
    maxConcurrentBackfillTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.",
      }),
    maxConcurrentCdcTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.",
      }),
    streamLargeObjects: StreamLargeObjectsSchema.exactOptional().openapi({
      description: 'Stream large object values. NOTE: This feature is currently experimental.',
    }),
  })
  .openapi({ description: 'Oracle data source configuration', required: [] })
  .openapi('OracleSourceConfig')

const PostgresqlColumnSchema = z
  .object({
    column: z.string().exactOptional().openapi({ description: 'Column name.' }),
    dataType: z.string().exactOptional().openapi({ description: 'The PostgreSQL data type.' }),
    length: z.int32().exactOptional().openapi({ description: 'Column length.' }),
    nullable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the column can accept a null value.' }),
    ordinalPosition: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ordinal position of the column in the table.' }),
    precision: z.int32().exactOptional().openapi({ description: 'Column precision.' }),
    primaryKey: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the column represents a primary key.' }),
    scale: z.int32().exactOptional().openapi({ description: 'Column scale.' }),
  })
  .openapi({ description: 'PostgreSQL Column.', required: [] })
  .openapi('PostgresqlColumn')

const PostgresqlTableSchema = z
  .object({
    postgresqlColumns: z
      .array(PostgresqlColumnSchema)
      .exactOptional()
      .openapi({
        description:
          'PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.',
      }),
    table: z.string().exactOptional().openapi({ description: 'Table name.' }),
  })
  .openapi({ description: 'PostgreSQL table.', required: [] })
  .openapi('PostgresqlTable')

const PostgresqlSchemaSchema = z
  .object({
    postgresqlTables: z
      .array(PostgresqlTableSchema)
      .exactOptional()
      .openapi({ description: 'Tables in the schema.' }),
    schema: z.string().exactOptional().openapi({ description: 'Schema name.' }),
  })
  .openapi({ description: 'PostgreSQL schema.', required: [] })
  .openapi('PostgresqlSchema')

const PostgresqlRdbmsSchema = z
  .object({
    postgresqlSchemas: z
      .array(PostgresqlSchemaSchema)
      .exactOptional()
      .openapi({ description: 'PostgreSQL schemas in the database server.' }),
  })
  .openapi({ description: 'PostgreSQL database structure.', required: [] })
  .openapi('PostgresqlRdbms')

const PostgresqlSourceConfigSchema = z
  .object({
    excludeObjects: PostgresqlRdbmsSchema.exactOptional().openapi({
      description: 'PostgreSQL objects to exclude from the stream.',
    }),
    includeObjects: PostgresqlRdbmsSchema.exactOptional().openapi({
      description: 'PostgreSQL objects to include in the stream.',
    }),
    maxConcurrentBackfillTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.",
      }),
    publication: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects.",
      }),
    replicationSlot: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin.",
      }),
  })
  .openapi({ description: 'PostgreSQL data source configuration', required: [] })
  .openapi('PostgresqlSourceConfig')

type SourceConfigType = {
  mysqlSourceConfig?: z.infer<typeof MysqlSourceConfigSchema>
  oracleSourceConfig?: z.infer<typeof OracleSourceConfigSchema>
  postgresqlSourceConfig?: z.infer<typeof PostgresqlSourceConfigSchema>
  sourceConnectionProfile?: string
}

const BackfillAllStrategySchema = z
  .object({
    mysqlExcludedObjects: MysqlRdbmsSchema.exactOptional().openapi({
      description: 'MySQL data source objects to avoid backfilling.',
    }),
    oracleExcludedObjects: OracleRdbmsSchema.exactOptional().openapi({
      description: 'Oracle data source objects to avoid backfilling.',
    }),
    postgresqlExcludedObjects: PostgresqlRdbmsSchema.exactOptional().openapi({
      description: 'PostgreSQL data source objects to avoid backfilling.',
    }),
  })
  .openapi({
    description:
      "Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.",
    required: [],
  })
  .openapi('BackfillAllStrategy')

const ErrorSchema = z
  .object({
    details: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Additional information about the error.' }),
    errorTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the error occurred.' }),
    errorUuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message containing more information about the error that occurred.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'A title that explains the reason for the error.' }),
  })
  .openapi({ description: 'Represent a user-facing Error.', required: [] })
  .openapi('Error')

const BackfillJobSchema = z
  .object({
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Errors which caused the backfill job to fail.',
        readOnly: true,
      }),
    lastEndTime: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. Backfill job's end time.", readOnly: true }),
    lastStartTime: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. Backfill job's start time.", readOnly: true }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'NOT_STARTED',
        'PENDING',
        'ACTIVE',
        'STOPPED',
        'FAILED',
        'COMPLETED',
        'UNSUPPORTED',
      ])
      .exactOptional()
      .openapi({ description: 'Backfill job state.' }),
    trigger: z
      .enum(['TRIGGER_UNSPECIFIED', 'AUTOMATIC', 'MANUAL'])
      .exactOptional()
      .openapi({ description: "Backfill job's triggering reason." }),
  })
  .openapi({ description: 'Represents a backfill job on a specific stream object.', required: [] })
  .openapi('BackfillJob')

const BackfillNoneStrategySchema = z
  .object({})
  .openapi({
    description: "Backfill strategy to disable automatic backfill for the Stream's objects.",
  })
  .openapi('BackfillNoneStrategy')

const BigQueryProfileSchema = z
  .object({})
  .openapi({ description: 'BigQuery warehouse profile.' })
  .openapi('BigQueryProfile')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const ForwardSshTunnelConnectivitySchema = z
  .object({
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Hostname for the SSH tunnel.' }),
    password: z.string().exactOptional().openapi({ description: 'Input only. SSH password.' }),
    port: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Port for the SSH tunnel, default value is 22.' }),
    privateKey: z.string().exactOptional().openapi({ description: 'Input only. SSH private key.' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Username for the SSH tunnel.' }),
  })
  .openapi({ description: 'Forward SSH Tunnel connectivity.', required: [] })
  .openapi('ForwardSshTunnelConnectivity')

const GcsProfileSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The Cloud Storage bucket name.' }),
    rootPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The root path inside the Cloud Storage bucket.' }),
  })
  .openapi({ description: 'Cloud Storage bucket profile.', required: [] })
  .openapi('GcsProfile')

const MysqlSslConfigSchema = z
  .object({
    caCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.",
      }),
    caCertificateSet: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the ca_certificate field is set.',
        readOnly: true,
      }),
    clientCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.",
      }),
    clientCertificateSet: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the client_certificate field is set.',
        readOnly: true,
      }),
    clientKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.",
      }),
    clientKeySet: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the client_key field is set.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'MySQL SSL configuration information.', required: [] })
  .openapi('MysqlSslConfig')

const MysqlProfileSchema = z
  .object({
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Hostname for the MySQL connection.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Input only. Password for the MySQL connection.' }),
    port: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Port for the MySQL connection, default value is 3306.' }),
    sslConfig: MysqlSslConfigSchema.exactOptional().openapi({
      description: 'SSL configuration for the MySQL connection.',
    }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Username for the MySQL connection.' }),
  })
  .openapi({ description: 'MySQL database profile.', required: [] })
  .openapi('MysqlProfile')

const OracleProfileSchema = z
  .object({
    connectionAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Connection string attributes' }),
    databaseService: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Database for the Oracle connection.' }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Hostname for the Oracle connection.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Password for the Oracle connection.' }),
    port: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Port for the Oracle connection, default value is 1521.' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Username for the Oracle connection.' }),
  })
  .openapi({ description: 'Oracle database profile.', required: [] })
  .openapi('OracleProfile')

const PostgresqlProfileSchema = z
  .object({
    database: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Database for the PostgreSQL connection.' }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Hostname for the PostgreSQL connection.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Password for the PostgreSQL connection.' }),
    port: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Port for the PostgreSQL connection, default value is 5432.' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Username for the PostgreSQL connection.' }),
  })
  .openapi({ description: 'PostgreSQL database profile.', required: [] })
  .openapi('PostgresqlProfile')

const PrivateConnectivitySchema = z
  .object({
    privateConnection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}`',
      }),
  })
  .openapi({ description: 'Private Connectivity', required: [] })
  .openapi('PrivateConnectivity')

const StaticServiceIpConnectivitySchema = z
  .object({})
  .openapi({
    description:
      'Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.',
  })
  .openapi('StaticServiceIpConnectivity')

const ConnectionProfileSchema = z
  .object({
    bigqueryProfile: BigQueryProfileSchema.exactOptional().openapi({
      description: 'BigQuery Connection Profile configuration.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The create time of the resource.', readOnly: true }),
    displayName: z.string().exactOptional().openapi({ description: 'Required. Display name.' }),
    forwardSshConnectivity: ForwardSshTunnelConnectivitySchema.exactOptional().openapi({
      description: 'Forward SSH tunnel connectivity.',
    }),
    gcsProfile: GcsProfileSchema.exactOptional().openapi({
      description: 'Cloud Storage ConnectionProfile configuration.',
    }),
    labels: z.record(z.string(), z.string()).exactOptional().openapi({ description: 'Labels.' }),
    mysqlProfile: MysqlProfileSchema.exactOptional().openapi({
      description: 'MySQL ConnectionProfile configuration.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The resource's name.", readOnly: true }),
    oracleProfile: OracleProfileSchema.exactOptional().openapi({
      description: 'Oracle ConnectionProfile configuration.',
    }),
    postgresqlProfile: PostgresqlProfileSchema.exactOptional().openapi({
      description: 'PostgreSQL Connection Profile configuration.',
    }),
    privateConnectivity: PrivateConnectivitySchema.exactOptional().openapi({
      description: 'Private connectivity.',
    }),
    staticServiceIpConnectivity: StaticServiceIpConnectivitySchema.exactOptional().openapi({
      description: 'Static Service IP connectivity.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The update time of the resource.', readOnly: true }),
  })
  .openapi({
    description:
      'A set of reusable connection configurations to be used as a source or destination for a stream.',
    required: [],
  })
  .openapi('ConnectionProfile')

const DestinationConfigSchema: z.ZodType<DestinationConfigType> = z
  .lazy(() =>
    z
      .object({
        bigqueryDestinationConfig: BigQueryDestinationConfigSchema.exactOptional().openapi({
          description: 'BigQuery destination configuration.',
        }),
        destinationConnectionProfile: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. Destination connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}`',
          }),
        gcsDestinationConfig: GcsDestinationConfigSchema.exactOptional().openapi({
          description: 'A configuration for how data should be loaded to Cloud Storage.',
        }),
      })
      .openapi({ description: 'The configuration of the stream destination.', required: [] }),
  )
  .openapi('DestinationConfig')

const DiscoverConnectionProfileRequestSchema = z
  .object({
    connectionProfile: ConnectionProfileSchema.exactOptional().openapi({
      description: 'An ad-hoc connection profile configuration.',
    }),
    connectionProfileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A reference to an existing connection profile.' }),
    fullHierarchy: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).',
      }),
    hierarchyDepth: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of hierarchy levels below the current level to be retrieved.',
      }),
    mysqlRdbms: MysqlRdbmsSchema.exactOptional().openapi({
      description: 'MySQL RDBMS to enrich with child data objects and metadata.',
    }),
    oracleRdbms: OracleRdbmsSchema.exactOptional().openapi({
      description: 'Oracle RDBMS to enrich with child data objects and metadata.',
    }),
    postgresqlRdbms: PostgresqlRdbmsSchema.exactOptional().openapi({
      description: 'PostgreSQL RDBMS to enrich with child data objects and metadata.',
    }),
  })
  .openapi({
    description: "Request message for 'discover' ConnectionProfile request.",
    required: [],
  })
  .openapi('DiscoverConnectionProfileRequest')

const DiscoverConnectionProfileResponseSchema = z
  .object({
    mysqlRdbms: MysqlRdbmsSchema.exactOptional().openapi({
      description: 'Enriched MySQL RDBMS object.',
    }),
    oracleRdbms: OracleRdbmsSchema.exactOptional().openapi({
      description: 'Enriched Oracle RDBMS object.',
    }),
    postgresqlRdbms: PostgresqlRdbmsSchema.exactOptional().openapi({
      description: 'Enriched PostgreSQL RDBMS object.',
    }),
  })
  .openapi({ description: 'Response from a discover request.', required: [] })
  .openapi('DiscoverConnectionProfileResponse')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FetchStaticIpsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    staticIps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'list of static ips by account' }),
  })
  .openapi({ description: "Response message for a 'FetchStaticIps' response.", required: [] })
  .openapi('FetchStaticIpsResponse')

const ListConnectionProfilesResponseSchema = z
  .object({
    connectionProfiles: z
      .array(ConnectionProfileSchema)
      .exactOptional()
      .openapi({ description: 'List of connection profiles.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for listing connection profiles.', required: [] })
  .openapi('ListConnectionProfilesResponse')

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

const VpcPeeringConfigSchema = z
  .object({
    subnet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A free subnet for peering. (CIDR of /29)' }),
    vpc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project}/global/{networks}/{name}`',
      }),
  })
  .openapi({
    description:
      "The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.",
    required: [],
  })
  .openapi('VpcPeeringConfig')

const PrivateConnectionSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The create time of the resource.', readOnly: true }),
    displayName: z.string().exactOptional().openapi({ description: 'Required. Display name.' }),
    error: ErrorSchema.exactOptional().openapi({
      description:
        'Output only. In case of error, the details of the error in a user-friendly format.',
      readOnly: true,
    }),
    labels: z.record(z.string(), z.string()).exactOptional().openapi({ description: 'Labels.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The resource's name.", readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'CREATED', 'FAILED', 'DELETING', 'FAILED_TO_DELETE'])
      .exactOptional()
      .openapi({
        description: 'Output only. The state of the Private Connection.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The update time of the resource.', readOnly: true }),
    vpcPeeringConfig: VpcPeeringConfigSchema.exactOptional().openapi({
      description: 'VPC Peering Config.',
    }),
  })
  .openapi({
    description:
      "The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.",
    required: [],
  })
  .openapi('PrivateConnection')

const ListPrivateConnectionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    privateConnections: z
      .array(PrivateConnectionSchema)
      .exactOptional()
      .openapi({ description: 'List of private connectivity configurations.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({
    description: 'Response containing a list of private connection configurations.',
    required: [],
  })
  .openapi('ListPrivateConnectionsResponse')

const RouteSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The create time of the resource.', readOnly: true }),
    destinationAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Destination address for connection' }),
    destinationPort: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Destination port for connection' }),
    displayName: z.string().exactOptional().openapi({ description: 'Required. Display name.' }),
    labels: z.record(z.string(), z.string()).exactOptional().openapi({ description: 'Labels.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The resource's name.", readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The update time of the resource.', readOnly: true }),
  })
  .openapi({
    description:
      'The route resource is the child of the private connection resource, used for defining a route for a private connection.',
    required: [],
  })
  .openapi('Route')

const ListRoutesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    routes: z.array(RouteSchema).exactOptional().openapi({ description: 'List of Routes.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Route list response.', required: [] })
  .openapi('ListRoutesResponse')

const MysqlObjectIdentifierSchema = z
  .object({
    database: z.string().exactOptional().openapi({ description: 'Required. The database name.' }),
    table: z.string().exactOptional().openapi({ description: 'Required. The table name.' }),
  })
  .openapi({ description: 'Mysql data source object identifier.', required: [] })
  .openapi('MysqlObjectIdentifier')

const OracleObjectIdentifierSchema = z
  .object({
    schema: z.string().exactOptional().openapi({ description: 'Required. The schema name.' }),
    table: z.string().exactOptional().openapi({ description: 'Required. The table name.' }),
  })
  .openapi({ description: 'Oracle data source object identifier.', required: [] })
  .openapi('OracleObjectIdentifier')

const PostgresqlObjectIdentifierSchema = z
  .object({
    schema: z.string().exactOptional().openapi({ description: 'Required. The schema name.' }),
    table: z.string().exactOptional().openapi({ description: 'Required. The table name.' }),
  })
  .openapi({ description: 'PostgreSQL data source object identifier.', required: [] })
  .openapi('PostgresqlObjectIdentifier')

const SourceObjectIdentifierSchema = z
  .object({
    mysqlIdentifier: MysqlObjectIdentifierSchema.exactOptional().openapi({
      description: 'Mysql data source object identifier.',
    }),
    oracleIdentifier: OracleObjectIdentifierSchema.exactOptional().openapi({
      description: 'Oracle data source object identifier.',
    }),
    postgresqlIdentifier: PostgresqlObjectIdentifierSchema.exactOptional().openapi({
      description: 'PostgreSQL data source object identifier.',
    }),
  })
  .openapi({
    description: 'Represents an identifier of an object in the data source.',
    required: [],
  })
  .openapi('SourceObjectIdentifier')

const StreamObjectSchema = z
  .object({
    backfillJob: BackfillJobSchema.exactOptional().openapi({
      description: 'The latest backfill job that was initiated for the stream object.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The creation time of the object.', readOnly: true }),
    displayName: z.string().exactOptional().openapi({ description: 'Required. Display name.' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Active errors on the object.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The object resource's name.", readOnly: true }),
    sourceObject: SourceObjectIdentifierSchema.exactOptional().openapi({
      description: 'The object identifier in the data source.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last update time of the object.', readOnly: true }),
  })
  .openapi({ description: 'A specific stream object (e.g a specific DB table).', required: [] })
  .openapi('StreamObject')

const ListStreamObjectsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token, which can be sent as `page_token` to retrieve the next page.',
      }),
    streamObjects: z
      .array(StreamObjectSchema)
      .exactOptional()
      .openapi({ description: 'List of stream objects.' }),
  })
  .openapi({ description: 'Response containing the objects for a stream.', required: [] })
  .openapi('ListStreamObjectsResponse')

const SourceConfigSchema: z.ZodType<SourceConfigType> = z
  .lazy(() =>
    z
      .object({
        mysqlSourceConfig: MysqlSourceConfigSchema.exactOptional().openapi({
          description: 'MySQL data source configuration.',
        }),
        oracleSourceConfig: OracleSourceConfigSchema.exactOptional().openapi({
          description: 'Oracle data source configuration.',
        }),
        postgresqlSourceConfig: PostgresqlSourceConfigSchema.exactOptional().openapi({
          description: 'PostgreSQL data source configuration.',
        }),
        sourceConnectionProfile: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. Source connection profile resoource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}`',
          }),
      })
      .openapi({ description: 'The configuration of the stream source.', required: [] }),
  )
  .openapi('SourceConfig')

const StreamSchema = z
  .object({
    backfillAll: BackfillAllStrategySchema.exactOptional().openapi({
      description:
        'Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.',
    }),
    backfillNone: BackfillNoneStrategySchema.exactOptional().openapi({
      description: 'Do not automatically backfill any objects.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The creation time of the stream.', readOnly: true }),
    customerManagedEncryptionKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.',
      }),
    destinationConfig: DestinationConfigSchema.exactOptional().openapi({
      description: 'Required. Destination connection profile configuration.',
    }),
    displayName: z.string().exactOptional().openapi({ description: 'Required. Display name.' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Errors on the Stream.', readOnly: true }),
    labels: z.record(z.string(), z.string()).exactOptional().openapi({ description: 'Labels.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The stream's name.", readOnly: true }),
    sourceConfig: SourceConfigSchema.exactOptional().openapi({
      description: 'Required. Source connection profile configuration.',
    }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'NOT_STARTED',
        'RUNNING',
        'PAUSED',
        'MAINTENANCE',
        'FAILED',
        'FAILED_PERMANENTLY',
        'STARTING',
        'DRAINING',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the stream.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last update time of the stream.', readOnly: true }),
  })
  .openapi({
    description: 'A resource representing streaming data from a source to a destination.',
    required: [],
  })
  .openapi('Stream')

const ListStreamsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    streams: z.array(StreamSchema).exactOptional().openapi({ description: 'List of streams' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for listing streams.', required: [] })
  .openapi('ListStreamsResponse')

const LookupStreamObjectRequestSchema = z
  .object({
    sourceObjectIdentifier: SourceObjectIdentifierSchema.exactOptional().openapi({
      description: 'Required. The source object identifier which maps to the stream object.',
    }),
  })
  .openapi({
    description: 'Request for looking up a specific stream object by its source object identifier.',
    required: [],
  })
  .openapi('LookupStreamObjectRequest')

const ValidationMessageSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom code identifying this specific message.' }),
    level: z
      .enum(['LEVEL_UNSPECIFIED', 'WARNING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'Message severity level (warning or error).' }),
    message: z.string().exactOptional().openapi({ description: 'The result of the validation.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Additional metadata related to the result.' }),
  })
  .openapi({ description: 'Represent user-facing validation result message.', required: [] })
  .openapi('ValidationMessage')

const ValidationSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom code identifying this validation.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the validation.' }),
    message: z
      .array(ValidationMessageSchema)
      .exactOptional()
      .openapi({ description: 'Messages reflecting the validation results.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NOT_EXECUTED', 'FAILED', 'PASSED'])
      .exactOptional()
      .openapi({ description: 'Validation execution status.' }),
  })
  .openapi({ description: 'A validation to perform on a stream.', required: [] })
  .openapi('Validation')

const ValidationResultSchema = z
  .object({
    validations: z
      .array(ValidationSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of validations (includes both executed as well as not executed validations).',
      }),
  })
  .openapi({ description: 'Contains the current validation results.', required: [] })
  .openapi('ValidationResult')

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
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
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
    validationResult: ValidationResultSchema.exactOptional().openapi({
      description: 'Output only. Results of executed validations if there are any.',
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

const StartBackfillJobRequestSchema = z
  .object({})
  .openapi({
    description: 'Request for manually initiating a backfill job for a specific stream object.',
  })
  .openapi('StartBackfillJobRequest')

const StartBackfillJobResponseSchema = z
  .object({
    object: StreamObjectSchema.exactOptional().openapi({
      description: 'The stream object resource a backfill job was started for.',
    }),
  })
  .openapi({
    description: 'Response for manually initiating a backfill job for a specific stream object.',
    required: [],
  })
  .openapi('StartBackfillJobResponse')

const StopBackfillJobRequestSchema = z
  .object({})
  .openapi({
    description:
      'Request for manually stopping a running backfill job for a specific stream object.',
  })
  .openapi('StopBackfillJobRequest')

const StopBackfillJobResponseSchema = z
  .object({
    object: StreamObjectSchema.exactOptional().openapi({
      description: 'The stream object resource the backfill job was stopped for.',
    }),
  })
  .openapi({
    description: 'Response for manually stop a backfill job for a specific stream object.',
    required: [],
  })
  .openapi('StopBackfillJobResponse')

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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Use this method to get details about a stream object.',
  operationId: 'datastream.projects.locations.streams.objects.get',
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
            description: 'Required. The name of the stream object resource to get.',
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
      content: { 'application/json': { schema: StreamObjectSchema } },
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
  description: 'Use this method to delete a stream.',
  operationId: 'datastream.projects.locations.streams.delete',
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
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. The name of the stream resource to delete.',
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

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Use this method to update the configuration of a stream.',
  operationId: 'datastream.projects.locations.streams.patch',
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
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Update the stream without validating it.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
              'Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the stream with the changes, without actually updating it. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Output only. The stream's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StreamSchema } } },
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

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'datastream.projects.locations.list',
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

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'datastream.projects.locations.operations.list',
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

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'datastream.projects.locations.operations.cancel',
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

export const getV1NameFetchStaticIpsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}:fetchStaticIps',
  tags: ['projects'],
  description: 'The FetchStaticIps API call exposes the static IP addresses used by Datastream.',
  operationId: 'datastream.projects.locations.fetchStaticIps',
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
            description: 'Maximum number of Ips to return, will likely not be specified.',
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
              'A page token, received from a previous `ListStaticIps` call. will likely not be specified.',
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
              'Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: FetchStaticIpsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ObjectStartBackfillJobRoute = createRoute({
  method: 'post',
  path: '/v1/{object}:startBackfillJob',
  tags: ['projects'],
  description: 'Use this method to start a backfill job for the specified stream object.',
  operationId: 'datastream.projects.locations.streams.objects.startBackfillJob',
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
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the stream object resource to start a backfill job for.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartBackfillJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StartBackfillJobResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ObjectStopBackfillJobRoute = createRoute({
  method: 'post',
  path: '/v1/{object}:stopBackfillJob',
  tags: ['projects'],
  description: 'Use this method to stop a backfill job for the specified stream object.',
  operationId: 'datastream.projects.locations.streams.objects.stopBackfillJob',
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
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the stream object resource to stop the backfill job for.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopBackfillJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StopBackfillJobResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentConnectionProfilesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/connectionProfiles',
  tags: ['projects'],
  description: 'Use this method to list connection profiles created in a project and location.',
  operationId: 'datastream.projects.locations.connectionProfiles.list',
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
            description: 'Filter request.',
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
            description: 'Order by fields for the result.',
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
              'Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.',
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
            description: 'Required. The parent that owns the collection of connection profiles.',
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
      content: { 'application/json': { schema: ListConnectionProfilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentConnectionProfilesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/connectionProfiles',
  tags: ['projects'],
  description: 'Use this method to create a connection profile in a project and location.',
  operationId: 'datastream.projects.locations.connectionProfiles.create',
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
      connectionProfileId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The connection profile identifier.',
            in: 'query',
            name: 'connectionProfileId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Create the connection profile without validating it.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. Only validate the connection profile, but don't create any resources. The default is false.",
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent that owns the collection of ConnectionProfiles.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectionProfileSchema } } },
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

export const postV1ParentConnectionProfilesDiscoverRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/connectionProfiles:discover',
  tags: ['projects'],
  description:
    "Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.",
  operationId: 'datastream.projects.locations.connectionProfiles.discover',
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
              'Required. The parent resource of the connection profile type. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DiscoverConnectionProfileRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DiscoverConnectionProfileResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentObjectsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/objects',
  tags: ['projects'],
  description: 'Use this method to list the objects of a specific stream.',
  operationId: 'datastream.projects.locations.streams.objects.list',
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
              'Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token.',
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
            description: 'Required. The parent stream that owns the collection of objects.',
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
      content: { 'application/json': { schema: ListStreamObjectsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentObjectsLookupRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/objects:lookup',
  tags: ['projects'],
  description: 'Use this method to look up a stream object by its source object identifier.',
  operationId: 'datastream.projects.locations.streams.objects.lookup',
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
            description: 'Required. The parent stream that owns the collection of objects.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LookupStreamObjectRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StreamObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentPrivateConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/privateConnections',
  tags: ['projects'],
  description:
    'Use this method to list private connectivity configurations in a project and location.',
  operationId: 'datastream.projects.locations.privateConnections.list',
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
            description: 'Filter request.',
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
            description: 'Order by fields for the result.',
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
              'Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.',
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
              'Required. The parent that owns the collection of private connectivity configurations.',
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
      content: { 'application/json': { schema: ListPrivateConnectionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentPrivateConnectionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/privateConnections',
  tags: ['projects'],
  description: 'Use this method to create a private connectivity configuration.',
  operationId: 'datastream.projects.locations.privateConnections.create',
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
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If set to true, will skip validations.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      privateConnectionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The private connectivity identifier.',
            in: 'query',
            name: 'privateConnectionId',
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
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
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
            description: 'Required. The parent that owns the collection of PrivateConnections.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PrivateConnectionSchema } } },
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

export const getV1ParentRoutesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/routes',
  tags: ['projects'],
  description:
    'Use this method to list routes created for a private connectivity configuration in a project and location.',
  operationId: 'datastream.projects.locations.privateConnections.routes.list',
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
            description: 'Filter request.',
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
            description: 'Order by fields for the result.',
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
              'Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token.',
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
            description: 'Required. The parent that owns the collection of Routess.',
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
      content: { 'application/json': { schema: ListRoutesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentRoutesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/routes',
  tags: ['projects'],
  description:
    'Use this method to create a route for a private connectivity configuration in a project and location.',
  operationId: 'datastream.projects.locations.privateConnections.routes.create',
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
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      routeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The Route identifier.',
            in: 'query',
            name: 'routeId',
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
            description: 'Required. The parent that owns the collection of Routes.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RouteSchema } } },
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

export const getV1ParentStreamsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/streams',
  tags: ['projects'],
  description: 'Use this method to list streams in a project and location.',
  operationId: 'datastream.projects.locations.streams.list',
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
            description: 'Filter request.',
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
            description: 'Order by fields for the result.',
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
              'Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token.',
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
            description: 'Required. The parent that owns the collection of streams.',
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
      content: { 'application/json': { schema: ListStreamsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentStreamsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/streams',
  tags: ['projects'],
  description: 'Use this method to create a stream.',
  operationId: 'datastream.projects.locations.streams.create',
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
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Create the stream without validating it.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      streamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The stream identifier.',
            in: 'query',
            name: 'streamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. Only validate the stream, but don't create any resources. The default is false.",
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent that owns the collection of streams.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StreamSchema } } },
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
