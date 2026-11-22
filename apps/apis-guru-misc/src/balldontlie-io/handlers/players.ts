import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1Players237Route, getApiV1PlayersRoute } from '../routes'

const app = new OpenAPIHono()

export const playersHandler = app
  .openapi(getApiV1PlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Players237Route, (c) => {
    throw new Error('Not implemented')
  })
