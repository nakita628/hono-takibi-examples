import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218RegisterRdsDbInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218RegisterRdsDbInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218RegisterRdsDbInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
