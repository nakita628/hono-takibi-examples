import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDeviceKey() {
  return ['device'] as const
}

export function getDeviceInvitesKey() {
  return ['device-invites'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPostureKey() {
  return ['posture'] as const
}

export function getTailnetKey() {
  return ['tailnet'] as const
}

export function getUserInvitesKey() {
  return ['user-invites'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getTailnetTailnetDevicesQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/devices', args] as const
}

export function getTailnetTailnetDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDevicesQueryKey>
  >({
    queryKey: getTailnetTailnetDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetDevicesQueryKey>
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
      ...getTailnetTailnetDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteTailnetTailnetMutationKey() {
  return ['tailnet', '/tailnet/:tailnet', 'DELETE'] as const
}

export function getDeleteTailnetTailnetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTailnetTailnetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tailnet)[':tailnet']['$delete']>) {
      return parseResponse(client.tailnet[':tailnet'].$delete(args, options))
    },
  })
}

export function createDeleteTailnetTailnet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTailnetTailnetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchTailnetTailnetDeviceAttributesMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/device-attributes', 'PATCH'] as const
}

export function getPatchTailnetTailnetDeviceAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTailnetTailnetDeviceAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>,
    ) {
      return parseResponse(client.tailnet[':tailnet']['device-attributes'].$patch(args, options))
    },
  })
}

export function createPatchTailnetTailnetDeviceAttributes<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTailnetTailnetDeviceAttributesMutationOptions<
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

export function getDeviceDeviceIdQueryKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['$get']>,
) {
  return ['device', '/device/:deviceId', args] as const
}

export function getDeviceDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.device)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdQueryKey>
  >({
    queryKey: getDeviceDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.device[':deviceId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeviceDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.device)[':deviceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeviceDeviceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeviceDeviceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteDeviceDeviceIdMutationKey() {
  return ['device', '/device/:deviceId', 'DELETE'] as const
}

export function getDeleteDeviceDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeviceDeviceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.device)[':deviceId']['$delete']>) {
      return parseResponse(client.device[':deviceId'].$delete(args, options))
    },
  })
}

export function createDeleteDeviceDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeviceDeviceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdExpireMutationKey() {
  return ['device', '/device/:deviceId/expire', 'POST'] as const
}

export function getPostDeviceDeviceIdExpireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['expire']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['expire']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdExpireMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.device)[':deviceId']['expire']['$post']>,
    ) {
      return parseResponse(client.device[':deviceId'].expire.$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdExpire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['expire']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['expire']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdExpireMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeviceDeviceIdRoutesQueryKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>,
) {
  return ['device', '/device/:deviceId/routes', args] as const
}

export function getDeviceDeviceIdRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdRoutesQueryKey>
  >({
    queryKey: getDeviceDeviceIdRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.device[':deviceId'].routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeviceDeviceIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeviceDeviceIdRoutesQueryKey>
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
      ...getDeviceDeviceIdRoutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdRoutesMutationKey() {
  return ['device', '/device/:deviceId/routes', 'POST'] as const
}

export function getPostDeviceDeviceIdRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['routes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$post']>,
    ) {
      return parseResponse(client.device[':deviceId'].routes.$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['routes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdRoutesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdAuthorizedMutationKey() {
  return ['device', '/device/:deviceId/authorized', 'POST'] as const
}

export function getPostDeviceDeviceIdAuthorizedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['authorized']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['authorized']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdAuthorizedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.device)[':deviceId']['authorized']['$post']>,
    ) {
      return parseResponse(client.device[':deviceId'].authorized.$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdAuthorized<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['authorized']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['authorized']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdAuthorizedMutationOptions<
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

export function getPostDeviceDeviceIdNameMutationKey() {
  return ['device', '/device/:deviceId/name', 'POST'] as const
}

export function getPostDeviceDeviceIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.device)[':deviceId']['name']['$post']>) {
      return parseResponse(client.device[':deviceId'].name.$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdTagsMutationKey() {
  return ['device', '/device/:deviceId/tags', 'POST'] as const
}

export function getPostDeviceDeviceIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.device)[':deviceId']['tags']['$post']>) {
      return parseResponse(client.device[':deviceId'].tags.$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdKeyMutationKey() {
  return ['device', '/device/:deviceId/key', 'POST'] as const
}

export function getPostDeviceDeviceIdKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.device)[':deviceId']['key']['$post']>) {
      return parseResponse(client.device[':deviceId'].key.$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['key']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdIpMutationKey() {
  return ['device', '/device/:deviceId/ip', 'POST'] as const
}

export function getPostDeviceDeviceIdIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['ip']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['ip']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdIpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.device)[':deviceId']['ip']['$post']>) {
      return parseResponse(client.device[':deviceId'].ip.$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['ip']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['ip']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdIpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeviceDeviceIdAttributesQueryKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>,
) {
  return ['device', '/device/:deviceId/attributes', args] as const
}

export function getDeviceDeviceIdAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdAttributesQueryKey>
  >({
    queryKey: getDeviceDeviceIdAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.device[':deviceId'].attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeviceDeviceIdAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeviceDeviceIdAttributesQueryKey>
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
      ...getDeviceDeviceIdAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdAttributesAttributeKeyMutationKey() {
  return ['device', '/device/:deviceId/attributes/:attributeKey', 'POST'] as const
}

export function getPostDeviceDeviceIdAttributesAttributeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdAttributesAttributeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']
      >,
    ) {
      return parseResponse(
        client.device[':deviceId'].attributes[':attributeKey'].$post(args, options),
      )
    },
  })
}

export function createPostDeviceDeviceIdAttributesAttributeKey<
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
                ReturnType<
                  (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdAttributesAttributeKeyMutationOptions<
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

export function getDeleteDeviceDeviceIdAttributesAttributeKeyMutationKey() {
  return ['device', '/device/:deviceId/attributes/:attributeKey', 'DELETE'] as const
}

export function getDeleteDeviceDeviceIdAttributesAttributeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeviceDeviceIdAttributesAttributeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.device[':deviceId'].attributes[':attributeKey'].$delete(args, options),
      )
    },
  })
}

