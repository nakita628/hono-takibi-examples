import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2StringTranslationsRoute,
  getApiV2StringTranslationsStringIdLanguageIdRoute,
  putApiV2StringTranslationsBatchRoute,
  putApiV2StringTranslationsStringIdLanguageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stringTranslationsHandler = app
  .openapi(getApiV2StringTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StringTranslationsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StringTranslationsStringIdLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StringTranslationsStringIdLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
