import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetDealersByIDRoute } from '../routes'

const app = new OpenAPIHono()

export const getDealersByIdHandler = app.openapi(getGetDealersByIDRoute, (c) => {
  throw new Error('Not implemented')
})
