type DnsKeySpec = {
  algorithm?:
    | 'RSASHA1'
    | 'RSASHA256'
    | 'RSASHA512'
    | 'ECDSAP256SHA256'
    | 'ECDSAP384SHA384'
    | undefined
  keyLength?: number | undefined
  keyType?: 'KEY_SIGNING' | 'ZONE_SIGNING' | undefined
  kind?: string | undefined
}
type Quota = {
  dnsKeysPerManagedZone?: number | undefined
  gkeClustersPerManagedZone?: number | undefined
  gkeClustersPerPolicy?: number | undefined
  gkeClustersPerResponsePolicy?: number | undefined
  itemsPerRoutingPolicy?: number | undefined
  kind?: string | undefined
  managedZones?: number | undefined
  managedZonesPerGkeCluster?: number | undefined
  managedZonesPerNetwork?: number | undefined
  nameserversPerDelegation?: number | undefined
  networksPerManagedZone?: number | undefined
  networksPerPolicy?: number | undefined
  networksPerResponsePolicy?: number | undefined
  peeringZonesPerTargetNetwork?: number | undefined
  policies?: number | undefined
  resourceRecordsPerRrset?: number | undefined
  responsePolicies?: number | undefined
  responsePolicyRulesPerResponsePolicy?: number | undefined
  rrsetAdditionsPerChange?: number | undefined
  rrsetDeletionsPerChange?: number | undefined
  rrsetsPerManagedZone?: number | undefined
  targetNameServersPerManagedZone?: number | undefined
  targetNameServersPerPolicy?: number | undefined
  totalRrdataSizePerChange?: number | undefined
  whitelistedKeySpecs?: DnsKeySpec[] | undefined
}
type Project = {
  id?: string | undefined
  kind?: string | undefined
  number?: string | undefined
  quota?: Quota | undefined
}
type ResponseHeader = { operationId?: string | undefined }
type ManagedZoneCloudLoggingConfig = {
  enableLogging?: boolean | undefined
  kind?: string | undefined
}
type ManagedZoneDnsSecConfig = {
  defaultKeySpecs?: DnsKeySpec[] | undefined
  kind?: string | undefined
  nonExistence?: 'NSEC' | 'NSEC3' | undefined
  state?: 'OFF' | 'ON' | 'TRANSFER' | undefined
}
type ManagedZoneForwardingConfigNameServerTarget = {
  forwardingPath?: 'DEFAULT' | 'PRIVATE' | undefined
  ipv4Address?: string | undefined
  ipv6Address?: string | undefined
  kind?: string | undefined
}
type ManagedZoneForwardingConfig = {
  kind?: string | undefined
  targetNameServers?: ManagedZoneForwardingConfigNameServerTarget[] | undefined
}
type ManagedZonePeeringConfigTargetNetwork = {
  deactivateTime?: string | undefined
  kind?: string | undefined
  networkUrl?: string | undefined
}
type ManagedZonePeeringConfig = {
  kind?: string | undefined
  targetNetwork?: ManagedZonePeeringConfigTargetNetwork | undefined
}
type ManagedZonePrivateVisibilityConfigGKECluster = {
  gkeClusterName?: string | undefined
  kind?: string | undefined
}
type ManagedZonePrivateVisibilityConfigNetwork = {
  kind?: string | undefined
  networkUrl?: string | undefined
}
type ManagedZonePrivateVisibilityConfig = {
  gkeClusters?: ManagedZonePrivateVisibilityConfigGKECluster[] | undefined
  kind?: string | undefined
  networks?: ManagedZonePrivateVisibilityConfigNetwork[] | undefined
}
type ManagedZoneReverseLookupConfig = { kind?: string | undefined }
type ManagedZoneServiceDirectoryConfigNamespace = {
  deletionTime?: string | undefined
  kind?: string | undefined
  namespaceUrl?: string | undefined
}
type ManagedZoneServiceDirectoryConfig = {
  kind?: string | undefined
  namespace?: ManagedZoneServiceDirectoryConfigNamespace | undefined
}
type ManagedZone = {
  cloudLoggingConfig?: ManagedZoneCloudLoggingConfig | undefined
  creationTime?: string | undefined
  description?: string | undefined
  dnsName?: string | undefined
  dnssecConfig?: ManagedZoneDnsSecConfig | undefined
  forwardingConfig?: ManagedZoneForwardingConfig | undefined
  id?: string | undefined
  kind?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  nameServerSet?: string | undefined
  nameServers?: string[] | undefined
  peeringConfig?: ManagedZonePeeringConfig | undefined
  privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig | undefined
  reverseLookupConfig?: ManagedZoneReverseLookupConfig | undefined
  serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig | undefined
  visibility?: 'PUBLIC' | 'PRIVATE' | undefined
}
type ManagedZonesListResponse = {
  header?: ResponseHeader | undefined
  kind?: string | undefined
  managedZones?: ManagedZone[] | undefined
  nextPageToken?: string | undefined
}
type DnsKeyDigest = { digest?: string | undefined; type?: 'SHA1' | 'SHA256' | 'SHA384' | undefined }
type DnsKey = {
  algorithm?:
    | 'RSASHA1'
    | 'RSASHA256'
    | 'RSASHA512'
    | 'ECDSAP256SHA256'
    | 'ECDSAP384SHA384'
    | undefined
  creationTime?: string | undefined
  description?: string | undefined
  digests?: DnsKeyDigest[] | undefined
  id?: string | undefined
  isActive?: boolean | undefined
  keyLength?: number | undefined
  keyTag?: number | undefined
  kind?: string | undefined
  publicKey?: string | undefined
  type?: 'KEY_SIGNING' | 'ZONE_SIGNING' | undefined
}
type OperationDnsKeyContext = { newValue?: DnsKey | undefined; oldValue?: DnsKey | undefined }
type OperationManagedZoneContext = {
  newValue?: ManagedZone | undefined
  oldValue?: ManagedZone | undefined
}
type Operation = {
  dnsKeyContext?: OperationDnsKeyContext | undefined
  id?: string | undefined
  kind?: string | undefined
  startTime?: string | undefined
  status?: 'PENDING' | 'DONE' | undefined
  type?: string | undefined
  user?: string | undefined
  zoneContext?: OperationManagedZoneContext | undefined
}
type RRSetRoutingPolicyLoadBalancerTarget = {
  ipAddress?: string | undefined
  ipProtocol?: 'UNDEFINED' | 'TCP' | 'UDP' | undefined
  kind?: string | undefined
  loadBalancerType?: 'NONE' | 'GLOBAL_L7ILB' | 'REGIONAL_L4ILB' | 'REGIONAL_L7ILB' | undefined
  networkUrl?: string | undefined
  port?: string | undefined
  project?: string | undefined
  region?: string | undefined
}
type RRSetRoutingPolicyHealthCheckTargets = {
  externalEndpoints?: string[] | undefined
  internalLoadBalancers?: RRSetRoutingPolicyLoadBalancerTarget[] | undefined
}
type RRSetRoutingPolicyGeoPolicyGeoPolicyItem = {
  healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets | undefined
  kind?: string | undefined
  location?: string | undefined
  rrdatas?: string[] | undefined
  signatureRrdatas?: string[] | undefined
}
type RRSetRoutingPolicyGeoPolicy = {
  enableFencing?: boolean | undefined
  items?: RRSetRoutingPolicyGeoPolicyGeoPolicyItem[] | undefined
  kind?: string | undefined
}
type RRSetRoutingPolicyPrimaryBackupPolicy = {
  backupGeoTargets?: RRSetRoutingPolicyGeoPolicy | undefined
  kind?: string | undefined
  primaryTargets?: RRSetRoutingPolicyHealthCheckTargets | undefined
  trickleTraffic?: number | undefined
}
type RRSetRoutingPolicyWrrPolicyWrrPolicyItem = {
  healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets | undefined
  kind?: string | undefined
  rrdatas?: string[] | undefined
  signatureRrdatas?: string[] | undefined
  weight?: number | undefined
}
type RRSetRoutingPolicyWrrPolicy = {
  items?: RRSetRoutingPolicyWrrPolicyWrrPolicyItem[] | undefined
  kind?: string | undefined
}
type RRSetRoutingPolicy = {
  geo?: RRSetRoutingPolicyGeoPolicy | undefined
  healthCheck?: string | undefined
  kind?: string | undefined
  primaryBackup?: RRSetRoutingPolicyPrimaryBackupPolicy | undefined
  wrr?: RRSetRoutingPolicyWrrPolicy | undefined
}
type ResourceRecordSet = {
  kind?: string | undefined
  name?: string | undefined
  routingPolicy?: RRSetRoutingPolicy | undefined
  rrdatas?: string[] | undefined
  signatureRrdatas?: string[] | undefined
  ttl?: number | undefined
  type?: string | undefined
}
type Change = {
  additions?: ResourceRecordSet[] | undefined
  deletions?: ResourceRecordSet[] | undefined
  id?: string | undefined
  isServing?: boolean | undefined
  kind?: string | undefined
  startTime?: string | undefined
  status?: 'PENDING' | 'DONE' | undefined
}
type ChangesListResponse = {
  changes?: Change[] | undefined
  header?: ResponseHeader | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type DnsKeysListResponse = {
  dnsKeys?: DnsKey[] | undefined
  header?: ResponseHeader | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ManagedZoneOperationsListResponse = {
  header?: ResponseHeader | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type ResourceRecordSetsListResponse = {
  header?: ResponseHeader | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  rrsets?: ResourceRecordSet[] | undefined
}
type PolicyAlternativeNameServerConfigTargetNameServer = {
  forwardingPath?: 'DEFAULT' | 'PRIVATE' | undefined
  ipv4Address?: string | undefined
  ipv6Address?: string | undefined
  kind?: string | undefined
}
type PolicyAlternativeNameServerConfig = {
  kind?: string | undefined
  targetNameServers?: PolicyAlternativeNameServerConfigTargetNameServer[] | undefined
}
type PolicyNetwork = { kind?: string | undefined; networkUrl?: string | undefined }
type Policy = {
  alternativeNameServerConfig?: PolicyAlternativeNameServerConfig | undefined
  description?: string | undefined
  enableInboundForwarding?: boolean | undefined
  enableLogging?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  networks?: PolicyNetwork[] | undefined
}
type PoliciesListResponse = {
  header?: ResponseHeader | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  policies?: Policy[] | undefined
}
type PoliciesPatchResponse = { header?: ResponseHeader | undefined; policy?: Policy | undefined }
type PoliciesUpdateResponse = { header?: ResponseHeader | undefined; policy?: Policy | undefined }
type ResponsePolicyGKECluster = { gkeClusterName?: string | undefined; kind?: string | undefined }
type ResponsePolicyNetwork = { kind?: string | undefined; networkUrl?: string | undefined }
type ResponsePolicy = {
  description?: string | undefined
  gkeClusters?: ResponsePolicyGKECluster[] | undefined
  id?: string | undefined
  kind?: string | undefined
  labels?: { [x: string]: string } | undefined
  networks?: ResponsePolicyNetwork[] | undefined
  responsePolicyName?: string | undefined
}
type ResponsePoliciesListResponse = {
  header?: ResponseHeader | undefined
  nextPageToken?: string | undefined
  responsePolicies?: ResponsePolicy[] | undefined
}
type ResponsePoliciesPatchResponse = {
  header?: ResponseHeader | undefined
  responsePolicy?: ResponsePolicy | undefined
}
type ResponsePoliciesUpdateResponse = {
  header?: ResponseHeader | undefined
  responsePolicy?: ResponsePolicy | undefined
}
type ResponsePolicyRuleLocalData = { localDatas?: ResourceRecordSet[] | undefined }
type ResponsePolicyRule = {
  behavior?: 'BEHAVIOR_UNSPECIFIED' | 'BYPASS_RESPONSE_POLICY' | undefined
  dnsName?: string | undefined
  kind?: string | undefined
  localData?: ResponsePolicyRuleLocalData | undefined
  ruleName?: string | undefined
}
type ResponsePolicyRulesListResponse = {
  header?: ResponseHeader | undefined
  nextPageToken?: string | undefined
  responsePolicyRules?: ResponsePolicyRule[] | undefined
}
type ResponsePolicyRulesPatchResponse = {
  header?: ResponseHeader | undefined
  responsePolicyRule?: ResponsePolicyRule | undefined
}
type ResponsePolicyRulesUpdateResponse = {
  header?: ResponseHeader | undefined
  responsePolicyRule?: ResponsePolicyRule | undefined
}
type GoogleIamV1GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GoogleIamV1GetIamPolicyRequest = { options?: GoogleIamV1GetPolicyOptions | undefined }
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
}
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleIamV1SetIamPolicyRequest = {
  policy?: GoogleIamV1Policy | undefined
  updateMask?: string | undefined
}
type GoogleIamV1TestIamPermissionsRequest = { permissions?: string[] | undefined }
type GoogleIamV1TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/dns/v2/projects/:project/locations/:location': {
      $get: {
        input: { param: { project: string; location: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        output: Project
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones': {
      $get: {
        input: { param: { project: string; location: string } } & {
          query: {
            dnsName?: string | undefined
            maxResults?: number | undefined
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
        output: ManagedZonesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; location: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ManagedZone }
        output: ManagedZone
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone': {
      $delete: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        output: ManagedZone
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ManagedZone }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ManagedZone }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes': {
      $get: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            sortBy?: 'CHANGE_SEQUENCE' | undefined
            sortOrder?: string | undefined
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
        output: ChangesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: Change }
        output: Change
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes/:changeId': {
      $get: {
        input: {
          param: { project: string; location: string; managedZone: string; changeId: string }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        output: Change
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/dnsKeys': {
      $get: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            digestType?: string | undefined
            maxResults?: number | undefined
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
        output: DnsKeysListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/dnsKeys/:dnsKeyId': {
      $get: {
        input: {
          param: { project: string; location: string; managedZone: string; dnsKeyId: string }
        } & {
          query: {
            clientOperationId?: string | undefined
            digestType?: string | undefined
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
        output: DnsKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/operations': {
      $get: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            sortBy?: 'START_TIME' | 'ID' | undefined
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
        output: ManagedZoneOperationsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/operations/:operation': {
      $get: {
        input: {
          param: { project: string; location: string; managedZone: string; operation: string }
        } & {
          query: {
            clientOperationId?: string | undefined
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
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets': {
      $get: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            maxResults?: number | undefined
            name?: string | undefined
            pageToken?: string | undefined
            type?: string | undefined
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
        output: ResourceRecordSetsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; location: string; managedZone: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResourceRecordSet }
        output: ResourceRecordSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets/:name/:type': {
      $delete: {
        input: {
          param: {
            project: string
            location: string
            managedZone: string
            name: string
            type: string
          }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: {
            project: string
            location: string
            managedZone: string
            name: string
            type: string
          }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        output: ResourceRecordSet
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: {
            project: string
            location: string
            managedZone: string
            name: string
            type: string
          }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResourceRecordSet }
        output: ResourceRecordSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/policies': {
      $get: {
        input: { param: { project: string; location: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: PoliciesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; location: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: Policy }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/policies/:policy': {
      $delete: {
        input: { param: { project: string; location: string; policy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { project: string; location: string; policy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
      $patch: {
        input: { param: { project: string; location: string; policy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: Policy }
        output: PoliciesPatchResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; location: string; policy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: Policy }
        output: PoliciesUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/responsePolicies': {
      $get: {
        input: { param: { project: string; location: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: ResponsePoliciesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; location: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResponsePolicy }
        output: ResponsePolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy': {
      $delete: {
        input: { param: { project: string; location: string; responsePolicy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { project: string; location: string; responsePolicy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        output: ResponsePolicy
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; location: string; responsePolicy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResponsePolicy }
        output: ResponsePoliciesPatchResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; location: string; responsePolicy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResponsePolicy }
        output: ResponsePoliciesUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules': {
      $get: {
        input: { param: { project: string; location: string; responsePolicy: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: ResponsePolicyRulesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; location: string; responsePolicy: string } } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResponsePolicyRule }
        output: ResponsePolicyRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule': {
      $delete: {
        input: {
          param: {
            project: string
            location: string
            responsePolicy: string
            responsePolicyRule: string
          }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: {
            project: string
            location: string
            responsePolicy: string
            responsePolicyRule: string
          }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        output: ResponsePolicyRule
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: {
            project: string
            location: string
            responsePolicy: string
            responsePolicyRule: string
          }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResponsePolicyRule }
        output: ResponsePolicyRulesPatchResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            project: string
            location: string
            responsePolicy: string
            responsePolicyRule: string
          }
        } & {
          query: {
            clientOperationId?: string | undefined
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
        } & { json: ResponsePolicyRule }
        output: ResponsePolicyRulesUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/:resource:getIamPolicy': {
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
        } & { json: GoogleIamV1GetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/:resource:setIamPolicy': {
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
        } & { json: GoogleIamV1SetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns/v2/:resource:testIamPermissions': {
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
        } & { json: GoogleIamV1TestIamPermissionsRequest }
        output: GoogleIamV1TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
