import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1NamespacesNameRoute,
  deleteApiV1NamespacesNamespaceConfigmapsNameRoute,
  deleteApiV1NamespacesNamespaceConfigmapsRoute,
  deleteApiV1NamespacesNamespaceEndpointsNameRoute,
  deleteApiV1NamespacesNamespaceEndpointsRoute,
  deleteApiV1NamespacesNamespaceEventsNameRoute,
  deleteApiV1NamespacesNamespaceEventsRoute,
  deleteApiV1NamespacesNamespaceLimitrangesNameRoute,
  deleteApiV1NamespacesNamespaceLimitrangesRoute,
  deleteApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute,
  deleteApiV1NamespacesNamespacePersistentvolumeclaimsRoute,
  deleteApiV1NamespacesNamespacePodsNameProxyPathRoute,
  deleteApiV1NamespacesNamespacePodsNameProxyRoute,
  deleteApiV1NamespacesNamespacePodsNameRoute,
  deleteApiV1NamespacesNamespacePodsRoute,
  deleteApiV1NamespacesNamespacePodtemplatesNameRoute,
  deleteApiV1NamespacesNamespacePodtemplatesRoute,
  deleteApiV1NamespacesNamespaceReplicationcontrollersNameRoute,
  deleteApiV1NamespacesNamespaceReplicationcontrollersRoute,
  deleteApiV1NamespacesNamespaceResourcequotasNameRoute,
  deleteApiV1NamespacesNamespaceResourcequotasRoute,
  deleteApiV1NamespacesNamespaceSecretsNameRoute,
  deleteApiV1NamespacesNamespaceSecretsRoute,
  deleteApiV1NamespacesNamespaceServiceaccountsNameRoute,
  deleteApiV1NamespacesNamespaceServiceaccountsRoute,
  deleteApiV1NamespacesNamespaceServicesNameProxyPathRoute,
  deleteApiV1NamespacesNamespaceServicesNameProxyRoute,
  deleteApiV1NamespacesNamespaceServicesNameRoute,
  deleteApiV1NamespacesNamespaceServicesRoute,
  deleteApiV1NodesNameProxyPathRoute,
  deleteApiV1NodesNameProxyRoute,
  deleteApiV1NodesNameRoute,
  deleteApiV1NodesRoute,
  deleteApiV1PersistentvolumesNameRoute,
  deleteApiV1PersistentvolumesRoute,
  getApiV1ComponentstatusesNameRoute,
  getApiV1ComponentstatusesRoute,
  getApiV1ConfigmapsRoute,
  getApiV1EndpointsRoute,
  getApiV1EventsRoute,
  getApiV1IndexRoute,
  getApiV1LimitrangesRoute,
  getApiV1NamespacesNameRoute,
  getApiV1NamespacesNamespaceConfigmapsNameRoute,
  getApiV1NamespacesNamespaceConfigmapsRoute,
  getApiV1NamespacesNamespaceEndpointsNameRoute,
  getApiV1NamespacesNamespaceEndpointsRoute,
  getApiV1NamespacesNamespaceEventsNameRoute,
  getApiV1NamespacesNamespaceEventsRoute,
  getApiV1NamespacesNamespaceLimitrangesNameRoute,
  getApiV1NamespacesNamespaceLimitrangesRoute,
  getApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute,
  getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute,
  getApiV1NamespacesNamespacePersistentvolumeclaimsRoute,
  getApiV1NamespacesNamespacePodsNameAttachRoute,
  getApiV1NamespacesNamespacePodsNameDynamicRoute,
  getApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute,
  getApiV1NamespacesNamespacePodsNameExecRoute,
  getApiV1NamespacesNamespacePodsNameLogRoute,
  getApiV1NamespacesNamespacePodsNamePortforwardRoute,
  getApiV1NamespacesNamespacePodsNameProxyPathRoute,
  getApiV1NamespacesNamespacePodsNameProxyRoute,
  getApiV1NamespacesNamespacePodsNameResizeRoute,
  getApiV1NamespacesNamespacePodsNameRoute,
  getApiV1NamespacesNamespacePodsNameStatusRoute,
  getApiV1NamespacesNamespacePodsRoute,
  getApiV1NamespacesNamespacePodtemplatesNameRoute,
  getApiV1NamespacesNamespacePodtemplatesRoute,
  getApiV1NamespacesNamespaceReplicationcontrollersNameRoute,
  getApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute,
  getApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute,
  getApiV1NamespacesNamespaceReplicationcontrollersRoute,
  getApiV1NamespacesNamespaceResourcequotasNameRoute,
  getApiV1NamespacesNamespaceResourcequotasNameStatusRoute,
  getApiV1NamespacesNamespaceResourcequotasRoute,
  getApiV1NamespacesNamespaceSecretsNameRoute,
  getApiV1NamespacesNamespaceSecretsRoute,
  getApiV1NamespacesNamespaceServiceaccountsNameRoute,
  getApiV1NamespacesNamespaceServiceaccountsRoute,
  getApiV1NamespacesNamespaceServicesNameProxyPathRoute,
  getApiV1NamespacesNamespaceServicesNameProxyRoute,
  getApiV1NamespacesNamespaceServicesNameRoute,
  getApiV1NamespacesNamespaceServicesNameStatusRoute,
  getApiV1NamespacesNamespaceServicesRoute,
  getApiV1NamespacesNameStatusRoute,
  getApiV1NamespacesRoute,
  getApiV1NodesNameProxyPathRoute,
  getApiV1NodesNameProxyRoute,
  getApiV1NodesNameRoute,
  getApiV1NodesNameStatusRoute,
  getApiV1NodesRoute,
  getApiV1PersistentvolumeclaimsRoute,
  getApiV1PersistentvolumesNameRoute,
  getApiV1PersistentvolumesNameStatusRoute,
  getApiV1PersistentvolumesRoute,
  getApiV1PodsRoute,
  getApiV1PodtemplatesRoute,
  getApiV1ReplicationcontrollersRoute,
  getApiV1ResourcequotasRoute,
  getApiV1SecretsRoute,
  getApiV1ServiceaccountsRoute,
  getApiV1ServicesRoute,
  getApiV1WatchConfigmapsRoute,
  getApiV1WatchEndpointsRoute,
  getApiV1WatchEventsRoute,
  getApiV1WatchLimitrangesRoute,
  getApiV1WatchNamespacesNameRoute,
  getApiV1WatchNamespacesNamespaceConfigmapsNameRoute,
  getApiV1WatchNamespacesNamespaceConfigmapsRoute,
  getApiV1WatchNamespacesNamespaceEndpointsNameRoute,
  getApiV1WatchNamespacesNamespaceEndpointsRoute,
  getApiV1WatchNamespacesNamespaceEventsNameRoute,
  getApiV1WatchNamespacesNamespaceEventsRoute,
  getApiV1WatchNamespacesNamespaceLimitrangesNameRoute,
  getApiV1WatchNamespacesNamespaceLimitrangesRoute,
  getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameRoute,
  getApiV1WatchNamespacesNamespacePersistentvolumeclaimsRoute,
  getApiV1WatchNamespacesNamespacePodsNameRoute,
  getApiV1WatchNamespacesNamespacePodsRoute,
  getApiV1WatchNamespacesNamespacePodtemplatesNameRoute,
  getApiV1WatchNamespacesNamespacePodtemplatesRoute,
  getApiV1WatchNamespacesNamespaceReplicationcontrollersNameRoute,
  getApiV1WatchNamespacesNamespaceReplicationcontrollersRoute,
  getApiV1WatchNamespacesNamespaceResourcequotasNameRoute,
  getApiV1WatchNamespacesNamespaceResourcequotasRoute,
  getApiV1WatchNamespacesNamespaceSecretsNameRoute,
  getApiV1WatchNamespacesNamespaceSecretsRoute,
  getApiV1WatchNamespacesNamespaceServiceaccountsNameRoute,
  getApiV1WatchNamespacesNamespaceServiceaccountsRoute,
  getApiV1WatchNamespacesNamespaceServicesNameRoute,
  getApiV1WatchNamespacesNamespaceServicesRoute,
  getApiV1WatchNamespacesRoute,
  getApiV1WatchNodesNameRoute,
  getApiV1WatchNodesRoute,
  getApiV1WatchPersistentvolumeclaimsRoute,
  getApiV1WatchPersistentvolumesNameRoute,
  getApiV1WatchPersistentvolumesRoute,
  getApiV1WatchPodsRoute,
  getApiV1WatchPodtemplatesRoute,
  getApiV1WatchReplicationcontrollersRoute,
  getApiV1WatchResourcequotasRoute,
  getApiV1WatchSecretsRoute,
  getApiV1WatchServiceaccountsRoute,
  getApiV1WatchServicesRoute,
  headApiV1NamespacesNamespacePodsNameProxyPathRoute,
  headApiV1NamespacesNamespacePodsNameProxyRoute,
  headApiV1NamespacesNamespaceServicesNameProxyPathRoute,
  headApiV1NamespacesNamespaceServicesNameProxyRoute,
  headApiV1NodesNameProxyPathRoute,
  headApiV1NodesNameProxyRoute,
  optionsApiV1NamespacesNamespacePodsNameProxyPathRoute,
  optionsApiV1NamespacesNamespacePodsNameProxyRoute,
  optionsApiV1NamespacesNamespaceServicesNameProxyPathRoute,
  optionsApiV1NamespacesNamespaceServicesNameProxyRoute,
  optionsApiV1NodesNameProxyPathRoute,
  optionsApiV1NodesNameProxyRoute,
  patchApiV1NamespacesNameRoute,
  patchApiV1NamespacesNamespaceConfigmapsNameRoute,
  patchApiV1NamespacesNamespaceEndpointsNameRoute,
  patchApiV1NamespacesNamespaceEventsNameRoute,
  patchApiV1NamespacesNamespaceLimitrangesNameRoute,
  patchApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute,
  patchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute,
  patchApiV1NamespacesNamespacePodsNameDynamicRoute,
  patchApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute,
  patchApiV1NamespacesNamespacePodsNameProxyPathRoute,
  patchApiV1NamespacesNamespacePodsNameProxyRoute,
  patchApiV1NamespacesNamespacePodsNameResizeRoute,
  patchApiV1NamespacesNamespacePodsNameRoute,
  patchApiV1NamespacesNamespacePodsNameStatusRoute,
  patchApiV1NamespacesNamespacePodtemplatesNameRoute,
  patchApiV1NamespacesNamespaceReplicationcontrollersNameRoute,
  patchApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute,
  patchApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute,
  patchApiV1NamespacesNamespaceResourcequotasNameRoute,
  patchApiV1NamespacesNamespaceResourcequotasNameStatusRoute,
  patchApiV1NamespacesNamespaceSecretsNameRoute,
  patchApiV1NamespacesNamespaceServiceaccountsNameRoute,
  patchApiV1NamespacesNamespaceServicesNameProxyPathRoute,
  patchApiV1NamespacesNamespaceServicesNameProxyRoute,
  patchApiV1NamespacesNamespaceServicesNameRoute,
  patchApiV1NamespacesNamespaceServicesNameStatusRoute,
  patchApiV1NamespacesNameStatusRoute,
  patchApiV1NodesNameProxyPathRoute,
  patchApiV1NodesNameProxyRoute,
  patchApiV1NodesNameRoute,
  patchApiV1NodesNameStatusRoute,
  patchApiV1PersistentvolumesNameRoute,
  patchApiV1PersistentvolumesNameStatusRoute,
  postApiV1NamespacesNamespaceBindingsRoute,
  postApiV1NamespacesNamespaceConfigmapsRoute,
  postApiV1NamespacesNamespaceEndpointsRoute,
  postApiV1NamespacesNamespaceEventsRoute,
  postApiV1NamespacesNamespaceLimitrangesRoute,
  postApiV1NamespacesNamespacePersistentvolumeclaimsRoute,
  postApiV1NamespacesNamespacePodsNameAttachRoute,
  postApiV1NamespacesNamespacePodsNameBindingRoute,
  postApiV1NamespacesNamespacePodsNameEvictionRoute,
  postApiV1NamespacesNamespacePodsNameExecRoute,
  postApiV1NamespacesNamespacePodsNamePortforwardRoute,
  postApiV1NamespacesNamespacePodsNameProxyPathRoute,
  postApiV1NamespacesNamespacePodsNameProxyRoute,
  postApiV1NamespacesNamespacePodsRoute,
  postApiV1NamespacesNamespacePodtemplatesRoute,
  postApiV1NamespacesNamespaceReplicationcontrollersRoute,
  postApiV1NamespacesNamespaceResourcequotasRoute,
  postApiV1NamespacesNamespaceSecretsRoute,
  postApiV1NamespacesNamespaceServiceaccountsNameTokenRoute,
  postApiV1NamespacesNamespaceServiceaccountsRoute,
  postApiV1NamespacesNamespaceServicesNameProxyPathRoute,
  postApiV1NamespacesNamespaceServicesNameProxyRoute,
  postApiV1NamespacesNamespaceServicesRoute,
  postApiV1NamespacesRoute,
  postApiV1NodesNameProxyPathRoute,
  postApiV1NodesNameProxyRoute,
  postApiV1NodesRoute,
  postApiV1PersistentvolumesRoute,
  putApiV1NamespacesNameFinalizeRoute,
  putApiV1NamespacesNameRoute,
  putApiV1NamespacesNamespaceConfigmapsNameRoute,
  putApiV1NamespacesNamespaceEndpointsNameRoute,
  putApiV1NamespacesNamespaceEventsNameRoute,
  putApiV1NamespacesNamespaceLimitrangesNameRoute,
  putApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute,
  putApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute,
  putApiV1NamespacesNamespacePodsNameDynamicRoute,
  putApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute,
  putApiV1NamespacesNamespacePodsNameProxyPathRoute,
  putApiV1NamespacesNamespacePodsNameProxyRoute,
  putApiV1NamespacesNamespacePodsNameResizeRoute,
  putApiV1NamespacesNamespacePodsNameRoute,
  putApiV1NamespacesNamespacePodsNameStatusRoute,
  putApiV1NamespacesNamespacePodtemplatesNameRoute,
  putApiV1NamespacesNamespaceReplicationcontrollersNameRoute,
  putApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute,
  putApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute,
  putApiV1NamespacesNamespaceResourcequotasNameRoute,
  putApiV1NamespacesNamespaceResourcequotasNameStatusRoute,
  putApiV1NamespacesNamespaceSecretsNameRoute,
  putApiV1NamespacesNamespaceServiceaccountsNameRoute,
  putApiV1NamespacesNamespaceServicesNameProxyPathRoute,
  putApiV1NamespacesNamespaceServicesNameProxyRoute,
  putApiV1NamespacesNamespaceServicesNameRoute,
  putApiV1NamespacesNamespaceServicesNameStatusRoute,
  putApiV1NamespacesNameStatusRoute,
  putApiV1NodesNameProxyPathRoute,
  putApiV1NodesNameProxyRoute,
  putApiV1NodesNameRoute,
  putApiV1NodesNameStatusRoute,
  putApiV1PersistentvolumesNameRoute,
  putApiV1PersistentvolumesNameStatusRoute,
} from '../routes'

