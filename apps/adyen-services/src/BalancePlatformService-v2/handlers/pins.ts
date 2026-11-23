import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsChangeRoute, postPinsRevealRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsHandler = app
  .openapi(postPinsChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
