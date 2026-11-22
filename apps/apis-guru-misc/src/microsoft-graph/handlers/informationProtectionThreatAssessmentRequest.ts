import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsThreatAssessmentResultIdRoute,
  deleteInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdRoute,
  getInformationProtectionThreatAssessmentRequestsRoute,
  getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsRoute,
  getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsThreatAssessmentResultIdRoute,
  getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdRoute,
  patchInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsThreatAssessmentResultIdRoute,
  patchInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdRoute,
  postInformationProtectionThreatAssessmentRequestsRoute,
  postInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const informationProtectionThreatAssessmentRequestHandler = app
  .openapi(getInformationProtectionThreatAssessmentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInformationProtectionThreatAssessmentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsThreatAssessmentResultIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsThreatAssessmentResultIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchInformationProtectionThreatAssessmentRequestsThreatAssessmentRequestIdResultsThreatAssessmentResultIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
