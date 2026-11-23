import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateHandler,
  xAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateHandler,
  xAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateHandler,
  xAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateHandler,
  xAmzTargetServiceQuotasV20190624GetAwsDefaultServiceQuotaHandler,
  xAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeHandler,
  xAmzTargetServiceQuotasV20190624GetServiceQuotaHandler,
  xAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateHandler,
  xAmzTargetServiceQuotasV20190624ListAwsDefaultServiceQuotasHandler,
  xAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaHandler,
  xAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryHandler,
  xAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateHandler,
  xAmzTargetServiceQuotasV20190624ListServiceQuotasHandler,
  xAmzTargetServiceQuotasV20190624ListServicesHandler,
  xAmzTargetServiceQuotasV20190624ListTagsForResourceHandler,
  xAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateHandler,
  xAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseHandler,
  xAmzTargetServiceQuotasV20190624TagResourceHandler,
  xAmzTargetServiceQuotasV20190624UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateHandler)
  .route('/', xAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateHandler)
  .route('/', xAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateHandler)
  .route('/', xAmzTargetServiceQuotasV20190624GetAwsDefaultServiceQuotaHandler)
  .route('/', xAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateHandler)
  .route('/', xAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeHandler)
  .route('/', xAmzTargetServiceQuotasV20190624GetServiceQuotaHandler)
  .route('/', xAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateHandler)
  .route('/', xAmzTargetServiceQuotasV20190624ListAwsDefaultServiceQuotasHandler)
  .route('/', xAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryHandler)
  .route('/', xAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaHandler)
  .route('/', xAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateHandler)
  .route('/', xAmzTargetServiceQuotasV20190624ListServiceQuotasHandler)
  .route('/', xAmzTargetServiceQuotasV20190624ListServicesHandler)
  .route('/', xAmzTargetServiceQuotasV20190624ListTagsForResourceHandler)
  .route('/', xAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateHandler)
  .route('/', xAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseHandler)
  .route('/', xAmzTargetServiceQuotasV20190624TagResourceHandler)
  .route('/', xAmzTargetServiceQuotasV20190624UntagResourceHandler)

export default app