export function createDeleteDeviceDeviceIdAttributesAttributeKey<
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
                ReturnType<
                  (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeviceDeviceIdAttributesAttributeKeyMutationOptions<
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

export function getDeviceDeviceIdDeviceInvitesQueryKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>,
) {
  return ['device', '/device/:deviceId/device-invites', args] as const
}

export function getDeviceDeviceIdDeviceInvitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdDeviceInvitesQueryKey>
  >({
    queryKey: getDeviceDeviceIdDeviceInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.device[':deviceId']['device-invites'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeviceDeviceIdDeviceInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeviceDeviceIdDeviceInvitesQueryKey>
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
      ...getDeviceDeviceIdDeviceInvitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDeviceDeviceIdDeviceInvitesMutationKey() {
  return ['device', '/device/:deviceId/device-invites', 'POST'] as const
}

export function getPostDeviceDeviceIdDeviceInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceDeviceIdDeviceInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$post']>,
    ) {
      return parseResponse(client.device[':deviceId']['device-invites'].$post(args, options))
    },
  })
}

export function createPostDeviceDeviceIdDeviceInvites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceDeviceIdDeviceInvitesMutationOptions<
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

export function getTailnetTailnetUserInvitesQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/user-invites', args] as const
}

export function getTailnetTailnetUserInvitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetUserInvitesQueryKey>
  >({
    queryKey: getTailnetTailnetUserInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet']['user-invites'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetUserInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetUserInvitesQueryKey>
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
      ...getTailnetTailnetUserInvitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetUserInvitesMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/user-invites', 'POST'] as const
}

export function getPostTailnetTailnetUserInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetUserInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet']['user-invites'].$post(args, options))
    },
  })
}

export function createPostTailnetTailnetUserInvites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetUserInvitesMutationOptions<
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

export function getUserInvitesUserInviteIdQueryKey(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>,
) {
  return ['user-invites', '/user-invites/:userInviteId', args] as const
}

export function getUserInvitesUserInviteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserInvitesUserInviteIdQueryKey>
  >({
    queryKey: getUserInvitesUserInviteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-invites'][':userInviteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserInvitesUserInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserInvitesUserInviteIdQueryKey>
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
      ...getUserInvitesUserInviteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserInvitesUserInviteIdMutationKey() {
  return ['user-invites', '/user-invites/:userInviteId', 'DELETE'] as const
}

export function getDeleteUserInvitesUserInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['user-invites'][':userInviteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserInvitesUserInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$delete']>,
    ) {
      return parseResponse(client['user-invites'][':userInviteId'].$delete(args, options))
    },
  })
}

export function createDeleteUserInvitesUserInviteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['user-invites'][':userInviteId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserInvitesUserInviteIdMutationOptions<
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

export function getPostUserInvitesUserInviteIdResendMutationKey() {
  return ['user-invites', '/user-invites/:userInviteId/resend', 'POST'] as const
}

export function getPostUserInvitesUserInviteIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserInvitesUserInviteIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>,
    ) {
      return parseResponse(client['user-invites'][':userInviteId'].resend.$post(args, options))
    },
  })
}

export function createPostUserInvitesUserInviteIdResend<
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
                ReturnType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserInvitesUserInviteIdResendMutationOptions<
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

export function getDeviceInvitesDeviceInviteIdQueryKey(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>,
) {
  return ['device-invites', '/device-invites/:deviceInviteId', args] as const
}

export function getDeviceInvitesDeviceInviteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceInvitesDeviceInviteIdQueryKey>
  >({
    queryKey: getDeviceInvitesDeviceInviteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['device-invites'][':deviceInviteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeviceInvitesDeviceInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeviceInvitesDeviceInviteIdQueryKey>
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
      ...getDeviceInvitesDeviceInviteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteDeviceInvitesDeviceInviteIdMutationKey() {
  return ['device-invites', '/device-invites/:deviceInviteId', 'DELETE'] as const
}

export function getDeleteDeviceInvitesDeviceInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeviceInvitesDeviceInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>,
    ) {
      return parseResponse(client['device-invites'][':deviceInviteId'].$delete(args, options))
    },
  })
}

export function createDeleteDeviceInvitesDeviceInviteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeviceInvitesDeviceInviteIdMutationOptions<
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

export function getPostDeviceInvitesDeviceInviteIdResendMutationKey() {
  return ['device-invites', '/device-invites/:deviceInviteId/resend', 'POST'] as const
}

export function getPostDeviceInvitesDeviceInviteIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['device-invites'][':deviceInviteId']['resend']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceInvitesDeviceInviteIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['device-invites'][':deviceInviteId']['resend']['$post']
      >,
    ) {
      return parseResponse(client['device-invites'][':deviceInviteId'].resend.$post(args, options))
    },
  })
}

export function createPostDeviceInvitesDeviceInviteIdResend<
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
                ReturnType<(typeof client)['device-invites'][':deviceInviteId']['resend']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['resend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceInvitesDeviceInviteIdResendMutationOptions<
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

export function getPostDeviceInvitesDashAcceptMutationKey() {
  return ['device-invites', '/device-invites/-/accept', 'POST'] as const
}

export function getPostDeviceInvitesDashAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-invites']['-']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['device-invites']['-']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeviceInvitesDashAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['device-invites']['-']['accept']['$post']>,
    ) {
      return parseResponse(client['device-invites']['-'].accept.$post(args, options))
    },
  })
}

export function createPostDeviceInvitesDashAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['device-invites']['-']['accept']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['device-invites']['-']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeviceInvitesDashAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTailnetTailnetLoggingConfigurationQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/configuration', args] as const
}

export function getTailnetTailnetLoggingConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingConfigurationQueryKey>
  >({
    queryKey: getTailnetTailnetLoggingConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].logging.configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetLoggingConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetLoggingConfigurationQueryKey>
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
      ...getTailnetTailnetLoggingConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTailnetTailnetLoggingNetworkQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/network', args] as const
}

export function getTailnetTailnetLoggingNetworkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingNetworkQueryKey>
  >({
    queryKey: getTailnetTailnetLoggingNetworkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].logging.network.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetLoggingNetwork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetLoggingNetworkQueryKey>
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
      ...getTailnetTailnetLoggingNetworkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTailnetTailnetLoggingLogTypeStreamStatusQueryKey(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream/status', args] as const
}

export function getTailnetTailnetLoggingLogTypeStreamStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamStatusQueryKey>
  >({
    queryKey: getTailnetTailnetLoggingLogTypeStreamStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].logging[':logType'].stream.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetLoggingLogTypeStreamStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamStatusQueryKey>
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
      ...getTailnetTailnetLoggingLogTypeStreamStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTailnetTailnetLoggingLogTypeStreamQueryKey(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream', args] as const
}

export function getTailnetTailnetLoggingLogTypeStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamQueryKey>
  >({
    queryKey: getTailnetTailnetLoggingLogTypeStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].logging[':logType'].stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetLoggingLogTypeStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamQueryKey>
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
      ...getTailnetTailnetLoggingLogTypeStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTailnetTailnetLoggingLogTypeStreamMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream', 'PUT'] as const
}

export function getPutTailnetTailnetLoggingLogTypeStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTailnetTailnetLoggingLogTypeStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet'].logging[':logType'].stream.$put(args, options),
      )
    },
  })
}

export function createPutTailnetTailnetLoggingLogTypeStream<
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
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTailnetTailnetLoggingLogTypeStreamMutationOptions<
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

export function getDeleteTailnetTailnetLoggingLogTypeStreamMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream', 'DELETE'] as const
}

export function getDeleteTailnetTailnetLoggingLogTypeStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTailnetTailnetLoggingLogTypeStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet'].logging[':logType'].stream.$delete(args, options),
      )
    },
  })
}

export function createDeleteTailnetTailnetLoggingLogTypeStream<
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
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTailnetTailnetLoggingLogTypeStreamMutationOptions<
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

export function getPostTailnetTailnetAwsExternalIdMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/aws-external-id', 'POST'] as const
}

export function getPostTailnetTailnetAwsExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetAwsExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet']['aws-external-id'].$post(args, options))
    },
  })
}

export function createPostTailnetTailnetAwsExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetAwsExternalIdMutationOptions<
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

export function getPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyMutationKey() {
  return [
    'tailnet',
    '/tailnet/:tailnet/aws-external-id/:id/validate-aws-trust-policy',
    'POST',
  ] as const
}

export function getPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicy<
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
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyMutationOptions<
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

export function getTailnetTailnetDnsNameserversQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/nameservers', args] as const
}

export function getTailnetTailnetDnsNameserversQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsNameserversQueryKey>
  >({
    queryKey: getTailnetTailnetDnsNameserversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.nameservers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetDnsNameservers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetDnsNameserversQueryKey>
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
      ...getTailnetTailnetDnsNameserversQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetDnsNameserversMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/nameservers', 'POST'] as const
}

export function getPostTailnetTailnetDnsNameserversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetDnsNameserversMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].dns.nameservers.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetDnsNameservers<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetDnsNameserversMutationOptions<
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

export function getTailnetTailnetDnsPreferencesQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/preferences', args] as const
}

export function getTailnetTailnetDnsPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsPreferencesQueryKey>
  >({
    queryKey: getTailnetTailnetDnsPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.preferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetDnsPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetDnsPreferencesQueryKey>
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
      ...getTailnetTailnetDnsPreferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetDnsPreferencesMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/preferences', 'POST'] as const
}

export function getPostTailnetTailnetDnsPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetDnsPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].dns.preferences.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetDnsPreferences<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetDnsPreferencesMutationOptions<
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

export function getTailnetTailnetDnsSearchpathsQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/searchpaths', args] as const
}

export function getTailnetTailnetDnsSearchpathsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsSearchpathsQueryKey>
  >({
    queryKey: getTailnetTailnetDnsSearchpathsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.searchpaths.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetDnsSearchpaths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetDnsSearchpathsQueryKey>
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
      ...getTailnetTailnetDnsSearchpathsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetDnsSearchpathsMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/searchpaths', 'POST'] as const
}

export function getPostTailnetTailnetDnsSearchpathsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetDnsSearchpathsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].dns.searchpaths.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetDnsSearchpaths<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetDnsSearchpathsMutationOptions<
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

export function getTailnetTailnetDnsSplitDnsQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/split-dns', args] as const
}

export function getTailnetTailnetDnsSplitDnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsSplitDnsQueryKey>
  >({
    queryKey: getTailnetTailnetDnsSplitDnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].dns['split-dns'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetDnsSplitDns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetDnsSplitDnsQueryKey>
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
      ...getTailnetTailnetDnsSplitDnsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTailnetTailnetDnsSplitDnsMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/split-dns', 'PUT'] as const
}

export function getPutTailnetTailnetDnsSplitDnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTailnetTailnetDnsSplitDnsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$put(args, options))
    },
  })
}

