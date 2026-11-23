import { OpenAPIHono } from '@hono/zod-openapi'
import { postListPlaybackKeyPairsRoute } from '../routes'

const app = new OpenAPIHono()

export const listPlaybackKeyPairsHandler = app.openapi(postListPlaybackKeyPairsRoute, (c) => {
  throw new Error('Not implemented')
})
