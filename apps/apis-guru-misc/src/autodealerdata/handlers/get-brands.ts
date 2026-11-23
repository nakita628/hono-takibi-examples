import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetBrandsRoute } from '../routes'

const app = new OpenAPIHono()

export const getBrandsHandler = app.openapi(getGetBrandsRoute, (c) => {
  throw new Error('Not implemented')
})
