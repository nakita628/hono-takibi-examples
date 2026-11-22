import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateHandler,
  XAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateHandler,
  XAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateHandler,
  XAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateHandler,
  XAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaHandler,
  XAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeHandler,
  XAmzTargetServiceQuotasV20190624GetServiceQuotaHandler,
  XAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateHandler,
  XAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasHandler,
  XAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaHandler,
  XAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryHandler,
  XAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateHandler,
  XAmzTargetServiceQuotasV20190624ListServiceQuotasHandler,
  XAmzTargetServiceQuotasV20190624ListServicesHandler,
  XAmzTargetServiceQuotasV20190624ListTagsForResourceHandler,
  XAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateHandler,
  XAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseHandler,
  XAmzTargetServiceQuotasV20190624TagResourceHandler,
  XAmzTargetServiceQuotasV20190624UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateHandler)
  .route('/', XAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateHandler)
  .route('/', XAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateHandler)
  .route('/', XAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaHandler)
  .route('/', XAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateHandler)
  .route('/', XAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeHandler)
  .route('/', XAmzTargetServiceQuotasV20190624GetServiceQuotaHandler)
  .route('/', XAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateHandler)
  .route('/', XAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasHandler)
  .route('/', XAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryHandler)
  .route('/', XAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaHandler)
  .route('/', XAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateHandler)
  .route('/', XAmzTargetServiceQuotasV20190624ListServiceQuotasHandler)
  .route('/', XAmzTargetServiceQuotasV20190624ListServicesHandler)
  .route('/', XAmzTargetServiceQuotasV20190624ListTagsForResourceHandler)
  .route('/', XAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateHandler)
  .route('/', XAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseHandler)
  .route('/', XAmzTargetServiceQuotasV20190624TagResourceHandler)
  .route('/', XAmzTargetServiceQuotasV20190624UntagResourceHandler)

export default app
