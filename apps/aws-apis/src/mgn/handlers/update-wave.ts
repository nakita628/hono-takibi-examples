import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateWaveRoute } from '../routes'

const app = new OpenAPIHono()

export const updateWaveHandler = app.openapi(postUpdateWaveRoute, (c) => {
  throw new Error('Not implemented')
})
