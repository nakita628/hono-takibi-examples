import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1AccountItemsIdRoute,
  getApi1AccountItemsIdRoute,
  getApi1AccountItemsRoute,
  postApi1AccountItemsRoute,
  putApi1AccountItemsCodeUpsertRoute,
  putApi1AccountItemsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountItemsHandler = app
  .openapi(getApi1AccountItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1AccountItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1AccountItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1AccountItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1AccountItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1AccountItemsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
