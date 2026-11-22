import { OpenAPIHono } from '@hono/zod-openapi'
import { getCardordersIdItemsRoute, getCardordersRoute } from '../routes'

const app = new OpenAPIHono()

export const cardOrdersHandler = app
  .openapi(getCardordersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardordersIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
