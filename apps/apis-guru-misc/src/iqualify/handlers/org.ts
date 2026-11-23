import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrgRoute } from '../routes'

const app = new OpenAPIHono()

export const orgHandler = app.openapi(getOrgRoute, (c) => {
  throw new Error('Not implemented')
})
