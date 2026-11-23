import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindEligibleItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const findEligibleItemsHandler = app.openapi(getFindEligibleItemsRoute, (c) => {
  throw new Error('Not implemented')
})
