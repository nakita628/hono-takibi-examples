import { OpenAPIHono } from '@hono/zod-openapi'
import { getBooksIdSentencesRoute, getSentencesIdRoute, getSentencesRoute } from '../routes'

const app = new OpenAPIHono()

export const sentencesHandler = app
  .openapi(getBooksIdSentencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
