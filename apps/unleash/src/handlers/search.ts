import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdminSearchFeaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getApiAdminSearchFeaturesRoute, (c) => {
  throw new Error('Not implemented')
})
