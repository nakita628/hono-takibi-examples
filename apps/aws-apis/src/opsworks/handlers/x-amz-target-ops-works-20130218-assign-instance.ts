import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218AssignInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218AssignInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218AssignInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
