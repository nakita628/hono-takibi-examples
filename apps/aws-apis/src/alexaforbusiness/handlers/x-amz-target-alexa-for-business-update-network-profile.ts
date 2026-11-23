import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateNetworkProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
