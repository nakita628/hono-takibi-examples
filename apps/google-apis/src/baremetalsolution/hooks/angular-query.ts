import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2InstanceDetachLunMutationKey() {
  return ['v2', '/v2/:instance:detachLun', 'POST'] as const
}

export function getPostV2InstanceDetachLunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':instance:detachLun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':instance:detachLun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InstanceDetachLunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':instance:detachLun']['$post']>) {
      return parseResponse(client.v2[':instance:detachLun'].$post(args, options))
    },
  })
}

export function injectPostV2InstanceDetachLun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':instance:detachLun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':instance:detachLun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2InstanceDetachLunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2LocationInstanceProvisioningSettingsFetchQueryKey(
  args: InferRequestType<
    (typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']
  >,
) {
  return ['v2', '/v2/:location/instanceProvisioningSettings:fetch', args] as const
}

export function getV2LocationInstanceProvisioningSettingsFetchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationInstanceProvisioningSettingsFetchQueryKey>
  >({
    queryKey: getV2LocationInstanceProvisioningSettingsFetchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':location']['instanceProvisioningSettings:fetch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2LocationInstanceProvisioningSettingsFetch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationInstanceProvisioningSettingsFetchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2LocationInstanceProvisioningSettingsFetchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2LocationNetworksListNetworkUsageQueryKey(
  args: InferRequestType<(typeof client.v2)[':location']['networks:listNetworkUsage']['$get']>,
) {
  return ['v2', '/v2/:location/networks:listNetworkUsage', args] as const
}

export function getV2LocationNetworksListNetworkUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':location']['networks:listNetworkUsage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':location']['networks:listNetworkUsage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':location']['networks:listNetworkUsage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationNetworksListNetworkUsageQueryKey>
  >({
    queryKey: getV2LocationNetworksListNetworkUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':location']['networks:listNetworkUsage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2LocationNetworksListNetworkUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':location']['networks:listNetworkUsage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)[':location']['networks:listNetworkUsage']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':location']['networks:listNetworkUsage']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationNetworksListNetworkUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2LocationNetworksListNetworkUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2NameQueryKey(args: InferRequestType<(typeof client.v2)[':name']['$get']>) {
  return ['v2', '/v2/:name', args] as const
}

export function getV2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >({
    queryKey: getV2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV2NameMutationKey() {
  return ['v2', '/v2/:name', 'DELETE'] as const
}

export function getDeleteV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$delete']>) {
      return parseResponse(client.v2[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV2NameMutationKey() {
  return ['v2', '/v2/:name', 'PATCH'] as const
}

export function getPatchV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$patch']>) {
      return parseResponse(client.v2[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
) {
  return ['v2', '/v2/:name/locations', args] as const
}

export function getV2NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameLocationsQueryKey>
  >({
    queryKey: getV2NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2NameLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2NameDisableInteractiveSerialConsoleMutationKey() {
  return ['v2', '/v2/:name:disableInteractiveSerialConsole', 'POST'] as const
}

export function getPostV2NameDisableInteractiveSerialConsoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:disableInteractiveSerialConsole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:disableInteractiveSerialConsole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameDisableInteractiveSerialConsoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:disableInteractiveSerialConsole']['$post']>,
    ) {
      return parseResponse(client.v2[':name:disableInteractiveSerialConsole'].$post(args, options))
    },
  })
}

export function injectPostV2NameDisableInteractiveSerialConsole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':name:disableInteractiveSerialConsole']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:disableInteractiveSerialConsole']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameDisableInteractiveSerialConsoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2NameEnableInteractiveSerialConsoleMutationKey() {
  return ['v2', '/v2/:name:enableInteractiveSerialConsole', 'POST'] as const
}

export function getPostV2NameEnableInteractiveSerialConsoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:enableInteractiveSerialConsole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:enableInteractiveSerialConsole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameEnableInteractiveSerialConsoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:enableInteractiveSerialConsole']['$post']>,
    ) {
      return parseResponse(client.v2[':name:enableInteractiveSerialConsole'].$post(args, options))
    },
  })
}

