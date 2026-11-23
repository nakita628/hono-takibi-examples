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

export function getV2Key() {
  return ['v2'] as const
}

export function getV1AccountHoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.account_holders.$get>>,
) {
  return ['v1', '/v1/account_holders', toValue(args)] as const
}

export function getV1AccountHoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.account_holders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountHoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.account_holders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.account_holders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>
            >
          >,
          ReturnType<typeof getV1AccountHoldersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountHoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountHoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.account_holders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AccountHoldersMutationKey() {
  return ['v1', '/v1/account_holders', 'POST'] as const
}

export function getPostV1AccountHoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.account_holders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountHoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.account_holders.$post>) {
      return parseResponse(client.v1.account_holders.$post(args, options))
    },
  })
}

export function usePostV1AccountHolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.account_holders.$post>,
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
  const mutationDefaults = getPostV1AccountHoldersMutationOptions<TError, TOnMutateResult>(
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

export function getV1AccountHoldersAccountHolderTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>
  >,
) {
  return ['v1', '/v1/account_holders/:account_holder_token', toValue(args)] as const
}

export function getV1AccountHoldersAccountHolderTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountHoldersAccountHolderTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountHoldersAccountHolderToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>
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
                  ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountHoldersAccountHolderTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountHoldersAccountHolderTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountHoldersAccountHolderTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.account_holders[':account_holder_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1AccountHoldersAccountHolderTokenMutationKey() {
  return ['v1', '/v1/account_holders/:account_holder_token', 'PATCH'] as const
}

export function getPatchV1AccountHoldersAccountHolderTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AccountHoldersAccountHolderTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>,
    ) {
      return parseResponse(client.v1.account_holders[':account_holder_token'].$patch(args, options))
    },
  })
}

export function usePatchV1AccountHoldersAccountHolderToken<
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
                  ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>,
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
  const mutationDefaults = getPatchV1AccountHoldersAccountHolderTokenMutationOptions<
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

export function getV1AccountHoldersAccountHolderTokenDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
    >
  >,
) {
  return ['v1', '/v1/account_holders/:account_holder_token/documents', toValue(args)] as const
}

export function getV1AccountHoldersAccountHolderTokenDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountHoldersAccountHolderTokenDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountHoldersAccountHolderTokenDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
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
                    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
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
                    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountHoldersAccountHolderTokenDocumentsQueryKey>
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
              (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountHoldersAccountHolderTokenDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountHoldersAccountHolderTokenDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.account_holders[':account_holder_token'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AccountHoldersAccountHolderTokenDocumentsMutationKey() {
  return ['v1', '/v1/account_holders/:account_holder_token/documents', 'POST'] as const
}

export function getPostV1AccountHoldersAccountHolderTokenDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountHoldersAccountHolderTokenDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].documents.$post(args, options),
      )
    },
  })
}

export function usePostV1AccountHoldersAccountHolderTokenDocuments<
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
                    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
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
  const mutationDefaults = getPostV1AccountHoldersAccountHolderTokenDocumentsMutationOptions<
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

export function getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/account_holders/:account_holder_token/documents/:document_token',
    toValue(args),
  ] as const
}

export function getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].documents[':document_token'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AccountHoldersAccountHolderTokenDocumentsDocumentToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
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
                    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
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
                    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryKey>
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
              (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.account_holders[':account_holder_token'].documents[':document_token'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AccountHoldersAccountHolderTokenEntitiesMutationKey() {
  return ['v1', '/v1/account_holders/:account_holder_token/entities', 'POST'] as const
}

export function getPostV1AccountHoldersAccountHolderTokenEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountHoldersAccountHolderTokenEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].entities.$post(args, options),
      )
    },
  })
}

export function usePostV1AccountHoldersAccountHolderTokenEntities<
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
                    (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
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
  const mutationDefaults = getPostV1AccountHoldersAccountHolderTokenEntitiesMutationOptions<
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

export function getDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenMutationKey() {
  return [
    'v1',
    '/v1/account_holders/:account_holder_token/entities/:entity_token',
    'DELETE',
  ] as const
}

export function getDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].entities[':entity_token'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityToken<
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
                    (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
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
  const mutationDefaults =
    getDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenMutationOptions<
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

export function getV1AccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
) {
  return ['v1', '/v1/accounts', toValue(args)] as const
}

export function getV1AccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          ReturnType<typeof getV1AccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>>,
) {
  return ['v1', '/v1/accounts/:account_token', toValue(args)] as const
}

export function getV1AccountsAccountTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1AccountsAccountTokenMutationKey() {
  return ['v1', '/v1/accounts/:account_token', 'PATCH'] as const
}

export function getPatchV1AccountsAccountTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':account_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AccountsAccountTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$patch']>,
    ) {
      return parseResponse(client.v1.accounts[':account_token'].$patch(args, options))
    },
  })
}

export function usePatchV1AccountsAccountToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.accounts)[':account_token']['$patch']>,
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
  const mutationDefaults = getPatchV1AccountsAccountTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV1AccountsAccountTokenSpendLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_token/spend_limits', toValue(args)] as const
}

export function getV1AccountsAccountTokenSpendLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountTokenSpendLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_token'].spend_limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountTokenSpendLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
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
                  ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountTokenSpendLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountTokenSpendLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountTokenSpendLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_token'].spend_limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AuthRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.auth_rules.$get>>,
) {
  return ['v2', '/v2/auth_rules', toValue(args)] as const
}

export function getV2AuthRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.auth_rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AuthRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AuthRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.auth_rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
          >,
          ReturnType<typeof getV2AuthRulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AuthRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AuthRulesMutationKey() {
  return ['v2', '/v2/auth_rules', 'POST'] as const
}

export function getPostV2AuthRulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.auth_rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AuthRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.auth_rules.$post>) {
      return parseResponse(client.v2.auth_rules.$post(args, options))
    },
  })
}

export function usePostV2AuthRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.auth_rules.$post>,
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
  const mutationDefaults = getPostV2AuthRulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2AuthRulesAuthRuleTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>
  >,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token', toValue(args)] as const
}

export function getV2AuthRulesAuthRuleTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AuthRulesAuthRuleTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AuthRulesAuthRuleToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AuthRulesAuthRuleTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesAuthRuleTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AuthRulesAuthRuleTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules[':auth_rule_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AuthRulesAuthRuleTokenMutationKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token', 'DELETE'] as const
}

export function getDeleteV2AuthRulesAuthRuleTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AuthRulesAuthRuleTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>,
    ) {
      return parseResponse(client.v2.auth_rules[':auth_rule_token'].$delete(args, options))
    },
  })
}

export function useDeleteV2AuthRulesAuthRuleToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>,
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
  const mutationDefaults = getDeleteV2AuthRulesAuthRuleTokenMutationOptions<
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

export function getPatchV2AuthRulesAuthRuleTokenMutationKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token', 'PATCH'] as const
}

export function getPatchV2AuthRulesAuthRuleTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AuthRulesAuthRuleTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>,
    ) {
      return parseResponse(client.v2.auth_rules[':auth_rule_token'].$patch(args, options))
    },
  })
}

export function usePatchV2AuthRulesAuthRuleToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>,
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
  const mutationDefaults = getPatchV2AuthRulesAuthRuleTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2AuthRulesAuthRuleTokenEntitiesMutationKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/entities', 'PATCH'] as const
}

export function getPatchV2AuthRulesAuthRuleTokenEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AuthRulesAuthRuleTokenEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']
      >,
    ) {
      return parseResponse(client.v2.auth_rules[':auth_rule_token'].entities.$patch(args, options))
    },
  })
}

export function usePatchV2AuthRulesAuthRuleTokenEntities<
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
                    (typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>,
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
  const mutationDefaults = getPatchV2AuthRulesAuthRuleTokenEntitiesMutationOptions<
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

export function getPostV2AuthRulesAuthRuleTokenDraftMutationKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/draft', 'POST'] as const
}

export function getPostV2AuthRulesAuthRuleTokenDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AuthRulesAuthRuleTokenDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>,
    ) {
      return parseResponse(client.v2.auth_rules[':auth_rule_token'].draft.$post(args, options))
    },
  })
}

export function usePostV2AuthRulesAuthRuleTokenDraft<
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
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>,
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
  const mutationDefaults = getPostV2AuthRulesAuthRuleTokenDraftMutationOptions<
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

export function getV2AuthRulesAuthRuleTokenFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
  >,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/features', toValue(args)] as const
}

export function getV2AuthRulesAuthRuleTokenFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AuthRulesAuthRuleTokenFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AuthRulesAuthRuleTokenFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
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
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AuthRulesAuthRuleTokenFeaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesAuthRuleTokenFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AuthRulesAuthRuleTokenFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules[':auth_rule_token'].features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AuthRulesAuthRuleTokenPromoteMutationKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/promote', 'POST'] as const
}

export function getPostV2AuthRulesAuthRuleTokenPromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AuthRulesAuthRuleTokenPromoteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>,
    ) {
      return parseResponse(client.v2.auth_rules[':auth_rule_token'].promote.$post(args, options))
    },
  })
}

export function usePostV2AuthRulesAuthRuleTokenPromote<
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
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>,
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
  const mutationDefaults = getPostV2AuthRulesAuthRuleTokenPromoteMutationOptions<
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

export function getV2AuthRulesAuthRuleTokenVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
  >,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/versions', toValue(args)] as const
}

export function getV2AuthRulesAuthRuleTokenVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AuthRulesAuthRuleTokenVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AuthRulesAuthRuleTokenVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
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
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AuthRulesAuthRuleTokenVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesAuthRuleTokenVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AuthRulesAuthRuleTokenVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules[':auth_rule_token'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AuthRulesAuthRuleTokenReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>
  >,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/report', toValue(args)] as const
}

export function getV2AuthRulesAuthRuleTokenReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AuthRulesAuthRuleTokenReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AuthRulesAuthRuleTokenReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>
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
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AuthRulesAuthRuleTokenReportQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesAuthRuleTokenReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AuthRulesAuthRuleTokenReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules[':auth_rule_token'].report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AuthRulesAuthRuleTokenBacktestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
  >,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/backtests', toValue(args)] as const
}

export function getV2AuthRulesAuthRuleTokenBacktestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AuthRulesAuthRuleTokenBacktestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].backtests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AuthRulesAuthRuleTokenBacktests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
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
                  ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AuthRulesAuthRuleTokenBacktestsQueryKey>
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
            ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesAuthRuleTokenBacktestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AuthRulesAuthRuleTokenBacktestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules[':auth_rule_token'].backtests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AuthRulesAuthRuleTokenBacktestsMutationKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/backtests', 'POST'] as const
}

export function getPostV2AuthRulesAuthRuleTokenBacktestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AuthRulesAuthRuleTokenBacktestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']
      >,
    ) {
      return parseResponse(client.v2.auth_rules[':auth_rule_token'].backtests.$post(args, options))
    },
  })
}

export function usePostV2AuthRulesAuthRuleTokenBacktests<
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
                    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>,
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
  const mutationDefaults = getPostV2AuthRulesAuthRuleTokenBacktestsMutationOptions<
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

export function getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/auth_rules/:auth_rule_token/backtests/:auth_rule_backtest_token',
    toValue(args),
  ] as const
}

