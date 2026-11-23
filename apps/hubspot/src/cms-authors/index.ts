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
} from './routes'
import {
  deleteCmsBlogs202609AuthorsObjectIdRouteHandler,
  getCmsBlogs202609AuthorsObjectIdRouteHandler,
  getCmsBlogs202609AuthorsRouteHandler,
  patchCmsBlogs202609AuthorsObjectIdRouteHandler,
  postCmsBlogs202609AuthorsBatchArchiveRouteHandler,
  postCmsBlogs202609AuthorsBatchCreateRouteHandler,
  postCmsBlogs202609AuthorsBatchReadRouteHandler,
  postCmsBlogs202609AuthorsBatchUpdateRouteHandler,
  postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupRouteHandler,
  postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationRouteHandler,
  postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupRouteHandler,
  postCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesRouteHandler,
  postCmsBlogs202609AuthorsRouteHandler,
  putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCmsBlogs202609AuthorsRoute, getCmsBlogs202609AuthorsRouteHandler)
  .openapi(postCmsBlogs202609AuthorsRoute, postCmsBlogs202609AuthorsRouteHandler)
  .openapi(
    postCmsBlogs202609AuthorsBatchArchiveRoute,
    postCmsBlogs202609AuthorsBatchArchiveRouteHandler,
  )
  .openapi(
    postCmsBlogs202609AuthorsBatchCreateRoute,
    postCmsBlogs202609AuthorsBatchCreateRouteHandler,
  )
  .openapi(postCmsBlogs202609AuthorsBatchReadRoute, postCmsBlogs202609AuthorsBatchReadRouteHandler)
  .openapi(
    postCmsBlogs202609AuthorsBatchUpdateRoute,
    postCmsBlogs202609AuthorsBatchUpdateRouteHandler,
  )
  .openapi(
    postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupRoute,
    postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupRouteHandler,
  )
  .openapi(
    postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationRoute,
    postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationRouteHandler,
  )
  .openapi(
    postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupRoute,
    postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupRouteHandler,
  )
  .openapi(
    putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryRoute,
    putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryRouteHandler,
  )
  .openapi(
    postCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesRoute,
    postCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesRouteHandler,
  )
  .openapi(getCmsBlogs202609AuthorsObjectIdRoute, getCmsBlogs202609AuthorsObjectIdRouteHandler)
  .openapi(
    deleteCmsBlogs202609AuthorsObjectIdRoute,
    deleteCmsBlogs202609AuthorsObjectIdRouteHandler,
  )
  .openapi(patchCmsBlogs202609AuthorsObjectIdRoute, patchCmsBlogs202609AuthorsObjectIdRouteHandler)

export default app
