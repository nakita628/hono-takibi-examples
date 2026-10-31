import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudRunV2BinaryAuthorizationSchema = z
  .object({
    breakglassJustification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, indicates to use Breakglass using this justification. If use_default is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass',
      }),
    useDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.",
      }),
  })
  .openapi({ description: 'Settings for Binary Authorization feature.', required: [] })
  .openapi('GoogleCloudRunV2BinaryAuthorization')

const GoogleCloudRunV2CancelExecutionRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the request should be validated without actually cancelling any resources.',
      }),
  })
  .openapi({ description: 'Request message for deleting an Execution.', required: [] })
  .openapi('GoogleCloudRunV2CancelExecutionRequest')

const GoogleCloudRunV2CloudSqlInstanceSchema = z
  .object({
    instances: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}',
      }),
  })
  .openapi({
    description:
      'Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.',
    required: [],
  })
  .openapi('GoogleCloudRunV2CloudSqlInstance')

const GoogleCloudRunV2ConditionSchema = z
  .object({
    executionReason: z
      .enum([
        'EXECUTION_REASON_UNDEFINED',
        'JOB_STATUS_SERVICE_POLLING_ERROR',
        'NON_ZERO_EXIT_CODE',
        'CANCELLED',
        'CANCELLING',
        'DELETED',
      ])
      .exactOptional()
      .openapi({ description: 'A reason for the execution condition.' }),
    lastTransitionTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last time the condition transitioned from one status to another.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable message indicating details about the current status.',
      }),
    reason: z
      .enum([
        'COMMON_REASON_UNDEFINED',
        'UNKNOWN',
        'REVISION_FAILED',
        'PROGRESS_DEADLINE_EXCEEDED',
        'CONTAINER_MISSING',
        'CONTAINER_PERMISSION_DENIED',
        'CONTAINER_IMAGE_UNAUTHORIZED',
        'CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED',
        'ENCRYPTION_KEY_PERMISSION_DENIED',
        'ENCRYPTION_KEY_CHECK_FAILED',
        'SECRETS_ACCESS_CHECK_FAILED',
        'WAITING_FOR_OPERATION',
        'IMMEDIATE_RETRY',
        'POSTPONED_RETRY',
        'INTERNAL',
      ])
      .exactOptional()
      .openapi({ description: 'A common (service-level) reason for this condition.' }),
    revisionReason: z
      .enum([
        'REVISION_REASON_UNDEFINED',
        'PENDING',
        'RESERVE',
        'RETIRED',
        'RETIRING',
        'RECREATING',
        'HEALTH_CHECK_CONTAINER_ERROR',
        'CUSTOMIZED_PATH_RESPONSE_PENDING',
        'MIN_INSTANCES_NOT_PROVISIONED',
        'ACTIVE_REVISION_LIMIT_REACHED',
        'NO_DEPLOYMENT',
        'HEALTH_CHECK_SKIPPED',
        'MIN_INSTANCES_WARMING',
      ])
      .exactOptional()
      .openapi({ description: 'A reason for the revision condition.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'ERROR', 'WARNING', 'INFO'])
      .exactOptional()
      .openapi({
        description: 'How to interpret failures of this condition, one of Error, Warning, Info',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CONDITION_PENDING',
        'CONDITION_RECONCILING',
        'CONDITION_FAILED',
        'CONDITION_SUCCEEDED',
      ])
      .exactOptional()
      .openapi({ description: 'State of the condition.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.',
      }),
  })
  .openapi({ description: 'Defines a status condition for a resource.', required: [] })
  .openapi('GoogleCloudRunV2Condition')

const GoogleCloudRunV2SecretKeySelectorSchema = z
  .object({
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the secret in Cloud Secret Manager. Format: {secret_name} if the secret is in the same project. projects/{project}/secrets/{secret_name} if the secret is in a different project.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Cloud Secret Manager secret version. Can be 'latest' for the latest version, an integer for a specific version, or a version alias.",
      }),
  })
  .openapi({
    description: 'SecretEnvVarSource represents a source for the value of an EnvVar.',
    required: [],
  })
  .openapi('GoogleCloudRunV2SecretKeySelector')

const GoogleCloudRunV2EnvVarSourceSchema = z
  .object({
    secretKeyRef: GoogleCloudRunV2SecretKeySelectorSchema.exactOptional().openapi({
      description: 'Selects a secret and a specific version from Cloud Secret Manager.',
    }),
  })
  .openapi({
    description: 'EnvVarSource represents a source for the value of an EnvVar.',
    required: [],
  })
  .openapi('GoogleCloudRunV2EnvVarSource')

const GoogleCloudRunV2EnvVarSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the environment variable. Must not exceed 32768 characters.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes.',
      }),
    valueSource: GoogleCloudRunV2EnvVarSourceSchema.exactOptional().openapi({
      description: "Source for the environment variable's value.",
    }),
  })
  .openapi({
    description: 'EnvVar represents an environment variable present in a Container.',
    required: [],
  })
  .openapi('GoogleCloudRunV2EnvVar')

const GoogleCloudRunV2GRPCActionSchema = z
  .object({
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.',
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC.',
      }),
  })
  .openapi({ description: 'GRPCAction describes an action involving a GRPC port.', required: [] })
  .openapi('GoogleCloudRunV2GRPCAction')

const GoogleCloudRunV2HTTPHeaderSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Required. The header field name' }),
    value: z.string().exactOptional().openapi({ description: 'The header field value' }),
  })
  .openapi({
    description: 'HTTPHeader describes a custom header to be used in HTTP probes',
    required: [],
  })
  .openapi('GoogleCloudRunV2HTTPHeader')

