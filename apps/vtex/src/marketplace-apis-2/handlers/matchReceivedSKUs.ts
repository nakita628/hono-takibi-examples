import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putSuggestionsMatchesActionActionNameRoute,
  putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matchReceivedSKUsHandler = app
  .openapi(putSuggestionsMatchesActionActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRoute, (c) => {
    throw new Error('Not implemented')
  })
