import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateWaveRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateWaveHandler = app.openapi(postCreateWaveRoute, (c) => {
  throw new Error('Not implemented')
})
