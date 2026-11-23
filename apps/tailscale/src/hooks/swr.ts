import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetTailnetTailnetDevicesKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/devices', args] as const
}

export function useGetTailnetTailnetDevices<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetDevices<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTailnetTailnetKey() {
  return ['tailnet', '/tailnet/:tailnet', 'DELETE'] as const
}

export function useDeleteTailnetTailnet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTailnetTailnetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['$delete']> },
      ) => parseResponse(client.tailnet[':tailnet'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTailnetTailnetDeviceAttributesKey() {
  return ['tailnet', '/tailnet/:tailnet/device-attributes', 'PATCH'] as const
}

export function usePatchTailnetTailnetDeviceAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTailnetTailnetDeviceAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>
        },
      ) =>
        parseResponse(client.tailnet[':tailnet']['device-attributes'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeviceDeviceIdKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['$get']>,
) {
  return ['device', '/device/:deviceId', args] as const
}

export function useGetDeviceDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeviceDeviceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.device[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeviceDeviceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.device[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDeviceDeviceIdKey() {
  return ['device', '/device/:deviceId', 'DELETE'] as const
}

export function useDeleteDeviceDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeviceDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.device)[':deviceId']['$delete']> },
      ) => parseResponse(client.device[':deviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceDeviceIdExpireKey() {
  return ['device', '/device/:deviceId/expire', 'POST'] as const
}

export function usePostDeviceDeviceIdExpire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['expire']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['expire']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdExpireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.device)[':deviceId']['expire']['$post']> },
      ) => parseResponse(client.device[':deviceId'].expire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeviceDeviceIdRoutesKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>,
) {
  return ['device', '/device/:deviceId/routes', args] as const
}

export function useGetDeviceDeviceIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceDeviceIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.device[':deviceId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceDeviceIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceDeviceIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.device[':deviceId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeviceDeviceIdRoutesKey() {
  return ['device', '/device/:deviceId/routes', 'POST'] as const
}

export function usePostDeviceDeviceIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['routes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['routes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.device)[':deviceId']['routes']['$post']> },
      ) => parseResponse(client.device[':deviceId'].routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceDeviceIdAuthorizedKey() {
  return ['device', '/device/:deviceId/authorized', 'POST'] as const
}

export function usePostDeviceDeviceIdAuthorized<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['authorized']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['authorized']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdAuthorizedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.device)[':deviceId']['authorized']['$post']> },
      ) => parseResponse(client.device[':deviceId'].authorized.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceDeviceIdNameKey() {
  return ['device', '/device/:deviceId/name', 'POST'] as const
}

export function usePostDeviceDeviceIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.device)[':deviceId']['name']['$post']> },
      ) => parseResponse(client.device[':deviceId'].name.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceDeviceIdTagsKey() {
  return ['device', '/device/:deviceId/tags', 'POST'] as const
}

export function usePostDeviceDeviceIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.device)[':deviceId']['tags']['$post']> },
      ) => parseResponse(client.device[':deviceId'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceDeviceIdKeyKey() {
  return ['device', '/device/:deviceId/key', 'POST'] as const
}

export function usePostDeviceDeviceIdKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.device)[':deviceId']['key']['$post']> },
      ) => parseResponse(client.device[':deviceId'].key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceDeviceIdIpKey() {
  return ['device', '/device/:deviceId/ip', 'POST'] as const
}

export function usePostDeviceDeviceIdIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['ip']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['ip']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.device)[':deviceId']['ip']['$post']> },
      ) => parseResponse(client.device[':deviceId'].ip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeviceDeviceIdAttributesKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>,
) {
  return ['device', '/device/:deviceId/attributes', args] as const
}

export function useGetDeviceDeviceIdAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceDeviceIdAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.device[':deviceId'].attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceDeviceIdAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceDeviceIdAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.device[':deviceId'].attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeviceDeviceIdAttributesAttributeKeyKey() {
  return ['device', '/device/:deviceId/attributes/:attributeKey', 'POST'] as const
}

export function usePostDeviceDeviceIdAttributesAttributeKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdAttributesAttributeKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.device[':deviceId'].attributes[':attributeKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeviceDeviceIdAttributesAttributeKeyKey() {
  return ['device', '/device/:deviceId/attributes/:attributeKey', 'DELETE'] as const
}

export function useDeleteDeviceDeviceIdAttributesAttributeKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeviceDeviceIdAttributesAttributeKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.device[':deviceId'].attributes[':attributeKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeviceDeviceIdDeviceInvitesKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>,
) {
  return ['device', '/device/:deviceId/device-invites', args] as const
}

