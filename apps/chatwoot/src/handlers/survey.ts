import { OpenAPIHono } from '@hono/zod-openapi'
import { getSurveyResponsesConversationUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const surveyHandler = app.openapi(getSurveyResponsesConversationUuidRoute, (c) => {
  throw new Error('Not implemented')
})
