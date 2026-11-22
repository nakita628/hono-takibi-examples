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

export function getTagsKey() {
  return ['tags'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV1DiscoverersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.discoverers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/discoverers', keyArgs] as const
}

export function getV1DiscoverersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.discoverers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DiscoverersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.discoverers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Discoverers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.discoverers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
          >,
          ReturnType<typeof getV1DiscoverersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DiscoverersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DiscoverersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.discoverers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DiscoverersMutationKey() {
  return ['v1', '/v1/discoverers', 'POST'] as const
}

export function getPostV1DiscoverersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.discoverers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DiscoverersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.discoverers.$post>) {
      return parseResponse(client.v1.discoverers.$post(args, options))
    },
  })
}

export function usePostV1Discoverers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.discoverers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.discoverers.$post>,
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
  const mutationDefaults = getPostV1DiscoverersMutationOptions<TError, TOnMutateResult>(
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

export function getV1RegistriesNameRegistryNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/registries/name/:registryName', keyArgs] as const
}

export function getV1RegistriesNameRegistryNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RegistriesNameRegistryNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RegistriesNameRegistryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RegistriesNameRegistryNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesNameRegistryNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RegistriesNameRegistryNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1RegistriesNameRegistryNameMutationKey() {
  return ['v1', '/v1/registries/name/:registryName', 'PUT'] as const
}

export function getPutV1RegistriesNameRegistryNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RegistriesNameRegistryNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$put']>,
    ) {
      return parseResponse(client.v1.registries.name[':registryName'].$put(args, options))
    },
  })
}

export function usePutV1RegistriesNameRegistryName<
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
                Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.registries.name)[':registryName']['$put']>,
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
  const mutationDefaults = getPutV1RegistriesNameRegistryNameMutationOptions<
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

export function getPostV1RegistriesNameRegistryNameMutationKey() {
  return ['v1', '/v1/registries/name/:registryName', 'POST'] as const
}

export function getPostV1RegistriesNameRegistryNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistriesNameRegistryNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$post']>,
    ) {
      return parseResponse(client.v1.registries.name[':registryName'].$post(args, options))
    },
  })
}

export function usePostV1RegistriesNameRegistryName<
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
                Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.registries.name)[':registryName']['$post']>,
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
  const mutationDefaults = getPostV1RegistriesNameRegistryNameMutationOptions<
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

export function getDeleteV1RegistriesNameRegistryNameMutationKey() {
  return ['v1', '/v1/registries/name/:registryName', 'DELETE'] as const
}

export function getDeleteV1RegistriesNameRegistryNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RegistriesNameRegistryNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$delete']>,
    ) {
      return parseResponse(client.v1.registries.name[':registryName'].$delete(args, options))
    },
  })
}

export function useDeleteV1RegistriesNameRegistryName<
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
                    ReturnType<(typeof client.v1.registries.name)[':registryName']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.registries.name)[':registryName']['$delete']>,
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
  const mutationDefaults = getDeleteV1RegistriesNameRegistryNameMutationOptions<
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

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', keyArgs] as const
}

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RegistriesNameRegistryNameSchemasNameSchemaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RegistriesNameRegistryNameSchemasNameSchemaName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameQueryKey>
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
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RegistriesNameRegistryNameSchemasNameSchemaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationKey() {
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', 'PUT'] as const
}

export function getPutV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$put(args, options),
      )
    },
  })
}

export function usePutV1RegistriesNameRegistryNameSchemasNameSchemaName<
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
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
  const mutationDefaults = getPutV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationOptions<
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

export function getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationKey() {
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', 'POST'] as const
}

export function getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$post(args, options),
      )
    },
  })
}

export function usePostV1RegistriesNameRegistryNameSchemasNameSchemaName<
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
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
  const mutationDefaults = getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationOptions<
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

export function getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationKey() {
  return ['v1', '/v1/registries/name/:registryName/schemas/name/:schemaName', 'DELETE'] as const
}

export function getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1RegistriesNameRegistryNameSchemasNameSchemaName<
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
                      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
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
    getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameMutationOptions<
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

export function getV1DiscoverersIdDiscovererIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/discoverers/id/:discovererId', keyArgs] as const
}

export function getV1DiscoverersIdDiscovererIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DiscoverersIdDiscovererIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.discoverers.id[':discovererId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DiscoverersIdDiscovererId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DiscoverersIdDiscovererIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DiscoverersIdDiscovererIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DiscoverersIdDiscovererIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.discoverers.id[':discovererId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DiscoverersIdDiscovererIdMutationKey() {
  return ['v1', '/v1/discoverers/id/:discovererId', 'PUT'] as const
}

export function getPutV1DiscoverersIdDiscovererIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DiscoverersIdDiscovererIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>,
    ) {
      return parseResponse(client.v1.discoverers.id[':discovererId'].$put(args, options))
    },
  })
}

export function usePutV1DiscoverersIdDiscovererId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>,
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
  const mutationDefaults = getPutV1DiscoverersIdDiscovererIdMutationOptions<
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

export function getDeleteV1DiscoverersIdDiscovererIdMutationKey() {
  return ['v1', '/v1/discoverers/id/:discovererId', 'DELETE'] as const
}

export function getDeleteV1DiscoverersIdDiscovererIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DiscoverersIdDiscovererIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>,
    ) {
      return parseResponse(client.v1.discoverers.id[':discovererId'].$delete(args, options))
    },
  })
}

