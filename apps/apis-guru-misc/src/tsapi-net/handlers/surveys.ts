import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSurveysRoute,
  getSurveysSurveyIdInterviewsRoute,
  getSurveysSurveyIdMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const surveysHandler = app
  .openapi(getSurveysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSurveysSurveyIdInterviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSurveysSurveyIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
