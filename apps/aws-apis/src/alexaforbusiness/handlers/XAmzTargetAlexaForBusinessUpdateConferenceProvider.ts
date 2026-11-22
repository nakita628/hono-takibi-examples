import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateConferenceProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateConferenceProviderHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateConferenceProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
