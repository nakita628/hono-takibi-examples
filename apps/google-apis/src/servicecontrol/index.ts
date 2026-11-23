import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ServicesServiceNameCheckRoute, postV2ServicesServiceNameReportRoute } from './routes'
import {
  postV2ServicesServiceNameCheckRouteHandler,
  postV2ServicesServiceNameReportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2ServicesServiceNameCheckRoute, postV2ServicesServiceNameCheckRouteHandler)
  .openapi(postV2ServicesServiceNameReportRoute, postV2ServicesServiceNameReportRouteHandler)

export default app
