import { OpenAPIHono } from '@hono/zod-openapi'
import { postInitializeSpeakerRoute } from '../routes'

const app = new OpenAPIHono()

export const initializeSpeakerHandler = app.openapi(postInitializeSpeakerRoute, (c) => {
  throw new Error('Not implemented')
})
