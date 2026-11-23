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

export function getPostV1CodeReferencesMutationKey() {
  return ['v1', '/v1/code-references', 'POST'] as const
}

export function getPostV1CodeReferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-references']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['code-references']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CodeReferencesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['code-references']['$post']>) {
      return parseResponse(client.v1['code-references'].$post(args, options))
    },
  })
}

export function usePostV1CodeReferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['code-references']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['code-references']['$post']>,
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
  const mutationDefaults = getPostV1CodeReferencesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CodeReferencesDeleteReportsMutationKey() {
  return ['v1', '/v1/code-references/delete-reports', 'POST'] as const
}

export function getPostV1CodeReferencesDeleteReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['code-references']['delete-reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CodeReferencesDeleteReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>,
    ) {
      return parseResponse(client.v1['code-references']['delete-reports'].$post(args, options))
    },
  })
}

export function usePostV1CodeReferencesDeleteReports<
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
                  ReturnType<(typeof client.v1)['code-references']['delete-reports']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>,
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
  const mutationDefaults = getPostV1CodeReferencesDeleteReportsMutationOptions<
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

export function getV1ConfigsConfigIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configs)[':configId']['$get']>>,
) {
  return ['v1', '/v1/configs/:configId', toValue(args)] as const
}

export function getV1ConfigsConfigIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configs)[':configId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigsConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configs[':configId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configs)[':configId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConfigsConfigIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigsConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configs[':configId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ConfigsConfigIdMutationKey() {
  return ['v1', '/v1/configs/:configId', 'PUT'] as const
}

export function getPutV1ConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.configs)[':configId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConfigsConfigIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.configs)[':configId']['$put']>) {
      return parseResponse(client.v1.configs[':configId'].$put(args, options))
    },
  })
}

export function usePutV1ConfigsConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.configs)[':configId']['$put']>,
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
  const mutationDefaults = getPutV1ConfigsConfigIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ConfigsConfigIdMutationKey() {
  return ['v1', '/v1/configs/:configId', 'DELETE'] as const
}

export function getDeleteV1ConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConfigsConfigIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>) {
      return parseResponse(client.v1.configs[':configId'].$delete(args, options))
    },
  })
}

export function useDeleteV1ConfigsConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>,
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
  const mutationDefaults = getDeleteV1ConfigsConfigIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConfigsConfigIdDeletedSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>
  >,
) {
  return ['v1', '/v1/configs/:configId/deleted-settings', toValue(args)] as const
}

export function getV1ConfigsConfigIdDeletedSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigsConfigIdDeletedSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configs[':configId']['deleted-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigsConfigIdDeletedSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ConfigsConfigIdDeletedSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdDeletedSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigsConfigIdDeletedSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configs[':configId']['deleted-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
    >
  >,
) {
  return ['v1', '/v1/configs/:configId/environments/:environmentId', toValue(args)] as const
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configs[':configId'].environments[':environmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigsConfigIdEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configs[':configId'].environments[':environmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
    >
  >,
) {
  return ['v1', '/v1/configs/:configId/environments/:environmentId/values', toValue(args)] as const
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configs[':configId'].environments[':environmentId'].values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigsConfigIdEnvironmentsEnvironmentIdValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configs[':configId'].environments[':environmentId'].values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConfigsConfigIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>
  >,
) {
  return ['v1', '/v1/configs/:configId/settings', toValue(args)] as const
}

export function getV1ConfigsConfigIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigsConfigIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configs[':configId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigsConfigIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConfigsConfigIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigsConfigIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configs[':configId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ConfigsConfigIdSettingsMutationKey() {
  return ['v1', '/v1/configs/:configId/settings', 'POST'] as const
}

export function getPostV1ConfigsConfigIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConfigsConfigIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>,
    ) {
      return parseResponse(client.v1.configs[':configId'].settings.$post(args, options))
    },
  })
}

export function usePostV1ConfigsConfigIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>,
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
  const mutationDefaults = getPostV1ConfigsConfigIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getV1EnvironmentsEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>
  >,
) {
  return ['v1', '/v1/environments/:environmentId', toValue(args)] as const
}

