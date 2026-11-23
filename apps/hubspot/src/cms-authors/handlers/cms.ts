import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsBlogs202609AuthorsObjectIdRoute,
  getCmsBlogs202609AuthorsObjectIdRoute,
  getCmsBlogs202609AuthorsRoute,
  patchCmsBlogs202609AuthorsObjectIdRoute,
  postCmsBlogs202609AuthorsBatchArchiveRoute,
  postCmsBlogs202609AuthorsBatchCreateRoute,
  postCmsBlogs202609AuthorsBatchReadRoute,
  postCmsBlogs202609AuthorsBatchUpdateRoute,
  postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesRoute,
  postCmsBlogs202609AuthorsRoute,
  putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsBlogs202609AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609AuthorsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsBlogs202609AuthorsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609AuthorsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