export function getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].backtests[':auth_rule_backtest_token'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
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
                    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
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
                    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryKey>
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
              (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules[':auth_rule_token'].backtests[':auth_rule_backtest_token'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2AuthRulesResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.auth_rules.results.$get>>,
) {
  return ['v2', '/v2/auth_rules/results', toValue(args)] as const
}

export function getV2AuthRulesResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.auth_rules.results.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AuthRulesResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.auth_rules.results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AuthRulesResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.auth_rules.results.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
            >
          >,
          ReturnType<typeof getV2AuthRulesResultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AuthRulesResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.auth_rules.results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CardsCardTokenSignalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>
  >,
) {
  return ['v1', '/v1/cards/:card_token/signals', toValue(args)] as const
}

export function getV1CardsCardTokenSignalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardsCardTokenSignalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards[':card_token'].signals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardsCardTokenSignals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CardsCardTokenSignalsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardTokenSignalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardsCardTokenSignalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards[':card_token'].signals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountTokenSignalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_token/signals', toValue(args)] as const
}

export function getV1AccountsAccountTokenSignalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountTokenSignalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_token'].signals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountTokenSignals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>
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
                  ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountTokenSignalsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountTokenSignalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountTokenSignalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_token'].signals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AuthStreamSecretQueryKey() {
  return ['v1', '/v1/auth_stream/secret'] as const
}

export function getV1AuthStreamSecretQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AuthStreamSecretQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.auth_stream.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AuthStreamSecret<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
            >
          >,
          ReturnType<typeof getV1AuthStreamSecretQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AuthStreamSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AuthStreamSecretQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.auth_stream.secret.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AuthStreamSecretRotateMutationKey() {
  return ['v1', '/v1/auth_stream/secret/rotate', 'POST'] as const
}

export function getPostV1AuthStreamSecretRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.auth_stream.secret.rotate.$post>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthStreamSecretRotateMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.auth_stream.secret.rotate.$post(undefined, options))
    },
  })
}

export function usePostV1AuthStreamSecretRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.auth_stream.secret.rotate.$post>>
                >
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostV1AuthStreamSecretRotateMutationOptions<TError, TOnMutateResult>(
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

export function getV1BalancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.balances.$get>>,
) {
  return ['v1', '/v1/balances', toValue(args)] as const
}

export function getV1BalancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.balances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.balances.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Balances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.balances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
          >,
          ReturnType<typeof getV1BalancesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CardProgramsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.card_programs.$get>>,
) {
  return ['v1', '/v1/card_programs', toValue(args)] as const
}

export function getV1CardProgramsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.card_programs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardProgramsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.card_programs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.card_programs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>
            >
          >,
          ReturnType<typeof getV1CardProgramsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardProgramsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardProgramsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.card_programs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CardProgramsCardProgramTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>
  >,
) {
  return ['v1', '/v1/card_programs/:card_program_token', toValue(args)] as const
}

export function getV1CardProgramsCardProgramTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardProgramsCardProgramTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.card_programs[':card_program_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardProgramsCardProgramToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CardProgramsCardProgramTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardProgramsCardProgramTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardProgramsCardProgramTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.card_programs[':card_program_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cards.$get>>,
) {
  return ['v1', '/v1/cards', toValue(args)] as const
}

export function getV1CardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Cards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
          >,
          ReturnType<typeof getV1CardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CardsMutationKey() {
  return ['v1', '/v1/cards', 'POST'] as const
}

export function getPostV1CardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cards.$post>) {
      return parseResponse(client.v1.cards.$post(args, options))
    },
  })
}

export function usePostV1Cards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.cards.$post>,
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
  const mutationDefaults = getPostV1CardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1CardsSearchByPanMutationKey() {
  return ['v1', '/v1/cards/search_by_pan', 'POST'] as const
}

export function getPostV1CardsSearchByPanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.search_by_pan.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.cards.search_by_pan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsSearchByPanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cards.search_by_pan.$post>) {
      return parseResponse(client.v1.cards.search_by_pan.$post(args, options))
    },
  })
}

export function usePostV1CardsSearchByPan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.search_by_pan.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.cards.search_by_pan.$post>,
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
  const mutationDefaults = getPostV1CardsSearchByPanMutationOptions<TError, TOnMutateResult>(
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

export function getV1CardsCardTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>>,
) {
  return ['v1', '/v1/cards/:card_token', toValue(args)] as const
}

export function getV1CardsCardTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardsCardTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards[':card_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardsCardToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CardsCardTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardsCardTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards[':card_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1CardsCardTokenMutationKey() {
  return ['v1', '/v1/cards/:card_token', 'PATCH'] as const
}

export function getPatchV1CardsCardTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CardsCardTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.cards)[':card_token']['$patch']>) {
      return parseResponse(client.v1.cards[':card_token'].$patch(args, options))
    },
  })
}

export function usePatchV1CardsCardToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['$patch']>,
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
  const mutationDefaults = getPatchV1CardsCardTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV1CardsCardTokenBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>
  >,
) {
  return ['v1', '/v1/cards/:card_token/balances', toValue(args)] as const
}

export function getV1CardsCardTokenBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardsCardTokenBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards[':card_token'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardsCardTokenBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CardsCardTokenBalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardTokenBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardsCardTokenBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards[':card_token'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CardsCardTokenFinancialTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
  >,
) {
  return ['v1', '/v1/cards/:card_token/financial_transactions', toValue(args)] as const
}

export function getV1CardsCardTokenFinancialTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardsCardTokenFinancialTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards[':card_token'].financial_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardsCardTokenFinancialTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
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
                    (typeof client.v1.cards)[':card_token']['financial_transactions']['$get']
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
                    (typeof client.v1.cards)[':card_token']['financial_transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CardsCardTokenFinancialTransactionsQueryKey>
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
            ReturnType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardTokenFinancialTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardsCardTokenFinancialTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards[':card_token'].financial_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/cards/:card_token/financial_transactions/:financial_transaction_token',
    toValue(args),
  ] as const
}

export function getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards[':card_token'].financial_transactions[':financial_transaction_token'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1CardsCardTokenFinancialTransactionsFinancialTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
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
                    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
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
                    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryKey
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
              (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards[':card_token'].financial_transactions[
            ':financial_transaction_token'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CardsCardTokenProvisionMutationKey() {
  return ['v1', '/v1/cards/:card_token/provision', 'POST'] as const
}

export function getPostV1CardsCardTokenProvisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['provision']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['provision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenProvisionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['provision']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].provision.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenProvision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['provision']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['provision']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenProvisionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CardsCardTokenWebProvisionMutationKey() {
  return ['v1', '/v1/cards/:card_token/web_provision', 'POST'] as const
}

export function getPostV1CardsCardTokenWebProvisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenWebProvisionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].web_provision.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenWebProvision<
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
                  ReturnType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenWebProvisionMutationOptions<
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

export function getPostV1CardsCardTokenReissueMutationKey() {
  return ['v1', '/v1/cards/:card_token/reissue', 'POST'] as const
}

export function getPostV1CardsCardTokenReissueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenReissueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].reissue.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenReissue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenReissueMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CardsCardTokenRenewMutationKey() {
  return ['v1', '/v1/cards/:card_token/renew', 'POST'] as const
}

export function getPostV1CardsCardTokenRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['renew']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['renew']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['renew']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].renew.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['renew']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['renew']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenRenewMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CardsCardTokenReassignAccountMutationKey() {
  return ['v1', '/v1/cards/:card_token/reassign_account', 'POST'] as const
}

export function getPostV1CardsCardTokenReassignAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenReassignAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].reassign_account.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenReassignAccount<
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
                  ReturnType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenReassignAccountMutationOptions<
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

export function getPostV1CardsCardTokenConvertPhysicalMutationKey() {
  return ['v1', '/v1/cards/:card_token/convert_physical', 'POST'] as const
}

export function getPostV1CardsCardTokenConvertPhysicalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenConvertPhysicalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].convert_physical.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenConvertPhysical<
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
                  ReturnType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenConvertPhysicalMutationOptions<
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

export function getV1CardsCardTokenSpendLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>
  >,
) {
  return ['v1', '/v1/cards/:card_token/spend_limits', toValue(args)] as const
}

export function getV1CardsCardTokenSpendLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardsCardTokenSpendLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards[':card_token'].spend_limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardsCardTokenSpendLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CardsCardTokenSpendLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardTokenSpendLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardsCardTokenSpendLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards[':card_token'].spend_limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CardsCardTokenEmbedMutationKey() {
  return ['v1', '/v1/cards/:card_token/embed', 'POST'] as const
}

export function getPostV1CardsCardTokenEmbedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['embed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['embed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenEmbedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['embed']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].embed.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenEmbed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['embed']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['embed']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenEmbedMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CardAuthorizationsEventTokenChallengeResponseMutationKey() {
  return ['v1', '/v1/card_authorizations/:event_token/challenge_response', 'POST'] as const
}

export function getPostV1CardAuthorizationsEventTokenChallengeResponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardAuthorizationsEventTokenChallengeResponseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.card_authorizations[':event_token'].challenge_response.$post(args, options),
      )
    },
  })
}

export function usePostV1CardAuthorizationsEventTokenChallengeResponse<
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
                    (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
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
  const mutationDefaults = getPostV1CardAuthorizationsEventTokenChallengeResponseMutationOptions<
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

export function getV1CardBulkOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.card_bulk_orders.$get>>,
) {
  return ['v1', '/v1/card_bulk_orders', toValue(args)] as const
}

export function getV1CardBulkOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.card_bulk_orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardBulkOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.card_bulk_orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardBulkOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.card_bulk_orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>
            >
          >,
          ReturnType<typeof getV1CardBulkOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardBulkOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardBulkOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.card_bulk_orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CardBulkOrdersMutationKey() {
  return ['v1', '/v1/card_bulk_orders', 'POST'] as const
}

export function getPostV1CardBulkOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.card_bulk_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardBulkOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.card_bulk_orders.$post>) {
      return parseResponse(client.v1.card_bulk_orders.$post(args, options))
    },
  })
}

export function usePostV1CardBulkOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.card_bulk_orders.$post>,
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
  const mutationDefaults = getPostV1CardBulkOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getV1CardBulkOrdersBulkOrderTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>
  >,
) {
  return ['v1', '/v1/card_bulk_orders/:bulk_order_token', toValue(args)] as const
}

export function getV1CardBulkOrdersBulkOrderTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardBulkOrdersBulkOrderTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.card_bulk_orders[':bulk_order_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardBulkOrdersBulkOrderToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>
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
                  ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CardBulkOrdersBulkOrderTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardBulkOrdersBulkOrderTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardBulkOrdersBulkOrderTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.card_bulk_orders[':bulk_order_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1CardBulkOrdersBulkOrderTokenMutationKey() {
  return ['v1', '/v1/card_bulk_orders/:bulk_order_token', 'PATCH'] as const
}

export function getPatchV1CardBulkOrdersBulkOrderTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CardBulkOrdersBulkOrderTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>,
    ) {
      return parseResponse(client.v1.card_bulk_orders[':bulk_order_token'].$patch(args, options))
    },
  })
}

export function usePatchV1CardBulkOrdersBulkOrderToken<
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
                  ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>,
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
  const mutationDefaults = getPatchV1CardBulkOrdersBulkOrderTokenMutationOptions<
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

export function getV1DigitalCardArtQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.digital_card_art.$get>>,
) {
  return ['v1', '/v1/digital_card_art', toValue(args)] as const
}

