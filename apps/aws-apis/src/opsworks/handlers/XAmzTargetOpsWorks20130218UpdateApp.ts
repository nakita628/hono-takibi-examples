import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218UpdateAppHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
