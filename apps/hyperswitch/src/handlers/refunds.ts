import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRefundsRefundIdRoute,
  postRefundsListRoute,
  postRefundsRefundIdRoute,
  postRefundsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const refundsHandler = app
  .openapi(postRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRefundsListRoute, (c) => {
    throw new Error('Not implemented')
  })
