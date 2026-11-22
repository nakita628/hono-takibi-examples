import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGadgetsWeatherRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGadgetsWeatherHandler = app.openapi(
  getRepositorySearchTypeGadgetsWeatherRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
