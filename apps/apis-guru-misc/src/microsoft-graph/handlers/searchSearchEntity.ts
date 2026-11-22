import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchRoute, patchSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchSearchEntityHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
