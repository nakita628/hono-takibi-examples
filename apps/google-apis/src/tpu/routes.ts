import { createRoute, z } from '@hono/zod-openapi'

const AcceleratorConfigSchema = z
  .object({
    topology: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Topology of TPU in chips.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'V2', 'V3', 'V4'])
      .exactOptional()
      .openapi({ description: 'Required. Type of TPU.' }),
  })
  .openapi({ description: 'A TPU accelerator configuration.', required: [] })
  .openapi('AcceleratorConfig')

const AcceleratorTypeSchema = z
  .object({
    acceleratorConfigs: z
      .array(AcceleratorConfigSchema)
      .exactOptional()
      .openapi({ description: 'The accelerator config.' }),
    name: z.string().exactOptional().openapi({ description: 'The resource name.' }),
    type: z.string().exactOptional().openapi({ description: 'the accelerator type.' }),
  })
  .openapi({ description: 'A accelerator type that a Node can be configured with.', required: [] })
  .openapi('AcceleratorType')

const AccessConfigSchema = z
  .object({
    externalIp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. An external IP address associated with the TPU worker.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An access config attached to the TPU worker.', required: [] })
  .openapi('AccessConfig')

const AttachedDiskSchema = z
  .object({
    mode: z
      .enum(['DISK_MODE_UNSPECIFIED', 'READ_WRITE', 'READ_ONLY'])
      .exactOptional()
      .openapi({
        description:
          'The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks.',
      }),
    sourceDisk: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk".',
      }),
  })
  .openapi({ description: 'A node-attached disk resource. Next ID: 8;', required: [] })
  .openapi('AttachedDisk')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GenerateServiceIdentityRequestSchema = z
  .object({})
  .openapi({ description: 'Request for GenerateServiceIdentity.' })
  .openapi('GenerateServiceIdentityRequest')

const ServiceIdentitySchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the service identity.' }),
  })
  .openapi({
    description: 'The per-product per-project service identity for Cloud TPU service.',
    required: [],
  })
  .openapi('ServiceIdentity')

const GenerateServiceIdentityResponseSchema = z
  .object({
    identity: ServiceIdentitySchema.exactOptional().openapi({
      description: 'ServiceIdentity that was created or retrieved.',
    }),
  })
  .openapi({ description: 'Response for GenerateServiceIdentity.', required: [] })
  .openapi('GenerateServiceIdentityResponse')

const GetGuestAttributesRequestSchema = z
  .object({
    queryPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The guest attributes path to be queried.' }),
    workerIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The 0-based worker ID. If it is empty, all workers' GuestAttributes will be returned.",
      }),
  })
  .openapi({ description: 'Request for GetGuestAttributes.', required: [] })
  .openapi('GetGuestAttributesRequest')

const GuestAttributesEntrySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key for the guest attribute entry.' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace for the guest attribute entry.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value for the guest attribute entry.' }),
  })
  .openapi({ description: 'A guest attributes namespace/key/value entry.', required: [] })
  .openapi('GuestAttributesEntry')

const GuestAttributesValueSchema = z
  .object({
    items: z
      .array(GuestAttributesEntrySchema)
      .exactOptional()
      .openapi({ description: 'The list of guest attributes entries.' }),
  })
  .openapi({ description: 'Array of guest attribute namespace/key/value tuples.', required: [] })
  .openapi('GuestAttributesValue')

const GuestAttributesSchema = z
  .object({
    queryPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\\/') or a specified key ('/\\/\\')",
      }),
    queryValue: GuestAttributesValueSchema.exactOptional().openapi({
      description: 'The value of the requested queried path.',
    }),
  })
  .openapi({ description: 'A guest attributes.', required: [] })
  .openapi('GuestAttributes')

const GetGuestAttributesResponseSchema = z
  .object({
    guestAttributes: z
      .array(GuestAttributesSchema)
      .exactOptional()
      .openapi({ description: 'The guest attributes for the TPU workers.' }),
  })
  .openapi({ description: 'Response for GetGuestAttributes.', required: [] })
  .openapi('GetGuestAttributesResponse')

const ListAcceleratorTypesResponseSchema = z
  .object({
    acceleratorTypes: z
      .array(AcceleratorTypeSchema)
      .exactOptional()
      .openapi({ description: 'The listed nodes.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The next page token or empty if none.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for ListAcceleratorTypes.', required: [] })
  .openapi('ListAcceleratorTypesResponse')

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

const NetworkConfigSchema = z
  .object({
    canIpForward: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes.',
      }),
    enableExternalIps: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used.',
      }),
  })
  .openapi({ description: 'Network related configurations.', required: [] })
  .openapi('NetworkConfig')

