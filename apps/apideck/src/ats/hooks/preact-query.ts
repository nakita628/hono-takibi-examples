import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAtsKey() {
  return ['ats'] as const
}

export function getAtsApplicantsQueryKey(
  args: InferRequestType<typeof client.ats.applicants.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/applicants', keyArgs] as const
}

export function getAtsApplicantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ats.applicants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAtsApplicantsQueryKey>
  >({
    queryKey: getAtsApplicantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ats.applicants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAtsApplicants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ats.applicants.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAtsApplicantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAtsApplicantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAtsApplicants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ats.applicants.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAtsApplicantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAtsApplicantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAtsApplicantsMutationKey() {
  return ['ats', '/ats/applicants', 'POST'] as const
}

export function getPostAtsApplicantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ats.applicants.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAtsApplicantsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ats.applicants.$post>) {
      return parseResponse(client.ats.applicants.$post(args, options))
    },
  })
}

export function usePostAtsApplicants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ats.applicants.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAtsApplicantsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAtsApplicantsIdQueryKey(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/applicants/:id', keyArgs] as const
}

export function getAtsApplicantsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAtsApplicantsIdQueryKey>
  >({
    queryKey: getAtsApplicantsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ats.applicants[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAtsApplicantsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAtsApplicantsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAtsApplicantsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAtsApplicantsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAtsApplicantsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAtsApplicantsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAtsJobsQueryKey(args: InferRequestType<typeof client.ats.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/jobs', keyArgs] as const
}

export function getAtsJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ats.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAtsJobsQueryKey>
  >({
    queryKey: getAtsJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ats.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAtsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ats.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtsJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAtsJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAtsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ats.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtsJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAtsJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAtsJobsIdQueryKey(
  args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ats', '/ats/jobs/:id', keyArgs] as const
}

export function getAtsJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAtsJobsIdQueryKey>
  >({
    queryKey: getAtsJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ats.jobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAtsJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAtsJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAtsJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAtsJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAtsJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAtsJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
