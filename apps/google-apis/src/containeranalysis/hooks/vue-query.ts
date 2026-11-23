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

export function getV1beta1NameNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['notes']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name/notes', toValue(args)] as const
}

export function getV1beta1NameNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['notes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1NameNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['notes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['notes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['notes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['notes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1NameNotesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['notes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1NameOccurrencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['occurrences']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name/occurrences', toValue(args)] as const
}

export function getV1beta1NameOccurrencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['occurrences']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameOccurrencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].occurrences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1NameOccurrences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['occurrences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['occurrences']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['occurrences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['occurrences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1NameOccurrencesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['occurrences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameOccurrencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameOccurrencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].occurrences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ParentNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/notes', toValue(args)] as const
}

export function getV1beta1ParentNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent']['notes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['notes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['notes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentNotesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentNotesMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/notes', 'POST'] as const
}

export function getPostV1beta1ParentNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['notes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentNotesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$post']>) {
      return parseResponse(client.v1beta1[':parent'].notes.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['notes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentNotesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1ParentNotesBatchCreateMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/notes:batchCreate', 'POST'] as const
}

export function getPostV1beta1ParentNotesBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['notes:batchCreate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['notes:batchCreate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentNotesBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['notes:batchCreate']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['notes:batchCreate'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentNotesBatchCreate<
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
                  ReturnType<(typeof client.v1beta1)[':parent']['notes:batchCreate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['notes:batchCreate']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentNotesBatchCreateMutationOptions<
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

export function getV1beta1ParentOccurrencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/occurrences', toValue(args)] as const
}

export function getV1beta1ParentOccurrencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentOccurrencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].occurrences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentOccurrences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentOccurrencesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentOccurrencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentOccurrencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].occurrences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentOccurrencesMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/occurrences', 'POST'] as const
}

export function getPostV1beta1ParentOccurrencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['occurrences']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentOccurrencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].occurrences.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentOccurrences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['occurrences']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentOccurrencesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1ParentOccurrencesBatchCreateMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/occurrences:batchCreate', 'POST'] as const
}

export function getPostV1beta1ParentOccurrencesBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':parent']['occurrences:batchCreate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences:batchCreate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentOccurrencesBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1)[':parent']['occurrences:batchCreate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1[':parent']['occurrences:batchCreate'].$post(args, options),
      )
    },
  })
}

export function usePostV1beta1ParentOccurrencesBatchCreate<
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
                  ReturnType<(typeof client.v1beta1)[':parent']['occurrences:batchCreate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['occurrences:batchCreate']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentOccurrencesBatchCreateMutationOptions<
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

export function getV1beta1ParentOccurrencesVulnerabilitySummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/occurrences:vulnerabilitySummary', toValue(args)] as const
}

export function getV1beta1ParentOccurrencesVulnerabilitySummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentOccurrencesVulnerabilitySummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent']['occurrences:vulnerabilitySummary'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentOccurrencesVulnerabilitySummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']>
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
                    (typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']
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
                    (typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentOccurrencesVulnerabilitySummaryQueryKey>
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
              (typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentOccurrencesVulnerabilitySummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentOccurrencesVulnerabilitySummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent']['occurrences:vulnerabilitySummary'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ResourceGetIamPolicyMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:getIamPolicy', 'POST'] as const
}

export function getPostV1beta1ResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceGetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceGetIamPolicy<
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
                Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV1beta1ResourceGetIamPolicyMutationOptions<
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

export function getPostV1beta1ResourceSetIamPolicyMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1beta1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceSetIamPolicy<
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
                Awaited<ReturnType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV1beta1ResourceSetIamPolicyMutationOptions<
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

export function getPostV1beta1ResourceTestIamPermissionsMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1beta1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceTestIamPermissions<
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
                  ReturnType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostV1beta1ResourceTestIamPermissionsMutationOptions<
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
