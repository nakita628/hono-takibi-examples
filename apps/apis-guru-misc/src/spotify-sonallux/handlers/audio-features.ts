import { OpenAPIHono } from '@hono/zod-openapi'
import { getAudioFeaturesIdRoute, getAudioFeaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const audioFeaturesHandler = app
  .openapi(getAudioFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioFeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
