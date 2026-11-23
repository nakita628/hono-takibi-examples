import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeSearchRoute,
} from './routes'
import {
  getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  getCrmObjects202609ObjectTypeRouteHandler,
  postCrmObjects202609ObjectTypeSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609ObjectTypeRoute, getCrmObjects202609ObjectTypeRouteHandler)
  .openapi(
    postCrmObjects202609ObjectTypeSearchRoute,
    postCrmObjects202609ObjectTypeSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609ObjectTypeObjectIdRoute,
    getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  )

export default app
