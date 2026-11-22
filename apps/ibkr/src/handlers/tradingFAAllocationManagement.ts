import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiIserverAccountAllocationAccountsRoute,
  getV1ApiIserverAccountAllocationGroupRoute,
  getV1ApiIserverAccountAllocationPresetsRoute,
  postV1ApiIserverAccountAllocationGroupDeleteRoute,
  postV1ApiIserverAccountAllocationGroupRoute,
  postV1ApiIserverAccountAllocationGroupSingleRoute,
  postV1ApiIserverAccountAllocationPresetsRoute,
  putV1ApiIserverAccountAllocationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingFAAllocationManagementHandler = app
  .openapi(postV1ApiIserverAccountAllocationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiIserverAccountAllocationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAllocationGroupDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAllocationGroupSingleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAllocationPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
