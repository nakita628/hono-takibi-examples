type GoogleRE2 = { maxProgramSize?: number | undefined }
type RegexMatcher = { googleRe2?: GoogleRE2 | undefined; regex?: string | undefined }
type StringMatcher = {
  exact?: string | undefined
  ignoreCase?: boolean | undefined
  prefix?: string | undefined
  regex?: string | undefined
  safeRegex?: RegexMatcher | undefined
  suffix?: string | undefined
}
type PathSegment = { key?: string | undefined }
type DoubleRange = { end?: number | undefined; start?: number | undefined }
type DoubleMatcher = { exact?: number | undefined; range?: DoubleRange | undefined }
type ListMatcher = { oneOf?: ValueMatcher | undefined }
type NullMatch = { [x: string]: unknown }
type ValueMatcher = {
  boolMatch?: boolean | undefined
  doubleMatch?: DoubleMatcher | undefined
  listMatch?: ListMatcher | undefined
  nullMatch?: NullMatch | undefined
  presentMatch?: boolean | undefined
  stringMatch?: StringMatcher | undefined
}
type StructMatcher = { path?: PathSegment[] | undefined; value?: ValueMatcher | undefined }
type NodeMatcher = {
  nodeId?: StringMatcher | undefined
  nodeMetadatas?: StructMatcher[] | undefined
}
type ClientStatusRequest = { nodeMatchers?: NodeMatcher[] | undefined }
type SemanticVersion = {
  majorNumber?: number | undefined
  minorNumber?: number | undefined
  patch?: number | undefined
}
type BuildVersion = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  version?: SemanticVersion | undefined
}
type Extension = {
  category?: string | undefined
  disabled?: boolean | undefined
  name?: string | undefined
  typeDescriptor?: string | undefined
  version?: BuildVersion | undefined
}
type Pipe = { mode?: number | undefined; path?: string | undefined }
type SocketAddress = {
  address?: string | undefined
  ipv4Compat?: boolean | undefined
  namedPort?: string | undefined
  portValue?: number | undefined
  protocol?: 'TCP' | 'UDP' | undefined
  resolverName?: string | undefined
}
type Address = { pipe?: Pipe | undefined; socketAddress?: SocketAddress | undefined }
type Locality = {
  region?: string | undefined
  subZone?: string | undefined
  zone?: string | undefined
}
type Node = {
  buildVersion?: string | undefined
  clientFeatures?: string[] | undefined
  cluster?: string | undefined
  extensions?: Extension[] | undefined
  id?: string | undefined
  listeningAddresses?: Address[] | undefined
  locality?: Locality | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  userAgentBuildVersion?: BuildVersion | undefined
  userAgentName?: string | undefined
  userAgentVersion?: string | undefined
}
type DynamicCluster = {
  cluster?: { [x: string]: { [x: string]: unknown } } | undefined
  lastUpdated?: string | undefined
  versionInfo?: string | undefined
}
type StaticCluster = {
  cluster?: { [x: string]: { [x: string]: unknown } } | undefined
  lastUpdated?: string | undefined
}
type ClustersConfigDump = {
  dynamicActiveClusters?: DynamicCluster[] | undefined
  dynamicWarmingClusters?: DynamicCluster[] | undefined
  staticClusters?: StaticCluster[] | undefined
  versionInfo?: string | undefined
}
type DynamicListenerState = {
  lastUpdated?: string | undefined
  listener?: { [x: string]: { [x: string]: unknown } } | undefined
  versionInfo?: string | undefined
}
type UpdateFailureState = {
  details?: string | undefined
  failedConfiguration?: { [x: string]: { [x: string]: unknown } } | undefined
  lastUpdateAttempt?: string | undefined
}
type DynamicListener = {
  activeState?: DynamicListenerState | undefined
  drainingState?: DynamicListenerState | undefined
  errorState?: UpdateFailureState | undefined
  name?: string | undefined
  warmingState?: DynamicListenerState | undefined
}
type StaticListener = {
  lastUpdated?: string | undefined
  listener?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ListenersConfigDump = {
  dynamicListeners?: DynamicListener[] | undefined
  staticListeners?: StaticListener[] | undefined
  versionInfo?: string | undefined
}
type DynamicRouteConfig = {
  lastUpdated?: string | undefined
  routeConfig?: { [x: string]: { [x: string]: unknown } } | undefined
  versionInfo?: string | undefined
}
type StaticRouteConfig = {
  lastUpdated?: string | undefined
  routeConfig?: { [x: string]: { [x: string]: unknown } } | undefined
}
type RoutesConfigDump = {
  dynamicRouteConfigs?: DynamicRouteConfig[] | undefined
  staticRouteConfigs?: StaticRouteConfig[] | undefined
}
type DynamicScopedRouteConfigs = {
  lastUpdated?: string | undefined
  name?: string | undefined
  scopedRouteConfigs?: { [x: string]: { [x: string]: unknown } }[] | undefined
  versionInfo?: string | undefined
}
type InlineScopedRouteConfigs = {
  lastUpdated?: string | undefined
  name?: string | undefined
  scopedRouteConfigs?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type ScopedRoutesConfigDump = {
  dynamicScopedRouteConfigs?: DynamicScopedRouteConfigs[] | undefined
  inlineScopedRouteConfigs?: InlineScopedRouteConfigs[] | undefined
}
type PerXdsConfig = {
  clusterConfig?: ClustersConfigDump | undefined
  listenerConfig?: ListenersConfigDump | undefined
  routeConfig?: RoutesConfigDump | undefined
  scopedRouteConfig?: ScopedRoutesConfigDump | undefined
  status?: 'UNKNOWN' | 'SYNCED' | 'NOT_SENT' | 'STALE' | 'ERROR' | undefined
}
type ClientConfig = { node?: Node | undefined; xdsConfig?: PerXdsConfig[] | undefined }
type ClientStatusResponse = { config?: ClientConfig[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/discovery:client_status': {
      $post: {
        input: {
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
        } & { json: ClientStatusRequest }
        output: ClientStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
