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

export function getGraphqlKey() {
  return ['graphql'] as const
}

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getServiceCredentialTypesKey() {
  return ['service_credential_types'] as const
}

export function getServiceCredentialsKey() {
  return ['service_credentials'] as const
}

export function getServiceInstancesKey() {
  return ['service_instances'] as const
}

export function getServiceInventoriesKey() {
  return ['service_inventories'] as const
}

export function getServiceOfferingNodesKey() {
  return ['service_offering_nodes'] as const
}

export function getServiceOfferingsKey() {
  return ['service_offerings'] as const
}

export function getServicePlansKey() {
  return ['service_plans'] as const
}

export function getSourcesKey() {
  return ['sources'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getPostGraphqlMutationKey() {
  return ['graphql', '/graphql', 'POST'] as const
}

export function getPostGraphqlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>>,
    TError,
    InferRequestType<typeof client.graphql.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphqlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graphql.$post>) {
      return parseResponse(client.graphql.$post(args, options))
    },
  })
}

export function usePostGraphql<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.graphql.$post>,
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
  const mutationDefaults = getPostGraphqlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceCredentialTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_credential_types.$get>>,
) {
  return ['service_credential_types', '/service_credential_types', toValue(args)] as const
}

export function getServiceCredentialTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_credential_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceCredentialTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_credential_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceCredentialTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_credential_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
            >
          >,
          ReturnType<typeof getServiceCredentialTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceCredentialTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceCredentialTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_credential_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceCredentialTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_credential_types)[':id']['$get']>>,
) {
  return ['service_credential_types', '/service_credential_types/:id', toValue(args)] as const
}

export function getServiceCredentialTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_credential_types)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceCredentialTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_credential_types[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceCredentialTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_credential_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_credential_types)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_credential_types)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_credential_types)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceCredentialTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.service_credential_types)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceCredentialTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceCredentialTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_credential_types[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceCredentialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_credentials.$get>>,
) {
  return ['service_credentials', '/service_credentials', toValue(args)] as const
}

export function getServiceCredentialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_credentials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_credentials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>
            >
          >,
          ReturnType<typeof getServiceCredentialsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceCredentialsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_credentials)[':id']['$get']>>,
) {
  return ['service_credentials', '/service_credentials/:id', toValue(args)] as const
}

export function getServiceCredentialsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_credentials)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceCredentialsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_credentials[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceCredentialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_credentials)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_credentials)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_credentials)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_credentials)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceCredentialsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.service_credentials)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceCredentialsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceCredentialsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_credentials[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_instances.$get>>,
) {
  return ['service_instances', '/service_instances', toValue(args)] as const
}

export function getServiceInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>
            >
          >,
          ReturnType<typeof getServiceInstancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceInstancesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_instances)[':id']['$get']>>,
) {
  return ['service_instances', '/service_instances/:id', toValue(args)] as const
}

export function getServiceInstancesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_instances)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceInstancesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_instances[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceInstancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_instances)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceInstancesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInstancesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceInstancesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_instances[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceInventoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_inventories.$get>>,
) {
  return ['service_inventories', '/service_inventories', toValue(args)] as const
}

export function getServiceInventoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_inventories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceInventoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_inventories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceInventories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_inventories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>
            >
          >,
          ReturnType<typeof getServiceInventoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInventoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceInventoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_inventories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceInventoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_inventories)[':id']['$get']>>,
) {
  return ['service_inventories', '/service_inventories/:id', toValue(args)] as const
}

export function getServiceInventoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_inventories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceInventoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_inventories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceInventoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_inventories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_inventories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_inventories)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_inventories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceInventoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.service_inventories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInventoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceInventoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_inventories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServiceInventoriesIdTagMutationKey() {
  return ['service_inventories', '/service_inventories/:id/tag', 'POST'] as const
}

