import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsPages202609LandingPagesMultiLanguageAttachToLangGroupRoute,
  postCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationRoute,
  postCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupRoute,
  postCmsPages202609LandingPagesMultiLanguageUpdateLanguagesRoute,
  postCmsPages202609SitePagesMultiLanguageAttachToLangGroupRoute,
  postCmsPages202609SitePagesMultiLanguageCreateLanguageVariationRoute,
  postCmsPages202609SitePagesMultiLanguageDetachFromLangGroupRoute,
  postCmsPages202609SitePagesMultiLanguageUpdateLanguagesRoute,
  putCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiLanguageHandler = app
  .openapi(postCmsPages202609LandingPagesMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
