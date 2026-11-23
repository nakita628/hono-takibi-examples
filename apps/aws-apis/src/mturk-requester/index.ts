import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestHandler,
  xAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentHandler,
  xAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerHandler,
  xAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117CreateHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117CreateHitTypeHandler,
  xAmzTargetMTurkRequesterServiceV20170117CreateHitWithHitTypeHandler,
  xAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeHandler,
  xAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockHandler,
  xAmzTargetMTurkRequesterServiceV20170117DeleteHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeHandler,
  xAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockHandler,
  xAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerHandler,
  xAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceHandler,
  xAmzTargetMTurkRequesterServiceV20170117GetAssignmentHandler,
  xAmzTargetMTurkRequesterServiceV20170117GetFileUploadUrlHandler,
  xAmzTargetMTurkRequesterServiceV20170117GetHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreHandler,
  xAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListHiTsForQualificationTypeHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListHiTsHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListReviewableHiTsHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksHandler,
  xAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeHandler,
  xAmzTargetMTurkRequesterServiceV20170117NotifyWorkersHandler,
  xAmzTargetMTurkRequesterServiceV20170117RejectAssignmentHandler,
  xAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestHandler,
  xAmzTargetMTurkRequesterServiceV20170117SendBonusHandler,
  xAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationHandler,
  xAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117UpdateHitReviewStatusHandler,
  xAmzTargetMTurkRequesterServiceV20170117UpdateHitTypeOfHitHandler,
  xAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsHandler,
  xAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117CreateHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117CreateHitTypeHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117CreateHitWithHitTypeHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117DeleteHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117GetAssignmentHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117GetFileUploadUrlHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117GetHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListHiTsHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListHiTsForQualificationTypeHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListReviewableHiTsHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117NotifyWorkersHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117RejectAssignmentHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117SendBonusHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117UpdateHitReviewStatusHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117UpdateHitTypeOfHitHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsHandler)
  .route('/', xAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeHandler)

export default app
