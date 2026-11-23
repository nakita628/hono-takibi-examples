import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetglobalnumberinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const getglobalnumberinfoHandler = app.openapi(getGetglobalnumberinfoRoute, (c) => {
  throw new Error('Not implemented')
})
