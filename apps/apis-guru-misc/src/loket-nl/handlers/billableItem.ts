import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployerIdBillableitemsRoute } from '../routes'

const app = new OpenAPIHono()

export const billableItemHandler = app.openapi(
  getProvidersEmployersEmployerIdBillableitemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
