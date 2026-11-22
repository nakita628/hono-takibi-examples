import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteConferenceProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteConferenceProviderHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteConferenceProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
