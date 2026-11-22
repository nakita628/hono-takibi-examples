import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersUserIdExportsIdRoute,
  getApiV1UsersUserIdExportsRoute,
  postApiV1UsersUserIdExportsRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userExportsHandler = app
  .openapi(postApiV1UsersUserIdExportsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
