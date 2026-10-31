import { createRoute, z } from '@hono/zod-openapi'

const RRSetRoutingPolicyLoadBalancerTargetSchema = z
  .object({
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The frontend IP address of the load balancer to health check.' }),
    ipProtocol: z
      .enum(['UNDEFINED', 'TCP', 'UDP'])
      .exactOptional()
      .openapi({ description: 'The protocol of the load balancer to health check.' }),
    kind: z.string().default('dns#rRSetRoutingPolicyLoadBalancerTarget').exactOptional(),
    loadBalancerType: z
      .enum(['NONE', 'GLOBAL_L7ILB', 'REGIONAL_L4ILB', 'REGIONAL_L7ILB'])
      .exactOptional()
      .openapi({
        description:
          "The type of load balancer specified by this target. This value must match the configuration of the load balancer located at the LoadBalancerTarget's IP address, port, and region. Use the following: - *regionalL4ilb*: for a regional internal passthrough Network Load Balancer. - *regionalL7ilb*: for a regional internal Application Load Balancer. - *globalL7ilb*: for a global internal Application Load Balancer. ",
      }),
    networkUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified URL of the network that the load balancer is attached to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} .',
      }),
    port: z
      .string()
      .exactOptional()
      .openapi({ description: 'The configured port of the load balancer.' }),
    project: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project ID in which the load balancer is located.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region in which the load balancer is located.' }),
  })
  .openapi({
    description: 'The configuration for an individual load balancer to health check.',
    required: [],
  })
  .openapi('RRSetRoutingPolicyLoadBalancerTarget')

const RRSetRoutingPolicyHealthCheckTargetsSchema = z
  .object({
    externalEndpoints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The Internet IP addresses to be health checked. The format matches the format of ResourceRecordSet.rrdata as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)',
      }),
    internalLoadBalancers: z
      .array(RRSetRoutingPolicyLoadBalancerTargetSchema)
      .exactOptional()
      .openapi({ description: 'Configuration for internal load balancers to be health checked.' }),
  })
  .openapi({
    description:
      'HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set.',
    required: [],
  })
  .openapi('RRSetRoutingPolicyHealthCheckTargets')

const RRSetRoutingPolicyGeoPolicyGeoPolicyItemSchema = z
  .object({
    healthCheckedTargets: RRSetRoutingPolicyHealthCheckTargetsSchema.exactOptional().openapi({
      description:
        'For A and AAAA types only. Endpoints to return in the query result only if they are healthy. These can be specified along with rrdata within this item.',
    }),
    kind: z.string().default('dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem').exactOptional(),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g. "us-east1", "southamerica-east1", "asia-east1", etc.',
      }),
    rrdatas: z.array(z.string()).exactOptional(),
    signatureRrdatas: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "DNSSEC generated signatures for all the rrdata within this item. If health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item.",
      }),
  })
  .openapi({ description: 'ResourceRecordSet data for one geo location.', required: [] })
  .openapi('RRSetRoutingPolicyGeoPolicyGeoPolicyItem')

const RRSetRoutingPolicyGeoPolicySchema = z
  .object({
    enableFencing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Without fencing, if health check fails for all configured items in the current geo bucket, we failover to the next nearest geo bucket. With fencing, if health checking is enabled, as long as some targets in the current geo bucket are healthy, we return only the healthy targets. However, if all targets are unhealthy, we don't failover to the next nearest bucket; instead, we return all the items in the current bucket even when all targets are unhealthy.",
      }),
    items: z
      .array(RRSetRoutingPolicyGeoPolicyGeoPolicyItemSchema)
      .exactOptional()
      .openapi({
        description:
          'The primary geo routing configuration. If there are multiple items with the same location, an error is returned instead.',
      }),
    kind: z.string().default('dns#rRSetRoutingPolicyGeoPolicy').exactOptional(),
  })
  .openapi({
    description:
      'Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.',
    required: [],
  })
  .openapi('RRSetRoutingPolicyGeoPolicy')

const RRSetRoutingPolicyPrimaryBackupPolicySchema = z
  .object({
    backupGeoTargets: RRSetRoutingPolicyGeoPolicySchema.exactOptional().openapi({
      description:
        'Backup targets provide a regional failover policy for the otherwise global primary targets. If serving state is set to BACKUP, this policy essentially becomes a geo routing policy.',
    }),
    kind: z.string().default('dns#rRSetRoutingPolicyPrimaryBackupPolicy').exactOptional(),
    primaryTargets: RRSetRoutingPolicyHealthCheckTargetsSchema.exactOptional().openapi({
      description:
        'Endpoints that are health checked before making the routing decision. Unhealthy endpoints are omitted from the results. If all endpoints are unhealthy, we serve a response based on the backup_geo_targets.',
    }),
    trickleTraffic: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'When serving state is PRIMARY, this field provides the option of sending a small percentage of the traffic to the backup targets.',
      }),
  })
  .openapi({
    description:
      'Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.',
    required: [],
  })
  .openapi('RRSetRoutingPolicyPrimaryBackupPolicy')

const RRSetRoutingPolicyWrrPolicyWrrPolicyItemSchema = z
  .object({
    healthCheckedTargets: RRSetRoutingPolicyHealthCheckTargetsSchema.exactOptional().openapi({
      description:
        'Endpoints that are health checked before making the routing decision. The unhealthy endpoints are omitted from the result. If all endpoints within a bucket are unhealthy, we choose a different bucket (sampled with respect to its weight) for responding. If DNSSEC is enabled for this zone, only one of rrdata or health_checked_targets can be set.',
    }),
    kind: z.string().default('dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem').exactOptional(),
    rrdatas: z.array(z.string()).exactOptional(),
    signatureRrdatas: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "DNSSEC generated signatures for all the rrdata within this item. Note that if health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item.",
      }),
    weight: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The weight corresponding to this WrrPolicyItem object. When multiple WrrPolicyItem objects are configured, the probability of returning an WrrPolicyItem object's data is proportional to its weight relative to the sum of weights configured for all items. This weight must be non-negative.",
      }),
  })
  .openapi({
    description: 'A routing block which contains the routing information for one WRR item.',
    required: [],
  })
  .openapi('RRSetRoutingPolicyWrrPolicyWrrPolicyItem')

