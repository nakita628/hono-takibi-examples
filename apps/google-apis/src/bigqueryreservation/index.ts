import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentAssignmentsRoute,
  getV1beta1ParentCapacityCommitmentsRoute,
  getV1beta1ParentReservationsRoute,
  getV1beta1ParentSearchAssignmentsRoute,
  patchV1beta1NameRoute,
  postV1beta1NameMoveRoute,
  postV1beta1NameSplitRoute,
  postV1beta1ParentAssignmentsRoute,
  postV1beta1ParentCapacityCommitmentsMergeRoute,
  postV1beta1ParentCapacityCommitmentsRoute,
  postV1beta1ParentReservationsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentAssignmentsRouteHandler,
  getV1beta1ParentCapacityCommitmentsRouteHandler,
  getV1beta1ParentReservationsRouteHandler,
  getV1beta1ParentSearchAssignmentsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameMoveRouteHandler,
  postV1beta1NameSplitRouteHandler,
  postV1beta1ParentAssignmentsRouteHandler,
  postV1beta1ParentCapacityCommitmentsMergeRouteHandler,
  postV1beta1ParentCapacityCommitmentsRouteHandler,
  postV1beta1ParentReservationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(postV1beta1NameMoveRoute, postV1beta1NameMoveRouteHandler)
  .openapi(postV1beta1NameSplitRoute, postV1beta1NameSplitRouteHandler)
  .openapi(getV1beta1ParentAssignmentsRoute, getV1beta1ParentAssignmentsRouteHandler)
  .openapi(postV1beta1ParentAssignmentsRoute, postV1beta1ParentAssignmentsRouteHandler)
  .openapi(
    getV1beta1ParentCapacityCommitmentsRoute,
    getV1beta1ParentCapacityCommitmentsRouteHandler,
  )
  .openapi(
    postV1beta1ParentCapacityCommitmentsRoute,
    postV1beta1ParentCapacityCommitmentsRouteHandler,
  )
  .openapi(
    postV1beta1ParentCapacityCommitmentsMergeRoute,
    postV1beta1ParentCapacityCommitmentsMergeRouteHandler,
  )
  .openapi(getV1beta1ParentReservationsRoute, getV1beta1ParentReservationsRouteHandler)
  .openapi(postV1beta1ParentReservationsRoute, postV1beta1ParentReservationsRouteHandler)
  .openapi(getV1beta1ParentSearchAssignmentsRoute, getV1beta1ParentSearchAssignmentsRouteHandler)

export default app
