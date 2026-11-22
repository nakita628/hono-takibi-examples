import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnarchiveWaveRoute } from '../routes'

const app = new OpenAPIHono()

export const UnarchiveWaveHandler = app.openapi(postUnarchiveWaveRoute, (c) => {
  throw new Error('Not implemented')
})
