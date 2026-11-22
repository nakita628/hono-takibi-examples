import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsPages202609SitePagesObjectIdRoute,
  getCmsPages202609SitePagesObjectIdDraftRoute,
  getCmsPages202609SitePagesObjectIdRoute,
  getCmsPages202609SitePagesRoute,
  patchCmsPages202609SitePagesObjectIdDraftRoute,
  patchCmsPages202609SitePagesObjectIdRoute,
  postCmsPages202609SitePagesCloneRoute,
  postCmsPages202609SitePagesObjectIdDraftPushLiveRoute,
  postCmsPages202609SitePagesRoute,
  postCmsPages202609SitePagesScheduleRoute,
  putCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const websitePagesHandler = app
  .openapi(putCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsPages202609SitePagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609SitePagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609SitePagesObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesObjectIdDraftPushLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
