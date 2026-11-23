import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdRoute,
  getApplicationsApplicationIdDependenciesRoute,
  getApplicationsApplicationIdPolicyRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsApplicationIdTemplatesTemplateIdRoute,
  getApplicationsApplicationIdVersionsRoute,
  getApplicationsRoute,
  patchApplicationsApplicationIdRoute,
  postApplicationsApplicationIdChangesetsRoute,
  postApplicationsApplicationIdTemplatesRoute,
  postApplicationsApplicationIdUnshareRoute,
  postApplicationsRoute,
  putApplicationsApplicationIdPolicyRoute,
  putApplicationsApplicationIdVersionsSemanticVersionRoute,
} from './routes'
import {
  deleteApplicationsApplicationIdRouteHandler,
  getApplicationsApplicationIdDependenciesRouteHandler,
  getApplicationsApplicationIdPolicyRouteHandler,
  getApplicationsApplicationIdRouteHandler,
  getApplicationsApplicationIdTemplatesTemplateIdRouteHandler,
  getApplicationsApplicationIdVersionsRouteHandler,
  getApplicationsRouteHandler,
  patchApplicationsApplicationIdRouteHandler,
  postApplicationsApplicationIdChangesetsRouteHandler,
  postApplicationsApplicationIdTemplatesRouteHandler,
  postApplicationsApplicationIdUnshareRouteHandler,
  postApplicationsRouteHandler,
  putApplicationsApplicationIdPolicyRouteHandler,
  putApplicationsApplicationIdVersionsSemanticVersionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApplicationsRoute, postApplicationsRouteHandler)
  .openapi(getApplicationsRoute, getApplicationsRouteHandler)
  .openapi(
    putApplicationsApplicationIdVersionsSemanticVersionRoute,
    putApplicationsApplicationIdVersionsSemanticVersionRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdChangesetsRoute,
    postApplicationsApplicationIdChangesetsRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdTemplatesRoute,
    postApplicationsApplicationIdTemplatesRouteHandler,
  )
  .openapi(deleteApplicationsApplicationIdRoute, deleteApplicationsApplicationIdRouteHandler)
  .openapi(getApplicationsApplicationIdRoute, getApplicationsApplicationIdRouteHandler)
  .openapi(patchApplicationsApplicationIdRoute, patchApplicationsApplicationIdRouteHandler)
  .openapi(getApplicationsApplicationIdPolicyRoute, getApplicationsApplicationIdPolicyRouteHandler)
  .openapi(putApplicationsApplicationIdPolicyRoute, putApplicationsApplicationIdPolicyRouteHandler)
  .openapi(
    getApplicationsApplicationIdTemplatesTemplateIdRoute,
    getApplicationsApplicationIdTemplatesTemplateIdRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdDependenciesRoute,
    getApplicationsApplicationIdDependenciesRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdVersionsRoute,
    getApplicationsApplicationIdVersionsRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdUnshareRoute,
    postApplicationsApplicationIdUnshareRouteHandler,
  )

export default app
