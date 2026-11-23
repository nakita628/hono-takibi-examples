import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentFeedbackReportsRoute,
  getV1ParentGroupsRoute,
  getV1ParentReleasesRoute,
  getV1ParentTestersRoute,
  patchV1NameRoute,
  postV1AppReleasesUploadRoute,
  postV1GroupBatchJoinRoute,
  postV1GroupBatchLeaveRoute,
  postV1NameCancelRoute,
  postV1NameDistributeRoute,
  postV1NameWaitRoute,
  postV1ParentGroupsRoute,
  postV1ParentReleasesBatchDeleteRoute,
  postV1ProjectTestersBatchAddRoute,
  postV1ProjectTestersBatchRemoveRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentFeedbackReportsRouteHandler,
  getV1ParentGroupsRouteHandler,
  getV1ParentReleasesRouteHandler,
  getV1ParentTestersRouteHandler,
  patchV1NameRouteHandler,
  postV1AppReleasesUploadRouteHandler,
  postV1GroupBatchJoinRouteHandler,
  postV1GroupBatchLeaveRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameDistributeRouteHandler,
  postV1NameWaitRouteHandler,
  postV1ParentGroupsRouteHandler,
  postV1ParentReleasesBatchDeleteRouteHandler,
  postV1ProjectTestersBatchAddRouteHandler,
  postV1ProjectTestersBatchRemoveRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AppReleasesUploadRoute, postV1AppReleasesUploadRouteHandler)
  .openapi(postV1GroupBatchJoinRoute, postV1GroupBatchJoinRouteHandler)
  .openapi(postV1GroupBatchLeaveRoute, postV1GroupBatchLeaveRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameDistributeRoute, postV1NameDistributeRouteHandler)
  .openapi(postV1NameWaitRoute, postV1NameWaitRouteHandler)
  .openapi(getV1ParentFeedbackReportsRoute, getV1ParentFeedbackReportsRouteHandler)
  .openapi(getV1ParentGroupsRoute, getV1ParentGroupsRouteHandler)
  .openapi(postV1ParentGroupsRoute, postV1ParentGroupsRouteHandler)
  .openapi(getV1ParentReleasesRoute, getV1ParentReleasesRouteHandler)
  .openapi(postV1ParentReleasesBatchDeleteRoute, postV1ParentReleasesBatchDeleteRouteHandler)
  .openapi(getV1ParentTestersRoute, getV1ParentTestersRouteHandler)
  .openapi(postV1ProjectTestersBatchAddRoute, postV1ProjectTestersBatchAddRouteHandler)
  .openapi(postV1ProjectTestersBatchRemoveRoute, postV1ProjectTestersBatchRemoveRouteHandler)

export default app
