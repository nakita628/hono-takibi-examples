import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormLawFirmNormLawFirmIdAssociatedNormAttorneysRoute,
  getNormLawFirmNormLawFirmIdAssociatedNormJudgesRoute,
  getNormLawFirmNormLawFirmIdAssociatedNormPartiesRoute,
  getNormLawFirmNormLawFirmIdRoute,
  getNormLawFirmSearchNormLawFirmSearchIdRoute,
  getNormLawFirmSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lawFirmAnalyticsAPIHandler = app
  .openapi(getNormLawFirmNormLawFirmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormLawFirmNormLawFirmIdAssociatedNormAttorneysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormLawFirmNormLawFirmIdAssociatedNormJudgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormLawFirmNormLawFirmIdAssociatedNormPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormLawFirmSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormLawFirmSearchNormLawFirmSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
