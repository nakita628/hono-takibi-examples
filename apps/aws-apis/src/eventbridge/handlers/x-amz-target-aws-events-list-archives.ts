import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListArchivesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsListArchivesHandler = app.openapi(
  postXAmzTargetAWSEventsListArchivesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
