import { OpenAPIHono } from '@hono/zod-openapi'
import { postDbaasServiceLogsServiceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasServiceLogsHandler = app.openapi(postDbaasServiceLogsServiceNameRoute, (c) => {
  throw new Error('Not implemented')
})
