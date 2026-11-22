import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateFleetAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateFleetAttributesHandler = app.openapi(
  postXAmzTargetGameLiftUpdateFleetAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
