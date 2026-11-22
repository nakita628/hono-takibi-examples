import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminTranslationsEntitiesRoute,
  getAdminTranslationsRoute,
  getAdminTranslationsSettingsRoute,
  getAdminTranslationsStatisticsRoute,
  postAdminTranslationsBatchRoute,
  postAdminTranslationsSettingsBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationsHandler = app
  .openapi(getAdminTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTranslationsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTranslationsEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTranslationsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTranslationsSettingsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTranslationsStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
