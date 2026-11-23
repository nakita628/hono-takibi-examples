import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEndpointsIdKubernetesHelmReleaseRoute,
  deleteEndpointsIdRoute,
  deleteEndpointsRoute,
  getEndpointsIdDockerhubRegistryIdRoute,
  getEndpointsIdEdgeStacksStackIdRoute,
  getEndpointsIdEdgeStatusRoute,
  getEndpointsIdKubernetesHelmReleaseHistoryRoute,
  getEndpointsIdKubernetesHelmReleaseRoute,
  getEndpointsIdKubernetesHelmRoute,
  getEndpointsIdRegistriesRoute,
  getEndpointsIdRoute,
  getEndpointsRoute,
  getEndpointsSummaryRoute,
  postEndpointsDeleteRoute,
  postEndpointsGlobalKeyRoute,
  postEndpointsIdDockerV2BrowsePutRoute,
  postEndpointsIdEdgeJobsJobIDLogsRoute,
  postEndpointsIdKubernetesHelmReleaseRollbackRoute,
  postEndpointsIdKubernetesHelmRoute,
  postEndpointsIdSnapshotRoute,
  postEndpointsRoute,
  postEndpointsSnapshotRoute,
  putEndpointsIdAssociationRoute,
  putEndpointsIdForceupdateserviceRoute,
  putEndpointsIdRegistriesRegistryIdRoute,
  putEndpointsIdRoute,
  putEndpointsIdSettingsRoute,
  putEndpointsRelationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointsHandler = app
  .openapi(deleteEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsIdAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsIdDockerV2BrowsePutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdDockerhubRegistryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsIdEdgeJobsJobIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdEdgeStacksStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdEdgeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsIdForceupdateserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdKubernetesHelmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsIdKubernetesHelmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsIdKubernetesHelmReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdKubernetesHelmReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdKubernetesHelmReleaseHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsIdKubernetesHelmReleaseRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsIdRegistriesRegistryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsGlobalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
