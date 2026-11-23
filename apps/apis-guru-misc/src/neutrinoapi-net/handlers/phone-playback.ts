import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhonePlaybackRoute } from '../routes'

const app = new OpenAPIHono()

export const phonePlaybackHandler = app.openapi(postPhonePlaybackRoute, (c) => {
  throw new Error('Not implemented')
})
