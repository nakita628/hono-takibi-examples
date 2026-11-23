import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeregisterInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DeregisterInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeregisterInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
