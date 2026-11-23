import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdRoute,
  getBundlesBundleIdRoute,
  getBundlesRoute,
  getProjectProjectIdRoute,
  getProjectsRoute,
  postBundlesBundleIdRoute,
  postExportsProjectIdRoute,
  postProjectsRoute,
  postUpdateProjectIdRoute,
} from './routes'
import {
  deleteProjectsProjectIdRouteHandler,
  getBundlesBundleIdRouteHandler,
  getBundlesRouteHandler,
  getProjectProjectIdRouteHandler,
  getProjectsRouteHandler,
  postBundlesBundleIdRouteHandler,
  postExportsProjectIdRouteHandler,
  postProjectsRouteHandler,
  postUpdateProjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(getBundlesBundleIdRoute, getBundlesBundleIdRouteHandler)
  .openapi(postBundlesBundleIdRoute, postBundlesBundleIdRouteHandler)
  .openapi(getProjectProjectIdRoute, getProjectProjectIdRouteHandler)
  .openapi(postExportsProjectIdRoute, postExportsProjectIdRouteHandler)
  .openapi(getBundlesRoute, getBundlesRouteHandler)
  .openapi(postUpdateProjectIdRoute, postUpdateProjectIdRouteHandler)

export default app
