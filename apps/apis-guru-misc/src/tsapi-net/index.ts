import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSurveysRoute,
  getSurveysSurveyIdInterviewsRoute,
  getSurveysSurveyIdMetadataRoute,
} from './routes'
import {
  getSurveysRouteHandler,
  getSurveysSurveyIdInterviewsRouteHandler,
  getSurveysSurveyIdMetadataRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSurveysRoute, getSurveysRouteHandler)
  .openapi(getSurveysSurveyIdInterviewsRoute, getSurveysSurveyIdInterviewsRouteHandler)
  .openapi(getSurveysSurveyIdMetadataRoute, getSurveysSurveyIdMetadataRouteHandler)

export default app
