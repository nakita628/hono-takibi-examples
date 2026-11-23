import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeleteResourcePolicyResourceArnRoute,
  getDescribeChangeSetCatalogChangeSetIdRoute,
  getDescribeEntityCatalogEntityIdRoute,
  getGetResourcePolicyResourceArnRoute,
  patchCancelChangeSetCatalogChangeSetIdRoute,
  postListChangeSetsRoute,
  postListEntitiesRoute,
  postListTagsForResourceRoute,
  postPutResourcePolicyRoute,
  postStartChangeSetRoute,
  postTagResourceRoute,
  postUntagResourceRoute,
} from './routes'
import {
  deleteDeleteResourcePolicyResourceArnRouteHandler,
  getDescribeChangeSetCatalogChangeSetIdRouteHandler,
  getDescribeEntityCatalogEntityIdRouteHandler,
  getGetResourcePolicyResourceArnRouteHandler,
  patchCancelChangeSetCatalogChangeSetIdRouteHandler,
  postListChangeSetsRouteHandler,
  postListEntitiesRouteHandler,
  postListTagsForResourceRouteHandler,
  postPutResourcePolicyRouteHandler,
  postStartChangeSetRouteHandler,
  postTagResourceRouteHandler,
  postUntagResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    patchCancelChangeSetCatalogChangeSetIdRoute,
    patchCancelChangeSetCatalogChangeSetIdRouteHandler,
  )
  .openapi(
    deleteDeleteResourcePolicyResourceArnRoute,
    deleteDeleteResourcePolicyResourceArnRouteHandler,
  )
  .openapi(
    getDescribeChangeSetCatalogChangeSetIdRoute,
    getDescribeChangeSetCatalogChangeSetIdRouteHandler,
  )
  .openapi(getDescribeEntityCatalogEntityIdRoute, getDescribeEntityCatalogEntityIdRouteHandler)
  .openapi(getGetResourcePolicyResourceArnRoute, getGetResourcePolicyResourceArnRouteHandler)
  .openapi(postListChangeSetsRoute, postListChangeSetsRouteHandler)
  .openapi(postListEntitiesRoute, postListEntitiesRouteHandler)
  .openapi(postListTagsForResourceRoute, postListTagsForResourceRouteHandler)
  .openapi(postPutResourcePolicyRoute, postPutResourcePolicyRouteHandler)
  .openapi(postStartChangeSetRoute, postStartChangeSetRouteHandler)
  .openapi(postTagResourceRoute, postTagResourceRouteHandler)
  .openapi(postUntagResourceRoute, postUntagResourceRouteHandler)

export default app
