import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateNetworkProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
