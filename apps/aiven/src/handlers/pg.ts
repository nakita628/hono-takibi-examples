import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPgDatabaseMetadataQueryRoute,
  postPgQueryMetadataValidateRoute,
  postPgQueryValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pgHandler = app
  .openapi(getPgDatabaseMetadataQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPgQueryMetadataValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPgQueryValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
