import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusinessesBusinessIdRmnContractsContractIdRoute,
  getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryRoute,
  patchBusinessesBusinessIdRmnContractsContractIdProcessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rmnBillingContractHandler = app
  .openapi(getBusinessesBusinessIdRmnContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdRmnContractsContractIdProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
