import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsBlogs202609PostsObjectIdRoute,
  getCmsBlogs202609AuthorsCursorQueryRoute,
  getCmsBlogs202609AuthorsCursorRoute,
  getCmsBlogs202609PostsCursorQueryRoute,
  getCmsBlogs202609PostsCursorRoute,
  getCmsBlogs202609PostsObjectIdDraftRoute,
  getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRoute,
  getCmsBlogs202609PostsObjectIdRevisionsRoute,
  getCmsBlogs202609PostsObjectIdRoute,
  getCmsBlogs202609PostsRoute,
  getCmsBlogs202609TagsCursorQueryRoute,
  getCmsBlogs202609TagsCursorRoute,
  patchCmsBlogs202609PostsObjectIdDraftRoute,
  patchCmsBlogs202609PostsObjectIdRoute,
  postCmsBlogs202609PostsBatchArchiveRoute,
  postCmsBlogs202609PostsBatchCreateRoute,
  postCmsBlogs202609PostsBatchReadRoute,
  postCmsBlogs202609PostsBatchUpdateRoute,
  postCmsBlogs202609PostsCloneRoute,
  postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRoute,
  postCmsBlogs202609PostsObjectIdDraftPushLiveRoute,
  postCmsBlogs202609PostsObjectIdDraftResetRoute,
  postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRoute,
  postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRoute,
  postCmsBlogs202609PostsRoute,
  postCmsBlogs202609PostsScheduleRoute,
  putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRoute,
} from './routes'
import {
  deleteCmsBlogs202609PostsObjectIdRouteHandler,
  getCmsBlogs202609AuthorsCursorQueryRouteHandler,
  getCmsBlogs202609AuthorsCursorRouteHandler,
  getCmsBlogs202609PostsCursorQueryRouteHandler,
  getCmsBlogs202609PostsCursorRouteHandler,
  getCmsBlogs202609PostsObjectIdDraftRouteHandler,
  getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRouteHandler,
  getCmsBlogs202609PostsObjectIdRevisionsRouteHandler,
  getCmsBlogs202609PostsObjectIdRouteHandler,
  getCmsBlogs202609PostsRouteHandler,
  getCmsBlogs202609TagsCursorQueryRouteHandler,
  getCmsBlogs202609TagsCursorRouteHandler,
  patchCmsBlogs202609PostsObjectIdDraftRouteHandler,
  patchCmsBlogs202609PostsObjectIdRouteHandler,
  postCmsBlogs202609PostsBatchArchiveRouteHandler,
  postCmsBlogs202609PostsBatchCreateRouteHandler,
  postCmsBlogs202609PostsBatchReadRouteHandler,
  postCmsBlogs202609PostsBatchUpdateRouteHandler,
  postCmsBlogs202609PostsCloneRouteHandler,
  postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRouteHandler,
  postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRouteHandler,
  postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRouteHandler,
  postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRouteHandler,
  postCmsBlogs202609PostsObjectIdDraftPushLiveRouteHandler,
  postCmsBlogs202609PostsObjectIdDraftResetRouteHandler,
  postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRouteHandler,
  postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRouteHandler,
  postCmsBlogs202609PostsRouteHandler,
  postCmsBlogs202609PostsScheduleRouteHandler,
  putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCmsBlogs202609AuthorsCursorRoute, getCmsBlogs202609AuthorsCursorRouteHandler)
  .openapi(
    getCmsBlogs202609AuthorsCursorQueryRoute,
    getCmsBlogs202609AuthorsCursorQueryRouteHandler,
  )
  .openapi(getCmsBlogs202609PostsRoute, getCmsBlogs202609PostsRouteHandler)
  .openapi(postCmsBlogs202609PostsRoute, postCmsBlogs202609PostsRouteHandler)
  .openapi(
    postCmsBlogs202609PostsBatchArchiveRoute,
    postCmsBlogs202609PostsBatchArchiveRouteHandler,
  )
  .openapi(postCmsBlogs202609PostsBatchCreateRoute, postCmsBlogs202609PostsBatchCreateRouteHandler)
  .openapi(postCmsBlogs202609PostsBatchReadRoute, postCmsBlogs202609PostsBatchReadRouteHandler)
  .openapi(postCmsBlogs202609PostsBatchUpdateRoute, postCmsBlogs202609PostsBatchUpdateRouteHandler)
  .openapi(postCmsBlogs202609PostsCloneRoute, postCmsBlogs202609PostsCloneRouteHandler)
  .openapi(getCmsBlogs202609PostsCursorRoute, getCmsBlogs202609PostsCursorRouteHandler)
  .openapi(getCmsBlogs202609PostsCursorQueryRoute, getCmsBlogs202609PostsCursorQueryRouteHandler)
  .openapi(
    postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRoute,
    postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRouteHandler,
  )
  .openapi(
    postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRoute,
    postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRouteHandler,
  )
  .openapi(
    postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRoute,
    postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRouteHandler,
  )
  .openapi(
    putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRoute,
    putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRouteHandler,
  )
  .openapi(
    postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRoute,
    postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRouteHandler,
  )
  .openapi(postCmsBlogs202609PostsScheduleRoute, postCmsBlogs202609PostsScheduleRouteHandler)
  .openapi(getCmsBlogs202609PostsObjectIdRoute, getCmsBlogs202609PostsObjectIdRouteHandler)
  .openapi(deleteCmsBlogs202609PostsObjectIdRoute, deleteCmsBlogs202609PostsObjectIdRouteHandler)
  .openapi(patchCmsBlogs202609PostsObjectIdRoute, patchCmsBlogs202609PostsObjectIdRouteHandler)
  .openapi(
    getCmsBlogs202609PostsObjectIdDraftRoute,
    getCmsBlogs202609PostsObjectIdDraftRouteHandler,
  )
  .openapi(
    patchCmsBlogs202609PostsObjectIdDraftRoute,
    patchCmsBlogs202609PostsObjectIdDraftRouteHandler,
  )
  .openapi(
    postCmsBlogs202609PostsObjectIdDraftPushLiveRoute,
    postCmsBlogs202609PostsObjectIdDraftPushLiveRouteHandler,
  )
  .openapi(
    postCmsBlogs202609PostsObjectIdDraftResetRoute,
    postCmsBlogs202609PostsObjectIdDraftResetRouteHandler,
  )
  .openapi(
    getCmsBlogs202609PostsObjectIdRevisionsRoute,
    getCmsBlogs202609PostsObjectIdRevisionsRouteHandler,
  )
  .openapi(
    getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRoute,
    getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(
    postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRoute,
    postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRouteHandler,
  )
  .openapi(
    postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRoute,
    postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRouteHandler,
  )
  .openapi(getCmsBlogs202609TagsCursorRoute, getCmsBlogs202609TagsCursorRouteHandler)
  .openapi(getCmsBlogs202609TagsCursorQueryRoute, getCmsBlogs202609TagsCursorQueryRouteHandler)

export default app
