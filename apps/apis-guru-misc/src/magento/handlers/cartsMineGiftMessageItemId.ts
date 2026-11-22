import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CartsMineGiftMessageItemIdRoute,
  postV1CartsMineGiftMessageItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartsMineGiftMessageItemIdHandler = app
  .openapi(getV1CartsMineGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
