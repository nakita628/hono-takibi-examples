import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersSubtitlesSubtitlesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const providersHandler = app.openapi(getProvidersSubtitlesSubtitlesIdRoute, (c) => {
  throw new Error('Not implemented')
})
