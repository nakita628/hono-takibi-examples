import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSqlAsyncDeleteIdRoute,
  getSqlAsyncIdRoute,
  getSqlAsyncStatusIdRoute,
  getSqlRoute,
  getSqlTranslateRoute,
  postSqlCloseRoute,
  postSqlRoute,
  postSqlTranslateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sqlHandler = app
  .openapi(postSqlCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSqlAsyncDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlAsyncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlAsyncStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