const GoogleCloudRunV2HTTPGetActionSchema = z
  .object({
    httpHeaders: z
      .array(GoogleCloudRunV2HTTPHeaderSchema)
      .exactOptional()
      .openapi({
        description: 'Custom headers to set in the request. HTTP allows repeated headers.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "Path to access on the HTTP server. Defaults to '/'." }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.',
      }),
  })
  .openapi({
    description: 'HTTPGetAction describes an action based on HTTP Get requests.',
    required: [],
  })
  .openapi('GoogleCloudRunV2HTTPGetAction')

const GoogleCloudRunV2TCPSocketActionSchema = z
  .object({
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.',
      }),
  })
  .openapi({
    description: 'TCPSocketAction describes an action based on opening a socket',
    required: [],
  })
  .openapi('GoogleCloudRunV2TCPSocketAction')

const GoogleCloudRunV2ProbeSchema = z
  .object({
    failureThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.',
      }),
    grpc: GoogleCloudRunV2GRPCActionSchema.exactOptional().openapi({
      description:
        'GRPC specifies an action involving a gRPC port. Exactly one of httpGet, tcpSocket, or grpc must be specified.',
    }),
    httpGet: GoogleCloudRunV2HTTPGetActionSchema.exactOptional().openapi({
      description:
        'HTTPGet specifies the http request to perform. Exactly one of httpGet, tcpSocket, or grpc must be specified.',
    }),
    initialDelaySeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.',
      }),
    periodSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.',
      }),
    tcpSocket: GoogleCloudRunV2TCPSocketActionSchema.exactOptional().openapi({
      description:
        'TCPSocket specifies an action involving a TCP port. Exactly one of httpGet, tcpSocket, or grpc must be specified.',
    }),
    timeoutSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.',
      }),
  })
  .openapi({
    description:
      'Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Probe')

const GoogleCloudRunV2ContainerPortSchema = z
  .object({
    containerPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Port number the container listens on. This must be a valid TCP port number, 0 < container_port < 65536.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".',
      }),
  })
  .openapi({
    description: 'ContainerPort represents a network port in a single container.',
    required: [],
  })
  .openapi('GoogleCloudRunV2ContainerPort')

const GoogleCloudRunV2ResourceRequirementsSchema = z
  .object({
    cpuIdle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether CPU is only allocated during requests (true by default). However, if ResourceRequirements is set, the caller must explicitly set this field to true to preserve the default behavior.',
      }),
    limits: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Only `memory` and `cpu` keys in the map are supported. Notes: * The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. For more information, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits",
      }),
    startupCpuBoost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.',
      }),
  })
  .openapi({
    description: 'ResourceRequirements describes the compute resource requirements.',
    required: [],
  })
  .openapi('GoogleCloudRunV2ResourceRequirements')

const GoogleCloudRunV2VolumeMountSchema = z
  .object({
    mountPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be `/cloudsql`. All instances defined in the Volume will be available as `/cloudsql/[instance]`. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. This must match the Name of a Volume.' }),
  })
  .openapi({
    description: 'VolumeMount describes a mounting of a Volume within a container.',
    required: [],
  })
  .openapi('GoogleCloudRunV2VolumeMount')

const GoogleCloudRunV2ContainerSchema = z
  .object({
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Arguments to the entrypoint. The docker image's CMD is used if this is not provided.",
      }),
    command: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.",
      }),
    dependsOn: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Names of the containers that must start before this container.' }),
    env: z
      .array(GoogleCloudRunV2EnvVarSchema)
      .exactOptional()
      .openapi({ description: 'List of environment variables to set in the container.' }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed.',
      }),
    livenessProbe: GoogleCloudRunV2ProbeSchema.exactOptional().openapi({
      description:
        'Periodic probe of container liveness. Container will be restarted if the probe fails.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the container specified as a DNS_LABEL (RFC 1123).' }),
    ports: z
      .array(GoogleCloudRunV2ContainerPortSchema)
      .exactOptional()
      .openapi({
        description:
          'List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.',
      }),
    resources: GoogleCloudRunV2ResourceRequirementsSchema.exactOptional().openapi({
      description: 'Compute Resource requirements by this container.',
    }),
    startupProbe: GoogleCloudRunV2ProbeSchema.exactOptional().openapi({
      description:
        'Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails.',
    }),
    volumeMounts: z
      .array(GoogleCloudRunV2VolumeMountSchema)
      .exactOptional()
      .openapi({ description: "Volume to mount into the container's filesystem." }),
    workingDir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.",
      }),
  })
  .openapi({
    description:
      'A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments can be supplied by the system to the container at runtime.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Container')

const GoogleCloudRunV2ContainerOverrideSchema = z
  .object({
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Arguments to the entrypoint. Will replace existing args for override.',
      }),
    clearArgs: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. True if the intention is to clear out existing args list.',
      }),
    env: z
      .array(GoogleCloudRunV2EnvVarSchema)
      .exactOptional()
      .openapi({
        description:
          'List of environment variables to set in the container. Will be merged with existing env for override.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the container specified as a DNS_LABEL.' }),
  })
  .openapi({ description: 'Per-container override specification.', required: [] })
  .openapi('GoogleCloudRunV2ContainerOverride')

