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

export function getAuthKey() {
  return ['auth'] as const
}

export function getDataSourcesKey() {
  return ['data-sources'] as const
}

export function getEntitiesKey() {
  return ['entities'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getInfraKey() {
  return ['infra'] as const
}

export function getMicroSegKey() {
  return ['micro-seg'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getPostAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function getPostAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.$post>) {
      return parseResponse(client.auth.token.$post(args, options))
    },
  })
}

export function usePostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.token.$post>,
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
  const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'DELETE'] as const
}

export function getDeleteAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.token.$delete(undefined, options))
    },
  })
}

export function useDeleteAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataSourcesAristaSwitchesQueryKey() {
  return ['data-sources', '/data-sources/arista-switches'] as const
}

export function getDataSourcesAristaSwitchesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesAristaSwitchesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['arista-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesAristaSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesAristaSwitchesQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesAristaSwitchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesAristaSwitchesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['arista-switches'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesAristaSwitchesMutationKey() {
  return ['data-sources', '/data-sources/arista-switches', 'POST'] as const
}

export function getPostDataSourcesAristaSwitchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['arista-switches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesAristaSwitchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['arista-switches']['$post']>,
    ) {
      return parseResponse(client['data-sources']['arista-switches'].$post(args, options))
    },
  })
}

export function usePostDataSourcesAristaSwitches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['arista-switches']['$post']>,
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
  const mutationDefaults = getPostDataSourcesAristaSwitchesMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesAristaSwitchesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/arista-switches/:id', toValue(args)] as const
}

export function getDataSourcesAristaSwitchesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesAristaSwitchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['arista-switches'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesAristaSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>
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
                  ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesAristaSwitchesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesAristaSwitchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesAristaSwitchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['arista-switches'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesAristaSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/arista-switches/:id', 'PUT'] as const
}

export function getPutDataSourcesAristaSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesAristaSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['arista-switches'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesAristaSwitchesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesAristaSwitchesIdMutationOptions<
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

export function getDeleteDataSourcesAristaSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/arista-switches/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesAristaSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesAristaSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['arista-switches'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesAristaSwitchesId<
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
                  ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesAristaSwitchesIdMutationOptions<
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

export function getPostDataSourcesAristaSwitchesIdDisableMutationKey() {
  return ['data-sources', '/data-sources/arista-switches/:id/disable', 'POST'] as const
}

export function getPostDataSourcesAristaSwitchesIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesAristaSwitchesIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['arista-switches'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesAristaSwitchesIdDisable<
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
                    (typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesAristaSwitchesIdDisableMutationOptions<
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

export function getPostDataSourcesAristaSwitchesIdEnableMutationKey() {
  return ['data-sources', '/data-sources/arista-switches/:id/enable', 'POST'] as const
}

export function getPostDataSourcesAristaSwitchesIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesAristaSwitchesIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['arista-switches'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesAristaSwitchesIdEnable<
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
                    (typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesAristaSwitchesIdEnableMutationOptions<
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

export function getDataSourcesAristaSwitchesIdSnmpConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
    >
  >,
) {
  return ['data-sources', '/data-sources/arista-switches/:id/snmp-config', toValue(args)] as const
}

export function getDataSourcesAristaSwitchesIdSnmpConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesAristaSwitchesIdSnmpConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['arista-switches'][':id']['snmp-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesAristaSwitchesIdSnmpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesAristaSwitchesIdSnmpConfigQueryKey>
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
              (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesAristaSwitchesIdSnmpConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesAristaSwitchesIdSnmpConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['arista-switches'][':id']['snmp-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesAristaSwitchesIdSnmpConfigMutationKey() {
  return ['data-sources', '/data-sources/arista-switches/:id/snmp-config', 'PUT'] as const
}

export function getPutDataSourcesAristaSwitchesIdSnmpConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesAristaSwitchesIdSnmpConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['arista-switches'][':id']['snmp-config'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesAristaSwitchesIdSnmpConfig<
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
                    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
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
  const mutationDefaults = getPutDataSourcesAristaSwitchesIdSnmpConfigMutationOptions<
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

export function getDataSourcesBrocadeSwitchesQueryKey() {
  return ['data-sources', '/data-sources/brocade-switches'] as const
}

export function getDataSourcesBrocadeSwitchesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesBrocadeSwitchesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['brocade-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesBrocadeSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesBrocadeSwitchesQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesBrocadeSwitchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesBrocadeSwitchesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['brocade-switches'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesBrocadeSwitchesMutationKey() {
  return ['data-sources', '/data-sources/brocade-switches', 'POST'] as const
}

export function getPostDataSourcesBrocadeSwitchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['brocade-switches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesBrocadeSwitchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['brocade-switches']['$post']>,
    ) {
      return parseResponse(client['data-sources']['brocade-switches'].$post(args, options))
    },
  })
}

export function usePostDataSourcesBrocadeSwitches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['brocade-switches']['$post']>,
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
  const mutationDefaults = getPostDataSourcesBrocadeSwitchesMutationOptions<
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

export function getDataSourcesBrocadeSwitchesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/brocade-switches/:id', toValue(args)] as const
}

export function getDataSourcesBrocadeSwitchesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesBrocadeSwitchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['brocade-switches'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesBrocadeSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>
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
                  ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesBrocadeSwitchesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesBrocadeSwitchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesBrocadeSwitchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['brocade-switches'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesBrocadeSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id', 'PUT'] as const
}

export function getPutDataSourcesBrocadeSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesBrocadeSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['brocade-switches'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesBrocadeSwitchesId<
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
                  ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesBrocadeSwitchesIdMutationOptions<
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

export function getDeleteDataSourcesBrocadeSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesBrocadeSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesBrocadeSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['brocade-switches'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesBrocadeSwitchesId<
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
                  ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesBrocadeSwitchesIdMutationOptions<
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

export function getPostDataSourcesBrocadeSwitchesIdDisableMutationKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id/disable', 'POST'] as const
}

export function getPostDataSourcesBrocadeSwitchesIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesBrocadeSwitchesIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['brocade-switches'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesBrocadeSwitchesIdDisable<
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
                    (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesBrocadeSwitchesIdDisableMutationOptions<
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

export function getPostDataSourcesBrocadeSwitchesIdEnableMutationKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id/enable', 'POST'] as const
}

export function getPostDataSourcesBrocadeSwitchesIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesBrocadeSwitchesIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['brocade-switches'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesBrocadeSwitchesIdEnable<
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
                    (typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesBrocadeSwitchesIdEnableMutationOptions<
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

export function getDataSourcesBrocadeSwitchesIdSnmpConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
    >
  >,
) {
  return ['data-sources', '/data-sources/brocade-switches/:id/snmp-config', toValue(args)] as const
}

export function getDataSourcesBrocadeSwitchesIdSnmpConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesBrocadeSwitchesIdSnmpConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['brocade-switches'][':id']['snmp-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesBrocadeSwitchesIdSnmpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesBrocadeSwitchesIdSnmpConfigQueryKey>
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
              (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesBrocadeSwitchesIdSnmpConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesBrocadeSwitchesIdSnmpConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['brocade-switches'][':id']['snmp-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesBrocadeSwitchesIdSnmpConfigMutationKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id/snmp-config', 'PUT'] as const
}

export function getPutDataSourcesBrocadeSwitchesIdSnmpConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesBrocadeSwitchesIdSnmpConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['brocade-switches'][':id']['snmp-config'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesBrocadeSwitchesIdSnmpConfig<
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
                    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
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
  const mutationDefaults = getPutDataSourcesBrocadeSwitchesIdSnmpConfigMutationOptions<
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

export function getDataSourcesCheckpointFirewallsQueryKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls'] as const
}

export function getDataSourcesCheckpointFirewallsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesCheckpointFirewallsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesCheckpointFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesCheckpointFirewallsQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesCheckpointFirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesCheckpointFirewallsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['checkpoint-firewalls'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesCheckpointFirewallsMutationKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls', 'POST'] as const
}

export function getPostDataSourcesCheckpointFirewallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesCheckpointFirewallsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>,
    ) {
      return parseResponse(client['data-sources']['checkpoint-firewalls'].$post(args, options))
    },
  })
}

export function usePostDataSourcesCheckpointFirewalls<
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
                  ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>,
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
  const mutationDefaults = getPostDataSourcesCheckpointFirewallsMutationOptions<
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

export function getDataSourcesCheckpointFirewallsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id', toValue(args)] as const
}

export function getDataSourcesCheckpointFirewallsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesCheckpointFirewallsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesCheckpointFirewallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
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
                  ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesCheckpointFirewallsIdQueryKey>
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
            ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesCheckpointFirewallsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesCheckpointFirewallsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['checkpoint-firewalls'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesCheckpointFirewallsIdMutationKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id', 'PUT'] as const
}

export function getPutDataSourcesCheckpointFirewallsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesCheckpointFirewallsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'][':id'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesCheckpointFirewallsId<
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
                  ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesCheckpointFirewallsIdMutationOptions<
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

export function getDeleteDataSourcesCheckpointFirewallsIdMutationKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesCheckpointFirewallsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesCheckpointFirewallsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDataSourcesCheckpointFirewallsId<
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
                    (typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']
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
  const mutationDefaults = getDeleteDataSourcesCheckpointFirewallsIdMutationOptions<
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

export function getPostDataSourcesCheckpointFirewallsIdDisableMutationKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id/disable', 'POST'] as const
}

export function getPostDataSourcesCheckpointFirewallsIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesCheckpointFirewallsIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesCheckpointFirewallsIdDisable<
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
                    (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesCheckpointFirewallsIdDisableMutationOptions<
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

export function getPostDataSourcesCheckpointFirewallsIdEnableMutationKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id/enable', 'POST'] as const
}

export function getPostDataSourcesCheckpointFirewallsIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesCheckpointFirewallsIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesCheckpointFirewallsIdEnable<
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
                    (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesCheckpointFirewallsIdEnableMutationOptions<
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

export function getDataSourcesCiscoSwitchesQueryKey() {
  return ['data-sources', '/data-sources/cisco-switches'] as const
}

export function getDataSourcesCiscoSwitchesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesCiscoSwitchesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['cisco-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesCiscoSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesCiscoSwitchesQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesCiscoSwitchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesCiscoSwitchesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['cisco-switches'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesCiscoSwitchesMutationKey() {
  return ['data-sources', '/data-sources/cisco-switches', 'POST'] as const
}

export function getPostDataSourcesCiscoSwitchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['cisco-switches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesCiscoSwitchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['cisco-switches']['$post']>,
    ) {
      return parseResponse(client['data-sources']['cisco-switches'].$post(args, options))
    },
  })
}

export function usePostDataSourcesCiscoSwitches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['cisco-switches']['$post']>,
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
  const mutationDefaults = getPostDataSourcesCiscoSwitchesMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesCiscoSwitchesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/cisco-switches/:id', toValue(args)] as const
}

export function getDataSourcesCiscoSwitchesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesCiscoSwitchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['cisco-switches'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesCiscoSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>
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
                  ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesCiscoSwitchesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesCiscoSwitchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesCiscoSwitchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['cisco-switches'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesCiscoSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id', 'PUT'] as const
}

export function getPutDataSourcesCiscoSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesCiscoSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['cisco-switches'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesCiscoSwitchesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesCiscoSwitchesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDataSourcesCiscoSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesCiscoSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesCiscoSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['cisco-switches'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesCiscoSwitchesId<
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
                  ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesCiscoSwitchesIdMutationOptions<
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

export function getPostDataSourcesCiscoSwitchesIdDisableMutationKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id/disable', 'POST'] as const
}

export function getPostDataSourcesCiscoSwitchesIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesCiscoSwitchesIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['cisco-switches'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesCiscoSwitchesIdDisable<
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
                    (typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesCiscoSwitchesIdDisableMutationOptions<
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

export function getPostDataSourcesCiscoSwitchesIdEnableMutationKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id/enable', 'POST'] as const
}

export function getPostDataSourcesCiscoSwitchesIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesCiscoSwitchesIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['cisco-switches'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesCiscoSwitchesIdEnable<
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
                    (typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesCiscoSwitchesIdEnableMutationOptions<
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

export function getDataSourcesCiscoSwitchesIdSnmpConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
    >
  >,
) {
  return ['data-sources', '/data-sources/cisco-switches/:id/snmp-config', toValue(args)] as const
}

export function getDataSourcesCiscoSwitchesIdSnmpConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesCiscoSwitchesIdSnmpConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['cisco-switches'][':id']['snmp-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesCiscoSwitchesIdSnmpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesCiscoSwitchesIdSnmpConfigQueryKey>
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
              (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesCiscoSwitchesIdSnmpConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesCiscoSwitchesIdSnmpConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['cisco-switches'][':id']['snmp-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesCiscoSwitchesIdSnmpConfigMutationKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id/snmp-config', 'PUT'] as const
}

export function getPutDataSourcesCiscoSwitchesIdSnmpConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesCiscoSwitchesIdSnmpConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['cisco-switches'][':id']['snmp-config'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesCiscoSwitchesIdSnmpConfig<
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
                    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
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
  const mutationDefaults = getPutDataSourcesCiscoSwitchesIdSnmpConfigMutationOptions<
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

export function getDataSourcesDellSwitchesQueryKey() {
  return ['data-sources', '/data-sources/dell-switches'] as const
}

export function getDataSourcesDellSwitchesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesDellSwitchesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['dell-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesDellSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesDellSwitchesQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesDellSwitchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesDellSwitchesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['dell-switches'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesDellSwitchesMutationKey() {
  return ['data-sources', '/data-sources/dell-switches', 'POST'] as const
}

export function getPostDataSourcesDellSwitchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['dell-switches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesDellSwitchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['dell-switches']['$post']>,
    ) {
      return parseResponse(client['data-sources']['dell-switches'].$post(args, options))
    },
  })
}

export function usePostDataSourcesDellSwitches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['dell-switches']['$post']>,
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
  const mutationDefaults = getPostDataSourcesDellSwitchesMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesDellSwitchesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/dell-switches/:id', toValue(args)] as const
}

export function getDataSourcesDellSwitchesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesDellSwitchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['dell-switches'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesDellSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesDellSwitchesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesDellSwitchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesDellSwitchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['dell-switches'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesDellSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/dell-switches/:id', 'PUT'] as const
}

export function getPutDataSourcesDellSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesDellSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['dell-switches'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesDellSwitchesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesDellSwitchesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDataSourcesDellSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/dell-switches/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesDellSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesDellSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['dell-switches'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesDellSwitchesId<
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
                  ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesDellSwitchesIdMutationOptions<
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

export function getPostDataSourcesDellSwitchesIdDisableMutationKey() {
  return ['data-sources', '/data-sources/dell-switches/:id/disable', 'POST'] as const
}

export function getPostDataSourcesDellSwitchesIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesDellSwitchesIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['dell-switches'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesDellSwitchesIdDisable<
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
                    (typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesDellSwitchesIdDisableMutationOptions<
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

export function getPostDataSourcesDellSwitchesIdEnableMutationKey() {
  return ['data-sources', '/data-sources/dell-switches/:id/enable', 'POST'] as const
}

export function getPostDataSourcesDellSwitchesIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesDellSwitchesIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['dell-switches'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesDellSwitchesIdEnable<
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
                    (typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesDellSwitchesIdEnableMutationOptions<
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

export function getDataSourcesDellSwitchesIdSnmpConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/dell-switches/:id/snmp-config', toValue(args)] as const
}

export function getDataSourcesDellSwitchesIdSnmpConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesDellSwitchesIdSnmpConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['dell-switches'][':id']['snmp-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesDellSwitchesIdSnmpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']>
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
                    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesDellSwitchesIdSnmpConfigQueryKey>
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
              (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesDellSwitchesIdSnmpConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesDellSwitchesIdSnmpConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['dell-switches'][':id']['snmp-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesDellSwitchesIdSnmpConfigMutationKey() {
  return ['data-sources', '/data-sources/dell-switches/:id/snmp-config', 'PUT'] as const
}

export function getPutDataSourcesDellSwitchesIdSnmpConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesDellSwitchesIdSnmpConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['dell-switches'][':id']['snmp-config'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesDellSwitchesIdSnmpConfig<
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
                    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
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
  const mutationDefaults = getPutDataSourcesDellSwitchesIdSnmpConfigMutationOptions<
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

export function getDataSourcesHpovManagersQueryKey() {
  return ['data-sources', '/data-sources/hpov-managers'] as const
}

export function getDataSourcesHpovManagersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesHpovManagersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['hpov-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesHpovManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesHpovManagersQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesHpovManagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesHpovManagersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['hpov-managers'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesHpovManagersMutationKey() {
  return ['data-sources', '/data-sources/hpov-managers', 'POST'] as const
}

export function getPostDataSourcesHpovManagersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpov-managers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesHpovManagersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['hpov-managers']['$post']>,
    ) {
      return parseResponse(client['data-sources']['hpov-managers'].$post(args, options))
    },
  })
}

export function usePostDataSourcesHpovManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['hpov-managers']['$post']>,
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
  const mutationDefaults = getPostDataSourcesHpovManagersMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesHpovManagersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/hpov-managers/:id', toValue(args)] as const
}

export function getDataSourcesHpovManagersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesHpovManagersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['hpov-managers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesHpovManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesHpovManagersIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesHpovManagersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesHpovManagersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['hpov-managers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesHpovManagersIdMutationKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id', 'PUT'] as const
}

export function getPutDataSourcesHpovManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesHpovManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['hpov-managers'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesHpovManagersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesHpovManagersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDataSourcesHpovManagersIdMutationKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesHpovManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesHpovManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['hpov-managers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesHpovManagersId<
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
                  ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesHpovManagersIdMutationOptions<
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

export function getPostDataSourcesHpovManagersIdDisableMutationKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id/disable', 'POST'] as const
}

export function getPostDataSourcesHpovManagersIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesHpovManagersIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['hpov-managers'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesHpovManagersIdDisable<
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
                    (typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesHpovManagersIdDisableMutationOptions<
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

export function getPostDataSourcesHpovManagersIdEnableMutationKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id/enable', 'POST'] as const
}

export function getPostDataSourcesHpovManagersIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesHpovManagersIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['hpov-managers'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesHpovManagersIdEnable<
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
                    (typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesHpovManagersIdEnableMutationOptions<
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

export function getDataSourcesHpvcManagersQueryKey() {
  return ['data-sources', '/data-sources/hpvc-managers'] as const
}

export function getDataSourcesHpvcManagersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesHpvcManagersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['hpvc-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesHpvcManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesHpvcManagersQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesHpvcManagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesHpvcManagersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['hpvc-managers'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesHpvcManagersMutationKey() {
  return ['data-sources', '/data-sources/hpvc-managers', 'POST'] as const
}

export function getPostDataSourcesHpvcManagersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesHpvcManagersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['hpvc-managers']['$post']>,
    ) {
      return parseResponse(client['data-sources']['hpvc-managers'].$post(args, options))
    },
  })
}

export function usePostDataSourcesHpvcManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['hpvc-managers']['$post']>,
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
  const mutationDefaults = getPostDataSourcesHpvcManagersMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesHpvcManagersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/hpvc-managers/:id', toValue(args)] as const
}

export function getDataSourcesHpvcManagersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesHpvcManagersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['hpvc-managers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesHpvcManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesHpvcManagersIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesHpvcManagersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesHpvcManagersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['hpvc-managers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesHpvcManagersIdMutationKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id', 'PUT'] as const
}

export function getPutDataSourcesHpvcManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesHpvcManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['hpvc-managers'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesHpvcManagersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesHpvcManagersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDataSourcesHpvcManagersIdMutationKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesHpvcManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesHpvcManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['hpvc-managers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesHpvcManagersId<
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
                  ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesHpvcManagersIdMutationOptions<
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

export function getPostDataSourcesHpvcManagersIdDisableMutationKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id/disable', 'POST'] as const
}

export function getPostDataSourcesHpvcManagersIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesHpvcManagersIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['hpvc-managers'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesHpvcManagersIdDisable<
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
                    (typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesHpvcManagersIdDisableMutationOptions<
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

export function getPostDataSourcesHpvcManagersIdEnableMutationKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id/enable', 'POST'] as const
}

export function getPostDataSourcesHpvcManagersIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesHpvcManagersIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['hpvc-managers'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesHpvcManagersIdEnable<
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
                    (typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesHpvcManagersIdEnableMutationOptions<
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

export function getDataSourcesJuniperSwitchesQueryKey() {
  return ['data-sources', '/data-sources/juniper-switches'] as const
}

export function getDataSourcesJuniperSwitchesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesJuniperSwitchesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['juniper-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesJuniperSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesJuniperSwitchesQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesJuniperSwitchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesJuniperSwitchesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['juniper-switches'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesJuniperSwitchesMutationKey() {
  return ['data-sources', '/data-sources/juniper-switches', 'POST'] as const
}

export function getPostDataSourcesJuniperSwitchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['juniper-switches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesJuniperSwitchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['juniper-switches']['$post']>,
    ) {
      return parseResponse(client['data-sources']['juniper-switches'].$post(args, options))
    },
  })
}

export function usePostDataSourcesJuniperSwitches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['juniper-switches']['$post']>,
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
  const mutationDefaults = getPostDataSourcesJuniperSwitchesMutationOptions<
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

export function getDataSourcesJuniperSwitchesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/juniper-switches/:id', toValue(args)] as const
}

export function getDataSourcesJuniperSwitchesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesJuniperSwitchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['juniper-switches'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesJuniperSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>
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
                  ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesJuniperSwitchesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesJuniperSwitchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesJuniperSwitchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['juniper-switches'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesJuniperSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id', 'PUT'] as const
}

export function getPutDataSourcesJuniperSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesJuniperSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['juniper-switches'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesJuniperSwitchesId<
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
                  ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesJuniperSwitchesIdMutationOptions<
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

export function getDeleteDataSourcesJuniperSwitchesIdMutationKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesJuniperSwitchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesJuniperSwitchesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['juniper-switches'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesJuniperSwitchesId<
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
                  ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesJuniperSwitchesIdMutationOptions<
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

export function getPostDataSourcesJuniperSwitchesIdDisableMutationKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id/disable', 'POST'] as const
}

export function getPostDataSourcesJuniperSwitchesIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesJuniperSwitchesIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['juniper-switches'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesJuniperSwitchesIdDisable<
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
                    (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesJuniperSwitchesIdDisableMutationOptions<
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

export function getPostDataSourcesJuniperSwitchesIdEnableMutationKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id/enable', 'POST'] as const
}

export function getPostDataSourcesJuniperSwitchesIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesJuniperSwitchesIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['juniper-switches'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesJuniperSwitchesIdEnable<
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
                    (typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesJuniperSwitchesIdEnableMutationOptions<
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

export function getDataSourcesJuniperSwitchesIdSnmpConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
    >
  >,
) {
  return ['data-sources', '/data-sources/juniper-switches/:id/snmp-config', toValue(args)] as const
}

export function getDataSourcesJuniperSwitchesIdSnmpConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesJuniperSwitchesIdSnmpConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['juniper-switches'][':id']['snmp-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesJuniperSwitchesIdSnmpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesJuniperSwitchesIdSnmpConfigQueryKey>
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
              (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesJuniperSwitchesIdSnmpConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesJuniperSwitchesIdSnmpConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['juniper-switches'][':id']['snmp-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesJuniperSwitchesIdSnmpConfigMutationKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id/snmp-config', 'PUT'] as const
}

export function getPutDataSourcesJuniperSwitchesIdSnmpConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesJuniperSwitchesIdSnmpConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['juniper-switches'][':id']['snmp-config'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesJuniperSwitchesIdSnmpConfig<
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
                    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
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
  const mutationDefaults = getPutDataSourcesJuniperSwitchesIdSnmpConfigMutationOptions<
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

export function getDataSourcesNsxvManagersQueryKey() {
  return ['data-sources', '/data-sources/nsxv-managers'] as const
}

export function getDataSourcesNsxvManagersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesNsxvManagersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['nsxv-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesNsxvManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesNsxvManagersQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesNsxvManagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesNsxvManagersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['nsxv-managers'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesNsxvManagersMutationKey() {
  return ['data-sources', '/data-sources/nsxv-managers', 'POST'] as const
}

export function getPostDataSourcesNsxvManagersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesNsxvManagersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['nsxv-managers']['$post']>,
    ) {
      return parseResponse(client['data-sources']['nsxv-managers'].$post(args, options))
    },
  })
}

export function usePostDataSourcesNsxvManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['nsxv-managers']['$post']>,
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
  const mutationDefaults = getPostDataSourcesNsxvManagersMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesNsxvManagersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/nsxv-managers/:id', toValue(args)] as const
}

export function getDataSourcesNsxvManagersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesNsxvManagersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['nsxv-managers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesNsxvManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesNsxvManagersIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesNsxvManagersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesNsxvManagersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['nsxv-managers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesNsxvManagersIdMutationKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id', 'PUT'] as const
}

export function getPutDataSourcesNsxvManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesNsxvManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['nsxv-managers'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesNsxvManagersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesNsxvManagersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDataSourcesNsxvManagersIdMutationKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesNsxvManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesNsxvManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['nsxv-managers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesNsxvManagersId<
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
                  ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesNsxvManagersIdMutationOptions<
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

export function getDataSourcesNsxvManagersIdControllerClusterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
    >
  >,
) {
  return [
    'data-sources',
    '/data-sources/nsxv-managers/:id/controller-cluster',
    toValue(args),
  ] as const
}

export function getDataSourcesNsxvManagersIdControllerClusterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesNsxvManagersIdControllerClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesNsxvManagersIdControllerCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
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
                    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
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
                    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesNsxvManagersIdControllerClusterQueryKey>
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
              (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesNsxvManagersIdControllerClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesNsxvManagersIdControllerClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesNsxvManagersIdControllerClusterMutationKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id/controller-cluster', 'PUT'] as const
}

export function getPutDataSourcesNsxvManagersIdControllerClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesNsxvManagersIdControllerClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesNsxvManagersIdControllerCluster<
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
                    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
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
  const mutationDefaults = getPutDataSourcesNsxvManagersIdControllerClusterMutationOptions<
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

export function getPostDataSourcesNsxvManagersIdDisableMutationKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id/disable', 'POST'] as const
}

export function getPostDataSourcesNsxvManagersIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesNsxvManagersIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['nsxv-managers'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesNsxvManagersIdDisable<
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
                    (typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesNsxvManagersIdDisableMutationOptions<
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

export function getPostDataSourcesNsxvManagersIdEnableMutationKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id/enable', 'POST'] as const
}

export function getPostDataSourcesNsxvManagersIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesNsxvManagersIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['nsxv-managers'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesNsxvManagersIdEnable<
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
                    (typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesNsxvManagersIdEnableMutationOptions<
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

export function getDataSourcesPanoramaFirewallsQueryKey() {
  return ['data-sources', '/data-sources/panorama-firewalls'] as const
}

export function getDataSourcesPanoramaFirewallsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesPanoramaFirewallsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['panorama-firewalls'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesPanoramaFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesPanoramaFirewallsQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesPanoramaFirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesPanoramaFirewallsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['panorama-firewalls'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesPanoramaFirewallsMutationKey() {
  return ['data-sources', '/data-sources/panorama-firewalls', 'POST'] as const
}

export function getPostDataSourcesPanoramaFirewallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesPanoramaFirewallsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls']['$post']>,
    ) {
      return parseResponse(client['data-sources']['panorama-firewalls'].$post(args, options))
    },
  })
}

export function usePostDataSourcesPanoramaFirewalls<
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
                Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['panorama-firewalls']['$post']>,
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
  const mutationDefaults = getPostDataSourcesPanoramaFirewallsMutationOptions<
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

export function getDataSourcesPanoramaFirewallsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/panorama-firewalls/:id', toValue(args)] as const
}

export function getDataSourcesPanoramaFirewallsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesPanoramaFirewallsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['panorama-firewalls'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesPanoramaFirewallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
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
                  ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesPanoramaFirewallsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesPanoramaFirewallsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesPanoramaFirewallsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['panorama-firewalls'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesPanoramaFirewallsIdMutationKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id', 'PUT'] as const
}

export function getPutDataSourcesPanoramaFirewallsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesPanoramaFirewallsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['panorama-firewalls'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesPanoramaFirewallsId<
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
                  ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesPanoramaFirewallsIdMutationOptions<
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

export function getDeleteDataSourcesPanoramaFirewallsIdMutationKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesPanoramaFirewallsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesPanoramaFirewallsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client['data-sources']['panorama-firewalls'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDataSourcesPanoramaFirewallsId<
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
                    (typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesPanoramaFirewallsIdMutationOptions<
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

export function getPostDataSourcesPanoramaFirewallsIdDisableMutationKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id/disable', 'POST'] as const
}

export function getPostDataSourcesPanoramaFirewallsIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesPanoramaFirewallsIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['panorama-firewalls'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesPanoramaFirewallsIdDisable<
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
                    (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesPanoramaFirewallsIdDisableMutationOptions<
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

export function getPostDataSourcesPanoramaFirewallsIdEnableMutationKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id/enable', 'POST'] as const
}

export function getPostDataSourcesPanoramaFirewallsIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesPanoramaFirewallsIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['panorama-firewalls'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesPanoramaFirewallsIdEnable<
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
                    (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesPanoramaFirewallsIdEnableMutationOptions<
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

export function getDataSourcesUcsManagersQueryKey() {
  return ['data-sources', '/data-sources/ucs-managers'] as const
}

export function getDataSourcesUcsManagersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesUcsManagersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['ucs-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesUcsManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesUcsManagersQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesUcsManagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesUcsManagersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['ucs-managers'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesUcsManagersMutationKey() {
  return ['data-sources', '/data-sources/ucs-managers', 'POST'] as const
}

export function getPostDataSourcesUcsManagersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['ucs-managers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesUcsManagersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['ucs-managers']['$post']>,
    ) {
      return parseResponse(client['data-sources']['ucs-managers'].$post(args, options))
    },
  })
}

export function usePostDataSourcesUcsManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['ucs-managers']['$post']>,
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
  const mutationDefaults = getPostDataSourcesUcsManagersMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesUcsManagersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/ucs-managers/:id', toValue(args)] as const
}

export function getDataSourcesUcsManagersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesUcsManagersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['ucs-managers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesUcsManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesUcsManagersIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesUcsManagersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesUcsManagersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['ucs-managers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesUcsManagersIdMutationKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id', 'PUT'] as const
}

export function getPutDataSourcesUcsManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesUcsManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources']['ucs-managers'][':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesUcsManagersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesUcsManagersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDataSourcesUcsManagersIdMutationKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesUcsManagersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesUcsManagersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources']['ucs-managers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesUcsManagersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesUcsManagersIdMutationOptions<
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

export function getPostDataSourcesUcsManagersIdDisableMutationKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id/disable', 'POST'] as const
}

export function getPostDataSourcesUcsManagersIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesUcsManagersIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['ucs-managers'][':id'].disable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesUcsManagersIdDisable<
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
                    (typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']
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
  const mutationDefaults = getPostDataSourcesUcsManagersIdDisableMutationOptions<
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

export function getPostDataSourcesUcsManagersIdEnableMutationKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id/enable', 'POST'] as const
}

export function getPostDataSourcesUcsManagersIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesUcsManagersIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client['data-sources']['ucs-managers'][':id'].enable.$post(args, options),
      )
    },
  })
}

export function usePostDataSourcesUcsManagersIdEnable<
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
                    (typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']
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
  const mutationDefaults = getPostDataSourcesUcsManagersIdEnableMutationOptions<
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

export function getDataSourcesUcsManagersIdSnmpConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/ucs-managers/:id/snmp-config', toValue(args)] as const
}

export function getDataSourcesUcsManagersIdSnmpConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesUcsManagersIdSnmpConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources']['ucs-managers'][':id']['snmp-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesUcsManagersIdSnmpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']>
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
                    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
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
                    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataSourcesUcsManagersIdSnmpConfigQueryKey>
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
              (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesUcsManagersIdSnmpConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesUcsManagersIdSnmpConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources']['ucs-managers'][':id']['snmp-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesUcsManagersIdSnmpConfigMutationKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id/snmp-config', 'PUT'] as const
}

export function getPutDataSourcesUcsManagersIdSnmpConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesUcsManagersIdSnmpConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']
      >,
    ) {
      return parseResponse(
        client['data-sources']['ucs-managers'][':id']['snmp-config'].$put(args, options),
      )
    },
  })
}

