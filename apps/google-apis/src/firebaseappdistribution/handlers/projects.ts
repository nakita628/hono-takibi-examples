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
  postV1GroupBatchJoinRoute,
  postV1GroupBatchLeaveRoute,
  postV1NameCancelRoute,
  postV1NameDistributeRoute,
  postV1NameWaitRoute,
  postV1ParentGroupsRoute,
  postV1ParentReleasesBatchDeleteRoute,
  postV1ProjectTestersBatchAddRoute,
  postV1ProjectTestersBatchRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1GroupBatchJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupBatchLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDistributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentFeedbackReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentReleasesBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectTestersBatchAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectTestersBatchRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
