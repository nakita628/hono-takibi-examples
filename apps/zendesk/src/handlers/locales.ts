import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2LocalesAgentRoute,
  getApiV2LocalesCurrentRoute,
  getApiV2LocalesDetectBestLocaleRoute,
  getApiV2LocalesLocaleIdRoute,
  getApiV2LocalesPublicRoute,
  getApiV2LocalesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const localesHandler = app
  .openapi(getApiV2LocalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesLocaleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesDetectBestLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
