import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCustomersIdRoute,
  getAccountingCustomersIdRoute,
  getAccountingCustomersRoute,
  patchAccountingCustomersIdRoute,
  postAccountingCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getAccountingCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