export function usePutDataSourcesUcsManagersIdSnmpConfig<
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
                    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']
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
  const mutationDefaults = getPutDataSourcesUcsManagersIdSnmpConfigMutationOptions<
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

export function getDataSourcesVcentersQueryKey() {
  return ['data-sources', '/data-sources/vcenters'] as const
}

export function getDataSourcesVcentersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataSourcesVcentersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources'].vcenters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesVcenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesVcentersQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesVcentersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataSourcesVcentersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources'].vcenters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataSourcesVcentersMutationKey() {
  return ['data-sources', '/data-sources/vcenters', 'POST'] as const
}

export function getPostDataSourcesVcentersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['vcenters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesVcentersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['data-sources']['vcenters']['$post']>) {
      return parseResponse(client['data-sources'].vcenters.$post(args, options))
    },
  })
}

export function usePostDataSourcesVcenters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['vcenters']['$post']>,
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
  const mutationDefaults = getPostDataSourcesVcentersMutationOptions<TError, TOnMutateResult>(
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

export function getDataSourcesVcentersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>
  >,
) {
  return ['data-sources', '/data-sources/vcenters/:id', toValue(args)] as const
}

export function getDataSourcesVcentersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourcesVcentersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-sources'].vcenters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourcesVcentersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourcesVcentersIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourcesVcentersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourcesVcentersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-sources'].vcenters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataSourcesVcentersIdMutationKey() {
  return ['data-sources', '/data-sources/vcenters/:id', 'PUT'] as const
}

export function getPutDataSourcesVcentersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataSourcesVcentersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$put']>,
    ) {
      return parseResponse(client['data-sources'].vcenters[':id'].$put(args, options))
    },
  })
}

export function usePutDataSourcesVcentersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$put']>,
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
  const mutationDefaults = getPutDataSourcesVcentersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDataSourcesVcentersIdMutationKey() {
  return ['data-sources', '/data-sources/vcenters/:id', 'DELETE'] as const
}

export function getDeleteDataSourcesVcentersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataSourcesVcentersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>,
    ) {
      return parseResponse(client['data-sources'].vcenters[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataSourcesVcentersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDataSourcesVcentersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDataSourcesVcentersIdDisableMutationKey() {
  return ['data-sources', '/data-sources/vcenters/:id/disable', 'POST'] as const
}

export function getPostDataSourcesVcentersIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['vcenters'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesVcentersIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-sources']['vcenters'][':id']['disable']['$post']
      >,
    ) {
      return parseResponse(client['data-sources'].vcenters[':id'].disable.$post(args, options))
    },
  })
}

export function usePostDataSourcesVcentersIdDisable<
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
                  ReturnType<(typeof client)['data-sources']['vcenters'][':id']['disable']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['disable']['$post']>,
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
  const mutationDefaults = getPostDataSourcesVcentersIdDisableMutationOptions<
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

