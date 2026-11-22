import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsHealthResourceCollectionResourceCollectionTypeRoute,
  getAccountsHealthRoute,
  postAccountsOverviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsHealthResourceCollectionResourceCollectionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
