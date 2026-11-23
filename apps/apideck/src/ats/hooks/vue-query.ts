import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAtsKey() {
  return ['ats'] as const
}

export function getAtsApplicantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ats.applicants.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ats', '/ats/applicants', keyArgs] as const
}

export function getAtsApplicantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ats.applicants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAtsApplicantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ats.applicants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAtsApplicants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ats.applicants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
          >,
          ReturnType<typeof getAtsApplicantsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAtsApplicantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAtsApplicantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ats.applicants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ats.applicants.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ats.applicants.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ats.applicants)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ats', '/ats/applicants/:id', keyArgs] as const
}

export function getAtsApplicantsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ats.applicants)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAtsApplicantsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ats.applicants[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAtsApplicantsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ats.applicants)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAtsApplicantsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ats.applicants)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAtsApplicantsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAtsApplicantsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ats.applicants[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAtsJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ats.jobs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ats', '/ats/jobs', keyArgs] as const
}

export function getAtsJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ats.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAtsJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ats.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAtsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ats.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>
          >,
          ReturnType<typeof getAtsJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ats.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAtsJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAtsJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ats.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAtsJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ats.jobs)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ats', '/ats/jobs/:id', keyArgs] as const
}

export function getAtsJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ats.jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAtsJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ats.jobs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAtsJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ats.jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAtsJobsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ats.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAtsJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAtsJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ats.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
