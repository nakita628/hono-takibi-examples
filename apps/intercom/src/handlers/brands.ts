import { OpenAPIHono } from '@hono/zod-openapi'
import { getBrandsIdRoute, getBrandsRoute } from '../routes'

const app = new OpenAPIHono()

export const brandsHandler = app
  .openapi(getBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
