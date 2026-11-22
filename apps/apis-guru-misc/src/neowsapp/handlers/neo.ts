import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestV1NeoAsteroidIdRoute, getRestV1NeoBrowseRoute } from '../routes'

const app = new OpenAPIHono()

export const neoHandler = app
  .openapi(getRestV1NeoBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1NeoAsteroidIdRoute, (c) => {
    throw new Error('Not implemented')
  })
