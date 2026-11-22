import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSetupV1CustomersIdPrivacyRoute,
  getSetupV1CustomersIdRoute,
  getSetupV1CustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getSetupV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CustomersIdPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
