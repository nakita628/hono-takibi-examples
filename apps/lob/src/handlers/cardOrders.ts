import { OpenAPIHono } from '@hono/zod-openapi'
import { getCardsCardIdOrdersRoute, postCardsCardIdOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const cardOrdersHandler = app
  .openapi(getCardsCardIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsCardIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
