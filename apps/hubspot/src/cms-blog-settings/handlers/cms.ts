import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdRoute,
  getCmsBlogSettings202609SettingsBlogIdRevisionsRoute,
  getCmsBlogSettings202609SettingsBlogIdRoute,
  getCmsBlogSettings202609SettingsRoute,
  postCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesRoute,
  putCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsBlogSettings202609SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogSettings202609SettingsBlogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogSettings202609SettingsBlogIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