const RRSetRoutingPolicyWrrPolicySchema = z
  .object({
    items: z.array(RRSetRoutingPolicyWrrPolicyWrrPolicyItemSchema).exactOptional(),
    kind: z.string().default('dns#rRSetRoutingPolicyWrrPolicy').exactOptional(),
  })
  .openapi({
    description: 'Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.',
    required: [],
  })
  .openapi('RRSetRoutingPolicyWrrPolicy')

const RRSetRoutingPolicySchema = z
  .object({
    geo: RRSetRoutingPolicyGeoPolicySchema.exactOptional(),
    healthCheck: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The selfLink attribute of the HealthCheck resource to use for this RRSetRoutingPolicy. https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks',
      }),
    kind: z.string().default('dns#rRSetRoutingPolicy').exactOptional(),
    primaryBackup: RRSetRoutingPolicyPrimaryBackupPolicySchema.exactOptional(),
    wrr: RRSetRoutingPolicyWrrPolicySchema.exactOptional(),
  })
  .openapi({
    description:
      'A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.',
    required: [],
  })
  .openapi('RRSetRoutingPolicy')

const ResourceRecordSetSchema = z
  .object({
    kind: z.string().default('dns#resourceRecordSet').exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'For example, www.example.com.' }),
    routingPolicy: RRSetRoutingPolicySchema.exactOptional().openapi({
      description:
        'Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid ResourceRecordSet contains only rrdata (for static resolution) or a routing_policy (for dynamic resolution).',
    }),
    rrdatas: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.',
      }),
    signatureRrdatas: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'As defined in RFC 4034 (section 3.2).' }),
    ttl: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of seconds that this ResourceRecordSet can be cached by resolvers.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of a supported record type. See the list of Supported DNS record types.',
      }),
  })
  .openapi({ description: 'A unit of data that is returned by the DNS servers.', required: [] })
  .openapi('ResourceRecordSet')

const ChangeSchema = z
  .object({
    additions: z
      .array(ResourceRecordSetSchema)
      .exactOptional()
      .openapi({ description: 'Which ResourceRecordSets to add?' }),
    deletions: z
      .array(ResourceRecordSetSchema)
      .exactOptional()
      .openapi({
        description: 'Which ResourceRecordSets to remove? Must match existing data exactly.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the resource; defined by the server (output only).',
      }),
    isServing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the DNS queries for the zone will be served.' }),
    kind: z.string().default('dns#change').exactOptional(),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that this operation was started by the server (output only). This is in RFC3339 text format.',
      }),
    status: z
      .enum(['PENDING', 'DONE'])
      .exactOptional()
      .openapi({
        description:
          'Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.',
      }),
  })
  .openapi({
    description:
      'A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.',
    required: [],
  })
  .openapi('Change')

const ResponseHeaderSchema = z
  .object({
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only).',
      }),
  })
  .openapi({ description: 'Elements common to every response.', required: [] })
  .openapi('ResponseHeader')

const ChangesListResponseSchema = z
  .object({
    changes: z
      .array(ChangeSchema)
      .exactOptional()
      .openapi({ description: 'The requested changes.' }),
    header: ResponseHeaderSchema.exactOptional(),
    kind: z
      .string()
      .default('dns#changesListResponse')
      .exactOptional()
      .openapi({ description: 'Type of resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a "snapshot" of collections larger than the maximum page size.',
      }),
  })
  .openapi({
    description:
      'The response to a request to enumerate Changes to a ResourceRecordSets collection.',
    required: [],
  })
  .openapi('ChangesListResponse')

const DnsKeyDigestSchema = z
  .object({
    digest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.',
      }),
    type: z
      .enum(['SHA1', 'SHA256', 'SHA384'])
      .exactOptional()
      .openapi({ description: 'Specifies the algorithm used to calculate this digest.' }),
  })
  .openapi({ required: [] })
  .openapi('DnsKeyDigest')

const DnsKeySchema = z
  .object({
    algorithm: z
      .enum(['RSASHA1', 'RSASHA256', 'RSASHA512', 'ECDSAP256SHA256', 'ECDSAP384SHA384'])
      .exactOptional()
      .openapi({
        description:
          'String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time.',
      }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that this resource was created in the control plane. This is in RFC3339 text format. Output only.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function.",
      }),
    digests: z
      .array(DnsKeyDigestSchema)
      .exactOptional()
      .openapi({
        description:
          'Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the resource; defined by the server (output only).',
      }),
    isActive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Active keys are used to sign subsequent changes to the ManagedZone. Inactive keys are still present as DNSKEY Resource Records for the use of resolvers validating existing signatures.',
      }),
    keyLength: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'Length of the key in bits. Specified at creation time, and then immutable.',
      }),
    keyTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.",
      }),
    kind: z.string().default('dns#dnsKey').exactOptional(),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base64 encoded public half of this key. Output only.' }),
    type: z
      .enum(['KEY_SIGNING', 'ZONE_SIGNING'])
      .exactOptional()
      .openapi({
        description:
          'One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, are used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag is cleared, and this key is used to sign only resource record sets of other types. Immutable after creation time.',
      }),
  })
  .openapi({ description: 'A DNSSEC key pair.', required: [] })
  .openapi('DnsKey')

const DnsKeySpecSchema = z
  .object({
    algorithm: z
      .enum(['RSASHA1', 'RSASHA256', 'RSASHA512', 'ECDSAP256SHA256', 'ECDSAP384SHA384'])
      .exactOptional()
      .openapi({ description: 'String mnemonic specifying the DNSSEC algorithm of this key.' }),
    keyLength: z.uint32().exactOptional().openapi({ description: 'Length of the keys in bits.' }),
    keyType: z
      .enum(['KEY_SIGNING', 'ZONE_SIGNING'])
      .exactOptional()
      .openapi({
        description:
          'Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets.',
      }),
    kind: z.string().default('dns#dnsKeySpec').exactOptional(),
  })
  .openapi({
    description:
      'Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.',
    required: [],
  })
  .openapi('DnsKeySpec')

