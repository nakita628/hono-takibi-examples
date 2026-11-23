import { OpenAPIHono } from '@hono/zod-openapi'
import { getMasterBrandsRoute } from '../routes'

const app = new OpenAPIHono()

export const masterBrandsHandler = app.openapi(getMasterBrandsRoute, (c) => {
  throw new Error('Not implemented')
})
