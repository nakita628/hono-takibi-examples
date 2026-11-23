import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCheckDepositsCheckDepositIdRoute,
  getCheckDepositsRoute,
  postCheckDepositsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checkDepositsHandler = app
  .openapi(getCheckDepositsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckDepositsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCheckDepositsCheckDepositIdRoute, (c) => {
    throw new Error('Not implemented')
  })
