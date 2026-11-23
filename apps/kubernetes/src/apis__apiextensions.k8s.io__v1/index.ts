import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
  getApisApiextensionsK8sIoV1IndexRoute,
  getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameRoute,
  getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsRoute,
  patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
  postApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
  putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
} from './routes'
import {
  deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsRouteHandler,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRouteHandler,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsRouteHandler,
  getApisApiextensionsK8sIoV1IndexRouteHandler,
  getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameRouteHandler,
  getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsRouteHandler,
  patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRouteHandler,
  postApisApiextensionsK8sIoV1CustomresourcedefinitionsRouteHandler,
  putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisApiextensionsK8sIoV1IndexRoute, getApisApiextensionsK8sIoV1IndexRouteHandler)
  .openapi(
    deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
    deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsRouteHandler,
  )
  .openapi(
    getApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
    getApisApiextensionsK8sIoV1CustomresourcedefinitionsRouteHandler,
  )
  .openapi(
    postApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
    postApisApiextensionsK8sIoV1CustomresourcedefinitionsRouteHandler,
  )
  .openapi(
    deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
    deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  )
  .openapi(
    getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
    getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  )
  .openapi(
    patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
    patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  )
  .openapi(
    putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
    putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRouteHandler,
  )
  .openapi(
    getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
    getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRouteHandler,
  )
  .openapi(
    patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
    patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRouteHandler,
  )
  .openapi(
    putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
    putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRouteHandler,
  )
  .openapi(
    getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsRoute,
    getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsRouteHandler,
  )
  .openapi(
    getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameRoute,
    getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameRouteHandler,
  )

export default app
