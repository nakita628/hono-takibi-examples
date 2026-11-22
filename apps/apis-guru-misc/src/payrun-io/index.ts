import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aeAssessmentHandler,
  applicationHandler,
  cisHandler,
  dpsMessageHandler,
  employeeHandler,
  employerHandler,
  healthcheckHandler,
  holidaySchemeHandler,
  jobsHandler,
  journalsHandler,
  nominalCodeHandler,
  payCodeHandler,
  payInstructionHandler,
  payLineHandler,
  payRunHandler,
  payScheduleHandler,
  pensionHandler,
  permissionHandler,
  queryHandler,
  referenceHandler,
  reportLineHandler,
  reportLineInstructionHandler,
  reportsHandler,
  rtiHandler,
  schemasHandler,
  subContractorHandler,
  taggingHandler,
  templatesHandler,
  thirdPartyTransmissionHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', employerHandler)
  .route('/', cisHandler)
  .route('/', taggingHandler)
  .route('/', dpsMessageHandler)
  .route('/', employeeHandler)
  .route('/', aeAssessmentHandler)
  .route('/', journalsHandler)
  .route('/', payInstructionHandler)
  .route('/', payLineHandler)
  .route('/', payRunHandler)
  .route('/', holidaySchemeHandler)
  .route('/', nominalCodeHandler)
  .route('/', payCodeHandler)
  .route('/', payScheduleHandler)
  .route('/', reportLineHandler)
  .route('/', pensionHandler)
  .route('/', reportLineInstructionHandler)
  .route('/', rtiHandler)
  .route('/', subContractorHandler)
  .route('/', thirdPartyTransmissionHandler)
  .route('/', healthcheckHandler)
  .route('/', jobsHandler)
  .route('/', permissionHandler)
  .route('/', queryHandler)
  .route('/', referenceHandler)
  .route('/', reportsHandler)
  .route('/', schemasHandler)
  .route('/', applicationHandler)
  .route('/', templatesHandler)
  .route('/', userHandler)

export default app
