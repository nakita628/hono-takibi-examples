import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListsListIdRoute,
  getListsListIdRoute,
  getListsRoute,
  postListsRoute,
  putListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