export function injectPostV2NameEnableInteractiveSerialConsole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':name:enableInteractiveSerialConsole']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:enableInteractiveSerialConsole']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameEnableInteractiveSerialConsoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2NameEvictMutationKey() {
  return ['v2', '/v2/:name:evict', 'POST'] as const
}

export function getPostV2NameEvictMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:evict']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:evict']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameEvictMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:evict']['$post']>) {
      return parseResponse(client.v2[':name:evict'].$post(args, options))
    },
  })
}

export function injectPostV2NameEvict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:evict']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:evict']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameEvictMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2NameRenameMutationKey() {
  return ['v2', '/v2/:name:rename', 'POST'] as const
}

export function getPostV2NameRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:rename']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:rename']['$post']>) {
      return parseResponse(client.v2[':name:rename'].$post(args, options))
    },
  })
}

export function injectPostV2NameRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:rename']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:rename']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2NameResetMutationKey() {
  return ['v2', '/v2/:name:reset', 'POST'] as const
}

export function getPostV2NameResetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:reset']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameResetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:reset']['$post']>) {
      return parseResponse(client.v2[':name:reset'].$post(args, options))
    },
  })
}

export function injectPostV2NameReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:reset']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:reset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2NameStartMutationKey() {
  return ['v2', '/v2/:name:start', 'POST'] as const
}

export function getPostV2NameStartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:start']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:start']['$post']>) {
      return parseResponse(client.v2[':name:start'].$post(args, options))
    },
  })
}

export function injectPostV2NameStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:start']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2NameStopMutationKey() {
  return ['v2', '/v2/:name:stop', 'POST'] as const
}

export function getPostV2NameStopMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:stop']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:stop']['$post']>) {
      return parseResponse(client.v2[':name:stop'].$post(args, options))
    },
  })
}

export function injectPostV2NameStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:stop']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ParentInstancesQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>,
) {
  return ['v2', '/v2/:parent/instances', args] as const
}

export function getV2ParentInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentInstancesQueryKey>
  >({
    queryKey: getV2ParentInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentInstancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ParentInstancesMutationKey() {
  return ['v2', '/v2/:parent/instances', 'POST'] as const
}

export function getPostV2ParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>) {
      return parseResponse(client.v2[':parent'].instances.$post(args, options))
    },
  })
}

export function injectPostV2ParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ParentInstancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ParentLunsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['luns']['$get']>,
) {
  return ['v2', '/v2/:parent/luns', args] as const
}

export function getV2ParentLunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['luns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['luns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['luns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentLunsQueryKey>
  >({
    queryKey: getV2ParentLunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].luns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2ParentLuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['luns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['luns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['luns']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentLunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentLunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2ParentNetworksQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['networks']['$get']>,
) {
  return ['v2', '/v2/:parent/networks', args] as const
}

export function getV2ParentNetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['networks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentNetworksQueryKey>
  >({
    queryKey: getV2ParentNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].networks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ParentNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['networks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['networks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentNetworksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2ParentNfsSharesQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$get']>,
) {
  return ['v2', '/v2/:parent/nfsShares', args] as const
}

export function getV2ParentNfsSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['nfsShares']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['nfsShares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentNfsSharesQueryKey>
  >({
    queryKey: getV2ParentNfsSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].nfsShares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ParentNfsShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['nfsShares']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['nfsShares']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentNfsSharesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentNfsSharesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ParentNfsSharesMutationKey() {
  return ['v2', '/v2/:parent/nfsShares', 'POST'] as const
}

export function getPostV2ParentNfsSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['nfsShares']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentNfsSharesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$post']>) {
      return parseResponse(client.v2[':parent'].nfsShares.$post(args, options))
    },
  })
}

export function injectPostV2ParentNfsShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['nfsShares']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ParentNfsSharesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2ParentProvisioningConfigsMutationKey() {
  return ['v2', '/v2/:parent/provisioningConfigs', 'POST'] as const
}

export function getPostV2ParentProvisioningConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['provisioningConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentProvisioningConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs']['$post']>,
    ) {
      return parseResponse(client.v2[':parent'].provisioningConfigs.$post(args, options))
    },
  })
}

