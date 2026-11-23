import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBuildSuggestersRoute,
  getActionCreateDomainRoute,
  getActionDefineAnalysisSchemeRoute,
  getActionDefineExpressionRoute,
  getActionDefineIndexFieldRoute,
  getActionDefineSuggesterRoute,
  getActionDeleteAnalysisSchemeRoute,
  getActionDeleteDomainRoute,
  getActionDeleteExpressionRoute,
  getActionDeleteIndexFieldRoute,
  getActionDeleteSuggesterRoute,
  getActionDescribeAnalysisSchemesRoute,
  getActionDescribeAvailabilityOptionsRoute,
  getActionDescribeDomainEndpointOptionsRoute,
  getActionDescribeDomainsRoute,
  getActionDescribeExpressionsRoute,
  getActionDescribeIndexFieldsRoute,
  getActionDescribeScalingParametersRoute,
  getActionDescribeServiceAccessPoliciesRoute,
  getActionDescribeSuggestersRoute,
  getActionIndexDocumentsRoute,
  getActionListDomainNamesRoute,
  getActionUpdateAvailabilityOptionsRoute,
  getActionUpdateDomainEndpointOptionsRoute,
  getActionUpdateScalingParametersRoute,
  getActionUpdateServiceAccessPoliciesRoute,
  postActionBuildSuggestersRoute,
  postActionCreateDomainRoute,
  postActionDefineAnalysisSchemeRoute,
  postActionDefineExpressionRoute,
  postActionDefineIndexFieldRoute,
  postActionDefineSuggesterRoute,
  postActionDeleteAnalysisSchemeRoute,
  postActionDeleteDomainRoute,
  postActionDeleteExpressionRoute,
  postActionDeleteIndexFieldRoute,
  postActionDeleteSuggesterRoute,
  postActionDescribeAnalysisSchemesRoute,
  postActionDescribeAvailabilityOptionsRoute,
  postActionDescribeDomainEndpointOptionsRoute,
  postActionDescribeDomainsRoute,
  postActionDescribeExpressionsRoute,
  postActionDescribeIndexFieldsRoute,
  postActionDescribeScalingParametersRoute,
  postActionDescribeServiceAccessPoliciesRoute,
  postActionDescribeSuggestersRoute,
  postActionIndexDocumentsRoute,
  postActionListDomainNamesRoute,
  postActionUpdateAvailabilityOptionsRoute,
  postActionUpdateDomainEndpointOptionsRoute,
  postActionUpdateScalingParametersRoute,
  postActionUpdateServiceAccessPoliciesRoute,
} from './routes'
import {
  getActionBuildSuggestersRouteHandler,
  getActionCreateDomainRouteHandler,
  getActionDefineAnalysisSchemeRouteHandler,
  getActionDefineExpressionRouteHandler,
  getActionDefineIndexFieldRouteHandler,
  getActionDefineSuggesterRouteHandler,
  getActionDeleteAnalysisSchemeRouteHandler,
  getActionDeleteDomainRouteHandler,
  getActionDeleteExpressionRouteHandler,
  getActionDeleteIndexFieldRouteHandler,
  getActionDeleteSuggesterRouteHandler,
  getActionDescribeAnalysisSchemesRouteHandler,
  getActionDescribeAvailabilityOptionsRouteHandler,
  getActionDescribeDomainEndpointOptionsRouteHandler,
  getActionDescribeDomainsRouteHandler,
  getActionDescribeExpressionsRouteHandler,
  getActionDescribeIndexFieldsRouteHandler,
  getActionDescribeScalingParametersRouteHandler,
  getActionDescribeServiceAccessPoliciesRouteHandler,
  getActionDescribeSuggestersRouteHandler,
  getActionIndexDocumentsRouteHandler,
  getActionListDomainNamesRouteHandler,
  getActionUpdateAvailabilityOptionsRouteHandler,
  getActionUpdateDomainEndpointOptionsRouteHandler,
  getActionUpdateScalingParametersRouteHandler,
  getActionUpdateServiceAccessPoliciesRouteHandler,
  postActionBuildSuggestersRouteHandler,
  postActionCreateDomainRouteHandler,
  postActionDefineAnalysisSchemeRouteHandler,
  postActionDefineExpressionRouteHandler,
  postActionDefineIndexFieldRouteHandler,
  postActionDefineSuggesterRouteHandler,
  postActionDeleteAnalysisSchemeRouteHandler,
  postActionDeleteDomainRouteHandler,
  postActionDeleteExpressionRouteHandler,
  postActionDeleteIndexFieldRouteHandler,
  postActionDeleteSuggesterRouteHandler,
  postActionDescribeAnalysisSchemesRouteHandler,
  postActionDescribeAvailabilityOptionsRouteHandler,
  postActionDescribeDomainEndpointOptionsRouteHandler,
  postActionDescribeDomainsRouteHandler,
  postActionDescribeExpressionsRouteHandler,
  postActionDescribeIndexFieldsRouteHandler,
  postActionDescribeScalingParametersRouteHandler,
  postActionDescribeServiceAccessPoliciesRouteHandler,
  postActionDescribeSuggestersRouteHandler,
  postActionIndexDocumentsRouteHandler,
  postActionListDomainNamesRouteHandler,
  postActionUpdateAvailabilityOptionsRouteHandler,
  postActionUpdateDomainEndpointOptionsRouteHandler,
  postActionUpdateScalingParametersRouteHandler,
  postActionUpdateServiceAccessPoliciesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionBuildSuggestersRoute, getActionBuildSuggestersRouteHandler)
  .openapi(postActionBuildSuggestersRoute, postActionBuildSuggestersRouteHandler)
  .openapi(getActionCreateDomainRoute, getActionCreateDomainRouteHandler)
  .openapi(postActionCreateDomainRoute, postActionCreateDomainRouteHandler)
  .openapi(getActionDefineAnalysisSchemeRoute, getActionDefineAnalysisSchemeRouteHandler)
  .openapi(postActionDefineAnalysisSchemeRoute, postActionDefineAnalysisSchemeRouteHandler)
  .openapi(getActionDefineExpressionRoute, getActionDefineExpressionRouteHandler)
  .openapi(postActionDefineExpressionRoute, postActionDefineExpressionRouteHandler)
  .openapi(getActionDefineIndexFieldRoute, getActionDefineIndexFieldRouteHandler)
  .openapi(postActionDefineIndexFieldRoute, postActionDefineIndexFieldRouteHandler)
  .openapi(getActionDefineSuggesterRoute, getActionDefineSuggesterRouteHandler)
  .openapi(postActionDefineSuggesterRoute, postActionDefineSuggesterRouteHandler)
  .openapi(getActionDeleteAnalysisSchemeRoute, getActionDeleteAnalysisSchemeRouteHandler)
  .openapi(postActionDeleteAnalysisSchemeRoute, postActionDeleteAnalysisSchemeRouteHandler)
  .openapi(getActionDeleteDomainRoute, getActionDeleteDomainRouteHandler)
  .openapi(postActionDeleteDomainRoute, postActionDeleteDomainRouteHandler)
  .openapi(getActionDeleteExpressionRoute, getActionDeleteExpressionRouteHandler)
  .openapi(postActionDeleteExpressionRoute, postActionDeleteExpressionRouteHandler)
  .openapi(getActionDeleteIndexFieldRoute, getActionDeleteIndexFieldRouteHandler)
  .openapi(postActionDeleteIndexFieldRoute, postActionDeleteIndexFieldRouteHandler)
  .openapi(getActionDeleteSuggesterRoute, getActionDeleteSuggesterRouteHandler)
  .openapi(postActionDeleteSuggesterRoute, postActionDeleteSuggesterRouteHandler)
  .openapi(getActionDescribeAnalysisSchemesRoute, getActionDescribeAnalysisSchemesRouteHandler)
  .openapi(postActionDescribeAnalysisSchemesRoute, postActionDescribeAnalysisSchemesRouteHandler)
  .openapi(
    getActionDescribeAvailabilityOptionsRoute,
    getActionDescribeAvailabilityOptionsRouteHandler,
  )
  .openapi(
    postActionDescribeAvailabilityOptionsRoute,
    postActionDescribeAvailabilityOptionsRouteHandler,
  )
  .openapi(
    getActionDescribeDomainEndpointOptionsRoute,
    getActionDescribeDomainEndpointOptionsRouteHandler,
  )
  .openapi(
    postActionDescribeDomainEndpointOptionsRoute,
    postActionDescribeDomainEndpointOptionsRouteHandler,
  )
  .openapi(getActionDescribeDomainsRoute, getActionDescribeDomainsRouteHandler)
  .openapi(postActionDescribeDomainsRoute, postActionDescribeDomainsRouteHandler)
  .openapi(getActionDescribeExpressionsRoute, getActionDescribeExpressionsRouteHandler)
  .openapi(postActionDescribeExpressionsRoute, postActionDescribeExpressionsRouteHandler)
  .openapi(getActionDescribeIndexFieldsRoute, getActionDescribeIndexFieldsRouteHandler)
  .openapi(postActionDescribeIndexFieldsRoute, postActionDescribeIndexFieldsRouteHandler)
  .openapi(getActionDescribeScalingParametersRoute, getActionDescribeScalingParametersRouteHandler)
  .openapi(
    postActionDescribeScalingParametersRoute,
    postActionDescribeScalingParametersRouteHandler,
  )
  .openapi(
    getActionDescribeServiceAccessPoliciesRoute,
    getActionDescribeServiceAccessPoliciesRouteHandler,
  )
  .openapi(
    postActionDescribeServiceAccessPoliciesRoute,
    postActionDescribeServiceAccessPoliciesRouteHandler,
  )
  .openapi(getActionDescribeSuggestersRoute, getActionDescribeSuggestersRouteHandler)
  .openapi(postActionDescribeSuggestersRoute, postActionDescribeSuggestersRouteHandler)
  .openapi(getActionIndexDocumentsRoute, getActionIndexDocumentsRouteHandler)
  .openapi(postActionIndexDocumentsRoute, postActionIndexDocumentsRouteHandler)
  .openapi(getActionListDomainNamesRoute, getActionListDomainNamesRouteHandler)
  .openapi(postActionListDomainNamesRoute, postActionListDomainNamesRouteHandler)
  .openapi(getActionUpdateAvailabilityOptionsRoute, getActionUpdateAvailabilityOptionsRouteHandler)
  .openapi(
    postActionUpdateAvailabilityOptionsRoute,
    postActionUpdateAvailabilityOptionsRouteHandler,
  )
  .openapi(
    getActionUpdateDomainEndpointOptionsRoute,
    getActionUpdateDomainEndpointOptionsRouteHandler,
  )
  .openapi(
    postActionUpdateDomainEndpointOptionsRoute,
    postActionUpdateDomainEndpointOptionsRouteHandler,
  )
  .openapi(getActionUpdateScalingParametersRoute, getActionUpdateScalingParametersRouteHandler)
  .openapi(postActionUpdateScalingParametersRoute, postActionUpdateScalingParametersRouteHandler)
  .openapi(
    getActionUpdateServiceAccessPoliciesRoute,
    getActionUpdateServiceAccessPoliciesRouteHandler,
  )
  .openapi(
    postActionUpdateServiceAccessPoliciesRoute,
    postActionUpdateServiceAccessPoliciesRouteHandler,
  )

export default app
