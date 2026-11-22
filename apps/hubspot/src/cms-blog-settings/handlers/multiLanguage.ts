import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesRoute,
  putCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiLanguageHandler = app
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
