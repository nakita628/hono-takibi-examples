import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetOnboardingUrlRoute, postGetPciQuestionnaireUrlRoute } from './routes'
import {
  postGetOnboardingUrlRouteHandler,
  postGetPciQuestionnaireUrlRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGetOnboardingUrlRoute, postGetOnboardingUrlRouteHandler)
  .openapi(postGetPciQuestionnaireUrlRoute, postGetPciQuestionnaireUrlRouteHandler)

export default app
