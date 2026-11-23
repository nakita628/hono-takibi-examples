import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateConferenceProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateConferenceProviderHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateConferenceProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