export function getV1DigitalCardArtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.digital_card_art.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DigitalCardArtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.digital_card_art.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DigitalCardArt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.digital_card_art.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>
            >
          >,
          ReturnType<typeof getV1DigitalCardArtQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DigitalCardArtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DigitalCardArtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.digital_card_art.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DigitalCardArtDigitalCardArtTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
  >,
) {
  return ['v1', '/v1/digital_card_art/:digital_card_art_token', toValue(args)] as const
}

export function getV1DigitalCardArtDigitalCardArtTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DigitalCardArtDigitalCardArtTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.digital_card_art[':digital_card_art_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DigitalCardArtDigitalCardArtToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
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
                  ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DigitalCardArtDigitalCardArtTokenQueryKey>
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
            ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DigitalCardArtDigitalCardArtTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DigitalCardArtDigitalCardArtTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.digital_card_art[':digital_card_art_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DisputesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.disputes.$get>>,
) {
  return ['v1', '/v1/disputes', toValue(args)] as const
}

export function getV1DisputesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.disputes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DisputesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.disputes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Disputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.disputes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
          >,
          ReturnType<typeof getV1DisputesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DisputesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DisputesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.disputes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DisputesMutationKey() {
  return ['v1', '/v1/disputes', 'POST'] as const
}

export function getPostV1DisputesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.disputes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DisputesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.disputes.$post>) {
      return parseResponse(client.v1.disputes.$post(args, options))
    },
  })
}

export function usePostV1Disputes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.disputes.$post>,
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
  const mutationDefaults = getPostV1DisputesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DisputesDisputeTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>>,
) {
  return ['v1', '/v1/disputes/:dispute_token', toValue(args)] as const
}

export function getV1DisputesDisputeTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DisputesDisputeTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.disputes[':dispute_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DisputesDisputeToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DisputesDisputeTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DisputesDisputeTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DisputesDisputeTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.disputes[':dispute_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1DisputesDisputeTokenMutationKey() {
  return ['v1', '/v1/disputes/:dispute_token', 'DELETE'] as const
}

export function getDeleteV1DisputesDisputeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DisputesDisputeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$delete']>,
    ) {
      return parseResponse(client.v1.disputes[':dispute_token'].$delete(args, options))
    },
  })
}

export function useDeleteV1DisputesDisputeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$delete']>,
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
  const mutationDefaults = getDeleteV1DisputesDisputeTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1DisputesDisputeTokenMutationKey() {
  return ['v1', '/v1/disputes/:dispute_token', 'PATCH'] as const
}

export function getPatchV1DisputesDisputeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DisputesDisputeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$patch']>,
    ) {
      return parseResponse(client.v1.disputes[':dispute_token'].$patch(args, options))
    },
  })
}

export function usePatchV1DisputesDisputeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$patch']>,
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
  const mutationDefaults = getPatchV1DisputesDisputeTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV1DisputesDisputeTokenEvidencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>
  >,
) {
  return ['v1', '/v1/disputes/:dispute_token/evidences', toValue(args)] as const
}

export function getV1DisputesDisputeTokenEvidencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DisputesDisputeTokenEvidencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.disputes[':dispute_token'].evidences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DisputesDisputeTokenEvidences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>
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
                  ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DisputesDisputeTokenEvidencesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DisputesDisputeTokenEvidencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DisputesDisputeTokenEvidencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.disputes[':dispute_token'].evidences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DisputesDisputeTokenEvidencesMutationKey() {
  return ['v1', '/v1/disputes/:dispute_token/evidences', 'POST'] as const
}

export function getPostV1DisputesDisputeTokenEvidencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DisputesDisputeTokenEvidencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>,
    ) {
      return parseResponse(client.v1.disputes[':dispute_token'].evidences.$post(args, options))
    },
  })
}

export function usePostV1DisputesDisputeTokenEvidences<
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
                  ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>,
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
  const mutationDefaults = getPostV1DisputesDisputeTokenEvidencesMutationOptions<
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

export function getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
    >
  >,
) {
  return ['v1', '/v1/disputes/:dispute_token/evidences/:evidence_token', toValue(args)] as const
}

export function getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DisputesDisputeTokenEvidencesEvidenceToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
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
                    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
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
                    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryKey>
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
              (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1DisputesDisputeTokenEvidencesEvidenceTokenMutationKey() {
  return ['v1', '/v1/disputes/:dispute_token/evidences/:evidence_token', 'DELETE'] as const
}

export function getDeleteV1DisputesDisputeTokenEvidencesEvidenceTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DisputesDisputeTokenEvidencesEvidenceTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1DisputesDisputeTokenEvidencesEvidenceToken<
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
                    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
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
  const mutationDefaults = getDeleteV1DisputesDisputeTokenEvidencesEvidenceTokenMutationOptions<
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

export function getV1EmbedCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.embed.card.$get>>,
) {
  return ['v1', '/v1/embed/card', toValue(args)] as const
}

export function getV1EmbedCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.embed.card.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmbedCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.embed.card.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmbedCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.embed.card.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
          >,
          ReturnType<typeof getV1EmbedCardQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmbedCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmbedCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.embed.card.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmbedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.embed.$get>>,
) {
  return ['v1', '/v1/embed', toValue(args)] as const
}

export function getV1EmbedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.embed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmbedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.embed.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Embed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.embed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>
          >,
          ReturnType<typeof getV1EmbedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EmbedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmbedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.embed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FraudTransactionsTransactionTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>
  >,
) {
  return ['v1', '/v1/fraud/transactions/:transaction_token', toValue(args)] as const
}

export function getV1FraudTransactionsTransactionTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FraudTransactionsTransactionTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.fraud.transactions[':transaction_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FraudTransactionsTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>
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
                  ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1FraudTransactionsTransactionTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FraudTransactionsTransactionTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FraudTransactionsTransactionTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.fraud.transactions[':transaction_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FraudTransactionsTransactionTokenMutationKey() {
  return ['v1', '/v1/fraud/transactions/:transaction_token', 'POST'] as const
}

export function getPostV1FraudTransactionsTransactionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FraudTransactionsTransactionTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>,
    ) {
      return parseResponse(client.v1.fraud.transactions[':transaction_token'].$post(args, options))
    },
  })
}

export function usePostV1FraudTransactionsTransactionToken<
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
                  ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>,
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
  const mutationDefaults = getPostV1FraudTransactionsTransactionTokenMutationOptions<
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

export function getV1TransactionsTransactionTokenEnhancedCommercialDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/transactions/:transaction_token/enhanced_commercial_data',
    toValue(args),
  ] as const
}

export function getV1TransactionsTransactionTokenEnhancedCommercialDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsTransactionTokenEnhancedCommercialDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions[':transaction_token'].enhanced_commercial_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionsTransactionTokenEnhancedCommercialData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
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
                    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
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
                    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionsTransactionTokenEnhancedCommercialDataQueryKey>
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
              (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsTransactionTokenEnhancedCommercialDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1TransactionsTransactionTokenEnhancedCommercialDataQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions[':transaction_token'].enhanced_commercial_data.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TransactionsTransactionTokenExpireAuthorizationMutationKey() {
  return ['v1', '/v1/transactions/:transaction_token/expire_authorization', 'POST'] as const
}

export function getPostV1TransactionsTransactionTokenExpireAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TransactionsTransactionTokenExpireAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.transactions[':transaction_token'].expire_authorization.$post(args, options),
      )
    },
  })
}

export function usePostV1TransactionsTransactionTokenExpireAuthorization<
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
                    (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
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
  const mutationDefaults = getPostV1TransactionsTransactionTokenExpireAuthorizationMutationOptions<
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

export function getPostV1TransactionsTransactionTokenRouteMutationKey() {
  return ['v1', '/v1/transactions/:transaction_token/route', 'POST'] as const
}

export function getPostV1TransactionsTransactionTokenRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TransactionsTransactionTokenRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transactions)[':transaction_token']['route']['$post']
      >,
    ) {
      return parseResponse(client.v1.transactions[':transaction_token'].route.$post(args, options))
    },
  })
}

export function usePostV1TransactionsTransactionTokenRoute<
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
                    (typeof client.v1.transactions)[':transaction_token']['route']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>,
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
  const mutationDefaults = getPostV1TransactionsTransactionTokenRouteMutationOptions<
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

export function getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/transactions/events/:event_token/enhanced_commercial_data',
    toValue(args),
  ] as const
}

export function getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions.events[':event_token'].enhanced_commercial_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionsEventsEventTokenEnhancedCommercialData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
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
                    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
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
                    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryKey>
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
              (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions.events[':event_token'].enhanced_commercial_data.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.event_subscriptions.$get>>,
) {
  return ['v1', '/v1/event_subscriptions', toValue(args)] as const
}

export function getV1EventSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.event_subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.event_subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.event_subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getV1EventSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.event_subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EventSubscriptionsMutationKey() {
  return ['v1', '/v1/event_subscriptions', 'POST'] as const
}

export function getPostV1EventSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.event_subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.event_subscriptions.$post>) {
      return parseResponse(client.v1.event_subscriptions.$post(args, options))
    },
  })
}

export function usePostV1EventSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.event_subscriptions.$post>,
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
  const mutationDefaults = getPostV1EventSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1EventSubscriptionsEventSubscriptionTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']>
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token', toValue(args)] as const
}

export function getV1EventSubscriptionsEventSubscriptionTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventSubscriptionsEventSubscriptionTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventSubscriptionsEventSubscriptionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']>
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EventSubscriptionsEventSubscriptionTokenQueryKey>
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
            ReturnType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventSubscriptionsEventSubscriptionTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventSubscriptionsEventSubscriptionTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1EventSubscriptionsEventSubscriptionTokenMutationKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token', 'DELETE'] as const
}

export function getDeleteV1EventSubscriptionsEventSubscriptionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EventSubscriptionsEventSubscriptionTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1EventSubscriptionsEventSubscriptionToken<
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
                    ReturnType<
                      (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
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
  const mutationDefaults = getDeleteV1EventSubscriptionsEventSubscriptionTokenMutationOptions<
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

export function getPatchV1EventSubscriptionsEventSubscriptionTokenMutationKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token', 'PATCH'] as const
}

export function getPatchV1EventSubscriptionsEventSubscriptionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1EventSubscriptionsEventSubscriptionTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1EventSubscriptionsEventSubscriptionToken<
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']
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
  const mutationDefaults = getPatchV1EventSubscriptionsEventSubscriptionTokenMutationOptions<
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

export function getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/event_subscriptions/:event_subscription_token/attempts',
    toValue(args),
  ] as const
}

export function getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].attempts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventSubscriptionsEventSubscriptionTokenAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryKey>
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
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].attempts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenRecoverMutationKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/recover', 'POST'] as const
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventSubscriptionsEventSubscriptionTokenRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].recover.$post(args, options),
      )
    },
  })
}

export function usePostV1EventSubscriptionsEventSubscriptionTokenRecover<
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
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
  const mutationDefaults = getPostV1EventSubscriptionsEventSubscriptionTokenRecoverMutationOptions<
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

export function getPostV1EventSubscriptionsEventSubscriptionTokenReplayMissingMutationKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/replay_missing', 'POST'] as const
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenReplayMissingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventSubscriptionsEventSubscriptionTokenReplayMissingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].replay_missing.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1EventSubscriptionsEventSubscriptionTokenReplayMissing<
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
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
  const mutationDefaults =
    getPostV1EventSubscriptionsEventSubscriptionTokenReplayMissingMutationOptions<
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

export function getV1EventSubscriptionsEventSubscriptionTokenSecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
    >
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/secret', toValue(args)] as const
}

