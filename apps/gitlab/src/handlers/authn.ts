import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4IamUserinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const authnHandler = app.openapi(getApiV4IamUserinfoRoute, (c) => {
  throw new Error('Not implemented')
})
