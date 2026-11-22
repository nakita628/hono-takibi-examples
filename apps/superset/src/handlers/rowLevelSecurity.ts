import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RowlevelsecurityIndexRoute,
  deleteApiV1RowlevelsecurityPkRoute,
  getApiV1RowlevelsecurityIndexRoute,
  getApiV1RowlevelsecurityInfoRoute,
  getApiV1RowlevelsecurityPkRoute,
  getApiV1RowlevelsecurityRelatedColumnNameRoute,
  postApiV1RowlevelsecurityIndexRoute,
  putApiV1RowlevelsecurityPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rowLevelSecurityHandler = app
  .openapi(deleteApiV1RowlevelsecurityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RowlevelsecurityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RowlevelsecurityPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RowlevelsecurityPkRoute, (c) => {
    throw new Error('Not implemented')
  })
