import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountIdBuildsStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const accountIdHandler = app.openapi(getAccountIdBuildsStatusRoute, (c) => {
  throw new Error('Not implemented')
})
