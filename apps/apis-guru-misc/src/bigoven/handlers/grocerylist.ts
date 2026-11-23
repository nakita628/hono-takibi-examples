import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGrocerylistItemGuidRoute,
  deleteGrocerylistRoute,
  getGrocerylistRoute,
  postGrocerylistClearcheckedlinesRoute,
  postGrocerylistDepartmentRoute,
  postGrocerylistItemRoute,
  postGrocerylistLineRoute,
  postGrocerylistRecipeRoute,
  postGrocerylistSyncRoute,
  putGrocerylistItemGuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const grocerylistHandler = app
  .openapi(deleteGrocerylistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrocerylistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrocerylistClearcheckedlinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrocerylistDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrocerylistItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGrocerylistItemGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGrocerylistItemGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrocerylistLineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrocerylistRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrocerylistSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
