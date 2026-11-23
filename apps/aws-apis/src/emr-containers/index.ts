import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobtemplatesTemplateIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  deleteVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute,
  deleteVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute,
  deleteVirtualclustersVirtualClusterIdRoute,
  getJobtemplatesRoute,
  getJobtemplatesTemplateIdRoute,
  getTagsResourceArnRoute,
  getVirtualclustersRoute,
  getVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute,
  getVirtualclustersVirtualClusterIdEndpointsRoute,
  getVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute,
  getVirtualclustersVirtualClusterIdJobrunsRoute,
  getVirtualclustersVirtualClusterIdRoute,
  postJobtemplatesRoute,
  postTagsResourceArnRoute,
  postVirtualclustersRoute,
  postVirtualclustersVirtualClusterIdEndpointsRoute,
  postVirtualclustersVirtualClusterIdJobrunsRoute,
} from './routes'
import {
  deleteJobtemplatesTemplateIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteVirtualclustersVirtualClusterIdEndpointsEndpointIdRouteHandler,
  deleteVirtualclustersVirtualClusterIdJobrunsJobRunIdRouteHandler,
  deleteVirtualclustersVirtualClusterIdRouteHandler,
  getJobtemplatesRouteHandler,
  getJobtemplatesTemplateIdRouteHandler,
  getTagsResourceArnRouteHandler,
  getVirtualclustersRouteHandler,
  getVirtualclustersVirtualClusterIdEndpointsEndpointIdRouteHandler,
  getVirtualclustersVirtualClusterIdEndpointsRouteHandler,
  getVirtualclustersVirtualClusterIdJobrunsJobRunIdRouteHandler,
  getVirtualclustersVirtualClusterIdJobrunsRouteHandler,
  getVirtualclustersVirtualClusterIdRouteHandler,
  postJobtemplatesRouteHandler,
  postTagsResourceArnRouteHandler,
  postVirtualclustersRouteHandler,
  postVirtualclustersVirtualClusterIdEndpointsRouteHandler,
  postVirtualclustersVirtualClusterIdJobrunsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute,
    deleteVirtualclustersVirtualClusterIdJobrunsJobRunIdRouteHandler,
  )
  .openapi(
    getVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute,
    getVirtualclustersVirtualClusterIdJobrunsJobRunIdRouteHandler,
  )
  .openapi(postJobtemplatesRoute, postJobtemplatesRouteHandler)
  .openapi(getJobtemplatesRoute, getJobtemplatesRouteHandler)
  .openapi(
    postVirtualclustersVirtualClusterIdEndpointsRoute,
    postVirtualclustersVirtualClusterIdEndpointsRouteHandler,
  )
  .openapi(
    getVirtualclustersVirtualClusterIdEndpointsRoute,
    getVirtualclustersVirtualClusterIdEndpointsRouteHandler,
  )
  .openapi(postVirtualclustersRoute, postVirtualclustersRouteHandler)
  .openapi(getVirtualclustersRoute, getVirtualclustersRouteHandler)
  .openapi(deleteJobtemplatesTemplateIdRoute, deleteJobtemplatesTemplateIdRouteHandler)
  .openapi(getJobtemplatesTemplateIdRoute, getJobtemplatesTemplateIdRouteHandler)
  .openapi(
    deleteVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute,
    deleteVirtualclustersVirtualClusterIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    getVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute,
    getVirtualclustersVirtualClusterIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    deleteVirtualclustersVirtualClusterIdRoute,
    deleteVirtualclustersVirtualClusterIdRouteHandler,
  )
  .openapi(getVirtualclustersVirtualClusterIdRoute, getVirtualclustersVirtualClusterIdRouteHandler)
  .openapi(
    getVirtualclustersVirtualClusterIdJobrunsRoute,
    getVirtualclustersVirtualClusterIdJobrunsRouteHandler,
  )
  .openapi(
    postVirtualclustersVirtualClusterIdJobrunsRoute,
    postVirtualclustersVirtualClusterIdJobrunsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
