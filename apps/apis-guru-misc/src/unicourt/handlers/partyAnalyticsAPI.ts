import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormPartyNormPartyIdAssociatedNormAttorneysRoute,
  getNormPartyNormPartyIdAssociatedNormJudgesRoute,
  getNormPartyNormPartyIdAssociatedNormLawFirmsRoute,
  getNormPartyNormPartyIdRoute,
  getNormPartySearchNormPartySearchIdRoute,
  getNormPartySearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partyAnalyticsAPIHandler = app
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
  .openapi(getNormPartySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormPartySearchNormPartySearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
