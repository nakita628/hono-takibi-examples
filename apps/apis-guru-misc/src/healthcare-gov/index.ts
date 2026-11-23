import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiArticlesMediaTypeExtensionRoute,
  getApiBlogMediaTypeExtensionRoute,
  getApiGlossaryMediaTypeExtensionRoute,
  getApiQuestionsMediaTypeExtensionRoute,
  getApiStatesMediaTypeExtensionRoute,
  getApiTopicsMediaTypeExtensionRoute,
  getBlogPageNameMediaTypeExtensionRoute,
  getEsBlogPageNameMediaTypeExtensionRoute,
  getEsGlossaryPageNameMediaTypeExtensionRoute,
  getEsPageNameMediaTypeExtensionRoute,
  getEsQuestionPageNameMediaTypeExtensionRoute,
  getEsStateNameMediaTypeExtensionRoute,
  getGlossaryPageNameMediaTypeExtensionRoute,
  getPageNameMediaTypeExtensionRoute,
  getQuestionPageNameMediaTypeExtensionRoute,
  getStateNameMediaTypeExtensionRoute,
} from './routes'
import {
  getApiArticlesMediaTypeExtensionRouteHandler,
  getApiBlogMediaTypeExtensionRouteHandler,
  getApiGlossaryMediaTypeExtensionRouteHandler,
  getApiQuestionsMediaTypeExtensionRouteHandler,
  getApiStatesMediaTypeExtensionRouteHandler,
  getApiTopicsMediaTypeExtensionRouteHandler,
  getBlogPageNameMediaTypeExtensionRouteHandler,
  getEsBlogPageNameMediaTypeExtensionRouteHandler,
  getEsGlossaryPageNameMediaTypeExtensionRouteHandler,
  getEsPageNameMediaTypeExtensionRouteHandler,
  getEsQuestionPageNameMediaTypeExtensionRouteHandler,
  getEsStateNameMediaTypeExtensionRouteHandler,
  getGlossaryPageNameMediaTypeExtensionRouteHandler,
  getPageNameMediaTypeExtensionRouteHandler,
  getQuestionPageNameMediaTypeExtensionRouteHandler,
  getStateNameMediaTypeExtensionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiArticlesMediaTypeExtensionRoute, getApiArticlesMediaTypeExtensionRouteHandler)
  .openapi(getApiBlogMediaTypeExtensionRoute, getApiBlogMediaTypeExtensionRouteHandler)
  .openapi(getApiGlossaryMediaTypeExtensionRoute, getApiGlossaryMediaTypeExtensionRouteHandler)
  .openapi(getApiQuestionsMediaTypeExtensionRoute, getApiQuestionsMediaTypeExtensionRouteHandler)
  .openapi(getApiStatesMediaTypeExtensionRoute, getApiStatesMediaTypeExtensionRouteHandler)
  .openapi(getApiTopicsMediaTypeExtensionRoute, getApiTopicsMediaTypeExtensionRouteHandler)
  .openapi(getBlogPageNameMediaTypeExtensionRoute, getBlogPageNameMediaTypeExtensionRouteHandler)
  .openapi(
    getEsBlogPageNameMediaTypeExtensionRoute,
    getEsBlogPageNameMediaTypeExtensionRouteHandler,
  )
  .openapi(
    getEsGlossaryPageNameMediaTypeExtensionRoute,
    getEsGlossaryPageNameMediaTypeExtensionRouteHandler,
  )
  .openapi(
    getEsQuestionPageNameMediaTypeExtensionRoute,
    getEsQuestionPageNameMediaTypeExtensionRouteHandler,
  )
  .openapi(getEsPageNameMediaTypeExtensionRoute, getEsPageNameMediaTypeExtensionRouteHandler)
  .openapi(getEsStateNameMediaTypeExtensionRoute, getEsStateNameMediaTypeExtensionRouteHandler)
  .openapi(
    getGlossaryPageNameMediaTypeExtensionRoute,
    getGlossaryPageNameMediaTypeExtensionRouteHandler,
  )
  .openapi(
    getQuestionPageNameMediaTypeExtensionRoute,
    getQuestionPageNameMediaTypeExtensionRouteHandler,
  )
  .openapi(getPageNameMediaTypeExtensionRoute, getPageNameMediaTypeExtensionRouteHandler)
  .openapi(getStateNameMediaTypeExtensionRoute, getStateNameMediaTypeExtensionRouteHandler)

export default app
