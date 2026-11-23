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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>,
) {
  return ['tailnet', '/tailnet/:tailnet/devices', toValue(args)] as const
}

export function getTailnetTailnetDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTailnetTailnet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTailnetTailnetMutationOptions<TError, TOnMutateResult>(
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

export function usePatchTailnetTailnetDeviceAttributes<
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>,
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
  const mutationDefaults = getPatchTailnetTailnetDeviceAttributesMutationOptions<
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

export function getDeviceDeviceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceId']['$get']>>,
) {
  return ['device', '/device/:deviceId', toValue(args)] as const
}

export function getDeviceDeviceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.device[':deviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
            >
          >,
          ReturnType<typeof getDeviceDeviceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.device[':deviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDeviceDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeviceDeviceIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostDeviceDeviceIdExpire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdExpireMutationOptions<TError, TOnMutateResult>(
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

export function getDeviceDeviceIdRoutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>>,
) {
  return ['device', '/device/:deviceId/routes', toValue(args)] as const
}

export function getDeviceDeviceIdRoutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceDeviceIdRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.device[':deviceId'].routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceDeviceIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceDeviceIdRoutesQueryKey>
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
          Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceDeviceIdRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.device[':deviceId'].routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeviceDeviceIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdRoutesMutationOptions<TError, TOnMutateResult>(
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

export function usePostDeviceDeviceIdAuthorized<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdAuthorizedMutationOptions<TError, TOnMutateResult>(
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

export function usePostDeviceDeviceIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdNameMutationOptions<TError, TOnMutateResult>(
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

export function usePostDeviceDeviceIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function usePostDeviceDeviceIdKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdKeyMutationOptions<TError, TOnMutateResult>(
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

export function usePostDeviceDeviceIdIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdIpMutationOptions<TError, TOnMutateResult>(
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

export function getDeviceDeviceIdAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>
  >,
) {
  return ['device', '/device/:deviceId/attributes', toValue(args)] as const
}

export function getDeviceDeviceIdAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceDeviceIdAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.device[':deviceId'].attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceDeviceIdAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceDeviceIdAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceDeviceIdAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.device[':deviceId'].attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeviceDeviceIdAttributesAttributeKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceDeviceIdAttributesAttributeKeyMutationOptions<
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

export function useDeleteDeviceDeviceIdAttributesAttributeKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeviceDeviceIdAttributesAttributeKeyMutationOptions<
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

export function getDeviceDeviceIdDeviceInvitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>
  >,
) {
  return ['device', '/device/:deviceId/device-invites', toValue(args)] as const
}

export function getDeviceDeviceIdDeviceInvitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceDeviceIdDeviceInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.device[':deviceId']['device-invites'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceDeviceIdDeviceInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceDeviceIdDeviceInvitesQueryKey>
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
          Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceIdDeviceInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceDeviceIdDeviceInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.device[':deviceId']['device-invites'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeviceDeviceIdDeviceInvites<
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
                Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$post']>,
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
  const mutationDefaults = getPostDeviceDeviceIdDeviceInvitesMutationOptions<
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

export function getTailnetTailnetUserInvitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/user-invites', toValue(args)] as const
}

export function getTailnetTailnetUserInvitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetUserInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet']['user-invites'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetUserInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetUserInvitesQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetUserInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetUserInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet']['user-invites'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetUserInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTailnetTailnetUserInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getUserInvitesUserInviteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>
  >,
) {
  return ['user-invites', '/user-invites/:userInviteId', toValue(args)] as const
}

export function getUserInvitesUserInviteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserInvitesUserInviteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-invites'][':userInviteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserInvitesUserInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserInvitesUserInviteIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserInvitesUserInviteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserInvitesUserInviteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['user-invites'][':userInviteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUserInvitesUserInviteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserInvitesUserInviteIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostUserInvitesUserInviteIdResend<
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
                  ReturnType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>,
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
  const mutationDefaults = getPostUserInvitesUserInviteIdResendMutationOptions<
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

export function getDeviceInvitesDeviceInviteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>
  >,
) {
  return ['device-invites', '/device-invites/:deviceInviteId', toValue(args)] as const
}

export function getDeviceInvitesDeviceInviteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceInvitesDeviceInviteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['device-invites'][':deviceInviteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceInvitesDeviceInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceInvitesDeviceInviteIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceInvitesDeviceInviteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceInvitesDeviceInviteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['device-invites'][':deviceInviteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDeviceInvitesDeviceInviteId<
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
                Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>,
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
  const mutationDefaults = getDeleteDeviceInvitesDeviceInviteIdMutationOptions<
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

export function usePostDeviceInvitesDeviceInviteIdResend<
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
                    (typeof client)['device-invites'][':deviceInviteId']['resend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['resend']['$post']>,
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
  const mutationDefaults = getPostDeviceInvitesDeviceInviteIdResendMutationOptions<
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

export function usePostDeviceInvitesDashAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeviceInvitesDashAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetLoggingConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/configuration', toValue(args)] as const
}

export function getTailnetTailnetLoggingConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetLoggingConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].logging.configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetLoggingConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
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
                    (typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']
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
                    (typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetLoggingConfigurationQueryKey>
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
            ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetLoggingConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].logging.configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTailnetTailnetLoggingNetworkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/network', toValue(args)] as const
}

export function getTailnetTailnetLoggingNetworkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetLoggingNetworkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].logging.network.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetLoggingNetwork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetLoggingNetworkQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingNetworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetLoggingNetworkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].logging.network.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTailnetTailnetLoggingLogTypeStreamStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
    >
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream/status', toValue(args)] as const
}

export function getTailnetTailnetLoggingLogTypeStreamStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetLoggingLogTypeStreamStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].logging[':logType'].stream.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetLoggingLogTypeStreamStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
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
                    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
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
                    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamStatusQueryKey>
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
              (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetLoggingLogTypeStreamStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTailnetTailnetLoggingLogTypeStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream', toValue(args)] as const
}

export function getTailnetTailnetLoggingLogTypeStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetLoggingLogTypeStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].logging[':logType'].stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetLoggingLogTypeStream<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']>
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
                    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
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
                    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamQueryKey>
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
            ReturnType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetLoggingLogTypeStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetLoggingLogTypeStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTailnetTailnetLoggingLogTypeStream<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTailnetTailnetLoggingLogTypeStreamMutationOptions<
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

export function useDeleteTailnetTailnetLoggingLogTypeStream<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTailnetTailnetLoggingLogTypeStreamMutationOptions<
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

export function usePostTailnetTailnetAwsExternalId<
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
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>,
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
  const mutationDefaults = getPostTailnetTailnetAwsExternalIdMutationOptions<
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

export function usePostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicy<
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
    getPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyMutationOptions<
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

export function getTailnetTailnetDnsNameserversQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/nameservers', toValue(args)] as const
}

export function getTailnetTailnetDnsNameserversQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetDnsNameserversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.nameservers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetDnsNameservers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetDnsNameserversQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsNameserversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetDnsNameserversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].dns.nameservers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetDnsNameservers<
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>,
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
  const mutationDefaults = getPostTailnetTailnetDnsNameserversMutationOptions<
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

export function getTailnetTailnetDnsPreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/preferences', toValue(args)] as const
}

export function getTailnetTailnetDnsPreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetDnsPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.preferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetDnsPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetDnsPreferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetDnsPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].dns.preferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetDnsPreferences<
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>,
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
  const mutationDefaults = getPostTailnetTailnetDnsPreferencesMutationOptions<
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

export function getTailnetTailnetDnsSearchpathsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/searchpaths', toValue(args)] as const
}

export function getTailnetTailnetDnsSearchpathsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetDnsSearchpathsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.searchpaths.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetDnsSearchpaths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetDnsSearchpathsQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsSearchpathsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetDnsSearchpathsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].dns.searchpaths.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetDnsSearchpaths<
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>,
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
  const mutationDefaults = getPostTailnetTailnetDnsSearchpathsMutationOptions<
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

export function getTailnetTailnetDnsSplitDnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/split-dns', toValue(args)] as const
}

export function getTailnetTailnetDnsSplitDnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetDnsSplitDnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].dns['split-dns'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetDnsSplitDns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetDnsSplitDnsQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsSplitDnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetDnsSplitDnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].dns['split-dns'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTailnetTailnetDnsSplitDns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTailnetTailnetDnsSplitDnsMutationOptions<TError, TOnMutateResult>(
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

export function usePatchTailnetTailnetDnsSplitDns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>,
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
  const mutationDefaults = getPatchTailnetTailnetDnsSplitDnsMutationOptions<
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

export function getTailnetTailnetDnsConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/configuration', toValue(args)] as const
}

export function getTailnetTailnetDnsConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetDnsConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].dns.configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetDnsConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetDnsConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetDnsConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetDnsConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].dns.configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetDnsConfiguration<
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>,
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
  const mutationDefaults = getPostTailnetTailnetDnsConfigurationMutationOptions<
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

export function getTailnetTailnetKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>,
) {
  return ['tailnet', '/tailnet/:tailnet/keys', toValue(args)] as const
}

export function getTailnetTailnetKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTailnetTailnetKeysMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/keys/:keyId', toValue(args)] as const
}

export function getTailnetTailnetKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].keys[':keyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetKeysKeyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].keys[':keyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTailnetTailnetKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTailnetTailnetKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTailnetTailnetKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>,
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
  const mutationDefaults = getDeleteTailnetTailnetKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetAclQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tailnet', '/tailnet/:tailnet/acl', keyArgs] as const
}

export function getTailnetTailnetAclQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetAclQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].acl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetAclQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetAclQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetAclQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].acl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTailnetTailnetAclMutationOptions<TError, TOnMutateResult>(
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

export function usePostTailnetTailnetAclPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTailnetTailnetAclPreviewMutationOptions<TError, TOnMutateResult>(
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

export function usePostTailnetTailnetAclValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTailnetTailnetAclValidateMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetPostureIntegrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/posture/integrations', toValue(args)] as const
}

export function getTailnetTailnetPostureIntegrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetPostureIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].posture.integrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetPostureIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetPostureIntegrationsQueryKey>
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
            ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetPostureIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetPostureIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].posture.integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetPostureIntegrations<
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
                    (typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']>,
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
  const mutationDefaults = getPostTailnetTailnetPostureIntegrationsMutationOptions<
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

export function getPostureIntegrationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posture.integrations)[':id']['$get']>>,
) {
  return ['posture', '/posture/integrations/:id', toValue(args)] as const
}

export function getPostureIntegrationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posture.integrations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostureIntegrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posture.integrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostureIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posture.integrations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostureIntegrationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostureIntegrationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostureIntegrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posture.integrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePostureIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePostureIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPostureIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPostureIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>>,
) {
  return ['tailnet', '/tailnet/:tailnet/users', toValue(args)] as const
}

export function getTailnetTailnetUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserIdRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdRoleMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersUserIdApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdApproveMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersUserIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersUserIdRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdRestoreMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersUserIdDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>,
) {
  return ['tailnet', '/tailnet/:tailnet/contacts', toValue(args)] as const
}

export function getTailnetTailnetContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchTailnetTailnetContactsContactType<
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
                    (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']
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
  const mutationDefaults = getPatchTailnetTailnetContactsContactTypeMutationOptions<
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

export function usePostTailnetTailnetContactsContactTypeResendVerificationEmail<
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
    getPostTailnetTailnetContactsContactTypeResendVerificationEmailMutationOptions<
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

export function getTailnetTailnetWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>,
) {
  return ['tailnet', '/tailnet/:tailnet/webhooks', toValue(args)] as const
}

