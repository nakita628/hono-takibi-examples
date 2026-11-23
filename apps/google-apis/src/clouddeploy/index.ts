import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentDeliveryPipelinesRoute,
  getV1ParentJobRunsRoute,
  getV1ParentReleasesRoute,
  getV1ParentRolloutsRoute,
  getV1ParentTargetsRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameAbandonRoute,
  postV1NameAdvanceRoute,
  postV1NameApproveRoute,
  postV1NameCancelRoute,
  postV1NameTerminateRoute,
  postV1ParentDeliveryPipelinesRoute,
  postV1ParentReleasesRoute,
  postV1ParentRolloutsRoute,
  postV1ParentTargetsRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  postV1RolloutIgnoreJobRoute,
  postV1RolloutRetryJobRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentDeliveryPipelinesRouteHandler,
  getV1ParentJobRunsRouteHandler,
  getV1ParentReleasesRouteHandler,
  getV1ParentRolloutsRouteHandler,
  getV1ParentTargetsRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1NameAbandonRouteHandler,
  postV1NameAdvanceRouteHandler,
  postV1NameApproveRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameTerminateRouteHandler,
  postV1ParentDeliveryPipelinesRouteHandler,
  postV1ParentReleasesRouteHandler,
  postV1ParentRolloutsRouteHandler,
  postV1ParentTargetsRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
  postV1RolloutIgnoreJobRouteHandler,
  postV1RolloutRetryJobRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameAbandonRoute, postV1NameAbandonRouteHandler)
  .openapi(postV1NameAdvanceRoute, postV1NameAdvanceRouteHandler)
  .openapi(postV1NameApproveRoute, postV1NameApproveRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameTerminateRoute, postV1NameTerminateRouteHandler)
  .openapi(getV1ParentDeliveryPipelinesRoute, getV1ParentDeliveryPipelinesRouteHandler)
  .openapi(postV1ParentDeliveryPipelinesRoute, postV1ParentDeliveryPipelinesRouteHandler)
  .openapi(getV1ParentJobRunsRoute, getV1ParentJobRunsRouteHandler)
  .openapi(getV1ParentReleasesRoute, getV1ParentReleasesRouteHandler)
  .openapi(postV1ParentReleasesRoute, postV1ParentReleasesRouteHandler)
  .openapi(getV1ParentRolloutsRoute, getV1ParentRolloutsRouteHandler)
  .openapi(postV1ParentRolloutsRoute, postV1ParentRolloutsRouteHandler)
  .openapi(getV1ParentTargetsRoute, getV1ParentTargetsRouteHandler)
  .openapi(postV1ParentTargetsRoute, postV1ParentTargetsRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)
  .openapi(postV1RolloutIgnoreJobRoute, postV1RolloutIgnoreJobRouteHandler)
  .openapi(postV1RolloutRetryJobRoute, postV1RolloutRetryJobRouteHandler)

export default app
