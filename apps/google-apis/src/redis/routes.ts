import { createRoute, z } from '@hono/zod-openapi'

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GcsDestinationSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Data destination URI (e.g. 'gs://my_bucket/my_object'). Existing files will be overwritten.",
      }),
  })
  .openapi({ description: 'The Cloud Storage location for the output content', required: [] })
  .openapi('GcsDestination')

const OutputConfigSchema = z
  .object({
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description: 'Google Cloud Storage destination for output content.',
    }),
  })
  .openapi({ description: 'The output content', required: [] })
  .openapi('OutputConfig')

const ExportInstanceRequestSchema = z
  .object({
    outputConfig: OutputConfigSchema.exactOptional().openapi({
      description: 'Required. Specify data to be exported.',
    }),
  })
  .openapi({ description: 'Request for Export.', required: [] })
  .openapi('ExportInstanceRequest')

const FailoverInstanceRequestSchema = z
  .object({
    dataProtectionMode: z
      .enum(['DATA_PROTECTION_MODE_UNSPECIFIED', 'LIMITED_DATA_LOSS', 'FORCE_DATA_LOSS'])
      .exactOptional()
      .openapi({
        description:
          "Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default.",
      }),
  })
  .openapi({ description: 'Request for Failover.', required: [] })
  .openapi('FailoverInstanceRequest')

const GcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. Source data URI. (e.g. 'gs://my_bucket/my_object')." }),
  })
  .openapi({ description: 'The Cloud Storage location for the input content', required: [] })
  .openapi('GcsSource')

const GoogleCloudRedisV1ZoneMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Defines specific information for a particular zone. Currently empty and reserved for future use only.',
  })
  .openapi('GoogleCloudRedisV1ZoneMetadata')

const GoogleCloudRedisV1LocationMetadataSchema = z
  .object({
    availableZones: z
      .record(z.string(), GoogleCloudRedisV1ZoneMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'This location metadata represents additional configuration options for a given location where a Redis instance may be created. All fields are output only. It is returned as content of the `google.cloud.location.Location.metadata` field.',
    required: [],
  })
  .openapi('GoogleCloudRedisV1LocationMetadata')

const GoogleCloudRedisV1OperationMetadataSchema = z
  .object({
    apiVersion: z.string().exactOptional().openapi({ description: 'API version.' }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if cancellation was requested for the operation.' }),
    createTime: z.string().exactOptional().openapi({ description: 'Creation timestamp.' }),
    endTime: z.string().exactOptional().openapi({ description: 'End timestamp.' }),
    statusDetail: z.string().exactOptional().openapi({ description: 'Operation status details.' }),
    target: z.string().exactOptional().openapi({ description: 'Operation target.' }),
    verb: z.string().exactOptional().openapi({ description: 'Operation verb.' }),
  })
  .openapi({
    description: 'Represents the v1 metadata of the long-running operation.',
    required: [],
  })
  .openapi('GoogleCloudRedisV1OperationMetadata')

const InputConfigSchema = z
  .object({
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description: 'Google Cloud Storage location where input content is located.',
    }),
  })
  .openapi({ description: 'The input content', required: [] })
  .openapi('InputConfig')

const ImportInstanceRequestSchema = z
  .object({
    inputConfig: InputConfigSchema.exactOptional().openapi({
      description: 'Required. Specify data to be imported.',
    }),
  })
  .openapi({ description: 'Request for Import.', required: [] })
  .openapi('ImportInstanceRequest')

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const WeeklyMaintenanceWindowSchema = z
  .object({
    day: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The day of week that maintenance updates occur.' }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Duration of the maintenance window. The current window is fixed at 1 hour.',
        readOnly: true,
      }),
    startTime: TimeOfDaySchema.exactOptional().openapi({
      description: 'Required. Start time of the window in UTC time.',
    }),
  })
  .openapi({
    description:
      'Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.',
    required: [],
  })
  .openapi('WeeklyMaintenanceWindow')

const MaintenancePolicySchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the policy was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the policy was last updated.',
        readOnly: true,
      }),
    weeklyMaintenanceWindow: z
      .array(WeeklyMaintenanceWindowSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one.',
      }),
  })
  .openapi({ description: 'Maintenance policy for an instance.', required: [] })
  .openapi('MaintenancePolicy')

const MaintenanceScheduleSchema = z
  .object({
    canReschedule: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the scheduled maintenance can be rescheduled, default is true.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The end time of any upcoming scheduled maintenance for this instance.',
        readOnly: true,
      }),
    scheduleDeadlineTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The start time of any upcoming scheduled maintenance for this instance.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.',
    required: [],
  })
  .openapi('MaintenanceSchedule')

const NodeInfoSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. Node identifying string. e.g. 'node-0', 'node-1'",
        readOnly: true,
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Location of the node.', readOnly: true }),
  })
  .openapi({ description: 'Node specific properties.', required: [] })
  .openapi('NodeInfo')

