import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getXCodeSamplesRoute,
  getXSamplesLanguagesRoute,
  patchXExplorerEnabledRoute,
  patchXHeadersRoute,
  patchXMetricsEnabledRoute,
  patchXProxyEnabledRoute,
  postXCodeSamplesRoute,
  postXExplorerEnabledRoute,
  postXHeadersRoute,
  postXMetricsEnabledRoute,
  postXProxyEnabledRoute,
  postXSamplesLanguagesRoute,
} from './routes'
import {
  getXCodeSamplesRouteHandler,
  getXSamplesLanguagesRouteHandler,
  patchXExplorerEnabledRouteHandler,
  patchXHeadersRouteHandler,
  patchXMetricsEnabledRouteHandler,
  patchXProxyEnabledRouteHandler,
  postXCodeSamplesRouteHandler,
  postXExplorerEnabledRouteHandler,
  postXHeadersRouteHandler,
  postXMetricsEnabledRouteHandler,
  postXProxyEnabledRouteHandler,
  postXSamplesLanguagesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postXCodeSamplesRoute, postXCodeSamplesRouteHandler)
  .openapi(getXCodeSamplesRoute, getXCodeSamplesRouteHandler)
  .openapi(postXHeadersRoute, postXHeadersRouteHandler)
  .openapi(patchXHeadersRoute, patchXHeadersRouteHandler)
  .openapi(postXExplorerEnabledRoute, postXExplorerEnabledRouteHandler)
  .openapi(patchXExplorerEnabledRoute, patchXExplorerEnabledRouteHandler)
  .openapi(getXSamplesLanguagesRoute, getXSamplesLanguagesRouteHandler)
  .openapi(postXSamplesLanguagesRoute, postXSamplesLanguagesRouteHandler)
  .openapi(postXProxyEnabledRoute, postXProxyEnabledRouteHandler)
  .openapi(patchXProxyEnabledRoute, patchXProxyEnabledRouteHandler)
  .openapi(postXMetricsEnabledRoute, postXMetricsEnabledRouteHandler)
  .openapi(patchXMetricsEnabledRoute, patchXMetricsEnabledRouteHandler)

export default app
