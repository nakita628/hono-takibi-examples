import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218RebootInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218RebootInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218RebootInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
