import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCalendarHandler = app.openapi(getRepositorySearchTypeCalendarRoute, (c) => {
  throw new Error('Not implemented')
})