export function getV1EventSubscriptionsEventSubscriptionTokenSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventSubscriptionsEventSubscriptionTokenSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].secret.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventSubscriptionsEventSubscriptionTokenSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
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
                    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EventSubscriptionsEventSubscriptionTokenSecretQueryKey>
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
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventSubscriptionsEventSubscriptionTokenSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventSubscriptionsEventSubscriptionTokenSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].secret.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenSecretRotateMutationKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/secret/rotate', 'POST'] as const
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenSecretRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventSubscriptionsEventSubscriptionTokenSecretRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].secret.rotate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1EventSubscriptionsEventSubscriptionTokenSecretRotate<
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
                    ReturnType<
                      (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
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
  const mutationDefaults =
    getPostV1EventSubscriptionsEventSubscriptionTokenSecretRotateMutationOptions<
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

export function getV1EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.$get>>,
) {
  return ['v1', '/v1/events', toValue(args)] as const
}

export function getV1EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
          >,
          ReturnType<typeof getV1EventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsEventTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.events)[':event_token']['$get']>>,
) {
  return ['v1', '/v1/events/:event_token', toValue(args)] as const
}

export function getV1EventsEventTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.events)[':event_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsEventTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events[':event_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsEventToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.events)[':event_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EventsEventTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsEventTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsEventTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events[':event_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsEventTokenAttemptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>
  >,
) {
  return ['v1', '/v1/events/:event_token/attempts', toValue(args)] as const
}

export function getV1EventsEventTokenAttemptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsEventTokenAttemptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events[':event_token'].attempts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsEventTokenAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EventsEventTokenAttemptsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsEventTokenAttemptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsEventTokenAttemptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events[':event_token'].attempts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendMutationKey() {
  return [
    'v1',
    '/v1/events/:event_token/event_subscriptions/:event_subscription_token/resend',
    'POST',
  ] as const
}

export function getPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.events[':event_token'].event_subscriptions[
          ':event_subscription_token'
        ].resend.$post(args, options),
      )
    },
  })
}

export function usePostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResend<
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
                    (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
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
  const mutationDefaults =
    getPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendMutationOptions<
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

export function getPostV1BlockchainRecipientsMutationKey() {
  return ['v1', '/v1/blockchain_recipients', 'POST'] as const
}

export function getPostV1BlockchainRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.blockchain_recipients.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.blockchain_recipients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BlockchainRecipientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.blockchain_recipients.$post>) {
      return parseResponse(client.v1.blockchain_recipients.$post(args, options))
    },
  })
}

export function usePostV1BlockchainRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.blockchain_recipients.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.blockchain_recipients.$post>,
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
  const mutationDefaults = getPostV1BlockchainRecipientsMutationOptions<TError, TOnMutateResult>(
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

export function getV1BlockchainRecipientsBlockchainRecipientTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
    >
  >,
) {
  return ['v1', '/v1/blockchain_recipients/:blockchain_recipient_token', toValue(args)] as const
}

export function getV1BlockchainRecipientsBlockchainRecipientTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BlockchainRecipientsBlockchainRecipientTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.blockchain_recipients[':blockchain_recipient_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BlockchainRecipientsBlockchainRecipientToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
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
                    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
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
                    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BlockchainRecipientsBlockchainRecipientTokenQueryKey>
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
              (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BlockchainRecipientsBlockchainRecipientTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BlockchainRecipientsBlockchainRecipientTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.blockchain_recipients[':blockchain_recipient_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ExternalBankAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.external_bank_accounts.$get>>,
) {
  return ['v1', '/v1/external_bank_accounts', toValue(args)] as const
}

export function getV1ExternalBankAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.external_bank_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExternalBankAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.external_bank_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExternalBankAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.external_bank_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ExternalBankAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExternalBankAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExternalBankAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.external_bank_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ExternalBankAccountsMutationKey() {
  return ['v1', '/v1/external_bank_accounts', 'POST'] as const
}

export function getPostV1ExternalBankAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.external_bank_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalBankAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.external_bank_accounts.$post>) {
      return parseResponse(client.v1.external_bank_accounts.$post(args, options))
    },
  })
}

export function usePostV1ExternalBankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.external_bank_accounts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.external_bank_accounts.$post>,
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
  const mutationDefaults = getPostV1ExternalBankAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ExternalBankAccountsExternalBankAccountTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
    >
  >,
) {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token', toValue(args)] as const
}

export function getV1ExternalBankAccountsExternalBankAccountTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExternalBankAccountsExternalBankAccountTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExternalBankAccountsExternalBankAccountToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ExternalBankAccountsExternalBankAccountTokenQueryKey>
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
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExternalBankAccountsExternalBankAccountTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExternalBankAccountsExternalBankAccountTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.external_bank_accounts[':external_bank_account_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1ExternalBankAccountsExternalBankAccountTokenMutationKey() {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token', 'PATCH'] as const
}

export function getPatchV1ExternalBankAccountsExternalBankAccountTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ExternalBankAccountsExternalBankAccountTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ExternalBankAccountsExternalBankAccountToken<
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
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
  const mutationDefaults = getPatchV1ExternalBankAccountsExternalBankAccountTokenMutationOptions<
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

export function getPostV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsMutationKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/micro_deposits',
    'POST',
  ] as const
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].micro_deposits.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenMicroDeposits<
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
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
  const mutationDefaults =
    getPostV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsMutationOptions<
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

export function getPostV1ExternalBankAccountsExternalBankAccountTokenPauseMutationKey() {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token/pause', 'POST'] as const
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalBankAccountsExternalBankAccountTokenPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].pause.$post(args, options),
      )
    },
  })
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenPause<
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
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
  const mutationDefaults =
    getPostV1ExternalBankAccountsExternalBankAccountTokenPauseMutationOptions<
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

export function getPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsMutationKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/retry_micro_deposits',
    'POST',
  ] as const
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].retry_micro_deposits.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDeposits<
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
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
  const mutationDefaults =
    getPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsMutationOptions<
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

export function getPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteMutationKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/retry_prenote',
    'POST',
  ] as const
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].retry_prenote.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenote<
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
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
  const mutationDefaults =
    getPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteMutationOptions<
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

export function getPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodMutationKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/set_verification_method',
    'POST',
  ] as const
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_bank_accounts[
          ':external_bank_account_token'
        ].set_verification_method.$post(args, options),
      )
    },
  })
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethod<
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
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
  const mutationDefaults =
    getPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodMutationOptions<
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

export function getPostV1ExternalBankAccountsExternalBankAccountTokenUnpauseMutationKey() {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token/unpause', 'POST'] as const
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalBankAccountsExternalBankAccountTokenUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].unpause.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenUnpause<
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
                    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
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
  const mutationDefaults =
    getPostV1ExternalBankAccountsExternalBankAccountTokenUnpauseMutationOptions<
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

export function getV1CreditProductsCreditProductTokenExtendedCreditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
    >
  >,
) {
  return ['v1', '/v1/credit_products/:credit_product_token/extended_credit', toValue(args)] as const
}

export function getV1CreditProductsCreditProductTokenExtendedCreditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditProductsCreditProductTokenExtendedCreditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.credit_products[':credit_product_token'].extended_credit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditProductsCreditProductTokenExtendedCredit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
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
                    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
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
                    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditProductsCreditProductTokenExtendedCreditQueryKey>
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
              (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditProductsCreditProductTokenExtendedCreditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditProductsCreditProductTokenExtendedCreditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.credit_products[':credit_product_token'].extended_credit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CreditProductsCreditProductTokenPrimeRatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
    >
  >,
) {
  return ['v1', '/v1/credit_products/:credit_product_token/prime_rates', toValue(args)] as const
}

export function getV1CreditProductsCreditProductTokenPrimeRatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CreditProductsCreditProductTokenPrimeRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.credit_products[':credit_product_token'].prime_rates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CreditProductsCreditProductTokenPrimeRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
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
                    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
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
                    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CreditProductsCreditProductTokenPrimeRatesQueryKey>
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
              (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditProductsCreditProductTokenPrimeRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CreditProductsCreditProductTokenPrimeRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.credit_products[':credit_product_token'].prime_rates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CreditProductsCreditProductTokenPrimeRatesMutationKey() {
  return ['v1', '/v1/credit_products/:credit_product_token/prime_rates', 'POST'] as const
}

export function getPostV1CreditProductsCreditProductTokenPrimeRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditProductsCreditProductTokenPrimeRatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.credit_products[':credit_product_token'].prime_rates.$post(args, options),
      )
    },
  })
}

export function usePostV1CreditProductsCreditProductTokenPrimeRates<
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
                    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
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
  const mutationDefaults = getPostV1CreditProductsCreditProductTokenPrimeRatesMutationOptions<
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

export function getV1FinancialAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.financial_accounts.$get>>,
) {
  return ['v1', '/v1/financial_accounts', toValue(args)] as const
}

export function getV1FinancialAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.financial_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinancialAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.financial_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
            >
          >,
          ReturnType<typeof getV1FinancialAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinancialAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FinancialAccountsMutationKey() {
  return ['v1', '/v1/financial_accounts', 'POST'] as const
}

export function getPostV1FinancialAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.financial_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FinancialAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.financial_accounts.$post>) {
      return parseResponse(client.v1.financial_accounts.$post(args, options))
    },
  })
}

export function usePostV1FinancialAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.financial_accounts.$post>,
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
  const mutationDefaults = getPostV1FinancialAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getV1FinancialAccountsFinancialAccountTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token', toValue(args)] as const
}

export function getV1FinancialAccountsFinancialAccountTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenQueryKey>
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
            ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1FinancialAccountsFinancialAccountTokenMutationKey() {
  return ['v1', '/v1/financial_accounts/:financial_account_token', 'PATCH'] as const
}

export function getPatchV1FinancialAccountsFinancialAccountTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1FinancialAccountsFinancialAccountTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1FinancialAccountsFinancialAccountToken<
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['$patch']
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
  const mutationDefaults = getPatchV1FinancialAccountsFinancialAccountTokenMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
    >
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/balances', toValue(args)] as const
}

export function getV1FinancialAccountsFinancialAccountTokenBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenBalancesQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/open_to_buy',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].open_to_buy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenOpenToBuy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].open_to_buy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/credit_configuration',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].credit_configuration.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenCreditConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].credit_configuration.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1FinancialAccountsFinancialAccountTokenCreditConfigurationMutationKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/credit_configuration',
    'PATCH',
  ] as const
}

export function getPatchV1FinancialAccountsFinancialAccountTokenCreditConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1FinancialAccountsFinancialAccountTokenCreditConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].credit_configuration.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1FinancialAccountsFinancialAccountTokenCreditConfiguration<
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
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
  const mutationDefaults =
    getPatchV1FinancialAccountsFinancialAccountTokenCreditConfigurationMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/financial_transactions',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].financial_transactions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenFinancialTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].financial_transactions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/financial_transactions/:financial_transaction_token',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].financial_transactions[
          ':financial_transaction_token'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].financial_transactions[
            ':financial_transaction_token'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberMutationKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/register_account_number',
    'POST',
  ] as const
}

export function getPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].register_account_number.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumber<
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
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
  const mutationDefaults =
    getPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenHoldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
    >
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/holds', toValue(args)] as const
}

export function getV1FinancialAccountsFinancialAccountTokenHoldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenHoldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].holds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenHolds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenHoldsQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenHoldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenHoldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].holds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FinancialAccountsFinancialAccountTokenHoldsMutationKey() {
  return ['v1', '/v1/financial_accounts/:financial_account_token/holds', 'POST'] as const
}

