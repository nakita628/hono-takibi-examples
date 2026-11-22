import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuoteDislikeRoute,
  deleteQuoteLikeRoute,
  getQuoteAuthorsPopularRoute,
  getQuoteAuthorsSearchRoute,
  getQuoteCategoriesPopularRoute,
  getQuoteCategoriesSearchRoute,
  getQuoteRandomRoute,
  getQuoteRoute,
  getQuoteSearchRoute,
  postQuoteDislikeRoute,
  postQuoteLikeRoute,
  putQuoteDislikeRoute,
  putQuoteLikeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quoteHandler = app
  .openapi(getQuoteRoute, (c) => {
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
  .openapi(deleteQuoteLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuoteLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
