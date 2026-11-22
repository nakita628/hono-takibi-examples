import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1ApprovalFlowRoutesIdRoute, getApi1ApprovalFlowRoutesRoute } from '../routes'

const app = new OpenAPIHono()

export const approvalFlowRoutesHandler = app
  .openapi(getApi1ApprovalFlowRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ApprovalFlowRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