const GoogleCloudRunV2EmptyDirVolumeSourceSchema = z
  .object({
    medium: z
      .enum(['MEDIUM_UNSPECIFIED', 'MEMORY'])
      .exactOptional()
      .openapi({
        description:
          'The medium on which the data is stored. Acceptable values today is only MEMORY or none. When none, the default will currently be backed by memory but could change over time. +optional',
      }),
    sizeLimit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir',
      }),
  })
  .openapi({
    description:
      'In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).',
    required: [],
  })
  .openapi('GoogleCloudRunV2EmptyDirVolumeSource')

const GoogleCloudRunV2GCSVolumeSourceSchema = z
  .object({
    bucket: z.string().exactOptional().openapi({ description: 'GCS Bucket name' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, mount the GCS bucket as read-only' }),
  })
  .openapi({ description: 'Represents a GCS Bucket mounted as a volume.', required: [] })
  .openapi('GoogleCloudRunV2GCSVolumeSource')

const GoogleCloudRunV2NFSVolumeSourceSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path that is exported by the NFS server.' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, mount the NFS volume as read only' }),
    server: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hostname or IP address of the NFS server' }),
  })
  .openapi({ description: 'Represents an NFS mount.', required: [] })
  .openapi('GoogleCloudRunV2NFSVolumeSource')

const GoogleCloudRunV2VersionToPathSchema = z
  .object({
    mode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The relative path of the secret in the container.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version.",
      }),
  })
  .openapi({
    description:
      "VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path.",
    required: [],
  })
  .openapi('GoogleCloudRunV2VersionToPath')

const GoogleCloudRunV2SecretVolumeSourceSchema = z
  .object({
    defaultMode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. This might be in conflict with other options that affect the file mode, like fsGroup, and as a result, other mode bits could be set.',
      }),
    items: z
      .array(GoogleCloudRunV2VersionToPathSchema)
      .exactOptional()
      .openapi({
        description:
          'If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.',
      }),
  })
  .openapi({
    description:
      "The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.",
    required: [],
  })
  .openapi('GoogleCloudRunV2SecretVolumeSource')

const GoogleCloudRunV2VolumeSchema = z
  .object({
    cloudSqlInstance: GoogleCloudRunV2CloudSqlInstanceSchema.exactOptional().openapi({
      description:
        'For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.',
    }),
    emptyDir: GoogleCloudRunV2EmptyDirVolumeSourceSchema.exactOptional().openapi({
      description: 'Ephemeral storage used as a shared volume.',
    }),
    gcs: GoogleCloudRunV2GCSVolumeSourceSchema.exactOptional().openapi({
      description: 'Persistent storage backed by a Google Cloud Storage bucket.',
    }),
    name: z.string().exactOptional().openapi({ description: "Required. Volume's name." }),
    nfs: GoogleCloudRunV2NFSVolumeSourceSchema.exactOptional().openapi({
      description: 'For NFS Voumes, contains the path to the nfs Volume',
    }),
    secret: GoogleCloudRunV2SecretVolumeSourceSchema.exactOptional().openapi({
      description: 'Secret represents a secret that should populate this volume.',
    }),
  })
  .openapi({ description: 'Volume represents a named volume in a container.', required: [] })
  .openapi('GoogleCloudRunV2Volume')

const GoogleCloudRunV2NetworkInterfaceSchema = z
  .object({
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be looked up from the subnetwork.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the subnetwork with the same name with the network will be used.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Network tags applied to this Cloud Run resource.' }),
  })
  .openapi({ description: 'Direct VPC egress settings.', required: [] })
  .openapi('GoogleCloudRunV2NetworkInterface')

const GoogleCloudRunV2VpcAccessSchema = z
  .object({
    connector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. For more information on sending traffic to a VPC network via a connector, visit https://cloud.google.com/run/docs/configuring/vpc-connectors.',
      }),
    egress: z
      .enum(['VPC_EGRESS_UNSPECIFIED', 'ALL_TRAFFIC', 'PRIVATE_RANGES_ONLY'])
      .exactOptional()
      .openapi({
        description:
          'Traffic VPC egress settings. If not provided, it defaults to PRIVATE_RANGES_ONLY.',
      }),
    networkInterfaces: z
      .array(GoogleCloudRunV2NetworkInterfaceSchema)
      .exactOptional()
      .openapi({
        description:
          'Direct VPC egress settings. Currently only single network interface is supported.',
      }),
  })
  .openapi({
    description:
      'VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.',
    required: [],
  })
  .openapi('GoogleCloudRunV2VpcAccess')

const GoogleCloudRunV2TaskTemplateSchema = z
  .object({
    containers: z
      .array(GoogleCloudRunV2ContainerSchema)
      .exactOptional()
      .openapi({
        description: 'Holds the single container that defines the unit of execution for this task.',
      }),
    encryptionKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek',
      }),
    executionEnvironment: z
      .enum([
        'EXECUTION_ENVIRONMENT_UNSPECIFIED',
        'EXECUTION_ENVIRONMENT_GEN1',
        'EXECUTION_ENVIRONMENT_GEN2',
      ])
      .exactOptional()
      .openapi({ description: 'The execution environment being used to host this Task.' }),
    maxRetries: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of retries allowed per Task, before marking this Task failed. Defaults to 3.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.",
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds.',
      }),
    volumes: z
      .array(GoogleCloudRunV2VolumeSchema)
      .exactOptional()
      .openapi({ description: 'A list of Volumes to make available to containers.' }),
    vpcAccess: GoogleCloudRunV2VpcAccessSchema.exactOptional().openapi({
      description:
        'VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.',
    }),
  })
  .openapi({
    description: 'TaskTemplate describes the data a task should have when created from a template.',
    required: [],
  })
  .openapi('GoogleCloudRunV2TaskTemplate')

