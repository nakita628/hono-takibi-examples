import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute,
  getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute,
  getJsonUrlYOURAPIKEYHEREURLHERERoute,
} from './routes'
import {
  getJsonEmailYOURAPIKEYHEREUSEREMAILHERERouteHandler,
  getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERouteHandler,
  getJsonUrlYOURAPIKEYHEREURLHERERouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute,
    getJsonEmailYOURAPIKEYHEREUSEREMAILHERERouteHandler,
  )
  .openapi(
    getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute,
    getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERouteHandler,
  )
  .openapi(getJsonUrlYOURAPIKEYHEREURLHERERoute, getJsonUrlYOURAPIKEYHEREURLHERERouteHandler)

export default app
