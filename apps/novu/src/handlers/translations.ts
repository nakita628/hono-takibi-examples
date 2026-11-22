import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2TranslationsResourceTypeResourceIdLocaleRoute,
  deleteV2TranslationsResourceTypeResourceIdRoute,
  getV2TranslationsGroupResourceTypeResourceIdRoute,
  getV2TranslationsMasterJsonRoute,
  getV2TranslationsResourceTypeResourceIdLocaleRoute,
  postV2TranslationsMasterJsonRoute,
  postV2TranslationsMasterJsonUploadRoute,
  postV2TranslationsRoute,
  postV2TranslationsUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationsHandler = app
  .openapi(postV2TranslationsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TranslationsMasterJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslationsMasterJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslationsMasterJsonUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TranslationsGroupResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TranslationsResourceTypeResourceIdLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TranslationsResourceTypeResourceIdLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TranslationsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
