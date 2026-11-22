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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.boundaries.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.boundaries.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>,
) {
  return ['v4', '/v4/boundaries/:boundaryId', toValue(args)] as const
}

export function getV4BoundariesBoundaryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4BoundariesBoundaryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.boundaries[':boundaryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4BoundariesBoundaryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4BoundariesBoundaryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4BoundariesBoundaryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.boundaries[':boundaryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.exports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.exports.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/exports/:exportId/contents', keyArgs] as const
}

export function getV4ExportsExportIdContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ExportsExportIdContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.exports[':exportId'].contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ExportsExportIdContentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ExportsExportIdContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ExportsExportIdContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.exports[':exportId'].contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4ExportsExportIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>
  >,
) {
  return ['v4', '/v4/exports/:exportId/status', toValue(args)] as const
}

export function getV4ExportsExportIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ExportsExportIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.exports[':exportId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ExportsExportIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ExportsExportIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ExportsExportIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.exports[':exportId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/farmOrganizations/:farmOrganizationType/:farmOrganizationId',
    toValue(args),
  ] as const
}

export function getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.farmOrganizations[':farmOrganizationType'][':farmOrganizationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
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
                    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
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
                    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey>
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
              (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.farmOrganizations[':farmOrganizationType'][':farmOrganizationId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV4FieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.fields.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/fields', keyArgs] as const
}

export function getV4FieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4FieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.fields.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4Fields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>
          >,
          ReturnType<typeof getV4FieldsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4FieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4FieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4FieldsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.fields.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/fields/all', keyArgs] as const
}

export function getV4FieldsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.fields.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4FieldsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.fields.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4FieldsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.fields.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
          >,
          ReturnType<typeof getV4FieldsAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4FieldsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4FieldsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.fields.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4FieldsFieldIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>>,
) {
  return ['v4', '/v4/fields/:fieldId', toValue(args)] as const
}

export function getV4FieldsFieldIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4FieldsFieldIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.fields[':fieldId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4FieldsFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4FieldsFieldIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4FieldsFieldIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4FieldsFieldIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.fields[':fieldId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersAsAppliedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asApplied.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/layers/asApplied', keyArgs] as const
}

export function getV4LayersAsAppliedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asApplied.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersAsAppliedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.asApplied.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4LayersAsApplied<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asApplied.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
            >
          >,
          ReturnType<typeof getV4LayersAsAppliedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsAppliedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersAsAppliedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.asApplied.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersAsAppliedActivityIdContentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/layers/asApplied/:activityId/contents', keyArgs] as const
}

export function getV4LayersAsAppliedActivityIdContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersAsAppliedActivityIdContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.asApplied[':activityId'].contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV4LayersAsAppliedActivityIdContentsQueryKey>
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
            ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsAppliedActivityIdContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersAsAppliedActivityIdContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.asApplied[':activityId'].contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersAsHarvestedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asHarvested.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/layers/asHarvested', keyArgs] as const
}

export function getV4LayersAsHarvestedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asHarvested.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersAsHarvestedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.asHarvested.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4LayersAsHarvested<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asHarvested.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
            >
          >,
          ReturnType<typeof getV4LayersAsHarvestedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsHarvestedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersAsHarvestedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.asHarvested.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersAsHarvestedActivityIdContentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/layers/asHarvested/:activityId/contents', keyArgs] as const
}

export function getV4LayersAsHarvestedActivityIdContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersAsHarvestedActivityIdContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.asHarvested[':activityId'].contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
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
                    (typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']
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
                    (typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4LayersAsHarvestedActivityIdContentsQueryKey>
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
            ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsHarvestedActivityIdContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersAsHarvestedActivityIdContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.asHarvested[':activityId'].contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersAsPlantedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asPlanted.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/layers/asPlanted', keyArgs] as const
}

export function getV4LayersAsPlantedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asPlanted.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersAsPlantedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.asPlanted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4LayersAsPlanted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.asPlanted.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
            >
          >,
          ReturnType<typeof getV4LayersAsPlantedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsPlantedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersAsPlantedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.asPlanted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersAsPlantedActivityIdContentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/layers/asPlanted/:activityId/contents', keyArgs] as const
}

export function getV4LayersAsPlantedActivityIdContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersAsPlantedActivityIdContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.asPlanted[':activityId'].contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV4LayersAsPlantedActivityIdContentsQueryKey>
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
            ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersAsPlantedActivityIdContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersAsPlantedActivityIdContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.asPlanted[':activityId'].contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.scoutingObservations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v4', '/v4/layers/scoutingObservations', keyArgs] as const
}

export function getV4LayersScoutingObservationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.scoutingObservations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersScoutingObservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.scoutingObservations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4LayersScoutingObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.layers.scoutingObservations.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>
              >
            >
          >,
          ReturnType<typeof getV4LayersScoutingObservationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersScoutingObservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersScoutingObservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.scoutingObservations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsScoutingObservationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
    >
  >,
) {
  return ['v4', '/v4/layers/scoutingObservations/:scoutingObservationId', toValue(args)] as const
}

export function getV4LayersScoutingObservationsScoutingObservationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4LayersScoutingObservationsScoutingObservationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.scoutingObservations[':scoutingObservationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
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
                    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
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
                    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdQueryKey>
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
              (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4LayersScoutingObservationsScoutingObservationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.scoutingObservations[':scoutingObservationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v4',
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments',
    keyArgs,
  ] as const
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
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
                    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
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
                    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey>
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
              (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4LayersScoutingObservationsScoutingObservationIdAttachmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v4',
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments/:attachmentId/contents',
    keyArgs,
  ] as const
}

export function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments[
          ':attachmentId'
        ].contents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
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
                    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
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
                    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments[
            ':attachmentId'
          ].contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4OperationsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.operations.all.$get>>,
) {
  return ['v4', '/v4/operations/all', toValue(args)] as const
}

export function getV4OperationsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.operations.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4OperationsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.operations.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4OperationsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.operations.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>
            >
          >,
          ReturnType<typeof getV4OperationsAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4OperationsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4OperationsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.operations.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4ResourceOwnersResourceOwnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>
  >,
) {
  return ['v4', '/v4/resourceOwners/:resourceOwnerId', toValue(args)] as const
}

export function getV4ResourceOwnersResourceOwnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ResourceOwnersResourceOwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.resourceOwners[':resourceOwnerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ResourceOwnersResourceOwnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ResourceOwnersResourceOwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ResourceOwnersResourceOwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.resourceOwners[':resourceOwnerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.uploads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.uploads.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>
  >,
) {
  return ['v4', '/v4/uploads/:uploadId/status', toValue(args)] as const
}

export function getV4UploadsUploadIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4UploadsUploadIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.uploads[':uploadId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4UploadsUploadIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UploadsUploadIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4UploadsUploadIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.uploads[':uploadId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
