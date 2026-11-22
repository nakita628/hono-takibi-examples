import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MediaSearchallUserRoute, getApiV1MediaSearchMovieTitleRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getApiV1MediaSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediaSearchallUserRoute, (c) => {
    throw new Error('Not implemented')
  })
