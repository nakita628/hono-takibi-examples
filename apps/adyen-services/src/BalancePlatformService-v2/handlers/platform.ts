import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBalancePlatformsIdAccountHoldersRoute,
  getBalancePlatformsIdRoute,
  getBalancePlatformsIdTransactionRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const platformHandler = app
  .openapi(getBalancePlatformsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsIdAccountHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsIdTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
