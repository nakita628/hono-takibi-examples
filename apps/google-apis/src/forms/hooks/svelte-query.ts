import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostV1Forms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.forms.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.forms.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FormsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FormsFormIdQueryKey(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['$get']>,
) {
  return ['v1', '/v1/forms/:formId', args] as const
}

export function getV1FormsFormIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FormsFormIdQueryKey>
  >({
    queryKey: getV1FormsFormIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.forms[':formId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FormsFormId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.forms)[':formId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.forms)[':formId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FormsFormIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FormsFormIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1FormsFormIdResponsesQueryKey(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['responses']['$get']>,
) {
  return ['v1', '/v1/forms/:formId/responses', args] as const
}

export function getV1FormsFormIdResponsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FormsFormIdResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.forms[':formId'].responses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FormsFormIdResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.forms)[':formId']['responses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FormsFormIdResponsesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FormsFormIdResponsesResponseIdQueryKey(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>,
) {
  return ['v1', '/v1/forms/:formId/responses/:responseId', args] as const
}

export function getV1FormsFormIdResponsesResponseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FormsFormIdResponsesResponseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.forms[':formId'].responses[':responseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FormsFormIdResponsesResponseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FormsFormIdResponsesResponseIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FormsFormIdWatchesQueryKey(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$get']>,
) {
  return ['v1', '/v1/forms/:formId/watches', args] as const
}

export function getV1FormsFormIdWatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FormsFormIdWatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.forms[':formId'].watches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FormsFormIdWatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.forms)[':formId']['watches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FormsFormIdWatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1FormsFormIdWatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FormsFormIdWatchesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1FormsFormIdWatchesWatchId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1FormsFormIdWatchesWatchIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1FormsFormIdWatchesWatchIdRenew<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.forms)[':formId']['watches'][':watchId:renew']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FormsFormIdWatchesWatchIdRenewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1FormsFormIdBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FormsFormIdBatchUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
