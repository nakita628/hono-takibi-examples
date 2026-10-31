import { createRoute, z } from '@hono/zod-openapi'

const AppEngineVersionEndpointSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) name.',
      }),
  })
  .openapi({ description: 'Wrapper for app engine service version attributes.', required: [] })
  .openapi('AppEngineVersionEndpoint')

const CloudFunctionEndpointSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'A [Cloud Function](https://cloud.google.com/functions) name.' }),
  })
  .openapi({ description: 'Wrapper for Cloud Function attributes.', required: [] })
  .openapi('CloudFunctionEndpoint')

const CloudRunRevisionEndpointSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project}/locations/{location}/revisions/{revision}',
      }),
  })
  .openapi({ description: 'Wrapper for Cloud Run revision attributes.', required: [] })
  .openapi('CloudRunRevisionEndpoint')

type EndpointType = {
  appEngineVersion?: z.infer<typeof AppEngineVersionEndpointSchema>
  cloudFunction?: z.infer<typeof CloudFunctionEndpointSchema>
  cloudRunRevision?: z.infer<typeof CloudRunRevisionEndpointSchema>
  cloudSqlInstance?: string
  forwardingRule?: string
  forwardingRuleTarget?:
    | 'FORWARDING_RULE_TARGET_UNSPECIFIED'
    | 'INSTANCE'
    | 'LOAD_BALANCER'
    | 'VPN_GATEWAY'
    | 'PSC'
  gkeMasterCluster?: string
  instance?: string
  ipAddress?: string
  loadBalancerId?: string
  loadBalancerType?:
    | 'LOAD_BALANCER_TYPE_UNSPECIFIED'
    | 'HTTPS_ADVANCED_LOAD_BALANCER'
    | 'HTTPS_LOAD_BALANCER'
    | 'REGIONAL_HTTPS_LOAD_BALANCER'
    | 'INTERNAL_HTTPS_LOAD_BALANCER'
    | 'SSL_PROXY_LOAD_BALANCER'
    | 'TCP_PROXY_LOAD_BALANCER'
    | 'INTERNAL_TCP_PROXY_LOAD_BALANCER'
    | 'NETWORK_LOAD_BALANCER'
    | 'LEGACY_NETWORK_LOAD_BALANCER'
    | 'TCP_UDP_INTERNAL_LOAD_BALANCER'
  network?: string
  networkType?: 'NETWORK_TYPE_UNSPECIFIED' | 'GCP_NETWORK' | 'NON_GCP_NETWORK'
  port?: number
  projectId?: string
}

const AbortInfoSchema = z
  .object({
    cause: z
      .enum([
        'CAUSE_UNSPECIFIED',
        'UNKNOWN_NETWORK',
        'UNKNOWN_IP',
        'UNKNOWN_PROJECT',
        'PERMISSION_DENIED',
        'NO_SOURCE_LOCATION',
        'INVALID_ARGUMENT',
        'NO_EXTERNAL_IP',
        'UNINTENDED_DESTINATION',
        'TRACE_TOO_LONG',
        'INTERNAL_ERROR',
        'SOURCE_ENDPOINT_NOT_FOUND',
        'MISMATCHED_SOURCE_NETWORK',
        'DESTINATION_ENDPOINT_NOT_FOUND',
        'MISMATCHED_DESTINATION_NETWORK',
        'UNSUPPORTED',
        'MISMATCHED_IP_VERSION',
        'GKE_KONNECTIVITY_PROXY_UNSUPPORTED',
      ])
      .exactOptional()
      .openapi({ description: 'Causes that the analysis is aborted.' }),
    projectsMissingPermission: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of project IDs that the user has specified in the request but does not have permission to access network configs. Analysis is aborted in this case with the PERMISSION_DENIED cause.',
      }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the resource that caused the abort.' }),
  })
  .openapi({
    description: 'Details of the final state "abort" and associated resource.',
    required: [],
  })
  .openapi('AbortInfo')

const AppEngineVersionInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of an App Engine version.' }),
    environment: z
      .string()
      .exactOptional()
      .openapi({ description: 'App Engine execution environment for a version.' }),
    runtime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Runtime of the App Engine version.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI of an App Engine version.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with an App Engine version.',
    required: [],
  })
  .openapi('AppEngineVersionInfo')

