import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1DataplanesHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const dataplanesHandler = app.openapi(postV1DataplanesHealthRoute, (c) => {
  throw new Error('Not implemented')
})
