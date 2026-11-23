import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAttachedItemsAttachedItemIdRoute,
  postAttachedItemsAttachedItemIdDeleteRoute,
  postAttachedItemsAttachedItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachedItemsHandler = app
  .openapi(getAttachedItemsAttachedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachedItemsAttachedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachedItemsAttachedItemIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
