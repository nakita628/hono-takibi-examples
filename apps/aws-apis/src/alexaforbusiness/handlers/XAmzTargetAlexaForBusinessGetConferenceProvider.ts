import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetConferenceProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetConferenceProviderHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetConferenceProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