const DnsKeysListResponseSchema = z
  .object({
    dnsKeys: z
      .array(DnsKeySchema)
      .exactOptional()
      .openapi({ description: 'The requested resources.' }),
    header: ResponseHeaderSchema.exactOptional(),
    kind: z
      .string()
      .default('dns#dnsKeysListResponse')
      .exactOptional()
      .openapi({ description: 'Type of resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.',
      }),
  })
  .openapi({
    description: 'The response to a request to enumerate DnsKeys in a ManagedZone.',
    required: [],
  })
  .openapi('DnsKeysListResponse')

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

const GoogleIamV1BindingSchema = z
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

const GoogleIamV1GetPolicyOptionsSchema = z
  .object({
    requestedPolicyVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({ description: 'Encapsulates settings provided to GetIamPolicy.', required: [] })
  .openapi('GoogleIamV1GetPolicyOptions')

const GoogleIamV1GetIamPolicyRequestSchema = z
  .object({
    options: GoogleIamV1GetPolicyOptionsSchema.exactOptional().openapi({
      description:
        'OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.',
    }),
  })
  .openapi({ description: 'Request message for `GetIamPolicy` method.', required: [] })
  .openapi('GoogleIamV1GetIamPolicyRequest')

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

const ManagedZoneCloudLoggingConfigSchema = z
  .object({
    enableLogging: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, enable query logging for this ManagedZone. False by default, making logging opt-in.',
      }),
    kind: z.string().default('dns#managedZoneCloudLoggingConfig').exactOptional(),
  })
  .openapi({
    description: 'Cloud Logging configurations for publicly visible zones.',
    required: [],
  })
  .openapi('ManagedZoneCloudLoggingConfig')

const ManagedZoneDnsSecConfigSchema = z
  .object({
    defaultKeySpecs: z
      .array(DnsKeySpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF.',
      }),
    kind: z.string().default('dns#managedZoneDnsSecConfig').exactOptional(),
    nonExistence: z
      .enum(['NSEC', 'NSEC3'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF.',
      }),
    state: z
      .enum(['OFF', 'ON', 'TRANSFER'])
      .exactOptional()
      .openapi({ description: 'Specifies whether DNSSEC is enabled, and what mode it is in.' }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZoneDnsSecConfig')

const ManagedZoneForwardingConfigNameServerTargetSchema = z
  .object({
    forwardingPath: z
      .enum(['DEFAULT', 'PRIVATE'])
      .exactOptional()
      .openapi({
        description:
          'Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.',
      }),
    ipv4Address: z
      .string()
      .exactOptional()
      .openapi({ description: 'IPv4 address of a target name server.' }),
    ipv6Address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.',
      }),
    kind: z.string().default('dns#managedZoneForwardingConfigNameServerTarget').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManagedZoneForwardingConfigNameServerTarget')

const ManagedZoneForwardingConfigSchema = z
  .object({
    kind: z.string().default('dns#managedZoneForwardingConfig').exactOptional(),
    targetNameServers: z
      .array(ManagedZoneForwardingConfigNameServerTargetSchema)
      .exactOptional()
      .openapi({
        description:
          'List of target name servers to forward to. Cloud DNS selects the best available name server if more than one target is given.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZoneForwardingConfig')

const ManagedZonePeeringConfigTargetNetworkSchema = z
  .object({
    deactivateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only.',
      }),
    kind: z.string().default('dns#managedZonePeeringConfigTargetNetwork').exactOptional(),
    networkUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}',
      }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZonePeeringConfigTargetNetwork')

const ManagedZonePeeringConfigSchema = z
  .object({
    kind: z.string().default('dns#managedZonePeeringConfig').exactOptional(),
    targetNetwork: ManagedZonePeeringConfigTargetNetworkSchema.exactOptional().openapi({
      description: 'The network with which to peer.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZonePeeringConfig')

const ManagedZonePrivateVisibilityConfigGKEClusterSchema = z
  .object({
    gkeClusterName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like: projects/*/locations/*/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get',
      }),
    kind: z.string().default('dns#managedZonePrivateVisibilityConfigGKECluster').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManagedZonePrivateVisibilityConfigGKECluster')

const ManagedZonePrivateVisibilityConfigNetworkSchema = z
  .object({
    kind: z.string().default('dns#managedZonePrivateVisibilityConfigNetwork').exactOptional(),
    networkUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified URL of the VPC network to bind to. Format this URL like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}',
      }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZonePrivateVisibilityConfigNetwork')

const ManagedZonePrivateVisibilityConfigSchema = z
  .object({
    gkeClusters: z
      .array(ManagedZonePrivateVisibilityConfigGKEClusterSchema)
      .exactOptional()
      .openapi({
        description: 'The list of Google Kubernetes Engine clusters that can see this zone.',
      }),
    kind: z.string().default('dns#managedZonePrivateVisibilityConfig').exactOptional(),
    networks: z
      .array(ManagedZonePrivateVisibilityConfigNetworkSchema)
      .exactOptional()
      .openapi({ description: 'The list of VPC networks that can see this zone.' }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZonePrivateVisibilityConfig')

const ManagedZoneReverseLookupConfigSchema = z
  .object({ kind: z.string().default('dns#managedZoneReverseLookupConfig').exactOptional() })
  .openapi({ required: [] })
  .openapi('ManagedZoneReverseLookupConfig')

const ManagedZoneServiceDirectoryConfigNamespaceSchema = z
  .object({
    deletionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that the namespace backing this zone was deleted; an empty string if it still exists. This is in RFC3339 text format. Output only.',
      }),
    kind: z.string().default('dns#managedZoneServiceDirectoryConfigNamespace').exactOptional(),
    namespaceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified URL of the namespace associated with the zone. Format must be https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace}',
      }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZoneServiceDirectoryConfigNamespace')

const ManagedZoneServiceDirectoryConfigSchema = z
  .object({
    kind: z.string().default('dns#managedZoneServiceDirectoryConfig').exactOptional(),
    namespace: ManagedZoneServiceDirectoryConfigNamespaceSchema.exactOptional().openapi({
      description: 'Contains information about the namespace associated with the zone.',
    }),
  })
  .openapi({
    description: 'Contains information about Service Directory-backed zones.',
    required: [],
  })
  .openapi('ManagedZoneServiceDirectoryConfig')

const ManagedZoneSchema = z
  .object({
    cloudLoggingConfig: ManagedZoneCloudLoggingConfigSchema.exactOptional(),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that this resource was created on the server. This is in RFC3339 text format. Output only.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.",
      }),
    dnsName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The DNS name of this managed zone, for instance "example.com.".' }),
    dnssecConfig: ManagedZoneDnsSecConfigSchema.exactOptional().openapi({
      description: 'DNSSEC configuration.',
    }),
    forwardingConfig: ManagedZoneForwardingConfigSchema.exactOptional().openapi({
      description:
        'The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the resource; defined by the server (output only)',
      }),
    kind: z.string().default('dns#managedZone').exactOptional(),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'User labels.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.',
      }),
    nameServerSet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.',
      }),
    nameServers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Delegate your managed_zone to these virtual name servers; defined by the server (output only)',
      }),
    peeringConfig: ManagedZonePeeringConfigSchema.exactOptional().openapi({
      description:
        'The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.',
    }),
    privateVisibilityConfig: ManagedZonePrivateVisibilityConfigSchema.exactOptional().openapi({
      description:
        'For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from.',
    }),
    reverseLookupConfig: ManagedZoneReverseLookupConfigSchema.exactOptional().openapi({
      description:
        'The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config.',
    }),
    serviceDirectoryConfig: ManagedZoneServiceDirectoryConfigSchema.exactOptional().openapi({
      description:
        'This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones.',
    }),
    visibility: z
      .enum(['PUBLIC', 'PRIVATE'])
      .exactOptional()
      .openapi({
        description:
          "The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.",
      }),
  })
  .openapi({
    description:
      'A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.',
    required: [],
  })
  .openapi('ManagedZone')