export function getV1EnvironmentsEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EnvironmentsEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.environments[':environmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EnvironmentsEnvironmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EnvironmentsEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.environments[':environmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1EnvironmentsEnvironmentIdMutationKey() {
  return ['v1', '/v1/environments/:environmentId', 'PUT'] as const
}

export function getPutV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
    ) {
      return parseResponse(client.v1.environments[':environmentId'].$put(args, options))
    },
  })
}

export function usePutV1EnvironmentsEnvironmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
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
  const mutationDefaults = getPutV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getDeleteV1EnvironmentsEnvironmentIdMutationKey() {
  return ['v1', '/v1/environments/:environmentId', 'DELETE'] as const
}

export function getDeleteV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
    ) {
      return parseResponse(client.v1.environments[':environmentId'].$delete(args, options))
    },
  })
}

export function useDeleteV1EnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
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
  const mutationDefaults = getDeleteV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey() {
  return [
    'v1',
    '/v1/environments/:environmentId/settings/:settingId/integrationLinks/:integrationLinkType/:key',
    'POST',
  ] as const
}

export function getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
          ':integrationLinkType'
        ][':key'].$post(args, options),
      )
    },
  })
}

export function usePostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey<
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
                  ReturnType<
                    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
          >,
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
  const mutationDefaults =
    getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
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

export function getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey() {
  return [
    'v1',
    '/v1/environments/:environmentId/settings/:settingId/integrationLinks/:integrationLinkType/:key',
    'DELETE',
  ] as const
}

export function getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
          ':integrationLinkType'
        ][':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey<
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
                  ReturnType<
                    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
          >,
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
  const mutationDefaults =
    getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
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

export function getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
    >
  >,
) {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', toValue(args)] as const
}

export function getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].value.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.environments[':environmentId'].settings[':settingId'].value.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey() {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', 'PUT'] as const
}

export function getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].value.$put(args, options),
      )
    },
  })
}

export function usePutV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
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
                  ReturnType<
                    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
          >,
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
  const mutationDefaults = getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
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

export function getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey() {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', 'PATCH'] as const
}

export function getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].value.$patch(args, options),
      )
    },
  })
}

export function usePatchV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
          >,
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
  const mutationDefaults = getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
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

export function getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
    >
  >,
) {
  return ['v1', '/v1/integrationLink/:integrationLinkType/:key/details', toValue(args)] as const
}

export function getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.integrationLink[':integrationLinkType'][':key'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IntegrationLinkIntegrationLinkTypeKeyDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.integrationLink[':integrationLinkType'][':key'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1JiraConnectMutationKey() {
  return ['v1', '/v1/jira/Connect', 'POST'] as const
}

export function getPostV1JiraConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jira.Connect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jira.Connect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JiraConnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jira.Connect.$post>) {
      return parseResponse(client.v1.jira.Connect.$post(args, options))
    },
  })
}

export function usePostV1JiraConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.jira.Connect.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.jira.Connect.$post>,
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
  const mutationDefaults = getPostV1JiraConnectMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationKey() {
  return [
    'v1',
    '/v1/jira/environments/:environmentId/settings/:settingId/integrationLinks/:key',
    'POST',
  ] as const
}

export function getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.jira.environments[':environmentId'].settings[':settingId'].integrationLinks[
          ':key'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKey<
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
                  ReturnType<
                    (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
          >,
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
  const mutationDefaults =
    getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationOptions<
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

export function getV1MeQueryKey() {
  return ['v1', '/v1/me'] as const
}

export function getV1MeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1MeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Me<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
          ReturnType<typeof getV1MeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1MeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsQueryKey() {
  return ['v1', '/v1/organizations'] as const
}

export function getV1OrganizationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OrganizationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          ReturnType<typeof getV1OrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OrganizationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdAuditlogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/auditlogs', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdAuditlogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdAuditlogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].auditlogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdAuditlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdAuditlogsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdAuditlogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdAuditlogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].auditlogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/members', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdMembersQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdMembersUserIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdMembersUserId<
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
                  ReturnType<
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
          >,
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdProductsMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/products', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['products']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['products']['$post']
      >,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].products.$post(args, options))
    },
  })
}

