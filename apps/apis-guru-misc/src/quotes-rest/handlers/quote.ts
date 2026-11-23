import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuoteDislikeRoute,
  deleteQuoteImageBackgroundRoute,
  deleteQuoteImageFontRoute,
  deleteQuoteImageRoute,
  deleteQuoteLikeRoute,
  deleteQuoteRoute,
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
  patchQuoteRoute,
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
  putQuoteDislikeRoute,
  putQuoteImageRoute,
  putQuoteLikeRoute,
  putQuoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quoteHandler = app
  .openapi(deleteQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteAuthorsPopularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteAuthorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteCategoriesPopularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteCategoriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuoteDislikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteDislikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuoteDislikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuoteImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuoteImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuoteImageBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteImageBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteImageBackgroundListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteImageBackgroundSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteImageBackgroundTagsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteImageBackgroundTagsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuoteImageFontRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteImageFontRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteImageFontListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteImageFontSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteImageFontTagsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteImageFontTagsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteImageSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuoteLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuoteLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteTagsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteTagsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
