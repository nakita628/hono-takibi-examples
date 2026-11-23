import { OpenAPIHono } from '@hono/zod-openapi'
import { getSurveyDefinitionsSurveyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const surveyDefinitionsHandler = app.openapi(getSurveyDefinitionsSurveyIdRoute, (c) => {
  throw new Error('Not implemented')
})
