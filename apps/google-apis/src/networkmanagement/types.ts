type Empty = { [x: string]: unknown }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type AppEngineVersionEndpoint = { uri?: string | undefined }
type CloudFunctionEndpoint = { uri?: string | undefined }
type CloudRunRevisionEndpoint = { uri?: string | undefined }
type Endpoint = {
  appEngineVersion?: AppEngineVersionEndpoint | undefined
  cloudFunction?: CloudFunctionEndpoint | undefined
  cloudRunRevision?: CloudRunRevisionEndpoint | undefined
  cloudSqlInstance?: string | undefined
  forwardingRule?: string | undefined
  forwardingRuleTarget?:
    | 'FORWARDING_RULE_TARGET_UNSPECIFIED'
    | 'INSTANCE'
    | 'LOAD_BALANCER'
    | 'VPN_GATEWAY'
    | 'PSC'
    | undefined
  gkeMasterCluster?: string | undefined
  instance?: string | undefined
  ipAddress?: string | undefined
  loadBalancerId?: string | undefined
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
    | undefined
  network?: string | undefined
  networkType?: 'NETWORK_TYPE_UNSPECIFIED' | 'GCP_NETWORK' | 'NON_GCP_NETWORK' | undefined
  port?: number | undefined
  projectId?: string | undefined
}
type EdgeLocation = { metropolitanArea?: string | undefined }
type EndpointInfo = {
  destinationIp?: string | undefined
  destinationNetworkUri?: string | undefined
  destinationPort?: number | undefined
  protocol?: string | undefined
  sourceAgentUri?: string | undefined
  sourceIp?: string | undefined
  sourceNetworkUri?: string | undefined
  sourcePort?: number | undefined
}
type LatencyPercentile = { latencyMicros?: string | undefined; percent?: number | undefined }
type LatencyDistribution = { latencyPercentiles?: LatencyPercentile[] | undefined }
type ProbingDetails = {
  abortCause?:
    | 'PROBING_ABORT_CAUSE_UNSPECIFIED'
    | 'PERMISSION_DENIED'
    | 'NO_SOURCE_LOCATION'
    | undefined
  destinationEgressLocation?: EdgeLocation | undefined
  endpointInfo?: EndpointInfo | undefined
  error?: Status | undefined
  probingLatency?: LatencyDistribution | undefined
  result?:
    | 'PROBING_RESULT_UNSPECIFIED'
    | 'REACHABLE'
    | 'UNREACHABLE'
    | 'REACHABILITY_INCONSISTENT'
    | 'UNDETERMINED'
    | undefined
  sentProbeCount?: number | undefined
  successfulProbeCount?: number | undefined
  verifyTime?: string | undefined
}
type AbortInfo = {
  cause?:
    | 'CAUSE_UNSPECIFIED'
    | 'UNKNOWN_NETWORK'
    | 'UNKNOWN_IP'
    | 'UNKNOWN_PROJECT'
    | 'PERMISSION_DENIED'
    | 'NO_SOURCE_LOCATION'
    | 'INVALID_ARGUMENT'
    | 'NO_EXTERNAL_IP'
    | 'UNINTENDED_DESTINATION'
    | 'TRACE_TOO_LONG'
    | 'INTERNAL_ERROR'
    | 'SOURCE_ENDPOINT_NOT_FOUND'
    | 'MISMATCHED_SOURCE_NETWORK'
    | 'DESTINATION_ENDPOINT_NOT_FOUND'
    | 'MISMATCHED_DESTINATION_NETWORK'
    | 'UNSUPPORTED'
    | 'MISMATCHED_IP_VERSION'
    | 'GKE_KONNECTIVITY_PROXY_UNSUPPORTED'
    | undefined
  projectsMissingPermission?: string[] | undefined
  resourceUri?: string | undefined
}
type AppEngineVersionInfo = {
  displayName?: string | undefined
  environment?: string | undefined
  runtime?: string | undefined
  uri?: string | undefined
}
type CloudFunctionInfo = {
  displayName?: string | undefined
  location?: string | undefined
  uri?: string | undefined
  versionId?: string | undefined
}
type CloudRunRevisionInfo = {
  displayName?: string | undefined
  location?: string | undefined
  serviceName?: string | undefined
  serviceUri?: string | undefined
  uri?: string | undefined
}
type CloudSQLInstanceInfo = {
  displayName?: string | undefined
  externalIp?: string | undefined
  internalIp?: string | undefined
  networkUri?: string | undefined
  region?: string | undefined
  uri?: string | undefined
}
type DeliverInfo = {
  resourceUri?: string | undefined
  target?:
    | 'TARGET_UNSPECIFIED'
    | 'INSTANCE'
    | 'INTERNET'
    | 'GOOGLE_API'
    | 'GKE_MASTER'
    | 'CLOUD_SQL_INSTANCE'
    | 'PSC_PUBLISHED_SERVICE'
    | 'PSC_GOOGLE_API'
    | 'PSC_VPC_SC'
    | 'SERVERLESS_NEG'
    | undefined
}
type DropInfo = {
  cause?:
    | 'CAUSE_UNSPECIFIED'
    | 'UNKNOWN_EXTERNAL_ADDRESS'
    | 'FOREIGN_IP_DISALLOWED'
    | 'FIREWALL_RULE'
    | 'NO_ROUTE'
    | 'ROUTE_BLACKHOLE'
    | 'ROUTE_WRONG_NETWORK'
    | 'PRIVATE_TRAFFIC_TO_INTERNET'
    | 'PRIVATE_GOOGLE_ACCESS_DISALLOWED'
    | 'NO_EXTERNAL_ADDRESS'
    | 'UNKNOWN_INTERNAL_ADDRESS'
    | 'FORWARDING_RULE_MISMATCH'
    | 'FORWARDING_RULE_REGION_MISMATCH'
    | 'FORWARDING_RULE_NO_INSTANCES'
    | 'FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK'
    | 'INSTANCE_NOT_RUNNING'
    | 'GKE_CLUSTER_NOT_RUNNING'
    | 'CLOUD_SQL_INSTANCE_NOT_RUNNING'
    | 'TRAFFIC_TYPE_BLOCKED'
    | 'GKE_MASTER_UNAUTHORIZED_ACCESS'
    | 'CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS'
    | 'DROPPED_INSIDE_GKE_SERVICE'
    | 'DROPPED_INSIDE_CLOUD_SQL_SERVICE'
    | 'GOOGLE_MANAGED_SERVICE_NO_PEERING'
    | 'GKE_PSC_ENDPOINT_MISSING'
    | 'CLOUD_SQL_INSTANCE_NO_IP_ADDRESS'
    | 'GKE_CONTROL_PLANE_REGION_MISMATCH'
    | 'PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION'
    | 'GKE_CONTROL_PLANE_NO_ROUTE'
    | 'CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC'
    | 'PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION'
    | 'CLOUD_SQL_INSTANCE_NO_ROUTE'
    | 'CLOUD_FUNCTION_NOT_ACTIVE'
    | 'VPC_CONNECTOR_NOT_SET'
    | 'VPC_CONNECTOR_NOT_RUNNING'
    | 'PSC_CONNECTION_NOT_ACCEPTED'
    | 'CLOUD_RUN_REVISION_NOT_READY'
    | 'DROPPED_INSIDE_PSC_SERVICE_PRODUCER'
    | undefined
  resourceUri?: string | undefined
}
type FirewallInfo = {
  action?: string | undefined
  direction?: string | undefined
  displayName?: string | undefined
  firewallRuleType?:
    | 'FIREWALL_RULE_TYPE_UNSPECIFIED'
    | 'HIERARCHICAL_FIREWALL_POLICY_RULE'
    | 'VPC_FIREWALL_RULE'
    | 'IMPLIED_VPC_FIREWALL_RULE'
    | 'SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE'
    | 'NETWORK_FIREWALL_POLICY_RULE'
    | undefined
  networkUri?: string | undefined
  policy?: string | undefined
  priority?: number | undefined
  targetServiceAccounts?: string[] | undefined
  targetTags?: string[] | undefined
  uri?: string | undefined
}
type ForwardInfo = {
  resourceUri?: string | undefined
  target?:
    | 'TARGET_UNSPECIFIED'
    | 'PEERING_VPC'
    | 'VPN_GATEWAY'
    | 'INTERCONNECT'
    | 'GKE_MASTER'
    | 'IMPORTED_CUSTOM_ROUTE_NEXT_HOP'
    | 'CLOUD_SQL_INSTANCE'
    | 'ANOTHER_PROJECT'
    | undefined
}
type ForwardingRuleInfo = {
  displayName?: string | undefined
  matchedPortRange?: string | undefined
  matchedProtocol?: string | undefined
  networkUri?: string | undefined
  target?: string | undefined
  uri?: string | undefined
  vip?: string | undefined
}
type GKEMasterInfo = {
  clusterNetworkUri?: string | undefined
  clusterUri?: string | undefined
  externalIp?: string | undefined
  internalIp?: string | undefined
}
type InstanceInfo = {
  displayName?: string | undefined
  externalIp?: string | undefined
  interface?: string | undefined
  internalIp?: string | undefined
  networkTags?: string[] | undefined
  networkUri?: string | undefined
  serviceAccount?: string | undefined
  uri?: string | undefined
}
type LoadBalancerBackend = {
  displayName?: string | undefined
  healthCheckAllowingFirewallRules?: string[] | undefined
  healthCheckBlockingFirewallRules?: string[] | undefined
  healthCheckFirewallState?:
    | 'HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED'
    | 'CONFIGURED'
    | 'MISCONFIGURED'
    | undefined
  uri?: string | undefined
}
type LoadBalancerInfo = {
  backendType?:
    | 'BACKEND_TYPE_UNSPECIFIED'
    | 'BACKEND_SERVICE'
    | 'TARGET_POOL'
    | 'TARGET_INSTANCE'
    | undefined
  backendUri?: string | undefined
  backends?: LoadBalancerBackend[] | undefined
  healthCheckUri?: string | undefined
  loadBalancerType?:
    | 'LOAD_BALANCER_TYPE_UNSPECIFIED'
    | 'INTERNAL_TCP_UDP'
    | 'NETWORK_TCP_UDP'
    | 'HTTP_PROXY'
    | 'TCP_PROXY'
    | 'SSL_PROXY'
    | undefined
}
type NetworkInfo = {
  displayName?: string | undefined
  matchedIpRange?: string | undefined
  uri?: string | undefined
}
type RouteInfo = {
  destIpRange?: string | undefined
  destPortRanges?: string[] | undefined
  displayName?: string | undefined
  instanceTags?: string[] | undefined
  networkUri?: string | undefined
  nextHop?: string | undefined
  nextHopType?:
    | 'NEXT_HOP_TYPE_UNSPECIFIED'
    | 'NEXT_HOP_IP'
    | 'NEXT_HOP_INSTANCE'
    | 'NEXT_HOP_NETWORK'
    | 'NEXT_HOP_PEERING'
    | 'NEXT_HOP_INTERCONNECT'
    | 'NEXT_HOP_VPN_TUNNEL'
    | 'NEXT_HOP_VPN_GATEWAY'
    | 'NEXT_HOP_INTERNET_GATEWAY'
    | 'NEXT_HOP_BLACKHOLE'
    | 'NEXT_HOP_ILB'
    | 'NEXT_HOP_ROUTER_APPLIANCE'
    | undefined
  priority?: number | undefined
  protocols?: string[] | undefined
  routeType?:
    | 'ROUTE_TYPE_UNSPECIFIED'
    | 'SUBNET'
    | 'STATIC'
    | 'DYNAMIC'
    | 'PEERING_SUBNET'
    | 'PEERING_STATIC'
    | 'PEERING_DYNAMIC'
    | 'POLICY_BASED'
    | undefined
  srcIpRange?: string | undefined
  srcPortRanges?: string[] | undefined
  uri?: string | undefined
}
type VpcConnectorInfo = {
  displayName?: string | undefined
  location?: string | undefined
  uri?: string | undefined
}
type VpnGatewayInfo = {
  displayName?: string | undefined
  ipAddress?: string | undefined
  networkUri?: string | undefined
  region?: string | undefined
  uri?: string | undefined
  vpnTunnelUri?: string | undefined
}
type VpnTunnelInfo = {
  displayName?: string | undefined
  networkUri?: string | undefined
  region?: string | undefined
  remoteGateway?: string | undefined
  remoteGatewayIp?: string | undefined
  routingType?: 'ROUTING_TYPE_UNSPECIFIED' | 'ROUTE_BASED' | 'POLICY_BASED' | 'DYNAMIC' | undefined
  sourceGateway?: string | undefined
  sourceGatewayIp?: string | undefined
  uri?: string | undefined
}
type Step = {
  abort?: AbortInfo | undefined
  appEngineVersion?: AppEngineVersionInfo | undefined
  causesDrop?: boolean | undefined
  cloudFunction?: CloudFunctionInfo | undefined
  cloudRunRevision?: CloudRunRevisionInfo | undefined
  cloudSqlInstance?: CloudSQLInstanceInfo | undefined
  deliver?: DeliverInfo | undefined
  description?: string | undefined
  drop?: DropInfo | undefined
  endpoint?: EndpointInfo | undefined
  firewall?: FirewallInfo | undefined
  forward?: ForwardInfo | undefined
  forwardingRule?: ForwardingRuleInfo | undefined
  gkeMaster?: GKEMasterInfo | undefined
  instance?: InstanceInfo | undefined
  loadBalancer?: LoadBalancerInfo | undefined
  network?: NetworkInfo | undefined
  projectId?: string | undefined
  route?: RouteInfo | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'START_FROM_INSTANCE'
    | 'START_FROM_INTERNET'
    | 'START_FROM_PRIVATE_NETWORK'
    | 'START_FROM_GKE_MASTER'
    | 'START_FROM_CLOUD_SQL_INSTANCE'
    | 'START_FROM_CLOUD_FUNCTION'
    | 'START_FROM_APP_ENGINE_VERSION'
    | 'START_FROM_CLOUD_RUN_REVISION'
    | 'APPLY_INGRESS_FIREWALL_RULE'
    | 'APPLY_EGRESS_FIREWALL_RULE'
    | 'APPLY_ROUTE'
    | 'APPLY_FORWARDING_RULE'
    | 'SPOOFING_APPROVED'
    | 'ARRIVE_AT_INSTANCE'
    | 'ARRIVE_AT_INTERNAL_LOAD_BALANCER'
    | 'ARRIVE_AT_EXTERNAL_LOAD_BALANCER'
    | 'ARRIVE_AT_VPN_GATEWAY'
    | 'ARRIVE_AT_VPN_TUNNEL'
    | 'ARRIVE_AT_VPC_CONNECTOR'
    | 'NAT'
    | 'PROXY_CONNECTION'
    | 'DELIVER'
    | 'DROP'
    | 'FORWARD'
    | 'ABORT'
    | 'VIEWER_PERMISSION_MISSING'
    | undefined
  vpcConnector?: VpcConnectorInfo | undefined
  vpnGateway?: VpnGatewayInfo | undefined
  vpnTunnel?: VpnTunnelInfo | undefined
}
type Trace = { endpointInfo?: EndpointInfo | undefined; steps?: Step[] | undefined }
type ReachabilityDetails = {
  error?: Status | undefined
  result?:
    | 'RESULT_UNSPECIFIED'
    | 'REACHABLE'
    | 'UNREACHABLE'
    | 'AMBIGUOUS'
    | 'UNDETERMINED'
    | undefined
  traces?: Trace[] | undefined
  verifyTime?: string | undefined
}
type ConnectivityTest = {
  createTime?: string | undefined
  description?: string | undefined
  destination?: Endpoint | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  probingDetails?: ProbingDetails | undefined
  protocol?: string | undefined
  reachabilityDetails?: ReachabilityDetails | undefined
  relatedProjects?: string[] | undefined
  source?: Endpoint | undefined
  updateTime?: string | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type RerunConnectivityTestRequest = { [x: string]: unknown }
type ListConnectivityTestsResponse = {
  nextPageToken?: string | undefined
  resources?: ConnectivityTest[] | undefined
  unreachable?: string[] | undefined
}
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ConnectivityTest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:rerun': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RerunConnectivityTestRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/connectivityTests': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListConnectivityTestsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            testId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ConnectivityTest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
