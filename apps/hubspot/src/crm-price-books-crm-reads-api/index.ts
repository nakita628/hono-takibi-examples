import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
} from './routes'
import {
  getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  getCrmObjects202609ObjectTypeRouteHandler,
  postCrmObjects202609ObjectTypeBatchReadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609ObjectTypeRoute, getCrmObjects202609ObjectTypeRouteHandler)
  .openapi(
    postCrmObjects202609ObjectTypeBatchReadRoute,
    postCrmObjects202609ObjectTypeBatchReadRouteHandler,
  )
  .openapi(
    getCrmObjects202609ObjectTypeObjectIdRoute,
    getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  )

export default app
