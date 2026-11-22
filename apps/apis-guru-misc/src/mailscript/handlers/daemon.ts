import { OpenAPIHono } from '@hono/zod-openapi'
import { getDaemonsDaemonTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const daemonHandler = app.openapi(getDaemonsDaemonTokenRoute, (c) => {
  throw new Error('Not implemented')
})
