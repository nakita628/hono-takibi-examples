import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutQueryDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328PutQueryDefinitionHandler = app.openapi(
  postXAmzTargetLogs20140328PutQueryDefinitionRoute,
  (c) => {},
)
