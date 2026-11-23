import { OpenAPIHono } from '@hono/zod-openapi'
import { getIsInitializedSpeakerRoute } from '../routes'

const app = new OpenAPIHono()

export const isInitializedSpeakerHandler = app.openapi(getIsInitializedSpeakerRoute, (c) => {
  throw new Error('Not implemented')
})
