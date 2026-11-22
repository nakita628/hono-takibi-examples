import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDataentitiesDataEntityNameSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getApiDataentitiesDataEntityNameSearchRoute, (c) => {
  throw new Error('Not implemented')
})
