import { OpenAPIHono } from '@hono/zod-openapi'
import { getLorDeckV1DecksMeRoute, postLorDeckV1DecksMeRoute } from '../routes'

const app = new OpenAPIHono()

export const lorDeckV1Handler = app
  .openapi(getLorDeckV1DecksMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLorDeckV1DecksMeRoute, (c) => {
    throw new Error('Not implemented')
  })
