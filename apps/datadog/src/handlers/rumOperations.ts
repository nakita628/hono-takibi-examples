import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumOperationsRumOperationIdRoute,
  deleteApiV2RumOperationsStrongLinksRumOperationIdFeatureIdRoute,
  getApiV2RumOperationsByNameNameRoute,
  getApiV2RumOperationsRumOperationIdRoute,
  getApiV2RumOperationsSearchRoute,
  getApiV2RumOperationsStrongLinksRoute,
  postApiV2RumOperationsRoute,
  postApiV2RumOperationsStrongLinksRoute,
  putApiV2RumOperationsRumOperationIdRoute,
  putApiV2RumOperationsStrongLinksRumOperationIdFeatureIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumOperationsHandler = app
  .openapi(postApiV2RumOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumOperationsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumOperationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumOperationsStrongLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumOperationsStrongLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumOperationsStrongLinksRumOperationIdFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RumOperationsStrongLinksRumOperationIdFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumOperationsRumOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumOperationsRumOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RumOperationsRumOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
