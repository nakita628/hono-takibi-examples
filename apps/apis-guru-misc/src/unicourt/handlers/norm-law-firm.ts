import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormLawFirmNormLawFirmIdAssociatedNormAttorneysRoute,
  getNormLawFirmNormLawFirmIdAssociatedNormJudgesRoute,
  getNormLawFirmNormLawFirmIdAssociatedNormPartiesRoute,
  getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRoute,
  getNormLawFirmNormLawFirmIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const normLawFirmHandler = app
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
  .openapi(getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRoute, (c) => {
    throw new Error('Not implemented')
  })
