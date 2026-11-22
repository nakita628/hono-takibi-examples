import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SoundGenerationRoute } from '../routes'

const app = new OpenAPIHono()

export const soundGenerationHandler = app.openapi(postV1SoundGenerationRoute, (c) => {
  throw new Error('Not implemented')
})
