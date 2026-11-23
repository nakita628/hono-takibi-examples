import { OpenAPIHono } from '@hono/zod-openapi'
import { getHpHpRoute, getHpRoute } from '../routes'

const app = new OpenAPIHono()

export const hpHandler = app
  .openapi(getHpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHpHpRoute, (c) => {
    throw new Error('Not implemented')
  })