const OperationDnsKeyContextSchema = z
  .object({
    newValue: DnsKeySchema.exactOptional().openapi({
      description: 'The post-operation DnsKey resource.',
    }),
    oldValue: DnsKeySchema.exactOptional().openapi({
      description: 'The pre-operation DnsKey resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OperationDnsKeyContext')

const OperationManagedZoneContextSchema = z
  .object({
    newValue: ManagedZoneSchema.exactOptional().openapi({
      description: 'The post-operation ManagedZone resource.',
    }),
    oldValue: ManagedZoneSchema.exactOptional().openapi({
      description: 'The pre-operation ManagedZone resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OperationManagedZoneContext')

const OperationSchema = z
  .object({
    dnsKeyContext: OperationDnsKeyContextSchema.exactOptional().openapi({
      description: 'Only populated if the operation targeted a DnsKey (output only).',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only)',
      }),
    kind: z.string().default('dns#operation').exactOptional(),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that this operation was started by the server. This is in RFC3339 text format (output only).',
      }),
    status: z
      .enum(['PENDING', 'DONE'])
      .exactOptional()
      .openapi({
        description:
          'Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only). A status of "DONE" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the operation. Operations include insert, update, and delete (output only).',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User who requested the operation, for example: user@example.com. cloud-dns-system for operations automatically done by the system. (output only)',
      }),
    zoneContext: OperationManagedZoneContextSchema.exactOptional().openapi({
      description: 'Only populated if the operation targeted a ManagedZone (output only).',
    }),
  })
  .openapi({
    description:
      'An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.',
    required: [],
  })
  .openapi('Operation')

const ManagedZoneOperationsListResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    kind: z.string().default('dns#managedZoneOperationsListResponse').exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.',
      }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({ description: 'The operation resources.' }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZoneOperationsListResponse')

const ManagedZonesListResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    kind: z
      .string()
      .default('dns#managedZonesListResponse')
      .exactOptional()
      .openapi({ description: 'Type of resource.' }),
    managedZones: z
      .array(ManagedZoneSchema)
      .exactOptional()
      .openapi({ description: 'The managed zone resources.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ManagedZonesListResponse')

const PolicyAlternativeNameServerConfigTargetNameServerSchema = z
  .object({
    forwardingPath: z
      .enum(['DEFAULT', 'PRIVATE'])
      .exactOptional()
      .openapi({
        description:
          'Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.',
      }),
    ipv4Address: z
      .string()
      .exactOptional()
      .openapi({ description: 'IPv4 address to forward queries to.' }),
    ipv6Address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IPv6 address to forward to. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.',
      }),
    kind: z
      .string()
      .default('dns#policyAlternativeNameServerConfigTargetNameServer')
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PolicyAlternativeNameServerConfigTargetNameServer')

const PolicyAlternativeNameServerConfigSchema = z
  .object({
    kind: z.string().default('dns#policyAlternativeNameServerConfig').exactOptional(),
    targetNameServers: z
      .array(PolicyAlternativeNameServerConfigTargetNameServerSchema)
      .exactOptional()
      .openapi({
        description:
          'Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PolicyAlternativeNameServerConfig')

const PolicyNetworkSchema = z
  .object({
    kind: z.string().default('dns#policyNetwork').exactOptional(),
    networkUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}',
      }),
  })
  .openapi({ required: [] })
  .openapi('PolicyNetwork')

const PolicySchema = z
  .object({
    alternativeNameServerConfig: PolicyAlternativeNameServerConfigSchema.exactOptional().openapi({
      description:
        'Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.",
      }),
    enableInboundForwarding: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.',
      }),
    enableLogging: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the resource; defined by the server (output only).',
      }),
    kind: z.string().default('dns#policy').exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-assigned name for this policy.' }),
    networks: z
      .array(PolicyNetworkSchema)
      .exactOptional()
      .openapi({
        description: 'List of network names specifying networks to which this policy is applied.',
      }),
  })
  .openapi({
    description:
      'A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.',
    required: [],
  })
  .openapi('Policy')

const PoliciesListResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    kind: z
      .string()
      .default('dns#policiesListResponse')
      .exactOptional()
      .openapi({ description: 'Type of resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.',
      }),
    policies: z
      .array(PolicySchema)
      .exactOptional()
      .openapi({ description: 'The policy resources.' }),
  })
  .openapi({ required: [] })
  .openapi('PoliciesListResponse')

const PoliciesPatchResponseSchema = z
  .object({ header: ResponseHeaderSchema.exactOptional(), policy: PolicySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PoliciesPatchResponse')

const PoliciesUpdateResponseSchema = z
  .object({ header: ResponseHeaderSchema.exactOptional(), policy: PolicySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PoliciesUpdateResponse')

const QuotaSchema = z
  .object({
    dnsKeysPerManagedZone: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of DnsKeys per ManagedZone.' }),
    gkeClustersPerManagedZone: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum allowed number of GKE clusters to which a privately scoped zone can be attached.',
      }),
    gkeClustersPerPolicy: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of GKE clusters per policy.' }),
    gkeClustersPerResponsePolicy: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of GKE clusters per response policy.' }),
    itemsPerRoutingPolicy: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of items per routing policy.' }),
    kind: z.string().default('dns#quota').exactOptional(),
    managedZones: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of managed zones in the project.' }),
    managedZonesPerGkeCluster: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum allowed number of managed zones which can be attached to a GKE cluster.',
      }),
    managedZonesPerNetwork: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum allowed number of managed zones which can be attached to a network.',
      }),
    nameserversPerDelegation: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum number of nameservers per delegation, meant to prevent abuse',
      }),
    networksPerManagedZone: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum allowed number of networks to which a privately scoped zone can be attached.',
      }),
    networksPerPolicy: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of networks per policy.' }),
    networksPerResponsePolicy: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of networks per response policy.' }),
    peeringZonesPerTargetNetwork: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum allowed number of consumer peering zones per target network owned by this producer project',
      }),
    policies: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of policies per project.' }),
    resourceRecordsPerRrset: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of ResourceRecords per ResourceRecordSet.' }),
    responsePolicies: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of response policies per project.' }),
    responsePolicyRulesPerResponsePolicy: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum allowed number of rules per response policy.' }),
    rrsetAdditionsPerChange: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.',
      }),
    rrsetDeletionsPerChange: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.',
      }),
    rrsetsPerManagedZone: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum allowed number of ResourceRecordSets per zone in the project.',
      }),
    targetNameServersPerManagedZone: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum allowed number of target name servers per managed forwarding zone.',
      }),
    targetNameServersPerPolicy: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum allowed number of alternative target name servers per policy.',
      }),
    totalRrdataSizePerChange: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.',
      }),
    whitelistedKeySpecs: z
      .array(DnsKeySpecSchema)
      .exactOptional()
      .openapi({
        description: 'DNSSEC algorithm and key length types that can be used for DnsKeys.',
      }),
  })
  .openapi({ description: 'Limits associated with a Project.', required: [] })
  .openapi('Quota')

const ProjectSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'User assigned unique identifier for the resource (output only).' }),
    kind: z.string().default('dns#project').exactOptional(),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique numeric identifier for the resource; defined by the server (output only).',
      }),
    quota: QuotaSchema.exactOptional().openapi({
      description: 'Quotas assigned to this project (output only).',
    }),
  })
  .openapi({
    description:
      'A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.',
    required: [],
  })
  .openapi('Project')

const ResourceRecordSetsListResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    kind: z
      .string()
      .default('dns#resourceRecordSetsListResponse')
      .exactOptional()
      .openapi({ description: 'Type of resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even larger collections, one page at a time. However, if the collection changes between paginated list requests, the set of elements returned is an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.',
      }),
    rrsets: z
      .array(ResourceRecordSetSchema)
      .exactOptional()
      .openapi({ description: 'The resource record set resources.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceRecordSetsListResponse')

const ResponsePolicyGKEClusterSchema = z
  .object({
    gkeClusterName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the cluster to bind this response policy to. This should be specified in the format like: projects/*/locations/*/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get',
      }),
    kind: z.string().default('dns#responsePolicyGKECluster').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponsePolicyGKECluster')

const ResponsePolicyNetworkSchema = z
  .object({
    kind: z.string().default('dns#responsePolicyNetwork').exactOptional(),
    networkUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponsePolicyNetwork')

const ResponsePolicySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided description for this Response Policy.' }),
    gkeClusters: z
      .array(ResponsePolicyGKEClusterSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of Google Kubernetes Engine clusters to which this response policy is applied.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the resource; defined by the server (output only).',
      }),
    kind: z.string().default('dns#responsePolicy').exactOptional(),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'User labels.' }),
    networks: z
      .array(ResponsePolicyNetworkSchema)
      .exactOptional()
      .openapi({
        description: 'List of network names specifying networks to which this policy is applied.',
      }),
    responsePolicyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User assigned name for this Response Policy.' }),
  })
  .openapi({
    description:
      'A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.',
    required: [],
  })
  .openapi('ResponsePolicy')

const ResponsePoliciesListResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that more results exist following your last page of results in pagination order. To fetch them, make another list request by using this value as your page token. This lets you view the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.',
      }),
    responsePolicies: z
      .array(ResponsePolicySchema)
      .exactOptional()
      .openapi({ description: 'The Response Policy resources.' }),
  })
  .openapi({ required: [] })
  .openapi('ResponsePoliciesListResponse')

const ResponsePoliciesPatchResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    responsePolicy: ResponsePolicySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponsePoliciesPatchResponse')

const ResponsePoliciesUpdateResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    responsePolicy: ResponsePolicySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponsePoliciesUpdateResponse')

