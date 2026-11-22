import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionBuildSuggestersHandler,
  ActionCreateDomainHandler,
  ActionDefineAnalysisSchemeHandler,
  ActionDefineExpressionHandler,
  ActionDefineIndexFieldHandler,
  ActionDefineSuggesterHandler,
  ActionDeleteAnalysisSchemeHandler,
  ActionDeleteDomainHandler,
  ActionDeleteExpressionHandler,
  ActionDeleteIndexFieldHandler,
  ActionDeleteSuggesterHandler,
  ActionDescribeAnalysisSchemesHandler,
  ActionDescribeAvailabilityOptionsHandler,
  ActionDescribeDomainEndpointOptionsHandler,
  ActionDescribeDomainsHandler,
  ActionDescribeExpressionsHandler,
  ActionDescribeIndexFieldsHandler,
  ActionDescribeScalingParametersHandler,
  ActionDescribeServiceAccessPoliciesHandler,
  ActionDescribeSuggestersHandler,
  ActionIndexDocumentsHandler,
  ActionListDomainNamesHandler,
  ActionUpdateAvailabilityOptionsHandler,
  ActionUpdateDomainEndpointOptionsHandler,
  ActionUpdateScalingParametersHandler,
  ActionUpdateServiceAccessPoliciesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionBuildSuggestersHandler)
  .route('/', ActionCreateDomainHandler)
  .route('/', ActionDefineAnalysisSchemeHandler)
  .route('/', ActionDefineExpressionHandler)
  .route('/', ActionDefineIndexFieldHandler)
  .route('/', ActionDefineSuggesterHandler)
  .route('/', ActionDeleteAnalysisSchemeHandler)
  .route('/', ActionDeleteDomainHandler)
  .route('/', ActionDeleteExpressionHandler)
  .route('/', ActionDeleteIndexFieldHandler)
  .route('/', ActionDeleteSuggesterHandler)
  .route('/', ActionDescribeAnalysisSchemesHandler)
  .route('/', ActionDescribeAvailabilityOptionsHandler)
  .route('/', ActionDescribeDomainEndpointOptionsHandler)
  .route('/', ActionDescribeDomainsHandler)
  .route('/', ActionDescribeExpressionsHandler)
  .route('/', ActionDescribeIndexFieldsHandler)
  .route('/', ActionDescribeScalingParametersHandler)
  .route('/', ActionDescribeServiceAccessPoliciesHandler)
  .route('/', ActionDescribeSuggestersHandler)
  .route('/', ActionIndexDocumentsHandler)
  .route('/', ActionListDomainNamesHandler)
  .route('/', ActionUpdateAvailabilityOptionsHandler)
  .route('/', ActionUpdateDomainEndpointOptionsHandler)
  .route('/', ActionUpdateScalingParametersHandler)
  .route('/', ActionUpdateServiceAccessPoliciesHandler)

export default app