export function getPostServiceInventoriesIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.service_inventories)[':id']['tag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.service_inventories)[':id']['tag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceInventoriesIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.service_inventories)[':id']['tag']['$post']>,
    ) {
      return parseResponse(client.service_inventories[':id'].tag.$post(args, options))
    },
  })
}

export function usePostServiceInventoriesIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_inventories)[':id']['tag']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.service_inventories)[':id']['tag']['$post']>,
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
  const mutationDefaults = getPostServiceInventoriesIdTagMutationOptions<TError, TOnMutateResult>(
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

export function getServiceInventoriesIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>
  >,
) {
  return ['service_inventories', '/service_inventories/:id/tags', toValue(args)] as const
}

export function getServiceInventoriesIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceInventoriesIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_inventories[':id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceInventoriesIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_inventories)[':id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_inventories)[':id']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_inventories)[':id']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceInventoriesIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.service_inventories)[':id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInventoriesIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceInventoriesIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_inventories[':id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServiceInventoriesIdUntagMutationKey() {
  return ['service_inventories', '/service_inventories/:id/untag', 'POST'] as const
}

export function getPostServiceInventoriesIdUntagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service_inventories)[':id']['untag']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.service_inventories)[':id']['untag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceInventoriesIdUntagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.service_inventories)[':id']['untag']['$post']>,
    ) {
      return parseResponse(client.service_inventories[':id'].untag.$post(args, options))
    },
  })
}

export function usePostServiceInventoriesIdUntag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.service_inventories)[':id']['untag']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.service_inventories)[':id']['untag']['$post']>,
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
  const mutationDefaults = getPostServiceInventoriesIdUntagMutationOptions<TError, TOnMutateResult>(
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

export function getServiceOfferingNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_offering_nodes.$get>>,
) {
  return ['service_offering_nodes', '/service_offering_nodes', toValue(args)] as const
}

export function getServiceOfferingNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_offering_nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceOfferingNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_offering_nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceOfferingNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_offering_nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>
            >
          >,
          ReturnType<typeof getServiceOfferingNodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceOfferingNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_offering_nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceOfferingNodesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>>,
) {
  return ['service_offering_nodes', '/service_offering_nodes/:id', toValue(args)] as const
}

export function getServiceOfferingNodesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceOfferingNodesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_offering_nodes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceOfferingNodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offering_nodes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_offering_nodes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_offering_nodes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceOfferingNodesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.service_offering_nodes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingNodesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceOfferingNodesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_offering_nodes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceOfferingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_offerings.$get>>,
) {
  return ['service_offerings', '/service_offerings', toValue(args)] as const
}

export function getServiceOfferingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_offerings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_offerings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_offerings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>
            >
          >,
          ReturnType<typeof getServiceOfferingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_offerings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceOfferingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_offerings)[':id']['$get']>>,
) {
  return ['service_offerings', '/service_offerings/:id', toValue(args)] as const
}

export function getServiceOfferingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_offerings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceOfferingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_offerings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceOfferingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_offerings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceOfferingsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceOfferingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_offerings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServiceOfferingsIdAppliedInventoriesTagsMutationKey() {
  return ['service_offerings', '/service_offerings/:id/applied_inventories_tags', 'POST'] as const
}

export function getPostServiceOfferingsIdAppliedInventoriesTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.service_offerings)[':id']['applied_inventories_tags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.service_offerings)[':id']['applied_inventories_tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceOfferingsIdAppliedInventoriesTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.service_offerings)[':id']['applied_inventories_tags']['$post']
      >,
    ) {
      return parseResponse(
        client.service_offerings[':id'].applied_inventories_tags.$post(args, options),
      )
    },
  })
}

