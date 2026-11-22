import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute, getVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const ecoTaCoAPIRootHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
