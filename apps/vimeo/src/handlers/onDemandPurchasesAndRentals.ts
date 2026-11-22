import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeOndemandPurchasesOndemandIdRoute,
  getMeOndemandPurchasesRoute,
  getUsersUserIdOndemandPurchasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandPurchasesAndRentalsHandler = app
  .openapi(getMeOndemandPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOndemandPurchasesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOndemandPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
