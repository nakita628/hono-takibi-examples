import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804UpdateDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFirehose20150804UpdateDestinationHandler = app.openapi(
  postXAmzTargetFirehose20150804UpdateDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
