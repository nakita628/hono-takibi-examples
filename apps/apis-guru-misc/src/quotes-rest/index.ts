import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQshowRoute,
  deleteQuoteDislikeRoute,
  deleteQuoteImageBackgroundRoute,
  deleteQuoteImageFontRoute,
  deleteQuoteImageRoute,
  deleteQuoteLikeRoute,
  deleteQuoteRoute,
  getQodCategoriesRoute,
  getQodLanguagesRoute,
  getQodRoute,
  getQshowListRoute,
  getQshowQuotesRoute,
  getQshowRoute,
  getQuoteAuthorsPopularRoute,
  getQuoteAuthorsSearchRoute,
  getQuoteCategoriesPopularRoute,
  getQuoteCategoriesSearchRoute,
  getQuoteImageBackgroundListRoute,
  getQuoteImageBackgroundSearchRoute,
  getQuoteImageFontListRoute,
  getQuoteImageFontSearchRoute,
  getQuoteImageRoute,
  getQuoteImageSearchRoute,
  getQuoteListRoute,
  getQuoteRandomRoute,
  getQuoteRoute,
  getQuoteSearchRoute,
  patchQshowRoute,
  patchQuoteRoute,
  postQshowQuotesAddRoute,
  postQshowQuotesRemoveRoute,
  postQuoteDislikeRoute,
  postQuoteImageBackgroundRoute,
  postQuoteImageBackgroundTagsAddRoute,
  postQuoteImageBackgroundTagsRemoveRoute,
  postQuoteImageFontRoute,
  postQuoteImageFontTagsAddRoute,
  postQuoteImageFontTagsRemoveRoute,
  postQuoteLikeRoute,
  postQuoteRoute,
  postQuoteTagsAddRoute,
  postQuoteTagsRemoveRoute,
  putQshowRoute,
  putQuoteDislikeRoute,
  putQuoteImageRoute,
  putQuoteLikeRoute,
  putQuoteRoute,
} from './routes'
import {
  deleteQshowRouteHandler,
  deleteQuoteDislikeRouteHandler,
  deleteQuoteImageBackgroundRouteHandler,
  deleteQuoteImageFontRouteHandler,
  deleteQuoteImageRouteHandler,
  deleteQuoteLikeRouteHandler,
  deleteQuoteRouteHandler,
  getQodCategoriesRouteHandler,
  getQodLanguagesRouteHandler,
  getQodRouteHandler,
  getQshowListRouteHandler,
  getQshowQuotesRouteHandler,
  getQshowRouteHandler,
  getQuoteAuthorsPopularRouteHandler,
  getQuoteAuthorsSearchRouteHandler,
  getQuoteCategoriesPopularRouteHandler,
  getQuoteCategoriesSearchRouteHandler,
  getQuoteImageBackgroundListRouteHandler,
  getQuoteImageBackgroundSearchRouteHandler,
  getQuoteImageFontListRouteHandler,
  getQuoteImageFontSearchRouteHandler,
  getQuoteImageRouteHandler,
  getQuoteImageSearchRouteHandler,
  getQuoteListRouteHandler,
  getQuoteRandomRouteHandler,
  getQuoteRouteHandler,
  getQuoteSearchRouteHandler,
  patchQshowRouteHandler,
  patchQuoteRouteHandler,
  postQshowQuotesAddRouteHandler,
  postQshowQuotesRemoveRouteHandler,
  postQuoteDislikeRouteHandler,
  postQuoteImageBackgroundRouteHandler,
  postQuoteImageBackgroundTagsAddRouteHandler,
  postQuoteImageBackgroundTagsRemoveRouteHandler,
  postQuoteImageFontRouteHandler,
  postQuoteImageFontTagsAddRouteHandler,
  postQuoteImageFontTagsRemoveRouteHandler,
  postQuoteLikeRouteHandler,
  postQuoteRouteHandler,
  postQuoteTagsAddRouteHandler,
  postQuoteTagsRemoveRouteHandler,
  putQshowRouteHandler,
  putQuoteDislikeRouteHandler,
  putQuoteImageRouteHandler,
  putQuoteLikeRouteHandler,
  putQuoteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getQodRoute, getQodRouteHandler)
  .openapi(getQodCategoriesRoute, getQodCategoriesRouteHandler)
  .openapi(getQodLanguagesRoute, getQodLanguagesRouteHandler)
  .openapi(deleteQshowRoute, deleteQshowRouteHandler)
  .openapi(getQshowRoute, getQshowRouteHandler)
  .openapi(patchQshowRoute, patchQshowRouteHandler)
  .openapi(putQshowRoute, putQshowRouteHandler)
  .openapi(getQshowListRoute, getQshowListRouteHandler)
  .openapi(getQshowQuotesRoute, getQshowQuotesRouteHandler)
  .openapi(postQshowQuotesAddRoute, postQshowQuotesAddRouteHandler)
  .openapi(postQshowQuotesRemoveRoute, postQshowQuotesRemoveRouteHandler)
  .openapi(deleteQuoteRoute, deleteQuoteRouteHandler)
  .openapi(getQuoteRoute, getQuoteRouteHandler)
  .openapi(patchQuoteRoute, patchQuoteRouteHandler)
  .openapi(postQuoteRoute, postQuoteRouteHandler)
  .openapi(putQuoteRoute, putQuoteRouteHandler)
  .openapi(getQuoteAuthorsPopularRoute, getQuoteAuthorsPopularRouteHandler)
  .openapi(getQuoteAuthorsSearchRoute, getQuoteAuthorsSearchRouteHandler)
  .openapi(getQuoteCategoriesPopularRoute, getQuoteCategoriesPopularRouteHandler)
  .openapi(getQuoteCategoriesSearchRoute, getQuoteCategoriesSearchRouteHandler)
  .openapi(deleteQuoteDislikeRoute, deleteQuoteDislikeRouteHandler)
  .openapi(postQuoteDislikeRoute, postQuoteDislikeRouteHandler)
  .openapi(putQuoteDislikeRoute, putQuoteDislikeRouteHandler)
  .openapi(deleteQuoteImageRoute, deleteQuoteImageRouteHandler)
  .openapi(getQuoteImageRoute, getQuoteImageRouteHandler)
  .openapi(putQuoteImageRoute, putQuoteImageRouteHandler)
  .openapi(deleteQuoteImageBackgroundRoute, deleteQuoteImageBackgroundRouteHandler)
  .openapi(postQuoteImageBackgroundRoute, postQuoteImageBackgroundRouteHandler)
  .openapi(getQuoteImageBackgroundListRoute, getQuoteImageBackgroundListRouteHandler)
  .openapi(getQuoteImageBackgroundSearchRoute, getQuoteImageBackgroundSearchRouteHandler)
  .openapi(postQuoteImageBackgroundTagsAddRoute, postQuoteImageBackgroundTagsAddRouteHandler)
  .openapi(postQuoteImageBackgroundTagsRemoveRoute, postQuoteImageBackgroundTagsRemoveRouteHandler)
  .openapi(deleteQuoteImageFontRoute, deleteQuoteImageFontRouteHandler)
  .openapi(postQuoteImageFontRoute, postQuoteImageFontRouteHandler)
  .openapi(getQuoteImageFontListRoute, getQuoteImageFontListRouteHandler)
  .openapi(getQuoteImageFontSearchRoute, getQuoteImageFontSearchRouteHandler)
  .openapi(postQuoteImageFontTagsAddRoute, postQuoteImageFontTagsAddRouteHandler)
  .openapi(postQuoteImageFontTagsRemoveRoute, postQuoteImageFontTagsRemoveRouteHandler)
  .openapi(getQuoteImageSearchRoute, getQuoteImageSearchRouteHandler)
  .openapi(deleteQuoteLikeRoute, deleteQuoteLikeRouteHandler)
  .openapi(postQuoteLikeRoute, postQuoteLikeRouteHandler)
  .openapi(putQuoteLikeRoute, putQuoteLikeRouteHandler)
  .openapi(getQuoteListRoute, getQuoteListRouteHandler)
  .openapi(getQuoteRandomRoute, getQuoteRandomRouteHandler)
  .openapi(getQuoteSearchRoute, getQuoteSearchRouteHandler)
  .openapi(postQuoteTagsAddRoute, postQuoteTagsAddRouteHandler)
  .openapi(postQuoteTagsRemoveRoute, postQuoteTagsRemoveRouteHandler)

export default app
