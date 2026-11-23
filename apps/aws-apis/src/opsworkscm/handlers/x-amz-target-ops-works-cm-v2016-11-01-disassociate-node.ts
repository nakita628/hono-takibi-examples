import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DisassociateNodeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorksCmV20161101DisassociateNodeHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DisassociateNodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
