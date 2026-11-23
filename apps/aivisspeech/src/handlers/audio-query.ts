import { OpenAPIHono } from '@hono/zod-openapi'
import { postAudioQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const audioQueryHandler = app.openapi(postAudioQueryRoute, (c) => {
  throw new Error('Not implemented')
})
