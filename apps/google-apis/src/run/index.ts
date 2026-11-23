import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ParentExecutionsRoute,
  getV2ParentJobsRoute,
  getV2ParentRevisionsRoute,
  getV2ParentServicesRoute,
  getV2ParentTasksRoute,
  getV2ResourceGetIamPolicyRoute,
  patchV2NameRoute,
  postV2NameCancelRoute,
  postV2NameRunRoute,
  postV2NameWaitRoute,
  postV2ParentJobsRoute,
  postV2ParentServicesRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameOperationsRouteHandler,
  getV2NameRouteHandler,
  getV2ParentExecutionsRouteHandler,
  getV2ParentJobsRouteHandler,
  getV2ParentRevisionsRouteHandler,
  getV2ParentServicesRouteHandler,
  getV2ParentTasksRouteHandler,
  getV2ResourceGetIamPolicyRouteHandler,
  patchV2NameRouteHandler,
  postV2NameCancelRouteHandler,
  postV2NameRunRouteHandler,
  postV2NameWaitRouteHandler,
  postV2ParentJobsRouteHandler,
  postV2ParentServicesRouteHandler,
  postV2ResourceSetIamPolicyRouteHandler,
  postV2ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(getV2NameOperationsRoute, getV2NameOperationsRouteHandler)
  .openapi(postV2NameCancelRoute, postV2NameCancelRouteHandler)
  .openapi(postV2NameRunRoute, postV2NameRunRouteHandler)
  .openapi(postV2NameWaitRoute, postV2NameWaitRouteHandler)
  .openapi(getV2ParentExecutionsRoute, getV2ParentExecutionsRouteHandler)
  .openapi(getV2ParentJobsRoute, getV2ParentJobsRouteHandler)
  .openapi(postV2ParentJobsRoute, postV2ParentJobsRouteHandler)
  .openapi(getV2ParentRevisionsRoute, getV2ParentRevisionsRouteHandler)
  .openapi(getV2ParentServicesRoute, getV2ParentServicesRouteHandler)
  .openapi(postV2ParentServicesRoute, postV2ParentServicesRouteHandler)
  .openapi(getV2ParentTasksRoute, getV2ParentTasksRouteHandler)
  .openapi(getV2ResourceGetIamPolicyRoute, getV2ResourceGetIamPolicyRouteHandler)
  .openapi(postV2ResourceSetIamPolicyRoute, postV2ResourceSetIamPolicyRouteHandler)
  .openapi(postV2ResourceTestIamPermissionsRoute, postV2ResourceTestIamPermissionsRouteHandler)

export default app
