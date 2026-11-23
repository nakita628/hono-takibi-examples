import { OpenAPIHono } from '@hono/zod-openapi'
import { getCitiesDrillersIndexRoute, getCitiesInstallersIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const citiesHandler = app
  .openapi(getCitiesDrillersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCitiesInstallersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
