import { OpenAPIHono } from '@hono/zod-openapi'
import { getSurveysScopeTypeRoute, postSurveysScopeTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const surveysHandler = app
  .openapi(getSurveysScopeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSurveysScopeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