const PersistenceConfigSchema = z
  .object({
    persistenceMode: z
      .enum(['PERSISTENCE_MODE_UNSPECIFIED', 'DISABLED', 'RDB'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.',
      }),
    rdbNextSnapshotTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The next time that a snapshot attempt is scheduled to occur.',
        readOnly: true,
      }),
    rdbSnapshotPeriod: z
      .enum([
        'SNAPSHOT_PERIOD_UNSPECIFIED',
        'ONE_HOUR',
        'SIX_HOURS',
        'TWELVE_HOURS',
        'TWENTY_FOUR_HOURS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default.',
      }),
    rdbSnapshotStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used.',
      }),
  })
  .openapi({ description: 'Configuration of the persistence functionality.', required: [] })
  .openapi('PersistenceConfig')

const TlsCertificateSchema = z
  .object({
    cert: z.string().exactOptional().openapi({ description: 'PEM representation.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.',
        readOnly: true,
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial number, as extracted from the certificate.' }),
    sha1Fingerprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sha1 Fingerprint of the certificate.' }),
  })
  .openapi({ description: 'TlsCertificate Resource', required: [] })
  .openapi('TlsCertificate')

const InstanceSchema = z
  .object({
    alternativeLocationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.',
      }),
    authEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.',
      }),
    authorizedNetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.',
      }),
    availableMaintenanceVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The available maintenance versions that an instance could update to.',
      }),
    connectMode: z
      .enum(['CONNECT_MODE_UNSPECIFIED', 'DIRECT_PEERING', 'PRIVATE_SERVICE_ACCESS'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the instance was created.', readOnly: true }),
    currentLocationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance.',
        readOnly: true,
      }),
    customerManagedKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The KMS key reference that the customer provides when trying to create the instance.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'An arbitrary and optional user-provided name for the instance.' }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Resource labels to represent user provided metadata' }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.',
      }),
    maintenancePolicy: MaintenancePolicySchema.exactOptional().openapi({
      description:
        'Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time.',
    }),
    maintenanceSchedule: MaintenanceScheduleSchema.exactOptional().openapi({
      description:
        'Output only. Date and time of upcoming maintenance events which have been scheduled.',
      readOnly: true,
    }),
    maintenanceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".',
      }),
    memorySizeGb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Redis memory size in GiB.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.',
      }),
    nodes: z
      .array(NodeInfoSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Info per node.', readOnly: true }),
    persistenceConfig: PersistenceConfigSchema.exactOptional().openapi({
      description: 'Optional. Persistence configuration parameters',
    }),
    persistenceIamIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation.',
        readOnly: true,
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The port number of the exposed Redis endpoint.',
        readOnly: true,
      }),
    readEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'.",
        readOnly: true,
      }),
    readEndpointPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'.",
        readOnly: true,
      }),
    readReplicasMode: z
      .enum(['READ_REPLICAS_MODE_UNSPECIFIED', 'READ_REPLICAS_DISABLED', 'READ_REPLICAS_ENABLED'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.',
      }),
    redisConfigs: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries',
      }),
    redisVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility',
      }),
    replicaCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.',
      }),
    reservedIpRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.',
      }),
    secondaryIpRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".',
      }),
    serverCaCerts: z
      .array(TlsCertificateSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. List of server CA certificates for the instance.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATING',
        'READY',
        'UPDATING',
        'DELETING',
        'REPAIRING',
        'MAINTENANCE',
        'IMPORTING',
        'FAILING_OVER',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of this instance.', readOnly: true }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information about the current status of this instance, if available.',
        readOnly: true,
      }),
    suspensionReasons: z
      .array(z.enum(['SUSPENSION_REASON_UNSPECIFIED', 'CUSTOMER_MANAGED_KEY_ISSUE']))
      .exactOptional()
      .openapi({ description: 'Optional. reasons that causes instance in "SUSPENDED" state.' }),
    tier: z
      .enum(['TIER_UNSPECIFIED', 'BASIC', 'STANDARD_HA'])
      .exactOptional()
      .openapi({ description: 'Required. The service tier of the instance.' }),
    transitEncryptionMode: z
      .enum(['TRANSIT_ENCRYPTION_MODE_UNSPECIFIED', 'SERVER_AUTHENTICATION', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.',
      }),
  })
  .openapi({ description: 'A Memorystore for Redis instance.', required: [] })
  .openapi('Instance')

const InstanceAuthStringSchema = z
  .object({
    authString: z
      .string()
      .exactOptional()
      .openapi({ description: 'AUTH string set on the instance.' }),
  })
  .openapi({ description: 'Instance AUTH string details.', required: [] })
  .openapi('InstanceAuthString')

