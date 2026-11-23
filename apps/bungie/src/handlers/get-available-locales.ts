import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetAvailableLocalesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const getAvailableLocalesHandler = app.openapi(getGetAvailableLocalesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
