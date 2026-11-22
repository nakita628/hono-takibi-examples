import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CarriersCarrierIdOptionsRoute,
  getV1CarriersCarrierIdPackagesRoute,
  getV1CarriersCarrierIdRoute,
  getV1CarriersCarrierIdServicesRoute,
  getV1CarriersRoute,
  putV1CarriersCarrierIdAddFundsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const carriersHandler = app
  .openapi(getV1CarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CarriersCarrierIdAddFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
