import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdExternaltenantsRoute,
  getProvidersProviderIdExternaltenantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalTenantHandler = app
  .openapi(getProvidersEmployersEmployerIdExternaltenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdExternaltenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
