import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSeldonNamespaceDeploymentApiV10FeedbackRoute,
  postSeldonNamespaceDeploymentApiV10PredictionsRoute,
} from '../routes'

export const postSeldonNamespaceDeploymentApiV10FeedbackRouteHandler: RouteHandler<
  typeof postSeldonNamespaceDeploymentApiV10FeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSeldonNamespaceDeploymentApiV10PredictionsRouteHandler: RouteHandler<
  typeof postSeldonNamespaceDeploymentApiV10PredictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
