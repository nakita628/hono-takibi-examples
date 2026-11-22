import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeleteAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DeleteAppHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeleteAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
