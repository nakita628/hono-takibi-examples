import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessPutConferencePreferenceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessPutConferencePreferenceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessPutConferencePreferenceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
