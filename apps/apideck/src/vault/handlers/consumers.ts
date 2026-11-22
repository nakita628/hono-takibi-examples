import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultConsumersConsumerIdRoute,
  getVaultConsumersConsumerIdRoute,
  getVaultConsumersConsumerIdStatsRoute,
  getVaultConsumersRoute,
  patchVaultConsumersConsumerIdRoute,
  postVaultConsumersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumersHandler = app
  .openapi(getVaultConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVaultConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConsumersConsumerIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