export function useDeleteV1DiscoverersIdDiscovererId<
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
                  Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>,
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
  const mutationDefaults = getDeleteV1DiscoverersIdDiscovererIdMutationOptions<
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

export function getV1PolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.policy.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/policy', keyArgs] as const
}

export function getV1PolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.policy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.policy.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Policy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.policy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>
          >,
          ReturnType<typeof getV1PolicyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PolicyMutationKey() {
  return ['v1', '/v1/policy', 'PUT'] as const
}

export function getPutV1PolicyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$put>>>>>,
    TError,
    InferRequestType<typeof client.v1.policy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.policy.$put>) {
      return parseResponse(client.v1.policy.$put(args, options))
    },
  })
}

export function usePutV1Policy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.policy.$put>,
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
  const mutationDefaults = getPutV1PolicyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1PolicyMutationKey() {
  return ['v1', '/v1/policy', 'DELETE'] as const
}

export function getDeleteV1PolicyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.policy.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.policy.$delete>) {
      return parseResponse(client.v1.policy.$delete(args, options))
    },
  })
}

export function useDeleteV1Policy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policy.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.policy.$delete>,
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
  const mutationDefaults = getDeleteV1PolicyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionMutationKey() {
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/version/:schemaVersion',
    'DELETE',
  ] as const
}

export function getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].version[
          ':schemaVersion'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersion<
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
                      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
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
    getDeleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionMutationOptions<
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

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language',
    keyArgs,
  ] as const
}

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
          ':language'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageQueryKey
          >
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
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
            ':language'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageMutationKey() {
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language',
    'POST',
  ] as const
}

export function getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
          ':language'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguage<
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
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
    getPostV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageMutationOptions<
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

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/export#type',
    keyArgs,
  ] as const
}

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName']['export#type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1RegistriesNameRegistryNameSchemasNameSchemaNameExportType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeQueryKey>
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
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'][
            'export#type'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language/source',
    keyArgs,
  ] as const
}

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
          ':language'
        ].source.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSource<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceQueryKey
          >
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
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
            ':language'
          ].source.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DiscoverMutationKey() {
  return ['v1', '/v1/discover', 'POST'] as const
}

export function getPostV1DiscoverMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discover.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.discover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DiscoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.discover.$post>) {
      return parseResponse(client.v1.discover.$post(args, options))
    },
  })
}

export function usePostV1Discover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.discover.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.discover.$post>,
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
  const mutationDefaults = getPostV1DiscoverMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1RegistriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.registries.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/registries', keyArgs] as const
}

export function getV1RegistriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.registries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RegistriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Registries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.registries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
          >,
          ReturnType<typeof getV1RegistriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RegistriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/registries/name/:registryName/schemas/name/:schemaName/versions',
    keyArgs,
  ] as const
}

export function getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.name[':schemaName'].versions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1RegistriesNameRegistryNameSchemasNameSchemaNameVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsQueryKey>
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
              (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].schemas.name[':schemaName'].versions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1RegistriesNameRegistryNameSchemasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/registries/name/:registryName/schemas', keyArgs] as const
}

export function getV1RegistriesNameRegistryNameSchemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RegistriesNameRegistryNameSchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RegistriesNameRegistryNameSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
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
                  ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1RegistriesNameRegistryNameSchemasQueryKey>
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
            ReturnType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesNameRegistryNameSchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RegistriesNameRegistryNameSchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resource-arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resource-arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resource-arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resource-arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resource-arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1RegistriesNameRegistryNameSchemasSearchKeywordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/registries/name/:registryName/schemas/search#keywords', keyArgs] as const
}

export function getV1RegistriesNameRegistryNameSchemasSearchKeywordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RegistriesNameRegistryNameSchemasSearchKeywordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.registries.name[':registryName'].schemas['search#keywords'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RegistriesNameRegistryNameSchemasSearchKeywords<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
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
                    (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RegistriesNameRegistryNameSchemasSearchKeywordsQueryKey>
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
              (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RegistriesNameRegistryNameSchemasSearchKeywordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RegistriesNameRegistryNameSchemasSearchKeywordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.registries.name[':registryName'].schemas['search#keywords'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DiscoverersIdDiscovererIdStartMutationKey() {
  return ['v1', '/v1/discoverers/id/:discovererId/start', 'POST'] as const
}

export function getPostV1DiscoverersIdDiscovererIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DiscoverersIdDiscovererIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>,
    ) {
      return parseResponse(client.v1.discoverers.id[':discovererId'].start.$post(args, options))
    },
  })
}

export function usePostV1DiscoverersIdDiscovererIdStart<
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
                  ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>,
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
  const mutationDefaults = getPostV1DiscoverersIdDiscovererIdStartMutationOptions<
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

export function getPostV1DiscoverersIdDiscovererIdStopMutationKey() {
  return ['v1', '/v1/discoverers/id/:discovererId/stop', 'POST'] as const
}

export function getPostV1DiscoverersIdDiscovererIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DiscoverersIdDiscovererIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>,
    ) {
      return parseResponse(client.v1.discoverers.id[':discovererId'].stop.$post(args, options))
    },
  })
}

export function usePostV1DiscoverersIdDiscovererIdStop<
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
                  ReturnType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>,
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
  const mutationDefaults = getPostV1DiscoverersIdDiscovererIdStopMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
