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

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getAttributeGroupsKey() {
  return ['attribute-groups'] as const
}

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutApplicationsApplicationAttributeGroupsAttributeGroupMutationKey() {
  return [
    'applications',
    '/applications/:application/attribute-groups/:attributeGroup',
    'PUT',
  ] as const
}

export function getPutApplicationsApplicationAttributeGroupsAttributeGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationAttributeGroupsAttributeGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$put']
      >,
    ) {
      return parseResponse(
        client.applications[':application']['attribute-groups'][':attributeGroup'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApplicationsApplicationAttributeGroupsAttributeGroup<
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
                  (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$put']
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
  const mutationDefaults =
    getPutApplicationsApplicationAttributeGroupsAttributeGroupMutationOptions<
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

export function getDeleteApplicationsApplicationAttributeGroupsAttributeGroupMutationKey() {
  return [
    'applications',
    '/applications/:application/attribute-groups/:attributeGroup',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationAttributeGroupsAttributeGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationAttributeGroupsAttributeGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':application']['attribute-groups'][':attributeGroup'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApplicationsApplicationAttributeGroupsAttributeGroup<
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
                  (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$delete']
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
  const mutationDefaults =
    getDeleteApplicationsApplicationAttributeGroupsAttributeGroupMutationOptions<
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

export function getApplicationsApplicationResourcesResourceTypeResourceQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:application/resources/:resourceType/:resource',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationResourcesResourceTypeResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationResourcesResourceTypeResourceQueryKey>
  >({
    queryKey: getApplicationsApplicationResourcesResourceTypeResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':application'].resources[':resourceType'][':resource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationResourcesResourceTypeResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationResourcesResourceTypeResourceQueryKey>
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
      ...getApplicationsApplicationResourcesResourceTypeResourceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationResourcesResourceTypeResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationResourcesResourceTypeResourceQueryKey>
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
      ...getApplicationsApplicationResourcesResourceTypeResourceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApplicationsApplicationResourcesResourceTypeResourceMutationKey() {
  return [
    'applications',
    '/applications/:application/resources/:resourceType/:resource',
    'PUT',
  ] as const
}

export function getPutApplicationsApplicationResourcesResourceTypeResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationResourcesResourceTypeResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$put']
      >,
    ) {
      return parseResponse(
        client.applications[':application'].resources[':resourceType'][':resource'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApplicationsApplicationResourcesResourceTypeResource<
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
                  (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$put']
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
  const mutationDefaults =
    getPutApplicationsApplicationResourcesResourceTypeResourceMutationOptions<
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

export function getDeleteApplicationsApplicationResourcesResourceTypeResourceMutationKey() {
  return [
    'applications',
    '/applications/:application/resources/:resourceType/:resource',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationResourcesResourceTypeResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationResourcesResourceTypeResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':application'].resources[':resourceType'][':resource'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApplicationsApplicationResourcesResourceTypeResource<
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
                  (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$delete']
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
  const mutationDefaults =
    getDeleteApplicationsApplicationResourcesResourceTypeResourceMutationOptions<
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

export function getApplicationsQueryKey(args: InferRequestType<typeof client.applications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications', keyArgs] as const
}

export function getApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApplicationsQueryKey>
  >({
    queryKey: getApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApplicationsMutationKey() {
  return ['applications', '/applications', 'POST'] as const
}

export function getPostApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applications.$post>) {
      return parseResponse(client.applications.$post(args, options))
    },
  })
}

export function usePostApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getAttributeGroupsQueryKey(
  args: InferRequestType<(typeof client)['attribute-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['attribute-groups', '/attribute-groups', keyArgs] as const
}

export function getAttributeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeGroupsQueryKey>
  >({
    queryKey: getAttributeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAttributeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute-groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAttributeGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAttributeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute-groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAttributeGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAttributeGroupsMutationKey() {
  return ['attribute-groups', '/attribute-groups', 'POST'] as const
}

export function getPostAttributeGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attribute-groups']['$post']>) {
      return parseResponse(client['attribute-groups'].$post(args, options))
    },
  })
}

export function usePostAttributeGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute-groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['attribute-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAttributeGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getApplicationsApplicationQueryKey(
  args: InferRequestType<(typeof client.applications)[':application']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:application', keyArgs] as const
}

export function getApplicationsApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationQueryKey>
  >({
    queryKey: getApplicationsApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':application'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':application']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationQueryKey>
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
      ...getApplicationsApplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':application']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationQueryKey>
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
      ...getApplicationsApplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationMutationKey() {
  return ['applications', '/applications/:application', 'DELETE'] as const
}

export function getDeleteApplicationsApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':application']['$delete']>,
    ) {
      return parseResponse(client.applications[':application'].$delete(args, options))
    },
  })
}

export function useDeleteApplicationsApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':application']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':application']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApplicationsApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApplicationsApplicationMutationKey() {
  return ['applications', '/applications/:application', 'PATCH'] as const
}

export function getPatchApplicationsApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':application']['$patch']>,
    ) {
      return parseResponse(client.applications[':application'].$patch(args, options))
    },
  })
}

