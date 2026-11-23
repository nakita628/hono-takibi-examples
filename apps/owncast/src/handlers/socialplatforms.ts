import { OpenAPIHono } from '@hono/zod-openapi'
import { getSocialplatformsRoute } from '../routes'

const app = new OpenAPIHono()

export const socialplatformsHandler = app.openapi(getSocialplatformsRoute, (c) => {
  throw new Error('Not implemented')
})