export function useGetDeviceDeviceIdDeviceInvites<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceDeviceIdDeviceInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.device[':deviceId']['device-invites'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceDeviceIdDeviceInvites<TError = unknown>(
  args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceDeviceIdDeviceInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.device[':deviceId']['device-invites'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeviceDeviceIdDeviceInvitesKey() {
  return ['device', '/device/:deviceId/device-invites', 'POST'] as const
}

export function usePostDeviceDeviceIdDeviceInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device)[':deviceId']['device-invites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceDeviceIdDeviceInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$post']>
        },
      ) => parseResponse(client.device[':deviceId']['device-invites'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetUserInvitesKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/user-invites', args] as const
}

export function useGetTailnetTailnetUserInvites<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetUserInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet']['user-invites'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetUserInvites<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetUserInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet']['user-invites'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetUserInvitesKey() {
  return ['tailnet', '/tailnet/:tailnet/user-invites', 'POST'] as const
}

export function usePostTailnetTailnetUserInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetUserInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']> },
      ) => parseResponse(client.tailnet[':tailnet']['user-invites'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserInvitesUserInviteIdKey(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>,
) {
  return ['user-invites', '/user-invites/:userInviteId', args] as const
}

export function useGetUserInvitesUserInviteId<TError = unknown>(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserInvitesUserInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-invites'][':userInviteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserInvitesUserInviteId<TError = unknown>(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserInvitesUserInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-invites'][':userInviteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserInvitesUserInviteIdKey() {
  return ['user-invites', '/user-invites/:userInviteId', 'DELETE'] as const
}

export function useDeleteUserInvitesUserInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['user-invites'][':userInviteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserInvitesUserInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$delete']> },
      ) => parseResponse(client['user-invites'][':userInviteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserInvitesUserInviteIdResendKey() {
  return ['user-invites', '/user-invites/:userInviteId/resend', 'POST'] as const
}

export function usePostUserInvitesUserInviteIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserInvitesUserInviteIdResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>
        },
      ) => parseResponse(client['user-invites'][':userInviteId'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeviceInvitesDeviceInviteIdKey(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>,
) {
  return ['device-invites', '/device-invites/:deviceInviteId', args] as const
}

export function useGetDeviceInvitesDeviceInviteId<TError = unknown>(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceInvitesDeviceInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['device-invites'][':deviceInviteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceInvitesDeviceInviteId<TError = unknown>(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceInvitesDeviceInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['device-invites'][':deviceInviteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDeviceInvitesDeviceInviteIdKey() {
  return ['device-invites', '/device-invites/:deviceInviteId', 'DELETE'] as const
}

export function useDeleteDeviceInvitesDeviceInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeviceInvitesDeviceInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>
        },
      ) => parseResponse(client['device-invites'][':deviceInviteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceInvitesDeviceInviteIdResendKey() {
  return ['device-invites', '/device-invites/:deviceInviteId/resend', 'POST'] as const
}

export function usePostDeviceInvitesDeviceInviteIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceInvitesDeviceInviteIdResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['device-invites'][':deviceInviteId']['resend']['$post']
          >
        },
      ) =>
        parseResponse(client['device-invites'][':deviceInviteId'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeviceInvitesDashAcceptKey() {
  return ['device-invites', '/device-invites/-/accept', 'POST'] as const
}

export function usePostDeviceInvitesDashAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-invites']['-']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['device-invites']['-']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeviceInvitesDashAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['device-invites']['-']['accept']['$post']> },
      ) => parseResponse(client['device-invites']['-'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetLoggingConfigurationKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/configuration', args] as const
}

export function useGetTailnetTailnetLoggingConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].logging.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetLoggingConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].logging.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTailnetTailnetLoggingNetworkKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/network', args] as const
}

export function useGetTailnetTailnetLoggingNetwork<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingNetworkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].logging.network.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetLoggingNetwork<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingNetworkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].logging.network.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTailnetTailnetLoggingLogTypeStreamStatusKey(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream/status', args] as const
}

export function useGetTailnetTailnetLoggingLogTypeStreamStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingLogTypeStreamStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetLoggingLogTypeStreamStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingLogTypeStreamStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTailnetTailnetLoggingLogTypeStreamKey(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream', args] as const
}

export function useGetTailnetTailnetLoggingLogTypeStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingLogTypeStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetLoggingLogTypeStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetLoggingLogTypeStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTailnetTailnetLoggingLogTypeStreamKey() {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream', 'PUT'] as const
}

