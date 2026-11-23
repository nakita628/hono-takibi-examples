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
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsBlogs202609AuthorsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609AuthorsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsBlogs202609PostsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609PostsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609PostsObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdDraftPushLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdDraftResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
