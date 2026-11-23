import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCardCardIdRoute, getCardRoute, postCardRoute, putCardCardIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cardHandler = app
  .openapi(postCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
