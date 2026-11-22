import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UnassignInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218UnassignInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UnassignInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
