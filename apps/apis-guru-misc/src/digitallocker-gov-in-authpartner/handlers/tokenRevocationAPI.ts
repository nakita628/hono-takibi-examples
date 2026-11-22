import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauth21RevokeRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenRevocationAPIHandler = app.openapi(postOauth21RevokeRoute, (c) => {
  throw new Error('Not implemented')
})
