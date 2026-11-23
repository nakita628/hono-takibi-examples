import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisApiregistrationK8sIoV1ApiservicesNameRoute,
  deleteApisApiregistrationK8sIoV1ApiservicesRoute,
  getApisApiregistrationK8sIoV1ApiservicesNameRoute,
  getApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
  getApisApiregistrationK8sIoV1ApiservicesRoute,
  getApisApiregistrationK8sIoV1IndexRoute,
  getApisApiregistrationK8sIoV1WatchApiservicesNameRoute,
  getApisApiregistrationK8sIoV1WatchApiservicesRoute,
  patchApisApiregistrationK8sIoV1ApiservicesNameRoute,
  patchApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
  postApisApiregistrationK8sIoV1ApiservicesRoute,
  putApisApiregistrationK8sIoV1ApiservicesNameRoute,
  putApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
} from './routes'
import {
  deleteApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  deleteApisApiregistrationK8sIoV1ApiservicesRouteHandler,
  getApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  getApisApiregistrationK8sIoV1ApiservicesNameStatusRouteHandler,
  getApisApiregistrationK8sIoV1ApiservicesRouteHandler,
  getApisApiregistrationK8sIoV1IndexRouteHandler,
  getApisApiregistrationK8sIoV1WatchApiservicesNameRouteHandler,
  getApisApiregistrationK8sIoV1WatchApiservicesRouteHandler,
  patchApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  patchApisApiregistrationK8sIoV1ApiservicesNameStatusRouteHandler,
  postApisApiregistrationK8sIoV1ApiservicesRouteHandler,
  putApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  putApisApiregistrationK8sIoV1ApiservicesNameStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisApiregistrationK8sIoV1IndexRoute, getApisApiregistrationK8sIoV1IndexRouteHandler)
  .openapi(
    deleteApisApiregistrationK8sIoV1ApiservicesRoute,
    deleteApisApiregistrationK8sIoV1ApiservicesRouteHandler,
  )
  .openapi(
    getApisApiregistrationK8sIoV1ApiservicesRoute,
    getApisApiregistrationK8sIoV1ApiservicesRouteHandler,
  )
  .openapi(
    postApisApiregistrationK8sIoV1ApiservicesRoute,
    postApisApiregistrationK8sIoV1ApiservicesRouteHandler,
  )
  .openapi(
    deleteApisApiregistrationK8sIoV1ApiservicesNameRoute,
    deleteApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  )
  .openapi(
    getApisApiregistrationK8sIoV1ApiservicesNameRoute,
    getApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  )
  .openapi(
    patchApisApiregistrationK8sIoV1ApiservicesNameRoute,
    patchApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  )
  .openapi(
    putApisApiregistrationK8sIoV1ApiservicesNameRoute,
    putApisApiregistrationK8sIoV1ApiservicesNameRouteHandler,
  )
  .openapi(
    getApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
    getApisApiregistrationK8sIoV1ApiservicesNameStatusRouteHandler,
  )
  .openapi(
    patchApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
    patchApisApiregistrationK8sIoV1ApiservicesNameStatusRouteHandler,
  )
  .openapi(
    putApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
    putApisApiregistrationK8sIoV1ApiservicesNameStatusRouteHandler,
  )
  .openapi(
    getApisApiregistrationK8sIoV1WatchApiservicesRoute,
    getApisApiregistrationK8sIoV1WatchApiservicesRouteHandler,
  )
  .openapi(
    getApisApiregistrationK8sIoV1WatchApiservicesNameRoute,
    getApisApiregistrationK8sIoV1WatchApiservicesNameRouteHandler,
  )

export default app
