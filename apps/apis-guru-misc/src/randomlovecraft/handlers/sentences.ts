import { OpenAPIHono } from '@hono/zod-openapi'
import { getSentencesIdRoute, getSentencesRoute } from '../routes'

const app = new OpenAPIHono()

export const sentencesHandler = app
  .openapi(getSentencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
