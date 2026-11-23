import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getDeviceDeviceArnRoute,
  getJobJobArnRoute,
  getQuantumTaskQuantumTaskArnRoute,
  getTagsResourceArnRoute,
  postDevicesRoute,
  postJobRoute,
  postJobsRoute,
  postQuantumTaskRoute,
  postQuantumTasksRoute,
  postTagsResourceArnRoute,
  putJobJobArnCancelRoute,
  putQuantumTaskQuantumTaskArnCancelRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getDeviceDeviceArnRouteHandler,
  getJobJobArnRouteHandler,
  getQuantumTaskQuantumTaskArnRouteHandler,
  getTagsResourceArnRouteHandler,
  postDevicesRouteHandler,
  postJobRouteHandler,
  postJobsRouteHandler,
  postQuantumTaskRouteHandler,
  postQuantumTasksRouteHandler,
  postTagsResourceArnRouteHandler,
  putJobJobArnCancelRouteHandler,
  putQuantumTaskQuantumTaskArnCancelRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putJobJobArnCancelRoute, putJobJobArnCancelRouteHandler)
  .openapi(putQuantumTaskQuantumTaskArnCancelRoute, putQuantumTaskQuantumTaskArnCancelRouteHandler)
  .openapi(postJobRoute, postJobRouteHandler)
  .openapi(postQuantumTaskRoute, postQuantumTaskRouteHandler)
  .openapi(getDeviceDeviceArnRoute, getDeviceDeviceArnRouteHandler)
  .openapi(getJobJobArnRoute, getJobJobArnRouteHandler)
  .openapi(getQuantumTaskQuantumTaskArnRoute, getQuantumTaskQuantumTaskArnRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postDevicesRoute, postDevicesRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(postQuantumTasksRoute, postQuantumTasksRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
