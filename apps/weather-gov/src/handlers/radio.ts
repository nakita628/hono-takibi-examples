import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadioCallSignBroadcastRoute, getRadioCallSignRoute, getRadioRoute } from '../routes'

const app = new OpenAPIHono()

export const radioHandler = app
  .openapi(getRadioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadioCallSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadioCallSignBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
