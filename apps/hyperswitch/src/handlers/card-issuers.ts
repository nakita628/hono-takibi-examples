import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCardIssuersIdRoute,
  getCardIssuersRoute,
  postCardIssuersRoute,
  putCardIssuersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardIssuersHandler = app
  .openapi(postCardIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardIssuersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardIssuersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
