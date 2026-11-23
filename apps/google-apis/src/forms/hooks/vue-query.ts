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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1FormsMutationKey() {
  return ['v1', '/v1/forms', 'POST'] as const
}

export function getPostV1FormsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.forms.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.forms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FormsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.forms.$post>) {
      return parseResponse(client.v1.forms.$post(args, options))
    },
  })
}

export function usePostV1Forms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.forms.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.forms.$post>,
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
  const mutationDefaults = getPostV1FormsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FormsFormIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.forms)[':formId']['$get']>>,
) {
  return ['v1', '/v1/forms/:formId', toValue(args)] as const
}

export function getV1FormsFormIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.forms)[':formId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FormsFormIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.forms[':formId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FormsFormId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.forms)[':formId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
            >
          >,
          ReturnType<typeof getV1FormsFormIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FormsFormIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FormsFormIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.forms[':formId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FormsFormIdResponsesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.forms)[':formId']['responses']['$get']>
  >,
) {
  return ['v1', '/v1/forms/:formId/responses', toValue(args)] as const
}

export function getV1FormsFormIdResponsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.forms)[':formId']['responses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FormsFormIdResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.forms[':formId'].responses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FormsFormIdResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.forms)[':formId']['responses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FormsFormIdResponsesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FormsFormIdResponsesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FormsFormIdResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.forms[':formId'].responses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FormsFormIdResponsesResponseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>
  >,
) {
  return ['v1', '/v1/forms/:formId/responses/:responseId', toValue(args)] as const
}

export function getV1FormsFormIdResponsesResponseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FormsFormIdResponsesResponseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.forms[':formId'].responses[':responseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FormsFormIdResponsesResponseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>
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
                    (typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']
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
                    (typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FormsFormIdResponsesResponseIdQueryKey>
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
            ReturnType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FormsFormIdResponsesResponseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FormsFormIdResponsesResponseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.forms[':formId'].responses[':responseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FormsFormIdWatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$get']>>,
) {
  return ['v1', '/v1/forms/:formId/watches', toValue(args)] as const
}

export function getV1FormsFormIdWatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FormsFormIdWatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.forms[':formId'].watches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FormsFormIdWatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FormsFormIdWatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FormsFormIdWatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FormsFormIdWatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.forms[':formId'].watches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FormsFormIdWatchesMutationKey() {
  return ['v1', '/v1/forms/:formId/watches', 'POST'] as const
}

export function getPostV1FormsFormIdWatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FormsFormIdWatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$post']>,
    ) {
      return parseResponse(client.v1.forms[':formId'].watches.$post(args, options))
    },
  })
}

export function usePostV1FormsFormIdWatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$post']>,
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
  const mutationDefaults = getPostV1FormsFormIdWatchesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1FormsFormIdWatchesWatchIdMutationKey() {
  return ['v1', '/v1/forms/:formId/watches/:watchId', 'DELETE'] as const
}

export function getDeleteV1FormsFormIdWatchesWatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches'][':watchId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.forms)[':formId']['watches'][':watchId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FormsFormIdWatchesWatchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.forms)[':formId']['watches'][':watchId']['$delete']>,
    ) {
      return parseResponse(client.v1.forms[':formId'].watches[':watchId'].$delete(args, options))
    },
  })
}

export function useDeleteV1FormsFormIdWatchesWatchId<
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
                  ReturnType<(typeof client.v1.forms)[':formId']['watches'][':watchId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.forms)[':formId']['watches'][':watchId']['$delete']>,
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
  const mutationDefaults = getDeleteV1FormsFormIdWatchesWatchIdMutationOptions<
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

export function getPostV1FormsFormIdWatchesWatchIdRenewMutationKey() {
  return ['v1', '/v1/forms/:formId/watches/:watchId:renew', 'POST'] as const
}

export function getPostV1FormsFormIdWatchesWatchIdRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.forms)[':formId']['watches'][':watchId:renew']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.forms)[':formId']['watches'][':watchId:renew']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FormsFormIdWatchesWatchIdRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.forms)[':formId']['watches'][':watchId:renew']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.forms[':formId'].watches[':watchId:renew'].$post(args, options),
      )
    },
  })
}

export function usePostV1FormsFormIdWatchesWatchIdRenew<
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
                    (typeof client.v1.forms)[':formId']['watches'][':watchId:renew']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.forms)[':formId']['watches'][':watchId:renew']['$post']
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
  const mutationDefaults = getPostV1FormsFormIdWatchesWatchIdRenewMutationOptions<
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

export function getPostV1FormsFormIdBatchUpdateMutationKey() {
  return ['v1', '/v1/forms/:formId:batchUpdate', 'POST'] as const
}

export function getPostV1FormsFormIdBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.forms)[':formId:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.forms)[':formId:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FormsFormIdBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.forms)[':formId:batchUpdate']['$post']>,
    ) {
      return parseResponse(client.v1.forms[':formId:batchUpdate'].$post(args, options))
    },
  })
}

export function usePostV1FormsFormIdBatchUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.forms)[':formId:batchUpdate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.forms)[':formId:batchUpdate']['$post']>,
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
  const mutationDefaults = getPostV1FormsFormIdBatchUpdateMutationOptions<TError, TOnMutateResult>(
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
