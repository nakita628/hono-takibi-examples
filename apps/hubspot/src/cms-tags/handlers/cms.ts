import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsBlogs202609TagsObjectIdRoute,
  getCmsBlogs202609AuthorsCursorQueryRoute,
  getCmsBlogs202609AuthorsCursorRoute,
  getCmsBlogs202609PostsCursorQueryRoute,
  getCmsBlogs202609PostsCursorRoute,
  getCmsBlogs202609TagsCursorQueryRoute,
  getCmsBlogs202609TagsCursorRoute,
  getCmsBlogs202609TagsObjectIdRoute,
  getCmsBlogs202609TagsRoute,
  patchCmsBlogs202609TagsObjectIdRoute,
  postCmsBlogs202609TagsBatchArchiveRoute,
  postCmsBlogs202609TagsBatchCreateRoute,
  postCmsBlogs202609TagsBatchReadRoute,
  postCmsBlogs202609TagsBatchUpdateRoute,
  postCmsBlogs202609TagsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogs202609TagsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogs202609TagsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogs202609TagsMultiLanguageUpdateLanguagesRoute,
  postCmsBlogs202609TagsRoute,
  putCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsBlogs202609AuthorsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609AuthorsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsBlogs202609TagsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609TagsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
