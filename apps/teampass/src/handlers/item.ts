import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemDeleteRoute,
  getItemAllTagsRoute,
  getItemChangesRoute,
  getItemFindByUrlRoute,
  getItemGetOtpRoute,
  getItemGetRoute,
  getItemInFoldersRoute,
  postItemCreateRoute,
  putItemUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemHandler = app
  .openapi(getItemGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemInFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemFindByUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemGetOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemAllTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
