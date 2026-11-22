import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiItemizableTypeItemizableIdLineItemsIdRoute,
  getApiItemizableTypeItemizableIdLineItemsRoute,
  patchApiItemizableTypeItemizableIdLineItemsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lineItemHandler = app
  .openapi(getApiItemizableTypeItemizableIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiItemizableTypeItemizableIdLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiItemizableTypeItemizableIdLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
