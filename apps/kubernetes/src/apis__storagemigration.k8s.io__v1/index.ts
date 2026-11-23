import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  deleteApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
  getApisStoragemigrationK8sIoV1IndexRoute,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
  getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameRoute,
  getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsRoute,
  patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
  postApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
  putApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  putApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
} from './routes'
import {
  deleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  deleteApisStoragemigrationK8sIoV1StorageversionmigrationsRouteHandler,
  getApisStoragemigrationK8sIoV1IndexRouteHandler,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRouteHandler,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsRouteHandler,
  getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameRouteHandler,
  getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsRouteHandler,
  patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRouteHandler,
  postApisStoragemigrationK8sIoV1StorageversionmigrationsRouteHandler,
  putApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  putApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApisStoragemigrationK8sIoV1IndexRoute,
    getApisStoragemigrationK8sIoV1IndexRouteHandler,
  )
  .openapi(
    deleteApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
    deleteApisStoragemigrationK8sIoV1StorageversionmigrationsRouteHandler,
  )
  .openapi(
    getApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
    getApisStoragemigrationK8sIoV1StorageversionmigrationsRouteHandler,
  )
  .openapi(
    postApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
    postApisStoragemigrationK8sIoV1StorageversionmigrationsRouteHandler,
  )
  .openapi(
    deleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
    deleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  )
  .openapi(
    getApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
    getApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  )
  .openapi(
    patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
    patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  )
  .openapi(
    putApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
    putApisStoragemigrationK8sIoV1StorageversionmigrationsNameRouteHandler,
  )
  .openapi(
    getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
    getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRouteHandler,
  )
  .openapi(
    patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
    patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRouteHandler,
  )
  .openapi(
    putApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
    putApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRouteHandler,
  )
  .openapi(
    getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsRoute,
    getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsRouteHandler,
  )
  .openapi(
    getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameRoute,
    getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameRouteHandler,
  )

export default app
