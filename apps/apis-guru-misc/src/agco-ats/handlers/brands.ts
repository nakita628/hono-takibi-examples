import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2BrandsRoute } from '../routes'

const app = new OpenAPIHono()

export const brandsHandler = app.openapi(getApiV2BrandsRoute, (c) => {
  throw new Error('Not implemented')
})
