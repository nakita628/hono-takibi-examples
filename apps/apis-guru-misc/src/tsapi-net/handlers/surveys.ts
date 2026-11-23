import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSurveysRoute,
  getSurveysSurveyIdInterviewsRoute,
  getSurveysSurveyIdMetadataRoute,
} from '../routes'

export const getSurveysRouteHandler: RouteHandler<typeof getSurveysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSurveysSurveyIdInterviewsRouteHandler: RouteHandler<
  typeof getSurveysSurveyIdInterviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSurveysSurveyIdMetadataRouteHandler: RouteHandler<
  typeof getSurveysSurveyIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
