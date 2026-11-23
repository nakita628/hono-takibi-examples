import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BlocksIdRoute,
  getV1BlocksIdChildrenRoute,
  getV1BlocksIdRoute,
  getV1CommentsRoute,
  getV1DatabasesIdRoute,
  getV1PagesIdRoute,
  getV1PagesPageIdPropertiesPropertyIdRoute,
  getV1UsersIdRoute,
  patchV1BlocksIdChildrenRoute,
  patchV1BlocksIdRoute,
  patchV1DatabasesIdRoute,
  patchV1PagesIdRoute,
  postV1DatabasesIdQueryRoute,
} from './routes'
import {
  deleteV1BlocksIdRouteHandler,
  getV1BlocksIdChildrenRouteHandler,
  getV1BlocksIdRouteHandler,
  getV1CommentsRouteHandler,
  getV1DatabasesIdRouteHandler,
  getV1PagesIdRouteHandler,
  getV1PagesPageIdPropertiesPropertyIdRouteHandler,
  getV1UsersIdRouteHandler,
  patchV1BlocksIdChildrenRouteHandler,
  patchV1BlocksIdRouteHandler,
  patchV1DatabasesIdRouteHandler,
  patchV1PagesIdRouteHandler,
  postV1DatabasesIdQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1BlocksIdRoute, deleteV1BlocksIdRouteHandler)
  .openapi(getV1BlocksIdRoute, getV1BlocksIdRouteHandler)
  .openapi(patchV1BlocksIdRoute, patchV1BlocksIdRouteHandler)
  .openapi(getV1BlocksIdChildrenRoute, getV1BlocksIdChildrenRouteHandler)
  .openapi(patchV1BlocksIdChildrenRoute, patchV1BlocksIdChildrenRouteHandler)
  .openapi(getV1CommentsRoute, getV1CommentsRouteHandler)
  .openapi(getV1DatabasesIdRoute, getV1DatabasesIdRouteHandler)
  .openapi(patchV1DatabasesIdRoute, patchV1DatabasesIdRouteHandler)
  .openapi(postV1DatabasesIdQueryRoute, postV1DatabasesIdQueryRouteHandler)
  .openapi(getV1PagesIdRoute, getV1PagesIdRouteHandler)
  .openapi(patchV1PagesIdRoute, patchV1PagesIdRouteHandler)
  .openapi(
    getV1PagesPageIdPropertiesPropertyIdRoute,
    getV1PagesPageIdPropertiesPropertyIdRouteHandler,
  )
  .openapi(getV1UsersIdRoute, getV1UsersIdRouteHandler)

export default app
