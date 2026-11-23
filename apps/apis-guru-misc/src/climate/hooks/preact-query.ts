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

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4BoundariesMutationKey() {
  return ['v4', '/v4/boundaries', 'POST'] as const
}

export function getPostV4BoundariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.boundaries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.boundaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4BoundariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.boundaries.$post>) {
      return parseResponse(client.v4.boundaries.$post(args, options))
    },
  })
}

export function usePostV4Boundaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.boundaries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.boundaries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4BoundariesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4BoundariesQueryMutationKey() {
  return ['v4', '/v4/boundaries/query', 'POST'] as const
}

export function getPostV4BoundariesQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.boundaries.query.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.boundaries.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4BoundariesQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.boundaries.query.$post>) {
      return parseResponse(client.v4.boundaries.query.$post(args, options))
    },
  })
}

export function usePostV4BoundariesQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.boundaries.query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v4.boundaries.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4BoundariesQueryMutationOptions<TError, TOnMutateResult>(
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

export function getV4BoundariesBoundaryIdQueryKey(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
) {
  return ['v4', '/v4/boundaries/:boundaryId', args] as const
}

export function getV4BoundariesBoundaryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4BoundariesBoundaryIdQueryKey>
  >({
    queryKey: getV4BoundariesBoundaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.boundaries[':boundaryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4BoundariesBoundaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4BoundariesBoundaryIdQueryKey>
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
      ...getV4BoundariesBoundaryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4BoundariesBoundaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4BoundariesBoundaryIdQueryKey>
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
      ...getV4BoundariesBoundaryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV4ExportsMutationKey() {
  return ['v4', '/v4/exports', 'POST'] as const
}

export function getPostV4ExportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.exports.$post>>>>>,
    TError,
    InferRequestType<typeof client.v4.exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.exports.$post>) {
      return parseResponse(client.v4.exports.$post(args, options))
    },
  })
}

export function usePostV4Exports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.exports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.exports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ExportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV4ExportsExportIdContentsQueryKey(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/exports/:exportId/contents', keyArgs] as const
}

