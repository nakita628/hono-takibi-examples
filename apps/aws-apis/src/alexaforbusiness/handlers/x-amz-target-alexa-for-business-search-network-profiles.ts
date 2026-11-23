import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchNetworkProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessSearchNetworkProfilesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchNetworkProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
