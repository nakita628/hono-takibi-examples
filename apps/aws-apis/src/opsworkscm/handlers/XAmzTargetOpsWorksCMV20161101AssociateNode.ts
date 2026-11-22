import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101AssociateNodeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101AssociateNodeHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101AssociateNodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