const NetworkEndpointSchema = z
  .object({
    accessConfig: AccessConfigSchema.exactOptional().openapi({
      description: 'The access config for the TPU worker.',
    }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The internal IP address of this network endpoint.' }),
    port: z.int32().exactOptional().openapi({ description: 'The port of this network endpoint.' }),
  })
  .openapi({
    description: 'A network endpoint over which a TPU worker can be reached.',
    required: [],
  })
  .openapi('NetworkEndpoint')

const SchedulingConfigSchema = z
  .object({
    preemptible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines whether the node is preemptible.' }),
    reserved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the node is created under a reservation.' }),
  })
  .openapi({ description: 'Sets the scheduling options for this node.', required: [] })
  .openapi('SchedulingConfig')

const ServiceAccountSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the service account. If empty, default Compute service account will be used.',
      }),
    scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of scopes to be made available for this service account. If empty, access to all Cloud APIs will be allowed.',
      }),
  })
  .openapi({ description: 'A service account.', required: [] })
  .openapi('ServiceAccount')

const ShieldedInstanceConfigSchema = z
  .object({
    enableSecureBoot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines whether the instance has Secure Boot enabled.' }),
  })
  .openapi({ description: 'A set of Shielded Instance options.', required: [] })
  .openapi('ShieldedInstanceConfig')

const SymptomSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when the Symptom is created.' }),
    details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed information of the current Symptom.' }),
    symptomType: z
      .enum([
        'SYMPTOM_TYPE_UNSPECIFIED',
        'LOW_MEMORY',
        'OUT_OF_MEMORY',
        'EXECUTE_TIMED_OUT',
        'MESH_BUILD_FAIL',
        'HBM_OUT_OF_MEMORY',
        'PROJECT_ABUSE',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the Symptom.' }),
    workerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string used to uniquely distinguish a worker within a TPU node.',
      }),
  })
  .openapi({ description: 'A Symptom instance.', required: [] })
  .openapi('Symptom')

const NodeSchema = z
  .object({
    acceleratorConfig: AcceleratorConfigSchema.exactOptional().openapi({
      description: 'The AccleratorConfig for the TPU Node.',
    }),
    acceleratorType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The type of hardware accelerators associated with this node.',
      }),
    apiVersion: z
      .enum(['API_VERSION_UNSPECIFIED', 'V1_ALPHA1', 'V1', 'V2_ALPHA1', 'V2'])
      .exactOptional()
      .openapi({
        description: 'Output only. The API version that created this Node.',
        readOnly: true,
      }),
    cidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.",
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the node was created.', readOnly: true }),
    dataDisks: z
      .array(AttachedDiskSchema)
      .exactOptional()
      .openapi({ description: 'The additional data disks for the Node.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user-supplied description of the TPU. Maximum of 512 characters.',
      }),
    health: z
      .enum([
        'HEALTH_UNSPECIFIED',
        'HEALTHY',
        'TIMEOUT',
        'UNHEALTHY_TENSORFLOW',
        'UNHEALTHY_MAINTENANCE',
      ])
      .exactOptional()
      .openapi({ description: 'The health status of the TPU node.' }),
    healthDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique identifier for the TPU Node.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Resource labels to represent user-provided metadata.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Immutable. The name of the TPU.', readOnly: true }),
    networkConfig: NetworkConfigSchema.exactOptional().openapi({
      description: 'Network configurations for the TPU node.',
    }),
    networkEndpoints: z
      .array(NetworkEndpointSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first.',
        readOnly: true,
      }),
    runtimeVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The runtime version running in the Node.' }),
    schedulingConfig: SchedulingConfigSchema.exactOptional().openapi({
      description: 'The scheduling options for this node.',
    }),
    serviceAccount: ServiceAccountSchema.exactOptional().openapi({
      description:
        'The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used.',
    }),
    shieldedInstanceConfig: ShieldedInstanceConfigSchema.exactOptional().openapi({
      description: 'Shielded Instance options.',
    }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATING',
        'READY',
        'RESTARTING',
        'REIMAGING',
        'DELETING',
        'REPAIRING',
        'STOPPED',
        'STOPPING',
        'STARTING',
        'PREEMPTED',
        'TERMINATED',
        'HIDING',
        'HIDDEN',
        'UNHIDING',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The current state for the TPU Node.', readOnly: true }),
    symptoms: z
      .array(SymptomSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The Symptoms that have occurred to the TPU Node.',
        readOnly: true,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.',
      }),
  })
  .openapi({ description: 'A TPU instance.', required: [] })
  .openapi('Node')

const ListNodesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The next page token or empty if none.' }),
    nodes: z.array(NodeSchema).exactOptional().openapi({ description: 'The listed nodes.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for ListNodes.', required: [] })
  .openapi('ListNodesResponse')

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

const RuntimeVersionSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The resource name.' }),
    version: z.string().exactOptional().openapi({ description: 'The runtime version.' }),
  })
  .openapi({ description: 'A runtime version that a Node can be configured with.', required: [] })
  .openapi('RuntimeVersion')

const ListRuntimeVersionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The next page token or empty if none.' }),
    runtimeVersions: z
      .array(RuntimeVersionSchema)
      .exactOptional()
      .openapi({ description: 'The listed nodes.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for ListRuntimeVersions.', required: [] })
  .openapi('ListRuntimeVersionsResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z.string().exactOptional().openapi({ description: 'API version.' }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if cancellation was requested for the operation.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable status of the operation, if any.' }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target of the operation - for example projects/project-1/connectivityTests/test-1',
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({ description: 'Metadata describing an Operation', required: [] })
  .openapi('OperationMetadata')

const StartNodeRequestSchema = z
  .object({})
  .openapi({ description: 'Request for StartNode.' })
  .openapi('StartNodeRequest')

const StopNodeRequestSchema = z
  .object({})
  .openapi({ description: 'Request for StopNode.' })
  .openapi('StopNodeRequest')

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

export const getV2NameRoute = createRoute({
  method: 'get',
  path: '/v2/{name}',
  tags: ['projects'],
  description: 'Gets a runtime version.',
  operationId: 'tpu.projects.locations.runtimeVersions.get',
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
            description: 'Required. The resource name.',
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
      content: { 'application/json': { schema: RuntimeVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV2NameRoute = createRoute({
  method: 'delete',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'tpu.projects.locations.operations.delete',
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

export const patchV2NameRoute = createRoute({
  method: 'patch',
  path: '/v2/{name}',
  tags: ['projects'],
  description: 'Updates the configurations of a node.',
  operationId: 'tpu.projects.locations.nodes.patch',
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
              'Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips].',
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
            description: 'Output only. Immutable. The name of the TPU.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NodeSchema } } },
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

export const getV2NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v2/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'tpu.projects.locations.list',
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

export const getV2NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v2/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'tpu.projects.locations.operations.list',
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

export const postV2NameCancelRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'tpu.projects.locations.operations.cancel',
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

export const postV2NameGetGuestAttributesRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:getGuestAttributes',
  tags: ['projects'],
  description: 'Retrieves the guest attributes for the node.',
  operationId: 'tpu.projects.locations.nodes.getGuestAttributes',
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
            description: 'Required. The resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetGuestAttributesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetGuestAttributesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameStartRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:start',
  tags: ['projects'],
  description: 'Starts a node.',
  operationId: 'tpu.projects.locations.nodes.start',
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
            description: 'Required. The resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartNodeRequestSchema } } },
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

export const postV2NameStopRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:stop',
  tags: ['projects'],
  description: 'Stops a node. This operation is only available with single TPU nodes.',
  operationId: 'tpu.projects.locations.nodes.stop',
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
            description: 'Required. The resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopNodeRequestSchema } } },
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

export const getV2ParentAcceleratorTypesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/acceleratorTypes',
  tags: ['projects'],
  description: 'Lists accelerator types supported by this API.',
  operationId: 'tpu.projects.locations.acceleratorTypes.list',
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
            description: 'List filter.',
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
            description: 'Sort results.',
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
            description: 'The maximum number of items to return.',
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
            description: 'The next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. The parent resource name.',
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
      content: { 'application/json': { schema: ListAcceleratorTypesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentNodesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/nodes',
  tags: ['projects'],
  description: 'Lists nodes.',
  operationId: 'tpu.projects.locations.nodes.list',
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
            description: 'The maximum number of items to return.',
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
            description: 'The next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. The parent resource name.',
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
      content: { 'application/json': { schema: ListNodesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentNodesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/nodes',
  tags: ['projects'],
  description: 'Creates a node.',
  operationId: 'tpu.projects.locations.nodes.create',
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
      nodeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unqualified resource name.',
            in: 'query',
            name: 'nodeId',
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
            description: 'Required. The parent resource name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NodeSchema } } },
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

export const getV2ParentRuntimeVersionsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/runtimeVersions',
  tags: ['projects'],
  description: 'Lists runtime versions supported by this API.',
  operationId: 'tpu.projects.locations.runtimeVersions.list',
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
            description: 'List filter.',
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
            description: 'Sort results.',
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
            description: 'The maximum number of items to return.',
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
            description: 'The next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. The parent resource name.',
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
      content: { 'application/json': { schema: ListRuntimeVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentGenerateServiceIdentityRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}:generateServiceIdentity',
  tags: ['projects'],
  description: 'Generates the Cloud TPU service identity for the project.',
  operationId: 'tpu.projects.locations.generateServiceIdentity',
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
            description: 'Required. The parent resource name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateServiceIdentityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateServiceIdentityResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
