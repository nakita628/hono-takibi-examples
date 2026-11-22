import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuoteImageBackgroundRoute,
  deleteQuoteImageFontRoute,
  deleteQuoteImageRoute,
  getQuoteImageBackgroundListRoute,
  getQuoteImageBackgroundSearchRoute,
  getQuoteImageFontListRoute,
  getQuoteImageFontSearchRoute,
  getQuoteImageRoute,
  getQuoteImageSearchRoute,
  postQuoteImageBackgroundRoute,
  postQuoteImageBackgroundTagsAddRoute,
  postQuoteImageBackgroundTagsRemoveRoute,
  postQuoteImageFontRoute,
  postQuoteImageFontTagsAddRoute,
  postQuoteImageFontTagsRemoveRoute,
  putQuoteImageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quoteImagesHandler = app
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
