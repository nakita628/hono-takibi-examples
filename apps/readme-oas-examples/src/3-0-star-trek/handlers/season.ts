import { OpenAPIHono } from '@hono/zod-openapi'
import { getSeasonRoute, getSeasonSearchRoute, postSeasonSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const seasonHandler = app
  .openapi(getSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeasonSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeasonSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
