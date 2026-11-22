import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserprofilesProfileIdCitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const citiesHandler = app.openapi(getUserprofilesProfileIdCitiesRoute, (c) => {
  throw new Error('Not implemented')
})
