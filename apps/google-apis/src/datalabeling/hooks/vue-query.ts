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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name', toValue(args)] as const
}

export function getV1beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function getDeleteV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>) {
      return parseResponse(client.v1beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function getPatchV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>) {
      return parseResponse(client.v1beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name/operations', toValue(args)] as const
}

export function getV1beta1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1NameCancelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name:cancel']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name:cancel', toValue(args)] as const
}

export function getV1beta1NameCancelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name:cancel']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameCancelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name:cancel'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1NameCancel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name:cancel']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1NameCancelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameCancelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameCancelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name:cancel'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1NameExportDataMutationKey() {
  return ['v1beta1', '/v1beta1/:name:exportData', 'POST'] as const
}

export function getPostV1beta1NameExportDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:exportData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:exportData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameExportDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:exportData']['$post']>) {
      return parseResponse(client.v1beta1[':name:exportData'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameExportData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:exportData']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:exportData']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameExportDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1NameImportDataMutationKey() {
  return ['v1beta1', '/v1beta1/:name:importData', 'POST'] as const
}

export function getPostV1beta1NameImportDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:importData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:importData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameImportDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:importData']['$post']>) {
      return parseResponse(client.v1beta1[':name:importData'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameImportData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:importData']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:importData']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameImportDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1NamePauseMutationKey() {
  return ['v1beta1', '/v1beta1/:name:pause', 'POST'] as const
}

export function getPostV1beta1NamePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NamePauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:pause']['$post']>) {
      return parseResponse(client.v1beta1[':name:pause'].$post(args, options))
    },
  })
}

export function usePostV1beta1NamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:pause']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:pause']['$post']>,
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
  const mutationDefaults = getPostV1beta1NamePauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1NameResumeMutationKey() {
  return ['v1beta1', '/v1beta1/:name:resume', 'POST'] as const
}

export function getPostV1beta1NameResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:resume']['$post']>) {
      return parseResponse(client.v1beta1[':name:resume'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:resume']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:resume']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameResumeMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentAnnotatedDatasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/annotatedDatasets', toValue(args)] as const
}

export function getV1beta1ParentAnnotatedDatasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentAnnotatedDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].annotatedDatasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentAnnotatedDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentAnnotatedDatasetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['annotatedDatasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentAnnotatedDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentAnnotatedDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].annotatedDatasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ParentAnnotationSpecSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/annotationSpecSets', toValue(args)] as const
}

export function getV1beta1ParentAnnotationSpecSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentAnnotationSpecSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].annotationSpecSets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentAnnotationSpecSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>
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
                  ReturnType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentAnnotationSpecSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentAnnotationSpecSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentAnnotationSpecSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].annotationSpecSets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentAnnotationSpecSetsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/annotationSpecSets', 'POST'] as const
}

export function getPostV1beta1ParentAnnotationSpecSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentAnnotationSpecSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].annotationSpecSets.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentAnnotationSpecSets<
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
                  ReturnType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['annotationSpecSets']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentAnnotationSpecSetsMutationOptions<
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

export function getV1beta1ParentDataItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/dataItems', toValue(args)] as const
}

export function getV1beta1ParentDataItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentDataItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].dataItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentDataItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentDataItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dataItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentDataItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentDataItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].dataItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ParentDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/datasets', toValue(args)] as const
}

export function getV1beta1ParentDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['datasets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['datasets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentDatasetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['datasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentDatasetsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/datasets', 'POST'] as const
}

export function getPostV1beta1ParentDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['datasets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].datasets.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['datasets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentDatasetsMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentEvaluationJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/evaluationJobs', toValue(args)] as const
}

export function getV1beta1ParentEvaluationJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentEvaluationJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].evaluationJobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentEvaluationJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentEvaluationJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentEvaluationJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentEvaluationJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].evaluationJobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentEvaluationJobsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/evaluationJobs', 'POST'] as const
}

export function getPostV1beta1ParentEvaluationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentEvaluationJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].evaluationJobs.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentEvaluationJobs<
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
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['evaluationJobs']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentEvaluationJobsMutationOptions<
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

export function getV1beta1ParentEvaluationsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/evaluations:search', toValue(args)] as const
}

export function getV1beta1ParentEvaluationsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentEvaluationsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent']['evaluations:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentEvaluationsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>
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
                  ReturnType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentEvaluationsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['evaluations:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentEvaluationsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentEvaluationsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent']['evaluations:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentExampleComparisonsSearchMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/exampleComparisons:search', 'POST'] as const
}

export function getPostV1beta1ParentExampleComparisonsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':parent']['exampleComparisons:search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['exampleComparisons:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentExampleComparisonsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1)[':parent']['exampleComparisons:search']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1[':parent']['exampleComparisons:search'].$post(args, options),
      )
    },
  })
}

export function usePostV1beta1ParentExampleComparisonsSearch<
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
                    (typeof client.v1beta1)[':parent']['exampleComparisons:search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta1)[':parent']['exampleComparisons:search']['$post']
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
  const mutationDefaults = getPostV1beta1ParentExampleComparisonsSearchMutationOptions<
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

export function getV1beta1ParentExamplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['examples']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/examples', toValue(args)] as const
}

export function getV1beta1ParentExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['examples']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['examples']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['examples']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['examples']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentExamplesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['examples']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ParentFeedbackMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/feedbackMessages', toValue(args)] as const
}

export function getV1beta1ParentFeedbackMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentFeedbackMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].feedbackMessages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentFeedbackMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentFeedbackMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentFeedbackMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentFeedbackMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].feedbackMessages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentFeedbackMessagesMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/feedbackMessages', 'POST'] as const
}

export function getPostV1beta1ParentFeedbackMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentFeedbackMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].feedbackMessages.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentFeedbackMessages<
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
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['feedbackMessages']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentFeedbackMessagesMutationOptions<
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

export function getV1beta1ParentFeedbackThreadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/feedbackThreads', toValue(args)] as const
}

export function getV1beta1ParentFeedbackThreadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentFeedbackThreadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].feedbackThreads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentFeedbackThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentFeedbackThreadsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['feedbackThreads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentFeedbackThreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentFeedbackThreadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].feedbackThreads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentImageLabelMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/image:label', 'POST'] as const
}

export function getPostV1beta1ParentImageLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['image:label']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['image:label']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentImageLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['image:label']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['image:label'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentImageLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['image:label']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['image:label']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentImageLabelMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentInstructionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/instructions', toValue(args)] as const
}

export function getV1beta1ParentInstructionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentInstructionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].instructions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instructions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instructions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentInstructionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentInstructionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentInstructionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].instructions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentInstructionsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/instructions', 'POST'] as const
}

export function getPostV1beta1ParentInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instructions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].instructions.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instructions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['instructions']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentInstructionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1ParentTextLabelMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/text:label', 'POST'] as const
}

export function getPostV1beta1ParentTextLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['text:label']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['text:label']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentTextLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['text:label']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['text:label'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentTextLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['text:label']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['text:label']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentTextLabelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1ParentVideoLabelMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/video:label', 'POST'] as const
}

export function getPostV1beta1ParentVideoLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['video:label']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['video:label']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentVideoLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['video:label']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['video:label'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentVideoLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['video:label']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['video:label']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentVideoLabelMutationOptions<TError, TOnMutateResult>(
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