export function getTailnetTailnetWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTailnetTailnetWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksEndpointIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>>,
) {
  return ['webhooks', '/webhooks/:endpointId', toValue(args)] as const
}

export function getWebhooksEndpointIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':endpointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksEndpointIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':endpointId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWebhooksEndpointId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksEndpointIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchWebhooksEndpointId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebhooksEndpointIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostWebhooksEndpointIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksEndpointIdTestMutationOptions<TError, TOnMutateResult>(
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

export function usePostWebhooksEndpointIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksEndpointIdRotateMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>,
) {
  return ['tailnet', '/tailnet/:tailnet/settings', toValue(args)] as const
}

export function getTailnetTailnetSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchTailnetTailnetSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTailnetTailnetSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>>,
) {
  return ['tailnet', '/tailnet/:tailnet/services', toValue(args)] as const
}

export function getTailnetTailnetServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTailnetTailnetServicesServiceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName', toValue(args)] as const
}

export function getTailnetTailnetServicesServiceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetServicesServiceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetServicesServiceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
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
                    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']
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
                    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetServicesServiceNameQueryKey>
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
            ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesServiceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetServicesServiceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTailnetTailnetServicesServiceName<
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
                    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']>,
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
  const mutationDefaults = getPutTailnetTailnetServicesServiceNameMutationOptions<
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

export function useDeleteTailnetTailnetServicesServiceName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTailnetTailnetServicesServiceNameMutationOptions<
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

export function getTailnetTailnetServicesServiceNameDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
    >
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName/devices', toValue(args)] as const
}

export function getTailnetTailnetServicesServiceNameDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetServicesServiceNameDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetServicesServiceNameDevices<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
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
                    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
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
                    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetServicesServiceNameDevicesQueryKey>
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
              (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesServiceNameDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetServicesServiceNameDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
    >
  >,
) {
  return [
    'tailnet',
    '/tailnet/:tailnet/services/:serviceName/device/:deviceId/approved',
    toValue(args),
  ] as const
}

export function getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useTailnetTailnetServicesServiceNameDeviceDeviceIdApproved<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
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
                    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
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
                    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey>
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
              (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetServicesServiceNameDeviceDeviceIdApproved<
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
    getPostTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedMutationOptions<
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

export function getTailnetTailnetOauthAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps', toValue(args)] as const
}

export function getTailnetTailnetOauthAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetOauthAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet']['oauth-apps'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetOauthApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetOauthAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetOauthAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetOauthAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet']['oauth-apps'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTailnetTailnetOauthApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTailnetTailnetOauthAppsMutationOptions<TError, TOnMutateResult>(
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

export function getTailnetTailnetOauthAppsAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps/:appId', toValue(args)] as const
}

export function getTailnetTailnetOauthAppsAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTailnetTailnetOauthAppsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tailnet[':tailnet']['oauth-apps'][':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTailnetTailnetOauthAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTailnetTailnetOauthAppsAppIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTailnetTailnetOauthAppsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTailnetTailnetOauthAppsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tailnet[':tailnet']['oauth-apps'][':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTailnetTailnetOauthAppsAppId<
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>,
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
  const mutationDefaults = getPutTailnetTailnetOauthAppsAppIdMutationOptions<
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

export function useDeleteTailnetTailnetOauthAppsAppId<
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
                  ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>,
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
  const mutationDefaults = getDeleteTailnetTailnetOauthAppsAppIdMutationOptions<
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

export function getOrganizationsOrganizationTailnetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization/tailnets', toValue(args)] as const
}

export function getOrganizationsOrganizationTailnetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationTailnetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization'].tailnets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationTailnets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationTailnetsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationTailnetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationTailnetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization'].tailnets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationTailnets<
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
                  ReturnType<(typeof client.organizations)[':organization']['tailnets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$post']>,
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
  const mutationDefaults = getPostOrganizationsOrganizationTailnetsMutationOptions<
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
