import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSeldonNamespaceDeploymentApiV10FeedbackRoute,
  postSeldonNamespaceDeploymentApiV10PredictionsRoute,
} from './routes'
import {
  postSeldonNamespaceDeploymentApiV10FeedbackRouteHandler,
  postSeldonNamespaceDeploymentApiV10PredictionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postSeldonNamespaceDeploymentApiV10FeedbackRoute,
    postSeldonNamespaceDeploymentApiV10FeedbackRouteHandler,
  )
  .openapi(
    postSeldonNamespaceDeploymentApiV10PredictionsRoute,
    postSeldonNamespaceDeploymentApiV10PredictionsRouteHandler,
  )

export default app
