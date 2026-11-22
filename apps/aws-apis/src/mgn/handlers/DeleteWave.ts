import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteWaveRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteWaveHandler = app.openapi(postDeleteWaveRoute, (c) => {
  throw new Error('Not implemented')
})
