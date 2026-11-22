import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadarVerifiedBotsTopBotsRoute, getRadarVerifiedBotsTopCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const radarVerifiedBotsHandler = app
  .openapi(getRadarVerifiedBotsTopBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarVerifiedBotsTopCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