export function usePostServiceOfferingsIdAppliedInventoriesTags<
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
                    (typeof client.service_offerings)[':id']['applied_inventories_tags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.service_offerings)[':id']['applied_inventories_tags']['$post']
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
  const mutationDefaults = getPostServiceOfferingsIdAppliedInventoriesTagsMutationOptions<
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

export function getPostServiceOfferingsIdOrderMutationKey() {
  return ['service_offerings', '/service_offerings/:id/order', 'POST'] as const
}

export function getPostServiceOfferingsIdOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.service_offerings)[':id']['order']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.service_offerings)[':id']['order']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceOfferingsIdOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.service_offerings)[':id']['order']['$post']>,
    ) {
      return parseResponse(client.service_offerings[':id'].order.$post(args, options))
    },
  })
}

export function usePostServiceOfferingsIdOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_offerings)[':id']['order']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.service_offerings)[':id']['order']['$post']>,
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
  const mutationDefaults = getPostServiceOfferingsIdOrderMutationOptions<TError, TOnMutateResult>(
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

export function getServiceOfferingsIdServiceInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>
  >,
) {
  return ['service_offerings', '/service_offerings/:id/service_instances', toValue(args)] as const
}

export function getServiceOfferingsIdServiceInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceOfferingsIdServiceInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_offerings[':id'].service_instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceOfferingsIdServiceInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.service_offerings)[':id']['service_instances']['$get']>
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
                  ReturnType<(typeof client.service_offerings)[':id']['service_instances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServiceOfferingsIdServiceInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingsIdServiceInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceOfferingsIdServiceInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_offerings[':id'].service_instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceOfferingsIdServiceOfferingNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_offering_nodes']['$get']>
  >,
) {
  return [
    'service_offerings',
    '/service_offerings/:id/service_offering_nodes',
    toValue(args),
  ] as const
}

export function getServiceOfferingsIdServiceOfferingNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_offering_nodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceOfferingsIdServiceOfferingNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_offerings[':id'].service_offering_nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceOfferingsIdServiceOfferingNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.service_offerings)[':id']['service_offering_nodes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_offering_nodes']['$get']>
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
                    (typeof client.service_offerings)[':id']['service_offering_nodes']['$get']
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
                    (typeof client.service_offerings)[':id']['service_offering_nodes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServiceOfferingsIdServiceOfferingNodesQueryKey>
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
            ReturnType<(typeof client.service_offerings)[':id']['service_offering_nodes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingsIdServiceOfferingNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceOfferingsIdServiceOfferingNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_offerings[':id'].service_offering_nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceOfferingsIdServicePlansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>
  >,
) {
  return ['service_offerings', '/service_offerings/:id/service_plans', toValue(args)] as const
}

export function getServiceOfferingsIdServicePlansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceOfferingsIdServicePlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_offerings[':id'].service_plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceOfferingsIdServicePlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.service_offerings)[':id']['service_plans']['$get']>
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
                  ReturnType<(typeof client.service_offerings)[':id']['service_plans']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServiceOfferingsIdServicePlansQueryKey>
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
          Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingsIdServicePlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceOfferingsIdServicePlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_offerings[':id'].service_plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicePlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_plans.$get>>,
) {
  return ['service_plans', '/service_plans', toValue(args)] as const
}

export function getServicePlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicePlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.service_plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
          >,
          ReturnType<typeof getServicePlansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicePlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicePlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicePlansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_plans)[':id']['$get']>>,
) {
  return ['service_plans', '/service_plans/:id', toValue(args)] as const
}

export function getServicePlansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_plans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicePlansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service_plans[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicePlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service_plans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicePlansIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicePlansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicePlansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service_plans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sources.$get>>,
) {
  return ['sources', '/sources', toValue(args)] as const
}

export function getSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
          >,
          ReturnType<typeof getSourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourcesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['$get']>>,
) {
  return ['sources', '/sources/:id', toValue(args)] as const
}

export function getSourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSourcesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSourcesIdIncrementalRefreshMutationKey() {
  return ['sources', '/sources/:id/incremental_refresh', 'PATCH'] as const
}

export function getPatchSourcesIdIncrementalRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':id']['incremental_refresh']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sources)[':id']['incremental_refresh']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSourcesIdIncrementalRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sources)[':id']['incremental_refresh']['$patch']>,
    ) {
      return parseResponse(client.sources[':id'].incremental_refresh.$patch(args, options))
    },
  })
}

