import { OpenAPIHono } from '@hono/zod-openapi'
import { getShowsIdEpisodesRoute, getShowsIdRoute, getShowsRoute } from '../routes'

const app = new OpenAPIHono()

export const showsHandler = app
  .openapi(getShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
