import { OpenAPIHono } from '@hono/zod-openapi'
import {
  amendmentsHandler,
  billHandler,
  boundCongressionalRecordHandler,
  committeeHandler,
  committeeMeetingHandler,
  committeePrintHandler,
  committeeReportHandler,
  congressHandler,
  congressionalRecordHandler,
  crsreportHandler,
  dailyCongressionalRecordHandler,
  hearingHandler,
  houseCommunicationHandler,
  houseRequirementHandler,
  houseVoteHandler,
  memberHandler,
  nominationHandler,
  senateCommunicationHandler,
  summariesHandler,
  treatyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', billHandler)
  .route('/', amendmentsHandler)
  .route('/', summariesHandler)
  .route('/', congressHandler)
  .route('/', memberHandler)
  .route('/', houseVoteHandler)
  .route('/', committeeHandler)
  .route('/', committeeReportHandler)
  .route('/', committeePrintHandler)
  .route('/', committeeMeetingHandler)
  .route('/', hearingHandler)
  .route('/', congressionalRecordHandler)
  .route('/', dailyCongressionalRecordHandler)
  .route('/', boundCongressionalRecordHandler)
  .route('/', houseCommunicationHandler)
  .route('/', houseRequirementHandler)
  .route('/', senateCommunicationHandler)
  .route('/', nominationHandler)
  .route('/', crsreportHandler)
  .route('/', treatyHandler)

export default app
