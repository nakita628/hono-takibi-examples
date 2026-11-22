import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteNetworkProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
