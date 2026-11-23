import { OpenAPIHono } from '@hono/zod-openapi'
import { getMacdextRoute } from '../routes'

const app = new OpenAPIHono()

export const macdextHandler = app.openapi(getMacdextRoute, (c) => {
  throw new Error('Not implemented')
})
