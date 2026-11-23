import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreatebabelAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const createbabelHandler = app.openapi(getCreatebabelAddressRoute, (c) => {
  throw new Error('Not implemented')
})
