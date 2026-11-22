import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSurveysKey() {
  return ['Surveys'] as const
}

export function getSurveysQueryKey() {
  return ['Surveys', '/Surveys'] as const
}

export function getSurveysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSurveysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Surveys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSurveys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>
          >,
          ReturnType<typeof getSurveysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Surveys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSurveysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSurveysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Surveys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSurveysSurveyIdInterviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>
  >,
) {
  return ['Surveys', '/Surveys/:surveyId/Interviews', toValue(args)] as const
}

export function getSurveysSurveyIdInterviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSurveysSurveyIdInterviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Surveys[':surveyId'].Interviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Interviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSurveysSurveyIdInterviewsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSurveysSurveyIdInterviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Surveys[':surveyId'].Interviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSurveysSurveyIdMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>
  >,
) {
  return ['Surveys', '/Surveys/:surveyId/Metadata', toValue(args)] as const
}

export function getSurveysSurveyIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSurveysSurveyIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Surveys[':surveyId'].Metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Surveys)[':surveyId']['Metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSurveysSurveyIdMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSurveysSurveyIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Surveys[':surveyId'].Metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