const GoogleCloudRunV2ExecutionSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.',
        readOnly: true,
      }),
    cancelledCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of tasks which reached phase Cancelled.',
        readOnly: true,
      }),
    completionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Represents time when the execution was completed. It is not guaranteed to be set in happens-before order across separate operations.',
        readOnly: true,
      }),
    conditions: z
      .array(GoogleCloudRunV2ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The Condition of this Execution, containing its readiness status, and detailed error information in case it did not reach the desired state.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Represents time when the execution was acknowledged by the execution controller. It is not guaranteed to be set in happens-before order across separate operations.',
        readOnly: true,
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.',
        readOnly: true,
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.',
        readOnly: true,
      }),
    failedCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of tasks which reached phase Failed.',
        readOnly: true,
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A number that monotonically increases every time the user modifies the desired state.',
        readOnly: true,
      }),
    job: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the parent Job.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels",
        readOnly: true,
      }),
    launchStage: z
      .enum([
        'LAUNCH_STAGE_UNSPECIFIED',
        'UNIMPLEMENTED',
        'PRELAUNCH',
        'EARLY_ACCESS',
        'ALPHA',
        'BETA',
        'GA',
        'DEPRECATED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.',
      }),
    logUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URI where logs for this execution can be found in Cloud Console.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The unique name of this Execution.', readOnly: true }),
    observedGeneration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The generation of this Execution. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    parallelism: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies the maximum desired number of tasks the execution should run at any given time. Must be <= task_count. The actual number of tasks running in steady state will be less than this number when ((.spec.task_count - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism.',
        readOnly: true,
      }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.",
        readOnly: true,
      }),
    retriedCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of tasks which have retried at least once.',
        readOnly: true,
      }),
    runningCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of actively running tasks.',
        readOnly: true,
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Represents time when the execution started to run. It is not guaranteed to be set in happens-before order across separate operations.',
        readOnly: true,
      }),
    succeededCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of tasks which reached phase Succeeded.',
        readOnly: true,
      }),
    taskCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution.',
        readOnly: true,
      }),
    template: GoogleCloudRunV2TaskTemplateSchema.exactOptional().openapi({
      description: 'Output only. The template used to create tasks for this execution.',
      readOnly: true,
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last-modified time.', readOnly: true }),
  })
  .openapi({
    description:
      'Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Execution')

const GoogleCloudRunV2ExecutionReferenceSchema = z
  .object({
    completionTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Creation timestamp of the execution.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Creation timestamp of the execution.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the execution.' }),
  })
  .openapi({
    description:
      'Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.',
    required: [],
  })
  .openapi('GoogleCloudRunV2ExecutionReference')

const GoogleCloudRunV2ExecutionTemplateSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules.",
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 ExecutionTemplate.",
      }),
    parallelism: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.',
      }),
    taskCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1.',
      }),
    template: GoogleCloudRunV2TaskTemplateSchema.exactOptional().openapi({
      description:
        'Required. Describes the task(s) that will be created when executing an execution.',
    }),
  })
  .openapi({
    description:
      'ExecutionTemplate describes the data an execution should have when created from a template.',
    required: [],
  })
  .openapi('GoogleCloudRunV2ExecutionTemplate')

