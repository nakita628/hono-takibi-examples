import { OpenAPIHono } from '@hono/zod-openapi'
import { getFfmpegPresetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ffmpegHandler = app.openapi(getFfmpegPresetsRoute, (c) => {
  throw new Error('Not implemented')
})
