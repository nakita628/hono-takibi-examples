import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRoute,
  postLegalEntitiesIdSetTaxElectronicDeliveryConsentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxEDeliveryConsentHandler = app
  .openapi(postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdSetTaxElectronicDeliveryConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
