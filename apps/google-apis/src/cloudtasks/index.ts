import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2beta3NameRoute,
  getV2beta3NameLocationsRoute,
  getV2beta3NameRoute,
  getV2beta3ParentQueuesRoute,
  getV2beta3ParentTasksRoute,
  patchV2beta3NameRoute,
  postV2beta3NamePauseRoute,
  postV2beta3NamePurgeRoute,
  postV2beta3NameResumeRoute,
  postV2beta3NameRunRoute,
  postV2beta3ParentQueuesRoute,
  postV2beta3ParentTasksRoute,
  postV2beta3QueueTasksTaskIdBufferRoute,
  postV2beta3ResourceGetIamPolicyRoute,
  postV2beta3ResourceSetIamPolicyRoute,
  postV2beta3ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV2beta3NameRouteHandler,
  getV2beta3NameLocationsRouteHandler,
  getV2beta3NameRouteHandler,
  getV2beta3ParentQueuesRouteHandler,
  getV2beta3ParentTasksRouteHandler,
  patchV2beta3NameRouteHandler,
  postV2beta3NamePauseRouteHandler,
  postV2beta3NamePurgeRouteHandler,
  postV2beta3NameResumeRouteHandler,
  postV2beta3NameRunRouteHandler,
  postV2beta3ParentQueuesRouteHandler,
  postV2beta3ParentTasksRouteHandler,
  postV2beta3QueueTasksTaskIdBufferRouteHandler,
  postV2beta3ResourceGetIamPolicyRouteHandler,
  postV2beta3ResourceSetIamPolicyRouteHandler,
  postV2beta3ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2beta3NameRoute, deleteV2beta3NameRouteHandler)
  .openapi(getV2beta3NameRoute, getV2beta3NameRouteHandler)
  .openapi(patchV2beta3NameRoute, patchV2beta3NameRouteHandler)
  .openapi(getV2beta3NameLocationsRoute, getV2beta3NameLocationsRouteHandler)
  .openapi(postV2beta3NamePauseRoute, postV2beta3NamePauseRouteHandler)
  .openapi(postV2beta3NamePurgeRoute, postV2beta3NamePurgeRouteHandler)
  .openapi(postV2beta3NameResumeRoute, postV2beta3NameResumeRouteHandler)
  .openapi(postV2beta3NameRunRoute, postV2beta3NameRunRouteHandler)
  .openapi(getV2beta3ParentQueuesRoute, getV2beta3ParentQueuesRouteHandler)
  .openapi(postV2beta3ParentQueuesRoute, postV2beta3ParentQueuesRouteHandler)
  .openapi(getV2beta3ParentTasksRoute, getV2beta3ParentTasksRouteHandler)
  .openapi(postV2beta3ParentTasksRoute, postV2beta3ParentTasksRouteHandler)
  .openapi(postV2beta3QueueTasksTaskIdBufferRoute, postV2beta3QueueTasksTaskIdBufferRouteHandler)
  .openapi(postV2beta3ResourceGetIamPolicyRoute, postV2beta3ResourceGetIamPolicyRouteHandler)
  .openapi(postV2beta3ResourceSetIamPolicyRoute, postV2beta3ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV2beta3ResourceTestIamPermissionsRoute,
    postV2beta3ResourceTestIamPermissionsRouteHandler,
  )

export default app