const GoogleCloudRunV2JobSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules.",
      }),
    binaryAuthorization: GoogleCloudRunV2BinaryAuthorizationSchema.exactOptional().openapi({
      description: 'Settings for the Binary Authorization feature.',
    }),
    client: z
      .string()
      .exactOptional()
      .openapi({ description: 'Arbitrary identifier for the API client.' }),
    clientVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Arbitrary version identifier for the API client.' }),
    conditions: z
      .array(GoogleCloudRunV2ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The creation time.', readOnly: true }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Email address of the authenticated creator.',
        readOnly: true,
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The deletion time.', readOnly: true }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.',
        readOnly: true,
      }),
    executionCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of executions created for this job.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the time after which it will be permamently deleted.',
        readOnly: true,
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A number that monotonically increases every time the user modifies the desired state.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job.",
      }),
    lastModifier: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Email address of the last authenticated modifier.',
        readOnly: true,
      }),
    latestCreatedExecution: GoogleCloudRunV2ExecutionReferenceSchema.exactOptional().openapi({
      description: 'Output only. Name of the last created execution.',
      readOnly: true,
    }),
    launchStage: z
      .enum([
        'LAUNCH_STAGE_UNSPECIFIED',
        'UNIMPLEMENTED',
        'PRELAUNCH',
        'EARLY_ACCESS',
        'ALPHA',
        'BETA',
        'GA',
        'DEPRECATED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job}',
      }),
    observedGeneration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`.',
        readOnly: true,
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    template: GoogleCloudRunV2ExecutionTemplateSchema.exactOptional().openapi({
      description: 'Required. The template used to create executions for this Job.',
    }),
    terminalCondition: GoogleCloudRunV2ConditionSchema.exactOptional().openapi({
      description:
        'Output only. The Condition of this Job, containing its readiness status, and detailed error information in case it did not reach the desired state.',
      readOnly: true,
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last-modified time.', readOnly: true }),
  })
  .openapi({
    description:
      'Job represents the configuration of a single job, which references a container image that is run to completion.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Job')

const GoogleCloudRunV2ListExecutionsResponseSchema = z
  .object({
    executions: z
      .array(GoogleCloudRunV2ExecutionSchema)
      .exactOptional()
      .openapi({ description: 'The resulting list of Executions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token indicating there are more items than page_size. Use it in the next ListExecutions request to continue.',
      }),
  })
  .openapi({ description: 'Response message containing a list of Executions.', required: [] })
  .openapi('GoogleCloudRunV2ListExecutionsResponse')

const GoogleCloudRunV2ListJobsResponseSchema = z
  .object({
    jobs: z
      .array(GoogleCloudRunV2JobSchema)
      .exactOptional()
      .openapi({ description: 'The resulting list of Jobs.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token indicating there are more items than page_size. Use it in the next ListJobs request to continue.',
      }),
  })
  .openapi({ description: 'Response message containing a list of Jobs.', required: [] })
  .openapi('GoogleCloudRunV2ListJobsResponse')

const GoogleCloudRunV2RevisionScalingSchema = z
  .object({
    maxInstanceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum number of serving instances that this resource should have.',
      }),
    minInstanceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Minimum number of serving instances that this resource should have.',
      }),
  })
  .openapi({ description: 'Settings for revision-level scaling settings.', required: [] })
  .openapi('GoogleCloudRunV2RevisionScaling')

const GoogleCloudRunV2RevisionScalingStatusSchema = z
  .object({
    desiredMinInstanceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The current number of min instances provisioned for this revision.',
      }),
  })
  .openapi({ description: 'Effective settings for the current revision', required: [] })
  .openapi('GoogleCloudRunV2RevisionScalingStatus')

const GoogleCloudRunV2RevisionSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.',
        readOnly: true,
      }),
    conditions: z
      .array(GoogleCloudRunV2ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The Condition of this Revision, containing its readiness status, and detailed error information in case it did not reach a serving state.',
        readOnly: true,
      }),
    containers: z
      .array(GoogleCloudRunV2ContainerSchema)
      .exactOptional()
      .openapi({
        description:
          'Holds the single container that defines the unit of execution for this Revision.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The creation time.', readOnly: true }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.',
        readOnly: true,
      }),
    encryptionKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek',
      }),
    encryptionKeyRevocationAction: z
      .enum(['ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED', 'PREVENT_NEW', 'SHUTDOWN'])
      .exactOptional()
      .openapi({ description: 'The action to take if the encryption key is revoked.' }),
    encryptionKeyShutdownDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.',
        readOnly: true,
      }),
    executionEnvironment: z
      .enum([
        'EXECUTION_ENVIRONMENT_UNSPECIFIED',
        'EXECUTION_ENVIRONMENT_GEN1',
        'EXECUTION_ENVIRONMENT_GEN2',
      ])
      .exactOptional()
      .openapi({ description: 'The execution environment being used to host this Revision.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.',
        readOnly: true,
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A number that monotonically increases every time the user modifies the desired state.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.",
        readOnly: true,
      }),
    launchStage: z
      .enum([
        'LAUNCH_STAGE_UNSPECIFIED',
        'UNIMPLEMENTED',
        'PRELAUNCH',
        'EARLY_ACCESS',
        'ALPHA',
        'BETA',
        'GA',
        'DEPRECATED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.',
      }),
    logUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The Google Console URI to obtain logs for the Revision.',
        readOnly: true,
      }),
    maxInstanceRequestConcurrency: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Sets the maximum number of requests that each serving instance can receive.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The unique name of this Revision.', readOnly: true }),
    observedGeneration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The generation of this Revision currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Service.reconciling` for additional information on reconciliation process in Cloud Run.",
        readOnly: true,
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    scaling: GoogleCloudRunV2RevisionScalingSchema.exactOptional().openapi({
      description: 'Scaling settings for this revision.',
    }),
    scalingStatus: GoogleCloudRunV2RevisionScalingStatusSchema.exactOptional().openapi({
      description: 'Output only. The current effective scaling settings for the revision.',
      readOnly: true,
    }),
    service: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the parent service.', readOnly: true }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has.',
      }),
    sessionAffinity: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable session affinity.' }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Max allowed time for an instance to respond to a request.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Server assigned unique identifier for the Revision. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last-modified time.', readOnly: true }),
    volumes: z
      .array(GoogleCloudRunV2VolumeSchema)
      .exactOptional()
      .openapi({ description: 'A list of Volumes to make available to containers.' }),
    vpcAccess: GoogleCloudRunV2VpcAccessSchema.exactOptional().openapi({
      description:
        'VPC Access configuration for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.',
    }),
  })
  .openapi({
    description:
      'A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Revision')

const GoogleCloudRunV2ListRevisionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token indicating there are more items than page_size. Use it in the next ListRevisions request to continue.',
      }),
    revisions: z
      .array(GoogleCloudRunV2RevisionSchema)
      .exactOptional()
      .openapi({ description: 'The resulting list of Revisions.' }),
  })
  .openapi({ description: 'Response message containing a list of Revisions.', required: [] })
  .openapi('GoogleCloudRunV2ListRevisionsResponse')

const GoogleCloudRunV2ServiceScalingSchema = z
  .object({
    minInstanceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'total min instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving. (ALPHA)',
      }),
  })
  .openapi({
    description: 'Scaling settings applied at the service level rather than at the revision level.',
    required: [],
  })
  .openapi('GoogleCloudRunV2ServiceScaling')

