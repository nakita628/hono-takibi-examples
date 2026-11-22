import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AccountRelayAutoConfigsIdRoute,
  getApiV2AccountRelayAutoConfigsIdRoute,
  getApiV2AccountRelayAutoConfigsRoute,
  patchApiV2AccountRelayAutoConfigsIdRoute,
  postApiV2AccountRelayAutoConfigsIdResetRoute,
  postApiV2AccountRelayAutoConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relayProxyConfigurationsHandler = app
  .openapi(getApiV2AccountRelayAutoConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AccountRelayAutoConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountRelayAutoConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AccountRelayAutoConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AccountRelayAutoConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AccountRelayAutoConfigsIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
