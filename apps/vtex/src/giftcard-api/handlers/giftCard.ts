import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGiftcardsGiftCardIDRoute,
  postGiftcardsRoute,
  postGiftcardsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftCardHandler = app
  .openapi(postGiftcardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftcardsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardsGiftCardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
