import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiArticlesMediaTypeExtensionRoute,
  getApiBlogMediaTypeExtensionRoute,
  getApiGlossaryMediaTypeExtensionRoute,
  getApiQuestionsMediaTypeExtensionRoute,
  getApiStatesMediaTypeExtensionRoute,
  getApiTopicsMediaTypeExtensionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiArticlesMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBlogMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGlossaryMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQuestionsMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatesMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTopicsMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