export function getPostDataSourcesVcentersIdEnableMutationKey() {
  return ['data-sources', '/data-sources/vcenters/:id/enable', 'POST'] as const
}

export function getPostDataSourcesVcentersIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataSourcesVcentersIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>,
    ) {
      return parseResponse(client['data-sources'].vcenters[':id'].enable.$post(args, options))
    },
  })
}

export function usePostDataSourcesVcentersIdEnable<
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
                  ReturnType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>,
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
  const mutationDefaults = getPostDataSourcesVcentersIdEnableMutationOptions<
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

export function getEntitiesClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.clusters.$get>>,
) {
  return ['entities', '/entities/clusters', toValue(args)] as const
}

export function getEntitiesClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.clusters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.clusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.clusters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>
            >
          >,
          ReturnType<typeof getEntitiesClustersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesClustersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.clusters)[':id']['$get']>>,
) {
  return ['entities', '/entities/clusters/:id', toValue(args)] as const
}

export function getEntitiesClustersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.clusters)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesClustersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.clusters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesClustersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.clusters)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesClustersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesClustersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesClustersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.clusters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesDatastoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.datastores.$get>>,
) {
  return ['entities', '/entities/datastores', toValue(args)] as const
}

export function getEntitiesDatastoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.datastores.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesDatastoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.datastores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesDatastores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.datastores.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>
            >
          >,
          ReturnType<typeof getEntitiesDatastoresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesDatastoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesDatastoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.datastores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesDatastoresIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.datastores)[':id']['$get']>>,
) {
  return ['entities', '/entities/datastores/:id', toValue(args)] as const
}

