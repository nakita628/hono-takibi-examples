import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalystRatingsLightRoute, getAnalystRatingsUsEquitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const analystRatingsHandler = app
  .openapi(getAnalystRatingsLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalystRatingsUsEquitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
