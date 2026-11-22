import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TranslationSetAttributesIDRoute,
  getApiV2TranslationSetsIDAttributesRoute,
  getApiV2TranslationSetsIDRoute,
  getApiV2TranslationSetsIDSourceStringsRoute,
  getApiV2TranslationSetsIDStatisticsRoute,
  getApiV2TranslationSetsIDStringsRoute,
  getApiV2TranslationSetsRoute,
  postApiV2TranslationSetsIDAttributesBatchRoute,
  postApiV2TranslationSetsIDAttributesRoute,
  putApiV2TranslationSetAttributesBatchRoute,
  putApiV2TranslationSetAttributesIDRoute,
  putApiV2TranslationSetsIDRoute,
  putApiV2TranslationSetsIDStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationSetsHandler = app
  .openapi(putApiV2TranslationSetAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TranslationSetAttributesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationSetAttributesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationSetsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationSetsIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationSetsIDAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDSourceStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationSetsIDStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
