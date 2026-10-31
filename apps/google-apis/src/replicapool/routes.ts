import { createRoute, z } from '@hono/zod-openapi'

const AccessConfigSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of this access configuration.' }),
    natIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'An external IP address associated with this instance.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported.',
      }),
  })
  .openapi({
    description:
      'A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.',
    required: [],
  })
  .openapi('AccessConfig')

const EnvVariableSchema = z
  .object({
    hidden: z.boolean().exactOptional().openapi({ description: 'Deprecated, do not use.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the environment variable.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the variable.' }),
  })
  .openapi({ description: 'An environment variable to set for an action.', required: [] })
  .openapi('EnvVariable')

const ActionSchema = z
  .object({
    commands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure.',
      }),
    envVariables: z
      .array(EnvVariableSchema)
      .exactOptional()
      .openapi({
        description: 'A list of environment variables to use for the commands in this action.',
      }),
    timeoutMilliSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds).",
      }),
  })
  .openapi({
    description: 'An action that gets executed during initialization of the replicas.',
    required: [],
  })
  .openapi('Action')

const DiskAttachmentSchema = z
  .object({
    deviceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The device name of this disk.' }),
    index: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.',
      }),
  })
  .openapi({ description: 'Specifies how to attach a disk to a Replica.', required: [] })
  .openapi('DiskAttachment')

const ExistingDiskSchema = z
  .object({
    attachment: DiskAttachmentSchema.exactOptional().openapi({
      description: 'How the disk will be attached to the Replica.',
    }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool.',
      }),
  })
  .openapi({
    description:
      'A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.',
    required: [],
  })
  .openapi('ExistingDisk')

const HealthCheckSchema = z
  .object({
    checkIntervalSec: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description for this health check.' }),
    healthyThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2.',
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of this health check.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck.',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The TCP port for the health check requests.' }),
    timeoutSec: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds.',
      }),
    unhealthyThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2.',
      }),
  })
  .openapi({ required: [] })
  .openapi('HealthCheck')

const LabelSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'The key for this label.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of this label.' }),
  })
  .openapi({ description: 'A label to apply to this replica pool.', required: [] })
  .openapi('Label')

const MetadataItemSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'A metadata key.' }),
    value: z.string().exactOptional().openapi({ description: 'A metadata value.' }),
  })
  .openapi({
    description:
      'A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.',
    required: [],
  })
  .openapi('MetadataItem')

const MetadataSchema = z
  .object({
    fingerPrint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the metadata. Required for updating the metadata entries for this instance.',
      }),
    items: z
      .array(MetadataItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of metadata items.' }),
  })
  .openapi({
    description:
      'A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.',
    required: [],
  })
  .openapi('Metadata')

const NetworkInterfaceSchema = z
  .object({
    accessConfigs: z
      .array(AccessConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of configurations for this interface. This specifies how this interface is configured to interact with other network services.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name the Network resource to which this interface applies.' }),
    networkIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional IPV4 internal network address to assign to the instance for this network interface.',
      }),
  })
  .openapi({
    description:
      'A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.',
    required: [],
  })
  .openapi('NetworkInterface')

const NewDiskInitializeParamsSchema = z
  .object({
    diskSizeGb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of the created disk in gigabytes.' }),
    diskType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard'",
      }),
    sourceImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:\nhttp://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD',
      }),
  })
  .openapi({ description: 'Initialization parameters for creating a new disk.', required: [] })
  .openapi('NewDiskInitializeParams')

const NewDiskSchema = z
  .object({
    attachment: DiskAttachmentSchema.exactOptional().openapi({
      description: 'How the disk will be attached to the Replica.',
    }),
    autoDelete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, then this disk will be deleted when the instance is deleted. The default value is true.',
      }),
    boot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, indicates that this is the root persistent disk.' }),
    initializeParams: NewDiskInitializeParamsSchema.exactOptional().openapi({
      description:
        'Create the new disk using these parameters. The name of the disk will be <instance_name>-<four_random_charactersgt;.',
    }),
  })
  .openapi({
    description:
      'A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.',
    required: [],
  })
  .openapi('NewDisk')

const ServiceAccountSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service account email address, for example: 123845678986@project.gserviceaccount.com',
      }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control',
      }),
  })
  .openapi({
    description: 'A Compute Engine service account, identical to the Compute Engine resource.',
    required: [],
  })
  .openapi('ServiceAccount')

const TagSchema = z
  .object({
    fingerPrint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The fingerprint of the tag. Required for updating the list of tags.',
      }),
    items: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Items contained in this tag.' }),
  })
  .openapi({
    description:
      'A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.',
    required: [],
  })
  .openapi('Tag')

