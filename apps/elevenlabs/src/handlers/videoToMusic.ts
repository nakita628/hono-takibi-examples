import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1MusicVideoToMusicRoute } from '../routes'

const app = new OpenAPIHono()

export const videoToMusicHandler = app.openapi(postV1MusicVideoToMusicRoute, (c) => {
  throw new Error('Not implemented')
})
