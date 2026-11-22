type Device = {
  addresses?: string[] | undefined
  id?: string | undefined
  nodeId?: string | undefined
  user?: string | undefined
  name?: string | undefined
  hostname?: string | undefined
  clientVersion?: string | undefined
  updateAvailable?: boolean | undefined
  os?: string | undefined
  created?: string | undefined
  connectedToControl?: boolean | undefined
  lastSeen?: string | undefined
  keyExpiryDisabled?: boolean | undefined
  expires?: string | undefined
  authorized?: boolean | undefined
  isExternal?: boolean | undefined
  multipleConnections?: boolean | undefined
  machineKey?: string | undefined
  nodeKey?: string | undefined
  blocksIncomingConnections?: boolean | undefined
  enabledRoutes?: string[] | undefined
  advertisedRoutes?: string[] | undefined
  clientConnectivity?:
    | {
        endpoints?: string[] | undefined
        mappingVariesByDestIP?: boolean | undefined
        latency?:
          | { [x: string]: { preferred?: boolean | undefined; latencyMs?: number | undefined } }
          | undefined
        clientSupports?:
          | {
              hairPinning?: (boolean | null) | undefined
              ipv6?: (boolean | null) | undefined
              pcp?: (boolean | null) | undefined
              pmp?: (boolean | null) | undefined
              udp?: (boolean | null) | undefined
              upnp?: (boolean | null) | undefined
            }
          | undefined
      }
    | undefined
  tags?: string[] | undefined
  tailnetLockError?: string | undefined
  tailnetLockKey?: string | undefined
  sshEnabled?: boolean | undefined
  postureIdentity?:
    | { serialNumbers?: string[] | undefined; disabled?: boolean | undefined }
    | undefined
  postureStatus?:
    | {
        passing?: boolean | undefined
        impacting?: boolean | undefined
        failingAssertions?: string[] | undefined
      }
    | undefined
  isEphemeral?: boolean | undefined
  distro?:
    | { name?: string | undefined; version?: string | undefined; codeName?: string | undefined }
    | undefined
}
type Error = { message: string }
type DeviceRoutes = {
  advertisedRoutes?: string[] | undefined
  enabledRoutes?: string[] | undefined
}
type DevicePostureAttributes = {
  attributes?: { [x: string]: string | number | boolean } | undefined
  expiries?: { [x: string]: string } | undefined
}
type DeviceInvite = {
  id?: string | undefined
  created?: string | undefined
  tailnetId?: bigint | undefined
  deviceId?: bigint | undefined
  sharerId?: bigint | undefined
  multiUse?: boolean | undefined
  allowExitNode?: boolean | undefined
  email?: string | undefined
  lastEmailSentAt?: string | undefined
  inviteUrl?: string | undefined
  accepted?: boolean | undefined
  acceptedBy?:
    | {
        id?: bigint | undefined
        loginName?: string | undefined
        profilePicUrl?: string | undefined
      }
    | undefined
}
type UserInvite = {
  id: string
  role: 'member' | 'admin' | 'it-admin' | 'network-admin' | 'billing-admin' | 'auditor'
  tailnetId: bigint
  inviterId: bigint
  email?: string | undefined
  lastEmailSentAt?: string | undefined
  inviteUrl?: string | undefined
}
type ConfigurationAuditLog = {
  eventTime: string
  type: 'CONFIG'
  deferredAt?: string | undefined
  eventGroupID: string
  origin:
    | 'ADMIN_CONSOLE'
    | 'CONFIG_API'
    | 'CONTROL'
    | 'IDENTITY_PROVIDER'
    | 'NODE'
    | 'SUPPORT_REQUEST'
    | 'STRIPE'
    | 'SECURITY_NOTIFICATION'
    | 'LEGAL_NOTIFICATION'
    | 'BORDER0_API'
  actor: {
    id?: string | undefined
    type?:
      | 'USER'
      | 'NODE'
      | 'AUTOMATED_WORKER'
      | 'OAUTH_CLIENT'
      | 'SCIM'
      | 'MULLVAD'
      | 'LOGSTREAM'
      | 'SECRET_SCANNER'
      | 'PAM_CONNECTOR'
      | 'PAM_SERVICE_ACCOUNT'
      | undefined
    loginName?: string | undefined
    displayName?: string | undefined
    tags?: string[] | undefined
  }
  target: {
    id?: string | undefined
    name?: string | undefined
    type?:
      | 'TAILNET'
      | 'USER'
      | 'GROUP'
      | 'NODE'
      | 'API_KEY'
      | 'INVITE'
      | 'SHARE'
      | 'BILLING'
      | 'ADMIN_CONSOLE'
      | 'WEB_INTERFACE'
      | 'WEBHOOK_ENDPOINT'
      | 'FAILED_REQUEST'
      | undefined
    isEphemeral?: boolean | undefined
    property?:
      | 'ACL'
      | 'ACL_TAGS'
      | 'ACCOUNT_EMAIL'
      | 'ADDRESS'
      | 'ALLOWED_IPS'
      | 'AUTO_APPROVED_ROUTES'
      | 'ATTRIBUTES'
      | 'BILLING_OWNER'
      | 'COLLECT_SERVICES'
      | 'COLLECT_POSTURE_IDENTITY'
      | 'MULLVAD_VPN'
      | 'DNS_CONFIG'
      | 'EMAIL'
      | 'EXIT_NODE'
      | 'FEATURE'
      | 'FILE_SHARING'
      | 'HTTPS'
      | 'KEY_EXPIRY_TIME'
      | 'KEY_EXPIRY'
      | 'LOG_EXIT_FLOWS'
      | 'LOGSTREAM_ENDPOINT'
      | 'MAGIC_DNS'
      | 'MACHINE_AUTH_NEEDED'
      | 'MACHINE_APPROVAL_NEEDED'
      | 'USER_APPROVAL_REQUIRED'
      | 'MACHINE_NAME'
      | 'MAX_KEY_DURATION'
      | 'NETWORK_FLOW_LOGGING'
      | 'GEOSTEERING'
      | 'NODE_SHARE'
      | 'TAILNET_INVITE'
      | 'PAYMENT_INFO'
      | 'POSTURE_IDENTITY'
      | 'POSTURE_INTEGRATION'
      | 'USER_ROLE'
      | 'SCIM'
      | 'SECURITY_EMAIL'
      | 'STRIPE_CUSTOMER_ID'
      | 'SUBSCRIPTION'
      | 'SUBSCRIBED_EVENTS'
      | 'SUPPORT_EMAIL'
      | 'SECRET'
      | 'TCD'
      | 'TKA'
      | 'AUTH_PROVIDER'
      | 'ROUTE_SELECTION'
      | undefined
  }
  action:
    | 'LOGIN'
    | 'LOGOUT'
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'CANCEL'
    | 'REVOKE'
    | 'APPROVE'
    | 'SUSPEND'
    | 'RESTORE'
    | 'ENABLE'
    | 'DISABLE'
    | 'ACCEPT'
    | 'EXPIRED'
    | 'PUSH_USER'
    | 'PUSH_GROUP'
    | 'VERIFY'
    | 'JOIN_WAITLIST'
    | 'INVITE'
    | 'JOIN'
    | 'LEAVE'
    | 'RESEND'
    | 'MIGRATE_AUTH_PROVIDER'
  old?:
    | string
    | number
    | number
    | boolean
    | { [x: string]: unknown }[]
    | { [x: string]: unknown }
    | undefined
  new?:
    | string
    | number
    | number
    | boolean
    | { [x: string]: unknown }[]
    | { [x: string]: unknown }
    | undefined
  actionDetails?: string | undefined
  error?: string | undefined
}
type ConnectionCounts = {
  proto?:
    | 'ah'
    | 'dccp'
    | 'egp'
    | 'esp'
    | 'gre'
    | 'icmp'
    | 'igmp'
    | 'igp'
    | 'ipv4'
    | 'ipv6-icmp'
    | 'sctp'
    | 'tcp'
    | 'udp'
    | undefined
  src?: string | undefined
  dst?: string | undefined
  txPkts?: number | undefined
  txBytes?: number | undefined
  rxPkts?: number | undefined
  rxBytes?: number | undefined
}
type NetworkFlowLog = {
  logged?: string | undefined
  nodeId?: string | undefined
  start?: string | undefined
  end?: string | undefined
  virtualTraffic?: ConnectionCounts[] | undefined
  subnetTraffic?: ConnectionCounts[] | undefined
  exitTraffic?: ConnectionCounts[] | undefined
  physicalTraffic?: ConnectionCounts[] | undefined
}
type LogType = 'configuration' | 'network'
type LogstreamEndpointPublishingStatus = {
  lastActivity: string
  lastError: string
  maxBodySize: number
  numBytesSent: number
  numEntriesSent: number
  numSpoofedEntries: number
  numTotalRequests: number
  numFailedRequests: number
  rateBytesSent: number
  rateEntriesSent: number
  rateTotalRequests: number
  rateFailedRequests: number
}
type LogstreamEndpointConfiguration = {
  logType?: LogType | undefined
  destinationType?:
    | 'splunk'
    | 'elastic'
    | 'panther'
    | 'cribl'
    | 'crowdstrike'
    | 'datadog'
    | 'axiom'
    | 's3'
    | undefined
  url?: string | undefined
  user?: string | undefined
  uploadPeriodMinutes?: number | undefined
  compressionFormat?: 'zstd' | 'gzip' | 'none' | undefined
  token?: string | undefined
  s3Bucket?: string | undefined
  s3Region?: string | undefined
  s3KeyPrefix?: string | undefined
  s3AuthenticationType?: 'accesskey' | 'rolearn' | undefined
  s3AccessKeyId?: string | undefined
  s3SecretAccessKey?: string | undefined
  s3RoleArn?: string | undefined
  s3ExternalId?: string | undefined
  gcsBucket?: string | undefined
  gcsKeyPrefix?: string | undefined
  gcsScopes?: string[] | undefined
  gcsCredentials?: string | undefined
}
type AwsExternalId = { externalId?: string | undefined; tailscaleAwsAccountId?: string | undefined }
type DnsPreferences = { magicDNS: boolean }
type DnsSearchPaths = { searchPaths: string[] }
type SplitDns = { [x: string]: string[] | null }
type DnsConfigurationResolver = {
  address?: string | undefined
  useWithExitNode?: boolean | undefined
}
type DnsConfigurationPreferences = {
  overrideLocalDNS?: boolean | undefined
  magicDNS?: boolean | undefined
}
type DnsConfiguration = {
  nameservers?: DnsConfigurationResolver[] | undefined
  splitDNS?: { [x: string]: DnsConfigurationResolver[] | null } | undefined
  searchPaths?: string[] | undefined
  preferences?: DnsConfigurationPreferences | undefined
}
type KeyCapabilities = {
  devices?:
    | {
        create?:
          | {
              reusable?: boolean | undefined
              ephemeral?: boolean | undefined
              preauthorized?: boolean | undefined
              tags?: string[] | undefined
              nodeAttributes?: { [x: string]: string | number | boolean } | undefined
            }
          | undefined
      }
    | undefined
}
type Key = {
  id?: string | undefined
  key?: string | undefined
  keyType?: 'auth' | 'client' | 'api' | 'federated' | undefined
  expirySeconds?: bigint | undefined
  created?: string | undefined
  updated?: string | undefined
  expires?: string | undefined
  revoked?: string | undefined
  capabilities?: KeyCapabilities | undefined
  scopes?: string[] | undefined
  tags?: string[] | undefined
  description?: string | undefined
  invalid?: boolean | undefined
  userId?: string | undefined
  audience?: string | undefined
  issuer?: string | undefined
  subject?: string | undefined
  customClaimRules?: { [x: string]: string } | undefined
}
type PostureIntegration = {
  provider?: 'falcon' | 'intune' | 'jamfpro' | 'kandji' | 'kolide' | 'sentinelone' | undefined
  cloudId?: string | undefined
  clientId?: string | undefined
  tenantId?: string | undefined
  clientSecret?: string | undefined
  id?: string | undefined
  configUpdated?: string | undefined
  status?:
    | {
        lastSync?: string | undefined
        error?: string | undefined
        providerHostCount?: number | undefined
        matchedCount?: number | undefined
        possibleMatchedCount?: number | undefined
      }
    | undefined
}
type User = {
  id?: string | undefined
  displayName?: string | undefined
  loginName?: string | undefined
  profilePicUrl?: string | undefined
  tailnetId?: string | undefined
  created?: string | undefined
  type?: 'member' | 'shared' | undefined
  role?:
    | 'owner'
    | 'member'
    | 'admin'
    | 'it-admin'
    | 'network-admin'
    | 'billing-admin'
    | 'auditor'
    | undefined
  status?: 'active' | 'idle' | 'suspended' | 'needs-approval' | 'over-billing-limit' | undefined
  deviceCount?: number | undefined
  lastSeen?: string | undefined
  currentlyConnected?: boolean | undefined
}
type Contact = {
  email?: string | undefined
  fallbackEmail?: string | undefined
  needsVerification?: boolean | undefined
}
type Webhook = {
  endpointId?: string | undefined
  endpointUrl?: string | undefined
  providerType?: 'slack' | 'mattermost' | 'googlechat' | 'discord' | undefined
  creatorLoginName?: string | undefined
  created?: string | undefined
  lastModified?: string | undefined
  subscriptions?:
    | (
        | 'nodeCreated'
        | 'nodeNeedsApproval'
        | 'nodeApproved'
        | 'nodeKeyExpiringInOneDay'
        | 'nodeKeyExpired'
        | 'nodeDeleted'
        | 'nodeSigned'
        | 'nodeNeedsSignature'
        | 'policyUpdate'
        | 'userCreated'
        | 'userNeedsApproval'
        | 'userSuspended'
        | 'userRestored'
        | 'userDeleted'
        | 'userApproved'
        | 'userRoleUpdated'
        | 'subnetIPForwardingNotEnabled'
        | 'exitNodeIPForwardingNotEnabled'
      )[]
    | undefined
  secret?: string | undefined
}
type ProviderType = 'slack' | 'mattermost' | 'googlechat' | 'discord'
type Subscriptions = (
  | 'nodeCreated'
  | 'nodeNeedsApproval'
  | 'nodeApproved'
  | 'nodeKeyExpiringInOneDay'
  | 'nodeKeyExpired'
  | 'nodeDeleted'
  | 'nodeSigned'
  | 'nodeNeedsSignature'
  | 'policyUpdate'
  | 'userCreated'
  | 'userNeedsApproval'
  | 'userSuspended'
  | 'userRestored'
  | 'userDeleted'
  | 'userApproved'
  | 'userRoleUpdated'
  | 'subnetIPForwardingNotEnabled'
  | 'exitNodeIPForwardingNotEnabled'
)[]
type TailnetSettings = {
  aclsExternallyManagedOn?: (boolean | null) | undefined
  aclsExternalLink?: string | undefined
  adminConsoleSessionTimeoutMinutes?: number | undefined
  devicesApprovalOn?: (boolean | null) | undefined
  devicesAutoUpdatesOn?: (boolean | null) | undefined
  devicesKeyDurationDays?: number | undefined
  usersApprovalOn?: (boolean | null) | undefined
  usersRoleAllowedToJoinExternalTailnets?: 'none' | 'admin' | 'member' | undefined
  networkFlowLoggingOn?: (boolean | null) | undefined
  regionalRoutingOn?: (boolean | null) | undefined
  routeSelection?:
    | 'active-passive-failover'
    | 'regional-routing'
    | 'regional-routing-failover'
    | 'magicroute'
    | undefined
  postureIdentityCollectionOn?: (boolean | null) | undefined
  httpsEnabled?: (boolean | null) | undefined
}
type VIPServiceInfo = {
  name?: string | undefined
  displayName?: string | undefined
  addrs?: string[] | undefined
  comment?: string | undefined
  ports?: string[] | undefined
  tags?: string[] | undefined
}
type VIPServiceInfoPut = {
  addrs?: string[] | undefined
  name?: string | undefined
  displayName?: string | undefined
  comment?: string | undefined
  ports?: string[] | undefined
  tags?: string[] | undefined
}
type ServiceHostInfo = {
  stableNodeID?: string | undefined
  approvalLevel?: 'not-approved' | 'approved:auto' | 'approved:manual' | undefined
  configured?: string | undefined
}
type VIPServiceApproval = { approved?: boolean | undefined; autoApproved?: boolean | undefined }
type OAuthApp = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  redirectURIs?: string[] | undefined
  scopes?: string[] | undefined
  allowedNodeAttributes?: string[] | undefined
  clientSecret?: string | undefined
  created?: string | undefined
  updated?: string | undefined
}
type Name = string
type Description = string
type RedirectURIs = string[]
type Scopes = string[]
type AllowedNodeAttributes = string[]
type OrganizationTailnet = {
  id?: string | undefined
  displayName?: string | undefined
  orgId?: string | undefined
  createdAt?: string | undefined
}
type ListOrganizationTailnetsResponse = {
  tailnets?: OrganizationTailnet[] | undefined
  cursor?: string | undefined
  totalCount?: number | undefined
}
type CreateOrganizationTailnetRequest = { displayName: string }
type TailnetOAuthClient = { id?: string | undefined; secret?: string | undefined }
type CreateOrganizationTailnetResponse = {
  id?: string | undefined
  displayName?: string | undefined
  orgId?: string | undefined
  dnsName?: string | undefined
  createdAt?: string | undefined
  oauthClient?: TailnetOAuthClient | undefined
  alreadyExists?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/tailnet/:tailnet/devices': {
      $get:
        | {
            input: { param: { tailnet: string } } & {
              query: {
                fields?: 'all' | 'default' | undefined
                '<field>=<value> filters'?: string | undefined
              }
            }
            output: { devices?: Device[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                fields?: 'all' | 'default' | undefined
                '<field>=<value> filters'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                fields?: 'all' | 'default' | undefined
                '<field>=<value> filters'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                fields?: 'all' | 'default' | undefined
                '<field>=<value> filters'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/tailnet/:tailnet': {
      $delete:
        | { input: { param: { tailnet: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/device-attributes': {
      $patch:
        | {
            input: { param: { tailnet: string } } & {
              json: {
                nodes?:
                  | {
                      [x: string]: {
                        [x: string]:
                          | { value: string | number | boolean; expiry?: string | undefined }
                          | ({ [x: string]: unknown } | null)
                      }
                    }
                  | undefined
                comment?: string | undefined
              }
            }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                nodes?:
                  | {
                      [x: string]: {
                        [x: string]:
                          | { value: string | number | boolean; expiry?: string | undefined }
                          | ({ [x: string]: unknown } | null)
                      }
                    }
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                nodes?:
                  | {
                      [x: string]: {
                        [x: string]:
                          | { value: string | number | boolean; expiry?: string | undefined }
                          | ({ [x: string]: unknown } | null)
                      }
                    }
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                nodes?:
                  | {
                      [x: string]: {
                        [x: string]:
                          | { value: string | number | boolean; expiry?: string | undefined }
                          | ({ [x: string]: unknown } | null)
                      }
                    }
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/device/:deviceId': {
      $get:
        | {
            input: { param: { deviceId: string } } & {
              query: { fields?: 'all' | 'default' | undefined }
            }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & {
              query: { fields?: 'all' | 'default' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & {
              query: { fields?: 'all' | 'default' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & {
              query: { fields?: 'all' | 'default' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & {
              query: { fields?: 'all' | 'default' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $delete:
        | { input: { param: { deviceId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/expire': {
      $post:
        | { input: { param: { deviceId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/routes': {
      $get:
        | {
            input: { param: { deviceId: string } }
            output: DeviceRoutes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { param: { deviceId: string } } & { json: { routes?: string[] | undefined } }
            output: DeviceRoutes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: { routes?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & { json: { routes?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & { json: { routes?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/authorized': {
      $post:
        | {
            input: { param: { deviceId: string } } & { json: { authorized: boolean } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: { authorized: boolean } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & { json: { authorized: boolean } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { deviceId: string } } & { json: { authorized: boolean } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & { json: { authorized: boolean } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & { json: { authorized: boolean } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/name': {
      $post:
        | {
            input: { param: { deviceId: string } } & { json: { name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/tags': {
      $post:
        | {
            input: { param: { deviceId: string } } & { json: { tags?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/key': {
      $post:
        | {
            input: { param: { deviceId: string } } & { json: { keyExpiryDisabled: boolean } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: { keyExpiryDisabled: boolean } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & { json: { keyExpiryDisabled: boolean } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & { json: { keyExpiryDisabled: boolean } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/ip': {
      $post:
        | {
            input: { param: { deviceId: string } } & { json: { ipv4: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: { ipv4: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & { json: { ipv4: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & { json: { ipv4: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & { json: { ipv4: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/attributes': {
      $get:
        | {
            input: { param: { deviceId: string } }
            output: DevicePostureAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/attributes/:attributeKey': {
      $post:
        | {
            input: { param: { deviceId: string; attributeKey: string } } & {
              json: {
                value?: string | number | boolean | undefined
                expiry?: string | undefined
                comment?: string | undefined
              }
            }
            output: DevicePostureAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } } & {
              json: {
                value?: string | number | boolean | undefined
                expiry?: string | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } } & {
              json: {
                value?: string | number | boolean | undefined
                expiry?: string | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } } & {
              json: {
                value?: string | number | boolean | undefined
                expiry?: string | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } } & {
              json: {
                value?: string | number | boolean | undefined
                expiry?: string | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $delete:
        | {
            input: { param: { deviceId: string; attributeKey: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string; attributeKey: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/device/:deviceId/device-invites': {
      $get:
        | {
            input: { param: { deviceId: string } }
            output: DeviceInvite[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { param: { deviceId: string } } & {
              json: {
                multiUse?: boolean | undefined
                allowExitNode?: boolean | undefined
                email?: string | undefined
              }[]
            }
            output: DeviceInvite[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & {
              json: {
                multiUse?: boolean | undefined
                allowExitNode?: boolean | undefined
                email?: string | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & {
              json: {
                multiUse?: boolean | undefined
                allowExitNode?: boolean | undefined
                email?: string | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { deviceId: string } } & {
              json: {
                multiUse?: boolean | undefined
                allowExitNode?: boolean | undefined
                email?: string | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/tailnet/:tailnet/user-invites': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: UserInvite[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & {
              json: {
                role?:
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
                email?: string | undefined
              }[]
            }
            output: UserInvite[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                role?:
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
                email?: string | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                role?:
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
                email?: string | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user-invites/:userInviteId': {
      $get:
        | {
            input: { param: { userInviteId: string } }
            output: UserInvite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { userInviteId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user-invites/:userInviteId/resend': {
      $post:
        | {
            input: { param: { userInviteId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/device-invites/:deviceInviteId': {
      $get:
        | {
            input: { param: { deviceInviteId: string } }
            output: DeviceInvite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { deviceInviteId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/device-invites/:deviceInviteId/resend': {
      $post:
        | {
            input: { param: { deviceInviteId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deviceInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceInviteId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/device-invites/-/accept': {
      $post:
        | {
            input: { json: { invite: string } }
            output: {
              device?:
                | {
                    id?: string | undefined
                    os?: string | undefined
                    name?: string | undefined
                    fqdn?: string | undefined
                    ipv4?: string | undefined
                    ipv6?: string | undefined
                    includeExitNode?: boolean | undefined
                  }
                | undefined
              sharer?:
                | {
                    id?: string | undefined
                    displayName?: string | undefined
                    loginName?: string | undefined
                    profilePicURL?: string | undefined
                  }
                | undefined
              acceptedBy?:
                | {
                    id?: string | undefined
                    displayName?: string | undefined
                    loginName?: string | undefined
                    profilePicURL?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { invite: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { invite: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/tailnet/:tailnet/logging/configuration': {
      $get:
        | {
            input: { param: { tailnet: string } } & {
              query: {
                start: string
                end: string
                actor?: string[] | undefined
                target?: string[] | undefined
                event?:
                  | (
                      | 'ADMIN_CONSOLE.LOGIN'
                      | 'ADMIN_CONSOLE.LOGOUT'
                      | 'API_KEY.CREATE'
                      | 'API_KEY.EXPIRED'
                      | 'API_KEY.REVOKE'
                      | 'BILLING.CANCEL.SUBSCRIPTION'
                      | 'BILLING.CREATE.SUBSCRIPTION'
                      | 'BILLING.UPDATE.ADDRESS'
                      | 'BILLING.UPDATE.BILLING_OWNER'
                      | 'BILLING.UPDATE.EMAIL'
                      | 'BILLING.UPDATE.PAYMENT_INFO'
                      | 'BILLING.UPDATE.STRIPE_CUSTOMER_ID'
                      | 'BILLING.UPDATE.SUBSCRIPTION'
                      | 'FAILED_REQUEST.UPDATE'
                      | 'GROUP.PUSH_GROUP.ATTRIBUTES'
                      | 'GROUP.UPDATE.USER_ROLE'
                      | 'INVITE.ACCEPT.FEATURE'
                      | 'INVITE.ACCEPT.NODE_SHARE'
                      | 'INVITE.ACCEPT.TAILNET_INVITE'
                      | 'INVITE.CREATE.FEATURE'
                      | 'INVITE.CREATE.NODE_SHARE'
                      | 'INVITE.CREATE.TAILNET_INVITE'
                      | 'INVITE.DELETE.NODE_SHARE'
                      | 'INVITE.DELETE.TAILNET_INVITE'
                      | 'INVITE.RESEND.NODE_SHARE'
                      | 'INVITE.RESEND.TAILNET_INVITE'
                      | 'NODE.APPROVE'
                      | 'NODE.CREATE'
                      | 'NODE.CREATE.ATTRIBUTES'
                      | 'NODE.DELETE'
                      | 'NODE.DELETE.ATTRIBUTES'
                      | 'NODE.DISABLE.KEY_EXPIRY'
                      | 'NODE.DISCONNECT_NODE.CLIENT_LOG'
                      | 'NODE.ENABLE.KEY_EXPIRY'
                      | 'NODE.EXPIRED.KEY_EXPIRY_TIME'
                      | 'NODE.LOGIN'
                      | 'NODE.LOGOUT'
                      | 'NODE.REVOKE'
                      | 'NODE.UPDATE.ACL_TAGS'
                      | 'NODE.UPDATE.ALLOWED_IPS'
                      | 'NODE.UPDATE.ATTRIBUTES'
                      | 'NODE.UPDATE.AUTO_APPROVED_ROUTES'
                      | 'NODE.UPDATE.EXIT_NODE'
                      | 'NODE.UPDATE.KEY_EXPIRY_TIME'
                      | 'NODE.UPDATE.MACHINE_NAME'
                      | 'NODE.UPDATE.POSTURE_IDENTITY'
                      | 'NODE.UPDATE.TKA'
                      | 'SHARE.CREATE'
                      | 'SHARE.DELETE'
                      | 'SHARE.UPDATE'
                      | 'TAILNET.ACCEPT.FEATURE'
                      | 'TAILNET.CREATE'
                      | 'TAILNET.CREATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.CREATE.POSTURE_INTEGRATION'
                      | 'TAILNET.CREATE.TKA'
                      | 'TAILNET.DELETE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.DELETE.POSTURE_INTEGRATION'
                      | 'TAILNET.DELETE.TKA'
                      | 'TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.DISABLE.COLLECT_SERVICES'
                      | 'TAILNET.DISABLE.FILE_SHARING'
                      | 'TAILNET.DISABLE.GEOSTEERING'
                      | 'TAILNET.DISABLE.HTTPS'
                      | 'TAILNET.DISABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.DISABLE.MAGIC_DNS'
                      | 'TAILNET.DISABLE.MULLVAD_VPN'
                      | 'TAILNET.DISABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.DISABLE.SCIM'
                      | 'TAILNET.DISABLE.TKA'
                      | 'TAILNET.DISABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.ENABLE.COLLECT_SERVICES'
                      | 'TAILNET.ENABLE.FILE_SHARING'
                      | 'TAILNET.ENABLE.GEOSTEERING'
                      | 'TAILNET.ENABLE.HTTPS'
                      | 'TAILNET.ENABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.ENABLE.MAGIC_DNS'
                      | 'TAILNET.ENABLE.MULLVAD_VPN'
                      | 'TAILNET.ENABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.ENABLE.SCIM'
                      | 'TAILNET.ENABLE.TKA'
                      | 'TAILNET.ENABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.JOIN'
                      | 'TAILNET.JOIN_WAITLIST.FEATURE'
                      | 'TAILNET.LEAVE'
                      | 'TAILNET.UPDATE.ACCOUNT_EMAIL'
                      | 'TAILNET.UPDATE.ACL'
                      | 'TAILNET.UPDATE.DNS_CONFIG'
                      | 'TAILNET.UPDATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.UPDATE.MAX_KEY_DURATION'
                      | 'TAILNET.UPDATE.POSTURE_INTEGRATION'
                      | 'TAILNET.UPDATE.ROUTE_SELECTION'
                      | 'TAILNET.UPDATE.SECURITY_EMAIL'
                      | 'TAILNET.UPDATE.SUPPORT_EMAIL'
                      | 'TAILNET.UPDATE.TCD'
                      | 'TAILNET.UPDATE.TKA'
                      | 'TAILNET.VERIFY.ACCOUNT_EMAIL'
                      | 'TAILNET.VERIFY.SECURITY_EMAIL'
                      | 'TAILNET.VERIFY.SUPPORT_EMAIL'
                      | 'USER.APPROVE'
                      | 'USER.CREATE'
                      | 'USER.DELETE'
                      | 'USER.INVITE'
                      | 'USER.PUSH_USER.ATTRIBUTES'
                      | 'USER.RESEND.TAILNET_INVITE'
                      | 'USER.RESTORE'
                      | 'USER.RESTORE_GLOBAL'
                      | 'USER.SUSPEND'
                      | 'USER.SUSPEND_GLOBAL'
                      | 'USER.UPDATE.USER_ROLE'
                      | 'WEBHOOK_ENDPOINT.CREATE'
                      | 'WEBHOOK_ENDPOINT.DELETE'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SECRET'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS'
                      | 'WEB_INTERFACE.LOGIN'
                      | 'WEB_INTERFACE.LOGOUT'
                      | 'PAM_CONNECTOR.CREATE'
                      | 'PAM_CONNECTOR.CREATE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.DELETE'
                      | 'PAM_CONNECTOR.DISABLE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.UPDATE'
                      | 'PAM_SERVICE.CREATE'
                      | 'PAM_SERVICE.DELETE'
                      | 'PAM_SERVICE.UPDATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE.ACCESS_TOKEN'
                      | 'PAM_SERVICE_ACCOUNT.DELETE'
                      | 'PAM_SERVICE_ACCOUNT.UPDATE'
                      | 'PAM_SETTINGS.CREATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.CREATE.NOTIFICATION'
                      | 'PAM_SETTINGS.CREATE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.DELETE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.DELETE.NOTIFICATION'
                      | 'PAM_SETTINGS.DELETE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.UPDATE'
                      | 'PAM_SETTINGS.UPDATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.UPDATE.NOTIFICATION'
                      | 'PAM_SETTINGS.UPDATE.SETUP_WIZARD'
                    )[]
                  | undefined
              }
            }
            output: {
              version?: string | undefined
              tailnet?: string | undefined
              logs?: ConfigurationAuditLog[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                start: string
                end: string
                actor?: string[] | undefined
                target?: string[] | undefined
                event?:
                  | (
                      | 'ADMIN_CONSOLE.LOGIN'
                      | 'ADMIN_CONSOLE.LOGOUT'
                      | 'API_KEY.CREATE'
                      | 'API_KEY.EXPIRED'
                      | 'API_KEY.REVOKE'
                      | 'BILLING.CANCEL.SUBSCRIPTION'
                      | 'BILLING.CREATE.SUBSCRIPTION'
                      | 'BILLING.UPDATE.ADDRESS'
                      | 'BILLING.UPDATE.BILLING_OWNER'
                      | 'BILLING.UPDATE.EMAIL'
                      | 'BILLING.UPDATE.PAYMENT_INFO'
                      | 'BILLING.UPDATE.STRIPE_CUSTOMER_ID'
                      | 'BILLING.UPDATE.SUBSCRIPTION'
                      | 'FAILED_REQUEST.UPDATE'
                      | 'GROUP.PUSH_GROUP.ATTRIBUTES'
                      | 'GROUP.UPDATE.USER_ROLE'
                      | 'INVITE.ACCEPT.FEATURE'
                      | 'INVITE.ACCEPT.NODE_SHARE'
                      | 'INVITE.ACCEPT.TAILNET_INVITE'
                      | 'INVITE.CREATE.FEATURE'
                      | 'INVITE.CREATE.NODE_SHARE'
                      | 'INVITE.CREATE.TAILNET_INVITE'
                      | 'INVITE.DELETE.NODE_SHARE'
                      | 'INVITE.DELETE.TAILNET_INVITE'
                      | 'INVITE.RESEND.NODE_SHARE'
                      | 'INVITE.RESEND.TAILNET_INVITE'
                      | 'NODE.APPROVE'
                      | 'NODE.CREATE'
                      | 'NODE.CREATE.ATTRIBUTES'
                      | 'NODE.DELETE'
                      | 'NODE.DELETE.ATTRIBUTES'
                      | 'NODE.DISABLE.KEY_EXPIRY'
                      | 'NODE.DISCONNECT_NODE.CLIENT_LOG'
                      | 'NODE.ENABLE.KEY_EXPIRY'
                      | 'NODE.EXPIRED.KEY_EXPIRY_TIME'
                      | 'NODE.LOGIN'
                      | 'NODE.LOGOUT'
                      | 'NODE.REVOKE'
                      | 'NODE.UPDATE.ACL_TAGS'
                      | 'NODE.UPDATE.ALLOWED_IPS'
                      | 'NODE.UPDATE.ATTRIBUTES'
                      | 'NODE.UPDATE.AUTO_APPROVED_ROUTES'
                      | 'NODE.UPDATE.EXIT_NODE'
                      | 'NODE.UPDATE.KEY_EXPIRY_TIME'
                      | 'NODE.UPDATE.MACHINE_NAME'
                      | 'NODE.UPDATE.POSTURE_IDENTITY'
                      | 'NODE.UPDATE.TKA'
                      | 'SHARE.CREATE'
                      | 'SHARE.DELETE'
                      | 'SHARE.UPDATE'
                      | 'TAILNET.ACCEPT.FEATURE'
                      | 'TAILNET.CREATE'
                      | 'TAILNET.CREATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.CREATE.POSTURE_INTEGRATION'
                      | 'TAILNET.CREATE.TKA'
                      | 'TAILNET.DELETE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.DELETE.POSTURE_INTEGRATION'
                      | 'TAILNET.DELETE.TKA'
                      | 'TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.DISABLE.COLLECT_SERVICES'
                      | 'TAILNET.DISABLE.FILE_SHARING'
                      | 'TAILNET.DISABLE.GEOSTEERING'
                      | 'TAILNET.DISABLE.HTTPS'
                      | 'TAILNET.DISABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.DISABLE.MAGIC_DNS'
                      | 'TAILNET.DISABLE.MULLVAD_VPN'
                      | 'TAILNET.DISABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.DISABLE.SCIM'
                      | 'TAILNET.DISABLE.TKA'
                      | 'TAILNET.DISABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.ENABLE.COLLECT_SERVICES'
                      | 'TAILNET.ENABLE.FILE_SHARING'
                      | 'TAILNET.ENABLE.GEOSTEERING'
                      | 'TAILNET.ENABLE.HTTPS'
                      | 'TAILNET.ENABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.ENABLE.MAGIC_DNS'
                      | 'TAILNET.ENABLE.MULLVAD_VPN'
                      | 'TAILNET.ENABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.ENABLE.SCIM'
                      | 'TAILNET.ENABLE.TKA'
                      | 'TAILNET.ENABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.JOIN'
                      | 'TAILNET.JOIN_WAITLIST.FEATURE'
                      | 'TAILNET.LEAVE'
                      | 'TAILNET.UPDATE.ACCOUNT_EMAIL'
                      | 'TAILNET.UPDATE.ACL'
                      | 'TAILNET.UPDATE.DNS_CONFIG'
                      | 'TAILNET.UPDATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.UPDATE.MAX_KEY_DURATION'
                      | 'TAILNET.UPDATE.POSTURE_INTEGRATION'
                      | 'TAILNET.UPDATE.ROUTE_SELECTION'
                      | 'TAILNET.UPDATE.SECURITY_EMAIL'
                      | 'TAILNET.UPDATE.SUPPORT_EMAIL'
                      | 'TAILNET.UPDATE.TCD'
                      | 'TAILNET.UPDATE.TKA'
                      | 'TAILNET.VERIFY.ACCOUNT_EMAIL'
                      | 'TAILNET.VERIFY.SECURITY_EMAIL'
                      | 'TAILNET.VERIFY.SUPPORT_EMAIL'
                      | 'USER.APPROVE'
                      | 'USER.CREATE'
                      | 'USER.DELETE'
                      | 'USER.INVITE'
                      | 'USER.PUSH_USER.ATTRIBUTES'
                      | 'USER.RESEND.TAILNET_INVITE'
                      | 'USER.RESTORE'
                      | 'USER.RESTORE_GLOBAL'
                      | 'USER.SUSPEND'
                      | 'USER.SUSPEND_GLOBAL'
                      | 'USER.UPDATE.USER_ROLE'
                      | 'WEBHOOK_ENDPOINT.CREATE'
                      | 'WEBHOOK_ENDPOINT.DELETE'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SECRET'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS'
                      | 'WEB_INTERFACE.LOGIN'
                      | 'WEB_INTERFACE.LOGOUT'
                      | 'PAM_CONNECTOR.CREATE'
                      | 'PAM_CONNECTOR.CREATE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.DELETE'
                      | 'PAM_CONNECTOR.DISABLE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.UPDATE'
                      | 'PAM_SERVICE.CREATE'
                      | 'PAM_SERVICE.DELETE'
                      | 'PAM_SERVICE.UPDATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE.ACCESS_TOKEN'
                      | 'PAM_SERVICE_ACCOUNT.DELETE'
                      | 'PAM_SERVICE_ACCOUNT.UPDATE'
                      | 'PAM_SETTINGS.CREATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.CREATE.NOTIFICATION'
                      | 'PAM_SETTINGS.CREATE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.DELETE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.DELETE.NOTIFICATION'
                      | 'PAM_SETTINGS.DELETE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.UPDATE'
                      | 'PAM_SETTINGS.UPDATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.UPDATE.NOTIFICATION'
                      | 'PAM_SETTINGS.UPDATE.SETUP_WIZARD'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                start: string
                end: string
                actor?: string[] | undefined
                target?: string[] | undefined
                event?:
                  | (
                      | 'ADMIN_CONSOLE.LOGIN'
                      | 'ADMIN_CONSOLE.LOGOUT'
                      | 'API_KEY.CREATE'
                      | 'API_KEY.EXPIRED'
                      | 'API_KEY.REVOKE'
                      | 'BILLING.CANCEL.SUBSCRIPTION'
                      | 'BILLING.CREATE.SUBSCRIPTION'
                      | 'BILLING.UPDATE.ADDRESS'
                      | 'BILLING.UPDATE.BILLING_OWNER'
                      | 'BILLING.UPDATE.EMAIL'
                      | 'BILLING.UPDATE.PAYMENT_INFO'
                      | 'BILLING.UPDATE.STRIPE_CUSTOMER_ID'
                      | 'BILLING.UPDATE.SUBSCRIPTION'
                      | 'FAILED_REQUEST.UPDATE'
                      | 'GROUP.PUSH_GROUP.ATTRIBUTES'
                      | 'GROUP.UPDATE.USER_ROLE'
                      | 'INVITE.ACCEPT.FEATURE'
                      | 'INVITE.ACCEPT.NODE_SHARE'
                      | 'INVITE.ACCEPT.TAILNET_INVITE'
                      | 'INVITE.CREATE.FEATURE'
                      | 'INVITE.CREATE.NODE_SHARE'
                      | 'INVITE.CREATE.TAILNET_INVITE'
                      | 'INVITE.DELETE.NODE_SHARE'
                      | 'INVITE.DELETE.TAILNET_INVITE'
                      | 'INVITE.RESEND.NODE_SHARE'
                      | 'INVITE.RESEND.TAILNET_INVITE'
                      | 'NODE.APPROVE'
                      | 'NODE.CREATE'
                      | 'NODE.CREATE.ATTRIBUTES'
                      | 'NODE.DELETE'
                      | 'NODE.DELETE.ATTRIBUTES'
                      | 'NODE.DISABLE.KEY_EXPIRY'
                      | 'NODE.DISCONNECT_NODE.CLIENT_LOG'
                      | 'NODE.ENABLE.KEY_EXPIRY'
                      | 'NODE.EXPIRED.KEY_EXPIRY_TIME'
                      | 'NODE.LOGIN'
                      | 'NODE.LOGOUT'
                      | 'NODE.REVOKE'
                      | 'NODE.UPDATE.ACL_TAGS'
                      | 'NODE.UPDATE.ALLOWED_IPS'
                      | 'NODE.UPDATE.ATTRIBUTES'
                      | 'NODE.UPDATE.AUTO_APPROVED_ROUTES'
                      | 'NODE.UPDATE.EXIT_NODE'
                      | 'NODE.UPDATE.KEY_EXPIRY_TIME'
                      | 'NODE.UPDATE.MACHINE_NAME'
                      | 'NODE.UPDATE.POSTURE_IDENTITY'
                      | 'NODE.UPDATE.TKA'
                      | 'SHARE.CREATE'
                      | 'SHARE.DELETE'
                      | 'SHARE.UPDATE'
                      | 'TAILNET.ACCEPT.FEATURE'
                      | 'TAILNET.CREATE'
                      | 'TAILNET.CREATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.CREATE.POSTURE_INTEGRATION'
                      | 'TAILNET.CREATE.TKA'
                      | 'TAILNET.DELETE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.DELETE.POSTURE_INTEGRATION'
                      | 'TAILNET.DELETE.TKA'
                      | 'TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.DISABLE.COLLECT_SERVICES'
                      | 'TAILNET.DISABLE.FILE_SHARING'
                      | 'TAILNET.DISABLE.GEOSTEERING'
                      | 'TAILNET.DISABLE.HTTPS'
                      | 'TAILNET.DISABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.DISABLE.MAGIC_DNS'
                      | 'TAILNET.DISABLE.MULLVAD_VPN'
                      | 'TAILNET.DISABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.DISABLE.SCIM'
                      | 'TAILNET.DISABLE.TKA'
                      | 'TAILNET.DISABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.ENABLE.COLLECT_SERVICES'
                      | 'TAILNET.ENABLE.FILE_SHARING'
                      | 'TAILNET.ENABLE.GEOSTEERING'
                      | 'TAILNET.ENABLE.HTTPS'
                      | 'TAILNET.ENABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.ENABLE.MAGIC_DNS'
                      | 'TAILNET.ENABLE.MULLVAD_VPN'
                      | 'TAILNET.ENABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.ENABLE.SCIM'
                      | 'TAILNET.ENABLE.TKA'
                      | 'TAILNET.ENABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.JOIN'
                      | 'TAILNET.JOIN_WAITLIST.FEATURE'
                      | 'TAILNET.LEAVE'
                      | 'TAILNET.UPDATE.ACCOUNT_EMAIL'
                      | 'TAILNET.UPDATE.ACL'
                      | 'TAILNET.UPDATE.DNS_CONFIG'
                      | 'TAILNET.UPDATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.UPDATE.MAX_KEY_DURATION'
                      | 'TAILNET.UPDATE.POSTURE_INTEGRATION'
                      | 'TAILNET.UPDATE.ROUTE_SELECTION'
                      | 'TAILNET.UPDATE.SECURITY_EMAIL'
                      | 'TAILNET.UPDATE.SUPPORT_EMAIL'
                      | 'TAILNET.UPDATE.TCD'
                      | 'TAILNET.UPDATE.TKA'
                      | 'TAILNET.VERIFY.ACCOUNT_EMAIL'
                      | 'TAILNET.VERIFY.SECURITY_EMAIL'
                      | 'TAILNET.VERIFY.SUPPORT_EMAIL'
                      | 'USER.APPROVE'
                      | 'USER.CREATE'
                      | 'USER.DELETE'
                      | 'USER.INVITE'
                      | 'USER.PUSH_USER.ATTRIBUTES'
                      | 'USER.RESEND.TAILNET_INVITE'
                      | 'USER.RESTORE'
                      | 'USER.RESTORE_GLOBAL'
                      | 'USER.SUSPEND'
                      | 'USER.SUSPEND_GLOBAL'
                      | 'USER.UPDATE.USER_ROLE'
                      | 'WEBHOOK_ENDPOINT.CREATE'
                      | 'WEBHOOK_ENDPOINT.DELETE'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SECRET'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS'
                      | 'WEB_INTERFACE.LOGIN'
                      | 'WEB_INTERFACE.LOGOUT'
                      | 'PAM_CONNECTOR.CREATE'
                      | 'PAM_CONNECTOR.CREATE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.DELETE'
                      | 'PAM_CONNECTOR.DISABLE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.UPDATE'
                      | 'PAM_SERVICE.CREATE'
                      | 'PAM_SERVICE.DELETE'
                      | 'PAM_SERVICE.UPDATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE.ACCESS_TOKEN'
                      | 'PAM_SERVICE_ACCOUNT.DELETE'
                      | 'PAM_SERVICE_ACCOUNT.UPDATE'
                      | 'PAM_SETTINGS.CREATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.CREATE.NOTIFICATION'
                      | 'PAM_SETTINGS.CREATE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.DELETE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.DELETE.NOTIFICATION'
                      | 'PAM_SETTINGS.DELETE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.UPDATE'
                      | 'PAM_SETTINGS.UPDATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.UPDATE.NOTIFICATION'
                      | 'PAM_SETTINGS.UPDATE.SETUP_WIZARD'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                start: string
                end: string
                actor?: string[] | undefined
                target?: string[] | undefined
                event?:
                  | (
                      | 'ADMIN_CONSOLE.LOGIN'
                      | 'ADMIN_CONSOLE.LOGOUT'
                      | 'API_KEY.CREATE'
                      | 'API_KEY.EXPIRED'
                      | 'API_KEY.REVOKE'
                      | 'BILLING.CANCEL.SUBSCRIPTION'
                      | 'BILLING.CREATE.SUBSCRIPTION'
                      | 'BILLING.UPDATE.ADDRESS'
                      | 'BILLING.UPDATE.BILLING_OWNER'
                      | 'BILLING.UPDATE.EMAIL'
                      | 'BILLING.UPDATE.PAYMENT_INFO'
                      | 'BILLING.UPDATE.STRIPE_CUSTOMER_ID'
                      | 'BILLING.UPDATE.SUBSCRIPTION'
                      | 'FAILED_REQUEST.UPDATE'
                      | 'GROUP.PUSH_GROUP.ATTRIBUTES'
                      | 'GROUP.UPDATE.USER_ROLE'
                      | 'INVITE.ACCEPT.FEATURE'
                      | 'INVITE.ACCEPT.NODE_SHARE'
                      | 'INVITE.ACCEPT.TAILNET_INVITE'
                      | 'INVITE.CREATE.FEATURE'
                      | 'INVITE.CREATE.NODE_SHARE'
                      | 'INVITE.CREATE.TAILNET_INVITE'
                      | 'INVITE.DELETE.NODE_SHARE'
                      | 'INVITE.DELETE.TAILNET_INVITE'
                      | 'INVITE.RESEND.NODE_SHARE'
                      | 'INVITE.RESEND.TAILNET_INVITE'
                      | 'NODE.APPROVE'
                      | 'NODE.CREATE'
                      | 'NODE.CREATE.ATTRIBUTES'
                      | 'NODE.DELETE'
                      | 'NODE.DELETE.ATTRIBUTES'
                      | 'NODE.DISABLE.KEY_EXPIRY'
                      | 'NODE.DISCONNECT_NODE.CLIENT_LOG'
                      | 'NODE.ENABLE.KEY_EXPIRY'
                      | 'NODE.EXPIRED.KEY_EXPIRY_TIME'
                      | 'NODE.LOGIN'
                      | 'NODE.LOGOUT'
                      | 'NODE.REVOKE'
                      | 'NODE.UPDATE.ACL_TAGS'
                      | 'NODE.UPDATE.ALLOWED_IPS'
                      | 'NODE.UPDATE.ATTRIBUTES'
                      | 'NODE.UPDATE.AUTO_APPROVED_ROUTES'
                      | 'NODE.UPDATE.EXIT_NODE'
                      | 'NODE.UPDATE.KEY_EXPIRY_TIME'
                      | 'NODE.UPDATE.MACHINE_NAME'
                      | 'NODE.UPDATE.POSTURE_IDENTITY'
                      | 'NODE.UPDATE.TKA'
                      | 'SHARE.CREATE'
                      | 'SHARE.DELETE'
                      | 'SHARE.UPDATE'
                      | 'TAILNET.ACCEPT.FEATURE'
                      | 'TAILNET.CREATE'
                      | 'TAILNET.CREATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.CREATE.POSTURE_INTEGRATION'
                      | 'TAILNET.CREATE.TKA'
                      | 'TAILNET.DELETE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.DELETE.POSTURE_INTEGRATION'
                      | 'TAILNET.DELETE.TKA'
                      | 'TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.DISABLE.COLLECT_SERVICES'
                      | 'TAILNET.DISABLE.FILE_SHARING'
                      | 'TAILNET.DISABLE.GEOSTEERING'
                      | 'TAILNET.DISABLE.HTTPS'
                      | 'TAILNET.DISABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.DISABLE.MAGIC_DNS'
                      | 'TAILNET.DISABLE.MULLVAD_VPN'
                      | 'TAILNET.DISABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.DISABLE.SCIM'
                      | 'TAILNET.DISABLE.TKA'
                      | 'TAILNET.DISABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY'
                      | 'TAILNET.ENABLE.COLLECT_SERVICES'
                      | 'TAILNET.ENABLE.FILE_SHARING'
                      | 'TAILNET.ENABLE.GEOSTEERING'
                      | 'TAILNET.ENABLE.HTTPS'
                      | 'TAILNET.ENABLE.LOG_EXIT_FLOWS'
                      | 'TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED'
                      | 'TAILNET.ENABLE.MAGIC_DNS'
                      | 'TAILNET.ENABLE.MULLVAD_VPN'
                      | 'TAILNET.ENABLE.NETWORK_FLOW_LOGGING'
                      | 'TAILNET.ENABLE.SCIM'
                      | 'TAILNET.ENABLE.TKA'
                      | 'TAILNET.ENABLE.USER_APPROVAL_REQUIRED'
                      | 'TAILNET.JOIN'
                      | 'TAILNET.JOIN_WAITLIST.FEATURE'
                      | 'TAILNET.LEAVE'
                      | 'TAILNET.UPDATE.ACCOUNT_EMAIL'
                      | 'TAILNET.UPDATE.ACL'
                      | 'TAILNET.UPDATE.DNS_CONFIG'
                      | 'TAILNET.UPDATE.LOGSTREAM_ENDPOINT'
                      | 'TAILNET.UPDATE.MAX_KEY_DURATION'
                      | 'TAILNET.UPDATE.POSTURE_INTEGRATION'
                      | 'TAILNET.UPDATE.ROUTE_SELECTION'
                      | 'TAILNET.UPDATE.SECURITY_EMAIL'
                      | 'TAILNET.UPDATE.SUPPORT_EMAIL'
                      | 'TAILNET.UPDATE.TCD'
                      | 'TAILNET.UPDATE.TKA'
                      | 'TAILNET.VERIFY.ACCOUNT_EMAIL'
                      | 'TAILNET.VERIFY.SECURITY_EMAIL'
                      | 'TAILNET.VERIFY.SUPPORT_EMAIL'
                      | 'USER.APPROVE'
                      | 'USER.CREATE'
                      | 'USER.DELETE'
                      | 'USER.INVITE'
                      | 'USER.PUSH_USER.ATTRIBUTES'
                      | 'USER.RESEND.TAILNET_INVITE'
                      | 'USER.RESTORE'
                      | 'USER.RESTORE_GLOBAL'
                      | 'USER.SUSPEND'
                      | 'USER.SUSPEND_GLOBAL'
                      | 'USER.UPDATE.USER_ROLE'
                      | 'WEBHOOK_ENDPOINT.CREATE'
                      | 'WEBHOOK_ENDPOINT.DELETE'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SECRET'
                      | 'WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS'
                      | 'WEB_INTERFACE.LOGIN'
                      | 'WEB_INTERFACE.LOGOUT'
                      | 'PAM_CONNECTOR.CREATE'
                      | 'PAM_CONNECTOR.CREATE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.DELETE'
                      | 'PAM_CONNECTOR.DISABLE.ACCESS_TOKEN'
                      | 'PAM_CONNECTOR.UPDATE'
                      | 'PAM_SERVICE.CREATE'
                      | 'PAM_SERVICE.DELETE'
                      | 'PAM_SERVICE.UPDATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE'
                      | 'PAM_SERVICE_ACCOUNT.CREATE.ACCESS_TOKEN'
                      | 'PAM_SERVICE_ACCOUNT.DELETE'
                      | 'PAM_SERVICE_ACCOUNT.UPDATE'
                      | 'PAM_SETTINGS.CREATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.CREATE.NOTIFICATION'
                      | 'PAM_SETTINGS.CREATE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.DELETE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.DELETE.NOTIFICATION'
                      | 'PAM_SETTINGS.DELETE.RECORDING_STORAGE'
                      | 'PAM_SETTINGS.UPDATE'
                      | 'PAM_SETTINGS.UPDATE.CUSTOM_DOMAIN'
                      | 'PAM_SETTINGS.UPDATE.NOTIFICATION'
                      | 'PAM_SETTINGS.UPDATE.SETUP_WIZARD'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tailnet/:tailnet/logging/network': {
      $get:
        | {
            input: { param: { tailnet: string } } & { query: { start: string; end: string } }
            output: { logs?: NetworkFlowLog[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { query: { start: string; end: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & { query: { start: string; end: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & { query: { start: string; end: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { query: { start: string; end: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/tailnet/:tailnet/logging/:logType/stream/status': {
      $get:
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: LogstreamEndpointPublishingStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/tailnet/:tailnet/logging/:logType/stream': {
      $get:
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: LogstreamEndpointConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { tailnet: string; logType: LogType } } & {
              json: LogstreamEndpointConfiguration
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tailnet: string; logType: LogType } } & {
              json: LogstreamEndpointConfiguration
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; logType: LogType } } & {
              json: LogstreamEndpointConfiguration
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; logType: LogType } } & {
              json: LogstreamEndpointConfiguration
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; logType: LogType } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tailnet/:tailnet/aws-external-id': {
      $post:
        | {
            input: { param: { tailnet: string } } & { json: { reusable?: boolean | undefined } }
            output: AwsExternalId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: { reusable?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & { json: { reusable?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tailnet/:tailnet/aws-external-id/:id/validate-aws-trust-policy': {
      $post:
        | {
            input: { param: { tailnet: string; id: string } } & {
              json: { roleArn?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tailnet: string; id: string } } & {
              json: { roleArn?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; id: string } } & {
              json: { roleArn?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; id: string } } & {
              json: { roleArn?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tailnet/:tailnet/dns/nameservers': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: { dns?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & { json: { dns?: string[] | undefined } }
            output: { dns?: string[] | undefined; magicDNS?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: { dns?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { json: { dns?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/dns/preferences': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: DnsPreferences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & { json: DnsPreferences }
            output: DnsPreferences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: DnsPreferences }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { json: DnsPreferences }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/dns/searchpaths': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: DnsSearchPaths
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & { json: DnsSearchPaths }
            output: DnsSearchPaths
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: DnsSearchPaths }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { json: DnsSearchPaths }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/dns/split-dns': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: SplitDns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { tailnet: string } } & { json: SplitDns }
            output: SplitDns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: SplitDns }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { json: SplitDns }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tailnet: string } } & { json: SplitDns }
            output: SplitDns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: SplitDns }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { json: SplitDns }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/dns/configuration': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: DnsConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & { json: DnsConfiguration }
            output: DnsConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: DnsConfiguration }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { json: DnsConfiguration }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/keys': {
      $get:
        | {
            input: { param: { tailnet: string } } & { query: { all: boolean } }
            output: { keys?: Key[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { query: { all: boolean } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { query: { all: boolean } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & {
              json: {
                keyType?: 'auth' | 'client' | 'federated' | undefined
                description?: string | undefined
                capabilities?: KeyCapabilities | undefined
                expirySeconds?: bigint | undefined
                scopes?: string[] | undefined
                tags?: string[] | undefined
                issuer?: string | undefined
                subject?: string | undefined
                audience?: string | undefined
                customClaimRules?: { [x: string]: string } | undefined
              }
            }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                keyType?: 'auth' | 'client' | 'federated' | undefined
                description?: string | undefined
                capabilities?: KeyCapabilities | undefined
                expirySeconds?: bigint | undefined
                scopes?: string[] | undefined
                tags?: string[] | undefined
                issuer?: string | undefined
                subject?: string | undefined
                audience?: string | undefined
                customClaimRules?: { [x: string]: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                keyType?: 'auth' | 'client' | 'federated' | undefined
                description?: string | undefined
                capabilities?: KeyCapabilities | undefined
                expirySeconds?: bigint | undefined
                scopes?: string[] | undefined
                tags?: string[] | undefined
                issuer?: string | undefined
                subject?: string | undefined
                audience?: string | undefined
                customClaimRules?: { [x: string]: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/keys/:keyId': {
      $get:
        | {
            input: { param: { tailnet: string; keyId: string } }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; keyId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; keyId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { tailnet: string; keyId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tailnet: string; keyId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; keyId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; keyId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tailnet: string; keyId: string } } & {
              json: {
                keyType?: 'client' | 'federated' | undefined
                description?: string | undefined
                scopes?: string[] | undefined
                tags?: string[] | undefined
                issuer?: string | undefined
                subject?: string | undefined
                audience?: string | undefined
                customClaimRules?: { [x: string]: string } | undefined
              }
            }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; keyId: string } } & {
              json: {
                keyType?: 'client' | 'federated' | undefined
                description?: string | undefined
                scopes?: string[] | undefined
                tags?: string[] | undefined
                issuer?: string | undefined
                subject?: string | undefined
                audience?: string | undefined
                customClaimRules?: { [x: string]: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; keyId: string } } & {
              json: {
                keyType?: 'client' | 'federated' | undefined
                description?: string | undefined
                scopes?: string[] | undefined
                tags?: string[] | undefined
                issuer?: string | undefined
                subject?: string | undefined
                audience?: string | undefined
                customClaimRules?: { [x: string]: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/acl': {
      $get:
        | {
            input: { param: { tailnet: string } } & { query: { details?: boolean | undefined } } & {
              header: { Accept?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { query: { details?: boolean | undefined } } & {
              header: { Accept?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { query: { details?: boolean | undefined } } & {
              header: { Accept?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & { query: { details?: boolean | undefined } } & {
              header: { Accept?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & { query: { details?: boolean | undefined } } & {
              header: { Accept?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { query: { details?: boolean | undefined } } & {
              header: { Accept?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & {
              header: { 'If-Match'?: string | undefined; Accept?: string | undefined }
            } & { json: { [x: string]: unknown } | string }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              header: { 'If-Match'?: string | undefined; Accept?: string | undefined }
            } & { json: { [x: string]: unknown } | string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              header: { 'If-Match'?: string | undefined; Accept?: string | undefined }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              header: { 'If-Match'?: string | undefined; Accept?: string | undefined }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & {
              header: { 'If-Match'?: string | undefined; Accept?: string | undefined }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              header: { 'If-Match'?: string | undefined; Accept?: string | undefined }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { tailnet: string } } & {
              header: { 'If-Match'?: string | undefined; Accept?: string | undefined }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/acl/preview': {
      $post:
        | {
            input: { param: { tailnet: string } } & {
              query: { type: 'user' | 'ipport'; previewFor: string }
            } & { json: { [x: string]: unknown } | string }
            output: {
              matches: { users: string[]; ports: string[]; lineNumber: number }[]
              type: string
              previewFor: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              query: { type: 'user' | 'ipport'; previewFor: string }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              query: { type: 'user' | 'ipport'; previewFor: string }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & {
              query: { type: 'user' | 'ipport'; previewFor: string }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              query: { type: 'user' | 'ipport'; previewFor: string }
            } & { json: { [x: string]: unknown } | string }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/acl/validate': {
      $post:
        | {
            input: { param: { tailnet: string } } & {
              json:
                | {
                    src: string
                    srcPostureAttrs?: { [x: string]: string | number | boolean } | undefined
                    proto?: string | undefined
                    accept?: string[] | undefined
                    deny?: string[] | undefined
                  }[]
                | string
                | string
            }
            output: { message?: string | undefined; data?: { [x: string]: unknown }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              json:
                | {
                    src: string
                    srcPostureAttrs?: { [x: string]: string | number | boolean } | undefined
                    proto?: string | undefined
                    accept?: string[] | undefined
                    deny?: string[] | undefined
                  }[]
                | string
                | string
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              json:
                | {
                    src: string
                    srcPostureAttrs?: { [x: string]: string | number | boolean } | undefined
                    proto?: string | undefined
                    accept?: string[] | undefined
                    deny?: string[] | undefined
                  }[]
                | string
                | string
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & {
              json:
                | {
                    src: string
                    srcPostureAttrs?: { [x: string]: string | number | boolean } | undefined
                    proto?: string | undefined
                    accept?: string[] | undefined
                    deny?: string[] | undefined
                  }[]
                | string
                | string
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              json:
                | {
                    src: string
                    srcPostureAttrs?: { [x: string]: string | number | boolean } | undefined
                    proto?: string | undefined
                    accept?: string[] | undefined
                    deny?: string[] | undefined
                  }[]
                | string
                | string
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/posture/integrations': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: { integrations?: PostureIntegration[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { tailnet: string } } & { json: PostureIntegration }
            output: PostureIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: PostureIntegration }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & { json: PostureIntegration }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/posture/integrations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PostureIntegration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & { json: PostureIntegration }
            output: PostureIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PostureIntegration }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PostureIntegration }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/tailnet/:tailnet/users': {
      $get:
        | {
            input: { param: { tailnet: string } } & {
              query: {
                type?: 'member' | 'shared' | 'all' | undefined
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | 'all'
                  | undefined
              }
            }
            output: { users?: User[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                type?: 'member' | 'shared' | 'all' | undefined
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | 'all'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                type?: 'member' | 'shared' | 'all' | undefined
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | 'all'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                type?: 'member' | 'shared' | 'all' | undefined
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | 'all'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              query: {
                type?: 'member' | 'shared' | 'all' | undefined
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | 'all'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:userId': {
      $get:
        | { input: { param: { userId: string } }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/users/:userId/role': {
      $post:
        | {
            input: { param: { userId: string } } & {
              json: {
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?:
                  | 'owner'
                  | 'member'
                  | 'admin'
                  | 'it-admin'
                  | 'network-admin'
                  | 'billing-admin'
                  | 'auditor'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:userId/approve': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 402 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/users/:userId/suspend': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/users/:userId/restore': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/users/:userId/delete': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/tailnet/:tailnet/contacts': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: {
              account?: Contact | undefined
              support?: Contact | undefined
              security?: Contact | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/contacts/:contactType': {
      $patch:
        | {
            input: {
              param: { tailnet: string; contactType: 'account' | 'support' | 'security' }
            } & { json: { email: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { tailnet: string; contactType: 'account' | 'support' | 'security' }
            } & { json: { email: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { tailnet: string; contactType: 'account' | 'support' | 'security' }
            } & { json: { email: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { tailnet: string; contactType: 'account' | 'support' | 'security' }
            } & { json: { email: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/contacts/:contactType/resend-verification-email': {
      $post:
        | {
            input: { param: { tailnet: string; contactType: 'account' | 'support' | 'security' } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tailnet: string; contactType: 'account' | 'support' | 'security' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; contactType: 'account' | 'support' | 'security' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; contactType: 'account' | 'support' | 'security' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; contactType: 'account' | 'support' | 'security' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/webhooks': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: { webhooks?: Webhook[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & {
              json: {
                endpointUrl: string
                providerType?: ProviderType | undefined
                subscriptions: Subscriptions
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                endpointUrl: string
                providerType?: ProviderType | undefined
                subscriptions: Subscriptions
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                endpointUrl: string
                providerType?: ProviderType | undefined
                subscriptions: Subscriptions
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                endpointUrl: string
                providerType?: ProviderType | undefined
                subscriptions: Subscriptions
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                endpointUrl: string
                providerType?: ProviderType | undefined
                subscriptions: Subscriptions
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/:endpointId': {
      $get:
        | {
            input: { param: { endpointId: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { endpointId: string } } & {
              json: { subscriptions?: Subscriptions | undefined }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointId: string } } & {
              json: { subscriptions?: Subscriptions | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { endpointId: string } } & {
              json: { subscriptions?: Subscriptions | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpointId: string } } & {
              json: { subscriptions?: Subscriptions | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointId: string } } & {
              json: { subscriptions?: Subscriptions | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { endpointId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/:endpointId/test': {
      $post:
        | {
            input: { param: { endpointId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/:endpointId/rotate': {
      $post:
        | {
            input: { param: { endpointId: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/settings': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: TailnetSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { tailnet: string } } & { json: TailnetSettings }
            output: TailnetSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & { json: TailnetSettings }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & { json: TailnetSettings }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & { json: TailnetSettings }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/services': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: { vipServices?: VIPServiceInfo[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/services/:serviceName': {
      $get:
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: VIPServiceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $put:
        | {
            input: { param: { tailnet: string; serviceName: string } } & { json: VIPServiceInfoPut }
            output: VIPServiceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; serviceName: string } } & { json: VIPServiceInfoPut }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; serviceName: string } } & { json: VIPServiceInfoPut }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; serviceName: string } } & { json: VIPServiceInfoPut }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; serviceName: string } } & { json: VIPServiceInfoPut }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tailnet: string; serviceName: string } } & { json: VIPServiceInfoPut }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $delete:
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/tailnet/:tailnet/services/:serviceName/devices': {
      $get:
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: { hosts?: ServiceHostInfo[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tailnet: string; serviceName: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/tailnet/:tailnet/services/:serviceName/device/:deviceId/approved': {
      $get:
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } }
            output: VIPServiceApproval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } } & {
              json: { approved?: boolean | undefined }
            }
            output: VIPServiceApproval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } } & {
              json: { approved?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } } & {
              json: { approved?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } } & {
              json: { approved?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } } & {
              json: { approved?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tailnet: string; serviceName: string; deviceId: string } } & {
              json: { approved?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/tailnet/:tailnet/oauth-apps': {
      $get:
        | {
            input: { param: { tailnet: string } }
            output: { oauthApps?: OAuthApp[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tailnet: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: OAuthApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tailnet/:tailnet/oauth-apps/:appId': {
      $get:
        | {
            input: { param: { tailnet: string; appId: string } }
            output: OAuthApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tailnet: string; appId: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: OAuthApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tailnet: string; appId: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; appId: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; appId: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; appId: string } } & {
              json: {
                name: Name
                description?: Description | undefined
                redirectURIs: RedirectURIs
                scopes: Scopes
                allowedNodeAttributes?: AllowedNodeAttributes | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { tailnet: string; appId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tailnet: string; appId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:organization/tailnets': {
      $get:
        | {
            input: { param: { organization: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: ListOrganizationTailnetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organization: string } } & { json: CreateOrganizationTailnetRequest }
            output: CreateOrganizationTailnetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization: string } } & { json: CreateOrganizationTailnetRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization: string } } & { json: CreateOrganizationTailnetRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization: string } } & { json: CreateOrganizationTailnetRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization: string } } & { json: CreateOrganizationTailnetRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