export function getEntitiesDatastoresIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.datastores)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesDatastoresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.datastores[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesDatastoresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.datastores)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesDatastoresIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesDatastoresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesDatastoresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.datastores[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesDistributedVirtualPortgroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>
  >,
) {
  return ['entities', '/entities/distributed-virtual-portgroups', toValue(args)] as const
}

export function getEntitiesDistributedVirtualPortgroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesDistributedVirtualPortgroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['distributed-virtual-portgroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesDistributedVirtualPortgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>
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
                  ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEntitiesDistributedVirtualPortgroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesDistributedVirtualPortgroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesDistributedVirtualPortgroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['distributed-virtual-portgroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesDistributedVirtualPortgroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/distributed-virtual-portgroups/:id', toValue(args)] as const
}

export function getEntitiesDistributedVirtualPortgroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesDistributedVirtualPortgroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['distributed-virtual-portgroups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesDistributedVirtualPortgroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
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
                    (typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']
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
                    (typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntitiesDistributedVirtualPortgroupsIdQueryKey>
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
            ReturnType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesDistributedVirtualPortgroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesDistributedVirtualPortgroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['distributed-virtual-portgroups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesDistributedVirtualSwitchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>
  >,
) {
  return ['entities', '/entities/distributed-virtual-switches', toValue(args)] as const
}

export function getEntitiesDistributedVirtualSwitchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesDistributedVirtualSwitchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['distributed-virtual-switches'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesDistributedVirtualSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>
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
                  ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEntitiesDistributedVirtualSwitchesQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesDistributedVirtualSwitchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesDistributedVirtualSwitchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['distributed-virtual-switches'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesDistributedVirtualSwitchesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/distributed-virtual-switches/:id', toValue(args)] as const
}

export function getEntitiesDistributedVirtualSwitchesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesDistributedVirtualSwitchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['distributed-virtual-switches'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesDistributedVirtualSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
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
                    (typeof client.entities)['distributed-virtual-switches'][':id']['$get']
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
                    (typeof client.entities)['distributed-virtual-switches'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntitiesDistributedVirtualSwitchesIdQueryKey>
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
            ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesDistributedVirtualSwitchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesDistributedVirtualSwitchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['distributed-virtual-switches'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFirewallRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['firewall-rules']['$get']>>,
) {
  return ['entities', '/entities/firewall-rules', toValue(args)] as const
}

export function getEntitiesFirewallRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['firewall-rules']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFirewallRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['firewall-rules'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['firewall-rules']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesFirewallRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFirewallRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFirewallRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['firewall-rules'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFirewallRulesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/firewall-rules/:id', toValue(args)] as const
}

export function getEntitiesFirewallRulesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFirewallRulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['firewall-rules'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFirewallRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesFirewallRulesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFirewallRulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFirewallRulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['firewall-rules'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFirewallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.firewalls.$get>>,
) {
  return ['entities', '/entities/firewalls', toValue(args)] as const
}

export function getEntitiesFirewallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.firewalls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFirewallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.firewalls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.firewalls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>
            >
          >,
          ReturnType<typeof getEntitiesFirewallsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFirewallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.firewalls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFirewallsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>>,
) {
  return ['entities', '/entities/firewalls/:id', toValue(args)] as const
}

export function getEntitiesFirewallsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFirewallsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.firewalls[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFirewallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesFirewallsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFirewallsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFirewallsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.firewalls[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFlowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.flows.$get>>,
) {
  return ['entities', '/entities/flows', toValue(args)] as const
}

export function getEntitiesFlowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.flows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFlows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.flows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
          >,
          ReturnType<typeof getEntitiesFlowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFlowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.flows)[':id']['$get']>>,
) {
  return ['entities', '/entities/flows/:id', toValue(args)] as const
}

export function getEntitiesFlowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.flows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFlowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.flows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.flows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesFlowsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFlowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFlowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.flows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.folders.$get>>,
) {
  return ['entities', '/entities/folders', toValue(args)] as const
}

export function getEntitiesFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>
            >
          >,
          ReturnType<typeof getEntitiesFoldersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesFoldersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.folders)[':id']['$get']>>,
) {
  return ['entities', '/entities/folders/:id', toValue(args)] as const
}

export function getEntitiesFoldersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.folders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesFoldersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.folders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesFoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.folders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesFoldersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFoldersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesFoldersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.folders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesHostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.hosts.$get>>,
) {
  return ['entities', '/entities/hosts', toValue(args)] as const
}

export function getEntitiesHostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.hosts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesHostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.hosts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesHosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.hosts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
          >,
          ReturnType<typeof getEntitiesHostsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesHostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesHostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.hosts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesHostsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.hosts)[':id']['$get']>>,
) {
  return ['entities', '/entities/hosts/:id', toValue(args)] as const
}

