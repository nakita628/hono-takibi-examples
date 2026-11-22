import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDataentitiesAcronymScrollRoute } from '../routes'

const app = new OpenAPIHono()

export const scrollHandler = app.openapi(getApiDataentitiesAcronymScrollRoute, (c) => {
  throw new Error('Not implemented')
})