export function getPostV1FinancialAccountsFinancialAccountTokenHoldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1FinancialAccountsFinancialAccountTokenHoldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].holds.$post(args, options),
      )
    },
  })
}

export function usePostV1FinancialAccountsFinancialAccountTokenHolds<
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
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
  const mutationDefaults = getPostV1FinancialAccountsFinancialAccountTokenHoldsMutationOptions<
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

export function getV1HoldsHoldTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>>,
) {
  return ['v1', '/v1/holds/:hold_token', toValue(args)] as const
}

export function getV1HoldsHoldTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1HoldsHoldTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.holds[':hold_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1HoldsHoldToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1HoldsHoldTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HoldsHoldTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1HoldsHoldTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.holds[':hold_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1HoldsHoldTokenVoidMutationKey() {
  return ['v1', '/v1/holds/:hold_token/void', 'POST'] as const
}

export function getPostV1HoldsHoldTokenVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['void']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.holds)[':hold_token']['void']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HoldsHoldTokenVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.holds)[':hold_token']['void']['$post']>,
    ) {
      return parseResponse(client.v1.holds[':hold_token'].void.$post(args, options))
    },
  })
}

export function usePostV1HoldsHoldTokenVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['void']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.holds)[':hold_token']['void']['$post']>,
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
  const mutationDefaults = getPostV1HoldsHoldTokenVoidMutationOptions<TError, TOnMutateResult>(
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

export function getV1FinancialAccountsFinancialAccountTokenStatementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/statements',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].statements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenStatementsQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].statements[
          ':statement_token'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenStatementsStatementToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].statements[
            ':statement_token'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token/line_items',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].statements[
          ':statement_token'
        ].line_items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].statements[
            ':statement_token'
          ].line_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/loan_tapes',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].loan_tapes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenLoanTapes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].loan_tapes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/loan_tapes/:loan_tape_token',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].loan_tapes[
          ':loan_tape_token'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].loan_tapes[
            ':loan_tape_token'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/loan_tape_configuration',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].loan_tape_configuration.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenLoanTapeConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].loan_tape_configuration.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenInstallmentPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].installment_plans.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans[
          ':installment_plan_token'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans[
          ':installment_plan_token'
        ].statements.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements/:statement_token',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans[
          ':installment_plan_token'
        ].statements[':statement_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].statements[':statement_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenInterestTierSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryKey>
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FinancialAccountsFinancialAccountTokenInterestTierScheduleMutationKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule',
    'POST',
  ] as const
}

export function getPostV1FinancialAccountsFinancialAccountTokenInterestTierScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1FinancialAccountsFinancialAccountTokenInterestTierScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1FinancialAccountsFinancialAccountTokenInterestTierSchedule<
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
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
  const mutationDefaults =
    getPostV1FinancialAccountsFinancialAccountTokenInterestTierScheduleMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date',
    toValue(args),
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
          ':effective_date'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryKey
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
              (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
            ':effective_date'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date',
    'PUT',
  ] as const
}

export function getPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
          ':effective_date'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
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
  const mutationDefaults =
    getPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationOptions<
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

export function getDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date',
    'DELETE',
  ] as const
}

export function getDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
          ':effective_date'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
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
                    ReturnType<
                      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
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
  const mutationDefaults =
    getDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationOptions<
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

export function getPostV1FinancialAccountsFinancialAccountTokenUpdateStatusMutationKey() {
  return ['v1', '/v1/financial_accounts/:financial_account_token/update_status', 'POST'] as const
}

export function getPostV1FinancialAccountsFinancialAccountTokenUpdateStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1FinancialAccountsFinancialAccountTokenUpdateStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].update_status.$post(args, options),
      )
    },
  })
}

export function usePostV1FinancialAccountsFinancialAccountTokenUpdateStatus<
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
                    (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
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
  const mutationDefaults =
    getPostV1FinancialAccountsFinancialAccountTokenUpdateStatusMutationOptions<
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

export function getV1AccountActivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.account_activity.$get>>,
) {
  return ['v1', '/v1/account_activity', toValue(args)] as const
}

export function getV1AccountActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.account_activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.account_activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.account_activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>
            >
          >,
          ReturnType<typeof getV1AccountActivityQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.account_activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountActivityTransactionTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>
  >,
) {
  return ['v1', '/v1/account_activity/:transaction_token', toValue(args)] as const
}

export function getV1AccountActivityTransactionTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountActivityTransactionTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.account_activity[':transaction_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountActivityTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>
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
                  ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountActivityTransactionTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountActivityTransactionTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountActivityTransactionTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.account_activity[':transaction_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
) {
  return ['v1', '/v1/payments', toValue(args)] as const
}

export function getV1PaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
          >,
          ReturnType<typeof getV1PaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentsMutationKey() {
  return ['v1', '/v1/payments', 'POST'] as const
}

export function getPostV1PaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.payments.$post>) {
      return parseResponse(client.v1.payments.$post(args, options))
    },
  })
}

export function usePostV1Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.payments.$post>,
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
  const mutationDefaults = getPostV1PaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PaymentsStablecoinMutationKey() {
  return ['v1', '/v1/payments/stablecoin', 'POST'] as const
}

export function getPostV1PaymentsStablecoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.stablecoin.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.payments.stablecoin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsStablecoinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.payments.stablecoin.$post>) {
      return parseResponse(client.v1.payments.stablecoin.$post(args, options))
    },
  })
}

export function usePostV1PaymentsStablecoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.stablecoin.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.payments.stablecoin.$post>,
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
  const mutationDefaults = getPostV1PaymentsStablecoinMutationOptions<TError, TOnMutateResult>(
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

export function getV1PaymentsPaymentTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>>,
) {
  return ['v1', '/v1/payments/:payment_token', toValue(args)] as const
}

export function getV1PaymentsPaymentTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPaymentTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments[':payment_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPaymentToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPaymentTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPaymentTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments[':payment_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentsPaymentTokenRetryMutationKey() {
  return ['v1', '/v1/payments/:payment_token/retry', 'POST'] as const
}

export function getPostV1PaymentsPaymentTokenRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsPaymentTokenRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>,
    ) {
      return parseResponse(client.v1.payments[':payment_token'].retry.$post(args, options))
    },
  })
}

export function usePostV1PaymentsPaymentTokenRetry<
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
                Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>,
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
  const mutationDefaults = getPostV1PaymentsPaymentTokenRetryMutationOptions<
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

export function getPostV1PaymentsPaymentTokenReturnMutationKey() {
  return ['v1', '/v1/payments/:payment_token/return', 'POST'] as const
}

export function getPostV1PaymentsPaymentTokenReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['return']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':payment_token']['return']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsPaymentTokenReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':payment_token']['return']['$post']>,
    ) {
      return parseResponse(client.v1.payments[':payment_token'].return.$post(args, options))
    },
  })
}

export function usePostV1PaymentsPaymentTokenReturn<
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
                  ReturnType<(typeof client.v1.payments)[':payment_token']['return']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payments)[':payment_token']['return']['$post']>,
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
  const mutationDefaults = getPostV1PaymentsPaymentTokenReturnMutationOptions<
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

export function getV1ReportsSettlementDetailsReportDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
  >,
) {
  return ['v1', '/v1/reports/settlement/details/:report_date', toValue(args)] as const
}

export function getV1ReportsSettlementDetailsReportDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportsSettlementDetailsReportDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reports.settlement.details[':report_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportsSettlementDetailsReportDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
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
                  ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ReportsSettlementDetailsReportDateQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportsSettlementDetailsReportDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportsSettlementDetailsReportDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reports.settlement.details[':report_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReportsSettlementSummaryReportDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
  >,
) {
  return ['v1', '/v1/reports/settlement/summary/:report_date', toValue(args)] as const
}

export function getV1ReportsSettlementSummaryReportDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportsSettlementSummaryReportDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reports.settlement.summary[':report_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportsSettlementSummaryReportDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
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
                  ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ReportsSettlementSummaryReportDateQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportsSettlementSummaryReportDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportsSettlementSummaryReportDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reports.settlement.summary[':report_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReportsSettlementNetworkTotalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>>,
) {
  return ['v1', '/v1/reports/settlement/network_totals', toValue(args)] as const
}

export function getV1ReportsSettlementNetworkTotalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportsSettlementNetworkTotalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reports.settlement.network_totals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportsSettlementNetworkTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ReportsSettlementNetworkTotalsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportsSettlementNetworkTotalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportsSettlementNetworkTotalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reports.settlement.network_totals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReportsSettlementNetworkTotalsTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
  >,
) {
  return ['v1', '/v1/reports/settlement/network_totals/:token', toValue(args)] as const
}

export function getV1ReportsSettlementNetworkTotalsTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportsSettlementNetworkTotalsTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reports.settlement.network_totals[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportsSettlementNetworkTotalsToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
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
                  ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ReportsSettlementNetworkTotalsTokenQueryKey>
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
            ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportsSettlementNetworkTotalsTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportsSettlementNetworkTotalsTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reports.settlement.network_totals[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ResponderEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.responder_endpoints.$get>>,
) {
  return ['v1', '/v1/responder_endpoints', toValue(args)] as const
}

export function getV1ResponderEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.responder_endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ResponderEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.responder_endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ResponderEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.responder_endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
            >
          >,
          ReturnType<typeof getV1ResponderEndpointsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResponderEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ResponderEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.responder_endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ResponderEndpointsMutationKey() {
  return ['v1', '/v1/responder_endpoints', 'POST'] as const
}

export function getPostV1ResponderEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.responder_endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResponderEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.responder_endpoints.$post>) {
      return parseResponse(client.v1.responder_endpoints.$post(args, options))
    },
  })
}

export function usePostV1ResponderEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.responder_endpoints.$post>,
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
  const mutationDefaults = getPostV1ResponderEndpointsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ResponderEndpointsMutationKey() {
  return ['v1', '/v1/responder_endpoints', 'DELETE'] as const
}

export function getDeleteV1ResponderEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.responder_endpoints.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ResponderEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.responder_endpoints.$delete>) {
      return parseResponse(client.v1.responder_endpoints.$delete(args, options))
    },
  })
}

export function useDeleteV1ResponderEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.responder_endpoints.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.responder_endpoints.$delete>,
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
  const mutationDefaults = getDeleteV1ResponderEndpointsMutationOptions<TError, TOnMutateResult>(
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

export function getV1IpRangesQueryKey() {
  return ['v1', '/v1/ip_ranges'] as const
}

export function getV1IpRangesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1IpRangesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ip_ranges.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1IpRanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
          >,
          ReturnType<typeof getV1IpRangesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IpRangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1IpRangesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ip_ranges.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SimulateAuthorizationAdviceMutationKey() {
  return ['v1', '/v1/simulate/authorization_advice', 'POST'] as const
}

export function getPostV1SimulateAuthorizationAdviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.simulate.authorization_advice.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.authorization_advice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateAuthorizationAdviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.authorization_advice.$post>) {
      return parseResponse(client.v1.simulate.authorization_advice.$post(args, options))
    },
  })
}

export function usePostV1SimulateAuthorizationAdvice<
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
                Awaited<ReturnType<typeof client.v1.simulate.authorization_advice.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.authorization_advice.$post>,
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
  const mutationDefaults = getPostV1SimulateAuthorizationAdviceMutationOptions<
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

export function getPostV1SimulateAuthorizeMutationKey() {
  return ['v1', '/v1/simulate/authorize', 'POST'] as const
}

