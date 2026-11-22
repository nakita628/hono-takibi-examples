import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1ItemsIdRoute,
  getApi1ItemsIdRoute,
  getApi1ItemsRoute,
  postApi1ItemsRoute,
  putApi1ItemsCodeUpsertRoute,
  putApi1ItemsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getApi1ItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ItemsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
