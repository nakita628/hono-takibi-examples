import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ComponentstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ComponentstatusesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LimitrangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceConfigmapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceConfigmapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceConfigmapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceConfigmapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceEndpointsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceEndpointsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceEndpointsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceEndpointsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceLimitrangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceLimitrangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceLimitrangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceLimitrangesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceLimitrangesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceLimitrangesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceLimitrangesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePersistentvolumeclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePersistentvolumeclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePersistentvolumeclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePersistentvolumeclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePodsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsNameAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsNameBindingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodsNameDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodsNameDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodsNameEphemeralcontainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsNameEvictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameExecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsNameExecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNamePortforwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsNamePortforwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePodsNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1NamespacesNamespacePodsNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsApiV1NamespacesNamespacePodsNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodsNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodsNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePodsNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1NamespacesNamespacePodsNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsApiV1NamespacesNamespacePodsNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodsNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodsNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodsNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodsNameResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodsNameResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePodtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespacePodtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespacePodtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespacePodtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespacePodtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespacePodtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceReplicationcontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceReplicationcontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceReplicationcontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceReplicationcontrollersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceReplicationcontrollersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceReplicationcontrollersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceReplicationcontrollersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceReplicationcontrollersNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceReplicationcontrollersNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceResourcequotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceResourcequotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceResourcequotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceResourcequotasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceResourcequotasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceResourcequotasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceResourcequotasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceResourcequotasNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceResourcequotasNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceResourcequotasNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceSecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceSecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceSecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceSecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceServiceaccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceServiceaccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceServiceaccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceServiceaccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceServiceaccountsNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceServicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceServicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceServicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceServicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceServicesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceServicesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1NamespacesNamespaceServicesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsApiV1NamespacesNamespaceServicesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceServicesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceServicesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceServicesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceServicesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceServicesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1NamespacesNamespaceServicesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsApiV1NamespacesNamespaceServicesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceServicesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceServicesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceServicesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceServicesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNamespaceServicesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNamespaceServicesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNameFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NamespacesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NamespacesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NodesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NodesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1NodesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsApiV1NodesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NodesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NodesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NodesNameProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NodesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NodesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1NodesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsApiV1NodesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NodesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NodesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NodesNameProxyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NodesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1NodesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NodesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PersistentvolumeclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PersistentvolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PersistentvolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PersistentvolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PersistentvolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PersistentvolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1PersistentvolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PersistentvolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PersistentvolumesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1PersistentvolumesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PersistentvolumesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PodtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReplicationcontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ResourcequotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchLimitrangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceConfigmapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceEndpointsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceLimitrangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceLimitrangesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespacePersistentvolumeclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespacePodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespacePodsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespacePodtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespacePodtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceReplicationcontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceReplicationcontrollersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceResourcequotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceResourcequotasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceSecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceServiceaccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNamespaceServicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchNodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchPersistentvolumeclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchPersistentvolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchPersistentvolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchPodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchPodtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchReplicationcontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchResourcequotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