export function getPostV1SimulateAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.authorize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.authorize.$post>) {
      return parseResponse(client.v1.simulate.authorize.$post(args, options))
    },
  })
}

export function usePostV1SimulateAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.authorize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.authorize.$post>,
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
  const mutationDefaults = getPostV1SimulateAuthorizeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulateClearingMutationKey() {
  return ['v1', '/v1/simulate/clearing', 'POST'] as const
}

export function getPostV1SimulateClearingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.clearing.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.clearing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateClearingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.clearing.$post>) {
      return parseResponse(client.v1.simulate.clearing.$post(args, options))
    },
  })
}

export function usePostV1SimulateClearing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.clearing.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.clearing.$post>,
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
  const mutationDefaults = getPostV1SimulateClearingMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulateCreditAuthorizationAdviceMutationKey() {
  return ['v1', '/v1/simulate/credit_authorization_advice', 'POST'] as const
}

export function getPostV1SimulateCreditAuthorizationAdviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.simulate.credit_authorization_advice.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.credit_authorization_advice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateCreditAuthorizationAdviceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.simulate.credit_authorization_advice.$post>,
    ) {
      return parseResponse(client.v1.simulate.credit_authorization_advice.$post(args, options))
    },
  })
}

export function usePostV1SimulateCreditAuthorizationAdvice<
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
                Awaited<ReturnType<typeof client.v1.simulate.credit_authorization_advice.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.credit_authorization_advice.$post>,
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
  const mutationDefaults = getPostV1SimulateCreditAuthorizationAdviceMutationOptions<
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

export function getPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleMutationKey() {
  return [
    'v1',
    '/v1/simulate/event_subscriptions/:event_subscription_token/send_example',
    'POST',
  ] as const
}

export function getPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.simulate.event_subscriptions[':event_subscription_token'].send_example.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExample<
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
                    (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
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
  const mutationDefaults =
    getPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleMutationOptions<
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

export function getPostV1SimulatePaymentsReceiptMutationKey() {
  return ['v1', '/v1/simulate/payments/receipt', 'POST'] as const
}

export function getPostV1SimulatePaymentsReceiptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.payments.receipt.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.payments.receipt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulatePaymentsReceiptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.payments.receipt.$post>) {
      return parseResponse(client.v1.simulate.payments.receipt.$post(args, options))
    },
  })
}

export function usePostV1SimulatePaymentsReceipt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.simulate.payments.receipt.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.payments.receipt.$post>,
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
  const mutationDefaults = getPostV1SimulatePaymentsReceiptMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulatePaymentsReleaseMutationKey() {
  return ['v1', '/v1/simulate/payments/release', 'POST'] as const
}

export function getPostV1SimulatePaymentsReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.payments.release.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.payments.release.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulatePaymentsReleaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.payments.release.$post>) {
      return parseResponse(client.v1.simulate.payments.release.$post(args, options))
    },
  })
}

export function usePostV1SimulatePaymentsRelease<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.simulate.payments.release.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.payments.release.$post>,
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
  const mutationDefaults = getPostV1SimulatePaymentsReleaseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulatePaymentsReturnMutationKey() {
  return ['v1', '/v1/simulate/payments/return', 'POST'] as const
}

export function getPostV1SimulatePaymentsReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.payments.return.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.payments.return.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulatePaymentsReturnMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.payments.return.$post>) {
      return parseResponse(client.v1.simulate.payments.return.$post(args, options))
    },
  })
}

export function usePostV1SimulatePaymentsReturn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.simulate.payments.return.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.payments.return.$post>,
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
  const mutationDefaults = getPostV1SimulatePaymentsReturnMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulatePaymentsPaymentTokenActionMutationKey() {
  return ['v1', '/v1/simulate/payments/:payment_token/action', 'POST'] as const
}

export function getPostV1SimulatePaymentsPaymentTokenActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.simulate.payments)[':payment_token']['action']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.simulate.payments)[':payment_token']['action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulatePaymentsPaymentTokenActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.simulate.payments)[':payment_token']['action']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.simulate.payments[':payment_token'].action.$post(args, options),
      )
    },
  })
}

export function usePostV1SimulatePaymentsPaymentTokenAction<
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
                    (typeof client.v1.simulate.payments)[':payment_token']['action']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.simulate.payments)[':payment_token']['action']['$post']
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
  const mutationDefaults = getPostV1SimulatePaymentsPaymentTokenActionMutationOptions<
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

export function getPostV1SimulateReturnMutationKey() {
  return ['v1', '/v1/simulate/return', 'POST'] as const
}

export function getPostV1SimulateReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.return.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.return.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateReturnMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.return.$post>) {
      return parseResponse(client.v1.simulate.return.$post(args, options))
    },
  })
}

export function usePostV1SimulateReturn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.return.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.return.$post>,
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
  const mutationDefaults = getPostV1SimulateReturnMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulateReturnReversalMutationKey() {
  return ['v1', '/v1/simulate/return_reversal', 'POST'] as const
}

export function getPostV1SimulateReturnReversalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.return_reversal.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.return_reversal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateReturnReversalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.return_reversal.$post>) {
      return parseResponse(client.v1.simulate.return_reversal.$post(args, options))
    },
  })
}

export function usePostV1SimulateReturnReversal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.simulate.return_reversal.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.return_reversal.$post>,
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
  const mutationDefaults = getPostV1SimulateReturnReversalMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulateTokenizationsMutationKey() {
  return ['v1', '/v1/simulate/tokenizations', 'POST'] as const
}

export function getPostV1SimulateTokenizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.tokenizations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.tokenizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateTokenizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.tokenizations.$post>) {
      return parseResponse(client.v1.simulate.tokenizations.$post(args, options))
    },
  })
}

export function usePostV1SimulateTokenizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.simulate.tokenizations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.tokenizations.$post>,
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
  const mutationDefaults = getPostV1SimulateTokenizationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulateVoidMutationKey() {
  return ['v1', '/v1/simulate/void', 'POST'] as const
}

export function getPostV1SimulateVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.void.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.void.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateVoidMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.simulate.void.$post>) {
      return parseResponse(client.v1.simulate.void.$post(args, options))
    },
  })
}

export function usePostV1SimulateVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.void.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.void.$post>,
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
  const mutationDefaults = getPostV1SimulateVoidMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SimulateAccountHoldersEnrollmentReviewMutationKey() {
  return ['v1', '/v1/simulate/account_holders/enrollment_review', 'POST'] as const
}

export function getPostV1SimulateAccountHoldersEnrollmentReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.simulate.account_holders.enrollment_review.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.account_holders.enrollment_review.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateAccountHoldersEnrollmentReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.simulate.account_holders.enrollment_review.$post>,
    ) {
      return parseResponse(
        client.v1.simulate.account_holders.enrollment_review.$post(args, options),
      )
    },
  })
}

export function usePostV1SimulateAccountHoldersEnrollmentReview<
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
                  ReturnType<typeof client.v1.simulate.account_holders.enrollment_review.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.simulate.account_holders.enrollment_review.$post>,
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
  const mutationDefaults = getPostV1SimulateAccountHoldersEnrollmentReviewMutationOptions<
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

export function getPostV1SimulateAccountHoldersEnrollmentDocumentReviewMutationKey() {
  return ['v1', '/v1/simulate/account_holders/enrollment_document_review', 'POST'] as const
}

export function getPostV1SimulateAccountHoldersEnrollmentDocumentReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.simulate.account_holders.enrollment_document_review.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.simulate.account_holders.enrollment_document_review.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SimulateAccountHoldersEnrollmentDocumentReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.simulate.account_holders.enrollment_document_review.$post
      >,
    ) {
      return parseResponse(
        client.v1.simulate.account_holders.enrollment_document_review.$post(args, options),
      )
    },
  })
}

export function usePostV1SimulateAccountHoldersEnrollmentDocumentReview<
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
                    typeof client.v1.simulate.account_holders.enrollment_document_review.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.v1.simulate.account_holders.enrollment_document_review.$post
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
  const mutationDefaults = getPostV1SimulateAccountHoldersEnrollmentDocumentReviewMutationOptions<
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

export function getV1StatusQueryKey() {
  return ['v1', '/v1/status'] as const
}

export function getV1StatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1StatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Status<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>
          >,
          ReturnType<typeof getV1StatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1StatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1StatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ThreeDsAuthenticationSimulateMutationKey() {
  return ['v1', '/v1/three_ds_authentication/simulate', 'POST'] as const
}

export function getPostV1ThreeDsAuthenticationSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.three_ds_authentication.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.three_ds_authentication.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ThreeDsAuthenticationSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.three_ds_authentication.simulate.$post>,
    ) {
      return parseResponse(client.v1.three_ds_authentication.simulate.$post(args, options))
    },
  })
}

export function usePostV1ThreeDsAuthenticationSimulate<
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
                Awaited<ReturnType<typeof client.v1.three_ds_authentication.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.three_ds_authentication.simulate.$post>,
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
  const mutationDefaults = getPostV1ThreeDsAuthenticationSimulateMutationOptions<
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

export function getPostV1ThreeDsDecisioningSimulateEnterOtpMutationKey() {
  return ['v1', '/v1/three_ds_decisioning/simulate/enter_otp', 'POST'] as const
}

export function getPostV1ThreeDsDecisioningSimulateEnterOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ThreeDsDecisioningSimulateEnterOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>,
    ) {
      return parseResponse(client.v1.three_ds_decisioning.simulate.enter_otp.$post(args, options))
    },
  })
}

export function usePostV1ThreeDsDecisioningSimulateEnterOtp<
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
                Awaited<ReturnType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>,
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
  const mutationDefaults = getPostV1ThreeDsDecisioningSimulateEnterOtpMutationOptions<
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

export function getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/three_ds_authentication/:three_ds_authentication_token',
    toValue(args),
  ] as const
}

export function getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.three_ds_authentication[':three_ds_authentication_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ThreeDsAuthenticationThreeDsAuthenticationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
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
                    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
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
                    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryKey>
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
              (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.three_ds_authentication[':three_ds_authentication_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ThreeDsDecisioningSecretQueryKey() {
  return ['v1', '/v1/three_ds_decisioning/secret'] as const
}

export function getV1ThreeDsDecisioningSecretQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ThreeDsDecisioningSecretQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.three_ds_decisioning.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ThreeDsDecisioningSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ThreeDsDecisioningSecretQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ThreeDsDecisioningSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ThreeDsDecisioningSecretQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.three_ds_decisioning.secret.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ThreeDsDecisioningSecretRotateMutationKey() {
  return ['v1', '/v1/three_ds_decisioning/secret/rotate', 'POST'] as const
}

export function getPostV1ThreeDsDecisioningSecretRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.rotate.$post>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1ThreeDsDecisioningSecretRotateMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.three_ds_decisioning.secret.rotate.$post(undefined, options))
    },
  })
}

export function usePostV1ThreeDsDecisioningSecretRotate<
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
                  Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.rotate.$post>>
                >
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostV1ThreeDsDecisioningSecretRotateMutationOptions<
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

export function getPostV1ThreeDsDecisioningChallengeResponseMutationKey() {
  return ['v1', '/v1/three_ds_decisioning/challenge_response', 'POST'] as const
}

export function getPostV1ThreeDsDecisioningChallengeResponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.three_ds_decisioning.challenge_response.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.three_ds_decisioning.challenge_response.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ThreeDsDecisioningChallengeResponseMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.three_ds_decisioning.challenge_response.$post>,
    ) {
      return parseResponse(client.v1.three_ds_decisioning.challenge_response.$post(args, options))
    },
  })
}

