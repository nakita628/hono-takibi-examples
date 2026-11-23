import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
  getApisPolicyV1IndexRoute,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
  getApisPolicyV1PoddisruptionbudgetsRoute,
  getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameRoute,
  getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsRoute,
  getApisPolicyV1WatchPoddisruptionbudgetsRoute,
  patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
  postApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
  putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
} from './routes'
import {
  deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRouteHandler,
  getApisPolicyV1IndexRouteHandler,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRouteHandler,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRouteHandler,
  getApisPolicyV1PoddisruptionbudgetsRouteHandler,
  getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsRouteHandler,
  getApisPolicyV1WatchPoddisruptionbudgetsRouteHandler,
  patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRouteHandler,
  postApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRouteHandler,
  putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisPolicyV1IndexRoute, getApisPolicyV1IndexRouteHandler)
  .openapi(
    deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
    deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRouteHandler,
  )
  .openapi(
    getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
    getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRouteHandler,
  )
  .openapi(
    postApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
    postApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRouteHandler,
  )
  .openapi(
    deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
    deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  )
  .openapi(
    getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
    getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  )
  .openapi(
    patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
    patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  )
  .openapi(
    putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
    putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  )
  .openapi(
    getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
    getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRouteHandler,
  )
  .openapi(
    patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
    patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRouteHandler,
  )
  .openapi(
    putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
    putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRouteHandler,
  )
  .openapi(
    getApisPolicyV1PoddisruptionbudgetsRoute,
    getApisPolicyV1PoddisruptionbudgetsRouteHandler,
  )
  .openapi(
    getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsRoute,
    getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsRouteHandler,
  )
  .openapi(
    getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameRoute,
    getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameRouteHandler,
  )
  .openapi(
    getApisPolicyV1WatchPoddisruptionbudgetsRoute,
    getApisPolicyV1WatchPoddisruptionbudgetsRouteHandler,
  )

export default app
