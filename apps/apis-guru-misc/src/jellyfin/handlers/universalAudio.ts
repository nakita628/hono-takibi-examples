import { OpenAPIHono } from '@hono/zod-openapi'
import { getAudioItemIdUniversalRoute, headAudioItemIdUniversalRoute } from '../routes'

const app = new OpenAPIHono()

export const universalAudioHandler = app
  .openapi(getAudioItemIdUniversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdUniversalRoute, (c) => {
    throw new Error('Not implemented')
  })