export function getV4ExportsExportIdContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ExportsExportIdContentsQueryKey>
  >({
    queryKey: getV4ExportsExportIdContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.exports[':exportId'].contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ExportsExportIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ExportsExportIdContentsQueryKey>
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
      ...getV4ExportsExportIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4ExportsExportIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ExportsExportIdContentsQueryKey>
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
      ...getV4ExportsExportIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4ExportsExportIdStatusQueryKey(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
) {
  return ['v4', '/v4/exports/:exportId/status', args] as const
}

export function getV4ExportsExportIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ExportsExportIdStatusQueryKey>
  >({
    queryKey: getV4ExportsExportIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.exports[':exportId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ExportsExportIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ExportsExportIdStatusQueryKey>
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
      ...getV4ExportsExportIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4ExportsExportIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ExportsExportIdStatusQueryKey>
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
      ...getV4ExportsExportIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
) {
  return ['v4', '/v4/farmOrganizations/:farmOrganizationType/:farmOrganizationId', args] as const
}

export function getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey>
  >({
    queryKey: getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.farmOrganizations[':farmOrganizationType'][':farmOrganizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey>
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
      ...getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey>
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
      ...getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4FieldsQueryKey(args: InferRequestType<typeof client.v4.fields.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/fields', keyArgs] as const
}

export function getV4FieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.fields.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4FieldsQueryKey>
  >({
    queryKey: getV4FieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.fields.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4Fields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.fields.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4FieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4FieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4Fields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.fields.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4FieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4FieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4FieldsAllQueryKey(args: InferRequestType<typeof client.v4.fields.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/fields/all', keyArgs] as const
}

export function getV4FieldsAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.fields.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4FieldsAllQueryKey>
  >({
    queryKey: getV4FieldsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.fields.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4FieldsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.fields.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4FieldsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4FieldsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4FieldsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.fields.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4FieldsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4FieldsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4FieldsFieldIdQueryKey(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
) {
  return ['v4', '/v4/fields/:fieldId', args] as const
}

export function getV4FieldsFieldIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4FieldsFieldIdQueryKey>
  >({
    queryKey: getV4FieldsFieldIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.fields[':fieldId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4FieldsFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4FieldsFieldIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4FieldsFieldIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4FieldsFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4FieldsFieldIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4FieldsFieldIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4LayersAsAppliedQueryKey(
  args: InferRequestType<typeof client.v4.layers.asApplied.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asApplied', keyArgs] as const
}

export function getV4LayersAsAppliedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.layers.asApplied.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsAppliedQueryKey>
  >({
    queryKey: getV4LayersAsAppliedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.asApplied.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4LayersAsApplied<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.asApplied.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsAppliedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4LayersAsAppliedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4LayersAsApplied<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.asApplied.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsAppliedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4LayersAsAppliedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4LayersAsAppliedActivityIdContentsQueryKey(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asApplied/:activityId/contents', keyArgs] as const
}

export function getV4LayersAsAppliedActivityIdContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsAppliedActivityIdContentsQueryKey>
  >({
    queryKey: getV4LayersAsAppliedActivityIdContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.asApplied[':activityId'].contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4LayersAsAppliedActivityIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsAppliedActivityIdContentsQueryKey>
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
      ...getV4LayersAsAppliedActivityIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4LayersAsAppliedActivityIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsAppliedActivityIdContentsQueryKey>
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
      ...getV4LayersAsAppliedActivityIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4LayersAsHarvestedQueryKey(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asHarvested', keyArgs] as const
}

export function getV4LayersAsHarvestedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsHarvestedQueryKey>
  >({
    queryKey: getV4LayersAsHarvestedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.asHarvested.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4LayersAsHarvested<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsHarvestedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4LayersAsHarvestedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4LayersAsHarvested<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsHarvestedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4LayersAsHarvestedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4LayersAsHarvestedActivityIdContentsQueryKey(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asHarvested/:activityId/contents', keyArgs] as const
}

export function getV4LayersAsHarvestedActivityIdContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsHarvestedActivityIdContentsQueryKey>
  >({
    queryKey: getV4LayersAsHarvestedActivityIdContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.asHarvested[':activityId'].contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4LayersAsHarvestedActivityIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsHarvestedActivityIdContentsQueryKey>
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
      ...getV4LayersAsHarvestedActivityIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4LayersAsHarvestedActivityIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsHarvestedActivityIdContentsQueryKey>
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
      ...getV4LayersAsHarvestedActivityIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4LayersAsPlantedQueryKey(
  args: InferRequestType<typeof client.v4.layers.asPlanted.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asPlanted', keyArgs] as const
}

export function getV4LayersAsPlantedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.layers.asPlanted.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsPlantedQueryKey>
  >({
    queryKey: getV4LayersAsPlantedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.asPlanted.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4LayersAsPlanted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.asPlanted.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsPlantedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4LayersAsPlantedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4LayersAsPlanted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.asPlanted.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsPlantedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4LayersAsPlantedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4LayersAsPlantedActivityIdContentsQueryKey(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asPlanted/:activityId/contents', keyArgs] as const
}

export function getV4LayersAsPlantedActivityIdContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsPlantedActivityIdContentsQueryKey>
  >({
    queryKey: getV4LayersAsPlantedActivityIdContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.asPlanted[':activityId'].contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4LayersAsPlantedActivityIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsPlantedActivityIdContentsQueryKey>
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
      ...getV4LayersAsPlantedActivityIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4LayersAsPlantedActivityIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersAsPlantedActivityIdContentsQueryKey>
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
      ...getV4LayersAsPlantedActivityIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsQueryKey(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/scoutingObservations', keyArgs] as const
}

export function getV4LayersScoutingObservationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersScoutingObservationsQueryKey>
  >({
    queryKey: getV4LayersScoutingObservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.scoutingObservations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4LayersScoutingObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersScoutingObservationsQueryKey>
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
      ...getV4LayersScoutingObservationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4LayersScoutingObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersScoutingObservationsQueryKey>
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
      ...getV4LayersScoutingObservationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsScoutingObservationIdQueryKey(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
) {
  return ['v4', '/v4/layers/scoutingObservations/:scoutingObservationId', args] as const
}

export function getV4LayersScoutingObservationsScoutingObservationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdQueryKey>
  >({
    queryKey: getV4LayersScoutingObservationsScoutingObservationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.scoutingObservations[':scoutingObservationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4LayersScoutingObservationsScoutingObservationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdQueryKey>
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
      ...getV4LayersScoutingObservationsScoutingObservationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4LayersScoutingObservationsScoutingObservationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdQueryKey>
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
      ...getV4LayersScoutingObservationsScoutingObservationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v4',
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments',
    keyArgs,
  ] as const
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey>
  >({
    queryKey: getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4LayersScoutingObservationsScoutingObservationIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey>
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
      ...getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4LayersScoutingObservationsScoutingObservationIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey>
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
      ...getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v4',
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments/:attachmentId/contents',
    keyArgs,
  ] as const
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey
    >
  >({
    queryKey:
      getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments[
          ':attachmentId'
        ].contents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey
        >
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
      ...getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey
        >
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
      ...getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4OperationsAllQueryKey(
  args: InferRequestType<typeof client.v4.operations.all.$get>,
) {
  return ['v4', '/v4/operations/all', args] as const
}

export function getV4OperationsAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.operations.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4OperationsAllQueryKey>
  >({
    queryKey: getV4OperationsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.operations.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4OperationsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.operations.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4OperationsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4OperationsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4OperationsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.operations.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4OperationsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4OperationsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4ResourceOwnersResourceOwnerIdQueryKey(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
) {
  return ['v4', '/v4/resourceOwners/:resourceOwnerId', args] as const
}

export function getV4ResourceOwnersResourceOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ResourceOwnersResourceOwnerIdQueryKey>
  >({
    queryKey: getV4ResourceOwnersResourceOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.resourceOwners[':resourceOwnerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ResourceOwnersResourceOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ResourceOwnersResourceOwnerIdQueryKey>
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
      ...getV4ResourceOwnersResourceOwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4ResourceOwnersResourceOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ResourceOwnersResourceOwnerIdQueryKey>
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
      ...getV4ResourceOwnersResourceOwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV4UploadsMutationKey() {
  return ['v4', '/v4/uploads', 'POST'] as const
}

export function getPostV4UploadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.uploads.$post>>>>>,
    TError,
    InferRequestType<typeof client.v4.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.uploads.$post>) {
      return parseResponse(client.v4.uploads.$post(args, options))
    },
  })
}

export function usePostV4Uploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.uploads.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.uploads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4UploadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV4UploadsStatusQueryMutationKey() {
  return ['v4', '/v4/uploads/status/query', 'POST'] as const
}

export function getPostV4UploadsStatusQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.uploads.status.query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.uploads.status.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UploadsStatusQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.uploads.status.query.$post>) {
      return parseResponse(client.v4.uploads.status.query.$post(args, options))
    },
  })
}

export function usePostV4UploadsStatusQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.uploads.status.query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v4.uploads.status.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4UploadsStatusQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPutV4UploadsUploadIdMutationKey() {
  return ['v4', '/v4/uploads/:uploadId', 'PUT'] as const
}

export function getPutV4UploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.uploads)[':uploadId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UploadsUploadIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['$put']>) {
      return parseResponse(client.v4.uploads[':uploadId'].$put(args, options))
    },
  })
}

export function usePutV4UploadsUploadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v4.uploads)[':uploadId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV4UploadsUploadIdMutationOptions<TError, TOnMutateResult>(
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

export function getV4UploadsUploadIdStatusQueryKey(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
) {
  return ['v4', '/v4/uploads/:uploadId/status', args] as const
}

export function getV4UploadsUploadIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UploadsUploadIdStatusQueryKey>
  >({
    queryKey: getV4UploadsUploadIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.uploads[':uploadId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4UploadsUploadIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4UploadsUploadIdStatusQueryKey>
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
      ...getV4UploadsUploadIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4UploadsUploadIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4UploadsUploadIdStatusQueryKey>
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
      ...getV4UploadsUploadIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
