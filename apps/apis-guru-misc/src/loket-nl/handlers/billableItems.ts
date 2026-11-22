import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersProviderIdBillableitemsRoute } from '../routes'

const app = new OpenAPIHono()

export const billableItemsHandler = app.openapi(getProvidersProviderIdBillableitemsRoute, (c) => {
  throw new Error('Not implemented')
})
