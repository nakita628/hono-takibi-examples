import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDRegistryRegistryIDRegistrySettlementItemIdRoute,
  getUserUserIDRegistryRegistryIDRegistrySettlementRoute,
  postUserUserIDRegistryRegistryIDRegistrySettlementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrySettlementHandler = app
  .openapi(getUserUserIDRegistryRegistryIDRegistrySettlementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDRegistryRegistryIDRegistrySettlementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDRegistryRegistryIDRegistrySettlementItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