export function usePatchApplicationsApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':application']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':application']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApplicationsApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getAttributeGroupsAttributeGroupQueryKey(
  args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['attribute-groups', '/attribute-groups/:attributeGroup', keyArgs] as const
}

export function getAttributeGroupsAttributeGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeGroupsAttributeGroupQueryKey>
  >({
    queryKey: getAttributeGroupsAttributeGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute-groups'][':attributeGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAttributeGroupsAttributeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeGroupsAttributeGroupQueryKey>
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
      ...getAttributeGroupsAttributeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAttributeGroupsAttributeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeGroupsAttributeGroupQueryKey>
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
      ...getAttributeGroupsAttributeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAttributeGroupsAttributeGroupMutationKey() {
  return ['attribute-groups', '/attribute-groups/:attributeGroup', 'DELETE'] as const
}

export function getDeleteAttributeGroupsAttributeGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeGroupsAttributeGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$delete']>,
    ) {
      return parseResponse(client['attribute-groups'][':attributeGroup'].$delete(args, options))
    },
  })
}

export function useDeleteAttributeGroupsAttributeGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttributeGroupsAttributeGroupMutationOptions<
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

export function getPatchAttributeGroupsAttributeGroupMutationKey() {
  return ['attribute-groups', '/attribute-groups/:attributeGroup', 'PATCH'] as const
}

export function getPatchAttributeGroupsAttributeGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAttributeGroupsAttributeGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$patch']>,
    ) {
      return parseResponse(client['attribute-groups'][':attributeGroup'].$patch(args, options))
    },
  })
}

export function usePatchAttributeGroupsAttributeGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attribute-groups'][':attributeGroup']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAttributeGroupsAttributeGroupMutationOptions<
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

export function getConfigurationQueryKey(args: InferRequestType<typeof client.configuration.$get>) {
  const { header: _, ...keyArgs } = args
  return ['configuration', '/configuration', keyArgs] as const
}

export function getConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.configuration.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationQueryKey>
  >({
    queryKey: getConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.configuration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.configuration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.configuration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutConfigurationMutationKey() {
  return ['configuration', '/configuration', 'PUT'] as const
}

export function getPutConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.configuration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.configuration.$put>) {
      return parseResponse(client.configuration.$put(args, options))
    },
  })
}

export function usePutConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.configuration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getApplicationsApplicationAttributeGroupsQueryKey(
  args: InferRequestType<(typeof client.applications)[':application']['attribute-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:application/attribute-groups', keyArgs] as const
}

export function getApplicationsApplicationAttributeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.applications)[':application']['attribute-groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['attribute-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':application']['attribute-groups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationAttributeGroupsQueryKey>
  >({
    queryKey: getApplicationsApplicationAttributeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':application']['attribute-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationAttributeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.applications)[':application']['attribute-groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['attribute-groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.applications)[':application']['attribute-groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationAttributeGroupsQueryKey>
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
      ...getApplicationsApplicationAttributeGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationAttributeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.applications)[':application']['attribute-groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['attribute-groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.applications)[':application']['attribute-groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationAttributeGroupsQueryKey>
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
      ...getApplicationsApplicationAttributeGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApplicationsApplicationResourcesQueryKey(
  args: InferRequestType<(typeof client.applications)[':application']['resources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:application/resources', keyArgs] as const
}

export function getApplicationsApplicationResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application']['resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationResourcesQueryKey>
  >({
    queryKey: getApplicationsApplicationResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':application'].resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['resources']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':application']['resources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationResourcesQueryKey>
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
      ...getApplicationsApplicationResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':application']['resources']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':application']['resources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationResourcesQueryKey>
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
      ...getApplicationsApplicationResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApplicationsApplicationAttributeGroupDetailsQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':application']['attribute-group-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:application/attribute-group-details', keyArgs] as const
}

export function getApplicationsApplicationAttributeGroupDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application']['attribute-group-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':application']['attribute-group-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application']['attribute-group-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationAttributeGroupDetailsQueryKey>
  >({
    queryKey: getApplicationsApplicationAttributeGroupDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':application']['attribute-group-details'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationAttributeGroupDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application']['attribute-group-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':application']['attribute-group-details']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':application']['attribute-group-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationAttributeGroupDetailsQueryKey>
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
      ...getApplicationsApplicationAttributeGroupDetailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationAttributeGroupDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application']['attribute-group-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':application']['attribute-group-details']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':application']['attribute-group-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationAttributeGroupDetailsQueryKey>
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
      ...getApplicationsApplicationAttributeGroupDetailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
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

export function getPostSyncResourceTypeResourceMutationKey() {
  return ['sync', '/sync/:resourceType/:resource', 'POST'] as const
}

export function getPostSyncResourceTypeResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync)[':resourceType'][':resource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sync)[':resourceType'][':resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncResourceTypeResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sync)[':resourceType'][':resource']['$post']>,
    ) {
      return parseResponse(client.sync[':resourceType'][':resource'].$post(args, options))
    },
  })
}

export function usePostSyncResourceTypeResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync)[':resourceType'][':resource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sync)[':resourceType'][':resource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncResourceTypeResourceMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
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