const GoogleCloudRunV2RevisionTemplateSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 RevisionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules.",
      }),
    containers: z
      .array(GoogleCloudRunV2ContainerSchema)
      .exactOptional()
      .openapi({
        description:
          'Holds the single container that defines the unit of execution for this Revision.',
      }),
    encryptionKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek',
      }),
    executionEnvironment: z
      .enum([
        'EXECUTION_ENVIRONMENT_UNSPECIFIED',
        'EXECUTION_ENVIRONMENT_GEN1',
        'EXECUTION_ENVIRONMENT_GEN2',
      ])
      .exactOptional()
      .openapi({ description: 'The sandbox environment to host this Revision.' }),
    healthCheckDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Disables health checking containers during deployment.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 RevisionTemplate.",
      }),
    maxInstanceRequestConcurrency: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Sets the maximum number of requests that each serving instance can receive.',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.',
      }),
    scaling: GoogleCloudRunV2RevisionScalingSchema.exactOptional().openapi({
      description: 'Scaling settings for this Revision.',
    }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.",
      }),
    sessionAffinity: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Enable session affinity.' }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Max allowed time for an instance to respond to a request.' }),
    volumes: z
      .array(GoogleCloudRunV2VolumeSchema)
      .exactOptional()
      .openapi({ description: 'A list of Volumes to make available to containers.' }),
    vpcAccess: GoogleCloudRunV2VpcAccessSchema.exactOptional().openapi({
      description:
        'VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.',
    }),
  })
  .openapi({
    description:
      'RevisionTemplate describes the data a revision should have when created from a template.',
    required: [],
  })
  .openapi('GoogleCloudRunV2RevisionTemplate')

const GoogleCloudRunV2TrafficTargetSchema = z
  .object({
    percent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision to which to send this portion of traffic, if traffic allocation is by revision.',
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates a string to be part of the URI to exclusively reference this target.',
      }),
    type: z
      .enum([
        'TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED',
        'TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST',
        'TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION',
      ])
      .exactOptional()
      .openapi({ description: 'The allocation type for this traffic target.' }),
  })
  .openapi({
    description:
      'Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.',
    required: [],
  })
  .openapi('GoogleCloudRunV2TrafficTarget')

const GoogleCloudRunV2TrafficTargetStatusSchema = z
  .object({
    percent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Specifies percent of the traffic to this Revision.' }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'Revision to which this traffic is sent.' }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the string used in the URI to exclusively reference this target.',
      }),
    type: z
      .enum([
        'TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED',
        'TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST',
        'TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION',
      ])
      .exactOptional()
      .openapi({ description: 'The allocation type for this traffic target.' }),
    uri: z.string().exactOptional().openapi({ description: 'Displays the target URI.' }),
  })
  .openapi({
    description: 'Represents the observed state of a single `TrafficTarget` entry.',
    required: [],
  })
  .openapi('GoogleCloudRunV2TrafficTargetStatus')

