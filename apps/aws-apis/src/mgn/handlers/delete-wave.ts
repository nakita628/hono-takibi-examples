import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteWaveRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteWaveHandler = app.openapi(postDeleteWaveRoute, (c) => {
  throw new Error('Not implemented')
})