export function usePostV1OrganizationsOrganizationIdProducts<
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
                  ReturnType<
                    (typeof client.v1.organizations)[':organizationId']['products']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['products']['$post']
          >,
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdProductsMutationOptions<
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

export function getV1PermissionsPermissionGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>
  >,
) {
  return ['v1', '/v1/permissions/:permissionGroupId', toValue(args)] as const
}

export function getV1PermissionsPermissionGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PermissionsPermissionGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.permissions[':permissionGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PermissionsPermissionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PermissionsPermissionGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PermissionsPermissionGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PermissionsPermissionGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.permissions[':permissionGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PermissionsPermissionGroupIdMutationKey() {
  return ['v1', '/v1/permissions/:permissionGroupId', 'PUT'] as const
}

export function getPutV1PermissionsPermissionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PermissionsPermissionGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>,
    ) {
      return parseResponse(client.v1.permissions[':permissionGroupId'].$put(args, options))
    },
  })
}

export function usePutV1PermissionsPermissionGroupId<
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
                Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>,
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
  const mutationDefaults = getPutV1PermissionsPermissionGroupIdMutationOptions<
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

export function getDeleteV1PermissionsPermissionGroupIdMutationKey() {
  return ['v1', '/v1/permissions/:permissionGroupId', 'DELETE'] as const
}

export function getDeleteV1PermissionsPermissionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PermissionsPermissionGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>,
    ) {
      return parseResponse(client.v1.permissions[':permissionGroupId'].$delete(args, options))
    },
  })
}

export function useDeleteV1PermissionsPermissionGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>,
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
  const mutationDefaults = getDeleteV1PermissionsPermissionGroupIdMutationOptions<
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

export function getV1ProductsQueryKey() {
  return ['v1', '/v1/products'] as const
}

export function getV1ProductsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProductsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
          >,
          ReturnType<typeof getV1ProductsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProductsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProductsProductIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.products)[':productId']['$get']>>,
) {
  return ['v1', '/v1/products/:productId', toValue(args)] as const
}

export function getV1ProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.products)[':productId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.products)[':productId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProductsProductIdMutationKey() {
  return ['v1', '/v1/products/:productId', 'PUT'] as const
}

export function getPutV1ProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsProductIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.products)[':productId']['$put']>) {
      return parseResponse(client.v1.products[':productId'].$put(args, options))
    },
  })
}

export function usePutV1ProductsProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['$put']>,
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
  const mutationDefaults = getPutV1ProductsProductIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ProductsProductIdMutationKey() {
  return ['v1', '/v1/products/:productId', 'DELETE'] as const
}

export function getDeleteV1ProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsProductIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.products)[':productId']['$delete']>) {
      return parseResponse(client.v1.products[':productId'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProductsProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.products)[':productId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['$delete']>,
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
  const mutationDefaults = getDeleteV1ProductsProductIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProductsProductIdAuditlogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>
  >,
) {
  return ['v1', '/v1/products/:productId/auditlogs', toValue(args)] as const
}

export function getV1ProductsProductIdAuditlogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdAuditlogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].auditlogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductIdAuditlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdAuditlogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdAuditlogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdAuditlogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].auditlogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProductsProductIdConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>
  >,
) {
  return ['v1', '/v1/products/:productId/configs', toValue(args)] as const
}

export function getV1ProductsProductIdConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdConfigsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProductsProductIdConfigsMutationKey() {
  return ['v1', '/v1/products/:productId/configs', 'POST'] as const
}

export function getPostV1ProductsProductIdConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].configs.$post(args, options))
    },
  })
}

export function usePostV1ProductsProductIdConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>,
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
  const mutationDefaults = getPostV1ProductsProductIdConfigsMutationOptions<
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

export function getV1ProductsProductIdEnvironmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>
  >,
) {
  return ['v1', '/v1/products/:productId/environments', toValue(args)] as const
}

export function getV1ProductsProductIdEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductIdEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdEnvironmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProductsProductIdEnvironmentsMutationKey() {
  return ['v1', '/v1/products/:productId/environments', 'POST'] as const
}

export function getPostV1ProductsProductIdEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].environments.$post(args, options))
    },
  })
}

