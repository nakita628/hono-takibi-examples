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

export function createPostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.token.$post>,
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
    const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
    const mutationDefaults = getDeleteAuthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesAristaSwitchesQueryKey() {
  return ['data-sources', '/data-sources/arista-switches'] as const
}

export function getDataSourcesAristaSwitchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesAristaSwitchesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['arista-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesAristaSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesAristaSwitchesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesAristaSwitches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesAristaSwitchesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesAristaSwitchesIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/arista-switches/:id', args] as const
}

export function getDataSourcesAristaSwitchesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesAristaSwitchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['arista-switches'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesAristaSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDataSourcesAristaSwitchesIdQueryKey>
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
    return {
      ...getDataSourcesAristaSwitchesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesAristaSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesAristaSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesAristaSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesAristaSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesAristaSwitchesIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesAristaSwitchesIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesAristaSwitchesIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesAristaSwitchesIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesAristaSwitchesIdSnmpConfigQueryKey(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/arista-switches/:id/snmp-config', args] as const
}

export function getDataSourcesAristaSwitchesIdSnmpConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesAristaSwitchesIdSnmpConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['arista-switches'][':id']['snmp-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesAristaSwitchesIdSnmpConfig<
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
  args: () => InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesAristaSwitchesIdSnmpConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesAristaSwitchesIdSnmpConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesAristaSwitchesIdSnmpConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesBrocadeSwitchesQueryKey() {
  return ['data-sources', '/data-sources/brocade-switches'] as const
}

export function getDataSourcesBrocadeSwitchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesBrocadeSwitchesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['brocade-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesBrocadeSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesBrocadeSwitchesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesBrocadeSwitches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesBrocadeSwitchesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesBrocadeSwitchesIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/brocade-switches/:id', args] as const
}

export function getDataSourcesBrocadeSwitchesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesBrocadeSwitchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['brocade-switches'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesBrocadeSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDataSourcesBrocadeSwitchesIdQueryKey>
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
    return {
      ...getDataSourcesBrocadeSwitchesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesBrocadeSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesBrocadeSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesBrocadeSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesBrocadeSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesBrocadeSwitchesIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesBrocadeSwitchesIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesBrocadeSwitchesIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesBrocadeSwitchesIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesBrocadeSwitchesIdSnmpConfigQueryKey(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/brocade-switches/:id/snmp-config', args] as const
}

export function getDataSourcesBrocadeSwitchesIdSnmpConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesBrocadeSwitchesIdSnmpConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['brocade-switches'][':id']['snmp-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesBrocadeSwitchesIdSnmpConfig<
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
  args: () => InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesBrocadeSwitchesIdSnmpConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesBrocadeSwitchesIdSnmpConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesBrocadeSwitchesIdSnmpConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesCheckpointFirewallsQueryKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls'] as const
}

export function getDataSourcesCheckpointFirewallsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesCheckpointFirewallsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesCheckpointFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesCheckpointFirewallsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDataSourcesCheckpointFirewalls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesCheckpointFirewallsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesCheckpointFirewallsIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id', args] as const
}

export function getDataSourcesCheckpointFirewallsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesCheckpointFirewallsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['checkpoint-firewalls'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesCheckpointFirewallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesCheckpointFirewallsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesCheckpointFirewallsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesCheckpointFirewallsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesCheckpointFirewallsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesCheckpointFirewallsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesCheckpointFirewallsIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesCheckpointFirewallsIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesCheckpointFirewallsIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesCheckpointFirewallsIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesCiscoSwitchesQueryKey() {
  return ['data-sources', '/data-sources/cisco-switches'] as const
}

export function getDataSourcesCiscoSwitchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesCiscoSwitchesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['cisco-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesCiscoSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesCiscoSwitchesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesCiscoSwitches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesCiscoSwitchesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesCiscoSwitchesIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/cisco-switches/:id', args] as const
}

export function getDataSourcesCiscoSwitchesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesCiscoSwitchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['cisco-switches'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesCiscoSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDataSourcesCiscoSwitchesIdQueryKey>
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
    return {
      ...getDataSourcesCiscoSwitchesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesCiscoSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesCiscoSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesCiscoSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesCiscoSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesCiscoSwitchesIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesCiscoSwitchesIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesCiscoSwitchesIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesCiscoSwitchesIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesCiscoSwitchesIdSnmpConfigQueryKey(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/cisco-switches/:id/snmp-config', args] as const
}

export function getDataSourcesCiscoSwitchesIdSnmpConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesCiscoSwitchesIdSnmpConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['cisco-switches'][':id']['snmp-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesCiscoSwitchesIdSnmpConfig<
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
  args: () => InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesCiscoSwitchesIdSnmpConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesCiscoSwitchesIdSnmpConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesCiscoSwitchesIdSnmpConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesDellSwitchesQueryKey() {
  return ['data-sources', '/data-sources/dell-switches'] as const
}

export function getDataSourcesDellSwitchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesDellSwitchesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['dell-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesDellSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesDellSwitchesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesDellSwitches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesDellSwitchesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesDellSwitchesIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/dell-switches/:id', args] as const
}

export function getDataSourcesDellSwitchesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesDellSwitchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['dell-switches'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesDellSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesDellSwitchesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesDellSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesDellSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesDellSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesDellSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesDellSwitchesIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesDellSwitchesIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesDellSwitchesIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesDellSwitchesIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesDellSwitchesIdSnmpConfigQueryKey(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/dell-switches/:id/snmp-config', args] as const
}

export function getDataSourcesDellSwitchesIdSnmpConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesDellSwitchesIdSnmpConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['dell-switches'][':id']['snmp-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesDellSwitchesIdSnmpConfig<
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
  args: () => InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesDellSwitchesIdSnmpConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesDellSwitchesIdSnmpConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesDellSwitchesIdSnmpConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesHpovManagersQueryKey() {
  return ['data-sources', '/data-sources/hpov-managers'] as const
}

export function getDataSourcesHpovManagersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesHpovManagersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['hpov-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesHpovManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesHpovManagersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesHpovManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesHpovManagersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesHpovManagersIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/hpov-managers/:id', args] as const
}

export function getDataSourcesHpovManagersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesHpovManagersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['hpov-managers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesHpovManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesHpovManagersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesHpovManagersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesHpovManagersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesHpovManagersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesHpovManagersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesHpovManagersIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesHpovManagersIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesHpovManagersIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesHpovManagersIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesHpvcManagersQueryKey() {
  return ['data-sources', '/data-sources/hpvc-managers'] as const
}

export function getDataSourcesHpvcManagersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesHpvcManagersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['hpvc-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesHpvcManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesHpvcManagersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesHpvcManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesHpvcManagersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesHpvcManagersIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/hpvc-managers/:id', args] as const
}

export function getDataSourcesHpvcManagersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesHpvcManagersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['hpvc-managers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesHpvcManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesHpvcManagersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesHpvcManagersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesHpvcManagersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesHpvcManagersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesHpvcManagersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesHpvcManagersIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesHpvcManagersIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesHpvcManagersIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesHpvcManagersIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesJuniperSwitchesQueryKey() {
  return ['data-sources', '/data-sources/juniper-switches'] as const
}

export function getDataSourcesJuniperSwitchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesJuniperSwitchesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['juniper-switches'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesJuniperSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesJuniperSwitchesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesJuniperSwitches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesJuniperSwitchesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesJuniperSwitchesIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/juniper-switches/:id', args] as const
}

export function getDataSourcesJuniperSwitchesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesJuniperSwitchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['juniper-switches'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesJuniperSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDataSourcesJuniperSwitchesIdQueryKey>
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
    return {
      ...getDataSourcesJuniperSwitchesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesJuniperSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesJuniperSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesJuniperSwitchesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesJuniperSwitchesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesJuniperSwitchesIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesJuniperSwitchesIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesJuniperSwitchesIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesJuniperSwitchesIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesJuniperSwitchesIdSnmpConfigQueryKey(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/juniper-switches/:id/snmp-config', args] as const
}

export function getDataSourcesJuniperSwitchesIdSnmpConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesJuniperSwitchesIdSnmpConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['juniper-switches'][':id']['snmp-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesJuniperSwitchesIdSnmpConfig<
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
  args: () => InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesJuniperSwitchesIdSnmpConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesJuniperSwitchesIdSnmpConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesJuniperSwitchesIdSnmpConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesNsxvManagersQueryKey() {
  return ['data-sources', '/data-sources/nsxv-managers'] as const
}

export function getDataSourcesNsxvManagersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesNsxvManagersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['nsxv-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesNsxvManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesNsxvManagersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesNsxvManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesNsxvManagersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesNsxvManagersIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/nsxv-managers/:id', args] as const
}

export function getDataSourcesNsxvManagersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesNsxvManagersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['nsxv-managers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesNsxvManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesNsxvManagersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesNsxvManagersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesNsxvManagersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesNsxvManagersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesNsxvManagersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesNsxvManagersIdControllerClusterQueryKey(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
  >,
) {
  return ['data-sources', '/data-sources/nsxv-managers/:id/controller-cluster', args] as const
}

export function getDataSourcesNsxvManagersIdControllerClusterQueryOptions<
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
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesNsxvManagersIdControllerClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesNsxvManagersIdControllerCluster<
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
  args: () => InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesNsxvManagersIdControllerClusterQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesNsxvManagersIdControllerCluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesNsxvManagersIdControllerClusterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesNsxvManagersIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesNsxvManagersIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesNsxvManagersIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesNsxvManagersIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesPanoramaFirewallsQueryKey() {
  return ['data-sources', '/data-sources/panorama-firewalls'] as const
}

export function getDataSourcesPanoramaFirewallsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesPanoramaFirewallsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['panorama-firewalls'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesPanoramaFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesPanoramaFirewallsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDataSourcesPanoramaFirewalls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesPanoramaFirewallsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesPanoramaFirewallsIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/panorama-firewalls/:id', args] as const
}

export function getDataSourcesPanoramaFirewallsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesPanoramaFirewallsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['panorama-firewalls'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesPanoramaFirewallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['data-sources']['panorama-firewalls'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDataSourcesPanoramaFirewallsIdQueryKey>
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
    return {
      ...getDataSourcesPanoramaFirewallsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesPanoramaFirewallsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesPanoramaFirewallsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesPanoramaFirewallsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesPanoramaFirewallsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesPanoramaFirewallsIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesPanoramaFirewallsIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesPanoramaFirewallsIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesPanoramaFirewallsIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesUcsManagersQueryKey() {
  return ['data-sources', '/data-sources/ucs-managers'] as const
}

export function getDataSourcesUcsManagersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesUcsManagersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['ucs-managers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesUcsManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesUcsManagersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesUcsManagers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesUcsManagersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesUcsManagersIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/ucs-managers/:id', args] as const
}

export function getDataSourcesUcsManagersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesUcsManagersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['ucs-managers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesUcsManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesUcsManagersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesUcsManagersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesUcsManagersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesUcsManagersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesUcsManagersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesUcsManagersIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesUcsManagersIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesUcsManagersIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesUcsManagersIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesUcsManagersIdSnmpConfigQueryKey(
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/ucs-managers/:id/snmp-config', args] as const
}

export function getDataSourcesUcsManagersIdSnmpConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesUcsManagersIdSnmpConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources']['ucs-managers'][':id']['snmp-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesUcsManagersIdSnmpConfig<
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
  args: () => InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesUcsManagersIdSnmpConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesUcsManagersIdSnmpConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesUcsManagersIdSnmpConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesVcentersQueryKey() {
  return ['data-sources', '/data-sources/vcenters'] as const
}

export function getDataSourcesVcentersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesVcentersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources'].vcenters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesVcenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getDataSourcesVcentersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDataSourcesVcenters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesVcentersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDataSourcesVcentersIdQueryKey(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/vcenters/:id', args] as const
}

export function getDataSourcesVcentersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataSourcesVcentersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-sources'].vcenters[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourcesVcentersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataSourcesVcentersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDataSourcesVcentersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutDataSourcesVcentersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDataSourcesVcentersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDataSourcesVcentersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesVcentersIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesVcentersIdDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDataSourcesVcentersIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostDataSourcesVcentersIdEnableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEntitiesClustersQueryKey(
  args: InferRequestType<typeof client.entities.clusters.$get>,
) {
  return ['entities', '/entities/clusters', args] as const
}

export function getEntitiesClustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.clusters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesClustersQueryKey>
  >({
    queryKey: getEntitiesClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.clusters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.clusters.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesClustersQueryKey>
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
    return { ...getEntitiesClustersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesClustersIdQueryKey(
  args: InferRequestType<(typeof client.entities.clusters)[':id']['$get']>,
) {
  return ['entities', '/entities/clusters/:id', args] as const
}

export function getEntitiesClustersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.clusters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesClustersIdQueryKey>
  >({
    queryKey: getEntitiesClustersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.clusters[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesClustersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.clusters)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesClustersIdQueryKey>
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
    return { ...getEntitiesClustersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesDatastoresQueryKey(
  args: InferRequestType<typeof client.entities.datastores.$get>,
) {
  return ['entities', '/entities/datastores', args] as const
}

export function getEntitiesDatastoresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.datastores.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesDatastoresQueryKey>
  >({
    queryKey: getEntitiesDatastoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.datastores.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesDatastores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.datastores.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesDatastoresQueryKey>
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
    return { ...getEntitiesDatastoresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesDatastoresIdQueryKey(
  args: InferRequestType<(typeof client.entities.datastores)[':id']['$get']>,
) {
  return ['entities', '/entities/datastores/:id', args] as const
}

export function getEntitiesDatastoresIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.datastores)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesDatastoresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.datastores[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesDatastoresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.datastores)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesDatastoresIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesDistributedVirtualPortgroupsQueryKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-portgroups', args] as const
}

export function getEntitiesDistributedVirtualPortgroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesDistributedVirtualPortgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['distributed-virtual-portgroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesDistributedVirtualPortgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getEntitiesDistributedVirtualPortgroupsQueryKey>
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
    return {
      ...getEntitiesDistributedVirtualPortgroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesDistributedVirtualPortgroupsIdQueryKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-portgroups/:id', args] as const
}

export function getEntitiesDistributedVirtualPortgroupsIdQueryOptions<
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
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesDistributedVirtualPortgroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['distributed-virtual-portgroups'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesDistributedVirtualPortgroupsId<
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
  args: () => InferRequestType<
    (typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getEntitiesDistributedVirtualPortgroupsIdQueryKey>
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
    return {
      ...getEntitiesDistributedVirtualPortgroupsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesDistributedVirtualSwitchesQueryKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-switches', args] as const
}

export function getEntitiesDistributedVirtualSwitchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesDistributedVirtualSwitchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['distributed-virtual-switches'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesDistributedVirtualSwitches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getEntitiesDistributedVirtualSwitchesQueryKey>
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
    return {
      ...getEntitiesDistributedVirtualSwitchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesDistributedVirtualSwitchesIdQueryKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-switches/:id', args] as const
}

export function getEntitiesDistributedVirtualSwitchesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesDistributedVirtualSwitchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['distributed-virtual-switches'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesDistributedVirtualSwitchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entities)['distributed-virtual-switches'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getEntitiesDistributedVirtualSwitchesIdQueryKey>
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
    return {
      ...getEntitiesDistributedVirtualSwitchesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesFirewallRulesQueryKey(
  args: InferRequestType<(typeof client.entities)['firewall-rules']['$get']>,
) {
  return ['entities', '/entities/firewall-rules', args] as const
}

export function getEntitiesFirewallRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['firewall-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesFirewallRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['firewall-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesFirewallRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['firewall-rules']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesFirewallRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesFirewallRulesIdQueryKey(
  args: InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>,
) {
  return ['entities', '/entities/firewall-rules/:id', args] as const
}

export function getEntitiesFirewallRulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesFirewallRulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['firewall-rules'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesFirewallRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesFirewallRulesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesFirewallsQueryKey(
  args: InferRequestType<typeof client.entities.firewalls.$get>,
) {
  return ['entities', '/entities/firewalls', args] as const
}

export function getEntitiesFirewallsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.firewalls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFirewallsQueryKey>
  >({
    queryKey: getEntitiesFirewallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.firewalls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.firewalls.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesFirewallsQueryKey>
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
    return { ...getEntitiesFirewallsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesFirewallsIdQueryKey(
  args: InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>,
) {
  return ['entities', '/entities/firewalls/:id', args] as const
}

export function getEntitiesFirewallsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFirewallsIdQueryKey>
  >({
    queryKey: getEntitiesFirewallsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.firewalls[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesFirewallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesFirewallsIdQueryKey>
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
    return { ...getEntitiesFirewallsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesFlowsQueryKey(
  args: InferRequestType<typeof client.entities.flows.$get>,
) {
  return ['entities', '/entities/flows', args] as const
}

export function getEntitiesFlowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.flows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFlowsQueryKey>
  >({
    queryKey: getEntitiesFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.flows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesFlows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.flows.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesFlowsQueryKey>
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
    return { ...getEntitiesFlowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesFlowsIdQueryKey(
  args: InferRequestType<(typeof client.entities.flows)[':id']['$get']>,
) {
  return ['entities', '/entities/flows/:id', args] as const
}

export function getEntitiesFlowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFlowsIdQueryKey>
  >({
    queryKey: getEntitiesFlowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.flows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.flows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesFlowsIdQueryKey>
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
    return { ...getEntitiesFlowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesFoldersQueryKey(
  args: InferRequestType<typeof client.entities.folders.$get>,
) {
  return ['entities', '/entities/folders', args] as const
}

export function getEntitiesFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFoldersQueryKey>
  >({
    queryKey: getEntitiesFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.folders.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesFoldersQueryKey>
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
    return { ...getEntitiesFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesFoldersIdQueryKey(
  args: InferRequestType<(typeof client.entities.folders)[':id']['$get']>,
) {
  return ['entities', '/entities/folders/:id', args] as const
}

export function getEntitiesFoldersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.folders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesFoldersIdQueryKey>
  >({
    queryKey: getEntitiesFoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.folders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesFoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.folders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesFoldersIdQueryKey>
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
    return { ...getEntitiesFoldersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesHostsQueryKey(
  args: InferRequestType<typeof client.entities.hosts.$get>,
) {
  return ['entities', '/entities/hosts', args] as const
}

export function getEntitiesHostsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.hosts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesHostsQueryKey>
  >({
    queryKey: getEntitiesHostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.hosts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesHosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.hosts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesHostsQueryKey>
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
    return { ...getEntitiesHostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesHostsIdQueryKey(
  args: InferRequestType<(typeof client.entities.hosts)[':id']['$get']>,
) {
  return ['entities', '/entities/hosts/:id', args] as const
}

export function getEntitiesHostsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.hosts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesHostsIdQueryKey>
  >({
    queryKey: getEntitiesHostsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.hosts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesHostsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.hosts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesHostsIdQueryKey>
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
    return { ...getEntitiesHostsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesIpSetsQueryKey(
  args: InferRequestType<(typeof client.entities)['ip-sets']['$get']>,
) {
  return ['entities', '/entities/ip-sets', args] as const
}

export function getEntitiesIpSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['ip-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesIpSetsQueryKey>
  >({
    queryKey: getEntitiesIpSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['ip-sets'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesIpSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['ip-sets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesIpSetsQueryKey>
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
    return { ...getEntitiesIpSetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesIpSetsIdQueryKey(
  args: InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>,
) {
  return ['entities', '/entities/ip-sets/:id', args] as const
}

export function getEntitiesIpSetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesIpSetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['ip-sets'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesIpSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getEntitiesIpSetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesLayer2NetworksQueryKey(
  args: InferRequestType<(typeof client.entities)['layer2-networks']['$get']>,
) {
  return ['entities', '/entities/layer2-networks', args] as const
}

export function getEntitiesLayer2NetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['layer2-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesLayer2NetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['layer2-networks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesLayer2Networks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['layer2-networks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesLayer2NetworksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesLayer2NetworksIdQueryKey(
  args: InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>,
) {
  return ['entities', '/entities/layer2-networks/:id', args] as const
}

export function getEntitiesLayer2NetworksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesLayer2NetworksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['layer2-networks'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesLayer2NetworksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesLayer2NetworksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostEntitiesNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.names.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.entities.names.$post>,
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
    const mutationDefaults = getPostEntitiesNamesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEntitiesNamesIdQueryKey(
  args: InferRequestType<(typeof client.entities.names)[':id']['$get']>,
) {
  return ['entities', '/entities/names/:id', args] as const
}

export function getEntitiesNamesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.names)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesNamesIdQueryKey>
  >({
    queryKey: getEntitiesNamesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.names[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesNamesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.names)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesNamesIdQueryKey>
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
    return { ...getEntitiesNamesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesNsxManagersQueryKey(
  args: InferRequestType<(typeof client.entities)['nsx-managers']['$get']>,
) {
  return ['entities', '/entities/nsx-managers', args] as const
}

export function getEntitiesNsxManagersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['nsx-managers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesNsxManagersQueryKey>
  >({
    queryKey: getEntitiesNsxManagersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['nsx-managers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesNsxManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['nsx-managers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesNsxManagersQueryKey>
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
    return { ...getEntitiesNsxManagersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesNsxManagersIdQueryKey(
  args: InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>,
) {
  return ['entities', '/entities/nsx-managers/:id', args] as const
}

export function getEntitiesNsxManagersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesNsxManagersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['nsx-managers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesNsxManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesNsxManagersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesProblemsQueryKey(
  args: InferRequestType<typeof client.entities.problems.$get>,
) {
  return ['entities', '/entities/problems', args] as const
}

export function getEntitiesProblemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.problems.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesProblemsQueryKey>
  >({
    queryKey: getEntitiesProblemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.problems.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesProblems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.problems.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesProblemsQueryKey>
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
    return { ...getEntitiesProblemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesProblemsIdQueryKey(
  args: InferRequestType<(typeof client.entities.problems)[':id']['$get']>,
) {
  return ['entities', '/entities/problems/:id', args] as const
}

export function getEntitiesProblemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.problems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesProblemsIdQueryKey>
  >({
    queryKey: getEntitiesProblemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.problems[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesProblemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.problems)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesProblemsIdQueryKey>
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
    return { ...getEntitiesProblemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesSecurityGroupsQueryKey(
  args: InferRequestType<(typeof client.entities)['security-groups']['$get']>,
) {
  return ['entities', '/entities/security-groups', args] as const
}

export function getEntitiesSecurityGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['security-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesSecurityGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['security-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['security-groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesSecurityGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesSecurityGroupsIdQueryKey(
  args: InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>,
) {
  return ['entities', '/entities/security-groups/:id', args] as const
}

export function getEntitiesSecurityGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesSecurityGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['security-groups'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesSecurityGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesSecurityGroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesSecurityTagsQueryKey(
  args: InferRequestType<(typeof client.entities)['security-tags']['$get']>,
) {
  return ['entities', '/entities/security-tags', args] as const
}

export function getEntitiesSecurityTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['security-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesSecurityTagsQueryKey>
  >({
    queryKey: getEntitiesSecurityTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['security-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesSecurityTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['security-tags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesSecurityTagsQueryKey>
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
    return {
      ...getEntitiesSecurityTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesSecurityTagsIdQueryKey(
  args: InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>,
) {
  return ['entities', '/entities/security-tags/:id', args] as const
}

export function getEntitiesSecurityTagsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesSecurityTagsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['security-tags'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesSecurityTagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesSecurityTagsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesServiceGroupsQueryKey(
  args: InferRequestType<(typeof client.entities)['service-groups']['$get']>,
) {
  return ['entities', '/entities/service-groups', args] as const
}

export function getEntitiesServiceGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['service-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesServiceGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['service-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesServiceGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['service-groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesServiceGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesServiceGroupsIdQueryKey(
  args: InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>,
) {
  return ['entities', '/entities/service-groups/:id', args] as const
}

export function getEntitiesServiceGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesServiceGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['service-groups'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesServiceGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesServiceGroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesServicesQueryKey(
  args: InferRequestType<typeof client.entities.services.$get>,
) {
  return ['entities', '/entities/services', args] as const
}

export function getEntitiesServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesServicesQueryKey>
  >({
    queryKey: getEntitiesServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.services.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesServicesQueryKey>
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
    return { ...getEntitiesServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesServicesIdQueryKey(
  args: InferRequestType<(typeof client.entities.services)[':id']['$get']>,
) {
  return ['entities', '/entities/services/:id', args] as const
}

export function getEntitiesServicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesServicesIdQueryKey>
  >({
    queryKey: getEntitiesServicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.services[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.services)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesServicesIdQueryKey>
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
    return { ...getEntitiesServicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesVcDatacentersQueryKey(
  args: InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>,
) {
  return ['entities', '/entities/vc-datacenters', args] as const
}

export function getEntitiesVcDatacentersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesVcDatacentersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['vc-datacenters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesVcDatacenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesVcDatacentersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesVcDatacentersIdQueryKey(
  args: InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>,
) {
  return ['entities', '/entities/vc-datacenters/:id', args] as const
}

export function getEntitiesVcDatacentersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesVcDatacentersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['vc-datacenters'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesVcDatacentersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesVcDatacentersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesVcenterManagersQueryKey(
  args: InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>,
) {
  return ['entities', '/entities/vcenter-managers', args] as const
}

export function getEntitiesVcenterManagersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesVcenterManagersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['vcenter-managers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesVcenterManagers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesVcenterManagersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesVcenterManagersIdQueryKey(
  args: InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>,
) {
  return ['entities', '/entities/vcenter-managers/:id', args] as const
}

export function getEntitiesVcenterManagersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEntitiesVcenterManagersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['vcenter-managers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesVcenterManagersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getEntitiesVcenterManagersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntitiesVmknicsQueryKey(
  args: InferRequestType<typeof client.entities.vmknics.$get>,
) {
  return ['entities', '/entities/vmknics', args] as const
}

export function getEntitiesVmknicsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.vmknics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmknicsQueryKey>
  >({
    queryKey: getEntitiesVmknicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.vmknics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesVmknics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.vmknics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesVmknicsQueryKey>
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
    return { ...getEntitiesVmknicsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesVmknicsIdQueryKey(
  args: InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>,
) {
  return ['entities', '/entities/vmknics/:id', args] as const
}

export function getEntitiesVmknicsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmknicsIdQueryKey>
  >({
    queryKey: getEntitiesVmknicsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.vmknics[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntitiesVmknicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesVmknicsIdQueryKey>
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
    return { ...getEntitiesVmknicsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesVmsQueryKey(args: InferRequestType<typeof client.entities.vms.$get>) {
  return ['entities', '/entities/vms', args] as const
}

export function getEntitiesVmsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.vms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmsQueryKey>
  >({
    queryKey: getEntitiesVmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.vms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesVms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.vms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesVmsQueryKey>
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
    return { ...getEntitiesVmsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesVmsIdQueryKey(
  args: InferRequestType<(typeof client.entities.vms)[':id']['$get']>,
) {
  return ['entities', '/entities/vms/:id', args] as const
}

export function getEntitiesVmsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.vms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVmsIdQueryKey>
  >({
    queryKey: getEntitiesVmsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.vms[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesVmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.vms)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesVmsIdQueryKey>
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
    return { ...getEntitiesVmsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesVnicsQueryKey(
  args: InferRequestType<typeof client.entities.vnics.$get>,
) {
  return ['entities', '/entities/vnics', args] as const
}

export function getEntitiesVnicsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.vnics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVnicsQueryKey>
  >({
    queryKey: getEntitiesVnicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.vnics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesVnics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.vnics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesVnicsQueryKey>
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
    return { ...getEntitiesVnicsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEntitiesVnicsIdQueryKey(
  args: InferRequestType<(typeof client.entities.vnics)[':id']['$get']>,
) {
  return ['entities', '/entities/vnics/:id', args] as const
}

export function getEntitiesVnicsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities.vnics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesVnicsIdQueryKey>
  >({
    queryKey: getEntitiesVnicsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.vnics[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntitiesVnicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities.vnics)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntitiesVnicsIdQueryKey>
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
    return { ...getEntitiesVnicsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGroupsApplicationsQueryKey(
  args: InferRequestType<typeof client.groups.applications.$get>,
) {
  return ['groups', '/groups/applications', args] as const
}

export function getGroupsApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsApplicationsQueryKey>
  >({
    queryKey: getGroupsApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupsApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.applications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsApplicationsQueryKey>
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
    return { ...getGroupsApplicationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostGroupsApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.groups.applications.$post>,
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
    const mutationDefaults = getPostGroupsApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsApplicationsIdQueryKey(
  args: InferRequestType<(typeof client.groups.applications)[':id']['$get']>,
) {
  return ['groups', '/groups/applications/:id', args] as const
}

export function getGroupsApplicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsApplicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.applications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups.applications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getGroupsApplicationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteGroupsApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteGroupsApplicationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsApplicationsIdTiersQueryKey(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>,
) {
  return ['groups', '/groups/applications/:id/tiers', args] as const
}

export function getGroupsApplicationsIdTiersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsApplicationsIdTiersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.applications[':id'].tiers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsApplicationsIdTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getGroupsApplicationsIdTiersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostGroupsApplicationsIdTiers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostGroupsApplicationsIdTiersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsApplicationsIdTiersTierIdQueryKey(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>,
) {
  return ['groups', '/groups/applications/:id/tiers/:tier-id', args] as const
}

export function getGroupsApplicationsIdTiersTierIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsApplicationsIdTiersTierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.applications[':id'].tiers[':tier-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsApplicationsIdTiersTierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getGroupsApplicationsIdTiersTierIdQueryKey>
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
    return {
      ...getGroupsApplicationsIdTiersTierIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteGroupsApplicationsIdTiersTierId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteGroupsApplicationsIdTiersTierIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsTiersTierIdQueryKey(
  args: InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['groups', '/groups/tiers/:tier-id', keyArgs] as const
}

export function getGroupsTiersTierIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsTiersTierIdQueryKey>
  >({
    queryKey: getGroupsTiersTierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.tiers[':tier-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsTiersTierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsTiersTierIdQueryKey>
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
    return { ...getGroupsTiersTierIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInfoVersionQueryKey() {
  return ['info', '/info/version'] as const
}

export function getInfoVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoVersionQueryKey>
  >({
    queryKey: getInfoVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.info.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfoVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInfoVersionQueryKey>
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
    return { ...getInfoVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInfraNodesQueryKey() {
  return ['infra', '/infra/nodes'] as const
}

export function getInfraNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfraNodesQueryKey>
  >({
    queryKey: getInfraNodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.infra.nodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfraNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInfraNodesQueryKey>
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
    return { ...getInfraNodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInfraNodesIdQueryKey(
  args: InferRequestType<(typeof client.infra.nodes)[':id']['$get']>,
) {
  return ['infra', '/infra/nodes/:id', args] as const
}

export function getInfraNodesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.infra.nodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfraNodesIdQueryKey>
  >({
    queryKey: getInfraNodesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.infra.nodes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfraNodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.infra.nodes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInfraNodesIdQueryKey>
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
    return { ...getInfraNodesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMicroSegRecommendedRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostMicroSegRecommendedRulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMicroSegRecommendedRulesNsx<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostMicroSegRecommendedRulesNsxMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search.$post>,
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
    const mutationDefaults = getPostSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
