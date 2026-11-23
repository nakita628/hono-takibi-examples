import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetPlaybackKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const getPlaybackKeyPairHandler = app.openapi(postGetPlaybackKeyPairRoute, (c) => {
  throw new Error('Not implemented')
})
