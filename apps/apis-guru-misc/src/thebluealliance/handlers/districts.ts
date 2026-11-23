import { OpenAPIHono } from '@hono/zod-openapi'
import { getDistrictsYearRoute } from '../routes'

const app = new OpenAPIHono()

export const districtsHandler = app.openapi(getDistrictsYearRoute, (c) => {
  throw new Error('Not implemented')
})
