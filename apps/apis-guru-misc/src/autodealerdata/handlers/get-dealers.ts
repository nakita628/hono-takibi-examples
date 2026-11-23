import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetDealersRoute } from '../routes'

const app = new OpenAPIHono()

export const getDealersHandler = app.openapi(getGetDealersRoute, (c) => {
  throw new Error('Not implemented')
})
