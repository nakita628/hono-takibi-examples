import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2TranslationKeysIDRoute,
  getApiV2TranslationKeysRoute,
  postApiV2TranslationKeysRoute,
  putApiV2TranslationKeysIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationKeysHandler = app
  .openapi(getApiV2TranslationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationKeysIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationKeysIDRoute, (c) => {
    throw new Error('Not implemented')
  })
