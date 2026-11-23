import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerListServicesHandler = app.openapi(
  postXAmzTargetAppRunnerListServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
