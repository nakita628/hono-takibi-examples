import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateFleetLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateFleetLocationsHandler = app.openapi(
  postXAmzTargetGameLiftCreateFleetLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
