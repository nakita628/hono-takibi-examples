import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute,
  getApiV3AccountsAccountIdPrivateEndpointsIndexRoute,
  getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute,
  patchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute,
  postApiV3AccountsAccountIdPrivateEndpointsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privateEndpointsHandler = app
  .openapi(getApiV3AccountsAccountIdPrivateEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdPrivateEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
