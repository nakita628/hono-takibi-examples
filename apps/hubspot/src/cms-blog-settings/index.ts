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
} from './routes'
import {
  getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdRouteHandler,
  getCmsBlogSettings202609SettingsBlogIdRevisionsRouteHandler,
  getCmsBlogSettings202609SettingsBlogIdRouteHandler,
  getCmsBlogSettings202609SettingsRouteHandler,
  postCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupRouteHandler,
  postCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationRouteHandler,
  postCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupRouteHandler,
  postCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesRouteHandler,
  putCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCmsBlogSettings202609SettingsRoute, getCmsBlogSettings202609SettingsRouteHandler)
  .openapi(
    postCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupRoute,
    postCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupRouteHandler,
  )
  .openapi(
    postCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationRoute,
    postCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationRouteHandler,
  )
  .openapi(
    postCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupRoute,
    postCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupRouteHandler,
  )
  .openapi(
    putCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryRoute,
    putCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryRouteHandler,
  )
  .openapi(
    postCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesRoute,
    postCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesRouteHandler,
  )
  .openapi(
    getCmsBlogSettings202609SettingsBlogIdRoute,
    getCmsBlogSettings202609SettingsBlogIdRouteHandler,
  )
  .openapi(
    getCmsBlogSettings202609SettingsBlogIdRevisionsRoute,
    getCmsBlogSettings202609SettingsBlogIdRevisionsRouteHandler,
  )
  .openapi(
    getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdRoute,
    getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdRouteHandler,
  )

export default app
