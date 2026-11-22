import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTagsKey() {
  return ['tags'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1DiscoverersKey(args: InferRequestType<typeof client.v1.discoverers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/discoverers', keyArgs] as const
}

export function useGetV1Discoverers<TError = unknown>(
  args: InferRequestType<typeof client.v1.discoverers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DiscoverersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.discoverers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Discoverers<TError = unknown>(
  args: InferRequestType<typeof client.v1.discoverers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DiscoverersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.discoverers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DiscoverersKey() {
  return ['v1', '/v1/discoverers', 'POST'] as const
}

export function usePostV1Discoverers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.discoverers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DiscoverersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.discoverers.$post> }) =>
        parseResponse(client.v1.discoverers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameKey(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/registries/name/:registryName', keyArgs] as const
}

export function useGetV1RegistriesNameRegistryName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RegistriesNameRegistryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registries.name[':registryName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RegistriesNameRegistryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registries.name[':registryName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1RegistriesNameRegistryNameKey() {
  return ['v1', '/v1/registries/name/:registryName', 'PUT'] as const
}

export function usePutV1RegistriesNameRegistryName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RegistriesNameRegistryNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$put']> },
      ) => parseResponse(client.v1.registries.name[':registryName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistriesNameRegistryNameKey() {
  return ['v1', '/v1/registries/name/:registryName', 'POST'] as const
}

export function usePostV1RegistriesNameRegistryName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistriesNameRegistryNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$post']> },
      ) => parseResponse(client.v1.registries.name[':registryName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RegistriesNameRegistryNameKey() {
  return ['v1', '/v1/registries/name/:registryName', 'DELETE'] as const
}

export function useDeleteV1RegistriesNameRegistryName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RegistriesNameRegistryNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$delete']>
        },
      ) => parseResponse(client.v1.registries.name[':registryName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameKey(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', keyArgs] as const
}

export function useGetV1RegistriesNameRegistryNameSchemasNameSchemaName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryNameSchemasNameSchemaName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1RegistriesNameRegistryNameSchemasNameSchemaNameKey() {
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', 'PUT'] as const
}

export function usePutV1RegistriesNameRegistryNameSchemasNameSchemaName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RegistriesNameRegistryNameSchemasNameSchemaNameKey()
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
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameKey() {
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', 'POST'] as const
}

export function usePostV1RegistriesNameRegistryNameSchemasNameSchemaName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameKey()
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
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameKey() {
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', 'DELETE'] as const
}

export function useDeleteV1RegistriesNameRegistryNameSchemasNameSchemaName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameKey()
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
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DiscoverersIdDiscovererIdKey(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/discoverers/id/:discovererId', keyArgs] as const
}

export function useGetV1DiscoverersIdDiscovererId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DiscoverersIdDiscovererIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.discoverers.id[':discovererId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DiscoverersIdDiscovererId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DiscoverersIdDiscovererIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.discoverers.id[':discovererId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DiscoverersIdDiscovererIdKey() {
  return ['v1', '/v1/discoverers/id/:discovererId', 'PUT'] as const
}

export function usePutV1DiscoverersIdDiscovererId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DiscoverersIdDiscovererIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$put']> },
      ) => parseResponse(client.v1.discoverers.id[':discovererId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DiscoverersIdDiscovererIdKey() {
  return ['v1', '/v1/discoverers/id/:discovererId', 'DELETE'] as const
}

export function useDeleteV1DiscoverersIdDiscovererId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DiscoverersIdDiscovererIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']> },
      ) => parseResponse(client.v1.discoverers.id[':discovererId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PolicyKey(args: InferRequestType<typeof client.v1.policy.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/policy', keyArgs] as const
}

export function useGetV1Policy<TError = unknown>(
  args: InferRequestType<typeof client.v1.policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Policy<TError = unknown>(
  args: InferRequestType<typeof client.v1.policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PolicyKey() {
  return ['v1', '/v1/policy', 'PUT'] as const
}

export function usePutV1Policy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.policy.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.policy.$put> }) =>
        parseResponse(client.v1.policy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PolicyKey() {
  return ['v1', '/v1/policy', 'DELETE'] as const
}

export function useDeleteV1Policy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.policy.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.policy.$delete> }) =>
        parseResponse(client.v1.policy.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionKey() {
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/version/:schemaVersion',
    'DELETE',
  ] as const
}

export function useDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionKey()
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
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].version[
            ':schemaVersion'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageKey(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language',
    keyArgs,
  ] as const
}

export function useGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageKey() {
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language',
    'POST',
  ] as const
}

export function usePostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageKey()
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
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
            ':language'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeKey(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/export#type',
    keyArgs,
  ] as const
}

export function useGetV1RegistriesNameRegistryNameSchemasNameSchemaNameExportType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'][
            'export#type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryNameSchemasNameSchemaNameExportType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'][
            'export#type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceKey(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language/source',
    keyArgs,
  ] as const
}

export function useGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSource<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
            ':language'
          ].source.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSource<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
            ':language'
          ].source.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DiscoverKey() {
  return ['v1', '/v1/discover', 'POST'] as const
}

export function usePostV1Discover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discover.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.discover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DiscoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.discover.$post> }) =>
        parseResponse(client.v1.discover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistriesKey(args: InferRequestType<typeof client.v1.registries.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/registries', keyArgs] as const
}

export function useGetV1Registries<TError = unknown>(
  args: InferRequestType<typeof client.v1.registries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RegistriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Registries<TError = unknown>(
  args: InferRequestType<typeof client.v1.registries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RegistriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsKey(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/versions',
    keyArgs,
  ] as const
}

export function useGetV1RegistriesNameRegistryNameSchemasNameSchemaNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryNameSchemasNameSchemaNameVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
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
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameSchemasKey(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/registries/name/:registryName/schemas', keyArgs] as const
}

export function useGetV1RegistriesNameRegistryNameSchemas<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RegistriesNameRegistryNameSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registries.name[':registryName'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryNameSchemas<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RegistriesNameRegistryNameSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registries.name[':registryName'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resource-arn']['$post']> },
      ) => parseResponse(client.tags[':resource-arn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistriesNameRegistryNameSchemasSearchKeywordsKey(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/registries/name/:registryName/schemas/search#keywords', keyArgs] as const
}

export function useGetV1RegistriesNameRegistryNameSchemasSearchKeywords<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasSearchKeywordsKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
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
          client.v1.registries.name[':registryName'].schemas['search#keywords'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistriesNameRegistryNameSchemasSearchKeywords<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
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
        ? getGetV1RegistriesNameRegistryNameSchemasSearchKeywordsKey(args)
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
                (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
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
          client.v1.registries.name[':registryName'].schemas['search#keywords'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DiscoverersIdDiscovererIdStartKey() {
  return ['v1', '/v1/discoverers/id/:discovererId/start', 'POST'] as const
}

export function usePostV1DiscoverersIdDiscovererIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DiscoverersIdDiscovererIdStartKey()
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
            (typeof client.v1.discoverers.id)[':discovererId']['start']['$post']
          >
        },
      ) => parseResponse(client.v1.discoverers.id[':discovererId'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DiscoverersIdDiscovererIdStopKey() {
  return ['v1', '/v1/discoverers/id/:discovererId/stop', 'POST'] as const
}

export function usePostV1DiscoverersIdDiscovererIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DiscoverersIdDiscovererIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>
        },
      ) => parseResponse(client.v1.discoverers.id[':discovererId'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resource-arn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
