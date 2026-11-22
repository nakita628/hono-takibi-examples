import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2PayoutsPayoutIdRoute,
  getV2PayoutsPayoutIdRoute,
  getV2PayoutsRoute,
  postV2PayoutsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payoutsAPIHandler = app
  .openapi(postV2PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
