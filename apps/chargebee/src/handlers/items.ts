import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemsItemIdAttachedItemsRoute,
  getItemsItemIdItemEntitlementsRoute,
  getItemsItemIdRoute,
  getItemsRoute,
  postItemsItemIdAttachedItemsRoute,
  postItemsItemIdDeleteRoute,
  postItemsItemIdItemEntitlementsRoute,
  postItemsItemIdRoute,
  postItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdAttachedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdAttachedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdItemEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdItemEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
