import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApprovalsApprovalIdRoute,
  postApprovalsSessionSessionIdApprovalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const approvalsHandler = app
  .openapi(postApprovalsSessionSessionIdApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApprovalsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
