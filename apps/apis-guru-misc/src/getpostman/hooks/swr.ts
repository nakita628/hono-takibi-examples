import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getEnvironmentsKey() {
  return ['environments'] as const
}

export function getImportKey() {
  return ['import'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMocksKey() {
  return ['mocks'] as const
}

export function getMonitorsKey() {
  return ['monitors'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getGetApisKey(args: InferRequestType<typeof client.apis.$get>) {
  return ['apis', '/apis', args] as const
}

export function useGetApis<TError = unknown>(
  args: InferRequestType<typeof client.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApis<TError = unknown>(
  args: InferRequestType<typeof client.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApisKey() {
  return ['apis', '/apis', 'POST'] as const
}

export function usePostApis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.apis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.apis.$post> }) =>
        parseResponse(client.apis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiIdKey(args: InferRequestType<(typeof client.apis)[':apiId']['$get']>) {
  return ['apis', '/apis/:apiId', args] as const
}

export function useGetApisApiId<TError = unknown>(
  args: InferRequestType<(typeof client.apis)[':apiId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisApiIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis[':apiId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiId<TError = unknown>(
  args: InferRequestType<(typeof client.apis)[':apiId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisApiIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis[':apiId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiIdKey() {
  return ['apis', '/apis/:apiId', 'PUT'] as const
}

export function usePutApisApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)[':apiId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.apis)[':apiId']['$put']> }) =>
        parseResponse(client.apis[':apiId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisApiIdKey() {
  return ['apis', '/apis/:apiId', 'DELETE'] as const
}

export function useDeleteApisApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)[':apiId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apis)[':apiId']['$delete']> },
      ) => parseResponse(client.apis[':apiId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiIdVersionsKey(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>,
) {
  return ['apis', '/apis/:apiId/versions', args] as const
}

export function useGetApisApiIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisApiIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis[':apiId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisApiIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis[':apiId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisApiIdVersionsKey() {
  return ['apis', '/apis/:apiId/versions', 'POST'] as const
}

export function usePostApisApiIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisApiIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']> },
      ) => parseResponse(client.apis[':apiId'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdKey(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', args] as const
}

export function useGetApisApiIdVersionsApiVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisApiIdVersionsApiVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisApiIdVersionsApiVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiIdVersionsApiVersionIdKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', 'PUT'] as const
}

export function usePutApisApiIdVersionsApiVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisApiIdVersionsApiVersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>
        },
      ) => parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisApiIdVersionsApiVersionIdKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', 'DELETE'] as const
}

export function useDeleteApisApiIdVersionsApiVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisApiIdVersionsApiVersionIdKey()
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
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']
          >
        },
      ) =>
        parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdContracttestKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/contracttest', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdContracttest<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdContracttestKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].contracttest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdContracttest<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdContracttestKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].contracttest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdDocumentationKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/documentation', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdDocumentation<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdDocumentationKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].documentation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdDocumentation<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdDocumentationKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].documentation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdEnvironmentKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/environment', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdEnvironment<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdEnvironmentKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].environment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdEnvironment<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdEnvironmentKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].environment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdIntegrationtestKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/integrationtest', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdIntegrationtest<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdIntegrationtestKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].integrationtest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdIntegrationtest<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdIntegrationtestKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].integrationtest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdMonitorKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/monitor', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdMonitor<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdMonitorKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].monitor.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdMonitor<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdMonitorKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].monitor.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdRelationsKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/relations', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdRelations<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdRelationsKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].relations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdRelations<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdRelationsKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].relations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisApiIdVersionsApiVersionIdRelationsKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/relations', 'POST'] as const
}

export function usePostApisApiIdVersionsApiVersionIdRelations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisApiIdVersionsApiVersionIdRelationsKey()
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
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].relations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApisApiIdVersionsApiVersionIdSchemasKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas', 'POST'] as const
}

