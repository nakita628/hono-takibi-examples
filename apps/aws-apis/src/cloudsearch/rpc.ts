import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionBuildSuggesters(
  args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BuildSuggesters'].$get(args, options))
}

export async function postActionBuildSuggesters(
  args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BuildSuggesters'].$post(args, options))
}

export async function getActionCreateDomain(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDomain'].$get(args, options))
}

export async function postActionCreateDomain(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDomain'].$post(args, options))
}

export async function getActionDefineAnalysisScheme(
  args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineAnalysisScheme'].$get(args, options))
}

export async function postActionDefineAnalysisScheme(
  args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineAnalysisScheme'].$post(args, options))
}

export async function getActionDefineExpression(
  args: InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineExpression'].$get(args, options))
}

export async function postActionDefineExpression(
  args: InferRequestType<(typeof client)['#Action=DefineExpression']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineExpression'].$post(args, options))
}

export async function getActionDefineIndexField(
  args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineIndexField'].$get(args, options))
}

export async function postActionDefineIndexField(
  args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineIndexField'].$post(args, options))
}

export async function getActionDefineSuggester(
  args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineSuggester'].$get(args, options))
}

export async function postActionDefineSuggester(
  args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DefineSuggester'].$post(args, options))
}

export async function getActionDeleteAnalysisScheme(
  args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAnalysisScheme'].$get(args, options))
}

export async function postActionDeleteAnalysisScheme(
  args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAnalysisScheme'].$post(args, options))
}

export async function getActionDeleteDomain(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDomain'].$get(args, options))
}

export async function postActionDeleteDomain(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDomain'].$post(args, options))
}

export async function getActionDeleteExpression(
  args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteExpression'].$get(args, options))
}

export async function postActionDeleteExpression(
  args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteExpression'].$post(args, options))
}

export async function getActionDeleteIndexField(
  args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIndexField'].$get(args, options))
}

export async function postActionDeleteIndexField(
  args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIndexField'].$post(args, options))
}

export async function getActionDeleteSuggester(
  args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSuggester'].$get(args, options))
}

export async function postActionDeleteSuggester(
  args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSuggester'].$post(args, options))
}

export async function getActionDescribeAnalysisSchemes(
  args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAnalysisSchemes'].$get(args, options))
}

export async function postActionDescribeAnalysisSchemes(
  args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAnalysisSchemes'].$post(args, options))
}

export async function getActionDescribeAvailabilityOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAvailabilityOptions'].$get(args, options))
}

export async function postActionDescribeAvailabilityOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAvailabilityOptions'].$post(args, options))
}

export async function getActionDescribeDomainEndpointOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDomainEndpointOptions'].$get(args, options))
}

export async function postActionDescribeDomainEndpointOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDomainEndpointOptions'].$post(args, options))
}

export async function getActionDescribeDomains(
  args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDomains'].$get(args, options))
}

export async function postActionDescribeDomains(
  args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDomains'].$post(args, options))
}

export async function getActionDescribeExpressions(
  args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExpressions'].$get(args, options))
}

export async function postActionDescribeExpressions(
  args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExpressions'].$post(args, options))
}

export async function getActionDescribeIndexFields(
  args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIndexFields'].$get(args, options))
}

export async function postActionDescribeIndexFields(
  args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIndexFields'].$post(args, options))
}

export async function getActionDescribeScalingParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScalingParameters'].$get(args, options))
}

export async function postActionDescribeScalingParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScalingParameters'].$post(args, options))
}

export async function getActionDescribeServiceAccessPolicies(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeServiceAccessPolicies'].$get(args, options))
}

export async function postActionDescribeServiceAccessPolicies(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeServiceAccessPolicies'].$post(args, options))
}

export async function getActionDescribeSuggesters(
  args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSuggesters'].$get(args, options))
}

export async function postActionDescribeSuggesters(
  args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSuggesters'].$post(args, options))
}

export async function getActionIndexDocuments(
  args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=IndexDocuments'].$get(args, options))
}

export async function postActionIndexDocuments(
  args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=IndexDocuments'].$post(args, options))
}

export async function getActionListDomainNames(
  args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListDomainNames'].$get(args, options))
}

export async function postActionListDomainNames(
  args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListDomainNames'].$post(args, options))
}

export async function getActionUpdateAvailabilityOptions(
  args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAvailabilityOptions'].$get(args, options))
}

export async function postActionUpdateAvailabilityOptions(
  args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAvailabilityOptions'].$post(args, options))
}

export async function getActionUpdateDomainEndpointOptions(
  args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateDomainEndpointOptions'].$get(args, options))
}

export async function postActionUpdateDomainEndpointOptions(
  args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateDomainEndpointOptions'].$post(args, options))
}

export async function getActionUpdateScalingParameters(
  args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateScalingParameters'].$get(args, options))
}

export async function postActionUpdateScalingParameters(
  args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateScalingParameters'].$post(args, options))
}

export async function getActionUpdateServiceAccessPolicies(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateServiceAccessPolicies'].$get(args, options))
}

export async function postActionUpdateServiceAccessPolicies(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateServiceAccessPolicies'].$post(args, options))
}
