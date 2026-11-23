import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteQueryDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteQueryDefinitionHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteQueryDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
