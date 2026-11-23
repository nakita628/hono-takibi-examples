import { OpenAPIHono } from '@hono/zod-openapi'
import { getMaRoute } from '../routes'

const app = new OpenAPIHono()

export const maHandler = app.openapi(getMaRoute, (c) => {
  throw new Error('Not implemented')
})
