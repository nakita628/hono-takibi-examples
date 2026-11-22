import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpeechToTextProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const speechToTextCapabilitiesHandler = app.openapi(getSpeechToTextProvidersRoute, (c) => {
  throw new Error('Not implemented')
})
