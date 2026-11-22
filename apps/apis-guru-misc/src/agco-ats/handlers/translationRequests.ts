import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2TranslationRequestsIdRoute,
  getApiV2TranslationRequestsRoute,
  postApiV2TranslationRequestsRoute,
  putApiV2TranslationRequestsIdRoute,
  putApiV2TranslationRequestsIdStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationRequestsHandler = app
  .openapi(getApiV2TranslationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationRequestsIdStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
