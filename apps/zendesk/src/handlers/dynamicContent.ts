import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DynamicContentItemsDynamicContentItemIdRoute,
  getApiV2DynamicContentItemsDynamicContentItemIdRoute,
  getApiV2DynamicContentItemsRoute,
  getApiV2DynamicContentItemsShowManyRoute,
  postApiV2DynamicContentItemsRoute,
  putApiV2DynamicContentItemsDynamicContentItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicContentHandler = app
  .openapi(getApiV2DynamicContentItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DynamicContentItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DynamicContentItemsDynamicContentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DynamicContentItemsDynamicContentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DynamicContentItemsDynamicContentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DynamicContentItemsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