const GoogleCloudRunV2ServiceSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules.",
      }),
    binaryAuthorization: GoogleCloudRunV2BinaryAuthorizationSchema.exactOptional().openapi({
      description: 'Settings for the Binary Authorization feature.',
    }),
    client: z
      .string()
      .exactOptional()
      .openapi({ description: 'Arbitrary identifier for the API client.' }),
    clientVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Arbitrary version identifier for the API client.' }),
    conditions: z
      .array(GoogleCloudRunV2ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The creation time.', readOnly: true }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Email address of the authenticated creator.',
        readOnly: true,
      }),
    customAudiences: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.',
      }),
    defaultUriDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Disables public resolution of the default URI of this service.',
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The deletion time.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided description of the Service. This field currently has a 512-character limit.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the time after which it will be permamently deleted.',
        readOnly: true,
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.',
        readOnly: true,
      }),
    ingress: z
      .enum([
        'INGRESS_TRAFFIC_UNSPECIFIED',
        'INGRESS_TRAFFIC_ALL',
        'INGRESS_TRAFFIC_INTERNAL_ONLY',
        'INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.",
      }),
    lastModifier: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Email address of the last authenticated modifier.',
        readOnly: true,
      }),
    latestCreatedRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    latestReadyRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    launchStage: z
      .enum([
        'LAUNCH_STAGE_UNSPECIFIED',
        'UNIMPLEMENTED',
        'PRELAUNCH',
        'EARLY_ACCESS',
        'ALPHA',
        'BETA',
        'GA',
        'DEPRECATED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id}',
      }),
    observedGeneration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.',
        readOnly: true,
      }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`.',
        readOnly: true,
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    scaling: GoogleCloudRunV2ServiceScalingSchema.exactOptional().openapi({
      description: 'Optional. Specifies service-level scaling settings',
    }),
    template: GoogleCloudRunV2RevisionTemplateSchema.exactOptional().openapi({
      description: 'Required. The template used to create revisions for this Service.',
    }),
    terminalCondition: GoogleCloudRunV2ConditionSchema.exactOptional().openapi({
      description:
        'Output only. The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
      readOnly: true,
    }),
    traffic: z
      .array(GoogleCloudRunV2TrafficTargetSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.',
      }),
    trafficStatuses: z
      .array(GoogleCloudRunV2TrafficTargetStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last-modified time.', readOnly: true }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The main URI in which this Service is serving traffic.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Service')

const GoogleCloudRunV2ListServicesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token indicating there are more items than page_size. Use it in the next ListServices request to continue.',
      }),
    services: z
      .array(GoogleCloudRunV2ServiceSchema)
      .exactOptional()
      .openapi({ description: 'The resulting list of Services.' }),
  })
  .openapi({ description: 'Response message containing a list of Services.', required: [] })
  .openapi('GoogleCloudRunV2ListServicesResponse')

const GoogleRpcStatusSchema = z
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
  .openapi('GoogleRpcStatus')

const GoogleCloudRunV2TaskAttemptResultSchema = z
  .object({
    exitCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details.',
        readOnly: true,
      }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'Output only. The status of this attempt. If the status code is OK, then the attempt succeeded.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Result of a task attempt.', required: [] })
  .openapi('GoogleCloudRunV2TaskAttemptResult')

const GoogleCloudRunV2TaskSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.',
        readOnly: true,
      }),
    completionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.',
        readOnly: true,
      }),
    conditions: z
      .array(GoogleCloudRunV2ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.',
        readOnly: true,
      }),
    containers: z
      .array(GoogleCloudRunV2ContainerSchema)
      .exactOptional()
      .openapi({
        description: 'Holds the single container that defines the unit of execution for this task.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations.',
        readOnly: true,
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.',
        readOnly: true,
      }),
    encryptionKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek',
        readOnly: true,
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.',
        readOnly: true,
      }),
    execution: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the parent Execution.', readOnly: true }),
    executionEnvironment: z
      .enum([
        'EXECUTION_ENVIRONMENT_UNSPECIFIED',
        'EXECUTION_ENVIRONMENT_GEN1',
        'EXECUTION_ENVIRONMENT_GEN2',
      ])
      .exactOptional()
      .openapi({ description: 'The execution environment being used to host this Task.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.',
        readOnly: true,
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A number that monotonically increases every time the user modifies the desired state.',
        readOnly: true,
      }),
    index: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Index of the Task, unique per execution, and beginning at 0.',
        readOnly: true,
      }),
    job: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the parent Job.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels",
        readOnly: true,
      }),
    lastAttemptResult: GoogleCloudRunV2TaskAttemptResultSchema.exactOptional().openapi({
      description: 'Output only. Result of the last attempt of this Task.',
      readOnly: true,
    }),
    logUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URI where logs for this execution can be found in Cloud Console.',
        readOnly: true,
      }),
    maxRetries: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of retries allowed per Task, before marking this Task failed.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The unique name of this Task.', readOnly: true }),
    observedGeneration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.',
        readOnly: true,
      }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.",
        readOnly: true,
      }),
    retried: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit.',
        readOnly: true,
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    scheduledTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations.',
        readOnly: true,
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.",
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.',
        readOnly: true,
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last-modified time.', readOnly: true }),
    volumes: z
      .array(GoogleCloudRunV2VolumeSchema)
      .exactOptional()
      .openapi({ description: 'A list of Volumes to make available to containers.' }),
    vpcAccess: GoogleCloudRunV2VpcAccessSchema.exactOptional().openapi({
      description:
        'Output only. VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'Task represents a single run of a container to completion.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Task')

const GoogleCloudRunV2ListTasksResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token indicating there are more items than page_size. Use it in the next ListTasks request to continue.',
      }),
    tasks: z
      .array(GoogleCloudRunV2TaskSchema)
      .exactOptional()
      .openapi({ description: 'The resulting list of Tasks.' }),
  })
  .openapi({ description: 'Response message containing a list of Tasks.', required: [] })
  .openapi('GoogleCloudRunV2ListTasksResponse')

const GoogleCloudRunV2OverridesSchema = z
  .object({
    containerOverrides: z
      .array(GoogleCloudRunV2ContainerOverrideSchema)
      .exactOptional()
      .openapi({ description: 'Per container override specification.' }),
    taskCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The desired number of tasks the execution should run. Will replace existing task_count value.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value.',
      }),
  })
  .openapi({
    description: 'RunJob Overrides that contains Execution fields to be overridden.',
    required: [],
  })
  .openapi('GoogleCloudRunV2Overrides')

const GoogleCloudRunV2RunJobRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.',
      }),
    overrides: GoogleCloudRunV2OverridesSchema.exactOptional().openapi({
      description:
        'Overrides specification for a given execution of a job. If provided, overrides will be applied to update the execution or task spec.',
    }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the request should be validated without actually deleting any resources.',
      }),
  })
  .openapi({ description: 'Request message to create a new Execution of a Job.', required: [] })
  .openapi('GoogleCloudRunV2RunJobRequest')

const GoogleIamV1AuditLogConfigSchema = z
  .object({
    exemptedMembers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.',
      }),
    logType: z
      .enum(['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'])
      .exactOptional()
      .openapi({ description: 'The log type that this config enables.' }),
  })
  .openapi({
    description:
      'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
    required: [],
  })
  .openapi('GoogleIamV1AuditLogConfig')

const GoogleIamV1AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(GoogleIamV1AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
    required: [],
  })
  .openapi('GoogleIamV1AuditConfig')

const GoogleTypeExprSchema = z
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
  .openapi('GoogleTypeExpr')

const GoogleIamV1BindingSchema = z
  .object({
    condition: GoogleTypeExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('GoogleIamV1Binding')

const GoogleIamV1PolicySchema = z
  .object({
    auditConfigs: z
      .array(GoogleIamV1AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(GoogleIamV1BindingSchema)
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
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('GoogleIamV1Policy')

const GoogleIamV1SetIamPolicyRequestSchema = z
  .object({
    policy: GoogleIamV1PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`',
      }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('GoogleIamV1SetIamPolicyRequest')

const GoogleIamV1TestIamPermissionsRequestSchema = z
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
  .openapi('GoogleIamV1TestIamPermissionsRequest')

