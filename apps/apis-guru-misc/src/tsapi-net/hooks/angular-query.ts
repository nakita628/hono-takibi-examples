import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSurveysKey() {
  return ['Surveys'] as const
}

export function getSurveysQueryKey() {
  return ['Surveys', '/Surveys'] as const
}

export function getSurveysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSurveysQueryKey>
  >({
    queryKey: getSurveysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Surveys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSurveys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSurveysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSurveysQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSurveysSurveyIdInterviewsQueryKey(
  args: InferRequestType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>,
) {
  return ['Surveys', '/Surveys/:surveyId/Interviews', args] as const
}

export function getSurveysSurveyIdInterviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSurveysSurveyIdInterviewsQueryKey>
  >({
    queryKey: getSurveysSurveyIdInterviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Surveys[':surveyId'].Interviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSurveysSurveyIdInterviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSurveysSurveyIdInterviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSurveysSurveyIdInterviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSurveysSurveyIdMetadataQueryKey(
  args: InferRequestType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>,
) {
  return ['Surveys', '/Surveys/:surveyId/Metadata', args] as const
}

export function getSurveysSurveyIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSurveysSurveyIdMetadataQueryKey>
  >({
    queryKey: getSurveysSurveyIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Surveys[':surveyId'].Metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSurveysSurveyIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSurveysSurveyIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSurveysSurveyIdMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