const ListInstancesResponseSchema = z
  .object({
    instances: z
      .array(InstanceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Redis instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the `name` field set to a value of the form `projects/{project_id}/locations/{location_id}/instances/`- and the `status` field set to ERROR and `status_message` field set to "location not available for ListInstances".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for ListInstances.', required: [] })
  .openapi('ListInstancesResponse')

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
      .openapi({ description: 'Resource ID for the region. For example: "us-east1".' }),
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
          'Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full resource name for the region. For example: "projects/example-project/locations/us-east1".',
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
          '{ `createTime`: The time the operation was created. `endTime`: The time the operation finished running. `target`: Server-defined resource path for the target of the operation. `verb`: Name of the verb executed by the operation. `statusDetail`: Human-readable status of the operation, if any. `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. `apiVersion`: API version used to start the operation. }',
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

const ReconciliationOperationMetadataSchema = z
  .object({
    deleteResource: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'DEPRECATED. Use exclusive_action instead.' }),
    exclusiveAction: z
      .enum(['UNKNOWN_REPAIR_ACTION', 'DELETE', 'RETRY'])
      .exactOptional()
      .openapi({ description: 'Excluisive action returned by the CLH.' }),
  })
  .openapi({
    description: 'Operation metadata returned by the CLH during resource state reconciliation.',
    required: [],
  })
  .openapi('ReconciliationOperationMetadata')

const RescheduleMaintenanceRequestSchema = z
  .object({
    rescheduleType: z
      .enum(['RESCHEDULE_TYPE_UNSPECIFIED', 'IMMEDIATE', 'NEXT_AVAILABLE_WINDOW', 'SPECIFIC_TIME'])
      .exactOptional()
      .openapi({
        description:
          'Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.',
      }),
    scheduleTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.',
      }),
  })
  .openapi({ description: 'Request for RescheduleMaintenance.', required: [] })
  .openapi('RescheduleMaintenanceRequest')

const UpgradeInstanceRequestSchema = z
  .object({
    redisVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Specifies the target version of Redis software to upgrade to.',
      }),
  })
  .openapi({ description: 'Request for UpgradeInstance.', required: [] })
  .openapi('UpgradeInstanceRequest')

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
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'redis.projects.locations.operations.get',
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

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'redis.projects.locations.operations.delete',
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

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.',
  operationId: 'redis.projects.locations.instances.patch',
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
              'Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance: * `displayName` * `labels` * `memorySizeGb` * `redisConfig` * `replica_count`',
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
              'Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstanceSchema } } },
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

export const getV1NameAuthStringRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/authString',
  tags: ['projects'],
  description:
    'Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.',
  operationId: 'redis.projects.locations.instances.getAuthString',
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
              'Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.',
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
      content: { 'application/json': { schema: InstanceAuthStringSchema } },
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
  operationId: 'redis.projects.locations.list',
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
  operationId: 'redis.projects.locations.operations.list',
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
  operationId: 'redis.projects.locations.operations.cancel',
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

export const postV1NameExportRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:export',
  tags: ['projects'],
  description:
    'Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.',
  operationId: 'redis.projects.locations.instances.export',
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
              'Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportInstanceRequestSchema } } },
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

export const postV1NameFailoverRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:failover',
  tags: ['projects'],
  description:
    'Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.',
  operationId: 'redis.projects.locations.instances.failover',
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
              'Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FailoverInstanceRequestSchema } } },
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

export const postV1NameImportRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:import',
  tags: ['projects'],
  description:
    'Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.',
  operationId: 'redis.projects.locations.instances.import',
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
              'Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportInstanceRequestSchema } } },
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

export const postV1NameRescheduleMaintenanceRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:rescheduleMaintenance',
  tags: ['projects'],
  description: 'Reschedule maintenance for a given instance in a given project and location.',
  operationId: 'redis.projects.locations.instances.rescheduleMaintenance',
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
              'Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RescheduleMaintenanceRequestSchema } } },
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

export const postV1NameUpgradeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:upgrade',
  tags: ['projects'],
  description: 'Upgrades Redis instance to the newer Redis version specified in the request.',
  operationId: 'redis.projects.locations.instances.upgrade',
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
              'Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpgradeInstanceRequestSchema } } },
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

export const getV1ParentInstancesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/instances',
  tags: ['projects'],
  description:
    'Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.',
  operationId: 'redis.projects.locations.instances.list',
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
              "The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.",
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
              'The `next_page_token` value returned from a previous ListInstances request, if any.',
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
              'Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.',
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
      content: { 'application/json': { schema: ListInstancesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentInstancesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/instances',
  tags: ['projects'],
  description:
    "Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.",
  operationId: 'redis.projects.locations.instances.create',
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
      instanceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The logical name of the Redis instance in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location',
            in: 'query',
            name: 'instanceId',
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
              'Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstanceSchema } } },
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
