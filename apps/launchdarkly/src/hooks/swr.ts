import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV2Key() {
  return ['api', '/api/v2'] as const
}

export function useGetApiV2<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetApiV2Key() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetApiV2Key() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountRelayAutoConfigsKey() {
  return ['api', '/api/v2/account/relay-auto-configs'] as const
}

export function useGetApiV2AccountRelayAutoConfigs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountRelayAutoConfigsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.account['relay-auto-configs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountRelayAutoConfigs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountRelayAutoConfigsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.account['relay-auto-configs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AccountRelayAutoConfigsKey() {
  return ['api', '/api/v2/account/relay-auto-configs', 'POST'] as const
}

export function usePostApiV2AccountRelayAutoConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['relay-auto-configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AccountRelayAutoConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs']['$post']> },
      ) => parseResponse(client.api.v2.account['relay-auto-configs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AccountRelayAutoConfigsIdKey(
  args: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>,
) {
  return ['api', '/api/v2/account/relay-auto-configs/:id', args] as const
}

export function useGetApiV2AccountRelayAutoConfigsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>>
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
        ? getGetApiV2AccountRelayAutoConfigsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.account['relay-auto-configs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountRelayAutoConfigsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>>
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
        ? getGetApiV2AccountRelayAutoConfigsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.account['relay-auto-configs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2AccountRelayAutoConfigsIdKey() {
  return ['api', '/api/v2/account/relay-auto-configs/:id', 'DELETE'] as const
}

export function useDeleteApiV2AccountRelayAutoConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AccountRelayAutoConfigsIdKey()
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
            (typeof client.api.v2.account)['relay-auto-configs'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.account['relay-auto-configs'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2AccountRelayAutoConfigsIdKey() {
  return ['api', '/api/v2/account/relay-auto-configs/:id', 'PATCH'] as const
}

export function usePatchApiV2AccountRelayAutoConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2AccountRelayAutoConfigsIdKey()
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
            (typeof client.api.v2.account)['relay-auto-configs'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.account['relay-auto-configs'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2AccountRelayAutoConfigsIdResetKey() {
  return ['api', '/api/v2/account/relay-auto-configs/:id/reset', 'POST'] as const
}

export function usePostApiV2AccountRelayAutoConfigsIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.account)['relay-auto-configs'][':id']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AccountRelayAutoConfigsIdResetKey()
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
            (typeof client.api.v2.account)['relay-auto-configs'][':id']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.account['relay-auto-configs'][':id'].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ApplicationsKey(
  args: InferRequestType<typeof client.api.v2.applications.$get>,
) {
  return ['api', '/api/v2/applications', args] as const
}

export function useGetApiV2Applications<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.applications.$get>>>
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
        ? getGetApiV2ApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Applications<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.applications.$get>>>
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
        ? getGetApiV2ApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ApplicationsApplicationKeyKey(
  args: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$get']>,
) {
  return ['api', '/api/v2/applications/:applicationKey', args] as const
}

export function useGetApiV2ApplicationsApplicationKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.applications)[':applicationKey']['$get']>>
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
        ? getGetApiV2ApplicationsApplicationKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.applications)[':applicationKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.applications[':applicationKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ApplicationsApplicationKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.applications)[':applicationKey']['$get']>>
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
        ? getGetApiV2ApplicationsApplicationKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.applications)[':applicationKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.applications[':applicationKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ApplicationsApplicationKeyKey() {
  return ['api', '/api/v2/applications/:applicationKey', 'DELETE'] as const
}

export function useDeleteApiV2ApplicationsApplicationKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.applications)[':applicationKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ApplicationsApplicationKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$delete']>
        },
      ) => parseResponse(client.api.v2.applications[':applicationKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ApplicationsApplicationKeyKey() {
  return ['api', '/api/v2/applications/:applicationKey', 'PATCH'] as const
}

export function usePatchApiV2ApplicationsApplicationKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.applications)[':applicationKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ApplicationsApplicationKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$patch']>
        },
      ) => parseResponse(client.api.v2.applications[':applicationKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ApplicationsApplicationKeyVersionsKey(
  args: InferRequestType<
    (typeof client.api.v2.applications)[':applicationKey']['versions']['$get']
  >,
) {
  return ['api', '/api/v2/applications/:applicationKey/versions', args] as const
}

export function useGetApiV2ApplicationsApplicationKeyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.applications)[':applicationKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.applications)[':applicationKey']['versions']['$get']>
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
        ? getGetApiV2ApplicationsApplicationKeyVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.applications)[':applicationKey']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.applications[':applicationKey'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ApplicationsApplicationKeyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.applications)[':applicationKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.applications)[':applicationKey']['versions']['$get']>
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
        ? getGetApiV2ApplicationsApplicationKeyVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.applications)[':applicationKey']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.applications[':applicationKey'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ApplicationsApplicationKeyVersionsVersionKeyKey() {
  return ['api', '/api/v2/applications/:applicationKey/versions/:versionKey', 'DELETE'] as const
}

export function useDeleteApiV2ApplicationsApplicationKeyVersionsVersionKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ApplicationsApplicationKeyVersionsVersionKeyKey()
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
            (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.applications[':applicationKey'].versions[':versionKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ApplicationsApplicationKeyVersionsVersionKeyKey() {
  return ['api', '/api/v2/applications/:applicationKey/versions/:versionKey', 'PATCH'] as const
}

export function usePatchApiV2ApplicationsApplicationKeyVersionsVersionKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ApplicationsApplicationKeyVersionsVersionKeyKey()
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
            (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.applications[':applicationKey'].versions[':versionKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ApprovalRequestsKey(
  args: InferRequestType<(typeof client.api.v2)['approval-requests']['$get']>,
) {
  return ['api', '/api/v2/approval-requests', args] as const
}

export function useGetApiV2ApprovalRequests<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['approval-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests']['$get']>>
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
        ? getGetApiV2ApprovalRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['approval-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ApprovalRequests<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['approval-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests']['$get']>>
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
        ? getGetApiV2ApprovalRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['approval-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ApprovalRequestsKey() {
  return ['api', '/api/v2/approval-requests', 'POST'] as const
}

export function usePostApiV2ApprovalRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['approval-requests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['approval-requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ApprovalRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2)['approval-requests']['$post']> },
      ) => parseResponse(client.api.v2['approval-requests'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ApprovalRequestsIdKey(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$get']>,
) {
  return ['api', '/api/v2/approval-requests/:id', args] as const
}

export function useGetApiV2ApprovalRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests'][':id']['$get']>>
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
        ? getGetApiV2ApprovalRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['approval-requests'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ApprovalRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests'][':id']['$get']>>
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
        ? getGetApiV2ApprovalRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['approval-requests'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ApprovalRequestsIdKey() {
  return ['api', '/api/v2/approval-requests/:id', 'DELETE'] as const
}

export function useDeleteApiV2ApprovalRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['approval-requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ApprovalRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$delete']> },
      ) => parseResponse(client.api.v2['approval-requests'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ApprovalRequestsIdKey() {
  return ['api', '/api/v2/approval-requests/:id', 'PATCH'] as const
}

export function usePatchApiV2ApprovalRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['approval-requests'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ApprovalRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$patch']> },
      ) => parseResponse(client.api.v2['approval-requests'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ApprovalRequestsIdApplyKey() {
  return ['api', '/api/v2/approval-requests/:id/apply', 'POST'] as const
}

export function usePostApiV2ApprovalRequestsIdApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['approval-requests'][':id']['apply']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['apply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ApprovalRequestsIdApplyKey()
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
            (typeof client.api.v2)['approval-requests'][':id']['apply']['$post']
          >
        },
      ) => parseResponse(client.api.v2['approval-requests'][':id'].apply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ApprovalRequestsIdReviewsKey() {
  return ['api', '/api/v2/approval-requests/:id/reviews', 'POST'] as const
}

export function usePostApiV2ApprovalRequestsIdReviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['approval-requests'][':id']['reviews']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['reviews']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ApprovalRequestsIdReviewsKey()
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
            (typeof client.api.v2)['approval-requests'][':id']['reviews']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v2['approval-requests'][':id'].reviews.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuditlogKey(args: InferRequestType<typeof client.api.v2.auditlog.$get>) {
  return ['api', '/api/v2/auditlog', args] as const
}

export function useGetApiV2Auditlog<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.auditlog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auditlog.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuditlogKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auditlog.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auditlog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Auditlog<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.auditlog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auditlog.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuditlogKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auditlog.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auditlog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AuditlogKey() {
  return ['api', '/api/v2/auditlog', 'POST'] as const
}

export function usePostApiV2Auditlog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auditlog.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.auditlog.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuditlogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.auditlog.$post> }) =>
        parseResponse(client.api.v2.auditlog.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2AuditlogCountsKey() {
  return ['api', '/api/v2/auditlog/counts', 'POST'] as const
}

export function usePostApiV2AuditlogCounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auditlog.counts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.auditlog.counts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AuditlogCountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.auditlog.counts.$post> },
      ) => parseResponse(client.api.v2.auditlog.counts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AuditlogIdKey(
  args: InferRequestType<(typeof client.api.v2.auditlog)[':id']['$get']>,
) {
  return ['api', '/api/v2/auditlog/:id', args] as const
}

export function useGetApiV2AuditlogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.auditlog)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.auditlog)[':id']['$get']>>>
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
        ? getGetApiV2AuditlogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.auditlog)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auditlog[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuditlogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.auditlog)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.auditlog)[':id']['$get']>>>
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
        ? getGetApiV2AuditlogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.auditlog)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auditlog[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2CallerIdentityKey() {
  return ['api', '/api/v2/caller-identity'] as const
}

export function useGetApiV2CallerIdentity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['caller-identity']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2CallerIdentityKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['caller-identity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['caller-identity'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CallerIdentity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['caller-identity']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2CallerIdentityKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['caller-identity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['caller-identity'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2CodeRefsExtinctionsKey(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>,
) {
  return ['api', '/api/v2/code-refs/extinctions', args] as const
}

export function useGetApiV2CodeRefsExtinctions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>>
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
        ? getGetApiV2CodeRefsExtinctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['code-refs'].extinctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CodeRefsExtinctions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>>
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
        ? getGetApiV2CodeRefsExtinctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['code-refs'].extinctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2CodeRefsRepositoriesKey(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories']['$get']>,
) {
  return ['api', '/api/v2/code-refs/repositories', args] as const
}

export function useGetApiV2CodeRefsRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['repositories']['$get']>>
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
        ? getGetApiV2CodeRefsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['repositories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['code-refs'].repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CodeRefsRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['repositories']['$get']>>
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
        ? getGetApiV2CodeRefsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['repositories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['code-refs'].repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2CodeRefsRepositoriesKey() {
  return ['api', '/api/v2/code-refs/repositories', 'POST'] as const
}

export function usePostApiV2CodeRefsRepositories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['code-refs']['repositories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['code-refs']['repositories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2CodeRefsRepositoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2)['code-refs']['repositories']['$post']> },
      ) => parseResponse(client.api.v2['code-refs'].repositories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CodeRefsRepositoriesRepoKey(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>,
) {
  return ['api', '/api/v2/code-refs/repositories/:repo', args] as const
}

export function useGetApiV2CodeRefsRepositoriesRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>
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
        ? getGetApiV2CodeRefsRepositoriesRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['code-refs'].repositories[':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CodeRefsRepositoriesRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>
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
        ? getGetApiV2CodeRefsRepositoriesRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['code-refs'].repositories[':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2CodeRefsRepositoriesRepoKey() {
  return ['api', '/api/v2/code-refs/repositories/:repo', 'DELETE'] as const
}

export function useDeleteApiV2CodeRefsRepositoriesRepo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2CodeRefsRepositoriesRepoKey()
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
            (typeof client.api.v2)['code-refs']['repositories'][':repo']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.v2['code-refs'].repositories[':repo'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2CodeRefsRepositoriesRepoKey() {
  return ['api', '/api/v2/code-refs/repositories/:repo', 'PATCH'] as const
}

export function usePatchApiV2CodeRefsRepositoriesRepo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2CodeRefsRepositoriesRepoKey()
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
            (typeof client.api.v2)['code-refs']['repositories'][':repo']['$patch']
          >
        },
      ) =>
        parseResponse(client.api.v2['code-refs'].repositories[':repo'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2CodeRefsRepositoriesRepoBranchDeleteTasksKey() {
  return ['api', '/api/v2/code-refs/repositories/:repo/branch-delete-tasks', 'POST'] as const
}

export function usePostApiV2CodeRefsRepositoriesRepoBranchDeleteTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['code-refs']['repositories'][':repo']['branch-delete-tasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['code-refs']['repositories'][':repo']['branch-delete-tasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2CodeRefsRepositoriesRepoBranchDeleteTasksKey()
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
            (typeof client.api.v2)['code-refs']['repositories'][':repo']['branch-delete-tasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['code-refs'].repositories[':repo']['branch-delete-tasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CodeRefsRepositoriesRepoBranchesKey(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
  >,
) {
  return ['api', '/api/v2/code-refs/repositories/:repo/branches', args] as const
}

export function useGetApiV2CodeRefsRepositoriesRepoBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
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
        ? getGetApiV2CodeRefsRepositoriesRepoBranchesKey(args)
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
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
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
          client.api.v2['code-refs'].repositories[':repo'].branches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CodeRefsRepositoriesRepoBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
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
        ? getGetApiV2CodeRefsRepositoriesRepoBranchesKey(args)
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
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
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
          client.api.v2['code-refs'].repositories[':repo'].branches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2CodeRefsRepositoriesRepoBranchesBranchKey(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
  >,
) {
  return ['api', '/api/v2/code-refs/repositories/:repo/branches/:branch', args] as const
}

export function useGetApiV2CodeRefsRepositoriesRepoBranchesBranch<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
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
        ? getGetApiV2CodeRefsRepositoriesRepoBranchesBranchKey(args)
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
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
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
          client.api.v2['code-refs'].repositories[':repo'].branches[':branch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CodeRefsRepositoriesRepoBranchesBranch<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
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
        ? getGetApiV2CodeRefsRepositoriesRepoBranchesBranchKey(args)
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
                (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
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
          client.api.v2['code-refs'].repositories[':repo'].branches[':branch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2CodeRefsRepositoriesRepoBranchesBranchKey() {
  return ['api', '/api/v2/code-refs/repositories/:repo/branches/:branch', 'PUT'] as const
}

export function usePutApiV2CodeRefsRepositoriesRepoBranchesBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2CodeRefsRepositoriesRepoBranchesBranchKey()
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
            (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['code-refs'].repositories[':repo'].branches[':branch'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsKey() {
  return [
    'api',
    '/api/v2/code-refs/repositories/:repo/branches/:branch/extinction-events',
    'POST',
  ] as const
}

export function usePostApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEvents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['extinction-events']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['extinction-events']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsKey()
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
            (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['extinction-events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['code-refs'].repositories[':repo'].branches[':branch'][
            'extinction-events'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CodeRefsStatisticsKey() {
  return ['api', '/api/v2/code-refs/statistics'] as const
}

export function useGetApiV2CodeRefsStatistics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['code-refs']['statistics']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2CodeRefsStatisticsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['code-refs'].statistics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CodeRefsStatistics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['code-refs']['statistics']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2CodeRefsStatisticsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['code-refs']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['code-refs'].statistics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2CodeRefsStatisticsProjectKeyKey(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>,
) {
  return ['api', '/api/v2/code-refs/statistics/:projectKey', args] as const
}

export function useGetApiV2CodeRefsStatisticsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>
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
        ? getGetApiV2CodeRefsStatisticsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['code-refs'].statistics[':projectKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CodeRefsStatisticsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>
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
        ? getGetApiV2CodeRefsStatisticsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['code-refs'].statistics[':projectKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DestinationsKey() {
  return ['api', '/api/v2/destinations'] as const
}

export function useGetApiV2Destinations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.destinations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DestinationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.destinations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.destinations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Destinations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.destinations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DestinationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.destinations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.destinations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2DestinationsGenerateWarehouseDestinationKeyPairKey() {
  return ['api', '/api/v2/destinations/generate-warehouse-destination-key-pair', 'POST'] as const
}

export function usePostApiV2DestinationsGenerateWarehouseDestinationKeyPair<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.destinations)['generate-warehouse-destination-key-pair']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DestinationsGenerateWarehouseDestinationKeyPairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.destinations['generate-warehouse-destination-key-pair'].$post(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyKey() {
  return [
    'api',
    '/api/v2/destinations/projects/:projKey/environments/:envKey/generate-trust-policy',
    'POST',
  ] as const
}

export function usePostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-trust-policy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-trust-policy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyKey()
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
            (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-trust-policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.destinations.projects[':projKey'].environments[':envKey'][
            'generate-trust-policy'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairKey() {
  return [
    'api',
    '/api/v2/destinations/projects/:projKey/environments/:envKey/generate-warehouse-destination-key-pair',
    'POST',
  ] as const
}

export function usePostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPair<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-warehouse-destination-key-pair']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-warehouse-destination-key-pair']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairKey()
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
            (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-warehouse-destination-key-pair']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.destinations.projects[':projKey'].environments[':envKey'][
            'generate-warehouse-destination-key-pair'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupKey() {
  return [
    'api',
    '/api/v2/destinations/projects/:projKey/environments/:envKey/kinds/:kind/complete-setup',
    'POST',
  ] as const
}

export function usePostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['complete-setup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['complete-setup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupKey()
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
            (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['complete-setup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.destinations.projects[':projKey'].environments[':envKey'].kinds[':kind'][
            'complete-setup'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupKey() {
  return [
    'api',
    '/api/v2/destinations/projects/:projKey/environments/:envKey/kinds/:kind/setup',
    'POST',
  ] as const
}

export function usePostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['setup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['setup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupKey()
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
            (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['setup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.destinations.projects[':projKey'].environments[':envKey'].kinds[
            ':kind'
          ].setup.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DestinationsProjectKeyEnvironmentKeyKey() {
  return ['api', '/api/v2/destinations/:projectKey/:environmentKey', 'POST'] as const
}

export function usePostApiV2DestinationsProjectKeyEnvironmentKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.destinations)[':projectKey'][':environmentKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.destinations)[':projectKey'][':environmentKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DestinationsProjectKeyEnvironmentKeyKey()
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
            (typeof client.api.v2.destinations)[':projectKey'][':environmentKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.destinations[':projectKey'][':environmentKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DestinationsProjectKeyEnvironmentKeyIdKey(
  args: InferRequestType<
    (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
  >,
) {
  return ['api', '/api/v2/destinations/:projectKey/:environmentKey/:id', args] as const
}

export function useGetApiV2DestinationsProjectKeyEnvironmentKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
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
        ? getGetApiV2DestinationsProjectKeyEnvironmentKeyIdKey(args)
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
                (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
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
          client.api.v2.destinations[':projectKey'][':environmentKey'][':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DestinationsProjectKeyEnvironmentKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
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
        ? getGetApiV2DestinationsProjectKeyEnvironmentKeyIdKey(args)
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
                (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
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
          client.api.v2.destinations[':projectKey'][':environmentKey'][':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DestinationsProjectKeyEnvironmentKeyIdKey() {
  return ['api', '/api/v2/destinations/:projectKey/:environmentKey/:id', 'DELETE'] as const
}

export function useDeleteApiV2DestinationsProjectKeyEnvironmentKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2DestinationsProjectKeyEnvironmentKeyIdKey()
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
            (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.destinations[':projectKey'][':environmentKey'][':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DestinationsProjectKeyEnvironmentKeyIdKey() {
  return ['api', '/api/v2/destinations/:projectKey/:environmentKey/:id', 'PATCH'] as const
}

export function usePatchApiV2DestinationsProjectKeyEnvironmentKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DestinationsProjectKeyEnvironmentKeyIdKey()
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
            (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.destinations[':projectKey'][':environmentKey'][':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
  >,
) {
  return ['api', '/api/v2/flag-links/projects/:projectKey/flags/:featureFlagKey', args] as const
}

export function useGetApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
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
        ? getGetApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyKey(args)
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
                (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
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
          client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
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
        ? getGetApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyKey(args)
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
                (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
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
          client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyKey() {
  return ['api', '/api/v2/flag-links/projects/:projectKey/flags/:featureFlagKey', 'POST'] as const
}

export function usePostApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyKey()
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
            (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdKey() {
  return [
    'api',
    '/api/v2/flag-links/projects/:projectKey/flags/:featureFlagKey/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdKey()
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
            (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'][
            ':id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdKey() {
  return [
    'api',
    '/api/v2/flag-links/projects/:projectKey/flags/:featureFlagKey/:id',
    'PATCH',
  ] as const
}

export function usePatchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdKey()
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
            (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'][
            ':id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagStatusProjectKeyFeatureFlagKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
  >,
) {
  return ['api', '/api/v2/flag-status/:projectKey/:featureFlagKey', args] as const
}

export function useGetApiV2FlagStatusProjectKeyFeatureFlagKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
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
        ? getGetApiV2FlagStatusProjectKeyFeatureFlagKeyKey(args)
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
                (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
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
          client.api.v2['flag-status'][':projectKey'][':featureFlagKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagStatusProjectKeyFeatureFlagKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
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
        ? getGetApiV2FlagStatusProjectKeyFeatureFlagKeyKey(args)
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
                (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
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
          client.api.v2['flag-status'][':projectKey'][':featureFlagKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2FlagStatusesProjectKeyEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
  >,
) {
  return ['api', '/api/v2/flag-statuses/:projectKey/:environmentKey', args] as const
}

export function useGetApiV2FlagStatusesProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
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
        ? getGetApiV2FlagStatusesProjectKeyEnvironmentKeyKey(args)
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
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
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
          client.api.v2['flag-statuses'][':projectKey'][':environmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagStatusesProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
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
        ? getGetApiV2FlagStatusesProjectKeyEnvironmentKeyKey(args)
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
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
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
          client.api.v2['flag-statuses'][':projectKey'][':environmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
) {
  return ['api', '/api/v2/flag-statuses/:projectKey/:environmentKey/:featureFlagKey', args] as const
}

export function useGetApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
        ? getGetApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyKey(args)
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
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
          client.api.v2['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
        ? getGetApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyKey(args)
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
                (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
          client.api.v2['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyKey(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey']['$get']>,
) {
  return ['api', '/api/v2/flags/:projectKey', args] as const
}

export function useGetApiV2FlagsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.flags)[':projectKey']['$get']>>
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
        ? getGetApiV2FlagsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.flags)[':projectKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.flags[':projectKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.flags)[':projectKey']['$get']>>
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
        ? getGetApiV2FlagsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.flags)[':projectKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.flags[':projectKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2FlagsProjectKeyKey() {
  return ['api', '/api/v2/flags/:projectKey', 'POST'] as const
}

export function usePostApiV2FlagsProjectKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.flags)[':projectKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.flags)[':projectKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2FlagsProjectKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.flags)[':projectKey']['$post']> },
      ) => parseResponse(client.api.v2.flags[':projectKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/flags/:projectKey/:environmentKey/:featureFlagKey/dependent-flags',
    args,
  ] as const
}

export function useGetApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
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
        ? getGetApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
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
          client.api.v2.flags[':projectKey'][':environmentKey'][':featureFlagKey'][
            'dependent-flags'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
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
        ? getGetApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
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
          client.api.v2.flags[':projectKey'][':environmentKey'][':featureFlagKey'][
            'dependent-flags'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyFeatureFlagKeyKey(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>,
) {
  return ['api', '/api/v2/flags/:projectKey/:featureFlagKey', args] as const
}

export function useGetApiV2FlagsProjectKeyFeatureFlagKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyFeatureFlagKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2FlagsProjectKeyFeatureFlagKeyKey() {
  return ['api', '/api/v2/flags/:projectKey/:featureFlagKey', 'DELETE'] as const
}

export function useDeleteApiV2FlagsProjectKeyFeatureFlagKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2FlagsProjectKeyFeatureFlagKeyKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2FlagsProjectKeyFeatureFlagKeyKey() {
  return ['api', '/api/v2/flags/:projectKey/:featureFlagKey', 'PATCH'] as const
}

export function usePatchApiV2FlagsProjectKeyFeatureFlagKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2FlagsProjectKeyFeatureFlagKeyKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2FlagsProjectKeyFeatureFlagKeyCopyKey() {
  return ['api', '/api/v2/flags/:projectKey/:featureFlagKey/copy', 'POST'] as const
}

export function usePostApiV2FlagsProjectKeyFeatureFlagKeyCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2FlagsProjectKeyFeatureFlagKeyCopyKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].copy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
) {
  return ['api', '/api/v2/flags/:projectKey/:featureFlagKey/dependent-flags', args] as const
}

export function useGetApiV2FlagsProjectKeyFeatureFlagKeyDependentFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey']['dependent-flags'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyFeatureFlagKeyDependentFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey']['dependent-flags'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/expiring-targets/:environmentKey',
    args,
  ] as const
}

export function useGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyKey() {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/expiring-targets/:environmentKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-targets'][
            ':environmentKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/expiring-user-targets/:environmentKey',
    args,
  ] as const
}

export function useGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-user-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-user-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyKey() {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/expiring-user-targets/:environmentKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-user-targets'][
            ':environmentKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/triggers/:environmentKey',
    args,
  ] as const
}

export function useGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyKey() {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/triggers/:environmentKey',
    'POST',
  ] as const
}

export function usePostApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/triggers/:environmentKey/:id',
    args,
  ] as const
}

export function useGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'][
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
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
        ? getGetApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdKey(args)
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
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
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
          client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'][
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdKey() {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/triggers/:environmentKey/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'][
            ':id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdKey() {
  return [
    'api',
    '/api/v2/flags/:projectKey/:featureFlagKey/triggers/:environmentKey/:id',
    'PATCH',
  ] as const
}

export function usePatchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'][
            ':id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2FlagsProjectKeyFlagKeyReleaseKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']
  >,
) {
  return ['api', '/api/v2/flags/:projectKey/:flagKey/release', args] as const
}

export function useGetApiV2FlagsProjectKeyFlagKeyRelease<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']>
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
        ? getGetApiV2FlagsProjectKeyFlagKeyReleaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':flagKey'].release.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2FlagsProjectKeyFlagKeyRelease<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']>
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
        ? getGetApiV2FlagsProjectKeyFlagKeyReleaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':flagKey'].release.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2FlagsProjectKeyFlagKeyReleaseKey() {
  return ['api', '/api/v2/flags/:projectKey/:flagKey/release', 'DELETE'] as const
}

export function useDeleteApiV2FlagsProjectKeyFlagKeyRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2FlagsProjectKeyFlagKeyReleaseKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':flagKey'].release.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2FlagsProjectKeyFlagKeyReleaseKey() {
  return ['api', '/api/v2/flags/:projectKey/:flagKey/release', 'PATCH'] as const
}

export function usePatchApiV2FlagsProjectKeyFlagKeyRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2FlagsProjectKeyFlagKeyReleaseKey()
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
            (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.flags[':projectKey'][':flagKey'].release.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationCapabilitiesBigSegmentStoreKey() {
  return ['api', '/api/v2/integration-capabilities/big-segment-store'] as const
}

export function useGetApiV2IntegrationCapabilitiesBigSegmentStore<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['big-segment-store']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2IntegrationCapabilitiesBigSegmentStoreKey()
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
                (typeof client.api.v2)['integration-capabilities']['big-segment-store']['$get']
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
          client.api.v2['integration-capabilities']['big-segment-store'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationCapabilitiesBigSegmentStore<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['big-segment-store']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2IntegrationCapabilitiesBigSegmentStoreKey()
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
                (typeof client.api.v2)['integration-capabilities']['big-segment-store']['$get']
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
          client.api.v2['integration-capabilities']['big-segment-store'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/big-segment-store/:projectKey/:environmentKey/:integrationKey',
    'POST',
  ] as const
}

export function usePostApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyKey()
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
            (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
            ':environmentKey'
          ][':integrationKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/integration-capabilities/big-segment-store/:projectKey/:environmentKey/:integrationKey/:integrationId',
    args,
  ] as const
}

export function useGetApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdKey(
            args,
          )
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
                (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
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
          client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
            ':environmentKey'
          ][':integrationKey'][':integrationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdKey(
            args,
          )
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
                (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
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
          client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
            ':environmentKey'
          ][':integrationKey'][':integrationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/big-segment-store/:projectKey/:environmentKey/:integrationKey/:integrationId',
    'DELETE',
  ] as const
}

export function useDeleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdKey()
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
            (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
            ':environmentKey'
          ][':integrationKey'][':integrationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/big-segment-store/:projectKey/:environmentKey/:integrationKey/:integrationId',
    'PATCH',
  ] as const
}

export function usePatchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdKey()
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
            (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
            ':environmentKey'
          ][':integrationKey'][':integrationId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationCapabilitiesFeatureStoreKey() {
  return ['api', '/api/v2/integration-capabilities/featureStore'] as const
}

export function useGetApiV2IntegrationCapabilitiesFeatureStore<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['integration-capabilities']['featureStore']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2IntegrationCapabilitiesFeatureStoreKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['integration-capabilities']['featureStore']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['integration-capabilities'].featureStore.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationCapabilitiesFeatureStore<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['integration-capabilities']['featureStore']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2IntegrationCapabilitiesFeatureStoreKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['integration-capabilities']['featureStore']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['integration-capabilities'].featureStore.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey',
    args,
  ] as const
}

export function useGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyKey(args)
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
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
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
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyKey(args)
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
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
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
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey',
    'POST',
  ] as const
}

export function usePostApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyKey()
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
            (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
            ':integrationKey'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey/:id',
    args,
  ] as const
}

export function useGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdKey(
            args,
          )
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
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
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
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
            ':integrationKey'
          ][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdKey(
            args,
          )
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
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
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
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
            ':integrationKey'
          ][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdKey()
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
            (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
            ':integrationKey'
          ][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey/:id',
    'PATCH',
  ] as const
}

export function usePatchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdKey()
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
            (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
            ':integrationKey'
          ][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey/:id/validate',
    'POST',
  ] as const
}

export function usePostApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateKey()
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
            (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
            ':integrationKey'
          ][':id'].validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationCapabilitiesFlagImportKey() {
  return ['api', '/api/v2/integration-capabilities/flag-import'] as const
}

export function useGetApiV2IntegrationCapabilitiesFlagImport<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['integration-capabilities']['flag-import']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2IntegrationCapabilitiesFlagImportKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['integration-capabilities']['flag-import']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['integration-capabilities']['flag-import'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationCapabilitiesFlagImport<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['integration-capabilities']['flag-import']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2IntegrationCapabilitiesFlagImportKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['integration-capabilities']['flag-import']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['integration-capabilities']['flag-import'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey',
    'POST',
  ] as const
}

export function usePostApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyKey()
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
            (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities']['flag-import'][':projectKey'][
            ':integrationKey'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey/:integrationId',
    args,
  ] as const
}

export function useGetApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdKey(args)
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
                (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
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
          client.api.v2['integration-capabilities']['flag-import'][':projectKey'][
            ':integrationKey'
          ][':integrationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
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
        ? getGetApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdKey(args)
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
                (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
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
          client.api.v2['integration-capabilities']['flag-import'][':projectKey'][
            ':integrationKey'
          ][':integrationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey/:integrationId',
    'DELETE',
  ] as const
}

export function useDeleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdKey()
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
            (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities']['flag-import'][':projectKey'][
            ':integrationKey'
          ][':integrationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey/:integrationId',
    'PATCH',
  ] as const
}

export function usePatchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdKey()
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
            (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities']['flag-import'][':projectKey'][
            ':integrationKey'
          ][':integrationId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerKey() {
  return [
    'api',
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey/:integrationId/trigger',
    'POST',
  ] as const
}

export function usePostApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTrigger<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['trigger']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['trigger']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerKey()
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
            (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['trigger']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-capabilities']['flag-import'][':projectKey'][
            ':integrationKey'
          ][':integrationId'].trigger.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationConfigurationsKeysIntegrationKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
  >,
) {
  return ['api', '/api/v2/integration-configurations/keys/:integrationKey', args] as const
}

export function useGetApiV2IntegrationConfigurationsKeysIntegrationKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
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
        ? getGetApiV2IntegrationConfigurationsKeysIntegrationKeyKey(args)
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
                (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
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
          client.api.v2['integration-configurations'].keys[':integrationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationConfigurationsKeysIntegrationKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
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
        ? getGetApiV2IntegrationConfigurationsKeysIntegrationKeyKey(args)
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
                (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
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
          client.api.v2['integration-configurations'].keys[':integrationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2IntegrationConfigurationsKeysIntegrationKeyKey() {
  return ['api', '/api/v2/integration-configurations/keys/:integrationKey', 'POST'] as const
}

export function usePostApiV2IntegrationConfigurationsKeysIntegrationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2IntegrationConfigurationsKeysIntegrationKeyKey()
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
            (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-configurations'].keys[':integrationKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationConfigurationsIntegrationConfigurationIdKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
  >,
) {
  return ['api', '/api/v2/integration-configurations/:integrationConfigurationId', args] as const
}

export function useGetApiV2IntegrationConfigurationsIntegrationConfigurationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
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
        ? getGetApiV2IntegrationConfigurationsIntegrationConfigurationIdKey(args)
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
                (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
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
          client.api.v2['integration-configurations'][':integrationConfigurationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationConfigurationsIntegrationConfigurationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
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
        ? getGetApiV2IntegrationConfigurationsIntegrationConfigurationIdKey(args)
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
                (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
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
          client.api.v2['integration-configurations'][':integrationConfigurationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2IntegrationConfigurationsIntegrationConfigurationIdKey() {
  return [
    'api',
    '/api/v2/integration-configurations/:integrationConfigurationId',
    'DELETE',
  ] as const
}

export function useDeleteApiV2IntegrationConfigurationsIntegrationConfigurationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2IntegrationConfigurationsIntegrationConfigurationIdKey()
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
            (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-configurations'][':integrationConfigurationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2IntegrationConfigurationsIntegrationConfigurationIdKey() {
  return ['api', '/api/v2/integration-configurations/:integrationConfigurationId', 'PATCH'] as const
}

export function usePatchApiV2IntegrationConfigurationsIntegrationConfigurationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2IntegrationConfigurationsIntegrationConfigurationIdKey()
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
            (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['integration-configurations'][':integrationConfigurationId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationsIntegrationKeyKey(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>,
) {
  return ['api', '/api/v2/integrations/:integrationKey', args] as const
}

export function useGetApiV2IntegrationsIntegrationKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>>
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
        ? getGetApiV2IntegrationsIntegrationKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.integrations[':integrationKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationsIntegrationKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>>
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
        ? getGetApiV2IntegrationsIntegrationKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.integrations[':integrationKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2IntegrationsIntegrationKeyKey() {
  return ['api', '/api/v2/integrations/:integrationKey', 'POST'] as const
}

export function usePostApiV2IntegrationsIntegrationKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.integrations)[':integrationKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.integrations)[':integrationKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2IntegrationsIntegrationKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey']['$post']>
        },
      ) => parseResponse(client.api.v2.integrations[':integrationKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2IntegrationsIntegrationKeyIdKey(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>,
) {
  return ['api', '/api/v2/integrations/:integrationKey/:id', args] as const
}

export function useGetApiV2IntegrationsIntegrationKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>
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
        ? getGetApiV2IntegrationsIntegrationKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.integrations[':integrationKey'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2IntegrationsIntegrationKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>
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
        ? getGetApiV2IntegrationsIntegrationKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.integrations[':integrationKey'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2IntegrationsIntegrationKeyIdKey() {
  return ['api', '/api/v2/integrations/:integrationKey/:id', 'DELETE'] as const
}

export function useDeleteApiV2IntegrationsIntegrationKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2IntegrationsIntegrationKeyIdKey()
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
            (typeof client.api.v2.integrations)[':integrationKey'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.integrations[':integrationKey'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2IntegrationsIntegrationKeyIdKey() {
  return ['api', '/api/v2/integrations/:integrationKey/:id', 'PATCH'] as const
}

export function usePatchApiV2IntegrationsIntegrationKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2IntegrationsIntegrationKeyIdKey()
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
            (typeof client.api.v2.integrations)[':integrationKey'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.integrations[':integrationKey'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2MembersKey(args: InferRequestType<typeof client.api.v2.members.$get>) {
  return ['api', '/api/v2/members', args] as const
}

export function useGetApiV2Members<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2MembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Members<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2MembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2MembersKey() {
  return ['api', '/api/v2/members', 'POST'] as const
}

export function usePostApiV2Members<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.members.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.members.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2MembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.members.$post> }) =>
        parseResponse(client.api.v2.members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2MembersKey() {
  return ['api', '/api/v2/members', 'PATCH'] as const
}

export function usePatchApiV2Members<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.members.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.members.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2MembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.members.$patch> }) =>
        parseResponse(client.api.v2.members.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2MembersIdKey(
  args: InferRequestType<(typeof client.api.v2.members)[':id']['$get']>,
) {
  return ['api', '/api/v2/members/:id', args] as const
}

export function useGetApiV2MembersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.members)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2MembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2MembersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.members)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2MembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2MembersIdKey() {
  return ['api', '/api/v2/members/:id', 'DELETE'] as const
}

export function useDeleteApiV2MembersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.members)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.members)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2MembersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.members)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.members[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2MembersIdKey() {
  return ['api', '/api/v2/members/:id', 'PATCH'] as const
}

export function usePatchApiV2MembersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.members)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.members)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2MembersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.members)[':id']['$patch']> },
      ) => parseResponse(client.api.v2.members[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2MembersIdTeamsKey() {
  return ['api', '/api/v2/members/:id/teams', 'POST'] as const
}

export function usePostApiV2MembersIdTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.members)[':id']['teams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.members)[':id']['teams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2MembersIdTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.members)[':id']['teams']['$post']> },
      ) => parseResponse(client.api.v2.members[':id'].teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2MetricsProjectKeyKey(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey']['$get']>,
) {
  return ['api', '/api/v2/metrics/:projectKey', args] as const
}

export function useGetApiV2MetricsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey']['$get']>>
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
        ? getGetApiV2MetricsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.metrics[':projectKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2MetricsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey']['$get']>>
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
        ? getGetApiV2MetricsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.metrics[':projectKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2MetricsProjectKeyKey() {
  return ['api', '/api/v2/metrics/:projectKey', 'POST'] as const
}

export function usePostApiV2MetricsProjectKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.metrics)[':projectKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2MetricsProjectKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.metrics)[':projectKey']['$post']> },
      ) => parseResponse(client.api.v2.metrics[':projectKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2MetricsProjectKeyMetricKeyKey(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>,
) {
  return ['api', '/api/v2/metrics/:projectKey/:metricKey', args] as const
}

export function useGetApiV2MetricsProjectKeyMetricKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>>
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
        ? getGetApiV2MetricsProjectKeyMetricKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.metrics[':projectKey'][':metricKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2MetricsProjectKeyMetricKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>>
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
        ? getGetApiV2MetricsProjectKeyMetricKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.metrics[':projectKey'][':metricKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2MetricsProjectKeyMetricKeyKey() {
  return ['api', '/api/v2/metrics/:projectKey/:metricKey', 'DELETE'] as const
}

export function useDeleteApiV2MetricsProjectKeyMetricKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2MetricsProjectKeyMetricKeyKey()
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
            (typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.metrics[':projectKey'][':metricKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2MetricsProjectKeyMetricKeyKey() {
  return ['api', '/api/v2/metrics/:projectKey/:metricKey', 'PATCH'] as const
}

export function usePatchApiV2MetricsProjectKeyMetricKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2MetricsProjectKeyMetricKeyKey()
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
            (typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.metrics[':projectKey'][':metricKey'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2OauthClientsKey() {
  return ['api', '/api/v2/oauth/clients'] as const
}

export function useGetApiV2OauthClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.oauth.clients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2OauthClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.oauth.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.oauth.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2OauthClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.oauth.clients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2OauthClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.oauth.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.oauth.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2OauthClientsKey() {
  return ['api', '/api/v2/oauth/clients', 'POST'] as const
}

export function usePostApiV2OauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.oauth.clients.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.oauth.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2OauthClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.oauth.clients.$post> },
      ) => parseResponse(client.api.v2.oauth.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2OauthClientsClientIdKey(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>,
) {
  return ['api', '/api/v2/oauth/clients/:clientId', args] as const
}

export function useGetApiV2OauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>>
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
        ? getGetApiV2OauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.oauth.clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2OauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>>
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
        ? getGetApiV2OauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.oauth.clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2OauthClientsClientIdKey() {
  return ['api', '/api/v2/oauth/clients/:clientId', 'DELETE'] as const
}

export function useDeleteApiV2OauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.oauth.clients)[':clientId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2OauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$delete']> },
      ) => parseResponse(client.api.v2.oauth.clients[':clientId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2OauthClientsClientIdKey() {
  return ['api', '/api/v2/oauth/clients/:clientId', 'PATCH'] as const
}

export function usePatchApiV2OauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.oauth.clients)[':clientId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2OauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$patch']> },
      ) => parseResponse(client.api.v2.oauth.clients[':clientId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2OpenapiJsonKey() {
  return ['api', '/api/v2/openapi.json'] as const
}

export function useGetApiV2OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsKey(args: InferRequestType<typeof client.api.v2.projects.$get>) {
  return ['api', '/api/v2/projects', args] as const
}

export function useGetApiV2Projects<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Projects<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsKey() {
  return ['api', '/api/v2/projects', 'POST'] as const
}

export function usePostApiV2Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.projects.$post> }) =>
        parseResponse(client.api.v2.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey', args] as const
}

export function useGetApiV2ProjectsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.projects[':projectKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.projects[':projectKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyKey() {
  return ['api', '/api/v2/projects/:projectKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$delete']> },
      ) => parseResponse(client.api.v2.projects[':projectKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyKey() {
  return ['api', '/api/v2/projects/:projectKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$patch']> },
      ) => parseResponse(client.api.v2.projects[':projectKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyContextKindsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/context-kinds', args] as const
}

export function useGetApiV2ProjectsProjectKeyContextKinds<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyContextKindsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['context-kinds'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyContextKinds<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyContextKindsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['context-kinds'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyContextKindsKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/context-kinds/:key', 'PUT'] as const
}

export function usePutApiV2ProjectsProjectKeyContextKindsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['context-kinds'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['context-kinds'][':key']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ProjectsProjectKeyContextKindsKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['context-kinds'][':key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['context-kinds'][':key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/environments', args] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsKey() {
  return ['api', '/api/v2/projects/:projectKey/environments', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.projects)[':projectKey']['environments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['environments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v2.projects[':projectKey'].environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/environments/:environmentKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/environments/:environmentKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/environments/:environmentKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/apiKey',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['apiKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['apiKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['apiKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].apiKey.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/context-attributes',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'context-attributes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'context-attributes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/context-attributes/:attributeName',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'context-attributes'
          ][':attributeName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'context-attributes'
          ][':attributeName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/contexts/search',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts']['search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[
            ':environmentKey'
          ].contexts.search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/contexts/:contextKind/:contextKey/flags/:featureFlagKey',
    'PUT',
  ] as const
}

export function usePutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':contextKind'][':contextKey']['flags'][':featureFlagKey']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':contextKind'][':contextKey']['flags'][':featureFlagKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':contextKind'][':contextKey']['flags'][':featureFlagKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].contexts[
            ':contextKind'
          ][':contextKey'].flags[':featureFlagKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/contexts/:kind/:key',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].contexts[':kind'][
            ':key'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].contexts[':kind'][
            ':key'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperiments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperiments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperiments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments/:experimentKey',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments[
            ':experimentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments[
            ':experimentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments/:experimentKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments[
            ':experimentKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments/:experimentKey/iterations',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['iterations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['iterations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['iterations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments[
            ':experimentKey'
          ].iterations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/flags/evaluate',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['flags']['evaluate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['flags']['evaluate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['flags']['evaluate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[
            ':environmentKey'
          ].flags.evaluate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/followers',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].followers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].followers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldouts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldouts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldouts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts/id/:holdoutId',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.id[
            ':holdoutId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.id[
            ':holdoutId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts/:holdoutKey',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts[
            ':holdoutKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts[
            ':holdoutKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts/:holdoutKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts[
            ':holdoutKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/mobileKey',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['mobileKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['mobileKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['mobileKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'].mobileKey.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/segments/evaluate',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['segments']['evaluate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['segments']['evaluate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['segments']['evaluate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[
            ':environmentKey'
          ].segments.evaluate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyExperimentationSettingsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/experimentation-settings', args] as const
}

export function useGetApiV2ProjectsProjectKeyExperimentationSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
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
        ? getGetApiV2ProjectsProjectKeyExperimentationSettingsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
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
          client.api.v2.projects[':projectKey']['experimentation-settings'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyExperimentationSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
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
        ? getGetApiV2ProjectsProjectKeyExperimentationSettingsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
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
          client.api.v2.projects[':projectKey']['experimentation-settings'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyExperimentationSettingsKey() {
  return ['api', '/api/v2/projects/:projectKey/experimentation-settings', 'PUT'] as const
}

export function usePutApiV2ProjectsProjectKeyExperimentationSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ProjectsProjectKeyExperimentationSettingsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['experimentation-settings'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyExperimentsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/experiments', args] as const
}

export function useGetApiV2ProjectsProjectKeyExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagDefaultsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/flag-defaults', args] as const
}

export function useGetApiV2ProjectsProjectKeyFlagDefaults<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyFlagDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['flag-defaults'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagDefaults<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyFlagDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['flag-defaults'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyFlagDefaultsKey() {
  return ['api', '/api/v2/projects/:projectKey/flag-defaults', 'PUT'] as const
}

export function usePutApiV2ProjectsProjectKeyFlagDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ProjectsProjectKeyFlagDefaultsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['flag-defaults'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyFlagDefaultsKey() {
  return ['api', '/api/v2/projects/:projectKey/flag-defaults', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyFlagDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyFlagDefaultsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['flag-defaults'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests-flag-copy',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests-flag-copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests-flag-copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests-flag-copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests-flag-copy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id/apply',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApply<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['apply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'][':id'].apply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id/reviews',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviews<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['reviews']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['reviews']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['reviews']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['approval-requests'][':id'].reviews.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/followers',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].followers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].followers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/followers/:memberId',
    'PUT',
  ] as const
}

export function usePutApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].followers[':memberId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/followers/:memberId',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].followers[':memberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/scheduled-changes',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['scheduled-changes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['scheduled-changes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/scheduled-changes',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['scheduled-changes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/scheduled-changes/:id',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['scheduled-changes'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['scheduled-changes'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/scheduled-changes/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['scheduled-changes'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/scheduled-changes/:id',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ]['scheduled-changes'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/workflows',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflows<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].workflows.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflows<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].workflows.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/workflows',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflows<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].workflows.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/workflows/:workflowId',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].workflows[':workflowId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].workflows[':workflowId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/workflows/:workflowId',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
            ':environmentKey'
          ].workflows[':workflowId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/migration-safety-issues',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['migration-safety-issues']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['migration-safety-issues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['migration-safety-issues']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[':environmentKey'][
            'migration-safety-issues'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyFlagsFlagKeyReleaseKey() {
  return ['api', '/api/v2/projects/:projectKey/flags/:flagKey/release', 'PUT'] as const
}

export function usePutApiV2ProjectsProjectKeyFlagsFlagKeyRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ProjectsProjectKeyFlagsFlagKeyReleaseKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':flagKey'].release.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:flagKey/release/phases/:phaseId',
    'PUT',
  ] as const
}

export function usePutApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['phases'][':phaseId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['phases'][':phaseId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['phases'][':phaseId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':flagKey'].release.phases[':phaseId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyLayersKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/layers', args] as const
}

export function useGetApiV2ProjectsProjectKeyLayers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyLayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].layers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyLayers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyLayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].layers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyLayersKey() {
  return ['api', '/api/v2/projects/:projectKey/layers', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyLayers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['layers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['layers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyLayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['layers']['$post']>
        },
      ) => parseResponse(client.api.v2.projects[':projectKey'].layers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyLayersLayerKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/layers/:layerKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyLayersLayerKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['layers'][':layerKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['layers'][':layerKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyLayersLayerKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['layers'][':layerKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].layers[':layerKey'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyMetricGroupsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/metric-groups', args] as const
}

export function useGetApiV2ProjectsProjectKeyMetricGroups<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyMetricGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['metric-groups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyMetricGroups<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyMetricGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['metric-groups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyMetricGroupsKey() {
  return ['api', '/api/v2/projects/:projectKey/metric-groups', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyMetricGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyMetricGroupsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['metric-groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['metric-groups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/metric-groups/:metricGroupKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyMetricGroupsMetricGroupKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
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
          client.api.v2.projects[':projectKey']['metric-groups'][':metricGroupKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyMetricGroupsMetricGroupKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
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
          client.api.v2.projects[':projectKey']['metric-groups'][':metricGroupKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/metric-groups/:metricGroupKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['metric-groups'][':metricGroupKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/metric-groups/:metricGroupKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['metric-groups'][':metricGroupKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyReleasePipelinesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/release-pipelines', args] as const
}

export function useGetApiV2ProjectsProjectKeyReleasePipelines<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
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
        ? getGetApiV2ProjectsProjectKeyReleasePipelinesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
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
          client.api.v2.projects[':projectKey']['release-pipelines'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyReleasePipelines<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
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
        ? getGetApiV2ProjectsProjectKeyReleasePipelinesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
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
          client.api.v2.projects[':projectKey']['release-pipelines'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyReleasePipelinesKey() {
  return ['api', '/api/v2/projects/:projectKey/release-pipelines', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyReleasePipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyReleasePipelinesKey()
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
            (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['release-pipelines'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/release-pipelines/:pipelineKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
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
          client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
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
          client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/release-pipelines/:pipelineKey', 'PUT'] as const
}

export function usePutApiV2ProjectsProjectKeyReleasePipelinesPipelineKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/release-pipelines/:pipelineKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/release-pipelines/:pipelineKey/releases',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleases<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
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
        ? getGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
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
          client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].releases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
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
        ? getGetApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
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
          client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].releases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2PublicIpListKey() {
  return ['api', '/api/v2/public-ip-list'] as const
}

export function useGetApiV2PublicIpList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['public-ip-list']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PublicIpListKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['public-ip-list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['public-ip-list'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PublicIpList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['public-ip-list']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PublicIpListKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['public-ip-list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['public-ip-list'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2RolesKey(args: InferRequestType<typeof client.api.v2.roles.$get>) {
  return ['api', '/api/v2/roles', args] as const
}

export function useGetApiV2Roles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2RolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Roles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2RolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2RolesKey() {
  return ['api', '/api/v2/roles', 'POST'] as const
}

export function usePostApiV2Roles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.roles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.roles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2RolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.roles.$post> }) =>
        parseResponse(client.api.v2.roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2RolesCustomRoleKeyKey(
  args: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>,
) {
  return ['api', '/api/v2/roles/:customRoleKey', args] as const
}

export function useGetApiV2RolesCustomRoleKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>>
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
        ? getGetApiV2RolesCustomRoleKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.roles[':customRoleKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2RolesCustomRoleKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>>
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
        ? getGetApiV2RolesCustomRoleKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.roles[':customRoleKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2RolesCustomRoleKeyKey() {
  return ['api', '/api/v2/roles/:customRoleKey', 'DELETE'] as const
}

export function useDeleteApiV2RolesCustomRoleKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.roles)[':customRoleKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2RolesCustomRoleKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$delete']> },
      ) => parseResponse(client.api.v2.roles[':customRoleKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2RolesCustomRoleKeyKey() {
  return ['api', '/api/v2/roles/:customRoleKey', 'PATCH'] as const
}

export function usePatchApiV2RolesCustomRoleKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.roles)[':customRoleKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2RolesCustomRoleKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$patch']> },
      ) => parseResponse(client.api.v2.roles[':customRoleKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeyKey(
  args: InferRequestType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>,
) {
  return ['api', '/api/v2/segments/:projectKey/:environmentKey', args] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2SegmentsProjectKeyEnvironmentKeyKey() {
  return ['api', '/api/v2/segments/:projectKey/:environmentKey', 'POST'] as const
}

export function usePostApiV2SegmentsProjectKeyEnvironmentKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2SegmentsProjectKeyEnvironmentKeyKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
  >,
) {
  return ['api', '/api/v2/segments/:projectKey/:environmentKey/:segmentKey', args] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyKey() {
  return ['api', '/api/v2/segments/:projectKey/:environmentKey/:segmentKey', 'DELETE'] as const
}

export function useDeleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyKey() {
  return ['api', '/api/v2/segments/:projectKey/:environmentKey/:segmentKey', 'PATCH'] as const
}

export function usePatchApiV2SegmentsProjectKeyEnvironmentKeySegmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/contexts',
    'POST',
  ] as const
}

export function usePostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContexts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].contexts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/contexts/:contextKey',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].contexts[
            ':contextKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].contexts[
            ':contextKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/exports',
    'POST',
  ] as const
}

export function usePostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].exports.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/exports/:exportID',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].exports[
            ':exportID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].exports[
            ':exportID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/imports',
    'POST',
  ] as const
}

export function usePostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].imports.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/imports/:importID',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].imports[
            ':importID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].imports[
            ':importID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersKey() {
  return ['api', '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/users', 'POST'] as const
}

export function usePostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].users.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/users/:userKey',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].users[
            ':userKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].users[
            ':userKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:segmentKey/expiring-targets/:environmentKey',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
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
          client.api.v2.segments[':projectKey'][':segmentKey']['expiring-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
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
          client.api.v2.segments[':projectKey'][':segmentKey']['expiring-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:segmentKey/expiring-targets/:environmentKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':segmentKey']['expiring-targets'][
            ':environmentKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:segmentKey/expiring-user-targets/:environmentKey',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
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
          client.api.v2.segments[':projectKey'][':segmentKey']['expiring-user-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
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
        ? getGetApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
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
          client.api.v2.segments[':projectKey'][':segmentKey']['expiring-user-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:segmentKey/expiring-user-targets/:environmentKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':segmentKey']['expiring-user-targets'][
            ':environmentKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TeamsKey(args: InferRequestType<typeof client.api.v2.teams.$get>) {
  return ['api', '/api/v2/teams', args] as const
}

export function useGetApiV2Teams<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.teams.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Teams<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.teams.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2TeamsKey() {
  return ['api', '/api/v2/teams', 'POST'] as const
}

export function usePostApiV2Teams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.teams.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.teams.$post> }) =>
        parseResponse(client.api.v2.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2TeamsKey() {
  return ['api', '/api/v2/teams', 'PATCH'] as const
}

export function usePatchApiV2Teams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.teams.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.teams.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2TeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.teams.$patch> }) =>
        parseResponse(client.api.v2.teams.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TeamsTeamKeyKey(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$get']>,
) {
  return ['api', '/api/v2/teams/:teamKey', args] as const
}

export function useGetApiV2TeamsTeamKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['$get']>>
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
        ? getGetApiV2TeamsTeamKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.teams[':teamKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TeamsTeamKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['$get']>>
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
        ? getGetApiV2TeamsTeamKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.teams[':teamKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2TeamsTeamKeyKey() {
  return ['api', '/api/v2/teams/:teamKey', 'DELETE'] as const
}

export function useDeleteApiV2TeamsTeamKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2TeamsTeamKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$delete']> },
      ) => parseResponse(client.api.v2.teams[':teamKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2TeamsTeamKeyKey() {
  return ['api', '/api/v2/teams/:teamKey', 'PATCH'] as const
}

export function usePatchApiV2TeamsTeamKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2TeamsTeamKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$patch']> },
      ) => parseResponse(client.api.v2.teams[':teamKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TeamsTeamKeyMaintainersKey(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>,
) {
  return ['api', '/api/v2/teams/:teamKey/maintainers', args] as const
}

export function useGetApiV2TeamsTeamKeyMaintainers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>>
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
        ? getGetApiV2TeamsTeamKeyMaintainersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.teams[':teamKey'].maintainers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TeamsTeamKeyMaintainers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>>
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
        ? getGetApiV2TeamsTeamKeyMaintainersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.teams[':teamKey'].maintainers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2TeamsTeamKeyMembersKey() {
  return ['api', '/api/v2/teams/:teamKey/members', 'POST'] as const
}

export function usePostApiV2TeamsTeamKeyMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.teams)[':teamKey']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TeamsTeamKeyMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['members']['$post']> },
      ) => parseResponse(client.api.v2.teams[':teamKey'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TeamsTeamKeyRolesKey(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>,
) {
  return ['api', '/api/v2/teams/:teamKey/roles', args] as const
}

export function useGetApiV2TeamsTeamKeyRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>>
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
        ? getGetApiV2TeamsTeamKeyRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.teams[':teamKey'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TeamsTeamKeyRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>>
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
        ? getGetApiV2TeamsTeamKeyRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.teams[':teamKey'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2TemplatesKey(
  args: InferRequestType<typeof client.api.v2.templates.$get>,
) {
  return ['api', '/api/v2/templates', args] as const
}

export function useGetApiV2Templates<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Templates<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2TemplatesKey() {
  return ['api', '/api/v2/templates', 'POST'] as const
}

export function usePostApiV2Templates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.templates.$post> }) =>
        parseResponse(client.api.v2.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2TemplatesTemplateKeyKey() {
  return ['api', '/api/v2/templates/:templateKey', 'DELETE'] as const
}

export function useDeleteApiV2TemplatesTemplateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.templates)[':templateKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.templates)[':templateKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2TemplatesTemplateKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.templates)[':templateKey']['$delete']> },
      ) => parseResponse(client.api.v2.templates[':templateKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TokensKey(args: InferRequestType<typeof client.api.v2.tokens.$get>) {
  return ['api', '/api/v2/tokens', args] as const
}

export function useGetApiV2Tokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Tokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2TokensKey() {
  return ['api', '/api/v2/tokens', 'POST'] as const
}

export function usePostApiV2Tokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.tokens.$post> }) =>
        parseResponse(client.api.v2.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TokensIdKey(
  args: InferRequestType<(typeof client.api.v2.tokens)[':id']['$get']>,
) {
  return ['api', '/api/v2/tokens/:id', args] as const
}

export function useGetApiV2TokensId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tokens)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2TokensIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tokens)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TokensId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tokens)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV2TokensIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tokens)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2TokensIdKey() {
  return ['api', '/api/v2/tokens/:id', 'DELETE'] as const
}

export function useDeleteApiV2TokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tokens)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.tokens)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2TokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.tokens)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.tokens[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2TokensIdKey() {
  return ['api', '/api/v2/tokens/:id', 'PATCH'] as const
}

export function usePatchApiV2TokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tokens)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.tokens)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2TokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.tokens)[':id']['$patch']> },
      ) => parseResponse(client.api.v2.tokens[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2TokensIdResetKey() {
  return ['api', '/api/v2/tokens/:id/reset', 'POST'] as const
}

export function usePostApiV2TokensIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.tokens)[':id']['reset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.tokens)[':id']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2TokensIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.tokens)[':id']['reset']['$post']> },
      ) => parseResponse(client.api.v2.tokens[':id'].reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsageAiRunsKey(
  args: InferRequestType<(typeof client.api.v2.usage)['ai-runs']['$get']>,
) {
  return ['api', '/api/v2/usage/ai-runs', args] as const
}

export function useGetApiV2UsageAiRuns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['ai-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['ai-runs']['$get']>>>
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
        ? getGetApiV2UsageAiRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['ai-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['ai-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageAiRuns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['ai-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['ai-runs']['$get']>>>
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
        ? getGetApiV2UsageAiRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['ai-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['ai-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageClientsideContextsKey(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>,
) {
  return ['api', '/api/v2/usage/clientside-contexts', args] as const
}

export function useGetApiV2UsageClientsideContexts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>>
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
        ? getGetApiV2UsageClientsideContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['clientside-contexts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageClientsideContexts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>>
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
        ? getGetApiV2UsageClientsideContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['clientside-contexts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageClientsideMauKey(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-mau']['$get']>,
) {
  return ['api', '/api/v2/usage/clientside-mau', args] as const
}

export function useGetApiV2UsageClientsideMau<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-mau']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-mau']['$get']>>
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
        ? getGetApiV2UsageClientsideMauKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-mau']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['clientside-mau'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageClientsideMau<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-mau']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-mau']['$get']>>
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
        ? getGetApiV2UsageClientsideMauKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['clientside-mau']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['clientside-mau'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageDataExportEventsKey(
  args: InferRequestType<(typeof client.api.v2.usage)['data-export-events']['$get']>,
) {
  return ['api', '/api/v2/usage/data-export-events', args] as const
}

export function useGetApiV2UsageDataExportEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['data-export-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['data-export-events']['$get']>>
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
        ? getGetApiV2UsageDataExportEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['data-export-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['data-export-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageDataExportEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['data-export-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['data-export-events']['$get']>>
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
        ? getGetApiV2UsageDataExportEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['data-export-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['data-export-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/usage/evaluations/:projectKey/:environmentKey/:featureFlagKey',
    args,
  ] as const
}

export function useGetApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
        ? getGetApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKeyKey(args)
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
                (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
          client.api.v2.usage.evaluations[':projectKey'][':environmentKey'][':featureFlagKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
        ? getGetApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKeyKey(args)
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
                (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
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
          client.api.v2.usage.evaluations[':projectKey'][':environmentKey'][':featureFlagKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageEventsTypeKey(
  args: InferRequestType<(typeof client.api.v2.usage.events)[':type']['$get']>,
) {
  return ['api', '/api/v2/usage/events/:type', args] as const
}

export function useGetApiV2UsageEventsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.events)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.events)[':type']['$get']>>
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
        ? getGetApiV2UsageEventsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.events)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.events[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageEventsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.events)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.events)[':type']['$get']>>
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
        ? getGetApiV2UsageEventsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.events)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.events[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageExperimentationEventsKey(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-events']['$get']>,
) {
  return ['api', '/api/v2/usage/experimentation-events', args] as const
}

export function useGetApiV2UsageExperimentationEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-events']['$get']>>
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
        ? getGetApiV2UsageExperimentationEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['experimentation-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageExperimentationEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-events']['$get']>>
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
        ? getGetApiV2UsageExperimentationEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['experimentation-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageExperimentationKeysKey(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>,
) {
  return ['api', '/api/v2/usage/experimentation-keys', args] as const
}

export function useGetApiV2UsageExperimentationKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>>
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
        ? getGetApiV2UsageExperimentationKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['experimentation-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageExperimentationKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>>
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
        ? getGetApiV2UsageExperimentationKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['experimentation-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageMauKey(
  args: InferRequestType<typeof client.api.v2.usage.mau.$get>,
) {
  return ['api', '/api/v2/usage/mau', args] as const
}

export function useGetApiV2UsageMau<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.mau.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsageMauKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.mau.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageMau<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.mau.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsageMauKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.mau.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageMauBycategoryKey(
  args: InferRequestType<typeof client.api.v2.usage.mau.bycategory.$get>,
) {
  return ['api', '/api/v2/usage/mau/bycategory', args] as const
}

export function useGetApiV2UsageMauBycategory<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.mau.bycategory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.bycategory.$get>>>
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
        ? getGetApiV2UsageMauBycategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.bycategory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.mau.bycategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageMauBycategory<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.mau.bycategory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.bycategory.$get>>>
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
        ? getGetApiV2UsageMauBycategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.bycategory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.mau.bycategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageMauSdksKey(
  args: InferRequestType<typeof client.api.v2.usage.mau.sdks.$get>,
) {
  return ['api', '/api/v2/usage/mau/sdks', args] as const
}

export function useGetApiV2UsageMauSdks<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.mau.sdks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.sdks.$get>>>
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
        ? getGetApiV2UsageMauSdksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.sdks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.mau.sdks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageMauSdks<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.mau.sdks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.sdks.$get>>>
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
        ? getGetApiV2UsageMauSdksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.usage.mau.sdks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.mau.sdks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageObservabilityErrorsKey(
  args: InferRequestType<typeof client.api.v2.usage.observability.errors.$get>,
) {
  return ['api', '/api/v2/usage/observability/errors', args] as const
}

export function useGetApiV2UsageObservabilityErrors<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.errors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.errors.$get>>
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
        ? getGetApiV2UsageObservabilityErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.errors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.observability.errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageObservabilityErrors<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.errors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.errors.$get>>
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
        ? getGetApiV2UsageObservabilityErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.errors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.observability.errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageObservabilityLogsKey(
  args: InferRequestType<typeof client.api.v2.usage.observability.logs.$get>,
) {
  return ['api', '/api/v2/usage/observability/logs', args] as const
}

export function useGetApiV2UsageObservabilityLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.logs.$get>>
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
        ? getGetApiV2UsageObservabilityLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.logs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.observability.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageObservabilityLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.logs.$get>>
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
        ? getGetApiV2UsageObservabilityLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.logs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.observability.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageObservabilityMetricsKey(
  args: InferRequestType<typeof client.api.v2.usage.observability.metrics.$get>,
) {
  return ['api', '/api/v2/usage/observability/metrics', args] as const
}

export function useGetApiV2UsageObservabilityMetrics<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.metrics.$get>>
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
        ? getGetApiV2UsageObservabilityMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage.observability.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageObservabilityMetrics<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.metrics.$get>>
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
        ? getGetApiV2UsageObservabilityMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage.observability.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageObservabilitySessionsKey(
  args: InferRequestType<typeof client.api.v2.usage.observability.sessions.$get>,
) {
  return ['api', '/api/v2/usage/observability/sessions', args] as const
}

export function useGetApiV2UsageObservabilitySessions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.sessions.$get>>
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
        ? getGetApiV2UsageObservabilitySessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.sessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage.observability.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageObservabilitySessions<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.sessions.$get>>
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
        ? getGetApiV2UsageObservabilitySessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.sessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage.observability.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageObservabilityTracesKey(
  args: InferRequestType<typeof client.api.v2.usage.observability.traces.$get>,
) {
  return ['api', '/api/v2/usage/observability/traces', args] as const
}

export function useGetApiV2UsageObservabilityTraces<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.traces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.traces.$get>>
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
        ? getGetApiV2UsageObservabilityTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.traces.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.observability.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageObservabilityTraces<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.usage.observability.traces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.traces.$get>>
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
        ? getGetApiV2UsageObservabilityTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v2.usage.observability.traces.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.observability.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageSdkVersionsAllKey(
  args: InferRequestType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>,
) {
  return ['api', '/api/v2/usage/sdk-versions/all', args] as const
}

export function useGetApiV2UsageSdkVersionsAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>>
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
        ? getGetApiV2UsageSdkVersionsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['sdk-versions'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageSdkVersionsAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>>
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
        ? getGetApiV2UsageSdkVersionsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['sdk-versions'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageSdkVersionsDetailsKey() {
  return ['api', '/api/v2/usage/sdk-versions/details'] as const
}

export function useGetApiV2UsageSdkVersionsDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['details']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2UsageSdkVersionsDetailsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['sdk-versions'].details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageSdkVersionsDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['details']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2UsageSdkVersionsDetailsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['sdk-versions']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['sdk-versions'].details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageServersideContextsKey(
  args: InferRequestType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>,
) {
  return ['api', '/api/v2/usage/serverside-contexts', args] as const
}

export function useGetApiV2UsageServersideContexts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>>
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
        ? getGetApiV2UsageServersideContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['serverside-contexts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageServersideContexts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>>
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
        ? getGetApiV2UsageServersideContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['serverside-contexts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageServiceConnectionsKey(
  args: InferRequestType<(typeof client.api.v2.usage)['service-connections']['$get']>,
) {
  return ['api', '/api/v2/usage/service-connections', args] as const
}

export function useGetApiV2UsageServiceConnections<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['service-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['service-connections']['$get']>>
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
        ? getGetApiV2UsageServiceConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['service-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['service-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageServiceConnections<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['service-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['service-connections']['$get']>>
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
        ? getGetApiV2UsageServiceConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['service-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage['service-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageStreamsSourceKey(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['$get']>,
) {
  return ['api', '/api/v2/usage/streams/:source', args] as const
}

export function useGetApiV2UsageStreamsSource<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.streams)[':source']['$get']>>
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
        ? getGetApiV2UsageStreamsSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.streams)[':source']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.streams[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageStreamsSource<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.streams)[':source']['$get']>>
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
        ? getGetApiV2UsageStreamsSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage.streams)[':source']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage.streams[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageStreamsSourceBysdkversionKey(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>,
) {
  return ['api', '/api/v2/usage/streams/:source/bysdkversion', args] as const
}

export function useGetApiV2UsageStreamsSourceBysdkversion<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>
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
        ? getGetApiV2UsageStreamsSourceBysdkversionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.usage.streams[':source'].bysdkversion.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageStreamsSourceBysdkversion<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>
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
        ? getGetApiV2UsageStreamsSourceBysdkversionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.usage.streams[':source'].bysdkversion.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageStreamsSourceSdkversionsKey(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>,
) {
  return ['api', '/api/v2/usage/streams/:source/sdkversions', args] as const
}

export function useGetApiV2UsageStreamsSourceSdkversions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>
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
        ? getGetApiV2UsageStreamsSourceSdkversionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage.streams[':source'].sdkversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageStreamsSourceSdkversions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>
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
        ? getGetApiV2UsageStreamsSourceSdkversionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.usage.streams[':source'].sdkversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageTotalContextsKey(
  args: InferRequestType<(typeof client.api.v2.usage)['total-contexts']['$get']>,
) {
  return ['api', '/api/v2/usage/total-contexts', args] as const
}

export function useGetApiV2UsageTotalContexts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['total-contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-contexts']['$get']>>
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
        ? getGetApiV2UsageTotalContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-contexts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['total-contexts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageTotalContexts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['total-contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-contexts']['$get']>>
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
        ? getGetApiV2UsageTotalContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-contexts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['total-contexts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageTotalMauKey(
  args: InferRequestType<(typeof client.api.v2.usage)['total-mau']['$get']>,
) {
  return ['api', '/api/v2/usage/total-mau', args] as const
}

export function useGetApiV2UsageTotalMau<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['total-mau']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-mau']['$get']>>
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
        ? getGetApiV2UsageTotalMauKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-mau']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['total-mau'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageTotalMau<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['total-mau']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-mau']['$get']>>
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
        ? getGetApiV2UsageTotalMauKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['total-mau']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['total-mau'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageVegaAiKey(
  args: InferRequestType<(typeof client.api.v2.usage)['vega-ai']['$get']>,
) {
  return ['api', '/api/v2/usage/vega-ai', args] as const
}

export function useGetApiV2UsageVegaAi<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['vega-ai']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['vega-ai']['$get']>>>
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
        ? getGetApiV2UsageVegaAiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['vega-ai']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['vega-ai'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageVegaAi<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['vega-ai']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['vega-ai']['$get']>>>
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
        ? getGetApiV2UsageVegaAiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.usage)['vega-ai']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['vega-ai'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageWarehouseExportKey(
  args: InferRequestType<(typeof client.api.v2.usage)['warehouse-export']['$get']>,
) {
  return ['api', '/api/v2/usage/warehouse-export', args] as const
}

export function useGetApiV2UsageWarehouseExport<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['warehouse-export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['warehouse-export']['$get']>>
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
        ? getGetApiV2UsageWarehouseExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['warehouse-export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['warehouse-export'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageWarehouseExport<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.usage)['warehouse-export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['warehouse-export']['$get']>>
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
        ? getGetApiV2UsageWarehouseExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.usage)['warehouse-export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.usage['warehouse-export'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UserSearchProjectKeyEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
  >,
) {
  return ['api', '/api/v2/user-search/:projectKey/:environmentKey', args] as const
}

export function useGetApiV2UserSearchProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
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
        ? getGetApiV2UserSearchProjectKeyEnvironmentKeyKey(args)
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
                (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
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
          client.api.v2['user-search'][':projectKey'][':environmentKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UserSearchProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
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
        ? getGetApiV2UserSearchProjectKeyEnvironmentKeyKey(args)
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
                (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
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
          client.api.v2['user-search'][':projectKey'][':environmentKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersProjectKeyEnvironmentKeyKey(
  args: InferRequestType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>,
) {
  return ['api', '/api/v2/users/:projectKey/:environmentKey', args] as const
}

export function useGetApiV2UsersProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.users[':projectKey'][':environmentKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersProjectKeyEnvironmentKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.users[':projectKey'][':environmentKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
  >,
) {
  return ['api', '/api/v2/users/:projectKey/:environmentKey/:userKey', args] as const
}

export function useGetApiV2UsersProjectKeyEnvironmentKeyUserKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
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
          client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersProjectKeyEnvironmentKeyUserKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
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
          client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
  >,
) {
  return ['api', '/api/v2/users/:projectKey/:environmentKey/:userKey/flags', args] as const
}

export function useGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
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
          client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
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
          client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/users/:projectKey/:environmentKey/:userKey/flags/:featureFlagKey',
    args,
  ] as const
}

export function useGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
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
          client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags[
            ':featureFlagKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
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
        ? getGetApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
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
          client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags[
            ':featureFlagKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyKey() {
  return [
    'api',
    '/api/v2/users/:projectKey/:environmentKey/:userKey/flags/:featureFlagKey',
    'PUT',
  ] as const
}

export function usePutApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyKey()
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
            (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags[
            ':featureFlagKey'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/users/:projectKey/:userKey/expiring-user-targets/:environmentKey',
    args,
  ] as const
}

export function useGetApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
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
        ? getGetApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
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
          client.api.v2.users[':projectKey'][':userKey']['expiring-user-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
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
        ? getGetApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyKey(args)
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
                (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
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
          client.api.v2.users[':projectKey'][':userKey']['expiring-user-targets'][
            ':environmentKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyKey() {
  return [
    'api',
    '/api/v2/users/:projectKey/:userKey/expiring-user-targets/:environmentKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyKey()
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
            (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.users[':projectKey'][':userKey']['expiring-user-targets'][
            ':environmentKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2VersionsKey() {
  return ['api', '/api/v2/versions'] as const
}

export function useGetApiV2Versions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Versions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2WebhooksKey() {
  return ['api', '/api/v2/webhooks'] as const
}

export function useGetApiV2Webhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.webhooks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2WebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Webhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.webhooks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2WebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2WebhooksKey() {
  return ['api', '/api/v2/webhooks', 'POST'] as const
}

export function usePostApiV2Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.webhooks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.webhooks.$post> }) =>
        parseResponse(client.api.v2.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2WebhooksIdKey(
  args: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$get']>,
) {
  return ['api', '/api/v2/webhooks/:id', args] as const
}

export function useGetApiV2WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.webhooks)[':id']['$get']>>>
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
        ? getGetApiV2WebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.webhooks)[':id']['$get']>>>
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
        ? getGetApiV2WebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2WebhooksIdKey() {
  return ['api', '/api/v2/webhooks/:id', 'DELETE'] as const
}

export function useDeleteApiV2WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.webhooks)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2WebhooksIdKey() {
  return ['api', '/api/v2/webhooks/:id', 'PATCH'] as const
}

export function usePatchApiV2WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.webhooks)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.webhooks)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$patch']> },
      ) => parseResponse(client.api.v2.webhooks[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2TagsKey(args: InferRequestType<typeof client.api.v2.tags.$get>) {
  return ['api', '/api/v2/tags', args] as const
}

export function useGetApiV2Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsageDataExportEventsProjectsRankingKey(
  args: InferRequestType<
    (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
  >,
) {
  return ['api', '/api/v2/usage/data-export-events/projects/ranking', args] as const
}

export function useGetApiV2UsageDataExportEventsProjectsRanking<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
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
        ? getGetApiV2UsageDataExportEventsProjectsRankingKey(args)
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
                (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
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
          client.api.v2.usage['data-export-events'].projects.ranking.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsageDataExportEventsProjectsRanking<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
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
        ? getGetApiV2UsageDataExportEventsProjectsRankingKey(args)
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
                (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
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
          client.api.v2.usage['data-export-events'].projects.ranking.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/:configKey/targeting', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsConfigKeyTargeting<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].targeting.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsConfigKeyTargeting<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].targeting.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/:configKey/targeting', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargeting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].targeting.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAiConfigsKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAiConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAiConfigsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/:configKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsConfigKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsConfigKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAiConfigsConfigKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/:configKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyAiConfigsConfigKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyAiConfigsConfigKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAiConfigsConfigKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/:configKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyAiConfigsConfigKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyAiConfigsConfigKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/:configKey/variations', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAiConfigsConfigKeyVariations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/:configKey/variations/:variationKey',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations[
            ':variationKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations[
            ':variationKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/:configKey/variations/:variationKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations[
            ':variationKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/:configKey/variations/:variationKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations[
            ':variationKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsQuickStatsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/quick-stats', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsQuickStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsQuickStatsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['quick-stats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsQuickStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsQuickStatsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['quick-stats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/:configKey/metrics', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/:configKey/metrics-by-variation',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariation<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'][
            'metrics-by-variation'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'][':configKey'][
            'metrics-by-variation'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/model-configs/restricted',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyAiConfigsModelConfigsRestricted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].restricted.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/model-configs/restricted',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestricted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].restricted.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/model-configs', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsModelConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsModelConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAiConfigsModelConfigsKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/model-configs', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAiConfigsModelConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAiConfigsModelConfigsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/model-configs/:modelConfigKey',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][
            ':modelConfigKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][
            ':modelConfigKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/model-configs/:modelConfigKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][
            ':modelConfigKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/model-configs/:modelConfigKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][
            ':modelConfigKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/model-configs/:modelConfigKey/versions',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][
            ':modelConfigKey'
          ].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][
            ':modelConfigKey'
          ].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiToolsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-tools', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiTools<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyAiToolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey']['ai-tools'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiTools<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyAiToolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey']['ai-tools'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAiToolsKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-tools', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAiTools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAiToolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$post']>
        },
      ) =>
        parseResponse(client.api.v2.projects[':projectKey']['ai-tools'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiToolsToolKeyVersionsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-tools/:toolKey/versions', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiToolsToolKeyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiToolsToolKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiToolsToolKeyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiToolsToolKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiToolsToolKeyReferencesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-tools/:toolKey/references', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiToolsToolKeyReferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiToolsToolKeyReferencesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
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
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].references.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiToolsToolKeyReferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiToolsToolKeyReferencesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
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
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].references.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiToolsToolKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-tools/:toolKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiToolsToolKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiToolsToolKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiToolsToolKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiToolsToolKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAiToolsToolKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-tools/:toolKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyAiToolsToolKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyAiToolsToolKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAiToolsToolKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-tools/:toolKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyAiToolsToolKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyAiToolsToolKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/prompt-snippets', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsPromptSnippets<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsPromptSnippets<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAiConfigsPromptSnippetsKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/prompt-snippets', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAiConfigsPromptSnippets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAiConfigsPromptSnippetsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey/references',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferences<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].references.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferences<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].references.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey/versions',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
            ':snippetKey'
          ].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsSkillsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/skills', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsSkills<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsSkills<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAiConfigsSkillsKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/skills', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAiConfigsSkills<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAiConfigsSkillsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'].skills.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey/references',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].references.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferences<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].references.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey/versions', args] as const
}

export function useGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
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
          client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentGraphsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/projects/:projectKey/agent-graphs', keyArgs] as const
}

export function useGetApiV2ProjectsProjectKeyAgentGraphs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyAgentGraphsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-graphs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentGraphs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>
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
        ? getGetApiV2ProjectsProjectKeyAgentGraphsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-graphs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAgentGraphsKey() {
  return ['api', '/api/v2/projects/:projectKey/agent-graphs', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAgentGraphs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAgentGraphsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-graphs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentGraphsGraphKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/projects/:projectKey/agent-graphs/:graphKey', keyArgs] as const
}

export function useGetApiV2ProjectsProjectKeyAgentGraphsGraphKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentGraphsGraphKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
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
          client.api.v2.projects[':projectKey']['agent-graphs'][':graphKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentGraphsGraphKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentGraphsGraphKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
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
          client.api.v2.projects[':projectKey']['agent-graphs'][':graphKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/agent-graphs/:graphKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyAgentGraphsGraphKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-graphs'][':graphKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAgentGraphsGraphKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/agent-graphs/:graphKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyAgentGraphsGraphKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyAgentGraphsGraphKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-graphs'][':graphKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentOptimizationsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/agent-optimizations', args] as const
}

export function useGetApiV2ProjectsProjectKeyAgentOptimizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentOptimizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAgentOptimizationsKey() {
  return ['api', '/api/v2/projects/:projectKey/agent-optimizations', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyAgentOptimizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyAgentOptimizationsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-optimizations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/results',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResults<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][
            ':optimizationKey'
          ].results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResults<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][
            ':optimizationKey'
          ].results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/results',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResults<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-optimizations'][
            ':optimizationKey'
          ].results.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/all-results',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResults<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'][
            'all-results'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResults<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'][
            'all-results'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/runs',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][
            ':optimizationKey'
          ].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][
            ':optimizationKey'
          ].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/runs/:runId',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].runs[
            ':runId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/runs/:runId/results',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResults<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].runs[
            ':runId'
          ].results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResults<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
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
        ? getGetApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
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
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].runs[
            ':runId'
          ].results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/results/:resultId',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results'][':resultId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results'][':resultId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdKey()
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
            (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results'][':resultId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].results[
            ':resultId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AnnouncementsKey(
  args: InferRequestType<typeof client.api.v2.announcements.$get>,
) {
  return ['api', '/api/v2/announcements', args] as const
}

export function useGetApiV2Announcements<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.announcements.$get>>>
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
        ? getGetApiV2AnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.announcements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Announcements<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.announcements.$get>>>
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
        ? getGetApiV2AnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.announcements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AnnouncementsKey() {
  return ['api', '/api/v2/announcements', 'POST'] as const
}

export function usePostApiV2Announcements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.announcements.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.announcements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AnnouncementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.announcements.$post> },
      ) => parseResponse(client.api.v2.announcements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AnnouncementsAnnouncementIdKey() {
  return ['api', '/api/v2/announcements/:announcementId', 'DELETE'] as const
}

export function useDeleteApiV2AnnouncementsAnnouncementId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.announcements)[':announcementId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.announcements)[':announcementId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AnnouncementsAnnouncementIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.announcements)[':announcementId']['$delete']>
        },
      ) =>
        parseResponse(client.api.v2.announcements[':announcementId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2AnnouncementsAnnouncementIdKey() {
  return ['api', '/api/v2/announcements/:announcementId', 'PATCH'] as const
}

export function usePatchApiV2AnnouncementsAnnouncementId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.announcements)[':announcementId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.announcements)[':announcementId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2AnnouncementsAnnouncementIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.announcements)[':announcementId']['$patch']>
        },
      ) => parseResponse(client.api.v2.announcements[':announcementId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ApprovalRequestsProjectsProjectKeySettingsKey(
  args: InferRequestType<
    (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/approval-requests/projects/:projectKey/settings', keyArgs] as const
}

export function useGetApiV2ApprovalRequestsProjectsProjectKeySettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
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
        ? getGetApiV2ApprovalRequestsProjectsProjectKeySettingsKey(args)
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
                (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
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
          client.api.v2['approval-requests'].projects[':projectKey'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ApprovalRequestsProjectsProjectKeySettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
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
        ? getGetApiV2ApprovalRequestsProjectsProjectKeySettingsKey(args)
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
                (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
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
          client.api.v2['approval-requests'].projects[':projectKey'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2ApprovalRequestsProjectsProjectKeySettingsKey() {
  return ['api', '/api/v2/approval-requests/projects/:projectKey/settings', 'PATCH'] as const
}

export function usePatchApiV2ApprovalRequestsProjectsProjectKeySettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ApprovalRequestsProjectsProjectKeySettingsKey()
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
            (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['approval-requests'].projects[':projectKey'].settings.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyViewsKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>,
) {
  return ['api', '/api/v2/projects/:projectKey/views', args] as const
}

export function useGetApiV2ProjectsProjectKeyViews<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].views.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyViews<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeyViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey'].views.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyViewsKey() {
  return ['api', '/api/v2/projects/:projectKey/views', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyViews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['views']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyViewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views']['$post']>
        },
      ) => parseResponse(client.api.v2.projects[':projectKey'].views.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyViewsViewKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/views/:viewKey', args] as const
}

export function useGetApiV2ProjectsProjectKeyViewsViewKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyViewsViewKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
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
          client.api.v2.projects[':projectKey'].views[':viewKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyViewsViewKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyViewsViewKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
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
          client.api.v2.projects[':projectKey'].views[':viewKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyViewsViewKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/views/:viewKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyViewsViewKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyViewsViewKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].views[':viewKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyViewsViewKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/views/:viewKey', 'PATCH'] as const
}

export function usePatchApiV2ProjectsProjectKeyViewsViewKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ProjectsProjectKeyViewsViewKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].views[':viewKey'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeKey() {
  return ['api', '/api/v2/projects/:projectKey/views/:viewKey/link/:resourceType', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyViewsViewKeyLinkResourceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeKey()
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
            (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].views[':viewKey'].link[':resourceType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/views/:viewKey/link/:resourceType',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeKey()
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
            (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].views[':viewKey'].link[':resourceType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
  >,
) {
  return ['api', '/api/v2/projects/:projectKey/views/:viewKey/linked/:resourceType', args] as const
}

export function useGetApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
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
        ? getGetApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
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
          client.api.v2.projects[':projectKey'].views[':viewKey'].linked[':resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
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
        ? getGetApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
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
          client.api.v2.projects[':projectKey'].views[':viewKey'].linked[':resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/view-associations/:resourceType/:resourceKey',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
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
          client.api.v2.projects[':projectKey']['view-associations'][':resourceType'][
            ':resourceKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
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
          client.api.v2.projects[':projectKey']['view-associations'][':resourceType'][
            ':resourceKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/releases',
    keyArgs,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
            ':environmentKey'
          ].releases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
            ':environmentKey'
          ].releases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/releases',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
            ':environmentKey'
          ].releases.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/releases/:releaseId',
    keyArgs,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
            ':environmentKey'
          ].releases[':releaseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdKey(
            args,
          )
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
                (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
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
          client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
            ':environmentKey'
          ].releases[':releaseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/releases/:releaseId/stop',
    'PUT',
  ] as const
}

export function usePutApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStop<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['stop']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['stop']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['stop']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
            ':environmentKey'
          ].releases[':releaseId'].stop.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/release-plans',
    keyArgs,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlans<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'release-plans'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlans<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'release-plans'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/release-plans',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlans<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'release-plans'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/release-plans/:releasePlanKey',
    keyArgs,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'][
            ':releasePlanKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'][
            ':releasePlanKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/release-plans/:releasePlanKey',
    'PUT',
  ] as const
}

export function usePutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'][
            ':releasePlanKey'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/release-plans/:releasePlanKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'][
            ':releasePlanKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/default-release-plan',
    keyArgs,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlan<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'default-release-plan'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlan<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'default-release-plan'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/default-release-plan',
    'PUT',
  ] as const
}

export function usePutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'default-release-plan'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/default-release-plan',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'default-release-plan'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagReleasePlansKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/projects/:projectKey/flag-release-plans', keyArgs] as const
}

export function useGetApiV2ProjectsProjectKeyFlagReleasePlans<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagReleasePlansKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
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
          client.api.v2.projects[':projectKey']['flag-release-plans'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagReleasePlans<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagReleasePlansKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
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
          client.api.v2.projects[':projectKey']['flag-release-plans'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyFlagReleasePlansKey() {
  return ['api', '/api/v2/projects/:projectKey/flag-release-plans', 'POST'] as const
}

export function usePostApiV2ProjectsProjectKeyFlagReleasePlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyFlagReleasePlansKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['flag-release-plans'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/projects/:projectKey/flag-release-plans/:planKey', keyArgs] as const
}

export function useGetApiV2ProjectsProjectKeyFlagReleasePlansPlanKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
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
          client.api.v2.projects[':projectKey']['flag-release-plans'][':planKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyFlagReleasePlansPlanKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
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
          client.api.v2.projects[':projectKey']['flag-release-plans'][':planKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/flag-release-plans/:planKey', 'PUT'] as const
}

export function usePutApiV2ProjectsProjectKeyFlagReleasePlansPlanKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['flag-release-plans'][':planKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyKey() {
  return ['api', '/api/v2/projects/:projectKey/flag-release-plans/:planKey', 'DELETE'] as const
}

export function useDeleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey']['flag-release-plans'][':planKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/scheduled-changes',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
            'scheduled-changes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
            'scheduled-changes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/scheduled-changes',
    'POST',
  ] as const
}

export function usePostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
            'scheduled-changes'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/scheduled-changes/:id',
    args,
  ] as const
}

export function useGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
            'scheduled-changes'
          ][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
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
        ? getGetApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdKey(args)
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
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
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
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
            'scheduled-changes'
          ][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/scheduled-changes/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
            'scheduled-changes'
          ][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdKey() {
  return [
    'api',
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/scheduled-changes/:id',
    'PATCH',
  ] as const
}

export function usePatchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdKey()
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
            (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
            'scheduled-changes'
          ][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AccountIpAllowlistKey(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$get']>,
) {
  return ['api', '/api/v2/account/ip-allowlist', args] as const
}

export function useGetApiV2AccountIpAllowlist<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist']['$get']>>
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
        ? getGetApiV2AccountIpAllowlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.account['ip-allowlist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountIpAllowlist<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist']['$get']>>
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
        ? getGetApiV2AccountIpAllowlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.account['ip-allowlist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AccountIpAllowlistKey() {
  return ['api', '/api/v2/account/ip-allowlist', 'POST'] as const
}

export function usePostApiV2AccountIpAllowlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AccountIpAllowlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$post']> },
      ) => parseResponse(client.api.v2.account['ip-allowlist'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2AccountIpAllowlistKey() {
  return ['api', '/api/v2/account/ip-allowlist', 'PATCH'] as const
}

export function usePatchApiV2AccountIpAllowlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2AccountIpAllowlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$patch']> },
      ) => parseResponse(client.api.v2.account['ip-allowlist'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AccountIpAllowlistIdKey() {
  return ['api', '/api/v2/account/ip-allowlist/:id', 'DELETE'] as const
}

export function useDeleteApiV2AccountIpAllowlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AccountIpAllowlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$delete']>
        },
      ) => parseResponse(client.api.v2.account['ip-allowlist'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2AccountIpAllowlistIdKey() {
  return ['api', '/api/v2/account/ip-allowlist/:id', 'PATCH'] as const
}

export function usePatchApiV2AccountIpAllowlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2AccountIpAllowlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$patch']>
        },
      ) => parseResponse(client.api.v2.account['ip-allowlist'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeySdkKeysKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/projects/:projectKey/sdk-keys', keyArgs] as const
}

export function useGetApiV2ProjectsProjectKeySdkKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeySdkKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey']['sdk-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeySdkKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>>
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
        ? getGetApiV2ProjectsProjectKeySdkKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.projects[':projectKey']['sdk-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys',
    keyArgs,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeys<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys/:sdkKeyKey',
    keyArgs,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
            ':sdkKeyKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
            ':sdkKeyKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys/:sdkKeyKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
            ':sdkKeyKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys/:sdkKeyKey',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
            ':sdkKeyKey'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys/:sdkKeyKey/views',
    'PUT',
  ] as const
}

export function usePutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViews<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['views']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['views']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['views']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
            ':sdkKeyKey'
          ].views.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID',
    args,
  ] as const
}