export function getEntitiesHostsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.hosts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesHostsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.hosts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesHostsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.hosts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesHostsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesHostsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesHostsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.hosts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesIpSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['ip-sets']['$get']>>,
) {
  return ['entities', '/entities/ip-sets', toValue(args)] as const
}

export function getEntitiesIpSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['ip-sets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesIpSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['ip-sets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesIpSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['ip-sets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
            >
          >,
          ReturnType<typeof getEntitiesIpSetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesIpSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesIpSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['ip-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesIpSetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>>,
) {
  return ['entities', '/entities/ip-sets/:id', toValue(args)] as const
}

export function getEntitiesIpSetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesIpSetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['ip-sets'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesIpSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesIpSetsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesIpSetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesIpSetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['ip-sets'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesLayer2NetworksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['layer2-networks']['$get']>>,
) {
  return ['entities', '/entities/layer2-networks', toValue(args)] as const
}

export function getEntitiesLayer2NetworksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['layer2-networks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesLayer2NetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['layer2-networks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesLayer2Networks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['layer2-networks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesLayer2NetworksQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesLayer2NetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesLayer2NetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['layer2-networks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesLayer2NetworksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/layer2-networks/:id', toValue(args)] as const
}

export function getEntitiesLayer2NetworksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesLayer2NetworksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['layer2-networks'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesLayer2NetworksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesLayer2NetworksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesLayer2NetworksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesLayer2NetworksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['layer2-networks'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEntitiesNamesMutationKey() {
  return ['entities', '/entities/names', 'POST'] as const
}

export function getPostEntitiesNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.names.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.entities.names.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEntitiesNamesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.entities.names.$post>) {
      return parseResponse(client.entities.names.$post(args, options))
    },
  })
}

export function usePostEntitiesNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.names.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.entities.names.$post>,
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
  const mutationDefaults = getPostEntitiesNamesMutationOptions<TError, TOnMutateResult>(
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

export function getEntitiesNamesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.names)[':id']['$get']>>,
) {
  return ['entities', '/entities/names/:id', toValue(args)] as const
}

export function getEntitiesNamesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.names)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesNamesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.names[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesNamesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.names)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesNamesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesNamesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesNamesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.names[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesNsxManagersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['nsx-managers']['$get']>>,
) {
  return ['entities', '/entities/nsx-managers', toValue(args)] as const
}

export function getEntitiesNsxManagersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['nsx-managers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesNsxManagersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['nsx-managers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesNsxManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['nsx-managers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesNsxManagersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesNsxManagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesNsxManagersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['nsx-managers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesNsxManagersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>>,
) {
  return ['entities', '/entities/nsx-managers/:id', toValue(args)] as const
}

export function getEntitiesNsxManagersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesNsxManagersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['nsx-managers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesNsxManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesNsxManagersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesNsxManagersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesNsxManagersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['nsx-managers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesProblemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.problems.$get>>,
) {
  return ['entities', '/entities/problems', toValue(args)] as const
}

export function getEntitiesProblemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.problems.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesProblemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.problems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesProblems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.problems.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>
            >
          >,
          ReturnType<typeof getEntitiesProblemsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesProblemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesProblemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.problems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesProblemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.problems)[':id']['$get']>>,
) {
  return ['entities', '/entities/problems/:id', toValue(args)] as const
}

export function getEntitiesProblemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.problems)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesProblemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.problems[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesProblemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.problems)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesProblemsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesProblemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesProblemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.problems[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesSecurityGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['security-groups']['$get']>>,
) {
  return ['entities', '/entities/security-groups', toValue(args)] as const
}

export function getEntitiesSecurityGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['security-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesSecurityGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['security-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['security-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesSecurityGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesSecurityGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesSecurityGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['security-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesSecurityGroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/security-groups/:id', toValue(args)] as const
}

export function getEntitiesSecurityGroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesSecurityGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['security-groups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesSecurityGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesSecurityGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesSecurityGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesSecurityGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['security-groups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesSecurityTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['security-tags']['$get']>>,
) {
  return ['entities', '/entities/security-tags', toValue(args)] as const
}

export function getEntitiesSecurityTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['security-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesSecurityTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['security-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesSecurityTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['security-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesSecurityTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesSecurityTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesSecurityTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['security-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesSecurityTagsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/security-tags/:id', toValue(args)] as const
}

export function getEntitiesSecurityTagsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesSecurityTagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['security-tags'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesSecurityTagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesSecurityTagsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesSecurityTagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesSecurityTagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['security-tags'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesServiceGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['service-groups']['$get']>>,
) {
  return ['entities', '/entities/service-groups', toValue(args)] as const
}

export function getEntitiesServiceGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['service-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesServiceGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['service-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesServiceGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['service-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesServiceGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesServiceGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesServiceGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['service-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesServiceGroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/service-groups/:id', toValue(args)] as const
}

export function getEntitiesServiceGroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesServiceGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['service-groups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesServiceGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesServiceGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesServiceGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesServiceGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['service-groups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.services.$get>>,
) {
  return ['entities', '/entities/services', toValue(args)] as const
}

export function getEntitiesServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>
            >
          >,
          ReturnType<typeof getEntitiesServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesServicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.services)[':id']['$get']>>,
) {
  return ['entities', '/entities/services/:id', toValue(args)] as const
}

export function getEntitiesServicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.services)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.services[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.services)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesServicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.services[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVcDatacentersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>>,
) {
  return ['entities', '/entities/vc-datacenters', toValue(args)] as const
}

export function getEntitiesVcDatacentersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVcDatacentersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['vc-datacenters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVcDatacenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesVcDatacentersQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVcDatacentersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVcDatacentersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['vc-datacenters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVcDatacentersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/vc-datacenters/:id', toValue(args)] as const
}

export function getEntitiesVcDatacentersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVcDatacentersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['vc-datacenters'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVcDatacentersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesVcDatacentersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVcDatacentersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVcDatacentersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['vc-datacenters'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVcenterManagersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>>,
) {
  return ['entities', '/entities/vcenter-managers', toValue(args)] as const
}

export function getEntitiesVcenterManagersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVcenterManagersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['vcenter-managers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVcenterManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesVcenterManagersQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVcenterManagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVcenterManagersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['vcenter-managers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVcenterManagersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>
  >,
) {
  return ['entities', '/entities/vcenter-managers/:id', toValue(args)] as const
}

export function getEntitiesVcenterManagersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVcenterManagersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities['vcenter-managers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVcenterManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesVcenterManagersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVcenterManagersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVcenterManagersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities['vcenter-managers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVmknicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vmknics.$get>>,
) {
  return ['entities', '/entities/vmknics', toValue(args)] as const
}

export function getEntitiesVmknicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vmknics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVmknicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.vmknics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVmknics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vmknics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>
            >
          >,
          ReturnType<typeof getEntitiesVmknicsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmknicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVmknicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.vmknics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVmknicsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>>,
) {
  return ['entities', '/entities/vmknics/:id', toValue(args)] as const
}

export function getEntitiesVmknicsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVmknicsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.vmknics[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVmknicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesVmknicsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmknicsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVmknicsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.vmknics[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vms.$get>>,
) {
  return ['entities', '/entities/vms', toValue(args)] as const
}

export function getEntitiesVmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.vms.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEntitiesVms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
          >,
          ReturnType<typeof getEntitiesVmsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.vms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVmsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vms)[':id']['$get']>>,
) {
  return ['entities', '/entities/vms/:id', toValue(args)] as const
}

