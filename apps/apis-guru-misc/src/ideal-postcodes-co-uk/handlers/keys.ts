import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getKeysKeyDetailsRoute,
  getKeysKeyLookupsRoute,
  getKeysKeyRoute,
  getKeysKeyUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyLookupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
