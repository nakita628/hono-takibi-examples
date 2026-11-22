import { OpenAPIHono } from '@hono/zod-openapi'
import { getMagazinesRoute } from '../routes'

const app = new OpenAPIHono()

export const magazinesHandler = app.openapi(getMagazinesRoute, (c) => {
  throw new Error('Not implemented')
})
