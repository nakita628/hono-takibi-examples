import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectionsCarriersCarrierNameCarrierIdRoute,
  getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute,
  postV1ConnectionsCarriersCarrierNameRoute,
  putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const carrierAccountsHandler = app
  .openapi(postV1ConnectionsCarriersCarrierNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectionsCarriersCarrierNameCarrierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
