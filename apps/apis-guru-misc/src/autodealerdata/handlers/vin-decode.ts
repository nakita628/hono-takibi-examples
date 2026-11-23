import { OpenAPIHono } from '@hono/zod-openapi'
import { getVinDecodeRoute } from '../routes'

const app = new OpenAPIHono()

export const vinDecodeHandler = app.openapi(getVinDecodeRoute, (c) => {
  throw new Error('Not implemented')
})
