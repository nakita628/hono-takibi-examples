import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemsItemIdMetadataEditorRoute,
  postItemsItemIdContentTypeRoute,
  postItemsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemUpdateHandler = app
  .openapi(postItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdMetadataEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
