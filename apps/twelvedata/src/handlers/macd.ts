import { OpenAPIHono } from '@hono/zod-openapi'
import { getMacdRoute } from '../routes'

const app = new OpenAPIHono()

export const macdHandler = app.openapi(getMacdRoute, (c) => {
  throw new Error('Not implemented')
})
