import { OpenAPIHono } from '@hono/zod-openapi'
import { getAudioLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const audioLabelsHandler = app.openapi(getAudioLabelsRoute, (c) => {
  throw new Error('Not implemented')
})
