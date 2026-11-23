import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListsListRoute,
  getListsListRoute,
  getListsRoute,
  postListsRoute,
  putListsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
