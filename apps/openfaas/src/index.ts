import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSystemFunctionsRoute,
  deleteSystemSecretsRoute,
  getHealthzRoute,
  getMetricsRoute,
  getSystemFunctionFunctionNameRoute,
  getSystemFunctionsRoute,
  getSystemInfoRoute,
  getSystemLogsRoute,
  getSystemNamespacesRoute,
  getSystemSecretsRoute,
  postAsyncFunctionFunctionNameNamespaceRoute,
  postAsyncFunctionFunctionNameRoute,
  postFunctionFunctionNameNamespaceRoute,
  postFunctionFunctionNameRoute,
  postSystemAlertRoute,
  postSystemFunctionsRoute,
  postSystemScaleFunctionFunctionNameRoute,
  postSystemSecretsRoute,
  putSystemFunctionsRoute,
  putSystemSecretsRoute,
} from './routes'
import {
  deleteSystemFunctionsRouteHandler,
  deleteSystemSecretsRouteHandler,
  getHealthzRouteHandler,
  getMetricsRouteHandler,
  getSystemFunctionFunctionNameRouteHandler,
  getSystemFunctionsRouteHandler,
  getSystemInfoRouteHandler,
  getSystemLogsRouteHandler,
  getSystemNamespacesRouteHandler,
  getSystemSecretsRouteHandler,
  postAsyncFunctionFunctionNameNamespaceRouteHandler,
  postAsyncFunctionFunctionNameRouteHandler,
  postFunctionFunctionNameNamespaceRouteHandler,
  postFunctionFunctionNameRouteHandler,
  postSystemAlertRouteHandler,
  postSystemFunctionsRouteHandler,
  postSystemScaleFunctionFunctionNameRouteHandler,
  postSystemSecretsRouteHandler,
  putSystemFunctionsRouteHandler,
  putSystemSecretsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHealthzRoute, getHealthzRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getSystemInfoRoute, getSystemInfoRouteHandler)
  .openapi(postSystemAlertRoute, postSystemAlertRouteHandler)
  .openapi(getSystemFunctionsRoute, getSystemFunctionsRouteHandler)
  .openapi(putSystemFunctionsRoute, putSystemFunctionsRouteHandler)
  .openapi(postSystemFunctionsRoute, postSystemFunctionsRouteHandler)
  .openapi(deleteSystemFunctionsRoute, deleteSystemFunctionsRouteHandler)
  .openapi(
    postSystemScaleFunctionFunctionNameRoute,
    postSystemScaleFunctionFunctionNameRouteHandler,
  )
  .openapi(getSystemFunctionFunctionNameRoute, getSystemFunctionFunctionNameRouteHandler)
  .openapi(getSystemSecretsRoute, getSystemSecretsRouteHandler)
  .openapi(putSystemSecretsRoute, putSystemSecretsRouteHandler)
  .openapi(postSystemSecretsRoute, postSystemSecretsRouteHandler)
  .openapi(deleteSystemSecretsRoute, deleteSystemSecretsRouteHandler)
  .openapi(getSystemLogsRoute, getSystemLogsRouteHandler)
  .openapi(getSystemNamespacesRoute, getSystemNamespacesRouteHandler)
  .openapi(postAsyncFunctionFunctionNameRoute, postAsyncFunctionFunctionNameRouteHandler)
  .openapi(
    postAsyncFunctionFunctionNameNamespaceRoute,
    postAsyncFunctionFunctionNameNamespaceRouteHandler,
  )
  .openapi(postFunctionFunctionNameRoute, postFunctionFunctionNameRouteHandler)
  .openapi(postFunctionFunctionNameNamespaceRoute, postFunctionFunctionNameNamespaceRouteHandler)

export default app
