import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSpeakersRoute, getSpeakersRoute, postSpeakersRoute } from '../routes'

const app = new OpenAPIHono()

export const speakersHandler = app
  .openapi(getSpeakersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpeakersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpeakersRoute, (c) => {
    throw new Error('Not implemented')
  })
