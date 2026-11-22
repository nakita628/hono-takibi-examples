import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218GrantAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218GrantAccessHandler = app.openapi(
  postXAmzTargetOpsWorks20130218GrantAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
