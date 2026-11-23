import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionBuildSuggestersHandler,
  actionCreateDomainHandler,
  actionDefineAnalysisSchemeHandler,
  actionDefineExpressionHandler,
  actionDefineIndexFieldHandler,
  actionDefineSuggesterHandler,
  actionDeleteAnalysisSchemeHandler,
  actionDeleteDomainHandler,
  actionDeleteExpressionHandler,
  actionDeleteIndexFieldHandler,
  actionDeleteSuggesterHandler,
  actionDescribeAnalysisSchemesHandler,
  actionDescribeAvailabilityOptionsHandler,
  actionDescribeDomainEndpointOptionsHandler,
  actionDescribeDomainsHandler,
  actionDescribeExpressionsHandler,
  actionDescribeIndexFieldsHandler,
  actionDescribeScalingParametersHandler,
  actionDescribeServiceAccessPoliciesHandler,
  actionDescribeSuggestersHandler,
  actionIndexDocumentsHandler,
  actionListDomainNamesHandler,
  actionUpdateAvailabilityOptionsHandler,
  actionUpdateDomainEndpointOptionsHandler,
  actionUpdateScalingParametersHandler,
  actionUpdateServiceAccessPoliciesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionBuildSuggestersHandler)
  .route('/', actionCreateDomainHandler)
  .route('/', actionDefineAnalysisSchemeHandler)
  .route('/', actionDefineExpressionHandler)
  .route('/', actionDefineIndexFieldHandler)
  .route('/', actionDefineSuggesterHandler)
  .route('/', actionDeleteAnalysisSchemeHandler)
  .route('/', actionDeleteDomainHandler)
  .route('/', actionDeleteExpressionHandler)
  .route('/', actionDeleteIndexFieldHandler)
  .route('/', actionDeleteSuggesterHandler)
  .route('/', actionDescribeAnalysisSchemesHandler)
  .route('/', actionDescribeAvailabilityOptionsHandler)
  .route('/', actionDescribeDomainEndpointOptionsHandler)
  .route('/', actionDescribeDomainsHandler)
  .route('/', actionDescribeExpressionsHandler)
  .route('/', actionDescribeIndexFieldsHandler)
  .route('/', actionDescribeScalingParametersHandler)
  .route('/', actionDescribeServiceAccessPoliciesHandler)
  .route('/', actionDescribeSuggestersHandler)
  .route('/', actionIndexDocumentsHandler)
  .route('/', actionListDomainNamesHandler)
  .route('/', actionUpdateAvailabilityOptionsHandler)
  .route('/', actionUpdateDomainEndpointOptionsHandler)
  .route('/', actionUpdateScalingParametersHandler)
  .route('/', actionUpdateServiceAccessPoliciesHandler)

export default app
