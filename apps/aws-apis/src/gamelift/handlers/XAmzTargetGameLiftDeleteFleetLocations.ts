import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteFleetLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteFleetLocationsHandler = app.openapi(
  postXAmzTargetGameLiftDeleteFleetLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
