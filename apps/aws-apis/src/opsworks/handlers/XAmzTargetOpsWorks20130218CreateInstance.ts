import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218CreateInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218CreateInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218CreateInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
