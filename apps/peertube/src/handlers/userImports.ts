import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersUserIdImportsImportResumableRoute,
  getApiV1UsersUserIdImportsLatestRoute,
  postApiV1UsersUserIdImportsImportResumableRoute,
  putApiV1UsersUserIdImportsImportResumableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userImportsHandler = app
  .openapi(postApiV1UsersUserIdImportsImportResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersUserIdImportsImportResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdImportsImportResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdImportsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