export const getApiV1IndexRouteHandler: RouteHandler<typeof getApiV1IndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ComponentstatusesRouteHandler: RouteHandler<
  typeof getApiV1ComponentstatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ComponentstatusesNameRouteHandler: RouteHandler<
  typeof getApiV1ComponentstatusesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConfigmapsRouteHandler: RouteHandler<typeof getApiV1ConfigmapsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1EndpointsRouteHandler: RouteHandler<typeof getApiV1EndpointsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1EventsRouteHandler: RouteHandler<typeof getApiV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LimitrangesRouteHandler: RouteHandler<
  typeof getApiV1LimitrangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesRouteHandler: RouteHandler<typeof getApiV1NamespacesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesRouteHandler: RouteHandler<
  typeof postApiV1NamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceBindingsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceBindingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceConfigmapsRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceConfigmapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceConfigmapsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceConfigmapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceConfigmapsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceConfigmapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceConfigmapsNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceConfigmapsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceConfigmapsNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceConfigmapsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceConfigmapsNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceConfigmapsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceConfigmapsNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceConfigmapsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceEndpointsRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceEndpointsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceEndpointsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceEndpointsNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceEndpointsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceEndpointsNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceEndpointsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceEndpointsNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceEndpointsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceEndpointsNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceEndpointsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceEventsRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceEventsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceEventsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceEventsNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceEventsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceEventsNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceEventsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceEventsNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceEventsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceEventsNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceEventsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceLimitrangesRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceLimitrangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceLimitrangesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceLimitrangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceLimitrangesRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceLimitrangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceLimitrangesNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceLimitrangesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceLimitrangesNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceLimitrangesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceLimitrangesNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceLimitrangesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceLimitrangesNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceLimitrangesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePersistentvolumeclaimsRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePersistentvolumeclaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePersistentvolumeclaimsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePersistentvolumeclaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePersistentvolumeclaimsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePersistentvolumeclaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePersistentvolumeclaimsNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePersistentvolumeclaimsNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePersistentvolumeclaimsNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePersistentvolumeclaimsNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePodsRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePodsNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePodsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodsNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodsNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameAttachRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsNameAttachRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsNameAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsNameBindingRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsNameBindingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameDynamicRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodsNameDynamicRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodsNameDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodsNameDynamicRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodsNameDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameEphemeralcontainersRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodsNameEphemeralcontainersRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodsNameEphemeralcontainersRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsNameEvictionRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsNameEvictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameExecRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameExecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsNameExecRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsNameExecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameLogRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNamePortforwardRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNamePortforwardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsNamePortforwardRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsNamePortforwardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePodsNameProxyRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePodsNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameProxyRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headApiV1NamespacesNamespacePodsNameProxyRouteHandler: RouteHandler<
  typeof headApiV1NamespacesNamespacePodsNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsApiV1NamespacesNamespacePodsNameProxyRouteHandler: RouteHandler<
  typeof optionsApiV1NamespacesNamespacePodsNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodsNameProxyRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodsNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsNameProxyRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodsNameProxyRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodsNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePodsNameProxyPathRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePodsNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameProxyPathRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headApiV1NamespacesNamespacePodsNameProxyPathRouteHandler: RouteHandler<
  typeof headApiV1NamespacesNamespacePodsNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsApiV1NamespacesNamespacePodsNameProxyPathRouteHandler: RouteHandler<
  typeof optionsApiV1NamespacesNamespacePodsNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodsNameProxyPathRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodsNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodsNameProxyPathRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodsNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodsNameProxyPathRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodsNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameResizeRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodsNameResizeRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodsNameResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodsNameResizeRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodsNameResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodsNameStatusRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodsNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodsNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodsNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodsNameStatusRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodsNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePodtemplatesRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePodtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodtemplatesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespacePodtemplatesRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespacePodtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespacePodtemplatesNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespacePodtemplatesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespacePodtemplatesNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespacePodtemplatesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespacePodtemplatesNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespacePodtemplatesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespacePodtemplatesNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespacePodtemplatesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceReplicationcontrollersRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceReplicationcontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceReplicationcontrollersRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceReplicationcontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceReplicationcontrollersRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceReplicationcontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceReplicationcontrollersNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceReplicationcontrollersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceReplicationcontrollersNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceReplicationcontrollersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceReplicationcontrollersNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceReplicationcontrollersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceReplicationcontrollersNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceReplicationcontrollersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceReplicationcontrollersNameScaleRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceReplicationcontrollersNameScaleRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceReplicationcontrollersNameScaleRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceReplicationcontrollersNameStatusRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceReplicationcontrollersNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceReplicationcontrollersNameStatusRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceResourcequotasRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceResourcequotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceResourcequotasRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceResourcequotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceResourcequotasRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceResourcequotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceResourcequotasNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceResourcequotasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceResourcequotasNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceResourcequotasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceResourcequotasNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceResourcequotasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceResourcequotasNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceResourcequotasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceResourcequotasNameStatusRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceResourcequotasNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceResourcequotasNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceResourcequotasNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceResourcequotasNameStatusRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceResourcequotasNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceSecretsRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceSecretsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceSecretsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceSecretsNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceSecretsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceSecretsNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceSecretsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceSecretsNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceSecretsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceSecretsNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceSecretsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceServiceaccountsRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceServiceaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceServiceaccountsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceServiceaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceServiceaccountsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceServiceaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceServiceaccountsNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceServiceaccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceServiceaccountsNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceServiceaccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceServiceaccountsNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceServiceaccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceServiceaccountsNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceServiceaccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceServiceaccountsNameTokenRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceServiceaccountsNameTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceServicesRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceServicesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceServicesRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceServicesNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceServicesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceServicesNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceServicesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceServicesNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceServicesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceServicesNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceServicesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceServicesNameProxyRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceServicesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceServicesNameProxyRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceServicesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headApiV1NamespacesNamespaceServicesNameProxyRouteHandler: RouteHandler<
  typeof headApiV1NamespacesNamespaceServicesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsApiV1NamespacesNamespaceServicesNameProxyRouteHandler: RouteHandler<
  typeof optionsApiV1NamespacesNamespaceServicesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceServicesNameProxyRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceServicesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceServicesNameProxyRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceServicesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceServicesNameProxyRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceServicesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceServicesNameProxyPathRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceServicesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceServicesNameProxyPathRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceServicesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headApiV1NamespacesNamespaceServicesNameProxyPathRouteHandler: RouteHandler<
  typeof headApiV1NamespacesNamespaceServicesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsApiV1NamespacesNamespaceServicesNameProxyPathRouteHandler: RouteHandler<
  typeof optionsApiV1NamespacesNamespaceServicesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceServicesNameProxyPathRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceServicesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceServicesNameProxyPathRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceServicesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceServicesNameProxyPathRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceServicesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceServicesNameStatusRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceServicesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNamespaceServicesNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNamespaceServicesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNamespaceServicesNameStatusRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNamespaceServicesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNameRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNameRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNameFinalizeRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNameFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNameStatusRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NamespacesNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1NamespacesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NamespacesNameStatusRouteHandler: RouteHandler<
  typeof putApiV1NamespacesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NodesRouteHandler: RouteHandler<typeof deleteApiV1NodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1NodesRouteHandler: RouteHandler<typeof getApiV1NodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NodesRouteHandler: RouteHandler<typeof postApiV1NodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NodesNameRouteHandler: RouteHandler<
  typeof deleteApiV1NodesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NodesNameRouteHandler: RouteHandler<typeof getApiV1NodesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV1NodesNameRouteHandler: RouteHandler<
  typeof patchApiV1NodesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NodesNameRouteHandler: RouteHandler<typeof putApiV1NodesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NodesNameProxyRouteHandler: RouteHandler<
  typeof deleteApiV1NodesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NodesNameProxyRouteHandler: RouteHandler<
  typeof getApiV1NodesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headApiV1NodesNameProxyRouteHandler: RouteHandler<
  typeof headApiV1NodesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsApiV1NodesNameProxyRouteHandler: RouteHandler<
  typeof optionsApiV1NodesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NodesNameProxyRouteHandler: RouteHandler<
  typeof patchApiV1NodesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NodesNameProxyRouteHandler: RouteHandler<
  typeof postApiV1NodesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NodesNameProxyRouteHandler: RouteHandler<
  typeof putApiV1NodesNameProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NodesNameProxyPathRouteHandler: RouteHandler<
  typeof deleteApiV1NodesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NodesNameProxyPathRouteHandler: RouteHandler<
  typeof getApiV1NodesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headApiV1NodesNameProxyPathRouteHandler: RouteHandler<
  typeof headApiV1NodesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsApiV1NodesNameProxyPathRouteHandler: RouteHandler<
  typeof optionsApiV1NodesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NodesNameProxyPathRouteHandler: RouteHandler<
  typeof patchApiV1NodesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NodesNameProxyPathRouteHandler: RouteHandler<
  typeof postApiV1NodesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NodesNameProxyPathRouteHandler: RouteHandler<
  typeof putApiV1NodesNameProxyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NodesNameStatusRouteHandler: RouteHandler<
  typeof getApiV1NodesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1NodesNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1NodesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NodesNameStatusRouteHandler: RouteHandler<
  typeof putApiV1NodesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PersistentvolumeclaimsRouteHandler: RouteHandler<
  typeof getApiV1PersistentvolumeclaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PersistentvolumesRouteHandler: RouteHandler<
  typeof deleteApiV1PersistentvolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PersistentvolumesRouteHandler: RouteHandler<
  typeof getApiV1PersistentvolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PersistentvolumesRouteHandler: RouteHandler<
  typeof postApiV1PersistentvolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PersistentvolumesNameRouteHandler: RouteHandler<
  typeof deleteApiV1PersistentvolumesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PersistentvolumesNameRouteHandler: RouteHandler<
  typeof getApiV1PersistentvolumesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1PersistentvolumesNameRouteHandler: RouteHandler<
  typeof patchApiV1PersistentvolumesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PersistentvolumesNameRouteHandler: RouteHandler<
  typeof putApiV1PersistentvolumesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PersistentvolumesNameStatusRouteHandler: RouteHandler<
  typeof getApiV1PersistentvolumesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1PersistentvolumesNameStatusRouteHandler: RouteHandler<
  typeof patchApiV1PersistentvolumesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PersistentvolumesNameStatusRouteHandler: RouteHandler<
  typeof putApiV1PersistentvolumesNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PodsRouteHandler: RouteHandler<typeof getApiV1PodsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PodtemplatesRouteHandler: RouteHandler<
  typeof getApiV1PodtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReplicationcontrollersRouteHandler: RouteHandler<
  typeof getApiV1ReplicationcontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ResourcequotasRouteHandler: RouteHandler<
  typeof getApiV1ResourcequotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecretsRouteHandler: RouteHandler<typeof getApiV1SecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServiceaccountsRouteHandler: RouteHandler<
  typeof getApiV1ServiceaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServicesRouteHandler: RouteHandler<typeof getApiV1ServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchConfigmapsRouteHandler: RouteHandler<
  typeof getApiV1WatchConfigmapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchEndpointsRouteHandler: RouteHandler<
  typeof getApiV1WatchEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchEventsRouteHandler: RouteHandler<
  typeof getApiV1WatchEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchLimitrangesRouteHandler: RouteHandler<
  typeof getApiV1WatchLimitrangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceConfigmapsRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceConfigmapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceConfigmapsNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceConfigmapsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceEndpointsRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceEndpointsNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceEndpointsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceEventsRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceEventsNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceEventsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceLimitrangesRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceLimitrangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceLimitrangesNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceLimitrangesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespacePersistentvolumeclaimsRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespacePodsRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespacePodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespacePodsNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespacePodsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespacePodtemplatesRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespacePodtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespacePodtemplatesNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespacePodtemplatesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceReplicationcontrollersRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceReplicationcontrollersNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceResourcequotasRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceResourcequotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceResourcequotasNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceResourcequotasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceSecretsRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceSecretsNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceSecretsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceServiceaccountsRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceServiceaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceServiceaccountsNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceServiceaccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceServicesRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNamespaceServicesNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNamespaceServicesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNamespacesNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNamespacesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNodesRouteHandler: RouteHandler<typeof getApiV1WatchNodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchNodesNameRouteHandler: RouteHandler<
  typeof getApiV1WatchNodesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchPersistentvolumeclaimsRouteHandler: RouteHandler<
  typeof getApiV1WatchPersistentvolumeclaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchPersistentvolumesRouteHandler: RouteHandler<
  typeof getApiV1WatchPersistentvolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchPersistentvolumesNameRouteHandler: RouteHandler<
  typeof getApiV1WatchPersistentvolumesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchPodsRouteHandler: RouteHandler<typeof getApiV1WatchPodsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchPodtemplatesRouteHandler: RouteHandler<
  typeof getApiV1WatchPodtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchReplicationcontrollersRouteHandler: RouteHandler<
  typeof getApiV1WatchReplicationcontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchResourcequotasRouteHandler: RouteHandler<
  typeof getApiV1WatchResourcequotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchSecretsRouteHandler: RouteHandler<
  typeof getApiV1WatchSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchServiceaccountsRouteHandler: RouteHandler<
  typeof getApiV1WatchServiceaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchServicesRouteHandler: RouteHandler<
  typeof getApiV1WatchServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
