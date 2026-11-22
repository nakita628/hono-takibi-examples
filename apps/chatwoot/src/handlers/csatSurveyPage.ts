import { OpenAPIHono } from '@hono/zod-openapi'
import { getSurveyResponsesConversationUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const csatSurveyPageHandler = app.openapi(getSurveyResponsesConversationUuidRoute, (c) => {
  throw new Error('Not implemented')
})
