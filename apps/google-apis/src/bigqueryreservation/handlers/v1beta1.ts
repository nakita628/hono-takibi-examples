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
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSplitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentCapacityCommitmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentCapacityCommitmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentCapacityCommitmentsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentSearchAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