const AuditLogConfigSchema = z
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
  .openapi('AuditLogConfig')

const AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(AuditLogConfigSchema)
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
  .openapi('AuditConfig')

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

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CloudFunctionInfoSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Name of a Cloud Function.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location in which the Cloud Function is deployed.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a Cloud Function.' }),
    versionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Latest successfully deployed version id of the Cloud Function.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Cloud Function.',
    required: [],
  })
  .openapi('CloudFunctionInfo')

const CloudRunRevisionInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a Cloud Run revision.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location in which this revision is deployed.' }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of Cloud Run Service this revision belongs to.' }),
    serviceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of Cloud Run service this revision belongs to.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a Cloud Run revision.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Cloud Run revision.',
    required: [],
  })
  .openapi('CloudRunRevisionInfo')

const CloudSQLInstanceInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a Cloud SQL instance.' }),
    externalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'External IP address of a Cloud SQL instance.' }),
    internalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal IP address of a Cloud SQL instance.' }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI of a Cloud SQL instance network or empty string if the instance does not have one.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'Region in which the Cloud SQL instance is running.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a Cloud SQL instance.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Cloud SQL instance.',
    required: [],
  })
  .openapi('CloudSQLInstanceInfo')

const EndpointSchema: z.ZodType<EndpointType> = z
  .lazy(() =>
    z
      .object({
        appEngineVersion: AppEngineVersionEndpointSchema.exactOptional().openapi({
          description:
            'An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions).',
        }),
        cloudFunction: CloudFunctionEndpointSchema.exactOptional().openapi({
          description: 'A [Cloud Function](https://cloud.google.com/functions).',
        }),
        cloudRunRevision: CloudRunRevisionEndpointSchema.exactOptional().openapi({
          description:
            'A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get)',
        }),
        cloudSqlInstance: z
          .string()
          .exactOptional()
          .openapi({ description: 'A [Cloud SQL](https://cloud.google.com/sql) instance URI.' }),
        forwardingRule: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints and Protocol Forwarding. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}',
          }),
        forwardingRuleTarget: z
          .enum([
            'FORWARDING_RULE_TARGET_UNSPECIFIED',
            'INSTANCE',
            'LOAD_BALANCER',
            'VPN_GATEWAY',
            'PSC',
          ])
          .exactOptional()
          .openapi({
            description: 'Output only. Specifies the type of the target of the forwarding rule.',
            readOnly: true,
          }),
        gkeMasterCluster: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).',
          }),
        instance: z
          .string()
          .exactOptional()
          .openapi({ description: 'A Compute Engine instance URI.' }),
        ipAddress: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](https://cloud.google.com/load-balancing/docs/load-balancing-overview).",
          }),
        loadBalancerId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers.',
            readOnly: true,
          }),
        loadBalancerType: z
          .enum([
            'LOAD_BALANCER_TYPE_UNSPECIFIED',
            'HTTPS_ADVANCED_LOAD_BALANCER',
            'HTTPS_LOAD_BALANCER',
            'REGIONAL_HTTPS_LOAD_BALANCER',
            'INTERNAL_HTTPS_LOAD_BALANCER',
            'SSL_PROXY_LOAD_BALANCER',
            'TCP_PROXY_LOAD_BALANCER',
            'INTERNAL_TCP_PROXY_LOAD_BALANCER',
            'NETWORK_LOAD_BALANCER',
            'LEGACY_NETWORK_LOAD_BALANCER',
            'TCP_UDP_INTERNAL_LOAD_BALANCER',
          ])
          .exactOptional()
          .openapi({
            description: 'Output only. Type of the load balancer the forwarding rule points to.',
            readOnly: true,
          }),
        network: z
          .string()
          .exactOptional()
          .openapi({ description: 'A Compute Engine network URI.' }),
        networkType: z
          .enum(['NETWORK_TYPE_UNSPECIFIED', 'GCP_NETWORK', 'NON_GCP_NETWORK'])
          .exactOptional()
          .openapi({
            description:
              'Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.',
          }),
        port: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.',
          }),
        projectId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a GCP project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.',
          }),
      })
      .openapi({ description: 'Source or destination of the Connectivity Test.', required: [] }),
  )
  .openapi('Endpoint')

