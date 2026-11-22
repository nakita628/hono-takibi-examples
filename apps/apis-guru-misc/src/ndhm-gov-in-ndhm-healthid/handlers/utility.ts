import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1HaLgdDistrictsRoute, getV1HaLgdStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const utilityHandler = app
  .openapi(getV1HaLgdDistrictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HaLgdStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