export function useGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ][':triggerID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
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
        ? getGetApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDKey(args)
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
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
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
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ][':triggerID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID',
    'DELETE',
  ] as const
}

export function useDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ][':triggerID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID',
    'PATCH',
  ] as const
}

export function usePatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ][':triggerID'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID/enable',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['enable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ][':triggerID'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableKey() {
  return [
    'api',
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID/disable',
    'POST',
  ] as const
}

export function usePostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['disable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableKey()
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
            (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.projects[':projectKey'].environments[':environmentKey'][
            'adaptive-triggers'
          ][':triggerID'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsChartsDeploymentsFrequencyKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/charts/deployments/frequency', args] as const
}

export function useGetApiV2EngineeringInsightsChartsDeploymentsFrequency<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsDeploymentsFrequencyKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
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
          client.api.v2['engineering-insights'].charts.deployments.frequency.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsChartsDeploymentsFrequency<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsDeploymentsFrequencyKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
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
          client.api.v2['engineering-insights'].charts.deployments.frequency.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsChartsFlagsStaleKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/charts/flags/stale', args] as const
}

export function useGetApiV2EngineeringInsightsChartsFlagsStale<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsFlagsStaleKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
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
          client.api.v2['engineering-insights'].charts.flags.stale.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsChartsFlagsStale<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsFlagsStaleKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
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
          client.api.v2['engineering-insights'].charts.flags.stale.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsChartsFlagsStatusKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/charts/flags/status', args] as const
}

export function useGetApiV2EngineeringInsightsChartsFlagsStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsFlagsStatusKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
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
          client.api.v2['engineering-insights'].charts.flags.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsChartsFlagsStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsFlagsStatusKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
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
          client.api.v2['engineering-insights'].charts.flags.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsChartsLeadTimeKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/charts/lead-time', args] as const
}

