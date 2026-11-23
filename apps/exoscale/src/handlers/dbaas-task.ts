import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasTaskServiceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasTaskHandler = app.openapi(getDbaasTaskServiceIdRoute, (c) => {
  throw new Error('Not implemented')
})
