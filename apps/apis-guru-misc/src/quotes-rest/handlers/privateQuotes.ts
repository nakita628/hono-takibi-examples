import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuoteRoute,
  getQuoteListRoute,
  patchQuoteRoute,
  postQuoteRoute,
  postQuoteTagsAddRoute,
  postQuoteTagsRemoveRoute,
  putQuoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privateQuotesHandler = app
  .openapi(deleteQuoteRoute, (c) => {
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
  .openapi(getQuoteListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteTagsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteTagsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
