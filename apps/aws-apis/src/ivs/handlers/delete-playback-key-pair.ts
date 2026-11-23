import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeletePlaybackKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const deletePlaybackKeyPairHandler = app.openapi(postDeletePlaybackKeyPairRoute, (c) => {
  throw new Error('Not implemented')
})