const EdgeLocationSchema = z
  .object({
    metropolitanArea: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the metropolitan area.' }),
  })
  .openapi({
    description:
      'Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.',
    required: [],
  })
  .openapi('EdgeLocation')

const EndpointInfoSchema = z
  .object({
    destinationIp: z.string().exactOptional().openapi({ description: 'Destination IP address.' }),
    destinationNetworkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the network where this packet is sent to.' }),
    destinationPort: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Destination port. Only valid when protocol is TCP or UDP.' }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP protocol in string format, for example: "TCP", "UDP", "ICMP".' }),
    sourceAgentUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the source telemetry agent this packet originates from.' }),
    sourceIp: z.string().exactOptional().openapi({ description: 'Source IP address.' }),
    sourceNetworkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the network where this packet originates from.' }),
    sourcePort: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Source port. Only valid when protocol is TCP or UDP.' }),
  })
  .openapi({
    description:
      'For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.',
    required: [],
  })
  .openapi('EndpointInfo')

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

const LatencyPercentileSchema = z
  .object({
    latencyMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field.',
      }),
    percent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Percentage of samples this data point applies to.' }),
  })
  .openapi({ description: 'Latency percentile rank and value.', required: [] })
  .openapi('LatencyPercentile')

const LatencyDistributionSchema = z
  .object({
    latencyPercentiles: z
      .array(LatencyPercentileSchema)
      .exactOptional()
      .openapi({ description: 'Representative latency percentiles.' }),
  })
  .openapi({ description: 'Describes measured latency distribution.', required: [] })
  .openapi('LatencyDistribution')

const ProbingDetailsSchema = z
  .object({
    abortCause: z
      .enum(['PROBING_ABORT_CAUSE_UNSPECIFIED', 'PERMISSION_DENIED', 'NO_SOURCE_LOCATION'])
      .exactOptional()
      .openapi({ description: 'The reason probing was aborted.' }),
    destinationEgressLocation: EdgeLocationSchema.exactOptional().openapi({
      description:
        'The EdgeLocation from which a packet destined for/originating from the internet will egress/ingress the Google network. This will only be populated for a connectivity test which has an internet destination/source address. The absence of this field *must not* be used as an indication that the destination/source is part of the Google network.',
    }),
    endpointInfo: EndpointInfoSchema.exactOptional().openapi({
      description:
        'The source and destination endpoints derived from the test input and used for active probing.',
    }),
    error: StatusSchema.exactOptional().openapi({
      description: 'Details about an internal failure or the cancellation of active probing.',
    }),
    probingLatency: LatencyDistributionSchema.exactOptional().openapi({
      description:
        'Latency as measured by active probing in one direction: from the source to the destination endpoint.',
    }),
    result: z
      .enum([
        'PROBING_RESULT_UNSPECIFIED',
        'REACHABLE',
        'UNREACHABLE',
        'REACHABILITY_INCONSISTENT',
        'UNDETERMINED',
      ])
      .exactOptional()
      .openapi({ description: 'The overall result of active probing.' }),
    sentProbeCount: z.int32().exactOptional().openapi({ description: 'Number of probes sent.' }),
    successfulProbeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of probes that reached the destination.' }),
    verifyTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that reachability was assessed through active probing.' }),
  })
  .openapi({
    description: 'Results of active probing from the last run of the test.',
    required: [],
  })
  .openapi('ProbingDetails')

const DeliverInfoSchema = z
  .object({
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the resource that the packet is delivered to.' }),
    target: z
      .enum([
        'TARGET_UNSPECIFIED',
        'INSTANCE',
        'INTERNET',
        'GOOGLE_API',
        'GKE_MASTER',
        'CLOUD_SQL_INSTANCE',
        'PSC_PUBLISHED_SERVICE',
        'PSC_GOOGLE_API',
        'PSC_VPC_SC',
        'SERVERLESS_NEG',
      ])
      .exactOptional()
      .openapi({ description: 'Target type where the packet is delivered to.' }),
  })
  .openapi({
    description: 'Details of the final state "deliver" and associated resource.',
    required: [],
  })
  .openapi('DeliverInfo')

