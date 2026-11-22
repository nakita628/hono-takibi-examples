import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworksNetworkIdContentFilteringCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const contentFilteringCategoriesHandler = app.openapi(
  getNetworksNetworkIdContentFilteringCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
