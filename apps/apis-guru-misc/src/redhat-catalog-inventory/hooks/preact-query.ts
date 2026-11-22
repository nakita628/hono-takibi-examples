import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>>,
        TError,
        InferRequestType<typeof client.graphql.$post>,
        TOnMutateResult
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

export function getOpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >({
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceCredentialTypesQueryKey(
  args: InferRequestType<typeof client.service_credential_types.$get>,
) {
  return ['service_credential_types', '/service_credential_types', args] as const
}

export function getServiceCredentialTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_credential_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceCredentialTypesQueryKey>
  >({
    queryKey: getServiceCredentialTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_credential_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceCredentialTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_credential_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceCredentialTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getServiceCredentialTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServiceCredentialTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_credential_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_credential_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceCredentialTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getServiceCredentialTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServiceCredentialTypesIdQueryKey(
  args: InferRequestType<(typeof client.service_credential_types)[':id']['$get']>,
) {
  return ['service_credential_types', '/service_credential_types/:id', args] as const
}

export function getServiceCredentialTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_credential_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_credential_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceCredentialTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_credential_types[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.service_credential_types)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceCredentialTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getServiceCredentialTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServiceCredentialTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_credential_types)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_credential_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getServiceCredentialTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServiceCredentialsQueryKey(
  args: InferRequestType<typeof client.service_credentials.$get>,
) {
  return ['service_credentials', '/service_credentials', args] as const
}

export function getServiceCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.service_credentials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceCredentialsQueryKey>
  >({
    queryKey: getServiceCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_credentials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServiceCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_credentials.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceCredentialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_credentials.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_credentials.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceCredentialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceCredentialsIdQueryKey(
  args: InferRequestType<(typeof client.service_credentials)[':id']['$get']>,
) {
  return ['service_credentials', '/service_credentials/:id', args] as const
}

export function getServiceCredentialsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_credentials)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_credentials)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceCredentialsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_credentials[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceCredentialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_credentials)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_credentials)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceCredentialsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceCredentialsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceCredentialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_credentials)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_credentials)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceCredentialsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceInstancesQueryKey(
  args: InferRequestType<typeof client.service_instances.$get>,
) {
  return ['service_instances', '/service_instances', args] as const
}

