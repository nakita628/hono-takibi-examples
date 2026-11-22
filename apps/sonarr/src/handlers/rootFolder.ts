import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3RootfolderIdRoute,
  getApiV3RootfolderIdRoute,
  getApiV3RootfolderRoute,
  postApiV3RootfolderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rootFolderHandler = app
  .openapi(postApiV3RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
