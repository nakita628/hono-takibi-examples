import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SpeakRoute, postV2SpeakRoute } from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app
  .openapi(postV1SpeakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SpeakRoute, (c) => {
    throw new Error('Not implemented')
  })
