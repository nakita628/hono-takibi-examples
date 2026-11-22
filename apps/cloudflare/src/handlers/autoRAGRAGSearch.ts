import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountsAccountIdAutoragRagsIdAiSearchRoute,
  postAccountsAccountIdAutoragRagsIdSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoRAGRAGSearchHandler = app
  .openapi(postAccountsAccountIdAutoragRagsIdAiSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAutoragRagsIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