export function getServiceInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.service_instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInstancesQueryKey>
  >({
    queryKey: getServiceInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServiceInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceInstancesIdQueryKey(
  args: InferRequestType<(typeof client.service_instances)[':id']['$get']>,
) {
  return ['service_instances', '/service_instances/:id', args] as const
}

export function getServiceInstancesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_instances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInstancesIdQueryKey>
  >({
    queryKey: getServiceInstancesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_instances[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceInstancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_instances)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceInstancesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceInstancesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceInstancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_instances)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.service_instances)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceInstancesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceInstancesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceInventoriesQueryKey(
  args: InferRequestType<typeof client.service_inventories.$get>,
) {
  return ['service_inventories', '/service_inventories', args] as const
}

export function getServiceInventoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.service_inventories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInventoriesQueryKey>
  >({
    queryKey: getServiceInventoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_inventories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServiceInventories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_inventories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceInventoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceInventoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceInventories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_inventories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_inventories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceInventoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceInventoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceInventoriesIdQueryKey(
  args: InferRequestType<(typeof client.service_inventories)[':id']['$get']>,
) {
  return ['service_inventories', '/service_inventories/:id', args] as const
}

export function getServiceInventoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_inventories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_inventories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceInventoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_inventories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceInventoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_inventories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_inventories)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceInventoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceInventoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceInventoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_inventories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_inventories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceInventoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>,
) {
  return ['service_inventories', '/service_inventories/:id/tags', args] as const
}

export function getServiceInventoriesIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_inventories)[':id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceInventoriesIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_inventories[':id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceInventoriesIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getServiceInventoriesIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServiceInventoriesIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_inventories)[':id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getServiceInventoriesIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.service_offering_nodes.$get>,
) {
  return ['service_offering_nodes', '/service_offering_nodes', args] as const
}

export function getServiceOfferingNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_offering_nodes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingNodesQueryKey>
  >({
    queryKey: getServiceOfferingNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_offering_nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceOfferingNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_offering_nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceOfferingNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceOfferingNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceOfferingNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_offering_nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_offering_nodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceOfferingNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceOfferingNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceOfferingNodesIdQueryKey(
  args: InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>,
) {
  return ['service_offering_nodes', '/service_offering_nodes/:id', args] as const
}

export function getServiceOfferingNodesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offering_nodes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceOfferingNodesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_offering_nodes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceOfferingNodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getServiceOfferingNodesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServiceOfferingNodesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offering_nodes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getServiceOfferingNodesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServiceOfferingsQueryKey(
  args: InferRequestType<typeof client.service_offerings.$get>,
) {
  return ['service_offerings', '/service_offerings', args] as const
}

export function getServiceOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.service_offerings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingsQueryKey>
  >({
    queryKey: getServiceOfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_offerings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServiceOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_offerings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceOfferingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_offerings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.service_offerings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceOfferingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceOfferingsIdQueryKey(
  args: InferRequestType<(typeof client.service_offerings)[':id']['$get']>,
) {
  return ['service_offerings', '/service_offerings/:id', args] as const
}

export function getServiceOfferingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offerings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceOfferingsIdQueryKey>
  >({
    queryKey: getServiceOfferingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_offerings[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceOfferingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offerings)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceOfferingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceOfferingsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceOfferingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offerings)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.service_offerings)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceOfferingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceOfferingsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>,
) {
  return ['service_offerings', '/service_offerings/:id/service_instances', args] as const
}

export function getServiceOfferingsIdServiceInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceOfferingsIdServiceInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_offerings[':id'].service_instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceOfferingsIdServiceInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getServiceOfferingsIdServiceInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServiceOfferingsIdServiceInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getServiceOfferingsIdServiceInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getServiceOfferingsIdServiceInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServiceOfferingsIdServiceOfferingNodesQueryKey(
  args: InferRequestType<
    (typeof client.service_offerings)[':id']['service_offering_nodes']['$get']
  >,
) {
  return ['service_offerings', '/service_offerings/:id/service_offering_nodes', args] as const
}

export function getServiceOfferingsIdServiceOfferingNodesQueryOptions<
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
  args: InferRequestType<
    (typeof client.service_offerings)[':id']['service_offering_nodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceOfferingsIdServiceOfferingNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_offerings[':id'].service_offering_nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.service_offerings)[':id']['service_offering_nodes']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServiceOfferingsIdServiceOfferingNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getServiceOfferingsIdServiceOfferingNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServiceOfferingsIdServiceOfferingNodes<
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
  args: InferRequestType<
    (typeof client.service_offerings)[':id']['service_offering_nodes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getServiceOfferingsIdServiceOfferingNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getServiceOfferingsIdServiceOfferingNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServiceOfferingsIdServicePlansQueryKey(
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>,
) {
  return ['service_offerings', '/service_offerings/:id/service_plans', args] as const
}

export function getServiceOfferingsIdServicePlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServiceOfferingsIdServicePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_offerings[':id'].service_plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getServiceOfferingsIdServicePlansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServiceOfferingsIdServicePlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service_offerings)[':id']['service_plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getServiceOfferingsIdServicePlansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServicePlansQueryKey(args: InferRequestType<typeof client.service_plans.$get>) {
  return ['service_plans', '/service_plans', args] as const
}

export function getServicePlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.service_plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicePlansQueryKey>
  >({
    queryKey: getServicePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServicePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_plans.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServicePlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServicePlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServicePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.service_plans.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_plans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServicePlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServicePlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServicePlansIdQueryKey(
  args: InferRequestType<(typeof client.service_plans)[':id']['$get']>,
) {
  return ['service_plans', '/service_plans/:id', args] as const
}

export function getServicePlansIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicePlansIdQueryKey>
  >({
    queryKey: getServicePlansIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service_plans[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServicePlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_plans)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicePlansIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServicePlansIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServicePlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service_plans)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.service_plans)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicePlansIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServicePlansIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSourcesQueryKey(args: InferRequestType<typeof client.sources.$get>) {
  return ['sources', '/sources', args] as const
}

export function getSourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSourcesQueryKey>
  >({
    queryKey: getSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSourcesIdQueryKey(
  args: InferRequestType<(typeof client.sources)[':id']['$get']>,
) {
  return ['sources', '/sources/:id', args] as const
}

export function getSourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.sources)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdQueryKey>
  >({
    queryKey: getSourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSourcesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSourcesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>,
) {
  return ['sources', '/sources/:id/service_instances', args] as const
}

export function getSourcesIdServiceInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourcesIdServiceInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':id'].service_instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourcesIdServiceInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourcesIdServiceInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourcesIdServiceInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourcesIdServiceInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSourcesIdServiceInventoriesQueryKey(
  args: InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>,
) {
  return ['sources', '/sources/:id/service_inventories', args] as const
}

export function getSourcesIdServiceInventoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_inventories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourcesIdServiceInventoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':id'].service_inventories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourcesIdServiceInventoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourcesIdServiceInventoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourcesIdServiceInventories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_inventories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourcesIdServiceInventoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSourcesIdServiceOfferingNodesQueryKey(
  args: InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>,
) {
  return ['sources', '/sources/:id/service_offering_nodes', args] as const
}

export function getSourcesIdServiceOfferingNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourcesIdServiceOfferingNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':id'].service_offering_nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourcesIdServiceOfferingNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourcesIdServiceOfferingNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourcesIdServiceOfferingNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSourcesIdServiceOfferingsQueryKey(
  args: InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>,
) {
  return ['sources', '/sources/:id/service_offerings', args] as const
}

export function getSourcesIdServiceOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_offerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourcesIdServiceOfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':id'].service_offerings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourcesIdServiceOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourcesIdServiceOfferingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourcesIdServiceOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_offerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourcesIdServiceOfferingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSourcesIdServicePlansQueryKey(
  args: InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>,
) {
  return ['sources', '/sources/:id/service_plans', args] as const
}

export function getSourcesIdServicePlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourcesIdServicePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':id'].service_plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourcesIdServicePlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourcesIdServicePlansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourcesIdServicePlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':id']['service_plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourcesIdServicePlansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSourcesIdTasksQueryKey(
  args: InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>,
) {
  return ['sources', '/sources/:id/tasks', args] as const
}

export function getSourcesIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdTasksQueryKey>
  >({
    queryKey: getSourcesIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':id'].tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSourcesIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourcesIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSourcesIdTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSourcesIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sources)[':id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourcesIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSourcesIdTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTasksQueryKey(args: InferRequestType<typeof client.tasks.$get>) {
  return ['tasks', '/tasks', args] as const
}

export function getTasksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >({
    queryKey: getTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTasksIdQueryKey(args: InferRequestType<(typeof client.tasks)[':id']['$get']>) {
  return ['tasks', '/tasks/:id', args] as const
}

export function getTasksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tasks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdQueryKey>
  >({
    queryKey: getTasksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
