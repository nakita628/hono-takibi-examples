import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessCreateNetworkProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
