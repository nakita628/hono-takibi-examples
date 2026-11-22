import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PaymentsPayoutsIdRoute, postV1PaymentsPayoutsRoute } from '../routes'

const app = new OpenAPIHono()

export const payoutsHandler = app
  .openapi(postV1PaymentsPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPayoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
