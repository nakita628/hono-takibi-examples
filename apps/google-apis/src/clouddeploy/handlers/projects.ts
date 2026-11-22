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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAbandonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDeliveryPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDeliveryPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentJobRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRolloutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRolloutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RolloutIgnoreJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RolloutRetryJobRoute, (c) => {
    throw new Error('Not implemented')
  })
