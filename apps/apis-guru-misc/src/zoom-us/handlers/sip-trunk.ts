import { OpenAPIHono } from '@hono/zod-openapi'
import { getSipTrunkNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const sipTrunkHandler = app.openapi(getSipTrunkNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
