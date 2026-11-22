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

export function getV1beta2Key() {
  return ['v1beta2'] as const
}

export function getV1beta2NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:name', toValue(args)] as const
}

export function getV1beta2NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta2NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'DELETE'] as const
}

export function getDeleteV1beta2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$delete']>) {
      return parseResponse(client.v1beta2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta2NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'PATCH'] as const
}

export function getPatchV1beta2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>) {
      return parseResponse(client.v1beta2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1beta2NameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta2NameExportDocumentsMutationKey() {
  return ['v1beta2', '/v1beta2/:name:exportDocuments', 'POST'] as const
}

export function getPostV1beta2NameExportDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':name:exportDocuments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name:exportDocuments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2NameExportDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':name:exportDocuments']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':name:exportDocuments'].$post(args, options))
    },
  })
}

export function usePostV1beta2NameExportDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name:exportDocuments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name:exportDocuments']['$post']>,
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
  const mutationDefaults = getPostV1beta2NameExportDocumentsMutationOptions<
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

export function getPostV1beta2NameImportDocumentsMutationKey() {
  return ['v1beta2', '/v1beta2/:name:importDocuments', 'POST'] as const
}

export function getPostV1beta2NameImportDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':name:importDocuments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name:importDocuments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2NameImportDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':name:importDocuments']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':name:importDocuments'].$post(args, options))
    },
  })
}

export function usePostV1beta2NameImportDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name:importDocuments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name:importDocuments']['$post']>,
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
  const mutationDefaults = getPostV1beta2NameImportDocumentsMutationOptions<
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

export function getV1beta2ParentFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['fields']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:parent/fields', toValue(args)] as const
}

export function getV1beta2ParentFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['fields']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2ParentFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':parent'].fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2ParentFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':parent']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['fields']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['fields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['fields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2ParentFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2ParentFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2ParentFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':parent'].fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta2ParentIndexesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:parent/indexes', toValue(args)] as const
}

export function getV1beta2ParentIndexesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2ParentIndexesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':parent'].indexes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2ParentIndexes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':parent']['indexes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['indexes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['indexes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2ParentIndexesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['indexes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2ParentIndexesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2ParentIndexesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':parent'].indexes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta2ParentIndexesMutationKey() {
  return ['v1beta2', '/v1beta2/:parent/indexes', 'POST'] as const
}

export function getPostV1beta2ParentIndexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['indexes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2ParentIndexesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':parent'].indexes.$post(args, options))
    },
  })
}

export function usePostV1beta2ParentIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['indexes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$post']>,
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
  const mutationDefaults = getPostV1beta2ParentIndexesMutationOptions<TError, TOnMutateResult>(
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
