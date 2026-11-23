import { OpenAPIHono } from '@hono/zod-openapi'
import { getEeLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const eeLicenseHandler = app.openapi(getEeLicenseRoute, (c) => {
  throw new Error('Not implemented')
})
