import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInformationProtectionBitlockerRecoveryKeysCountRoute,
  getInformationProtectionThreatAssessmentRequestsCountRoute,
  getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const informationProtectionHandler = app
  .openapi(getInformationProtectionBitlockerRecoveryKeysCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInformationProtectionThreatAssessmentRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