export function useGetApiV2EngineeringInsightsChartsLeadTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsLeadTimeKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
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
          client.api.v2['engineering-insights'].charts['lead-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsChartsLeadTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsLeadTimeKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
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
          client.api.v2['engineering-insights'].charts['lead-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsChartsReleasesFrequencyKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/charts/releases/frequency', args] as const
}

export function useGetApiV2EngineeringInsightsChartsReleasesFrequency<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsReleasesFrequencyKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
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
          client.api.v2['engineering-insights'].charts.releases.frequency.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsChartsReleasesFrequency<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
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
        ? getGetApiV2EngineeringInsightsChartsReleasesFrequencyKey(args)
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
                (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
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
          client.api.v2['engineering-insights'].charts.releases.frequency.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2EngineeringInsightsDeploymentEventsKey() {
  return ['api', '/api/v2/engineering-insights/deployment-events', 'POST'] as const
}

export function usePostApiV2EngineeringInsightsDeploymentEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['engineering-insights']['deployment-events']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['engineering-insights']['deployment-events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2EngineeringInsightsDeploymentEventsKey()
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
            (typeof client.api.v2)['engineering-insights']['deployment-events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['engineering-insights']['deployment-events'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsDeploymentsKey(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>,
) {
  return ['api', '/api/v2/engineering-insights/deployments', args] as const
}

export function useGetApiV2EngineeringInsightsDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>
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
        ? getGetApiV2EngineeringInsightsDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['engineering-insights'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>
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
        ? getGetApiV2EngineeringInsightsDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['engineering-insights'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsDeploymentsDeploymentIDKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/deployments/:deploymentID', args] as const
}

export function useGetApiV2EngineeringInsightsDeploymentsDeploymentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
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
        ? getGetApiV2EngineeringInsightsDeploymentsDeploymentIDKey(args)
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
                (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
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
          client.api.v2['engineering-insights'].deployments[':deploymentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsDeploymentsDeploymentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
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
        ? getGetApiV2EngineeringInsightsDeploymentsDeploymentIDKey(args)
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
                (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
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
          client.api.v2['engineering-insights'].deployments[':deploymentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2EngineeringInsightsDeploymentsDeploymentIDKey() {
  return ['api', '/api/v2/engineering-insights/deployments/:deploymentID', 'PATCH'] as const
}

export function usePatchApiV2EngineeringInsightsDeploymentsDeploymentID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2EngineeringInsightsDeploymentsDeploymentIDKey()
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
            (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['engineering-insights'].deployments[':deploymentID'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsFlagEventsKey(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>,
) {
  return ['api', '/api/v2/engineering-insights/flag-events', args] as const
}

export function useGetApiV2EngineeringInsightsFlagEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>
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
        ? getGetApiV2EngineeringInsightsFlagEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['engineering-insights']['flag-events'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsFlagEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>
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
        ? getGetApiV2EngineeringInsightsFlagEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['engineering-insights']['flag-events'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2EngineeringInsightsInsightsGroupKey() {
  return ['api', '/api/v2/engineering-insights/insights/group', 'POST'] as const
}

export function usePostApiV2EngineeringInsightsInsightsGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['engineering-insights']['insights']['group']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2)['engineering-insights']['insights']['group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2EngineeringInsightsInsightsGroupKey()
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
            (typeof client.api.v2)['engineering-insights']['insights']['group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['engineering-insights'].insights.group.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsInsightsGroupsKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/insights/groups', args] as const
}

export function useGetApiV2EngineeringInsightsInsightsGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
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
        ? getGetApiV2EngineeringInsightsInsightsGroupsKey(args)
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
                (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
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
          client.api.v2['engineering-insights'].insights.groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsInsightsGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
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
        ? getGetApiV2EngineeringInsightsInsightsGroupsKey(args)
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
                (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
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
          client.api.v2['engineering-insights'].insights.groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/insights/groups/:insightGroupKey', args] as const
}

export function useGetApiV2EngineeringInsightsInsightsGroupsInsightGroupKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
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
        ? getGetApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyKey(args)
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
                (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
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
          client.api.v2['engineering-insights'].insights.groups[':insightGroupKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsInsightsGroupsInsightGroupKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
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
        ? getGetApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyKey(args)
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
                (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
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
          client.api.v2['engineering-insights'].insights.groups[':insightGroupKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyKey() {
  return ['api', '/api/v2/engineering-insights/insights/groups/:insightGroupKey', 'DELETE'] as const
}

export function useDeleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyKey()
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
            (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['engineering-insights'].insights.groups[':insightGroupKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyKey() {
  return ['api', '/api/v2/engineering-insights/insights/groups/:insightGroupKey', 'PATCH'] as const
}

export function usePatchApiV2EngineeringInsightsInsightsGroupsInsightGroupKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyKey()
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
            (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['engineering-insights'].insights.groups[':insightGroupKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsInsightsScoresKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
  >,
) {
  return ['api', '/api/v2/engineering-insights/insights/scores', args] as const
}

export function useGetApiV2EngineeringInsightsInsightsScores<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
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
        ? getGetApiV2EngineeringInsightsInsightsScoresKey(args)
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
                (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
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
          client.api.v2['engineering-insights'].insights.scores.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsInsightsScores<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
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
        ? getGetApiV2EngineeringInsightsInsightsScoresKey(args)
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
                (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
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
          client.api.v2['engineering-insights'].insights.scores.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsPullRequestsKey(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>,
) {
  return ['api', '/api/v2/engineering-insights/pull-requests', args] as const
}

export function useGetApiV2EngineeringInsightsPullRequests<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>
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
        ? getGetApiV2EngineeringInsightsPullRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['engineering-insights']['pull-requests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsPullRequests<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>
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
        ? getGetApiV2EngineeringInsightsPullRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2['engineering-insights']['pull-requests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EngineeringInsightsRepositoriesKey(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>,
) {
  return ['api', '/api/v2/engineering-insights/repositories', args] as const
}

export function useGetApiV2EngineeringInsightsRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>
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
        ? getGetApiV2EngineeringInsightsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['engineering-insights'].repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EngineeringInsightsRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>
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
        ? getGetApiV2EngineeringInsightsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2['engineering-insights'].repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2EngineeringInsightsRepositoriesProjectsKey() {
  return ['api', '/api/v2/engineering-insights/repositories/projects', 'PUT'] as const
}

export function usePutApiV2EngineeringInsightsRepositoriesProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2)['engineering-insights']['repositories']['projects']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['engineering-insights']['repositories']['projects']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2EngineeringInsightsRepositoriesProjectsKey()
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
            (typeof client.api.v2)['engineering-insights']['repositories']['projects']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['engineering-insights'].repositories.projects.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyKey() {
  return [
    'api',
    '/api/v2/engineering-insights/repositories/:repositoryKey/projects/:projectKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2)['engineering-insights']['repositories'][':repositoryKey']['projects'][':projectKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2)['engineering-insights']['repositories'][':repositoryKey']['projects'][':projectKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyKey()
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
            (typeof client.api.v2)['engineering-insights']['repositories'][':repositoryKey']['projects'][':projectKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2['engineering-insights'].repositories[':repositoryKey'].projects[
            ':projectKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