const ResponsePolicyRuleLocalDataSchema = z
  .object({
    localDatas: z
      .array(ResourceRecordSetSchema)
      .exactOptional()
      .openapi({
        description:
          'All resource record sets for this selector, one per resource record type. The name must match the dns_name.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponsePolicyRuleLocalData')

const ResponsePolicyRuleSchema = z
  .object({
    behavior: z
      .enum(['BEHAVIOR_UNSPECIFIED', 'BYPASS_RESPONSE_POLICY'])
      .exactOptional()
      .openapi({ description: 'Answer this query with a behavior rather than DNS data.' }),
    dnsName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.',
      }),
    kind: z.string().default('dns#responsePolicyRule').exactOptional(),
    localData: ResponsePolicyRuleLocalDataSchema.exactOptional().openapi({
      description:
        'Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.',
    }),
    ruleName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier for this rule. Must be unique with the ResponsePolicy.',
      }),
  })
  .openapi({
    description:
      'A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.',
    required: [],
  })
  .openapi('ResponsePolicyRule')

const ResponsePolicyRulesListResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.',
      }),
    responsePolicyRules: z
      .array(ResponsePolicyRuleSchema)
      .exactOptional()
      .openapi({ description: 'The Response Policy Rule resources.' }),
  })
  .openapi({ required: [] })
  .openapi('ResponsePolicyRulesListResponse')

const ResponsePolicyRulesPatchResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    responsePolicyRule: ResponsePolicyRuleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponsePolicyRulesPatchResponse')

