import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateConferenceProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateConferenceProviderHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateConferenceProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
