import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountChildAccountsEuuIdRoute,
  getApiVersionAccountChildAccountsRoute,
  postApiVersionAccountChildAccountsEuuIdTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const childAccountsHandler = app
  .openapi(getApiVersionAccountChildAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountChildAccountsEuuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountChildAccountsEuuIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
