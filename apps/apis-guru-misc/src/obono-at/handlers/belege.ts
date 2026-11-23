import { OpenAPIHono } from '@hono/zod-openapi'
import { getBelegeBelegUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const belegeHandler = app.openapi(getBelegeBelegUuidRoute, (c) => {
  throw new Error('Not implemented')
})
