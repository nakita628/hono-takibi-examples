import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1JobsVoiceTranslateJobIdRoute,
  getV1QualityEvaluationsJobIdRoute,
  postV1JobsVoiceTranslateRoute,
} from '../routes'

export const postV1JobsVoiceTranslateRouteHandler: RouteHandler<
  typeof postV1JobsVoiceTranslateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JobsVoiceTranslateJobIdRouteHandler: RouteHandler<
  typeof getV1JobsVoiceTranslateJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QualityEvaluationsJobIdRouteHandler: RouteHandler<
  typeof getV1QualityEvaluationsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