export function usePutTailnetTailnetLoggingLogTypeStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTailnetTailnetLoggingLogTypeStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTailnetTailnetLoggingLogTypeStreamKey() {
  return ['tailnet', '/tailnet/:tailnet/logging/:logType/stream', 'DELETE'] as const
}

export function useDeleteTailnetTailnetLoggingLogTypeStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTailnetTailnetLoggingLogTypeStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet'].logging[':logType'].stream.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTailnetTailnetAwsExternalIdKey() {
  return ['tailnet', '/tailnet/:tailnet/aws-external-id', 'POST'] as const
}

export function usePostTailnetTailnetAwsExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetAwsExternalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>
        },
      ) => parseResponse(client.tailnet[':tailnet']['aws-external-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyKey() {
  return [
    'tailnet',
    '/tailnet/:tailnet/aws-external-id/:id/validate-aws-trust-policy',
    'POST',
  ] as const
}

export function usePostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetDnsNameserversKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/nameservers', args] as const
}

export function useGetTailnetTailnetDnsNameservers<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsNameserversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.nameservers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetDnsNameservers<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsNameserversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.nameservers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetDnsNameserversKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/nameservers', 'POST'] as const
}

export function usePostTailnetTailnetDnsNameservers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetDnsNameserversKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].dns.nameservers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetDnsPreferencesKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/preferences', args] as const
}

export function useGetTailnetTailnetDnsPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetDnsPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetDnsPreferencesKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/preferences', 'POST'] as const
}

export function usePostTailnetTailnetDnsPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetDnsPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].dns.preferences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetDnsSearchpathsKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/searchpaths', args] as const
}

export function useGetTailnetTailnetDnsSearchpaths<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsSearchpathsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.searchpaths.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetDnsSearchpaths<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsSearchpathsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.searchpaths.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetDnsSearchpathsKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/searchpaths', 'POST'] as const
}

export function usePostTailnetTailnetDnsSearchpaths<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetDnsSearchpathsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].dns.searchpaths.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetDnsSplitDnsKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/split-dns', args] as const
}

export function useGetTailnetTailnetDnsSplitDns<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsSplitDnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetDnsSplitDns<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsSplitDnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTailnetTailnetDnsSplitDnsKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/split-dns', 'PUT'] as const
}

export function usePutTailnetTailnetDnsSplitDns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTailnetTailnetDnsSplitDnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTailnetTailnetDnsSplitDnsKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/split-dns', 'PATCH'] as const
}

export function usePatchTailnetTailnetDnsSplitDns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTailnetTailnetDnsSplitDnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetDnsConfigurationKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/dns/configuration', args] as const
}

export function useGetTailnetTailnetDnsConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetDnsConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetDnsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].dns.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetDnsConfigurationKey() {
  return ['tailnet', '/tailnet/:tailnet/dns/configuration', 'POST'] as const
}

export function usePostTailnetTailnetDnsConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetDnsConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']
          >
        },
      ) => parseResponse(client.tailnet[':tailnet'].dns.configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetKeysKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/keys', args] as const
}

export function useGetTailnetTailnetKeys<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetKeys<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetKeysKey() {
  return ['tailnet', '/tailnet/:tailnet/keys', 'POST'] as const
}

export function usePostTailnetTailnetKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$post']> },
      ) => parseResponse(client.tailnet[':tailnet'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetKeysKeyIdKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/keys/:keyId', args] as const
}

export function useGetTailnetTailnetKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTailnetTailnetKeysKeyIdKey() {
  return ['tailnet', '/tailnet/:tailnet/keys/:keyId', 'PUT'] as const
}

export function usePutTailnetTailnetKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTailnetTailnetKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']> },
      ) => parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTailnetTailnetKeysKeyIdKey() {
  return ['tailnet', '/tailnet/:tailnet/keys/:keyId', 'DELETE'] as const
}

export function useDeleteTailnetTailnetKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTailnetTailnetKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetAclKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tailnet', '/tailnet/:tailnet/acl', keyArgs] as const
}

export function useGetTailnetTailnetAcl<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetAcl<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetAclKey() {
  return ['tailnet', '/tailnet/:tailnet/acl', 'POST'] as const
}

export function usePostTailnetTailnetAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$post']> },
      ) => parseResponse(client.tailnet[':tailnet'].acl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTailnetTailnetAclPreviewKey() {
  return ['tailnet', '/tailnet/:tailnet/acl/preview', 'POST'] as const
}

export function usePostTailnetTailnetAclPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetAclPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].acl.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTailnetTailnetAclValidateKey() {
  return ['tailnet', '/tailnet/:tailnet/acl/validate', 'POST'] as const
}

export function usePostTailnetTailnetAclValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetAclValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>
        },
      ) => parseResponse(client.tailnet[':tailnet'].acl.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetPostureIntegrationsKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/posture/integrations', args] as const
}

export function useGetTailnetTailnetPostureIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetPostureIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].posture.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetPostureIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetPostureIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet'].posture.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetPostureIntegrationsKey() {
  return ['tailnet', '/tailnet/:tailnet/posture/integrations', 'POST'] as const
}

export function usePostTailnetTailnetPostureIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetPostureIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']
          >
        },
      ) => parseResponse(client.tailnet[':tailnet'].posture.integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostureIntegrationsIdKey(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$get']>,
) {
  return ['posture', '/posture/integrations/:id', args] as const
}

export function useGetPostureIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostureIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posture.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostureIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostureIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posture.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePostureIntegrationsIdKey() {
  return ['posture', '/posture/integrations/:id', 'DELETE'] as const
}

export function useDeletePostureIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posture.integrations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostureIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posture.integrations)[':id']['$delete']> },
      ) => parseResponse(client.posture.integrations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPostureIntegrationsIdKey() {
  return ['posture', '/posture/integrations/:id', 'PATCH'] as const
}

export function usePatchPostureIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posture.integrations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posture.integrations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPostureIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posture.integrations)[':id']['$patch']> },
      ) => parseResponse(client.posture.integrations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetUsersKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/users', args] as const
}

export function useGetTailnetTailnetUsers<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetUsers<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdRoleKey() {
  return ['users', '/users/:userId/role', 'POST'] as const
}

export function usePostUsersUserIdRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['role']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['role']['$post']> },
      ) => parseResponse(client.users[':userId'].role.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdApproveKey() {
  return ['users', '/users/:userId/approve', 'POST'] as const
}

export function usePostUsersUserIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['approve']['$post']> },
      ) => parseResponse(client.users[':userId'].approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdSuspendKey() {
  return ['users', '/users/:userId/suspend', 'POST'] as const
}

export function usePostUsersUserIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['suspend']['$post']> },
      ) => parseResponse(client.users[':userId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdRestoreKey() {
  return ['users', '/users/:userId/restore', 'POST'] as const
}

export function usePostUsersUserIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['restore']['$post']> },
      ) => parseResponse(client.users[':userId'].restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdDeleteKey() {
  return ['users', '/users/:userId/delete', 'POST'] as const
}

export function usePostUsersUserIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['delete']['$post']> },
      ) => parseResponse(client.users[':userId'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetContactsKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/contacts', args] as const
}

export function useGetTailnetTailnetContacts<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetContacts<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTailnetTailnetContactsContactTypeKey() {
  return ['tailnet', '/tailnet/:tailnet/contacts/:contactType', 'PATCH'] as const
}

export function usePatchTailnetTailnetContactsContactType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTailnetTailnetContactsContactTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet'].contacts[':contactType'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTailnetTailnetContactsContactTypeResendVerificationEmailKey() {
  return [
    'tailnet',
    '/tailnet/:tailnet/contacts/:contactType/resend-verification-email',
    'POST',
  ] as const
}

export function usePostTailnetTailnetContactsContactTypeResendVerificationEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetContactsContactTypeResendVerificationEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet'].contacts[':contactType']['resend-verification-email'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetWebhooksKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/webhooks', args] as const
}

export function useGetTailnetTailnetWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetWebhooksKey() {
  return ['tailnet', '/tailnet/:tailnet/webhooks', 'POST'] as const
}

export function usePostTailnetTailnetWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']> },
      ) => parseResponse(client.tailnet[':tailnet'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksEndpointIdKey(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>,
) {
  return ['webhooks', '/webhooks/:endpointId', args] as const
}

export function useGetWebhooksEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':endpointId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':endpointId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksEndpointIdKey() {
  return ['webhooks', '/webhooks/:endpointId', 'DELETE'] as const
}

export function useDeleteWebhooksEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':endpointId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksEndpointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':endpointId']['$delete']> },
      ) => parseResponse(client.webhooks[':endpointId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksEndpointIdKey() {
  return ['webhooks', '/webhooks/:endpointId', 'PATCH'] as const
}

export function usePatchWebhooksEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':endpointId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksEndpointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':endpointId']['$patch']> },
      ) => parseResponse(client.webhooks[':endpointId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksEndpointIdTestKey() {
  return ['webhooks', '/webhooks/:endpointId/test', 'POST'] as const
}

export function usePostWebhooksEndpointIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':endpointId']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksEndpointIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':endpointId']['test']['$post']> },
      ) => parseResponse(client.webhooks[':endpointId'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksEndpointIdRotateKey() {
  return ['webhooks', '/webhooks/:endpointId/rotate', 'POST'] as const
}

export function usePostWebhooksEndpointIdRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksEndpointIdRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':endpointId']['rotate']['$post']> },
      ) => parseResponse(client.webhooks[':endpointId'].rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetSettingsKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/settings', args] as const
}