export function getEntitiesVmsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vms)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVmsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.vms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vms)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEntitiesVmsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVmsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.vms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVnicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vnics.$get>>,
) {
  return ['entities', '/entities/vnics', toValue(args)] as const
}

export function getEntitiesVnicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vnics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVnicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.vnics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVnics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.vnics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
          >,
          ReturnType<typeof getEntitiesVnicsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVnicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVnicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.vnics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesVnicsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vnics)[':id']['$get']>>,
) {
  return ['entities', '/entities/vnics/:id', toValue(args)] as const
}

export function getEntitiesVnicsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vnics)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesVnicsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.vnics[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesVnicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities.vnics)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesVnicsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVnicsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesVnicsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.vnics[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.applications.$get>>,
) {
  return ['groups', '/groups/applications', toValue(args)] as const
}

export function getGroupsApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.applications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.applications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>
            >
          >,
          ReturnType<typeof getGroupsApplicationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsApplicationsMutationKey() {
  return ['groups', '/groups/applications', 'POST'] as const
}

export function getPostGroupsApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.groups.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.applications.$post>) {
      return parseResponse(client.groups.applications.$post(args, options))
    },
  })
}

export function usePostGroupsApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.groups.applications.$post>,
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
  const mutationDefaults = getPostGroupsApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsApplicationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.applications)[':id']['$get']>>,
) {
  return ['groups', '/groups/applications/:id', toValue(args)] as const
}

export function getGroupsApplicationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.applications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsApplicationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.applications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.applications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsApplicationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsApplicationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsApplicationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.applications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGroupsApplicationsIdMutationKey() {
  return ['groups', '/groups/applications/:id', 'DELETE'] as const
}

export function getDeleteGroupsApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups.applications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups.applications)[':id']['$delete']>,
    ) {
      return parseResponse(client.groups.applications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.groups.applications)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups.applications)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteGroupsApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsApplicationsIdTiersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>
  >,
) {
  return ['groups', '/groups/applications/:id/tiers', toValue(args)] as const
}

export function getGroupsApplicationsIdTiersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsApplicationsIdTiersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.applications[':id'].tiers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsApplicationsIdTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsApplicationsIdTiersQueryKey>
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
          Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsApplicationsIdTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsApplicationsIdTiersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.applications[':id'].tiers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsApplicationsIdTiersMutationKey() {
  return ['groups', '/groups/applications/:id/tiers', 'POST'] as const
}

export function getPostGroupsApplicationsIdTiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsApplicationsIdTiersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$post']>,
    ) {
      return parseResponse(client.groups.applications[':id'].tiers.$post(args, options))
    },
  })
}

export function usePostGroupsApplicationsIdTiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$post']>,
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
  const mutationDefaults = getPostGroupsApplicationsIdTiersMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsApplicationsIdTiersTierIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
  >,
) {
  return ['groups', '/groups/applications/:id/tiers/:tier-id', toValue(args)] as const
}

export function getGroupsApplicationsIdTiersTierIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsApplicationsIdTiersTierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.applications[':id'].tiers[':tier-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsApplicationsIdTiersTierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
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
                    (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']
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
                    (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsApplicationsIdTiersTierIdQueryKey>
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
            ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsApplicationsIdTiersTierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsApplicationsIdTiersTierIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.applications[':id'].tiers[':tier-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGroupsApplicationsIdTiersTierIdMutationKey() {
  return ['groups', '/groups/applications/:id/tiers/:tier-id', 'DELETE'] as const
}

export function getDeleteGroupsApplicationsIdTiersTierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsApplicationsIdTiersTierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.groups.applications[':id'].tiers[':tier-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGroupsApplicationsIdTiersTierId<
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
                      (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']
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
  const mutationDefaults = getDeleteGroupsApplicationsIdTiersTierIdMutationOptions<
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

export function getGroupsTiersTierIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['groups', '/groups/tiers/:tier-id', keyArgs] as const
}

export function getGroupsTiersTierIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsTiersTierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.tiers[':tier-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsTiersTierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsTiersTierIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsTiersTierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsTiersTierIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.tiers[':tier-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoVersionQueryKey() {
  return ['info', '/info/version'] as const
}

export function getInfoVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
          >,
          ReturnType<typeof getInfoVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfraNodesQueryKey() {
  return ['infra', '/infra/nodes'] as const
}

export function getInfraNodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfraNodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.infra.nodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfraNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
          >,
          ReturnType<typeof getInfraNodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfraNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfraNodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.infra.nodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfraNodesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.infra.nodes)[':id']['$get']>>,
) {
  return ['infra', '/infra/nodes/:id', toValue(args)] as const
}

export function getInfraNodesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.infra.nodes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfraNodesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.infra.nodes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInfraNodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.infra.nodes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getInfraNodesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfraNodesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfraNodesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.infra.nodes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMicroSegRecommendedRulesMutationKey() {
  return ['micro-seg', '/micro-seg/recommended-rules', 'POST'] as const
}

export function getPostMicroSegRecommendedRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['micro-seg']['recommended-rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['micro-seg']['recommended-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMicroSegRecommendedRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['micro-seg']['recommended-rules']['$post']>,
    ) {
      return parseResponse(client['micro-seg']['recommended-rules'].$post(args, options))
    },
  })
}

export function usePostMicroSegRecommendedRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['micro-seg']['recommended-rules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['micro-seg']['recommended-rules']['$post']>,
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
  const mutationDefaults = getPostMicroSegRecommendedRulesMutationOptions<TError, TOnMutateResult>(
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

export function getPostMicroSegRecommendedRulesNsxMutationKey() {
  return ['micro-seg', '/micro-seg/recommended-rules/nsx', 'POST'] as const
}

export function getPostMicroSegRecommendedRulesNsxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMicroSegRecommendedRulesNsxMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>,
    ) {
      return parseResponse(client['micro-seg']['recommended-rules'].nsx.$post(args, options))
    },
  })
}

export function usePostMicroSegRecommendedRulesNsx<
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
                  ReturnType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>,
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
  const mutationDefaults = getPostMicroSegRecommendedRulesNsxMutationOptions<
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

export function getPostSearchMutationKey() {
  return ['search', '/search', 'POST'] as const
}

export function getPostSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.$post>) {
      return parseResponse(client.search.$post(args, options))
    },
  })
}

export function usePostSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search.$post>,
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
  const mutationDefaults = getPostSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
