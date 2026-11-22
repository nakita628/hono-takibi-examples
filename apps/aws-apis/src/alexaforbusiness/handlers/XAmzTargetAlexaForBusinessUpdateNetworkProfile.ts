import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateNetworkProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