export function useGetTailnetTailnetSettings<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetSettings<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTailnetTailnetSettingsKey() {
  return ['tailnet', '/tailnet/:tailnet/settings', 'PATCH'] as const
}

export function usePatchTailnetTailnetSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTailnetTailnetSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$patch']> },
      ) => parseResponse(client.tailnet[':tailnet'].settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetServicesKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/services', args] as const
}

export function useGetTailnetTailnetServices<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetServices<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTailnetTailnetServicesServiceNameKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName', args] as const
}

export function useGetTailnetTailnetServicesServiceName<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesServiceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetServicesServiceName<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesServiceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTailnetTailnetServicesServiceNameKey() {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName', 'PUT'] as const
}

export function usePutTailnetTailnetServicesServiceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTailnetTailnetServicesServiceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']
          >
        },
      ) =>
        parseResponse(client.tailnet[':tailnet'].services[':serviceName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTailnetTailnetServicesServiceNameKey() {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName', 'DELETE'] as const
}

export function useDeleteTailnetTailnetServicesServiceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTailnetTailnetServicesServiceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetServicesServiceNameDevicesKey(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
  >,
) {
  return ['tailnet', '/tailnet/:tailnet/services/:serviceName/devices', args] as const
}

export function useGetTailnetTailnetServicesServiceNameDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesServiceNameDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].devices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetServicesServiceNameDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesServiceNameDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].devices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedKey(
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

export function useGetTailnetTailnetServicesServiceNameDeviceDeviceIdApproved<TError = unknown>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetServicesServiceNameDeviceDeviceIdApproved<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedKey() {
  return [
    'tailnet',
    '/tailnet/:tailnet/services/:serviceName/device/:deviceId/approved',
    'POST',
  ] as const
}

export function usePostTailnetTailnetServicesServiceNameDeviceDeviceIdApproved<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetOauthAppsKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps', args] as const
}

export function useGetTailnetTailnetOauthApps<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetOauthAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet']['oauth-apps'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetOauthApps<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetOauthAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tailnet[':tailnet']['oauth-apps'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTailnetTailnetOauthAppsKey() {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps', 'POST'] as const
}

export function usePostTailnetTailnetOauthApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTailnetTailnetOauthAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']> },
      ) => parseResponse(client.tailnet[':tailnet']['oauth-apps'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTailnetTailnetOauthAppsAppIdKey(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>,
) {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps/:appId', args] as const
}

export function useGetTailnetTailnetOauthAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetOauthAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet']['oauth-apps'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTailnetTailnetOauthAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTailnetTailnetOauthAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tailnet[':tailnet']['oauth-apps'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTailnetTailnetOauthAppsAppIdKey() {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps/:appId', 'PUT'] as const
}

export function usePutTailnetTailnetOauthAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTailnetTailnetOauthAppsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>
        },
      ) =>
        parseResponse(client.tailnet[':tailnet']['oauth-apps'][':appId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTailnetTailnetOauthAppsAppIdKey() {
  return ['tailnet', '/tailnet/:tailnet/oauth-apps/:appId', 'DELETE'] as const
}

export function useDeleteTailnetTailnetOauthAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTailnetTailnetOauthAppsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.tailnet[':tailnet']['oauth-apps'][':appId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationTailnetsKey(
  args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>,
) {
  return ['organizations', '/organizations/:organization/tailnets', args] as const
}

export function useGetOrganizationsOrganizationTailnets<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationTailnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organization'].tailnets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationTailnets<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationTailnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organization'].tailnets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationTailnetsKey() {
  return ['organizations', '/organizations/:organization/tailnets', 'POST'] as const
}

export function usePostOrganizationsOrganizationTailnets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization']['tailnets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationTailnetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$post']>
        },
      ) => parseResponse(client.organizations[':organization'].tailnets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
