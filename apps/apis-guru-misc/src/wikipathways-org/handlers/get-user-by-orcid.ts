import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetUserByOrcidRoute } from '../routes'

const app = new OpenAPIHono()

export const getUserByOrcidHandler = app.openapi(getGetUserByOrcidRoute, (c) => {
  throw new Error('Not implemented')
})