export function createPutTailnetTailnetDnsSplitDns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTailnetTailnetDnsSplitDnsMutationOptions<
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

export function getPatchTailnetTailnetDnsSplitDnsMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/split-dns', 'PATCH'] as const
}

export function getPatchTailnetTailnetDnsSplitDnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTailnetTailnetDnsSplitDnsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$patch(args, options))
    },
  })
}

export function createPatchTailnetTailnetDnsSplitDns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTailnetTailnetDnsSplitDnsMutationOptions<
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

export function getTailnetTailnetDnsConfigurationQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/configuration', args] as const
}

export function getTailnetTailnetDnsConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsConfigurationQueryKey>
  >({
    queryKey: getTailnetTailnetDnsConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetDnsConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetDnsConfigurationQueryKey>
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
      ...getTailnetTailnetDnsConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetDnsConfigurationMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/configuration', 'POST'] as const
}

export function getPostTailnetTailnetDnsConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetDnsConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].dns.configuration.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetDnsConfiguration<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetDnsConfigurationMutationOptions<
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

export function getTailnetTailnetKeysQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/keys', args] as const
}

export function getTailnetTailnetKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetKeysQueryKey>
  >({
    queryKey: getTailnetTailnetKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTailnetTailnetKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTailnetTailnetKeysMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/keys', 'POST'] as const
}

export function getPostTailnetTailnetKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$post']>) {
      return parseResponse(client.tailnet[':tailnet'].keys.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTailnetTailnetKeysKeyIdQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/keys/:keyId', args] as const
}

export function getTailnetTailnetKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetKeysKeyIdQueryKey>
  >({
    queryKey: getTailnetTailnetKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].keys[':keyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetKeysKeyIdQueryKey>
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
      ...getTailnetTailnetKeysKeyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTailnetTailnetKeysKeyIdMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/keys/:keyId', 'PUT'] as const
}

export function getPutTailnetTailnetKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTailnetTailnetKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$put(args, options))
    },
  })
}

export function createPutTailnetTailnetKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTailnetTailnetKeysKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTailnetTailnetKeysKeyIdMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/keys/:keyId', 'DELETE'] as const
}

export function getDeleteTailnetTailnetKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTailnetTailnetKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$delete(args, options))
    },
  })
}

export function createDeleteTailnetTailnetKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTailnetTailnetKeysKeyIdMutationOptions<
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

export function getTailnetTailnetAclQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tailnet', '/tailnet/:tailnet/acl', keyArgs] as const
}

export function getTailnetTailnetAclQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetAclQueryKey>
  >({
    queryKey: getTailnetTailnetAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].acl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetAclQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTailnetTailnetAclQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTailnetTailnetAclMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/acl', 'POST'] as const
}

export function getPostTailnetTailnetAclMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetAclMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$post']>) {
      return parseResponse(client.tailnet[':tailnet'].acl.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetAclMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTailnetTailnetAclPreviewMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/acl/preview', 'POST'] as const
}

export function getPostTailnetTailnetAclPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetAclPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].acl.preview.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetAclPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetAclPreviewMutationOptions<
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

export function getPostTailnetTailnetAclValidateMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/acl/validate', 'POST'] as const
}

export function getPostTailnetTailnetAclValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetAclValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].acl.validate.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetAclValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetAclValidateMutationOptions<
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

export function getTailnetTailnetPostureIntegrationsQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/posture/integrations', args] as const
}

export function getTailnetTailnetPostureIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetPostureIntegrationsQueryKey>
  >({
    queryKey: getTailnetTailnetPostureIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].posture.integrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetPostureIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetPostureIntegrationsQueryKey>
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
      ...getTailnetTailnetPostureIntegrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetPostureIntegrationsMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/posture/integrations', 'POST'] as const
}

export function getPostTailnetTailnetPostureIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetPostureIntegrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']
      >,
    ) {
      return parseResponse(client.tailnet[':tailnet'].posture.integrations.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetPostureIntegrations<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetPostureIntegrationsMutationOptions<
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

export function getPostureIntegrationsIdQueryKey(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$get']>,
) {
  return ['posture', '/posture/integrations/:id', args] as const
}

export function getPostureIntegrationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostureIntegrationsIdQueryKey>
  >({
    queryKey: getPostureIntegrationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posture.integrations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostureIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.posture.integrations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostureIntegrationsIdQueryKey>
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
      ...getPostureIntegrationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePostureIntegrationsIdMutationKey() {
  return ['posture', '/posture/integrations/:id', 'DELETE'] as const
}

export function getDeletePostureIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posture.integrations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePostureIntegrationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.posture.integrations)[':id']['$delete']>,
    ) {
      return parseResponse(client.posture.integrations[':id'].$delete(args, options))
    },
  })
}

export function createDeletePostureIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.posture.integrations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePostureIntegrationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPostureIntegrationsIdMutationKey() {
  return ['posture', '/posture/integrations/:id', 'PATCH'] as const
}

export function getPatchPostureIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posture.integrations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPostureIntegrationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.posture.integrations)[':id']['$patch']>,
    ) {
      return parseResponse(client.posture.integrations[':id'].$patch(args, options))
    },
  })
}

export function createPatchPostureIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.posture.integrations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPostureIntegrationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTailnetTailnetUsersQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/users', args] as const
}

export function getTailnetTailnetUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetUsersQueryKey>
  >({
    queryKey: getTailnetTailnetUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTailnetTailnetUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersUserIdRoleMutationKey() {
  return ['users', '/users/:userId/role', 'POST'] as const
}

export function getPostUsersUserIdRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['role']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['role']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['role']['$post']>) {
      return parseResponse(client.users[':userId'].role.$post(args, options))
    },
  })
}

export function createPostUsersUserIdRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['role']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['role']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdRoleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersUserIdApproveMutationKey() {
  return ['users', '/users/:userId/approve', 'POST'] as const
}

export function getPostUsersUserIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdApproveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['approve']['$post']>) {
      return parseResponse(client.users[':userId'].approve.$post(args, options))
    },
  })
}

export function createPostUsersUserIdApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['approve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['approve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdApproveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersUserIdSuspendMutationKey() {
  return ['users', '/users/:userId/suspend', 'POST'] as const
}

export function getPostUsersUserIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdSuspendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['suspend']['$post']>) {
      return parseResponse(client.users[':userId'].suspend.$post(args, options))
    },
  })
}

export function createPostUsersUserIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['suspend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersUserIdRestoreMutationKey() {
  return ['users', '/users/:userId/restore', 'POST'] as const
}

export function getPostUsersUserIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['restore']['$post']>) {
      return parseResponse(client.users[':userId'].restore.$post(args, options))
    },
  })
}

export function createPostUsersUserIdRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersUserIdDeleteMutationKey() {
  return ['users', '/users/:userId/delete', 'POST'] as const
}

export function getPostUsersUserIdDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['delete']['$post']>) {
      return parseResponse(client.users[':userId'].delete.$post(args, options))
    },
  })
}

export function createPostUsersUserIdDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTailnetTailnetContactsQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/contacts', args] as const
}

export function getTailnetTailnetContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetContactsQueryKey>
  >({
    queryKey: getTailnetTailnetContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetContactsQueryKey>
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
      ...getTailnetTailnetContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchTailnetTailnetContactsContactTypeMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/contacts/:contactType', 'PATCH'] as const
}

export function getPatchTailnetTailnetContactsContactTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTailnetTailnetContactsContactTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet'].contacts[':contactType'].$patch(args, options),
      )
    },
  })
}

export function createPatchTailnetTailnetContactsContactType<
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
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTailnetTailnetContactsContactTypeMutationOptions<
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

export function getPostTailnetTailnetContactsContactTypeResendVerificationEmailMutationKey() {
  return [
    'tailnet',
    '/tailnet/:tailnet/contacts/:contactType/resend-verification-email',
    'POST',
  ] as const
}

export function getPostTailnetTailnetContactsContactTypeResendVerificationEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetContactsContactTypeResendVerificationEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet'].contacts[':contactType']['resend-verification-email'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostTailnetTailnetContactsContactTypeResendVerificationEmail<
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
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostTailnetTailnetContactsContactTypeResendVerificationEmailMutationOptions<
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

export function getTailnetTailnetWebhooksQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/webhooks', args] as const
}

export function getTailnetTailnetWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetWebhooksQueryKey>
  >({
    queryKey: getTailnetTailnetWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetWebhooksQueryKey>
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
      ...getTailnetTailnetWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetWebhooksMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/webhooks', 'POST'] as const
}

export function getPostTailnetTailnetWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].webhooks.$post(args, options))
    },
  })
}

export function createPostTailnetTailnetWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksEndpointIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>,
) {
  return ['webhooks', '/webhooks/:endpointId', args] as const
}

export function getWebhooksEndpointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksEndpointIdQueryKey>
  >({
    queryKey: getWebhooksEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':endpointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksEndpointIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksEndpointIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteWebhooksEndpointIdMutationKey() {
  return ['webhooks', '/webhooks/:endpointId', 'DELETE'] as const
}

export function getDeleteWebhooksEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':endpointId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksEndpointIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':endpointId']['$delete']>) {
      return parseResponse(client.webhooks[':endpointId'].$delete(args, options))
    },
  })
}

export function createDeleteWebhooksEndpointId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':endpointId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksEndpointIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchWebhooksEndpointIdMutationKey() {
  return ['webhooks', '/webhooks/:endpointId', 'PATCH'] as const
}

export function getPatchWebhooksEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':endpointId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksEndpointIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':endpointId']['$patch']>) {
      return parseResponse(client.webhooks[':endpointId'].$patch(args, options))
    },
  })
}

export function createPatchWebhooksEndpointId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':endpointId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWebhooksEndpointIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksEndpointIdTestMutationKey() {
  return ['webhooks', '/webhooks/:endpointId/test', 'POST'] as const
}

export function getPostWebhooksEndpointIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':endpointId']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksEndpointIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':endpointId']['test']['$post']>,
    ) {
      return parseResponse(client.webhooks[':endpointId'].test.$post(args, options))
    },
  })
}

export function createPostWebhooksEndpointIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':endpointId']['test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksEndpointIdTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksEndpointIdRotateMutationKey() {
  return ['webhooks', '/webhooks/:endpointId/rotate', 'POST'] as const
}

export function getPostWebhooksEndpointIdRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksEndpointIdRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>,
    ) {
      return parseResponse(client.webhooks[':endpointId'].rotate.$post(args, options))
    },
  })
}

export function createPostWebhooksEndpointIdRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksEndpointIdRotateMutationOptions<
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

export function getTailnetTailnetSettingsQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/settings', args] as const
}

export function getTailnetTailnetSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetSettingsQueryKey>
  >({
    queryKey: getTailnetTailnetSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetSettingsQueryKey>
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
      ...getTailnetTailnetSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchTailnetTailnetSettingsMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/settings', 'PATCH'] as const
}

export function getPatchTailnetTailnetSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTailnetTailnetSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>,
    ) {
      return parseResponse(client.tailnet[':tailnet'].settings.$patch(args, options))
    },
  })
}

export function createPatchTailnetTailnetSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTailnetTailnetSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTailnetTailnetServicesQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/services', args] as const
}

export function getTailnetTailnetServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesQueryKey>
  >({
    queryKey: getTailnetTailnetServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetServicesQueryKey>
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
      ...getTailnetTailnetServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTailnetTailnetServicesServiceNameQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName', args] as const
}

export function getTailnetTailnetServicesServiceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesServiceNameQueryKey>
  >({
    queryKey: getTailnetTailnetServicesServiceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetServicesServiceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetServicesServiceNameQueryKey>
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
      ...getTailnetTailnetServicesServiceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTailnetTailnetServicesServiceNameMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName', 'PUT'] as const
}

export function getPutTailnetTailnetServicesServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTailnetTailnetServicesServiceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']
      >,
    ) {
      return parseResponse(client.tailnet[':tailnet'].services[':serviceName'].$put(args, options))
    },
  })
}

export function createPutTailnetTailnetServicesServiceName<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTailnetTailnetServicesServiceNameMutationOptions<
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

export function getDeleteTailnetTailnetServicesServiceNameMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName', 'DELETE'] as const
}

export function getDeleteTailnetTailnetServicesServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTailnetTailnetServicesServiceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteTailnetTailnetServicesServiceName<
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
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTailnetTailnetServicesServiceNameMutationOptions<
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

export function getTailnetTailnetServicesServiceNameDevicesQueryKey(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName/devices', args] as const
}

export function getTailnetTailnetServicesServiceNameDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesServiceNameDevicesQueryKey>
  >({
    queryKey: getTailnetTailnetServicesServiceNameDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetServicesServiceNameDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetServicesServiceNameDevicesQueryKey>
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
      ...getTailnetTailnetServicesServiceNameDevicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
  >,
) {
  return [
    'tailnet',
    '/tailnet/:tailnet/services/:serviceName/device/:deviceId/approved',
    args,
  ] as const
}

export function getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey>
  >({
    queryKey: getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createTailnetTailnetServicesServiceNameDeviceDeviceIdApproved<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey>
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
      ...getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedMutationKey() {
  return [
    'tailnet',
    '/tailnet/:tailnet/services/:serviceName/device/:deviceId/approved',
    'POST',
  ] as const
}

export function getPostTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostTailnetTailnetServicesServiceNameDeviceDeviceIdApproved<
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
                ReturnType<
                  (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedMutationOptions<
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

export function getTailnetTailnetOauthAppsQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps', args] as const
}

export function getTailnetTailnetOauthAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetOauthAppsQueryKey>
  >({
    queryKey: getTailnetTailnetOauthAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet']['oauth-apps'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetOauthApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetOauthAppsQueryKey>
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
      ...getTailnetTailnetOauthAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTailnetTailnetOauthAppsMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps', 'POST'] as const
}

export function getPostTailnetTailnetOauthAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTailnetTailnetOauthAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>,
    ) {
      return parseResponse(client.tailnet[':tailnet']['oauth-apps'].$post(args, options))
    },
  })
}

export function createPostTailnetTailnetOauthApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTailnetTailnetOauthAppsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTailnetTailnetOauthAppsAppIdQueryKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps/:appId', args] as const
}

export function getTailnetTailnetOauthAppsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetOauthAppsAppIdQueryKey>
  >({
    queryKey: getTailnetTailnetOauthAppsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tailnet[':tailnet']['oauth-apps'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTailnetTailnetOauthAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTailnetTailnetOauthAppsAppIdQueryKey>
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
      ...getTailnetTailnetOauthAppsAppIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTailnetTailnetOauthAppsAppIdMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps/:appId', 'PUT'] as const
}

export function getPutTailnetTailnetOauthAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTailnetTailnetOauthAppsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>,
    ) {
      return parseResponse(client.tailnet[':tailnet']['oauth-apps'][':appId'].$put(args, options))
    },
  })
}

export function createPutTailnetTailnetOauthAppsAppId<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTailnetTailnetOauthAppsAppIdMutationOptions<
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

export function getDeleteTailnetTailnetOauthAppsAppIdMutationKey() {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps/:appId', 'DELETE'] as const
}

export function getDeleteTailnetTailnetOauthAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTailnetTailnetOauthAppsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']
      >,
    ) {
      return parseResponse(
        client.tailnet[':tailnet']['oauth-apps'][':appId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteTailnetTailnetOauthAppsAppId<
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
                ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTailnetTailnetOauthAppsAppIdMutationOptions<
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

export function getOrganizationsOrganizationTailnetsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>,
) {
  return ['organizations', '/organizations/:organization/tailnets', args] as const
}

export function getOrganizationsOrganizationTailnetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationTailnetsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationTailnetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization'].tailnets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationTailnets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationTailnetsQueryKey>
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
      ...getOrganizationsOrganizationTailnetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationTailnetsMutationKey() {
  return ['organizations', '/organizations/:organization/tailnets', 'POST'] as const
}

export function getPostOrganizationsOrganizationTailnetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationTailnetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$post']>,
    ) {
      return parseResponse(client.organizations[':organization'].tailnets.$post(args, options))
    },
  })
}

export function createPostOrganizationsOrganizationTailnets<
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
                ReturnType<(typeof client.organizations)[':organization']['tailnets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationTailnetsMutationOptions<
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
