import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BillingPlansIdRoute,
  getV1BillingPlansRoute,
  patchV1BillingPlansIdRoute,
  postV1BillingPlansIdActivateRoute,
  postV1BillingPlansIdDeactivateRoute,
  postV1BillingPlansIdUpdatePricingSchemesRoute,
  postV1BillingPlansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plansHandler = app
  .openapi(postV1BillingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BillingPlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPlansIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPlansIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPlansIdUpdatePricingSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
