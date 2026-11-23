import { OpenAPIHono } from '@hono/zod-openapi'
import { getMamaRoute } from '../routes'

const app = new OpenAPIHono()

export const mamaHandler = app.openapi(getMamaRoute, (c) => {
  throw new Error('Not implemented')
})
