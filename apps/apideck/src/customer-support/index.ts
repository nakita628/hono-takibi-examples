import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomerSupportCustomersIdRoute,
  getCustomerSupportCustomersIdRoute,
  getCustomerSupportCustomersRoute,
  patchCustomerSupportCustomersIdRoute,
  postCustomerSupportCustomersRoute,
} from './routes'
import {
  deleteCustomerSupportCustomersIdRouteHandler,
  getCustomerSupportCustomersIdRouteHandler,
  getCustomerSupportCustomersRouteHandler,
  patchCustomerSupportCustomersIdRouteHandler,
  postCustomerSupportCustomersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCustomerSupportCustomersRoute, getCustomerSupportCustomersRouteHandler)
  .openapi(postCustomerSupportCustomersRoute, postCustomerSupportCustomersRouteHandler)
  .openapi(deleteCustomerSupportCustomersIdRoute, deleteCustomerSupportCustomersIdRouteHandler)
  .openapi(getCustomerSupportCustomersIdRoute, getCustomerSupportCustomersIdRouteHandler)
  .openapi(patchCustomerSupportCustomersIdRoute, patchCustomerSupportCustomersIdRouteHandler)

export default app
