import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDataentitiesAcronymSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getApiDataentitiesAcronymSearchRoute, (c) => {
  throw new Error('Not implemented')
})
