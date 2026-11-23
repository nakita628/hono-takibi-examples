import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postStatementsDownloadRoute,
  postStatementsListRoute,
  postStatementsRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statementsHandler = app
  .openapi(postStatementsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatementsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatementsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
