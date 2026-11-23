import { OpenAPIHono } from '@hono/zod-openapi'
import { getContributeJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const contributeJsonHandler = app.openapi(getContributeJsonRoute, (c) => {
  throw new Error('Not implemented')
})