const GoogleIamV1TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('GoogleIamV1TestIamPermissionsResponse')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
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
          'The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleLongrunningWaitOperationRequestSchema = z
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
  .openapi('GoogleLongrunningWaitOperationRequest')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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
  description: 'Gets information about a Revision.',
  operationId: 'run.projects.locations.services.revisions.get',
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
              'Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}',
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
      content: { 'application/json': { schema: GoogleCloudRunV2RevisionSchema } },
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
  description: 'Deletes a Revision.',
  operationId: 'run.projects.locations.services.revisions.delete',
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
      etag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.',
            in: 'query',
            name: 'etag',
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
              'Indicates that the request should be validated without actually deleting any resources.',
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
            description:
              'Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}',
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
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
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
  description: 'Updates a Service.',
  operationId: 'run.projects.locations.services.patch',
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
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If set to true, and if the Service does not exist, it will create a new one. The caller must have 'run.services.create' permissions if this is set to true and the Service does not exist.",
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.',
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
            description:
              'The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRunV2ServiceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
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
  operationId: 'run.projects.locations.operations.list',
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
              'Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.',
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
              'The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .',
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
              'Token identifying which result to start with, which is returned by a previous list call.',
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
            description: 'Required. To query for all of the operations for a project.',
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
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
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
  description: 'Cancels an Execution.',
  operationId: 'run.projects.locations.jobs.executions.cancel',
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
              'Required. The name of the Execution to cancel. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRunV2CancelExecutionRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameRunRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:run',
  tags: ['projects'],
  description: 'Triggers creation of a new Execution of this Job.',
  operationId: 'run.projects.locations.jobs.run',
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
              'Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRunV2RunJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameWaitRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:wait',
  tags: ['projects'],
  description:
    'Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.',
  operationId: 'run.projects.locations.operations.wait',
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
    body: {
      content: { 'application/json': { schema: GoogleLongrunningWaitOperationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentExecutionsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/executions',
  tags: ['projects'],
  description: 'Lists Executions from a Job.',
  operationId: 'run.projects.locations.jobs.executions.list',
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
            description: 'Maximum number of Executions to return in this call.',
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
              'A page token received from a previous call to ListExecutions. All other parameters must match.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns deleted (but unexpired) resources along with active ones.',
            in: 'query',
            name: 'showDeleted',
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
            description:
              'Required. The Execution from which the Executions should be listed. To list all Executions across Jobs, use "-" instead of Job name. Format: `projects/{project}/locations/{location}/jobs/{job}`, where `{project}` can be project id or number.',
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
      content: { 'application/json': { schema: GoogleCloudRunV2ListExecutionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentJobsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/jobs',
  tags: ['projects'],
  description: 'Lists Jobs.',
  operationId: 'run.projects.locations.jobs.list',
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
            description: 'Maximum number of Jobs to return in this call.',
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
              'A page token received from a previous call to ListJobs. All other parameters must match.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns deleted (but unexpired) resources along with active ones.',
            in: 'query',
            name: 'showDeleted',
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
            description:
              'Required. The location and project to list resources on. Format: projects/{project}/locations/{location}, where {project} can be project id or number.',
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
      content: { 'application/json': { schema: GoogleCloudRunV2ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentJobsRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/jobs',
  tags: ['projects'],
  description: 'Creates a Job.',
  operationId: 'run.projects.locations.jobs.create',
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
      jobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The unique identifier for the Job. The name of the job becomes {parent}/jobs/{job_id}.',
            in: 'query',
            name: 'jobId',
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
              'Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.',
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
            description:
              'Required. The location and project in which this Job should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRunV2JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentRevisionsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/revisions',
  tags: ['projects'],
  description: 'Lists Revisions from a given Service, or from a given location.',
  operationId: 'run.projects.locations.services.revisions.list',
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
            description: 'Maximum number of revisions to return in this call.',
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
              'A page token received from a previous call to ListRevisions. All other parameters must match.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns deleted (but unexpired) resources along with active ones.',
            in: 'query',
            name: 'showDeleted',
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
            description:
              'Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service}',
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
      content: { 'application/json': { schema: GoogleCloudRunV2ListRevisionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentServicesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/services',
  tags: ['projects'],
  description: 'Lists Services.',
  operationId: 'run.projects.locations.services.list',
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
            description: 'Maximum number of Services to return in this call.',
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
              'A page token received from a previous call to ListServices. All other parameters must match.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns deleted (but unexpired) resources along with active ones.',
            in: 'query',
            name: 'showDeleted',
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
            description:
              'Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number.',
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
      content: { 'application/json': { schema: GoogleCloudRunV2ListServicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentServicesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/services',
  tags: ['projects'],
  description: 'Creates a new Service in a given project and location.',
  operationId: 'run.projects.locations.services.create',
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
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service_id}.',
            in: 'query',
            name: 'serviceId',
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
              'Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.',
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
            description:
              'Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRunV2ServiceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentTasksRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/tasks',
  tags: ['projects'],
  description: 'Lists Tasks from an Execution of a Job.',
  operationId: 'run.projects.locations.jobs.executions.tasks.list',
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
            description: 'Maximum number of Tasks to return in this call.',
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
              'A page token received from a previous call to ListTasks. All other parameters must match.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns deleted (but unexpired) resources along with active ones.',
            in: 'query',
            name: 'showDeleted',
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
            description:
              'Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}',
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
      content: { 'application/json': { schema: GoogleCloudRunV2ListTasksResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v2/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.',
  operationId: 'run.projects.locations.services.getIamPolicy',
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
      content: { 'application/json': { schema: GoogleIamV1PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v2/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.',
  operationId: 'run.projects.locations.services.setIamPolicy',
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
    body: { content: { 'application/json': { schema: GoogleIamV1SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleIamV1PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v2/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.',
  operationId: 'run.projects.locations.services.testIamPermissions',
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
    body: {
      content: { 'application/json': { schema: GoogleIamV1TestIamPermissionsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleIamV1TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