export function usePostApisApiIdVersionsApiVersionIdSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisApiIdVersionsApiVersionIdSchemasKey()
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
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].schemas.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdSchemasSchemaIdKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdSchemasSchemaId<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdSchemasSchemaIdKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdSchemasSchemaId<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdSchemasSchemaIdKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId', 'PUT'] as const
}

export function usePutApisApiIdVersionsApiVersionIdSchemasSchemaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdKey()
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
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsKey() {
  return [
    'apis',
    '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId/collections',
    'POST',
  ] as const
}

export function usePostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollections<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsKey()
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
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].collections.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiIdVersionsApiVersionIdTestsuiteKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/testsuite', args] as const
}

export function useGetApisApiIdVersionsApiVersionIdTestsuite<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdTestsuiteKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].testsuite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiIdVersionsApiVersionIdTestsuite<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
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
        ? getGetApisApiIdVersionsApiVersionIdTestsuiteKey(args)
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
                (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
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
          client.apis[':apiId'].versions[':apiVersionId'].testsuite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaKey() {
  return [
    'apis',
    '/apis/:apiId/versions/:apiVersionId/:entityType/:entityId/syncWithSchema',
    'PUT',
  ] as const
}

export function usePutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchema<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaKey()
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
            (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'][':entityType'][
            ':entityId'
          ].syncWithSchema.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsKey() {
  return ['collections', '/collections'] as const
}

export function useGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function usePostCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.$post> }) =>
        parseResponse(client.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsForkCollectionUidKey() {
  return ['collections', '/collections/fork/:collection_uid', 'POST'] as const
}

export function usePostCollectionsForkCollectionUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.fork)[':collection_uid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsForkCollectionUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']> },
      ) => parseResponse(client.collections.fork[':collection_uid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsMergeKey() {
  return ['collections', '/collections/merge', 'POST'] as const
}

export function usePostCollectionsMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.merge.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.collections.merge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.merge.$post> }) =>
        parseResponse(client.collections.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionUidKey(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$get']>,
) {
  return ['collections', '/collections/:collection_uid', args] as const
}

export function useGetCollectionsCollectionUid<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionUid<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCollectionsCollectionUidKey() {
  return ['collections', '/collections/:collection_uid', 'PUT'] as const
}

export function usePutCollectionsCollectionUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.collections)[':collection_uid']['$put']> },
      ) => parseResponse(client.collections[':collection_uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionUidKey() {
  return ['collections', '/collections/:collection_uid', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections)[':collection_uid']['$delete']> },
      ) => parseResponse(client.collections[':collection_uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsKey() {
  return ['environments', '/environments'] as const
}

export function useGetEnvironments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnvironmentsKey() {
  return ['environments', '/environments', 'POST'] as const
}

export function usePostEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.environments.$post> }) =>
        parseResponse(client.environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsEnvironmentUidKey(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$get']>,
) {
  return ['environments', '/environments/:environment_uid', args] as const
}

export function useGetEnvironmentsEnvironmentUid<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentsEnvironmentUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments[':environment_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentsEnvironmentUid<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentsEnvironmentUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments[':environment_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEnvironmentsEnvironmentUidKey() {
  return ['environments', '/environments/:environment_uid', 'PUT'] as const
}

export function usePutEnvironmentsEnvironmentUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environment_uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnvironmentsEnvironmentUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.environments)[':environment_uid']['$put']> },
      ) => parseResponse(client.environments[':environment_uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnvironmentsEnvironmentUidKey() {
  return ['environments', '/environments/:environment_uid', 'DELETE'] as const
}

export function useDeleteEnvironmentsEnvironmentUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvironmentsEnvironmentUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.environments)[':environment_uid']['$delete']> },
      ) => parseResponse(client.environments[':environment_uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImportExportedKey() {
  return ['import', '/import/exported', 'POST'] as const
}

export function usePostImportExported<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.exported.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImportExportedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.import.exported.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImportOpenapiKey() {
  return ['import', '/import/openapi', 'POST'] as const
}

export function usePostImportOpenapi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.openapi.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.import.openapi.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImportOpenapiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.import.openapi.$post> }) =>
        parseResponse(client.import.openapi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetMocksKey() {
  return ['mocks', '/mocks'] as const
}

export function useGetMocks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMocksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mocks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMocks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMocksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mocks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMocksKey() {
  return ['mocks', '/mocks', 'POST'] as const
}

export function usePostMocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mocks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mocks.$post> }) =>
        parseResponse(client.mocks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMocksMockUidKey(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>,
) {
  return ['mocks', '/mocks/:mock_uid', args] as const
}

export function useGetMocksMockUid<TError = unknown>(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMocksMockUidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mocks[':mock_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMocksMockUid<TError = unknown>(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMocksMockUidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mocks[':mock_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMocksMockUidKey() {
  return ['mocks', '/mocks/:mock_uid', 'PUT'] as const
}

export function usePutMocksMockUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMocksMockUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mocks)[':mock_uid']['$put']> },
      ) => parseResponse(client.mocks[':mock_uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMocksMockUidKey() {
  return ['mocks', '/mocks/:mock_uid', 'DELETE'] as const
}

export function useDeleteMocksMockUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMocksMockUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']> },
      ) => parseResponse(client.mocks[':mock_uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMocksMockUidPublishKey() {
  return ['mocks', '/mocks/:mock_uid/publish', 'POST'] as const
}

export function usePostMocksMockUidPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMocksMockUidPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']> },
      ) => parseResponse(client.mocks[':mock_uid'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMocksMockUidUnpublishKey() {
  return ['mocks', '/mocks/:mock_uid/unpublish', 'DELETE'] as const
}

export function useDeleteMocksMockUidUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMocksMockUidUnpublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']> },
      ) => parseResponse(client.mocks[':mock_uid'].unpublish.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMonitorsKey() {
  return ['monitors', '/monitors'] as const
}

export function useGetMonitors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMonitorsKey() {
  return ['monitors', '/monitors', 'POST'] as const
}

export function usePostMonitors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.monitors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.monitors.$post> }) =>
        parseResponse(client.monitors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMonitorsMonitorUidKey(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>,
) {
  return ['monitors', '/monitors/:monitor_uid', args] as const
}

export function useGetMonitorsMonitorUid<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMonitorsMonitorUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':monitor_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitorsMonitorUid<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMonitorsMonitorUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':monitor_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMonitorsMonitorUidKey() {
  return ['monitors', '/monitors/:monitor_uid', 'PUT'] as const
}

export function usePutMonitorsMonitorUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMonitorsMonitorUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']> },
      ) => parseResponse(client.monitors[':monitor_uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMonitorsMonitorUidKey() {
  return ['monitors', '/monitors/:monitor_uid', 'DELETE'] as const
}

export function useDeleteMonitorsMonitorUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMonitorsMonitorUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']> },
      ) => parseResponse(client.monitors[':monitor_uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMonitorsMonitorUidRunKey() {
  return ['monitors', '/monitors/:monitor_uid/run', 'POST'] as const
}

export function usePostMonitorsMonitorUidRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorsMonitorUidRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']> },
      ) => parseResponse(client.monitors[':monitor_uid'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesKey() {
  return ['workspaces', '/workspaces'] as const
}

export function useGetWorkspaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspacesKey() {
  return ['workspaces', '/workspaces', 'POST'] as const
}

export function usePostWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.workspaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workspaces.$post> }) =>
        parseResponse(client.workspaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceIdKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_id', args] as const
}

export function useGetWorkspacesWorkspaceId<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceId<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspacesWorkspaceIdKey() {
  return ['workspaces', '/workspaces/:workspace_id', 'PUT'] as const
}

export function usePutWorkspacesWorkspaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspacesWorkspaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']> },
      ) => parseResponse(client.workspaces[':workspace_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspacesWorkspaceIdKey() {
  return ['workspaces', '/workspaces/:workspace_id', 'DELETE'] as const
}

export function useDeleteWorkspacesWorkspaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspacesWorkspaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']> },
      ) => parseResponse(client.workspaces[':workspace_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
