import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrderLineItemsItemIdRoute,
  postV1OrderLineItemsBulkRoute,
  putV1OrderLineItemsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderLineItemsHandler = app
  .openapi(postV1OrderLineItemsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrderLineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrderLineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
