import { OpenAPIHono } from '@hono/zod-openapi'
import { getPinsListRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsListHandler = app.openapi(getPinsListRoute, (c) => {
  throw new Error('Not implemented')
})
