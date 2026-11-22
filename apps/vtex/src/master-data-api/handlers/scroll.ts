import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDataentitiesDataEntityNameScrollRoute } from '../routes'

const app = new OpenAPIHono()

export const scrollHandler = app.openapi(getApiDataentitiesDataEntityNameScrollRoute, (c) => {
  throw new Error('Not implemented')
})
