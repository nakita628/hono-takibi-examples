import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemsIdChildrenRoute,
  getItemsIdRelatedRoute,
  getItemsIdRoute,
  getItemsIdVideosRoute,
  getItemsItemIdNextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
