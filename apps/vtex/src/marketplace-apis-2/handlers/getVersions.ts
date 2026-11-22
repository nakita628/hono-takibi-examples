import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSuggestionsSellerIdSellerskuidVersionsRoute,
  getSuggestionsSellerIdSellerskuidVersionsVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const getVersionsHandler = app
  .openapi(getSuggestionsSellerIdSellerskuidVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsSellerIdSellerskuidVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
