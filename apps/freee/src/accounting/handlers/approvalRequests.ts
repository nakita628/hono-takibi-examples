import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1ApprovalRequestsIdRoute,
  getApi1ApprovalRequestsFormsIdRoute,
  getApi1ApprovalRequestsFormsRoute,
  getApi1ApprovalRequestsIdRoute,
  getApi1ApprovalRequestsRoute,
  postApi1ApprovalRequestsIdActionsRoute,
  postApi1ApprovalRequestsRoute,
  putApi1ApprovalRequestsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const approvalRequestsHandler = app
  .openapi(getApi1ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ApprovalRequestsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalRequestsFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalRequestsFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