const DropInfoSchema = z
  .object({
    cause: z
      .enum([
        'CAUSE_UNSPECIFIED',
        'UNKNOWN_EXTERNAL_ADDRESS',
        'FOREIGN_IP_DISALLOWED',
        'FIREWALL_RULE',
        'NO_ROUTE',
        'ROUTE_BLACKHOLE',
        'ROUTE_WRONG_NETWORK',
        'PRIVATE_TRAFFIC_TO_INTERNET',
        'PRIVATE_GOOGLE_ACCESS_DISALLOWED',
        'NO_EXTERNAL_ADDRESS',
        'UNKNOWN_INTERNAL_ADDRESS',
        'FORWARDING_RULE_MISMATCH',
        'FORWARDING_RULE_REGION_MISMATCH',
        'FORWARDING_RULE_NO_INSTANCES',
        'FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK',
        'INSTANCE_NOT_RUNNING',
        'GKE_CLUSTER_NOT_RUNNING',
        'CLOUD_SQL_INSTANCE_NOT_RUNNING',
        'TRAFFIC_TYPE_BLOCKED',
        'GKE_MASTER_UNAUTHORIZED_ACCESS',
        'CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS',
        'DROPPED_INSIDE_GKE_SERVICE',
        'DROPPED_INSIDE_CLOUD_SQL_SERVICE',
        'GOOGLE_MANAGED_SERVICE_NO_PEERING',
        'GKE_PSC_ENDPOINT_MISSING',
        'CLOUD_SQL_INSTANCE_NO_IP_ADDRESS',
        'GKE_CONTROL_PLANE_REGION_MISMATCH',
        'PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION',
        'GKE_CONTROL_PLANE_NO_ROUTE',
        'CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC',
        'PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION',
        'CLOUD_SQL_INSTANCE_NO_ROUTE',
        'CLOUD_FUNCTION_NOT_ACTIVE',
        'VPC_CONNECTOR_NOT_SET',
        'VPC_CONNECTOR_NOT_RUNNING',
        'PSC_CONNECTION_NOT_ACCEPTED',
        'CLOUD_RUN_REVISION_NOT_READY',
        'DROPPED_INSIDE_PSC_SERVICE_PRODUCER',
      ])
      .exactOptional()
      .openapi({ description: 'Cause that the packet is dropped.' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the resource that caused the drop.' }),
  })
  .openapi({
    description: 'Details of the final state "drop" and associated resource.',
    required: [],
  })
  .openapi('DropInfo')

const FirewallInfoSchema = z
  .object({
    action: z.string().exactOptional().openapi({ description: 'Possible values: ALLOW, DENY' }),
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Possible values: INGRESS, EGRESS' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.',
      }),
    firewallRuleType: z
      .enum([
        'FIREWALL_RULE_TYPE_UNSPECIFIED',
        'HIERARCHICAL_FIREWALL_POLICY_RULE',
        'VPC_FIREWALL_RULE',
        'IMPLIED_VPC_FIREWALL_RULE',
        'SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE',
        'NETWORK_FIREWALL_POLICY_RULE',
      ])
      .exactOptional()
      .openapi({ description: "The firewall rule's type." }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules.',
      }),
    policy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules.',
      }),
    priority: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The priority of the firewall rule.' }),
    targetServiceAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The target service accounts specified by the firewall rule.' }),
    targetTags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules.',
      }),
  })
  .openapi({
    description:
      'For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.',
    required: [],
  })
  .openapi('FirewallInfo')

const ForwardInfoSchema = z
  .object({
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the resource that the packet is forwarded to.' }),
    target: z
      .enum([
        'TARGET_UNSPECIFIED',
        'PEERING_VPC',
        'VPN_GATEWAY',
        'INTERCONNECT',
        'GKE_MASTER',
        'IMPORTED_CUSTOM_ROUTE_NEXT_HOP',
        'CLOUD_SQL_INSTANCE',
        'ANOTHER_PROJECT',
      ])
      .exactOptional()
      .openapi({ description: 'Target type where this packet is forwarded to.' }),
  })
  .openapi({
    description: 'Details of the final state "forward" and associated resource.',
    required: [],
  })
  .openapi('ForwardInfo')

const ForwardingRuleInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a Compute Engine forwarding rule.' }),
    matchedPortRange: z
      .string()
      .exactOptional()
      .openapi({ description: 'Port range defined in the forwarding rule that matches the test.' }),
    matchedProtocol: z
      .string()
      .exactOptional()
      .openapi({ description: 'Protocol defined in the forwarding rule that matches the test.' }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Network URI. Only valid for Internal Load Balancer.' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'Target type of the forwarding rule.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of a Compute Engine forwarding rule.' }),
    vip: z.string().exactOptional().openapi({ description: 'VIP of the forwarding rule.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Compute Engine forwarding rule.',
    required: [],
  })
  .openapi('ForwardingRuleInfo')

const GKEMasterInfoSchema = z
  .object({
    clusterNetworkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of a GKE cluster network.' }),
    clusterUri: z.string().exactOptional().openapi({ description: 'URI of a GKE cluster.' }),
    externalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'External IP address of a GKE cluster master.' }),
    internalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal IP address of a GKE cluster master.' }),
  })
  .openapi({
    description:
      'For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.',
    required: [],
  })
  .openapi('GKEMasterInfo')

const InstanceInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a Compute Engine instance.' }),
    externalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'External IP address of the network interface.' }),
    interface: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the network interface of a Compute Engine instance.' }),
    internalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal IP address of the network interface.' }),
    networkTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Network tags configured on the instance.' }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of a Compute Engine network.' }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service account authorized for the instance.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a Compute Engine instance.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Compute Engine instance.',
    required: [],
  })
  .openapi('InstanceInfo')

const LoadBalancerBackendSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a Compute Engine instance or network endpoint.' }),
    healthCheckAllowingFirewallRules: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of firewall rule URIs allowing probes from health check IP ranges.',
      }),
    healthCheckBlockingFirewallRules: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of firewall rule URIs blocking probes from health check IP ranges.',
      }),
    healthCheckFirewallState: z
      .enum(['HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED', 'CONFIGURED', 'MISCONFIGURED'])
      .exactOptional()
      .openapi({ description: 'State of the health check firewall configuration.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of a Compute Engine instance or network endpoint.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a specific load balancer backend.',
    required: [],
  })
  .openapi('LoadBalancerBackend')

const LoadBalancerInfoSchema = z
  .object({
    backendType: z
      .enum(['BACKEND_TYPE_UNSPECIFIED', 'BACKEND_SERVICE', 'TARGET_POOL', 'TARGET_INSTANCE'])
      .exactOptional()
      .openapi({ description: "Type of load balancer's backend configuration." }),
    backendUri: z.string().exactOptional().openapi({ description: 'Backend configuration URI.' }),
    backends: z
      .array(LoadBalancerBackendSchema)
      .exactOptional()
      .openapi({ description: 'Information for the loadbalancer backends.' }),
    healthCheckUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the health check for the load balancer.' }),
    loadBalancerType: z
      .enum([
        'LOAD_BALANCER_TYPE_UNSPECIFIED',
        'INTERNAL_TCP_UDP',
        'NETWORK_TCP_UDP',
        'HTTP_PROXY',
        'TCP_PROXY',
        'SSL_PROXY',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the load balancer.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a load balancer.',
    required: [],
  })
  .openapi('LoadBalancerInfo')

const NetworkInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a Compute Engine network.' }),
    matchedIpRange: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP range that matches the test.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a Compute Engine network.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Compute Engine network.',
    required: [],
  })
  .openapi('NetworkInfo')

