import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteFleetLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteFleetLocationsHandler = app.openapi(
  postXAmzTargetGameLiftDeleteFleetLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
