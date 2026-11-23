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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1GoogleServiceAccountsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>
  >,
) {
  return ['v1', '/v1/googleServiceAccounts/:projectId', toValue(args)] as const
}

export function getV1GoogleServiceAccountsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GoogleServiceAccountsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.googleServiceAccounts[':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1GoogleServiceAccountsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1GoogleServiceAccountsProjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GoogleServiceAccountsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GoogleServiceAccountsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.googleServiceAccounts[':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdAgentPoolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:projectId/agentPools', toValue(args)] as const
}

export function getV1ProjectsProjectIdAgentPoolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdAgentPoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':projectId'].agentPools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdAgentPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdAgentPoolsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdAgentPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdAgentPoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':projectId'].agentPools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectIdAgentPoolsMutationKey() {
  return ['v1', '/v1/projects/:projectId/agentPools', 'POST'] as const
}

export function getPostV1ProjectsProjectIdAgentPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['agentPools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdAgentPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':projectId'].agentPools.$post(args, options))
    },
  })
}

export function usePostV1ProjectsProjectIdAgentPools<
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
                  ReturnType<(typeof client.v1.projects)[':projectId']['agentPools']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$post']>,
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
  const mutationDefaults = getPostV1ProjectsProjectIdAgentPoolsMutationOptions<
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

export function getV1TransferJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transferJobs.$get>>,
) {
  return ['v1', '/v1/transferJobs', toValue(args)] as const
}

export function getV1TransferJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transferJobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransferJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transferJobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransferJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transferJobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transferJobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transferJobs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transferJobs.$get>>>
            >
          >,
          ReturnType<typeof getV1TransferJobsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transferJobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransferJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransferJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transferJobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TransferJobsMutationKey() {
  return ['v1', '/v1/transferJobs', 'POST'] as const
}

export function getPostV1TransferJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transferJobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.transferJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TransferJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.transferJobs.$post>) {
      return parseResponse(client.v1.transferJobs.$post(args, options))
    },
  })
}

export function usePostV1TransferJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transferJobs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.transferJobs.$post>,
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
  const mutationDefaults = getPostV1TransferJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV1JobNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':jobName']['$get']>>,
) {
  return ['v1', '/v1/:jobName', toValue(args)] as const
}

export function getV1JobNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':jobName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JobNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':jobName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JobName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':jobName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$get']>>>
            >
          >,
          ReturnType<typeof getV1JobNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JobNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':jobName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1JobNameMutationKey() {
  return ['v1', '/v1/:jobName', 'DELETE'] as const
}

export function getDeleteV1JobNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':jobName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1JobNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':jobName']['$delete']>) {
      return parseResponse(client.v1[':jobName'].$delete(args, options))
    },
  })
}

export function useDeleteV1JobName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':jobName']['$delete']>,
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
  const mutationDefaults = getDeleteV1JobNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1JobNameMutationKey() {
  return ['v1', '/v1/:jobName', 'PATCH'] as const
}

export function getPatchV1JobNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':jobName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1JobNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':jobName']['$patch']>) {
      return parseResponse(client.v1[':jobName'].$patch(args, options))
    },
  })
}

export function usePatchV1JobName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':jobName']['$patch']>,
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
  const mutationDefaults = getPatchV1JobNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1JobNameRunMutationKey() {
  return ['v1', '/v1/:jobName:run', 'POST'] as const
}

export function getPostV1JobNameRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName:run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':jobName:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobNameRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':jobName:run']['$post']>) {
      return parseResponse(client.v1[':jobName:run'].$post(args, options))
    },
  })
}

export function usePostV1JobNameRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':jobName:run']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':jobName:run']['$post']>,
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
  const mutationDefaults = getPostV1JobNameRunMutationOptions<TError, TOnMutateResult>(
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

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NamePauseMutationKey() {
  return ['v1', '/v1/:name:pause', 'POST'] as const
}

export function getPostV1NamePauseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NamePauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:pause']['$post']>) {
      return parseResponse(client.v1[':name:pause'].$post(args, options))
    },
  })
}

export function usePostV1NamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:pause']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:pause']['$post']>,
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
  const mutationDefaults = getPostV1NamePauseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1NameResumeMutationKey() {
  return ['v1', '/v1/:name:resume', 'POST'] as const
}

export function getPostV1NameResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:resume']['$post']>) {
      return parseResponse(client.v1[':name:resume'].$post(args, options))
    },
  })
}

export function usePostV1NameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:resume']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:resume']['$post']>,
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
  const mutationDefaults = getPostV1NameResumeMutationOptions<TError, TOnMutateResult>(
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
