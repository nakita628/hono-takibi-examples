import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218CreateAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218CreateAppHandler = app.openapi(
  postXAmzTargetOpsWorks20130218CreateAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
