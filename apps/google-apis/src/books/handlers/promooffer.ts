import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksV1PromoofferGetRoute,
  postBooksV1PromoofferAcceptRoute,
  postBooksV1PromoofferDismissRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promoofferHandler = app
  .openapi(postBooksV1PromoofferAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1PromoofferDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1PromoofferGetRoute, (c) => {
    throw new Error('Not implemented')
  })
