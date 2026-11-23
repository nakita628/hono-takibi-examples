import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataConnectorsIdRoute,
  getDataConnectorsDataConnectorIdExecutionResultsIdRoute,
  getDataConnectorsDataConnectorIdExecutionResultsRoute,
  getDataConnectorsIdRoute,
  getDataConnectorsIdVersionsRoute,
  getDataConnectorsIdVersionsVersionIdRoute,
  getDataConnectorsRoute,
  patchDataConnectorsIdRoute,
  patchDataConnectorsIdVersionsVersionIdRoute,
  postDataConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataConnectorsHandler = app
  .openapi(getDataConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDataConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataConnectorsDataConnectorIdExecutionResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataConnectorsDataConnectorIdExecutionResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataConnectorsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataConnectorsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDataConnectorsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
