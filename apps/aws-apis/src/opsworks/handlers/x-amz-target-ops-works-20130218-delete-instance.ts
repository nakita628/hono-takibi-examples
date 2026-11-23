import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeleteInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DeleteInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeleteInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
