import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsPages202609LandingPagesFoldersObjectIdRoute,
  deleteCmsPages202609LandingPagesObjectIdRoute,
  deleteCmsPages202609SitePagesObjectIdRoute,
  getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRoute,
  getCmsPages202609LandingPagesFoldersObjectIdRevisionsRoute,
  getCmsPages202609LandingPagesFoldersObjectIdRoute,
  getCmsPages202609LandingPagesFoldersRoute,
  getCmsPages202609LandingPagesObjectIdDraftRoute,
  getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRoute,
  getCmsPages202609LandingPagesObjectIdRevisionsRoute,
  getCmsPages202609LandingPagesObjectIdRoute,
  getCmsPages202609LandingPagesRoute,
  getCmsPages202609SitePagesObjectIdDraftRoute,
  getCmsPages202609SitePagesObjectIdRevisionsRevisionIdRoute,
  getCmsPages202609SitePagesObjectIdRevisionsRoute,
  getCmsPages202609SitePagesObjectIdRoute,
  getCmsPages202609SitePagesRoute,
  patchCmsPages202609LandingPagesFoldersObjectIdRoute,
  patchCmsPages202609LandingPagesObjectIdDraftRoute,
  patchCmsPages202609LandingPagesObjectIdRoute,
  patchCmsPages202609SitePagesObjectIdDraftRoute,
  patchCmsPages202609SitePagesObjectIdRoute,
  postCmsPages202609LandingPagesAbTestCreateVariationRoute,
  postCmsPages202609LandingPagesAbTestEndRoute,
  postCmsPages202609LandingPagesAbTestRerunRoute,
  postCmsPages202609LandingPagesBatchArchiveRoute,
  postCmsPages202609LandingPagesBatchCreateRoute,
  postCmsPages202609LandingPagesBatchReadRoute,
  postCmsPages202609LandingPagesBatchUpdateRoute,
  postCmsPages202609LandingPagesCloneRoute,
  postCmsPages202609LandingPagesFoldersBatchArchiveRoute,
  postCmsPages202609LandingPagesFoldersBatchCreateRoute,
  postCmsPages202609LandingPagesFoldersBatchReadRoute,
  postCmsPages202609LandingPagesFoldersBatchUpdateRoute,
  postCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRoute,
  postCmsPages202609LandingPagesFoldersRoute,
  postCmsPages202609LandingPagesMultiLanguageAttachToLangGroupRoute,
  postCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationRoute,
  postCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupRoute,
  postCmsPages202609LandingPagesMultiLanguageUpdateLanguagesRoute,
  postCmsPages202609LandingPagesObjectIdDraftPushLiveRoute,
  postCmsPages202609LandingPagesObjectIdDraftResetRoute,
  postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreRoute,
  postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRoute,
  postCmsPages202609LandingPagesRoute,
  postCmsPages202609LandingPagesScheduleRoute,
  postCmsPages202609SitePagesAbTestCreateVariationRoute,
  postCmsPages202609SitePagesAbTestEndRoute,
  postCmsPages202609SitePagesAbTestRerunRoute,
  postCmsPages202609SitePagesBatchArchiveRoute,
  postCmsPages202609SitePagesBatchCreateRoute,
  postCmsPages202609SitePagesBatchReadRoute,
  postCmsPages202609SitePagesBatchUpdateRoute,
  postCmsPages202609SitePagesCloneRoute,
  postCmsPages202609SitePagesMultiLanguageAttachToLangGroupRoute,
  postCmsPages202609SitePagesMultiLanguageCreateLanguageVariationRoute,
  postCmsPages202609SitePagesMultiLanguageDetachFromLangGroupRoute,
  postCmsPages202609SitePagesMultiLanguageUpdateLanguagesRoute,
  postCmsPages202609SitePagesObjectIdDraftPushLiveRoute,
  postCmsPages202609SitePagesObjectIdDraftResetRoute,
  postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreRoute,
  postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftRoute,
  postCmsPages202609SitePagesRoute,
  postCmsPages202609SitePagesScheduleRoute,
  putCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryRoute,
  putCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsPages202609LandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesAbTestCreateVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesAbTestEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesAbTestRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesFoldersObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsPages202609LandingPagesFoldersObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609LandingPagesFoldersObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesFoldersObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsPages202609LandingPagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609LandingPagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609LandingPagesObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdDraftPushLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdDraftResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesAbTestCreateVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesAbTestEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesAbTestRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesCloneRoute, (c) => {
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
  .openapi(postCmsPages202609SitePagesObjectIdDraftResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