const ResponsePolicyRulesUpdateResponseSchema = z
  .object({
    header: ResponseHeaderSchema.exactOptional(),
    responsePolicyRule: ResponsePolicyRuleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponsePolicyRulesUpdateResponse')

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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/ndev.clouddns.readonly':
          'View your DNS records hosted by Google Cloud DNS',
        'https://www.googleapis.com/auth/ndev.clouddns.readwrite':
          'View and manage your DNS records hosted by Google Cloud DNS',
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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/ndev.clouddns.readonly':
          'View your DNS records hosted by Google Cloud DNS',
        'https://www.googleapis.com/auth/ndev.clouddns.readwrite':
          'View and manage your DNS records hosted by Google Cloud DNS',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getDnsV2ProjectsProjectLocationsLocationRoute = createRoute({
  method: 'get',
  path: '/dns/v2/projects/{project}/locations/{location}',
  tags: ['projects'],
  description: 'Fetches the representation of an existing Project.',
  operationId: 'dns.projects.get',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectSchema } },
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
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesRoute = createRoute({
  method: 'get',
  path: '/dns/v2/projects/{project}/locations/{location}/managedZones',
  tags: ['managedZones'],
  description: 'Enumerates ManagedZones that have been created but not yet deleted.',
  operationId: 'dns.managedZones.list',
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
      dnsName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restricts the list to return only zones with this domain name.',
            in: 'query',
            name: 'dnsName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
              'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
            in: 'query',
            name: 'maxResults',
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
              'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManagedZonesListResponseSchema } },
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
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const postDnsV2ProjectsProjectLocationsLocationManagedZonesRoute = createRoute({
  method: 'post',
  path: '/dns/v2/projects/{project}/locations/{location}/managedZones',
  tags: ['managedZones'],
  description: 'Creates a new ManagedZone.',
  operationId: 'dns.managedZones.create',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagedZoneSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManagedZoneSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute = createRoute({
  method: 'get',
  path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}',
  tags: ['managedZones'],
  description: 'Fetches the representation of an existing ManagedZone.',
  operationId: 'dns.managedZones.get',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      managedZone: z
        .string()
        .openapi({
          param: {
            description:
              'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
            in: 'path',
            name: 'managedZone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManagedZoneSchema } },
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
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const putDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute = createRoute({
  method: 'put',
  path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}',
  tags: ['managedZones'],
  description: 'Updates an existing ManagedZone.',
  operationId: 'dns.managedZones.update',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      managedZone: z
        .string()
        .openapi({
          param: {
            description:
              'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
            in: 'path',
            name: 'managedZone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagedZoneSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute = createRoute({
  method: 'delete',
  path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}',
  tags: ['managedZones'],
  description: 'Deletes a previously created ManagedZone.',
  operationId: 'dns.managedZones.delete',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      managedZone: z
        .string()
        .openapi({
          param: {
            description:
              'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
            in: 'path',
            name: 'managedZone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute = createRoute({
  method: 'patch',
  path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}',
  tags: ['managedZones'],
  description: 'Applies a partial update to an existing ManagedZone.',
  operationId: 'dns.managedZones.patch',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      managedZone: z
        .string()
        .openapi({
          param: {
            description:
              'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
            in: 'path',
            name: 'managedZone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagedZoneSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/changes',
    tags: ['changes'],
    description: 'Enumerates Changes to a ResourceRecordSet collection.',
    operationId: 'dns.changes.list',
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
        maxResults: z
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
                'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
              in: 'query',
              name: 'maxResults',
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
                'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        sortBy: z
          .literal('CHANGE_SEQUENCE')
          .exactOptional()
          .openapi({
            param: {
              description: 'Sorting criterion. The only supported value is change sequence.',
              in: 'query',
              name: 'sortBy',
              schema: { enum: ['CHANGE_SEQUENCE'], type: 'string' },
              required: false,
            },
          }),
        sortOrder: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: "Sorting order direction: 'ascending' or 'descending'.",
              in: 'query',
              name: 'sortOrder',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ChangesListResponseSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute =
  createRoute({
    method: 'post',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/changes',
    tags: ['changes'],
    description: 'Atomically updates the ResourceRecordSet collection.',
    operationId: 'dns.changes.create',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ChangeSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ChangeSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/changes/{changeId}',
    tags: ['changes'],
    description: 'Fetches the representation of an existing Change.',
    operationId: 'dns.changes.get',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        changeId: z
          .string()
          .openapi({
            param: {
              description:
                'The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.',
              in: 'path',
              name: 'changeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ChangeSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/dnsKeys',
    tags: ['dnsKeys'],
    description: 'Enumerates DnsKeys to a ResourceRecordSet collection.',
    operationId: 'dns.dnsKeys.list',
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
        digestType: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.',
              in: 'query',
              name: 'digestType',
              schema: { type: 'string' },
              required: false,
            },
          }),
        maxResults: z
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
                'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
              in: 'query',
              name: 'maxResults',
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
                'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DnsKeysListResponseSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}',
    tags: ['dnsKeys'],
    description: 'Fetches the representation of an existing DnsKey.',
    operationId: 'dns.dnsKeys.get',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        digestType: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.',
              in: 'query',
              name: 'digestType',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dnsKeyId: z
          .string()
          .openapi({
            param: {
              description: 'The identifier of the requested DnsKey.',
              in: 'path',
              name: 'dnsKeyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DnsKeySchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/operations',
    tags: ['managedZoneOperations'],
    description: 'Enumerates Operations for the given ManagedZone.',
    operationId: 'dns.managedZoneOperations.list',
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
        maxResults: z
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
                'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
              in: 'query',
              name: 'maxResults',
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
                'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        sortBy: z
          .enum(['START_TIME', 'ID'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Sorting criterion. The only supported values are START_TIME and ID.',
              in: 'query',
              name: 'sortBy',
              schema: { enum: ['START_TIME', 'ID'], type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the managed zone addressed by this request.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ManagedZoneOperationsListResponseSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/operations/{operation}',
    tags: ['managedZoneOperations'],
    description: 'Fetches the representation of an existing Operation.',
    operationId: 'dns.managedZoneOperations.get',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the managed zone addressed by this request.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        operation: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the operation addressed by this request (ID of the operation).',
              in: 'path',
              name: 'operation',
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
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets',
    tags: ['resourceRecordSets'],
    description: 'Enumerates ResourceRecordSets that you have created but not yet deleted.',
    operationId: 'dns.resourceRecordSets.list',
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
        maxResults: z
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
                'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
              in: 'query',
              name: 'maxResults',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Restricts the list to return only records with this fully qualified domain name.',
              in: 'query',
              name: 'name',
              schema: { type: 'string' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Restricts the list to return only records of this type. If present, the "name" parameter must also be present.',
              in: 'query',
              name: 'type',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information is used for routing and is part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResourceRecordSetsListResponseSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute =
  createRoute({
    method: 'post',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets',
    tags: ['resourceRecordSets'],
    description: 'Creates a new ResourceRecordSet.',
    operationId: 'dns.resourceRecordSets.create',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information is used for routing and is part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ResourceRecordSetSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResourceRecordSetSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets/{name}/{type}',
    tags: ['resourceRecordSets'],
    description: 'Fetches the representation of an existing ResourceRecordSet.',
    operationId: 'dns.resourceRecordSets.get',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information is used for routing and is part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        name: z
          .string()
          .openapi({
            param: {
              description: 'Fully qualified domain name.',
              in: 'path',
              name: 'name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        type: z
          .string()
          .openapi({
            param: {
              description: 'RRSet type.',
              in: 'path',
              name: 'type',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResourceRecordSetSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute =
  createRoute({
    method: 'delete',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets/{name}/{type}',
    tags: ['resourceRecordSets'],
    description: 'Deletes a previously created ResourceRecordSet.',
    operationId: 'dns.resourceRecordSets.delete',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information is used for routing and is part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        name: z
          .string()
          .openapi({
            param: {
              description: 'Fully qualified domain name.',
              in: 'path',
              name: 'name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        type: z
          .string()
          .openapi({
            param: {
              description: 'RRSet type.',
              in: 'path',
              name: 'type',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute =
  createRoute({
    method: 'patch',
    path: '/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets/{name}/{type}',
    tags: ['resourceRecordSets'],
    description: 'Applies a partial update to an existing ResourceRecordSet.',
    operationId: 'dns.resourceRecordSets.patch',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedZone: z
          .string()
          .openapi({
            param: {
              description:
                'Identifies the managed zone addressed by this request. Can be the managed zone name or ID.',
              in: 'path',
              name: 'managedZone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        name: z
          .string()
          .openapi({
            param: {
              description: 'Fully qualified domain name.',
              in: 'path',
              name: 'name',
              required: true,
              schema: { type: 'string' },
            },
          }),
        type: z
          .string()
          .openapi({
            param: {
              description: 'RRSet type.',
              in: 'path',
              name: 'type',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ResourceRecordSetSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResourceRecordSetSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationPoliciesRoute = createRoute({
  method: 'get',
  path: '/dns/v2/projects/{project}/locations/{location}/policies',
  tags: ['policies'],
  description: 'Enumerates all Policies associated with a project.',
  operationId: 'dns.policies.list',
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
      maxResults: z
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
              'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
            in: 'query',
            name: 'maxResults',
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
              'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PoliciesListResponseSchema } },
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
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const postDnsV2ProjectsProjectLocationsLocationPoliciesRoute = createRoute({
  method: 'post',
  path: '/dns/v2/projects/{project}/locations/{location}/policies',
  tags: ['policies'],
  description: 'Creates a new Policy.',
  operationId: 'dns.policies.create',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PolicySchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute = createRoute({
  method: 'get',
  path: '/dns/v2/projects/{project}/locations/{location}/policies/{policy}',
  tags: ['policies'],
  description: 'Fetches the representation of an existing Policy.',
  operationId: 'dns.policies.get',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      policy: z
        .string()
        .openapi({
          param: {
            description: 'User given friendly name of the policy addressed by this request.',
            in: 'path',
            name: 'policy',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const putDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute = createRoute({
  method: 'put',
  path: '/dns/v2/projects/{project}/locations/{location}/policies/{policy}',
  tags: ['policies'],
  description: 'Updates an existing Policy.',
  operationId: 'dns.policies.update',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      policy: z
        .string()
        .openapi({
          param: {
            description: 'User given friendly name of the policy addressed by this request.',
            in: 'path',
            name: 'policy',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PoliciesUpdateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const deleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute = createRoute({
  method: 'delete',
  path: '/dns/v2/projects/{project}/locations/{location}/policies/{policy}',
  tags: ['policies'],
  description:
    'Deletes a previously created Policy. Fails if the policy is still being referenced by a network.',
  operationId: 'dns.policies.delete',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      policy: z
        .string()
        .openapi({
          param: {
            description: 'User given friendly name of the policy addressed by this request.',
            in: 'path',
            name: 'policy',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const patchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute = createRoute({
  method: 'patch',
  path: '/dns/v2/projects/{project}/locations/{location}/policies/{policy}',
  tags: ['policies'],
  description: 'Applies a partial update to an existing Policy.',
  operationId: 'dns.policies.patch',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      policy: z
        .string()
        .openapi({
          param: {
            description: 'User given friendly name of the policy addressed by this request.',
            in: 'path',
            name: 'policy',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PoliciesPatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const getDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute = createRoute({
  method: 'get',
  path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies',
  tags: ['responsePolicies'],
  description: 'Enumerates all Response Policies associated with a project.',
  operationId: 'dns.responsePolicies.list',
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
      maxResults: z
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
              'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
            in: 'query',
            name: 'maxResults',
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
              'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponsePoliciesListResponseSchema } },
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
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const postDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute = createRoute({
  method: 'post',
  path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies',
  tags: ['responsePolicies'],
  description: 'Creates a new Response Policy',
  operationId: 'dns.responsePolicies.create',
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
      clientOperationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
            in: 'query',
            name: 'clientOperationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project addressed by this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the location of the resource, only applicable in the v APIs. This information will be used for routing and will be part of the resource name.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResponsePolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponsePolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}',
    tags: ['responsePolicies'],
    description: 'Fetches the representation of an existing Response Policy.',
    operationId: 'dns.responsePolicies.get',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description: 'User assigned name of the Response Policy addressed by this request.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePolicySchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute =
  createRoute({
    method: 'put',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}',
    tags: ['responsePolicies'],
    description: 'Updates an existing Response Policy.',
    operationId: 'dns.responsePolicies.update',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description: 'User assigned name of the Response Policy addressed by this request.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ResponsePolicySchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePoliciesUpdateResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute =
  createRoute({
    method: 'delete',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}',
    tags: ['responsePolicies'],
    description:
      'Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.',
    operationId: 'dns.responsePolicies.delete',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description: 'User assigned name of the Response Policy addressed by this request.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute =
  createRoute({
    method: 'patch',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}',
    tags: ['responsePolicies'],
    description: 'Applies a partial update to an existing Response Policy.',
    operationId: 'dns.responsePolicies.patch',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description: 'User assigned name of the response policy addressed by this request.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ResponsePolicySchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePoliciesPatchResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules',
    tags: ['responsePolicyRules'],
    description: 'Enumerates all Response Policy Rules associated with a project.',
    operationId: 'dns.responsePolicyRules.list',
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
        maxResults: z
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
                'Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.',
              in: 'query',
              name: 'maxResults',
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
                'Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description: 'User assigned name of the Response Policy to list.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePolicyRulesListResponseSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const postDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute =
  createRoute({
    method: 'post',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules',
    tags: ['responsePolicyRules'],
    description: 'Creates a new Response Policy Rule.',
    operationId: 'dns.responsePolicyRules.create',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy containing the Response Policy Rule.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ResponsePolicyRuleSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePolicyRuleSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute =
  createRoute({
    method: 'get',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}',
    tags: ['responsePolicyRules'],
    description: 'Fetches the representation of an existing Response Policy Rule.',
    operationId: 'dns.responsePolicyRules.get',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy containing the Response Policy Rule.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicyRule: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy Rule addressed by this request.',
              in: 'path',
              name: 'responsePolicyRule',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePolicyRuleSchema } },
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
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute =
  createRoute({
    method: 'put',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}',
    tags: ['responsePolicyRules'],
    description: 'Updates an existing Response Policy Rule.',
    operationId: 'dns.responsePolicyRules.update',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy containing the Response Policy Rule.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicyRule: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy Rule addressed by this request.',
              in: 'path',
              name: 'responsePolicyRule',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ResponsePolicyRuleSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePolicyRulesUpdateResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute =
  createRoute({
    method: 'delete',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}',
    tags: ['responsePolicyRules'],
    description: 'Deletes a previously created Response Policy Rule.',
    operationId: 'dns.responsePolicyRules.delete',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy containing the Response Policy Rule.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicyRule: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy Rule addressed by this request.',
              in: 'path',
              name: 'responsePolicyRule',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute =
  createRoute({
    method: 'patch',
    path: '/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}',
    tags: ['responsePolicyRules'],
    description: 'Applies a partial update to an existing Response Policy Rule.',
    operationId: 'dns.responsePolicyRules.patch',
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
        clientOperationId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.',
              in: 'query',
              name: 'clientOperationId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Identifies the project addressed by this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'Specifies the location of the resource. This information will be used for routing and will be part of the resource name.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicy: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy containing the Response Policy Rule.',
              in: 'path',
              name: 'responsePolicy',
              required: true,
              schema: { type: 'string' },
            },
          }),
        responsePolicyRule: z
          .string()
          .openapi({
            param: {
              description:
                'User assigned name of the Response Policy Rule addressed by this request.',
              in: 'path',
              name: 'responsePolicyRule',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ResponsePolicyRuleSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResponsePolicyRulesPatchResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      },
    ],
  })

export const postDnsV2ResourceGetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/dns/v2/{resource}:getIamPolicy',
  tags: ['managedZones'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'dns.managedZones.getIamPolicy',
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
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleIamV1GetIamPolicyRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const postDnsV2ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/dns/v2/{resource}:setIamPolicy',
  tags: ['managedZones'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'dns.managedZones.setIamPolicy',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})

export const postDnsV2ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/dns/v2/{resource}:testIamPermissions',
  tags: ['managedZones'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'dns.managedZones.testIamPermissions',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.clouddns.readwrite'],
    },
  ],
})