export function usePostV1ThreeDsDecisioningChallengeResponse<
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
                Awaited<ReturnType<typeof client.v1.three_ds_decisioning.challenge_response.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.three_ds_decisioning.challenge_response.$post>,
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
  const mutationDefaults = getPostV1ThreeDsDecisioningChallengeResponseMutationOptions<
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

export function getV1TokenizationDecisioningSecretQueryKey() {
  return ['v1', '/v1/tokenization_decisioning/secret'] as const
}

export function getV1TokenizationDecisioningSecretQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TokenizationDecisioningSecretQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokenization_decisioning.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TokenizationDecisioningSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
              >
            >
          >,
          ReturnType<typeof getV1TokenizationDecisioningSecretQueryKey>
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
          Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokenizationDecisioningSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TokenizationDecisioningSecretQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokenization_decisioning.secret.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TokenizationDecisioningSecretRotateMutationKey() {
  return ['v1', '/v1/tokenization_decisioning/secret/rotate', 'POST'] as const
}

export function getPostV1TokenizationDecisioningSecretRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.rotate.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationDecisioningSecretRotateMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.tokenization_decisioning.secret.rotate.$post(undefined, options),
      )
    },
  })
}

export function usePostV1TokenizationDecisioningSecretRotate<
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
                Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.rotate.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostV1TokenizationDecisioningSecretRotateMutationOptions<
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

export function getPostV1CardsCardTokenTokenizationsMutationKey() {
  return ['v1', '/v1/cards/:card_token/tokenizations', 'POST'] as const
}

export function getPostV1CardsCardTokenTokenizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardTokenTokenizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':card_token'].tokenizations.$post(args, options))
    },
  })
}

export function usePostV1CardsCardTokenTokenizations<
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
                  ReturnType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardTokenTokenizationsMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenSelectTfaMethodMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/select_tfa_method', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenSelectTfaMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenSelectTfaMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].select_tfa_method.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenSelectTfaMethod<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
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
  const mutationDefaults = getPostV1TokenizationsTokenizationTokenSelectTfaMethodMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenSubmitTfaMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/submit_tfa', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenSubmitTfaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenSubmitTfaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].submit_tfa.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenSubmitTfa<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
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
  const mutationDefaults = getPostV1TokenizationsTokenizationTokenSubmitTfaMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenPaymentCredentialsMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/payment_credentials', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenPaymentCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenPaymentCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].payment_credentials.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenPaymentCredentials<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
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
  const mutationDefaults = getPostV1TokenizationsTokenizationTokenPaymentCredentialsMutationOptions<
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

export function getV1TokenizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokenizations.$get>>,
) {
  return ['v1', '/v1/tokenizations', toValue(args)] as const
}

export function getV1TokenizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokenizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokenizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokenizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Tokenizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokenizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>
            >
          >,
          ReturnType<typeof getV1TokenizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokenizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokenizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokenizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TokenizationsTokenizationTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>
  >,
) {
  return ['v1', '/v1/tokenizations/:tokenization_token', toValue(args)] as const
}

export function getV1TokenizationsTokenizationTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokenizationsTokenizationTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TokenizationsTokenizationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TokenizationsTokenizationTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokenizationsTokenizationTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokenizationsTokenizationTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokenizations[':tokenization_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TokenizationsTokenizationTokenPauseMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/pause', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].pause.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenPause<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']
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
  const mutationDefaults = getPostV1TokenizationsTokenizationTokenPauseMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenUnpauseMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/unpause', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].unpause.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenUnpause<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']
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
  const mutationDefaults = getPostV1TokenizationsTokenizationTokenUnpauseMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenDeactivateMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/deactivate', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].deactivate.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenDeactivate<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
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
  const mutationDefaults = getPostV1TokenizationsTokenizationTokenDeactivateMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenActivateMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/activate', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].activate.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenActivate<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']
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
  const mutationDefaults = getPostV1TokenizationsTokenizationTokenActivateMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenResendActivationCodeMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/resend_activation_code', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenResendActivationCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenResendActivationCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].resend_activation_code.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenResendActivationCode<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
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
  const mutationDefaults =
    getPostV1TokenizationsTokenizationTokenResendActivationCodeMutationOptions<
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

export function getPostV1TokenizationsTokenizationTokenUpdateDigitalCardArtMutationKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/update_digital_card_art', 'POST'] as const
}

export function getPostV1TokenizationsTokenizationTokenUpdateDigitalCardArtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizationsTokenizationTokenUpdateDigitalCardArtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].update_digital_card_art.$post(args, options),
      )
    },
  })
}

export function usePostV1TokenizationsTokenizationTokenUpdateDigitalCardArt<
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
                    (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
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
  const mutationDefaults =
    getPostV1TokenizationsTokenizationTokenUpdateDigitalCardArtMutationOptions<
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

export function getV1TransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transactions.$get>>,
) {
  return ['v1', '/v1/transactions', toValue(args)] as const
}

export function getV1TransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Transactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>
            >
          >,
          ReturnType<typeof getV1TransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionsTransactionTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>
  >,
) {
  return ['v1', '/v1/transactions/:transaction_token', toValue(args)] as const
}

export function getV1TransactionsTransactionTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsTransactionTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions[':transaction_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionsTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TransactionsTransactionTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsTransactionTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionsTransactionTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions[':transaction_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionMonitoringCasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>>,
) {
  return ['v1', '/v1/transaction_monitoring/cases', toValue(args)] as const
}

export function getV1TransactionMonitoringCasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringCasesQueryKey>
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
          Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionMonitoringCasesCaseTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token', toValue(args)] as const
}

export function getV1TransactionMonitoringCasesCaseTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringCasesCaseToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
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
                  ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenQueryKey>
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
            ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1TransactionMonitoringCasesCaseTokenMutationKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token', 'PATCH'] as const
}

export function getPatchV1TransactionMonitoringCasesCaseTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1TransactionMonitoringCasesCaseTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1TransactionMonitoringCasesCaseToken<
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']
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
  const mutationDefaults = getPatchV1TransactionMonitoringCasesCaseTokenMutationOptions<
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

export function getV1TransactionMonitoringCasesCaseTokenActivityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
    >
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/activity', toValue(args)] as const
}

export function getV1TransactionMonitoringCasesCaseTokenActivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringCasesCaseTokenActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenActivityQueryKey>
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
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionMonitoringCasesCaseTokenTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
    >
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/transactions', toValue(args)] as const
}

export function getV1TransactionMonitoringCasesCaseTokenTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringCasesCaseTokenTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenTransactionsQueryKey>
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
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionMonitoringCasesCaseTokenCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
    >
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/cards', toValue(args)] as const
}

export function getV1TransactionMonitoringCasesCaseTokenCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringCasesCaseTokenCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenCardsQueryKey>
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
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TransactionMonitoringCasesCaseTokenCommentsMutationKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/comments', 'POST'] as const
}

export function getPostV1TransactionMonitoringCasesCaseTokenCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TransactionMonitoringCasesCaseTokenCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].comments.$post(args, options),
      )
    },
  })
}

export function usePostV1TransactionMonitoringCasesCaseTokenComments<
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
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
  const mutationDefaults = getPostV1TransactionMonitoringCasesCaseTokenCommentsMutationOptions<
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

export function getDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationKey() {
  return [
    'v1',
    '/v1/transaction_monitoring/cases/:case_token/comments/:comment_token',
    'DELETE',
  ] as const
}

export function getDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].comments[':comment_token'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentToken<
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
                    ReturnType<
                      (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
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
  const mutationDefaults =
    getDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationOptions<
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

export function getPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationKey() {
  return [
    'v1',
    '/v1/transaction_monitoring/cases/:case_token/comments/:comment_token',
    'PATCH',
  ] as const
}

export function getPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].comments[':comment_token'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1TransactionMonitoringCasesCaseTokenCommentsCommentToken<
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
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
  const mutationDefaults =
    getPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationOptions<
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

export function getV1TransactionMonitoringCasesCaseTokenFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
    >
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files', toValue(args)] as const
}

export function getV1TransactionMonitoringCasesCaseTokenFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringCasesCaseTokenFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenFilesQueryKey>
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
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TransactionMonitoringCasesCaseTokenFilesMutationKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files', 'POST'] as const
}

export function getPostV1TransactionMonitoringCasesCaseTokenFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TransactionMonitoringCasesCaseTokenFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].files.$post(args, options),
      )
    },
  })
}

export function usePostV1TransactionMonitoringCasesCaseTokenFiles<
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
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
  const mutationDefaults = getPostV1TransactionMonitoringCasesCaseTokenFilesMutationOptions<
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

export function getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/transaction_monitoring/cases/:case_token/files/:file_token',
    toValue(args),
  ] as const
}

export function getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1TransactionMonitoringCasesCaseTokenFilesFileToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
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
                    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryKey>
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
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenMutationKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files/:file_token', 'DELETE'] as const
}

export function getDeleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1TransactionMonitoringCasesCaseTokenFilesFileToken<
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
                    ReturnType<
                      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
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
  const mutationDefaults =
    getDeleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenMutationOptions<
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

export function getV1TransactionMonitoringQueuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>>,
) {
  return ['v1', '/v1/transaction_monitoring/queues', toValue(args)] as const
}

export function getV1TransactionMonitoringQueuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringQueuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.queues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringQueuesQueryKey>
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
          Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringQueuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.queues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TransactionMonitoringQueuesMutationKey() {
  return ['v1', '/v1/transaction_monitoring/queues', 'POST'] as const
}

export function getPostV1TransactionMonitoringQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.transaction_monitoring.queues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TransactionMonitoringQueuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$post>) {
      return parseResponse(client.v1.transaction_monitoring.queues.$post(args, options))
    },
  })
}

export function usePostV1TransactionMonitoringQueues<
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
                Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.transaction_monitoring.queues.$post>,
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
  const mutationDefaults = getPostV1TransactionMonitoringQueuesMutationOptions<
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

export function getV1TransactionMonitoringQueuesQueueTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
  >,
) {
  return ['v1', '/v1/transaction_monitoring/queues/:queue_token', toValue(args)] as const
}