const RouteInfoSchema = z
  .object({
    destIpRange: z
      .string()
      .exactOptional()
      .openapi({ description: 'Destination IP range of the route.' }),
    destPortRanges: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Destination port ranges of the route. Policy based routes only.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a Compute Engine route.' }),
    instanceTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Instance tags of the route.' }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of a Compute Engine network.' }),
    nextHop: z.string().exactOptional().openapi({ description: 'Next hop of the route.' }),
    nextHopType: z
      .enum([
        'NEXT_HOP_TYPE_UNSPECIFIED',
        'NEXT_HOP_IP',
        'NEXT_HOP_INSTANCE',
        'NEXT_HOP_NETWORK',
        'NEXT_HOP_PEERING',
        'NEXT_HOP_INTERCONNECT',
        'NEXT_HOP_VPN_TUNNEL',
        'NEXT_HOP_VPN_GATEWAY',
        'NEXT_HOP_INTERNET_GATEWAY',
        'NEXT_HOP_BLACKHOLE',
        'NEXT_HOP_ILB',
        'NEXT_HOP_ROUTER_APPLIANCE',
      ])
      .exactOptional()
      .openapi({ description: 'Type of next hop.' }),
    priority: z.int32().exactOptional().openapi({ description: 'Priority of the route.' }),
    protocols: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Protocols of the route. Policy based routes only.' }),
    routeType: z
      .enum([
        'ROUTE_TYPE_UNSPECIFIED',
        'SUBNET',
        'STATIC',
        'DYNAMIC',
        'PEERING_SUBNET',
        'PEERING_STATIC',
        'PEERING_DYNAMIC',
        'POLICY_BASED',
      ])
      .exactOptional()
      .openapi({ description: 'Type of route.' }),
    srcIpRange: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source IP address range of the route. Policy based routes only.' }),
    srcPortRanges: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Source port ranges of the route. Policy based routes only.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI of a Compute Engine route. Dynamic route from cloud router does not have a URI. Advertised route from Google Cloud VPC to on-premises network also does not have a URI.',
      }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Compute Engine route.',
    required: [],
  })
  .openapi('RouteInfo')

const VpcConnectorInfoSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Name of a VPC connector.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location in which the VPC connector is deployed.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a VPC connector.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a VPC connector.',
    required: [],
  })
  .openapi('VpcConnectorInfo')

const VpnGatewayInfoSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Name of a VPN gateway.' }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of the VPN gateway.' }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URI of a Compute Engine network where the VPN gateway is configured.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of a Google Cloud region where this VPN gateway is configured.',
      }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a VPN gateway.' }),
    vpnTunnelUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed.',
      }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Compute Engine VPN gateway.',
    required: [],
  })
  .openapi('VpnGatewayInfo')

const VpnTunnelInfoSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Name of a VPN tunnel.' }),
    networkUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URI of a Compute Engine network where the VPN tunnel is configured.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of a Google Cloud region where this VPN tunnel is configured.',
      }),
    remoteGateway: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of a VPN gateway at remote end of the tunnel.' }),
    remoteGatewayIp: z
      .string()
      .exactOptional()
      .openapi({ description: "Remote VPN gateway's IP address." }),
    routingType: z
      .enum(['ROUTING_TYPE_UNSPECIFIED', 'ROUTE_BASED', 'POLICY_BASED', 'DYNAMIC'])
      .exactOptional()
      .openapi({ description: 'Type of the routing policy.' }),
    sourceGateway: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the VPN gateway at local end of the tunnel.' }),
    sourceGatewayIp: z
      .string()
      .exactOptional()
      .openapi({ description: "Local VPN gateway's IP address." }),
    uri: z.string().exactOptional().openapi({ description: 'URI of a VPN tunnel.' }),
  })
  .openapi({
    description: 'For display only. Metadata associated with a Compute Engine VPN tunnel.',
    required: [],
  })
  .openapi('VpnTunnelInfo')

