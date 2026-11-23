import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateRdsDbInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218UpdateRdsDbInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateRdsDbInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