const VmParamsSchema = z
  .object({
    baseInstanceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use baseInstanceName instead.' }),
    canIpForward: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional textual description of the instance.' }),
    disksToAttach: z
      .array(ExistingDiskSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.',
      }),
    disksToCreate: z
      .array(NewDiskSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The machine type for this instance. The resource name (e.g. n1-standard-1).',
      }),
    metadata: MetadataSchema.exactOptional().openapi({
      description: 'The metadata key/value pairs assigned to this instance.',
    }),
    networkInterfaces: z
      .array(NetworkInterfaceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT.',
      }),
    onHostMaintenance: z.string().exactOptional(),
    serviceAccounts: z
      .array(ServiceAccountSchema)
      .exactOptional()
      .openapi({ description: 'A list of Service Accounts to enable for this instance.' }),
    tags: TagSchema.exactOptional().openapi({
      description:
        'A list of tags to apply to the Google Compute Engine instance to identify resources.',
    }),
  })
  .openapi({
    description:
      'Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.',
    required: [],
  })
  .openapi('VmParams')

const TemplateSchema = z
  .object({
    action: ActionSchema.exactOptional().openapi({
      description:
        'An action to run during initialization of your replicas. An action is run as shell commands which are executed one after the other in the same bash shell, so any state established by one command is inherited by later commands.',
    }),
    healthChecks: z
      .array(HealthCheckSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.',
      }),
    vmParams: VmParamsSchema.exactOptional().openapi({
      description:
        'The virtual machine parameters to use for creating replicas. You can define settings such as the machine type and the image of replicas in this pool. This is required if replica type is SMART_VM.',
    }),
  })
  .openapi({ description: 'The template used for creating replicas in the pool.', required: [] })
  .openapi('Template')

const PoolSchema = z
  .object({
    autoRestart: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether replicas in this pool should be restarted if they experience a failure. The default value is true.',
      }),
    baseInstanceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.\n\nIf this is not specified by the user, a random base instance name is generated by the service.',
      }),
    currentNumReplicas: z
      .int32()
      .exactOptional()
      .openapi({ description: '[Output Only] The current number of replicas in the pool.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the replica pool.' }),
    healthChecks: z
      .array(HealthCheckSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use template[].healthChecks instead.' }),
    initialNumReplicas: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The initial number of replicas this pool should have. You must provide a value greater than or equal to 0.',
      }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of labels to attach to this replica pool and all created virtual machines in this replica pool.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.',
      }),
    numReplicas: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Deprecated! Use initial_num_replicas instead.' }),
    resourceViews: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of resource views that should be updated with all the replicas that are managed by this pool.',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output Only] A self-link to the replica pool.' }),
    targetPool: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated, please use target_pools instead.' }),
    targetPools: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs.',
      }),
    template: TemplateSchema.exactOptional().openapi({
      description:
        'The template to use when creating replicas in this pool. This template is used during initial instance creation of the pool, when growing the pool in size, or when a replica restarts.',
    }),
    type: z.string().exactOptional().openapi({ description: 'Deprecated! Do not set.' }),
  })
  .openapi({ required: [] })
  .openapi('Pool')

const PoolsDeleteRequestSchema = z
  .object({
    abandonInstances: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed.",
      }),
  })
  .openapi({ required: [] })
  .openapi('PoolsDeleteRequest')

const PoolsListResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional(),
    resources: z.array(PoolSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PoolsListResponse')

const ReplicaStatusSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description: '[Output Only] Human-readable details about the current state of the replica',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output Only] The state of the Replica.' }),
    templateVersion: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output Only] The template used to build the replica.' }),
    vmLink: z
      .string()
      .exactOptional()
      .openapi({
        description: '[Output Only] Link to the virtual machine that this Replica represents.',
      }),
    vmStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned.',
      }),
  })
  .openapi({ description: 'The current status of a Replica.', required: [] })
  .openapi('ReplicaStatus')

const ReplicaSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output Only] The name of the Replica object.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output Only] The self-link of the Replica.' }),
    status: ReplicaStatusSchema.exactOptional().openapi({
      description: '[Output Only] Last known status of the Replica.',
    }),
  })
  .openapi({
    description:
      'An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.',
    required: [],
  })
  .openapi('Replica')

