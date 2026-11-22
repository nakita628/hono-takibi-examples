import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createAtsApplicants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ats.applicants.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAtsApplicantsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAtsApplicantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAtsApplicants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ats.applicants.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAtsApplicantsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAtsApplicantsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAtsApplicantsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAtsApplicantsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAtsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ats.jobs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAtsJobsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAtsJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAtsJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAtsJobsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAtsJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
