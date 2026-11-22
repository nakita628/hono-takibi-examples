import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2LanguageIdIndexRoute,
  getApiV2LanguageIndexRoute,
  getApiV2MetaIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const utilityHandler = app
  .openapi(getApiV2MetaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