export function usePatchSourcesIdIncrementalRefresh<
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
                    ReturnType<(typeof client.sources)[':id']['incremental_refresh']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sources)[':id']['incremental_refresh']['$patch']>,
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
  const mutationDefaults = getPatchSourcesIdIncrementalRefreshMutationOptions<
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

export function getPatchSourcesIdRefreshMutationKey() {
  return ['sources', '/sources/:id/refresh', 'PATCH'] as const
}

export function getPatchSourcesIdRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':id']['refresh']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sources)[':id']['refresh']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSourcesIdRefreshMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':id']['refresh']['$patch']>) {
      return parseResponse(client.sources[':id'].refresh.$patch(args, options))
    },
  })
}

export function usePatchSourcesIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sources)[':id']['refresh']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sources)[':id']['refresh']['$patch']>,
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
  const mutationDefaults = getPatchSourcesIdRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getSourcesIdServiceInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>
  >,
) {
  return ['sources', '/sources/:id/service_instances', toValue(args)] as const
}

export function getSourcesIdServiceInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdServiceInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].service_instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesIdServiceInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSourcesIdServiceInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.sources)[':id']['service_instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdServiceInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdServiceInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].service_instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourcesIdServiceInventoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>
  >,
) {
  return ['sources', '/sources/:id/service_inventories', toValue(args)] as const
}

export function getSourcesIdServiceInventoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdServiceInventoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].service_inventories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesIdServiceInventories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_inventories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_inventories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_inventories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSourcesIdServiceInventoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.sources)[':id']['service_inventories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdServiceInventoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdServiceInventoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].service_inventories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourcesIdServiceOfferingNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>
  >,
) {
  return ['sources', '/sources/:id/service_offering_nodes', toValue(args)] as const
}

export function getSourcesIdServiceOfferingNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdServiceOfferingNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].service_offering_nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesIdServiceOfferingNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>
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
                  ReturnType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSourcesIdServiceOfferingNodesQueryKey>
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
          Awaited<ReturnType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdServiceOfferingNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdServiceOfferingNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].service_offering_nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourcesIdServiceOfferingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>
  >,
) {
  return ['sources', '/sources/:id/service_offerings', toValue(args)] as const
}

export function getSourcesIdServiceOfferingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdServiceOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].service_offerings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesIdServiceOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_offerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_offerings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_offerings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSourcesIdServiceOfferingsQueryKey>
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
          Awaited<ReturnType<(typeof client.sources)[':id']['service_offerings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdServiceOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdServiceOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].service_offerings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourcesIdServicePlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>>,
) {
  return ['sources', '/sources/:id/service_plans', toValue(args)] as const
}

export function getSourcesIdServicePlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdServicePlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].service_plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesIdServicePlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_plans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['service_plans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSourcesIdServicePlansQueryKey>
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
          Awaited<ReturnType<(typeof client.sources)[':id']['service_plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdServicePlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdServicePlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].service_plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourcesIdTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>>,
) {
  return ['sources', '/sources/:id/tasks', toValue(args)] as const
}

export function getSourcesIdTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSourcesIdTasksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  return ['tags', '/tags', toValue(args)] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
) {
  return ['tasks', '/tasks', toValue(args)] as const
}

export function getTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          ReturnType<typeof getTasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['$get']>>,
) {
  return ['tasks', '/tasks/:id', toValue(args)] as const
}

export function getTasksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTasksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchTasksIdMutationKey() {
  return ['tasks', '/tasks/:id', 'PATCH'] as const
}

export function getPatchTasksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':id']['$patch']>) {
      return parseResponse(client.tasks[':id'].$patch(args, options))
    },
  })
}

export function usePatchTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$patch']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tasks)[':id']['$patch']>,
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
  const mutationDefaults = getPatchTasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
