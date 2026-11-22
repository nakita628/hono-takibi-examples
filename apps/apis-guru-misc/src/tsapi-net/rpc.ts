import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSurveys(options?: ClientRequestOptions) {
  return await parseResponse(client.Surveys.$get(undefined, options))
}

export async function getSurveysSurveyIdInterviews(
  args: InferRequestType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Surveys[':surveyId'].Interviews.$get(args, options))
}

export async function getSurveysSurveyIdMetadata(
  args: InferRequestType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Surveys[':surveyId'].Metadata.$get(args, options))
}
