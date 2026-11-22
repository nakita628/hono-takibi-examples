import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetConferencePreferenceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetConferencePreferenceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetConferencePreferenceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
