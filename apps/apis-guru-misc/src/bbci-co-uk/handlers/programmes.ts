import { OpenAPIHono } from '@hono/zod-openapi'
import { getProgrammesPidEpisodesRoute, getProgrammesPidRoute } from '../routes'

const app = new OpenAPIHono()

export const programmesHandler = app
  .openapi(getProgrammesPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProgrammesPidEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