export function getV1TransactionMonitoringQueuesQueueTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionMonitoringQueuesQueueTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transaction_monitoring.queues[':queue_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionMonitoringQueuesQueueToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
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
                    (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']
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
                    (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TransactionMonitoringQueuesQueueTokenQueryKey>
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
            ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionMonitoringQueuesQueueTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionMonitoringQueuesQueueTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transaction_monitoring.queues[':queue_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1TransactionMonitoringQueuesQueueTokenMutationKey() {
  return ['v1', '/v1/transaction_monitoring/queues/:queue_token', 'DELETE'] as const
}

export function getDeleteV1TransactionMonitoringQueuesQueueTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TransactionMonitoringQueuesQueueTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.queues[':queue_token'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1TransactionMonitoringQueuesQueueToken<
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
                    ReturnType<
                      (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']
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
  const mutationDefaults = getDeleteV1TransactionMonitoringQueuesQueueTokenMutationOptions<
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

export function getPatchV1TransactionMonitoringQueuesQueueTokenMutationKey() {
  return ['v1', '/v1/transaction_monitoring/queues/:queue_token', 'PATCH'] as const
}

export function getPatchV1TransactionMonitoringQueuesQueueTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1TransactionMonitoringQueuesQueueTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.transaction_monitoring.queues[':queue_token'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1TransactionMonitoringQueuesQueueToken<
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
                    (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']
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
  const mutationDefaults = getPatchV1TransactionMonitoringQueuesQueueTokenMutationOptions<
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

export function getPostV1TransferMutationKey() {
  return ['v1', '/v1/transfer', 'POST'] as const
}

export function getPostV1TransferMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.transfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.transfer.$post>) {
      return parseResponse(client.v1.transfer.$post(args, options))
    },
  })
}

export function usePostV1Transfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.transfer.$post>,
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
  const mutationDefaults = getPostV1TransferMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TransferLimitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transfer_limits.$get>>,
) {
  return ['v1', '/v1/transfer_limits', toValue(args)] as const
}

export function getV1TransferLimitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transfer_limits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransferLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transfer_limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransferLimits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transfer_limits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>
            >
          >,
          ReturnType<typeof getV1TransferLimitsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransferLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransferLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transfer_limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BookTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.book_transfers.$get>>,
) {
  return ['v1', '/v1/book_transfers', toValue(args)] as const
}

export function getV1BookTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.book_transfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BookTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.book_transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BookTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.book_transfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>
            >
          >,
          ReturnType<typeof getV1BookTransfersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BookTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BookTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.book_transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BookTransfersMutationKey() {
  return ['v1', '/v1/book_transfers', 'POST'] as const
}

export function getPostV1BookTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.book_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BookTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.book_transfers.$post>) {
      return parseResponse(client.v1.book_transfers.$post(args, options))
    },
  })
}

export function usePostV1BookTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.book_transfers.$post>,
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
  const mutationDefaults = getPostV1BookTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getV1BookTransfersBookTransferTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>
  >,
) {
  return ['v1', '/v1/book_transfers/:book_transfer_token', toValue(args)] as const
}

export function getV1BookTransfersBookTransferTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BookTransfersBookTransferTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.book_transfers[':book_transfer_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BookTransfersBookTransferToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>
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
                  ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BookTransfersBookTransferTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BookTransfersBookTransferTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BookTransfersBookTransferTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.book_transfers[':book_transfer_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BookTransfersBookTransferTokenRetryMutationKey() {
  return ['v1', '/v1/book_transfers/:book_transfer_token/retry', 'POST'] as const
}

export function getPostV1BookTransfersBookTransferTokenRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BookTransfersBookTransferTokenRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.book_transfers[':book_transfer_token'].retry.$post(args, options),
      )
    },
  })
}

export function usePostV1BookTransfersBookTransferTokenRetry<
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
                    (typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']
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
  const mutationDefaults = getPostV1BookTransfersBookTransferTokenRetryMutationOptions<
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

export function getPostV1BookTransfersBookTransferTokenReverseMutationKey() {
  return ['v1', '/v1/book_transfers/:book_transfer_token/reverse', 'POST'] as const
}

export function getPostV1BookTransfersBookTransferTokenReverseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BookTransfersBookTransferTokenReverseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.book_transfers[':book_transfer_token'].reverse.$post(args, options),
      )
    },
  })
}

export function usePostV1BookTransfersBookTransferTokenReverse<
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
                    (typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']
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
  const mutationDefaults = getPostV1BookTransfersBookTransferTokenReverseMutationOptions<
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

export function getV1ExternalPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.external_payments.$get>>,
) {
  return ['v1', '/v1/external_payments', toValue(args)] as const
}

export function getV1ExternalPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.external_payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExternalPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.external_payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExternalPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.external_payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>
            >
          >,
          ReturnType<typeof getV1ExternalPaymentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExternalPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExternalPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.external_payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ExternalPaymentsMutationKey() {
  return ['v1', '/v1/external_payments', 'POST'] as const
}

export function getPostV1ExternalPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.external_payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.external_payments.$post>) {
      return parseResponse(client.v1.external_payments.$post(args, options))
    },
  })
}

export function usePostV1ExternalPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.external_payments.$post>,
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
  const mutationDefaults = getPostV1ExternalPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ExternalPaymentsExternalPaymentTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
  >,
) {
  return ['v1', '/v1/external_payments/:external_payment_token', toValue(args)] as const
}

export function getV1ExternalPaymentsExternalPaymentTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExternalPaymentsExternalPaymentTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.external_payments[':external_payment_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExternalPaymentsExternalPaymentToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
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
                    (typeof client.v1.external_payments)[':external_payment_token']['$get']
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
                    (typeof client.v1.external_payments)[':external_payment_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ExternalPaymentsExternalPaymentTokenQueryKey>
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
            ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExternalPaymentsExternalPaymentTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExternalPaymentsExternalPaymentTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.external_payments[':external_payment_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ExternalPaymentsExternalPaymentTokenSettleMutationKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/settle', 'POST'] as const
}

export function getPostV1ExternalPaymentsExternalPaymentTokenSettleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalPaymentsExternalPaymentTokenSettleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_payments[':external_payment_token'].settle.$post(args, options),
      )
    },
  })
}

export function usePostV1ExternalPaymentsExternalPaymentTokenSettle<
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
                    (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
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
  const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenSettleMutationOptions<
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

export function getPostV1ExternalPaymentsExternalPaymentTokenReleaseMutationKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/release', 'POST'] as const
}

export function getPostV1ExternalPaymentsExternalPaymentTokenReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalPaymentsExternalPaymentTokenReleaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_payments[':external_payment_token'].release.$post(args, options),
      )
    },
  })
}

export function usePostV1ExternalPaymentsExternalPaymentTokenRelease<
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
                    (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
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
  const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenReleaseMutationOptions<
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

export function getPostV1ExternalPaymentsExternalPaymentTokenCancelMutationKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/cancel', 'POST'] as const
}

export function getPostV1ExternalPaymentsExternalPaymentTokenCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalPaymentsExternalPaymentTokenCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_payments[':external_payment_token'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV1ExternalPaymentsExternalPaymentTokenCancel<
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
                    (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
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
  const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenCancelMutationOptions<
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

export function getPostV1ExternalPaymentsExternalPaymentTokenReverseMutationKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/reverse', 'POST'] as const
}

export function getPostV1ExternalPaymentsExternalPaymentTokenReverseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExternalPaymentsExternalPaymentTokenReverseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.external_payments[':external_payment_token'].reverse.$post(args, options),
      )
    },
  })
}

export function usePostV1ExternalPaymentsExternalPaymentTokenReverse<
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
                    (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
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
  const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenReverseMutationOptions<
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

export function getV1ManagementOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.management_operations.$get>>,
) {
  return ['v1', '/v1/management_operations', toValue(args)] as const
}

export function getV1ManagementOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.management_operations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ManagementOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.management_operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ManagementOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.management_operations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
            >
          >,
          ReturnType<typeof getV1ManagementOperationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ManagementOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ManagementOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.management_operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ManagementOperationsMutationKey() {
  return ['v1', '/v1/management_operations', 'POST'] as const
}

export function getPostV1ManagementOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.management_operations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ManagementOperationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.management_operations.$post>) {
      return parseResponse(client.v1.management_operations.$post(args, options))
    },
  })
}

export function usePostV1ManagementOperations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.management_operations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.management_operations.$post>,
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
  const mutationDefaults = getPostV1ManagementOperationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ManagementOperationsManagementOperationTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.management_operations)[':management_operation_token']['$get']
    >
  >,
) {
  return ['v1', '/v1/management_operations/:management_operation_token', toValue(args)] as const
}

export function getV1ManagementOperationsManagementOperationTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.management_operations)[':management_operation_token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ManagementOperationsManagementOperationTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.management_operations[':management_operation_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ManagementOperationsManagementOperationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.management_operations)[':management_operation_token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.management_operations)[':management_operation_token']['$get']
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
                    (typeof client.v1.management_operations)[':management_operation_token']['$get']
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
                    (typeof client.v1.management_operations)[':management_operation_token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ManagementOperationsManagementOperationTokenQueryKey>
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
              (typeof client.v1.management_operations)[':management_operation_token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ManagementOperationsManagementOperationTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ManagementOperationsManagementOperationTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.management_operations[':management_operation_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ManagementOperationsManagementOperationTokenReverseMutationKey() {
  return ['v1', '/v1/management_operations/:management_operation_token/reverse', 'POST'] as const
}

export function getPostV1ManagementOperationsManagementOperationTokenReverseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ManagementOperationsManagementOperationTokenReverseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.management_operations[':management_operation_token'].reverse.$post(args, options),
      )
    },
  })
}

export function usePostV1ManagementOperationsManagementOperationTokenReverse<
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
                    (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
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
  const mutationDefaults =
    getPostV1ManagementOperationsManagementOperationTokenReverseMutationOptions<
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

export function getV1NetworkProgramsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.network_programs.$get>>,
) {
  return ['v1', '/v1/network_programs', toValue(args)] as const
}

export function getV1NetworkProgramsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.network_programs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NetworkProgramsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.network_programs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NetworkPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.network_programs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>
            >
          >,
          ReturnType<typeof getV1NetworkProgramsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NetworkProgramsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NetworkProgramsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.network_programs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NetworkProgramsNetworkProgramTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
  >,
) {
  return ['v1', '/v1/network_programs/:network_program_token', toValue(args)] as const
}

export function getV1NetworkProgramsNetworkProgramTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NetworkProgramsNetworkProgramTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.network_programs[':network_program_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NetworkProgramsNetworkProgramToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
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
                  ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1NetworkProgramsNetworkProgramTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NetworkProgramsNetworkProgramTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NetworkProgramsNetworkProgramTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.network_programs[':network_program_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FundingEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.funding_events.$get>>,
) {
  return ['v1', '/v1/funding_events', toValue(args)] as const
}

export function getV1FundingEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.funding_events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FundingEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.funding_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FundingEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.funding_events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>
            >
          >,
          ReturnType<typeof getV1FundingEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FundingEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FundingEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.funding_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FundingEventsFundingEventTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>
  >,
) {
  return ['v1', '/v1/funding_events/:funding_event_token', toValue(args)] as const
}

export function getV1FundingEventsFundingEventTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FundingEventsFundingEventTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.funding_events[':funding_event_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FundingEventsFundingEventToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>
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
                  ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1FundingEventsFundingEventTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FundingEventsFundingEventTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FundingEventsFundingEventTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.funding_events[':funding_event_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FundingEventsFundingEventTokenDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['details']['$get']>
  >,
) {
  return ['v1', '/v1/funding_events/:funding_event_token/details', toValue(args)] as const
}

export function getV1FundingEventsFundingEventTokenDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FundingEventsFundingEventTokenDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.funding_events[':funding_event_token'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FundingEventsFundingEventTokenDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['details']['$get']>
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
                    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
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
                    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FundingEventsFundingEventTokenDetailsQueryKey>
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
            ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['details']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FundingEventsFundingEventTokenDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FundingEventsFundingEventTokenDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.funding_events[':funding_event_token'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DisputesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disputes.$get>>,
) {
  return ['v2', '/v2/disputes', toValue(args)] as const
}

export function getV2DisputesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disputes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisputesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disputes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Disputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disputes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
          >,
          ReturnType<typeof getV2DisputesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DisputesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisputesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disputes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DisputesDisputeTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>>,
) {
  return ['v2', '/v2/disputes/:dispute_token', toValue(args)] as const
}

export function getV2DisputesDisputeTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisputesDisputeTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disputes[':dispute_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DisputesDisputeToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DisputesDisputeTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisputesDisputeTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisputesDisputeTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disputes[':dispute_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
