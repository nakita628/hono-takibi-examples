import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicKeyRoute, postPinsChangeRoute, postPinsRevealRoute } from '../routes'

const app = new OpenAPIHono()

export const manageCardPINHandler = app
  .openapi(postPinsChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
