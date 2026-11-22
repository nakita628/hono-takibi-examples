import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteFleetHandler = app.openapi(
  postXAmzTargetGameLiftDeleteFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
