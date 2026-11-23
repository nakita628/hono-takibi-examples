import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListJsonRoute,
  getMetricsJsonRoute,
  getProviderJsonRoute,
  getProviderServicesJsonRoute,
  getProvidersJsonRoute,
  getSpecsProviderApiJsonRoute,
  getSpecsProviderServiceApiJsonRoute,
} from './routes'
import {
  getListJsonRouteHandler,
  getMetricsJsonRouteHandler,
  getProviderJsonRouteHandler,
  getProviderServicesJsonRouteHandler,
  getProvidersJsonRouteHandler,
  getSpecsProviderApiJsonRouteHandler,
  getSpecsProviderServiceApiJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getListJsonRoute, getListJsonRouteHandler)
  .openapi(getMetricsJsonRoute, getMetricsJsonRouteHandler)
  .openapi(getProvidersJsonRoute, getProvidersJsonRouteHandler)
  .openapi(getSpecsProviderApiJsonRoute, getSpecsProviderApiJsonRouteHandler)
  .openapi(getSpecsProviderServiceApiJsonRoute, getSpecsProviderServiceApiJsonRouteHandler)
  .openapi(getProviderJsonRoute, getProviderJsonRouteHandler)
  .openapi(getProviderServicesJsonRoute, getProviderServicesJsonRouteHandler)

export default app