export function injectPostV2ParentProvisioningConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['provisioningConfigs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ParentProvisioningConfigsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2ParentProvisioningConfigsSubmitMutationKey() {
  return ['v2', '/v2/:parent/provisioningConfigs:submit', 'POST'] as const
}

export function getPostV2ParentProvisioningConfigsSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['provisioningConfigs:submit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs:submit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentProvisioningConfigsSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs:submit']['$post']>,
    ) {
      return parseResponse(client.v2[':parent']['provisioningConfigs:submit'].$post(args, options))
    },
  })
}

export function injectPostV2ParentProvisioningConfigsSubmit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':parent']['provisioningConfigs:submit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs:submit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ParentProvisioningConfigsSubmitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ParentProvisioningQuotasQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>,
) {
  return ['v2', '/v2/:parent/provisioningQuotas', args] as const
}

export function getV2ParentProvisioningQuotasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentProvisioningQuotasQueryKey>
  >({
    queryKey: getV2ParentProvisioningQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].provisioningQuotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ParentProvisioningQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentProvisioningQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ParentProvisioningQuotasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2ParentSnapshotsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['snapshots']['$get']>,
) {
  return ['v2', '/v2/:parent/snapshots', args] as const
}

export function getV2ParentSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['snapshots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentSnapshotsQueryKey>
  >({
    queryKey: getV2ParentSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ParentSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['snapshots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['snapshots']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['snapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentSnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ParentSnapshotsMutationKey() {
  return ['v2', '/v2/:parent/snapshots', 'POST'] as const
}

export function getPostV2ParentSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['snapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentSnapshotsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['snapshots']['$post']>) {
      return parseResponse(client.v2[':parent'].snapshots.$post(args, options))
    },
  })
}

export function injectPostV2ParentSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['snapshots']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['snapshots']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ParentSnapshotsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ParentSshKeysQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$get']>,
) {
  return ['v2', '/v2/:parent/sshKeys', args] as const
}

export function getV2ParentSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['sshKeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['sshKeys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentSshKeysQueryKey>
  >({
    queryKey: getV2ParentSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].sshKeys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2ParentSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['sshKeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['sshKeys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentSshKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentSshKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ParentSshKeysMutationKey() {
  return ['v2', '/v2/:parent/sshKeys', 'POST'] as const
}

export function getPostV2ParentSshKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['sshKeys']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentSshKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$post']>) {
      return parseResponse(client.v2[':parent'].sshKeys.$post(args, options))
    },
  })
}

export function injectPostV2ParentSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['sshKeys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ParentSshKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ParentVolumesQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['volumes']['$get']>,
) {
  return ['v2', '/v2/:parent/volumes', args] as const
}

export function getV2ParentVolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['volumes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['volumes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentVolumesQueryKey>
  >({
    queryKey: getV2ParentVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2ParentVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['volumes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['volumes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['volumes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentVolumesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2VolumeSnapshotRestoreVolumeSnapshotMutationKey() {
  return ['v2', '/v2/:volumeSnapshot:restoreVolumeSnapshot', 'POST'] as const
}

export function getPostV2VolumeSnapshotRestoreVolumeSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':volumeSnapshot:restoreVolumeSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':volumeSnapshot:restoreVolumeSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumeSnapshotRestoreVolumeSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':volumeSnapshot:restoreVolumeSnapshot']['$post']>,
    ) {
      return parseResponse(client.v2[':volumeSnapshot:restoreVolumeSnapshot'].$post(args, options))
    },
  })
}

export function injectPostV2VolumeSnapshotRestoreVolumeSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':volumeSnapshot:restoreVolumeSnapshot']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':volumeSnapshot:restoreVolumeSnapshot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VolumeSnapshotRestoreVolumeSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2VolumeResizeMutationKey() {
  return ['v2', '/v2/:volume:resize', 'POST'] as const
}

export function getPostV2VolumeResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':volume:resize']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':volume:resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumeResizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':volume:resize']['$post']>) {
      return parseResponse(client.v2[':volume:resize'].$post(args, options))
    },
  })
}

export function injectPostV2VolumeResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':volume:resize']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':volume:resize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VolumeResizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
