import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormPartyNormPartyIdAssociatedNormAttorneysRoute,
  getNormPartyNormPartyIdAssociatedNormJudgesRoute,
  getNormPartyNormPartyIdAssociatedNormLawFirmsRoute,
  getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRoute,
  getNormPartyNormPartyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const normPartyHandler = app
  .openapi(getNormPartyNormPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormPartyNormPartyIdAssociatedNormAttorneysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormPartyNormPartyIdAssociatedNormJudgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormPartyNormPartyIdAssociatedNormLawFirmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
