import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftListLocationsHandler = app.openapi(
  postXAmzTargetGameLiftListLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
