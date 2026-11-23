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
} from './routes'
import {
  deleteCmsBlogs202609TagsObjectIdRouteHandler,
  getCmsBlogs202609AuthorsCursorQueryRouteHandler,
  getCmsBlogs202609AuthorsCursorRouteHandler,
  getCmsBlogs202609PostsCursorQueryRouteHandler,
  getCmsBlogs202609PostsCursorRouteHandler,
  getCmsBlogs202609TagsCursorQueryRouteHandler,
  getCmsBlogs202609TagsCursorRouteHandler,
  getCmsBlogs202609TagsObjectIdRouteHandler,
  getCmsBlogs202609TagsRouteHandler,
  patchCmsBlogs202609TagsObjectIdRouteHandler,
  postCmsBlogs202609TagsBatchArchiveRouteHandler,
  postCmsBlogs202609TagsBatchCreateRouteHandler,
  postCmsBlogs202609TagsBatchReadRouteHandler,
  postCmsBlogs202609TagsBatchUpdateRouteHandler,
  postCmsBlogs202609TagsMultiLanguageAttachToLangGroupRouteHandler,
  postCmsBlogs202609TagsMultiLanguageCreateLanguageVariationRouteHandler,
  postCmsBlogs202609TagsMultiLanguageDetachFromLangGroupRouteHandler,
  postCmsBlogs202609TagsMultiLanguageUpdateLanguagesRouteHandler,
  postCmsBlogs202609TagsRouteHandler,
  putCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCmsBlogs202609AuthorsCursorRoute, getCmsBlogs202609AuthorsCursorRouteHandler)
  .openapi(
    getCmsBlogs202609AuthorsCursorQueryRoute,
    getCmsBlogs202609AuthorsCursorQueryRouteHandler,
  )
  .openapi(getCmsBlogs202609PostsCursorRoute, getCmsBlogs202609PostsCursorRouteHandler)
  .openapi(getCmsBlogs202609PostsCursorQueryRoute, getCmsBlogs202609PostsCursorQueryRouteHandler)
  .openapi(getCmsBlogs202609TagsRoute, getCmsBlogs202609TagsRouteHandler)
  .openapi(postCmsBlogs202609TagsRoute, postCmsBlogs202609TagsRouteHandler)
  .openapi(postCmsBlogs202609TagsBatchArchiveRoute, postCmsBlogs202609TagsBatchArchiveRouteHandler)
  .openapi(postCmsBlogs202609TagsBatchCreateRoute, postCmsBlogs202609TagsBatchCreateRouteHandler)
  .openapi(postCmsBlogs202609TagsBatchReadRoute, postCmsBlogs202609TagsBatchReadRouteHandler)
  .openapi(postCmsBlogs202609TagsBatchUpdateRoute, postCmsBlogs202609TagsBatchUpdateRouteHandler)
  .openapi(getCmsBlogs202609TagsCursorRoute, getCmsBlogs202609TagsCursorRouteHandler)
  .openapi(getCmsBlogs202609TagsCursorQueryRoute, getCmsBlogs202609TagsCursorQueryRouteHandler)
  .openapi(
    postCmsBlogs202609TagsMultiLanguageAttachToLangGroupRoute,
    postCmsBlogs202609TagsMultiLanguageAttachToLangGroupRouteHandler,
  )
  .openapi(
    postCmsBlogs202609TagsMultiLanguageCreateLanguageVariationRoute,
    postCmsBlogs202609TagsMultiLanguageCreateLanguageVariationRouteHandler,
  )
  .openapi(
    postCmsBlogs202609TagsMultiLanguageDetachFromLangGroupRoute,
    postCmsBlogs202609TagsMultiLanguageDetachFromLangGroupRouteHandler,
  )
  .openapi(
    putCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryRoute,
    putCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryRouteHandler,
  )
  .openapi(
    postCmsBlogs202609TagsMultiLanguageUpdateLanguagesRoute,
    postCmsBlogs202609TagsMultiLanguageUpdateLanguagesRouteHandler,
  )
  .openapi(getCmsBlogs202609TagsObjectIdRoute, getCmsBlogs202609TagsObjectIdRouteHandler)
  .openapi(deleteCmsBlogs202609TagsObjectIdRoute, deleteCmsBlogs202609TagsObjectIdRouteHandler)
  .openapi(patchCmsBlogs202609TagsObjectIdRoute, patchCmsBlogs202609TagsObjectIdRouteHandler)

export default app
