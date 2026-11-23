import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPayoutsListRoute,
  getPayoutsPayoutIdRoute,
  postPayoutsCreateRoute,
  postPayoutsFilterRoute,
  postPayoutsListRoute,
  postPayoutsPayoutIdCancelRoute,
  postPayoutsPayoutIdConfirmRoute,
  postPayoutsPayoutIdFulfillRoute,
  postPayoutsPayoutIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payoutsHandler = app
  .openapi(postPayoutsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutsPayoutIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutsPayoutIdFulfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayoutsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutsPayoutIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
