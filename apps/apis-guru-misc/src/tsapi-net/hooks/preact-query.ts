import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useSurveys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSurveysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSurveysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSurveys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSurveysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSurveysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSurveysSurveyIdInterviews<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSurveysSurveyIdInterviewsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSurveysSurveyIdInterviews<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSurveysSurveyIdInterviewsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSurveysSurveyIdMetadata<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSurveysSurveyIdMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSurveysSurveyIdMetadata<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSurveysSurveyIdMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
