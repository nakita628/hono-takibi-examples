import { OpenAPIHono } from '@hono/zod-openapi'
import { getMacrosIdRoute, getMacrosRoute } from '../routes'

const app = new OpenAPIHono()

export const macrosHandler = app
  .openapi(getMacrosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMacrosRoute, (c) => {
    throw new Error('Not implemented')
  })
