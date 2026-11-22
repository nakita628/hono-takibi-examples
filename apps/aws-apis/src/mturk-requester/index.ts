import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestHandler,
  XAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentHandler,
  XAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerHandler,
  XAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117CreateHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117CreateHITTypeHandler,
  XAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeHandler,
  XAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeHandler,
  XAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockHandler,
  XAmzTargetMTurkRequesterServiceV20170117DeleteHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeHandler,
  XAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockHandler,
  XAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerHandler,
  XAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceHandler,
  XAmzTargetMTurkRequesterServiceV20170117GetAssignmentHandler,
  XAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLHandler,
  XAmzTargetMTurkRequesterServiceV20170117GetHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreHandler,
  XAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListHITsHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksHandler,
  XAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeHandler,
  XAmzTargetMTurkRequesterServiceV20170117NotifyWorkersHandler,
  XAmzTargetMTurkRequesterServiceV20170117RejectAssignmentHandler,
  XAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestHandler,
  XAmzTargetMTurkRequesterServiceV20170117SendBonusHandler,
  XAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationHandler,
  XAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusHandler,
  XAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITHandler,
  XAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsHandler,
  XAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117CreateHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117CreateHITTypeHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117DeleteHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117GetAssignmentHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117GetHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListHITsHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117NotifyWorkersHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117RejectAssignmentHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117SendBonusHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsHandler)
  .route('/', XAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeHandler)

export default app
