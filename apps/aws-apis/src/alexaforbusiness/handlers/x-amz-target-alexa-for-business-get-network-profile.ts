import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetNetworkProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
