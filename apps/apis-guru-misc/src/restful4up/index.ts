import { OpenAPIHono } from '@hono/zod-openapi'
import {
  headCleanRoute,
  postApplyYaraRulesRoute,
  postEmulationOutputRoute,
  postGeneratePartialYaraRulesRoute,
  postUnpackRoute,
} from './routes'
import {
  headCleanRouteHandler,
  postApplyYaraRulesRouteHandler,
  postEmulationOutputRouteHandler,
  postGeneratePartialYaraRulesRouteHandler,
  postUnpackRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApplyYaraRulesRoute, postApplyYaraRulesRouteHandler)
  .openapi(headCleanRoute, headCleanRouteHandler)
  .openapi(postEmulationOutputRoute, postEmulationOutputRouteHandler)
  .openapi(postGeneratePartialYaraRulesRoute, postGeneratePartialYaraRulesRouteHandler)
  .openapi(postUnpackRoute, postUnpackRouteHandler)

export default app
