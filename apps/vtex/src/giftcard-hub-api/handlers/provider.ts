import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGiftcardprovidersGiftCardProviderIDRoute,
  getGiftcardprovidersGiftCardProviderIdRoute,
  getGiftcardprovidersRoute,
  putGiftcardprovidersGiftCardProviderIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providerHandler = app
  .openapi(getGiftcardprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGiftcardprovidersGiftCardProviderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGiftcardprovidersGiftCardProviderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardprovidersGiftCardProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
