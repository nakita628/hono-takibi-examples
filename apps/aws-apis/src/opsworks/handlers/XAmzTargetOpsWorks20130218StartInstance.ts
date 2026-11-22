import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218StartInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218StartInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218StartInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