export function usePostV1ProductsProductIdEnvironments<
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
                  ReturnType<(typeof client.v1.products)[':productId']['environments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>,
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
  const mutationDefaults = getPostV1ProductsProductIdEnvironmentsMutationOptions<
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

export function getV1ProductsProductIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>
  >,
) {
  return ['v1', '/v1/products/:productId/members', toValue(args)] as const
}

export function getV1ProductsProductIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProductsProductIdMembersInviteMutationKey() {
  return ['v1', '/v1/products/:productId/members/invite', 'POST'] as const
}

export function getPostV1ProductsProductIdMembersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdMembersInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.products)[':productId']['members']['invite']['$post']
      >,
    ) {
      return parseResponse(client.v1.products[':productId'].members.invite.$post(args, options))
    },
  })
}

export function usePostV1ProductsProductIdMembersInvite<
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
                  ReturnType<
                    (typeof client.v1.products)[':productId']['members']['invite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>,
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
  const mutationDefaults = getPostV1ProductsProductIdMembersInviteMutationOptions<
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

export function getDeleteV1ProductsProductIdMembersUserIdMutationKey() {
  return ['v1', '/v1/products/:productId/members/:userId', 'DELETE'] as const
}

export function getDeleteV1ProductsProductIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.products)[':productId']['members'][':userId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsProductIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.products[':productId'].members[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProductsProductIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1ProductsProductIdMembersUserIdMutationOptions<
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

export function getV1ProductsProductIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>
  >,
) {
  return ['v1', '/v1/products/:productId/permissions', toValue(args)] as const
}

export function getV1ProductsProductIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProductsProductIdPermissionsMutationKey() {
  return ['v1', '/v1/products/:productId/permissions', 'POST'] as const
}

export function getPostV1ProductsProductIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].permissions.$post(args, options))
    },
  })
}

export function usePostV1ProductsProductIdPermissions<
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
                  ReturnType<(typeof client.v1.products)[':productId']['permissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>,
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
  const mutationDefaults = getPostV1ProductsProductIdPermissionsMutationOptions<
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

export function getV1ProductsProductIdSegmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>
  >,
) {
  return ['v1', '/v1/products/:productId/segments', toValue(args)] as const
}

export function getV1ProductsProductIdSegmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdSegmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProductsProductIdSegmentsMutationKey() {
  return ['v1', '/v1/products/:productId/segments', 'POST'] as const
}

export function getPostV1ProductsProductIdSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].segments.$post(args, options))
    },
  })
}

export function usePostV1ProductsProductIdSegments<
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
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>,
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
  const mutationDefaults = getPostV1ProductsProductIdSegmentsMutationOptions<
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

export function getV1ProductsProductIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>
  >,
) {
  return ['v1', '/v1/products/:productId/tags', toValue(args)] as const
}

export function getV1ProductsProductIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProductsProductIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.products[':productId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProductsProductIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProductsProductIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProductsProductIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.products[':productId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProductsProductIdTagsMutationKey() {
  return ['v1', '/v1/products/:productId/tags', 'POST'] as const
}

export function getPostV1ProductsProductIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].tags.$post(args, options))
    },
  })
}

export function usePostV1ProductsProductIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>,
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
  const mutationDefaults = getPostV1ProductsProductIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getV1SegmentsSegmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>>,
) {
  return ['v1', '/v1/segments/:segmentId', toValue(args)] as const
}

export function getV1SegmentsSegmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SegmentsSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.segments[':segmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SegmentsSegmentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SegmentsSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SegmentsSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.segments[':segmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1SegmentsSegmentIdMutationKey() {
  return ['v1', '/v1/segments/:segmentId', 'PUT'] as const
}

export function getPutV1SegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SegmentsSegmentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>) {
      return parseResponse(client.v1.segments[':segmentId'].$put(args, options))
    },
  })
}

export function usePutV1SegmentsSegmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>,
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
  const mutationDefaults = getPutV1SegmentsSegmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SegmentsSegmentIdMutationKey() {
  return ['v1', '/v1/segments/:segmentId', 'DELETE'] as const
}

export function getDeleteV1SegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SegmentsSegmentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>) {
      return parseResponse(client.v1.segments[':segmentId'].$delete(args, options))
    },
  })
}

