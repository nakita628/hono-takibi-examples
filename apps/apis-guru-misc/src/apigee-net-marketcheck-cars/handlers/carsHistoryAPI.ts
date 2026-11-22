import { OpenAPIHono } from '@hono/zod-openapi'
import { getHistoryCarUkVrmRoute, getHistoryCarVinRoute } from '../routes'

const app = new OpenAPIHono()

export const carsHistoryAPIHandler = app
  .openapi(getHistoryCarUkVrmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryCarVinRoute, (c) => {
    throw new Error('Not implemented')
  })
