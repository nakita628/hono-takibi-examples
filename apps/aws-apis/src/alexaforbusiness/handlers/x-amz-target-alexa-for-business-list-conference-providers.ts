import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListConferenceProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListConferenceProvidersHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListConferenceProvidersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
