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

export function getV3p1beta1Key() {
  return ['v3p1beta1'] as const
}

export function getV3p1beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':name']['$get']>>,
) {
  return ['v3p1beta1', '/v3p1beta1/:name', toValue(args)] as const
}

export function getV3p1beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3p1beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3p1beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3p1beta1Name<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV3p1beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3p1beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3p1beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3p1beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3p1beta1NameMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:name', 'DELETE'] as const
}

export function getDeleteV3p1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3p1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3p1beta1)[':name']['$delete']>) {
      return parseResponse(client.v3p1beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV3p1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV3p1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV3p1beta1NameMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:name', 'PATCH'] as const
}

export function getPatchV3p1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3p1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3p1beta1)[':name']['$patch']>) {
      return parseResponse(client.v3p1beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV3p1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV3p1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV3p1beta1NameCompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':name:complete']['$get']>>,
) {
  return ['v3p1beta1', '/v3p1beta1/:name:complete', toValue(args)] as const
}

export function getV3p1beta1NameCompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':name:complete']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3p1beta1NameCompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3p1beta1[':name:complete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3p1beta1NameComplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':name:complete']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3p1beta1NameCompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3p1beta1NameCompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3p1beta1NameCompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3p1beta1[':name:complete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3p1beta1ParentClientEventsMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/clientEvents', 'POST'] as const
}

export function getPostV3p1beta1ParentClientEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3p1beta1ParentClientEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>,
    ) {
      return parseResponse(client.v3p1beta1[':parent'].clientEvents.$post(args, options))
    },
  })
}

export function usePostV3p1beta1ParentClientEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>,
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
  const mutationDefaults = getPostV3p1beta1ParentClientEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3p1beta1ParentCompaniesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>
  >,
) {
  return ['v3p1beta1', '/v3p1beta1/:parent/companies', toValue(args)] as const
}

export function getV3p1beta1ParentCompaniesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3p1beta1ParentCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3p1beta1[':parent'].companies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3p1beta1ParentCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3p1beta1ParentCompaniesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3p1beta1ParentCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3p1beta1ParentCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3p1beta1[':parent'].companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3p1beta1ParentCompaniesMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/companies', 'POST'] as const
}

export function getPostV3p1beta1ParentCompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3p1beta1ParentCompaniesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>,
    ) {
      return parseResponse(client.v3p1beta1[':parent'].companies.$post(args, options))
    },
  })
}

export function usePostV3p1beta1ParentCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>,
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
  const mutationDefaults = getPostV3p1beta1ParentCompaniesMutationOptions<TError, TOnMutateResult>(
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

export function getV3p1beta1ParentJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>,
) {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs', toValue(args)] as const
}

export function getV3p1beta1ParentJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3p1beta1ParentJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3p1beta1[':parent'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3p1beta1ParentJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3p1beta1ParentJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3p1beta1ParentJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3p1beta1ParentJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3p1beta1[':parent'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3p1beta1ParentJobsMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs', 'POST'] as const
}

export function getPostV3p1beta1ParentJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3p1beta1ParentJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>,
    ) {
      return parseResponse(client.v3p1beta1[':parent'].jobs.$post(args, options))
    },
  })
}

export function usePostV3p1beta1ParentJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>,
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
  const mutationDefaults = getPostV3p1beta1ParentJobsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3p1beta1ParentJobsBatchDeleteMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs:batchDelete', 'POST'] as const
}

export function getPostV3p1beta1ParentJobsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3p1beta1ParentJobsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>,
    ) {
      return parseResponse(client.v3p1beta1[':parent']['jobs:batchDelete'].$post(args, options))
    },
  })
}

export function usePostV3p1beta1ParentJobsBatchDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>,
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
  const mutationDefaults = getPostV3p1beta1ParentJobsBatchDeleteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV3p1beta1ParentJobsSearchMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs:search', 'POST'] as const
}

export function getPostV3p1beta1ParentJobsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3p1beta1ParentJobsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>,
    ) {
      return parseResponse(client.v3p1beta1[':parent']['jobs:search'].$post(args, options))
    },
  })
}

export function usePostV3p1beta1ParentJobsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>,
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
  const mutationDefaults = getPostV3p1beta1ParentJobsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3p1beta1ParentJobsSearchForAlertMutationKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs:searchForAlert', 'POST'] as const
}

export function getPostV3p1beta1ParentJobsSearchForAlertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3p1beta1ParentJobsSearchForAlertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>,
    ) {
      return parseResponse(client.v3p1beta1[':parent']['jobs:searchForAlert'].$post(args, options))
    },
  })
}

export function usePostV3p1beta1ParentJobsSearchForAlert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>,
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
  const mutationDefaults = getPostV3p1beta1ParentJobsSearchForAlertMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