const StepSchema = z
  .object({
    abort: AbortInfoSchema.exactOptional().openapi({
      description: 'Display information of the final state "abort" and reason.',
    }),
    appEngineVersion: AppEngineVersionInfoSchema.exactOptional().openapi({
      description: 'Display information of an App Engine service version.',
    }),
    causesDrop: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'This is a step that leads to the final state Drop.' }),
    cloudFunction: CloudFunctionInfoSchema.exactOptional().openapi({
      description: 'Display information of a Cloud Function.',
    }),
    cloudRunRevision: CloudRunRevisionInfoSchema.exactOptional().openapi({
      description: 'Display information of a Cloud Run revision.',
    }),
    cloudSqlInstance: CloudSQLInstanceInfoSchema.exactOptional().openapi({
      description: 'Display information of a Cloud SQL instance.',
    }),
    deliver: DeliverInfoSchema.exactOptional().openapi({
      description: 'Display information of the final state "deliver" and reason.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the step. Usually this is a summary of the state.',
      }),
    drop: DropInfoSchema.exactOptional().openapi({
      description: 'Display information of the final state "drop" and reason.',
    }),
    endpoint: EndpointInfoSchema.exactOptional().openapi({
      description:
        'Display information of the source and destination under analysis. The endpoint information in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy.',
    }),
    firewall: FirewallInfoSchema.exactOptional().openapi({
      description: 'Display information of a Compute Engine firewall rule.',
    }),
    forward: ForwardInfoSchema.exactOptional().openapi({
      description: 'Display information of the final state "forward" and reason.',
    }),
    forwardingRule: ForwardingRuleInfoSchema.exactOptional().openapi({
      description: 'Display information of a Compute Engine forwarding rule.',
    }),
    gkeMaster: GKEMasterInfoSchema.exactOptional().openapi({
      description: 'Display information of a Google Kubernetes Engine cluster master.',
    }),
    instance: InstanceInfoSchema.exactOptional().openapi({
      description: 'Display information of a Compute Engine instance.',
    }),
    loadBalancer: LoadBalancerInfoSchema.exactOptional().openapi({
      description: 'Display information of the load balancers.',
    }),
    network: NetworkInfoSchema.exactOptional().openapi({
      description: 'Display information of a Google Cloud network.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Project ID that contains the configuration this step is validating.',
      }),
    route: RouteInfoSchema.exactOptional().openapi({
      description: 'Display information of a Compute Engine route.',
    }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'START_FROM_INSTANCE',
        'START_FROM_INTERNET',
        'START_FROM_PRIVATE_NETWORK',
        'START_FROM_GKE_MASTER',
        'START_FROM_CLOUD_SQL_INSTANCE',
        'START_FROM_CLOUD_FUNCTION',
        'START_FROM_APP_ENGINE_VERSION',
        'START_FROM_CLOUD_RUN_REVISION',
        'APPLY_INGRESS_FIREWALL_RULE',
        'APPLY_EGRESS_FIREWALL_RULE',
        'APPLY_ROUTE',
        'APPLY_FORWARDING_RULE',
        'SPOOFING_APPROVED',
        'ARRIVE_AT_INSTANCE',
        'ARRIVE_AT_INTERNAL_LOAD_BALANCER',
        'ARRIVE_AT_EXTERNAL_LOAD_BALANCER',
        'ARRIVE_AT_VPN_GATEWAY',
        'ARRIVE_AT_VPN_TUNNEL',
        'ARRIVE_AT_VPC_CONNECTOR',
        'NAT',
        'PROXY_CONNECTION',
        'DELIVER',
        'DROP',
        'FORWARD',
        'ABORT',
        'VIEWER_PERMISSION_MISSING',
      ])
      .exactOptional()
      .openapi({ description: 'Each step is in one of the pre-defined states.' }),
    vpcConnector: VpcConnectorInfoSchema.exactOptional().openapi({
      description: 'Display information of a VPC connector.',
    }),
    vpnGateway: VpnGatewayInfoSchema.exactOptional().openapi({
      description: 'Display information of a Compute Engine VPN gateway.',
    }),
    vpnTunnel: VpnTunnelInfoSchema.exactOptional().openapi({
      description: 'Display information of a Compute Engine VPN tunnel.',
    }),
  })
  .openapi({
    description:
      'A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.',
    required: [],
  })
  .openapi('Step')

const TraceSchema = z
  .object({
    endpointInfo: EndpointInfoSchema.exactOptional().openapi({
      description:
        'Derived from the source and destination endpoints definition specified by user request, and validated by the data plane model. If there are multiple traces starting from different source locations, then the endpoint_info may be different between traces.',
    }),
    steps: z
      .array(StepSchema)
      .exactOptional()
      .openapi({
        description:
          'A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted). The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them.',
      }),
  })
  .openapi({
    description:
      'Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```',
    required: [],
  })
  .openapi('Trace')

const ReachabilityDetailsSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description: 'The details of a failure or a cancellation of reachability analysis.',
    }),
    result: z
      .enum(['RESULT_UNSPECIFIED', 'REACHABLE', 'UNREACHABLE', 'AMBIGUOUS', 'UNDETERMINED'])
      .exactOptional()
      .openapi({ description: "The overall result of the test's configuration analysis." }),
    traces: z
      .array(TraceSchema)
      .exactOptional()
      .openapi({
        description:
          'Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.',
      }),
    verifyTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time of the configuration analysis.' }),
  })
  .openapi({
    description: 'Results of the configuration analysis from the last run of the test.',
    required: [],
  })
  .openapi('ReachabilityDetails')

const ConnectivityTestSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the test was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-supplied description of the Connectivity Test. Maximum of 512 characters.',
      }),
    destination: EndpointSchema.exactOptional().openapi({
      description:
        "Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location. Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information. If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address or VPC network to identify the destination interface. A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don't intend to test.",
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of a Connectivity Test.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Resource labels to represent user-provided metadata.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`',
      }),
    probingDetails: ProbingDetailsSchema.exactOptional().openapi({
      description:
        'Output only. The probing details of this test from the latest run, present for applicable tests only. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.',
      readOnly: true,
    }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP Protocol of the test. When not provided, "TCP" is assumed.' }),
    reachabilityDetails: ReachabilityDetailsSchema.exactOptional().openapi({
      description:
        'Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.',
      readOnly: true,
    }),
    relatedProjects: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.',
      }),
    source: EndpointSchema.exactOptional().openapi({
      description:
        "Required. Source specification of the Connectivity Test. You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location. Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information. If the source of the test is within an on-premises network, then you must provide the destination VPC network. If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network. A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don't intend to test.",
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. The time the test's configuration was updated.",
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A Connectivity Test for a network reachability analysis.',
    required: [],
  })
  .openapi('ConnectivityTest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ListConnectivityTestsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page token to fetch the next set of Connectivity Tests.' }),
    resources: z
      .array(ConnectivityTestSchema)
      .exactOptional()
      .openapi({ description: 'List of Connectivity Tests.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Locations that could not be reached (when querying all locations with `-`).',
      }),
  })
  .openapi({ description: 'Response for the `ListConnectivityTests` method.', required: [] })
  .openapi('ListConnectivityTestsResponse')

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
          'Target of the operation - for example projects/project-1/locations/global/connectivityTests/test-1',
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({ description: 'Metadata describing an Operation', required: [] })
  .openapi('OperationMetadata')

const PolicySchema = z
  .object({
    auditConfigs: z
      .array(AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
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

const RerunConnectivityTestRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `RerunConnectivityTest` method.' })
  .openapi('RerunConnectivityTestRequest')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
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
  operationId: 'networkmanagement.projects.locations.global.operations.get',
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

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'networkmanagement.projects.locations.global.operations.delete',
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
  description:
    'Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.',
  operationId: 'networkmanagement.projects.locations.global.connectivityTests.patch',
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
              'Required. Mask of fields to update. At least one path must be supplied in this field.',
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
              'Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectivityTestSchema } } },
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

export const getV1beta1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'networkmanagement.projects.locations.list',
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
  operationId: 'networkmanagement.projects.locations.global.operations.list',
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

export const postV1beta1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'networkmanagement.projects.locations.global.operations.cancel',
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

export const postV1beta1NameRerunRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:rerun',
  tags: ['projects'],
  description:
    'Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.',
  operationId: 'networkmanagement.projects.locations.global.connectivityTests.rerun',
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
              'Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RerunConnectivityTestRequestSchema } } },
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

export const getV1beta1ParentConnectivityTestsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/connectivityTests',
  tags: ['projects'],
  description: 'Lists all Connectivity Tests owned by a project.',
  operationId: 'networkmanagement.projects.locations.global.connectivityTests.list',
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
              'Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar',
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
            description: 'Field to use to sort the list.',
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
            description: 'Number of `ConnectivityTests` to return.',
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
            description: 'Page token from an earlier query, as returned in `next_page_token`.',
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
              'Required. The parent resource of the Connectivity Tests: `projects/{project_id}/locations/global`',
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
      content: { 'application/json': { schema: ListConnectivityTestsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentConnectivityTestsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/connectivityTests',
  tags: ['projects'],
  description:
    "Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.",
  operationId: 'networkmanagement.projects.locations.global.connectivityTests.create',
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
      testId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project',
            in: 'query',
            name: 'testId',
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
              'Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectivityTestSchema } } },
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

export const getV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'networkmanagement.projects.locations.global.connectivityTests.getIamPolicy',
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
  operationId: 'networkmanagement.projects.locations.global.connectivityTests.setIamPolicy',
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
  operationId: 'networkmanagement.projects.locations.global.connectivityTests.testIamPermissions',
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
