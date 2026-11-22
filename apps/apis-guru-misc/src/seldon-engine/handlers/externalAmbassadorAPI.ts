import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSeldonNamespaceDeploymentApiV10FeedbackRoute,
  postSeldonNamespaceDeploymentApiV10PredictionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalAmbassadorAPIHandler = app
  .openapi(postSeldonNamespaceDeploymentApiV10FeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeldonNamespaceDeploymentApiV10PredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