const ReplicasDeleteRequestSchema = z
  .object({
    abandonInstance: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReplicasDeleteRequest')

const ReplicasListResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional(),
    resources: z.array(ReplicaSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReplicasListResponse')

const AltParamsSchema = z
  .literal('json')
  .default('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { default: 'json', enum: ['json'], type: 'string' },
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
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { default: true, type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
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
          'View and manage your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/ndev.cloudman':
          'View and manage your Google Cloud Platform management resources and deployment status information',
        'https://www.googleapis.com/auth/ndev.cloudman.readonly':
          'View your Google Cloud Platform management resources and deployment status information',
        'https://www.googleapis.com/auth/replicapool': 'View and manage replica pools',
        'https://www.googleapis.com/auth/replicapool.readonly': 'View replica pools',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 accessCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'View and manage your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/ndev.cloudman':
          'View and manage your Google Cloud Platform management resources and deployment status information',
        'https://www.googleapis.com/auth/ndev.cloudman.readonly':
          'View your Google Cloud Platform management resources and deployment status information',
        'https://www.googleapis.com/auth/replicapool': 'View and manage replica pools',
        'https://www.googleapis.com/auth/replicapool.readonly': 'View replica pools',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getProjectNameZonesZonePoolsRoute = createRoute({
  method: 'get',
  path: '/{projectName}/zones/{zone}/pools',
  tags: ['pools'],
  description: 'List all replica pools.',
  operationId: 'replicapool.pools.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)',
            in: 'query',
            name: 'maxResults',
            schema: { default: 500, maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone for this replica pool.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: PoolsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool.readonly'],
    },
  ],
})

export const postProjectNameZonesZonePoolsRoute = createRoute({
  method: 'post',
  path: '/{projectName}/zones/{zone}/pools',
  tags: ['pools'],
  description: 'Inserts a new replica pool.',
  operationId: 'replicapool.pools.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this replica pool.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone for this replica pool.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PoolSchema } } },
  },
  responses: {
    200: { description: 'Successful response', content: { '*/*': { schema: PoolSchema } } },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
  ],
})

export const getProjectNameZonesZonePoolsPoolNameRoute = createRoute({
  method: 'get',
  path: '/{projectName}/zones/{zone}/pools/{poolName}',
  tags: ['pools'],
  description: 'Gets information about a single replica pool.',
  operationId: 'replicapool.pools.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this replica pool.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone for this replica pool.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the replica pool for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response', content: { '*/*': { schema: PoolSchema } } },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool.readonly'],
    },
  ],
})

export const postProjectNameZonesZonePoolsPoolNameRoute = createRoute({
  method: 'post',
  path: '/{projectName}/zones/{zone}/pools/{poolName}',
  tags: ['pools'],
  description: 'Deletes a replica pool.',
  operationId: 'replicapool.pools.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this replica pool.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone for this replica pool.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the replica pool for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PoolsDeleteRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
  ],
})

export const getProjectNameZonesZonePoolsPoolNameReplicasRoute = createRoute({
  method: 'get',
  path: '/{projectName}/zones/{zone}/pools/{poolName}/replicas',
  tags: ['replicas'],
  description: 'Lists all replicas in a pool.',
  operationId: 'replicapool.replicas.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)',
            in: 'query',
            name: 'maxResults',
            schema: { default: 500, maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone where the replica pool lives.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The replica pool name for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: ReplicasListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool.readonly'],
    },
  ],
})

export const getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute = createRoute({
  method: 'get',
  path: '/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}',
  tags: ['replicas'],
  description: 'Gets information about a specific replica.',
  operationId: 'replicapool.replicas.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone where the replica lives.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The replica pool name for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      replicaName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the replica for this request.',
            in: 'path',
            name: 'replicaName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response', content: { '*/*': { schema: ReplicaSchema } } },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool.readonly'],
    },
  ],
})

export const postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute = createRoute({
  method: 'post',
  path: '/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}',
  tags: ['replicas'],
  description: 'Deletes a replica from the pool.',
  operationId: 'replicapool.replicas.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone where the replica lives.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The replica pool name for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      replicaName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the replica for this request.',
            in: 'path',
            name: 'replicaName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReplicasDeleteRequestSchema } } },
  },
  responses: {
    200: { description: 'Successful response', content: { '*/*': { schema: ReplicaSchema } } },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
  ],
})

export const postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRoute = createRoute({
  method: 'post',
  path: '/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart',
  tags: ['replicas'],
  description: 'Restarts a replica in a pool.',
  operationId: 'replicapool.replicas.restart',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone where the replica lives.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The replica pool name for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      replicaName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the replica for this request.',
            in: 'path',
            name: 'replicaName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response', content: { '*/*': { schema: ReplicaSchema } } },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
  ],
})

export const postProjectNameZonesZonePoolsPoolNameResizeRoute = createRoute({
  method: 'post',
  path: '/{projectName}/zones/{zone}/pools/{poolName}/resize',
  tags: ['pools'],
  description:
    'Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.',
  operationId: 'replicapool.pools.resize',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      numReplicas: z
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
              'The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.',
            in: 'query',
            name: 'numReplicas',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this replica pool.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone for this replica pool.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the replica pool for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response', content: { '*/*': { schema: PoolSchema } } },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
  ],
})

export const postProjectNameZonesZonePoolsPoolNameUpdateTemplateRoute = createRoute({
  method: 'post',
  path: '/{projectName}/zones/{zone}/pools/{poolName}/updateTemplate',
  tags: ['pools'],
  description: 'Update the template used by the pool.',
  operationId: 'replicapool.pools.updatetemplate',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this replica pool.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description: 'The zone for this replica pool.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the replica pool for this request.',
            in: 'path',
            name: 'poolName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TemplateSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/replicapool'],
      Oauth2c: ['https://www.googleapis.com/auth/replicapool'],
    },
  ],
})
