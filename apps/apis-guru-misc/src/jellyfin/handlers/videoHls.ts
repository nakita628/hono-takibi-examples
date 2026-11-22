import { OpenAPIHono } from '@hono/zod-openapi'
import { getVideosItemIdLiveM3u8Route } from '../routes'

const app = new OpenAPIHono()

export const videoHlsHandler = app.openapi(getVideosItemIdLiveM3u8Route, (c) => {
  throw new Error('Not implemented')
})
