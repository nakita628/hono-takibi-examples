import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV0WebsetsWebsetItemsIdRoute,
  getV0WebsetsWebsetItemsIdRoute,
  getV0WebsetsWebsetItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getV0WebsetsWebsetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebsetsWebsetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsWebsetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
