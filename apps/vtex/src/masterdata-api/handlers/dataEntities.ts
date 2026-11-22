import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDataentitiesAcronymRoute, getApiDataentitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const dataEntitiesHandler = app
  .openapi(getApiDataentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymRoute, (c) => {
    throw new Error('Not implemented')
  })
