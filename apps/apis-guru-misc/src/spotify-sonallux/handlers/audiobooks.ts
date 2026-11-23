import { OpenAPIHono } from '@hono/zod-openapi'
import { getAudiobooksIdChaptersRoute, getAudiobooksIdRoute, getAudiobooksRoute } from '../routes'

const app = new OpenAPIHono()

export const audiobooksHandler = app
  .openapi(getAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiobooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiobooksIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
