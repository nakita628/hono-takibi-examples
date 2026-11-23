import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiArticlesMediaTypeExtension(
  args: InferRequestType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['articles{mediaTypeExtension}'].$get(args, options))
}

export async function getApiBlogMediaTypeExtension(
  args: InferRequestType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['blog{mediaTypeExtension}'].$get(args, options))
}

export async function getApiGlossaryMediaTypeExtension(
  args: InferRequestType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['glossary{mediaTypeExtension}'].$get(args, options))
}

export async function getApiQuestionsMediaTypeExtension(
  args: InferRequestType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['questions{mediaTypeExtension}'].$get(args, options))
}

export async function getApiStatesMediaTypeExtension(
  args: InferRequestType<(typeof client.api)['states{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['states{mediaTypeExtension}'].$get(args, options))
}

export async function getApiTopicsMediaTypeExtension(
  args: InferRequestType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['topics{mediaTypeExtension}'].$get(args, options))
}

export async function getBlogPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blog[':pageName{mediaTypeExtension}'].$get(args, options))
}

export async function getEsBlogPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.es.blog[':pageName{mediaTypeExtension}'].$get(args, options))
}

export async function getEsGlossaryPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.es.glossary[':pageName{mediaTypeExtension}'].$get(args, options),
  )
}

export async function getEsQuestionPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.es.question[':pageName{mediaTypeExtension}'].$get(args, options),
  )
}

export async function getEsPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.es[':pageName{mediaTypeExtension}'].$get(args, options))
}

export async function getEsStateNameMediaTypeExtension(
  args: InferRequestType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.es[':stateName{mediaTypeExtension}'].$get(args, options))
}

export async function getGlossaryPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.glossary[':pageName{mediaTypeExtension}'].$get(args, options))
}

export async function getQuestionPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.question[':pageName{mediaTypeExtension}'].$get(args, options))
}

export async function getPageNameMediaTypeExtension(
  args: InferRequestType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pageName{mediaTypeExtension}'].$get(args, options))
}

export async function getStateNameMediaTypeExtension(
  args: InferRequestType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':stateName{mediaTypeExtension}'].$get(args, options))
}
