import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchCarIncentiveOemRoute } from '../routes'

const app = new OpenAPIHono()

export const oemIncentiveSearchHandler = app.openapi(getSearchCarIncentiveOemRoute, (c) => {
  throw new Error('Not implemented')
})
