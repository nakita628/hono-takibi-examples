type LinkType = { href: string }
type AppPkgInfoLinks = { appD: LinkType; appPkgContent: LinkType; self: LinkType }
type AppPkgArtifactInfo = { [x: string]: unknown }
type AppDId = string
type AppDVersion = string
type AppName = string
type AppProvider = string
type AppSoftwareVersion = string
type Algorithm = string
type Hash = string
type Checksum = { algorithm: Algorithm; hash: Hash }
type AppPkgId = string
type OnboardingState = 'CREATED' | 'UPLOADING' | 'PROCESSING' | 'ONBOARDED'
type AppPkgOperationalState = 'ENABLED' | 'DISABLED'
type AppPkgSWImageInfo = { [x: string]: unknown }
type UsageState = 'IN_USE' | 'NOT_IN_USE'
type KeyValuePairs = { [x: string]: unknown }
type AppPkgInfo = {
  _links: AppPkgInfoLinks
  additionalArtifacts?: AppPkgArtifactInfo | undefined
  appDId: AppDId
  appDVersion: AppDVersion
  appName: AppName
  appProvider?: AppProvider | undefined
  appSoftwareVersion: AppSoftwareVersion
  checksum: Checksum
  id: AppPkgId
  onboardingState: OnboardingState
  operationalState: AppPkgOperationalState
  softwareImages: AppPkgSWImageInfo
  usageState: UsageState
  userDefinedData?: KeyValuePairs | undefined
}
type ProblemDetails = {
  detail?: string | undefined
  instance?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type URI = string
type CreateAppPkg = {
  appPkgName: string
  appPkgPath: URI
  appPkgVersion: string
  appProvider?: string | undefined
  checksum: Checksum
  userDefinedData?: KeyValuePairs | undefined
}
type AppPkgInfoModifications = { operationState: 'DISABLED' | 'ENABLED' }
type IpAddressType = 'IP_V6' | 'IP_V4'
type DNSRuleDescriptor = {
  dnsRuleId: string
  domainName: string
  ipAddress: string
  ipAddressType: IpAddressType
  ttl?: number | undefined
}
type VirtualNetworkInterfaceRequirements = string
type AppExternalCpd = {
  inherited_attributes: { [x: string]: unknown }
  virtualNetworkInterfaceRequirements?: VirtualNetworkInterfaceRequirements[] | undefined
}
type FeatureDependency = { featureName: string; version: string }
type LatencyDescriptor = { maxLatency: number }
type NotSpecified = string
type CategoryRef = { [x: string]: unknown }
type SerializerTypes = string
type SecurityInfo = { [x: string]: unknown }
type TransportTypes = string
type TransportDescriptor = {
  protocol: string
  security: SecurityInfo
  type: TransportTypes
  version: string
}
type TransportDependency = {
  labels: string[]
  serializers: SerializerTypes[]
  transport: TransportDescriptor
}
type ServiceDependency = {
  requestedPermissions?: NotSpecified[] | undefined
  serCategory?: CategoryRef | undefined
  serName: string
  serTransportDependencies?: TransportDependency[] | undefined
  version: string
}
type SerName = string
type Serializers = SerializerTypes[]
type TransportsSupported = {
  serializers?: Serializers | undefined
  transport?: TransportDescriptor | undefined
}
type SerVersion = string
type ServiceDescriptor = {
  serCategory?: CategoryRef | undefined
  serName: SerName
  transportsSupported?: TransportsSupported | undefined
  version: SerVersion
}
type Action =
  | 'DROP'
  | 'FORWARD_DECAPSULATED'
  | 'FORWARD_AS_IS'
  | 'PASSTHROUGH'
  | 'DUPLICATED_DECAPSULATED'
  | 'DUPLICATE_AS_IS'
type InterfaceType = 'TUNNEL' | 'MAC' | 'IP'
type TunnelType = 'GTP-U' | 'GRE'
type TunnelInfo = {
  tunnelDstAddress: string
  tunnelSpecificData?: NotSpecified | undefined
  tunnelSrcAddress: string
  tunnelType: TunnelType
}
type InterfaceDescriptor = {
  dstIPAddress?: string | undefined
  dstMACAddress?: string | undefined
  interfaceType: InterfaceType
  srcMACAddress?: string | undefined
  tunnelInfo?: TunnelInfo | undefined
}
type FilterType = 'FLOW' | 'PACKET'
type TrafficFilter = {
  dSCP?: number | undefined
  dstAddress?: string[] | undefined
  dstPort?: string[] | undefined
  dstTunnelPort?: string[] | undefined
  protocol?: string[] | undefined
  qCI?: number | undefined
  srcAddress?: string[] | undefined
  srcPort?: string[] | undefined
  srcTunnelAddress?: string[] | undefined
  srcTunnelPort?: string[] | undefined
  tC?: number | undefined
  tag?: string[] | undefined
  tgtTunnelAddress?: string[] | undefined
}
type TrafficRuleDescriptor = {
  action: Action
  dstInterface?: InterfaceDescriptor[] | undefined
  filterType: FilterType
  priority: number
  trafficFilter: TrafficFilter[]
  trafficRuleId: string
}
type ChangeAppInstanceStateOpConfig = string
type SwImageDescriptor = string
type TerminateAppInstanceOpConfig = string
type VirtualComputeDescription = string
type VirtualStorageDescriptor = string
type AppD = {
  appDId: string
  appDNSRule?: DNSRuleDescriptor[] | undefined
  appDVersion: string
  appDescription: string
  appExtCpd?: AppExternalCpd[] | undefined
  appFeatureOptional?: FeatureDependency[] | undefined
  appFeatureRequired?: FeatureDependency[] | undefined
  appInfoName?: string | undefined
  appLatency?: LatencyDescriptor | undefined
  appName: string
  appProvider: string
  appServiceOptional?: ServiceDependency[] | undefined
  appServiceProduced?: ServiceDescriptor[] | undefined
  appServiceRequired?: ServiceDependency[] | undefined
  appSoftVersion: string
  appTrafficRule?: TrafficRuleDescriptor[] | undefined
  changeAppInstanceStateOpConfig?: ChangeAppInstanceStateOpConfig | undefined
  mecVersion: string[]
  swImageDescriptor: SwImageDescriptor
  terminateAppInstanceOpConfig?: TerminateAppInstanceOpConfig | undefined
  transportDependencies?: TransportDependency[] | undefined
  virtualComputeDescriptor: VirtualComputeDescription
  virtualStorageDescriptor?: VirtualStorageDescriptor[] | undefined
}
type Href = string
type SubsctiptionTypeAppPkg =
  | 'AppPackageOnBoarding'
  | 'AppPacakgeOperationChange'
  | 'AppPackageDeletion'
type SubscriptionsAppPkgSubscription = { href: Href; subsctiptionType: SubsctiptionTypeAppPkg }
type AppPkgSubscriptionLinkListLinks = {
  self: LinkType
  subscriptions?: SubscriptionsAppPkgSubscription[] | undefined
}
type AppPkgSubscriptionLinkList = { _links: AppPkgSubscriptionLinkListLinks }
type AppPkgFilter = string
type CallbackUri = string
type AppPkgSubscription = {
  appPkgFilter?: AppPkgFilter[] | undefined
  callbackUri: CallbackUri
  subsctiptionType: SubsctiptionTypeAppPkg
}
type AppPkgSubscriptionInfoLinks = { self: LinkType }
type AppPkgSubscriptionInfoId = string
type AppPkgSubscriptionType =
  | 'AppPackageOnBoarding'
  | 'AppPacakgeOperationChange'
  | 'AppPackageDeletion'
type AppPkgSubscriptionInfo = {
  _links: AppPkgSubscriptionInfoLinks
  callbackUri: CallbackUri
  id: AppPkgSubscriptionInfoId
  subscriptionType: AppPkgSubscriptionType
}
type AppPkgNotificationLinks = { subscription: LinkType }
type AppPkgNotificationId = string
type AppPkgNotificationType =
  | 'AppPackageOnBoarded'
  | 'AppPacakgeEnabled'
  | 'AppPacakgeDisabled'
  | 'AppPackageDeleted'
type SubscriptionId = string
type TimeStamp = { nanoSeconds: number; seconds: number }
type AppPkgNotification = {
  _links: AppPkgNotificationLinks
  appDId: AppDId
  appPkgId: AppPkgId
  id: AppPkgNotificationId
  notificationType: AppPkgNotificationType
  operationalState: 'DISABLED' | 'ENABLED'
  subscriptionId: SubscriptionId
  timeStamp: TimeStamp
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/app_packages': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: AppPkgInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: CreateAppPkg }; output: AppPkgInfo[]; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CreateAppPkg }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAppPkg }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAppPkg }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAppPkg }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAppPkg }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: CreateAppPkg }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/app_packages/:appPkgId': {
      $delete:
        | { input: { param: { appPkgId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { appPkgId: string } }
            output: AppPkgInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: AppPkgInfoModifications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: ProblemDetails
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { appPkgId: string } } & { json: AppPkgInfoModifications }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/app_packages/:appPkgId/appd': {
      $get:
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: AppD
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: AppD
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { appPkgId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/app_packages/:appPkgId/package_content': {
      $get:
        | { input: { param: { appPkgId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appPkgId: string } }; output: {}; outputFormat: string; status: 206 }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | { input: { param: { appPkgId: string } }; output: {}; outputFormat: string; status: 416 }
        | {
            input: { param: { appPkgId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { appPkgId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/onboarded_app_packages/:appDId/appd': {
      $get:
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: AppD
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: AppD
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { appDId: string } } & {
              query: {
                filter?: string | undefined
                all_fields?: string | undefined
                fields?: string | undefined
                exclude_fields?: string | undefined
                exclude_default?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/onboarded_app_packages/:appDId/package_content': {
      $get:
        | { input: { param: { appDId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appDId: string } }; output: {}; outputFormat: string; status: 206 }
        | {
            input: { param: { appDId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appDId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appDId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appDId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appDId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | { input: { param: { appDId: string } }; output: {}; outputFormat: string; status: 416 }
        | {
            input: { param: { appDId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { appDId: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { appDId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appDId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appDId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appDId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appDId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { appDId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { appDId: string } } & { json: File }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/subscriptions': {
      $get:
        | { input: {}; output: AppPkgSubscriptionLinkList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 406 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: AppPkgSubscription }
            output: AppPkgSubscriptionInfo
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppPkgSubscription }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppPkgSubscription }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AppPkgSubscription }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppPkgSubscription }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AppPkgSubscription }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: AppPkgSubscription }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/subscriptions/:subscriptionId': {
      $delete:
        | {
            input: { param: { subscriptionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: AppPkgSubscriptionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_defined_notification': {
      $post:
        | { input: { json: AppPkgNotification }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: AppPkgNotification }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AppPkgNotification }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppPkgNotification }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AppPkgNotification }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
