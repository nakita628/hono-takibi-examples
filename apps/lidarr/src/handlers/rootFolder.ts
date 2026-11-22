import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RootfolderIdRoute,
  getApiV1RootfolderIdRoute,
  getApiV1RootfolderRoute,
  postApiV1RootfolderRoute,
  putApiV1RootfolderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rootFolderHandler = app
  .openapi(getApiV1RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
