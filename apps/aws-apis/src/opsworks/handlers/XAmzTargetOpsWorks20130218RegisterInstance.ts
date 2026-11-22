import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218RegisterInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218RegisterInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218RegisterInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
