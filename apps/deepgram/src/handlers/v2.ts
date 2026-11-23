import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2SpeakRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app.openapi(postV2SpeakRoute, (c) => {
  throw new Error('Not implemented')
})