export function useDeleteV1SegmentsSegmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>,
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
  const mutationDefaults = getDeleteV1SegmentsSegmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SettingsSettingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>>,
) {
  return ['v1', '/v1/settings/:settingId', toValue(args)] as const
}

export function getV1SettingsSettingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SettingsSettingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.settings[':settingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SettingsSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SettingsSettingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsSettingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SettingsSettingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.settings[':settingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1SettingsSettingIdMutationKey() {
  return ['v1', '/v1/settings/:settingId', 'DELETE'] as const
}

export function getDeleteV1SettingsSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SettingsSettingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>) {
      return parseResponse(client.v1.settings[':settingId'].$delete(args, options))
    },
  })
}

export function useDeleteV1SettingsSettingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>,
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
  const mutationDefaults = getDeleteV1SettingsSettingIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1SettingsSettingIdMutationKey() {
  return ['v1', '/v1/settings/:settingId', 'PATCH'] as const
}

export function getPatchV1SettingsSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SettingsSettingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>) {
      return parseResponse(client.v1.settings[':settingId'].$patch(args, options))
    },
  })
}

export function usePatchV1SettingsSettingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>,
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
  const mutationDefaults = getPatchV1SettingsSettingIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SettingsSettingKeyOrIdValueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/settings/:settingKeyOrId/value', keyArgs] as const
}

export function getV1SettingsSettingKeyOrIdValueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SettingsSettingKeyOrIdValueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.settings[':settingKeyOrId'].value.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SettingsSettingKeyOrIdValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SettingsSettingKeyOrIdValueQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsSettingKeyOrIdValueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SettingsSettingKeyOrIdValueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.settings[':settingKeyOrId'].value.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1SettingsSettingKeyOrIdValueMutationKey() {
  return ['v1', '/v1/settings/:settingKeyOrId/value', 'PUT'] as const
}

export function getPutV1SettingsSettingKeyOrIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SettingsSettingKeyOrIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>,
    ) {
      return parseResponse(client.v1.settings[':settingKeyOrId'].value.$put(args, options))
    },
  })
}

export function usePutV1SettingsSettingKeyOrIdValue<
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
                Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>,
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
  const mutationDefaults = getPutV1SettingsSettingKeyOrIdValueMutationOptions<
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

export function getPatchV1SettingsSettingKeyOrIdValueMutationKey() {
  return ['v1', '/v1/settings/:settingKeyOrId/value', 'PATCH'] as const
}

export function getPatchV1SettingsSettingKeyOrIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SettingsSettingKeyOrIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>,
    ) {
      return parseResponse(client.v1.settings[':settingKeyOrId'].value.$patch(args, options))
    },
  })
}

export function usePatchV1SettingsSettingKeyOrIdValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>,
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
  const mutationDefaults = getPatchV1SettingsSettingKeyOrIdValueMutationOptions<
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

export function getV1TagsTagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>>,
) {
  return ['v1', '/v1/tags/:tagId', toValue(args)] as const
}

export function getV1TagsTagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TagsTagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tags[':tagId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TagsTagIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsTagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TagsTagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tags[':tagId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TagsTagIdMutationKey() {
  return ['v1', '/v1/tags/:tagId', 'PUT'] as const
}

export function getPutV1TagsTagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>) {
      return parseResponse(client.v1.tags[':tagId'].$put(args, options))
    },
  })
}

export function usePutV1TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>,
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
  const mutationDefaults = getPutV1TagsTagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TagsTagIdMutationKey() {
  return ['v1', '/v1/tags/:tagId', 'DELETE'] as const
}

export function getDeleteV1TagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>) {
      return parseResponse(client.v1.tags[':tagId'].$delete(args, options))
    },
  })
}

export function useDeleteV1TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>,
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
  const mutationDefaults = getDeleteV1TagsTagIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1TagsTagIdSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>,
) {
  return ['v1', '/v1/tags/:tagId/settings', toValue(args)] as const
}

export function getV1TagsTagIdSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TagsTagIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tags[':tagId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TagsTagIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TagsTagIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsTagIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TagsTagIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tags[':tagId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
